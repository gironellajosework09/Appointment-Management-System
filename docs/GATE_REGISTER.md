# Gate Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | Approved as a Gate 0 baseline artifact (P-001) — 2026-10-22 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 1.27 (D-121 Gate 2 closure recorded 2026-11-17; approval date not separately supplied) |
| Owner | Product Owner |

This register tracks gate status and defines, for each gate: purpose, required
inputs and prerequisites, required deliverables and evidence, exit criteria,
approval authority, blockers/dependencies, and current status.

A gate is only `COMPLETE (APPROVED)` on the record of explicit product-owner
approval. No AI tool may set or imply a gate approval.

---

## 1. Status Definitions

| Status | Meaning |
|---|---|
| IN PROGRESS | Actively being worked; not yet approved |
| NOT STARTED | Work has not begun, and no current blocker has been recorded for this gate |
| BLOCKED | A prerequisite, approval, or required condition for this gate is unmet |
| COMPLETE (APPROVED) | All exit criteria met and explicitly approved by the product owner |

---

## 2. Gate Status Summary

| Gate | Name | Status |
|---|---|---|
| Gate 0 | Project Initiation & Governance | **COMPLETE (APPROVED)** — 2026-10-22 |
| Gate 1 | Requirements Discovery | **COMPLETE (APPROVED)** — 2026-10-29 |
| Gate 2 | Architecture & Design | **COMPLETE (APPROVED)** — D-121; recorded 2026-11-17, approval date not separately supplied |
| Gate 3 | Security & Data Integrity Design Review | **Historical planned stage** — review control retained independently where applicable |
| Gate 4 | Authorized Implementation | **Historical planned stage** — implementation authorization remains feature/risk-scoped under D-098 |
| Gate 5 | Verification & Testing | **Historical planned stage** — verification remains required for feature acceptance |
| Gate 6 | Release Readiness & Deployment Approval | **Historical planned stage** — separate release/deployment approval retained |
| Gate 7 | Production Operations & Maintenance | **Historical planned stage** — ongoing operational controls retained |

Notes:

- **Current Gate 2 disposition (D-121):** The Product Owner personally reviewed the closure evidence under D-120, accepted CP12 alternative evidence and the final architecture review within their recorded limitations, and approved Gate 2 closure. Fourteen missing-source historical findings remain unassessed; the accepted prototype is an incomplete UI/UX baseline, not an exhaustive implementation specification. The older dated status notes below describe their historical points in time. No implementation, release, deployment, specialist sign-off or production readiness follows.
- Gate 0 is `COMPLETE (APPROVED)` as of 2026-10-22 (§3, §13).
- Gate 1 is `COMPLETE (APPROVED)` under D-082 (2026-10-29); its earlier entry
  authorization on 2026-10-28 was limited to requirements analysis and documentation.
- **D-098 transition:** Routine future product changes use SDD, not sequential gate progression.
  Gate 2 remains historically `IN PROGRESS` and unfinished; it was not completed or accepted.
  Its unfinished routine progression obligations are superseded prospectively. Former Gates 3–7
  are historical planned stages, not routine prerequisites; applicable security/data-integrity,
  verification, release/deployment, and operational controls remain independent requirements.
- **2026-11-12 documentation approvals:** Requirements Specification v0.9 and Traceability revision
  1.3 are effective for their stated amendment; v0.8/revision 1.2 and earlier versions remain
  preserved. SDD-001 v0.3, SDD-023 v0.2, SDD-002 v0.4 and SDD-003 v0.4 are individually
  approved as provisional feature specifications within their documented scopes. Gate 2 remains
  historically IN PROGRESS; Checkpoint 11 was unaccepted at the time of those approvals and was
  separately accepted on 2026-11-13 (D-112). No implementation is authorized.
- **2026-11-13 Batch 2 W2 approvals:** SDD-004 v0.1, SDD-007 v0.2, SDD-008 v0.1, SDD-025 v0.1
  and SDD-026 v0.1 are individually approved as provisional specifications within their documented
  scopes. Earlier separate approval provenance for SDD-007 v0.1 and SDD-025 v0.1 is preserved;
  SDD-007 v0.2 is current without backdating. Approval dates were not separately supplied. Gate 2
  remains historically IN PROGRESS; Checkpoint 11 was unaccepted at the time of those approvals and
  was separately accepted on 2026-11-13 (D-112). No implementation is authorized.
  This process transition grants no feature or production implementation authorization.
  Unresolved policy items previously tied to Gate 2, Gate 3, or Gate 6 remain open; their former
  gate-based deadlines are historical. Under SDD, resolve each before implementing a feature it
  materially affects, or before an applicable security/data-integrity or release review. D-079's
  policy questions and existing decisions are not answered or rewritten by this transition.
- **2026-11-13 SDD-005 approval:** The Product Owner provisionally approved SDD-005 v0.2 as a
  specification within its documented scope, retaining SCH-Q01–SCH-Q08 as detailed open questions.
  This is not implementation authorization, technical mechanism selection, implementation
  acceptance, Gate 2 closure, or Checkpoint 11 acceptance. Gate 2 remains historically
  `IN PROGRESS`; no other session or checkpoint status changes.
- **2026-11-13 CP11 acceptance:** The Product Owner accepted Checkpoint 11 within its documented
  design and prototype scope as representative design evidence under D-093 (D-112), including the
  administrator appointment-review → permission-denial → unchanged-appointment journey. The
  prototype is illustrative and is not required to implement every approved SDD workflow; all
  applicable approved SDD requirements remain mandatory for implementation, verification and
  release unless formally changed or deferred through approved governance. Acceptance does not
  establish real authentication, MFA, authorization enforcement, persistence, full accessibility
  conformance, qualified specialist approval or production readiness. Historical Gate 2 remains
  IN PROGRESS and unfinished; CP12 and final review are not recorded complete. No implementation,
  deployment, Git write, Gate 2 closure or CP12 initiation is authorized.
- D-088 provisionally accepts the fingerprinted Checkpoint 7 logical data design
  solely for continued Gate 2 work; D-089 separately excludes cancellation and
  no-show penalties from MVP. Neither approves final architecture or closes Gate 2.
- D-094/D-095 and the exact Requirements Specification v0.8 / Traceability revision 1.2
  are approved as a development-stage assumption baseline under Decision Register revision
  1.19. The D-089 fee-reference amendment is recorded in v0.8/AC-009; unrelated service
  fees remain undecided. D-081/v0.7 and Traceability revision 1.0 remain preserved as
  historical baseline records; this changes no product requirement or traceability status.
- At the time of D-096, the Product Owner authorized bounded fictional-data Checkpoint 11
  prototype modification and local browser verification, including its listed guest/account
  journeys. The decision permits the specified public landing/login visual effects under its
  safeguards. Checkpoint 11 was not accepted or completed; D-097 later expanded prototype-only
  scope. D-096/D-097 boundaries remain in force under D-098.
- D-090 provisionally accepts the fingerprinted Checkpoint 8 logical interface/API
  design solely for continued Gate 2 work. D-091 provisionally accepts the
  fingerprinted Checkpoint 9 Configuration & Deployment Design as working design
  only. D-092 provisionally accepts Checkpoint 10 Compatibility & Dependency
  Design as the Q-007 Gate 2 working approach, with final Q-007 disposition open.
  D-098 preserves Gate 2 and checkpoint records as history. Checkpoint 11 was separately accepted on
  2026-11-13 under D-112 within its documented design/prototype scope; future design changes proceed
  through authorized feature-level SDD work. Historical Gate 2 remains IN PROGRESS; Checkpoint 12 and
  final Gate 2 review are not recorded as completed.
- Gate 7 is an **ongoing responsibility**, not a state that permanently ends
  maintenance.

---

## 3. Gate 0 — Project Initiation & Governance

**Status: COMPLETE (APPROVED) — 2026-10-22.** P-001 approved the five baseline
artifacts, the product owner signed off the Gate 0 evidence record, and the Gate 0
transition was explicitly approved by the product owner on 2026-10-22 (no time
recorded). See §13 for the approval entries.

### Purpose

Establish the governance baseline for the separate commercial product: purpose,
scope, authority, engineering process, decisions, and gate sequencing.

### Required Inputs / Prerequisites

- Planning baseline provided by the product owner. (Met; recorded in the Gate 0
  evidence record, `docs/evidence/GATE-0-EVIDENCE.md`.)

### Required Deliverables and Evidence

- `docs/PROJECT_CHARTER.md`
- `docs/ENGINEERING_GOVERNANCE.md`
- `docs/decisions/DECISION_REGISTER.md`
- `docs/GATE_REGISTER.md` (this document)
- `AGENTS.md` (present in this repository; listed in the P-001 artifact set. At the
  time of Gate 0 closure its instructions were **not adopted** — see Blockers. It
  was subsequently replaced and adopted as the agent entry point under D-039,
  effective 2026-10-23).
- A separate Gate 0 evidence record at `docs/evidence/GATE-0-EVIDENCE.md`, stating
  what was inspected, the period covered, and what cannot be established regarding
  implementation, dependency, database, deployment, and **destructive Git-history
  operations** (history rewrite, reset, rebase, amend, force push, or clean) during
  Gate 0 governance work. This requirement does **not** prohibit ordinary,
  separately authorized commits. The evidence record is a Gate 0 exit requirement
  outside the five-artifact P-001 scope.

### Exit Criteria

- All Gate 0 deliverables listed above exist and comply with the
  product-owner-provided planning baseline.
- The Gate 0 evidence record exists and states its own limitations.
- Open decisions are visibly unresolved and not marked approved.
- CEAP production separation and independent-database requirements are explicit.
- Product owner explicitly approves the Gate 0 deliverables (P-001, the five
  artifacts) and signs off the Gate 0 evidence record as a separate exit
  requirement.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- P-001 is **resolved**: the product owner approved all five Gate 0 baseline
  artifacts on 2026-10-22 (approval date recorded; no time recorded), accepting
  `AGENTS.md` as an artifact without adopting the instructions *of the version then in the
  repository*. Gate 0 was closed on
  2026-10-22 after the evidence record was signed off and the transition was
  approved (§13).
- P-007 is **resolved**: the product owner confirmed D-033 (Gate 0 is documentation
  and governance only), so P-007 does not block Gate 0.
- At Gate 0 closure, P-002, P-003, and P-004 were unresolved product-owner
  decisions blocking **Gate 1 entry**, not Gate 0 closure. They were subsequently
  decided on 2026-10-28; Gate 0 status is unchanged.
- P-008 is **resolved as redundant** (product-owner confirmed): it requested
  confirmation of the already APPROVED BASELINE decisions D-034, D-035, D-036, and
  D-038 and introduces no additional decision, so it does not block Gate 0.
- P-005 and P-006 remain unresolved (PROPOSED). Per their recorded definitions they
  block Gate 2 / Gate 4 and Gate 2 / Gate 6 respectively, **not** Gate 0, so they
  are not listed as Gate 0 blockers. If the product owner intends either to gate
  Gate 0 closure, that requires an explicit decision.
- **`AGENTS.md` — artifact acceptance was not instruction adoption (historical).**
  `AGENTS.md` is present in this repository and sits in the recorded P-001 artifact
  set. Accepting it as a P-001 artifact was separate from adopting its instructions,
  which were **not adopted at the time of Gate 0 closure**. Adoption was **not** a
  prerequisite for P-001 approval or Gate 0 closure, so it was never a Gate 0
  blocker. **Subsequently:** the Product Owner adopted `AGENTS.md` as the project's
  agent entry point on 2026-10-23 (D-039, Decision Register §3). This does not
  reopen or alter Gate 0.
- Historical decisions D-001 – D-018 were not found in the inspected scope; their
  provenance is unverified. This is **not** an automatic blocker (Q-017).

---

## 4. Gate 1 — Requirements Discovery

**Status: COMPLETE (APPROVED) — 2026-10-29 under D-082.** The Product Owner had authorized
Gate 1 requirements analysis and documentation, including stakeholder/customer
validation, user journeys, business rules, authentication requirements, assumption
validation, risks, measurable acceptance criteria, and functional requirements for
mandatory QR-based appointment verification. That entry authorization was limited
to Gate 1 analysis and documentation; it did not permit application, architecture,
dependency, database, schema, migration, or deployment changes or production CEAP
access. D-082 separately approved Gate 1 exit and authorized Gate 2 architecture/design
documentation only; implementation, database changes, deployment, production access,
and CEAP access remain unauthorized.

### Purpose

Discover and document requirements; validate the target customer; define user
journeys, business rules, assumptions, risks, and measurable acceptance criteria.

### Required Inputs / Prerequisites

- Gate 0 approved.
- Product owner authorizes Gate 1.
- Charter §2 (product vision), §3 (product goals), and §4 (success criteria)
  approved or explicitly deferred by the product owner (P-002 – P-004).

### Required Deliverables and Evidence

- Requirements specification (functional and non-functional).
- Validated target customer segment, or an explicitly labeled development-stage
  assumption with owner and genuine product-fit follow-up.
- User journeys for public, administrator/staff, and operator categories.
- Business rules for scheduling, booking, cancellation, rescheduling, and
  duplicate prevention.
- Confirmed user/authentication model (registration/login/guest/admin).
- Development-stage disposition of A-1 – A-3 and A-6 with owners and follow-up;
  genuine validation remains a pre-release product-fit obligation. A-4, A-5, and
  A-7 remain Gate 2 assumptions (Charter §10).
- Risk register update.
- Measurable acceptance criteria for every success criterion still marked TBD
  (currently S-1 – S-7; S-8 and S-9 are verifiable without a numeric target).
- Decision Register updated with resolved open questions.

### Current assessment (2026-10-29)

- D-041 selects the initial target segment; EVD-001–EVD-007 provide discovery and
  follow-up support, but representative/formal validation is not yet established.
- The approved development-stage baseline contains FR-001–FR-018, NFR-001–NFR-011,
  BR-001–BR-009, UJ-001–UJ-005, and AC-001–AC-013 at the exact v0.7 /
  traceability 1.0 baseline under D-081. FR-009 and FR-011 remain `DEFERRED` under
  D-042; active records are approved for development-stage design only, not
  `VALIDATED`.
- D-042–D-051 establish coherent MVP directions and explicit deferrals while
  preserving open client-policy, legal/privacy, and later-design parameters.
- D-052 establishes provisional S-1–S-7 targets, including WCAG 2.2 AA for core
  workflows; later profiles, evidence owners, and test results remain open.
- Q-010 is deferred to Gate 6 by D-055; detailed commercial pricing, licensing
  fees, and support-package pricing are outside Gate 1 scope, and D-020 remains in
  force.
- D-056–D-062 reaffirm the deferred MVP boundary (payments/deposits, SMS/OTP,
  waitlists, multiple branches), refine duplicate and capacity directions, and
  record the extensibility direction. D-063–D-066 record the approved batch
  reconciliation, streamlined walk-in, screenshot-friendly confirmation, and
  alternative-availability refinements. No deferred feature enters MVP.
- EVD-005–EVD-007 are registered from `docs/research/interviews/FOLLOW_UP_INTERVIEWS.md`
  as supplied follow-up summaries dated 2026-10-29. They assess the v0.4 baseline
  as acceptable with changes and strengthen workflow coverage, but are not
  independently verified, do not establish representative sampling, and do not
  constitute explicit v0.7 approval; VAL-001–VAL-003 remain partially supported
  and incomplete.
- The Charter risk register and Decision Register are updated. Gate 1 evidence is
  at `docs/evidence/GATE-1-EVIDENCE.md`. Specification §9 records the final v0.7
  quality assessment and the remaining measurable-criteria, privacy, and operator
  dispositions.
- The submitted VAL-001–VAL-006 record is registered as EVD-008–EVD-013 with
  explicit provenance and qualification gaps. The provisional PASS/PASS WITH
  CHANGES claims are not complete validation: VAL-001–VAL-006 remain incomplete.
  The minimum remaining actions are recorded in the Stakeholder Validation Plan §3
  and §8.
- A consolidated final validation package
  (`docs/requirements/GATE-1-FINAL-VALIDATION-PACKAGE.md`) records the approved
  development-stage route and remaining business/front-desk, public-user, operator,
  and privacy/security reviews. No formal v0.7 representative validation or
  qualified privacy/security review is recorded; these remain mandatory later-gate
  obligations and do not retroactively convert simulated findings into evidence.
- D-067–D-075 resolve the approved workload/profile, core workflow inventory,
  browser/accessibility policy, severity method, evidence-role distinction,
  essential operational monitoring (Q-014), minimum roster fields/custody, and
  client/operator responsibility directions. They do not create validation
  evidence, measurements, named reviewers, or exact-version approval.

### Exit Criteria

- Requirements documented and reviewed.
- Blocking open questions resolved or explicitly deferred by the product owner.
- No invented business policy, workflow, or commercial commitment.
- Measurable acceptance criteria agreed for every success criterion still marked
  TBD.
- Product owner separately approves Gate 1 exit under D-082.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 0 approval. (Met.)
- Product-owner authorization to start Gate 1. (Granted 2026-10-28.)
- D-077–D-081 amendment and baseline approvals are recorded. (Met 2026-10-29.)
- Simulated VAL-001–VAL-006 assumptions are explicitly labeled, owned, and retained
  as non-evidence. (Met 2026-10-29.)
- Genuine business/public-user product-fit review remains required before final
  release scope acceptance; it is not recorded as complete.
- Qualified independent privacy/security assessment remains required before Gate 6
  release approval; Gate 3 security/privacy design review remains required before
  Gate 4.
- EVD-005–EVD-007 are registered as supplied summaries with provenance and
  limitations recorded. Their v0.4 scope, lack of independent verification, and
  lack of representative sampling mean they do not complete VAL-001–VAL-003.
- Q-010 is deferred to Gate 6 by D-055 (detailed pricing, licensing, and
  support-package pricing); it is no longer a Gate 1 blocker. Deployment/support
  assumptions required for architecture must still be identified at Gate 2.
- D-079 milestones: cutoff and remaining measurable quality targets before Gate 2
  architecture approval; retention, exceptional operator duration, and break-glass
  policy before Gate 3 security/privacy design review approval; printed-roster
  handling/disposal before Gate 6 release approval.
- Product Owner review and disposition of the exact v0.7 requirement baseline,
  open configurable parameters, risk treatments, and validation findings. (Met for
  development-stage baseline under D-081; genuine validation remains outstanding.)
- Explicit Product Owner Gate 1 exit approval under D-082. (Met 2026-10-29.)

---

## 5. Gate 2 — Architecture & Design

**Status: COMPLETE (APPROVED) — D-121; recorded 2026-11-17, approval date not separately supplied.** Entry was authorized 2026-10-29 for architecture/design documentation only.

**Exit evidence:** Gate 1 was approved under D-082. The Product Owner personally reviewed and accepted the final architecture review against the documented requirements and design evidence, including the accepted D-112 CP11 package, and accepted the CP12 alternative crosswalk for Gate 2 design traceability. The Product Owner explicitly approved closure under D-121. The original F1–F17 source remains unavailable and fourteen findings remain unassessed; recovery limitations and all applicable specialist, implementation and release obligations remain visible in the [closure evidence](evidence/GATE-2-CLOSURE-EVIDENCE-PACKAGE.md). No missing finding is claimed resolved.

> **Historical status at D-098 transition:** Gate 2 was unfinished and not accepted. Its remaining
> routine gate/checkpoint progression obligations are prospectively superseded; this section
> preserves the original scope, working-design dispositions, evidence, and unresolved architecture
> questions. It does not require completing Gate 2 to begin future changes under SDD, and it does
> not mark Gate 2 complete.

### Purpose

Produce the product architecture and design, including the data model,
per-installation configuration strategy, and interface design.

### Required Inputs / Prerequisites

- Gate 1 approved.

### Required Deliverables and Evidence

- Architecture description.
- Data model / schema design.
- Interface and API design.
- Configuration and per-installation deployment strategy.
- Provisional compatibility constraints and the dependency-management approach
  (Q-007). Exact dependency/runtime versions are finalized at Gate 4 (D-031).
- Checkpoint 11 UI/UX design package: screen/navigation inventory, annotated
  screen and interaction-state specifications for required MVP workflows,
  reusable visual design system, responsive/accessibility design, connected
  representative critical-journey high-fidelity prototype and recorded Product
  Owner/usability and accessibility design-review findings (D-093; details below).
- Traceability from design to requirements.

### Exit Criteria

- Design reviewed against requirements, product goals, and engineering priorities
  (D-029).
- Checkpoint 11 design package reviewed and included in the final Gate 2
  architecture review; its unresolved dependencies and findings remain visible.
- Traceability established.
- Product owner approves Gate 2.

### Subsequent Gate 2 dispositions (2026-11-15)

D-107 records Q-020's cutoff-policy disposition: separate cancellation/rescheduling eligibility and cutoffs relative to appointment start, inclusive boundary, installation business time zone and no penalties. Exact per-service values, exception authority, detailed states and enforcement remain open for affected implementation. D-079's Q-020 cutoff-policy milestone is recorded. D-116 records Q-007's Gate 2 disposition as D-092's capability-based approach; no exact platform, package graph, lockfile, compatibility range or tested matrix is accepted, and exact versions remain later work. D-117 records Q-008's minimum responsibility allocation: independent client installations/databases; hosting, infrastructure, credentials, backups, monitoring and support belong to the client or contracted provider unless otherwise agreed; no default operator access to client data. Detailed arrangements and runbooks remain open. D-118 records D-109's measurable-target evaluation approach as satisfying the Q-016/Q-022 Gate 2 disposition milestone; measurement definitions, feasibility evidence and numeric targets remain open. These decisions update the disposition of those questions; historical checkpoint narratives below are preserved as recorded. At that time Gate 2 remained IN PROGRESS; D-121 subsequently accepted the alternative CP12 evidence and final review and closed Gate 2.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 1 approval. (Met under D-082 on 2026-10-29.)
- Q-007 and Q-008 Gate 2 dispositions are recorded under D-116 and D-117.
  Residual platform/version, feasibility and detailed hosting/operational
  arrangements remain open; see the subsequent dispositions above.

### Checkpoint 7 working-design disposition

- D-088 provisionally accepts `docs/architecture/DATA_ARCHITECTURE_MODEL_DESIGN.md`
  v0.1, SHA-256 `38C9DB532B988C150B3D80A1DA3C356EF66C6D3D26A82B356A3AD980183AC652`,
  solely as logical working design. The artifact is unchanged; later interface/API,
  configuration/deployment checkpoints and final Gate 2 review remain outstanding.
- D-089 excludes cancellation and no-show penalties from MVP while ordinary
  cancellation/no-show operational records remain in scope. Q-020's cutoff,
  windows and eligibility remain open. Requirements Specification v0.7 fee-open
  references require a separately approved versioned amendment and traceability
  impact review under Requirements Governance §§6/8; D-081's effective approved
  baseline is not silently rewritten. Unrelated service fees are not disposed of.
- D-079 still requires cutoff and remaining measurable quality-target dispositions
  (including Q-016/Q-022) before final Gate 2 architecture approval; retention,
  exceptional operator-access duration and break-glass policy before Gate 3
  security/privacy review approval; and printed-roster handling/disposal before
  Gate 6 release approval. No 24-hour cutoff, response-time or availability target,
  capacity/duplicate policy, attendance graph, recovery/retry mechanism or physical
  database schema is approved by this disposition.

### Checkpoint 8 working-design disposition

- D-090 provisionally accepts `docs/architecture/INTERFACE_API_DESIGN.md` version
  0.1, **DRAFT — AWAITING PRODUCT OWNER REVIEW**, verified SHA-256
  `AAEDE649F366CE1608CEA1E9C7F112192FD0BA8CB1AEB250A94320B6998A4F96`,
  solely as a working logical interface/API design. The accepted artifact is
  unchanged. It proposes 31 interfaces and five conceptual Mermaid diagrams,
  not final endpoints, protocols, authentication mechanisms or tested behavior.
- **Guest limitation:** Scoped authentication for guest state changes does not
  require public registration. Account-free booking and authorized management
  remain required; claimant proof, recovery channel/expiry and scoped authority
  are unresolved. QR/reference possession alone does not authorize changes.
- **D-070 limitation:** 50 valid concurrent requests for one remaining capacity
  unit must produce exactly one successful booking and no overcapacity. A known
  rejection is distinct from a temporarily unknown result after a lost response;
  do not count uncertainty as a confirmed failure or blindly retry into a second
  booking. Establish the authoritative result and same intent before safe follow-up.
- D-079 deadlines remain: cutoff and remaining quality targets (Q-016/Q-022)
  before final Gate 2 architecture approval; retention/deletion, exceptional
  operator-access duration and break-glass policy before Gate 3 security/privacy
  review approval; printed-roster handling/disposal before Gate 6 release
  approval. Capacity/duplicate policies, attendance transitions, QR lifecycle,
  staff/guest authority, safe retries, paper conflicts, configuration impact and
  both hosting models' effective-access responsibilities are not finalized.
  D-089 excludes MVP cancellation/no-show penalties but not normal records;
  unrelated service fees remain undecided. Requirements Specification v0.7's fee
  references still require separate versioned reconciliation and traceability
  impact review under Requirements Governance §§6/8 (D-081 remains effective).
- Checkpoint 9 — Configuration & Deployment Design is the next **internal Gate 2
  design activity** as recorded at Checkpoint 8; its provisional acceptance is
  recorded separately below. Gate 2 stays `IN PROGRESS`; Gates 3–7 stay `BLOCKED`.
  No final architecture, Gate 3 entry, implementation, database or deployment
  authorization is implied by D-090 or this register entry.

### Checkpoint 9 working-design disposition

- D-091 provisionally accepts `docs/architecture/CONFIGURATION_DEPLOYMENT_DESIGN.md`
  **version 0.1**, artifact status **DRAFT — AWAITING PRODUCT OWNER REVIEW**,
  verified SHA-256 `1C9FE708D7E19528C7D19650C8C2DB59CD2C1F8C7D905E5ADCAC8E0163C2D11F`,
  solely as technology-neutral working design for continued Gate 2 work. The
  fingerprinted draft is unchanged. Independent installations and credentials,
  both hosting models, one supported-profile principle, client business authority,
  safe configuration changes, proposed update/recovery lifecycle and essential
  monitoring are working directions, not deployed controls or approved technology.
- Q-008 responsibility/effective-access matrices remain proposed: credential
  custody, backups, restore approval, incidents and support need allocation and
  review before final Gate 2 architecture approval where architecture feasibility
  depends on them. Host/database/backup/diagnostic access is not permission to use
  client records (D-034/D-075). A synthetic restore rehearsal does **not** prove
  a client's real backup is restorable; a separately approved privacy-safe
  verification approach is required before operational reliance. Cadence, RPO,
  RTO, recovery completeness, restore authority and client acceptance remain OPEN.
- **Evaluation candidates only, not approved policy or service targets:** daily
  full backup with possibly more frequent recovery points, 1-hour RPO, 4-hour
  RTO, 2-hour exceptional operator session, 2-second 95th-percentile ordinary
  response under defined load, and 99.5% monthly availability. None is a default,
  implementation instruction or commitment; Q-016/Q-022 remain open.
- D-079 remains binding: cutoff and remaining measurable quality-target
  dispositions **before final Gate 2 architecture approval**; retention/deletion,
  exceptional operator-access duration and break-glass policy **before Gate 3
  security/privacy design-review approval**; printed-roster handling/disposal
  **before Gate 6 release approval**. Q-020 cutoff, Q-007 compatibility/dependency
  approach, capacity/duplicate rules, guest proof, QR/attendance, safe retry,
  paper reconciliation, privacy and hosting allocation remain unresolved. D-089
  excludes MVP cancellation/no-show penalties, retaining ordinary records;
  unrelated service fees remain undecided. Requirements Specification v0.7 fee
  references still require separately approved versioned reconciliation and
  traceability review (Requirements Governance §§6/8; D-081). D-090's account-free
  and lost-response limitations remain unchanged.
- Checkpoint 10 — Compatibility & Dependency Design is the **next internal Gate 2
  activity** as recorded at Checkpoint 9; its provisional acceptance is recorded
  separately below. Gate 0/1 stay `COMPLETE (APPROVED)`, Gate 2 `IN PROGRESS`,
  and Gates 3–7 `BLOCKED`. D-091 authorizes no final architecture approval, Gate
  2 exit, Gate 3 entry, implementation, database operation, dependency
  installation, deployment or production activity.

### Checkpoint 10 working-design disposition

- D-092 provisionally accepts `docs/architecture/COMPATIBILITY_DEPENDENCY_DESIGN.md`
  **version 0.1**, artifact status **DRAFT — AWAITING PRODUCT OWNER REVIEW**,
  artifact approval **NOT GRANTED**, verified SHA-256
  `55F1CB268A29F378541EDABC1038CFDA2E8A0A79475CE06C4D3D60C1192E75CA`,
  solely for continued Gate 2 working-design use. Its Q-007 compatibility/
  dependency approach is provisional; an explicit final Gate 2 Q-007
  disposition is still required. One capability-based profile across independent
  installations and both hosting models, a proposed compatibility matrix,
  direct/transitive dependency review, later reproducible resolution and
  per-installation upgrade/drift controls are **not** a selected or tested stack.
- Laravel, Blade, Tailwind CSS and MariaDB remain D-022 preferred candidates;
  D-085's modular monolith remains provisional; Docker is conditional under
  D-023/D-036. No final runtime, framework, database/driver, package, OS, web
  server, vendor, external service or exact version is approved. D-031 reserves
  exact dependency/runtime versions for Gate 4 after prerequisite review and
  explicit task authorization. D-036 approval is needed for added technology.
- Q-008 allocation of hosting responsibilities, credentials, security updates,
  backup custody, restores, incidents and support remains open for both hosting
  models; sufficiently concrete allocation is needed before final Gate 2
  architecture approval where feasibility depends on it (D-091). Host/database/
  backup access is not authorization to use client records (D-034/D-075).
  Synthetic restore rehearsal does not verify any particular real client backup;
  D-091 requires a separately approved privacy-safe real-backup verification
  approach before operational reliance. Backup cadence/retention, RPO/RTO,
  restore authority and completeness remain open.
- D-091's discussed daily-full/more-frequent recovery points, 1-hour RPO,
  4-hour RTO, 2-hour operator session, 2-second 95th-percentile ordinary
  response under defined load, and 99.5% monthly availability remain **evaluation
  candidates only**, not approved SLAs, requirements, defaults or commitments.
  D-070's exactly-one-of-50 integrity obligation and D-090's distinction between
  known rejection and unknown lost response remain unchanged; account-free guest
  changes require separate scoped proof, QR is lookup-only, attendance is explicit.
- D-079 remains binding: cutoff/Q-020 and remaining quality-target dispositions
  (Q-016/Q-022) **before final Gate 2 architecture approval**; retention/deletion,
  exceptional operator duration and break-glass policy **before Gate 3
  security/privacy design-review approval**; printed-roster handling/disposal
  **before Gate 6 release approval**. D-089 excludes MVP cancellation/no-show
  penalties, retains ordinary records and does not decide unrelated service
  fees. Requirements Specification v0.7 fee references still need separately
  approved versioned reconciliation under Requirements Governance §§6/8; D-081
  remains a development-stage-assumption baseline and FR-009/FR-011 deferred.
- At the time of D-092, **Integration & Traceability Review** was the next
  internal Gate 2 activity; D-093 subsequently inserted Checkpoint 11 before
  it and assigned the previously unnumbered review the label Checkpoint 12.
  Gate 0/1 stay `COMPLETE (APPROVED)`, Gate 2 `IN PROGRESS`, and Gates 3–7
  `BLOCKED`. D-092 approves no final architecture, Gate 2 exit, Gate 3 entry,
  implementation, dependency installation, database action, deployment or
  production access.

### D-093 internal Gate 2 progression and Checkpoint 11 design evidence

| Activity | Historical disposition at D-098 transition |
|---|---|
| Checkpoint 10 — Compatibility & Dependency Design | Provisionally accepted as working design under D-092; final Q-007 disposition open |
| Checkpoint 11 — UI/UX Design & Prototyping | **Authorized and IN PROGRESS under D-096/D-097; not accepted or completed** |
| Checkpoint 12 — Integration & Traceability Review | **Historically pending**; its routine progression role is superseded by D-098; label history retained |
| Final Gate 2 Review & Closure | **Historically pending**; not completed or accepted; no routine approval prerequisite under D-098 |

**Required Checkpoint 11 package for final Gate 2 architecture review (D-093):**

1. **Screen inventory and navigation map:** map each applicable required MVP
   experience to existing FR/NFR, UJ/BR/AC, `WF-*` workflow and `IF-*` logical
   interface references. Cover public discovery/booking; calendar/date/slot
   selection and actual alternatives; guest, proxy and staff-assisted booking;
   confirmation and eligible QR presentation; account-free guest management,
   cancellation and rescheduling; staff lookup, explicit attendance and appointment
   management; supervisor exceptions; client configuration; roster generation and
   printing; and paper reconciliation/conflict handling. No deferred capability is
   added by this map.
2. **Complete annotated wireframes and screen specifications:** for each required
   screen and applicable interaction state, specify purpose and authorized actor,
   navigation/information hierarchy, fields and validation guidance, primary and
   secondary actions, calendar/date/slot behavior, availability/alternatives,
   confirmation/print presentation, role-specific actions, server-authoritative
   outcomes and the relevant `WF-*`/`IF-*` contracts. These are user-facing design
   descriptions, not new backend contracts or client-policy values.
3. **Interaction states:** document initial/loading, empty/no-availability,
   invalid-input, permission-denied, stale-availability, duplicate/conflict,
   successful, recoverable-error and unknown-command outcomes, plus paper
   reconciliation conflicts where applicable. Under D-090, an unknown outcome
   after a lost response is neither confirmed success nor confirmed rejection;
   no blind retry or false success confirmation is designed.
4. **Minimal reusable visual design system:** document typography, color/contrast
   intent, spacing/layout, navigation, buttons/actions, forms/field feedback,
   calendar/slot controls, appointment status indicators, tables/lists,
   confirmation/QR presentation, and loading/error/success/warning messages.
   Design tokens and component specifications may be documentation; no frontend
   package or implementation is selected or installed.
5. **Responsive and accessibility-oriented design specifications:** include
   representative desktop/mobile layouts, keyboard navigation and visible focus,
   accessible form labels/errors and status feedback, non-pointer-only calendar
   interactions, readable confirmation/QR information, and print-friendly
   appointment/roster views. Preserve NFR-007/AC-006, D-052/D-069's WCAG 2.2 AA
   target and current/previous stable Chrome, Edge, Firefox and Safari policy;
   no conformance or executed accessibility test is claimed.
6. **Connected high-fidelity prototype:** demonstrate representative critical
   journeys for public booking, confirmation, account-free guest management,
   staff QR lookup followed by a separate explicit attendance action,
   administrative appointment handling, and at least one material error,
   conflict or unknown-outcome scenario. Full high-fidelity reproduction of every
   screen is not required; annotated screen/state coverage is. Prototype format
   and tool remain governed design-work choices; no paid platform is mandated.
7. **Review evidence:** record Product Owner review, usability findings,
   accessibility design-review findings, inconsistencies and proposed
   resolutions, requirement/workflow/interface traceability, unresolved policy
   dependencies, and explicit provisional acceptance or requested revisions.
   Review is not representative stakeholder validation, executed accessibility
   testing, final architecture approval or checkpoint completion by itself.

**Open boundaries:** where a screen depends on guest claimant proof/recovery,
QR issuance/lifecycle/authority, attendance correction, cancellation/rescheduling
cutoff, capacity/duplicate policy, paper-conflict rules, Q-007 final disposition,
Q-008 hosting allocation, D-079 quality targets or retention/deletion and
exceptional operator-access policy, label the interaction provisional and record
the dependency. D-089's penalty exclusion and separately governed v0.7 fee-reference
reconciliation remain intact; a prototype assumption is not an approved
requirement. D-079's deadlines remain unchanged. Checkpoint 12 reviews the
resulting cross-design integration and traceability **after** Checkpoint 11; the
unnumbered final review remains separate. Gate 3 retains the dedicated Security,
Privacy & Data Integrity review, Gate 4 retains implementation under its own
prerequisites, and this amendment does not begin design artifacts or authorize
application, database, dependency, deployment or production work.

---

### Checkpoint 11 status/evidence reconciliation (Product Owner instruction; date not separately recorded)

> **Status remains unchanged:** this note records the Product Owner's explicit statement
> that Checkpoint 11 is **not accepted or completed**. It does not close, accept, or advance
> the checkpoint.

D-093 records Checkpoint 11 as authorized but **NOT STARTED**. The repository contains
`docs/design/CHECKPOINT-11-SCREENS-AND-INTERACTIONS.md`,
`docs/design/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md`, and
`prototype/checkpoint-11/` source, tests and design artifacts. Their presence establishes
that materials exist; it does not establish when they were created, whether their creation
was performed as authorized Checkpoint 11 work, or that required review/acceptance occurred.
D-093 is the recorded authorization to start Checkpoint 11, but no evidence was identified
that resolves the mismatch between its recorded NOT STARTED status and the existing artifacts,
and no Product Owner/usability/accessibility acceptance evidence was identified. Therefore
the recorded disposition remains
**authorized, NOT STARTED; not accepted; not completed**, pending a separate evidence-backed
Product Owner status decision. Do not backdate or infer a transition. Gate 2 remains
**IN PROGRESS**; Checkpoint 12 and final Gate 2 review remain pending; Gates 3–7 remain
blocked. This note authorizes no prototype modification or implementation.

**D-096 superseding authorization (recorded 2026-11-04):** The Product Owner explicitly
authorized the bounded fictional-data prototype work and local browser verification specified
in Decision Register §9.14, resolving the prior no-prototype-modification restriction for that
scope only. The authorized work is in progress. This does not accept or complete Checkpoint 11,
change Gate 2's IN PROGRESS status, authorize production or backend behavior, or apply the
landing/login visual exception to any task-focused application screen. The preceding
reconciliation is retained as history; its no-modification/NOT STARTED disposition is
superseded only to the extent stated in D-096.

**D-097 scope expansion (2026-11-05):** The Product Owner explicitly authorized fictional-data
Staff and Administrator workspaces, dashboards, appointment workflows and role-specific profiles
within the Checkpoint 11 prototype. This extends only the prototype scope in D-096. It does not
approve unresolved role permissions or policy values, production implementation, Checkpoint 11
acceptance or completion, Gate 2 exit, or a later gate transition.

**D-098 prospective process disposition (2026-11-10):** Gate 2's historical disposition remains
IN PROGRESS and unfinished; no completion, acceptance, or evidence is inferred. Its unfinished
routine gate progression and pending Checkpoint 12/final Gate 2 review obligations are
prospectively superseded as routine process requirements. Checkpoint 11 remains an unfinished,
unaccepted design baseline, with existing authorization bounded by D-096/D-097; future design
improvements use authorized feature-level SDD work. The historical NOT STARTED reconciliation,
subsequent authorized/in-progress status, existing evidence, and prior checkpoint decisions remain
preserved. Applicable security/data-integrity reviews and separate release/deployment approval
remain required independently of gate labels. No production implementation authorization is
created. CP11 was subsequently accepted on 2026-11-13 under D-112 within its documented
design/prototype scope; this does not change Gate 2's historical disposition.

> **Historical Gates 3–7:** The sections below preserve the former stage definitions, status and
> evidence. They are not routine sequential prerequisites under D-098. Applicable security/data-
> integrity reviews, feature verification, separate release/deployment approval, and operational
> controls remain mandatory independently of these gate labels.

## 6. Gate 3 — Security & Data Integrity Design Review

**Status: BLOCKED** (requires Gate 2 approval)

### Purpose

Review the design for security, privacy, and data integrity before any
implementation.

### Required Inputs / Prerequisites

- Gate 2 approved.

### Required Deliverables and Evidence

- Security review record.
- Data-integrity design record.
- Threat model.
- Privacy/retention approach (from Q-015).
- Security exception register (justification, impact, scope, approval, review or
  expiry) if any.

### Exit Criteria

- Security, privacy, and data-integrity reviews completed with recorded findings.
- Each security exception explicitly approved by the product owner with
  justification, impact, scope, and review/expiry.
- All blocking findings resolved.
- Product owner approves Gate 3.

### Approval Authority

Product Owner (approves security exceptions).

### Blockers / Dependencies

- Gate 2 approval.
- Privacy/retention requirements (Q-015).

---

## 7. Gate 4 — Authorized Implementation

**Status: BLOCKED** (requires Gate 3 approval and explicit authorization)

### Purpose

Implement only the approved, bounded design.

### Required Inputs / Prerequisites

- Gate 3 approved.
- Product owner explicitly authorizes the specific implementation scope in
  writing.

### Required Deliverables and Evidence

- Authorized change set.
- Reviewed database migrations (only if explicitly authorized).
- Tests added for each change.
- Final dependency/runtime versions and dependency-management decisions,
  confirmed before implementation begins (D-031, Q-007; P-005).
- Implementation notes and honest completion report.

### Exit Criteria

- Implementation is within authorized scope.
- Migrations reviewed before execution.
- Tests exist for each change.
- No unapproved architecture, security, database, deployment, or scope change.
- Product owner approves Gate 4.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 3 approval.
- Explicit written authorization. (Existence of planning documents is **not**
  authorization — D-026.)

---

## 8. Gate 5 — Verification & Testing

**Status: BLOCKED** (Gate 4 not approved)

### Purpose

Verify behavior, security, privacy, and data integrity against the approved
design.

### Required Inputs / Prerequisites

- Gate 4 approved.

### Required Deliverables and Evidence

- Automated test results (isolated test environment, own database).
- Manual verification evidence.
- Defect log with dispositions.
- Regression results.

### Exit Criteria

- Required tests pass; failures resolved or explicitly accepted.
- Data-integrity invariants and security controls verified.
- **Critical unresolved security or data-integrity defects block release** and
  cannot be bypassed by a generic risk-acceptance statement (D-038).
- Product owner approves Gate 5.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 4 approval.
- Isolated test environment (DP-4).

---

## 9. Gate 6 — Release Readiness & Deployment Approval

**Status: BLOCKED** (Gate 5 not approved)

### Purpose

Confirm the product is safe and ready to release/deploy for a client
installation.

### Required Inputs / Prerequisites

- Gate 5 approved.

### Required Deliverables and Evidence

- Release checklist.
- Deployment plan.
- Rollback plan.
- Configuration/secrets handling plan.
- Sign-off record.

### Exit Criteria

- Release and rollback plans reviewed.
- Secrets handling verified (no secrets in documentation or client-side code).
- **Critical security/data-integrity defects resolved** (D-038).
- Product owner approves the release/deployment.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 5 approval.
- Deployment/hosting decisions (Q-008).

---

## 10. Gate 7 — Production Operations & Maintenance

**Status: BLOCKED** (Gate 6 not approved; ongoing thereafter)

### Purpose

Operate, monitor, back up, and maintain each client installation safely, on an
ongoing basis.

### Required Inputs / Prerequisites

- Gate 6 approved and deployment completed.

### Required Deliverables and Evidence

- Operational runbook.
- Monitoring/logging plan.
- Backup and tested restore procedure.
- Maintenance and update policy.
- Periodic review records.

### Exit Criteria

- Operational artifacts in place and reviewed.
- Ongoing maintenance governed by approved change control.
- Backups and a tested restore procedure demonstrated.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 6 approval and completed deployment.
- Backup/restoration requirements (Q-008).

### Nature

**Ongoing responsibility.** Gate 7 does not "end" maintenance; updates,
incidents, backups, and reviews continue under approved change control.

---

## 11. Cross-Cutting Notes

- **Historical decisions:** Recovery of D-001 – D-018 is not an automatic blocker
  (Q-017). It becomes blocking only if a missing decision is required to resolve
  a current requirement or risk.
- **Multi-tenancy:** Outside the baseline (D-020). Reopening it requires a formal
  change review affecting architecture, security, data isolation, operations, and
  commercial scope — not implicit scope.
- **Security/data integrity:** Critical unresolved defects block release; no
  generic approval or risk-acceptance statement may bypass mandatory security,
  legal, or data-protection requirements (D-038).
- **CEAP:** No gate may touch the production CEAP application, repository,
  database, credentials, configuration, or deployment (D-025).
- **Independent database:** The product uses its own database only; it never uses
  the CEAP database (D-035).
- **Reusable engineering knowledge:** At gate closure, the evidence record should state whether
  a meaningful reusable engineering lesson emerged. If so, propose or record it through the
  existing governed Obsidian knowledge process; if not, record no meaningful lesson. Consult
  approved/adopted knowledge at the next gate where available, as guidance only. The repository
  remains authoritative, and this checkpoint does not create automatic note adoption or duplicate
  project records.

---

## 12. Gate Change Log

| Date | Change | By |
|---|---|---|
| 2026-10-15 | Register created. Gate 0 set IN PROGRESS; Gate 1 NOT STARTED; Gates 2–7 NOT STARTED/BLOCKED. | Gate 0 documentation task |
| 2026-10-15 | Revision 0.2. Added purpose, inputs/prerequisites, deliverables/evidence, blockers/dependencies, and current status per gate; added cross-cutting notes (historical decisions, multi-tenancy change review, critical defects block release, CEAP/independent database); clarified Gate 7 as ongoing. | Gate 0 documentation revision |
| 2026-10-15 | Gate 0 governance corrections. Added product-specific AGENTS.md to the Gate 0 artifact inventory; distinguished ordinary authorized commits from destructive Git-history operations; resolved P-008 as redundant; clarified P-005/P-006 are not Gate 0 blockers per their definitions; aligned historical-decision provenance wording. Gate statuses unchanged. | Gate 0 governance correction task |
| 2026-10-15 | Owner-authorized corrections. Updated the Gate 0 deliverables list and blocker notes to reflect that `AGENTS.md` is present in the repository. P-008 recorded as resolved as redundant with product-owner confirmation. Gate statuses unchanged. | Gate 0 owner-authorized correction task |
| 2026-10-15 | Owner-authorized correction. Corrected the Gate 0 blocker list: P-001 retained as a Gate 0 exit blocker; P-007 recorded as resolved (D-033 owner-confirmed); P-002/P-003/P-004 recorded as Gate 1-entry blockers, not Gate 0. Gate 0 kept IN PROGRESS; Gate 1 NOT STARTED; all other gate statuses unchanged. | Gate 0 owner-authorized correction task |
| 2026-10-22 | Revision 0.3, owner-authorized Gate 0 correction pass. Adopted the §1 status definitions and reclassified Gates 5–7 as `BLOCKED`; named the separate evidence record `docs/evidence/GATE-0-EVIDENCE.md` as the Gate 0 evidence deliverable and excluded it from P-001 scope; recorded the unresolved `AGENTS.md` adoption question; added P-002 – P-004 to Gate 1 entry requirements and blockers; limited Gate 1 assumption validation to A-1 – A-3 and A-6; moved exact version finalization to Gate 4 and provisional compatibility constraints to Gate 2; corrected the TBD target references; replaced the "approved planning baseline" with the product-owner-provided planning baseline. Gate 0 IN PROGRESS; Gate 1 NOT STARTED; no gate approval recorded. | Gate 0 correction pass |
| 2026-10-22 | P-001 approval recorded. Product owner approved all five Gate 0 baseline artifacts (Charter, Engineering Governance, Decision Register, Gate Register, `AGENTS.md`) on 2026-10-22; `AGENTS.md` accepted as an artifact only, its instructions not adopted. Gate 0 remains IN PROGRESS (evidence record not signed off); Gate 1 BLOCKED. | P-001 approval recording |
| 2026-10-22 | Gate 0 closure recorded. Product owner signed off the Gate 0 evidence record (`docs/evidence/GATE-0-EVIDENCE.md`) and explicitly approved the Gate 0 transition on 2026-10-22 (no time recorded). Gate 0 set `COMPLETE (APPROVED)`. Gate 1 remains `BLOCKED` (P-002 – P-004 unresolved; not authorized). No Gate 1 approval and no implementation authorization recorded. | Gate 0 finalization |
| 2026-10-22 | Revision 0.4, final Gate 0 correction pass. Gate 1 reclassified `BLOCKED` under the §1 definition (Gate 0 approval unmet). `AGENTS.md` recorded as a P-001 artifact whose acceptance is separate from adoption of its instructions; adoption is not a P-001 or Gate 0 prerequisite. Gate 0 IN PROGRESS; no gate approval recorded. | Gate 0 final correction pass |
| 2026-10-23 | Revision 0.7, AGENTS.md adoption reconciliation. Updated the three live non-adoption statements (§3 deliverables, §3 P-001 blocker note, §3 `AGENTS.md` blocker note) to record adoption under D-039 while preserving the historical fact that its instructions were not adopted at Gate 0 closure. No gate status, approval, or exit criterion changed; Gates 0–7 statuses are unchanged; the proposed accessibility standard (P-009) is not approved by this pass. | AGENTS.md adoption proposal |
| 2026-10-28 | Revision 0.8. Recorded the P-002 and P-003 approvals and P-004 conditional approval, removing them as Gate 1 entry blockers. Gate 1 remains `BLOCKED` because entry authorization has not been granted; no gate exit criterion or implementation authorization changed. | Pre-Gate 1 decision recording |
| 2026-10-28 | Revision 0.9. Recorded the Product Owner's explicit Gate 1 entry authorization and set Gate 1 to `IN PROGRESS`. Authorization is limited to requirements analysis and documentation, including functional requirements for mandatory QR-based appointment verification. Gate 1 is not approved for exit; implementation and production CEAP access remain unauthorized. | Gate 1 entry authorization recording |
| 2026-10-28 | Checkpoint 1 provisionally accepted by the Product Owner as a five-document working baseline; acceptance recorded as D-040 in the Decision Register. Gate 1 remains `IN PROGRESS`; no exit criterion, gate approval, requirement approval, or implementation authorization changed. | Checkpoint 1 acceptance recording |
| 2026-10-29 | Revision 1.0. Recorded D-041–D-054, EVD-001–EVD-004, the v0.4 requirement/traceability/validation update, provisional S-1–S-7 targets, risk updates, and the genuine remaining validation/review blockers. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`; no implementation authorization. | Authorized Gate 1 consolidated execution |
| 2026-10-29 | Revision 1.1. Added the consolidated final validation package (agenda, review checklists, record template, baseline checklist, and proposed Q-010 deferral). No session, finding, approval, deferral, or gate transition is recorded. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`. | Authorized Gate 1 final-validation preparation |
| 2026-10-29 | Revision 1.2. Recorded D-055, the Product Owner's explicit deferral of Q-010 to Gate 6, and removed Q-010 from the Gate 1 blocker list. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`; no implementation authorization. | Product Owner decision recording |
| 2026-10-29 | Revision 1.3. Recorded D-056–D-062 (deferred payments/deposits, SMS/OTP, waitlists, and multiple branches; refined duplicate/capacity/guest-change directions; extensibility direction). Noted the reported EVD-005–EVD-007 follow-up reviews as unregistered pending full response text. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`; no implementation authorization. | Product Owner decision recording |
| 2026-10-29 | Revision 1.4. Recorded D-063–D-066 (batch outage reconciliation, streamlined walk-in, screenshot-friendly confirmation, alternative availability) and the resulting v0.6 working baseline; noted the EVD-005–EVD-007 records were still not supplied. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`; no implementation authorization. | Product Owner decision recording |
| 2026-10-29 | Revision 1.5. Registered EVD-005–EVD-007 from the supplied follow-up source as v0.4 evidence with explicit provenance limits and acceptable-with-changes assessments; updated VAL-001–VAL-003 support without treating the records as v0.6 approval or Gate 1 closure. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`; no implementation authorization. | Authorized Gate 1 final-execution task |
| 2026-10-29 | Revision 1.6. Recorded D-067–D-075 and aligned the v0.7 working baseline: workload/profile, workflow inventory, supported browsers/accessibility, severity, evidence ownership, Q-014 monitoring, roster custody, and operator boundaries. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`; no implementation authorization. | Authorized Gate 1 final-validation task |
| 2026-10-29 | Revision 1.7. Reconciled the submitted VAL-001–VAL-006 record as incomplete EVD-008–EVD-013; preserved the v0.7 draft, unresolved policy proposals, missing qualified review, and separate approval requirements. Gate 1 remains `IN PROGRESS`; Gate 2 remains `BLOCKED`; no implementation authorization. | Authorized Gate 1 reconciliation task |
| 2026-10-29 | Revision 1.8. Activated D-077–D-081, recorded the v0.7 / traceability 1.0 development-stage baseline, retained simulated and genuine evidence classifications, and added D-079 milestone obligations. D-082 remains pending; Gate 1 stays `IN PROGRESS` and Gate 2 `BLOCKED`. | Product Owner decision recording |
| 2026-10-29 | Revision 1.9. Recorded D-082 approval, closed Gate 1 as `COMPLETE (APPROVED)`, and authorized Gate 2 as `IN PROGRESS` for architecture/design documentation only. | Product Owner gate-transition decision |
| 2026-10-29 | Revision 1.10. Reconciled stale present-tense Gate 1/2 status statements in §§2 and 4 with D-082 and Gate 1 closure evidence; historical transitions, gate criteria, and authorization boundaries unchanged. This is a documentation correction, not a new gate approval. | Authorized Gate 2 status reconciliation |
| 2026-10-30 | Recorded D-086: the Product Owner provisionally accepted Component & Module Design v0.1 for continued Gate 2 design work only. Gate 2 remains `IN PROGRESS`; Gates 3–7 remain `BLOCKED`. Final architecture approval, Gate 2 exit and implementation remain unauthorized; detailed limitations are in the Decision Register §9.4. | Product Owner Checkpoint 5 closure recording |
| 2026-11-01 | Revision 1.12. Recorded D-087: the Product Owner provisionally accepted Detailed System Workflow Design v0.1 for continued Gate 2 design only. Gate 2 remains `IN PROGRESS`; Gates 3–7 remain `BLOCKED`. Final architecture approval, Gate 2 exit and implementation remain unauthorized; detailed limitations are in the Decision Register §9.5. | Product Owner Checkpoint 6 closure recording |
| 2026-11-01 | Revision 1.13. Cross-referenced D-088 and D-089 and the fingerprinted Checkpoint 7 artifact; noted the outstanding versioned Requirements Specification fee-reference reconciliation and unchanged D-079 milestones. Gate 2 remains `IN PROGRESS`; Gates 3–7 remain `BLOCKED`; no final architecture or implementation approval. | Product Owner Checkpoint 7 decision recording |
| 2026-11-01 | Revision 1.14. Cross-referenced D-090's fingerprinted Checkpoint 8 provisional working-design acceptance, its guest-authentication and D-070 unknown-outcome limitations, D-079/D-089 and pending v0.7 fee-reference reconciliation. Checkpoint 9 Configuration & Deployment Design is next internal Gate 2 activity. Gate 2 remains `IN PROGRESS`; Gates 3–7 remain `BLOCKED`; no final architecture, implementation or deployment approval. Recording date is not an inferred Product Owner approval date. | Product Owner Checkpoint 8 decision recording |
| 2026-11-01 | Revision 1.15. Recorded D-091's fingerprinted Checkpoint 9 provisional working-design acceptance, Q-008 and real-backup verification limitations, and evaluation-only recovery/performance numbers. D-079/D-089/D-090 and pending versioned v0.7 fee reconciliation remain. Checkpoint 10 Compatibility & Dependency Design is the next internal Gate 2 activity. Gate 2 remains `IN PROGRESS`; Gates 3–7 remain `BLOCKED`; no final architecture, Gate 3, implementation or deployment approval. The recording date is not an inferred Product Owner approval date. | Product Owner Checkpoint 9 decision recording |
| 2026-11-01 | Revision 1.16. Cross-referenced D-092's fingerprinted Checkpoint 10 provisional Q-007 working approach; final Q-007, Q-008, D-079/D-089–D-091, and v0.7 fee-reference reconciliation remain outstanding. Integration & Traceability Review is the next internal Gate 2 activity. Gate 2 stays `IN PROGRESS`, Gates 3–7 `BLOCKED`; no final technology, architecture, implementation or deployment approval. Recording date is not an inferred Product Owner approval date. | Product Owner Checkpoint 10 decision recording |
| 2026-11-02 | Revision 1.17. Recorded D-093's Checkpoint 11 UI/UX Design & Prototyping insertion and bounded required design package before the newly labeled Checkpoint 12 Integration & Traceability Review. Checkpoint 11 authorized but NOT STARTED; Checkpoint 12 and unnumbered Final Gate 2 Review & Closure pending. Historical checkpoint identifiers and D-079 deadlines preserved. Gate 2 remains IN PROGRESS, Gates 3–7 BLOCKED; no implementation or Gate 3 entry authorized. Recording date is not an inferred Product Owner approval date. | Product Owner Gate 2 sequence amendment recording |
| 2026-11-04 | Revision 1.18. Cross-referenced proposed D-094 and recorded the Product Owner's explicit Checkpoint 11 not-accepted/not-completed direction alongside the existing NOT STARTED disposition. Existing design/prototype artifacts are noted without inferring when or under what authority they were produced; no checkpoint or gate transition is recorded. Gate 2 remains IN PROGRESS; Gates 3–7 remain BLOCKED. | Authorized documentation reconciliation under Product Owner direction |
| 2026-11-04 | Revision 1.19. Cross-referenced the approved D-094/D-095 requirements amendment and effective v0.8/revision 1.2 development-stage baseline. Gate 2 remains IN PROGRESS; Checkpoint 11 remains authorized, NOT STARTED, not accepted and not completed; Gates 3–7 remain BLOCKED. No gate transition or implementation authorization is recorded. Approval date for the requirements package was not supplied. | Product Owner approval recording |
| 2026-11-04 | Revision 1.20. Recorded D-096's bounded authorization to modify and locally verify the fictional-data Checkpoint 11 prototype and its landing/login-only visual exception. Checkpoint 11 work is authorized/in progress but not accepted or completed; Gate 2 remains IN PROGRESS and Gates 3–7 remain BLOCKED. The earlier no-prototype-modification statement is superseded only within D-096's exact scope; no production/backend, gate-exit or release authority is granted. Approval date was not separately supplied. | Product Owner bounded Checkpoint 11 authorization |
| 2026-11-05 | Revision 1.21. Recorded D-097's explicit fictional-data Staff and Administrator prototype scope expansion. Gate 2 and Checkpoint 11 remain IN PROGRESS, not accepted or completed; Gates 3–7 remain BLOCKED. No production implementation or unresolved permission approval. | Product Owner scope-expansion instruction in this chat |
| 2026-11-10 | Revision 1.22. Recorded D-098: routine future change progression transitions to SDD; Gate 2 remains historically unfinished and unaccepted, Checkpoint 11 remains an unfinished unaccepted design baseline, and applicable security/data-integrity and release/deployment controls remain independent. No application or production implementation authority is granted. | Product Owner SDD transition approval |
| 2026-11-12 | Revision 1.23. Recorded Product Owner approval of Requirements Specification v0.9 and Traceability revision 1.3 as the effective development-stage baseline for their stated amendment, and individual provisional specification approval of SDD-001 v0.3, SDD-023 v0.2, SDD-002 v0.4 and SDD-003 v0.4. Approval dates were not separately supplied. Gate 2 remains historically IN PROGRESS; Checkpoint 11 remains unaccepted; no implementation or Gate 2 closure is authorized. | Product Owner formal approval instruction in this conversation |
| 2026-11-13 | Revision 1.24. Recorded exact-version provisional approval of SDD-004 v0.1, SDD-007 v0.2, SDD-008 v0.1, SDD-025 v0.1 and SDD-026 v0.1. SDD-025 v0.1's separate earlier approval provenance and SDD-007 v0.1's earlier approval history are preserved; v0.2 is the current SDD-007 scope and is not backdated. Approval dates were not separately supplied. Open questions remain open; Gate 2 remains historically IN PROGRESS, Checkpoint 11 remains unaccepted, and no implementation, deployment or Gate 2 closure is authorized. | Product Owner exact-version approval instruction in this conversation; SDD-025 earlier separate Product Owner decision |
| 2026-11-13 | Revision 1.25. Recorded the Product Owner's exact-version provisional approval of SDD-005 v0.2 within its documented scope, retaining SCH-Q01–SCH-Q08 as detailed open questions. Gate 2 remains historically IN PROGRESS; Checkpoint 11 remains unaccepted; no implementation, technical mechanism, verification acceptance or Gate 2 closure is authorized. | Product Owner explicit approval statement supplied in this task |
| 2026-11-13 | Revision 1.26. Recorded D-112, the Product Owner's acceptance of Checkpoint 11 within its documented design and prototype scope as D-093 representative design evidence, including the administrator appointment-review, permission-denial and unchanged-appointment journey. The prototype is illustrative; all applicable approved SDD requirements remain mandatory for implementation, verification and release. Acceptance does not establish real authentication, MFA, authorization enforcement, persistence, full accessibility conformance, specialist approval or production readiness. Historical Gate 2 remains IN PROGRESS and unfinished; CP12 and final review are not recorded complete. No implementation, SDD modification, Git write, Gate 2 closure or CP12 initiation is authorized. Approval date not separately supplied; recorded 2026-11-13. | Product Owner CP11 acceptance instruction in the current conversation |

> **Change-log note (superseding clarification).** The 2026-10-15 "Gate 0
> governance corrections" entry recorded P-008 as resolved when it had only been
> *proposed* as resolved at that time; the later owner-authorized entry records the
> product-owner confirmation. The original entry is preserved as a historical
> record and is not a statement of current status.

---

## 13. Approval

This register was approved by the product owner as a Gate 0 baseline artifact
under P-001 on 2026-10-22. The product owner signed off the Gate 0 evidence record
and explicitly approved the Gate 0 transition on 2026-10-22, so Gate 0 is
`COMPLETE (APPROVED)` (no approval time recorded). The Product Owner authorized
Gate 1 entry on 2026-10-28 and separately approved D-082 on 2026-10-29. Gate 1 is
`COMPLETE (APPROVED)` and Gate 2 is `IN PROGRESS` for architecture/design
documentation only; implementation remains unauthorized.

| Approver | Role | Decision | Date |
|---|---|---|---|
| Product Owner | Product Owner | Approved as a Gate 0 baseline artifact (P-001) | 2026-10-22 |
| Product Owner | Product Owner | Gate 0 evidence record signed off; Gate 0 transition approved — `COMPLETE (APPROVED)` | 2026-10-22 |
| Product Owner | Product Owner | Gate 1 entry authorized for requirements analysis and documentation — `IN PROGRESS`; implementation not authorized | 2026-10-28 |
| Product Owner | Product Owner | D-082 separately approved; Gate 1 exit approved — `COMPLETE (APPROVED)`; Gate 2 entry authorized for architecture/design documentation only | 2026-10-29 |

**Current transition record (D-098, 2026-11-10):** Gate 0 and Gate 1 retain their historical
approved status. Gate 2 remains historically unfinished and not accepted; Checkpoint 11 was accepted
on 2026-11-13 under D-112 within its documented design/prototype scope. Former Gates 3–7 are not routine sequential prerequisites.
The D-098 SDD workflow and independent retained controls govern future changes. Nothing in this
transition grants production implementation, database, dependency, deployment, or CEAP access.

**Prospective prototype exception (D-101):** Qualifying isolated, fictional, non-production
prototype refinements follow the Prototype Exploration Exception in Engineering Governance §5.
The D-101 exception made no gate transition; Checkpoint 11 was separately accepted on 2026-11-13
under D-112 within its documented design/prototype scope. It grants no product implementation
authorization. Existing D-098 product implementation and retained security, data-integrity, release,
and operational controls remain in force.

**Product Owner historical disposition instruction, recorded 2026-11-13:** The Product Owner explicitly retains Gate 2 as historically IN PROGRESS under D-098. Approval date was not separately supplied. CP11 remained unaccepted at the time of that instruction; CP12 and final Gate 2 review are not recorded complete; Q-007 and other applicable historical dispositions remain open. This instruction grants no waiver, Gate 2 closure or implementation authorization. Individual SDD and Registry decisions are recorded in `docs/specs/SDD_REGISTRY.md` §13 and do not change gate status.

**CP11 acceptance, recorded 2026-11-13 (D-112):** The Product Owner separately accepted Checkpoint 11 within its documented design and prototype scope as representative design evidence under D-093, including the administrator appointment-review → permission-denial → unchanged-appointment journey. The prototype is illustrative and is not required to implement every approved SDD workflow; all applicable approved SDD requirements remain mandatory for implementation, verification and release unless formally changed or deferred through approved governance. Acceptance does not establish real authentication, MFA, authorization enforcement, persistence, full accessibility conformance, qualified specialist approval or production readiness. This supersedes the CP11-unaccepted portion of the preceding historical instruction while preserving its Gate 2 IN PROGRESS disposition. CP12 and final Gate 2 review remain not recorded complete; no implementation, Gate 2 closure, CP12 initiation, Git write or CEAP access is authorized.
