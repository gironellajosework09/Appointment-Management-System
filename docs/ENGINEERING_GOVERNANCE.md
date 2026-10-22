# Engineering Governance — Appointment Management System

| Field | Value |
|---|---|
| Document status | Draft — pending product-owner approval |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-15 |
| Revision | 0.2 (revised) |
| Owner | Product Owner |

This document defines how the product is engineered and how work is authorized,
reviewed, and approved. It is written so a developer new to the project — working
with or without AI coding tools — can follow it consistently.

It is a governance artifact. It does **not** authorize implementation.

---

## 1. Purpose

Define:

- the staged lifecycle (gates) and approval between stages,
- required artifacts and evidence,
- requirements/design review before implementation,
- limited, explicit authorization per task,
- honest reporting of completed, incomplete, failed, and unverified work,
- change control and documentation of decisions,
- security, privacy, secrets, and environment rules,
- database, migration, validation, and concurrency rules,
- testing and the isolated test environment,
- release readiness, backups, recovery, and operations,
- defect and security-finding handling, and
- the status of CEAP-specific instructions.

---

## 2. Core Governance Principle

> **The existence of a planning document, design, prior approval, or an AI tool's
> suggestion does not authorize implementation or any production change.**

Implementation begins only when the product owner explicitly authorizes a
specific, bounded task after the relevant gate prerequisites are met. Planning
artifacts and AI suggestions are inputs to a decision, not the decision itself.

---

## 3. Authority and Roles

| Role | Authority |
|---|---|
| Product Owner | Final authority over scope, architecture, security exceptions, releases, and gate transitions |
| Human reviewer(s) | Perform required requirements, design, security, and data-integrity reviews and record findings |
| Developer | Performs only explicitly authorized work under this governance |
| AI coding tools | Assistive only; perform only explicitly authorized work; no independent architecture, security, database, deployment, or scope decisions |

**Access boundary (confirmed):** the product owner / system operator is **not**
automatically an administrator of every client installation and must **not** have
unrestricted access to client data by default. Any operational access to a client
installation's data must be explicitly defined, authorized, and audited.

---

## 4. What AI Coding Tools Must Never Do

AI tools must not independently:

- expand, narrow, or reinterpret scope,
- bypass or shortcut any approval,
- weaken, disable, or work around a security, privacy, or access control,
- change an architectural or database decision,
- execute destructive operations (dropping/altering data, force operations,
  history rewrites, irreversible migrations),
- change deployment, repository, remote, branch, or Git configuration,
- touch the production CEAP application or database, or
- claim that a task passed, is complete, tested, or verified when evidence is
  missing.

If a task appears to require any of the above, the tool must **stop and report**
rather than proceed.

---

## 5. Staged Lifecycle

The product proceeds through sequential gates. A gate may not start until its
prerequisites are approved. See `docs/GATE_REGISTER.md` for per-gate status,
entry/exit criteria, and evidence.

| Gate | Name | Nature |
|---|---|---|
| Gate 0 | Project Initiation & Governance | Documentation only |
| Gate 1 | Requirements Discovery | Analysis / documentation |
| Gate 2 | Architecture & Design | Design |
| Gate 3 | Security & Data Integrity Design Review | Review |
| Gate 4 | Authorized Implementation | Build (authorized scope only) |
| Gate 5 | Verification & Testing | Test |
| Gate 6 | Release Readiness & Deployment Approval | Approval |
| Gate 7 | Production Operations & Maintenance | Ongoing operations |

Rules:

- Gates are sequential unless the product owner explicitly authorizes an
  exception.
- A later gate is `NOT STARTED` or `BLOCKED` until its prerequisites are
  approved.
- Passing a gate requires explicit, recorded product-owner approval.
- AI tooling cannot advance a gate on its own.
- Gate 7 is an **ongoing responsibility**, not a one-time state that ends
  maintenance.

---

## 6. Required Artifacts and Evidence

| Gate | Required artifacts / evidence |
|---|---|
| Gate 0 | Project Charter; Engineering Governance; Decision Register; Gate Register; product-specific AGENTS.md; recorded evidence that no implementation, dependency, database, deployment, or destructive Git-history operation (history rewrite, reset, rebase, or force push) occurred during Gate 0 governance work |
| Gate 1 | Requirements specification; validated target customer; user journeys; business rules; confirmed user/authentication model; validated assumptions; risk register; measurable acceptance criteria |
| Gate 2 | Architecture description; data model; interface/API design; configuration and per-installation strategy; traceability to requirements |
| Gate 3 | Security review record; data-integrity design record; threat model; security exception register |
| Gate 4 | Authorized change set; reviewed migrations (if authorized); tests for each change; implementation notes |
| Gate 5 | Automated test results; manual verification evidence; defect log with dispositions; regression results |
| Gate 6 | Release checklist; deployment plan; rollback plan; configuration/secrets handling plan; sign-off record |
| Gate 7 | Operational runbook; monitoring/logging plan; backup/restore procedure; maintenance/update policy |

Artifact formats are not yet fixed; the minimum required content is. Evidence
must be real and reproducible, not merely asserted.

---

## 7. Limited, Explicit Authorization

- Each implementation task must have a written, bounded authorization from the
  product owner stating what may be changed.
- Work outside the stated boundary requires a new authorization.
- A prior approval does not carry forward to unrelated work.
- When in doubt, ask; do not assume permission.

---

## 8. Requirements and Design Review Before Implementation

- Requirements and design are reviewed and approved **before** code is written.
- No implementation task may begin against undocumented, unapproved
  requirements.
- Design changes discovered during implementation must be raised for approval,
  not silently adopted.

---

## 9. Honest Reporting

Every work report must state, accurately:

- what was completed,
- what was **not** completed,
- what was tested and the actual results,
- any failing or skipped tests,
- what was **not** verified, and
- anything uncertain or assumed.

Claims of "done", "fixed", "tested", "secure", or "approved" require supporting
evidence. Overstating completion is a governance violation.

---

## 10. Protection of Existing Files and Functionality

- Do not modify unrelated files or functionality.
- Establish a file's purpose before changing or removing it; preserve useful work
  unless there is a documented reason to change it.
- Make the smallest change necessary for the authorized task.
- Any incidental discovery (unrelated bug, risk, or design flaw) is **reported**,
  not fixed without authorization.
- This project is independent of CEAP; CEAP-specific rules do not automatically
  define this product's architecture, and production instructions must not be
  modified.

---

## 11. Database, Migration, and Data Integrity Rules

- Correctness and data integrity take priority over speed.
- Uniqueness, capacity, referential, and state-transition invariants must be
  defined and enforced **server-side**.
- Multi-record operations must be atomic (transactional), with rollback on
  failure.
- Concurrent-operation behavior must be designed and tested, not assumed.
- **Migrations and database changes must be reviewed and approved before
  execution.** No migration runs against an unapproved or production database.
- The product uses its **own** database. It must never connect to, import into,
  migrate, modify, or operate against the production CEAP database.
- Do not create, modify, seed, import into, or migrate any database during a
  documentation or governance task.

---

## 12. Security, Privacy, Authentication, and Secrets

- Security and privacy are **mandatory design concerns**, not optional features.
- Every state-changing operation is authenticated, authorized, and validated
  server-side; client-side validation is for user experience only.
- Use secure, up-to-date authentication and password/session handling; do not
  build custom cryptography.
- Authorization must be enforced server-side and must not rely on hidden fields
  or client-supplied identity.
- Secrets, credentials, keys, and personal data must **never** be stored in
  client-side code, committed to the repository, or copied into documentation.
- Secrets are supplied through environment configuration that is not committed;
  commit only safe templates/examples.
- Environment configuration (development, test, production) must be separated.
- Personal data is handled per the retention/privacy rules agreed in Gate 1 and
  Gate 3.

---

## 13. Security Exceptions

- Any exception to a security control requires documented **justification,
  impact, scope, approving authority, and review or expiry conditions**.
- Exceptions are approved only by the product owner and recorded in the Decision
  Register and the Gate 3 exception register.
- An exception must **never** bypass mandatory safety, legal, or data-protection
  requirements.
- Exceptions expire or are reviewed by their stated condition; they do not become
  permanent by default.

---

## 14. Testing and Test Environment

- Automated tests are required for behavior, validation, authorization, and
  error handling.
- Data-integrity invariants (uniqueness, capacity, referential integrity, state
  transitions, concurrency) and security controls must be tested.
- Tests run in an **isolated test environment** with its own database, never
  against production or client data.
- Test data must not include personal data copied from production systems.
- Test evidence is required to close Gate 5.
- No claim of "tested", "verified", or "approved" may be made without recorded
  evidence.

---

## 15. Change Control and Decision Documentation

- Scope, architecture, database, security, and deployment changes require
  product-owner approval before implementation.
- Each change must be traceable to an approved requirement or decision.
- Architectural decisions and significant changes are recorded in the Decision
  Register with status and rationale.
- Unapproved changes found in review are reverted or explicitly approved
  retroactively; they are never quietly retained.
- The Decision Register is updated when a decision is made, changed, or
  superseded.

---

## 16. Defect and Security-Finding Handling

- Defects and security findings are logged with severity and disposition.
- Security findings must be reported promptly and not silently resolved or
  suppressed.
- **Critical unresolved security or data-integrity defects block release.**
- A generic risk-acceptance statement must not be used to bypass mandatory
  security, legal, or data-protection requirements; any risk acceptance requires
  explicit product-owner approval with recorded justification and scope.
- Fixes for security/data-integrity issues are prioritized over cosmetic work.

---

## 17. Release Readiness, Backups, Recovery, and Operations

- Release requires a checklist, deployment plan, rollback plan, and a
  configuration/secrets handling plan (Gate 6).
- Verify that no secrets are present in documentation or client-side code before
  release.
- Backups and a tested restore procedure must exist before relying on an
  installation's data.
- Production operations (monitoring, logging, backups, restoration, maintenance,
  updates, support) are an **ongoing responsibility** governed by approved change
  control, not a task that permanently ends when a gate is marked complete.

---

## 18. Human Approval Rules

- Only the product owner approves scope, architecture, security exceptions,
  releases, and gate transitions.
- Approval must be explicit and recorded (approver, artifact, date).
- Silent or implied approval is not valid.
- An AI tool's statement of completion is not approval.
- Unresolved decisions stay visibly unresolved and are never marked approved.

---

## 19. Gate Entry and Exit Criteria (General)

Entry:

- Prerequisite gate approved.
- Required artifacts from the prior gate available.
- Product owner has authorized starting the gate.

Exit:

- Required artifacts produced and reviewed.
- Required reviews and tests completed with recorded evidence.
- Open blocking issues resolved or explicitly accepted by the product owner.
- Product owner has explicitly approved the gate transition.

Gate-specific criteria are in `docs/GATE_REGISTER.md`.

---

## 20. Status of CEAP-Specific Instructions

- This repository does **not** contain, and this document does **not** treat, any
  `AGENTS.md` as governing the separate, already-deployed CEAP system. Any
  instructions for that system belong to that system and are outside this
  product's scope; they must **not** be modified by this product's work.
- CEAP-specific implementation rules do **not** automatically define this
  product's architecture, database, or standards. CEAP is a historical behavior
  reference only; its behavior, schema, data, and constraints are **not**
  automatically commercial requirements.
- **Only explicitly approved commercial requirements and decisions establish this
  product's requirements.** Copied CEAP source, if any, is a reference or
  experimental copy and is **not** authoritative for commercial requirements.
- The commercial product needs its **own clearly scoped instructions and
  standards**. These must be created only when a separate task authorizes them;
  this governance is the placeholder until then.

---

## 21. Stop Conditions

Work must stop and be escalated to the product owner when:

- a required decision is unresolved,
- a change would exceed authorized scope,
- a security/privacy control would need to be weakened or bypassed,
- a database, migration, or deployment change is required without approval,
- a destructive operation would be performed,
- documents conflict with one another or the approved baseline,
- historical decisions D-001 – D-018 are required to resolve a current
  requirement or risk, or
- the production CEAP system could be affected in any way.

---

## 22. Relationship to Other Documents

- `docs/PROJECT_CHARTER.md` — product purpose, scope, authority.
- `docs/decisions/DECISION_REGISTER.md` — decisions and status.
- `docs/GATE_REGISTER.md` — gate status, criteria, and evidence.
- Product-specific `AGENTS.md` — present in this repository; it is subordinate to
  this document and the approved commercial baseline. No production CEAP
  instructions are modified here.

---

## 23. Approval

This document is **DRAFT and NOT APPROVED**. It takes effect only on explicit
product-owner approval.

| Approver | Role | Decision | Date |
|---|---|---|---|
| — | Product Owner | Pending | — |
