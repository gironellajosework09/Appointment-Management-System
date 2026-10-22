# Decision Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | Approved as a Gate 0 baseline artifact (P-001) — 2026-10-22 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 0.6 (Gate 0 closure recorded) |
| Owner | Product Owner |

This register records decisions with unique IDs, status, date (where known),
rationale, consequences, and required approver. Decision history is preserved:
a provisional decision is never silently promoted to approved.

---

## 1. Status Definitions

| Status | Meaning |
|---|---|
| APPROVED BASELINE | Explicitly provided in the product-owner-provided planning baseline; treated as in force for planning purposes. Approval of this register as an artifact is tracked separately (P-001). |
| PROVISIONAL | Adopted for planning only; requires confirmation before it can be relied upon. |
| PROPOSED (PO CONFIRMATION) | Proposed; requires explicit product-owner confirmation before it is in force. |
| OPEN / DISCOVERY | Not decided; must be resolved through discovery (typically Gate 1). |
| NOT FOUND IN INSPECTED SCOPE — PROVENANCE UNVERIFIED | Referenced historically; not found in the inspected repository or its available Git history; the original source has not been inspected, so content and original status remain unverified. |
| RESOLVED AS REDUNDANT | Requested confirmation of principles already recorded as APPROVED BASELINE; introduces no additional decision. |
| RESOLVED (OWNER CONFIRMED) | Confirmed by the product owner; no longer outstanding. |

An unresolved decision must never be marked approved.

---

## 2. Historical Decisions (D-001 – D-018)

The baseline referenced existing decisions **D-001 through D-018**. Their content
was **not found** in the inspected repository or in its available Git history
(searched repository-wide; no D-001–D-018 records exist). The original source of
these records has **not** been inspected, so their contents and original status
remain **unverified**. Per instruction, their contents have **not** been invented.

| ID range | Status | Note |
|---|---|---|
| D-001 – D-018 | NOT FOUND IN INSPECTED SCOPE — PROVENANCE UNVERIFIED | Identifiers reserved. Not found in the inspected repository or its available Git history; the original source has not been inspected, so their contents and original status remain unverified. Contents must be supplied by the product owner from the original source. Must not be reconstructed or guessed. |

New decisions therefore begin at **D-019**. If the originals are recovered, add
them here without renumbering. **Recovery is not an automatic blocker**; it is
only a blocker if a missing decision is required to resolve a current requirement
or risk (see Q-017).

---

## 3. Approved Baseline Decisions

Dates of the original decisions are not known; the date shown is this register's
recording date, not an approval date. A confirmation date is recorded as known only
where it is stated explicitly; it is never inferred.

| ID | Decision | Status | Date | Rationale | Consequences | Approver |
|---|---|---|---|---|---|---|
| D-019 | The product is a separate, independent commercial product, distinct from the production CEAP Appointment System. | APPROVED BASELINE | 2026-10-15 | Avoids conflating a commercial product with a live system. | CEAP code/schema is not the product specification. | Product Owner |
| D-020 | The product is installed independently per client organization and is **not** a shared multi-tenant SaaS. Reopening multi-tenancy requires a formal change review (architecture, security, data isolation, operations, commercial scope). | APPROVED BASELINE | 2026-10-15 | Per-client isolation simplifies data boundaries, security, and operations. | Architecture supports per-installation configuration; no shared-tenant data model. | Product Owner |
| D-021 | The product must be reusable, secure, maintainable, and configurable. | APPROVED BASELINE | 2026-10-15 | Product qualities are requirements, not aspirations. | Design decisions are evaluated against these qualities. | Product Owner |
| D-022 | Preferred technology direction: Laravel, Blade, Tailwind CSS, MariaDB, Git and GitHub, automated testing. | APPROVED BASELINE | 2026-10-15 | Standard, maintainable, testable stack; version control via Git/GitHub. | Implementation uses this direction unless changed by approval. Versions/decisions are D-031, Q-007. | Product Owner |
| D-023 | Docker may be adopted **only if** its benefits justify the added complexity; adoption requires a documented purpose and justification, and appropriate product-owner approval (D-036). | APPROVED BASELINE | 2026-10-15 | Containerization is optional and evidence-driven. | Docker is not automatically required or approved. Adoption requires a documented purpose, justification, and product-owner approval (D-032, D-036). | Product Owner |
| D-024 | The cloned CEAP project is a reference for existing behavior only, not an architecture or database specification. | APPROVED BASELINE | 2026-10-15 | Prevents inappropriate coupling. | CEAP schema/flows must not be copied as the product design. | Product Owner |
| D-025 | The production CEAP application, repository, database, credentials, configuration, and deployment must remain untouched. | APPROVED BASELINE | 2026-10-15 | Protects a live production system. | No interaction with production CEAP in any gate. | Product Owner |
| D-026 | Gate 0 documentation is planning and governance only; implementation is not authorized by its existence. | APPROVED BASELINE | 2026-10-15 | Documents do not self-authorize work. | No code, dependency, schema, or deployment changes until explicitly authorized. | Product Owner |
| D-027 | The product owner retains final approval authority over scope, architecture, security exceptions, releases, and gate transitions. | APPROVED BASELINE | 2026-10-15 | Single accountable decision maker. | No gate advances or exception is granted without product-owner approval. | Product Owner |
| D-028 | AI coding tools work only within explicitly authorized scope and may not make unapproved architecture, security, database, deployment, or scope changes. | APPROVED BASELINE | 2026-10-15 | Controls AI-generated change risk. | AI output is limited and human-approved; AI may not advance a gate. | Product Owner |
| D-029 | Engineering priorities: **correctness and data integrity are critical; security and privacy are mandatory design concerns; maintainability, usability, and testability must be considered throughout.** | APPROVED BASELINE | 2026-10-15 | Establishes an order for trade-offs. | Prioritization follows this order; security/privacy cannot be traded away. | Product Owner |
| D-030 | Initial user categories: public users/applicants; authorized administrators and staff; product owner/system operator; and the client organization for each installation. | APPROVED BASELINE | 2026-10-15 | Captures the known user set. | Public, admin, and operator concerns must remain separable. Flows remain open (Q-002–Q-004, Q-009, Q-018). | Product Owner |
| D-033 | Gate 0 deliverables are documentation and governance only; application implementation is not authorized during Gate 0. | APPROVED BASELINE | 2026-10-15 | Gate 0 is governance setup. | No implementation in Gate 0; confirmed by the product owner. | Product Owner |
| D-034 | The product owner/system operator is **not** automatically an administrator of every client installation and must **not** have unrestricted access to client data by default. | APPROVED BASELINE | 2026-10-15 | Protects client data and independence. | Operational access must be explicitly defined, authorized, and audited. | Product Owner |
| D-035 | The product must have its own independent database and schema. It must never connect to, import into, migrate, modify, or operate against the production CEAP database. | APPROVED BASELINE | 2026-10-15 | Absolute separation from production CEAP. | Its own database is created only when separately authorized. | Product Owner |
| D-036 | Additional frameworks, infrastructure, services, or technologies require a documented purpose, justification, and appropriate approval before adoption. | APPROVED BASELINE | 2026-10-15 | Avoids unnecessary complexity and dependency sprawl. | Any addition must be justified and approved before adoption. | Product Owner |
| D-038 | Critical unresolved security or data-integrity defects block release. A generic risk-acceptance statement must not bypass mandatory security, legal, or data-protection requirements. | APPROVED BASELINE | 2026-10-15 | Protects users and clients. | Release cannot proceed with unresolved critical defects; risk acceptance requires explicit product-owner approval with recorded justification and scope. | Product Owner |

> Note: D-037 is intentionally unused to preserve numbering stability for future
> insertions; no meaning is implied by the gap.

> Clarification (2026-10-22): **D-023 is the controlling approved decision on
> Docker.** It permits adoption only on documented justification and appropriate
> product-owner approval. D-032 remains PROVISIONAL and records the deferred
> adoption criteria; it does not authorize adoption and does not replace D-023.
> Docker is not part of the confirmed technology direction (Charter §9).

> Clarification (2026-10-22): D-024 refers to a possible reference copy of CEAP
> source. No CEAP source copy was found in the inspected repository or its
> available Git history (see `docs/evidence/GATE-0-EVIDENCE.md`); D-024's reference
> is conditional and does not assert that such a copy is present here.

> Confirmation record: the product owner explicitly confirmed D-034, D-035, D-036,
> and D-038 as approved baseline decisions. D-036 was updated to require a
> documented purpose, justification, and appropriate approval before adoption.
> **Confirmation date: not recorded** — the Date column above shows the recording
> date, not an approval date.

> Confirmation record: the product owner confirmed D-033 (Gate 0 is documentation
> and governance only; application implementation is not authorized during Gate 0).
> D-033 is recorded as approved baseline and P-007 is resolved accordingly.
> **Confirmation date: not recorded** — the Date column above shows the recording
> date, not an approval date.

---

## 4. Provisional Decisions

Adopted for planning only; must not be treated as final.

| ID | Decision | Status | Date | Rationale | Consequences | Approver |
|---|---|---|---|---|---|---|
| D-031 | Exact dependency and runtime versions, and implementation details, remain subject to review. | PROVISIONAL | 2026-10-15 | Premature pinning constrains design. | Gates before Gate 4 record provisional compatibility constraints only; exact versions are finalized at Gate 4 (Q-007) and confirmed before release (Gate 6). | Product Owner |
| D-032 | Docker adoption is deferred until a documented purpose and justification exist and appropriate product-owner approval is granted. | PROVISIONAL | 2026-10-15 | Avoids unneeded operational complexity. | Provisional record of the deferred adoption criteria; D-023 is the controlling approved decision. Docker is not automatically required or approved (D-023, D-036). | Product Owner |

---

## 5. Product-Owner Confirmation Items and Dispositions

This section records outstanding and closed product-owner confirmation items.
Outstanding items are not in force and must not be mistaken for approved. Resolved
items record the disposition only; they confer no approval on anything else.

| ID | Item | Status | Blocks |
|---|---|---|---|
| P-001 | Approval of the Gate 0 baseline artifacts (Charter, Engineering Governance, Decision Register, Gate Register, and `AGENTS.md`). Accepting `AGENTS.md` as an artifact is **not** adoption of its instructions. | RESOLVED (OWNER CONFIRMED) — approved 2026-10-22 | — |
| P-002 | Approval or amendment of the proposed product vision (Charter §2). | PROPOSED (PO CONFIRMATION) | Gate 1 |
| P-003 | Approval or amendment of the proposed product goals (Charter §3). | PROPOSED (PO CONFIRMATION) | Gate 1 |
| P-004 | Approval or amendment of the proposed success criteria (Charter §4). | PROPOSED (PO CONFIRMATION) | Gate 1 |
| P-005 | Confirmation of D-031 (version pinning). | PROPOSED (PO CONFIRMATION) | Gate 2 / Gate 4 |
| P-006 | Confirmation or rejection of D-032 (Docker adoption criteria). | PROPOSED (PO CONFIRMATION) | Gate 2 / Gate 6 |
| P-007 | Confirmation of D-033 (Gate 0 documentation-only). | RESOLVED (OWNER CONFIRMED) | — |
| P-008 | Confirmation of the added baseline decisions D-034, D-035, D-036, D-038 recorded in this revision. | RESOLVED AS REDUNDANT | — |

> **P-008 — RESOLVED AS REDUNDANT (product-owner confirmed).** The product owner
> confirmed the four baseline decisions D-034, D-035, D-036, and D-038. P-008 only
> requested that confirmation and introduced no additional decision, so it is
> resolved as redundant and does **not** block Gate 0.

> **P-001 — RESOLVED (approved 2026-10-22).** The product owner approved all five
> Gate 0 baseline artifacts on 2026-10-22, accepting `AGENTS.md` as an artifact
> without adopting its instructions. No approval time and no separate adoption of
> `AGENTS.md`'s instructions were recorded. The approval was given in the ChatGPT
> conversation of 2026-10-22 and is recorded here on the product owner's
> instruction. P-001 no longer blocks Gate 0 exit. Gate 0 was closed on
> 2026-10-22 after the evidence record was signed off and the transition was
> approved (Gate Register §3, §13); Gate 1 remains unauthorized and its entry
> requirements unmet. P-007 remains resolved (D-033). **P-002,
> P-003, and P-004 remain unresolved product-owner decisions and block Gate 1
> entry.**

> **P-001 — `AGENTS.md` as an artifact, not as adopted instructions.** The recorded
> P-001 artifact set consists of five artifacts and includes `AGENTS.md`; that
> scope is preserved. Acceptance of `AGENTS.md` as a P-001 artifact is **separate
> from adoption of its instructions**: the 2026-10-22 P-001 approval accepts it as
> part of the reviewed baseline without bringing its instructions into force, and
> those instructions remain **not adopted**. Adoption of its instructions is a
> separate product-owner decision and is **not** a prerequisite for P-001 approval
> or for Gate 0 closure. The Gate 0 evidence record is a separate Gate 0 exit
> requirement and is **not** part of the five-artifact P-001 scope.

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

## 7. Security Exceptions (`SE-###`)

An exception to a security control is authorized here and evidenced at the gate
that granted it. This register records the authorization and its rationale; the
gate-specific evidence records detailed scope, controls, owner, expiry or review
condition, and closure.

| ID | Exception | Authorisation and rationale | Owner | Expiry / review | Status | Gate evidence |
|---|---|---|---|---|---|---|
| — | No security exception has been requested, authorized, or recorded. | — | — | — | — | — |

Rules:

- Identifiers are `SE-###`, independent of decision IDs. They are never reused or
  renumbered.
- An `SE-###` entry records the product-owner authorization and the rationale for
  it. Where the authorization date was not captured, the entry says so.
- Detailed scope, controls, owner, expiry or review condition, and closure are
  recorded in the gate-specific evidence (Gate 3 exception register).
- An exception never overrides a mandatory safety, legal, or data-protection
  requirement (Charter §14, Engineering Governance §13).
- Exceptions expire or are reviewed by their stated condition; they do not become
  permanent by default.

---

## 8. Register Change Log

| Date | Change | By |
|---|---|---|
| 2026-10-15 | Initial register created. D-001–D-018 recorded as NOT FOUND IN INSPECTED SCOPE — PROVENANCE UNVERIFIED. D-019–D-030 approved baseline. D-031–D-033 provisional. Q-001–Q-017 opened. P-001–P-006 pending. | Gate 0 documentation task |
| 2026-10-15 | Revision 0.2. Updated D-020 (formal change review for multi-tenancy), D-022 (added GitHub), D-029 (privacy mandatory), D-030 (operator + client categories). Added baseline D-034 (operator access boundary), D-035 (independent database / never CEAP DB), D-036 (technology justification), D-038 (critical defects block release). Reorganized open questions into discovery categories; added Q-018–Q-023. Split product goals (P-003) from success criteria (P-004); added P-008 for new decisions. | Gate 0 documentation revision |
| 2026-10-15 | Gate 0 governance corrections. Replaced the D-001–D-018 provenance label with an evidence-bounded label (not found in inspected scope; provenance unverified). Preserved D-034, D-035, D-036, D-038 as APPROVED BASELINE. Proposed P-008 as RESOLVED AS REDUNDANT. Q-017 remains open. | Gate 0 governance correction task |
| 2026-10-15 | Owner-authorized corrections. Recorded explicit product-owner confirmation of D-034, D-035, D-036, D-038 as approved baseline; updated D-036 to require documented purpose, justification, and appropriate approval; confirmed P-008 RESOLVED AS REDUNDANT (no longer blocks Gate 0). P-005/P-006 and Q-017 remain unresolved. | Gate 0 owner-authorized correction task |
| 2026-10-15 | Owner-authorized corrections. Confirmed D-033 (Gate 0 documentation/governance only) and moved it to APPROVED BASELINE; resolved P-007. Kept P-001 as the Gate 0 baseline-approval requirement; preserved P-002/P-003/P-004 as unresolved Gate 1 blockers. Aligned D-023 and D-032 with D-036 (documented purpose, justification, and appropriate product-owner approval for Docker). | Gate 0 owner-authorized correction task |
| 2026-10-22 | Revision 0.3, owner-authorized Gate 0 correction pass. Replaced the "approved planning baseline" with the product-owner-provided planning baseline; marked the D-033 – D-038 confirmation dates as not recorded; added D-023/D-032 (Docker) and D-024 (CEAP copy) clarifications without altering either decision's status; corrected the D-031 consequence; rewrote the §5 preamble and column; added the `SE-###` security-exception register and renumbered §§7–10; corrected the §10 approval statement so it no longer contradicts §3; recorded the unresolved `AGENTS.md` component of P-001. No decision status changed; P-001 remains pending. | Gate 0 correction pass |
| 2026-10-22 | P-001 approval recorded. Product owner approved all five Gate 0 baseline artifacts on 2026-10-22, accepting `AGENTS.md` as an artifact without adopting its instructions. P-001 set to RESOLVED (OWNER CONFIRMED); Gate 0 remains IN PROGRESS; the Gate 0 evidence record is not approved. | P-001 approval recording |
| 2026-10-22 | Gate 0 closure recorded. Gate 0 evidence record signed off by the product owner and Gate 0 transition approved on 2026-10-22 (no time recorded); Gate 0 is `COMPLETE (APPROVED)` in the Gate Register. Gate 1 not authorized; no implementation authorization. | Gate 0 finalization |
| 2026-10-22 | Revision 0.4, final Gate 0 correction pass. P-001 scope preserved at five artifacts including `AGENTS.md`; clarified that acceptance of the artifact is separate from adoption of its instructions, and that adoption is not a P-001 prerequisite. No decision status changed; P-001 remains pending. | Gate 0 final correction pass |

> **Change-log note (superseding clarification).** The initial 2026-10-15 entry
> was later supplemented: the D-001–D-018 provenance label was revised to the
> evidence-bounded wording, and P-008 was initially *proposed* as resolved and only
> later confirmed by the product owner. These are superseding clarifications; the
> original entries remain historical records and are not current status.

---

## 9. Limitations

- Historical decisions D-001 – D-018 were not found in the inspected repository or
  its available Git history; their provenance is unverified and the original source
  has not been inspected. This does not block progress unless their absence creates
  a material, unresolved requirement or risk (Q-017).
- All statuses other than APPROVED BASELINE are proposals or open items and must
  not be treated as approved.

---

## 10. Approval

This register was approved by the product owner as a Gate 0 baseline artifact
under P-001 on 2026-10-22. That approval accepts `AGENTS.md` as an artifact without
adopting its instructions. It did not itself close Gate 0 or approve the Gate 0
evidence record; the product owner signed off the evidence record and approved the
Gate 0 transition separately on 2026-10-22, and Gate 0 is `COMPLETE (APPROVED)`
(Gate Register §3, §13). Neither approval authorizes Gate 1 or any implementation.
The APPROVED BASELINE status of D-019 – D-030 derives from the
product-owner-provided planning baseline; no separate artifact-level approval of
those decisions is recorded in this repository. The product-owner confirmations of
D-033, D-034, D-035, D-036, and D-038 remain as recorded, with confirmation dates
unrecorded.

| Approver | Role | Decision | Date |
|---|---|---|---|
| Product Owner | Product Owner | Approved as a Gate 0 baseline artifact (P-001) | 2026-10-22 |
