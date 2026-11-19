# Batch 03 — Acceptance with Limitations

| Field | Value |
|---|---|
| Status | **ACCEPTED WITH LIMITATIONS — SYNTHETIC-LOCAL DEVELOPMENT ONLY** |
| Decision | D-123, 2026-11-19 |
| Branch | `feature/batch-03-internal-access-service` |
| Scope | Internal access service and service catalog |
| Approval authority | Product Owner |
| Review deadline | 2026-12-19; every earlier triggering milestone controls first |

## 1. Scope delivered

- Synthetic-local internal availability guard and fail-closed behavior.
- First-administrator provisioning with individually controlled TOTP.
- Internal sign-in, pending-authentication window, TOTP challenge and rate limiting.
- Verified-internal-access middleware and service authorization gates.
- Installation-scoped service catalog list/create.
- Transactional service creation with attributable audit event.
- Migrations for services, audit events, identity users, bootstrap guard and internal cache/session tables.
- Internal Blade views for sign-in, challenge, service list, create and uncertain outcome.

Out of scope: public booking, availability/scheduling policy, customer accounts, email delivery, backup/recovery, deployment and release.

## 2. Evidence reused

| Evidence | Status | Note |
|---|---|---|
| Implementation under `app/`, `database/migrations/`, `resources/views/internal/`, `routes/web.php` | Present | Inspected during closure; no changes made. |
| Test artifacts listed below | Present | Not executed during closure; `phpunit.xml` registers only the Foundation suite. |
| Product Owner acceptance of demonstrated Batch 03 functionality | Recorded | Provenance: D-123 instruction, 2026-11-19. Specific run counts and timestamps were not available in repository records. |
| Batch 03 verification report | Not present | No dedicated report exists in the repository. This record does not invent results. |

Test artifacts available:

- `tests/Unit/EnsureSyntheticInternalAvailableTest.php`
- `tests/Unit/ProvisionFirstAdministratorTest.php`
- `tests/Unit/PendingAuthenticationTest.php`
- `tests/Unit/IdentityAttemptLimiterTest.php`
- `tests/Unit/VerifiedInternalAccessTest.php`
- `tests/Unit/InternalAccessGuardTest.php`
- `tests/Unit/SyntheticDatabaseGuardTest.php`
- `tests/Unit/ServiceAuthorizationTest.php`
- `tests/Unit/ServiceInstallationScopeTest.php`
- `tests/Unit/CreateServiceGuardTest.php`
- `tests/Unit/StoreServiceRequestTest.php`
- `tests/Feature/Batch03ServiceDatabaseTest.php` (opt-in synthetic database test)

## 3. Preserved findings and limitations

| Finding | Status | Impact |
|---|---|---|
| CSS delivery for the internal views | Unresolved | The built manifest and asset exist, but delivery was not reverified. Recorded as unresolved, not passed. |
| Expired-TOTP endpoint verification | Partial | Endpoint behavior for expired codes is not fully verified end to end. |
| Rendered accessibility checks for the internal slice | Deferred, not passed | Keyboard, assistive-technology and zoom checks were not completed. Deferred to 2026-12-19. |
| Accessible MFA alternative for users without a personal device (AC-028) | Deferred, not passed | No factor, device or package selected. Deferred to 2026-12-19. |
| Dedicated verification report | Missing | Evidence relies on the Product Owner's acceptance and available test artifacts. |
| Synthetic database test portability | Limitation | The feature test uses a fixed local credential path, port and hostname; it is not portable and is opt-in only. |

## 4. Non-waivable blocker check

Under Engineering Governance v2.0 §8.1 and §8.4:

- The implemented outcome has supporting evidence from the Product Owner and inspectable test artifacts.
- Incomplete verification is identified above.
- Risks and limitations are disclosed.
- An owner and resolution milestone are assigned.
- No unresolved critical security or data-integrity issue was identified in the inspected synthetic-local slice.
- No applicable legal, contractual, privacy or safety obligation was bypassed.
- Use remains synthetic-local; no real personal or client data, production access or operational reliance is authorized.

Conclusion: no non-waivable acceptance blocker remains for this synthetic-local scope.

## 5. Outstanding obligations

| Obligation | Owner | Milestone |
|---|---|---|
| Complete accessible MFA alternative verification, including rendered keyboard, assistive-technology and applicable device checks | Product Owner | 2026-12-19 |
| Complete rendered accessibility checks for the Batch 03 internal views | Product Owner | 2026-12-19 |
| Resolve the CSS delivery finding | Engineering | Before affected acceptance beyond synthetic-local |
| Complete expired-TOTP endpoint verification | Engineering | Before affected acceptance beyond synthetic-local |
| Obtain qualified human specialist review and independent privacy/security assessment | Product Owner | Before production release or operational reliance |
| Re-verify before any real personal data, additional users, operational reliance, public access or release | Product Owner | Earlier trigger controls |

Deferred work remains enforceable. It is not classified as passed, completed or independently verified.

## 6. Boundaries

This acceptance does not authorize Batch 04 implementation, application or database changes, dependency installation, deployment, merge, push, commit, CEAP access or release. Batch 03 may be closed for its synthetic-local development purpose only.
