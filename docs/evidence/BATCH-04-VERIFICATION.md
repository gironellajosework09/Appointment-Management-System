# Batch 04 Verification Evidence — Service Catalog Management

| Field | Value |
|---|---|
| Recorded | 2026-11-19; verification closure 2026-11-20 |
| Decision | [D-124](../decisions/DECISION_REGISTER.md#d-124--batch-04-implementation-authorization-and-service-catalog-decision-dispositions) |
| Plan | [BATCH-04-PLAN.md](../plans/BATCH-04-PLAN.md) |
| Risk class / environment | High / isolated synthetic-local only |
| Branch / HEAD at verification | `feature/batch-04-service-catalog` / `38659f9` (uncommitted working tree) |
| Disposition | Verification complete for the synthetic-local scope; **Product Owner acceptance pending** |

The [Batch 03 acceptance record](BATCH-03-ACCEPTANCE.md) is preserved unchanged. Results below marked *independently verified* were produced during this verification closure; prior Batch 03 results are historical and are not re-claimed here.

## 1. Scope verified

Service detail view, service-name editing, `service.update` authorization, transactional `service.updated` evidence, listing links, HTTP failure paths and automated tests. No lifecycle, status, activation, deletion, archive, retention or schema change was implemented.

## 2. Target identity and safeguards

Before any data access, the configured connection and the live server were checked:

| Check | Observed |
|---|---|
| Configured environment | `APP_ENV=testing` → `127.0.0.1:23372`, database `itakda_test_synthetic` |
| Live database | `itakda_test_synthetic` |
| Live server hostname | `3720417d0b4d` (matches `SyntheticDatabaseGuard` testing expectation) |
| Application account | `app_test@%` |
| Server version | MariaDB 11.8.9 (container `itakda-b03-test`, image `d36f18d65a04`) |
| Other database containers | `itakda-b03-dev` on `23371` only; both are local synthetic containers |
| Guard | `SyntheticDatabaseGuard::assertTarget()` passes inside the test runs |

No CEAP, production, staging or customer database was contacted. Credentials were mounted read-only from a directory outside the workspace and are not recorded in the repository or this document. Coverage of the irrelevant-target cases remains with the existing `SyntheticDatabaseGuardTest` unit tests.

Current application-account privileges on the synthetic database (verified with `SHOW GRANTS`): `SELECT, INSERT, UPDATE` on `services`; `INSERT` on `audit_events`; `SELECT, INSERT, UPDATE` on `identity_users`; `SELECT, INSERT, UPDATE, DELETE` on cache/session tables. The account cannot read `audit_events`, so evidence assertions use the migration account. No privilege was broadened for test convenience.

## 3. Commands and results (independently verified)

Run in Docker image `itakda-php84-test` (PHP 8.4.27, `pdo_mysql`), `--network host`, against the synthetic test container. The credential directory is mounted read-only at `/creds`.

```powershell
# Database-free unit suite
docker run --rm -v "<repo>:/app" -w /app itakda-php84-test `
  php vendor/bin/phpunit tests/Unit

# Full Batch 04 suite, including opt-in database and HTTP tests
docker run --rm --network host -v "<repo>:/app" -v "<credential-dir>:/creds:ro" -w /app `
  -e ITAKDA_RUN_SYNTHETIC_DB_TESTS=1 -e ITAKDA_SYNTHETIC_DB_CREDENTIAL_DIR=/creds `
  -e ITAKDA_DB_CREDENTIAL_FILE=/creds/app.cnf `
  itakda-php84-test php vendor/bin/phpunit --testsuite Batch04

# Same suite without the opt-in (checks graceful skipping)
docker run --rm -v "<repo>:/app" -w /app itakda-php84-test `
  php vendor/bin/phpunit --testsuite Batch04
```

| Run | Result |
|---|---|
| `tests/Unit` | **81 tests, 153 assertions, 0 failures, 0 errors, 0 notices** |
| `--testsuite Batch04` with synthetic DB | **44 tests, 106 assertions, 0 failures, 0 errors, 0 notices** |
| `--testsuite Batch04` without opt-in | 44 tests, 46 assertions, **16 skipped**, 0 failures |
| `tests/Feature/Batch03ServiceDatabaseTest.php` | 6 tests, 16 assertions, 0 failures (within the suite) |
| `tests/Feature/Batch04HttpTest.php` | 10 tests, 42 assertions, 0 failures (within the suite) |
| `tests/Unit/FoundationContextTest.php` | 10 tests, 10 assertions, 0 failures |

The Foundation HTTP test (`tests/Feature/FoundationHttpTest.php`) is not run here: it spawns the host PHP binary with Windows-specific environment and the local PHP is 8.2. This remains an environment limitation, not a Batch 04 regression.

## 4. Database integration coverage

- Service creation persists the row and `service.created` evidence with actor, installation and outcome.
- Name update persists the row and exactly one `service.updated` event with the authenticated actor id.
- A forced evidence-insert failure during update leaves the previous name in place and writes no evidence event (transactional rollback).
- A forced evidence-insert failure during creation leaves no service row.
- A service owned by another installation cannot be read or updated (`ModelNotFoundException`, HTTP 404).
- Listing returns only the current installation's services.

## 5. HTTP regression coverage

`tests/Feature/Batch04HttpTest.php` drives the real middleware, gate, form request, controller, session and database stack with a synthetic administrator. All ten pass.

| Test | Verifies |
|---|---|
| `test_unauthenticated_catalog_request_is_refused` | No session → 503, access unavailable |
| `test_authenticated_user_without_mfa_session_is_refused` | Authenticated but unverified → 503 |
| `test_mfa_session_for_a_different_identity_is_refused` | MFA flag bound to another id → 503 |
| `test_administrator_without_a_confirmed_factor_is_refused` | No confirmed TOTP → 503 |
| `test_authorized_administrator_can_view_the_installation_catalog` | 200 for list/detail/edit; links and prefilled value present |
| `test_service_from_another_installation_is_not_found` | Foreign show/edit/update → 404, no cross-installation write |
| `test_missing_service_returns_not_found` | Missing numeric id → 404 |
| `test_unsupported_update_fields_are_rejected_without_a_change` | Extra field → redirect with error, name unchanged, no evidence |
| `test_successful_update_is_persisted_with_attributable_evidence` | Trimmed name saved, redirect to detail, one `service.updated` event |
| `test_unexpected_update_failure_shows_the_uncertain_outcome_without_a_change` | Forced audit failure → 503 uncertain view, name unchanged, no evidence |

Test-sensitivity check (red-green): temporarily replacing `DB::transaction(...)` in `UpdateService` with a non-transactional call made `test_unexpected_update_failure_shows_the_uncertain_outcome_without_a_change` fail on the persisted name; restoring the transaction made it pass. The rollback assertion therefore detects a real regression rather than passing trivially.

## 6. PHPUnit notices

The six mock-expectation notices came from `createStub()` calls with no expectations in `ServiceAuthorizationTest`, `CreateServiceGuardTest` and `UpdateServiceGuardTest`. They were resolved without global suppression:

- `ServiceAuthorizationTest` uses a real `App\Models\User` as the request user (the request only checks presence).
- The two guard tests now configure `expects(self::once())->method('getAuthIdentifier')->willReturn(null)`.

Result: 0 notices in both the unit and Batch 04 suite runs.

## 7. Working-tree hygiene

- No `.env` file exists; `.env.example` contains only `ITAKDA_CONTEXT`, `APP_ENV` and `APP_DEBUG` examples and is tracked unchanged.
- Secret scan of modified and untracked application, configuration, test and documentation files found no credentials, keys, database dumps or connection strings. Hits were limited to dependency descriptions, guard-test placeholder URLs (`mysql://other`) and documentation statements about secret handling.
- Ignored local artifacts (`.playwright-mcp/`, `tmp/`, `storage/logs/`, `node_modules/`, `vendor/`, `bootstrap/cache/`) are not part of the untracked set and would not be committed.
- `artisan` is a guarded local stub exposing only the provision command; it contains no secrets.
- `MEMORY.md` and `TASKS.md` end with a single newline and contain no trailing blank lines.
- 57 untracked source/test/documentation files and 22 modified tracked files make up the combined Batch 03/04 working tree. Nothing was staged, committed, pushed, merged or reset.
- Minor note: several modified files are LF where Git expects CRLF; Git reports normalization warnings but this is not a content or secret issue.

## 8. Acceptance-criteria status

| Criterion | Status |
|---|---|
| B04-AC-01 detail view authorization and installation denial | Met; HTTP tests cover unauthenticated, unverified, wrong-identity, foreign and missing-service cases |
| B04-AC-02 approved fields only | Met; name only, extra fields prohibited |
| B04-AC-03 validation feedback | Met; HTTP test asserts redirect with field error and no persisted change |
| B04-AC-04 attributable transactional evidence or atomic failure | Met; success and rollback proven at unit, service and HTTP levels |
| B04-AC-05 cross-installation blocked | Met; read and write denial verified |
| B04-AC-06 lifecycle limited to SVC-Q03 option A | Met by omission |
| B04-AC-07 SDD-023 patterns / rendered accessibility | Patterns reused; **rendered keyboard/assistive-technology/zoom verification deferred** |
| B04-AC-08 tests wired and counted | Met; `Batch04` suite registered, counts above |
| B04-AC-09 no deletion/retention behavior | Met by omission |
| B04-AC-10 synthetic guard fails closed | Guard passes for the verified target; irrelevant-target tests remain in the unit suite |

## 9. Limitations and carried-forward obligations

- No browser session was available, so rendered accessibility, keyboard, zoom and assistive-technology verification remains deferred under the Batch 03 timeline (deadline 2026-12-19; earlier triggers control).
- Foundation HTTP tests remain unrunnable in this environment (Windows-only, host PHP 8.2). `FoundationContextTest` passes.
- Carried-forward Batch 03 findings unchanged: CSS delivery unresolved, expired-TOTP endpoint verification partial, accessible MFA alternative deferred, independent qualified security/privacy review outstanding before production or operational reliance.
- The combined working tree was not reviewed line by line for every historical Batch 03 change during this closure; the previously recorded Batch 03 acceptance remains the basis for that scope.
- No deployment, CEAP access or non-synthetic database operation occurred.

## 10. Recommendation

Synthetic-local verification for Batch 04 is complete and the working tree is clean of detected secrets or stray artifacts. Recommend Product Owner acceptance **with the recorded limitations** (synthetic-local development only) and manual commit/push of the combined Batch 03/04 work. This record does not self-approve Batch 04 and does not establish production or operational readiness.
