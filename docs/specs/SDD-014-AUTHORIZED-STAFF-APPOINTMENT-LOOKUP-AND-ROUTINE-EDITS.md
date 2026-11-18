# SDD-014 — Authorized Staff Appointment Lookup and Routine Edits

> **CURRENT STATUS: APPROVED — SDD-014 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. This documentation-only draft selects no fields, roles, interface or mechanism and authorizes no implementation, access or deployment.

| Field | Record |
|---|---|
| Owner / provenance | Product Owner for policy; engineering, security and privacy reviewers to be assigned. Prepared 2026-11-13 under the authorized bounded SDD drafting package; date is not approval. |
| Risk | High: protected appointment data, staff authorization and state change. Separate exact-version approval, specialist review and implementation authority required. |

## Purpose and scope

Allow an authorized internal actor to find and view the minimum permitted appointment information and perform explicitly permitted, non-scheduling routine updates. Search/list/detail do not grant authority over every record or action.

**In scope:** scoped lookup and display; reviewed non-scheduling edit eligibility and validation; attributable outcomes; empty, denied, stale and unknown states. **Out of scope:** booking creation (SDD-015), cancellation/rescheduling (SDD-016/017), attendance (SDD-019), exceptions (SDD-018), guest proof (SDD-008), case decisions (SDD-013), general reporting/export, physical schema, fixed fields and permission matrix.

## References

Effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) with v0.8 and v0.7: FR-004; NFR-003/009/011; BR-006/007; UJ-002/005; AC-003/010/022. [Registry](SDD_REGISTRY.md) maps SDD-002/003/006/013 as dependencies. D-047/050/103/105/108, D-098 and D-110 apply as recorded in the [Decision Register](../decisions/DECISION_REGISTER.md). D-094 is not treated as approval beyond effective v0.8. Current related SDD drafts and historical exact approvals retain their statuses; citing them does not approve them.

## Expected behavior

Authenticated internal users complete required MFA before protected access. The server evaluates actor, installation, service, action and record scope with default denial. Search and detail expose only permitted, minimum necessary information; an empty or denied response must not reveal unnecessary data. An edit is a distinct action, allowed only for a reviewed field and scope; validate current state and inputs before changing anything. Distinguish actor, booker and attendee; editing one must not silently change another or unrelated records. If an edit affects booking/capacity, it belongs to the appropriate owning workflow and applicable SDD-006 final boundary, not a routine bypass. Held contested actions follow SDD-013. Required evidence under SDD-003 must reflect the authoritative outcome without unnecessary personal data. Rejected, stale or unauthorized requests do not mutate state; unknown outcomes remain unknown pending reconciliation, without blind replay. Provide accessible status and recovery under applicable SDD-023 guidance.

## Acceptance criteria

Proposed local criteria, not requirements amendments or test results:

- **SDD-014-C01:** Given an authorized user with scoped lookup, when searching and opening an allowed record, then only minimum permitted information is shown.
- **SDD-014-C02:** Given missing, revoked or cross-service/installation authority, when a direct lookup or edit is attempted, then access is denied without mutation or unnecessary disclosure.
- **SDD-014-C03:** Given a permitted non-scheduling field and valid current state, when explicitly edited, then the authorized change and attributable outcome agree.
- **SDD-014-C04:** Given an unapproved field, invalid input or stale/conflicting state, when submitted, then no silent overwrite or unrelated change occurs.
- **SDD-014-C05:** Given a booking-affecting, attendance, cancellation, exception or held action, when requested, then its owning contract and authority apply; routine edit is not a bypass.
- **SDD-014-C06:** Given unknown result or evidence failure, when feedback is shown, then no unestablished success is asserted and authoritative reconciliation precedes unsafe retry.
- **SDD-014-C07:** Given empty, denied, failure and edit states, when rendered, then applicable keyboard, assistive-technology and readable-status requirements are supported.

## Considerations and open questions

| Question / owner / milestone | Unresolved matter |
|---|---|
| LOOK-Q01 — PO/service-policy owner, before implementation | Permitted search attributes, field visibility, service and record scope; minimum necessary disclosure. |
| LOOK-Q02 — PO and security, before edits | Exact editable non-scheduling fields, validation, conflicts, authority and evidence; no universal edit permission. |
| LOOK-Q03 — engineering/data integrity, before integration | Stale and unknown outcomes, consistency with owning commands and SDD-003 evidence. |
| LOOK-Q04 — qualified privacy/accessibility reviewers, before affected processing/release | Screen/print disclosure, retention and rendered accessibility; no field catalog or period is selected. |

## Plan and verification

Registry dependencies SDD-002/003/006/013 must have applicable approved contracts and resolved interfaces before affected implementation; SDD-023 and 024 inform accessibility/privacy. Future separately authorized verification covers scoped direct requests, cross-installation denial, invalid and stale edits, held action, evidence consistency, unknown results and rendered accessibility. No test, personal-data access or implementation has occurred. PO exact-version approval is pending; acceptance, release and deployment require separate decisions.

