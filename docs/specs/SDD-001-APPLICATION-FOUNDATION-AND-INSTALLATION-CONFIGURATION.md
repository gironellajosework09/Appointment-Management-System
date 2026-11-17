# SDD-001 — Application Foundation and Development Environment Baseline

> **Status: APPROVED — SDD-001 v0.3, provisional feature specification.** Product Owner approval applies to this exact document scope and its stated deferrals. **No implementation, dependency installation, environment change, database operation or deployment is authorized.**

| Field | Record |
|---|---|
| Identifier / revision | SDD-001 / v0.3 — Revision Pass A preliminary direction; earlier drafts remain historical, never approved. |
| Owner / author | Product Owner; Codex-assisted draft for Product Owner verification. Applicable engineering/security/data-integrity reviewers are not assigned by this document. |
| Draft date | 2026-11-12; drafting date only, not an approval date. |
| Drafting authority | Original registry/Batch 1 drafting instructions, followed by SDD Batch 1 Revision Pass A authorizing this bounded draft revision. Preliminary review inputs are not formal spec/policy approval. Direction date not separately supplied; revision recorded 2026-11-12. |
| Planning reference | [Living SDD registry](SDD_REGISTRY.md), revision 0.1 provisionally accepted for planning/coordination only. This draft does not approve other candidate specs or their technical mechanisms. |
| Risk class for future implementation | High-risk where architecture, configuration, secrets or database boundaries are affected, under Engineering Governance §5. Not cosmetic/prototype standing authorization. |
| Observed pre-draft baseline | planning/gate-2; HEAD e2522ab38ad52b1797df145fbf1ac595fb54a3f4; empty staging index and extensive pre-existing changes. No root artisan, Composer manifest, application/routes/bootstrap/database/tests directories or individual SDD-001 file observed. Prototype dependencies do not establish a product application. |

**Revision Pass A status:** required/proposed behavior in this draft is for review, not adopted policy or a selected mechanism. The prebuilt-product, evaluated-reuse and future database-initialization directions below remain preliminary; implementation and database work remain unauthorized.

## Purpose and scope

Enable a developer to initialize a minimal Laravel-based iTakda foundation in an explicitly authorized local development/test context, observe basic initialization/routing, and verify that the necessary local configuration is usable without silently enabling business behavior or reaching CEAP or production.

The intended commercial product is a complete, prebuilt, configurable appointment management system maintained as one reusable product and separately installed per client, with independent application/database boundaries. Clients configure its governed capabilities rather than receiving a newly engineered system or a shared SaaS tenant. This foundation is only one enabling slice of that complete product; it does not reduce the intended product to an application scaffold.

This is an enabling engineering slice. Laravel follows D-022's preferred direction and the Batch 1 drafting instruction; no runtime version, package graph or installation is selected/authorized. A local foundation is not an installed client service, accepted physical schema, proven isolation, supported production profile or operational readiness. NFR-001/NFR-002/NFR-004 and S-1/S-2 constrain/encompass later work; FR-001 and operational FR-012 are not completed here.

**In scope — proposed behavior for review:**

- Minimal Laravel foundation, basic initialization/routing and testability using the preferred D-022 direction, subject to later explicit runtime/dependency decisions and implementation scope.
- Safe, reproducible local development/test baseline with separate context/configuration inputs; validate only the minimal necessary local contract and explain initialization failures safely.
- Preserve independent-per-client application/database and installation-scoped configuration/credential constraints. Inspect only fictional local target concepts for accidental-access prevention; do not implement operational installation, design business storage or connect to a database in this slice.
- One minimal non-business response sufficient to observe initialization; its route, format, response mapping and template are not selected. It is not a monitoring dashboard, administrator portal or complete health/readiness API.
- Safe public feedback and privacy-conscious technical diagnostics, with no customer records, secrets or business commands.
- Future verification planning for repeatable local setup, initialization/basic routing, test-context separation, configuration failure and absence of unintended effects. No database-backed test environment is created or assumed.

**Out of scope:**

- Services, schedules, duration/buffers, resources, capacity, duplicate, eligibility or cancellation/rescheduling policy administration; no invented defaults or policy values.
- Business records, physical tables/keys/types/cardinalities, migrations, seeders, database creation, connection/query execution or persistence.
- Enabling staff/customer accounts or authentication-starter-kit features, administrator provisioning, guest proof/linking, disputes, roles/permission matrices or operator client-record access. Evaluating maintained starter-kit capabilities for selective reuse is permitted for review; enabling these excluded functions is not.
- Booking, availability reservation, cancellation/rescheduling, QR, attendance, paper reconciliation, confirmations or email delivery.
- Branding configuration fields/storage/UI, white-label promises or client-facing settings. Existing brand continuity may inform a later minimal presentation; safe neutral output must not depend on a new branding capability.
- Provider/hosting selection, Docker adoption, production installation/configuration, operational credentials/provisioning, installer/upgrader, deployment, maintenance, rollback, support entitlements and backup/restore execution. These remain with SDD-026 operational ownership (backup/restore evidence also with SDD-025), not this foundation slice. SDD-002 owns internal application-user provisioning.
- Payment functionality, subscription/licensing features, shared SaaS tenancy, CEAP assets, prototype edits or gate/checkpoint closure.

**SDD-026 boundary:** SDD-001 supplies local development/test reproducibility and accidental-access safeguards; SDD-026 will own actual client installation, hosting, operational credential custody/provisioning, maintenance, update/rollback and support readiness. Referencing these constraints here does not implement them, allocate actual duties or require SDD-026 completion before drafting/accepting this narrow local slice.

### Evaluated reuse and configuration separation

Maintained, compatible Laravel starter-kit capabilities and packages may be evaluated for reuse under D-022/D-036/D-102 rather than categorically rebuilding existing capability. Review purpose, maintenance/lifecycle evidence, licensing, compatibility, transitive dependencies, security/accessibility, generated defaults and removal/upgrade costs before any selection. Selective capability reuse is an option, not adoption of a whole starter kit or permission to enable its authentication, accounts, database sessions, migrations or UI. No package/version is selected or installed; evidence of maintenance/compatibility must be obtained during later authorized evaluation.

Framework-native technical configuration concerns local runtime/bootstrap, environment/test separation and safe dependency configuration. Governed business/client configuration concerns approved services, schedules, resources, capacity, registration, visibility and policy values; it requires its feature's reviewed authority/validation/audit and cannot be treated as an arbitrary environment toggle. Branding remains exploratory. Do not duplicate framework configuration facilities without a demonstrated need or permit technical configuration to bypass business-policy governance.

### Intended future database initialization — outside this implementation boundary

The preliminary intended model is that a reviewed product release supplies version-controlled, repeatable database initialization/change definitions for each independent installation, with only separately reviewed necessary initial data. The same maintained release definition is applied to the explicitly authorized installation/database context, not manual client-specific table invention, copied CEAP schema/data or shared cross-client storage. Version-controlled definitions do not imply that secrets or client data are version-controlled, or that an initializer may be blindly rerun against populated data.

Physical schema, definition format/tooling, initial-data catalog, repeat execution/partial-failure checks, upgrade/data compatibility and recovery remain unresolved. Their construction requires separately approved affected data/feature scope; actual installation/provisioning/execution remains SDD-026 ownership and separate database authorization. SDD-001 creates no database, table, migration, seed or initialization artifact and makes no initialization/rollback test claim. This intent does not select a migration mechanism or approve a database implementation.

No scaffolding side effect is implicitly in scope. Framework defaults for user tables, database sessions, caches, queues, authentication, mail, telemetry or migration execution must be identified and explicitly included/excluded during later design and authorization. A framework convention does not supply product approval.

## References

### Authority and source status

- [Engineering Governance](../ENGINEERING_GOVERNANCE.md) §§2/5/7/8/10–12/14/15/17–19: bounded authorization, high-risk review, secrets/environment isolation, truthful verification and separate release approval.
- [Decision Register](../decisions/DECISION_REGISTER.md): D-019/D-020/D-025/D-034/D-035 isolation and operator boundaries; D-022 preferred stack; D-023/D-031/D-036 conditional/additional technology and version controls; D-083/D-084 both hosting models and unselected supported profile; D-085 provisional modular monolith; D-098 SDD; D-102 due diligence; D-103/D-104 bounded identity/support and privacy directions.
- Effective [requirements v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md) with [v0.8 supplement](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md); [earlier traceability](../requirements/REQUIREMENTS_TRACEABILITY.md) with [revision 1.2](../requirements/REQUIREMENTS-TRACEABILITY-v1.2.md). Unchanged approved revision 1.0 relationships carry forward; revision 1.1 commentary is administrative. Preparation labels do not revoke later exact-version approvals.
- [Requirements Governance](../requirements/REQUIREMENTS_GOVERNANCE.md) §§6/8 applies if a material requirement change is proposed; this draft makes no such amendment.
- [PRD](../product/PRD.md), [TRD](../technical/TRD.md) configuration and provisional technical direction, [Architecture](../architecture/ARCHITECTURE.md) §§2/3/7/8/10, [Backend Schema](../architecture/BACKEND_SCHEMA.md), [Security](../security/SECURITY.md), [Design System](../design/DESIGN_SYSTEM.md) §3 and UX amendment, [Application Flow](../design/APP_FLOW_UI_UX.md) accepted UX amendment: supporting references within their recorded limitations.
- [Code Style](../engineering/CODE_STYLE.md), [Testing](../engineering/TESTING.md), [Implementation Planning](../plans/IMPLEMENTATION_PLAN.md), [feature template](TEMPLATE.md), [AGENTS](../../AGENTS.md), [SDD transition](../SDD_TRANSITION.md) and [Gate Register](../GATE_REGISTER.md).
- [Compatibility/dependency](../archive/legacy-sdlc/architecture-working-designs/COMPATIBILITY_DEPENDENCY_DESIGN.md) and [deployment working design](../archive/legacy-sdlc/architecture-working-designs/CONFIGURATION_DEPLOYMENT_DESIGN.md) retain D-092/D-091's limited dispositions; neither selects exact versions, infrastructure or deployment procedures. These links now resolve to the verified archived sources; relocation alone does not supersede their dispositions. Only these reference destinations and this explanatory note are repaired in Pass B; archived files remain unchanged.

Approved requirements and decisions remain authoritative. Accepted supporting guidance does not adopt every candidate mechanism. D-088 does not approve a physical schema. P-009 remains separately unapproved. Gate 0/1 and historical reference approvals remain intact; D-098 permits SDD while Gate 2 remains historically unfinished; Checkpoint 11 was accepted on 2026-11-13 (D-112).

### Scope-to-source map

| Source | Existing obligation or direction | SDD-001 contribution / limitation |
|---|---|---|
| NFR-001/NFR-002; D-019/D-020/D-025/D-035; S-2/S-9 | Independent application installation and independent database per client; own environment/configuration/credentials and absolute CEAP separation. | Define and later check development configuration/target boundaries with fictional contexts. No real database isolation or production topology is proven by this slice. |
| NFR-004; FR-001; S-1 | Client configuration without forks of core scheduling logic. | Technical setup contract only. Service-policy configuration and accepted-booking impacts belong to later scopes; FR-001/S-1 remain incomplete. |
| FR-012; NFR-005; BR-004/BR-007; UJ-004; AC-007; D-034/D-075/D-103 | Technical support does not confer client-record authority; exceptional access needs explicit client authorization and controls. | Constraint only: no client data, operational credentials or application identity is provisioned. Operational installation/support remains SDD-026; internal identity remains SDD-002. |
| NFR-003/NFR-009/NFR-011; Governance §§11–12; D-104 | Approved authentication/authorization/validation on protected actions, privacy minimization and attributable evidence where applicable. | Expose no business mutation or new configuration-management endpoint; protect secrets and initialization diagnostics. No product audit store or proof/permission implementation selected. |
| NFR-007; AC-006; D-069; S-7 | Accessible responsive core workflows and supported-browser policy. | Apply readable/semantic error/status principles to any minimal rendered output. Full workflow/browser/WCAG evidence is not supplied or completed here. |
| NFR-010; AC-008; S-6 | Applicable success/rejection/authorization/failure-path verification and all required tests before release. | Plan isolated foundation tests and negative paths; no runner, coverage target, test database or executed evidence selected/created now. |
| Governance §§5/15/19; D-098/D-102; S-8 | Traceable bounded specification, risk-proportionate due diligence, review, verification and acceptance. | This draft is documentation evidence only; approval, implementation, runtime checks and acceptance remain separate. |
| D-022/D-031/D-085; TRD technical direction | Preferred stack and provisional per-installation modular monolith. | Design inputs, not final runtime/version, dependency graph, packaging, schema or installation authorization. |

Rows marked as contributions do not change approved acceptance criteria or claim complete requirement coverage. The initial market remains the recorded Philippines/general-purpose staffed-front-desk context under D-104/D-041, without claiming legal compliance or a permanently Philippine-only architecture.

## Expected behavior

All behavior in this section is **proposed for this specification**, derived from existing boundaries rather than already approved implementation details.

### Configuration responsibilities

| Category | Proposed boundary | Not selected / excluded |
|---|---|---|
| Local development/test context | Supply an explicitly authorized local context; development and test inputs remain distinguishable and must not select production or another client silently. | Exact setting names/types, files, environment loader, local target identifiers and necessary values remain open. Actual client installation/operational custody belongs to SDD-026; no tenant switcher. |
| Independent database targeting | Represent only a separately reviewed installation-local target concept. Distinct schemas in one shared client database do not replace independent databases. No connection is necessary or authorized by this proposed foundation slice. | Driver/version, secrets, schema, connectivity/readiness checks and database creation await separate design/authorization. Do not discover CEAP credentials or probe a database to determine whether it is CEAP. |
| Secrets and optional integrations | Keep secrets outside source/client output and commit only safe fictional templates if later explicitly authorized. Absent mail/queue/cache/third-party features must not trigger external calls or unsafe fallbacks. | No secret-management product, sender fields, provider, queue or required new configuration fields selected. |
| Business policy | Later authorized administrator configuration must meet FR-001 and final integrity rules before live booking. | No duration, capacity, duplicate, signup, proxy, cutoff, timezone or other business-policy value created here. |
| Branding | Preserve the Design System's exploratory developer-managed direction and neutral presentation fallback. | No branding field, editor, permission or persistence mechanism approved or implemented. |

The minimum necessary local development/test contract is an explicit open design item (FND-Q02), not permission to require every category as a new stored setting or to design production installation. Configuration consistency checks operate on authorized supplied information; they do not prove infrastructure access isolation.

### Initialization and failure states

1. A developer with separately granted implementation/execution authority initializes the approved foundation in its approved development context.
2. The foundation validates the approved minimal local development/test contract before advertising initialization; the approved basic route/response and isolated test entry can be exercised reproducibly. This is not booking/service/database/production readiness.
3. On valid configuration it supplies the minimal non-business response, without personal records, secrets or unintended commands.
4. Missing, inconsistent or invalid required configuration produces understandable, privacy-safe unready/failure feedback. Do not silently fall back to production, another client's context, invented business policy or a new persistence service.
5. Optional features outside this slice remain unavailable rather than appearing successfully configured. A missing unused mail or database service is not converted into an invented transaction outcome.
6. Initialization failure does not create users, alter configuration, create/query databases, seed records, dispatch email or attempt recovery/deployment operations.

Keep public error content minimal. Protected technical diagnostics may help the authorized developer locate the failing category without exposing credentials, tokens, internal paths/stack traces or unnecessary data publicly. Exact diagnostic destination/access and response mapping require later review. Do not equate ordinary diagnostics with the required business audit evidence of later features.

No booking command exists here. A generic error, lost response or invalid request token must never be presented as proof that an independently submitted booking succeeded or failed. Future booking features retain authoritative reconciliation and safe-retry boundaries; no reconciliation protocol is selected in this foundation spec.

## Acceptance criteria

**Proposed local criteria only.** SDD-001-C01–C13 are specification-local labels, not new requirement-register AC identifiers. They describe future authorized behavior/evidence; none has been executed or passed.

| Local criterion | Given / when / then and expected future evidence |
|---|---|
| SDD-001-C01 — bounded initialization | Given the approved isolated local development/test baseline and valid minimal local configuration, when Laravel initialization and the basic approved route/response are exercised, then the non-business outcome is observable/reproducible and does not establish client installation, booking, database or production readiness. Record actual context and result. |
| SDD-001-C02 — invalid required configuration | Given missing/inconsistent/invalid required inputs defined by the approved contract, when initialization is attempted, then it reports an understandable safe failure/unready condition without another-client/production fallback or configuration mutation. Verify representative negative cases. |
| SDD-001-C03 — unused integrations | Given no configured optional mail/queue/other integration or database connection authority, when initialization/status handling runs, then it makes no implicit connection or external dispatch and does not claim those capabilities ready. Verify with controlled interception/inspection in the later authorized environment. |
| SDD-001-C04 — secret-safe output | Given fictional secret-like markers and initialization failures, when public output and diagnostics are reviewed, then no secret marker is exposed publicly or copied into source/templates/artifacts. Any permitted private diagnostic access is explicitly reviewed; use fictional markers, not real credentials. |
| SDD-001-C05 — CEAP and target boundary | Given separately reviewed synthetic target contexts, when configuration/connection paths are inspected and intercepted, then no CEAP reference/dependency/probe or unapproved target access is attempted. This is structural/synthetic evidence; never test denial by connecting to CEAP. |
| SDD-001-C06 — development/test separation | Given two fictional local development/test configurations, when isolated checks select each context, then inputs and any authorized temporary test state do not bleed between contexts or fall back to production/client services. No database/test-data creation is implicit. Independent client application/database isolation remains an architectural constraint for later actual verification, not a result of this check. |
| SDD-001-C07 — no hidden scaffolding capability | Given the reviewed foundation/dependency footprint, when generated defaults, request surface and startup hooks are inspected, then no unapproved account/admin, business action, migration, automatic persistence or client-record privilege has been enabled. Record any necessary default adjustment in the bounded implementation plan before execution. |
| SDD-001-C08 — safe examples | Given any separately authorized configuration example or setup note, when reviewed, then it contains fictional non-sensitive values, identifies unresolved/required inputs and does not include live credentials, real client data or an executable production setup assumption. |
| SDD-001-C09 — scope and role separation | Given a request for business configuration, branding administration, customer/staff authentication or booking behavior, when compared with the implemented foundation scope, then no such newly enabled capability or operator entitlement exists in this slice. Document deferred owning scopes rather than simulating success. |
| SDD-001-C10 — readable minimal feedback | Given any rendered foundation/error response, when inspected in the approved relevant contexts, then its status/message is readable and semantic, uses text rather than color alone and preserves keyboard/focus usability if controls exist. No controls, screens or six custom HTTP pages are required merely to satisfy this criterion; no full WCAG/browser conformance claim. |
| SDD-001-C11 — reproducible local footprint | Given later approved runtime/dependency selections and bounded execution authority, when local development setup, initialization/basic routing and isolated tests are reviewed/repeated, then the footprint, evaluated starter-kit/package capabilities, compatibility/maintenance assumptions, defaults and reproducible evidence are recorded. Reuse is not automatic adoption or permission to enable excluded behavior. No tool/version, installation, database construction or operational installation procedure is authorized by this criterion. |
| SDD-001-C12 — truthful evidence and preservation | Given authorized implementation, when seeking feature acceptance, then required isolated success/negative/failure checks and applicable specialist findings/dispositions are recorded against these criteria, with reviewer, actual results and limits. Unrelated repository work, prior approvals and CEAP boundaries remain preserved. Partial NFR/S-target coverage is explicit. |
| SDD-001-C13 — future database initialization boundary | Given the preliminary prebuilt-product model, when this foundation scope and future installation handoff are reviewed, then database initialization is described as reviewed version-controlled/repeatable definitions per independent authorized database, with separate design/execution approvals and unresolved rerun/recovery safeguards. No schema, migration, seed, database connection or initialization artifact is constructed under SDD-001. |

Any approved-contract references above must be resolved before implementing the corresponding criterion. Tests may isolate/intercept dependencies; a mock is not evidence of real connection behavior, actual cross-installation data isolation, recoverability or production compatibility.

## Considerations and open questions

### Dependencies by stage

| Stage | Prerequisite / limitation |
|---|---|
| Drafting | Batch 1 drafting authority and current source/template review are present. SDD-001/002/003/023 may be drafted/reviewed together; no completed implementation of another spec is a drafting prerequisite. |
| Specification review | Product Owner reviews exact scope, exclusions, criteria, assumptions and open-question dispositions. This draft does not supply that approval. |
| Implementation | Explicit spec/bounded-scope approval and implementation authority; applicable high-risk/specialist review; relevant compatibility/footprint/configuration decisions; approved isolated execution context and affected file/action boundaries. Nothing is installed or run by approving a planning registry. |
| Integration | Later features need actual authorized identity, evidence, business policy, integrity and storage capabilities as applicable. SDD-001 can be verified/accepted only as its local baseline without complete SDD-002/003/023/026 implementations; do not claim those missing integrations or database/client installation readiness. |
| Acceptance/release | Record actual feature evidence and required review/disposition under Governance §§5/19. Release/deployment, qualified independent review, backup/restore-before-reliance and real-backup verification obligations remain separate; none is waived or claimed complete. |

### Open decision queue

FND-Q01–FND-Q04 are **specification-local unanswered questions**, not official Decision Register Q identifiers. All recommendations are proposals. Qualified review is required where the source-governed risk applies; the Product Owner need not select routine class names or database internals.

| Local question / timing | Recommendation and viable alternative | Decision owner / consequence |
|---|---|---|
| FND-Q01 — runtime/local footprint and reuse, before implementation approval | Evaluate the smallest D-022-aligned Laravel/PHP development/test footprint and maintained compatible starter-kit/package capabilities. Compare selective reuse with framework-native/manual composition using D-036/D-102 evidence; no package/version selected. | Engineering proposes maintenance/licensing/compatibility and side-effect assessment; Product Owner authorizes applicable selections/implementation with specialist input. Production platform selection remains SDD-026, not a drafting prerequisite. |
| FND-Q02 — minimal local configuration, before affected implementation | Review only the required/optional inputs and safe failure behavior needed for local development/test initialization and separation. Alternative: foundation-only with a later separately bounded configuration amendment. No business, branding or production-installation field is created. | Product Owner reviews observable scope; engineering/security review exact necessary concepts and handling. Storage/keys/loader are design proposals. Operational credential custody and provisioning remain SDD-026. |
| FND-Q03 — local database boundary, before any connection proposal | Keep Batch 1 foundation connection-free/non-persistent with fictional target concepts and interception checks. Alternative: separately propose a bounded synthetic connectivity extension when justified and authorized; do not execute or include it now. | Product Owner scope authority and applicable engineering/security/data-integrity review. No actual database isolation, client provisioning or operational readiness claim; SDD-026/affected data features own later needs. |
| FND-Q04 — routing/test evidence, before affected implementation/verification | Review the smallest local non-business route/initialization outcome and isolated test entry with neutral safe feedback and actual evidence/reviewer assignment. Alternative: a reviewed non-visual initialization check plus minimal routing verification. No URL/template/runner selected. | Product Owner reviews bounded outcome; engineering proposes local mapping/evidence with reviewers. SDD-023 owns reusable presentation; production/server fallback and operational monitoring remain SDD-026. |

### D-102 trade-offs and risks

| Proposed direction / benefit | Material alternative and trade-off | Credible failure; mitigation/recovery direction | Future verification / residual risk |
|---|---|---|---|
| Narrow foundation plus local development/test configuration contract makes later features build on explicit local boundaries. | Bare foundation is smaller but can spread ambiguous setup into each feature; full service administration gives earlier business value but requires identity, schema, policy and integrity decisions. | Scope creep turns defaults into permission or booking policy. Inventory generated behavior, keep exclusions explicit and escalate changes before implementation. | Review bounded file/surface/side-effect inventory and C07/C09. Later integration can still introduce unsafe behavior; every feature retains its own review. |
| D-022-aligned minimal footprint reduces unnecessary dependencies while preserving the preferred direction. | Additional frontend, infrastructure, providers or framework starter kits may improve convenience but expand setup, compatibility, maintenance and attack surface. | Unsupported/incompatible runtime or surprise post-install behavior. Perform D-102 assessment and inspect proposed scripts/defaults before authorizing installation/execution; plan controlled correction without touching unrelated work. | C11 and later authorized compatibility evidence. Supply-chain and future upgrade risks remain; no tool/version selected or trial performed here. |
| Installation-scoped configuration with no implicit DB/external access limits immediate exposure. | Adding connectivity/readiness or a centralized setup service expands diagnostic capability but adds data, credentials and isolation obligations. | Wrong target, leaked secret, implicit database session or external call. Approved contexts, safe failure, no shared SaaS context or CEAP discovery, and scoped later authority if a connection is proposed. | C02–C06 with fictional data/interception; real credential/host compromise and future isolation remain unproven. |
| Minimal safe feedback keeps the enabling outcome clear without requiring branding services. | Full custom error/health interface adds presentation/operational complexity and may expose internals. | An error displays a stack trace or a foundation response suggests a booking succeeded. Use neutral, meaningful text; keep outcome claims limited; review private diagnostics separately. | C01/C04/C10. Correct HTTP/server fallback mapping and rendered release evidence remain later dependencies. |

Security and privacy apply from the foundation: no live client data, default operator business access, secret copying or uncontrolled diagnostics. PH-01–PH-10 and D-103 mechanisms/actual responsibilities remain open to their source scopes. An unused booking/retention mechanism need not be selected to review this draft.

Repeatable per-installation database definitions and necessary initial data, physical schema, same-intent reconciliation, capacity/duplicate policies, concurrency/audit persistence, proof/MFA, email architecture, hosting/provider allocation, data retention and recovery targets remain for affected later design. D-070's future 50-valid-requests/one-unit integrity obligation is preserved, not tested by a startup slice. Backups/tested restoration and separately approved privacy-safe real-backup verification remain required before operational reliance under Governance §17/D-091.

## Plan and verification

**Future bounded plan only — not executable authorization:**

1. Obtain consolidated Batch 1 review with individual dispositions and material FND questions; no all-four implementation barrier. Assess significant runtime/footprint choices proportionately; identify generated/default side effects and applicable specialist input.
2. Prepare a small implementation plan with exact allowed paths, isolated environment, operations, dependencies, risk controls and verification. Include any test/environment creation or installation action explicitly; default to excluding database operations and external services.
3. Only after explicit authority, create the minimum approved local Laravel foundation/development-test behavior. Preserve all existing docs, prototype, brand content and unrelated work; do not reuse CEAP source/configuration or data.
4. Execute only the authorized applicable checks. Record criterion, fixtures/preconditions, actual environment/tool versions, expected/actual result, evidence location, reviewer and limitations without leaking secrets.
5. Review against the approved bounded scope and required specialist findings. Record feature acceptance separately if authorized; do not infer production readiness, gate closure or deployment permission.

| Verification category | Planned evidence / present limitation |
|---|---|
| Documentation | Source IDs, local links, template completeness, scope/criteria consistency, registry navigation and exact task diff; this is the only verification performed for drafting. |
| Static/configuration | Later approved footprint and configuration cases, fictional secret markers, request/startup side effects and controlled target interception. No actual secret/configuration files inspected or created by drafting. |
| Runtime/integration | Later authorized isolated startup/error checks and relevant response usability. No application foundation currently exists; no server, dependency installer, database, browser or application test is run now. |
| Source/evidence preservation | Before/after repository status and content hashes, branch/HEAD/index, explicitly bounded changes and truthful limitations. No staging, commits, branch changes or unrelated cleanup. |

Use the accepted provisional Testing and Code Style references without adopting candidate tools or P-009. Do not invent passing results, numeric targets, signatures, approval IDs or conformance. No Obsidian change or additional knowledge artifact is authorized or warranted by this bounded draft.


## Revision history and criterion/question continuity

| Revision / date | Provenance and disposition |
|---|---|
| Draft 0.1 / 2026-11-12 | Original title: SDD-001 — Application Foundation and Installation Configuration; independently authorized drafting, not specification approval. Retained at the same filename for link/history stability. |
| Draft 0.2 / 2026-11-12 | Product Owner's SDD Batch 1 instruction authorizes narrowing to Application Foundation and Development Environment Baseline. Local Laravel initialization/routing/testability remains; production installation, hosting, operational credentials/provisioning, maintenance, backup/restore execution and rollback remain with SDD-026 (recovery evidence also SDD-025). No requirement or implementation approval. |
| Draft 0.3 / 2026-11-12 | Revision Pass A preliminary inputs clarify prebuilt independent product/configuration, evaluated maintained reuse and intended future repeatable database initialization. C01–C12 retained as identifiers; C11 clarified, C13 added as a documentation/boundary criterion. FND-Q01 expanded for reuse; FND-Q02–Q04 remain open. No formal policy/spec approval or registry change. |

In draft 0.2, all twelve original criterion identifiers remained current: C01/C06/C11 were amended for local scope; C02–C05, C07–C10 and C12 were retained verbatim from draft 0.1. Draft 0.3 retains those identifiers and intent, further clarifies C11 for evaluated reuse, and adds C13 without authorizing database work. There is no deleted criterion, waived safeguard or new claim of isolation. FND-Q01–FND-Q04 are still unanswered, with narrower timing/ownership rather than silent disposal.

### Historical draft 0.1 wording — superseded, not current criteria

The following exact prior rows preserve the amended criterion and question history. Read the current tables above for draft 0.2; the historical rows do not reintroduce operational installation scope.

| Local criterion | Prior draft 0.1 text |
|---|---|
| SDD-001-C01 — bounded initialization | Given the approved isolated development setup and valid approved configuration contract, when the foundation initializes, then the minimal non-business response is observable and explicitly does not establish booking, database or production readiness. Record actual environment and result. |
| SDD-001-C06 — installation/context separation | Given two fictional independent installation/environment configurations, when the authorized isolated checks select each context, then configured identity/target/secret inputs do not bleed into the other or silently share client state. Document limitations; actual database/host isolation remains unverified until separately authorized tests. |
| SDD-001-C11 — reproducible bounded footprint | Given later approved runtime/dependency selections and authorized creation, when the resulting bounded file/dependency changes are reviewed, then the selected footprint, significant decisions, compatibility assumptions, configuration side effects and repeatable verification approach are recorded. No version, lockfile generation, package installation or command execution is approved by this criterion alone. |

| Local question / timing | Prior recommendation and alternative | Prior owner / consequence |
|---|---|---|
| FND-Q01 — runtime/footprint, before implementation approval | Evaluate the smallest D-022-aligned foundation/runtime and verification footprint, documenting compatibility/support lifecycle and generated defaults under D-031/D-036/D-102. Alternative: defer foundation implementation until that assessment is complete. No exact version or package selected. | Engineering proposes; Product Owner authorizes applicable selections/implementation with specialist input. Blocks affected installation/code execution, not drafting/review of this document. |
| FND-Q02 — technical configuration contract, before affected implementation | Approve a minimal required/optional concept list and safe validation/failure behavior, without business policy or branding fields. Alternative: reduce to foundation-only and separately specify the configuration contract. Exact keys/storage/loader remain engineering proposals, not hidden product decisions. | Product Owner confirms scope/observable behavior; engineering/security review the contract and handling. This draft is reviewable but not implementation-ready while the material contract remains unresolved. |
| FND-Q03 — boundary of database readiness, before any connection proposal | Keep this slice non-persistent and connection-free, with only reviewed target concepts and interception-based checks. Alternative: propose a separately authorized expansion for synthetic database connectivity/readiness after schema/environment/security review. Do not execute or silently include it now. | Product Owner scope authorization and engineering/security/data-integrity review if expanded. Recommended scope cannot prove actual database isolation or fulfill all S-2 checks. |
| FND-Q04 — minimal response and evidence ownership, before affected implementation/verification | Use one non-business initialization outcome with neutral safe failure presentation; review whether any UI/control is needed and assign actual evidence/reviewer responsibility. Alternative: an approved non-visual check if it demonstrates the same bounded outcome without creating a new monitoring feature. No route/template/provider selected. | Product Owner reviews outcome scope; engineering proposes response mapping/test approach with applicable reviewers. Numeric targets, full supported profile and production fallback ownership may remain deferred to affected later scopes. |

### Draft 0.2 wording retained for Revision Pass A continuity

These prior rows are historical, not current requirements or approvals.

| Local criterion | Prior draft 0.2 wording |
|---|---|
| SDD-001-C11 — reproducible local footprint | Given later approved runtime/dependency selections and bounded execution authority, when local development setup, initialization/basic routing and the isolated test entry are repeated, then the reviewed footprint, generated defaults, configuration assumptions and repeatable steps/results are recorded. No test tool, version, lockfile generation, package installation or command execution is approved by this criterion alone; no operational installation procedure is included. |

| Local question / timing | Prior recommendation | Prior owner |
|---|---|---|
| FND-Q01 — runtime/local footprint, before implementation approval | Evaluate the smallest D-022-aligned Laravel/PHP and development/test footprint, lifecycle/compatibility and scaffold side effects under D-031/D-036/D-102. Alternative: defer execution until assessed. No exact version, package or test tool selected. | Engineering proposes; Product Owner authorizes applicable selections/implementation with specialist input. Production platform selection is SDD-026, not a prerequisite to drafting this local baseline. |

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Registry | Revision 0.1 provisionally accepted as a living planning instrument only; recorded separately in [SDD_REGISTRY.md](SDD_REGISTRY.md). |
| SDD-001 drafting/refinement | **AUTHORIZED** by the original Product Owner drafting decision and subsequent SDD Batch 1 instruction. Approval date not separately supplied; refinement recorded 2026-11-12. This is not approval of the resulting draft or criterion wording. |
| Specification/scope and criteria approval | **APPROVED** by the Product Owner for exact SDD-001 v0.3, within its documented scope and open-question boundaries. Approval provenance: explicit approval in the current Gate 2 instruction. Approval date: not separately supplied. Recording date: 2026-11-12. |
| Implementation / dependencies / database / deployment | **NOT AUTHORIZED.** No package/version/provider, configuration mechanism, schema, credentials, infrastructure or environment change selected or approved. |
| Verification / specialist review | Documentation-only draft checks are reported in the drafting chat. Runtime, compatibility, database, security, privacy/legal, accessibility, restore and deployment evidence are not performed/claimed. Applicable future review and actual reviewer assignment remain pending. |
| Feature acceptance | **NOT RECORDED.** No implemented result exists to accept. Future reviewer, verification, acceptance date and disposition remain pending. |
| Preserved boundaries | This approves the specification only; implementation, dependencies, database work and deployment remain unauthorized. No Gate 2 closure, Checkpoint 11 acceptance, new gate, CEAP access, residual-risk acceptance or change to previous reference approvals. |

Open FND-Q01–FND-Q04 remain for their recorded owners and stages. Any implementation requires separate bounded authorization and resolution of applicable prerequisites; this approval does not authorize it.
