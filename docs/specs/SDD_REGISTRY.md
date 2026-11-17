# iTakda Master SDD Specification Registry

> **Gate 2 status update — D-121, recorded 2026-11-17:** Gate 2 is COMPLETE (APPROVED) after Product Owner acceptance of the final review and limited alternative CP12 evidence. The original F1–F17 source remains unavailable and fourteen findings remain unassessed. Earlier gate-status statements in this registry are historical; this decision does not change the individually approved SDD scopes or authorize implementation.

> **Status: planning baseline 0.1 and Registry v0.5 navigation/status overlay APPROVED within their recorded scopes.** See §§13–14 for individual approval records; §§10–12 preserve earlier review and approval history. Registry acceptance does not authorize implementation or technical mechanisms.

| Field | Record |
|---|---|
| Owner | Product Owner; proposed specification authors and engineering/specialist reviewers are assigned only through later bounded authorization. |
| Planning baseline / working update | Planning baseline 0.1 was provisionally accepted for planning only (acceptance recorded 2026-11-12). Registry v0.5 is approved as the bounded navigation/status overlay recorded in §13; v0.4 was not approved. Sections 13–14 record subsequent exact-version decisions without changing the accepted planning scopes. |
| Scope | Proposed decomposition of the effective commercial MVP plus enabling work, shared controls and operational/release evidence. No individual specification is created by this registry. |
| Authorization provenance | Original registry drafting and explicit planning acceptance preserved in §9; Batch 1 and Batch 2 exact-version specification approvals and their documented scopes are recorded in §10. No implementation authority. |
| Original drafting baseline (historical) | planning/gate-2; HEAD e2522ab38ad52b1797df145fbf1ac595fb54a3f4; empty index; substantial pre-existing changes. No existing registry or individual SDD-001 file found. Root application foundation absent at inspection. |

## 1. Authority, sources and preserved history

Approved requirements and individually recorded decisions govern their own scope. Effective Requirements Specification v0.9 is read with unchanged v0.8 and v0.7 except for the stated NFR-003 replacement and AC-027–AC-029 additions; effective Traceability revision 1.3 supplements preserved revisions 1.2 and 1.0 (revision 1.1 adds administrative commentary). These are approved development-stage assumptions, not representative validation or implementation evidence.

| Source / navigation | Status and registry use |
|---|---|
| [AGENTS](../../AGENTS.md), [Engineering Governance](../ENGINEERING_GOVERNANCE.md) §§5/7/11–19, [Decision Register](../decisions/DECISION_REGISTER.md) | Current agent entry point and authoritative controls/individually approved decisions. Governance §24 / P-009 remains separately unapproved and not in force. |
| [Requirements v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md), [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) | Effective development-stage baseline under D-081/D-094/D-095/D-105; v0.9 changes only NFR-003 and adds AC-027–AC-029. FR-009 and FR-011 remain deferred; optional customer use does not make the approved account capability deferred. |
| [Traceability revision 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md), preserved [revision 1.2](../requirements/REQUIREMENTS-TRACEABILITY-v1.2.md) and [revision 1.0](../requirements/REQUIREMENTS_TRACEABILITY.md); [Requirements Governance](../requirements/REQUIREMENTS_GOVERNANCE.md) §§4–8 | Effective relationships, exact-version disposition and controlled requirement changes. Revision 1.1 remains administrative commentary. This registry does not replace those matrices or reuse their requirement-status taxonomy as a feature lifecycle. |
| [Charter](../PROJECT_CHARTER.md) §§0/3/4/16 | Approved foundation/individually recorded goals and success criteria; current revision 1.5 itself remains draft. S-1–S-7 targets and S-8/S-9 documentation/isolation obligations retain their recorded sources. |
| [PRD](../product/PRD.md), [TRD](../technical/TRD.md), [Architecture](../architecture/ARCHITECTURE.md), [Backend Schema](../architecture/BACKEND_SCHEMA.md) | Accepted references in their recorded scopes, including TECH-Q01 and provisional architecture/conceptual data limitations. Not final schema, versions, endpoints or architecture approval. |
| [Design System](../design/DESIGN_SYSTEM.md), [Application Flow](../design/APP_FLOW_UI_UX.md) | Accepted provisional references and separately accepted amendments. Reusable presentation and logical journeys; no final screens/routes or branding implementation. |
| [Security](../security/SECURITY.md), [Code Style](../engineering/CODE_STYLE.md), [Testing](../engineering/TESTING.md), [Implementation Planning](../plans/IMPLEMENTATION_PLAN.md) | Provisionally accepted design/development guidance. Security T01–T15 are scenarios; PH-01–PH-10 remain pending qualified review. Tools, mechanisms and operational allocations are not thereby approved. |
| [Gate Register](../GATE_REGISTER.md), [SDD transition ledger](../SDD_TRANSITION.md), [TASKS](../../TASKS.md), [MEMORY](../../MEMORY.md) | Historical gate/approval provenance, organization ledger, action tracking and supporting handoff context. Ledger's organization-time draft labels are historical, not a current acceptance list. |
| [Component](../archive/legacy-sdlc/architecture-working-designs/COMPONENT_MODULE_DESIGN.md), [logical data](../archive/legacy-sdlc/architecture-working-designs/DATA_ARCHITECTURE_MODEL_DESIGN.md), [deployment](../archive/legacy-sdlc/architecture-working-designs/CONFIGURATION_DEPLOYMENT_DESIGN.md), [compatibility](../archive/legacy-sdlc/architecture-working-designs/COMPATIBILITY_DEPENDENCY_DESIGN.md) working designs | Individually bounded D-086/D-088/D-091/D-092 dispositions; useful dependencies, not physical schema, supported profile or technology adoption. Read older account/email assumptions through D-094/D-095. |
| [Feature template](TEMPLATE.md); [Checkpoint 11 design](../archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md) and [screen inventory](../archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-SCREENS-AND-INTERACTIONS.md) | Template for later specifications; Checkpoint 11/prototype was accepted on 2026-11-13 as bounded design evidence (D-112). Existing prototype-experiment specifications are not numbered MVP feature approvals. |

D-098 permits Specify → Plan → Implement → Verify → Accept without completing historical Gate 2 or Checkpoint 11. Gate 0/1 approvals and Session 01–07/reference acceptance histories remain intact. D-101 is a bounded fictional-prototype exception, not product implementation permission. No new gate, checkpoint disposition or Decision Register identifier is created here.

## 2. Identifiers, lifecycle and approval separation

**Historical navigation note:** The file-count and current-state examples in §§2–3 describe the v0.4 preparation state. The proposed v0.5 current inventory is in §12; previous text is retained for provenance.

SDD-NNN identifies a proposed bounded specification, not a module, database entity, delivery date or priority. The accepted planning revision allocates candidate identifiers SDD-001–SDD-027; none is an approved individual specification by numbering. Do not create placeholder spec files. On later authorization, use a descriptive SDD-NNN title and record the actual artifact link. Only existing specification files are linked; other future-file links are not fabricated.

When decomposition changes, record rationale, impact and replacement links; preserve previously published identifiers/history rather than silently repurposing an approved identifier. This is living-registry maintenance guidance within applicable change controls, not new governance. Requirements, D-### decisions, official Q-### questions and specification-local acceptance criteria remain distinct identifier spaces.

| Registry display state | Evidence required / existing-governance meaning |
|---|---|
| Proposed | Candidate scope only; no individual spec exists. Of the 27 planning identifiers, SDD-009/010/011/012/014/015/016/017/018/019/020/021/027 currently have no individual specification file; planning acceptance does not approve them as specifications. |
| Draft specification | Individual specification files currently exist for SDD-001/002/003/004/005/006/007/008/013/022/023/024/025/026; each current revision and status is listed in §11. No implementation approval is implied. |
| Awaiting Product Owner review | Draft submitted for review; equivalent to the template's Awaiting approval, not approved. |
| Specification approved | Explicit approval of the identified spec revision/scope recorded with authority, date or unsupplied-date notation and limitations. Does not automatically authorize implementation or every proposed mechanism. |
| Implementation authorized | Separate explicit bounded implementation authority and applicable high-risk/specialist controls established; may be recorded alongside spec approval only when explicitly granted. |
| In implementation | Work started within that authority; not verification or acceptance. |
| Verification pending | Required checks/reviews/evidence remain; code completion alone is not acceptance. |
| Accepted | Implemented authorized scope verified and accepted under Governance §§5/19, with reviewer, evidence, outcome and limitations. Feature acceptance is not release/deployment approval. |
| Deferred / superseded | Explicit disposition and rationale/replacement recorded; no silent change to approved requirement scope. |

Use these as compact views over the template and governance, not a replacement workflow. Track spec revision/approval, implementation authority and verification/acceptance separately so a single label cannot conceal an absent approval. Requirement approval/validation status is not changed by any registry label.

## 3. Proposed inventory and bounded ownership

**27 candidate scopes retain planning-only acceptance, with bounded drafting and approval states recorded below.** Individual specification files currently exist for all 27 SDD identifiers. All 27 current exact revisions have recorded Product Owner approval as shown in §§13–14; earlier revision-status text in §§11–12 is retained as pre-decision history. Implementation is not authorized/not started, and implementation verification/feature acceptance is not performed. W denotes a recommended wave in §6, never a mandatory sequential gate. The bounded descriptions are not new product requirements.

All entries carry applicable security, privacy, integrity, accessibility, testing, CEAP isolation and evidence obligations. Their primary owners below are proposed *scope owners*, not appointments of personnel or permissions. Engineering drafts; the Product Owner approves reserved decisions; applicable qualified reviewers and actual operational owners remain to be assigned.

| Candidate / type / wave | Bounded feature or work outcome |
|---|---|
| **[SDD-001 — Application Foundation and Development Environment Baseline](SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md)**; Enabling; W1 | Minimal Laravel foundation, reproducible local development/test context separation, initialization/basic routing/testability, necessary local configuration validation and safe failure/CEAP-production access prevention. Independent client installation/database remains an unverified constraint; production installation, hosting, operational credentials/provisioning, maintenance and rollback stay with SDD-026 (backup/restore evidence also SDD-025). Original filename retained. |
| **[SDD-002 — Internal identity, provisioning and permission enforcement](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md)**; Product/control; W2 | Individually attributable internal sign-in/session, approved user provisioning and server-side action/service permissions; operator is not a default client administrator. D-105 records MFA coverage policy; factor, session and recovery mechanisms remain open and unselected. |
| **[SDD-003 — Required audit and operational evidence](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md)**; Cross-cutting; W2 | Consistent attributable business/audit outcomes, restricted evidence review and privacy-conscious operational failure signals. No advanced analytics, generic export facility or selected log/storage architecture. |
| **[SDD-004 — Service catalog and minimum booking-data configuration](SDD-004-SERVICE-CATALOG-AND-MINIMUM-BOOKING-DATA-CONFIGURATION.md)**; Product; W2 | Authorized service setup and approved minimum/common or justified service fields, validation and visibility. Distinguish booker, attendee and staff; do not invent fields, eligibility imports or a general form builder. v0.1 approved within scope; SVC-Q01–Q04 remain open. |
| **[SDD-005 — Availability, Resource, Capacity and Scheduling Policy](SDD-005-AVAILABILITY-RESOURCE-CAPACITY-AND-SCHEDULING-POLICY.md)**; Product; W2 | v0.2 — **PROVISIONALLY APPROVED** within documented specification scope; approval recorded 2026-11-13. SCH-Q01–Q08 remain open in detail. No universal defaults, reservation-on-selection or silent existing-booking changes; no implementation or technical mechanism is approved. |
| **SDD-006 — Shared booking integrity and authoritative outcome handling**; Enabling/control; W3 | One final validation boundary for approved booking-affecting paths, atomic effects and required evidence, concurrency, same-intent reconciliation and success/rejection/unknown distinctions. No locking, schema or retry mechanism selected. |
| **[SDD-007 — Six-purpose email boundary and delivery recovery](SDD-007-SIX-PURPOSE-EMAIL-BOUNDARY-AND-DELIVERY-RECOVERY.md)**; Enabling/control; W2 | v0.2 approved for current specification scope, superseding approved v0.1 without backdating; exactly six D-095 purposes and recipient/content boundaries remain. Providers, persistence, queues and guarantees remain open; each consuming feature owns event integration. MAIL-Q01–Q04 remain open. |
| **[SDD-008 — Appointment-scoped guest access and assisted recovery](SDD-008-APPOINTMENT-SCOPED-GUEST-ACCESS-AND-ASSISTED-RECOVERY.md)**; Product/control; W2 | Independent original-booker authority, minimal appointment lookup/management access and authorized assisted recovery. Reference, QR, matching data, account or email possession alone never suffices; booking remains account-free. v0.1 approved within scope; GUEST-Q01–Q05 remain open. |
| **SDD-009 — Public guest booking, alternatives and accessible confirmation**; Product; W4 | Discover actual availability/alternatives, details/review/explicit submit, established outcome, full screen/print/screenshot confirmation and eligible QR presentation. No slot reservation, optimistic success or mandatory customer account. |
| **SDD-010 — Optional customer accounts and registration lifecycle**; Product; W2 | Email/password registration/verification, sign-in/out/recovery and deactivation; authorized registration toggle including activation-boundary handling. Existing verified access and guest paths survive signup disablement; deactivation preserves appointments. Reuse booking, not an account-only integrity path. |
| **SDD-011 — Customer dashboard and individual appointment association**; Product; W4 | Authorized upcoming/retained-past list/detail, individual original-booker linking and authorized unlink/reversal integration. Authentication, independent proof, explicit confirmation and audit; no automatic import or data matching. |
| **SDD-012 — Profile correction and explained booking prefill**; Product; W5 | Separate explicit profile-edit action and explained prefill into the approved booking field catalog. Booking edits never silently rewrite profiles/other appointments, and profile edits never rewrite bookings. |
| **SDD-013 — Contested-action holds and assigned case review**; Product/control; W2 | Dispute intake, conditional scoped holds and documented assigned review/release/reversal. Preserve appointment and permitted attendance; no automatic hold for routine eligible changes or every failed proof attempt, claimant self-release or broad reversal privilege. |
| **SDD-014 — Authorized staff appointment lookup and routine edits**; Product; W4 | Minimum permitted search/list/detail and explicitly allowed non-scheduling updates with validation/audit. No universal edit permission; create/change/attendance/exception commands remain owned by their respective entries. |
| **SDD-015 — Staff-assisted, proxy and streamlined walk-in booking**; Product; W5 | Authorized staff creation with distinct actor/booker/attendee, approved proxy/guardian visibility and minimum inputs. Reuse final integrity, confirmations and limited notification contracts; no transfer of customer authority through assistance. |
| **SDD-016 — Eligible cancellation and cancellation confirmation**; Product; W5 | Guest, authorized account and assigned staff cancellation under effective state/deadline policy, atomic capacity effect and accurate confirmation/email. Ordinary eligibility is distinct from a contested held action; no MVP penalty. |
| **SDD-017 — Eligible rescheduling and preserved-original outcomes**; Product; W5 | Current checks and atomic old-slot release/new-slot reservation; known rejection preserves original, unknown reconciles before unsafe retry. Reuse same-intent, hold, confirmation and email boundaries; no automatic rebooking or penalty. |
| **SDD-018 — Configured supervisor exceptions**; Product; W4 | Explicit permitted exception with supervisor authority, mandatory reason and before/after evidence, passing the applicable final integrity boundary. No ordinary-staff/public bypass or invented exception catalog. |
| **SDD-019 — Staff QR/manual-reference lookup and attendance**; Product; W5 | Minimal authorized scan/reference lookup and separate explicit configured attendance/service actions (including expected, arrived, completed and no-show). Camera failure uses only approved manual alternatives; QR is neither identity nor automatic attendance. |
| **SDD-020 — Controlled printable daily roster**; Product; W5 | Authorized as-of snapshot with approved minimum fields, attributable generation, controlled contact disclosure and paper custody/disposal review. No live paper authority, general reporting or exports. |
| **SDD-021 — Reviewed batch paper/outage reconciliation**; Product; W5 | Per-item accepted/conflicted/unresolved attendance and walk-in proposals, attributable review and no silent overwrite of newer state. Booking-affecting proposals use final checks; batch atomicity/conflict policy open; no offline new-booking sync. |
| **SDD-022 — Configuration changes affecting accepted appointments**; Product/control; W4 | Review effective policy/time context and booking impacts before accepting relevant configuration changes. Preserve safe outcomes/audit; no silent invalidation, universal grandfathering, automatic cancellation/migration or newly invented hold category. |
| **[SDD-023 — Reusable accessible states and error/recovery presentation](SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md)**; Cross-cutting; W2 | Forms, persistent validation/feedback, loading/empty/stale and uncertain-outcome states, accessible acknowledgement for permitted duplicate-warning continuation, no ordinary-user blocking-policy bypass, and human-plus-automated accessibility verification. Client-branding direction D-109 is approved, but its detailed contract owner is not allocated here; do not add branding fields or localization to this specification by inference. |
| **[SDD-024 — Privacy/data-lifecycle and incident-handling readiness](SDD-024-PRIVACY-DATA-LIFECYCLE-AND-INCIDENT-HANDLING-READINESS.md)**; Cross-cutting/operational; W2 | Draft review/evidence boundary for category/purpose minimization and PH-01–PH-10 qualified review. Retention/disposition, legal roles, privacy requests, incidents and actual operating responsibilities remain unapproved/open; no periods, deletion UI, service entitlements or compliance claims inferred. |
| **[SDD-025 — Backup, restoration and recoverability evidence](SDD-025-BACKUP-RESTORATION-AND-RECOVERABILITY-EVIDENCE.md)**; Operational; W2 | Installation-scoped protected recovery planning and separately authorized restore evidence, including privacy-safe verification of actual client backups before operational reliance. Synthetic rehearsal is not proof of a particular real backup. v0.1 approved within scope in an earlier, separately preserved Product Owner decision; BKP-Q01–Q05 remain open. |
| **[SDD-026 — Deployment, maintenance and exceptional-support readiness](SDD-026-DEPLOYMENT-MAINTENANCE-AND-EXCEPTIONAL-SUPPORT-READINESS.md)**; Operational; W2 | Review supported profile, both hosting models, scoped credentials, update/rollback/monitoring/incident ownership, client handover and non-data support default. Exceptional access requires explicit client authority and closure; no executable deployment approval. v0.1 approved within scope; OPS-Q01–Q06 remain open. |
| **SDD-027 — Integrated quality, product-fit and release evidence**; Assurance; W6 | Consolidate feature evidence, cross-path security/integrity, supported-browser/accessibility, workload/recovery and genuine product-fit/qualified independent assessments. Resolve/disposition findings under approved rules; separate release/deployment approval remains required. |

### Boundary contracts and integration checks

- SDD-002 owns internal authority, SDD-008 scoped guest proof, SDD-010 account lifecycle and SDD-011 appointment association. Shared personal details/account possession never substitute for independent original-booker proof. Staff assistance does not transfer original-booker or attendee authority.
- SDD-003 defines required evidence/diagnostic boundaries; every mutating feature implements its own attributable, outcome-consistent integration. Do not postpone audit until final testing or select a universal logging product from this split.
- SDD-004/005 configure services/data/policy; SDD-006 owns final booking decisions, including applicable eligibility/resources/duplicates. Availability is informational. SDD-022 owns affected-existing-appointment handling. Before that capability is authorized, earlier setup scopes must not silently enable changes that invalidate existing bookings; the individual spec must define its bounded setup-only restriction or explicitly include the necessary reviewed impact handling.
- SDD-006 is a shared obligation, not a mandated service class, table, transaction implementation or generic framework. Known rejection has no partial/orphaned effects; known rejected reschedule preserves the original. Unknown is neither success nor rejection: reconcile authoritative state and same intent before unsafe retry.
- SDD-009 establishes reusable confirmation/QR-presentation behavior; SDD-015/016/017 reuse the applicable approved outputs rather than duplicating integrity rules. SDD-019 owns staff lookup and separate attendance; QR/reference possession is not identity, change authority or attendance.
- SDD-007 owns the six-purpose delivery contract: account verification, password recovery, appointment-scoped guest access, established booking, established cancellation and established rescheduling. SDD-008/009/010/016/017 own their respective integrations and recipient/content checks under v0.8 §5 / D-095. A lost browser response does not prove failure or suppress a legitimate committed-state notification. Do not trigger a new transaction email solely because outcome is unknown; authoritatively unknown, uncommitted, rejected or held operations do not independently authorize success email. Delivery failure never reverses a commit or triggers duplicate commands/notifications.
- SDD-013 supplies conditional hold/review boundaries. Routine eligible changes are not automatically held; failed/unresolved linking proof does not automatically trigger a dispute. While held, only the affected contested link/action and its success confirmation/email are paused; appointment and permitted attendance remain.
- SDD-010 account booking/dashboard capability is not fully integrated merely because registration works. SDD-009/011/012/016/017 must demonstrate the applicable account parity, authorized views, optional prefill and change paths before claiming the corresponding full requirement/criteria complete. Guest capability does not depend on a customer choosing an account.
- SDD-020 owns snapshot/print safeguards; SDD-021 owns reviewed reconciliation. Paper is not authoritative live state or a license to bypass current validation. No offline booking synchronization.
- SDD-023 owns reusable presentation, while each journey owns its recovery/authorization meaning. 419 is not proof of booking failure and need not mean an authenticated session expired. Generic errors never authorize blind retry. Review application/server fallback ownership; neither six dedicated pages nor an available branding service is required.
- SDD-024/025/026/027 organize cross-cutting/release work; they do not postpone feature-specific privacy, restore-before-reliance, specialist review or verification obligations. Non-data support is the default; infrastructure custody does not authorize business-record inspection.

## 4. Proposed traceability by specification

IDs refer to the exact effective statements in the source map (§1). A reference means contribution/responsibility, not full satisfaction; the reverse map below identifies integration and deferral. NFR-002/003/007/009/010/011 and S-8/S-9 apply across entries where relevant even when not repeated in every row. FR-012 constrains SDD-001's local accidental-access safeguards, not operational delivery; recovery/operations entries own the actual support/recovery scope. SDD-001 is not client installation or a complete support offering.

| Candidate | Functional/non-functional anchors | Rule / journey / acceptance anchors | Success / decision anchors |
|---|---|---|---|
| SDD-001 | FR-012; NFR-001, NFR-002, NFR-004, NFR-005, NFR-010 | BR-004; UJ-004; AC-007, AC-008 | S-1, S-2, S-4, S-6, S-8, S-9; D-019, D-020, D-022, D-023, D-031, D-034, D-035, D-036, D-083, D-084, D-085, D-098, D-102 |
| SDD-002 | FR-004, FR-012; NFR-003, NFR-005, NFR-009, NFR-011 | BR-004, BR-007; UJ-004, UJ-005; AC-007, AC-008, AC-027, AC-028, AC-029 | S-4, S-5, S-6; D-034, D-047, D-075, D-103, D-105, D-108 |
| SDD-003 | FR-008; NFR-003, NFR-009, NFR-011 | BR-004, BR-007, BR-009; UJ-004, UJ-005; AC-007, AC-011, AC-012, AC-021, AC-024, AC-029 | S-4, S-5, S-6, S-8; D-050, D-073, D-074, D-075, D-095, D-103, D-104, D-105, D-108 |
| SDD-004 | FR-001, FR-022; NFR-004, NFR-009 | BR-005, BR-006; UJ-001, UJ-005, UJ-006; AC-010, AC-022, AC-023 | S-1, S-4, S-7; D-043, D-050, D-060, D-062, D-094, D-104, D-106 |
| SDD-005 | FR-001, FR-018; NFR-004, NFR-006, NFR-008 | BR-001, BR-002, BR-005, BR-006, BR-010; UJ-001, UJ-005, UJ-006; AC-001, AC-005, AC-013, AC-014, AC-022 | S-1, S-3; D-043, D-044, D-059, D-060, D-066, D-070, D-085, D-106, D-107 |
| SDD-006 | FR-002, FR-007, FR-013; NFR-003, NFR-006, NFR-008, NFR-011 | BR-001, BR-002, BR-010, BR-013; UJ-001, UJ-003, UJ-005, UJ-006, UJ-007; AC-001, AC-005, AC-009, AC-014, AC-018, AC-022, AC-026 | S-3, S-4, S-6; D-044, D-070, D-085, D-090, D-094, D-106, D-107, D-108 |
| SDD-007 | FR-010, FR-020; NFR-003, NFR-009, NFR-011 | BR-011, BR-013; UJ-001, UJ-003, UJ-006, UJ-007; AC-019, AC-024, AC-026 | S-4, S-5, S-6; D-095, D-102, D-104, D-109 |
| SDD-008 | FR-003, FR-007, FR-020; NFR-003, NFR-009 | BR-006, BR-011; UJ-001, UJ-003, UJ-007; AC-015, AC-017, AC-021, AC-024, AC-025 | S-4, S-5, S-6; D-045, D-061, D-094, D-095, D-103, D-108 |
| SDD-009 | FR-002, FR-003, FR-005, FR-010, FR-018, FR-022; NFR-006, NFR-007, NFR-009 | BR-001, BR-002, BR-003, BR-005, BR-006, BR-010; UJ-001; AC-001, AC-002, AC-005, AC-006, AC-013, AC-016, AC-018, AC-022, AC-023, AC-024 | S-3, S-6, S-7; D-045, D-065, D-066, D-070, D-094, D-095 |
| SDD-010 | FR-019, FR-020; NFR-003, NFR-009, NFR-010 | BR-010, BR-012; UJ-006, UJ-007; AC-014, AC-016, AC-019, AC-020, AC-024, AC-025 | S-4, S-5, S-6, S-7; D-094, D-095, D-103, D-104 |
| SDD-011 | FR-019, FR-021; NFR-003, NFR-009, NFR-011 | BR-006, BR-011; UJ-007; AC-015, AC-017, AC-021, AC-025 | S-4, S-5, S-6, S-7; D-094, D-103 |
| SDD-012 | FR-022; NFR-009 | BR-006; UJ-001, UJ-005, UJ-006, UJ-007; AC-010, AC-022, AC-023 | S-4, S-6, S-7; D-050, D-094, D-104 |
| SDD-013 | FR-007, FR-008, FR-021; NFR-003, NFR-009, NFR-011 | BR-005, BR-006, BR-011; UJ-003, UJ-007; AC-015, AC-021, AC-025 | S-4, S-5, S-6; D-094, D-103, D-108 |
| SDD-014 | FR-004; NFR-003, NFR-009 | BR-006, BR-007; UJ-002, UJ-005; AC-003, AC-010, AC-022 | S-4, S-6, S-7; D-047, D-050, D-103 |
| SDD-015 | FR-002, FR-004, FR-013, FR-022; NFR-006, NFR-009 | BR-001, BR-002, BR-006, BR-007, BR-010; UJ-005; AC-001, AC-005, AC-010, AC-022, AC-023, AC-024 | S-3, S-4, S-6, S-7; D-064, D-070, D-094 |
| SDD-016 | FR-004, FR-007, FR-010; NFR-006 | BR-005, BR-007, BR-013; UJ-003, UJ-005, UJ-007; AC-009, AC-015, AC-024, AC-025 | S-3, S-4, S-6, S-7; D-049, D-089, D-090, D-094, D-095 |
| SDD-017 | FR-004, FR-007, FR-010; NFR-006 | BR-001, BR-002, BR-005, BR-010, BR-013; UJ-003, UJ-005, UJ-007; AC-005, AC-009, AC-015, AC-024, AC-025, AC-026 | S-3, S-4, S-6, S-7; D-049, D-070, D-089, D-090, D-094, D-095 |
| SDD-018 | FR-015; NFR-006, NFR-011 | BR-001, BR-007; UJ-005; AC-011 | S-3, S-4, S-6; D-048, D-070 |
| SDD-019 | FR-006, FR-014; NFR-003, NFR-009 | BR-003, BR-007, BR-008; UJ-002, UJ-005; AC-003, AC-004 | S-4, S-6, S-7; D-045, D-047 |
| SDD-020 | FR-016; NFR-009, NFR-011 | BR-009; UJ-005; AC-012 | S-4, S-6, S-7; D-051, D-074 |
| SDD-021 | FR-017; NFR-006, NFR-011 | BR-009; UJ-005; AC-005, AC-012 | S-3, S-4, S-6; D-051, D-063, D-074, D-085 |
| SDD-022 | FR-001, FR-004, FR-008; NFR-004, NFR-006, NFR-011 | BR-001, BR-002, BR-005, BR-010; AC-001, AC-005, AC-009 | S-1, S-3, S-4; D-043, D-060, D-085, D-086, D-106, D-107 |
| SDD-023 | FR-010; NFR-007, NFR-010 | UJ-001, UJ-002, UJ-003, UJ-005, UJ-006, UJ-007; AC-002, AC-006, AC-008, AC-016, AC-018, AC-019, AC-023, AC-028 | S-6, S-7; D-069, D-098, D-105, D-106, D-109 |
| SDD-024 | FR-008, FR-012, FR-022; NFR-005, NFR-009, NFR-011 | BR-004, BR-006, BR-009, BR-012; UJ-004; AC-007, AC-010, AC-012, AC-015, AC-023, AC-024, AC-025 | S-4, S-5, S-8; D-050, D-075, D-079, D-103, D-104, D-109 |
| SDD-025 | FR-012; NFR-001, NFR-002, NFR-009, NFR-011 | BR-004, BR-009; UJ-004, UJ-005; AC-007, AC-012 | S-2, S-5, S-9; D-075, D-083, D-091, D-104, D-109 |
| SDD-026 | FR-012; NFR-001, NFR-002, NFR-005, NFR-009, NFR-011 | BR-004, BR-007; UJ-004; AC-007 | S-1, S-2, S-4, S-9; D-083, D-084, D-091, D-102, D-103, D-104, D-109 |
| SDD-027 | All 20 active FR in §5; NFR-001–NFR-011 | BR-001–BR-013; UJ-001–UJ-007; AC-001–AC-029 | S-1, S-2, S-3, S-4, S-5, S-6, S-7, S-8, S-9; D-038, D-052, D-067, D-068, D-069, D-070, D-071, D-072, D-077, D-098, D-104 |

## 5. Reverse coverage, deliberate deferrals and gaps

The map covers **20 active FR, 11 NFR, 13 BR, 7 UJ and 29 AC**, plus S-1–S-9 at planning level. FR-009/FR-011 remain the two deferred FR. No active identifier lacks a proposed scope owner in this draft, even excluding the final assurance entry; this is identifier coverage, not proof of complete behavior, validation or implementation. Actual people, policies, detailed acceptance partitions and evidence remain unassigned/open.

| Functional requirement | Proposed primary delivery owner(s) / shared integration |
|---|---|
| FR-001 | SDD-004/005 setup, SDD-022 accepted-booking impacts; SDD-001 is only a technical prerequisite. |
| FR-002 | SDD-006 authoritative integrity; SDD-009 public, SDD-010 account integration, SDD-015 staff paths. |
| FR-003 | SDD-009 guest journey; SDD-008 scoped access; SDD-010 never makes an account mandatory. |
| FR-004 | SDD-014 lookup/routine edits, SDD-015 creation, SDD-016/017 changes, SDD-019 attendance; SDD-002 permissions. |
| FR-005 | SDD-009 eligible authorized QR presentation; reused by SDD-015 and relevant confirmation/access paths. |
| FR-006 | SDD-019 authorized minimal lookup and approved manual-reference handling. |
| FR-007 | SDD-016 cancellation / SDD-017 reschedule; SDD-006/008/011/013 authority, outcomes and holds. |
| FR-008 | SDD-003 common evidence; every affected feature records its own required actions/outcomes, including account/link/dispute/email events. |
| FR-009 | DEFERRED under D-042; no MVP specification or eligibility/masterlist import implementation proposed. |
| FR-010 | SDD-009/016/017 full accessible confirmations; SDD-007 purpose-limited email integration, not a replacement confirmation. |
| FR-011 | DEFERRED under D-042; no advanced analytics/reporting/export spec. SDD-003 signals and SDD-020 roster are narrower approved needs. |
| FR-012 | SDD-026 support/maintenance and exceptional-access readiness; SDD-001/002/003/024/025 provide isolation, access, audit, privacy and recovery dependencies. |
| FR-013 | SDD-015 assisted/proxy/walk-in; SDD-004/006 data/policy and integrity, SDD-018 explicit exceptions where permitted. |
| FR-014 | SDD-019 explicit configured attendance/service states and correction design. |
| FR-015 | SDD-018 configured supervisor exceptions; SDD-002/003/006 enforce permissions/evidence/integrity. |
| FR-016 | SDD-020 controlled minimum daily roster, not general exports. |
| FR-017 | SDD-021 reviewed batch reconciliation with current-state checks. |
| FR-018 | SDD-009 actual available alternatives; SDD-005/006 current availability/integrity. Offer alternatives only when they exist and workflow permits. |
| FR-019 | SDD-010 lifecycle/registration toggle, SDD-011 authorized dashboard, SDD-009 account booking integration, SDD-016/017 authorized changes. |
| FR-020 | SDD-007 limited email, SDD-008 scoped guest access/assistance, SDD-010 verification/recovery. No proof method selected. |
| FR-021 | SDD-011 individual linking and SDD-013 assigned reversal/dispute handling, with SDD-008 independent proof. |
| FR-022 | SDD-004 minimum/service fields, SDD-009/015 form use, SDD-012 explicit profile/prefill separation; SDD-024 privacy dependency. |

| Shared source groups | Proposed coverage / evidence owner scope |
|---|---|
| NFR-001/002/004; S-1/S-2 | SDD-001/004/005/022/025/026; clean configuration without scheduling-code forks and independent application/database/artifact isolation. Do not claim S-1 complete from startup alone. |
| NFR-003/005; AC-027–AC-029; S-4/S-5 | SDD-002/008/010/011/013/024/026 and every protected operation; SDD-003 evidence integration and SDD-023 accessible presentation as applicable; feature-specific security review plus SDD-027 integrated evidence. |
| NFR-006/008; S-3 | SDD-005/006/015/016/017/018/021/022, with SDD-027 aggregate profiles; numeric response-time/availability decisions remain open. |
| NFR-007; S-7 | SDD-023 plus every applicable public/admin journey; SDD-027 aggregate rendered keyboard/browser/mobile/assistive-technology evidence. |
| NFR-009 | SDD-004/007/008/010/011/012/020/024/025/026 and each data use; no default sensitive fields or universal retention period. |
| NFR-010; S-6 | Every spec plans applicable success/rejection/authorization/failure checks; SDD-027 consolidates evidence, never substitutes for feature tests. |
| NFR-011 | SDD-003 and each relevant action; reconciliation, custody/incident and protected operational evidence in SDD-021/024/025/026. |
| S-8/S-9 | Every spec/decision/change records source and verification; CEAP isolation is continuous, not a later integration test against CEAP. |
| BR-001/002/005/010 | SDD-004/005 policy, SDD-006 final enforcement, SDD-009/010/015/016/017/018/022 consumer/configuration interactions. |
| BR-003/008 | SDD-009 presentation; SDD-019 lookup/identity/attendance separation; SDD-016/017 retain distinct appointment changes. |
| BR-004/007 | SDD-002 internal permissions, SDD-003 evidence, SDD-018 supervisor limits, SDD-026 exceptional support; no default operator client access. |
| BR-006/011/012 | SDD-004/008/009/010/011/012/013/015; service-specific representative authority, individual linking, no auto-import, and deactivation preserving appointments. |
| BR-009/013 | SDD-020/021 paper versus authoritative state; SDD-006/017 atomic reschedule, original preservation and unknown reconciliation. |
| UJ-001/006 | SDD-004/005/006/007/008/009/010/012 shared guest/account discovery, booking, confirmation and applicable profile integration. |
| UJ-002/005 | SDD-014/015/018/019/020/021 staff work, exceptions and continuity. |
| UJ-003/007 | SDD-008/010/011/013/016/017 account/scoped-guest management, holds, denied access and changes. |
| UJ-004 | SDD-001/002/003/024/025/026 authorized non-data support and separately authorized exceptional access. |
| AC-001/005/013/014/018/022 | SDD-005/006/009/010/015/017/018/022; actual alternatives, current final checks, parity, proxy/duplicate and uncertainty evidence. |
| AC-002/006/008/016 | SDD-009/023 and every affected workflow's confirmation/accessibility/tests; SDD-027 aggregate verification. |
| AC-003/004/010/011/012 | SDD-014/015/018/019/020/021 lookup, actor separation, exceptions, controlled roster and reconciliation. |
| AC-007 | SDD-002/003/024/025/026 custody, no default access and explicit scoped client-authorized exception/review/closure. |
| AC-009/015/017/021/025/026 | SDD-006/008/010/011/013/016/017; atomic eligible change, independent scoped authority, individual link/reversal, preserved appointment and safe uncertainty. |
| AC-019/020/023/024 | SDD-007/009/010/011/012/024; account core journeys/toggle boundary, minimal fields/profile separation and six-event recipient/content/failure evidence. |

### Exclusions and exploratory items without MVP delivery allocation

- **Branding exploration:** Design System §3 accepts a preference to explore logically centralized developer-managed branding within an independent installation. No branding fields, storage mechanism, client-facing editor, white-label entitlement or implementation requirement is approved. Keep a future scope-review item rather than assigning an implementation SDD ID now. SDD-023 preserves available brand continuity and safe neutral fallback without depending on a new branding feature.
- **Payment:** Architecture §10's future-scope note and D-056/v0.8 §7 keep payments, deposits, refunds, payment tracking and gateways outside MVP. No payment spec, schema or readiness promise; appointment payments are distinct from commercial product sales/licensing. No subscription/licensing data requirement is introduced.
- Preserve deferred government-specific eligibility/masterlists, advanced reporting/analytics, waitlists, multi-branch/shared SaaS, broad integrations, enterprise features, reminders, SMS/OTP, marketing and offline booking synchronization. D-094/D-095 supersede older account/email exclusions only in their recorded scope.
- No command palette, general autosave, unrestricted bulk actions, subscription tiers, referrals, speculative plugin architecture or mandatory decorative effects. Optional implementation techniques need actual need and approval.
- Generic eligibility *imports* are deferred; current applicable booking/service eligibility checks are not optional. No unsupported legal, identity or capacity default is supplied to fill an open question.
- Existing T01–T15 threat controls, PH-01–PH-10 qualified review, exact staff/proxy/hold assignments, QR lifecycle, field catalog, time interpretation and existing-booking effects need detailed allocation in the affected specs. These are remaining design/evidence gaps, not newly invented product features.
- Preparation-era status wording in accepted/historical references is interpreted through later explicit records. This registry corrects no source metadata, gate record or prior approval.

## 6. Dependencies, waves and delivery alternatives

**Dependency types:** H = capability prerequisite for the applicable implementation/integration boundary, not a universal drafting blocker; S = authority/security prerequisite; P = unresolved business/design-policy prerequisite; V = required review/verification/operational evidence; X = optional/exploratory item. Stage determines when a prerequisite must be satisfied. §7 letters group remaining decisions; they are local planning labels, not official Q IDs.

| Stage | Meaning of a prerequisite |
|---|---|
| Drafting | Current authoritative sources, bounded drafting authorization and visible unresolved questions are needed. Dependent specs/contracts may be drafted in parallel; completed prerequisite implementations are not required to write a draft. Batch 1 authorized SDD-001/002/003/023; Batch 2 drafting authorizations are recorded in §10.2–§10.3. Dependency rows do not authorize other individual drafting or any implementation. |
| Implementation | Approved identified spec/scope, explicit implementation authority, applicable specialist review and material policy/technical decisions are needed before affected work. Required contracts may be designed together; test doubles do not authorize missing protected behavior. No implementation is authorized here. |
| Integration | Applicable H capabilities must operate together under reviewed authority, state, evidence and failure contracts before claiming integrated behavior. Scaffolds, mocks or individually passing units do not establish that integration. |
| Acceptance | Authorized bounded scope needs actual required verification, applicable reviews and recorded acceptance under Governance §§5/19. Partial-scope acceptance must state exclusions and incomplete requirement coverage; full feature or release readiness cannot be inferred. |

The accepted planning H table is an acyclic capability/integration model, not a mandated module graph, runtime call graph, implementation schedule or ban on parallel drafting. Prerequisite *contracts/design* can be reviewed together; separately authorized implementation may use test doubles/synthetic fixtures, but these do not prove missing production integration. Do not accept a feature's full behavior before required integrations exist and are verified.

| Candidate | H capability prerequisites (apply at relevant stage above) | Topological level | S/P/V decision groups |
|---|---|---|---|
| SDD-001 | None | 1 | A, B, F |
| SDD-002 | SDD-001, SDD-003 | 3 | B, C, D |
| SDD-003 | SDD-001 | 2 | C, D, H |
| SDD-004 | SDD-001, SDD-002, SDD-003 | 4 | C, D, E |
| SDD-005 | SDD-004 | 5 | C, E |
| SDD-006 | SDD-002, SDD-003, SDD-004, SDD-005 | 6 | C, E, G |
| SDD-007 | SDD-001, SDD-003 | 3 | B, C, D, H |
| SDD-008 | SDD-001, SDD-003, SDD-007 | 4 | C, D |
| SDD-009 | SDD-004, SDD-005, SDD-006, SDD-007, SDD-008, SDD-023 | 7 | C, D, E, G, I |
| SDD-010 | SDD-003, SDD-007, SDD-008 | 5 | C, D |
| SDD-011 | SDD-006, SDD-008, SDD-010, SDD-013 | 7 | C, D |
| SDD-012 | SDD-004, SDD-009, SDD-010 | 8 | C, D |
| SDD-013 | SDD-002, SDD-003, SDD-008 | 5 | C, D |
| SDD-014 | SDD-002, SDD-003, SDD-006, SDD-013 | 7 | C, D |
| SDD-015 | SDD-006, SDD-009, SDD-013, SDD-014 | 8 | C, D, E, G |
| SDD-016 | SDD-006, SDD-008, SDD-009, SDD-013, SDD-014 | 8 | C, E, G |
| SDD-017 | SDD-006, SDD-008, SDD-009, SDD-013, SDD-014 | 8 | C, E, G |
| SDD-018 | SDD-002, SDD-003, SDD-005, SDD-006 | 7 | C, E, G |
| SDD-019 | SDD-002, SDD-003, SDD-009, SDD-014 | 8 | C, D, I |
| SDD-020 | SDD-014, SDD-019 | 9 | C, D, H, I |
| SDD-021 | SDD-006, SDD-015, SDD-018, SDD-019, SDD-020 | 10 | C, D, E, G, H |
| SDD-022 | SDD-002, SDD-003, SDD-004, SDD-005, SDD-006 | 7 | C, E, G |
| SDD-023 | SDD-001 | 2 | B, I |
| SDD-024 | None | 1 | D, H |
| SDD-025 | SDD-001, SDD-003, SDD-024 | 3 | D, H |
| SDD-026 | SDD-001, SDD-002, SDD-003, SDD-007, SDD-024, SDD-025 | 4 | B, C, D, H |
| SDD-027 | SDD-001–SDD-026 (complete applicable MVP integrations/evidence) | 11 | A, B, C, D, E, F, G, H, I |

| Suggested wave / priority | Candidate scopes / internal dependency order |
|---|---|
| W1 — first enabling candidate | SDD-001 proposed first; SDD-024 privacy/context assessment may be drafted in parallel and continues across all waves. No operational reliance. |
| W2 — preconditions before business mutation | SDD-003/023 shared evidence/UX; then SDD-002/007/025; then SDD-004/008/026; then SDD-005/010/013, respecting the H table. Ops work is planning/authorized rehearsal preparation, not a deployment. |
| W3 — final integrity | SDD-006 after reviewed service/availability and authority/evidence contracts. D-070's test requirement must be designed, not claimed passed. |
| W4 — first integrated paths and safeguards | SDD-009 public booking, SDD-011 individual dashboard/linking, SDD-014 staff lookup, SDD-018 exceptions and SDD-022 affected-booking configuration. They can be drafted in parallel with explicit shared contracts. |
| W5 — lifecycle and front-desk completion | SDD-012/015/016/017/019, then SDD-020, then SDD-021. Account/guest/staff parity, holds and notification integration checks remain essential. |
| W6 — evidence and separate release decision | SDD-027 consolidates all required feature evidence, qualified independent review, product-fit and operational readiness. It does not issue release/deployment authority. |

Unselected technologies are not automatic blockers to drafting. Exact runtime/dependency compatibility and authorized installation/environment decisions must precede affected implementation. NFR-003/FR-008 controls are not postponed until an optional late hardening wave. SDD-024 privacy review and SDD-025 recovery readiness must resolve relevant dependencies before personal-data processing or operational reliance; the wave label cannot delay those obligations.

**No artificial circular prerequisites:** SDD-003 defines attributable evidence using an actor contract without requiring the completed identity feature; SDD-002 integrates it before accepting provisioning/role mutations. SDD-006 defines shared outcomes before individual command UIs; SDD-022 later integrates configuration-impact decisions without requiring a second integrity engine. SDD-007 defines limited delivery before consumer integration; accepting its substrate alone does not satisfy all six end-to-end journeys. SDD-013 models hold/assigned review before SDD-011/016/017 exercise it with real feature state. SDD-027 adds integration/release evidence, never serves as an implementation prerequisite for its own input features.

### Why SDD-001 remains first — D-102 assessment

| Candidate approach | Benefit / alternative / trade-off | Credible failure; mitigation and future evidence | Residual risk / disposition |
|---|---|---|---|
| **Foundation plus minimal local development/test contract (current SDD-001 recommendation)** | Creates a usable enabling baseline without committing business policies. Slightly more upfront isolation/configuration work than a bare scaffold; avoids a large administration feature. | Wrong environment/DB target, leaked secrets or scaffold-created account/schema behavior. Inventory side effects, safe configuration failure, separate environments and no CEAP dependency. Later authorized synthetic startup, failure and isolation checks; configuration checks alone do not prove database isolation. | Versions, footprint, supported development setup and exact configuration concepts still need reviewed decisions. Product Owner chooses draft scope; applicable engineering/security review before high-risk implementation. |
| Foundation only | Smallest startup scope, but environment/isolation questions may be deferred into every subsequent feature. | A runnable scaffold is mistaken for configured safe product. Explicit boundaries and follow-up configuration spec/approval before data use. | More fragmentation and rework; reasonable if the installation contract cannot be bounded. No automatic technology or migration approval. |
| Foundation plus full service administration | Earlier administrator-visible value, but combines identity, schema, policy, audit and accepted-booking impact decisions. | Default roles/fields/capacity or invalidating existing appointments become accidental policy. Resolve those decisions and split independent outcomes before implementation. | Too broad for the recommended first slice; reassess after enabling contracts. |

For significant mechanism choices in every spec, D-102 additionally requires proportionate benefits, relevant alternatives, trade-offs, credible failures, mitigation/recovery, verification criteria, residual risk and decision owner before implementation approval. No package, runtime version, database design, locking/idempotency method, outbox, provider, CI platform or Docker adoption is selected by this registry.

## 7. Grouped unresolved decisions and prerequisite reviews

All labels A–I below are **registry-local planning groups**, not new approved decisions. Existing resolved product directions are not re-opened. Exact business policy, professional advice and routine implementation design have different owners; the Product Owner need not choose every table, key or internal class.

| Group / source | Required direction or evidence / proposed owner | Timing and affected scopes |
|---|---|---|
| A — decomposition and batch drafting | Registry planning baseline 0.1 accepted; Batch 1's four specifications and the five W2 specifications SDD-004/007/008/025/026 are individually approved within scope (see §10). Later refinements follow applicable change controls. | Coordinated drafting/review is not a mandatory implementation batch, additional spec approval or authority for implementation. |
| B — Q-007/Q-008; D-022/023/031/036/084/092/102/109 | Engineering proposes supported runtime/dependency footprint and isolated development/test setup with compatibility/lifecycle and failure assessment; Product Owner authorizes applicable selections/installations. D-109 approves a bounded configurable client-branding direction, but its detailed scope owner remains unallocated; Docker remains conditional. | Relevant parts before SDD-001/007/023/026 implementation; actual hosting/provider selections may wait until affected use. No need to choose all packages now. Branding requires registry scope allocation before detailed implementation drafting; localization remains separate. |
| C — Q-009/Q-018; D-103/D-108; ACCT-L01–L04/L07 | Product Owner-approved policy now requires action/service-scoped default-deny authority, no self-elevation, separately authorized sensitive actions, independent super-admin appointment/recovery controls, scoped guest proof, distinct representative authority and restricted contested-action holds. Security/engineering still define mechanisms, assignments and evidence; qualified review applies. | Policy direction is recorded; before affected identity, field, account/link, hold, staff or support implementation, resolve remaining IDN/GUEST/CASE details and applicable reviews. No default operator access. |
| D — Q-015; D-104; ACCT-L04–L06/L08; PH-01–PH-10 | Product Owner plus qualified privacy/security/legal review as applicable: minimum data and notices/purpose, actual jurisdiction/provider responsibilities, retention/deletion/requests/incidents and restored restrictions. Initial Philippines/general-purpose staffed-front-desk market is already recorded; do not select it again or claim Philippines-only law. | Applicable review before affected processing/design or reliance; qualified independent privacy/security assessment before release. Exact legal roles, periods and basis are not inferred. |
| E — Q-019/Q-020/Q-021; D-043/059/060/085/106/107; BR-002/005/006 | Approved policy covers recurring/dated schedule rules, explicit time zone, separate buffers, combined capacity/resources, duplicate warning/blocking, cutoff semantics and existing-appointment preservation. Client/service-specific fields, values, units, comparison windows, exception details and SDD-022 impact contract remain open. | Policy direction is recorded; resolve exact affected values and the SDD-006/022 contract before corresponding implementation. No universal values or automatic changes supplied. |
| F — D-067/069/070/071/072/109; Q-016/Q-022 | Product Owner approved measurable-target evaluation approach, not numeric response-time, availability or recovery values. Workload/operating profiles, feasibility, measurement boundaries and evidence owners remain open. Tool/framework choices are not approved. | Engineering and actual operational owners prepare proposals; Product Owner disposition is needed at the D-079 milestone and before affected service/release commitments. Define verification criteria before execution; no D-070 pass or WCAG claim. |
| G — D-070/085/090/107; BR-013; AC-026 | SDD-006 draft consolidates final capacity/resource/eligibility/duplicate checks, authoritative outcomes, same-intent reconciliation, evidence consistency and D-070 verification. | Review SDD-006 before affected mutation implementation/integration. Unknown browser response differs from authoritative unknown state; no blind retry or mechanism selection. |
| H — D-075/083/084/091/095/103/104/109; TECH-Q02 in Security; SECURITY/OPS-Q01 and SDD-026/OPS-Q01 | Approved directions cover independent notification recovery, truthful delivery states, protected backup/tested restore before reliance, measurable recovery-objective evaluation, supported-profile and installation-level responsibility planning, maintenance/rollback/incident readiness, minimization and qualified privacy review. | Before relevant provider adoption, support, deployment, personal-data processing or operational reliance. Recovery evidence and separate release/deployment approval remain mandatory. No SLAs, duty assignments, numeric targets, provider or legal roles invented. |
| I — D-045/065/069; QR-L01–QR-L12; accepted UX amendments | QR presentation/lifecycle and permitted manual/camera fallback, readable persistent outcome/error recovery, responsive/print/browser/assistive-technology evidence and application/server fallback ownership. | Before affected feature design/verification or deployment fallback reliance. Six HTTP scenarios are design-review contexts, not six mandatory pages. |

D-079's historical milestones must be read with D-098/Governance §5: former sequential gates are not routine prerequisites, but material policy/review dependencies and release/operational controls remain. Unrelated open items do not automatically block a bounded specification. None of these groups accepts residual risk, selects MFA/proof/provider/retention mechanisms, or authorizes implementation.

## 8. Verification obligations and registry maintenance

- Use [TEMPLATE.md](TEMPLATE.md) for each separately authorized spec: scope/exclusions, source IDs, expected established/rejected/unknown/held outcomes where applicable, proposed criteria, risks/open questions, bounded plan/risk class, verification and separate approval/acceptance.
- Concurrency evidence must eventually exercise D-070/AC-005: **50 valid simultaneous requests for one remaining capacity unit, exactly one successful reservation**, safe other outcomes and no prohibited duplicate, over-capacity, partial or orphaned state. Daily 20–100 appointments and busy 100/day profiles are not concurrency limits; valid duplicate-policy preconditions must be explicit.
- Test every affected core workflow's applicable success, rejection, authorization and failure paths, including guest/account parity, linking/no auto-import, registration disablement, deactivation, scoped holds, proxy/attendee denial, QR/attendance, paper conflicts and six-purpose mail failures. Browser response loss does not suppress legitimate committed-state notifications.
- Plan rendered WCAG 2.2 AA, current/previous stable Chrome/Edge/Firefox/Safari, keyboard/focus/labels, touch/reflow, reduced motion and screen/print confirmation evidence under NFR-007/AC-006/D-069. Scans/emulation are not complete conformance proof.
- No tests, database validation, security assessment, qualified legal/privacy review, restore, benchmark, browser check or Mermaid rendering was performed for this registry. Feature tests/reviews are planned evidence, not current results.
- Physical tables/keys/types/cardinalities, dependency versions, proof/tokens, permission allocations, concurrency/audit mechanisms, email architecture, retention/deletion, QR lifecycle, topology and recovery targets remain open to their sources. Specify only what the bounded feature needs; do not require a global final schema before every spec.
- When authorized, update this registry with actual spec paths/revisions, explicit approval provenance/dates, separate implementation scope, real review/evidence references and limitations. Record split/merge/dependency changes and impact on shared coverage without rewriting prior approval history. Do not invent timestamps, signatures or D/Q identifiers.
- Planning acceptance of a registry, a registry entry, task list, accepted reference or prototype does not authorize implementation. No automatic staging/commit, dependency install, database, environment, CEAP, deployment or external-service action. Each task supplies its own file/action boundary.
- Review scoped diffs/local links, source IDs, coverage/overlap and H-dependency cycles on registry changes; preserve unrelated files and Git index. Keep detailed actions in TASKS and handoff context in MEMORY only when separately authorized. This task changes neither.
- No Obsidian edit or new knowledge artifact is authorized or warranted by this planning inventory. Keep the existing separate-project/CEAP boundaries.

## 9. Registry review and provisional acceptance

| Field | Record |
|---|---|
| Disposition and accepted artifact | **PROVISIONALLY ACCEPTED — living specification-planning registry, revision 0.1.** The 27 candidate scopes, traceability, dependency relationships and suggested delivery waves are accepted for planning and coordination only. |
| Authority and provenance | Product Owner's explicit “Product Owner Decision — Master SDD Registry” in the current conversation. Registry refinements remain subject to applicable change controls. |
| Dates | Approval date: not separately supplied. Recording date: 2026-11-12; this is not represented as the approval date. |
| Reviewed baseline | The 295-line revision 0.1 reviewed before this recording; SHA-256 `87F5D29888B7070CA93153EEC16205BBB8FF09D66F6D46F03C153079C898B94A`. This identifies the pre-recording artifact, not the updated file. Candidate descriptions, source allocations and the 109 H relationships are preserved; status/navigation and stage meanings are clarified by this decision. |
| Separate drafting authority | Product Owner authorized drafting SDD-001 — Application Foundation and Installation Configuration as the next bounded specification. [SDD-001 draft](SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md) is pending review, not approved or implemented. No SDD-002–SDD-027 drafting or implementation is authorized here. |
| Verification and limitations | Codex documentation checks and bounded diffs are reported in the recording chat. No implementation, database, compatibility, security, browser, accessibility, restore or deployment evidence is claimed. |
| Exclusions and history | No individual specification, technical mechanism, dependency/version/provider, implementation, residual-risk acceptance, Gate 2 closure or Checkpoint 11 acceptance follows. Prior reference approvals and P-009's unapproved status are unchanged. Delivery waves are recommendations, not mandatory sequential gates. |

The record above preserves the prior registry acceptance and original SDD-001 drafting authority. Subsequent bounded batch authority and current artifact states are recorded in §10; they do not rewrite that historical approval.

## 10. Batch 1 working update — individual specification approvals

The Product Owner explicitly approved the following exact artifact revisions in the current Gate 2 instruction. Approval dates were not separately supplied; recording date is 2026-11-12. Each approval is limited to the individual specification's documented scope and deferrals. It is not implementation authorization, feature acceptance, release approval, a new technology decision or a new whole-registry acceptance. The earlier §9 registry planning acceptance and historical drafting authorization remain unchanged.

| Actual artifact | Current revision / review / approval state |
|---|---|
| [SDD-001 — Application Foundation and Development Environment Baseline](SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md) | v0.3 — APPROVED provisional specification, within recorded scope. FND-Q01–Q04 remain open; implementation is not authorized. Previous title/revisions and filename remain preserved. |
| [SDD-023 — Reusable Accessible States and Error-Recovery Presentation](SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md) | v0.2 — APPROVED provisional specification, within recorded scope. UX-Q01–Q04 remain open; no six-page mandate, branding implementation or Checkpoint 11 acceptance. |
| [SDD-002 — Internal Identity, Provisioning and Permission Enforcement](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) | v0.4 — APPROVED provisional specification, within recorded scope. D-105 and effective NFR-003 v0.9 govern MFA coverage; factor, session, permission and recovery mechanisms remain open. |
| [SDD-003 — Required Audit and Operational Evidence](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md) | v0.4 — APPROVED provisional specification, within recorded scope. EVD-Q01–Q04 remain open; no log product, table, telemetry provider or retention period selected. |

**SDD-001 refinement and rationale:** the former installation-configuration title could mix local enabling work with operational installation. Its current scope is the minimal Laravel/local development-test baseline, initialization/routing/testability and minimal safe local configuration. Actual client installation, hosting, operational credentials/provisioning, maintenance, backup/restore execution and rollback remain SDD-026 ownership, with recovery evidence also SDD-025. Independent application/database per client remains binding but is not implemented/proven by SDD-001. No other candidate scope, requirement, approved source trace or H relationship is changed. SDD-001-C01–C12 and FND-Q01–FND-Q04 retain their identifiers and revision history.

**Proposed working method:** these four approved provisional specifications were reviewed as one coordinated package, with individual exact revision/scope/criteria dispositions. Future batches may be proposed through applicable controls; this creates no mandatory batch size, approval shortcut, gate or all-four implementation condition.

**Stage boundaries:** drafting contracts can proceed together without completed implementations. Implementation still requires its own approved bounded scope, material decisions, explicit authority and applicable review. Integration must exercise actual required authority/evidence/journey contracts. Individual acceptance requires actual evidence for the authorized scope, not all four complete implementations by default. SDD-003 does not require all identities/business features before drafting its event contract; SDD-002 must integrate actual required evidence before claiming complete provisioning. SDD-023 fixtures do not establish business authorization/outcome correctness. SDD-001 can be verified as its narrow local slice without completing SDD-002/003/023/026; it proves none of their missing behavior.

All 27 candidate identifiers and 109 H relationships remain, with recommended waves/topological levels used for coordination rather than mandatory sequential gates. SDD-002/003/023 dependencies are unchanged; their cross-references link the approved specification documents. Implementation is not authorized for any entry. No other individual draft, database operation, package installation, prototype/CEAP access, new gate, Checkpoint 11 acceptance or Gate 2 closure is authorized.

Open questions remain governed by the individual SDDs. No implementation, feature acceptance, Checkpoint 11 acceptance or Gate 2 closure follows from these approvals.

### Batch 2 — SDD-007 and SDD-025 exact-version approvals

The Product Owner approved exact SDD-007 v0.2 and SDD-025 v0.1 within their documented scopes. SDD-007 v0.1 was approved in a separate earlier Product Owner decision; v0.2 supersedes it for current scope without backdating. SDD-025 v0.1 was also approved in a separate earlier Product Owner decision; that provenance is retained. Approval dates were not separately supplied. These entries document the approvals recorded on 2026-11-13 and preserve the prior draft history. SDD-024 v0.1 now exists as a draft and may be developed independently; its draft status does not authorize bypassing applicable privacy decisions before implementation or operational reliance.

| Actual artifact | Current revision / review / approval state |
|---|---|
| [SDD-007 — Six-Purpose Email Boundary and Delivery Recovery](SDD-007-SIX-PURPOSE-EMAIL-BOUNDARY-AND-DELIVERY-RECOVERY.md) | v0.2 — **APPROVED** as the current provisional specification within scope; earlier v0.1 approval is preserved separately. D-095's six purposes and recipient/content boundaries remain; provider, delivery recovery, persistence and token mechanisms remain open. MAIL-Q01–Q04 remain open. |
| [SDD-025 — Backup, Restoration and Recoverability Evidence](SDD-025-BACKUP-RESTORATION-AND-RECOVERABILITY-EVIDENCE.md) | v0.1 — **APPROVED** as a provisional specification within scope under its earlier separate Product Owner decision. Plan, backup creation, tested restore procedure and particular-client-backup verification remain distinct; objectives, custody, methods and allocations remain open. BKP-Q01–Q05 remain open. |

The prior drafting record is preserved. These exact-version approvals do not amend the accepted 27-scope planning baseline or H relationships, authorize implementation/data access/restore/provider adoption, change Gate 2 or Checkpoint 11 status, or affect the four Batch 1 approvals. SDD-007 consumer integration remains with the respective feature specifications; SDD-025 implementation and operational reliance require the relevant SDD-024/026 decisions, authorization and evidence. No tests, email delivery, backup or restore operations were performed.

### Batch 2 W2 follow-on — SDD-004, SDD-008 and SDD-026 exact-version approvals

The Product Owner approved exact SDD-004 v0.1, SDD-008 v0.1 and SDD-026 v0.1 within their documented scopes. Approval dates were not separately supplied; these approvals are recorded 2026-11-13. The registry's H rows remain implementation/integration prerequisites, not limits on the recorded specification scope: SDD-004's SDD-001/002/003 contracts are approved; SDD-008 defines its scoped access contract while consumer integrations remain future work; SDD-026 documents readiness boundaries while SDD-024's privacy/context work and operational assignments remain open. The W2 order and 27 candidate scopes are unchanged.

| Actual artifact | Current revision / review / approval state |
|---|---|
| [SDD-004 — Service Catalog and Minimum Booking-Data Configuration](SDD-004-SERVICE-CATALOG-AND-MINIMUM-BOOKING-DATA-CONFIGURATION.md) | v0.1 — **APPROVED** provisional specification within scope. Field catalog, permission allocation, service lifecycle and privacy details remain open; SVC-Q01–Q04 remain open. |
| [SDD-008 — Appointment-Scoped Guest Access and Assisted Recovery](SDD-008-APPOINTMENT-SCOPED-GUEST-ACCESS-AND-ASSISTED-RECOVERY.md) | v0.1 — **APPROVED** provisional specification within scope. Proof methods, assisted-recovery permissions, representative visibility and contested review remain open; GUEST-Q01–Q05 remain open. |
| [SDD-026 — Deployment, Maintenance and Exceptional-Support Readiness](SDD-026-DEPLOYMENT-MAINTENANCE-AND-EXCEPTIONAL-SUPPORT-READINESS.md) | v0.1 — **APPROVED** provisional specification within scope. Supported profile, hosting responsibility allocation, custody, recovery objectives and operational assignments remain open; OPS-Q01–Q06 remain open. |

The existing §4 traceability rows for SDD-004/008/026 are retained and linked to their approved exact-version specifications in §3/§10. No requirement or decision mapping, H relationship, wave order, Batch 1 approval or project status is changed. These approvals authorize no implementation, service-field collection, guest-proof method, hosting choice, operational commitment or deployment.

### W2 drafting and approval record — SDD-005

The Product Owner authorized documentation-only drafting of SDD-005 after the approved SDD-004/008/026 group, consistent with the accepted W2 order and existing H relationship (SDD-004 is its listed prerequisite contract). Initial draft v0.1 was revised to [SDD-005 — Availability, Resource, Capacity and Scheduling Policy](SDD-005-AVAILABILITY-RESOURCE-CAPACITY-AND-SCHEDULING-POLICY.md) v0.2 following eight Product Owner directions endorsed for drafting. The endorsements were not Decision Register entries and did not themselves approve the specification. The Product Owner subsequently approved exact revision v0.2 as a provisional specification within its documented scope. Approval date: 2026-11-13; provenance: explicit Product Owner approval statement in the current instruction; recording date: 2026-11-13. SCH-Q01–Q08 remain open in detail. The existing §4 traceability mapping is retained; SDD-006 owns final booking integrity and its final contract is required before integration/acceptance of booking behavior. No implementation, database operation, deployment, Gate 2 closure or Checkpoint 11 acceptance is authorized.

## 11. Coordinated policy recording and current artifact status — proposed revision 0.4

The Product Owner supplied explicit approval evidence for the six earlier policy directions, three clarifications and 30 choices in three batches. Decision Register D-106–D-109 records those policy directions with approval date not separately supplied and recording date 2026-11-13. D-110 adopts execution guidance only. These decisions do not approve the specification revisions below, technology/mechanism choices, requirement amendments, or implementation. Exact source wording and limitations remain in the Decision Register. Requirements Specification v0.9 and Traceability revision 1.3 remain the effective approved baseline; neither was changed by this update.

Revision 0.4 supersedes the pending revision 0.3 overlay for exact-version navigation. It reflects focused DOC-WP-02 corrections to draft provenance, source references, and the SDD-006/SDD-022 interface. It does not revise the accepted 27-scope planning baseline or record any specification approval.

The consolidated acceptance-readiness matrix and D-102 evaluation queue for this overlay are tracked in [DOC-WP-02 in TASKS.md](../../TASKS.md). The Registry remains the planning inventory; TASKS.md records current work-package status and handoff.

| Current specification artifact | Current revision and status | Preserved prior approval / remaining question boundary |
|---|---|---|
| [SDD-001 — Application Foundation and Development Environment Baseline](SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md) | v0.3 — **APPROVED** for its exact documented scope. | Unchanged in this sprint; FND-Q01–Q04 remain open as recorded. |
| [SDD-002 — Internal Identity, Provisioning and Permission Enforcement](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) | v0.5 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.4 approval remains historical; IDN-Q01–Q04 remain open for independent authorization, mechanism, session, recovery and assignment details. |
| [SDD-003 — Required Audit and Operational Evidence](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md) | v0.5 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.4 approval remains historical; EVD-Q01–Q04 remain open for reader/event detail, integrity mechanism, diagnostics and lifecycle/custody. |
| [SDD-004 — Service Catalog and Minimum Booking-Data Configuration](SDD-004-SERVICE-CATALOG-AND-MINIMUM-BOOKING-DATA-CONFIGURATION.md) | v0.3 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.1 approval remains historical; SVC-Q01–Q04 remain open for actual fields, permissions, lifecycle, validation, visibility and retention. D-094 is cited only within the effective v0.8 boundary; no proposal is adopted by citation alone. |
| [SDD-005 — Availability, Resource, Capacity and Scheduling Policy](SDD-005-AVAILABILITY-RESOURCE-CAPACITY-AND-SCHEDULING-POLICY.md) | v0.4 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.2 approval remains historical; SCH-Q01–Q08 retain unresolved configuration values, detailed semantics, exception rules and technical design. Q-016/Q-022 numeric targets remain open under D-098/D-109. |
| [SDD-006 — Shared Booking Integrity and Authoritative Outcomes](SDD-006-SHARED-BOOKING-INTEGRITY-AND-AUTHORITATIVE-OUTCOMES.md) | v0.1 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | Draft reconciled under DOC-WP-01; INT-Q01–Q07 remain open. D-109's target-evaluation direction does not set numeric targets; D-070 remains a future verification obligation. D-079's former Gate 2 timing is historical under D-098. |
| [SDD-007 — Six-Purpose Email Boundary and Delivery Recovery](SDD-007-SIX-PURPOSE-EMAIL-BOUNDARY-AND-DELIVERY-RECOVERY.md) | v0.3 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.2 approval remains historical; MAIL-Q01–Q04 remain open for providers, processing/recovery, purpose-specific proof and qualified privacy/data handling. |
| [SDD-008 — Appointment-Scoped Guest Access and Assisted Recovery](SDD-008-APPOINTMENT-SCOPED-GUEST-ACCESS-AND-ASSISTED-RECOVERY.md) | v0.2 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.1 approval remains historical; GUEST-Q01–Q05 remain open for proof, communication, permissions, representation, dispute and evidence details. |
| [SDD-013 — Contested-Action Holds and Assigned Case Review](SDD-013-CONTESTED-ACTION-HOLDS-AND-ASSIGNED-CASE-REVIEW.md) | v0.3 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.1 and v0.2 remain prior drafts, not approvals; CASE-Q01–Q06 preserve the open triggers, assignments, process, evidence, operations and review details. D-108 is included in the authority boundary; SDD-024 exists as a separate draft and qualified privacy review remains pending. |
| [SDD-022 — Configuration Changes Affecting Accepted Appointments](SDD-022-ACCEPTED-APPOINTMENT-CONFIGURATION-IMPACT.md) | v0.2 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | IMP-Q01–Q06 remain open for impact classifications, review/authorization, affected-appointment handling and operational/evidence details. SDD-006 checks are limited to booking/capacity-affecting actions; no automatic cancellation, rescheduling, grandfathering or migration. |
| [SDD-023 — Reusable Accessible States and Error-Recovery Presentation](SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md) | v0.3 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.2 approval remains historical; UX-Q01–Q04 remain open. D-109's branding direction has no assigned spec owner or field/permission mechanism in this registry update; localization remains separate under Q-011. |
| [SDD-024 — Privacy, Data Lifecycle and Incident-Handling Readiness](SDD-024-PRIVACY-DATA-LIFECYCLE-AND-INCIDENT-HANDLING-READINESS.md) | v0.2 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | Initial v0.1 was drafted under an earlier authorization and later reconciled under DOC-WP-01; no version has been approved. D-109 direction is reflected without selecting legal roles or periods. PH-01–PH-10 remain pending qualified review and LIFE-Q01–Q07 remain open. |
| [SDD-025 — Backup, Restoration and Recoverability Evidence](SDD-025-BACKUP-RESTORATION-AND-RECOVERABILITY-EVIDENCE.md) | v0.3 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.1 approval remains historical; BKP-Q01–Q05 remain open. D-109's measurable recovery-objective evaluation is approved; objective values and methods are not. |
| [SDD-026 — Deployment, Maintenance and Exceptional-Support Readiness](SDD-026-DEPLOYMENT-MAINTENANCE-AND-EXCEPTIONAL-SUPPORT-READINESS.md) | v0.3 — **DRAFT — PENDING PRODUCT OWNER REVIEW**. | v0.1 approval remains historical; SDD-026/OPS-Q01–Q06 remain open for supported profile and operational arrangements. Current SDD-024/025 dependencies are drafts, not absent files or approvals. |

This current-state overlay does not rewrite the exact-version approvals recorded in §10. Specification-local questions remain open wherever a policy direction answers only one component. The two similarly named operational questions are distinct: `SECURITY/OPS-Q01` in the Security reference concerns operational ownership; `SDD-026/OPS-Q01` concerns supported deployment profile. Do not merge or renumber either item.

### Additional scope disposition — client branding

D-109 records the Product Owner's bounded client-branding direction. The accepted 27-scope registry has not yet assigned a detailed branding contract to a specification. This revision does not add a 28th SDD identifier, place fields/editor/storage/permissions in SDD-023, or resolve localization. A later registry change-control proposal should assign an owner and traceability for the branding contract before the affected implementation is specified; the Product Owner should approve that allocation. No branding mechanism or implementation is authorized here.

### Requirements and gate boundary

D-106–D-109 provide approved policy directions, but do not themselves update normative requirement text. Any additional normative statements needed beyond the effective v0.9 baseline must follow Requirements Governance's versioned amendment and traceability process; the current baseline and revision 1.3 are untouched. Gate 2 remains historically **IN PROGRESS** under D-098; Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). D-098's prospective SDD workflow supersedes routine sequential gate progression without erasing historical gate records or retained security, data-integrity, verification, release and operational controls.

## 12. Proposed revision 0.5 — authorized draft completion overlay

The Product Owner authorized documentation-only drafting of the 13 previously missing specifications in the current historical Gate 2 disposition and SDD instruction; recorded 2026-11-13, not an approval date. Each listed v0.1 is **DRAFT — PENDING PRODUCT OWNER REVIEW**. The 27 planning scopes and §4 traceability and §6 dependencies remain unchanged; prior exact approvals in §10 and the v0.4 overlay in §11 are preserved. SDD-001 v0.3 remains approved in its exact scope; the 13 current revisions in §11 remain pending review. This update does not approve any draft, change effective requirements, authorize implementation, accept a specialist review or close Gate 2. The [acceptance sheet](../SDD-ACCEPTANCE-CHECKPOINT.md) lists current versions and questions.

| Newly drafted scope | Revision | Review status |
|---|---|---|
| [SDD-009 — Public Guest Booking, Alternatives and Accessible Confirmation](SDD-009-PUBLIC-GUEST-BOOKING-ALTERNATIVES-AND-ACCESSIBLE-CONFIRMATION.md) | v0.1 | Draft; PO review pending |
| [SDD-010 — Optional Customer Accounts and Registration Lifecycle](SDD-010-OPTIONAL-CUSTOMER-ACCOUNTS-AND-REGISTRATION-LIFECYCLE.md) | v0.1 | Draft; PO review pending |
| [SDD-011 — Customer Dashboard and Individual Appointment Association](SDD-011-CUSTOMER-DASHBOARD-AND-INDIVIDUAL-APPOINTMENT-ASSOCIATION.md) | v0.1 | Draft; PO review pending |
| [SDD-012 — Profile Correction and Explained Booking Prefill](SDD-012-PROFILE-CORRECTION-AND-EXPLAINED-BOOKING-PREFILL.md) | v0.1 | Draft; PO review pending |
| [SDD-014 — Authorized Staff Appointment Lookup and Routine Edits](SDD-014-AUTHORIZED-STAFF-APPOINTMENT-LOOKUP-AND-ROUTINE-EDITS.md) | v0.1 | Draft; PO review pending |
| [SDD-015 — Staff-Assisted, Proxy and Streamlined Walk-in Booking](SDD-015-STAFF-ASSISTED-PROXY-AND-STREAMLINED-WALK-IN-BOOKING.md) | v0.1 | Draft; PO review pending |
| [SDD-016 — Eligible Cancellation and Cancellation Confirmation](SDD-016-ELIGIBLE-CANCELLATION-AND-CANCELLATION-CONFIRMATION.md) | v0.1 | Draft; PO review pending |
| [SDD-017 — Eligible Rescheduling and Preserved-Original Outcomes](SDD-017-ELIGIBLE-RESCHEDULING-AND-PRESERVED-ORIGINAL-OUTCOMES.md) | v0.1 | Draft; PO review pending |
| [SDD-018 — Configured Supervisor Exceptions](SDD-018-CONFIGURED-SUPERVISOR-EXCEPTIONS.md) | v0.1 | Draft; PO review pending |
| [SDD-019 — Staff QR/Manual-Reference Lookup and Attendance](SDD-019-STAFF-QR-MANUAL-REFERENCE-LOOKUP-AND-ATTENDANCE.md) | v0.1 | Draft; PO review pending |
| [SDD-020 — Controlled Printable Daily Roster](SDD-020-CONTROLLED-PRINTABLE-DAILY-ROSTER.md) | v0.1 | Draft; PO review pending |
| [SDD-021 — Reviewed Batch Paper/Outage Reconciliation](SDD-021-REVIEWED-BATCH-PAPER-OUTAGE-RECONCILIATION.md) | v0.1 | Draft; PO review pending |
| [SDD-027 — Integrated Quality, Product-Fit and Release Evidence](SDD-027-INTEGRATED-QUALITY-PRODUCT-FIT-AND-RELEASE-EVIDENCE.md) | v0.1 | Draft; PO review pending |

The preceding §§2–3 describe the historical v0.4 file inventory; this overlay supplies current navigation. The SDD-027 planning trace row in §4 predates approved AC-027–AC-029; its new draft explicitly includes AC-001–AC-029 for assurance coverage. This is a proposed navigation clarification, not a requirements or traceability-baseline amendment. Actual individual implementation/integration needs approved applicable contracts, separately authorized work, relevant specialist review and actual evidence; dependency relationships are not drafting gates. No new requirement, technology, role, fixed value or release approval is inferred.

## 13. Product Owner exact-version decision and corrected drafts

The Product Owner explicitly approved the following 22 exact revisions within their documented scope and deferrals, and approved Registry v0.5 strictly as a navigation/status overlay. Source: the Product Owner decision supplied in the current conversation. Approval date was not separately supplied; recorded 2026-11-13. The prior §9 planning approval and §10 individual approvals remain preserved; v0.4 was not approved. Sections 11–12 retain their pre-decision review-state text for history.

| SDD | Approved exact revision |
|---|---|
| 002, 003 | v0.5 each |
| 004 | v0.3 |
| 005 | v0.4 |
| 006 | v0.1 |
| 007 | v0.3 |
| 008 | v0.2 |
| 012 | v0.1 |
| 013 | v0.3 |
| 014, 015, 016, 017, 018, 019, 020 | v0.1 each |
| 022 | v0.2 |
| 023 | v0.3 |
| 024 | v0.2, bounded privacy readiness specification |
| 025, 026 | v0.3 each; 026 is a bounded operational readiness specification |
| 027 | v0.1 |

SDD-001 v0.3 remains approved under its earlier decision. At this decision, the Product Owner returned SDD-009/010/011/021 v0.1 for correction; their subsequent v0.2 approval is recorded in §14. This supplement does not amend accepted planning scopes, requirements or traceability. Approval does not select a mechanism, accept a specialist assessment or residual risk, establish operational readiness, authorize implementation or release, waive a checkpoint or close Gate 2. Applicable open questions and review milestones remain.

Gate 2 remains historically IN PROGRESS under D-098; CP11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112), CP12 and final review are not recorded complete, and Q-007 and other applicable historical dispositions remain open. No waiver or closure was authorized.

## 14. Product Owner approval of four corrected specifications

The Product Owner individually approved the following exact revisions within their documented scopes. Source: the explicit Product Owner decision in the ChatGPT Gate 2 continuation conversation. Approval date was not independently supplied; recording date: 2026-11-13. Each v0.1 had been returned for correction; none of those v0.1 drafts was approved by this decision.

| Specification | Approved exact revision |
|---|---|
| SDD-009 | v0.2 |
| SDD-010 | v0.2 |
| SDD-011 | v0.2 |
| SDD-021 | v0.2 |

All 27 current exact SDD revisions now have recorded Product Owner specification approval: SDD-001 v0.3 under its earlier approval, 22 revisions under §13, and these four under this section. Registry v0.5 remains approved only as its existing navigation/status overlay; v0.4 was not approved. Open policy, mechanisms, qualified reviews, feature verification and operational/release obligations remain applicable. These approvals do not approve future revisions, authorize implementation or release, accept risk or specialist findings, waive checkpoints, or close Gate 2.
