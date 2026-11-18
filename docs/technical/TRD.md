# iTakda Technical Requirements Reference

> **Status: Product Owner accepted the Session 02 TRD reference revision, following verification of the stated backup and tested-restore condition; see the review record below.** This technical overview does not create a requirements baseline, select architecture or authorize implementation. Approved requirements are development-stage assumptions, not representative validation.

**Approved source records:** [Engineering Governance](../ENGINEERING_GOVERNANCE.md), applicable [decisions](../decisions/DECISION_REGISTER.md), effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) with preserved v0.8 and unchanged [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md), and [traceability revision 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md) with preserved revisions 1.2 and 1.0 in the [earlier matrix](../requirements/REQUIREMENTS_TRACEABILITY.md). Revision 1.1 commentary is administrative. Exact-version approval is for development-stage design; no validation or implementation authorization follows.

**Accepted supporting reference:** the [PRD](../product/PRD.md) summarizes approved product direction; its Session 01 acceptance does not supersede the source requirements or authorize implementation. Provisional design references below retain their individually recorded limitations.

## Approved obligations

| Concern | Technical outcome to design and verify | Source |
|---|---|---|
| Installation isolation | Separate independently deployed client environments, configuration, credentials and databases; no cross-client or CEAP production dependency. | NFR-001/002/004; D-020/D-035 |
| Authority | Authenticate state changes using approved mechanisms, authorize and validate server-side; scope guest management to independently established appointment authority. Denial does not mutate or unnecessarily disclose. | NFR-003/005; FR-007/012/019–021 |
| Booking integrity | Recheck current applicable eligibility, availability, capacity and duplicate policy at final decision; unique reference on accepted creation; no partial/orphaned effects. | FR-002; NFR-006; BR-001/002/010 |
| Changes and uncertainty | Atomically release/reallocate on reschedule; known rejection preserves original booking. Reconcile unknown results before retry; do not report unestablished success. | FR-007; BR-013; AC-026; D-090 |
| QR and attendance | Authorized minimal lookup is separate from identity and explicit attendance actions. | FR-005/006/014; D-045 |
| Evidence and recovery | Required audit and privacy-conscious operational signals; controlled roster and reviewed reconciliation; backups and tested restoration before reliance on data. | FR-008/016/017; NFR-011; Governance §§11, 17 |
| Accessibility and testability | WCAG 2.2 AA core-workflow target, supported-browser policy, automated success/rejection/authorization/failure tests as applicable, isolated environment. | NFR-007/010; D-069; Governance §14 |

## Quality scenarios and verification

Use the following structure for each affected workflow. These fields organize future evidence; they do not set a new target or approval step.

| Scenario field | Record for later review |
|---|---|
| Operation or workflow | The specific action and approved requirement/criterion references. |
| Conditions and workload | Applicable installation, environment, input, policy preconditions, normal/peak or contention profile, and failure conditions. |
| Measurement point and metric | Where measurement starts and ends and what is counted, such as response time, authoritative outcomes or integrity violations. |
| Target or acceptance threshold | Cite an existing approved threshold, or mark the value **open** pending its proper disposition; do not invent a number. |
| Verification method and evidence | Applicable isolated test/review method, environment, actual results and limitations; planned work is not evidence of success. |
| Responsible review or disposition | Accountable evidence preparer, reviewer and approver, including independent review where required (D-072; Governance §§5/14/19). |

**Approved profiles and outcomes:** D-067 and NFR-008 use **20–100 appointments per day per installation** as a normal planning/verification profile, not a capacity limit or simultaneous-user count. D-070 also defines a busy **100-appointment day** with applicable staff-assisted and walk-in activity. For **50 simultaneous valid requests competing for one remaining capacity unit**, exactly one reservation succeeds; all others have safe outcomes without over-capacity, prohibited duplicates, partial or orphaned state (NFR-006/008, AC-005; D-070). Later test design must define valid inputs and duplicate-policy preconditions so the requests actually compete for the same remaining unit.

**Approved protections and targets:** protected state changes require approved authentication and server-side authorization and validation; final booking decisions enforce the applicable integrity rules (NFR-003/006; Governance §§11–12). Applicable core public and administrative workflows target WCAG 2.2 AA across the current and previous stable major releases of Chrome, Edge, Firefox and Safari (NFR-007, AC-006, D-069); NFR-010/AC-008 require applicable automated success, rejection, authorization and failure-path tests. No conformance or test result is claimed.

**Open and unmeasured:** numeric response-time and availability targets (Q-016/Q-022), recovery-point objective (RPO: tolerated data-loss window), recovery-time objective (RTO: tolerated recovery time), environment details and other unapproved thresholds remain open. Profiles are planning assumptions and approved verification inputs, not measured capacity or performance results. A known authoritative rejection differs from a lost response with an unknown outcome; establish the prior authoritative outcome and same-intent relationship before retry, or keep the result unresolved without a blind repeat (D-090; FR-007, BR-013, AC-026). Former gate-based deadlines are historical under D-098; resolve material open items before affected implementation or applicable review ([Gate Register transition](../GATE_REGISTER.md)).

## Configuration and appointment impact

| Area | Source status and boundary | Open consideration for affected work |
|---|---|---|
| Client business configuration | **Approved requirement:** an authorized administrator configures services, periods, duration/buffers, staff/resources and ordinary capacity under client policy without editing core scheduling logic (FR-001, NFR-004). | Exact capacity, duplicate, eligibility and service-policy values and how changes are proposed or approved remain open within recorded authority. |
| Per-installation technical configuration | **Approved boundary:** independent installations with separately scoped environment, credentials, configuration and database; operator has no default client-record access (NFR-001/002/005; D-020/D-034/D-035). | Infrastructure, credential custody, supported profile and change responsibility are open under Q-007/Q-008; technical custody does not itself grant business-record authority. |
| Effective policy at appointment decision | **Approved requirements:** applicable availability, eligibility, capacity and duplicate rules are checked for accepted changes (FR-002/007; NFR-006; BR-002/010/013). **Provisional direction:** D-085(3) describes a minimum safe configuration and shared final integrity boundary. | How the applicable policy is represented and interpreted across historical decisions remains open. No versioning scheme or storage model is selected. |
| Authority, accepted appointments and outcomes | **Approved:** configuration and material events require applicable authorization and audit (FR-001/008; NFR-003/011). **Provisional working design:** D-086 calls for examining existing-booking impact and avoiding silent invalidation ([component design §§4/6](../archive/legacy-sdlc/architecture-working-designs/COMPONENT_MODULE_DESIGN.md)). | Explore preserving accepted commitments where safely applicable and holding, rejecting or referring conflicting proposals for appropriate authorized consideration. Treatment of affected bookings and change-approval roles remain open; no universal grandfathering, automatic cancellation/migration, new permission or dispute category is approved. |
| Time and historical interpretation | **Provisional data-design question:** [logical data design](../archive/legacy-sdlc/architecture-working-designs/DATA_ARCHITECTURE_MODEL_DESIGN.md) §3 identifies time-zone and effective-period interpretation as open. | Determine how dates, times and applicable historical policies are interpreted for each affected scenario. No time-zone storage or configuration-revision mechanism is selected. |

## Outcome, audit and limited email

An accepted booking/change must meet applicable integrity requirements and have required attributable audit evidence (FR-002/007/008; NFR-006/011). The provisionally accepted component design expects the authoritative outcome and required evidence to agree; inability to record required evidence must not be presented as established success ([component design §9](../archive/legacy-sdlc/architecture-working-designs/COMPONENT_MODULE_DESIGN.md)). The persistence mechanism remains open.

D-095, FR-010 and AC-024 limit email purposes, recipients and content. Failed or delayed delivery cannot undo a committed booking change or trigger a duplicate business action. No transaction email is sent for a rejected, unknown, uncommitted or held booking/cancellation/rescheduling transaction; [v0.8 §5](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) records the full recipient and hold boundaries. No email provider, outbox, worker or queue is selected.

## Preliminary operational responsibility matrix

Both client-managed and provider-managed hosting are approved design constraints; one standardized supported deployment profile is a principle, not a selected platform (D-083/D-084). The allocations below are **open for later review** under Q-008 in both models; no provider, contract, service commitment or additional access level is assigned here.

| Area | Approved boundary / consideration | Allocation in both hosting models |
|---|---|---|
| Hosting and infrastructure | Each client retains an independent installation and data boundary (D-020/D-035/D-083). | **Open:** infrastructure custodian, technical administration and operating duties. |
| Environment and credential custody | Separate environments and protect secrets; custody can confer effective access (Governance §12; D-034/D-075). | **Open:** who holds, rotates and recovers each scoped credential. |
| Configuration ownership | Authorized client administration and approved client policy govern business settings (FR-001; NFR-004). | **Open:** technical change executor and authorization/impact process in each hosting model. |
| Backups and restore testing | Backups and a tested restore procedure are required before reliance on installation data (Governance §17). | **Open:** backup custody, schedule, retention, execution and evidence responsibilities. |
| Security updates and deployment | Applicable change control, review and separate release/deployment approval remain required (Governance §§5/17). | **Open:** update executor, maintenance allocation and approved rollback/recovery decisions. |
| Monitoring and incident handling | Essential privacy-conscious operational visibility is required (NFR-011; D-073). | **Open:** who monitors, responds, escalates and handles incidents. |
| Support and recovery | Support follows the installation boundary and applicable client authority (FR-012; D-083/D-091). | **Open:** support allocation, restore authority, recovery procedure and commitments. |
| Privacy-sensitive access | No default operator client-record access; exceptional access requires explicit client authorization, least privilege, defined scope/duration, attribution and review (FR-012/NFR-005; D-034/D-075). | **Open:** custodians and the approved exceptional-access procedure; host or backup custody is not blanket authorization. |

## Backup and recovery evidence

A **documented backup procedure** describes intended custody, protection and execution; documentation alone does not demonstrate that a backup or restore works. A **tested restore procedure** supplies observed evidence that the procedure works under its actual test conditions. Neither alone proves that a particular installation's real backup is readable, complete or recoverable. Backups and a tested restore procedure must exist before relying on installation data (Governance §17).

The D-091 provisionally accepted [deployment working design](../archive/legacy-sdlc/architecture-working-designs/CONFIGURATION_DEPLOYMENT_DESIGN.md) §§8/10 distinguishes an isolated synthetic-data restore rehearsal from separately authorized, privacy-reviewed verification of a particular real client's backup before operational reliance. It does not authorize use of client personal data in a test environment. Actual custody, verification procedure, RPO/RTO and recovery commitments remain open. No backup, restore test or real-backup verification is claimed here.

## Provisional technical direction

**TECH-Q01 documentation amendment — ACCEPTED as reference guidance by the Product Owner; see the separate amendment acceptance record below.** The Session 02 acceptance below retains its original scope and does not retrospectively accept these additions or select technologies.

### Preferred technology stack

D-022 records Laravel, Blade, Tailwind CSS, MariaDB, Git/GitHub and automated testing as the **preferred direction**, not permission to install dependencies or final version selection. PHP runtime/version compatibility remains to be evaluated with the Laravel candidate under D-031/Q-007; see the [compatibility working design](../archive/legacy-sdlc/architecture-working-designs/COMPATIBILITY_DEPENDENCY_DESIGN.md). Docker remains conditional under D-023/D-036: documented purpose, justification and appropriate Product Owner approval are required; it is not adopted.

The approved boundary is an independent application installation and independent database per client (D-020/D-035/D-083), not shared SaaS tenancy. D-085's modular monolith per installation remains a **provisional** direction. [Architecture](../architecture/ARCHITECTURE.md) and the [accepted conceptual information model](../architecture/BACKEND_SCHEMA.md) describe boundaries rather than implementation contracts. The [interface working design](../archive/legacy-sdlc/architecture-working-designs/INTERFACE_API_DESIGN.md) provides logical candidates, not approved endpoint paths or APIs.

### Selection rationale and trade-offs

This direction supports one cohesive application per installation, shared server-side policy and testable workflow boundaries. It still needs explicit integrity, authorization, compatibility, update and recovery design; a framework does not establish those controls automatically. Server-rendered presentation can reduce client-state complexity, while richer browser interactions add lifecycle, accessibility and network-failure considerations. UI responsiveness never establishes an authoritative booking outcome.

Significant selections follow [Engineering Governance §15](../ENGINEERING_GOVERNANCE.md#15-change-control-and-decision-documentation) and D-102: benefits, relevant alternatives/rationale, trade-offs, credible failures, mitigation/recovery, verification criteria and residual risks are documented proportionately before implementation approval. Actual evidence follows separately authorized execution. Detailed assessments belong in applicable decision/design records; this overview does not duplicate or approve them.

### Alternatives and candidate additions

Alpine.js for local interactivity, selective Livewire, and alternative React/Vue frontends remain candidates. Evaluate added complexity against actual workflows rather than adding a second frontend architecture automatically. Calendar/scanning packages, mail transports/providers, queue backends, recoverable notification intent or outbox approaches, CI, static analysis, formatting and test tools also remain candidates. Redis and Docker require a demonstrated need. No package, version, provider, hosting or deployment platform is selected.

### Open technical decisions

Resolve relevant lifecycle/compatibility, proof/permission, concurrency, same-intent reconciliation, notification recovery, deployment and operational ownership questions before affected implementation approval. Numeric service and recovery commitments remain open. Proposed mechanisms must preserve D-070 integrity and D-095 email boundaries, including legitimate committed-state notifications when a browser response is lost. This documentation amendment grants no implementation or new control/technology approval.

## Verification and unresolved detail

Plan future verification for the D-067 normal/peak profiles and D-070 contention case (50 valid simultaneous requests, one capacity unit, exactly one success). These are requirements, not observed results. Numeric response-time/availability thresholds, infrastructure, deployment profile, physical schema, locking, safe-retry mechanism, staff identity and role mapping are unresolved. See [testing](../engineering/TESTING.md), [security](../security/SECURITY.md), and the [decision register](../decisions/DECISION_REGISTER.md). Implement only after the feature-specific approvals and applicable specialist review in Governance §5.

## Session 02 review and acceptance

| Field | Record |
|---|---|
| Scope and disposition | The Product Owner accepted the Session 02 TRD revision direction in this chat, conditional on verification of the backup and tested-restore wording against Engineering Governance §17. That condition was verified; the existing wording was accurate and needed no correction. The revised TRD reference is accepted for this documentation review; Session 02 is complete. |
| Approver and date | Product Owner; acceptance date not separately supplied. Record prepared 2026-11-11; the recording date is not represented as a separately supplied approval date. |
| Reviewer and verification | Codex compared the TRD with [Engineering Governance §17](../ENGINEERING_GOVERNANCE.md#17-release-readiness-backups-recovery-and-operations) and [Decision Register D-091](../decisions/DECISION_REGISTER.md) §9.9. Governance requires backups and a tested restore procedure before reliance on an installation's data; it does not specify whether the procedure must be retested separately for every installation. D-091 separately records that synthetic rehearsal does not establish real-backup restorability and requires a separately approved privacy-safe real-backup verification approach before operational reliance. Links, the acceptance record and working-tree scope were checked as reported in the Session 02 closure chat. |
| Session decisions | TRD-Q01 = A: structure quality-measurement scenarios while unapproved numeric targets remain open. TRD-Q02 = A: retain a concise, source-linked overview. TRD-Q03 = A: explore safe preservation of accepted bookings and appropriate handling of conflicting configuration changes; final policy remains open. TRD-Q04 = A: prepare a preliminary operational responsibility matrix without assigning unresolved duties. |
| Findings | TRD-F01, TRD-F02 and TRD-F03 addressed at the documentation level through source-authority clarification, quality-scenario structure and configuration-impact coverage. No implementation or verification result is asserted. |
| Limitations | This acceptance concerns the TRD reference only. It does not amend approved requirements or decisions, create a requirements baseline, approve architecture, implementation, infrastructure or numeric targets, establish accessibility or security conformance, prove backup effectiveness, or approve release or deployment. Backup custody, retention, real-backup verification procedure, RPO/RTO, hosting responsibilities, configuration policy and other stated technical questions remain open. Review was source-based and assisted by Codex; no independent human technical review is claimed. |

The acceptance record follows [Engineering Governance §5](../ENGINEERING_GOVERNANCE.md#5-spec-driven-development-lifecycle) for identifying the change, reviewer, verification, outcome and limitations, and §18 for recording Product Owner approval and an unsupplied approval date. No new decision-register entry or historical gate transition is implied.

## TECH-Q01 amendment review and acceptance

| Field | Record |
|---|---|
| Scope and disposition | **ACCEPTED — TECH-Q01 TRD documentation amendment only.** Acceptance covers the reviewed wording under Provisional technical direction: preferred stack, rationale/trade-offs, alternatives/candidates and open technical decisions. |
| Authority and dates | Product Owner explicitly directed recording acceptance of TECH-Q01 in the current conversation, limited to its existing wording and scope. Approval date: not separately recorded. Recording date: 2026-11-12; this is not represented as the approval date. |
| Reviewer and verification | The Product Owner accepted the amendment; Codex compared its exact wording with the reviewed draft and checked D-022, conditional Docker, D-085, independent installation/database boundaries and D-102. The content comparison, local link/anchor checks and Git/file-state preservation checks are reported in the recording chat. No runtime, compatibility, database, security or accessibility test is claimed. |
| Limitations and history | The original Session 02 record remains unchanged. This separate reference amendment selects no candidate technology, version, provider, security control or mechanism and authorizes no implementation or deployment. All stated deferrals remain; SEC-Q03/PRIV-Q01 options are not approved. Session 07 remains pending review; Gate 2 and Checkpoint 11 statuses are unchanged. |

This recording follows Engineering Governance §§5 and 18. It neither expands the original Session 02 approval nor creates a new requirements baseline or Decision Register entry.
