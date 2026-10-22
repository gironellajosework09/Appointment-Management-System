# Gate Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | Draft — pending product-owner approval |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-15 |
| Revision | 0.2 (revised) |
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
| NOT STARTED | Not begun; prerequisites not met or work not authorized |
| BLOCKED | Cannot begin until a prerequisite is approved or an issue is resolved |
| COMPLETE (APPROVED) | All exit criteria met and explicitly approved by the product owner |

---

## 2. Gate Status Summary

| Gate | Name | Status |
|---|---|---|
| Gate 0 | Project Initiation & Governance | **IN PROGRESS** |
| Gate 1 | Requirements Discovery | **NOT STARTED** |
| Gate 2 | Architecture & Design | **BLOCKED** (requires Gate 1 approval) |
| Gate 3 | Security & Data Integrity Design Review | **BLOCKED** (requires Gate 2 approval) |
| Gate 4 | Authorized Implementation | **BLOCKED** (requires Gate 3 approval and explicit authorization) |
| Gate 5 | Verification & Testing | **NOT STARTED** (requires Gate 4 approval) |
| Gate 6 | Release Readiness & Deployment Approval | **NOT STARTED** (requires Gate 5 approval) |
| Gate 7 | Production Operations & Maintenance | **NOT STARTED** (requires Gate 6 approval; ongoing once reached) |

Notes:

- Gate 1 remains `NOT STARTED` until Gate 0 is approved.
- Gates 2–4 are `BLOCKED` because their immediate prerequisites are not approved.
- Gates 5–7 are `NOT STARTED`; they must not begin until prerequisites are
  approved.
- Gate 7 is an **ongoing responsibility**, not a state that permanently ends
  maintenance.

---

## 3. Gate 0 — Project Initiation & Governance

**Status: IN PROGRESS — awaiting product-owner review and approval.**

### Purpose

Establish the governance baseline for the separate commercial product: purpose,
scope, authority, engineering process, decisions, and gate sequencing.

### Required Inputs / Prerequisites

- Planning baseline provided by the product owner. (Met)

### Required Deliverables and Evidence

- `docs/PROJECT_CHARTER.md`
- `docs/ENGINEERING_GOVERNANCE.md`
- `docs/decisions/DECISION_REGISTER.md`
- `docs/GATE_REGISTER.md` (this document)
- Product-specific `AGENTS.md` (present in this repository).
- Recorded evidence that no implementation, dependency, database, deployment, or
  **destructive Git-history operation** (history rewrite, reset, rebase, or force
  push) occurred during Gate 0 governance work. This requirement does **not**
  prohibit ordinary, separately authorized commits; it records only that no
  destructive history operations were performed.

### Exit Criteria

- All Gate 0 deliverables listed above exist and comply with the approved planning
  baseline.
- Open decisions are visibly unresolved and not marked approved.
- CEAP production separation and independent-database requirements are explicit.
- Product owner explicitly approves the Gate 0 deliverables.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Product-owner approval outstanding (P-001 — approval of the Gate 0 baseline
  artifacts). P-001 remains a Gate 0 exit blocker until the baseline is explicitly
  approved.
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
- Historical decisions D-001 – D-018 were not found in the inspected scope; their
  provenance is unverified. This is **not** an automatic blocker (Q-017).

---

## 4. Gate 1 — Requirements Discovery

**Status: NOT STARTED** (requires Gate 0 approval)

### Purpose

Discover and document requirements; validate the target customer; define user
journeys, business rules, assumptions, risks, and measurable acceptance criteria.

### Required Inputs / Prerequisites

- Gate 0 approved.
- Product owner authorizes Gate 1.

### Required Deliverables and Evidence

- Requirements specification (functional and non-functional).
- Validated target customer segment.
- User journeys for public, administrator/staff, and operator categories.
- Business rules for scheduling, booking, cancellation, rescheduling, and
  duplicate prevention.
- Confirmed user/authentication model (registration/login/guest/admin).
- Validated assumptions (A-1 – A-7) or their corrections.
- Risk register update.
- Measurable acceptance criteria (targets for S-3 – S-7).
- Decision Register updated with resolved open questions.

### Exit Criteria

- Requirements documented and reviewed.
- Blocking open questions resolved or explicitly deferred by the product owner.
- No invented business policy, workflow, or commercial commitment.
- Measurable acceptance criteria agreed for the criteria marked *[target TBD]*.
- Product owner approves Gate 1.

### Approval Authority

Product Owner.

### Blockers / Dependencies

- Gate 0 approval.
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
- Confirmed dependency/runtime versions and dependency-management approach
  (Q-007).
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
- Version and deployment decisions (Q-007, Q-008; D-031).

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

**Status: NOT STARTED** (requires Gate 4 approval)

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

**Status: NOT STARTED** (requires Gate 5 approval)

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

**Status: NOT STARTED** (requires Gate 6 approval; ongoing thereafter)

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

> **Change-log note (superseding clarification).** The 2026-10-15 "Gate 0
> governance corrections" entry recorded P-008 as resolved when it had only been
> *proposed* as resolved at that time; the later owner-authorized entry records the
> product-owner confirmation. The original entry is preserved as a historical
> record and is not a statement of current status.

---

## 13. Approval

This register is **DRAFT and NOT APPROVED**. Gate 0 remains `IN PROGRESS` until
all Gate 0 deliverables are reviewed and explicitly approved by the product owner.

| Approver | Role | Decision | Date |
|---|---|---|---|
| — | Product Owner | Pending | — |
