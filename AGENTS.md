# Appointment Management System — AGENTS.md

> Project-specific instructions for the **new commercial Appointment Management
> System**. This file governs *this* product only.
>
> Lineage note: this repository is the fresh commercial Appointment Management
> System project. It is distinct from the former commercial project from which the
> product owner has stated it was derived. That former project was itself derived
> from a copy of the separate production CEAP appointment system, including
> application code, assets, database schema and seed data, tests, and
> CEAP-specific documentation. Neither the former project nor the production CEAP
> system is part of this repository, and the production CEAP system is **not**
> modified.
>
> Only this repository and its available Git history have been inspected. Nothing
> inspected indicates that the former project's files, a CEAP `AGENTS.md`, or any
> other historical copy is present here. This note states only what the available
> evidence supports and does not claim that the original source repository, every
> historical copy, or every prior file has been independently inspected.

## 0. Relationship to Gate 0 Governance

This file must always comply with the Gate 0 governance documents:

- `docs/PROJECT_CHARTER.md`
- `docs/ENGINEERING_GOVERNANCE.md`
- `docs/decisions/DECISION_REGISTER.md`
- `docs/GATE_REGISTER.md`

If this file conflicts with those documents, the governance documents win, and
the conflict must be reported to the product owner rather than resolved
silently. `AGENTS.md` must never be used to bypass an approval gate or to
authorize implementation prematurely.

**Current status (do not change without product-owner approval):**

- Gate 0: IN PROGRESS — awaiting product-owner review and approval.
- Gate 1: NOT STARTED.
- Implementation: NOT AUTHORIZED.

---

## 1. Product Identity and Independence

1. This project is a **new, independent commercial Appointment Management
   System**, intended to be reusable, secure, maintainable, configurable, and
   installed independently for each client organization (one installation per
   client organization).
2. It is **not** the production CEAP Appointment System and must not be designed
   around CEAP's needs, limitations, or workflow.
3. CEAP may be consulted only as a **behavior reference** (existing workflows,
   user experience, operational practices, lessons learned). It is **not** an
   architecture, database, or business-requirements specification.
4. This product is **not** a shared multi-tenant SaaS product. Multi-tenancy is
   outside the approved baseline and may only be reconsidered through a formal
   change review approved by the product owner.

---

## 2. Absolute CEAP Separation and Database Independence

1. The product must use its **own** database, database schema, credentials,
   migrations, and configuration. Create them only when a task explicitly
   authorizes it.
2. **Never** connect to, import into, migrate, modify, delete from, or otherwise
   operate against the **production CEAP database** or any other production
   database.
3. Do not reuse the CEAP database as this product's database. Do not copy CEAP
   schema, table names, credentials, or data into this product.
4. Do not modify the production CEAP application, repository, database,
   credentials, configuration, deployment, or its `AGENTS.md`.
5. If a file or path appears to reference the production CEAP environment, or if
   an operation could affect it, **stop before performing it**, explain the risk,
   and request clarification.
6. All database work must target this product's own, isolated environment.

---

## 3. Planned Technology Direction

Preferred direction, subject to approved version and architecture decisions:

- Laravel
- Blade
- Tailwind CSS
- MariaDB
- Git and GitHub
- Automated testing
- Docker **only if** its benefits justify the added complexity

Rules:

- These are the preferred technologies, not permission to install dependencies
  or begin implementation.
- Do not introduce additional frameworks, infrastructure, services, or
  dependencies merely because they are popular. Any addition requires a
  **documented purpose and justification**, and appropriate approval
  (Decision D-036).
- Exact versions and dependency-management decisions must be settled before
  implementation and confirmed before release (D-031, Q-007).
- Do not run Laravel installation, scaffolding, or package-manager commands
  without explicit authorization.

---

## 4. Requirements-First, Stage-Gated Development

1. Work proceeds through the approved gates (Gate 0 → Gate 7). Do not skip,
   reorder, or short-circuit gates.
2. Requirements and design are reviewed and approved **before** implementation.
3. Do not write code against undocumented or unapproved requirements.
4. A gate advances only on explicit, recorded product-owner approval. AI tools
   may not advance a gate, mark work approved, or imply approval.
5. Update the relevant Gate 0 document or Decision Register when a decision is
   made or changed, rather than leaving decisions only in code or chat.

---

## 5. Explicit Authorization Required Before Acting

Do **not** perform any of the following without explicit, bounded authorization
from the product owner:

- editing any source or documentation file (including this `AGENTS.md` and the
  governance documents),
- committing changes,
- pushing changes,
- performing any destructive Git operation (reset, rebase, amend, force push,
  clean, or history rewrite),
- implementing a feature or otherwise changing application source code,
- installing, updating, or removing dependencies,
- creating, altering, seeding, importing into, or migrating a database,
- running database operations of any kind,
- configuring or performing deployment, or
- changing repository, branch, remote, or Git configuration.

Authorization is per task and does not carry forward. When in doubt, ask instead
of assuming permission. Creating a planning document is **not** authorization.

---

## 6. Secure Coding, Privacy, and Secrets

1. Security and privacy are mandatory design concerns.
2. Validate all input **server-side**; client-side validation is for user
   experience only and is never authoritative.
3. Every state-changing operation must be authenticated, authorized, and
   validated server-side. Never trust hidden fields or client-supplied identity.
4. Use framework-provided authentication, authorization, and password/session
   handling. Do not implement custom cryptography.
5. Handle personal data per the privacy and retention rules agreed in the
   requirements and design gates. Do not log or expose sensitive data.
6. **Never** store secrets, credentials, keys, or personal data in client-side
   code, commit them to the repository, or copy them into documentation.
7. Supply secrets through environment configuration that is not committed; commit
   only safe templates/examples. Keep development, test, and production
   configuration separate.
8. Do not disable, weaken, or bypass a security control to make a feature work.
   Any security exception requires documented justification, impact, scope,
   product-owner approval, and review/expiry conditions, and must never bypass
   mandatory safety, legal, or data-protection requirements (see Governance §13).

---

## 7. Data Integrity, Transactions, and Concurrency

1. Correctness and data integrity take priority over speed.
2. Uniqueness, capacity, referential, and state-transition invariants must be
   defined and enforced server-side.
3. Wrap multi-record operations in transactions with rollback on failure.
4. Concurrency behavior must be designed and tested, not assumed (e.g., two
   clients attempting the same slot at once).
5. Migrations and database changes must be **reviewed and approved before
   execution**. Never run a migration against an unapproved or production
   database.
6. No operation may silently discard or corrupt data.

---

## 8. Testing

1. Automated tests are required for behavior, validation, authorization, and
   error handling.
2. Test data-integrity invariants (uniqueness, capacity/limits, referential
   integrity, concurrency) and security controls.
3. Run tests only in an **isolated test environment** with its own database.
   Never test against production or client data.
4. Do not use personal data copied from production systems as test data.
5. Do not claim work is "tested", "verified", "secure", or "complete" without
   recorded, reproducible evidence.

---

## 9. Code Quality, Accessibility, and Usability

1. Prefer small, focused, reviewable changes over large rewrites.
2. Follow the framework's conventions and the project's agreed standards.
3. Keep code maintainable: clear naming, minimal duplication, and separation of
   concerns.
4. Build accessible and responsive interfaces that work across supported screen
   sizes and devices, avoiding horizontal overflow and unusable touch targets.
5. Consider accessibility (labels, keyboard use, semantics) and usability as
   product requirements, not afterthoughts.
6. Do not modify unrelated code while implementing a change.

---

## 10. Documentation

1. Record architectural decisions and significant changes in the Decision
   Register and the relevant Gate 0 document.
2. Keep documentation accurate and honest. Do not document planned work as
   completed.
3. When a feature introduces a genuine architectural or data change, document it
   before or alongside the change (once implementation is authorized).
4. Do not create documentation unrelated to the current authorized task.

---

## 11. Honest Reporting

Report accurately:

- what was completed,
- what was **not** completed,
- what was tested and the actual results,
- any failing or skipped tests,
- what was **not** verified, and
- any uncertainty or assumption.

Overstating completion, hiding failures, or claiming tests that were not run is
a governance violation.

---

## 12. Protect Existing Work and User Changes

1. Do not discard, overwrite, reset, clean, rebase, or rewrite Git history.
2. Do not discard existing uncommitted or untracked work to obtain a "clean"
   state.
3. Distinguish your changes from pre-existing changes in reports.
4. Do not modify unrelated files or functionality.
5. Before changing or removing any existing file, confirm it belongs to this
   project and understand its purpose. Do not delete potentially useful work
   without a documented reason.

---

## 13. Inspect Before Changing; Warn Before Destructive Operations

1. Inspect the relevant existing files and understand the flow **before**
   editing.
2. Make the smallest change necessary and keep it traceable to an approved
   requirement.
3. Before any potentially destructive operation (data deletion, schema changes,
   irreversible migration, force operation, history rewrite), **stop, explain
   the risk and impact, and obtain approval** before proceeding.
4. Report incidental discoveries (unrelated bugs, risks, flaws) instead of fixing
   them without authorization.

---

## 14. CEAP-Specific Constraints Are Not Product Requirements

The following are properties of the existing CEAP system and are **not**
automatically requirements of this product. Do not assume, carry over, or
enforce them unless the requirements discovery process establishes them and the
product owner approves them:

- Native PHP, PDO, Bootstrap, and a no-framework design.
- The `grantees` table or any CEAP table, column, or relationship.
- The "80 appointments per date" capacity rule.
- The "one appointment per grantee" rule.
- CEAP's eligibility/masterlist verification workflow (DOB + CP number).
- CEAP's QR-token/QR-name attendance scheme.
- Any CEAP-specific status model (`BOOKED` / `COMPLETED` / `CANCELLED`) or
  reference-number scheme.

Business rules, capacity limits, eligibility models, and workflows for this
product are **discovery topics for Gate 1**, not inherited defaults.

---

## 15. Docker and Additional Dependencies

- Docker is optional and adopted only if its benefits justify the added
  complexity, with a documented purpose and justification, and product-owner
  approval (D-023, D-032, D-036).
- Any additional dependency, service, or technology requires a documented
  purpose and justification before adoption.
- Do not install or add dependencies during documentation or governance tasks.

---

## 16. Stop Conditions

Stop and escalate to the product owner when:

- a required decision is unresolved,
- a change would exceed authorized scope,
- a security, privacy, or access control would need to be weakened or bypassed,
- a database, migration, or deployment change is required without approval,
- a destructive operation would be performed,
- documents (including this file) conflict, or
- the production CEAP system could be affected in any way.

---

## 17. Approval

This file is a project instruction artifact, not an approval. It does not
authorize implementation. Changes to it require product-owner review.

Gate 0 remains **IN PROGRESS**. Gate 1 remains **NOT STARTED**. Implementation
remains **NOT AUTHORIZED**.
