# Appointment Management System — Agent Instructions

| Field | Value |
|---|---|
| Status | ADOPTED — revision 1.1 approved by the Product Owner as the current agent entry point in this chat; recorded 2026-11-11. Approval date was not separately supplied. |
| Revision | 1.4 — aligned to Engineering Governance v2.0 under D-123 (2026-11-19); revisions 1.1–1.3 preserved |
| Owner | Product Owner |
| Adoption record | `docs/SDD_TRANSITION.md` records the bounded adoption and organization authorization. D-123 records the governance alignment. |
| Lineage | D-039 adopted the prior agent entry point. This revision preserves that approval and does not adopt earlier superseded content. The lineage record remains in `docs/evidence/GATE-0-EVIDENCE.md` §7. |
| Status correction record | Product Owner authorized limited corrections in the Gate 2 Documentation Consolidation decision; recorded 2026-11-12. Approval date not separately supplied. Permissions and governance are unchanged. |
| Baseline navigation record | Updated 2026-11-12 to identify approved Requirements v0.9 and Traceability revision 1.3 as effective, preserving prior versions and approval history. |
| Governance record | Updated 2026-11-19 under D-123: Engineering Governance v2.0 is authoritative. D-098 and D-101 remain historical process records; P-009 remains unapproved. |

## 1. Purpose

Guide OpenCode, Hermes, and other AI coding agents working on iTakda, the Appointment Management System.

This file directs agents to applicable project records. Product Owner authority, approvals, and authorization remain governed by `docs/ENGINEERING_GOVERNANCE.md` and recorded decisions. This file grants no independent implementation or release authority.

Routine product changes follow the Define → Build → Verify → Accept lifecycle in Engineering Governance v2.0 §4 and the risk-based authorization in §5. D-098's SDD distinction and D-101's prototype exception remain historical process records and are consistent with the v2.0 autonomy model.

## 2. Before You Start

Read in this order, using task relevance to keep the work efficient. This sequence does not waive mandatory reading established by approved governance.

1. **Instructions and current context**
   - Read this file and the current task; inspect the branch and working-tree status.
   - Consult applicable Engineering Governance controls and Decision Register entries.
   - During substantial work, consult `MEMORY.md` when present for context and handoff notes. Consult `TASKS.md` when present for task status and dependencies.
   - Use `docs/SDD_TRANSITION.md` when present to navigate the documentation transition.

2. **Requirements and task-specific references**
   - Consult the applicable Project Charter content, distinguishing approved directions from unapproved revisions.
   - Read the relevant feature specification in `docs/specs/`, its approval and scope, and its referenced requirements and decisions. Use `docs/specs/TEMPLATE.md` when drafting a specification.
   - The effective requirements are `docs/requirements/REQUIREMENTS-SPECIFICATION-v0.9.md`, read with preserved v0.8 and unchanged v0.7 in `docs/requirements/REQUIREMENTS_SPECIFICATION.md`; v0.9 replaces only NFR-003 and adds AC-027–AC-029. Read traceability revision 1.3 with preserved revision 1.2 and carried-forward revision 1.0; revision 1.1 contains administrative commentary.
   - Consult `docs/requirements/REQUIREMENTS_GOVERNANCE.md` when recording or changing requirements or traceability.
   - Read the engineering references relevant to the task:

| Concern | Reference |
|---|---|
| Product scope | `docs/product/PRD.md` |
| Technical requirements | `docs/technical/TRD.md` |
| Visual design | `docs/design/DESIGN_SYSTEM.md` |
| Journeys and interactions | `docs/design/APP_FLOW_UI_UX.md` |
| Architecture | `docs/architecture/ARCHITECTURE.md` |
| Data design | `docs/architecture/BACKEND_SCHEMA.md` |
| Security and privacy | `docs/security/SECURITY.md` |
| Coding conventions | `docs/engineering/CODE_STYLE.md` |
| Testing | `docs/engineering/TESTING.md` |
| Implementation planning | `docs/plans/IMPLEMENTATION_PLAN.md` |

These ten references have individually recorded acceptance scopes, including provisional development-stage guidance. Consult each reference's current status and limitations; reference acceptance does not adopt its candidate tools or mechanisms, override approved requirements/decisions, or approve P-009.

The numbered delivery order and current batch status are recorded in `docs/plans/DEVELOPMENT_ROADMAP.md` as a proposed Product Owner-directed planning baseline. It is not an accepted engineering reference, not an approval of any batch and not an implementation authorization; detailed scope is established in each batch plan under `docs/plans/`.

3. **History and supporting evidence**
   - Consult `docs/GATE_REGISTER.md`, checkpoint records, and evidence when needed to establish provenance, applicable approvals, limitations, or supersession.
   - These records preserve history and applicable approvals. They do not reinstate sequential gate progression under D-098.
   - Gate 0 evidence preserves historical evidence and lineage; it is not the current status source.

Where accessible and relevant, consult approved or adopted knowledge from the governed Obsidian Software Engineering Knowledge Base at the start of substantial authorized work. Report any draft created or that none was warranted.

## 3. General Rules

When delegation is permitted by the active session, use architect-review for critical architecture, security-design, and high-risk SDD reviews; use the project Luna Low exploration agent for simple file location, repository exploration, and summaries. Terra coordinates and performs editing only when explicitly authorized. Delegation is optional and must respect project governance, available tools, and session-level restrictions. Do not claim automatic routing or model selection without observed evidence.

- Work within the applicable task authorization and the risk classes in Engineering Governance v2.0 §5. Low- and moderate-risk work within approved scope proceeds under standing authority; high-risk work requires explicit Product Owner authorization of the bounded scope, environment, safeguards and boundaries.
- One Product Owner instruction may cover a bounded work package, its documentation, acceptance recording, batch closure and next-batch preparation. Do not request repeated approval for an unchanged decision (v2.0 §2.3, §6.3).
- Historical gate transitions are not a routine prerequisite. D-098 and D-101 remain historical process records; P-009 remains unapproved.
- Do not infer permission for file edits, branch changes, dependency installation, configuration changes, database operations, external services, deployment, staging, commits, pushes, or merges merely because they would help.
- Preserve unrelated changes and untracked work. Follow D-054's efficiency principle in Engineering Governance §2.
- Report actual changes, verification results, failures, and material limitations. Implementation, verification, acceptance, and approval are distinct claims.

When present, update `MEMORY.md` within the authorized scope at meaningful milestones or handoffs. Record concise, verified progress, important context, blockers, and next steps with source links. Keep task lists and task statuses in `TASKS.md`; avoid duplicating them in memory. Neither file establishes approval or replaces authoritative records.

## 4. Code Guidelines

- Keep changes scoped to the authorized outcome. Inspect affected callers and related behavior before changing shared code.
- Follow established conventions in the authorized stack and surrounding code. Keep responsibilities clear, names understandable, and changes maintainable and testable.
- Prefer existing project patterns and the smallest sufficient solution. Avoid unnecessary abstractions, speculative features, and unrelated refactoring.
- Do not invent business rules, permissions, policy values, database entities, constraints, or schema assumptions. Raise material unresolved choices before implementing affected behavior.
- Treat preferred technology directions and provisional designs according to their recorded status. They do not select exact versions or authorize dependencies.
- Consult `CODE_STYLE.md` and `TESTING.md` for relevant guidance without promoting their proposals to approved standards. Verify authorized changes against applicable specifications, acceptance criteria, requirements, and governance.

## 5. Security and Best Practices

Protect credentials, secrets, personal data, and client information. Do not expose them in prompts, reports, logs, source control, or test fixtures. Use authorized environments and appropriate fictional or synthetic test data.

Keep iTakda independent of CEAP. CEAP production systems, databases, deployments, and live data are off-limits. Historical non-production CEAP material may be consulted only when explicitly authorized and relevant; its implementation and business rules are not automatically iTakda requirements.

Follow applicable approved security, privacy, authorization, data-integrity, accessibility, and testing obligations. Consult Engineering Governance and the relevant requirements and decisions; `SECURITY.md` is a provisionally accepted design reference with unresolved mechanisms and qualified-review dependencies, not completed security verification.

Pause the affected action if it would exceed authorization, weaken a control, introduce an unapproved dependency or service, or conflict with approved requirements. Applicable specialist reviews and separate release/deployment approvals remain required independently of gate numbering.

## 6. Useful Commands

The following commands have been used in this repository. Use an available equivalent if a tool is absent.

```powershell
git status --short --branch
git diff --stat
rg --files
rg -n "search term" docs
```

Inspect the actual project setup before choosing build or test commands. Do not assume Laravel, Composer, npm scripts, a test runner, or browser tools are installed or configured. Add application commands here only after the foundation and relevant scripts exist and the commands have been verified.

Run commands within the authorized scope and report observed verification results accurately.

## 7. Need Help?

When records conflict, approval is missing, or authority is unclear, stop the affected action. Identify the exact records, explain the practical impact, and seek the required Product Owner decision. Do not silently choose a precedence rule or convert a proposal into an approved instruction. Continue independent authorized work where possible.

Explain significant engineering choices in clear, beginner-friendly language, including their reasons and material trade-offs. Distinguish facts, approved decisions, assumptions, and recommendations. Use practical examples when useful; keep routine updates concise.
