# Batch 04 — Service Catalog Management

| Field | Value |
|---|---|
| Status | **AUTHORIZED AND IMPLEMENTED (synthetic-local) — PENDING PRODUCT OWNER ACCEPTANCE** |
| Recorded | 2026-11-19 under D-123 (planning only); corrected the same day to match the Product Owner's intended roadmap |
| Roadmap | Batch 04 in [DEVELOPMENT_ROADMAP.md](DEVELOPMENT_ROADMAP.md) |
| Risk class | High when it changes schema, authorization or lifecycle policy — explicit Product Owner authorization required under Engineering Governance v2.0 §5.3 |
| Implementation | **Implemented and verified under D-124; not committed, merged or accepted** |
| Supersedes | The scheduling proposal previously held in this file, preserved as [BATCH-05-PLAN.md](BATCH-05-PLAN.md) |

## 1. Purpose and expected outcome

Turn Batch 03's first-service slice into a usable, trustworthy service catalog before scheduling and booking begin. Batch 03 proved that an authenticated, MFA-verified internal administrator can list and create an installation-scoped service. Batch 04 should establish the remaining catalog-management behavior needed for that catalog to be maintained day to day — without inventing the field, lifecycle or permission policies that SDD-004 deliberately left open.

Expected outcome: an authorized internal actor can see service details, edit the fields the Product Owner has approved, and (only if the lifecycle decision is made) change service status; every action is installation-scoped, server-side authorized, attributable in evidence, and presented accessibly. Which of those outcomes are actually deliverable depends on the decisions in §6.

## 2. Existing Batch 03 capabilities to reuse

Verified by inspecting `app/`, `routes/web.php`, `database/migrations/`, `resources/views/internal/` and `app/Providers/Batch03AuthorizationProvider.php`.

| Capability | Where it lives today | Reuse note |
|---|---|---|
| Installation-scoped list | `ServiceController::index`, `Service::scopeForInstallation`, `routes/web.php` | Extend with detail view; keep the same scope helper. |
| Create (name only, ≤120 chars) | `ServiceController::store`, `StoreServiceRequest`, `CreateService` | Pattern to copy for update: validate → transaction → service row + evidence. |
| Transactional attributable evidence | `CreateService` inserts `service.created` in the same transaction, failing closed | New mutations need their own action names (e.g. `service.updated`) on the same pattern. |
| Server-side authorization gates | `Batch03AuthorizationProvider` defines `service.view` / `service.create` from the configured admin id, session MFA state, active flag, confirmed TOTP and installation match | Add `service.update` only if SVC-Q02 allows; do not broaden the gate by inference. |
| Fail-closed synthetic-local guard | `EnsureSyntheticInternalAvailable`, `SyntheticDatabaseGuard` | Must continue to block non-synthetic/local targets. |
| Uncertain-outcome view | `internal.services.uncertain` (503) | Reuse for update failures rather than reporting a false success. |
| Accessible internal layout | `resources/views/layouts/internal.blade.php`, `components/status.blade.php` | Reuse; rendered accessibility verification is still deferred (see §9). |
| Unit coverage | `tests/Unit/ServiceAuthorizationTest`, `ServiceInstallationScopeTest`, `CreateServiceGuardTest`, `StoreServiceRequestTest` | Mirror for each new operation. |

Not present today: service detail/show route, edit/update route, status or lifecycle field, deletion, a second permission, and any evidence event other than `service.created`.

## 3. In-scope candidate functionality

Candidates only. An item marked "blocked" must not be implemented until its decision is recorded in §6.

| Candidate | Current state | Requirement / spec anchors | Gate |
|---|---|---|---|
| List services (installation-scoped) | Delivered | FR-001 (service setup); SDD-004 expected behavior 1; SDD-004-C01 | Extend only |
| View a single service's details | Missing | SDD-004-C01, SDD-004-C07 | Unblocked for fields already stored (name, installation, timestamps); any additional displayed field needs SVC-Q01 |
| Edit service details | Missing | FR-022 (approved service fields with purpose/validation/visibility/retention); SDD-004-C02, C07, C08 | Blocked by SVC-Q01 (which fields) and SVC-Q04 (validation/visibility/retention) |
| Manage service status / lifecycle | Missing | SDD-004-C02, C06; SVC-Q03 | Blocked by SVC-Q03 |
| Activation / deactivation behavior | Missing | SDD-004-C06; SDD-022 for accepted-booking impact | Blocked by SVC-Q03; no booking consumer exists yet, so any behavior would be unevidenced |
| Service field validation | Name only (required, string, ≤120, trimmed) | SDD-004-C07; SVC-Q04 | Extend only for approved fields |
| Authorization for catalog operations | Single configured admin (`service.view`/`service.create`) | SDD-004-C01; SVC-Q02; SDD-002 | Blocked by SVC-Q02 for any second permission or role |
| Attributable audit/evidence | `service.created` only | SDD-003; SDD-004-C08 | Unblocked for approved mutations |
| Accessible administrative UI | Follows SDD-023 patterns; rendered checks deferred | SDD-004-C09; SDD-023 | Unblocked; verification limitation carried |
| Installation isolation | Delivered for list/create | SDD-004-C01; NFR-001 | Extend to every new operation |
| Automated verification and failure handling | Partial; Batch 03 suite not wired into `phpunit.xml` | SDD-004-C10; NFR-010 | Unblocked; must include failure paths |

## 4. Explicit exclusions

- Service duration, preparation/cleanup buffers, availability periods, resources, capacity and duplicate policy — SDD-005, planned as [Batch 05](BATCH-05-PLAN.md).
- Final booking integrity and authoritative booking outcomes — SDD-006.
- Changes to accepted appointments, and any grandfathering or automatic migration — SDD-022. No appointment data exists yet, so this boundary is preserved, not exercised.
- Deletion, archival or retention behavior — not approved anywhere; do not implement.
- A complete permission/role matrix or any privileged bypass — SVC-Q02.
- Service-specific personal-data fields, eligibility imports and any generic form builder — SDD-004 exclusions.
- Branding, localization, public/customer-facing UI, email, deployment and release.
- Any migration that drops or rewrites existing service rows.

## 5. Dependencies and relevant SDD references

| Dependency | Status | Effect on this batch |
|---|---|---|
| SDD-002 internal identity and permission enforcement | Batch 03 accepted with limitations | Provides the current gate; a second permission needs SVC-Q02. |
| SDD-003 required audit and operational evidence | Batch 03 covers `service.created` only | Each new mutation defines its own evidence event; no generic logging product selected. |
| SDD-004 service catalog and minimum booking data (v0.3 approved for scope) | Partially delivered | Owns the remaining catalog behavior and all four open questions. |
| SDD-023 reusable accessible states | Batch 02 accepted; rendered checks deferred for Batch 03 | Presentation patterns only; no conformance claim. |
| SDD-022 configuration changes affecting accepted appointments | Draft | Not exercised yet; kept as a boundary for lifecycle work. |
| SDD-006 shared booking integrity | Draft | Not needed for catalog-only changes; relevant once booking exists. |

## 6. Open Product Owner decisions

**Resolved 2026-11-19 under [D-124](../../docs/decisions/DECISION_REGISTER.md#d-124--batch-04-implementation-authorization-and-service-catalog-decision-dispositions): option A for SVC-Q01, SVC-Q02, SVC-Q03 and SVC-Q04. The options remain below as the decision record; they are no longer open for this batch.**

| Decision | Why it blocks | Options to consider (not decisions) |
|---|---|---|
| **SVC-Q01** — minimum service field catalog | Determines which fields the detail view shows and the editor accepts | (A) Name-only catalog for this batch; add fields in a later batch once the catalog is defined. (B) Approve a specific minimal set now (for example an internal description and a customer-visible name) with purpose and visibility stated per field. (C) Defer all edit capability until the catalog is approved. |
| **SVC-Q02** — configuration permissions and affected actions | Decides whether `service.update`/`service.status` are separate permissions or reuse the current single-admin gate | (A) Reuse the existing configured-admin gate for all catalog actions in this synthetic-local stage. (B) Define distinct permissions mapped onto the SDD-002 model before any edit ships. (C) Keep read-only catalog until the permission matrix is approved. |
| **SVC-Q03** — service lifecycle and accepted-booking effects | Decides whether status/activation exists at all, and what "inactive" means | (A) No lifecycle in this batch; catalog remains create/list/edit only. (B) An active/inactive flag that hides a service from future booking but never deletes data, with SDD-022 review required before the flag can change once appointments exist. (C) A fuller retire/archive model, which needs its own policy and evidence design. |
| **SVC-Q04** — validation, visibility and retention for service-specific fields | Only applies if SVC-Q01 adds fields beyond name | (A) No service-specific fields; no decision needed yet. (B) Approve per-field validation, visibility and retention with qualified privacy review before collection. |

Two capabilities are **not** blocked: showing a service's already-stored data, and editing the existing `name` field with the current validation. Those still require confirming SVC-Q01 option A or an equivalent narrow choice, because even editing `name` is a field-catalog decision under SDD-004.

## 7. Proposed acceptance criteria

| ID | Criterion |
|---|---|
| B04-AC-01 | An authorized internal actor can view an installation-scoped service; an unauthenticated, unauthorized or wrong-installation actor is denied server-side without disclosing service data. |
| B04-AC-02 | Only Product Owner-approved fields are accepted, displayed or edited; unapproved fields and generic form-builder behavior are absent. |
| B04-AC-03 | Server-side validation rejects invalid input with accessible, persistent feedback; no invalid or partial change is reported as saved. |
| B04-AC-04 | Every catalog mutation records attributable evidence (actor, installation, action, subject, time, outcome) or fails atomically; unsuccessful attempts are not reported as success. |
| B04-AC-05 | Cross-installation reads and writes are prevented, including failure before database access when installation context is missing. |
| B04-AC-06 | Any status/lifecycle behavior is limited to the approved SVC-Q03 option and never deletes data or silently changes an accepted appointment. |
| B04-AC-07 | The catalog interface uses the SDD-023 accessible patterns; rendered keyboard/assistive-technology/zoom checks are recorded as deferred if not completed. |
| B04-AC-08 | Automated unit and feature tests cover authorization, validation, installation scope, atomic evidence and failure paths; actual counts and limitations are recorded. |
| B04-AC-09 | No deletion, archival or retention behavior is implemented without a separate Product Owner decision. |
| B04-AC-10 | The synthetic-local guard continues to fail closed for any non-synthetic or non-local target. |

## 8. Verification strategy

1. Unit tests for authorization denials, installation scope, validation boundaries and the service-domain rules actually approved.
2. Feature tests against the isolated synthetic database, opt-in only; replace the hardcoded credentials/path in `Batch03ServiceDatabaseTest` before relying on it, or document the same limitation again.
3. Failure-path checks: missing installation context, unauthorized actor, evidence-insert failure, and database failure during update.
4. Register the catalog tests in the runnable suite; do not repeat Batch 03's gap where the suite was not wired into `phpunit.xml`.
5. Rendered accessibility checks for the catalog views, or an explicit deferred record matching Batch 03's.
6. Run the suite and record actual results, failures and limitations; do not claim deferred checks as passed.

## 9. Carried-forward Batch 03 obligations

Preserved from [BATCH-03-ACCEPTANCE.md](../evidence/BATCH-03-ACCEPTANCE.md). They are not passed and are not absorbed by this batch.

| Obligation | Status | Milestone |
|---|---|---|
| Accessible MFA alternative and rendered accessibility verification | Deferred, not passed | 2026-12-19; every earlier trigger controls |
| CSS delivery finding | Unresolved | Before acceptance beyond synthetic-local |
| Expired-TOTP endpoint verification | Partial | Before acceptance beyond synthetic-local |
| `Batch03ServiceDatabaseTest` hardcoded credential path, port and host | Limitation | Fix before relying on that test |
| Batch 03 suite was not rerun at closure | Limitation | Rerun and record before a new batch is accepted |
| Independent qualified human security/privacy review | Outstanding | Before applicable operational or production milestones |

## 10. Implementation risks and authorization boundaries

| Risk | Why it matters | Control |
|---|---|---|
| Schema change | Adding columns to `services` is high-risk and irreversible in place | Additive migration only; no data rewrite; explicit authorization before migration. |
| Policy invention | Field, lifecycle or permission policy is easy to infer from UI needs | Decisions in §6 must be recorded first; unresolved items stay out of scope. |
| Authorization broadening | A new gate could expose more than intended | Reuse the configured-admin pattern unless SVC-Q02 says otherwise; deny by default. |
| Evidence gaps | Batch 03 has one evidence event only | Every mutation adds its own event in the same transaction; failure rolls back. |
| False success | Update failures can look like success | Reuse the uncertain-outcome path; never report success on an uncommitted change. |
| Accessibility debt | Rendered checks are already deferred | Follow SDD-023 patterns; record deferral honestly. |
| Verification debt | Tests exist but are not wired or portable | Fix wiring before acceptance; report real results. |
| Scope creep toward scheduling | Service editing naturally invites duration/availability | SDD-005 fields stay out; see [BATCH-05-PLAN.md](BATCH-05-PLAN.md). |

Authorization boundary: this plan authorizes nothing. Implementation requires explicit Product Owner authorization of the exact scope, environment, safeguards and boundaries under Governance v2.0 §5.3, including a decision on every §6 item that the chosen scope touches. No application code, schema, database, dependency, deployment, merge, push, commit or CEAP access is authorized.




## 11. Authorization and delivery record — 2026-11-19

Authorization: Product Owner instruction "Batch 04 Implementation Authorization," recorded as [D-124](../../docs/decisions/DECISION_REGISTER.md#d-124--batch-04-implementation-authorization-and-service-catalog-decision-dispositions). Risk class high; environment isolated synthetic-local only; no CEAP access, production/client data, deployment, merge, push, commit, destructive Git/database operation or dependency installation.

Delivered scope:

| Area | Delivered | Notes |
|---|---|---|
| Detail view | `GET /internal/services/{service}` | Installation-scoped lookup; 404 for other installations; name, reference, timestamps, status message. |
| Edit form | `GET /internal/services/{service}/edit` | `service.update` authorized server-side; SDD-023 error summary and field hints. |
| Name update | `PUT /internal/services/{service}` | `UpdateServiceRequest` requires the name, trims, caps at 120 characters and rejects any field outside `name`, `_token` and `_method`. |
| Authorization | `service.update` gate | Same configured-administrator conditions as `service.view`/`service.create`; no role matrix. |
| Evidence | `service.updated` audit event | Inserted inside the same transaction as the name change; the change rolls back when evidence fails. |
| Failure handling | Uncertain-outcome 503 view | Unexpected failures do not report success; missing or foreign services return 404. |
| Listing | View/Edit links per row | Progressive links only when the gate allows update; no new styling dependencies. |

Not delivered, per SVC-Q03: status, activation, deactivation, archive, deletion, retention behavior and any effect on accepted appointments.

Verification: recorded in [BATCH-04-VERIFICATION.md](../evidence/BATCH-04-VERIFICATION.md). Tests are registered in the `Batch04` testsuite in `phpunit.xml`; the synthetic database test is opt-in and now environment-configurable instead of hardcoded. Product Owner acceptance is not self-approved.
