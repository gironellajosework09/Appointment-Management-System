# Decision Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | Approved as a Gate 0 baseline artifact (P-001) — 2026-10-22 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 1.12 (2026-11-01 — D-087 Checkpoint 6 provisional working-design acceptance recorded; no final architecture approval) |
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
| APPROVED (PO DECISION) | Explicitly approved by the product owner on the date recorded, after the Gate 0 baseline. Distinct from APPROVED BASELINE (baseline-provided) and from a confirmation of an existing proposal. |

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
| D-039 | `AGENTS.md` is adopted as the project's concise agent entry point, replacing the superseded `AGENTS.md`; it defers to the approved governance documents and restates neither gate status nor engineering rules. Adoption does not re-approve the superseded content, does not retroactively adopt that content for the Gate 0 period, does not approve the proposed accessibility standard (P-009), and changes no gate status. | APPROVED (PO DECISION) | 2026-10-23 — supplied by the Product Owner; not inferred from any timestamp, file modification time, or Git history | A single authoritative entry point removes the duplicated-rules drift that produced contradictory gate statuses. | The entry point must be updated when governance changes; the lineage note lives in `docs/evidence/GATE-0-EVIDENCE.md` §7; accessibility expectations await P-009. | Product Owner |
| D-040 | Gate 1 Checkpoint 1 is accepted solely as a provisional five-document working baseline for continued Gate 1 discovery, based on the reported verification. The five documents are the Project Charter, Requirements Governance, Requirements Specification, Requirements Traceability, and Stakeholder Validation Plan as they stood for Checkpoint 1. This decision does not approve Charter Revision 1.0, any individual FR/NFR/BR/UJ/AC requirement, any effective approved requirement version, stakeholder validation, architecture, implementation, or Gate 1 exit. The NFR-002 free-text validation cell, the A-1 table heading, and the partial S-4/R-6 mapping remain open and non-blocking. | APPROVED (PO DECISION) | 2026-10-28 — supplied by the Product Owner as the decision date | Records the Product Owner's explicit checkpoint-level acceptance without converting any draft into an approved requirement or gate approval. | All five documents remain working drafts; requirement records remain DRAFT with effective approved version None yet; stakeholder validation and evidence remain absent; Gate 1 remains IN PROGRESS and is not approved for exit; implementation remains unauthorized. | Product Owner |
| D-041 | The initial target market is small-to-medium appointment-driven service businesses with staffed front desks. Government/public-sector organizations are secondary future targets, and enterprise capabilities are deferred. | APPROVED (PO DECISION) | Approval date not recorded | Selects a focused commercial discovery and MVP segment while retaining future-market evidence as context. | Q-001's market selection is resolved; representative validation of the selected segment remains required and government-specific rules are not MVP requirements. | Product Owner |
| D-042 | The MVP includes configurable appointment availability, guest and staff-assisted booking, cancellation and rescheduling under client policy, capacity and duplicate protection, QR appointment lookup, attendance/status handling, role boundaries, auditable supervisor exceptions, clear confirmation, printable daily rosters, and post-outage reconciliation. Automated waitlists, payments/deposits, public accounts, advanced queue displays, advanced reporting/analytics, broad external integrations, government-specific eligibility, and enterprise capabilities are deferred unless separately approved. | APPROVED (PO DECISION) | Approval date not recorded | Defines the smallest coherent front-desk MVP supported by the approved direction and discovery evidence. | Deferred capabilities retain their identifiers and rationale; this decision selects no architecture or third-party service. | Product Owner |
| D-043 | Scheduling, service duration, buffers, resource assignment, operating periods, and capacity are client-configurable policies. The universal invariant is that ordinary booking cannot exceed effective configured capacity; policy values and resource models remain unresolved until configured and later designed. | APPROVED (PO DECISION) | Approval date not recorded | Discovery shows material variation among service businesses. | No fixed daily limit or CEAP rule may be hardcoded; Gate 2 must design enforcement without changing the approved invariant. | Product Owner |
| D-044 | Duplicate-booking prevention is mandatory and must remain effective under concurrent requests. The duplicate identity key, comparison window, and approved exceptions are client-policy parameters that remain unresolved; rejected or failed attempts must not create partial bookings. | APPROVED (PO DECISION) | Approval date not recorded | Protects booking integrity without inventing one identity policy for every client. | Detailed identity matching remains open, while atomic duplicate and capacity enforcement is mandatory. | Product Owner |
| D-045 | A QR code is an appointment lookup and verification aid, not proof of a person's identity and not automatic evidence of attendance. Identity or entitlement checks, where required, are separate staff procedures; QR output and lookup results must minimize personal data. | APPROVED (PO DECISION) | Approval date not recorded | Prevents transferable QR presentations from being treated as identity credentials. | QR lookup, identity checking, staff confirmation, and attendance are distinct states/actions; QR technology and contents remain Gate 2 concerns. | Product Owner |
| D-046 | MVP booking supports guest booking without a public account, staff-assisted booking, and proxy booking that distinguishes the booker from the attendee. Public self-registration/login is deferred. Exact identity fields, proxy authorization evidence, and service-specific attendee-presence rules remain configurable or unresolved. | APPROVED (PO DECISION) | Approval date not recorded | Supports front-desk and customer realities without making public accounts an MVP dependency. | Guest, assisted, and proxy journeys enter the MVP; unnecessary personal data must not be collected. | Product Owner |
| D-047 | Front-desk staff may perform routine appointment and attendance work within assigned permissions; supervisors may approve defined exceptions; administrators configure an installation and provision authorized internal users; the product operator has no default client-data access. Authentication mechanisms and provisioning implementation are deferred to design, while server-side authorization and D-034 remain mandatory. | APPROVED (PO DECISION) | Approval date not recorded | Establishes least-privilege role boundaries needed for a coherent MVP. | D-034 is retained; shared credentials cannot satisfy individual accountability; exact permission granularity remains subject to requirements review and Gate 2 design. | Product Owner |
| D-048 | Capacity overrides and other policy exceptions require supervisor authority, a recorded reason, actor, time, affected appointment, and before/after outcome. Ordinary staff and public users cannot silently bypass invariants; exception types and any limits remain client-configurable. | APPROVED (PO DECISION) | Approval date not recorded | Allows necessary human exceptions without losing accountability or data integrity. | Override auditability is mandatory; no default grace period, cancellation window, priority class, or exception list is created. | Product Owner |
| D-049 | Every successful booking, cancellation, and rescheduling action must return a clear confirmation with the appointment reference, status, date/time, location or service context, and applicable instructions. A printable or screen-accessible confirmation is MVP scope. Automated external SMS, email, or messaging delivery and reminder campaigns are deferred until channels, consent, cost, and delivery expectations are separately approved. | APPROVED (PO DECISION) | Approval date not recorded | Immediate unambiguous outcomes are essential; external notification commitments add unresolved cost and privacy dependencies. | FR-010 is narrowed to core confirmation; no external provider or channel is selected. | Product Owner |
| D-050 | The MVP collects only data necessary for booking and front-desk operations; access follows least privilege; sensitive values are not exposed in QR presentations or printable rosters beyond operational need; audit and reconciliation records are protected. Exact retention/deletion periods, legal bases, notices, and jurisdiction-specific obligations remain open for qualified review and Product Owner decision. | APPROVED (PO DECISION) | Approval date not recorded | Establishes a privacy baseline without fabricating legal conclusions or retention periods. | Data minimization and access boundaries are requirements; VAL-004 and Gate 3 privacy/security review remain mandatory. | Product Owner |
| D-051 | MVP operational continuity uses a printable daily roster and structured post-outage reconciliation. The roster is a controlled fallback snapshot, not an offline database; reconciliation records the responsible actor and resolves conflicts without silently overwriting newer state. Offline creation or synchronization of new bookings is not approved. | APPROVED (PO DECISION) | Approval date not recorded | Meets the repeatedly observed paper-fallback need without prematurely selecting complex offline architecture. | Printable roster and reconciliation are in scope; full offline-first operation remains deferred. | Product Owner |
| D-052 | S-1–S-7 receive provisional measurable Gate 1 targets: clean configuration without core scheduling-code edits; complete installation/CEAP isolation; zero capacity or duplicate-rule violations under the later-approved concurrency test profile; complete approved authentication (including any scoped guest authentication), authorization, and server-side validation coverage for state changes; no known high- or critical-severity security findings at release; passing automated success/rejection/failure tests for every approved core workflow; and WCAG 2.2 AA for approved core public and administrative workflows. Test profiles, supported environments, evidence owners, and any code-coverage percentage remain subject to later approved design and testing. | APPROVED (PO DECISION) | Approval date not recorded | Makes the quality direction testable without inventing load, environment, or code-coverage values. | Targets are provisional and do not claim current conformance or testing. The referenced Accelerated Closure Report is not present in the repository, so no additional report-only numeric value is recorded. | Product Owner |
| D-053 | REC-001, BO-001, GOV-001, and CUS-001 are registered as EVD-001–EVD-004 discovery evidence with corrected provenance. BO-001 and GOV-001 are real interviews represented by AI-assisted summaries; CUS-001 consolidates several real-customer interviews and is not attributable to one individual; illustrative practitioner discussion and product strategy analysis are not stakeholder evidence. | APPROVED (PO DECISION) | Approval date not recorded | Preserves genuine research while preventing secondary analysis or composite text from being overstated. | Discovery evidence may partially support VAL activities but does not itself prove representative sampling, formal validation, or requirement approval. | Product Owner |
| D-054 | Engineering work should maximize efficiency without compromising correctness, security, data integrity, maintainability, testability, essential validation, or approved governance. | APPROVED (PO DECISION) | Approval date not recorded | Encourages the smallest effective process and change while retaining mandatory controls. | Engineering Governance records the principle; it creates no waiver, gate transition, architecture decision, or implementation authority. | Product Owner |
| D-055 | Q-010 is approved for deferral to Gate 6 (Release Readiness & Deployment Approval). Deferred scope is limited to detailed commercial pricing, licensing fees, and support-package pricing. D-020's separate-installation-per-client product model is preserved. Any deployment or support assumptions required for architecture must still be identified at the appropriate gate. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation conversation | Removes pricing and support-package pricing from Gate 1 scope without changing the approved product model or inventing commercial commitments. | Q-010 is deferred, not answered on pricing; no pricing, licensing, or support-package commitment is created. Architecture-required deployment/support assumptions remain for Gate 2, and support-package pricing for Gate 6. D-020 remains in force. | Product Owner |
| D-056 | Payment processing and deposit enforcement, including GCash, are deferred from MVP. No payment integration, deposit collection, or deposit enforcement is in MVP scope. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 consolidated stakeholder evidence conversation | Preserves the MVP boundary and avoids unapproved financial processing. | D-042's payments/deposits deferral is reaffirmed; deposit requests observed in discovery remain future scope only. | Product Owner |
| D-057 | Automated outbound messaging and SMS-based verification, including SMS, OTP, and automated confirmations, are deferred from MVP. Core screen-accessible or printable confirmation remains in MVP. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 consolidated stakeholder evidence conversation | Keeps confirmation local and avoids unapproved messaging or verification integrations. | D-049's external-delivery deferral is reaffirmed; no SMS/OTP provider or mechanism is selected. | Product Owner |
| D-058 | Automated waitlists and multiple-branch support are deferred from MVP. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 consolidated stakeholder evidence conversation | Preserves the single-installation, front-desk MVP boundary. | D-042's waitlist deferral is reaffirmed; multiple branches are future scope and do not reopen multi-tenancy (D-020). | Product Owner |
| D-059 | Duplicate booking supports configurable warning or blocking policies while preserving mandatory booking integrity and legitimate proxy/multiple-attendee scenarios. The identity key, comparison window, warning/blocking behavior, and permitted exceptions remain client-policy parameters. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 consolidated stakeholder evidence conversation | Allows client-appropriate duplicate handling without weakening the integrity invariant. | D-044 remains in force; prohibited duplicates still cannot complete, and no exact duplicate policy is invented. | Product Owner |
| D-060 | Applicable capacity and resource constraints include staff availability, physical-resource constraints, service durations, and preparation/cleanup buffers. These remain client-configurable policy values. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 consolidated stakeholder evidence conversation | Aligns the capacity invariant with observed service operations. | D-043 remains in force; no fixed capacity, buffer, or resource value is created. | Product Owner |
| D-061 | MVP supports secure account-free guest booking and authorized cancellation/rescheduling without mandatory public accounts. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 consolidated stakeholder evidence conversation | Reaffirms the account-free direction and the authorized change path. | D-046 and D-049 remain in force; exact authorization and identity-verification mechanisms remain Gate 2 design. | Product Owner |
| D-062 | Product extensibility direction: separate installation per client remains mandatory; approved core booking policies should be configurable without routine application-code changes; deferred capabilities may be implemented in future releases as optional features; client-specific enablement applies only after those features exist; deferred features are not implemented during MVP; no plugin framework, speculative infrastructure, or specific architectural pattern is mandated; Gate 2 evaluates configuration and extension boundaries. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 consolidated stakeholder evidence conversation | Records the approved direction without selecting architecture. | D-020 and NFR-004 remain in force; this decision creates no implementation authority and no deferred feature enters MVP. | Product Owner |
| D-063 | Batch outage reconciliation: after service restoration, authorized staff shall be able to reconcile multiple paper-recorded attendance and walk-in updates in one structured workflow. The workflow preserves conflict detection, booking and capacity integrity, authorization, auditability, and a clear path for records that cannot be reconciled automatically. Offline booking creation or synchronization is not introduced. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-execution conversation | Allows realistic catch-up after an outage without adopting offline-first architecture or weakening integrity. | D-051 and FR-017/BR-009 are refined to cover batch reconciliation; exact roster fields and conflict procedure remain open. | Product Owner |
| D-064 | Streamlined staff-assisted walk-in: authorized staff shall be able to create a walk-in booking through a streamlined workflow that requires only the information necessary under the applicable booking and service policies, while preserving required identity information, capacity enforcement, duplicate detection, authorization, validation, and auditability. No fixed completion-time target is approved. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-execution conversation | Reduces front-desk friction for observed walk-in demand without weakening booking controls. | FR-013/BR-006/AC-010 are refined; the minimum walk-in field set remains a client-policy parameter. | Product Owner |
| D-065 | Screenshot-friendly confirmation: each successful booking, cancellation, or rescheduling shall produce an accessible, readable, printable, and screenshot-friendly confirmation showing the booking reference, service, date and time, location and arrival instructions, QR/reference presentation guidance, and booking-management instructions. Mandatory SMS or email delivery is not introduced. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-execution conversation | Makes the confirmation usable in the observed customer channels without committing to an external provider. | D-049 and D-057 remain in force; FR-010/AC-002 are refined; screen-accessible and printable remain required. | Product Owner |
| D-066 | Alternative availability: when a preferred date or slot is unavailable, the product shall offer available alternatives within the current client installation, based on actual availability and capacity checks. Waitlists, cross-branch search, and multi-branch support are not introduced. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-execution conversation | Preserves a useful booking outcome without reopening deferred waitlist or multi-branch scope. | New FR-018/AC-013 record the capability; search scope remains a client-policy parameter; D-058 and D-020 remain in force. | Product Owner |
| D-067 | The initial operating profile is 20–100 appointments per day per client installation. This is a planning and verification profile, not a hard booking limit or maximum supported capacity; the separate-installation-per-client model remains mandatory. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Provides a measurable initial workload profile without converting daily volume into a booking cap or concurrent-user assumption. | NFR-008 and S-3 use the profile for later verification; client-configured capacity and D-020 remain in force. | Product Owner |
| D-068 | The MVP workflow inventory covers public guest booking, proxy booking, staff-assisted booking, walk-in registration, availability and alternative-date checking, cancellation/rescheduling, QR/reference lookup and attendance verification, attendance/arrival status management, supervisor-authorized overrides, printable daily rosters, post-outage batch reconciliation, and staff administration/configurable business policies. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Establishes the core-workflow inventory needed for measurable testing and validation without adding redundant requirement identifiers. | Existing FR-001–FR-018, UJ-001–UJ-005, BR-001–BR-009, and AC-001–AC-013 remain the requirement records; deferred features remain excluded. | Product Owner |
| D-069 | Supported environments for applicable desktop and mobile core workflows are modern Google Chrome, Microsoft Edge, Mozilla Firefox, and Apple Safari. Verification uses a maintainable current-and-previous-stable-major-release policy for each supported browser family and representative desktop/mobile experiences; WCAG 2.2 AA remains the accessibility target. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Defines a maintainable browser policy without selecting test infrastructure or claiming current conformance. | NFR-007, AC-006, and S-7 require later verification across the approved browser families and applicable device experiences; exact OS matrix remains a test-planning detail. | Product Owner |
| D-070 | Performance verification shall include a normal profile of 20–100 appointments per day per client installation, a peak profile representing a busy 100-appointment day with applicable staff-assisted and walk-in activity, and contention testing with 50 simultaneous valid booking requests competing for one remaining unit of appointment capacity. Under the contention precondition, exactly one request succeeds, all other requests receive safe clear outcomes, and no over-capacity, duplicate-rule violation, partial, or orphaned booking is created. Daily volume is not equated with concurrent users and no response-time result is fabricated. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Makes normal, peak, and integrity contention scenarios measurable while preserving the proposed one-capacity stress case. | NFR-006/NFR-008, AC-005, and S-3 retain later test design and execution ownership; no measured result is recorded here. | Product Owner |
| D-071 | Defect severity is classified using security impact, data-integrity impact, operational disruption, affected-user scope, and available workarounds: Critical means a severe security/data-integrity or widespread operational failure with no safe workaround; High means material security/data-integrity or major operational impact affecting a significant workflow or user group with no adequate workaround; Medium means contained impact with a viable workaround; Low means limited cosmetic, usability, or minor operational impact with a safe workaround. Unresolved Critical or High security findings block release, and unresolved Critical security or data-integrity defects remain release-blocking under D-038. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Provides a consistent severity method for S-5 and later defect review without inventing test results. | Severity is a classification method, not a finding or risk acceptance; D-038 remains controlling for mandatory release blocks. | Product Owner |
| D-072 | Verification evidence shall identify an accountable role for requirements validation, privacy/security review, performance verification, accessibility verification, functional acceptance testing, operational readiness, and final Product Owner approval. Each record shall distinguish evidence preparer, reviewer, approver, and independent reviewer where independence is required. No named person, signature, or completed assessment is invented. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Makes evidence accountability explicit while preserving the distinction between preparation, review, approval, and independence. | VAL-001–VAL-006 and later gate evidence must assign roles before completion; current activities remain incomplete. | Product Owner |
| D-073 | Q-014 is resolved in favor of essential MVP operational monitoring. The system shall provide privacy-conscious visibility into booking failures, unexpected application errors, security-relevant events, capacity or integrity violations, reconciliation failures, and important operational failures requiring administrative attention. Monitoring technology, alerting architecture, and implementation mechanisms are deferred to Gate 2 and later operations design. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Preserves operational safety without reopening advanced reporting or selecting technology. | Q-014 is resolved; FR-011 remains deferred for advanced reporting/analytics, while NFR-011 carries the essential monitoring direction. Logs must avoid unnecessary personal information. | Product Owner |
| D-074 | The minimum printable daily roster fields are appointment reference, appointment date/time, attendee name, service, assigned staff/resource where applicable, and attendance status. Additional contact information may appear only when justified by operational need and controlled. Printing and access require authorization; physical copies require secure custody, limited distribution, appropriate retention/disposal under later-approved policy, and post-outage reconciliation controls. No legal retention period is invented. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Defines an operationally useful privacy-minimized roster without asserting unsupported legal retention periods. | FR-016, AC-012, NFR-009, and FR-017 are refined; custody, retention, disposal, and reconciliation review remain validation/design work. | Product Owner |
| D-075 | Client organizations control their appointment records, staff accounts, services, and ordinary business administration. The system operator handles installation, maintenance, updates, backups, and authorized technical support, with no default access to client appointment records or personal data. Exceptional support access requires explicit client authorization, least privilege, defined scope and duration, auditability, and review. Independent client installations remain isolated. | APPROVED (PO DECISION) | 2026-10-29 — supplied by the Product Owner in the current Gate 1 final-validation instruction | Clarifies operating responsibilities and access boundaries without claiming that an operator walkthrough has occurred. | FR-012, NFR-005, UJ-004, BR-004, and AC-007 are refined; VAL-006 remains incomplete pending review. | Product Owner |
| D-076 | Internal walk-in queue numbers, minimal operational staff notes, and audited typing corrections are deferred from the current MVP. They may be reconsidered through future change control. This deferral does not remove or weaken existing walk-in registration, appointment management, audit requirements, or data-integrity safeguards. | APPROVED (PO DECISION) | Approval date not recorded — supplied by the Product Owner in the current Gate 1 controlled scope disposition | Keeps the current MVP bounded while preserving existing approved functionality and safeguards. | No new MVP requirements are created. Any future re-opening requires a new or amended requirement, traceability, acceptance criteria, privacy/security review, and Product Owner disposition. | Product Owner |

> Note: D-037 is intentionally unused to preserve numbering stability for future
> insertions; no meaning is implied by the gap.

> D-055 records the Q-010 deferral to Gate 6. It is not a validation waiver, a
> representative-sampling claim, a Gate 1 closure, or a Gate 2 entry authorization;
> none of those is approved.

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
| P-002 | Approval or amendment of the proposed product vision (Charter §2). | RESOLVED (OWNER CONFIRMED) — approved 2026-10-28 with CEAP clarification | — |
| P-003 | Approval or amendment of the proposed product goals (Charter §3). | RESOLVED (OWNER CONFIRMED) — G-1–G-12 approved 2026-10-28 with functional clarifications | — |
| P-004 | Approval or amendment of the proposed success criteria (Charter §4). | RESOLVED (OWNER CONFIRMED) — conditionally approved 2026-10-28 as provisional Gate 1 baseline; final criteria unresolved | — |
| P-005 | Confirmation of D-031 (version pinning). | PROPOSED (PO CONFIRMATION) | Gate 2 / Gate 4 |
| P-006 | Confirmation or rejection of D-032 (Docker adoption criteria). | PROPOSED (PO CONFIRMATION) | Gate 2 / Gate 6 |
| P-007 | Confirmation of D-033 (Gate 0 documentation-only). | RESOLVED (OWNER CONFIRMED) | — |
| P-008 | Confirmation of the added baseline decisions D-034, D-035, D-036, D-038 recorded in this revision. | RESOLVED AS REDUNDANT | — |
| P-009 | Approval of the Code Quality, Accessibility, and Usability Standard (`docs/ENGINEERING_GOVERNANCE.md` §24), relocated from the superseded `AGENTS.md`. | PROPOSED (PO CONFIRMATION) | Gate 2 / Gate 4 |

> **P-002 – P-004 — current disposition (2026-10-28).** The Product Owner
> approved P-002 and P-003 and conditionally approved P-004 in ChatGPT on
> 2026-10-28. P-002 approves Charter §2 with the non-production CEAP
> clarification; P-003 approves G-1 – G-12 with mandatory QR verification and
> the exclusions and configuration direction recorded in Charter §3. P-004
> conditionally approves S-1 – S-9 as a provisional Gate 1 discovery baseline,
> not final targets, thresholds, standards, or release acceptance criteria.
> These decisions authorize neither Gate 1 nor implementation.

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
> This paragraph records the historical Gate 0 closure status; see the 2026-10-28 dispositions above.

> **P-001 — `AGENTS.md` as an artifact, not as adopted instructions.** The recorded
> P-001 artifact set consists of five artifacts and includes `AGENTS.md`; that
> scope is preserved. Acceptance of `AGENTS.md` as a P-001 artifact is **separate
> from adoption of its instructions**: the 2026-10-22 P-001 approval accepts it as
> part of the reviewed baseline without bringing its instructions into force, and
> those instructions remain **not adopted**. Adoption of its instructions is a
> separate product-owner decision and is **not** a prerequisite for P-001 approval
> or for Gate 0 closure. The Gate 0 evidence record is a separate Gate 0 exit
> requirement and is **not** part of the five-artifact P-001 scope.

> **P-009 — PROPOSED — NOT APPROVED — NOT IN FORCE.** The standard at
> `ENGINEERING_GOVERNANCE.md` §24 must not be cited as an approved requirement. It
> was relocated, not newly invented: its content is the code-quality and
> accessibility guidance that the superseded `AGENTS.md` carried until that file was
> replaced under D-039. **D-039 is not approval of P-009.** Accessibility remains a
> product goal (Charter G-6, S-7); D-052 now provisionally approves WCAG 2.2 AA
> for core workflows while localization and supported environments remain open.
> Only P-009's broader implementation expectations remain unapproved.

> **P-001 — content superseded; the record above is unchanged.** The two notes above
> describe the P-001 approval as it stood on 2026-10-22 and are deliberately not
> rewritten. The Product Owner later adopted a replacement `AGENTS.md` (D-039); the
> effective date is the one recorded in D-039 and is not restated here. P-001's
> meaning is preserved exactly: it approved five artifacts, including `AGENTS.md`
> **as that content then stood**, without adopting its instructions. D-039 is a
> separate later decision; it neither re-approves the superseded content nor
> retroactively adopts it for the Gate 0 period, and it approves no other document.

---

## 6. Open Questions Requiring Discovery

Not decided. Resolved through discovery (primarily Gate 1) and recorded here as
decisions once answered. Questions are grouped for discovery; grouping does not
imply priority or approval.

### 6.1 Market and Commercial

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-001 | Which initial customer segment will the product target (to be discovered and validated)? | Gate 1 | TARGET SELECTED by D-041; discovery support exists; representative/formal validation remains open |
| Q-010 | What is the commercial model, pricing, and support commitment, if any? | Gate 6 | DEFERRED to Gate 6 by D-055 (2026-10-29): detailed commercial pricing, licensing fees, and support-package pricing are outside Gate 1 scope; D-020 preserved. Architecture-required deployment/support assumptions remain to be identified at the appropriate gate. |

### 6.2 Users, Access, and Authentication

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-002 | Is public self-registration supported? | Gate 1 | RESOLVED for MVP by D-046: deferred |
| Q-003 | Is public login supported, and by what mechanism? | Gate 1 / Gate 2 | RESOLVED for MVP by D-046: deferred; no mechanism selected |
| Q-004 | Is guest booking (no account) supported? | Gate 1 | RESOLVED by D-046 and reaffirmed by D-061: yes for MVP; no mandatory public account |
| Q-009 | How are administrator/staff accounts authenticated and provisioned? | Gate 1 / Gate 2 | DIRECTION APPROVED by D-047; authentication/provisioning mechanism remains Gate 2 work |
| Q-018 | What administrator/staff permission and role model is required? | Gate 1 / Gate 2 | MVP BOUNDARIES APPROVED by D-047–D-048; detailed permission matrix remains under review |

### 6.3 Scheduling and Business Rules

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-005 | What is the appointment booking workflow and its business rules? | Gate 1 | MVP DIRECTION APPROVED by D-042–D-049; configurable values remain open |
| Q-019 | What appointment types, schedules, dates, time slots, and capacity rules apply? | Gate 1 | INVARIANTS APPROVED by D-043 and refined by D-060 (staff availability, physical resources, durations, buffers); client policy values remain open |
| Q-020 | What cancellation and rescheduling rules apply? | Gate 1 | MVP CAPABILITY APPROVED by D-042/D-049 and reaffirmed by D-061 (authorized account-free changes); windows, eligibility, and fees remain open client policies |
| Q-021 | How must duplicate-booking and concurrency be prevented? | Gate 1 / Gate 2 | INVARIANTS APPROVED by D-044 and refined by D-059 (configurable warning/blocking, proxy/multiple-attendee); identity key, window, test profile, and design remain open |

### 6.4 Data, Privacy, and Integration

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-012 | Is importing and maintaining an eligibility population ("masterlist") required? (Not assumed mandatory.) | Gate 1 | DEFERRED from MVP by D-042 |
| Q-023 | Is eligibility validation required, and how? | Gate 1 | DEFERRED as a generic MVP capability by D-042; client/service need may reopen it |
| Q-015 | What are the privacy, data-retention, and auditability requirements? | Gate 1 / Gate 3 | BASELINE APPROVED by D-045/D-048/D-050; legal basis and exact retention/deletion periods remain open |
| Q-013 | Are notifications (email/SMS) required? (Only if justified by requirements.) | Gate 1 | CORE CONFIRMATION APPROVED; external delivery/reminders deferred by D-049; SMS/OTP verification deferred by D-057 |
| Q-014 | What reporting, export, and operational-monitoring capabilities are required? (Only if justified.) | Gate 1 | RESOLVED by D-073: essential MVP operational monitoring is required; advanced reporting/analytics remains deferred by D-042; technology and alerting architecture are later-gate work |

### 6.5 Non-Functional and User Experience

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-016 | What are the performance, capacity, and concurrency expectations? | Gate 1 / Gate 2 | PROVISIONAL integrity target approved by D-052; load profile and numeric performance targets remain open |
| Q-022 | What reliability and availability targets apply? | Gate 1 / Gate 2 | Continuity direction approved by D-051; numeric availability target remains open |
| Q-011 | What accessibility and localization requirements apply? | Gate 1 / Gate 2 | WCAG 2.2 AA approved for core workflows by D-052; localization remains open |

### 6.6 Platform and Delivery

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-007 | What exact dependency and runtime versions are used, and how are dependencies managed? | Gate 2 / Gate 4 | OPEN / DISCOVERY |
| Q-008 | What deployment, hosting, backup, restoration, maintenance, and support model applies? | Gate 2 / Gate 6 | PARTIALLY DISPOSED by D-083–D-084: client-managed and provider-managed hosting are both Gate 2 design constraints, and one standardized supported deployment profile is a design principle. Detailed deployment, operational responsibilities, backup/restoration, maintenance, and support remain open; no technology or production arrangement is approved. |

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
| 2026-10-23 | Revision 0.7, AGENTS.md adoption recorded. Added D-039 (adoption as agent entry point) and P-009 (accessibility standard proposed); added the `APPROVED (PO DECISION)` status definition; appended a superseding note to P-001 preserving its original 2026-10-22 meaning. No existing decision status, gate status, or P-001 entry was rewritten. | AGENTS.md adoption proposal |
| 2026-10-28 | Revision 0.8. Recorded P-002 approval with the non-production CEAP clarification; P-003 approval of G-1 – G-12 with mandatory QR-based appointment verification, configurable scheduling/capacity direction, and CEAP-specific exclusions; and P-004 conditional approval of S-1 – S-9 as the provisional Gate 1 discovery baseline. Final targets and QR acceptance criteria remain Gate 1 work. Neither Gate 1 nor implementation was authorized. | Pre-Gate 1 decision recording |
| 2026-10-28 | Revision 0.9. Recorded D-040, the Product Owner's acceptance of Gate 1 Checkpoint 1 as a provisional five-document working baseline. The decision preserves the approval boundaries and the three open non-blocking observations; Gate 1 remains IN PROGRESS and is not approved for exit. | Checkpoint 1 acceptance recording |
| 2026-10-29 | Revision 1.0. Recorded D-041–D-054 from the Product Owner's consolidated Gate 1 authorization; updated affected discovery-question dispositions; left client policy parameters, legal retention rules, representative validation, Gate 1 closure, and D-055 unresolved/unrecorded. | Authorized Gate 1 consolidated execution |
| 2026-10-29 | Revision 1.1. Recorded D-055, the Product Owner's explicit deferral of Q-010 (detailed commercial pricing, licensing fees, and support-package pricing) to Gate 6, preserving D-020. No requirement status, gate status, or implementation authorization changed. | Product Owner decision recording |
| 2026-10-29 | Revision 1.2. Recorded D-056–D-062: deferred payments/deposits (including GCash), SMS/OTP/automated confirmations, waitlists, and multiple branches; refined duplicate warning/blocking, capacity/resource constraints, and account-free guest changes; and recorded the approved extensibility direction. Existing deferrals, D-020, and D-055/Q-010 are preserved. No requirement status, gate status, or implementation authorization changed. | Product Owner decision recording |
| 2026-10-29 | Revision 1.3. Recorded the four Product Owner-approved MVP refinements as D-063–D-066: batch outage reconciliation, streamlined staff-assisted walk-in creation, screenshot-friendly confirmation, and alternative availability. Deferred waitlists, multi-branch, SMS/email delivery, and offline booking synchronization remain excluded. No requirement status, gate status, or implementation authorization changed. | Product Owner decision recording |
| 2026-10-29 | Revision 1.4. Recorded D-067–D-075: the 20–100 daily workload profile, core workflow inventory, modern browser support policy, measurable normal/peak/contention scenarios, severity method, evidence ownership, essential operational monitoring resolution for Q-014, minimum roster/privacy custody requirements, and client/operator access boundaries. No requirement status, validation status, gate status, or implementation authorization changed. | Product Owner decision recording |
| 2026-10-29 | Revision 1.5. Recorded D-076, the Product Owner's explicit deferral of internal walk-in queue numbers, minimal operational staff notes, and audited typing corrections from the current MVP. Existing walk-in registration, appointment management, audit requirements, and data-integrity safeguards remain unchanged. No requirement status, validation status, gate status, or implementation authorization changed. | Product Owner decision recording |
| 2026-10-29 | Revision 1.6. Reserved D-077–D-082 as proposed, undated decisions for the development-stage Gate 1 closure route in the Final Validation Package §16. No proposed decision is in force; gate status and historical evidence remain unchanged. | Gate 1 closure proposal preparation |
| 2026-10-29 | Revision 1.7. Recorded Product Owner approval of D-077–D-081 with D-079 milestone obligations. D-082 remains separate and pending; no Gate 1 exit or Gate 2 authorization was recorded. | Product Owner decision recording |
| 2026-10-29 | Revision 1.8. Recorded the separate Product Owner approval of D-082, closed Gate 1, and authorized Gate 2 Architecture & Technical Design documentation only. | Product Owner gate-transition decision |
| 2026-10-29 | Revision 1.9. Recorded D-083–D-084, approved by the Product Owner on 2026-10-29 in the Gate 2 Phase 2.2C ChatGPT conversation, for the dual hosting-ownership constraint and the one-profile design principle. Q-008 remains partially open. Recording date is 2026-10-29; no technology adoption, operational responsibility assignment, Gate 2 exit, or implementation authorization was recorded. | Authorized Gate 2 decision recording |
| 2026-10-29 | Revision 1.10. Recorded D-085, the Product Owner's six provisional conceptual directions approved on 2026-10-29 for continued Gate 2 design only. Recording date is 2026-10-29; no final architecture, security mechanism, implementation, Gate 2 exit, or release approval was recorded. | Authorized Gate 2 conceptual-direction decision recording |
| 2026-10-30 | Revision 1.11. Recorded D-086, the Product Owner's Checkpoint 5 provisional acceptance of the fingerprinted Component & Module Design v0.1 as a Gate 2 working design only; all listed limitations and D-079 deadlines remain, with Gate 2 IN PROGRESS and implementation unauthorized. | Product Owner Checkpoint 5 closure recording |
| 2026-11-01 | Revision 1.12. Recorded D-087, the Product Owner's Checkpoint 6 provisional acceptance of the fingerprinted Detailed System Workflow Design v0.1 as a Gate 2 working design only; open workflow decisions, Mermaid verification limits and all D-079 deadlines remain, with Gate 2 IN PROGRESS and implementation unauthorized. | Product Owner Checkpoint 6 closure recording |

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
- `APPROVED (PO DECISION)` records are approved only within their stated scope.
  Provisional, proposed, open, and partially resolved matters must not be treated
  as approved beyond that scope.

## 9.1 Gate 1 development-stage closure decisions

These decisions preserve the exact scope and limitations in
`docs/requirements/GATE-1-FINAL-VALIDATION-PACKAGE.md` §16. D-077–D-082 were
approved by the Product Owner on 2026-10-29. D-082 separately closes Gate 1 and
authorizes Gate 2 within the stated documentation-only scope.

| ID | Decision and exact reference | Rationale | Risks / limitations and required follow-up | Status | Effective date | Approver |
|---|---|---|---|---|---|---|
| D-077 | Adopt the development-stage validation amendment exactly as specified in Final Validation Package §16.1. | Permit bounded early design on explicitly accepted assumptions while retaining gate and release controls. | Real representative validation remains unproven; Gate 3 design review and qualified independent privacy/security assessment before Gate 6 remain mandatory. | APPROVED (PO DECISION) | 2026-10-29 | Product Owner |
| D-078 | Accept the fictional VAL-001–VAL-006 material in `docs/requirements/simulations/GATE-1-SIMULATED-VALIDATION.md` §§3–4 solely as labeled development design assumptions under §16.2. | Make candidate scenarios available to design without inventing interviews or qualified findings. | Simulation is not EVD evidence, representative validation, legal advice, or a test result; real follow-up remains required. | APPROVED (PO DECISION) | 2026-10-29 | Product Owner |
| D-079 | Retain D-060/FR-001/BR-005 buffers; keep a one-hour change cutoff configurable and unapproved; select no fixed retention period, four-hour operator duration, or emergency break-glass access; defer remaining measurable quality targets and idempotency mechanics under the milestone obligations in Final Validation Package §16.3: cutoff and remaining measurable quality targets before Gate 2 architecture approval; retention, exceptional operator duration, and emergency break-glass policy before Gate 3 security/privacy design review approval; printed-roster handling and disposal before Gate 6 release approval. | Prevent submitted or fictional responses from creating universal policy or overriding D-034/D-050/D-075. | Product Owner owns the policy dispositions; the Gate 2/3/6 milestones are resolution deadlines; no calendar dates are invented. | APPROVED (PO DECISION) | 2026-10-29 | Product Owner |
| D-080 | Adopt the relevant-skill/context-efficiency guidance in Final Validation Package §16.4 as an addition to Engineering Governance §2; `AGENTS.md` continues to refer to §2 rather than duplicating it. | Apply D-054 consistently to agent work. | Efficiency cannot waive necessary source reading, evidence, security, or approval controls. | APPROVED (PO DECISION) | 2026-10-29 | Product Owner |
| D-081 | Approve Requirements Specification **v0.7** and Requirements Traceability **revision 1.0** as the development-stage requirements baseline under D-077, after exact-version verification; FR-009 and FR-011 remain deferred and all other baseline records retain the approved assumption-based development disposition. | Use the existing bounded 18 FR / 11 NFR baseline; no v0.8 buffer duplicate is needed. | This is not `VALIDATED` stakeholder evidence or release approval. Open design and review obligations remain. | APPROVED (PO DECISION) | 2026-10-29 | Product Owner |
| D-082 | Separately approve Gate 1 exit and authorize Gate 2 Architecture & Technical Design after D-077–D-081 were incorporated, the assumption/risk ownership and milestone obligations were checked, and the Gate 1 evidence/register were reconciled. Authorization is limited to architecture/design documentation. | Maintain the separate gate-transition decision required by Engineering Governance §§5, 18–19 while preserving implementation and production boundaries. | No implementation, database changes, deployment, production access, or CEAP access is authorized. Gate 3, Gate 5, and Gate 6 obligations remain mandatory. | APPROVED (PO DECISION) | 2026-10-29 | Product Owner |

---

## 9.2 Gate 2 design-constraint decisions

The Product Owner explicitly approved the following constraints in the Gate 2 Phase
2.2C ChatGPT conversation on 2026-10-29. They are inputs to Gate 2 design, not
approval of a specific deployment technology, operational responsibility assignment,
implementation, or Gate 2 exit.

| ID | Decision and approved scope | Rationale | Consequences, existing constraints, and unresolved obligations | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-083 | Both client-managed and provider-managed hosting must be accommodated as Gate 2 design constraints, subject to independent installation and operational responsibility design. | Accommodates both approved hosting-ownership arrangements without changing the independent per-client product model or client-data access boundary. | Under either arrangement, each client retains an independent installation and database, CEAP remains isolated, and the operator has no default access to client data (D-019, D-020, D-025, D-034, D-035, D-075; NFR-001, NFR-002, NFR-005; FR-012; AC-007). Gate 2 must define and review client/provider responsibilities and trust boundaries for installation, credentials, updates, monitoring, backups/restores, incidents, and exceptional support access (Q-008). No hosting-specific responsibility assignment, paid hosting, support commitment, or deployment is approved. | APPROVED (PO DECISION) | 2026-10-29 — explicit Product Owner decision in the Gate 2 Phase 2.2C ChatGPT conversation | Product Owner |
| D-084 | One standardized supported deployment profile is approved as a Gate 2 design principle for independent client installations across the approved hosting-ownership arrangements. No specific profile is selected. | Provides a common support and later-verification design boundary while allowing separate client installations and client-specific configuration. | Standardization does not imply shared tenancy, shared client data, identical business policies, or default operator access (D-020, D-034, D-062, D-075; NFR-001, NFR-002, NFR-004, NFR-005). The profile's concrete boundaries, compatibility constraints, operating system, infrastructure technologies, and technical specifications remain Gate 2 design questions under Q-007/Q-008. Exact runtime/dependency versions remain for Gate 4 under D-031/P-005. Docker and Docker Compose are not adopted: D-023/D-036 still require documented justification and Product Owner approval; D-032 remains provisional and P-006 remains proposed. No Linux, paid hosting, implementation, deployment, or Gate 2 exit is approved. | APPROVED (PO DECISION) | 2026-10-29 — explicit Product Owner decision in the Gate 2 Phase 2.2C ChatGPT conversation | Product Owner |

---

## 9.3 Gate 2 provisional conceptual directions

D-085 records the Product Owner's 2026-10-29 Phase 2.3B disposition. Its six
separately numbered clauses are approved as provisional directions for continued
Gate 2 design only. A later change to one clause requires a recorded Product Owner
disposition; it does not silently change the other clauses.

| ID | Decision and approved scope | Rationale | Consequences, existing constraints, and unresolved obligations | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-085 | The Product Owner approved these **provisional conceptual directions for continued Gate 2 design only**: **(1) Guest management authority:** Keep appointment references and QR presentations distinct from authority to cancel or reschedule; explore scoped guest proof and staff-mediated recovery. **(2) QR lookup boundary:** QR possession alone does not prove identity, authorize appointment changes, or record attendance; staff lookup and explicit attendance transitions remain separate. **(3) Booking integrity:** Carry forward a minimum safe configuration contract and a shared final integrity boundary across guest, staff, rescheduling, supervisor exceptions, and reconciliation. **(4) Outage reconciliation:** Carry forward snapshot provenance, attributable review, and explicit accepted, conflicted, and unresolved outcomes. **(5) Hosting responsibility:** Require effective-access and responsibility matrices for client-managed and provider-managed hosting before finalizing the supported deployment profile. **(6) Provisional architecture:** Use a modular monolith per independent client installation as the conceptual direction for further Gate 2 design, subject to later integrity, security, privacy, and operational review. | Records one bounded Product Owner disposition with individually identifiable directions for the next design stage, without selecting final architecture or implementation mechanisms. | D-020, D-034, D-035, D-045, D-079, and D-081–D-084 remain in force. No guest credential, verification channel, expiry or recovery procedure; QR lifecycle; locking, schema, capacity unit, duplicate-policy value or idempotency mechanism; offline synchronization, batch atomicity, conflict override or final paper procedure; or hosting technology, operating system, container platform, runtime version, final operational allocation or deployment profile is approved. Client-specific policies, Q-007/Q-008, D-079 milestones, and Gate 2/3/5/6 review and evidence obligations remain open. This decision does **not** approve final architecture, implementation, a security mechanism, representative stakeholder validation, Gate 2 exit or release. | APPROVED (PO DECISION) — provisional conceptual directions only | 2026-10-29 — explicit Product Owner disposition supplied for Phase 2.3C; recorded separately on 2026-10-29 | Product Owner |

---

## 9.4 Gate 2 Checkpoint 5 provisional working-design acceptance

The Product Owner's Checkpoint 5 acceptance is limited to continued Gate 2 working-design use. It is not final architecture approval, Gate 2 exit, Gate 3 authorization, or implementation authorization.

| ID | Decision and accepted artifact | Rationale | Consequences, limitations and required follow-up | Status | Effective date | Approver |
|---|---|---|---|---|---|---|
| D-086 | Provisionally accept `docs/architecture/COMPONENT_MODULE_DESIGN.md`, version 0.1, **DRAFT — NOT APPROVED AS FINAL ARCHITECTURE**, SHA-256 `3D25E1DA93775804765F571CF876AE9383027D5280F195A50626631456D61001`, solely as a working design for continued Gate 2 architecture work. Passes 1–5 are complete; Pass 5 independently verified F-01–F-05 as resolved and reported no new blocker or major finding. | Records the Product Owner's bounded Checkpoint 5 disposition without promoting the draft to final architecture or changing Gate status. | All three Mermaid diagrams were source-inspected but not visually rendered or independently visually verified. D-085 directions remain provisional. D-081 approves Requirements Specification v0.7 and Traceability rev 1.0 only as a development-stage assumption baseline, not representative stakeholder validation; Traceability rev 1.1 is administrative. FR-009 and FR-011 remain deferred. Separate client installations, both hosting models, operator-access boundaries and CEAP isolation remain mandatory. Q-016/Q-022 numeric response-time and availability targets remain open for disposition before final Gate 2 architecture approval. D-079 deadlines remain: cancellation/rescheduling cutoff and remaining measurable quality targets, including Q-016/Q-022, before final Gate 2 architecture approval; retention/deletion, exceptional operator-access duration and emergency break-glass policy before Gate 3 security/privacy design-review approval; printed-roster handling/disposal before Gate 6 release approval. Gate 2 remains IN PROGRESS; Gates 3–7 remain BLOCKED. No final architecture approval, Gate 2 exit, Gate 3 authorization, implementation, database change, deployment or production action is authorized. | APPROVED (PO DECISION) — provisional working-design acceptance only | 2026-10-30 | Product Owner |

## 9.5 Gate 2 Checkpoint 6 provisional working-design acceptance

The Product Owner's Checkpoint 6 acceptance is limited to continued Gate 2 working-design use. It is not final architecture approval, Gate 2 exit, Gate 3 authorization, or implementation authorization.

| ID | Decision and accepted artifact | Rationale | Consequences, limitations and required follow-up | Status | Effective date | Approver |
|---|---|---|---|---|---|---|
| D-087 | Provisionally accept `docs/architecture/DETAILED_SYSTEM_WORKFLOW_DESIGN.md`, version 0.1, **DRAFT — AWAITING PRODUCT OWNER REVIEW**, SHA-256 `F73921FC932231397ABF492B3F47480A8AFFA408D19F29F1FA0E34FECA27FEAB`, solely as a Gate 2 working design suitable for continued architecture/design activities. The document catalogs 15 workflows and contains eight Mermaid source blocks covering six distinct diagram subjects, with two subjects repeated as supporting inline diagrams. | Records the Product Owner's bounded Checkpoint 6 disposition without promoting the draft to final architecture or changing Gate status. | The document received an internal self-audit only; no independent verification was performed. Attendance/service-state transition graph and correction authority remain open. Authoritative command-outcome and safe-retry mechanisms remain unresolved. Paper-roster provenance, reconciliation outcomes, conflict resolution and technical representation remain downstream design dependencies. Eight Mermaid source blocks were included, but visual rendering and independent parser validation were not performed. Q-016/Q-022 numeric response-time and availability targets remain open for disposition before final Gate 2 architecture approval. All D-079 deadlines remain binding: before final Gate 2 architecture approval, Product Owner disposition of cancellation/rescheduling cutoff and remaining measurable quality targets, including Q-016/Q-022; before Gate 3 security/privacy review approval, retention/deletion policy, exceptional operator-access duration and emergency break-glass policy; before Gate 6 release approval, printed-roster handling and disposal. D-081 remains a development-stage assumption baseline, not representative stakeholder validation. D-085 directions remain provisional; D-086 Component & Module Design acceptance remains provisional. FR-009 and FR-011 remain deferred. Independent client installations, both hosting models, operator-access boundaries and CEAP isolation remain mandatory. Gate 2 remains IN PROGRESS; Gates 3–7 remain BLOCKED. No final architecture approval, Gate 2 exit, Gate 3 authorization, implementation, database operations, dependency changes, deployment or production activity is authorized. | APPROVED (PO DECISION) — provisional working-design acceptance only | 2026-11-01 | Product Owner |

## 10. Approval

This register was approved by the product owner as a Gate 0 baseline artifact
under P-001 on 2026-10-22. That approval accepts `AGENTS.md` as an artifact — as that
content then stood — without adopting its instructions. The later adoption of a
replacement `AGENTS.md` (D-039) is recorded separately in §3 and does not alter this
register's P-001 approval. It did not itself close Gate 0 or approve the Gate 0
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
