# Gate Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | Approved as a Gate 0 baseline artifact (P-001) — 2026-10-22 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 0.6 (Gate 0 closure recorded) |
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
| Gate 1 | Requirements Discovery | **BLOCKED** (P-002 – P-004 unresolved; not authorized) |
| Gate 2 | Architecture & Design | **BLOCKED** (requires Gate 1 approval) |
| Gate 3 | Security & Data Integrity Design Review | **BLOCKED** (requires Gate 2 approval) |
| Gate 4 | Authorized Implementation | **BLOCKED** (requires Gate 3 approval and explicit authorization) |
| Gate 5 | Verification & Testing | **BLOCKED** (Gate 4 not approved) |
| Gate 6 | Release Readiness & Deployment Approval | **BLOCKED** (Gate 5 not approved) |
| Gate 7 | Production Operations & Maintenance | **BLOCKED** (Gate 6 not approved; ongoing once reached) |

Notes:

- Gate 0 is `COMPLETE (APPROVED)` as of 2026-10-22 (§3, §13).
- Gate 1 is `BLOCKED` under the §1 definition: P-002 – P-004 are unresolved and
  Gate 1 has not been authorized. Gate 0 approval alone does not open Gate 1.
- Gates 2–7 remain `BLOCKED` because their prerequisite gate approvals are unmet.
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
- `AGENTS.md` (present in this repository; listed in the P-001 artifact set. Its
  instructions are **not adopted** — see Blockers).
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
  `AGENTS.md` as an artifact without adopting its instructions. Gate 0 was closed on
  2026-10-22 after the evidence record was signed off and the transition was
  approved (§13).
- P-007 is **resolved**: the product owner confirmed D-033 (Gate 0 is documentation
  and governance only), so P-007 does not block Gate 0.
- P-002, P-003, and P-004 remain unresolved product-owner decisions. Per their
  recorded definitions they block **Gate 1 entry**, not Gate 0 closure, so they are
  not listed as Gate 0 blockers.
- P-008 is **resolved as redundant** (product-owner confirmed): it requested
  confirmation of the already APPROVED BASELINE decisions D-034, D-035, D-036, and
  D-038 and introduces no additional decision, so it does not block Gate 0.
- P-005 and P-006 remain unresolved (PROPOSED). Per their recorded definitions they
  block Gate 2 / Gate 4 and Gate 2 / Gate 6 respectively, **not** Gate 0, so they
  are not listed as Gate 0 blockers. If the product owner intends either to gate
  Gate 0 closure, that requires an explicit decision.
- **`AGENTS.md` — artifact acceptance is not instruction adoption.** `AGENTS.md`
  is present in this repository and sits in the recorded P-001 artifact set.
  Accepting it as a P-001 artifact is separate from adopting its instructions,
  which are **not adopted**. Adoption is a separate product-owner decision and is
  **not** a prerequisite for P-001 approval or Gate 0 closure, so it is not a Gate
  0 blocker.
- Historical decisions D-001 – D-018 were not found in the inspected scope; their
  provenance is unverified. This is **not** an automatic blocker (Q-017).

---

## 4. Gate 1 — Requirements Discovery

**Status: BLOCKED** (P-002 – P-004 unresolved; Gate 1 not authorized)

### Purpose

Discover and document requirements; validate the target customer; define user
journeys, business rules, assumptions, risks, and measurable acceptance criteria.

### Required Inputs / Prerequisites

- Gate 0 approved.
- Product owner authorizes Gate 1.
- Charter §2 (product vision), §3 (product goals), and §4 (success criteria)
  approved or explicitly deferred by the product owner (P-002 – P-004). The
  Decision Register records these as blocking Gate 1 entry.

### Required Deliverables and Evidence

- Requirements specification (functional and non-functional).
- Validated target customer segment.
- User journeys for public, administrator/staff, and operator categories.
- Business rules for scheduling, booking, cancellation, rescheduling, and
  duplicate prevention.
- Confirmed user/authentication model (registration/login/guest/admin).
- Validated assumptions A-1 – A-3 and A-6, or their corrections. A-4, A-5, and
  A-7 are validated at Gate 2 (Charter §10).
- Risk register update.
- Measurable acceptance criteria for every success criterion still marked TBD
  (currently S-1 – S-7; S-8 and S-9 are verifiable without a numeric target).
- Decision Register updated with resolved open questions.

### Exit Criteria

- Requirements documented and reviewed.
- Blocking open questions resolved or explicitly deferred by the product owner.
- No invented business policy, workflow, or commercial commitment.
- Measurable acceptance criteria agreed for every success criterion still marked
  TBD.
- Product owner approves Gate 1.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 0 approval.
- P-002, P-003, and P-004 (Charter vision, goals, success criteria) unresolved.
- Access to representative client/user stakeholders (DP-2).

---

## 5. Gate 2 — Architecture & Design

**Status: BLOCKED** (requires Gate 1 approval)

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
- Traceability from design to requirements.

### Exit Criteria

- Design reviewed against requirements, product goals, and engineering priorities
  (D-029).
- Traceability established.
- Product owner approves Gate 2.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 1 approval.
- Provisional compatibility constraints, and deployment/hosting decisions
  (Q-007, Q-008; D-031).

---

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
`COMPLETE (APPROVED)` (no approval time recorded). Gate 1 is not approved or
authorized.

| Approver | Role | Decision | Date |
|---|---|---|---|
| Product Owner | Product Owner | Approved as a Gate 0 baseline artifact (P-001) | 2026-10-22 |
| Product Owner | Product Owner | Gate 0 evidence record signed off; Gate 0 transition approved — `COMPLETE (APPROVED)` | 2026-10-22 |
