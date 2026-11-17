# Engineering Governance — Appointment Management System

| Field | Value |
|---|---|
| Document status | Approved as a Gate 0 baseline artifact (P-001) — 2026-10-22 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 1.6 (D-120 solo-developer risk-based review amendment approved; recorded 2026-11-17, approval date not separately supplied) |
| Owner | Product Owner |

> **CP11 acceptance status note (2026-11-13).** D-112 records the Product Owner's
> acceptance of Checkpoint 11 within its documented design and prototype scope.
> This is a status recording under the existing approval; it does not amend the §5
> lifecycle or create implementation, Gate 2 closure, CP12 or release authority.
> Revision 1.4 was the policy revision at the time of this note; revision 1.6 is current.

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

**Revision 1.4 status:** The Product Owner accepted the exact D-110 execution
operating contract amendment presented for review. The acceptance is limited to
that wording; it does not alter earlier approvals or authorize implementation.
The approval date was not separately supplied; acceptance was recorded 2026-11-13.

It is a governance artifact. It does **not** authorize implementation.

**Revision 1.5 status:** The Product Owner approved the exact SDD-001 local
review and database-free testing amendments recorded in D-119. Recording date:
2026-11-17; approval date not separately supplied. The amendments do not
authorize compatibility execution, installation, implementation or deployment.

**Revision 1.6 status:** The Product Owner approved the exact solo-developer risk-based review amendment recorded in D-120. Recording date: 2026-11-17; approval date not separately supplied. This does not accept CP12, approve final architecture, close Gate 2, or authorize implementation or deployment.

---

## 1. Purpose

Define:

- the lightweight Spec-Driven Development (SDD) lifecycle and risk-based approvals,
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

Implementation begins only within the approval and authorization defined for the
change class in §5. Planning artifacts and AI suggestions are inputs to a decision,
not the decision itself; a feature specification does not self-authorize work.

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

AI agents may perform authorized implementation, testing, exploration and technical review as supporting engineering work. Their findings and test results are evidence, not human specialist qualifications, independent assessment or Product Owner approval. The Product Owner assigns applicable human responsibilities and records any permitted combination of roles under §5.

The Product Owner may personally perform the ordinary design review and bounded historical Gate 2 review specified in §5, using AI-assisted analysis as supporting evidence. This does not represent AI assistance as human or specialist review.

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

## 5. Spec-Driven Development lifecycle

Routine future product changes use **Specify → Plan → Implement → Verify → Accept**. This
prospectively supersedes routine sequential gate progression under D-098; it does not erase
historical gate records or product approvals. See `docs/GATE_REGISTER.md` for that history and
the transition record.

| Stage | Minimum expected output |
|---|---|
| Specify | A bounded feature spec in `docs/specs/` (or an update to the relevant existing spec) with purpose, scope/exclusions, approved requirement/decision references, expected behavior, acceptance criteria, relevant risks, and open questions. |
| Plan | A small bounded implementation plan identifying affected areas, verification, risk class, and required approvals. |
| Implement | Only the work explicitly authorized for the approved scope. |
| Verify | Appropriate automated/manual checks and truthful recorded results, including failures and unverified areas. |
| Accept | Reviewer confirms the verified change meets its spec; Product Owner records decisions or approvals reserved to that role. |

A specification documents intended behavior; **it is not implementation authorization**. Unresolved
scope, policy, security, privacy, architecture, or data-integrity questions that materially affect
the proposed change or its associated risks are escalated before implementation. Unrelated open
questions do not automatically block an otherwise authorized change. Questions are not filled in
by the developer or an AI tool.

### Change risk and approval

| Class | Scope | Approval before implementation |
|---|---|---|
| Low-risk cosmetic | Presentation-only changes (such as spacing, typography, alignment, or nonfunctional styling) within an already approved design scope. | Standing authorization is granted for this narrow class. Changes still require appropriate review and verification before acceptance. |
| Ordinary | Bounded feature change within approved requirements and decisions, with no high-risk impact below. | Product Owner approves the feature specification and bounded implementation scope before coding; reviewer accepts after verification. |
| High-risk | Security, privacy, authentication, authorization, identity verification, personal-data handling, integrity, concurrency, database/API/schema/migration, architecture, external integration, material product-scope, or deployment change. | Explicit Product Owner authorization before implementation and applicable specialist review. Security/data-integrity review and release/deployment approval remain mandatory where applicable. |

The cosmetic standing authorization excludes new features/interactions, workflow or business-rule
changes, authentication, authorization, permissions or identity-verification changes, personal-data
collection/processing/disclosure, database or API changes, dependencies/external services,
deployment/production configuration, requirement changes, and unresolved policy decisions. It does
not broaden D-096/D-097, authorize production access, or grant general implementation access.

Each acceptance identifies the spec/change, reviewer, verification performed, outcome, and any
remaining limitation. High-risk review findings must be resolved or explicitly dispositioned by
the Product Owner before acceptance; release/deployment remains a separate approval.

### Solo-developer risk-based review (D-120)

For an ordinary design decision, the Product Owner may personally review the relevant design evidence and record a decision with AI-assisted analysis as supporting evidence. The record must identify the reviewer’s role, evidence considered, findings, limitations, and any combined contributor/reviewer role.

For low-risk implementation, the Product Owner may review and accept work to which the Product Owner contributed, provided the record explicitly identifies self-review and includes the applicable automated and manual verification, traceability, findings, limitations, and residual risk. This changes the contributor self-approval restriction only for this defined low-risk scope.

Security-critical, privacy-critical, data-integrity, and other high-risk changes retain explicit authorization and applicable specialist review before acceptance. AI assistance is not independent human or qualified specialist review. The qualified independent privacy/security assessment and other applicable verification and approvals remain mandatory before release or deployment. No mandatory legal, safety, or data-protection obligation is waived.

For the historical Gate 2 disposition only, the Product Owner may personally review the documented alternative CP12 and architecture evidence, with AI assistance, while explicitly recording the unavailable F1–F17 source and unassessed findings. This does not establish specialist review, implementation verification, or release readiness.

### Bounded SDD-001 local development arrangement (D-119)

For the local SDD-001 foundation only, the Product Owner may authorize connection-free compatibility evaluation and implementation using AI-assisted technical review, automated checks, manual inspection and a recorded Product Owner decision. The scope is limited to fictional local/test configuration, framework initialization and a neutral non-business response. It excludes application identity, personal or client data, database operations, migrations, business mutations, external dispatch and deployment.

Within this scope, additional human specialist review and independent feature acceptance may be deferred. The Product Owner may personally review and accept the local result, including work to which that person contributed, provided the record identifies the combined roles, evidence, limitations and residual risk and describes it as self-review. D-119 originally established this scope as the sole exception to the contributor self-approval restriction; D-120 subsequently adds the separate low-risk arrangement above. AI agents retain no approval authority.

Before execution, review the exact dependency footprint, scripts and plugins, configuration and failure contracts, environment controls, and permitted file and network effects. Stop the affected action if those controls cannot be established, a material unresolved security, privacy or integrity issue arises, or work expands beyond this scope. Any required security exception follows §13.

Complete applicable human specialist review before expanding into an affected excluded capability or before release, whichever occurs first. The qualified independent privacy/security assessment and other release obligations in §19 remain mandatory. Local acceptance does not establish independent assurance, operational readiness or release authority.

### Prototype Exploration Exception

Isolated, fictional, non-production UI/UX prototypes may be refined iteratively to explore and
correct their presentation and simulated interactions. This exception applies only to prototypes
that are clearly identified as non-production and use fictional data and simulated behavior. It
grants standing authorization for routine visual, animation, responsive-layout, interaction,
navigation, and accessibility refinements within such prototypes, including the existing
Checkpoint 11 prototype.

Routine refinements under this exception do not require a separate feature specification,
implementation plan, or Product Owner approval cycle for each change. Contributors shall preserve
unrelated work, perform appropriate browser verification for the change, and provide a concise
change summary stating what changed, what was checked, the results, and material failures or
unverified behavior. Routine qualifying prototype refinements may be grouped into a concise change
summary. They do not require individual decision-register entries, feature specifications, or
Product Owner approval cycles.

This exception does **not** authorize:

- New dependencies, animation runtimes, external services, or integrations without explicit Product Owner authorization.
- Major expansion of prototype scope, production application behavior, security-sensitive changes, real authentication or authorization, real personal-data handling, database or API changes, or deployment without explicit authorization and applicable review.
- Access to CEAP or production systems or data.
- A change to approved product requirements, architecture, security controls, or implementation-stage governance.

Prototype interactions are illustrative and do not establish real identity, authority, persistence,
booking outcomes, or approved business rules. Contributors must stop and seek a decision when a
proposed change crosses these boundaries or its classification is unclear. Browser verification and
AI-assisted review do not establish accessibility conformance or Product Owner acceptance.

For Checkpoint 11, this exception prospectively supersedes D-098’s per-feature specification and
approval requirement **only for qualifying prototype refinements**, and supersedes D-096/D-097’s
landing/login-only visual restriction **only to permit restrained visual and animation refinements
within the fictional prototype**. Text, controls, task-focused surfaces, visible focus, responsive
behavior, reduced-motion support, and usability without decorative effects remain protected. The
historical decisions and their other boundaries remain unchanged.

D-100’s approved increment, file-preservation boundaries, verification evidence, and acceptance
criteria remain recorded and are not retroactively accepted or rewritten. Routine prototype
iteration does not itself accept D-100 or Checkpoint 11; Product Owner acceptance remains separate.
CP11 acceptance was separately recorded on 2026-11-13 (D-112).
Product implementation continues to follow the existing SDD and risk-based approval controls in this
section.

### Historical gate and retained controls

Gate 0 and Gate 1 remain historically complete as recorded. Gate 2 was unfinished at the D-098
transition and its routine gate/checkpoint progression was prospectively superseded. The Product
Owner subsequently accepted the alternative CP12 evidence and final architecture review and closed
Gate 2 under D-121, subject to its recorded residual risks. Checkpoint 11 was accepted by the Product Owner
on 2026-11-13 within its documented design/prototype scope (D-112); that acceptance is design evidence
only. Former Gates 3–7 remain historical planned stages, not routine
sequential prerequisites. Their mandatory security/data-integrity reviews, isolated verification,
release/deployment approvals, and continuing operational controls remain enforceable independently
of gate numbering. D-096/D-097 remain bounded fictional-prototype authorizations only.

### Execution operating contract (D-110)

For substantial authorized work, define a bounded work package with its objective,
scope and exclusions, deliverables, owner, dependencies, acceptance criteria,
verification approach, and actions requiring separate authorization. A package
organizes execution; it grants no authority beyond §5 and §7. Reuse approved
decisions unless new material evidence, a genuine contradiction, or an authorized
change request calls for reconsideration.

Independent tasks may run in parallel within their authorization. Assign exclusive
write ownership for each file or other shared artifact, preserve existing work, and
name an integrator to reconcile dependent contracts before final review. Agents
and contributors may draft, evaluate, integrate, and verify within their assigned
scope; they cannot approve their own work or expand another contributor's scope,
except for the Product Owner self-review arrangements expressly stated above under D-119 and D-120.

Classify unresolved items in the package record as **blocking**, **deferred**, or
**installation-specific**. Blocking items include missing authority, a material
conflict with approved requirements, a necessary undefined contract, or an unsafe
security, privacy, or data-integrity outcome; stop and escalate as §21 requires.
Deferred and installation-specific items need a responsible owner, dependency,
and resolution milestone, and remain mandatory before the work they affect.
Independent authorized work may continue only where the unresolved item has no
material effect and §21 does not require it to stop, consistent with §5.
Classification never waives a required
review, approval, or stop condition.

Validate changed artifacts and their dependent contracts against package acceptance
criteria, with depth proportional to risk. Include all applicable specialist,
security, privacy, data-integrity, accessibility, testing, and release controls;
repeat a broader review when a material change or new evidence gives a specific
reason. Report actual results, exceptions, and unresolved items under §9. Group
related results for a meaningful Product Owner checkpoint when the existing
approval rules permit it; retain every separately required specification, change,
specialist, acceptance, and release approval. Within an authorized package,
complete dependent tasks without seeking repeated approval for unchanged decisions,
then stop at its stated boundary.

### Lightweight knowledge checkpoint

At the start of substantial authorized work, consult relevant approved or adopted knowledge where
accessible. At meaningful task completion, assess whether genuinely new reusable knowledge merits
a guarded draft in the governed Obsidian locations. Routine changes do not warrant notes; existing
notes or draft adoption require separate Product Owner approval. This is not an additional approval
stage. Report any draft created or state that none was warranted.

---

## 6. Required Artifacts and Evidence

| Historical gate | Recorded artifacts / evidence |
|---|---|
| Gate 0 | Project Charter; Engineering Governance; Decision Register; Gate Register; `AGENTS.md` (present in this repository and part of the P-001 artifact set; at Gate 0 closure its instructions were **not adopted** — see §20; this file was subsequently replaced and adopted as the agent entry point under D-039, effective 2026-10-23); and the separate Gate 0 evidence record at `docs/evidence/GATE-0-EVIDENCE.md`, which states what was inspected, the period covered, and what cannot be established. That evidence record is a Gate 0 exit requirement outside the five-artifact P-001 scope |
| Gate 1 | Requirements specification; validated target customer or an explicitly labeled development-stage assumption; user journeys; business rules; confirmed user/authentication model; assumption ownership; risk register; measurable acceptance criteria. Under D-077, simulated material may inform the development-stage baseline but is not actual validation evidence. |
| Gate 2 | Architecture description; data model; interface/API design; configuration and per-installation strategy; Checkpoint 11 UI/UX design package (complete annotated MVP screen/state coverage, responsive/accessibility design, representative connected high-fidelity prototype and recorded Product Owner/usability/design-review findings) required for final Gate 2 architecture review under D-093; traceability to requirements |
| Gate 3 | Security review record; data-integrity design record; threat model; security exception register |
| Gate 4 | Authorized change set; reviewed migrations (if authorized); tests for each change; implementation notes |
| Gate 5 | Automated test results; manual verification evidence; defect log with dispositions; regression results |
| Gate 6 | Release checklist; deployment plan; rollback plan; configuration/secrets handling plan; sign-off record |
| Gate 7 | Operational runbook; monitoring/logging plan; backup/restore procedure; maintenance/update policy |

This table preserves the historical gate artifact mapping; it does not reimpose routine sequential
gate prerequisites. Feature-level verification follows §5. Evidence must be real and reproducible,
not merely asserted.

---

## 7. Limited, Explicit Authorization

- Ordinary and high-risk implementation tasks require the approvals in §5 and a
  bounded authorization stating what may be changed. Standing authorization applies
  to the narrow low-risk cosmetic class and qualifying prototype refinements under
  the Prototype Exploration Exception in §5.
- Work outside the stated boundary requires a new authorization.
- A prior approval does not carry forward to unrelated work.
- When in doubt, ask; do not assume permission.

---

## 8. Requirements and Design Review Before Implementation

- A feature spec and its required approvals under §5 are in place before product
  implementation code is written; the Prototype Exploration Exception in §5 applies
  to qualifying fictional-prototype refinements. Approved requirements remain authoritative.
- Design or policy changes discovered during implementation are raised for the
  required approval, not silently adopted.

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
- Personal data is handled under approved privacy/retention requirements and
  applicable security/privacy review.

---

## 13. Security Exceptions

- Any exception to a security control requires documented **justification,
  impact, scope, approving authority, and review or expiry conditions**.
- Exceptions are approved only by the product owner and recorded in the Decision
  Register as `SE-###` entries carrying the authorization and rationale, with
  detailed scope, controls, owner, expiry or review condition, and closure
  recorded in the applicable security-review evidence.
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
- Tests run in an isolated test environment, never against production or client data. Tests that exercise persistence use their own separately authorized, isolated test database. Tests that do not create, connect to, query, modify, or otherwise use a database do not require a test database.
- Test data must not include personal data copied from production systems.
- Verification evidence is required for feature acceptance; release evidence
  remains separately required before release approval.
- No claim of "tested", "verified", or "approved" may be made without recorded
  evidence.

---

## 15. Change Control and Decision Documentation

- High-risk changes listed in §5 require explicit product-owner approval before
  implementation; other scope changes require the approval defined in §5.
- Each change must be traceable to an approved requirement or decision.
- Architectural decisions and significant changes are recorded in the Decision
  Register with status and rationale.
- Unapproved changes found in review are reverted or explicitly approved
  retroactively; they are never quietly retained.
- The Decision Register is updated when a decision is made, changed, or
  superseded.
- Record an approved decision in the governed repository during the next
  authorized documentation update, with source, status, approval date if supplied,
  and recording date separately identified. This does not turn a draft artifact
  or unverified result into an approved one (D-110).

### Significant technology decision due diligence (D-102)

Before implementation approval, every significant technology decision must document its
benefits, trade-offs, credible failure scenarios, prevention/mitigation/recovery strategy,
verification criteria and remaining risks. Significant choices include high-impact,
security-sensitive, operationally important, expensive-to-reverse or difficult-to-recover
decisions. Assessment depth is proportional to risk and complexity; record relevant
alternatives and selection rationale without duplicating the decision record unnecessarily.

Define verification criteria before implementation approval; produce actual verification
evidence when the applicable testing is separately authorized and executed. Make residual
risks explicit to the Product Owner; unresolved risks are not silently accepted and remain
subject to §5 and applicable security-exception controls. Approval of this evaluation
principle approves no technology, implementation or deployment. The Product Owner explicitly
approved the principle in the current conversation; the approval date was not separately
supplied. Recording date: 2026-11-12. See Decision Register D-102.

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

- Release/deployment requires separate Product Owner approval and a checklist,
  deployment plan, rollback plan, and configuration/secrets handling plan.
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
  releases/deployments, and any remaining historical gate disposition.
- Approval must be explicit and recorded (approver, artifact, date). Where the
  date of an owner confirmation was not captured, the record must say so; approval
  dates are never inferred, backdated, or taken from file timestamps.
- Silent or implied approval is not valid.
- An AI tool's statement of completion is not approval.
- Unresolved decisions stay visibly unresolved and are never marked approved.

---

## 19. Feature completion and retained approval controls

A feature is ready for acceptance when its approved specification and bounded scope have been
implemented, applicable verification is recorded, required reviews are complete, and a reviewer
has confirmed the result against its acceptance criteria. Product Owner approval remains required
as defined in §5; review or acceptance never changes approved requirements by implication.

The bounded local SDD-001 provision in §5 governs only that scope’s permitted review and acceptance arrangement. D-120 separately provides the risk-based review arrangement in §5; other applicable feature-review requirements and the independent pre-release assessment remain applicable.

Security and data-integrity review remains mandatory before accepting affected high-risk work.
A qualified independent privacy/security assessment, genuine product-fit review, required testing,
and release evidence remain mandatory before Product Owner release/deployment approval. These
controls no longer depend on the former sequential gate structure. Gate Register records the
historical gate status and transition; it does not grant implementation, database, deployment, or
production authorization.

**Historical Gate 1 development-stage route (D-077, approved 2026-10-29).** For this
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
| Product Owner | Product Owner | Accepted exact revision 1.4 D-110 execution operating contract amendment only | Not separately supplied; recorded 2026-11-13 |
| Product Owner | Product Owner | Approved exact revision 1.6 D-120 solo-developer risk-based review amendment only | Not separately supplied; recorded 2026-11-17 |

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
