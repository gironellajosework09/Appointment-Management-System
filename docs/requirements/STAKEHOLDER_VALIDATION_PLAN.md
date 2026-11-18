# Stakeholder Validation Plan — Appointment Management System

| Field | Value |
|---|---|
| Document status | APPROVED DEVELOPMENT-STAGE PLAN — D-077/D-078; genuine validation remains outstanding |
| Gate | Gate 1 (Requirements Discovery) — COMPLETE (APPROVED); Gate 2 documentation authorized |
| Document date | 2026-10-28 |
| Revision | 1.0 (2026-10-29 — development-stage assumption route activated) |
| Owner | Product Owner |

This plan assesses EVD-001–EVD-004 as discovery evidence and defines the minimum
remaining validation. It does not claim representative sampling, a completed
formal walkthrough, legal review, requirement approval, architecture,
implementation, or Gate 1 exit.

## 1. Objectives

- Validate an initial customer segment and representative stakeholder set.
- Validate public, administrator/staff, and operator journeys without treating
  CEAP behavior as the product specification.
- Resolve or prepare evidence for Gate 1 questions, assumptions A-1–A-3 and A-6,
  business rules, and measurable criteria S-1–S-7.
- Distinguish mandatory-baseline constraints from candidate-v1 and optional
  priority without treating priority as approval.
- Record disagreement and negative evidence rather than forcing consensus.
- Test QR-L01–QR-L12 without presuming issuance, activation, expiry, revocation,
  recovery, repeated-scan/consumption, staff confirmation, attendance, outage,
  reconciliation, exception, or audit rules.

## 2. Participants and sampling

| Group | Minimum purpose | Related records |
|---|---|---|
| Product Owner | Scope, priority, disposition, approval, and unresolved-question decisions | All Gate 1 records |
| Prospective client decision-maker | Validate organization problem, value, operating constraints, and target segment (Q-010 deferred to Gate 6) | Q-001; A-2 |
| Appointment administrator/staff | Validate scheduling, capacity, exceptions, permissions, QR verification, reporting, and operations | Q-005; Q-009; Q-014; Q-018–Q-021 |
| Public user/applicant | Validate discovery, booking, account model, QR presentation, cancellation, accessibility, recovery, and privacy expectations | Q-002–Q-005; Q-011; Q-015; Q-020 |
| System operator/support role | Validate installation boundaries, support workflow, access authorization, backup/restoration, monitoring, and maintenance without default client-data access | D-034; FR-012; UJ-004; AC-007; Q-008; Q-014; Q-015 |
| Privacy/security/data-integrity reviewer | Review personal-data minimization, audit, authorization, QR abuse cases, concurrent scans, and failure atomicity | NFR-003; NFR-005; NFR-006; NFR-009; BR-003; BR-004 |

Participant count and selection for the registered research are not recorded.
D-041 selects the target segment but does not prove representativeness. The
minimum additional primary-segment review is one business decision-maker and one
front-desk staff member with relevant appointment operations, plus one public
user/appointment booker for the public journey. A qualified privacy/security
reviewer remains required for VAL-004. Participants must not provide production
credentials or unnecessary personal data.

## 3. Validation activities

| ID | Completed / evidence | Still unverified | Formal review required? | Minimum compliant next action | Status |
|---|---|---|---|---|---|
| VAL-001 | EVD-001–EVD-006 provide discovery/follow-up support; submitted EVD-008 claims PASS for one business owner. | Required separate front-desk participant, sampling basis, representativeness, independent review, and explicit v0.7 fit remain unproven; Q-010 is deferred to Gate 6 | Yes | Complete the required joint review with a primary-segment business decision-maker and front-desk staff member, or record an explicit Product Owner disposition of the evidence limitation | SUBMITTED RECORD — INCOMPLETE |
| VAL-002 | EVD-004/EVD-007 provide discovery support; submitted EVD-009 claims PASS. | Session date, method, facilitator, selection basis, and exact v0.7 walkthrough provenance are not recorded; accessibility and representative validation remain unproven | Yes | Complete and register a provenance-complete public-user walkthrough of UJ-001/UJ-003, including recovery, rejection, alternatives, privacy, and accessibility | SUBMITTED RECORD — INCOMPLETE |
| VAL-003 | EVD-001–EVD-006 provide discovery/follow-up support; submitted EVD-010 claims PASS WITH CHANGES. | Required participant set and session metadata are incomplete; one-hour cutoff is not an approved universal policy; queue implications require scope control | Yes | Complete the business/front-desk review and disposition the proposed cutoff and queue behavior without weakening D-042/D-058/D-076 | SUBMITTED RECORD — INCOMPLETE |
| VAL-004 | EVD-003/EVD-004/EVD-007 provide privacy expectations; submitted EVD-011 claims PASS. | Reviewer qualification, independence, method, jurisdiction, and completed S1–S11 findings are not recorded; retention, disposal, four-hour access, and break-glass proposals remain unresolved | Yes | Obtain and register a qualified independent privacy/security review; escalate legal questions and do not adopt fixed retention or emergency-access policy without approval | SUBMITTED RECORD — INCOMPLETE |
| VAL-005 | D-052 and D-067–D-071 establish approved direction; submitted EVD-012 claims PASS. | Reviewer metadata, evidence ownership, measured results, and disposition of proposed response-time targets/idempotency design are not recorded | Yes, documentation review now; technical verification occurs in later gates | Complete the v0.7 baseline review and explicitly assign or defer proposed numeric/design details without treating them as current requirements | SUBMITTED RECORD — INCOMPLETE |
| VAL-006 | D-034/D-047/D-050/D-075 and AC-007 define the no-default-access boundary; submitted EVD-013 claims PASS. | Operator walkthrough provenance and disposition of four-hour duration and break-glass access are not recorded | Yes | Complete the Product Owner/operator review and record the minimum procedure or explicit deferral; do not infer a duration or emergency exception | SUBMITTED RECORD — INCOMPLETE |

## 4. QR question protocol

Facilitators must present the mandatory QR capability without presenting any
detailed lifecycle as settled. Use the stable draft-local references in the
specification (not official `Q-###` identifiers). Each applicable session records
alternatives, exceptions, abuse/failure cases, and disagreements for:

1. issuance and reissuance authority;
2. activation trigger;
3. expiry event, time source, and timezone;
4. revocation authority and propagation;
5. lost-code, inaccessible-device, and safe-recovery paths;
6. repeated scans, consumption, idempotency, and prior-use outcomes;
7. atomicity and races among scan, cancellation, rescheduling, and concurrent
   verification;
8. authorized exceptions, overrides, offline/fallback behavior, and failure
   outcomes; and
9. audit events, viewers, retention, and privacy;
10. whether staff confirmation is distinct from verification;
11. whether attendance is distinct from verification and how it is corrected; and
12. outage behavior and reconciliation authority, without choosing offline
    architecture or assuming acceptance while verification is unavailable.

Record findings against QR-L01–QR-L12, including explicit disagreement and
unanswered prompts. Clarify scheduling/booking/cancellation/rescheduling policies
under Q-005, Q-019–Q-021 separately; draft invariants are not complete rules.

The activity produces evidence and open issues, not architecture, QR contents,
storage, cryptography, or an approval decision.

## 5. Session method

1. Confirm participant role, relevance, consent, and note-taking boundaries.
2. Ask for the participant's current problem and workflow before showing a draft.
3. Walk through relevant journeys and criteria using neutral, non-leading prompts.
4. Capture outcomes, alternatives, exceptions, frequency, severity, terminology,
   and counterexamples; separate observed statements from interpretation.
5. Review priority hypotheses, asking what evidence makes each necessary or
   unnecessary.
6. Read back material findings and disagreements for correction.
7. Create evidence records and update traceability; do not change status during
   the session without the review and authority required by the lifecycle.

## 6. Evidence standard

Each `EVD-###` record must include the known date or `Not recorded`, activity ID,
participant role (not unnecessary identity), facilitator or `Not recorded`,
method, records reviewed, findings, contradictions, limitations, affected IDs,
and storage location. Missing historical metadata is a recorded limitation, not
reconstructed. Raw notes must exclude secrets and unnecessary personal data.

Activities `VAL-###` are plans; only completed `EVD-###` records are evidence.
Evidence supports `VALIDATED` only when relevant, representative, cited, and
reviewed. One opinion is not automatically a validated market or universal rule.
Conflicts remain visible and are referred to the Product Owner when they affect
scope, priority, disposition, or approval.

## 7. Status and decision handling

- Findings enter as `DRAFT` or create a versioned update to a draft with exact
  provenance.
- A requirement moves from `DRAFT` to `UNDER_REVIEW` only after consistency and
  traceability review.
- A requirement moves from `UNDER_REVIEW` to `VALIDATED` only with cited
  `EVD-###` evidence and a documented review record.
- Only the Product Owner may set `APPROVED`, `DEFERRED`, or `WITHDRAWN`, with the
  required approval or disposition reference, date, and rationale.
- Under D-077, the Product Owner may approve an exact development-stage requirement
  or criterion without `VALIDATED` status when its assumption label, limitation,
  owner, and later-gate obligation are recorded. This does not convert simulated
  material into EVD evidence.
- Material changes preserve the effective approved version and start a separate
  working `DRAFT` version, with author/role, date, reason, links, impact, review
  status and approval reference/date recorded independently.
- Resolved `Q-###` items and new `D-###` decisions must be updated in the Decision
  Register. `P-###` approval/confirmation items remain distinct from decisions.

## 7.1 Evidence accountability

The accountable role must be recorded for each activity before it is treated as
complete. Evidence records distinguish the preparer, reviewer, approver, and
independent reviewer where independence is required (D-072). No person, signature,
qualification, or completed assessment is inferred from a role label.

| Evidence area | Accountable role to assign | Required review distinction |
|---|---|---|
| Requirements validation | Product Owner / requirements reviewer | Preparer, stakeholder reviewer, and Product Owner approver are distinct where applicable |
| Privacy/security | Qualified privacy/security reviewer | Independent review and Product Owner disposition; legal questions escalated |
| Performance/integrity | Performance/data-integrity reviewer | Preparer, reviewer, and later-gate approver |
| Accessibility | Accessibility reviewer | Independent review where required; no conformance claim before evidence |
| Functional acceptance | Product Owner / acceptance reviewer | Test/evidence preparer separate from acceptance approver |
| Operational readiness | Operations reviewer | Preparer, reviewer, and Product Owner approval |

## 8. Mandatory review checklist

The operational agenda, questions, and record templates are in
`GATE-1-FINAL-VALIDATION-PACKAGE.md`; this checklist remains the control list.

- [ ] Primary-segment business decision-maker and front-desk staff review the MVP
  scope, UJ-002/UJ-005, configurable policies, role boundaries, exceptions,
  roster, and reconciliation; disagreements and dispositions are recorded.
- [ ] Public user/appointment booker reviews UJ-001/UJ-003 and the guest, proxy,
  confirmation, QR, cancellation/rescheduling, privacy, and recovery outcomes.
- [ ] Qualified privacy/security reviewer records findings for minimization,
  authorization, QR disclosure, audit, roster custody, retention/deletion, and
  exceptional operator access; legal questions remain explicitly escalated.
- [ ] Product Owner/operator reviews UJ-004 and AC-007 and records the minimum
  exceptional-access procedure or explicitly defers client-data support access.
- [x] Product Owner resolves or explicitly defers Q-010's commercial model,
  pricing, and support commitment for Gate 1 purposes. Deferred to Gate 6 by
  D-055; no Gate 1 commercial decision remains.
- [x] Product Owner reviews and approves the exact v0.7 FR/NFR/BR/UJ/AC development-stage baseline under D-081; records remain assumptions, not `VALIDATED` evidence.
- [x] Product Owner reviews the exact v0.7 FR/NFR/BR/UJ/AC wording, provisional
  S-1–S-7 targets, open parameters, risk treatments, and each validation result.
- [ ] Every completed session creates or amends an EVD record with role, known
  date, method, findings, contradictions, limitations, affected IDs, and storage.
- [ ] Requirements advance only through the lifecycle; no discovery record is
  treated as representative validation without a documented basis.
- [ ] Gate 1 exit is considered only after blockers are resolved or explicitly
  deferred and the Product Owner separately approves the gate transition.

## 9. Current gaps and dependencies

- D-041 selects the target segment and EVD-001–EVD-004 provide discovery support;
  representativeness and formal target-segment validation remain incomplete.
- DP-2 is partially addressed by real stakeholder access, but sampling and access
  to the minimum review participants above are not documented.
- EVD-008–EVD-013 are now registered as submitted records, but their provenance
  and review gaps prevent them from completing VAL-001–VAL-006. No complete formal
  v0.7 walkthrough, qualified privacy/security review, or representative-validation
  record exists.
- The operator journey is drafted but unvalidated and preserves D-034's
  no-default-client-data-access boundary; exceptional access conditions and any
  time limit remain discovery hypotheses.
- Legal/privacy expertise and applicable jurisdiction are not identified.
- Provisional targets are recorded; participant counts for historical research,
  recruitment/sampling, review dates, named evidence owners, and exact policy
  parameters remain unresolved.
- A consolidated final validation package
  (`GATE-1-FINAL-VALIDATION-PACKAGE.md`) prepares the remaining sessions; no
  provenance-complete formal session or qualified review is recorded; submitted
  findings remain incomplete and do not establish validation.
- EVD-005–EVD-007 are registered from the supplied follow-up source. They are
  summarized v0.4 reviews with acceptable-with-changes assessments, not explicit
  approval of v0.7; VAL-001–VAL-003 remain partially supported and no activity is
  complete.
- Specification §9 records the final v0.7 quality assessment. It distinguishes
  approved direction, client-configurable values, Gate 2 architecture matters,
  deferred features, and unresolved Gate 1 items; it records no approval.
- The exact v0.7 development-stage baseline is approved under D-081, but Gate 1
  remains in progress and is not approved for exit; implementation remains
  unauthorized.
