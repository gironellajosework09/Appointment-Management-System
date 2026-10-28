# Requirements Traceability — Appointment Management System

| Field | Value |
|---|---|
| Document status | DRAFT — Gate 1 Checkpoint 1; pending Product Owner review |
| Gate | Gate 1 (Requirements Discovery) — IN PROGRESS |
| Document date | 2026-10-28 |
| Revision | 0.3 (2026-10-28 — second bounded remediation; DRAFT) |
| Owner | Product Owner |

This matrix keeps traceability relationships distinct. A citation does not imply
validation or approval. Decisions (`D-###`), Product Owner items (`P-###`), and
questions (`Q-###`) occupy separate namespaces. Authoritative records remain in
the Charter, Decision Register, and Gate Register.

## 1. Requirement traceability matrix

| Requirement | Working status | Release priority | Provenance | Goals / success | Decisions | PO items | Official questions / draft-local QR prompts | Risks / assumptions / dependencies | Journeys / rules | Criteria | Planned activities | Actual evidence | Version approval reference/date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| FR-001 | DRAFT | Mandatory baseline | Charter G-1 | G-1 | — | P-003 | Q-005; Q-019 | R-1 (scope gap) | UJ-001; BR-001 | AC-001 | VAL-002; VAL-003 | None yet | None — not approved |
| FR-002 | DRAFT | Mandatory baseline | Charter G-1 | G-1 | — | P-003 | QR-L01–QR-L12 | — | UJ-001; UJ-002 | AC-002; AC-003; AC-004 | VAL-002; VAL-003; VAL-004 | None yet | None — not approved |
| FR-003 | DRAFT | Candidate v1 | Charter §5 topic; no stakeholder source | G-1 | D-030 | — | Q-001–Q-005; Q-019; Q-021 | R-1 (scope gap); R-2 (account model); A-2; DP-2 | UJ-001; BR-002 | AC-001 | VAL-001; VAL-002 | None yet | None — not approved |
| FR-004 | DRAFT | Candidate v1 | Charter §5 topic; no stakeholder source | G-1; G-3 | D-030 | — | Q-009; Q-018; Q-019 | A-6 | UJ-002 | — | VAL-003 | None yet | None — not approved |
| FR-005 | DRAFT | Mandatory baseline | Charter G-1/P-003 for capability; access path unverified | G-1 | — | P-003 | Q-015; QR-L01; QR-L02; QR-L05 | R-6 (data-exposure concern only) | UJ-001 | AC-002 | VAL-002; VAL-004 | None yet | None — not approved |
| FR-006 | DRAFT | Mandatory baseline | Charter G-1/P-003 for capability; outcome details unverified | G-1; G-3 | — | P-003 | Q-015; Q-018; QR-L02–QR-L12 | R-6 (data-exposure concern only) | UJ-002; BR-003 | AC-003; AC-004 | VAL-003; VAL-004 | None yet | None — not approved |
| FR-007 | DRAFT | Candidate v1 | Charter §5 topic; no stakeholder source | G-1; G-2 | — | — | Q-020; Q-021 | R-5 (unresolved integrity design) | UJ-003 | — | VAL-002; VAL-003 | None yet | None — not approved |
| FR-008 | DRAFT | Candidate v1 | Charter G-3 and §5 topic; details unverified | G-3 | D-029 | — | Q-015; QR-L09 | R-6 (audit/privacy gap) | — | — | VAL-004 | None yet | None — not approved |
| FR-009 | DRAFT | Optional | Charter §5 and A-3; no stakeholder source | — | — | — | Q-012; Q-023 | A-3 | — | — | VAL-001; VAL-002 | None yet | None — not approved |
| FR-010 | DRAFT | Optional | Charter §5 topic; no stakeholder source | — | — | — | Q-013 | — | — | — | VAL-001; VAL-002 | None yet | None — not approved |
| FR-011 | DRAFT | Optional | Charter §5 topic; no stakeholder source | — | — | — | Q-014 | — | — | — | VAL-001; VAL-003 | None yet | None — not approved |
| FR-012 | DRAFT | Candidate v1 | Charter §5 topic; D-030 actor, D-034 access constraint; support tasks unverified | G-3 (access boundary only) | D-030; D-034 | — | Q-008; Q-015 | — | UJ-004; BR-004 | AC-007 | VAL-006 | None yet | None — not approved |
| NFR-001 | DRAFT | Mandatory baseline | D-020; Charter G-1; A-1 is validation question | G-1; S-2 | D-020 | — | Q-006 (formal change review only); Q-008 | A-1 | — | — | VAL-001 | None yet | None — not approved |
| NFR-002 | DRAFT | Mandatory baseline | D-019; D-025; D-035 | G-7; S-2; S-9 | D-019; D-025; D-035 | — | — | R-10 (boundary; not proof of mitigation); DP-4 | — | — | None planned for CEAP access; later isolation review | None yet | None — not approved |
| NFR-003 | DRAFT | Mandatory baseline | D-021; D-029; Engineering Governance §12 | G-3; S-4 | D-021; D-029 | — | Q-002–Q-004; Q-009; Q-015; Q-018 | R-2 (auth gap); R-6 (exposure risk) | BR-003 | AC-003 | VAL-004 | None yet | None — not approved |
| NFR-004 | DRAFT | Mandatory baseline | D-021; Charter G-4 | G-4; S-1 | D-021 | — | Q-019 | — | — | — | VAL-001; VAL-005 | None yet | None — not approved |
| NFR-005 | DRAFT | Mandatory baseline | D-034; Charter §8 | G-3; S-4 | D-034 | — | Q-015 | R-6 (default-access concern) | UJ-004; BR-004 | AC-007 | VAL-004; VAL-006 | None yet | None — not approved |
| NFR-006 | DRAFT | Mandatory baseline | D-029; Charter G-2 | G-2; S-3 | D-029 | — | Q-005; Q-019; Q-021 | R-5 (unresolved concurrency/integrity) | BR-001; BR-002 | AC-001; AC-005 | VAL-003; VAL-005 | None yet | None — not approved |
| NFR-007 | DRAFT | Mandatory baseline | Charter G-6 | G-6; S-7 | D-021; D-029 | — | Q-011 | — | — | AC-006 | VAL-002; VAL-003; VAL-005 | None yet | None — not approved |
| NFR-008 | DRAFT | Mandatory baseline | Charter G-8, G-11; service targets unverified | G-8; G-11 | — | P-004 (provisional targets only) | Q-016; Q-022 | — | — | — | VAL-001; VAL-005 | None yet | None — not approved |
| NFR-009 | DRAFT | Candidate v1 | Charter G-3; Q-015; data rules unverified | G-3 | D-029 | — | Q-015 | R-6 (privacy gap) | BR-003 | — | VAL-004 | None yet | None — not approved |
| NFR-010 | DRAFT | Mandatory baseline | Charter G-5/G-9/G-10; S-6 (P-004 conditional); Engineering Governance §14 | G-5; G-9; G-10; S-6 | D-021; D-022 | P-003; P-004 | Q-005; Q-019–Q-021 (test cases depend on rules) | — | — | AC-008 | VAL-005 | None yet | None — not approved |

The working version of every row is v0.3; the effective approved version of
every row is `None yet`. The per-version history and disposition metadata are in
the specification §4. Planned activities do not constitute evidence; source
approvals (including P-003 and conditional P-004) do not approve these rows.

## 2. Assumption validation view required for Gate 1

| Assumption | Gate 1 disposition needed | Linked records | Planned validation | Current evidence |
|---|---|---|---|---|
| A-1 | Validate fit of D-020's approved independent-installation model with representative needs; alternative model requires formal change review, not assumption validation alone. | NFR-001; D-020 | VAL-001 | None yet |
| A-2 | Establish whether representative client/user stakeholders can be accessed. | FR-003; all stakeholder-dependent drafts | VAL-001 recruitment record | None yet; DP-2 unresolved |
| A-3 | Validate that eligibility/masterlist import is not automatically required. | FR-009 | VAL-001; VAL-002 | None yet |
| A-6 | Validate that at least one administrator/staff account exists before public use. | FR-004; UJ-002; Q-009 (account provisioning unresolved) | None planned | None yet |

## 3. Success-criterion coverage view

| Success criterion | Draft coverage | Remaining Gate 1 gap |
|---|---|---|
| S-1 | NFR-004; NFR-001 is a deployment constraint, not proof of configuration walkthrough | Measurable configuration/install target and evidence owner |
| S-2 | NFR-002 | Measurable isolation criterion; later design/test evidence |
| S-3 | NFR-006; NFR-008; AC-005 | Duplicate/capacity definitions, atomicity, concurrency load and target |
| S-4 | NFR-003; NFR-005 (operator boundary) | Confirmed authentication/authorization model, all state-changing operations and measurable coverage |
| S-5 | Engineering Governance §16 finding handling; D-038 blocks critical unresolved defects but does not set S-5's high-severity threshold | Approved severity scheme, evidence and release threshold for S-5 |
| S-6 | NFR-010; AC-008; Engineering Governance §14 | Core-workflow definition and automated-test coverage target |
| S-7 | NFR-007; AC-006 | Approved accessibility standard, scope, devices, and conformance target |
| S-8 | Engineering Governance §§6, 9, 15; draft governance/specification/traceability records | Gate 1 documentation review evidence; later-gate artifacts still required |
| S-9 | NFR-002 | Ongoing scope/isolation review evidence; no CEAP access performed |

S-1–S-7 still lack final measurable targets or standards. S-8 and S-9 are
verifiable without numeric targets but still require evidence at the applicable
gate.

## 4. Market and commercial question view

| Question | Affected scope | Planned validation | Current state |
|---|---|---|---|
| Q-001 — target customer | Candidate workflows FR-003–FR-004, FR-007–FR-012; service/privacy details NFR-008–NFR-009; priorities and terminology (approved G-1, G-8 and D-020 boundaries remain) | VAL-001 | Open; no validated segment or representative sample |
| Q-010 — commercial model | Candidate-v1 priority, support commitments, service expectations | VAL-001 | Open; no pricing, support, or service commitment may be inferred |

## 5. Gate 1 deliverable and exit coverage

| Gate Register §4 item | Current draft coverage | Missing evidence or decision |
|---|---|---|
| Functional and non-functional specification | FR-001–FR-012; NFR-001–NFR-010 | Review, validation, and Product Owner approval |
| Validated target customer | Q-001; VAL-001 | Representative evidence and Product Owner disposition |
| Public, administrator/staff, and operator journeys | UJ-001–UJ-004 | Stakeholder walkthrough evidence; all remain DRAFT |
| Scheduling/booking/cancellation/rescheduling/duplicate rules | BR-001–BR-002 are only invariants; FR-001; FR-003; FR-007; NFR-006 | Scheduling availability/slots, booking identity/confirmation, cancellation/rescheduling eligibility and outcomes, capacity release, exceptions and concurrency rules all incomplete (Q-005, Q-019–Q-021) |
| Confirmed user/authentication model | FR-003–FR-004; UJ-001–UJ-002 | Q-002–Q-004, Q-009, Q-018 unresolved |
| A-1–A-3 and A-6 validated/corrected | §2 | No evidence yet; DP-2 blocks representative validation |
| Risk register update | Selective contextual links to Charter risks in §1; no Gate 1 risk update | R-1–R-10 require assessment and updates; absence of links is not mitigation |
| Measurable criteria for S-1–S-7 | §3; VAL-005 | Targets/standards and Product Owner agreement absent |
| Decision Register updated | Questions cited only | No question resolved and no new decision recorded by these drafts |
| Requirements reviewed | Checkpoint remediation only | No stakeholder or Product Owner review evidence yet |
| Blocking questions resolved/deferred | Open-question links | None resolved or explicitly deferred |
| Product Owner approves Gate 1 | No coverage possible in a draft | Explicit Gate 1 exit approval absent |

## 6. Approval and evidence view

| Record set | Working version / review status | Effective approved version | Planned activities | Actual evidence | Version approval reference/date | Disposition rationale |
|---|---|---|---|---|---|---|
| FR-001–FR-012 | v0.3 / DRAFT | None yet | §1 per row | None yet | None — not approved | Not applicable |
| NFR-001–NFR-010 | v0.3 / DRAFT | None yet | §1 per row | None yet | None — not approved | Not applicable |
| UJ-001–UJ-004; BR-001–BR-004; AC-001–AC-008 | v0.3 / DRAFT | None yet | Validation plan §3; not evidence | None yet | None — not approved | Not applicable |
| Requirements Governance draft | v0.3 / DRAFT | None yet | None planned | None yet; internal consistency checks are not stakeholder evidence | None — pending Product Owner review | Not applicable |
| Charter Revision 1.0 | DRAFT | P-001 Gate 0 artifact as recorded at Revision 0.5; later revisions unapproved; P-002/P-003/P-004 retain separate recorded scope | None yet | None yet | None — pending Product Owner review | Not applicable |

## 7. Release-priority view

| Priority | Records | Meaning / unresolved dependency |
|---|---|---|
| Mandatory baseline | FR-001; FR-002; FR-005; FR-006; NFR-001–NFR-008; NFR-010 | Approved source constraint exists; draft wording is not approved and detailed behavior remains open |
| Candidate v1 | FR-003; FR-004; FR-007; FR-008; FR-012; NFR-009 | Requires target-customer and workflow evidence plus Product Owner prioritization; FR-012 support tasks are unverified |
| Optional | FR-009–FR-011 | No evidence establishes inclusion; must not be treated as v1 scope |

## 8. Coverage gaps

- No `EVD-###` representative-stakeholder evidence exists.
- DP-2 remains unresolved, so stakeholder validation cannot yet be demonstrated.
- Detailed QR issuance, activation, expiry, revocation, recovery, repeated-scan/
  consumption, staff confirmation, attendance, outage/reconciliation, atomicity,
  exception, and audit rules (QR-L01–QR-L12) remain unverified and undecided.
- G-5 maintainability and G-9 engineering practice are tracked through D-021,
  Engineering Governance §§6, 9, 14–15 and the future Gate 2 design review;
  NFR-010 addresses their testability component, not every practice. G-10 and
  S-6 link to NFR-010/AC-008, with actual test results required later.
- Risk links in §1 identify concerns only: R-1/R-2/R-5/R-6/R-10 remain open;
  R-3 (CEAP-derived policy), R-4 (versions), R-7 (hosting/backup), R-8
  (commercial model), and R-9 (assumptions) remain in the Charter/Decision
  Register discovery or later-gate controls, not covered by a drafted feature.
- Legal/privacy expertise, jurisdiction, data rules, measurable targets, and
  evidence storage are unresolved.
- Historical D-001–D-018 remain unavailable under Q-017 and are not guessed.
- Gate 1 is in progress, not approved for exit; implementation remains
  unauthorized.
