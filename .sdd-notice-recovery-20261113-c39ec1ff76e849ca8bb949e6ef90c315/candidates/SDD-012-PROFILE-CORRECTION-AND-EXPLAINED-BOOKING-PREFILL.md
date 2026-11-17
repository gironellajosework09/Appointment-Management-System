# SDD-012 — Profile Correction and Explained Booking Prefill

> **CURRENT STATUS: APPROVED — SDD-012 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **Status: DRAFT v0.1 — PENDING PRODUCT OWNER REVIEW.** This documentation authorizes no implementation or processing.

| Field | Value |
|---|---|
| Date / provenance | 2026-11-13; bounded documentation drafting |
| Owner | Product Owner for field policy; engineering and qualified privacy/security/accessibility reviewers. |

## Purpose and scope

Allow an authorized customer to explicitly correct permitted profile data and understand optional prefill into approved booking fields. **Out of scope:** account lifecycle (SDD-010), field catalog (SDD-004), booking and final integrity (SDD-009/006), automatic synchronization, unapproved fields, retention or technical mechanisms.

## References

Effective [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md), unchanged [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md), [traceability 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md): FR-022, NFR-009, BR-006, UJ-001/005/006/007, AC-010/022/023. [Registry](SDD_REGISTRY.md) and [decisions](../decisions/DECISION_REGISTER.md) D-050/094/098/104/106/108–111 apply within recorded scope. SDD-004/009/010/023/024 define related contracts; current drafts are not approved by citation.

## Expected behavior and proposed acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-012-C01 | Given an authorized customer, when a permitted profile correction is submitted explicitly, then only approved profile fields are changed after applicable validation and authority checks. |
| SDD-012-C02 | Given an available approved profile value, when it prefills an eligible booking field, then the user is informed of the prefill and can review and edit it according to service policy before explicit submission. |
| SDD-012-C03 | Given a booking form is edited or submitted, when processing completes, then it does not silently update the account profile or other appointments. |
| SDD-012-C04 | Given a profile is edited, when the change succeeds, then existing bookings are not silently rewritten; any appointment correction follows its separately authorized workflow. |
| SDD-012-C05 | Given booker, attendee or representative information, when fields are presented, then only the approved purpose, visibility and authority apply; account ownership does not itself grant attendee or representative authority. |
| SDD-012-C06 | Given denied, invalid, failed or uncertain profile action, when feedback is presented, then no unestablished success or unnecessary personal data is disclosed and the result is accessible; required evidence follows SDD-003. |

## Open questions and dependencies

| ID / owner | Decision and timing |
|---|---|
| PROF-Q01 / Product Owner and service owner | Permitted profile fields, validation and prefill mapping under SDD-004; before affected implementation. |
| PROF-Q02 / privacy/security reviewers | Visibility, purpose, retention and attribution under SDD-024/003; before processing. |
| PROF-Q03 / UX/accessibility and engineering | Notice, edit and failure presentation, including stale values; before rendered acceptance. |

## Plan, verification and approval

Exact-version approval, applicable field/privacy decisions and separate implementation authority precede work. Future authorized synthetic tests cover explicit edit, prefill notice, field authorization, booking/profile isolation, failures and accessible presentation. No implementation, test, privacy assessment or acceptance is claimed.
