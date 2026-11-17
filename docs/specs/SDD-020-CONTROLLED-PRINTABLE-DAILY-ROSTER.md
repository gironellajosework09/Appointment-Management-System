# SDD-020 — Controlled Printable Daily Roster

> **CURRENT STATUS: APPROVED — SDD-020 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. No print technology, additional contact fields, paper-retention period or implementation is approved.

| Field | Record |
|---|---|
| Owner / provenance | Product Owner/service-policy owner, actual client operator and qualified privacy/security reviewers; named owners unassigned. Prepared 2026-11-13 under bounded documentation authority, not an approval date. |
| Risk | High: concentrated personal data and physical custody. Exact-version approval, qualified review and separate implementation authorization required. |

## Purpose and scope

Support an authorized, controlled printable daily as-of snapshot for continuity. **In scope:** permissioned generation, minimum content, attributable generation, controlled contact disclosure and paper custody/disposal planning. **Out of scope:** general reporting or exports, live authoritative paper state, offline booking synchronization, a fixed retention rule, printer/service selection or an operational support commitment.

## References

Effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), v0.8 and v0.7: FR-016; NFR-003/009/011; BR-009; UJ-005; AC-012. FR-016 minimum roster content is appointment reference, appointment date/time, attendee name, service, assigned staff/resource where applicable, and attendance status; additional contact information requires justified operational need and controls. [Registry](SDD_REGISTRY.md) lists SDD-014/019 prerequisites; SDD-002/003/021/024/026 are relevant boundaries. D-050/051/074/098/103/104/105/108/109/110 apply in the [Decision Register](../decisions/DECISION_REGISTER.md); no draft citation approves another spec.

## Expected behavior

Only an individually authenticated and authorized actor may generate a roster within approved installation, service and action scope. The snapshot identifies its as-of context so readers cannot mistake paper for current state. Include FR-016 minimum fields; additional contact data appears only when justified and separately controlled under applicable privacy policy. Record attributable generation and outcome through SDD-003 without unnecessary copies or diagnostics. Minimize exposure during display and printing, and define actual client custody, access, secure handling and disposal before operational reliance; no fixed period or method is assumed. Generation failure, authorization denial or uncertain outcome must not be claimed as a completed roster. Paper is not live state and cannot alone authorize a booking or overwrite a newer record. Changes after generation follow the reviewed SDD-021 reconciliation boundary.

## Acceptance criteria

Proposed local criteria, not executed:

- **SDD-020-C01:** Given an authorized scoped actor, when generating a daily roster, then FR-016 minimum fields and clear as-of context appear.
- **SDD-020-C02:** Given contact details outside approved justified scope, when roster is generated or previewed, then those details are excluded.
- **SDD-020-C03:** Given unauthorized or cross-installation/service access, when a direct generation request occurs, then it is denied without disclosure.
- **SDD-020-C04:** Given successful generation, when evidence is reviewed, then authorized actor and established generation outcome are attributable without unnecessary personal data.
- **SDD-020-C05:** Given records change after the snapshot, when paper is used, then it is not represented as live authority and no current state is silently overwritten.
- **SDD-020-C06:** Given a denied, failed or unknown generation, when status appears, then no unestablished success is asserted.
- **SDD-020-C07:** Given paper custody and disposal are planned, when operational reliance is sought, then actual client responsibility and approved controls are documented and reviewed.
- **SDD-020-C08:** Given roster generation and preview, when rendered, then applicable accessible controls and status are available without relying on color alone.

## Considerations and open questions

| Question / owner / milestone | Unresolved matter |
|---|---|
| ROST-Q01 — PO/service-policy and qualified privacy reviewer, before processing | Exact service scope, justified contact additions, viewer/print permissions and minimum display. |
| ROST-Q02 — actual client operator and qualified privacy reviewer, before reliance | Physical custody, access, loss response, disposal, retention and actual responsibilities; no period inferred. |
| ROST-Q03 — engineering/security, before integration | Snapshot/as-of representation, generation outcome and evidence consistency; no print product or export mechanism selected. |
| ROST-Q04 — accessibility reviewer, before release | Accessible preparation, preview and alternative use appropriate to the approved workflow. |

## Plan and verification

Resolve applicable SDD-014/019 dependencies, SDD-003 evidence, SDD-021 reconciliation and SDD-024 privacy; actual per-installation custody and explicit implementation authority are required. Future authorized verification checks minimum fields, contact exclusions, access denial, as-of clarity, attribution, changed records, paper handling and accessible rendering. No roster was generated and no test, processing, approval or release is claimed.

