# Stakeholder Validation Plan — Appointment Management System

| Field | Value |
|---|---|
| Document status | DRAFT — Gate 1 Checkpoint 1; pending Product Owner review |
| Gate | Gate 1 (Requirements Discovery) — IN PROGRESS |
| Document date | 2026-10-28 |
| Revision | 0.3 (2026-10-28 — second bounded remediation; DRAFT) |
| Owner | Product Owner |

This plan describes proposed validation. It records no completed validation and
does not authorize stakeholder contact, incentives, personal-data collection,
architecture, implementation, or Gate 1 exit.

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
| Prospective client decision-maker | Validate organization problem, value, operating constraints, target segment, and commercial context | Q-001; Q-010; A-2 |
| Appointment administrator/staff | Validate scheduling, capacity, exceptions, permissions, QR verification, reporting, and operations | Q-005; Q-009; Q-014; Q-018–Q-021 |
| Public user/applicant | Validate discovery, booking, account model, QR presentation, cancellation, accessibility, recovery, and privacy expectations | Q-002–Q-005; Q-011; Q-015; Q-020 |
| System operator/support role | Validate installation boundaries, support workflow, access authorization, backup/restoration, monitoring, and maintenance without default client-data access | D-034; FR-012; UJ-004; AC-007; Q-008; Q-014; Q-015 |
| Privacy/security/data-integrity reviewer | Review personal-data minimization, audit, authorization, QR abuse cases, concurrent scans, and failure atomicity | NFR-003; NFR-005; NFR-006; NFR-009; BR-003; BR-004 |

Participant count, recruitment criteria, jurisdiction, and reviewer availability
remain open until Q-001 and DP-2 are addressed. Participants must not provide
production credentials or unnecessary personal data.

## 3. Validation activities

| ID | Activity | Inputs | Intended output | Status |
|---|---|---|---|---|
| VAL-001 | Product and client discovery interviews | Vision, goals, Q-001, Q-010, candidate scope | Candidate segment, jobs, constraints, priorities, optional-feature and commercial-context evidence | DRAFT |
| VAL-002 | Public journey walkthrough | UJ-001; UJ-003; AC-001; AC-002 | Evidence about account model, booking/cancellation, QR presentation, recovery, terminology, and failure cases | DRAFT |
| VAL-003 | Administrator/staff workflow walkthrough | UJ-002; UJ-003; AC-003; AC-004 | Evidence about roles, scheduling, verification outcomes, repeated scans, exceptions, audit, and reporting | DRAFT |
| VAL-004 | Privacy, security, and data-handling review | NFR-003; NFR-005; NFR-009; BR-003; BR-004; QR-L01–QR-L12 | Data purposes, minimization, access, retention, deletion, audit, misuse, revocation, outage, and legal questions | DRAFT |
| VAL-005 | Measurability workshop | S-1–S-7; AC-001–AC-008; NFR-010 | Draft measurable targets, test conditions, accessibility standard, core-workflow test coverage, concurrency/atomicity conditions, and evidence owners | DRAFT |
| VAL-006 | Operator journey and access-boundary walkthrough | FR-012; NFR-005; UJ-004; BR-004; AC-007 | Evidence about whether support tasks require a product capability, no-data paths, exceptional-access authority, scope, audit, and possible duration/closure procedures | DRAFT |

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

Each `EVD-###` record must include date, activity ID, participant role (not
unnecessary identity), facilitator, method, records reviewed, findings,
contradictions, limitations, affected IDs, and approved storage location. Raw
notes must exclude secrets and unnecessary personal data.

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
- Material changes preserve the effective approved version and start a separate
  working `DRAFT` version, with author/role, date, reason, links, impact, review
  status and approval reference/date recorded independently.
- Resolved `Q-###` items and new `D-###` decisions must be updated in the Decision
  Register. `P-###` approval/confirmation items remain distinct from decisions.

## 8. Checkpoint 1 review condition

Checkpoint 1 may be submitted for Product Owner review when the four Gate 1 draft
files are internally consistent; provenance, status, priority, evidence, approval,
and version metadata are explicit; operator and QR gaps are visible; and no draft
claims stakeholder validation or Gate 1 approval. This condition is not Gate 1
exit and is not approval of the drafts.

## 9. Current gaps and dependencies

- No target customer segment or representative participant set is validated.
- DP-2 stakeholder access is unresolved.
- No validation session or `EVD-###` record has been completed.
- The operator journey is drafted but unvalidated and preserves D-034's
  no-default-client-data-access boundary; exceptional access conditions and any
  time limit remain discovery hypotheses.
- Legal/privacy expertise and applicable jurisdiction are not identified.
- Measurable targets, participant counts, recruitment, scheduling, evidence
  storage, and review dates require Product Owner direction.
- Gate 1 remains in progress and is not approved for exit; implementation remains
  unauthorized.
