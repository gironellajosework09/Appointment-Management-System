# Gate 1 Scope Triage Draft — Appointment Management System

| Field | Value |
|---|---|
| Document status | DRAFT — scope reconciliation recorded; requirements approval pending |
| Gate | Gate 1 (Requirements Discovery) — IN PROGRESS |
| Source | `docs/research/product-owner-input/PRODUCT_OWNER_RESPONSES.md` and the Product Owner's 11 scope-triage choices |
| Authority | Non-authoritative working draft; D-076 records the explicit deferral, but this document does not amend the requirements baseline |

This record preserves the preliminary scope-triage choices and records the explicit
deferral of three proposed MVP additions under D-076. It does not create validation
evidence, approve the requirements baseline, or approve Gate 1 exit. The exact
Requirements Specification v0.7 baseline remains unchanged.

## 1. Choice Reconciliation

| # | Preliminary choice | Current classification | Existing record or required follow-up |
|---|---|---|---|
| 1 | Automated notifications and SMS/OTP remain deferred. | Reaffirms existing approved direction. | D-049 and D-057; FR-010. No new decision needed. |
| 2 | Payments and deposits remain deferred. | Reaffirms existing approved direction. | D-042 and D-056. No new decision needed. |
| 3 | Automated waitlists remain deferred. | Reaffirms existing approved direction. | D-042 and D-058; FR-018 and AC-013. No new decision needed. |
| 4 | Multi-branch support remains deferred. | Reaffirms existing approved direction. | D-020, D-058, and D-066; NFR-001 and FR-018. No new decision needed. |
| 5 | Automated offline synchronization remains deferred. | Reaffirms existing approved direction. | D-051 and D-063; FR-017 and BR-009. Paper fallback and structured reconciliation remain in scope. No new decision needed. |
| 6 | Basic clinic appointment scheduling is an initial target subsegment, excluding clinical records and deferred eligibility workflows. | Preliminary target-subsegment proposal. | Consistent with the broad D-041 segment, subject to VAL-001 validation. Clinical records remain outside the current requirements; FR-009 and generic eligibility remain deferred under D-042. Product Owner confirmation is required before narrowing the target-market wording. |
| 7 | Simple internal walk-in queue numbers are deferred from MVP. | Explicitly deferred by D-076. | Not represented as a v0.7 requirement. It may be reconsidered through future change control. Existing walk-in registration and appointment management remain unchanged. |
| 8 | Live queue displays and estimated waiting times remain deferred. | Preliminary deferral proposal. | Consistent with D-042's advanced queue-display deferral. The relationship to choice 7 must be confirmed so internal queue numbers do not imply customer-facing live status or estimates. |
| 9 | Minimal operational staff notes and audited typing corrections are deferred from MVP. | Explicitly deferred by D-076. | Not represented as v0.7 requirements. They may be reconsidered through future change control. Existing audit requirements and data-integrity safeguards remain unchanged. |
| 10 | Numeric response-time targets remain provisional candidates, not verified guarantees. | Clarifies existing unresolved quality work. | Consistent with NFR-008, Q-016, Q-022, D-052, and D-070. No numeric target is approved or measured. Any target must remain provisional until explicitly approved and later tested. |
| 11 | Exceptional operator-access duration and emergency procedures are proposals for qualified privacy/security review, not approved policy. | Reaffirms the existing boundary and preserves proposed controls as unapproved. | Consistent with D-034, D-075, FR-012, NFR-005, BR-004, and AC-007. VAL-004 and VAL-006 remain incomplete. |

## 2. Deferred Proposals and Future Change Control

The following proposals are explicitly deferred from the current MVP by D-076.
They are not inserted into the v0.7 Requirements Specification or Traceability
Matrix and must not be implemented as MVP features.

### 2.1 Internal walk-in queue number

Deferred proposal: authorized staff may eventually assign a simple internal queue
number to a walk-in record while preserving capacity checks, authorization,
auditability, and the distinction between a queue number and an appointment or
attendance state.

Future change-control review would require:

- Product Owner approval of re-opening the deferred scope.
- A requirement and user-journey mapping, likely linked to FR-013, FR-014, and UJ-005.
- An acceptance criterion covering uniqueness, ordering, correction, cancellation, and audit behavior.
- Confirmation that no live customer-facing queue display, estimated wait, waitlist, or cross-branch behavior is implied.
- Validation of the workflow with the primary-segment front-desk role under VAL-003.

### 2.2 Minimal staff notes and audited typing corrections

Deferred proposal: authorized staff may eventually record bounded operational notes
and correct obvious data-entry errors, with the actor, time, reason, affected record,
and before/after value recorded where appropriate.

Future change-control review would require:

- Product Owner approval of re-opening the deferred scope.
- A precise definition of operational notes, excluded sensitive content, permitted roles, and retention.
- Server-side authorization and immutable or otherwise tamper-evident audit requirements in later design.
- Privacy/security review under VAL-004.
- A requirement, business rule, and acceptance criterion; no identifier is assigned by this draft.

## 3. Items Requiring Explicit Approval

The following remain outside the current MVP and cannot be implemented merely because
they appear in the historical questionnaire or this draft:

- Clinic subsegment narrowing or target-market wording changes.
- Internal walk-in queue-number capability, deferred by D-076.
- Staff operational notes, deferred by D-076.
- Audited typing corrections, deferred by D-076.
- Any numeric response-time target.
- Any operator-access duration, emergency access process, or exception to the default no-access boundary.

Under Requirements Governance §4, a new or materially changed requirement must remain
`DRAFT` until reviewed and validated. D-076 is a scope disposition, not approval of
new requirements or existing requirement wording.

## 4. Validation and Risk Impact

This draft creates no validation evidence and changes no VAL status.

- VAL-001 must validate whether clinics belong in the initial target segment and whether the selected segment is representative enough for Gate 1.
- VAL-003 may revisit the deferred queue-number, staff-note, and correction proposals only if future change control reopens them.
- VAL-004 must review note content, sensitive-data exposure, audit records, retention, and exceptional operator access.
- VAL-005 must distinguish provisional response-time candidates from verified performance results and assign later evidence ownership.
- VAL-006 remains a Product Owner/operator review of the access boundary; no duration or emergency procedure is approved here.

Existing risks R-2, R-5, R-6, R-7, R-9, and R-11 remain applicable. No risk is
closed by this draft.

## 5. Baseline and Governance Boundary

- `REQUIREMENTS_SPECIFICATION.md` remains v0.7 and unchanged.
- `REQUIREMENTS_TRACEABILITY.md` remains unchanged.
- `DECISION_REGISTER.md` records D-076; no duplicate reaffirmation entries were added.
- `GATE-1-EVIDENCE.md` receives no validation record from this draft.
- `PRODUCT_OWNER_RESPONSES.md` is preserved unchanged.
- Gate 1 remains `IN PROGRESS`; Gate 2 remains blocked.
- No application, architecture, database, deployment, Obsidian, or CEAP activity is authorized by this draft.
