# SDLC-to-SDD transition ledger

| Field | Record |
|---|---|
| Purpose | Historical adoption and navigation ledger; does not approve requirements, architecture, implementation, or release |
| Recorded | 2026-11-11; recording date, not a separately supplied approval date |
| Authority for this organization | Product Owner's explicit approval in this Codex chat of the revised seven-section AGENTS.md and the previously reviewed two-move migration plan |
| Scope | Recoverable baseline; AGENTS.md adoption; this ledger; MEMORY.md; TASKS.md; two archive moves and affected references; verification |
| Status update | 2026-11-13 — Checkpoint 11 accepted under D-112 within its documented design/prototype scope; Gate 2 remains historically IN PROGRESS |

## Adoption and preserved authority

The Product Owner approved the revised seven-section [AGENTS.md](../AGENTS.md) as the current agent entry point, subject to path verification and preservation of D-039 lineage. Revision 1.1 records that adoption. D-039 remains the original adoption decision; this task assigns no new decision identifier and rewrites no prior approval. The earlier lineage remains in [Gate 0 evidence §7](evidence/GATE-0-EVIDENCE.md).

The approved process is **Specify → Plan → Implement → Verify → Accept** under D-098 and [Engineering Governance §5](ENGINEERING_GOVERNANCE.md#5-spec-driven-development-lifecycle). D-101 supplies the narrower Prototype Exploration Exception for qualifying isolated fictional prototype refinements. Its exclusions and D-100's boundaries and pending acceptance remain recorded. See [Decision Register §§9.16–9.20](decisions/DECISION_REGISTER.md).

Gate 0 and Gate 1 remain historically complete under their recorded approvals. Gate 2 remains historically IN PROGRESS, unfinished and unaccepted; Checkpoint 11 was accepted by the Product Owner on 2026-11-13 within its documented design/prototype scope (D-112). The [Gate Register](GATE_REGISTER.md) and old checkpoints preserve history and applicable approvals, without reinstating sequential gate progression. Applicable security/data-integrity review, verification, release/deployment approval and operational controls continue independently.

## Source and status map

| Records retained at existing paths | Role under SDD |
|---|---|
| [Engineering Governance](ENGINEERING_GOVERNANCE.md), [Decision Register](decisions/DECISION_REGISTER.md), [Requirements Governance](requirements/REQUIREMENTS_GOVERNANCE.md) | Applicable approved controls and individually recorded decisions; proposals retain their own status |
| [Project Charter](PROJECT_CHARTER.md) | Approved foundation and separately recorded directions; current revision 1.5 itself remains draft |
| [Requirements v0.7](requirements/REQUIREMENTS_SPECIFICATION.md) with [v0.8 supplement](requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) | Effective development-stage assumption baseline under D-081 and D-094/D-095; unchanged v0.7 content carries forward; not representative validation or implementation authorization |
| [Earlier traceability matrix](requirements/REQUIREMENTS_TRACEABILITY.md) with [revision 1.2](requirements/REQUIREMENTS-TRACEABILITY-v1.2.md) | Preserve approved revision 1.0 relationships and supplement them with revision 1.2; the present revision 1.1 copy adds administrative commentary only |
| [Gate 0 evidence](evidence/GATE-0-EVIDENCE.md), [Gate 1 evidence](evidence/GATE-1-EVIDENCE.md), `docs/research/`, validation package, validation plan, submitted responses and simulations | Preserve provenance, approvals and limitations. Simulations do not become real validation; incomplete genuine validation stays incomplete |
| Seven legacy architecture designs listed below | Retained working-design sources; provisional dispositions do not approve final architecture, APIs, physical schema, policy values, or production technologies |
| [Checkpoint 11 screens](archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-SCREENS-AND-INTERACTIONS.md) and [design/accessibility](archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md) | Historical design artifacts; CP11 accepted as design evidence within its documented scope under D-112 (2026-11-13) |
| [Master reconciliation proposal](archive/legacy-sdlc/historical-proposals/MASTER-REQUIREMENTS-RECONCILIATION-PROPOSAL.md) and [registered-customer architecture-impact proposal](archive/legacy-sdlc/historical-proposals/REGISTERED-CUSTOMER-SCOPE-AMENDMENT-PROPOSAL.md) | Retained proposals with unresolved recommendations. Requirement approval does not approve their architecture or every proposal |
| [Feature template](specs/TEMPLATE.md) and `docs/specs/` | Feature specifications and their separate approval, verification and acceptance records; no SDD-001 created or started by this task |
| [Dependency experiment](archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-ANIMATION-DEPENDENCY-EXPERIMENT.md), [motion proposal](archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-MOTION-DESIGN-PROPOSAL.md), [skip-link context](archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-SKIP-LINK-CORRECTION.md) | D-099 experiment acceptance with limitations; D-100 bounded approved increment with acceptance pending; D-101 retains skip-link spec as historical context without requiring its separate approval for qualifying correction |
| `prototype/` and `brand/` | Entire directories retained in place without content changes, including ignored local files; prototype simulations do not establish actual identity, permissions, persistence or product acceptance |

## Engineering reference adoption map

The ten existing references remain at their current paths and were not rewritten or approved by this organization. They provide an accessible working layer over the preserved sources. The following mapping identifies where findings can be consulted and reconciled during the later document review; it does not certify that every source detail has been incorporated.

| Working reference | Preserved source and disposition |
|---|---|
| [PRD](product/PRD.md) | Charter, effective requirement pair and decisions; draft summary |
| [TRD](technical/TRD.md) | Effective requirements, governance, compatibility/dependency design; draft |
| [Design system](design/DESIGN_SYSTEM.md) | Checkpoint 11 design/accessibility, prototype and brand; provisional |
| [Application flows](design/APP_FLOW_UI_UX.md) | Checkpoint 11 screens, workflow/interface designs and effective requirements; provisional |
| [Architecture](architecture/ARCHITECTURE.md) | Conceptual, component, interface, configuration/deployment designs and amendment proposals; draft, final architecture unapproved |
| [Backend schema](architecture/BACKEND_SCHEMA.md) | Logical data design, effective requirements and customer amendment impact; draft, no physical schema approval |
| [Security](security/SECURITY.md) | Governance, requirements, decisions and unresolved security/privacy matters; draft summary, not an assessment |
| [Code style](engineering/CODE_STYLE.md) | Governance and applicable approved constraints; proposed conventions, not approval of P-009 |
| [Testing](engineering/TESTING.md) | Governance, effective criteria and recorded quality targets; draft techniques, no new test result |
| [Implementation plan](plans/IMPLEMENTATION_PLAN.md) | D-098/D-101, feature template, requirements and dependencies; proposed roadmap, no authorized sequence or feature implementation |

The seven retained architecture sources are [conceptual](archive/legacy-sdlc/architecture-working-designs/CONCEPTUAL_ARCHITECTURE.md), [components](archive/legacy-sdlc/architecture-working-designs/COMPONENT_MODULE_DESIGN.md), [workflows](archive/legacy-sdlc/architecture-working-designs/DETAILED_SYSTEM_WORKFLOW_DESIGN.md), [logical data](archive/legacy-sdlc/architecture-working-designs/DATA_ARCHITECTURE_MODEL_DESIGN.md), [interfaces](archive/legacy-sdlc/architecture-working-designs/INTERFACE_API_DESIGN.md), [configuration/deployment](archive/legacy-sdlc/architecture-working-designs/CONFIGURATION_DEPLOYMENT_DESIGN.md), and [compatibility/dependencies](archive/legacy-sdlc/architecture-working-designs/COMPATIBILITY_DEPENDENCY_DESIGN.md). D-085–D-092 retain their individually bounded dispositions. Existing fingerprint and later administrative-note history is preserved; this task does not claim the current bytes match every historical accepted fingerprint.

## Exact archive map

Only these two files are moved. Their contents are preserved byte for byte.

| Former repository path | Current location | Disposition |
|---|---|---|
| `docs/requirements/GATE-1-SCOPE-TRIAGE-DRAFT.md` | [Archived scope triage](archive/legacy-sdlc/gate-records/GATE-1-SCOPE-TRIAGE-DRAFT.md) | Historical non-authoritative working draft; underlying decisions retain their own authority |
| `docs/design/GATE-2-INTEGRATION-AND-CHECKPOINT-12-PREPARATION.md` | [Archived integration preparation](archive/legacy-sdlc/checkpoint-records/GATE-2-INTEGRATION-AND-CHECKPOINT-12-PREPARATION.md) | Historical preparatory draft; no Checkpoint 12 execution or acceptance implied |

The registered-customer architecture-impact proposal's reference to integration preparation is updated to its archive location. Former paths above are intentionally retained as migration history, not active links. No other source, evidence, requirement, checkpoint, specification, prototype or brand file is archived.

## Recovery and continuity

Before edits, 2,642 tracked/untracked files and all files under prototype/brand (including ignored dependencies) were copied to the local baseline below and each copy was checked against its source with SHA-256. Git HEAD, branch, index listing, original status, a tracked binary diff, and a file/hash manifest are stored alongside the copies. The copies are the recovery source for original working-tree bytes; no stash, reset, branch change or commit was used.

Baseline: `C:/Users/J/.codex/visualizations/2026/11/11/01a1ca09-472c-7ce3-a114-f1bba9fcb4ed/repository-baselines/sdd-transition-2026-11-11/`

Use `files/` with `manifest.json` for targeted recovery after inspecting current changes and obtaining authorization for any overwrite. This is a local working-tree snapshot, not an independent backup of Git object history or an instruction to restore automatically.

[MEMORY.md](../MEMORY.md) provides verified continuity context. [TASKS.md](../TASKS.md) tracks actions and their status. Neither file grants approval. Review the organization results before the separate review of the 13 project documents; SDD-001 remains unstarted and requires its own applicable authorization.

## Remaining issues and verification scope

- Preparation-era proposed/pending labels coexist with explicit later approvals in the v0.8 package and Decision Register. Read their recorded supersession and approval dispositions; this organization does not rewrite those records.
- The Decision Register's displayed revision label predates its D-101 entry. Any metadata reconciliation is separate work; no new approval is inferred.
- Identity/proof, permission, cutoff/capacity/duplicate policy, retention, hosting allocation, physical schema and exact technology choices remain unresolved to the extent recorded. Resolve material dependencies under Governance §5 before affected work.
- This organization uses path/link checks, Git/status/diff review and baseline hash comparisons. It does not assess application behavior, accessibility conformance, security conformance or prototype acceptance.
- No new reusable Obsidian lesson warranted a draft for this bounded documentation organization.

### Observed organization verification (2026-11-11)

- Local Markdown link targets in active documentation were verified to resolve at the recorded revision; anchor validity and archive-internal links are not re-verified here. Both former archive paths remain only as intentionally historical entries in the archive map.
- Baseline comparison: 2,638 original files unchanged, 2 archive files byte-identical at their new paths, and only AGENTS.md and the one architecture-impact reference edited. All 2,595 prototype/brand files, including ignored files, match their baseline hashes.
- Exactly three new document files: this ledger, MEMORY.md and TASKS.md. The ten engineering reference drafts and all other preserved source files match their pre-edit bytes.
- Git index, HEAD and branch match the baseline. `git diff --check` passes. Git's existing LF-to-CRLF warnings and fsmonitor IPC problem were observed; verification commands used `-c core.fsmonitor=false` as needed without changing configuration.
- Git still shows preexisting dirty work. The tracked scope-triage move appears as a deletion plus an untracked archive destination until staged; no staging is authorized. The integration preparation source was already untracked.
- Detailed local comparison evidence is in `verification.json` beside the recovery manifest. Application tests were not run for this documentation-only change.
