# Project Charter — Appointment Management System

> Working title. The official product name is not yet decided.

| Field | Value |
|---|---|
| Document status | Draft — pending product-owner approval |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-15 |
| Revision | 0.2 (revised) |
| Owner | Product Owner |

This charter describes the initiation baseline for a **new, independent
commercial Appointment Management System**. It is a planning artifact only and
**authorizes no implementation of any kind**.

---

## 0. How to Read This Document

Every material statement is labelled with one of the following:

| Label | Meaning |
|---|---|
| **Confirmed** | Explicitly provided in the approved planning baseline. In force. |
| **Proposal** | Suggested wording or direction; requires product-owner approval before it is in force. |
| **Assumption** | Believed true but not yet validated; must be tested or falsified. |
| **Unresolved** | Not decided; to be resolved at a named gate. Must not be treated as settled. |

Nothing here constitutes a committed business policy, customer segment, service
workflow, technical specification, or commercial commitment.

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

**Proposal — requires product-owner approval.**

Build a reusable, configuration-driven appointment management product that any
suitable client organization can deploy as its own independent installation,
without depending on the design, data, or constraints of any single existing
system. The product should make scheduling and administrative appointment
workflows correct, secure, auditable, and straightforward for public users and
staff alike.

The vision deliberately avoids anchoring the product to CEAP's existing workflow.
CEAP is a **behavior reference**, not the product's design target.

This vision is a proposal for the product owner to approve, amend, or replace. It
must not be treated as settled.

---

## 3. Product Goals

**Proposal — requires product-owner approval.**

- G-1: Support appointment scheduling and related administrative workflows for
  multiple independent client installations from one maintained codebase.
- G-2: Guarantee data integrity under normal and concurrent use (no duplicate or
  over-capacity bookings, no orphaned or inconsistent records).
- G-3: Provide strong authentication, authorization, privacy, and auditability
  appropriate to handling personal data.
- G-4: Be configurable per client organization without forking core logic.
- G-5: Be maintainable and testable, with automated tests and documented
  decisions.
- G-6: Provide a usable, accessible, responsive experience across devices.
- G-7: Never depend on, connect to, or affect the production CEAP system.

Goal targets (numbers, coverage thresholds, service levels) are **unresolved** and
must be agreed during Gate 1 (see §10).

---

## 4. Measurable Success Criteria

**Proposal — requires product-owner approval.** Items marked *[target TBD]* need a
measurable target agreed in Gate 1 before they can be verified.

| ID | Criterion | Verification approach | Target |
|---|---|---|---|
| S-1 | A new client installation can be created and configured without editing core scheduling logic. | Installation/configuration walkthrough on a clean environment. | Verifiable after implementation and testing in an isolated, authorized environment. |
| S-2 | Each installation uses its own database and cannot read or write another installation's or CEAP's data. | Architecture + configuration review; isolation tests. | Verifiable after implementation and testing in an isolated, authorized environment. |
| S-3 | Under concurrent booking attempts, capacity and duplicate-booking rules are never violated. | Automated concurrency tests. | *[target TBD]* |
| S-4 | All state-changing operations are authenticated, authorized, and server-side validated. | Security test suite; review. | *[target TBD]* |
| S-5 | No known high-severity security findings remain at release. | Security review record; defect log. | *[target TBD]* |
| S-6 | Core workflows are covered by automated tests that pass. | Test report. | *[coverage TBD]* |
| S-7 | Public and administrative experiences meet an agreed accessibility standard. | Accessibility review. | *[standard TBD]* |
| S-8 | Architecture, decisions, and changes are documented. | Artifact review. | Verifiable now |
| S-9 | The production CEAP application, database, and deployment are never affected. | Scope/isolation review across all gates. | Verifiable now |

Criteria with *[target TBD]* are **provisional** until a target is agreed.
Further criteria may be added in Gate 1.

---

## 5. Provisional Scope

**Provisional — to be finalized in Gate 1.**

Potential concerns to investigate (these are discovery topics, **not** committed
features):

- Appointment types, schedules, dates, time slots, and capacity.
- Booking, cancellation, rescheduling, and duplicate-booking prevention.
- Public-facing user journeys and administrative workflows.
- Administrator and staff permissions.
- Client-specific configuration.
- Data integrity, transaction safety, and concurrent booking attempts.
- Authentication, authorization, privacy, and auditability.
- Reporting, exports, and operational monitoring.
- Data import and eligibility validation, if required.
- Notifications, if required.
- Accessibility, usability, and localization.
- Deployment, backups, restoration, maintenance, and support.

No item above becomes committed scope without requirements evidence and
product-owner approval.

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
- Automated notifications, reporting, masterlist import, and eligibility
  validation are **not** assumed mandatory; each requires requirements evidence.

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

- CEAP may be consulted as a **reference** for understanding existing appointment
  workflows, user experience, operational practices, and lessons learned.
- Any CEAP source copied into this project is a **separate reference or
  experimental copy**, not the authoritative foundation of the commercial
  product.
- Existing production instructions (including `AGENTS.md`) must not be modified.

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
- Docker **only if** its benefits justify the added complexity, with a documented
  purpose and justification and appropriate product-owner approval

These are the **currently preferred** technologies, not permission to install
dependencies or begin implementation. Additional frameworks, infrastructure,
services, or technologies must have a **documented purpose and justification**
and **appropriate product-owner approval**.
Exact versions and final technical decisions are resolved before implementation
and release respectively (see Q-007, Q-008; decisions D-022, D-031, D-032).

Compatibility, version selection, dependency management, testing, and deployment
decisions that must be settled before implementation are tracked in the Decision
Register and Gate Register.

---

## 10. Assumptions

**Assumptions — not yet validated.**

| ID | Assumption | Validation point |
|---|---|---|
| A-1 | Each client organization runs its own isolated installation. | Gate 1 |
| A-2 | A representative client segment and stakeholders can be accessed for discovery. | Gate 1 |
| A-3 | Importing an eligibility population ("masterlist") is *not* automatically required. | Gate 1 |
| A-4 | The Laravel/Blade/Tailwind/MariaDB stack is suitable; versions are unconfirmed. | Gate 2 |
| A-5 | Automated testing is feasible across the chosen stack. | Gate 2 |
| A-6 | At least one administrator/staff account exists per installation before public use. | Gate 1 |
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
| R-1 | Customer segment and functional scope undefined | Rework; mis-scoped product | Open |
| R-2 | Registration/login/guest-booking model undecided | Authentication and abuse-control design blocked | Open |
| R-3 | Mixing CEAP-specific behavior with product requirements | Inappropriate coupling | Open |
| R-4 | Stack versions unpinned | Reproducibility and security-update risk | Open |
| R-5 | Data integrity under concurrency | Double bookings, inconsistency | Open |
| R-6 | Security/privacy exposure of public endpoints | Data loss/exposure, abuse | Open |
| R-7 | Deployment/hosting/backup model undefined | Operational risk | Open |
| R-8 | Commercial model undefined | No client commitment can be made | Open |
| R-9 | Assumptions treated as facts | Decisions on unvalidated ground | Open |
| R-10 | Accidental coupling to or impact on production CEAP | Damage to a live system | Open |

Detailed risk management belongs to Gate 1 and later artifacts, not to this
charter.

---

## 14. Security Exceptions

**Confirmed.** Any security exception must record: documented justification,
impact, scope, approving authority, and review or expiry conditions. An exception
must **never** be used to bypass mandatory safety, legal, or data-protection
requirements. Exceptions are approved only by the product owner and are logged in
the Decision Register and the Gate 3 exception register.

---

## 15. Unresolved Matters

The following are explicitly **not** decided and must not be assumed:

- Target customer segment and detailed requirements.
- Public self-registration, public login, guest booking, and administrative
  authentication/authorization.
- Functional appointment workflow and business rules.
- Technical versions, dependency management, and deployment requirements.
- Data model and whether an eligibility "masterlist" import is required.
- Notifications and reporting capabilities (only if justified by requirements).
- Privacy, retention, auditability, performance, and concurrency expectations.
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

This charter is **DRAFT and NOT APPROVED**. Gate 0 cannot be considered complete
until the product owner reviews and explicitly approves the Gate 0 deliverables
(see `docs/GATE_REGISTER.md`).

| Approver | Role | Decision | Date |
|---|---|---|---|
| — | Product Owner | Pending | — |
