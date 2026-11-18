# Gate 1 Final Validation Package — Appointment Management System

| Field | Value |
|---|---|
| Document status | APPROVED DEVELOPMENT-STAGE PACKAGE — D-077–D-082; genuine validation remains outstanding |
| Gate | Gate 1 (Requirements Discovery) — COMPLETE (APPROVED); Gate 2 entry authorized for documentation only |
| Document date | 2026-10-29 |
| Revision | 0.8 (2026-10-29 — D-082 approved; Gate 1 closed and Gate 2 authorized) |
| Owner | Product Owner |
| Prepared by | AI assistant at the Product Owner's written instruction |

This package consolidates the remaining Gate 1 validation into one practical
sequence. It reuses EVD-001–EVD-013 and the v0.7 baseline; EVD-008–EVD-013 are
submitted records with completeness limitations and do not replace the required
formal reviews. This package does not restart discovery or duplicate the
requirement rationale already recorded in the specification, traceability matrix,
or validation plan.

**Boundary:** This package prepares reviews. It records no participant, finding,
sign-off, requirement approval, deferral, or gate closure. Record templates are
completed only after an actual session. Missing facts are recorded as
`Not recorded`, never reconstructed.

## 1. Minimum path

1. One coordinated review day: a business decision-maker plus front-desk staff
   member (separate participants) and a public user/appointment booker.
2. One operator/support review with the Product Owner.
3. One qualified privacy/security review.
4. Product Owner exact-version baseline review (Q-010 disposition recorded by D-055).
5. Separate Gate 1 exit approval.

No new interviews are required where EVD-001–EVD-004 already answer the question.
A new session is required only for the direct-validation items in §2.

## 2. Session coverage

| Session | Covers | Discovery support today | Direct validation still needed |
|---|---|---|---|
| Business/front-desk | FR-001–FR-002; FR-004; FR-013–FR-018; NFR-001; NFR-004; NFR-006; BR-001–BR-002; BR-005–BR-009; UJ-002; UJ-005; AC-003–AC-005; AC-009–AC-013; A-1; A-6 | EVD-001–EVD-006 support the workflow direction; NFR-001/A-1 untested | MVP fit, configurable policy model, role boundaries, exceptions, walk-in, roster, batch reconciliation, alternative availability, deployment fit |
| Public user | FR-003; FR-005; FR-007; FR-010; FR-018; NFR-007; NFR-009; BR-002–BR-003; BR-006; UJ-001; UJ-003; AC-001–AC-002; AC-006; AC-009–AC-010; AC-013 | EVD-004 and EVD-007 support direction | Guest/proxy flow, screenshot-friendly confirmation, alternative availability, QR presentation and recovery, cancellation/rescheduling, privacy and accessibility |
| Operator | FR-012; NFR-005; NFR-011; BR-004; UJ-004; AC-007; Q-008 | Decision-derived only; no operator evidence | Non-data support tasks, no-default-access boundary, exceptional access |
| Privacy/security | FR-005–FR-006; FR-008; NFR-003; NFR-005; NFR-009; NFR-011; BR-003–BR-004; BR-009; AC-002–AC-004; AC-007; AC-012; QR-L01–QR-L12; Q-015 | EVD-003–EVD-004 give privacy expectations only | Qualified review; no legal-compliance claim |
| Product Owner baseline | All FR/NFR/BR/UJ/AC; S-1–S-7; D-067–D-075; Q-010/Q-014 | Not applicable | Exact-version review and disposition |

Full per-requirement evidence and planned-activity columns remain authoritative in
`REQUIREMENTS_TRACEABILITY.md` §1. No requirement currently has formal validation;
EVD-005–EVD-007 are v0.4 follow-up evidence and do not approve or validate v0.7.

## 3. Business/front-desk agenda

Ask for current practice before showing the draft. Record answers, exceptions, and
disagreements; do not lead the participant toward the draft.

| # | Question | Records |
|---|---|---|
| B1 | Which services, staff/resources, durations, buffers, and availability periods must be configurable? Is any value fixed? | FR-001; NFR-004; BR-005; Q-019 |
| B2 | How is capacity defined (slot, day, staff, resource) and what must happen at the limit? | FR-002; NFR-006; BR-001; AC-005 |
| B3 | What counts as a duplicate booking, and what identity key and window should be configurable? | BR-002; AC-001; Q-021 |
| B4 | Who may create, change, cancel, reschedule, and record attendance, and where must supervisor approval be required? | FR-004; FR-015; BR-007; AC-011 |
| B5 | For assisted, proxy, and walk-in booking, which fields are necessary, and what proof or authorization is required? | FR-013; BR-006; AC-010 |
| B6 | Which attendance/service states are used, and how are arrival, completion, and no-show corrected? | FR-014; BR-008; AC-004 |
| B7 | What must the printed daily roster contain, who holds it, and how is it disposed of? | FR-016; AC-012 |
| B8 | During an outage, what is written on paper, and how are multiple attendance and walk-in updates batch-reconciled after restoration, including records that cannot be reconciled automatically? | FR-017; BR-009; AC-012 |
| B9 | Would an independently installed system per client fit your operations? What installation or support constraints apply? | NFR-001; A-1; Q-008 |
| B10 | Q-010 is deferred to Gate 6 by D-055; confirm no Gate 1 pricing or support-package decision is required. | Q-010 |
| B11 | When a preferred date or slot is unavailable, what alternatives should be offered within this installation, and what must not be offered? | FR-018; AC-013 |

## 4. Public-user agenda

| # | Question | Records |
|---|---|---|
| P1 | Walk through booking without an account: what information would you provide, and what is unclear? | UJ-001; FR-003; AC-001 |
| P2 | What must a confirmation show to be useful, and would you screenshot or print it? | FR-010; AC-002 |
| P3 | How would you present the QR, and what should happen if you lose it or cannot display it? | FR-005; QR-L01; QR-L05; AC-002 |
| P4 | How should cancellation and rescheduling work, and what should you be told about windows or fees? | FR-007; UJ-003; AC-009 |
| P5 | For a booking made for someone else, what should the booker and the attendee each provide? | FR-013; BR-006; AC-010 |
| P6 | What would make the QR feel unsafe or expose too much personal data? | BR-003; NFR-009 |
| P7 | Which devices and assistive settings do you use, and what would block you? | NFR-007; AC-006 |
| P8 | What should happen when a booking is rejected as full, duplicate, or invalid, and should available alternatives be offered? | FR-002; FR-018; AC-001; AC-013 |

## 5. Operator/access-boundary agenda

Approved boundary: system operators have no default access to client data (D-034;
NFR-005; BR-004). Do not infer broader privileges.

| # | Question | Records |
|---|---|---|
| O1 | Which non-data support tasks must you perform (install, configure, back up, monitor, update)? | FR-012; UJ-004; Q-008 |
| O2 | Confirm that you have no default access to client appointment or personal data. Is that workable? | NFR-005; BR-004; AC-007 |
| O3 | If client data is ever needed, who authorizes it, for what scope, for how long, and how is it reviewed and closed? | FR-012; NFR-011; AC-007; BR-004 |
| O4 | How do you support a client without seeing their data (logs, diagnostics, remote session)? | NFR-003; NFR-005 |
| O5 | What backup, restore, and monitoring responsibilities do you hold, and what evidence must be recorded? | Q-008; NFR-011 |
| O6 | What audit record would prove an exceptional access was legitimate? | FR-008; NFR-011; AC-007 |

## 6. Qualified privacy/security review checklist

The reviewer must be qualified and independent of the author. This checklist does
not assert legal compliance; Philippine Data Privacy Act 2012 and NPC guidance
questions are escalated for legal confirmation.

| # | Review item | Records |
|---|---|---|
| S1 | Inventory personal data collected and displayed for guest, proxy, staff, and operator; state purpose and necessity. | NFR-009; BR-003 |
| S2 | Guest and proxy booking risks: impersonation, unauthorized booking, contact-data misuse. | FR-003; FR-013; AC-010 |
| S3 | Authentication and authorization: scoped guest access, staff authentication, role separation, server-side enforcement. | NFR-003; S-4; Q-009; Q-018 |
| S4 | QR reference exposure: what may be encoded or displayed; replay, screenshot, enumeration, revocation, recovery. | FR-005–FR-006; BR-003; QR-L01–QR-L09 |
| S5 | Roster and export access: who may generate, print, store, and dispose; minimum field set. | FR-016; AC-012; NFR-009 |
| S6 | Audit records: what is logged, who may view, integrity, and retention. | FR-008; NFR-011; QR-L09 |
| S7 | Retention and deletion: periods, legal basis, notices, and data-subject requests. | NFR-009; Q-015 |
| S8 | Operator access: no default access; exceptional authorization, least scope, time limit, review, and closure. | FR-012; NFR-005; BR-004; AC-007 |
| S9 | Philippine privacy considerations requiring legal confirmation; do not claim compliance. | NFR-009; Q-015 |
| S10 | Concurrency and atomicity abuse cases: double scan, scan-versus-cancel race, outage reconciliation. | NFR-006; BR-008–BR-009; QR-L07 |
| S11 | Findings: severity, affected IDs, required disposition, residual risk, and whether any finding blocks Gate 1. | All reviewed IDs |

## 7. Session record template

Complete one record per additional session, then register it under the next available
`EVD-###` identifier (EVD-014 is next after the currently registered EVD-013; verify
the register before assignment). Do not
prefill outcomes.

| Field | Value |
|---|---|
| Evidence ID | `EVD-___` |
| Activity | VAL-___ |
| Date | |
| Participant role | |
| Relevance / selection basis | |
| Consent and note-taking boundary | |
| Facilitator | |
| Method | |
| Records shown | |
| Scope reviewed | |
| Findings | |
| Disagreements / contradictions | |
| Unanswered questions | |
| Limitations | |
| Affected IDs | |
| Storage location | |
| Reviewer identity and qualifications (privacy review only) | |
| Disposition | |

After the session: update traceability, then advance a requirement only through
`DRAFT → UNDER_REVIEW → VALIDATED` where the evidence actually supports it. Only
the Product Owner may set `APPROVED`, `DEFERRED`, or `WITHDRAWN`.

## 8. Requirements baseline review checklist (Product Owner)

| # | Check | Result |
|---|---|---|
| C1 | Confirm the exact v0.7 text and version history in the specification and traceability matrix. | |
| C2 | Confirm counts and integrity: 18 FR, 11 NFR, 9 BR, 5 UJ, 13 AC; no duplicate or undefined IDs. | |
| C3 | Confirm FR-009 and FR-011 remain `DEFERRED` and outside MVP. | |
| C4 | Confirm each S-1–S-7 wording is measurable; assign profile, scope, and evidence owner or defer to a named later gate. | |
| C5 | Confirm each open parameter is either client-configurable or explicitly deferred to Gate 2 design. | |
| C6 | Review validation findings and decide lifecycle advancement per requirement where evidence supports it. | |
| C7 | Approve the exact requirement version, or record an explicit deferral. | |
| C8 | Confirm Q-010 is deferred to Gate 6 by D-055 (§9). | |
| C9 | Confirm no invented business policy, workflow, or commercial commitment. | |
| C10 | Record Gate 1 exit approval separately from baseline approval. | |

## 9. Q-010 recorded disposition (D-055)

Text recorded by D-055 on 2026-10-29:

> Defer detailed commercial pricing, licensing fees, and support-package pricing to
> the appropriate later business/release planning gate. Preserve the approved
> separate-installation-per-client product model and any commercial assumptions
> needed for architecture.

**Governance check.** Gate Register §4 permits a blocking question to be resolved
or explicitly deferred by the Product Owner, and its Q-010 blocker accepts either
a bounded Gate 1 decision or an explicit deferral. Engineering Governance §8
requires requirements review before implementation, not pricing. D-020 already
fixes the independent-installation model, so architecture does not need pricing.
The support model (Q-008) is already a Gate 2/Gate 6 matter.

**Recommended target gate:** Gate 6 (Release Readiness & Deployment Approval),
where deployment and support model decisions are made. If the Product Owner
prefers, the commercial decision may instead be assigned to a separately
authorized business-planning activity before Gate 6.

**Status:** recorded by D-055 on 2026-10-29 as an explicit Product Owner deferral
to Gate 6. Q-010 is no longer open; no pricing, licensing, or support-package
commitment is created, and D-020 remains in force.

## 10. Baseline quality findings

| Finding | Affected records | Action |
|---|---|---|
| No requirement has formal validation; EVD-001–EVD-007 are discovery/follow-up support only, and EVD-005–EVD-007 concern v0.4 rather than explicit v0.7 approval. | All FR/NFR/BR/UJ/AC | Complete §3–§6; do not mark `VALIDATED` without cited evidence. |
| D-069 identifies supported browser families and D-052/D-068 define the core accessibility scope. A completed review or conformance result is not recorded. | NFR-007; AC-006; S-7 | Confirm the verification method, assigned reviewer, and evidence before `VALIDATED`. |
| D-067/D-070 define the daily workload profile and normal/peak/contention scenarios, including the S-3 integrity target. Numeric response-time and availability targets remain open; no measurements are recorded. | NFR-008; S-3; Q-016; Q-022 | Disposition the remaining targets and assign later-gate verification ownership. |
| "Tamper-resistant within the approved design" is design-dependent. | NFR-011 | Interpret at Gate 2/Gate 3; not Gate 1-testable. |
| D-068 defines the core workflow inventory; test cases and execution evidence are still pending. | NFR-010; AC-008; S-6 | Map the inventory to test cases and assign later-gate evidence ownership. |
| "Clean client installation" is undefined. | S-1 | Define the clean baseline and evidence owner. |
| D-071 defines the severity method; no security findings or release assessment are recorded. | S-5 | Apply the method during qualified review and later release verification. |
| D-074 defines the minimum roster fields; custody, distribution, retention, and disposal still need qualified review and policy disposition. | FR-016; AC-012 | Review the remaining handling rules without inventing a legal retention period. |
| Essential operational monitoring is resolved by D-073 while advanced reporting is deferred; implementation and alerting architecture remain later-gate work. | FR-008; NFR-011; FR-011; Q-014 | Confirm requirement mapping and evidence ownership; do not select technology at Gate 1. |
| The v0.7 refinements add workload/profile, browser/accessibility, monitoring, roster custody, operator-boundary, batch reconciliation, walk-in, screenshot-friendly confirmation, and alternative availability directions without inventing measurements or legal retention values. | FR-008; FR-010; FR-012; FR-013; FR-016; FR-017; FR-018; NFR-007–NFR-011; AC-002; AC-005–AC-007; AC-010; AC-012; AC-013 | Confirm parameters and evidence roles during review; no test result, named reviewer, or fixed legal retention period is approved. |
| No discovery evidence tests deployment-model fit. | NFR-001; A-1 | Business session B9. |
| Commercial model is deferred to Gate 6 by D-055. | Q-010 | No Gate 1 disposition remains; D-020 preserved. |
| The submitted EVD-008–EVD-013 outcomes and approval claims do not meet the recorded evidence and exact-version approval conditions; one-hour cutoff, fixed retention, four-hour operator access, and break-glass access remain proposals. | VAL-001–VAL-006; Q-015; Q-020; D-075 | Preserve the submitted source; obtain missing provenance, qualified review, and explicit Product Owner dispositions before closure. |

**Architecture-blocking parameters** (decide, or explicitly defer to Gate 2, before
Gate 2 design completes): QR lifecycle minimum (QR-L01–QR-L09); duplicate identity
key and window (BR-002; Q-021); capacity unit/period/resource model (BR-001;
Q-019); role/permission matrix detail (Q-018); staff authentication/provisioning
(Q-009); retention/deletion rules (Q-015); deployment/hosting/backup/support model
(Q-008); minimum roster field set (FR-016); supported environments (NFR-007).

**Legitimately configurable values** (proposed; Product Owner confirmation
required): service durations, buffers, availability periods, capacity numbers,
cancellation/rescheduling windows and fees, grace periods, exception categories,
proxy evidence rules, and duplicate-policy values within the approved model.

**Deferred scope that must not re-enter MVP without a new decision:** FR-009
(eligibility/masterlist), FR-011 (advanced reporting/analytics/exports beyond the
daily roster), automated waitlists, payments/deposits, public accounts, advanced
queue displays, broad external integrations, government-specific eligibility,
enterprise capabilities, external notification/reminders, and offline new-booking
synchronization.

## 11. Closure readiness

The original evidence-based closure checklist was **NOT READY** before the
development-stage route. Under D-077–D-082, Gate 1 closed on 2026-10-29 through
the explicitly labeled assumption route: Q-010 is deferred to Gate 6 by D-055,
the operator boundary and exact v0.7 baseline are recorded, blockers have approved
dispositions, and D-082 separately authorizes the transition. Genuine validation,
qualified review, testing, and release evidence remain future obligations.

## 12. Session Completion Controls

Use one record for each actual review. The agendas above are prompts, not
findings. Do not prefill participant names, dates, answers, outcomes, or
approvals. Missing facts are recorded as `Not recorded`.

### 12.1 Common evidence record

| Field | Record after the session or review |
|---|---|
| Evidence ID / activity | `EVD-___` / `VAL-___` |
| Date |  |
| Participant or reviewer role and relevance |  |
| Reviewer qualification and independence, if applicable |  |
| Facilitator / preparer |  |
| Method and records reviewed |  |
| Findings and disagreements |  |
| Unanswered questions |  |
| Limitations |  |
| Affected requirements, journeys, rules, criteria, assumptions, risks |  |
| Pass/fail/unresolved disposition and rationale |  |
| Product Owner or reviewer disposition |  |

Use these dispositions:

- **Pass:** the session directly supports the stated Gate 1 question and no
  blocking contradiction remains for the reviewed scope.
- **Fail:** the session identifies a material contradiction, unsafe requirement,
  or missing control that prevents the reviewed scope from being accepted.
- **Unresolved:** the evidence or authority is insufficient to decide; record the
  owner, follow-up, and target gate or review event.

Only a completed, relevant, representative, and reviewed evidence record may
support a requirement moving to `VALIDATED`. Only the Product Owner may set
`APPROVED`, `DEFERRED`, or `WITHDRAWN`.

### 12.2 Business/front-desk walkthrough control

| Item | Minimum requirement |
|---|---|
| Required participants | One primary-segment business decision-maker and one front-desk staff member; record roles and relevance, not unnecessary identity data. |
| Relevant records | FR-001–FR-002, FR-004, FR-013–FR-018, NFR-001, NFR-004, NFR-006, BR-001–BR-002, BR-005–BR-009, UJ-002, UJ-005, AC-003–AC-005, AC-009–AC-013, A-1, A-6, D-041–D-051, D-060, D-063–D-066, D-074. |
| Scenarios | Configure service, staff/resource capacity, and buffers; book near capacity; create assisted/proxy/walk-in bookings; reject a duplicate; cancel/reschedule; approve an exception; print a roster; reconcile conflicting outage records; offer an alternative slot. |
| Evidence expected | Answers and disagreements mapped to B1–B11; policy assumptions confirmed or rejected; affected IDs; participant selection basis; limitations. |
| Pass | Participants confirm target-segment MVP fit and the need for configurable policy, capacity, duplicate, authorization, audit, roster, and reconciliation controls. |
| Fail | A required workflow is unusable, a mandatory integrity/privacy/access control is unacceptable, or the session requires a capability explicitly deferred by D-042, D-056–D-058, or D-076. |
| Unresolved | Policy values, deployment fit, roles, exceptions, roster custody, or reconciliation rules remain disputed or lack decision authority. |

### 12.3 Public-user walkthrough control

| Item | Minimum requirement |
|---|---|
| Required participant | One public user or appointment booker with relevant booking experience; record role and selection basis. One participant does not establish accessibility conformance or representative sampling. |
| Relevant records | FR-002–FR-003, FR-005, FR-007, FR-010, FR-013, FR-018, NFR-003, NFR-007, NFR-009, BR-002–BR-003, BR-006, UJ-001, UJ-003, AC-001–AC-002, AC-006, AC-009–AC-010, AC-013, D-045–D-046, D-049, D-065–D-066. |
| Scenarios | Select a service and slot; complete guest and proxy booking; receive and recover confirmation/QR; lose or cannot display QR; encounter full, duplicate, or invalid input; cancel/reschedule; review privacy and accessibility expectations. |
| Evidence expected | Answers mapped to P1–P8; comprehension or failure points; minimum information expected; recovery and privacy concerns; affected IDs; limitations. |
| Pass | The participant can explain the intended guest/proxy journey, confirmation and recovery needs, and rejection/change outcomes without treating QR as identity proof. |
| Fail | The flow requires an unapproved public account, external messaging, payment, waitlist, live queue, or other deferred MVP capability, or exposes unnecessary personal data. |
| Unresolved | Identity, recovery, cancellation, accessibility, privacy, or QR expectations need qualified or Product Owner resolution. |

### 12.4 Qualified privacy/security review control

| Item | Minimum requirement |
|---|---|
| Required reviewer | Qualified privacy/security/data-integrity reviewer independent of the author; record qualification and independence without inventing a person or certification. Escalate legal questions. |
| Relevant records | FR-005–FR-006, FR-008, FR-012, NFR-003, NFR-005–NFR-006, NFR-009, NFR-011, BR-003–BR-004, BR-009, AC-002–AC-004, AC-007, AC-012, QR-L01–QR-L12, Q-015, D-034, D-045, D-048, D-050, D-075. |
| Scenarios | Review data inventory and necessity; authentication and server-side authorization; QR disclosure, replay, recovery, and misuse; retention/deletion; audit access and integrity; printed roster custody; operator access; concurrency and reconciliation failure cases. |
| Evidence expected | Completed S1–S11 findings, severity, affected IDs, required disposition, residual risk, legal escalations, and limitations. |
| Pass | Required privacy, security, authorization, audit, and data-integrity controls remain intact; unresolved design/legal matters have owners and later-gate dispositions. This is not a legal-compliance or implementation claim. |
| Fail | A material privacy, authentication, authorization, QR, audit, data-integrity, operator-access, or CEAP-isolation defect makes the requirement direction unsafe or unacceptable. |
| Unresolved | The reviewer lacks jurisdictional facts, design details, evidence, or authority. Record the exact missing fact and owner; do not mark VAL-004 complete. |

### 12.5 Operator-access walkthrough control

| Item | Minimum requirement |
|---|---|
| Required participants | Product Owner and system operator/support-role representative; participation does not itself grant authority. |
| Relevant records | FR-008, FR-012, NFR-005, NFR-011, BR-004, UJ-004, AC-007, Q-008, D-034, D-047, D-050, D-075. |
| Scenarios | Install/configure without customer-data access; troubleshoot using minimized technical logs; request client-authorized exceptional access; set purpose, scope, duration, expiry, audit, review, and closure; discuss administrator-unavailable emergency access as an unresolved proposal. |
| Evidence expected | Answers to O1–O6; default boundary; exceptional-access request fields; approver; time limit; expiry and closure; emergency-access disagreement; affected IDs. |
| Pass | Default access is denied; routine support is separated from data access; exceptional access requires client authorization, least scope, attribution, time limit, expiry, review, and closure. |
| Fail | The operator has unrestricted default access, self-approves access, lacks attributable audit, or can bypass client authorization. |
| Unresolved | Support procedure, duration, emergency process, audit viewer, or closure responsibility is undecided. Do not invent a duration. |

## 13. Exact v0.7 Baseline Review Outcome

Complete this after the Product Owner reviews the exact specification and
traceability version. It is separate from Gate 1 exit approval.

| Check | Required result | Record |
|---|---|---|
| Exact text and version | Requirements Specification v0.7 and corresponding traceability/version history reviewed |  |
| Counts and identifiers | 18 FR, 11 NFR, 9 BR, 5 UJ, 13 AC; no duplicate or undefined IDs |  |
| Lifecycle status | Active requirements have `APPROVED` development-stage disposition; FR-009 and FR-011 remain `DEFERRED`; no `VALIDATED` status is invented |  |
| Scope boundary | D-076 deferrals and all other approved exclusions remain outside MVP |  |
| Open parameters | Each item is client-configurable, explicitly unresolved, or assigned to a named later gate |  |
| Evidence and provenance | Discovery evidence is not overstated as formal validation; limitations remain visible |  |
| Targets and risks | S-1–S-7, risk treatments, evidence ownership, and residual risks are accepted, assigned, or explicitly deferred |  |
| Outcome | `PASS`, `FAIL`, or `UNRESOLVED`, with rationale and Product Owner reference/date |  |

`PASS` requires no material contradiction or invented policy. `FAIL` requires a
recorded correction or disposition. `UNRESOLVED` remains visible and is not
treated as approval.

## 14. Separate Gate 1 Exit-Approval Checklist

Complete only after the reviews, evidence registration, and baseline review.
This checklist does not itself approve Gate 1 or unblock Gate 2.

| Exit control | Required evidence or decision | Result |
|---|---|---|
| Requirements documented and reviewed | Exact v0.7 review record; statuses and traceability accurate |  |
| Target customer validated or explicitly dispositioned | VAL-001 evidence with limitations or explicit Product Owner disposition |  |
| User journeys reviewed | Business/front-desk, public-user, and operator evidence for UJ-001–UJ-005 |  |
| Business rules reviewed | Scheduling, capacity, duplicates, cancellation/rescheduling, overrides, walk-ins, rosters, reconciliation |  |
| Authentication/access model reviewed | Guest, staff, supervisor, administrator, and operator boundaries; later-gate mechanisms assigned |  |
| A-1–A-3 and A-6 dispositioned | Evidence or explicit correction/deferral with owner and rationale |  |
| Risk register updated | Owners, treatments, residual risks, and blocking findings recorded |  |
| S-1–S-7 dispositioned | Provisional target, later-gate owner, or explicit Product Owner deferral for each remaining item |  |
| Privacy/security review recorded | VAL-004 evidence; no mandatory safety, legal, privacy, or integrity bypass |  |
| Operator boundary recorded | VAL-006 evidence or explicit Product Owner deferral of client-data support access |  |
| Blocking questions resolved or explicitly deferred | Decision Register entry or traceable disposition; no silent assumptions |  |
| Gate 1 exit approval | Separate explicit Product Owner approval naming artifact, date, and scope |  |

This checklist remains the evidence-based route and is superseded for the current
development-stage closure only by §16. Gate 1 approval remains separate from exact
requirement approval; D-082 is the recorded separate gate-transition approval.

## 15. Additional Governance Coverage Check

Before requesting Gate 1 exit, also confirm:

- Evidence accountability follows D-072 and Validation Plan §§6–7.1: preparer,
  reviewer, approver, and independent reviewer where required.
- No requirement is marked `VALIDATED` without relevant reviewed EVD evidence,
  and no requirement is marked `APPROVED` without Product Owner reference/date.
- D-076 does not weaken existing walk-in, appointment, audit, or data-integrity
  controls.
- Q-010 remains deferred to Gate 6; no pricing or support commitment is invented.
- CEAP separation and independent-database requirements remain explicit.
- No architecture, implementation, dependency, database, migration, deployment,
  Obsidian, or CEAP activity is authorized by this package.
- The Gate 1 evidence record states whether a meaningful reusable engineering
  lesson emerged, following Gate Register §11 and Engineering Governance §5.
- Gate 2 entry is recorded in the Gate Register under D-082 for documentation only.

## 16. Approved development-stage closure amendment — D-077–D-082

**D-077–D-082 were approved by the Product Owner on 2026-10-29.** The original
submitted responses and their reconciliation addendum remain intact. The exact
development-stage route is active in the affected authoritative documents. A
recorded Product Owner decision is real decision evidence; a fictional exercise is
not real validation evidence.

### 16.1 Exact amendment adopted (D-077)

The following amendment is active prospectively under D-077. Prior wording and
historical evidence remain preserved in revision history:

| Authority / clause | Adopted replacement or addition |
|---|---|
| Engineering Governance §6, Gate 1 row and evidence rule | For the **development-stage Gate 1 baseline only**, Product Owner-reviewed, explicitly labeled assumptions may substitute for representative stakeholder validation of the target segment, A-1–A-3/A-6, and draft journeys/rules, where the limitation, owner, risk, and later validation point are recorded. Fictional or simulated responses are design inputs only and never real interviews, qualified reviews, EVD evidence, or `VALIDATED` requirements. Real evidence remains required for any claim of actual validation, testing, or release readiness. |
| Engineering Governance §19, Gate 1 exit exception | A Gate 1 assumption-based baseline may exit on an explicit Product Owner decision if the exact requirements text and traceability are reviewed, open policy proposals are dispositioned without weakening mandatory controls, assumptions and risks have owners and follow-up gates, and the Product Owner separately approves the gate transition. Gate 2 may then perform architecture/design only. Gate 3's security/privacy and data-integrity **design** review remains mandatory before Gate 4; a **qualified independent** privacy/security assessment is additionally required before Gate 6 release approval. No production release may rely on simulated review or dispense with legally required privacy review, genuine review findings, tests, or other Gate 5–6 evidence. |
| Gate Register §4, deliverables / blockers / exit | Replace the current *direct stakeholder walkthrough and qualified independent Gate 1 review* blockers only for the assumption-based development route with: Product Owner acceptance of the explicitly labeled VAL-001–VAL-006 assumptions, an exact v0.7 review and baseline decision, an owned assumptions/risk and unresolved-policy disposition, and a separate Gate 1 exit approval. Record the real walkthroughs and qualified review as **outstanding, not completed**; assign genuine product-fit review before final release scope acceptance and qualified independent privacy/security assessment before Gate 6 release approval. Gate 3 design review remains a prerequisite for Gate 4. Gate 2 entry still requires recorded Gate 1 approval and its own entry authorization. |
| Charter §10, A-1–A-3 and A-6 | Label each as `Product Owner accepted for development-stage design; not validated by representative evidence` only after specific owner disposition; preserve A-1's approved independent-installation model and A-2's unproven representative sampling. Retain actual validation or correction as a pre-release product-fit obligation; A-4, A-5, A-7 remain Gate 2 assumptions. Do not rewrite historical research claims or the Gate 0-approved charter baseline. |
| Draft Requirements Governance §§4–5 and Validation Plan §§3, 7–8 | Add a narrowly scoped `DRAFT → APPROVED` transition **without `VALIDATED`** for an exact development-stage requirement/criterion only after explicit Product Owner review, reference/date, limitations, and owner/later-review gate are recorded. Retain the existing six-status vocabulary: `APPROVED` accompanied by `development assumption` in the approval metadata is bounded design scope, not stakeholder validation or release acceptance. Keep `VALIDATED` reserved for representative reviewed EVD evidence; retain `DEFERRED` and `WITHDRAWN` rules. VAL-001–VAL-006 remain `INCOMPLETE — REAL VALIDATION OUTSTANDING`, with their existing historical EVD classifications unchanged. Replace the mandatory Gate 1 checklist's direct sessions/qualified independent review with the above assumption acceptance for this route only; genuine review remains due before production release. |

**Compatibility:** The approved route changes the timing and classification of
early design inputs, not mandatory access control, integrity, legal obligations, or
release safety. D-050 expressly leaves privacy law and retention open; Gate 3's
design review cannot be skipped. Gate 2 documentation work is authorized, but no
implementation, database, deployment, production, or CEAP access is authorized.

### 16.2 Simulation reconciliation and ownership (D-078)

The table is a design-input acceptance matrix, **not** a record of completed
official VAL activities. `Suitable` means usable as an assumption under approved
D-077 and D-078, not that the actual validation activity passed.

| Simulated activity | Existing coverage / decision | Unresolved assumption and risk | Development route / genuine follow-up |
|---|---|---|---|
| VAL-001 | D-041–D-043/D-051/D-060; FR-001–FR-002, FR-013, FR-016–FR-017, BR-001/BR-005, UJ-005 | Client installation fit (A-1), representative segment/access (A-2), staff participation and A-3/A-6 remain unproved; market-fit rework risk R-1/R-9 | Suitable as planning input; Product Owner owns A-1–A-3 and R-1/R-9. Real business/front-desk product-fit review before final release scope acceptance. |
| VAL-002 | D-046/D-061/D-065–D-066; FR-003/FR-005/FR-007/FR-010/FR-018, UJ-001/UJ-003, AC-001/AC-002/AC-009/AC-013 | QR-L05 and secure guest recovery, identity checks, accessibility and public-user fit unverified; unauthorized disclosure risk R-6 | Suitable with safeguards; Product Owner owns journey assumptions, Gate 2 designs recovery and Gate 3 reviews it; real public-user review and accessibility evidence before release. |
| VAL-003 | D-047–D-048/D-060/D-063–D-064/D-074/D-076; FR-001/FR-004/FR-013–FR-017, BR-005/BR-009, UJ-002/UJ-005, AC-003–AC-005/AC-009–AC-012 | Client-specific change windows, role matrix, A-6 provisioning, roster custody and conflict handling unresolved; R-5/R-7/R-11 | Suitable with policy placeholders; Product Owner owns policy/role disposition, Gate 2 designs enforcement and continuity; real front-desk review before release. Buffers already exist; no v0.8 requirement. |
| VAL-004 | D-045/D-050/D-070/D-074–D-075; NFR-003/NFR-005–NFR-006/NFR-009/NFR-011, BR-003–BR-004/BR-009, AC-002–AC-004/AC-007/AC-012 | Fictional reviewer has no qualifications or independence; QR-L01–QR-L12, legal basis, retention/deletion, printed custody and concurrency remain open; R-5/R-6 | Suitable only as threat/design prompts. Product Owner owns privacy escalations; Gate 3 reviews design and a qualified independent reviewer assesses privacy/security before Gate 6 release. No fictional finding or legal conclusion counts as review. |
| VAL-005 | D-052/D-067–D-072; NFR-006/NFR-008/NFR-010, AC-005/AC-006/AC-008, S-3/S-5–S-7 | No measured performance, conformance, named QA or response-time target; R-5/R-9 | Suitable for test planning; Product Owner assigns verification roles, Gate 2 defines test preconditions, Gate 5 records performance/concurrency/accessibility evidence. No three-/five-second target or idempotency token is approved. |
| VAL-006 | D-034/D-047/D-075; FR-012, NFR-005/NFR-011, BR-004, UJ-004, AC-007 | No real operator review, duration, emergency authority or exceptional-access procedure; R-6 | Suitable as boundary scenario only; Product Owner owns procedure. Gate 2 designs no-default-access support; Gate 3 reviews exceptional access. Until authorized procedure exists, client-data access remains denied; real operator review before release. |

EVD-001–EVD-004 are real discovery accounts with the recorded provenance limits;
EVD-005–EVD-007 are supplied v0.4 follow-up summaries; EVD-008–EVD-013
preserve the submitted responses with missing provenance and qualification. None is
relabeled simulated or upgraded to complete v0.7 validation. The separate
`simulations/GATE-1-SIMULATED-VALIDATION.md` creates **no EVD identifiers**.

### 16.3 Baseline and policy disposition (D-079/D-081)

The exact candidate is `docs/requirements/REQUIREMENTS_SPECIFICATION.md` **v0.7**
with `docs/requirements/REQUIREMENTS_TRACEABILITY.md` **revision 1.0**:
FR-001–FR-018 (18), NFR-001–NFR-011 (11), BR-001–BR-009 (9), UJ-001–UJ-005 (5),
AC-001–AC-013 (13). FR-009 and FR-011 remain deferred (D-042); D-076 keeps
queue numbers, staff notes, and typing corrections outside MVP. D-060 and FR-001
already cover configurable buffers. No substantive v0.8 edit is needed for them.
Keep Q-020's one-hour cutoff configurable and unapproved, with disposition before
Gate 2 architecture approval. Set the retention period, exceptional operator access
duration, and emergency break-glass policy before Gate 3 security/privacy design
review approval. Resolve printed-roster handling and disposal before Gate 6 release
approval. Remaining measurable quality targets are due before Gate 2 architecture
approval and verified during applicable later gates. No `SE-###` exception is
created by D-079.
Preserve safe guest/reference recovery, QR minimization and non-identity semantics,
server-side capacity/duplicate concurrency enforcement, and controlled paper
fallback with batch reconciliation. D-067–D-075 set planning and evidence
directions, not test results. S-1–S-7 remain provisional targets with Gate 2
method/profile design and Gate 5 test evidence; Gate 3 reviews privacy/security
and data integrity; Gate 6 checks release obligations.

### 16.4 Skill/context efficiency addition adopted in Engineering Governance §2 (D-080)

> Before substantial work, inspect available skills and use the directly relevant
> ones; read their instructions before use. Prefer targeted reads, focused searches,
> incremental diffs, verified context, and existing project records over unrelated
> skill libraries or duplicate documents. Efficiency never reduces correctness,
> security, accessibility, privacy, required evidence, or an approval control.

This extends D-054 without creating separate skill authority or a gate exception;
`AGENTS.md` continues to point to Engineering Governance §2.

### 16.5 Exact baseline approval (D-081)

The Product Owner reviewed the exact v0.7 wording, revision 1.0 traceability,
per-record history, policy dispositions above, and risks. Each in-scope record's
effective version and approval reference/date are recorded as required by the amended
lifecycle; records are not marked `VALIDATED`. Preserve FR-009/FR-011 as `DEFERRED` and the earlier
versions/history. A package-level approval without those record updates does not
silently advance individual records. The recorded approval makes only a bounded
development design baseline, not a claim of market fit, privacy compliance, test
success, or implementation readiness.

### 16.6 Gate 1 exit and Gate 2 handoff record (D-082)

D-077–D-082 are explicitly approved with the actual date; approved text is
incorporated without erasing history; the exact per-record baseline and traceability
are consistent; A-1–A-3/A-6 and R-1/R-2/R-5–R-7/R-9/R-11 have Product Owner
ownership with Gate 2/3/5/6 follow-up; simulated and submitted evidence retain their
classification; and mandatory Gate 3 design review and pre-release genuine reviews
remain future obligations. D-082 separately authorizes Gate 1 exit and Gate 2 entry.
The Gate 2 handoff is the v0.7 / traceability 1.0
assumption-based baseline, independent per-client installations (D-020), no CEAP
contact (D-025/D-035), and the deferred MVP exclusions above. Architecture drivers:
configurable policies/resource capacity, guest/assisted/proxy/walk-in booking,
atomic concurrent booking and changes (50 requests/one capacity unit), scoped QR
lookup/recovery, auditable least-privilege roles and no-default operator access,
accessible confirmations, controlled rosters/reconciliation, and privacy-conscious
monitoring. Gate 2 must resolve capacity/duplicate models, role/provisioning and
guest recovery, QR lifecycle, retention design subject to qualified review,
deployment/backup/support assumptions (Q-008), and provisional stack compatibility
(D-022/D-031); Gate 3 reviews security, privacy, and integrity before Gate 4;
independent qualified assessment, genuine product-fit checks, tests, and release
evidence remain mandatory before production. Consult `AGENTS.md` and approved
governance at Gate 2 entry. **Gate 2 documentation work is authorized; implementation
remains unauthorized.**

**D-082 approval recorded:**

> As Product Owner, I explicitly and separately approve D-082 on October 29, 2026:
> Gate 1 exit and authorization to enter Gate 2 Architecture & Technical Design,
> after D-077–D-081 have been approved and incorporated, the exact v0.7 baseline
> and traceability revision 1.0 have been recorded, assumption ownership and
> milestone obligations have been verified, and the Gate 1 evidence/register has
> been reconciled. This authorizes architecture/design documentation only.
> It does not authorize implementation, database changes, deployment, production
> access, or CEAP access.

The authoritative Gate Register records Gate 1 `COMPLETE (APPROVED)` and Gate 2
`IN PROGRESS` for architecture/design documentation only.
