# Decision Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | Draft — pending product-owner approval |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-15 |
| Revision | 0.2 (revised) |
| Owner | Product Owner |

This register records decisions with unique IDs, status, date (where known),
rationale, consequences, and required approver. Decision history is preserved:
a provisional decision is never silently promoted to approved.

---

## 1. Status Definitions

| Status | Meaning |
|---|---|
| APPROVED BASELINE | Explicitly provided in the approved planning baseline; in force. |
| PROVISIONAL | Adopted for planning only; requires confirmation before it can be relied upon. |
| PROPOSED (PO CONFIRMATION) | Proposed; requires explicit product-owner confirmation before it is in force. |
| OPEN / DISCOVERY | Not decided; must be resolved through discovery (typically Gate 1). |
| HISTORICAL — UNRECOVERABLE | Referenced historically; original content not currently available. |

An unresolved decision must never be marked approved.

---

## 2. Historical Decisions (D-001 – D-018)

The baseline referenced existing decisions **D-001 through D-018**. Their content
was **not found** in the current project context or in existing documentation
(searched repository-wide; no D-001–D-018 records exist). Per instruction, their
contents have **not** been invented.

| ID range | Status | Note |
|---|---|---|
| D-001 – D-018 | HISTORICAL — UNRECOVERABLE | Identifiers reserved. Contents must be supplied by the product owner or recovered from the original source. Must not be reconstructed or guessed. |

New decisions therefore begin at **D-019**. If the originals are recovered, add
them here without renumbering. **Recovery is not an automatic blocker**; it is
only a blocker if a missing decision is required to resolve a current requirement
or risk (see Q-017).

---

## 3. Approved Baseline Decisions

Dates of the original decisions are not known; the date shown is this register's
recording date.

| ID | Decision | Status | Date | Rationale | Consequences | Approver |
|---|---|---|---|---|---|---|
| D-019 | The product is a separate, independent commercial product, distinct from the production CEAP Appointment System. | APPROVED BASELINE | 2026-10-15 | Avoids conflating a commercial product with a live system. | CEAP code/schema is not the product specification. | Product Owner |
| D-020 | The product is installed independently per client organization and is **not** a shared multi-tenant SaaS. Reopening multi-tenancy requires a formal change review (architecture, security, data isolation, operations, commercial scope). | APPROVED BASELINE | 2026-10-15 | Per-client isolation simplifies data boundaries, security, and operations. | Architecture supports per-installation configuration; no shared-tenant data model. | Product Owner |
| D-021 | The product must be reusable, secure, maintainable, and configurable. | APPROVED BASELINE | 2026-10-15 | Product qualities are requirements, not aspirations. | Design decisions are evaluated against these qualities. | Product Owner |
| D-022 | Preferred technology direction: Laravel, Blade, Tailwind CSS, MariaDB, Git and GitHub, automated testing. | APPROVED BASELINE | 2026-10-15 | Standard, maintainable, testable stack; version control via Git/GitHub. | Implementation uses this direction unless changed by approval. Versions/decisions are D-031, Q-007. | Product Owner |
| D-023 | Docker may be adopted **only if** its benefits justify the added complexity. | APPROVED BASELINE | 2026-10-15 | Containerization is optional and evidence-driven. | Adoption requires documented justification (D-032). | Product Owner |
| D-024 | The cloned CEAP project is a reference for existing behavior only, not an architecture or database specification. | APPROVED BASELINE | 2026-10-15 | Prevents inappropriate coupling. | CEAP schema/flows must not be copied as the product design. | Product Owner |
| D-025 | The production CEAP application, repository, database, credentials, configuration, and deployment must remain untouched. | APPROVED BASELINE | 2026-10-15 | Protects a live production system. | No interaction with production CEAP in any gate. | Product Owner |
| D-026 | Gate 0 documentation is planning and governance only; implementation is not authorized by its existence. | APPROVED BASELINE | 2026-10-15 | Documents do not self-authorize work. | No code, dependency, schema, or deployment changes until explicitly authorized. | Product Owner |
| D-027 | The product owner retains final approval authority over scope, architecture, security exceptions, releases, and gate transitions. | APPROVED BASELINE | 2026-10-15 | Single accountable decision maker. | No gate advances or exception is granted without product-owner approval. | Product Owner |
| D-028 | AI coding tools work only within explicitly authorized scope and may not make unapproved architecture, security, database, deployment, or scope changes. | APPROVED BASELINE | 2026-10-15 | Controls AI-generated change risk. | AI output is limited and human-approved; AI may not advance a gate. | Product Owner |
| D-029 | Engineering priorities: **correctness and data integrity are critical; security and privacy are mandatory design concerns; maintainability, usability, and testability must be considered throughout.** | APPROVED BASELINE | 2026-10-15 | Establishes an order for trade-offs. | Prioritization follows this order; security/privacy cannot be traded away. | Product Owner |
| D-030 | Initial user categories: public users/applicants; authorized administrators and staff; product owner/system operator; and the client organization for each installation. | APPROVED BASELINE | 2026-10-15 | Captures the known user set. | Public, admin, and operator concerns must remain separable. Flows remain open (Q-002–Q-004, Q-009, Q-018). | Product Owner |
| D-034 | The product owner/system operator is **not** automatically an administrator of every client installation and must **not** have unrestricted access to client data by default. | APPROVED BASELINE | 2026-10-15 | Protects client data and independence. | Operational access must be explicitly defined, authorized, and audited. | Product Owner |
| D-035 | The product must have its own independent database and schema. It must never connect to, import into, migrate, modify, or operate against the production CEAP database. | APPROVED BASELINE | 2026-10-15 | Absolute separation from production CEAP. | Its own database is created only when separately authorized. | Product Owner |
| D-036 | Additional frameworks, infrastructure, services, or technologies require a documented purpose and justification. | APPROVED BASELINE | 2026-10-15 | Avoids unnecessary complexity and dependency sprawl. | Any addition must be justified before adoption. | Product Owner |
| D-038 | Critical unresolved security or data-integrity defects block release. A generic risk-acceptance statement must not bypass mandatory security, legal, or data-protection requirements. | APPROVED BASELINE | 2026-10-15 | Protects users and clients. | Release cannot proceed with unresolved critical defects; risk acceptance requires explicit product-owner approval with recorded justification and scope. | Product Owner |

> Note: D-037 is intentionally unused to preserve numbering stability for future
> insertions; no meaning is implied by the gap.

---

## 4. Provisional Decisions

Adopted for planning only; must not be treated as final.

| ID | Decision | Status | Date | Rationale | Consequences | Approver |
|---|---|---|---|---|---|---|
| D-031 | Exact dependency and runtime versions, and implementation details, remain subject to review. | PROVISIONAL | 2026-10-15 | Premature pinning constrains design. | Versions must be agreed before Gate 4 (Q-007) and confirmed before release (Gate 6). | Product Owner |
| D-032 | Docker adoption is deferred until a documented justification exists. | PROVISIONAL | 2026-10-15 | Avoids unneeded operational complexity. | A justification artifact is required if Docker is proposed. | Product Owner |
| D-033 | Gate 0 deliverables are documentation and governance only. | PROVISIONAL | 2026-10-15 | Gate 0 is governance setup. | No implementation in Gate 0; confirm at Gate 0 approval. | Product Owner |

---

## 5. Proposed Decisions Requiring Product-Owner Confirmation

Not in force. Listed so they are not mistaken for approved.

| ID | Item awaiting confirmation | Status | Blocks |
|---|---|---|---|
| P-001 | Approval of the Gate 0 documents (Charter, Governance, Decision Register, Gate Register). | PROPOSED (PO CONFIRMATION) | Gate 0 exit / Gate 1 entry |
| P-002 | Approval or amendment of the proposed product vision (Charter §2). | PROPOSED (PO CONFIRMATION) | Gate 1 |
| P-003 | Approval or amendment of the proposed product goals (Charter §3). | PROPOSED (PO CONFIRMATION) | Gate 1 |
| P-004 | Approval or amendment of the proposed success criteria (Charter §4). | PROPOSED (PO CONFIRMATION) | Gate 1 |
| P-005 | Confirmation of D-031 (version pinning). | PROPOSED (PO CONFIRMATION) | Gate 2 / Gate 4 |
| P-006 | Confirmation or rejection of D-032 (Docker adoption criteria). | PROPOSED (PO CONFIRMATION) | Gate 2 / Gate 6 |
| P-007 | Confirmation of D-033 (Gate 0 documentation-only). | PROPOSED (PO CONFIRMATION) | Gate 0 exit |
| P-008 | Confirmation of the added baseline decisions D-034, D-035, D-036, D-038 recorded in this revision. | PROPOSED (PO CONFIRMATION) | Gate 0 exit |

---

## 6. Open Questions Requiring Discovery

Not decided. Resolved through discovery (primarily Gate 1) and recorded here as
decisions once answered. Questions are grouped for discovery; grouping does not
imply priority or approval.

### 6.1 Market and Commercial

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-001 | Which initial customer segment will the product target (to be discovered and validated)? | Gate 1 | OPEN / DISCOVERY |
| Q-010 | What is the commercial model, pricing, and support commitment, if any? | Gate 1 | OPEN / DISCOVERY |

### 6.2 Users, Access, and Authentication

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-002 | Is public self-registration supported? | Gate 1 | OPEN / DISCOVERY |
| Q-003 | Is public login supported, and by what mechanism? | Gate 1 / Gate 2 | OPEN / DISCOVERY |
| Q-004 | Is guest booking (no account) supported? | Gate 1 | OPEN / DISCOVERY |
| Q-009 | How are administrator/staff accounts authenticated and provisioned? | Gate 1 / Gate 2 | OPEN / DISCOVERY |
| Q-018 | What administrator/staff permission and role model is required? | Gate 1 / Gate 2 | OPEN / DISCOVERY |

### 6.3 Scheduling and Business Rules

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-005 | What is the appointment booking workflow and its business rules? | Gate 1 | OPEN / DISCOVERY |
| Q-019 | What appointment types, schedules, dates, time slots, and capacity rules apply? | Gate 1 | OPEN / DISCOVERY |
| Q-020 | What cancellation and rescheduling rules apply? | Gate 1 | OPEN / DISCOVERY |
| Q-021 | How must duplicate-booking and concurrency be prevented? | Gate 1 / Gate 2 | OPEN / DISCOVERY |

### 6.4 Data, Privacy, and Integration

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-012 | Is importing and maintaining an eligibility population ("masterlist") required? (Not assumed mandatory.) | Gate 1 | OPEN / DISCOVERY |
| Q-023 | Is eligibility validation required, and how? | Gate 1 | OPEN / DISCOVERY |
| Q-015 | What are the privacy, data-retention, and auditability requirements? | Gate 1 / Gate 3 | OPEN / DISCOVERY |
| Q-013 | Are notifications (email/SMS) required? (Only if justified by requirements.) | Gate 1 | OPEN / DISCOVERY |
| Q-014 | What reporting, export, and operational-monitoring capabilities are required? (Only if justified.) | Gate 1 | OPEN / DISCOVERY |

### 6.5 Non-Functional and User Experience

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-016 | What are the performance, capacity, and concurrency expectations? | Gate 1 / Gate 2 | OPEN / DISCOVERY |
| Q-022 | What reliability and availability targets apply? | Gate 1 / Gate 2 | OPEN / DISCOVERY |
| Q-011 | What accessibility and localization requirements apply? | Gate 1 / Gate 2 | OPEN / DISCOVERY |

### 6.6 Platform and Delivery

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-007 | What exact dependency and runtime versions are used, and how are dependencies managed? | Gate 2 / Gate 4 | OPEN / DISCOVERY |
| Q-008 | What deployment, hosting, backup, restoration, maintenance, and support model applies? | Gate 2 / Gate 6 | OPEN / DISCOVERY |

### 6.7 Product Model and Historical

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-006 | Will multi-tenancy ever be required? (Outside baseline; requires formal change review per D-020.) | Gate 1 | OPEN / DISCOVERY |
| Q-017 | What was the content of historical decisions D-001 – D-018? | Gate 0 / Gate 1 | OPEN / DISCOVERY |

---

## 7. Register Change Log

| Date | Change | By |
|---|---|---|
| 2026-10-15 | Initial register created. D-001–D-018 recorded as HISTORICAL — UNRECOVERABLE. D-019–D-030 approved baseline. D-031–D-033 provisional. Q-001–Q-017 opened. P-001–P-006 pending. | Gate 0 documentation task |
| 2026-10-15 | Revision 0.2. Updated D-020 (formal change review for multi-tenancy), D-022 (added GitHub), D-029 (privacy mandatory), D-030 (operator + client categories). Added baseline D-034 (operator access boundary), D-035 (independent database / never CEAP DB), D-036 (technology justification), D-038 (critical defects block release). Reorganized open questions into discovery categories; added Q-018–Q-023. Split product goals (P-003) from success criteria (P-004); added P-008 for new decisions. | Gate 0 documentation revision |

---

## 8. Limitations

- Historical decisions D-001 – D-018 remain unrecoverable from available project
  materials. This does not block progress unless their absence creates a
  material, unresolved requirement or risk.
- All statuses other than APPROVED BASELINE are proposals or open items and must
  not be treated as approved.

---

## 9. Approval

This register is **DRAFT and NOT APPROVED**. It contains no approvals beyond the
pre-existing approved planning baseline.

| Approver | Role | Decision | Date |
|---|---|---|---|
| — | Product Owner | Pending | — |
