# Project Charter — Appointment Management System

> Working title. The official product name is not yet decided.

| Field | Value |
|---|---|
| Document status | Revision 1.3 DRAFT — Gate 1 decisions incorporated; exact revision pending Product Owner review. The effective approved baseline remains the P-001 Gate 0 artifact as recorded at Revision 0.5; P-002/P-003/P-004 and D-041–D-075 retain their separate recorded scope. |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 1.3 DRAFT (2026-10-29 — D-067–D-075 Gate 1 directions incorporated) |
| Owner | Product Owner |

> **Revision 1.0 DRAFT (2026-10-28) — superseded by later drafts; never approved.**
> Clarifies that A-1 remains an assumption to validate although independent
> installations are already the approved baseline (D-020). P-001 approved the
> Gate 0 artifact as then recorded; P-002/P-003 and conditional P-004 retain their
> separate recorded scope. Neither those approvals nor Gate 1 entry approval
> approves this working revision or authorizes Gate 1 exit. Revision 0.9 is
> retained as unapproved history and is not an alternative current draft.

> **Revision 0.9 DRAFT (2026-10-28) — superseded by Revision 1.0; never approved.
> Retained as history.** Proposed
> corrections to
> three live statements to reflect the Gate 1 entry authorization already
> recorded in `docs/GATE_REGISTER.md` §4. Historical status records are
> unchanged; Gate 1 is not approved for exit and implementation remains
> unauthorized. Revision 0.9 was not approved by P-001 or by Gate 1 entry
> authorization and is not a current submission.

> **Revision 0.8 (2026-10-28) — P-002/P-003 approved; P-004 conditionally
> approved for Gate 1 discovery.** The Product Owner approved P-002 and P-003
> and conditionally approved P-004 in ChatGPT on 2026-10-28. Unresolved targets
> and functional details remain for Gate 1; neither Gate 1 nor implementation is authorized.

> **Revision 0.7 (2026-10-22) — DRAFT revised product vision and goals, submitted
> for product-owner review.** §2 and §3 replaced with revised draft wording for
> P-002 (vision) and P-003 (goals); the new §3.1 records how existing goals G-1 –
> G-7 were preserved, extended, or split, and which goals are new. This revision is
> a **draft submitted for review**: it is not approved, P-002, P-003, and P-004
> remain unresolved product-owner decisions, no decision or gate status changed,
> and no implementation is authorized. The P-001 artifact approval recorded on
> 2026-10-22 is unaffected by this revision, and this revision is not itself
> approved by it.

> **Revision 0.6 (2026-10-22) — Gate 0 closure recorded.** §17 updated to record
> that Gate 0 was closed on 2026-10-22 once the remaining exit criteria were met. No
> Gate 1 approval and no implementation authorization is recorded.

> **Revision 0.5 (2026-10-22) — P-001 approval recorded.** Document status updated
> to record product-owner approval of this charter as a Gate 0 baseline artifact on
> 2026-10-22. Gate 0 remains `IN PROGRESS`; no gate transition was approved.

> **Revision 0.4 (2026-10-22) — final Gate 0 correction pass.** Clarified §7.3:
> accepting `AGENTS.md` as a P-001 artifact is separate from adopting its
> instructions, and adoption is not a P-001 prerequisite. No status, approval, or
> gate state was changed in this document by this pass.

> **Revision 0.3 (2026-10-22) — Gate 0 correction pass.** Corrected the
> planning-baseline reference (§0), the S-1/S-2 target column (§4), the Docker
> statement (§9), the `AGENTS.md` wording (§7.3), and the security-exception
> reference (§14). No status, approval, or gate state was changed by this pass.

This charter describes the initiation baseline for a **new, independent
commercial Appointment Management System**. It is a planning artifact only and
**authorizes no implementation of any kind**.

> **Revision 1.3 DRAFT (2026-10-29).** Incorporates the approved market, MVP,
> policy, quality-target, evidence, efficiency, and workflow-refinement directions
> in D-041–D-075. The exact revised charter text remains a draft; no requirement
> version, Gate 1 exit, Gate 2 entry, architecture, or implementation is approved
> by this revision.

---

## 0. How to Read This Document

Every material statement is labelled with one of the following:

| Label | Meaning |
|---|---|
| **Confirmed** | Explicitly provided in the product-owner-provided planning baseline. Treated as in force for planning purposes; approval of this charter as an artifact is tracked separately (P-001). |
| **Approved** | Explicitly approved by the Product Owner and in force within the stated scope. Approval does not authorize a gate or implementation. |
| **Conditionally approved** | Approved only for the stated purpose and conditions; unresolved details remain unapproved. |
| **Proposal** | Suggested wording or direction; requires product-owner approval before it is in force. |
| **Assumption** | Believed true but not yet validated; must be tested or falsified. |
| **Unresolved** | Not decided; to be resolved at a named gate. Must not be treated as settled. |

Confirmed, approved, and conditionally approved statements are in force only to the extent
their labels state. Proposals, assumptions, and unresolved items are not approved. Gate 1
entry is authorized only as recorded in `docs/GATE_REGISTER.md` §4; nothing in
this charter authorizes implementation.

---

## 1. Purpose of the Product

**Confirmed.** The product is a **separate, independent commercial Appointment
Management System**. It is intended to be:

- reusable across multiple client organizations,
- secure,
- maintainable,
- configurable, and
- **installed independently and separately for each client organization**.

It is **not** the production CEAP Appointment System, and it does **not** inherit
CEAP's architecture, database, schema, business rules, or security design. It is
**not** a shared multi-tenant SaaS product; that model is outside the approved
baseline (see §12 and decision D-020).

---

## 2. Product Vision

**Approved by the Product Owner on 2026-10-28 (P-002), with the clarification below.**

To build a professionally engineered, secure, efficient, and configurable
Appointment Management System that delivers a smooth and reliable experience for
users and administrators. The system should be designed to support growth to
thousands of users while maintaining responsive performance, data integrity,
usability, and maintainability.

The product will follow sound software engineering principles, with a
well-structured architecture, deliberate technical decisions, comprehensive
testing, and clear documentation. It will be designed to accommodate different
organizational needs through configuration and extensible architecture rather
than requiring extensive redevelopment for every client.

The long-term vision is to develop a dependable, adaptable, and commercially
viable software product that can evolve as requirements grow, technologies
change, and real-world usage provides new insights.

**Approved boundaries this vision retains.** The product remains a separate,
independent commercial product, installed independently for each client
organization, with its own application, database, schema, configuration, and
deployment environment (D-019, D-020, D-035; §1, §8, §12). It must never
depend on, connect to, or affect the production CEAP system (D-024, D-025;
§7). CEAP is only an optional, non-production historical reference for lessons
learned and candidate workflows, not this product's design target.
Configuration and extensibility — not per-client redevelopment — are the
intended means of adapting to different organizations.

**P-002 clarification (approved).** CEAP's architecture, implementation, database
schema, defects, and organization-specific rules are not authoritative product
requirements. CEAP-like workflows may be supported when independently specified
and validated, without requiring CEAP's implementation or production environment.

**Aspiration, not requirement.** "Support growth to thousands of users" states an
intention, not a validated capacity target. No concurrency, throughput,
response-time, or availability figure is committed by this vision; those remain
unresolved open questions (Q-016, Q-022; §4, §10). The vision asserts no
zero-defect, perfect-reliability, guaranteed-scalability, or market-validation
claim, and selects no target customer segment (Q-001).

The Product Owner approved this vision with the clarification above on
2026-10-28 (P-002).

### 2.1 Initial target market

**Approved direction (D-041).** The initial target market is small-to-medium
appointment-driven service businesses with staffed front desks. Government and
public-sector organizations are secondary future targets; enterprise capabilities
are deferred. This is a Product Owner market selection supported by discovery
evidence, not a claim of representative market validation.

---

## 3. Product Goals

**Approved by the Product Owner on 2026-10-28 (P-003), with the clarifications below.**

- G-1: Support appointment scheduling and mandatory QR-based appointment
  verification as core capabilities, with related administrative workflows for
  multiple independent client installations from one maintained codebase, each
  deployed and operated independently.
- G-2: Enforce data integrity under normal and concurrent use — no duplicate or
  over-capacity bookings, and no orphaned or inconsistent records — and handle
  failures safely.
- G-3: Provide strong authentication, authorization, privacy, and auditability
  appropriate to handling personal data, including protection against common
  application vulnerabilities.
- G-4: Be configurable per client organization without forking core logic, and
  extensible so differing organizational requirements are met through
  configuration and extension rather than through redevelopment, including
  scheduling and capacity policies based on validated organizational needs.
- G-5: Be maintainable and testable — clear, modular, understandable code
  following appropriate design principles and framework conventions — supported
  by automated tests (G-10) and documented decisions (G-9).
- G-6: Provide a usable, accessible, consistent, and responsive experience across
  desktop, tablet, and mobile devices.
- G-7: Never depend on, connect to, or affect the production CEAP system.
- G-8: **Scalability and performance** — design for increasing users, appointments,
  and records while maintaining acceptable response times and efficient resource
  usage, and validate capacity through performance testing.
- G-9: **Professional engineering practices** — deliberate technical decisions,
  version control, appropriate review, automated testing, debugging, and
  documentation.
- G-10: **Testing and defect prevention** — test critical business rules and
  workflows, detect regressions, investigate root causes, and reduce recurring
  defects.
- G-11: **Deployment and operational reliability** — make installation,
  configuration, updates, backups, restoration, and troubleshooting manageable,
  keeping separate client installations and their data appropriately isolated.
- G-12: **Long-term adaptability and commercial viability** — build a practical
  foundation that can evolve into a product for different organizations,
  prioritizing features by validated requirements, feasibility, feedback, and
  business value.

**P-003 clarification (approved).** CEAP-specific grantee records are not a
generic product requirement, and the historic fixed 80-appointment daily limit
must not be hardcoded. Specific scheduling and capacity rules remain for Gate 1
discovery (Q-019).

G-1 – G-7 are carried forward from the previous draft with their identifiers and
commitments intact; G-8 – G-12 are new. §3.1 records the mapping to the ten
reviewed themes. No goal was retired or deleted in this revision.

Goal targets (numbers, coverage thresholds, service levels) are **unresolved** and
must be agreed during Gate 1 (see §4, §10; Q-016, Q-022). No goal is a claim of
zero defects, perfect reliability, guaranteed scalability, validated market demand,
or a committed technology version (D-031, Q-007).

### 3.1 Traceability of the approved goal set

| Proposed theme | Existing goal(s) | Disposition | Current ID |
|---|---|---|---|
| Scalability and performance | — | New goal | G-8 |
| Reliability and data integrity | G-2 | Preserved. "Guarantee" reworded to "Enforce" so the goal states an enforcement commitment without a zero-defect claim; explicit failure handling added. The absolutes (no duplicate, no over-capacity, no orphaned records) are retained. | G-2 |
| Security and privacy | G-3 | Preserved and extended: auditability retained, protection against common application vulnerabilities added. | G-3 |
| Usability and responsive design | G-6 | Preserved and clarified: consistency and the desktop/tablet/mobile range made explicit. | G-6 |
| Configurability and extensibility | G-4 | Preserved and extended with extensibility; the no-forking-core-logic constraint is retained. | G-4 |
| Maintainability and code quality | G-5 | Preserved. The automated-testing and documented-decisions commitments are expanded in G-10 and G-9 and cross-referenced from G-5; they are relocated, not removed. | G-5 |
| Professional engineering practices | G-5 (partly — documented decisions) | Split out as a new goal covering end-to-end engineering practice. | G-9 |
| Testing and defect prevention | G-5 (partly — automated tests) | Split out and expanded into regression detection, root-cause investigation, and defect reduction. | G-10 |
| Deployment and operational reliability | — | New goal. Deployment, hosting, and backup models remain unresolved (Q-008); this states a goal, not a chosen model. | G-11 |
| Long-term adaptability and commercial viability | — | New goal. States direction only; no target market (Q-001), commercial model (Q-010), or market validation is asserted. | G-12 |

Two existing goals have no counterpart among the ten reviewed themes and are
retained deliberately, not dropped:

| Existing goal | Disposition | Current ID |
|---|---|---|
| Support multiple independent client installations from one maintained codebase | Preserved, with independent deployment and operation made explicit; mandatory QR-based appointment verification added under P-003. | G-1 |
| Never depend on, connect to, or affect the production CEAP system | Preserved verbatim. | G-7 |

---

## 4. Measurable Success Criteria

**Conditionally approved (P-004) as the provisional Gate 1 discovery baseline.**
Final targets, testing thresholds, accessibility standards, and release acceptance
criteria are not approved; unresolved targets must be agreed in Gate 1.

| ID | Criterion | Verification approach | Target |
|---|---|---|---|
| S-1 | A new client installation can be created and configured without editing core scheduling logic. | Installation/configuration walkthrough on a clean environment, after implementation and testing in an isolated, authorized environment. | Provisional: one clean installation configured for its approved services/policies with no core scheduling-code edit |
| S-2 | Each installation uses its own database and cannot read or write another installation's or CEAP's data. | Architecture + configuration review; isolation tests, after implementation in an isolated, authorized environment. | Provisional: all approved isolation checks pass |
| S-3 | Under concurrent booking attempts, capacity and duplicate-booking rules are never violated. | Automated concurrency tests using the approved normal, peak, and contention profiles. | Provisional: zero violations; for 50 simultaneous valid requests competing for one remaining capacity unit, exactly one reservation succeeds and all other requests fail safely without partial or orphaned state |
| S-4 | All state-changing operations use approved authentication, including any scoped guest-authentication mechanism, and are authorized and server-side validated. | Security test suite; review. | Provisional: 100% of the approved state-changing operation inventory covered |
| S-5 | No known high- or critical-severity security findings remain at release. | Security review record; defect log. | Provisional: zero known high- or critical-severity findings |
| S-6 | Core workflows are covered by automated tests that pass. | Test report. | Provisional: 100% of approved core workflows have required success/rejection/authorization/failure tests and all required tests pass; no code-coverage percentage set |
| S-7 | Core public and administrative experiences meet the approved accessibility standard. | Accessibility review. | Provisional: WCAG 2.2 AA across the D-068 core workflows and D-069 supported browser families on applicable desktop/mobile experiences |
| S-8 | Architecture, decisions, and changes are documented. | Artifact review. | Verifiable now |
| S-9 | The production CEAP application, database, and deployment are never affected. | Scope/isolation review across all gates. | Verifiable now |

S-1–S-7 targets are provisionally approved under D-052 and refined by D-067–D-072.
They are not current test or conformance results. The initial operating profile is
20–100 appointments per day per client installation, not a hard booking limit or a
concurrency target. S-3 verification includes the 50-request/one-capacity-unit
contention case; normal and peak results, browser coverage, severity application,
workflow ownership, and evidence ownership still require later verification. S-8
and S-9 remain verifiable without numeric targets.

---

## 5. Gate 1 MVP Direction

**Approved product direction (D-042–D-075); exact requirement versions remain
DRAFT.** The MVP direction covers configurable availability/capacity, guest and
staff-assisted/proxy/walk-in booking, alternative availability when a preferred
date or slot is unavailable, cancellation/rescheduling, duplicate and capacity
integrity, QR lookup rather than identity proof, attendance status, least-privilege
roles, auditable supervisor exceptions, accessible screenshot-friendly
confirmation, privacy minimization, printable daily rosters, and structured batch
post-outage reconciliation, and essential privacy-conscious operational monitoring
for booking failures, unexpected errors, security-relevant events, capacity or
integrity violations, reconciliation failures, and other important operational
failures requiring administrative attention.

Exact client policy values are configuration decisions, not universal defaults.
Architecture and implementation remain unauthorized.

---

## 6. Exclusions (Not In Scope)

**Confirmed / provisional.**

- **Not** the production CEAP Appointment System, and not a modification of it.
- **Not** a shared multi-tenant SaaS product (unless formally reconsidered under
  §12).
- **Not** a reuse of the CEAP database, schema, or its cached/derived data.
- No implementation, dependency installation, database operation, migration,
  deployment, or repository-setting change during Gate 0.
- No invented customer segment, business policy, service workflow, or commercial
  commitment.
- Automated external notifications/reminders, automated waitlists, payments and
  deposits, public accounts, advanced queue displays, advanced reporting and
  analytics, generic masterlist/eligibility validation, broad integrations,
  government-specific workflows, full offline booking/synchronization, and
  enterprise capabilities are deferred unless separately approved (D-042).

---

## 7. Separation From CEAP and Its Production Database

**Confirmed.** This separation is mandatory and applies to every gate.

### 7.1 Product independence

The commercial product must have its **own** application architecture, database,
database schema, migrations, configuration, credentials, and deployment
environment, established only when separately authorized.

### 7.2 Absolute production boundary

- The product must **never** connect to, import into, migrate, modify, delete
  from, or otherwise operate against the **production CEAP database**.
- The production CEAP application, repository, database, credentials,
  configuration, deployment, and production data are **out of scope** and must
  never be touched.
- Do not reuse the CEAP database as the product's database.
- Do not assume the CEAP schema, table names, relationships, business rules,
  security design, or implementation are appropriate for the product.

### 7.3 Permitted use of CEAP

- Only non-production historical CEAP materials may be consulted as an optional
  reference for lessons learned and candidate workflows; production CEAP systems
  remain off-limits (§7.2).
- Any CEAP source copied into this project is a **separate reference or
  experimental copy**, not the authoritative foundation of the commercial
  product.
- Instructions belonging to the separate production CEAP system are outside this
  repository and must not be modified.
- This repository's `AGENTS.md` is **not** production CEAP instructions. Its
  version accepted for P-001 was not adopted at Gate 0 closure; accepting it as
  an artifact did not adopt its instructions and was not contingent on adoption.
  The replacement `AGENTS.md` was adopted under D-039 (2026-10-23).

### 7.4 Stop rule

If a file or path appears to reference the production CEAP environment, or if an
operation could affect it, work must **stop** before performing that operation,
the risk must be explained, and clarification must be requested.

---

## 8. Intended Users and Installation Model

**Confirmed categories; details unresolved.**

| User category | Description | Status |
|---|---|---|
| Public users / applicants | Book and manage appointments (registration/login/guest model unresolved) | Confirmed category |
| Authorized administrators and staff | Internal users managing appointments for one installation | Confirmed category |
| Product owner / system operator | Operates the commercial product, builds and releases it | Confirmed category |
| Client organizations | Organizations for which the product is installed independently | Confirmed category |

**Installation model (confirmed):** one independent installation per client
organization. Shared multi-tenant SaaS is **not** part of the baseline.

**Access boundary (confirmed):** the product owner / system operator is **not**
automatically an administrator of every client installation and must **not** have
unrestricted access to client data by default. Authentication, account
provisioning, and authorization for each category are to be investigated in
requirements discovery (see Q-002 – Q-004, Q-009, Q-018).

---

## 9. Planned Technology Direction

**Confirmed direction; versions and final choices unresolved.**

- Laravel
- Blade
- Tailwind CSS
- MariaDB
- Git and GitHub
- Automated testing

These are the **currently preferred** technologies, not permission to install
dependencies or begin implementation. Additional frameworks, infrastructure,
services, or technologies must have a **documented purpose and justification**
and **appropriate product-owner approval**.
Exact dependency and runtime versions are finalized at Gate 4 (D-031); gates
before Gate 4 record provisional compatibility constraints only. Deployment and
hosting decisions are resolved at Gate 2 and Gate 6 (Q-008).

**Docker is not part of the confirmed technology direction.** It remains
conditional: it may be adopted only if its benefits justify the added complexity,
with a documented purpose and justification and appropriate product-owner
approval. D-023 is the controlling approved decision; the adoption criteria in
D-032 remain provisional and unconfirmed (P-006).

Compatibility, version selection, dependency management, testing, and deployment
decisions that must be settled before implementation are tracked in the Decision
Register and Gate Register.

---

## 10. Assumptions

**Assumptions — development-stage acceptance recorded under D-077/D-081; not
validated by representative evidence.**

| ID | Assumption | Validation point |
|---|---|---|
| A-1 | Each client organization runs its own isolated installation. This is the approved product model (D-020); what remains to validate is its fit with representative client needs, not whether an unapproved shared multi-tenant model may replace it. A different model requires D-020's formal change review. | Development-stage accepted under D-081; real product-fit review before final release scope acceptance |
| A-2 | A representative client segment and stakeholders can be accessed for discovery. | Development-stage accepted under D-081; genuine product-fit review before final release scope acceptance |
| A-3 | Importing an eligibility population ("masterlist") is *not* automatically required. | Development-stage accepted under D-081; genuine target-segment review before final release scope acceptance |
| A-4 | The Laravel/Blade/Tailwind/MariaDB stack is suitable; versions are unconfirmed. | Gate 2 |
| A-5 | Automated testing is feasible across the chosen stack. | Gate 2 |
| A-6 | At least one administrator/staff account exists per installation before public use. | Development-stage accepted under D-081; authentication/provisioning validation in Gate 2 and later verification |
| A-7 | Internet-facing deployment is anticipated for public use; hosting model unresolved. | Gate 2 |

Assumptions must be validated or falsified before being relied upon in a later
gate. Incorrect assumptions must be corrected in this document or the register.

---

## 11. Constraints and Dependencies

**Constraints (confirmed):**

- **Scope authority:** the product owner approves all scope changes.
- **Security and privacy:** mandatory design concerns; controls must not be
  weakened to make a feature work. Exceptions require explicit approval with
  documented justification, impact, scope, approval, and review/expiry (§14).
- **Data integrity:** correctness and data integrity take priority over speed.
- **Isolation:** production CEAP systems, repositories, databases, credentials,
  and deployments must never be touched.
- **Independent data:** the product requires its own database; never the CEAP
  database.
- **Reference boundary:** CEAP is a behavior reference, not a specification.
- **AI guardrails:** AI tools may act only within explicitly authorized scope and
  may not independently change architecture, security, database, deployment, or
  scope.
- **Documentation-gated:** no implementation is authorized merely because a
  planning document exists.

**Dependencies (unresolved):**

| ID | Dependency |
|---|---|
| DP-1 | Product-owner availability to approve gates and exceptions. |
| DP-2 | Access to representative client/user stakeholders for discovery. |
| DP-3 | Confirmed support lifecycles for chosen stack components and versions. |
| DP-4 | A development/test environment isolated from production CEAP and its data. |
| DP-5 | Recovery of historical decisions D-001 – D-018, if they are needed (see below). |

---

## 12. Multi-Tenancy Treatment

**Confirmed.** Shared multi-tenant SaaS is **outside** the current baseline
(decision D-020). Reopening it is a **formal change review** affecting
architecture, security, data isolation, operations, and commercial scope — not an
implicit requirement and not authorized by any discovery question alone.

---

## 13. High-Level Risks

**Provisional.**

| ID | Risk | Potential impact | Status |
|---|---|---|---|
| R-1 | Primary segment selected but not formally shown representative; exact v0.7 requirement wording unvalidated | Rework; mis-scoped product | Reduced by D-041/D-042 and EVD-001–EVD-004; open pending minimum primary-segment walkthrough |
| R-2 | Guest booking approved and public accounts deferred; internal authentication/provisioning design remains open | Authentication and abuse-control design blocked | Reduced by D-046/D-047; open for formal review and Gate 2 design |
| R-3 | Mixing CEAP-specific behavior with product requirements | Inappropriate coupling | Open |
| R-4 | Stack versions unpinned | Reproducibility and security-update risk | Open |
| R-5 | Duplicate/capacity invariants approved but identity window, atomic design, exception handling, and test profile remain open | Double bookings, over-capacity, inconsistency | Open; D-043/D-044/D-048 reduce policy uncertainty but later design/review/testing remain mandatory |
| R-6 | Public/QR/roster/operator data exposure and exact privacy/retention rules remain under review | Data loss/exposure, abuse, unlawful retention | Open; D-045/D-047/D-050 establish minimization and access boundaries; qualified review required |
| R-7 | Deployment/hosting/backup model undefined; paper fallback/reconciliation scope approved | Operational risk, lost or conflicting outage records | Open; D-051 reduces continuity scope uncertainty but architecture/operations remain later-gate work |
| R-8 | Commercial model undefined | No client commitment can be made | Open |
| R-9 | Discovery evidence or approved direction may be overstated as representative validation or exact requirement approval | Decisions on unvalidated ground | Open; evidence classes and lifecycle boundaries documented in EVD register and requirements governance |
| R-10 | Accidental coupling to or impact on production CEAP | Damage to a live system | Open |
| R-11 | Client-specific policy values may be mistaken for universal defaults | Incorrect cancellations, duplicate decisions, capacity, or exception behavior | Open; D-043/D-044/D-048/BR-005 keep values configurable and unresolved |
| R-12 | Composite or AI-assisted research may be misattributed or treated as verbatim | False provenance and invalid validation claims | Reduced by D-053 and corrected evidence register; open for future evidence handling |

Detailed risk management belongs to Gate 1 and later artifacts, not to this
charter.

---

## 14. Security Exceptions

**Confirmed.** Any security exception must record: documented justification,
impact, scope, approving authority, and review or expiry conditions. An exception
must **never** be used to bypass mandatory safety, legal, or data-protection
requirements. Exceptions are approved only by the product owner and are recorded
in the Decision Register as `SE-###` entries carrying the authorization and
rationale, with detailed scope, controls, owner, expiry/review, and closure
recorded in the gate-specific evidence (Gate 3 exception register).

---

## 15. Unresolved Matters

The following are explicitly **not** decided and must not be assumed:

- Representative/formal validation of the selected target segment and exact v0.7
  requirement wording.
- Internal authentication/provisioning mechanisms and the detailed permission
  matrix; public accounts are deferred and guest booking is approved for MVP.
- Exact client-configurable scheduling, duplicate, cancellation/rescheduling,
  grace-period, exception, proxy, roster, and reconciliation values/procedures.
- Technical versions, dependency management, and deployment requirements.
- Data model; generic eligibility/masterlist capability is deferred from MVP.
- External notification/reminder channels and advanced reporting are deferred.
- Exact legal basis, notices, retention/deletion periods, representative load and
  availability profiles, supported accessibility environments, and evidence owners.
- Commercial model, pricing, and support commitments.
- The content of historical decisions D-001 – D-018.

Full identifiers and status are tracked in
`docs/decisions/DECISION_REGISTER.md`.

---

## 16. Authority and Change Control

- The product owner is the sole final approval authority for scope,
  architecture, security exceptions, releases, and gate transitions.
- Changes to this charter require product-owner approval.
- This charter authorizes **no** implementation work.
- Any conflict between this document and another approved artifact must be
  reported, not silently resolved.

---

## 17. Approval

This charter was approved by the product owner as a Gate 0 baseline artifact under
P-001 on 2026-10-22. That approval did not itself close Gate 0; Gate 0 was closed
on 2026-10-22 once its remaining exit criteria were met (see
`docs/GATE_REGISTER.md` §3). Gate 1 entry was subsequently authorized on
2026-10-28 for requirements analysis and documentation only; Gate 1 is not
approved for exit, and no implementation authorization is recorded. Revision 1.3
is a working draft pending Product Owner review; this historical P-001 approval
and the separately scoped D-041–D-075 decisions do not approve the exact Revision
1.3 wording.

| Approver | Role | Decision | Date |
|---|---|---|---|
| Product Owner | Product Owner | Approved as a Gate 0 baseline artifact (P-001) | 2026-10-22 |
