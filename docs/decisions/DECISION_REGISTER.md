# Decision Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | Approved as a Gate 0 baseline artifact (P-001) — 2026-10-22 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Document date | 2026-10-22 |
| Revision | 1.39 (D-123 Governance v2.0 adoption and Batch 03 closure recorded 2026-11-19; D-122 recorded 2026-11-18 without a header bump) |
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
| Q-002 | Is public self-registration supported? | Gate 1 | RESOLVED for MVP by D-094: optional customer registration where enabled; enablement policy open under ACCT-L01 |
| Q-003 | Is public login supported, and by what mechanism? | Gate 1 / Gate 2 | RESOLVED for MVP by D-094: supported where enabled; authentication mechanism open under ACCT-L02 |
| Q-004 | Is guest booking (no account) supported? | Gate 1 | RESOLVED by D-046 and reaffirmed by D-061: yes for MVP; no mandatory public account |
| Q-009 | How are administrator/staff accounts authenticated and provisioned? | Gate 1 / Gate 2 | DIRECTION APPROVED by D-047; authentication/provisioning mechanism remains Gate 2 work |
| Q-018 | What administrator/staff permission and role model is required? | Gate 1 / Gate 2 | MVP BOUNDARIES APPROVED by D-047–D-048; detailed permission matrix remains under review |

### 6.3 Scheduling and Business Rules

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-005 | What is the appointment booking workflow and its business rules? | Gate 1 | MVP DIRECTION APPROVED by D-042–D-049; configurable values remain open |
| Q-019 | What appointment types, schedules, dates, time slots, and capacity rules apply? | Gate 1 | INVARIANTS APPROVED by D-043 and refined by D-060 (staff availability, physical resources, durations, buffers); client policy values remain open |
| Q-020 | What cancellation and rescheduling rules apply? | Gate 1 | POLICY DIRECTION APPROVED by D-107: cancellation and rescheduling eligibility are separate; cutoffs use scheduled appointment start in the installation business time zone with an inclusive boundary; no penalties. Exact per-service values, exception authority, detailed states and enforcement remain open. D-079's Product Owner cutoff-policy disposition is recorded; D-079's other milestones remain. The fee-open wording in Requirements Specification v0.7 remains preserved pending a separate versioned amendment under Requirements Governance §6; D-089 does not decide unrelated service fees. |
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
| Q-016 | What are the performance, capacity, and concurrency expectations? | Gate 1 / Gate 2 | D-070 integrity scenario remains approved; Product Owner-approved measurable-target evaluation approach recorded by D-109. D-118 records that the D-109 approach satisfies D-079's Gate 2 disposition milestone; measurement definitions, feasibility evidence and numeric response-time/performance targets remain open for later-gate evaluation; no latency promise follows from D-070. |
| Q-022 | What reliability and availability targets apply? | Gate 1 / Gate 2 | Continuity direction approved by D-051; Product Owner-approved measurable-target evaluation approach recorded by D-109. D-118 records that the D-109 approach satisfies D-079's Gate 2 disposition milestone; supported operating profiles, responsibility assumptions, feasibility evidence and numeric availability/recovery targets remain open for later-gate evaluation; no service commitment is made. |
| Q-011 | What accessibility and localization requirements apply? | Gate 1 / Gate 2 | WCAG 2.2 AA approved for core workflows by D-052; localization remains open |

### 6.6 Platform and Delivery

| ID | Question | Needed by | Status |
|---|---|---|---|
| Q-007 | What exact dependency and runtime versions are used, and how are dependencies managed? | Gate 2 / Gate 4 | DISPOSED FOR GATE 2 by D-116: D-092's capability-based approach is the Gate 2 design disposition; no supported platform, resolved package graph, lockfile or tested matrix is accepted, and external scratch lockfile evidence is not adopted. Exact dependency/runtime versions remain Gate 4 under D-031, with prerequisite review and bounded authorization. |
| Q-008 | What deployment, hosting, backup, restoration, maintenance, and support model applies? | Gate 2 / Gate 6 | DISPOSED FOR GATE 2 by D-117: independent client installations and databases; hosting, infrastructure, credentials, backups, monitoring and support allocated to the client or its contracted provider unless otherwise agreed; no default operator access to client data; one standardized supported deployment profile remains a design principle. Detailed deployment arrangements, provider terms and runbooks remain subject to later approval. |

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
| — | No security exception is authorized or recorded. A draft proposal for SE-001 is under qualified security review and Product Owner consideration; it is not an authorized SE record. | — | — | — | — | [SDD-001 Option A SE-001 proposal](../evidence/SDD001-OPTION-A-SE-001-PROPOSAL.md) |

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
| 2026-11-01 | Revision 1.13. Recorded D-088's fingerprinted Checkpoint 7 provisional working-design acceptance and D-089's separate MVP cancellation/no-show penalty exclusion; clarified Q-020 without rewriting the D-081 approved v0.7 requirements text. Formal specification amendment and traceability impact review remain follow-up under Requirements Governance §§6/8. Gate 2 remains IN PROGRESS; no final architecture or implementation approval. Approval dates were not supplied and are not inferred from this recording date. | Product Owner Checkpoint 7 decision recording |
| 2026-11-01 | Revision 1.14. Recorded D-090, the Product Owner's bounded provisional acceptance of fingerprinted Interface & API Design v0.1 for continued Gate 2 design, with explicit account-free guest-authority and D-070 unknown-outcome limitations. The approval date was not supplied; this is the recording date only. D-079/D-089 and the versioned requirements reconciliation remain outstanding. Gate 2 remains IN PROGRESS; Gates 3–7 BLOCKED; no final architecture, Gate 3, implementation or deployment authorization. | Product Owner Checkpoint 8 decision recording |
| 2026-11-01 | Revision 1.15. Recorded D-091, the Product Owner's provisional acceptance of fingerprinted Checkpoint 9 Configuration & Deployment Design v0.1 as a working design only. Preserved Q-008 allocations, real-backup verification, D-079 milestones and evaluation-only numeric candidates. Approval date was not supplied; this is the recording date, not an inferred approval date. Gate 2 remains IN PROGRESS; Gates 3–7 BLOCKED; no implementation or deployment authorization. | Product Owner Checkpoint 9 decision recording |
| 2026-11-01 | Revision 1.16. Recorded D-092's fingerprinted Checkpoint 10 provisional acceptance as the Q-007 Gate 2 working approach, with final Q-007 disposition and Gate 4 exact versions outstanding. Preserved Q-008, D-079/D-089–D-091 and D-091's evaluation-only numeric candidates. No approval date supplied; this is the recording date only. Gate 2 remains IN PROGRESS, Gates 3–7 BLOCKED, and implementation/deployment unauthorized. | Product Owner Checkpoint 10 decision recording |
| 2026-11-02 | Revision 1.17. Recorded D-093's approved insertion of Gate 2 Checkpoint 11 UI/UX Design & Prototyping before the previously unnumbered Integration & Traceability Review, now labeled Checkpoint 12. The bounded design package is required for final Gate 2 architecture review; Checkpoint 11 is NOT STARTED, Checkpoint 12 and unnumbered final review pending. Gate statuses, earlier checkpoint decisions, D-079 deadlines and implementation boundaries unchanged. Recording date is not an inferred Product Owner approval date. | Product Owner Gate 2 sequence amendment recording |
| 2026-11-04 | Revision 1.18. Added proposed successor decision D-094 and its linked requirements amendment package for Product Owner review. The supplied scope directions are captured, but exact successor-decision wording and v0.8/revision 1.2 requirement text remain pending approval and are not effective. D-046, D-042, D-061, Q-002/Q-003 effective dispositions, D-081, Gate 1 history, Gate 2 status and Checkpoint 11 status remain unchanged. | Authorized proposal preparation under Product Owner scope direction |
| 2026-11-04 | Revision 1.19. Recorded explicit Product Owner approval of exact D-094/D-095 wording and Requirements Specification v0.8 / Traceability revision 1.2. Approval date was not supplied. D-094 supersedes only D-046's public-account deferral and updates Q-002/Q-003; D-095 amends only the specified D-057/D-049 email scope. The v0.7/revision 1.0 baseline is preserved historically; v0.8/revision 1.2 are effective development-stage assumptions, not validation. Gate 2 and Checkpoint 11 remain unchanged; implementation is unauthorized. | Product Owner approval recording |
| 2026-11-04 | Revision 1.20. Recorded D-096, the Product Owner's bounded authorization to modify, extend and locally verify the fictional-data Checkpoint 11 UI/UX prototype, expressly superseding only the prior no-prototype-modification restriction for the stated scope. Recorded a landing/login-only design exception for restrained illustration gradients/glow, slow nonessential illustration motion, subtle view transitions and split-stage/distinct compositions, under the specified brand, accessibility and reduced-motion safeguards. Gate 2 remains IN PROGRESS; Checkpoint 11 work is authorized/in progress but remains NOT ACCEPTED and NOT COMPLETED. No production application implementation, backend, database, CEAP, gate-exit or release authority is granted; no implementation outside the bounded fictional prototype scope is authorized. Approval date was not separately supplied. | Product Owner bounded Checkpoint 11 authorization and design exception |
| 2026-11-05 | Revision 1.21. Recorded D-097, the Product Owner's explicit expansion of Checkpoint 11 fictional-data prototype authorization to Staff and Administrator workspaces, dashboards, appointment workflows and role-specific profiles. Gate 2 and Checkpoint 11 remain IN PROGRESS; unresolved permissions are not approved. D-096's other boundaries and visual exception are unchanged. | Product Owner scope-expansion instruction in this chat |
| 2026-11-10 | Revision 1.24. Recorded D-100's bounded prototype motion authorization. The approval date was not separately supplied; this is the recording date. Gate 2 and Checkpoint 11 remain unfinished and unaccepted. | Product Owner authorization recording |
| 2026-11-12 | Revision 1.25. Recorded D-102 and the bounded Engineering Governance §15 amendment for risk-proportionate technology due diligence before implementation approval. Approval date not separately supplied; no technology, implementation, deployment, gate or session acceptance is recorded. | Explicit Product Owner principle approval and two-file recording authorization in the current conversation |
| 2026-11-12 | Revision 1.26. Recorded D-103 identity/permission design directions and D-104 initial Philippine jurisdiction/privacy planning directions, with D-102 assessments and qualified-review dependencies in Security. Approval date not separately supplied; no requirements amendment, mechanism, legal compliance, Session 07 acceptance, implementation or gate transition approved. | Explicit Product Owner bounded SEC-Q03 / PRIV-Q01 recording instruction in the current conversation |
| 2026-11-13 | Revision 1.27. Recorded D-106–D-109 from the Product Owner's current-conversation approval evidence: six policy directions and three clarifications, eight booking-integrity choices, ten security/access choices, and twelve operations/reliability/UX/engineering choices. Approval dates were not separately supplied. Q-020 is updated to reflect its approved cutoff-policy direction while retaining values/details and the unrelated fee-text amendment; Q-016/Q-022 record the approved evaluation approach while numeric targets remain open. No technical mechanism, effective requirements amendment, SDD approval, implementation or gate transition is recorded. | Explicit Product Owner Approval Evidence supplied in the current conversation |
| 2026-11-13 | Draft revision 1.29. Recorded D-110's approved execution direction and prepared a compatibility-first Engineering Governance amendment. The decision's approval date was not separately supplied; this is the recording date. Exact amendment text awaits Product Owner review. No earlier approval, gate status, feature specification, implementation or release authority changes. | Product Owner operating-contract adoption in the Gate 2 conversation and bounded documentation instruction |
| 2026-11-13 | Revision 1.29 acceptance recorded. The Product Owner accepted the exact Engineering Governance revision 1.4 D-110 amendment presented in the preceding report. Approval date was not separately supplied; this is the recording date. Acceptance is limited to that wording and preserves prior approvals, D-098/D-101, and separate implementation/release authorities. | Product Owner exact-amendment acceptance in the current conversation |
| 2026-11-13 | Revision 1.30. Recorded D-111's five endorsed investigation priorities. Approval date not separately supplied; this is the recording date. No technical selection, SDD approval, implementation or gate transition is recorded. | Explicit Product Owner authorization in the current conversation |
| 2026-11-13 | Revision 1.31. Recorded D-112, the Product Owner's acceptance of Checkpoint 11 within its documented design and prototype scope as D-093 representative design evidence, including the administrator appointment-review, permission-denial and unchanged-appointment journey. The prototype remains illustrative; all applicable approved SDD requirements remain mandatory for implementation, verification and release. Acceptance does not establish real authentication, MFA, authorization enforcement, persistence, full accessibility conformance, specialist approval or production readiness. Historical Gate 2 remains IN PROGRESS and unfinished; CP12 and final review are not recorded complete. No implementation, SDD modification, Git write, Gate 2 closure or CP12 initiation is authorized. Approval date not separately supplied; recorded 2026-11-13. | Product Owner CP11 acceptance instruction in the current conversation |
| 2026-11-15 | Revision 1.34. Recorded D-115 as **PROPOSED (PO CONFIRMATION)** only. The entry captures the Product Owner's requested bounded authorization to verify approval evidence, correct demonstrably editorial status/provenance and trace-reference contradictions, repair verified broken links without changing meaning, initiate and execute CP12 as a review activity, and prepare the final architecture review and closure package. It confirms that the exact SDD revisions in Registry §13/§14 and the CURRENT STATUS banners are the approved text. It is not in force, authorizes nothing, and changes no gate, requirement, design or implementation status. Approval date not supplied; recorded 2026-11-15. Revision-history rows 1.32–1.33 were not added when D-113/D-114 were recorded. | Product Owner "Gate 2 Closure Remediation" instruction in the current conversation, recorded as a proposal |
| 2026-11-15 | Revision 1.35. Recorded the Product Owner's exact approval of D-115 and the Gate 2 dispositions D-116 (Q-007), D-117 (Q-008) and D-118 (Q-016/Q-022). D-115 authorizes the bounded remediation only. D-116 adopts D-092 as the Q-007 Gate 2 disposition and does not adopt external scratch lockfile evidence. D-117 adopts the minimum hosting-responsibility allocation. D-118 accepts the D-109 evaluation approach as the D-079 Gate 2 disposition milestone without setting numeric targets. No CP12 acceptance, final architecture approval, Gate 2 closure, implementation, installation or release is recorded. | Product Owner approval in the current instruction; approval date 2026-11-15 |
| 2026-11-19 | Revision 1.39. Recorded D-123: adoption of Engineering Governance v2.0 as authoritative, alignment of AGENTS.md and Requirements Governance, bounded reconciliation of NFR-003/AC-028 and traceability with the approved verification-timing deferral, and acceptance of Batch 03 as ACCEPTED WITH LIMITATIONS — SYNTHETIC-LOCAL DEVELOPMENT ONLY. Preserved the unresolved CSS-delivery and partial expired-TOTP endpoint findings, deferred accessibility checks and the accessible MFA alternative (due by 2026-12-19), and authorized Batch 04 planning only. Header revision was 1.38 when D-119–D-122 were recorded without revision-history rows. | Product Owner instruction "Governance v2.0 Adoption and Batch 03 Closure" in the current conversation, 2026-11-19 |

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

## 9.6 Gate 2 Checkpoint 7 provisional working-design acceptance

The Product Owner's Checkpoint 7 acceptance is limited to continued Gate 2 architecture/design work. The artifact remains byte-for-byte unchanged. The approval date was not supplied in the Product Owner's Checkpoint 7 instruction; the register's recording date is not an approval date.

| ID | Decision and accepted artifact | Rationale | Consequences, limitations and required follow-up | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-088 | Provisionally accept `docs/architecture/DATA_ARCHITECTURE_MODEL_DESIGN.md` **v0.1**, **DRAFT — AWAITING PRODUCT OWNER REVIEW**, SHA-256 `38C9DB532B988C150B3D80A1DA3C356EF66C6D3D26A82B356A3AD980183AC652`, solely as a working logical data design for continued Gate 2 work. | Records a fingerprinted, bounded Checkpoint 7 disposition without promoting a proposed model to final architecture or approving a physical schema. | The draft's 25 logical candidates, three Mermaid source diagrams and author self-audit are proposals, not validated tables, tests, independent diagram rendering or approved policies. D-081 remains a development-stage assumption baseline; D-085–D-087 retain their limited scope; FR-009/FR-011 remain deferred. D-079 deadlines, Q-016/Q-022 numeric target dispositions, cutoff, capacity/duplicate policies, attendance transitions, guest recovery, safe retry and paper reconciliation remain open as recorded. D-089 separately excludes MVP penalties; the fee-open v0.7 wording needs a governed amendment. Gate 2 remains IN PROGRESS; no final Gate 2 approval, implementation, migration, database or deployment action is authorized. | APPROVED (PO DECISION) — provisional working-design acceptance only | Not recorded — Product Owner confirmation supplied without an approval date | Product Owner |

## 9.7 MVP cancellation and no-show penalty exclusion

This is a separate Product Owner scope decision, not an approval of the exact replacement wording for Requirements Specification v0.7 or Requirements Traceability revision 1.0. The approval date was not supplied in the Product Owner's instruction.

| ID | Decision and approved scope | Rationale | Consequences, limitations and required follow-up | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-089 | Exclude cancellation and no-show penalties from the MVP. Monetary penalties, violation points, automated punitive warnings, customer suspensions, penalty balances and penalty enforcement are not MVP features. Future penalty features require formal requirements and change review. Ordinary cancellation, attendance and no-show operational records remain in scope. | Keeps the MVP focused without weakening booking, attendance or audit obligations or treating an unresolved fee reference as authority to build a penalty system. | Q-020's cancellation/rescheduling cutoff, windows and eligibility remain unresolved, subject to D-079. D-059/BR-002's duplicate-booking warning is a non-punitive integrity response, not an automated punishment. This decision does not exclude or decide unrelated service fees or amend D-055's commercial-pricing deferral or D-056's payment/deposit deferral. Requirements Specification v0.7 AC-009's validation need and §§6/9 still mention fees: preserve the D-081 approved version; prepare a new proposed version with change history and affected traceability review under Requirements Governance §§6/8, then obtain separate Product Owner approval of exact replacement wording before it becomes effective. Previously discussed architecture recommendations are proposals, not numeric targets or final business policies. All D-079 deadlines remain binding. | APPROVED (PO DECISION) — MVP scope exclusion only | Not recorded — Product Owner confirmation supplied without an approval date | Product Owner |

## 9.8 Gate 2 Checkpoint 8 provisional working-design acceptance

The Product Owner provisionally approved the following fingerprinted document solely as working logical interface/API design. Its approval date was not supplied in the Checkpoint 8 instruction; this register's revision date is not an inferred approval date. The existing artifact remains unchanged.

| ID | Decision and accepted artifact | Rationale | Consequences, limitations and required follow-up | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-090 | Provisionally accept `docs/architecture/INTERFACE_API_DESIGN.md`, **version 0.1**, **DRAFT — AWAITING PRODUCT OWNER REVIEW**, verified SHA-256 `AAEDE649F366CE1608CEA1E9C7F112192FD0BA8CB1AEB250A94320B6998A4F96`, solely as a working logical contract design for continued Gate 2 architecture/design work. The draft inventories 31 logical interface candidates and five conceptual Mermaid source diagrams, covering public booking/confirmation and account-free management, staff/supervisor/administrator/operator interactions, internal module contracts, request/response and validation/authorization categories, safe error/conflict/retry handling, authoritative booking/attendance, D-070 concurrency, QR versus identity/attendance, paper reconciliation, traceability and open dependencies. | Records a bounded, fingerprinted Product Owner checkpoint acceptance without turning proposed logical contracts into final APIs, business policies, security mechanisms, tested behavior or final architecture. | **Guest limitation:** Approved scoped authentication for state-changing guest operations does not require public account registration. Account-free booking and authorized management remain in scope; claimant proof, recovery channel, expiry, session/credential mechanism and appointment-scoped authority remain unresolved. QR/reference possession alone cannot authorize changes. **D-070 limitation:** For 50 valid concurrent requests competing for one remaining capacity unit, exactly one booking succeeds and no other successful booking or overcapacity is permitted. Authoritatively rejected requests differ from temporarily unknown outcomes caused by lost transport/response; unknown does not mean confirmed failure. Establish prior authoritative outcome and same-intent relationship before retry, without a blind second booking. This interpretation preserves D-070, NFR-006/008 and the draft's §§8–9; no implementation/test result is claimed. **Open:** cancellation/rescheduling cutoff/windows/eligibility; Q-016 response-time and Q-022 availability targets; capacity/resource and duplicate identity/window policy; attendance transitions/corrections; QR lifecycle/revocation; staff authentication/permissions; guest recovery; safe-retry identity/outcome retrieval; paper conflicts/review/batch atomicity; existing-booking configuration impact; hosting custody/operator effective access. D-079 requires cutoff and remaining measurable quality-target dispositions before final Gate 2 approval; retention/deletion, exceptional operator-access duration and break-glass policy before Gate 3 security/privacy review approval; printed-roster handling/disposal before Gate 6 release approval. D-089 excludes MVP cancellation/no-show penalties while preserving operational records; unrelated service fees remain undecided and v0.7 fee references require separately approved versioned reconciliation under Requirements Governance §§6/8. D-081 is an assumption baseline; D-083–D-088 retain their own scopes. No endpoint, HTTP/transport/format, public account, guest proof technology, QR expiry, retry token/timeout, numeric target, attendance graph, physical schema, final architecture, Gate 2 exit, Gate 3 entry, implementation, database or deployment authorization follows. Mermaid source was inspected as Markdown, not parser- or visually rendered. | APPROVED (PO DECISION) — provisional working-design acceptance only | Not recorded — Product Owner confirmation supplied without an approval date | Product Owner |

---

## 9.9 Gate 2 Checkpoint 9 provisional working-design acceptance

The Product Owner's approval is limited to continued Gate 2 design. The accepted draft remains byte-for-byte unchanged. The Product Owner did not supply an approval date; the register's revision date records this entry and is not the approval date.

| ID | Decision and accepted artifact | Rationale | Consequences and limitations | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-091 | Provisionally accept `docs/architecture/CONFIGURATION_DEPLOYMENT_DESIGN.md`, **version 0.1**, artifact status **DRAFT — AWAITING PRODUCT OWNER REVIEW**, SHA-256 `1C9FE708D7E19528C7D19650C8C2DB59CD2C1F8C7D905E5ADCAC8E0163C2D11F`, solely as a technology-neutral working configuration and deployment design for continued Gate 2 architecture work. | Accepts the suitability of its independent per-client installation/data/configuration/credentials boundaries, both hosting-ownership models, one standardized supported-profile principle, client business authority distinct from technical custody, safe configuration-change treatment, controlled update/recovery proposals and privacy-conscious monitoring. | The responsibility matrices and recovery proposals are **not** approved operational assignments, controls or implementation. Q-008 and the real-backup verification limitation below remain open. No vendor, technology/version, numeric service target, configuration default, final architecture, Gate 2 exit, Gate 3 entry, implementation, database change, dependency installation, deployment or production activity is approved. | APPROVED (PO DECISION) — provisional working-design acceptance only | Not recorded — Product Owner confirmation supplied without an approval date | Product Owner |

**Explicit Product Owner limitations on D-091:**

- **Q-008 and access:** Client-managed and provider-managed responsibility matrices remain proposals. Credential custody, backup execution, restore approval, incident response and support must be sufficiently allocated and reviewed **before final Gate 2 architecture approval where needed to establish feasibility**. Host, database, backup or diagnostic access may give technical visibility but does not confer legitimate authority to use client records. D-020/D-035 installation isolation and D-034/D-075 no-default-operator-access remain binding.
- **Recovery evidence:** A synthetic-data restore rehearsal does **not** establish that a particular client's real backup can be restored. Before operational reliance, a separately approved privacy-safe real-backup verification approach is required. Backup cadence, RPO, RTO, recovery completeness, restore authority and client acceptance remain **OPEN**. No test result or recovery guarantee is approved.
- **Evaluation candidates only, NOT approved targets/defaults:** a daily full backup with potentially more frequent recovery points; **1-hour RPO**; **4-hour RTO**; **2-hour exceptional operator support session**; **2-second 95th-percentile ordinary response time under defined load**; and **99.5% monthly availability**. None is an approved requirement, service commitment, configuration value or implementation instruction. Feasibility, cost, security review and separate Product Owner disposition are needed; Q-016/Q-022 and D-079 remain open.
- **Other unresolved policy:** Q-020 cutoff/windows/eligibility; Q-007 compatibility/dependencies; capacity/resource and duplicate identity/window; guest proof/recovery; QR lifecycle and attendance correction; unknown booking outcomes/safe retry (D-070/D-090); paper reconciliation/roster custody; privacy retention/deletion; exceptional operator duration and emergency/break-glass; hosting effective access. D-089 excludes MVP cancellation/no-show penalties but retains normal operational records and leaves unrelated service fees undecided. D-081's Requirements Specification v0.7 fee references require separately approved versioned reconciliation under Requirements Governance §§6/8; FR-009/FR-011 remain deferred. D-083–D-090 keep their individual bounded scopes.
- **D-079 milestones unchanged:** cutoff and remaining measurable quality targets, including Q-016 response time and Q-022 availability, **before final Gate 2 architecture approval**; retention/deletion, exceptional operator duration and break-glass policy **before Gate 3 security/privacy design-review approval**; printed-roster handling/disposal **before Gate 6 release approval**. D-031 reserves exact dependency/runtime versions for Gate 4. D-084 selects no concrete profile.

---

## 9.10 Gate 2 Checkpoint 10 provisional working-design acceptance

The Product Owner provisionally accepted the fingerprinted draft solely as the Gate 2 working approach for continued architecture design. The approval date was not separately supplied; the revision date records this entry, **not** the approval date. The accepted artifact remains byte-for-byte unchanged, including its `DRAFT` and `NOT GRANTED` metadata.

| ID | Decision and accepted artifact | Rationale | Consequences and boundaries | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-092 | Provisionally accept `docs/architecture/COMPATIBILITY_DEPENDENCY_DESIGN.md`, **version 0.1**, artifact status **DRAFT — AWAITING PRODUCT OWNER REVIEW**, artifact approval **NOT GRANTED**, verified SHA-256 `55F1CB268A29F378541EDABC1038CFDA2E8A0A79475CE06C4D3D60C1192E75CA`, solely as a working Compatibility & Dependency Design for continued Gate 2 work. | Provides a bounded Q-007 working approach: one capability-based supported-profile principle for independent installations and both hosting models; a proposed matrix across application release, runtime/framework, database/driver and data/config revisions, web environment, frontend/browser, security maintenance and backup compatibility; direct/transitive dependency provenance/ownership/security/license/support review; later reproducible lockfile-or-equivalent resolution; and risk-based per-installation update, drift, deprecation, rollback and recovery review with minimal justified complexity. | Q-007 requires a separate explicit **final Gate 2 disposition**. No actual supported platform, package graph, compatibility range, test matrix, lockfile, operating system, web server, container, vendor, external service, numeric target or final architecture is approved; no dependency installation, implementation, database change, deployment, production action, Gate 2 exit or Gate 3 entry is authorized. The limits below remain part of this decision. | APPROVED (PO DECISION) — provisional working-design acceptance only | Not recorded — Product Owner confirmation supplied without an approval date | Product Owner |

**Scope and unresolved limitations of D-092:**

- D-022's Laravel, Blade, Tailwind CSS and MariaDB remain **preferred candidates**, not final selections; D-085's modular monolith remains a **provisional** per-installation direction. Docker remains conditional under D-023/D-036; D-032/P-006 do not adopt it. No exact runtime/framework/database/package versions, host, OS, container image or service is selected. D-031 reserves exact dependency/runtime versions for Gate 4 after prerequisite reviews and specific authorization. A reviewed lockfile or equivalent is a **future** reproducibility approach once technology is authorized, not an artifact installed or required now.
- Q-008 remains open: hosting duty, technical credentials/effective database/host/backup/diagnostic access, security updates, backup custody, restore authorization, incident response, support and client/provider boundaries require review. Both D-083 hosting models and D-084's one-profile principle remain mandatory; D-091 requires sufficiently concrete allocation before final Gate 2 architecture approval **where feasibility depends on it**. Infrastructure custody is not client-record business authority (D-034/D-075).
- D-091 still requires a separately approved **privacy-safe verification of a particular real client's backup before operational reliance**; a synthetic restore rehearsal cannot prove that backup is recoverable. Backup cadence/retention, RPO/RTO, restore authority, completeness and mechanism remain open. D-091's daily-full/more-frequent recovery-point, 1-hour RPO, 4-hour RTO, 2-hour operator-session, 2-second 95th-percentile response and 99.5% monthly availability figures remain **evaluation candidates only**, never approved SLAs, requirements, defaults or contractual commitments.
- D-070 still requires **exactly one** successful booking among 50 valid simultaneous requests for one remaining capacity unit, with no overcapacity. D-090 distinguishes authoritatively rejected attempts from temporarily unknown responses; a lost response is not a failed booking and cannot be blindly retried into a second success. Account-free guest booking and separately scoped management proof, QR/reference as lookup locator rather than identity or authority (D-045), explicit staff attendance, client installation/data separation and no default operator client-record access remain. D-089 excludes cancellation/no-show penalties from MVP but preserves ordinary operational records; FR-009/FR-011 and unapproved outbound messaging, payment services and mandatory public accounts remain outside MVP.
- **D-079 deadlines unchanged:** Product Owner cutoff disposition (Q-020) and remaining measurable quality-target dispositions (Q-016 response time, Q-022 availability) **before final Gate 2 architecture approval**; retention/deletion, exceptional operator-access duration and emergency/break-glass policy **before Gate 3 security/privacy design-review approval**; printed-roster handling/disposal **before Gate 6 release approval**. Q-009/Q-018, QR lifecycle/attendance correction, Q-007 final disposition and Q-008 remain open as recorded. Requirements Specification v0.7's fee-related wording requires separately approved versioned amendment and traceability impact review under Requirements Governance §§6/8; D-092 changes neither baseline nor D-081's development-stage-assumption status.

## 9.11 Gate 2 UI/UX checkpoint sequence amendment

The Product Owner approved the sequence and bounded design-evidence requirement below; no approval date was supplied. The recording date in revision 1.17 is not the approval date. Checkpoints 4–10 and their recorded decisions retain their historical identifiers and scopes.

| ID | Decision and approved scope | Rationale | Consequences and boundaries | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-093 | Insert **Gate 2 Checkpoint 11 — UI/UX Design & Prototyping** after provisionally accepted Checkpoint 10 and before **Gate 2 Checkpoint 12 — Integration & Traceability Review**. Checkpoint 12 is a new label for the previously unnumbered review, not renumbering an approved checkpoint. Require the bounded UI/UX design package in Gate Register §5 as an input to final Gate 2 architecture review: complete annotated screen/interaction-state coverage for required MVP workflows; screen/navigation mapping to requirements, `WF-*` workflows and `IF-*` logical contracts; minimal visual system and responsive/accessibility specifications; a connected high-fidelity prototype for representative critical journeys, not every screen; and recorded Product Owner/usability and accessibility design-review findings, inconsistencies, dependencies and provisional acceptance or revision request. | Complete the user-facing design and review its coverage before the cross-design integration review without duplicating existing behavioral and logical architecture work. | Checkpoint 11 is the next authorized internal Gate 2 activity but **NOT STARTED** by this governance amendment; Checkpoint 12 and unnumbered Final Gate 2 Review & Closure are pending. The package does not amend D-081's requirement baseline, approve a new policy, establish representative stakeholder validation or accessibility conformance, or accept final architecture. Unresolved guest proof/recovery, QR lifecycle, attendance corrections, cutoff, capacity/duplicate and paper-conflict rules remain provisional dependencies; Q-007 final disposition, Q-008, D-079 milestones and D-089 fee-reference reconciliation remain open. Gate 3 retains the dedicated Security, Privacy & Data Integrity review; Gate 2 remains IN PROGRESS, Gates 3–7 BLOCKED. This decision authorizes no UI implementation, design artifact work in the governance-amendment task, frontend package, database action, deployment, production access, Gate 2 exit or Gate 3 entry. | APPROVED (PO DECISION) — Gate 2 sequence and required design evidence only | Not recorded — Product Owner approval supplied without an approval date | Product Owner |

---

## 9.12 Successor to D-046 — optional registered-customer MVP path

**Status: APPROVED (PO DECISION) — exact wording approved; approval date not supplied.**
The Product Owner explicitly approved this exact decision wording and the linked exact
Requirements Specification v0.8 and Traceability revision 1.2. This decision is effective
for development-stage design only and does not transition a gate or authorize implementation.

**Approved effect:** D-094 supersedes D-046 only as to its deferral of public
self-registration/login and replaces only D-042's public-accounts deferral. All other D-042
deferred features remain deferred. D-061 remains in force: guest booking and authorized
account-free guest changes remain supported without mandatory public accounts. The
corresponding proposed Q dispositions are Q-002: optional customer registration is supported
in MVP, with installation enablement open under ACCT-L01; Q-003: public sign-in is supported
where enabled, with authentication mechanism open under ACCT-L02. These dispositions do not
close the remaining installation-policy or mechanism questions.

| ID | Proposed decision wording | Rationale | Proposed consequences and required follow-up | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-094 | **PROPOSED:** The MVP offers optional verified email/password customer accounts where client registration is enabled; disabling registration prevents new signups only. Existing verified accounts retain sign-in, dashboard and authorized management, while account-free guest booking and scoped guest management remain available in either setting. Guest and account bookings use the same service, eligibility, capacity, duplicate and integrity policies; account status grants no priority or internal authority. The dashboard shows authorized upcoming and retained past appointments. A guest appointment may be linked individually only to its independently verified original booker after explicit confirmation; matching personal information, account sign-in, reference or QR alone is insufficient. Booker, attendee and acting staff remain distinct; proxy booking and scheduling authority follow approved service restrictions. A contested claim restricts affected self-service actions pending authorized review without automatically cancelling the appointment. Deactivation removes account access but preserves appointments and required records; later management requires independently verified scoped guest access or authorized staff assistance. The public journey remains landing → optional guest/account entry → selection/live summary → details → final review → explicit submission → established outcome. | Incorporates the Product Owner's account, linking, proxy and lifecycle preferences while preserving guest parity and least privilege. | If approved, replaces only D-046/D-042's public-account deferral; D-061 and every other deferral remain. D-046 history stays intact. D-095 separately proposes the narrow exception to D-057/D-049. Proof procedures, sensitive-service restrictions, dispute review, retention and policy values remain dependencies in proposed v0.8 and Gate 2/3 review. Q-002/Q-003 dispositions require a separate recorded update. Exact v0.8/rev 1.2 approval is separate. Gate 1 history, Gate 2 IN PROGRESS and Checkpoint 11 authorized/NOT STARTED remain unchanged. No implementation or gate transition. | PROPOSED — NOT EFFECTIVE; PENDING OWNER APPROVAL | None | Product Owner |

## 9.13 Approved narrow email amendment to D-057 and D-049

The identifier D-095 is assigned to this approved narrow amendment. It changes only the
automated outbound email deferral in D-057/D-049; their immediate on-screen/printable
confirmation obligation and all other historical decisions remain intact.

| ID | Proposed decision wording | Rationale | Proposed consequences and required follow-up | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-095 | Permit purpose-limited email for account verification, password recovery, appointment-scoped guest access, and established booking, cancellation and rescheduling transactions. Send only to approved recipients with content limited by their authority; a booker email must not expose restricted attendee details. An email address, delivered link, reference or QR does not alone prove attendee identity, guardianship or authority over another appointment. A committed appointment transaction remains committed if email is delayed or fails; provide the established on-screen/printable outcome and a safe recovery path. Email failure must not cause a duplicate command or false success claim. SMS, phone OTP, reminders, marketing and unrelated automated messaging remain outside MVP. | Supports the Product Owner's essential security and transaction email preference without expanding message purposes or appointment authority. | Amends D-057 and D-049 only for these six email purposes; D-057/D-049 history is preserved. Recipient, consent/notice, verification, token/session, abuse, delivery/failure and provider details require Gate 2 design and Gate 3 security/privacy review. No external service, technology, numeric expiry, retry count or legal conclusion is approved. FR-010 and related requirements/traceability are included in approved v0.8/revision 1.2. | APPROVED (PO DECISION) — exact wording approved; approval date not supplied | Not supplied | Product Owner |

### Approval recording — D-094, D-095 and requirements amendment

The Product Owner explicitly approved the exact proposed wording of D-094 in §9.12 and
D-095 in §9.13, Requirements Specification v0.8, and Requirements Traceability revision
1.2. This approval supersedes the pending/proposed status statements written when the
package was prepared. The approval date was not supplied and is recorded as **not supplied**;
the 2026-11-04 document recording date is not represented as the approval date.

D-094 supersedes D-046 only for public account registration/login deferral and replaces
D-042's public-accounts deferral only. D-061 and all other D-042 exclusions remain in force.
D-095 amends D-057/D-049 only for the six stated email purposes; all other messaging remains
deferred. Requirements v0.8 and Traceability revision 1.2 are the effective development-stage
assumption baseline, not `VALIDATED` evidence or release approval. The exact v0.7/revision 1.0
baseline remains preserved in its historical records.

**Subsequent baseline update (2026-11-12):** The Product Owner approved Requirements
Specification v0.9 and Traceability revision 1.3 as the current effective baseline for their
stated amendment. The 2026-11-04 approval of v0.8/revision 1.2 remains a valid historical
approval; those versions and v0.7/revision 1.0 remain preserved predecessors. No other D-094,
D-095 or D-105 scope is changed by this update.

**Current effective state:** D-094 replaces the public-account deferral only; D-061 continues
to require account-free guest booking and eligible guest changes. Q-002 is RESOLVED for MVP:
optional customer registration is supported, with installation enablement open under ACCT-L01.
Q-003 is RESOLVED for MVP: public sign-in is supported where enabled, with authentication
mechanism open under ACCT-L02. Draft-local ACCT-L01–ACCT-L08 in
`docs/requirements/REQUIREMENTS-SPECIFICATION-v0.8.md` enumerate unresolved policy questions;
they are not Decision Register question IDs.

**Gate 1 amendment route:** Requirements Governance §§6/8 provide a versioned material-change
route and do not require automatic Gate 1 reopening for every such amendment. The Product
Owner's direction was recorded as a targeted Gate 1 amendment, preserving D-082's historical
Gate 1 approval and current gate status. No Gate 1 reopening or closure transition was made.

**Checkpoint 11 status/evidence reconciliation:** D-093 records Checkpoint 11 as authorized,
NOT STARTED. The current working tree contains Checkpoint 11 design documents and prototype
artifacts, but their presence alone does not establish when or under what authority they were
produced, nor establish Product Owner review, acceptance or completion. The Product Owner
confirms that Checkpoint 11 is **not accepted or completed**. Retain the recorded NOT STARTED
status pending a separately evidenced status decision; do not claim the artifacts prove a
checkpoint transition. Gate 2 remains IN PROGRESS.

## 9.14 Bounded Checkpoint 11 prototype authorization and landing/login design exception

**Status: APPROVED (PO DECISION) — exact scope authorized; approval date not supplied.**
This decision records the Product Owner's explicit authorization supplied on 2026-11-04.
The recording date is not represented as a separately supplied approval date.

| ID | Approved decision | Rationale | Consequences and boundaries | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-096 | Modify, extend and locally browser-verify the fictional-data-only Checkpoint 11 prototype for public landing/login, optional registration/account recovery, guest booking/confirmation/management, registered-customer dashboard, individual guest-to-account appointment linking, and relevant success, failure, denied-access, email-delivery and unknown-outcome states. Reuse the existing Checkpoint 11 prototype and `prototype/landing-login-preview/` where practical. For public landing and login only, permit restrained gradients and localized glow inside a dedicated holographic illustration/visual stage, slow nonessential illustration motion, subtle view transitions, split-stage composition and distinct landing/login layouts. | Resolves the earlier prototype-modification restriction for the bounded Checkpoint 11 work and permits the narrowly scoped public entry presentation requested by the Product Owner while retaining iTakda's established identity. | Fictional data and simulated interactions only. No production authentication, appointment processing, email delivery, database operation, migration, production application code, CEAP access, dependency installation, global configuration, commit, push, merge or deployment. Preserve the exact iTakda brand colors and soft-neumorphic system. Keep text, forms, controls and task-focused surfaces readable and free of decorative glow; preserve visible keyboard focus, contrast, responsive behavior, reduced-motion support and full usability without visual effects. Exception does not cover booking, calendar, dashboard, staff or other application screens. This authorization supersedes only the prior statement that the prototype may not be modified; historical D-093 and the previous reconciliation are retained. Checkpoint 11 is authorized/in progress, **not accepted and not completed**. Gate 2 remains IN PROGRESS; no gate transition, final architecture approval or release approval. | APPROVED (PO DECISION) — bounded work authorization and visual exception only | Not separately supplied; recorded 2026-11-04 | Product Owner |

The local prototype must clearly identify its simulated nature and must not imply that
browser-side account checks, guest proof, linking, email, booking or appointment changes
establish real identity, authority, delivery or persisted outcomes. Unresolved proof, session,
installation enablement, recipient, retention, service-policy and abuse-control decisions stay
open under Requirements Specification v0.8 §6 and Gate 3 review. This decision does not amend
approved requirements or relax any non-landing/login design restriction.

### Current status after D-096

Checkpoint 11 has explicit Product Owner authorization to start the bounded prototype work.
The work is in progress; no Product Owner usability/accessibility review has yet been recorded,
and no Checkpoint 11 acceptance or completion is implied. The earlier NOT STARTED/no-modification
statements remain preserved as historical records and are superseded only as to authorization
and start status by D-096. Gate 2 remains IN PROGRESS; Checkpoint 12 and final Gate 2 review
remain pending; Gates 3–7 remain blocked.

## 9.15 Fictional Staff and Administrator prototype scope expansion

**Status: APPROVED (PO DECISION) — bounded prototype work only.** The Product Owner explicitly confirmed this expansion in this chat on 2026-11-05.

| ID | Approved decision | Rationale | Consequences and boundaries | Status | Approval date | Approver |
|---|---|---|---|---|---|---|
| D-097 | Expand Checkpoint 11 authorization to design, modify and locally verify fictional-data Staff and Administrator workspaces, including dashboards, appointment workflows and role-specific profiles. Use an explicit demo-role preview control. | Allow connected role-aware UI/UX evaluation in the existing prototype. | Supersedes D-096's scope limit only for these additional fictional prototype screens. No production implementation, database change, real authentication, external data, CEAP access, dependency installation, commit, push or deployment. No final approval of unresolved permissions, policy values or role escalation. Preserve public/customer journeys and the landing/login-only visual exception. Gate 2 and Checkpoint 11 remain IN PROGRESS, not accepted or completed; Gates 3–7 remain blocked. | APPROVED (PO DECISION) — prototype scope only | 2026-11-05 | Product Owner |

## 9.16 Lightweight Spec-Driven Development transition

The Product Owner approved this transition on 2026-11-10. It changes the development process only;
approved product requirements, traceability, scope, deployment model, and prior decisions remain
unchanged.

| ID | Approved decision | Rationale | Consequences and boundaries | Status | Effective date | Approver |
|---|---|---|---|---|---|---|
| D-098 | Adopt **Specify → Plan → Implement → Verify → Accept** as the routine lifecycle for future product changes, with low-risk cosmetic, ordinary, and high-risk change classes and approvals as defined in Engineering Governance §5. Ordinary implementation requires prior Product Owner approval of its feature spec and bounded scope; high-risk work requires explicit Product Owner authorization and applicable specialist review. Grant standing authorization only for presentation-only changes within an already approved design scope, subject to review and verification. Prospectively supersede unfinished routine Gate 2 progression; preserve its historical IN PROGRESS status, evidence, and approved working-design dispositions. Retain Checkpoint 11 as an unfinished, unaccepted design baseline; future improvements use authorized feature-level SDD work. Retain security/data-integrity review and separate release/deployment approvals independently of gate numbering. Preserve CEAP isolation and all existing product decisions. | Replace routine sequential gate progression with a small, spec-centered change flow while retaining risk-appropriate authorization and essential safety/release controls. | No specification self-authorizes implementation. Cosmetic standing authorization excludes new features/interactions, workflow/business-rule changes, authentication, authorization, permissions or identity-verification changes, personal-data collection/processing/disclosure, database/API changes, dependencies/external services, deployment/production configuration, approved-requirement changes, and unresolved policy. It does not broaden D-096/D-097 or authorize production implementation, application behavior, database operations, deployment, CEAP access, or work outside these exact boundaries. Former Gates 3–7 are not routine sequential prerequisites; applicable security, verification, release and operational controls remain. Gate 2 is not completed or accepted. Checkpoint 11 is not accepted or completed. | APPROVED (PO DECISION) | 2026-11-10 | Product Owner |

## 9.17 Checkpoint 11 animation dependency experiment

| ID | Approved decision | Rationale | Status | Approval date | Approver |
|---|---|---|---|---|---|
| D-099 | Amend D-096 and D-097 only to permit a five-package, isolated dependency experiment in `prototype/checkpoint-11/`. Authorize creation of an npm manifest and lockfile there and installation of exact pinned compatible versions of GSAP (`gsap`), Motion (`motion`), Three.js (`three`), Rive's web canvas runtime (`@rive-app/canvas`, or a documented appropriate current web runtime), and Lenis (`lenis`). Authorize local dependency-resolution, package-size/security review, and bounded browser smoke checks. Installing a package does not authorize loading it into the prototype page, changing prototype behavior, adding it to the Laravel application, or selecting it for production. D-096/D-097's other restrictions remain effective; Checkpoint 11 remains unfinished and unaccepted. No gate transition, production application implementation, database, CEAP, deployment, commit, push, or merge is approved. | Evaluate the five packages in isolation before any decision on integration. | APPROVED (PO DECISION) | 2026-11-10 | Product Owner |

The Product Owner approved the exact wording, scope and acceptance criteria in
[`CHECKPOINT-11-ANIMATION-DEPENDENCY-EXPERIMENT.md`](../archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-ANIMATION-DEPENDENCY-EXPERIMENT.md)
in the D-099 approval message on 2026-11-10. Gate 2 and Checkpoint 11 retain their recorded statuses.
Experiment verification and the Product Owner's subsequent acceptance are recorded below.

**D-099 experiment acceptance (2026-11-10):** The Product Owner accepted the bounded
dependency experiment as **PASS WITH MINOR ISSUES**, assisted by Codex, without claiming
an independent human technical review. The accepted evidence and limitations are recorded
in the experiment specification's approval and acceptance section. Offline installation
was not reproduced because a `tslib` tarball was absent from the local cache; browser
smoke-test evidence is in the conversation rather than a separate artifact. All 33 original
prototype files matched immediately after the experiment; three CSS files now differ from
the pre-experiment baseline, with timing and cause unconfirmed and no attribution to D-099.
This accepts the dependency experiment only. Checkpoint 11 remains unfinished and
unaccepted; no gate transition or application implementation is authorized.

## 9.18 Checkpoint 11 first-increment motion authorization

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-100 | Approve the exact final first-increment section of `docs/specs/CHECKPOINT-11-MOTION-DESIGN-PROPOSAL.md` and its bounded fictional prototype implementation scope, including once-only informational-section reveals. Use CSS and scoped browser APIs. Preserve immediate navigation and focus, reduced-motion behavior, the existing SVG, package manifests, and the three previously identified CSS files. Do not load the five D-099 experiment libraries or add dependencies or assets. Verify against the approved plan and report performance failures and unverified checks. D-096/D-097 history and all other boundaries remain; Gate 2 and Checkpoint 11 remain unfinished and unaccepted. No application implementation, deployment, commit, push or merge is authorized. | APPROVED (PO DECISION) — prototype first increment only | Not separately supplied | Product Owner |

The Product Owner's authorization was supplied in this conversation without a separately stated approval date. Acceptance of the implementation and Checkpoint 11 require separate Product Owner review.

## 9.19 Checkpoint 11 prototype skip-link correction authorization

The Product Owner explicitly authorized a separate bounded fictional-prototype correction for
the skip-link routing defect and supplied the expected behavior and restrictions in the current
request. The approval date was not separately supplied. This authorization does not change D-100's
scope or accept D-100 or Checkpoint 11. The recorded feature specification is
[`CHECKPOINT-11-SKIP-LINK-CORRECTION.md`](../archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-SKIP-LINK-CORRECTION.md);
Product Owner approval of that specification is not separately evidenced and remains pending
under Engineering Governance §5. Do not treat this entry as approval of the new artifact.

**Prospective D-101 disposition:** The preceding specification-approval prerequisite is retained
as history. Under the Prototype Exploration Exception, the authorized skip-link correction is a
qualifying routine prototype accessibility/navigation refinement, and approval of the separate
specification is no longer a prerequisite. This does not claim implementation or acceptance.

## 9.20 Prototype Exploration Exception

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-101 | Establish the Prototype Exploration Exception in Engineering Governance §5 for isolated, fictional, non-production UI/UX prototypes. Grant standing authorization for qualifying routine visual, animation, responsive, interaction, navigation, and accessibility refinements with concise change summaries and appropriate browser verification, without a separate feature specification or approval cycle for each refinement. Routine qualifying prototype refinements may be grouped into a concise change summary; individual decision-register entries, feature specifications, and Product Owner approval cycles are not required. Prospectively supersede D-098’s feature-level specification and approval requirement only for those qualifying prototype refinements, and supersede D-096/D-097’s landing/login-only visual restriction only as stated in the exception. Preserve the remaining boundaries and historical records of D-096–D-100. New dependencies, major scope expansion, real application behavior, security-sensitive changes, and deployment continue to require explicit authorization and applicable review. CEAP and production isolation remain mandatory. This decision does not change approved product requirements or implementation-stage governance and does not accept D-100 or Checkpoint 11. The Product Owner’s prior skip-link correction authorization remains recorded; its pending specification is retained as historical context and is no longer a prerequisite for that qualifying prototype correction. | APPROVED (PO DECISION) | Not separately supplied | Product Owner |

The Product Owner approved the proposed D-101 exception and four-document recording scope in the
current conversation, including the narrow prospective relaxation and the grouped-summary
clarification. The approval date was not separately supplied. No prototype correction, D-100
acceptance, Checkpoint 11 acceptance, gate transition, or production implementation is implied.

## 9.21 Significant technology decision due diligence

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-102 | Every significant technology decision must document benefits, trade-offs, credible failure scenarios, prevention/mitigation/recovery strategy, verification criteria and remaining risks before implementation approval. Significant includes high-impact, security-sensitive, operationally important, expensive-to-reverse or difficult-to-recover choices. Depth is proportional to risk and complexity; document alternatives and selection rationale where relevant. Define verification criteria before implementation approval and produce actual evidence when applicable testing is authorized and executed. Residual risks must be visible to the Product Owner; unresolved risks are not silently accepted. Record this principle in Engineering Governance §15, preserving existing approval and security-exception controls. | APPROVED (PO DECISION) — evaluation principle only | Not separately supplied | Product Owner |

The Product Owner explicitly approved the principle and its bounded Governance/Decision Register
recording in the current combined planning instruction. Recorded 2026-11-12; this is the
recording date, not an inferred approval date. D-102 selects no technology, dependency, version,
provider or mechanism, authorizes no implementation or deployment, and accepts neither Session
07 nor Gate 2. Existing decisions and historical approvals retain their recorded scopes.

## 9.22 Bounded identity and permission design directions (SEC-Q03)

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-103 | Support SEC-Q03-A–E as bounded design-policy directions within existing requirements: design account-free, appointment-scoped online guest management with independent original-booker authority and authorized assisted recovery; prefer customer-initiated individual linking with authenticated account control, independent proof, explicit confirmation and audit, with equally constrained assisted fallback. Preserve distinct booker/attendee/proxy/guardian contexts, minimal common information and service-specific permitted actions/visibility before affected workflows; refer uncertain, disputed or sensitive representative claims for authorized assistance. Restrict case review to explicitly assigned trained staff/supervisors with the approved case-review permission; hold only the affected contested link/action, preserving appointment and permitted attendance, with no claimant self-release, automatic cancellation or broad reversal privilege. Default to non-data technical support; exceptional client-data access retains explicit client authorization, least privilege, scope/duration, attribution, review and closure under both approved hosting models. | APPROVED (PO DECISION) — bounded design directions only | Not separately supplied | Product Owner |

Approval provenance: the Product Owner's current Session 07 SEC-Q03 / PRIV-Q01 master instruction explicitly authorizes these directions and their bounded recording. Recorded 2026-11-12; this is not an inferred approval date. References, QR, personal-data matching, account or email possession alone remain insufficient original-booker proof. Training is a design criterion for later assignment, not an approved training program or new role. Exact proof/recovery mechanisms, representative evidence, staffing, procedures and escalation remain open; no managed support entitlement is created. D-094/v0.8, D-075 and existing permission/hold restrictions remain authoritative and unchanged. No new FR/AC text or physical/technical mechanism is approved. See [Security's recorded directions and D-102 assessment](../security/SECURITY.md#recorded-sec-q03-and-priv-q01-directions) for benefits, alternatives, failure/recovery, future verification, residual risks and decision dependencies.

## 9.23 Initial jurisdiction and bounded privacy planning directions (PRIV-Q01)

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-104 | Record the Philippines as the initial intended operating jurisdiction and general-purpose appointment management for small-to-medium appointment-driven businesses as the initial service context, preserving D-041's staffed-front-desk segment and future-market dispositions. The product remains reusable independent client installations, not shared SaaS; no permanent Philippine-only architecture or claim that only Philippine law applies. Support PRIV-Q01-B–E: prefer a minimal common booking-data catalog with justified service extensions subject to purpose, necessity, visibility, validation and qualified privacy review; category-and-purpose-based retention assessment covering appointment/account/proof/audit/diagnostic/email/paper/backup/restored data; explicit actual installation/provider responsibility allocation in both hosting models and review of provider processing before adoption; client-led privacy-request handling as an initial operational planning assumption with separately authorized technical assistance. Managed privacy support requires a distinct decision. | APPROVED (PO DECISION) — jurisdiction and bounded planning directions only | Not separately supplied | Product Owner |

Approval provenance: explicit Product Owner confirmation of the initial Philippines context and bounded PRIV-Q01-A–E directions in the current Session 07 instruction. Recorded 2026-11-12, not an inferred approval date. Other-jurisdiction or sensitive-service expansion requires applicable review without changing approved future-market status. No new data field/schema, default identity-document collection, universal guardian rule, retention period, deletion guarantee, legal basis, provider, controller/processor assignment or contractual duty is selected. Deactivation continues to preserve appointments. Verified intake, escalation, incident ownership, evidence preservation and applicable reporting need qualified review and actual allocation. No legal compliance, certification, PIA completion or assessment sign-off is claimed. See [Security's directions and D-102 assessment](../security/SECURITY.md#recorded-sec-q03-and-priv-q01-directions) and its [qualified review register](../security/SECURITY.md#qualified-philippine-privacy-and-security-review-register).

## 9.24 Internal MFA coverage policy (SEC-Q02)

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-105 | Require MFA before protected internal application access for every authenticated internal user, including staff, supervisors, administrators and installation-local super-admins. Technical operators are covered only when separately authorized for protected internal application access. Public guests and customer-facing accounts are outside this policy. Secure, accessible and individually attributable MFA pathways must be available to authorized internal users without personal devices. Shared factors, shared credentials and undocumented bypasses are prohibited; failed or uncertain verification does not grant protected access. Sensitive actions require reviewed risk-based fresh verification; routine interactions do not automatically require repeated MFA. Enrollment, factor replacement, revocation, recovery and deactivation require controlled, attributable processes. Single-super-admin recovery must be independently authorized without standing developer/operator access. This decision establishes policy coverage only; it selects no factor, package, vendor, session interval, reauthentication trigger value, recovery protocol or implementation mechanism. | APPROVED (PO DECISION) — MFA coverage policy only | Not separately supplied | Product Owner |

Approval provenance: The Product Owner explicitly adopted this bounded MFA coverage policy in the Gate 2 Batch 1 review instruction. Approval date was not separately supplied. Recorded 2026-11-12; this is not represented as the approval date. Benefits, alternatives, failure scenarios, mitigation/recovery, verification criteria and residual risks are documented in [Security's SEC-Q02 disposition and D-102 assessment](../security/SECURITY.md#sec-q02-disposition-mfa-coverage-policy). **Subsequent exact-version approval:** Requirements Specification v0.9 and Traceability revision 1.3 were explicitly approved by the Product Owner in the current Gate 2 formal-approval instruction; approval date not separately supplied; recorded 2026-11-12. This records the normative wording without changing D-105's policy scope. Factor selection, accessible-method evaluation, session policy, recovery mechanisms, operational custody and implementation remain open. This decision does not approve an SDD, implementation, deployment, legal compliance, release or Gate 2 closure.

D-103/D-104 record approved directions only, not acceptance of the expanded Security document, its remaining proposed safeguards, Session 07, Gate 2 or Checkpoint 11. Significant selections and material requirements changes retain their existing approval/versioning controls. Implementation and deployment remain unauthorized.

## 9.25 Product and scheduling policy directions

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-106 | For iTakda's independently installed client product: require minimum common booking information; distinguish booker from attendee; permit service-specific additions only after purpose, necessity, visibility, validation and qualified privacy review. Support configurable recurring availability and explicitly dated exceptions; ambiguous/conflicting exceptions do not silently create availability, the system remains accessible while affected availability is restricted, and existing appointments are not automatically cancelled. Use one configured duration per service in initial scope, with preparation/cleanup buffers reserving applicable staff/resource availability separately from customer-visible duration. Enforce applicable capacity and resource constraints together. Use configurable duplicate warning/blocking policies based on approved attendee/eligibility criteria and comparison windows, never booker contact alone or as a bypass of core checks; permitted warning continuation requires accessible explicit acknowledgement and ordinary users cannot bypass blocking. Use separate cancellation/rescheduling eligibility, cutoffs relative to scheduled appointment start in the installation business time zone, an inclusive boundary, and no penalties. | APPROVED (PO DECISION) — policy directions and clarifications only | Not separately supplied | Product Owner |

Approval provenance: Exact SERVICE, SCHEDULE, DUPLICATE and CUTOFF directions and the three related clarifications were supplied in the Product Owner Approval Evidence in the current Gate 2 conversation. Recorded 2026-11-13; this is not an inferred approval date. Client-specific fields/values, resource categories, capacity units, duplicate matching/window details, detailed exception rules and technical mechanisms remain open. Existing D-043/D-044/D-048/D-059/D-060/D-066/D-070/D-079/D-085/D-089/D-098/D-102 constraints remain. No requirements baseline amendment or implementation authorization is implied.

## 9.26 Booking-integrity policy choices

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-107 | At final booking, enforce both applicable capacity and required resource constraints. Prevent overlapping exclusive-resource reservations; shared-resource limits must be explicitly configured. Apply duplicate checks using approved attendee identity, service and policy window rather than booker contact alone; configure comparison windows per service. Exceptions require permission-specific authority, a recorded reason and attributable audit evidence; no blanket bypass is permitted. Deny post-cutoff self-service actions; separately authorized staff handling follows defined policy. Preserve accepted appointments and require SDD-022 impact review before affected configuration changes. Use an explicit installation business time zone and reject ambiguous local times. | APPROVED (PO DECISION) — booking-integrity policy choices only | Not separately supplied | Product Owner |

Approval provenance: The eight Booking Integrity choices were supplied as Batch 1 in the Product Owner Approval Evidence in the current Gate 2 conversation. Recorded 2026-11-13, not an inferred approval date. Final transaction, atomicity, same-intent reconciliation and concurrency contract belongs to SDD-006; accepted-appointment impact handling belongs to SDD-022. No numeric limits, matching algorithm, database/locking mechanism or implementation is selected. D-070 remains a future verification obligation, not a passing result.

## 9.27 Identity, security and access policy choices

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-108 | Apply default-deny authorization by actor, service and action; no self-elevation; separately authorize sensitive actions. Additional super-admin appointment requires independent approval and fresh verification with no self-approval; sole-super-admin recovery requires an independent documented authorization path and no unrestricted bypass. Preserve accessible MFA with controlled recovery and no ordinary bypass under D-105. Preserve account-free guest booking and require independent appointment-scoped proof for existing appointment access. Distinguish booker, attendee and representative permissions; uncertain claims are denied or referred for authorized assistance. Contested claims restrict affected management actions while preserving the appointment and otherwise permitted attendance, without automatic cancellation. Operators have no standing access to client business data; exceptional access requires client authorization. Separate audit viewing from export permission and attribute access. Retain minimum necessary diagnostic evidence and neutral public-facing security failures. | APPROVED (PO DECISION) — security/access policy choices only | Not separately supplied | Product Owner |

Approval provenance: The ten Security and Access choices were supplied as Batch 2 in the Product Owner Approval Evidence in the current Gate 2 conversation. Recorded 2026-11-13, not an inferred approval date. D-103/D-105 remain in force within their existing scopes. MFA/proof factors, role assignments, independent authorization/recovery procedure, reader/export matrices, evidence retention and implementation mechanisms remain open. No legal conclusion or implementation authorization is implied.

## 9.28 Operations, reliability, UX and engineering policy choices

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-109 | Preserve confirmed bookings when email delivery fails and recover notification processing independently; report truthful delivery states without guaranteeing inbox receipt. Require protected backups and tested restoration before operational reliance. Define measurable recovery objectives for supported operating profiles after feasibility evaluation. Define supported deployment profiles and allocate actual responsibilities per installation. Document maintenance ownership, rollback and incident response before operation. Minimize personal data, require qualified review and make retention installation-specific. Verify accessibility with automated and human keyboard, screen-reader, zoom and touch review against the approved target. Distinguish uncertain booking outcomes and reconcile safely rather than blindly retrying. Evaluate realistic measurable performance/availability targets before approval; D-070 concurrency tests are not latency promises. Evaluate minimal compatible technical choices under D-102 before adoption. Define bounded configurable client-branding direction and evaluate localization separately. | APPROVED (PO DECISION) — operations/reliability/UX/engineering directions only | Not separately supplied | Product Owner |

Approval provenance: The twelve Operations, Reliability, UX and Engineering choices were supplied as Batch 3 in the Product Owner Approval Evidence in the current Gate 2 conversation. Recorded 2026-11-13, not an inferred approval date. Exact targets, supported profiles, allocations, providers, tools, branding fields/mechanism, retention periods, recovery mechanisms and specialist findings remain open. Q-016/Q-022 evaluation approach is approved, not numeric values. No SDD acceptance, technical selection, implementation, operational reliance, legal compliance or Gate 2 closure is implied.

## 9.29 Execution operating contract direction

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-110 | Adopt a compatibility-first execution operating direction for authorized iTakda work: use bounded packages with explicit deliverables and exit criteria; reuse approved decisions; record approvals promptly with provenance; parallelize independent tasks under exclusive write ownership and lead integration; classify blockers, deferred matters and installation-specific choices with owners and milestones; validate changed work and dependent contracts proportionately to risk; and seek Product Owner review at meaningful checkpoints without self-approval. Preserve Engineering Governance §§5, 7, 9, 18 and 21, D-098/D-101, specialist reviews, and separate implementation, acceptance and release authorities. | APPROVED (PO DECISION) — operating direction; exact Engineering Governance revision 1.4 amendment separately accepted | Not separately supplied | Product Owner |

Approval provenance: The Product Owner accepted the proposed operating-contract rule in the referenced “Gate 2 — Architecture & Technical Design” conversation (conversation ID `6ae2fbef-1a88-83ec-9d89-1dd9c9a32f1b`) and requested this bounded, compatibility-first documentation amendment. The Product Owner then accepted the exact Engineering Governance revision 1.4 amendment presented in the preceding report, limited to D-110 wording. Both were recorded 2026-11-13; approval dates were not separately supplied. D-110 authorizes no application code, dependency, database, CEAP, Git, deployment or release action; it does not complete Gate 2 or Checkpoint 11, approve another artifact by its existence, or relax an existing stop condition.

**Subsequent limited amendment:** D-120 adds the expressly defined Product Owner low-risk self-review and ordinary design-review arrangements; D-110's self-approval prohibition remains effective outside the scopes expressly permitted by D-119 and D-120. All other D-110 controls and its historical approval remain intact.

## 9.30 Targeted technical investigation priorities

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-111 | Endorse five TECH-WP-02 investigation priorities: (1) explicit InnoDB transactional conflict protection and comparison against optimistic alternatives; (2) organization-provided cryptographic authentication keys and accessible alternative/recovery approaches; (3) transaction-coordinated required evidence and durable notification intent; (4) evaluate a minimally composed native Laravel/PHP/MariaDB installation first, comparing containerized and recovery alternatives against actual operational needs; and (5) prepare parallel qualified privacy, security, accessibility, data-integrity and applicable legal review handoffs. | APPROVED (PO DECISION) — investigation priorities only | Not separately supplied | Product Owner |

Approval provenance: The Product Owner explicitly endorsed these five priorities in the current conversation's “Product Owner Decision Recording and Targeted Architecture Evidence” instruction. Recorded 2026-11-13; this recording date is not an inferred approval date. The endorsement selects no binding technical mechanism, framework/database version, provider, MFA factor, guest-proof mechanism, deployment profile, recovery target or residual risk. It approves no SDD revision, implementation, release, qualified-review finding or Gate 2/Checkpoint 11 closure. D-106–D-110 and existing requirements, specialist review and authorization controls retain their recorded scopes. Rationale: focus limited evidence development on the candidates identified in [TECH-WP-02](../technical/TECH-WP-02-DECISION-PACKAGE.md); alternatives remain relevant where needed to establish feasibility and trade-offs.

## 9.31 Checkpoint 11 design and prototype acceptance

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-112 | Accept Checkpoint 11 (UI/UX Design & Prototyping) within its documented design and prototype scope as representative design evidence under D-093. The accepted scope includes the current CP11 reconciliation and review package and the connected representative journeys recorded there, including the administrator appointment-review → permission-denial → unchanged-appointment journey. The prototype is illustrative and is not required to implement every approved SDD workflow. All applicable approved SDD requirements remain mandatory for implementation, verification and release unless formally changed or deferred through the approved governance process. Acceptance is subject to the documented limitations and does not establish real authentication, MFA, authorization enforcement, persistence, full accessibility conformance, qualified specialist approval or production readiness. Preserve historical evidence and existing worktree changes. Do not close historical Gate 2, initiate CP12, modify approved SDDs, perform Git writes or access CEAP. | Records the Product Owner's explicit checkpoint-level acceptance without promoting the prototype to production, final architecture or an implemented feature. | APPROVED (PO DECISION) - CP11 design/prototype acceptance only | 2026-11-13 - supplied by the Product Owner in the current instruction; no separate approval date stated | Product Owner |

Approval provenance: The Product Owner supplied the CP11 acceptance and its limitations in the current instruction after reviewing the focused administrator appointment journey and the CP11 reconciliation package. Recorded 2026-11-13. This acceptance is limited to CP11 design and prototype evidence under D-093; it does not approve implementation, a technical mechanism, a production permission matrix, specialist findings or release. Historical Gate 2 remains IN PROGRESS and unfinished; CP12 and the final Gate 2 review remain not recorded complete; Q-007 and other applicable historical dispositions remain open. D-096/D-097/D-100/D-101 and all prior approvals retain their recorded scopes.

## 9.32 Conditional SDD-001 local toolchain direction

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-113 | Conditionally approve Laravel Framework 13.40.0, PHP 8.5.12-1 x64 NTS isolated from XAMPP, Composer 2.11.2 invoked with that PHP, and PHPUnit 13.4.1 subject to successful compatibility verification against the actual Laravel 13 application skeleton. Prioritize stable supported versions, reproducibility, compatibility and preservation of existing local projects. Before finalizing, verify integration, required extensions, dependency constraints, installation scripts and isolated runtime behavior; report incompatible components with a supported alternative for Product Owner approval. | CONDITIONALLY APPROVED — local SDD-001 direction only; verification and final baseline pending | Not separately supplied; recorded 2026-11-13 | Product Owner |

Provenance: Product Owner instruction “iTakda — FND-Q01 Conditional Approval” in this conversation. No downloads, installations, application implementation, Git writes, database operations, deployment or CEAP access are authorized. Do not modify XAMPP, Apache configuration, global PATH or existing PHP installations. The approved SDD-001 remains unchanged. [FND prerequisite review](../technical/FND-PREREQUISITE-REVIEW.md) records the upstream skeleton's PHPUnit constraint and prohibited default scripts; these findings are not an integration test or a final toolchain approval.

## 9.33 SDD-001 technical direction and PHPUnit choice

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-114 | Retain Laravel Framework 13.40.0, isolated PHP 8.5.12-1 x64 NTS and Composer 2.11.2 as proposed; select Option B, the latest appropriate supported PHPUnit 12.x patch compatible with the official Laravel 13 application skeleton and PHP 8.5. This supersedes only D-113's provisional PHPUnit 13.4.1 selection. Preserve XAMPP, Apache, global PATH, existing PHP and other projects; exclude SQLite creation, migrations, database connections and external dispatch from SDD-001. Approve the general FND-Q02 and FND-Q04 direction subject to final engineering/security review of exact configuration, diagnostics, initialization and verification contracts. | APPROVED — technical direction only; exact patch, full dependency/runtime verification and applicable specialist review remain subject to documented conditions | Not separately supplied; recorded 2026-11-13 | Product Owner |

Provenance: Product Owner instruction “iTakda — Product Owner Approval of SDD-001 Technical Direction” in this conversation; recording date is not an independently supplied approval date. Approval covers decision recording and prerequisite preparation only. It does not authorize dependency downloads, software installation, application implementation, branch/worktree creation, staging, commits, pushes, merges, database operations, deployment or CEAP access. SDD-001 v0.3 and unrelated D-113 boundaries remain unchanged. See the current [prerequisite review](../technical/FND-PREREQUISITE-REVIEW.md#current-decision-and-remaining-prerequisites-2026-11-13).

## 9.34 Proposed bounded Gate 2 remediation authorization

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-115 | Authorize a bounded Gate 2 closure-remediation package limited to: (a) verifying and reconciling existing approval evidence; (b) correcting demonstrably editorial status, provenance and trace-reference contradictions in approved SDD files and active documentation where a primary record establishes the intended status, without changing approved requirements, design substance, policy values or selected mechanisms; (c) repairing verified broken internal documentation links without changing meaning; (d) initiating and executing the CP12 design-to-requirements integration review as a review activity, including bidirectional coverage matrices, findings and proposed dispositions; (e) preparing the final Gate 2 architecture review and closure package; and (f) preparing recommended dispositions for Q-007, Q-008, Q-016 and Q-022. The Product Owner confirms that the exact revisions identified in SDD Registry §13/§14 and each SDD's CURRENT STATUS banner are the approved specification text, and that retained body statements describing those same revisions as drafts or pending review are pre-approval history or stale status text, not a second approval record or a withdrawal. This supersedes D-112's prohibition on initiating CP12 and modifying approved SDDs only to the extent necessary for (b)–(d). It does not authorize changing approved functional requirements or architectural substance, inventing or granting Product Owner approvals, marking CP12 or the final architecture review accepted, closing Gate 2, installing or executing Laravel/PHP/PHPUnit, dependency downloads, database operations, deployment, CEAP access, or changes to Engineering Governance §14 or SE-001. Substantive findings and all four decision dispositions require separate Product Owner action. Gate 2 remains IN PROGRESS. | APPROVED (PO DECISION) — bounded remediation only | 2026-11-15 — supplied in the current instruction | Product Owner |

Provenance: The Product Owner approved D-115 exactly as recorded in §9.34 on 2026-11-15, confirming that the exact revisions in SDD Registry §13/§14 and each SDD's CURRENT STATUS banner are the approved specification text. The approval is limited to items (a)–(f). It does not authorize requirements or design-substance changes, CP12 acceptance, the final architecture review, Gate 2 closure, installation, dependency downloads, database operations, deployment or CEAP access. Substantive findings and all decision dispositions remain separate Product Owner actions.

## 9.35 Gate 2 decision dispositions

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-116 | Record the final Gate 2 disposition of Q-007: adopt D-092's capability-based compatibility and dependency approach as the Gate 2 design-level disposition. No supported platform, package graph, lockfile, compatibility range or tested matrix is accepted. External scratch lockfile evidence is not adopted as Gate 2 acceptance evidence. D-114's bounded evaluation approvals are unchanged; exact dependency and runtime versions remain Gate 4 under D-031 with prerequisite review and bounded authorization. | APPROVED (PO DECISION) — Q-007 Gate 2 disposition only | 2026-11-15 | Product Owner |
| D-117 | Record the Gate 2 disposition of Q-008: adopt the minimum responsibility allocation of independent client installations and databases; hosting, infrastructure, credentials, backups, monitoring and support are allocated to the client or its contracted provider unless otherwise agreed; the system operator has no default access to client data; one standardized supported deployment profile remains a design principle. Detailed deployment arrangements, provider terms and runbooks remain subject to later approval. | APPROVED (PO DECISION) — Q-008 Gate 2 disposition only | 2026-11-15 | Product Owner |
| D-118 | Record that D-109's approved measurable-target evaluation approach satisfies D-079's Gate 2 disposition milestone for Q-016 and Q-022. No numeric performance, availability or recovery target is set or promised. Measurement definitions, feasibility evidence and numeric targets remain subject to their designated later-gate evaluation and approval. | APPROVED (PO DECISION) — Q-016/Q-022 Gate 2 disposition only | 2026-11-15 | Product Owner |

Provenance: Product Owner decision "Gate 2 Closure Remediation" in the current conversation, recorded 2026-11-15. These dispositions do not select technology, approve a deployment arrangement, set numeric targets, authorize implementation or release, accept CP12 or close Gate 2.

## 9.36 SDD-001 local review and database-free testing

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-119 | Approve the exact amendments presented in Section A of the consolidated "One-Pass Development Unblocking and Workflow Optimization" report: Governance §§3, 5 and 19 specify the bounded SDD-001 local-development review and self-review arrangement, and §14 adopts the database-free testing clarification. D-110's prohibition on contributor self-approval and D-114's final engineering/security-review timing are superseded only to the extent expressly stated for that local SDD-001 scope. The prerequisite review's proposed independent acceptance-reviewer assignment may be deferred for that local scope under the approved arrangement. D-114's toolchain conditions, exclusions and need for actual compatibility evidence remain. Human specialist review before expansion into an affected excluded capability or release, qualified independent privacy/security assessment before release, applicable safety/privacy controls, and separate release approval remain mandatory. | APPROVED (PO DECISION) — bounded governance amendment only | Not separately supplied; recorded 2026-11-17 | Product Owner |

Provenance: Product Owner instruction "iTakda SDD-001 Workflow Unblocking" in the current conversation. The date above is the recording date, not an inferred approval date. The approved wording is incorporated in [Engineering Governance](../ENGINEERING_GOVERNANCE.md) revision 1.5. D-119 does not authorize dependency downloads or installation, compatibility execution, application implementation, database operations, Git operations, deployment or CEAP access. SE-001 remains unapproved; prior decisions and other scopes remain preserved.

## 9.37 Solo-developer risk-based review amendment

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-120 | Adopt the exact four-paragraph solo-developer risk-based review amendment in [Engineering Governance §5](../ENGINEERING_GOVERNANCE.md#solo-developer-risk-based-review-d-120), with corresponding §§3, 5 and 19 and D-110 consistency updates. The Product Owner may personally review ordinary design evidence with AI support, self-review the expressly defined low-risk implementation scope, and personally review the alternative CP12/architecture evidence for historical Gate 2 disposition subject to its stated limitations. Applicable specialist review and independent privacy/security pre-release assessment remain mandatory. | APPROVED (PO DECISION) — governance amendment only | Not separately supplied; recorded 2026-11-17 | Product Owner |

Provenance: The Product Owner explicitly approved the exact amendment proposed in the immediately preceding report, in the instruction “Product Owner Decision — Governance Amendment Approval.” The recording date is not an inferred approval date. D-119's historical scope remains intact. This decision does not accept CP12, approve final architecture, close Gate 2, or authorize implementation, deployment or release.

## 9.38 Gate 2 closure and prototype baseline clarification

| ID | Decision | Status | Approval date | Approver |
|---|---|---|---|---|
| D-121 | Following personal review of the [Gate 2 closure evidence](../evidence/GATE-2-CLOSURE-EVIDENCE-PACKAGE.md), CP12 alternative evidence, final architecture review, accepted CP11 evidence and documented limitations, accept the alternative CP12 evidence solely for Gate 2 design traceability; accept the final architecture review, including CP11 and CP12 treatment and limitations; clarify that the accepted prototype is an incomplete UI/UX design baseline, not an exhaustive or pixel-perfect implementation specification; and approve formal Gate 2 closure after verification of its exit criteria. | APPROVED (PO DECISION) — limited alternative evidence, review, baseline clarification and Gate 2 closure | Not separately supplied; recorded 2026-11-17 | Product Owner |

The original F1–F17 report remains unavailable; fourteen historical findings remain unassessed and are not claimed resolved. Recovery and evidence limitations remain residual risks. F8 and F10 remain unapproved proposals. The accepted prototype establishes initial visual direction, layout patterns, interaction concepts and design language; omissions do not require omitting approved functionality. Additional features, workflows, components, interaction states and transitions, validation, error handling, loading/empty/success/failure states, responsive and accessible behavior, and other implementation details may be required. Approved requirements, SDDs, architecture decisions and applicable accessibility/security requirements remain authoritative; material deviations from approved design decisions follow applicable change control. D-112's historical CP11 scope and evidence remain preserved; no missing prototype functionality is represented as reviewed or accepted.

Provenance: explicit Product Owner instruction “Gate 2 Final Closure and Prototype Baseline Clarification” in the current conversation; approval date not separately supplied, recorded 2026-11-17. The Product Owner personally reviewed the stated evidence under D-120 and acknowledged the stated residual risks. Gate 1 approval, design review, CP11 inclusion and accepted alternative design traceability are recorded in the [closure package](../evidence/GATE-2-CLOSURE-EVIDENCE-PACKAGE.md); no known additional mandatory Gate 2 exit criterion is outstanding. This decision neither waives future verification and applicable specialist reviews nor approves implementation, release, deployment or production readiness. SDD-001's local acceptance and incomplete prior scratch evaluation remain unchanged.

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

## D-122 — Synthetic local high-risk development arrangement

| Decision | Direction | Status | Approval date | Approver |
|---|---|---|---|---|
| D-122 | Adopt Engineering Governance revision 1.7's bounded synthetic local high-risk development and local acceptance arrangement, including authorized isolated application/browser testing, threat analysis, negative/failure tests, non-independent AI review disclosure, critical-finding prohibition and high-severity remediation or valid explicitly approved risk disposition. Preserve applicable legal, privacy, contractual and safety requirements; approved SDDs require satisfaction or separately approved change control. Qualified human specialist reviews and independent privacy/security assessment remain required before production release or operational reliance. | APPROVED — governance amendment only | Not separately supplied; recorded 2026-11-18 | Product Owner |

Provenance: explicit Product Owner instruction “iTakda — Product Owner Decision: Governance Amendment,” approving the proposed direction with stated refinements and authorizing bounded governance-document updates. D-119, D-120 and D-110 remain historical approvals; their review/self-acceptance timing is modified only within the expressly stated D-122 scope. No SDD amendment, Batch 03 implementation, dependency installation, database operation, deployment, CEAP access or release is authorized.

### D-122 SDD timing alignment — approved

The Product Owner approved the exact D-122 timing overlays for SDD-002, SDD-003 and SDD-004 and authorized directly affected C12, dependency and review-timing consistency updates. Provenance: explicit “iTakda — Product Owner Decision: D-122 SDD Alignment” instruction in this conversation. Approval date was not separately supplied; recorded 2026-11-18. The approved overlays preserve the specifications' prior exact-version approvals, functional requirements, material decisions, mandatory safeguards and applicable earlier external obligations. They grant no Batch 03 implementation, dependency installation, database, deployment, real-client data or CEAP authorization.

### SDD-002 synthetic-local recovery timing correction — approved

The Product Owner approved the bounded synthetic-local SDD-002 recovery timing correction in the instruction “iTakda — Batch 03: Autonomous Implementation Continuation.” Approval date was not separately supplied; recorded 2026-11-18. Mandatory MFA, fail-closed factor loss, no reset/reprovisioning bypass and the D-105 independent recovery requirement before production or operational reliance remain. Disposable installation reinitialization requires separate authorization and is not account recovery. No independent recovery authority or completed review is recorded.

## D-123 — Governance v2.0 Adoption and Batch 03 Closure

| Decision | Direction | Status | Approval date | Approver |
|---|---|---|---|---|
| D-123 | Adopt Engineering Governance v2.0 (Highly Autonomous model) as authoritative, superseding v1.7; align AGENTS.md and Requirements Governance; reconcile the bounded NFR-003/AC-028 verification timing; accept Batch 03 as ACCEPTED WITH LIMITATIONS — SYNTHETIC-LOCAL DEVELOPMENT ONLY; and authorize Batch 04 planning only. Preserve substantive security, privacy, data-integrity and accessibility requirements, the 2026-12-19 review deadline, all earlier triggering milestones, and every independently binding obligation. | APPROVED — governance adoption, bounded reconciliation and development acceptance | 2026-11-19 (instruction date; recorded the same day) | Product Owner |

### Governance adoption

The Product Owner explicitly approved replacing Engineering Governance v1.7 with v2.0 and authorized this recording. The [v2.0 document](../ENGINEERING_GOVERNANCE.md) becomes authoritative on 2026-11-19. Its §22.1 records the material changes; §22.2 records preservation.

Preservation limitation: full revision 1.7 text was not present in the working tree, any branch, or Git history at adoption. Revision 1.6 remains recoverable at `38659f9`, and v1.7's bounded synthetic-local arrangement is preserved in substance by D-122. No v1.7 text was reconstructed.

### Requirements and process reconciliation

- [Requirements Governance](../requirements/REQUIREMENTS_GOVERNANCE.md) revision 0.9 records alignment to v2.0: the consolidated decision model applies, while §§2–7 exact-version text, evidence status and versioned material-change controls remain in force for requirement *text*.
- [Requirements Specification v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) and [Traceability 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md) retain their approved NFR-003 and AC-028 wording unchanged. Appended timing notes defer only the named Batch 03 verification to 2026-12-19; they do not mark it passed and do not downgrade the requirement.
- [SDD-002](../specs/SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) and [SDD-023](../specs/SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md) record the same bounded timing for accessible MFA alternatives and rendered accessibility checks.
- [AGENTS.md](../../AGENTS.md) revision 1.4 removes redundant per-change approval language now covered by standing authority and risk-based authorization.

### Batch 03 acceptance

Batch 03 (internal access service and service catalog, `feature/batch-03-internal-access-service`) is **ACCEPTED WITH LIMITATIONS — SYNTHETIC-LOCAL DEVELOPMENT ONLY** under §4.4 and §8.1. The [acceptance record](../evidence/BATCH-03-ACCEPTANCE.md) lists reused evidence, limitations, owners and milestones.

Preserved findings: CSS delivery for the internal views remains unresolved; expired-TOTP endpoint verification remains partial. Deferred, not passed: rendered accessibility checks and the accessible MFA alternative for users without a personal device. The review deadline is 2026-12-19, with every earlier triggering milestone in §22.3 of the acceptance record controlling first.

No critical security or data-integrity finding was identified in the inspected synthetic-local slice that makes this acceptance unsafe. No legal, contractual, privacy or safety obligation was waived.

### Boundaries

This decision does not authorize Batch 04 implementation, application or database changes, dependency installation, deployment, merge, push, commit, CEAP access or release. Qualified human specialist review and independent privacy/security assessment remain required before production release or operational reliance. Batch 04 may be planned only; the [proposed plan](../plans/BATCH-04-PLAN.md) records scope and acceptance criteria subject to separate authorization.

Provenance: explicit Product Owner instruction "iTakda — Governance v2.0 Adoption and Batch 03 Closure" in the current conversation, 2026-11-19, reaffirming the bounded Batch 03 accessibility/MFA verification timing deferral and acceptance of demonstrated Batch 03 functionality subject to safeguards and valid acceptance criteria.


## D-124 — Batch 04 Implementation Authorization and Service-Catalog Decision Dispositions

| Decision | Direction | Status | Approval date | Approver |
|---|---|---|---|---|
| D-124 | Authorize Batch 04 service-catalog management (detail view, service-name editing, `service.update` authorization, transactional `service.updated` evidence, accessory admin UI and automated verification) in the isolated synthetic-local environment only; and record the Product Owner's dispositions for SVC-Q01–Q04 as option A in each case: name-only catalog; existing configured-administrator gate with operation-specific checks; no lifecycle, activation or deletion; no field additions beyond name. | APPROVED — bounded Batch 04 implementation authorization and policy dispositions | 2026-11-19 (instruction date; recorded the same day) | Product Owner |

### Scope and dispositions

- **SVC-Q01 — option A.** The catalog field set remains the service name only. No description, customer-visible name, price, duration or other service-specific field is added in this batch.
- **SVC-Q02 — option A.** All catalog actions reuse the existing configured-administrator gate from [`Batch03AuthorizationProvider`](../../app/Providers/Batch03AuthorizationProvider.php). `service.update` is added as a distinct ability with the same conditions; no role matrix or privileged bypass is introduced.
- **SVC-Q03 — option A.** No service lifecycle, status, activation, deactivation, archive or deletion behavior is implemented. SDD-022 remains unexercised.
- **SVC-Q04 — option A.** No service-specific fields are added, so the validation rule stays `name`: required, string, trimmed, maximum 120 characters; no visibility or retention change is required.

Authorized environment: the isolated synthetic-local database only, per D-122 and Engineering Governance v2.0. Verification required an additive database privilege (`UPDATE` on `services` for the synthetic application account) because the provisioned role had only `SELECT`/`INSERT`; no schema, data or policy change was made.

Boundaries: no CEAP access, no production or client data, no deployment, merge, push or commit, no destructive Git or database operations, and no dependency installation. Qualified human specialist review and independent privacy/security assessment remain required before production release or operational reliance. Batch 04 acceptance is not self-approved and remains subject to Product Owner acceptance with the recorded limitations.

Provenance: explicit Product Owner instruction "Batch 04 Implementation Authorization" in the current conversation, 2026-11-19, adopting option A for SVC-Q01–Q04 and authorizing the bounded synthetic-local implementation and verification. Verification results are recorded in [BATCH-04-VERIFICATION.md](../evidence/BATCH-04-VERIFICATION.md).
