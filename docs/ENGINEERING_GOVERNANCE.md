# Engineering Governance — Appointment Management System

| Field | Value |
|---|---|
| Document status | Approved as a Gate 0 baseline artifact (P-001) — 2026-10-22 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 1.1 (2026-11-02 — D-093 Gate 2 UI/UX design evidence added; SDLC gate order/status unchanged) |
| Owner | Product Owner |

> **Revision 0.7 (2026-10-23) — AGENTS.md adopted; accessibility standard
> proposed.** §6, §20, and §22 reconciled to record that `AGENTS.md` is adopted as
> the project's agent entry point (D-039) and that its instructions were *not*
> adopted **at the time of Gate 0 closure**. The code-quality and accessibility
> guidance previously carried in the superseded `AGENTS.md` is preserved in
> substance as §24, marked **PROPOSED (P-009) — NOT APPROVED — NOT IN FORCE**.
> D-039 is not approval of P-009. No gate status changed, no other approval was
> created, and Gate 1 remains unauthorized.

> **Revision 0.8 (2026-10-29) — engineering-efficiency principle approved.**
> §2 records D-054. The principle changes no control, approval authority, gate
> status, or implementation authorization. D-052 separately approves WCAG 2.2 AA
> as a provisional product target for core workflows; P-009's broader proposed
> implementation guidance remains unapproved.

> **Revision 0.6 (2026-10-22) — Gate 0 closure recorded.** §23 updated to record
> that Gate 0 was closed on 2026-10-22. Neither the approval nor the closure
> authorizes Gate 1 or any implementation.

> **Revision 0.5 (2026-10-22) — P-001 approval recorded.** Document status updated
> to record product-owner approval of this document as a Gate 0 baseline artifact
> on 2026-10-22. Gate 0 remains `IN PROGRESS`; no gate transition was approved.

> **Revision 0.4 (2026-10-22) — final Gate 0 correction pass.** Clarified §6,
> §20, and §22: accepting `AGENTS.md` as a P-001 artifact is separate from
> adopting its instructions, and adoption is not a P-001 prerequisite. No status,
> approval, or gate state was changed in this document by this pass.

> **Revision 0.3 (2026-10-22) — Gate 0 correction pass.** Corrected the Gate 0
> evidence artifact reference (§6), the `AGENTS.md` status (§20, §22), the
> security-exception record format (§13), and the approval-record requirement
> (§18). No status, approval, or gate state was changed by this pass.

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

Within those controls, engineering work shall maximize efficiency without
compromising correctness, security, data integrity, maintainability, testability,
essential validation, or approved governance (D-054). Efficiency favors the
smallest sufficient process and change; it is not a waiver of a required review,
test, record, or approval. The agent entry point (`AGENTS.md`) refers to this
principle and does not restate it.

Under D-080 (approved 2026-10-29), before substantial work contributors shall inspect
available skills and use only those directly applicable, read selected instructions,
prefer targeted reads, focused searches, incremental diffs, verified context, and
existing project records, and avoid duplicate documents or unrelated skill libraries.
This efficiency guidance never reduces correctness, security, accessibility, privacy,
required evidence, or approval controls.

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

### Lightweight knowledge checkpoint

At gate entry or the start of substantial authorized work, consult relevant approved or adopted
knowledge where accessible. During work, identify significant reusable lessons, recurring failures,
and effective practices; routine changes do not warrant notes. At meaningful task completion or
gate closure, evaluate whether genuinely new reusable knowledge emerged. When warranted and
permitted, the agent creates a draft through the guarded Obsidian `create_note` tool only in
`Engineering Workflow/Agent Drafts` or `Learning Journal/Agent Drafts`, with the required type,
provenance, `review_status: draft`, and `author: agent`. Separate observations, inferences,
recommendations, and unknowns; avoid duplicating existing notes or project-authoritative records.
Report the created draft in the task summary, or state that none was warranted. At gate closure,
record that determination in the gate evidence. Preserve approval boundaries and the one-chat-per-gate
workflow: modifying existing notes or adopting drafts requires separate Product Owner approval.
This checkpoint operates during authorized OpenCode tasks, not as unattended synchronization;
it creates no extra approval gate. Vault knowledge is guidance, not authority over repository
requirements, decisions, evidence, approvals, or gate status.

---

## 6. Required Artifacts and Evidence

| Gate | Required artifacts / evidence |
|---|---|
| Gate 0 | Project Charter; Engineering Governance; Decision Register; Gate Register; `AGENTS.md` (present in this repository and part of the P-001 artifact set; at Gate 0 closure its instructions were **not adopted** — see §20; this file was subsequently replaced and adopted as the agent entry point under D-039, effective 2026-10-23); and the separate Gate 0 evidence record at `docs/evidence/GATE-0-EVIDENCE.md`, which states what was inspected, the period covered, and what cannot be established. That evidence record is a Gate 0 exit requirement outside the five-artifact P-001 scope |
| Gate 1 | Requirements specification; validated target customer or an explicitly labeled development-stage assumption; user journeys; business rules; confirmed user/authentication model; assumption ownership; risk register; measurable acceptance criteria. Under D-077, simulated material may inform the development-stage baseline but is not actual validation evidence. |
| Gate 2 | Architecture description; data model; interface/API design; configuration and per-installation strategy; Checkpoint 11 UI/UX design package (complete annotated MVP screen/state coverage, responsive/accessibility design, representative connected high-fidelity prototype and recorded Product Owner/usability/design-review findings) required for final Gate 2 architecture review under D-093; traceability to requirements |
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
  Register as `SE-###` entries carrying the authorization and rationale, with
  detailed scope, controls, owner, expiry or review condition, and closure
  recorded in the gate-specific evidence (Gate 3 exception register).
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
- Approval must be explicit and recorded (approver, artifact, date). Where the
  date of an owner confirmation was not captured, the record must say so; approval
  dates are never inferred, backdated, or taken from file timestamps.
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

**Gate 1 development-stage route (D-077, approved 2026-10-29).** For this
project's requirements baseline, the Product Owner may approve explicitly labeled
assumptions for design without treating them as `VALIDATED` stakeholder evidence.
The exact baseline, traceability, assumption owners, risks, milestone obligations,
and limitations must be recorded. Simulated or fictional material is never genuine
interview, qualified-review, test, or release evidence. Gate 3 security/privacy and
data-integrity design review remains mandatory before Gate 4. A qualified independent
privacy/security assessment, genuine product-fit review, tests, and release evidence
remain mandatory before Gate 6 release approval. This route authorizes no
implementation, database, deployment, or production access.

---

## 20. Status of CEAP-Specific Instructions

- The separate, already-deployed CEAP system's own instructions are outside this
  repository and outside this product's scope; they must **not** be modified by
  this product's work. No such instructions are present here.
- `AGENTS.md` exists in this repository and is part of the P-001 artifact set. **At
  the time of Gate 0 closure its instructions were not adopted**: accepting it as
  an artifact was separate from adopting its instructions, and adoption was **not**
  a prerequisite for P-001 approval. That historical position is preserved.
- **Adoption subsequently occurred.** The Product Owner adopted `AGENTS.md` as the
  project's agent entry point on 2026-10-23 (D-039). The adopted version is a concise
  entry point that defers to the approved governance documents and does not restate
  gate status or engineering rules. Adoption did not re-approve the content of the
  superseded `AGENTS.md`, did not change any gate status, and did not approve the
  accessibility standard proposed in §24 — §24 is created by the same revision and is
  marked PROPOSED; creation is not approval.
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
- `AGENTS.md` — the project's adopted agent entry point (D-039, effective
  2026-10-23), replacing the superseded `AGENTS.md` that was accepted as a P-001
  artifact without its instructions being adopted at Gate 0 closure. It defers to
  the documents listed above and deliberately restates none of their content. No
  production CEAP instructions are modified here.

---

## 23. Approval

This document was approved by the product owner as a Gate 0 baseline artifact
under P-001 on 2026-10-22. That approval did not itself close Gate 0; Gate 0 was
closed on 2026-10-22 (see `docs/GATE_REGISTER.md` §3). Neither the approval nor the
closure authorizes Gate 1 or any implementation.

| Approver | Role | Decision | Date |
|---|---|---|---|
| Product Owner | Product Owner | Approved as a Gate 0 baseline artifact (P-001) | 2026-10-22 |

---

## 24. Code Quality, Accessibility, and Usability Standard

**Status: PROPOSED (P-009) — NOT APPROVED — NOT IN FORCE.** This section was created
by the same revision that recorded the `AGENTS.md` adoption (D-039). Its creation is
not approval, and D-039 approved no standard. This section must not be cited as an
approved requirement, standard, or acceptance criterion.

**Provenance.** It preserves, in substance, the code-quality and accessibility
guidance that the superseded `AGENTS.md` carried until that file was replaced by the
concise entry point under D-039. It is relocated, not newly invented; nothing here was
approved by being moved.

**D-039 is not approval of this section.** Adoption of `AGENTS.md` approved an entry
point. It did not approve, adopt, or bring into force any standard, and P-009 remains
unresolved.

**Accessibility does not stop being a product goal.** Approval of this section is not
what makes accessibility a requirement. The product goal remains Charter G-6 and
success criterion S-7; D-052 now provisionally sets WCAG 2.2 AA for approved core
workflows, while supported environments and localization remain open; and the
product qualities in D-021 and D-029 continue to apply. What remains unapproved is
the broader set of implementation expectations below.

Content submitted for approval:

1. Prefer small, focused, reviewable changes over large rewrites.
2. Follow the framework's conventions and the project's agreed standards.
3. Keep code maintainable: clear naming, minimal duplication, and separation of
   concerns.
4. Build accessible and responsive interfaces that work across supported screen
   sizes and devices, avoiding horizontal overflow and unusable touch targets.
5. Consider accessibility (labels, keyboard use, semantics) and usability as
   product requirements, not afterthoughts.
6. Do not modify unrelated code while implementing a change.

**Approval record.** To be completed here only on an explicit product-owner decision
on P-009, with the date supplied by the Product Owner. No approval is implied by this
section's presence, by D-039, or by any gate transition.
