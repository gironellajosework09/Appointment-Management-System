# SDD-019 — Staff QR/Manual-Reference Lookup and Attendance

> **CURRENT STATUS: APPROVED — SDD-019 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. No QR lifecycle, attendance transition, role assignment, data model or implementation is selected.

| Field | Record |
|---|---|
| Owner / provenance | Product Owner/service-policy owner; engineering, security, accessibility and privacy reviewers to be assigned. Prepared 2026-11-13 under the bounded documentation package, not an approval date. |
| Risk | High: protected lookup, attendance mutation and personal data; separate review and authorization required. |

## Purpose and scope

Provide authorized minimal appointment verification through scan or reviewed manual-reference handling, followed only by a separately authorized and explicit attendance/service action. **In scope:** lookup, denial and scan failure, configured statuses and correction boundaries, attributable results. **Out of scope:** QR issuance (SDD-009), identity proof, booking/cancellation/rescheduling, exception authority, a status transition catalog, camera vendor and personal-data schema.

## References

Effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) with v0.8/v0.7: FR-006/014; NFR-003/009/011; BR-003/007/008; UJ-002/005; AC-003/004. [Registry](SDD_REGISTRY.md) dependencies SDD-002/003/009/014. D-045/047/050/098/103/105/108/110 apply in the [Decision Register](../decisions/DECISION_REGISTER.md). Current related drafts remain pending independent review.

## Expected behavior

Only an appropriately authenticated, MFA-complete internal user with scoped actor/service/action authority may perform lookup or attendance actions. A QR or reference locates an appointment; possession or a lookup result neither establishes identity nor records arrival or completion. Return the minimum verification outcome permitted by policy. Invalid, missing, expired if applicable, uncertain or unauthorized lookups disclose no unnecessary data. Camera denial/failure offers only a separately approved manual alternative; no weaker access boundary follows. Recording configured expected, arrived, completed or no-show status is a separate explicit action, checked against current state and authority, validated and evidenced under SDD-003. Correction and allowed transitions remain open; do not invent automatic status changes or penalties. Denied, stale or invalid commands do not silently overwrite state. Unknown results remain unknown until reconciled. Apply accessible input, feedback and error recovery through SDD-023.

## Acceptance criteria

Proposed local criteria; not executed:

- **SDD-019-C01:** Given scoped authorized staff and an eligible lookup, when scanning or using an approved manual path, then only the permitted minimum verification result appears.
- **SDD-019-C02:** Given QR/reference possession alone, when lookup occurs, then identity, appointment-management authority and attendance are not inferred.
- **SDD-019-C03:** Given unassigned, cross-service or direct unauthorized lookup/action, when evaluated, then it is denied without mutation or unnecessary disclosure.
- **SDD-019-C04:** Given lookup succeeds, when no separate attendance action occurs, then attendance remains unchanged.
- **SDD-019-C05:** Given a separately authorized valid attendance action, when committed, then current state, configured permitted status and attributable evidence agree.
- **SDD-019-C06:** Given camera failure or denial, when a reviewed manual alternative exists, then it is accessible and applies equivalent authorization; no unapproved alternative is implied.
- **SDD-019-C07:** Given invalid, stale, rejected or unknown attendance outcome, when feedback is presented, then no silent overwrite or unestablished success occurs; reconcile before unsafe retry.
- **SDD-019-C08:** Given status correction, when requested, then only a separately authorized reviewed correction may proceed and required evidence is preserved.

## Considerations and open questions

| Question / owner / milestone | Unresolved matter |
|---|---|
| ATT-Q01 — PO/service-policy and security, before implementation | Lookup visibility, manual path, QR lifecycle and permitted scopes; reference is not authority. |
| ATT-Q02 — PO/service-policy, before status changes | Allowed transitions, correction, evidence and independent permissions; no automatic attendance or penalty. |
| ATT-Q03 — engineering/data-integrity, before integration | Stale and unknown results, concurrent actions and evidence consistency. |
| ATT-Q04 — privacy/accessibility reviewers, before processing/release | Minimum disclosed data, camera/manual accessibility, audit retention and failure messaging. |

## Plan and verification

Applicable SDD-002/003/009/014 contracts, status decisions, qualified review and explicit high-risk implementation authorization precede work. Future authorized checks cover scan/manual parity, unauthorized direct lookup, no auto-attendance, distinct status actions, corrections, stale/unknown states, audit and rendered accessibility. No tests, real records or implementation are claimed; exact approval, acceptance and release remain pending.

