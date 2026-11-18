# SDD-015 — Staff-Assisted, Proxy and Streamlined Walk-in Booking

> **CURRENT STATUS: APPROVED — SDD-015 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. No implementation authority is granted.

| Field | Value |
|---|---|
| Date / provenance | 2026-11-13; bounded documentation drafting |
| Owner | Product Owner for service policy; engineering, security, privacy and accessibility reviewers; actual staff assignments remain open. |

## Purpose and scope

Enable appropriately authorized staff to create assisted, proxy or streamlined walk-in bookings using necessary approved information and the shared final integrity boundary. Distinguish acting staff, original booker and attendee. **Out of scope:** staff identity/permissions (SDD-002), service field policy (SDD-004), final integrity (SDD-006), ordinary staff lookup (SDD-014), exception catalog (SDD-018), attendance (SDD-019) and transfer of customer authority.

## References

Effective [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md), unchanged [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md), [traceability 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md): FR-002/004/013/022, NFR-006/009, BR-001/002/006/007/010, UJ-005, AC-001/005/010/022/023/024. [Registry](SDD_REGISTRY.md), [decisions](../decisions/DECISION_REGISTER.md) D-064/070/094/095/098/103/106–111 and SDD-003/004/006/007/008/009/013/014/023 supply boundaries; their approved current revisions govern within their recorded scopes.

## Expected behavior and proposed acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-015-C01 | Given a staff-assisted request, when creation is attempted, then actor/service/action permission is checked and unauthorized staff cannot create or disclose unrelated appointments. |
| SDD-015-C02 | Given assisted, proxy or walk-in booking, when details are collected, then acting staff, original booker and attendee are distinguished and only approved common and necessary service fields are requested. |
| SDD-015-C03 | Given proxy or representative action, when evaluated, then approved service policy and applicable independently established authority/visibility apply; assistance or contact information alone transfers no customer or attendee authority. Uncertain claims are denied or referred. |
| SDD-015-C04 | Given a booking request, when final checks run, then the same effective capacity, resources, eligibility and duplicate policy as equivalent guest/account requests apply; ordinary staff cannot bypass blocking. |
| SDD-015-C05 | Given permitted warning continuation or an exception, when used, then the warning is explicitly acknowledged or the specific exception permission, reason and attributable evidence apply; no unrelated check is bypassed. |
| SDD-015-C06 | Given success, rejection or unknown outcome, when staff receive feedback, then only established results are reported, required evidence agrees, unknown is reconciled before unsafe retry, and no partial booking is created on rejection. |
| SDD-015-C07 | Given a committed booking, when confirmation and eligible email are provided, then SDD-009/007 boundaries apply and email failure does not reverse or repeat the booking; attendance is a separate action. |
| SDD-015-C08 | Given a held contested action, when a related booking operation is requested, then only the authorized scoped hold applies under SDD-013 without automatic cancellation or denial of permitted attendance. |

## Open questions and dependencies

| ID / owner | Decision and timing |
|---|---|
| ASSIST-Q01 / Product Owner and service owner | Allowed proxy, attendance-presence, minimum field and visibility policies before affected configuration and implementation. |
| ASSIST-Q02 / Product Owner/security | Staff action assignments, representative proof and exception authority before affected actions. |
| ASSIST-Q03 / engineering/UX/privacy | Confirmation recipient, evidence, unknown outcome and accessible assisted flow before integration and acceptance. |

## Plan, verification and approval

High-risk personal-data and integrity work needs exact-version PO approval, dependent shared contracts and separately authorized implementation. Future synthetic verification covers permissions, proxy/attendee separation, no bypass, stale/duplicate conflicts, unknown outcomes, holds, email failure and accessibility. D-070 remains a future integrity obligation. No implementation, tests or acceptance are claimed.
