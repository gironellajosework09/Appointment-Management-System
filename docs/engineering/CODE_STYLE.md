# iTakda Code Style and Engineering Conventions

> **Status: PROVISIONALLY ACCEPTED — development-stage engineering reference guidance.** Acceptance covers this reference's reviewed guidance, not adoption of a mandatory coding standard or specific tooling. Existing controls in [Engineering Governance](../ENGINEERING_GOVERNANCE.md) and approved requirements apply independently. Governance §24 / P-009 remains separately unapproved and not in force; this reference acceptance does not approve it.

## Proposed conventions

- Favor small, cohesive, readable changes, meaningful names, clear responsibility boundaries and minimal duplication; follow the established conventions of the chosen, authorized stack and surrounding code.
- Keep presentation separate from server-side policy, authorization, validation and final integrity decisions. Do not make UI state, hidden fields, QR/reference possession or client-supplied identity the source of authority.
- Preserve errors and handle known rejection separately from an unknown mutation outcome; do not log credentials, secrets or unnecessary personal information.
- Keep configuration client- and environment-specific; avoid hardcoded policy values, client-specific scheduling forks and unapproved dependencies. Document meaningful decisions in the existing decision process.
- Write accessible, responsive UI using semantic controls, visible labels and focus, and text alongside status color. The [design system](../design/DESIGN_SYSTEM.md) is provisional.

## Approved boundaries

D-054 favors the smallest sufficient work without sacrificing correctness, security, integrity, maintainability, testing or governance. Server-side security and data-integrity requirements are mandatory regardless of the proposed style above. D-022 is the preferred technology direction; exact framework/runtime versions and toolchain remain open. No formatter, lint configuration, naming convention, coverage percentage or new dependency is selected here. Follow [testing](TESTING.md) and [SDD process](../plans/IMPLEMENTATION_PLAN.md) for verification and authorization.

## Proposed PHP and Laravel practices

These are review candidates for the preferred stack, conditional on later authorized foundation/version decisions. Follow actual framework and surrounding conventions; do not scaffold code from this reference.

| Concern | Proposed convention |
|---|---|
| Names and organization | Meaningful domain terms; evaluate framework-native namespaces, PascalCase classes, camelCase methods/variables and conventional database names once the foundation exists. Keep one responsibility understandable without a new architectural layer for every operation. |
| Formatting and types | Consistent formatting and useful parameter/return types supported by the selected runtime; document non-obvious contracts and failure outcomes. Avoid speculative interfaces, redundant comments and suppressions hiding genuine errors. |
| Request boundary | Keep controllers focused on request/response coordination; use framework-native validation, authorization and dependency injection where appropriate. Recheck authority, current state and business policy at the final mutation boundary; validated input is not automatically authorized. |
| Domain logic | Keep reusable policy and integrity logic coherent across guest, account, staff, proxy, reschedule and applicable reconciliation paths. Introduce a service/interface/repository only for a demonstrated responsibility, reuse or substitution need; no universal repository layer. |
| Failures and configuration | Distinguish domain rejection, unknown mutation outcome and infrastructure failure. Preserve useful exception context without secrets/personal data; do not swallow failures or manufacture success. Keep policy/environment values installation-scoped; no direct secret reads in presentation or hardcoded client rules. |

## Proposed Blade and frontend practices

- Reuse layouts, focused components and partials for actual repetition. Escape untrusted output by default; any raw HTML/DOM insertion requires justified sanitization and security review. Keep authorization and final integrity decisions server-side.
- Use the accepted provisional [Design System](../design/DESIGN_SYSTEM.md) for token/branding and component exploration and [Application Flow](../design/APP_FLOW_UI_UX.md) for outcomes. Do not turn provisional colors, fonts, breakpoints or animation values into adopted standards.
- Prefer semantic controls, labels, visible keyboard focus, readable persistent errors and responsive reflow. Icon-first utilities retain accessible names and appropriate focus/touch explanations; consequential actions retain clear text. Reduced motion and overlays must not obstruct tasks (NFR-007; AC-006; D-069).
- Keep client state for presentation distinct from authoritative business state. Review event listener lifecycle, stale/out-of-order responses, safe input preservation, double activation and degraded networks. Loading or selected availability never confirms success or reserves capacity.
- Prefer progressive enhancement where feasible; do not promise offline booking or silently replace the approved guest/account workflows. Add browser dependencies only after a concrete need, D-102 assessment and applicable authorization.

## Database, security and privacy review boundaries

Mandatory controls derive from Governance §§11–14 and effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), read with preserved v0.8 and unchanged v0.7, not adoption of this proposed guide.

| Area | Review direction |
|---|---|
| Schema and migrations | Physical schema/migrations need separate authorization and review. Assess referential/uniqueness constraints, data conversion, reversibility and upgrade recovery; do not assume rollback restores lost data. No SQL types, keys or schema selected here. |
| Transactions/concurrency | Preserve atomic related effects and required audit consistency. Evaluate locking/isolation/constraint and same-intent mechanisms against actual policy; no technique selected. D-070/AC-005 requires exactly one reservation from 50 valid simultaneous requests for one remaining unit; no test has run here. |
| Queries | Review bounded result sets, N+1 behavior, query plans/index needs and avoid unnecessary personal-data retrieval. Optimize from representative evidence rather than speculative caching or a universal index rule. |
| Authority and privacy | Apply server-side actor/action/appointment/service checks, independent original-booker proof, per-appointment linking confirmation and approved holds. Preserve QR lookup/attendance separation and no automatic personal-data association. D-103/D-104 directions remain bounded; actual mechanisms and PH-01–PH-10 review remain open. |
| Custody and audit | Separate client installations/databases/credentials and minimize logs. Technical custody is not client-record authority. No default operator access; exceptional access needs the approved client authorization, scope/duration, attribution, review and closure. See the accepted [Security reference](../security/SECURITY.md). |

## Proposed collaboration and tooling assessment

For later authorized changes, map work to its specification and approved FR/NFR/BR/AC/decision sources; review affected callers and failure paths. AI-generated code receives the same review and verification as other contributions. Report actual checks and limitations; code generation or a green tool output is not acceptance. Git/PR actions require their own task authorization; this guide grants none.

All tooling below is **candidate only**. D-102 depth scales with risk; routine naming/formatting does not need a separate decision entry for every edit. Tool configuration, versions, analysis strictness and adoption remain open. Official references are capability evidence, not compatibility approval.

| Candidate / benefit | Alternative and trade-off | Failure / mitigation | Future verification and residual risk / owner |
|---|---|---|---|
| [Laravel Pint](https://laravel.com/framework/docs/pint): consistent PHP formatting | Existing formatter/manual convention; automatic fixes can create noisy unrelated diffs | Formatting churn; review bounded changes and use inspect-only checks where supported | Demonstrate stable formatting on representative authorized code; semantics still need tests/review. Engineering proposal, Product Owner adoption as applicable. |
| [PHPStan](https://phpstan.org/user-guide/getting-started) with optional Laravel-aware analysis such as Larastan | Framework/basic type checks; deeper analysis adds setup, compatibility and false-positive costs | Blanket ignores conceal defects; use justified narrow dispositions | Evaluate selected runtime/framework compatibility and useful diagnostics; no level selected. Engineering/security review, Product Owner authorization. |
| [ESLint](https://eslint.org/docs/latest/use/getting-started) / [Prettier](https://prettier.io/docs/install/) | Minimal JS conventions or another existing tool; overlapping format rules may conflict | Conflicting fixes or template damage; define ownership and inspect diffs | Trial representative JS/templates and deterministic checks; behavior/accessibility remain unproved. Engineering proposal; no installation. |
| PHPUnit/Pest plus browser/accessibility tools | One maintained server runner with targeted browser/manual checks; duplicating suites adds cost | Mock-only success hides DB/browser faults; match tools to risk | Verify real selected DB concurrency and supported-browser evidence; scans alone do not prove security/WCAG. See Testing; tool selection deferred. |

## Consolidation review and provisional acceptance

| Field | Record |
|---|---|
| Disposition and artifact | **PROVISIONALLY ACCEPTED as development-stage reference guidance** — the reviewed Code Style consolidation draft dated 2026-11-12. Candidate conventions and tool assessments are not mandatory standards or selected implementations. |
| Authority and dates | Product Owner's explicit Gate 2 Documentation Consolidation decision in the current conversation. Approval date: not separately supplied. Recording date: 2026-11-12; this is not represented as the approval date. |
| Verification | Codex matched the document to the reviewed consolidation draft and checked the bounded status/acceptance changes, links, Markdown structure and Git/unrelated-file preservation as reported in the recording chat. No code, tool trial, application test or accessibility assessment is claimed. |
| Limitations | P-009 remains separately unapproved. No specific tool, version, provider, mechanism, deployment procedure or new product requirement is approved. Proof, permissions, schema, privacy and operational decisions retain their source-governed dependencies. No implementation, Checkpoint 11 acceptance, Gate 2 closure or new gate commencement is authorized. |

Recorded under Engineering Governance §§5 and 18; approved requirements and decisions remain authoritative. Other historical acceptances are unchanged.
