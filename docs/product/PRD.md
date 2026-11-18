# iTakda Product Requirements Reference

> **Status: Product Owner accepted the Session 01 PRD reference revision, following verification of the stated dispute/hold condition; see the review record below.** iTakda is the name used in the current documentation request; the [Charter](../PROJECT_CHARTER.md) says the official name is undecided. This reference summarizes, and does not replace or approve, source requirements. The effective development-stage baseline is [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), read with preserved [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and unchanged [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md); its trace is [revision 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md), read with preserved [revision 1.2](../requirements/REQUIREMENTS-TRACEABILITY-v1.2.md) and unchanged [revision 1.0](../requirements/REQUIREMENTS_TRACEABILITY.md). Approval for design assumptions does not mean stakeholder validated or implementation authorized.

## Purpose and audience

**Approved direction:** one maintained, configurable appointment-management product for small-to-medium appointment-driven service businesses with staffed front desks (D-041). Each client operates an independent installation with its own application environment, configuration, credentials and database. It is not shared multi-tenant SaaS (D-020/D-035). Configuration or approved extension, not client-specific forks of core scheduling, addresses client differences (NFR-004).

Actors include guests, optional registered customers, proxy bookers, attendees, authorized staff, supervisors, client administrators and technical operators. These are distinct contexts, not an approved permission matrix. Product operators have no default client-record access (FR-012/NFR-005).

## Approved development-stage scope

| Capability | Requirement anchors and boundaries |
|---|---|
| Services and availability | FR-001/018: client-configured services, schedules, resources, capacity and actual installation-local alternatives. |
| Booking | FR-002/003/013/022: account-free guest, optional registered, staff-assisted, proxy and walk-in paths; shared eligibility, duplicate and capacity rules; booker, attendee and acting staff remain distinct. |
| Customer access | FR-019–021: the approved customer-account capability supports verified email/password accounts where registration is enabled per installation. Using an account is optional for customers; individually authorized appointments, explicit individually verified linking, and scoped guest management remain subject to approved authority boundaries. Disabling registration stops new signup, not existing verified-account access or guest booking. |
| Staff management | FR-004: authorized internal users manage appointments and record attendance within approved role boundaries and client policy. |
| Changes and confirmation | FR-007/010, BR-013: authorized eligible cancellation/reschedule, atomic capacity effect, established outcome and accessible screen/print/screenshot confirmation. Unknown outcome requires reconciliation, not blind resubmission. |
| QR and attendance | FR-005/006/014: privacy-minimized QR/reference lookup; identity checking and explicit staff attendance actions remain separate. |
| Operations | FR-008/012/015–017 and NFR-011: attributable audit, controlled supervisor exceptions, minimum printable daily roster, reviewed paper-outage reconciliation and essential operational monitoring. |
| Email | D-095 and v0.8 §5: six purpose-limited categories: account verification, password recovery, scoped guest access, and established booking, cancellation and rescheduling. Recipient/content restrictions apply; delivery failure does not reverse a committed change. |

**Deferred/excluded:** FR-009 generic eligibility/masterlist and FR-011 advanced analytics; MVP cancellation/no-show penalties (D-089), payments/deposits, reminders, SMS/OTP, marketing, waitlists, multi-branch and offline booking synchronization. Unrelated service fees remain unresolved. See [v0.8 §7](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and the [decision register](../decisions/DECISION_REGISTER.md) for exact scope.

## Important product rules

- **Profile and booking:** Profile prefill requires notice; editing a booking does not silently change the saved profile or other bookings, and a profile edit is a separate action (FR-022, NFR-009, AC-023).
- **Disputes and deactivation:** A contested appointment link or a self-service cancellation/reschedule subject to a dispute hold is paused for assigned case review. Ordinary authorized and eligible changes follow the applicable approved rules without mandatory dispute review. While held, the affected action and its confirmation or email do not execute; the appointment and permitted staff attendance work remain intact. Deactivation ends account access without automatically cancelling appointments or erasing records required by approved policy (FR-007/019/021, BR-005/011/012/013, AC-021/025/026).
- **Confirmation and email:** The authorized viewer receives the required accessible on-screen, printable and screenshot-friendly confirmation. Purpose-limited email follows the recipient/content boundaries in v0.8 §5 and may disclose less; delivery failure cannot undo a committed change or trigger a duplicate command (FR-010, AC-024, D-095).
- **Protected actions:** State-changing operations require approved authentication, server-side authorization and validation. Guest booking remains account-free; guest management needs independently established appointment-scoped proof. Account, email, reference or QR possession alone does not grant unrelated appointment or attendee authority (NFR-003, FR-007/021, AC-015/017).
- **Configuration changes:** The provisionally accepted working design calls for assessing effects on existing bookings, without silently invalidating them (D-085(3), D-086; [component design §§4/6](../archive/legacy-sdlc/architecture-working-designs/COMPONENT_MODULE_DESIGN.md)). This is a working-design direction, not final architecture: the handling of affected appointments remains open.

## Fictional exploration and product validation

For initial learning and design exploration, use a **fictional, lower-sensitivity appointment service** with fictional people and invented example data. Any scenario-specific details are assumptions for illustration, not product requirements or evidence of user validation. This example does not narrow D-041's approved target segment.

Seek staged genuine feedback during relevant design work where participants are available; this is a planned approach, not a new mandatory gate. A genuine product-fit review remains required before release, together with the applicable independent privacy/security assessment, verification and separate release/deployment approval ([Engineering Governance §19](../ENGINEERING_GOVERNANCE.md#19-feature-completion-and-retained-approval-controls); D-077/D-098).

## Quality and success boundaries

**Approved target:** core workflows target WCAG 2.2 AA and the D-069 current/previous stable major browser policy; no conformance is claimed. D-070 requires a future contention test of 50 valid simultaneous requests for one remaining capacity unit: exactly one successful reservation and safe outcomes for the rest, without integrity violations. D-067's 20–100 appointments/day per installation is a planning profile, not a limit or concurrency target. Numeric response-time and availability targets remain open.

| Area | Approved source / direction | Evidence still required |
|---|---|---|
| Configuration and isolation | NFR-001/002/004; D-020/D-035; S-1/S-2 | Verify clean configuration without core scheduling-code edits and applicable isolation checks. |
| Booking integrity and concurrency | NFR-006/008; AC-005; D-070; S-3 | Verify approved normal, peak and contention profiles, including the 50-request case; no result is claimed. |
| Protected actions and security | NFR-003/005; AC-007; S-4; Engineering Governance §§11–12 | Verify applicable authentication, server-side authorization and validation, including scoped guest and operator boundaries. |
| Accessibility and workflow verification | NFR-007/010; AC-006/008; D-068/D-069; S-6/S-7 | Record applicable accessibility and required automated success, rejection, authorization and failure-path evidence; no conformance is claimed. |
| Security findings | D-071; S-5; Engineering Governance §16 | Resolve or disposition findings under the recorded rules; unresolved High/Critical security findings and Critical data-integrity defects block release. |
| Product fit | D-041/D-077; Engineering Governance §19 | Genuine product-fit review remains required before release; fictional exploration is not validation. |
| Operational and release readiness | Engineering Governance §§17/19; D-083/D-084/D-091 | Establish backups and a tested restore procedure before relying on installation data; retain applicable reviews, release evidence and separate Product Owner release/deployment approval. |

**Unresolved:** proof and recovery methods; staff permissions; retention, legal basis and notices; scheduling/capacity and duplicate policy values; QR lifecycle; proxy and dispute details; hosting responsibilities. Consult v0.8 §6 and the decision register before a feature materially depends on them.

## Related references

[Technical requirements](../technical/TRD.md) · [Application flows](../design/APP_FLOW_UI_UX.md) · [Security](../security/SECURITY.md) · [Feature process](../plans/IMPLEMENTATION_PLAN.md). The Charter revision in the working tree is itself draft; individually recorded approvals retain their stated scope.

## Session 01 review and acceptance

| Field | Record |
|---|---|
| Scope and disposition | Product Owner accepted the Session 01 PRD revision direction in this chat, conditional on verification that the dispute/hold wording applies only to approved contested cases. That condition was verified and the ambiguous sentence was clarified. The revised PRD reference is accepted for this documentation review; Session 01 is complete. |
| Approver and date | Product Owner; acceptance date not separately supplied. Record prepared 2026-11-11; the recording date is not represented as a separately supplied approval date. |
| Reviewer and verification | Codex compared the wording against FR-007, BR-005/011/013 and AC-021/025/026 in [v0.8 §§3–5](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md), with the D-094/D-095 exact-version approval disposition in the [Decision Register](../decisions/DECISION_REGISTER.md) §9.12–9.13 and [traceability revision 1.2](../requirements/REQUIREMENTS-TRACEABILITY-v1.2.md) §§5/8. Ordinary eligible changes follow their applicable rules; only contested actions subject to the approved hold boundaries await assigned case review. Links, the correction and the working-tree scope were checked as reported in the Session 01 closure chat. |
| Session decisions | PRD-Q01 = B: fictional lower-sensitivity exploration first. PRD-Q02 = A: concise product overview with rules and success/evidence coverage. PRD-Q03 = A: staged genuine feedback where available, with the existing pre-release product-fit review preserved. |
| Findings | PRD-F01 and PRD-F02 addressed at the documentation level through the product-rule summaries and success/evidence table; no implementation or validation result is asserted. |
| Limitations | This acceptance concerns this PRD reference only. It does not amend or supersede approved requirements or decisions, establish a new requirements baseline, resolve proof/case-review policy, validate product fit, approve architecture or implementation, establish runtime behavior or accessibility/security conformance, or approve release. Review was source-based and assisted by Codex; no independent human technical review is claimed. |

The acceptance record follows [Engineering Governance §5](../ENGINEERING_GOVERNANCE.md#5-spec-driven-development-lifecycle) for identifying the change, reviewer, verification, outcome and limitations, and §18 for recording Product Owner approval and an unsupplied approval date. No new decision-register entry or historical gate transition is implied.
