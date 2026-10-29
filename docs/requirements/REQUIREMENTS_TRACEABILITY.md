# Requirements Traceability — Appointment Management System

| Field | Value |
|---|---|
| Document status | APPROVED DEVELOPMENT-STAGE BASELINE — D-081, 2026-10-29; not representative validation |
| Gate | Gate 1 (Requirements Discovery) — COMPLETE (APPROVED); Gate 2 documentation authorized |
| Document date | 2026-10-28 |
| Revision | 1.0 (2026-10-29 — D-067–D-075 directions and v0.7 baseline traced; exact baseline approved under D-081) |
| Owner | Product Owner |

This matrix keeps traceability relationships distinct. A citation does not imply
validation or approval. The exact v0.7 baseline is approved for development-stage
design under D-081; records are not `VALIDATED` unless separately supported by real,
representative reviewed EVD evidence. Decisions (`D-###`), Product Owner items
(`P-###`), and questions (`Q-###`) occupy separate namespaces. Authoritative records
remain in the Charter, Decision Register, and Gate Register.

## 0.1 Exact baseline approval record

| Field | Value |
|---|---|
| Decision | D-081 |
| Approved version | Requirements Specification v0.7 traced by revision 1.0 |
| Approval date | 2026-10-29 |
| Approver | Product Owner |
| Classification | Development-stage assumption baseline; not `VALIDATED` evidence |
| Deferred records | FR-009 and FR-011 remain `DEFERRED` under D-042 |

## 1. Requirement traceability matrix

Working-version labels remain visible for history. The effective disposition is the
D-081 development-stage baseline recorded in §0.1 and §6: active records are
approved assumptions, while FR-009 and FR-011 are `DEFERRED` by D-042. Discovery
evidence is not formal validation, and no record is marked `VALIDATED`.

| Requirement | Priority | Provenance / decisions | Goals / success | Questions / risks / assumptions | Journeys / rules | Criteria | Planned validation | Discovery evidence |
|---|---|---|---|---|---|---|---|---|
| FR-001 | Mandatory baseline | D-041–D-043; D-060 | G-1; G-4; S-1 | Q-019; R-1 | UJ-001; BR-001; BR-005 | AC-001 | VAL-001; VAL-003; VAL-005 | EVD-001–EVD-003; EVD-005–EVD-006 |
| FR-002 | Mandatory baseline | G-1; D-042; D-044 | G-1; G-2; S-3 | Q-005; Q-021; R-5 | UJ-001; BR-001–BR-002 | AC-001; AC-005 | VAL-002; VAL-003; VAL-005 | EVD-001–EVD-004 |
| FR-003 | Mandatory baseline | D-046 | G-1 | Q-004 resolved; A-2 | UJ-001; BR-002; BR-006 | AC-001 | VAL-002 | EVD-001–EVD-002; EVD-004 |
| FR-004 | Mandatory baseline | D-047 | G-1; G-3; S-4 | Q-009; Q-018; A-6 | UJ-002; UJ-005; BR-007–BR-008 | AC-003; AC-009 | VAL-003 | EVD-001–EVD-003; EVD-006 |
| FR-005 | Mandatory baseline | G-1/P-003; D-045 | G-1; S-4 | Q-015; QR-L01–QR-L05; R-6 | UJ-001; BR-003 | AC-002 | VAL-002; VAL-004 | EVD-003–EVD-004 |
| FR-006 | Mandatory baseline | G-1/P-003; D-045 | G-1; G-3; S-4 | QR-L02–QR-L12; R-6 | UJ-002; BR-003; BR-008 | AC-003–AC-004 | VAL-003; VAL-004 | EVD-003–EVD-004 |
| FR-007 | Mandatory baseline | D-042; D-049 | G-1; G-2 | Q-020; Q-021; R-5 | UJ-003; BR-005; BR-008 | AC-009 | VAL-002; VAL-003 | EVD-001–EVD-004 |
| FR-008 | Mandatory baseline | D-047–D-050; D-073 | G-3; S-4 | Q-014; Q-015; QR-L09; R-6 | BR-004; BR-007–BR-009 | AC-007; AC-011–AC-012 | VAL-003; VAL-004; VAL-005; VAL-006 | EVD-001–EVD-003 |
| FR-009 | Optional; DEFERRED | D-042 | — | Q-012; Q-023; A-3 | — | — | None while deferred | EVD-003 contextual only |
| FR-010 | Mandatory baseline | D-049; D-065 | G-1 | Q-013 | UJ-001; UJ-003 | AC-002; AC-009 | VAL-002 | EVD-001–EVD-004; EVD-007 |
| FR-011 | Optional; DEFERRED | D-042; D-051; D-073 | — | Q-014 resolved for monitoring; advanced reporting remains deferred | — | — | None while deferred | EVD-001–EVD-003 |
| FR-012 | Mandatory baseline | D-034; D-047; D-050; D-075 | G-3; S-4 | Q-008; Q-015; R-6 | UJ-004; BR-004; BR-007 | AC-007 | VAL-004; VAL-006 | None; boundary is decision-derived |
| FR-013 | Mandatory baseline | D-046; D-064 | G-1; G-6 | Q-004; Q-015 | UJ-005; BR-006 | AC-010 | VAL-001; VAL-002; VAL-003; VAL-004 | EVD-001–EVD-004; EVD-005–EVD-007 |
| FR-014 | Mandatory baseline | D-045; D-047 | G-1; G-3 | Q-018; QR-L10–QR-L11 | UJ-002; UJ-005; BR-008 | AC-004 | VAL-003; VAL-004 | EVD-001; EVD-003 |
| FR-015 | Mandatory baseline | D-048 | G-2; G-3 | Q-018–Q-019 | UJ-005; BR-001; BR-007 | AC-011 | VAL-003; VAL-004 | EVD-001–EVD-003 |
| FR-016 | Mandatory baseline | D-051; D-074 | G-11 | Q-014; Q-022; QR-L12 | UJ-005; BR-009 | AC-012 | VAL-003; VAL-004; VAL-005 | EVD-001–EVD-004; EVD-005–EVD-006 |
| FR-017 | Mandatory baseline | D-051; D-063; D-074 | G-2; G-11 | Q-022; QR-L12; R-5; R-7 | UJ-005; BR-009 | AC-012 | VAL-003; VAL-004; VAL-005 | EVD-001–EVD-004; EVD-005–EVD-006 |
| FR-018 | Mandatory baseline | D-066 | G-1 | Q-005; Q-019; R-5 | UJ-001; BR-001; BR-005 | AC-013 | VAL-001; VAL-002; VAL-003 | EVD-001–EVD-004; EVD-007 |
| NFR-001 | Mandatory baseline | D-020 | G-1; S-2 | A-1; Q-006; Q-008 | — | — | VAL-001 | None yet for deployment-model fit |
| NFR-002 | Mandatory baseline | D-019; D-025; D-035 | G-7; S-2; S-9 | R-10; DP-4 | — | — | Later isolation review | None; baseline constraint |
| NFR-003 | Mandatory baseline | D-021; D-029; D-045–D-050 | G-3; S-4–S-5 | Q-009; Q-015; Q-018; R-2; R-6 | BR-003–BR-004; BR-007–BR-008 | AC-003; AC-007 | VAL-004 | EVD-003–EVD-004 partial |
| NFR-004 | Mandatory baseline | D-021; D-043 | G-4; S-1 | Q-019 | BR-005 | — | VAL-003; VAL-005 | EVD-001–EVD-003 |
| NFR-005 | Mandatory baseline | D-034; D-047; D-050 | G-3; S-4 | Q-015; R-6 | UJ-004; BR-004; BR-007 | AC-007 | VAL-004; VAL-006 | None; boundary is decision-derived |
| NFR-006 | Mandatory baseline | D-029; D-043–D-044; D-048 | G-2; S-3 | Q-019; Q-021; R-5 | BR-001–BR-002 | AC-001; AC-005; AC-009; AC-011 | VAL-003; VAL-005 | EVD-001–EVD-003 |
| NFR-007 | Mandatory baseline | D-052; D-069 | G-6; S-7 | Q-011; environment matrix/evidence ownership | — | AC-006 | VAL-002; VAL-003; VAL-005 | EVD-004; EVD-006–EVD-007 usability context |
| NFR-008 | Mandatory baseline | D-052; D-067; D-070 | G-8; G-11; S-3 | Q-016; Q-022 | — | AC-005 | VAL-005 | EVD-001–EVD-003 operational context |
| NFR-009 | Mandatory baseline | D-050 | G-3; S-4 | Q-015; R-6 | BR-003–BR-004; BR-006; BR-009 | AC-002; AC-010; AC-012 | VAL-004 | EVD-004; EVD-007 privacy expectations only |
| NFR-010 | Mandatory baseline | D-052; D-068 | G-5; G-9; G-10; S-6 | Workflow inventory defined; evidence ownership remains | — | AC-008 | VAL-005 | EVD-006 operational context; quality direction remains decision-derived |
| NFR-011 | Mandatory baseline | D-047–D-051; D-073 | G-3; G-11 | Q-015; R-6; R-7 | BR-004; BR-007; BR-009 | AC-011–AC-012 | VAL-003; VAL-004; VAL-005; VAL-006 | EVD-001–EVD-003; EVD-005–EVD-006 |

## 2. Assumption validation view required for Gate 1

| Assumption | Gate 1 disposition needed | Linked records | Planned validation | Current evidence |
|---|---|---|---|---|
| A-1 | Validate fit of D-020's approved independent-installation model with representative primary-segment needs; another model still requires formal change review. | NFR-001; D-020; D-041 | VAL-001 | EVD-005 discusses operations but does not establish deployment-model fit or representative validation |
| A-2 | Establish access to relevant primary-segment stakeholders. | All stakeholder-dependent drafts | VAL-001 | EVD-001, EVD-002, and EVD-004 establish access occurred; representativeness and sampling remain unverified |
| A-3 | Validate that eligibility/masterlist import is not automatically required for the primary-segment MVP. | FR-009; D-042 | VAL-001; VAL-002 | EVD-001–EVD-002 and EVD-004 support non-eligibility commercial workflows; formal review remains |
| A-6 | Validate that at least one individually accountable administrator/staff account exists before public use. | FR-004; NFR-011; UJ-002; Q-009 | VAL-003 | EVD-001–EVD-003 and EVD-006 show staff roles; account/provisioning requirement still needs formal walkthrough |

## 3. Success-criterion coverage view

| Success criterion | Draft coverage | Remaining Gate 1 gap |
|---|---|---|
| S-1 | NFR-001; NFR-004; D-052 | Target approved provisionally; clean-environment definition and evidence owner remain |
| S-2 | NFR-002; D-052 | Target approved provisionally; later architecture and isolation-test evidence remain |
| S-3 | NFR-006; NFR-008; AC-005; D-052; D-067; D-070 | Zero-violation target and 50-request/one-capacity-unit contention result approved; implementation, response-time, and test evidence remain |
| S-4 | NFR-003; NFR-005; D-052 | 100% state-change control target approved; operation inventory, scoped guest-authentication mechanism, and later evidence remain |
| S-5 | D-038; D-052; D-071; Engineering Governance §16 | Zero known high/critical release target and severity method approved; later review evidence remains |
| S-6 | NFR-010; AC-008; D-052; D-068 | 100% D-068-core-workflow test target approved; later test results and evidence remain |
| S-7 | NFR-007; AC-006; D-052; D-068; D-069 | WCAG 2.2 AA and supported browser-family policy approved; environment matrix and later conformance evidence remain |
| S-8 | Engineering Governance §§6, 9, 15; draft governance/specification/traceability records | Gate 1 documentation review evidence; later-gate artifacts still required |
| S-9 | NFR-002 | Ongoing scope/isolation review evidence; no CEAP access performed |

S-1–S-7 now have provisional measurable targets, not test results or final
release evidence. Later approved profiles and verification remain required.

## 4. Market and commercial question view

| Question | Affected scope | Planned validation | Current state |
|---|---|---|---|
| Q-001 — target customer | All MVP records | VAL-001 | Product Owner selected the segment in D-041; EVD-001/EVD-002/EVD-004 provide discovery support; formal validation and representativeness remain open |
| Q-010 — commercial model | Candidate-v1 priority, support commitments, service expectations | Gate 6 | DEFERRED to Gate 6 by D-055 (2026-10-29); detailed commercial pricing, licensing fees, and support-package pricing are outside Gate 1 scope; D-020 preserved. Architecture-required deployment/support assumptions remain to be identified at the appropriate gate. |

## 5. Gate 1 deliverable and exit coverage

| Gate Register §4 item | Current draft coverage | Missing evidence or decision |
|---|---|---|
| Functional and non-functional specification | FR-001–FR-018; NFR-001–NFR-011 | Formal review, validation, and exact-version Product Owner approval |
| Validated target customer | D-041; Q-001; VAL-001; EVD-001–EVD-007 | Selection and follow-up discovery support exist; representative/formal primary-segment validation remains |
| Public, administrator/staff, and operator journeys | UJ-001–UJ-005 | Partial discovery support exists; formal walkthrough evidence remains |
| Scheduling/booking/cancellation/rescheduling/duplicate rules | BR-001–BR-002; BR-005–BR-009; D-043–D-051 | Universal direction exists; configurable client values and formal walkthrough remain |
| Confirmed user/authentication model | D-046–D-048; FR-003–FR-004; FR-012–FR-015 | Guest/account direction and role boundaries exist; internal authentication/provisioning mechanism remains Gate 2 work after formal Gate 1 review |
| A-1–A-3 and A-6 validated/corrected | §2 | Partial discovery support exists; formal review and A-6 confirmation remain |
| Risk register update | Charter §13 revised for Gate 1 | Owners, treatments, and residual assessments require Product Owner review |
| Measurable criteria for S-1–S-7 | Specification §5.1; §3; D-052 | Provisional targets approved; test profiles/evidence remain later-gate work |
| Decision Register updated | D-041–D-075; question dispositions | D-055 records the Q-010 deferral; D-056–D-075 record the boundary, workflow, quality, monitoring, roster, and operator directions |
| Requirements reviewed | D-040 checkpoint, D-077/D-081, and exact v0.7 review | Development-stage baseline approved; representative stakeholder walkthrough remains outstanding |
| Blocking questions resolved/deferred | D-041–D-081; Q-010 deferred to Gate 6 by D-055; Q-014 resolved by D-073; D-079 milestones recorded | Exact client policies and genuine validation remain later-gate obligations |
| Product Owner approves Gate 1 | No coverage possible in a draft | Explicit Gate 1 exit approval absent |

## 6. Approval and evidence view

| Record set | Working version / review status | Effective approved version | Planned activities | Actual evidence | Version approval reference/date | Disposition rationale |
|---|---|---|---|---|---|---|
| FR-001 | v0.5 / APPROVED development assumption | v0.5 / D-081 / 2026-10-29 | §1 per row | EVD-001–EVD-004 as cited; discovery only | D-081 / 2026-10-29 | Not `VALIDATED`; buffer policy remains configurable |
| FR-002–FR-008; FR-012; FR-014–FR-016 | v0.4 / APPROVED development assumption | v0.4 / D-081 / 2026-10-29 | §1 per row | EVD-001–EVD-004 as cited; discovery only | D-081 / 2026-10-29 | Not `VALIDATED`; later design/review obligations remain |
| FR-010; FR-013; FR-017; FR-018 | v0.7 / APPROVED development assumption | v0.7 / D-081 / 2026-10-29 | §1 per row | EVD-001–EVD-007 as cited; discovery/follow-up only | D-081 / 2026-10-29 | Not `VALIDATED`; simulated material is design input only |
| FR-009; FR-011 | v0.4 / DEFERRED | None yet | None while deferred | Discovery context only | D-042; approval date not recorded | Generic eligibility/masterlist and advanced reporting/analytics deferred from MVP |
| NFR-001–NFR-011 | v0.7 / APPROVED development assumption | v0.7 / D-081 / 2026-10-29 | §1 per row | EVD-001–EVD-007 as cited; discovery/follow-up only | D-081 / 2026-10-29 | Not `VALIDATED`; security/privacy and test evidence remain later obligations |
| UJ-002–UJ-004; BR-001, BR-003–BR-005, BR-007–BR-008; AC-003–AC-009; AC-011 | v0.4 / APPROVED development assumption | v0.4 / D-081 / 2026-10-29 | Validation plan §3; not evidence | EVD-001–EVD-004 provide partial discovery support | D-081 / 2026-10-29 | Not `VALIDATED`; policy milestones remain binding |
| BR-002; AC-001 | v0.5 / APPROVED development assumption | v0.5 / D-081 / 2026-10-29 | Validation plan §3; not evidence | EVD-001–EVD-004 provide partial discovery support | D-081 / 2026-10-29 | Duplicate policy remains configurable; not `VALIDATED` |
| UJ-001; UJ-005; BR-006; BR-009; AC-002; AC-010; AC-012; AC-013 | v0.7 / APPROVED development assumption | v0.7 / D-081 / 2026-10-29 | Validation plan §3; not evidence | EVD-001–EVD-007 provide partial discovery/follow-up support | D-081 / 2026-10-29 | Not `VALIDATED`; QR, roster, and reconciliation details remain open |
| Requirements Governance draft | v0.4 / DRAFT | None yet | None planned | Internal consistency checks are not stakeholder evidence | None — pending Product Owner review | Not applicable |
| Charter Revision 1.3 | DRAFT | P-001 Gate 0 artifact as recorded at Revision 0.5; later revisions unapproved; P-002/P-003/P-004 and D-041–D-075 retain separate recorded scope | None yet | EVD-001–EVD-007 support Gate 1 discovery only | None — pending exact-revision Product Owner review | Not applicable |

## 7. Release-priority view

| Priority | Records | Meaning / unresolved dependency |
|---|---|---|
| Mandatory baseline | FR-001–FR-008; FR-010; FR-012–FR-018; NFR-001–NFR-011 | Development-stage baseline approved under D-081; not `VALIDATED` and not release approval |
| Optional (DEFERRED) | FR-009; FR-011 | Generic eligibility/masterlist and advanced reporting are outside MVP under D-042; identifiers are retained |

## 8. Coverage gaps

- EVD-001–EVD-004 are discovery evidence, not proof of representative sampling
  or completed formal validation.
- EVD-005–EVD-007 are registered from `FOLLOW_UP_INTERVIEWS.md` as supplied
  follow-up summaries of v0.4. They strengthen workflow coverage but do not establish
  representative sampling, formal v0.7 validation, or stakeholder approval; VAL-001–
  VAL-003 remain partially supported.
- D-059 and D-060 refined BR-002, AC-001, and FR-001 wording; D-063–D-066 refined
  FR-010/FR-013/FR-017, BR-006/BR-009, UJ-001/UJ-005, AC-002/AC-010/AC-012, and
  added FR-018/AC-013, without changing requirement status. D-056–D-058 and D-062
  preserve the MVP boundary.
- DP-2 is partially addressed because real stakeholders were reached; the sample's
  selection, count, and representativeness remain unverified.
- Detailed QR issuance, activation, expiry, revocation, recovery, repeated-scan/
  consumption, staff confirmation, attendance, outage/reconciliation, atomicity,
  exception, and audit rules (QR-L01–QR-L12) remain unverified and undecided.
- G-5 maintainability and G-9 engineering practice are tracked through D-021,
  Engineering Governance §§6, 9, 14–15 and the future Gate 2 design review;
  NFR-010 addresses their testability component, not every practice. G-10 and
  S-6 link to NFR-010/AC-008, with actual test results required later.
- Risk links in §1 identify concerns only: R-1/R-2/R-5/R-6/R-10 remain open;
  R-3 (CEAP-derived policy), R-4 (versions), R-7 (hosting/backup), R-8
  (commercial model — Q-010 deferred to Gate 6 by D-055), and R-9 (assumptions)
  remain in the Charter/Decision Register discovery or later-gate controls, not
  covered by a drafted feature.
- D-067–D-075 add the workload, workflow inventory, supported-browser policy,
  contention acceptance, severity method, evidence-role distinction, Q-014
  monitoring disposition, roster custody fields, and operator responsibility
  direction without creating results or named approvals.
- Legal/privacy expertise, jurisdiction, exact retention/deletion rules, formal
  review records, and approved evidence ownership remain unresolved.
- Historical D-001–D-018 remain unavailable under Q-017 and are not guessed.
- Gate 1 is in progress, not approved for exit; implementation remains
  unauthorized.
