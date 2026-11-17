# SDD-023 — Reusable Accessible States and Error-Recovery Presentation

> **CURRENT STATUS: APPROVED — SDD-023 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **Status: DRAFT — SDD-023 v0.3, PENDING PRODUCT OWNER REVIEW.** This revision updates the previously approved v0.2 specification for exact-current-conversation policy directions. The v0.2 approval remains historical and is not an approval of v0.3. Reusable patterns are not final screens, routes, tokens or selected libraries; no conformance is verified. **No UI/prototype implementation, dependency installation or deployment is authorized.**

| Field | Record |
|---|---|
| Identifier / revision / date | SDD-023 / draft 0.3 / 2026-11-13; drafting/recording date only, not an approval date. |
| Owner / author | Product Owner; Codex-assisted draft. Actual UX/accessibility/security/evidence reviewers remain to be assigned. |
| Provenance | v0.2 was approved for its exact scope. This proposed v0.3 incorporates the Product Owner's explicit current-conversation approvals for accessible duplicate-warning acknowledgement, truthful uncertain outcomes and human-plus-automated accessibility verification, while recording branding ownership as unresolved. Approval date for these directions was not separately supplied; recorded 2026-11-13. This exact SDD revision remains pending review. |
| Future risk class | Assess the bounded future change under Governance §5. Reusable presentation may affect authentication, privacy, submitted outcomes and consequential actions, requiring explicit authority and applicable specialist review; this drafting authorization is not cosmetic/prototype standing authority. |

Reusable accessible base presentation patterns remain the approved v0.2 scope. Product Owner policy direction D-106 requires accessible explicit acknowledgement before continuation after an allowed duplicate warning; an ordinary user cannot bypass a blocking duplicate policy. D-109 requires automated and human accessibility verification including keyboard, screen-reader, zoom and touch against the approved accessibility target, before affected acceptance. These directions select no library, implementation mechanism or tool and do not establish completed verification. Journey-specific meaning and actual rendered evidence remain separate.

## Purpose and scope

Provide consistent reusable presentation for understandable states, safe correction/recovery and accessible operation across approved iTakda journeys. Presentation explains what is known; it does not establish authorization, capacity, identity, a committed result or permission to retry.

**In scope:** a reusable accessible base for initial/pending/loading/empty/no-result/unavailable/partial/stale/error/disabled/success/rejection/unknown/held feedback; form validation; keyboard/focus/touch/assistive-technology interaction; responsive/reduced-motion use; icon utility explanations; supplementary toasts; proportionate dialog/consequential-action presentation; safe neutral fallback.

**Out of scope:** final routes/screens/layouts/breakpoints/tokens/fonts, a mandatory component package, implementation of a branding configuration/editor, proof/authentication/permission policy, booking reconciliation/retry mechanism, email architecture, operational/server deployment, new workflow permissions or prototype redesign. The Product Owner approved a bounded configurable client-branding direction under D-109; its owning specification and exact contract are not yet allocated or approved. Localization remains a separate question. No requirement for six application-rendered HTTP error pages.

The [Design System](../design/DESIGN_SYSTEM.md) owns reusable accepted provisional direction; [Application Flow](../design/APP_FLOW_UI_UX.md) owns logical recovery/outcome meanings. This spec proposes how to verify their reusable presentation boundaries without replacing those sources or their historical acceptance.

## References

- [Engineering Governance](../ENGINEERING_GOVERNANCE.md) §§5/7/8/11–19 and [Decision Register](../decisions/DECISION_REGISTER.md): approved controls and individually recorded decisions, including D-098 SDD and D-102 proportionate due diligence.
- Effective [requirements v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md), v0.8 and [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md); effective [traceability revision 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md), read with preserved revisions 1.2 and 1.0. v0.9 amends NFR-003 and adds AC-027–AC-029; revision 1.3 traces those changes. Earlier versions remain preserved.
- [Registry](SDD_REGISTRY.md), [template](TEMPLATE.md), [AGENTS](../../AGENTS.md), [Implementation Planning](../plans/IMPLEMENTATION_PLAN.md), [Code Style](../engineering/CODE_STYLE.md) and [Testing](../engineering/TESTING.md) guide this draft within their recorded scope. No tool/version/provider/mechanism is selected; P-009 remains separately unapproved.

- Accepted [Design System](../design/DESIGN_SYSTEM.md) §§3/7/8, including icon-first refinement and UX Completeness Amendment; accepted [Application Flow](../design/APP_FLOW_UI_UX.md) flow-specific accessibility and UX recovery amendment.
- [PRD](../product/PRD.md), [TRD](../technical/TRD.md), [Architecture](../architecture/ARCHITECTURE.md) and [Security](../security/SECURITY.md) support state, privacy and failure boundaries, not final visual/technical choices.
- Batch contracts: [local foundation](SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md), [internal identity](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) and [required evidence](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md). Runtime state, authority and evidence come from their owning features.

| Source / exact anchor | Existing obligation/guidance | Proposed allocation / limit |
|---|---|---|
| NFR-007; AC-006; D-069; S-7 | WCAG 2.2 AA core-workflow target, applicable desktop/mobile and current/previous stable Chrome/Edge/Firefox/Safari policy. | Reusable keyboard/focus/labels/reflow/contrast/touch/reduced-motion patterns and actual future evidence. No conformance/browser claim now. |
| NFR-010; AC-008; S-6; Testing | Applicable automated success/rejection/authorization/failure checks before release, with actual environment/reviewer/results. | Consumer integration plus rendered/manual/assistive-technology checks; no tool/coverage percentage selected. |
| FR-010; AC-002/AC-024; D-065/D-095 | Full readable screen/print/screenshot confirmation and limited-purpose email, independent of delivery success. | Persistent authorized confirmation, not toast-only or full details in email; each journey supplies its permitted content and committed outcome. |
| FR-002/FR-007; BR-013; AC-018/AC-026; D-090 | Established success, known rejection and unknown submitted outcome are distinct; reconciliation before unsafe retry. | Generic error/loading/session feedback cannot establish outcome or authorize blind replay. Mechanism belongs to SDD-006/consumer journey, not this spec. |
| FR-018; AC-013 | Alternatives reflect actual available capacity within the installation; selection is not reservation. | Distinguish no availability, stale information and failed discovery. Offer alternatives only when actual and permitted. |
| NFR-003/NFR-009; FR-022; AC-023; D-050 | Server-side authority/validation and minimum data; explicit profile edits separate from booking. | Client validation is supplementary; labels/errors and safe-input correction do not grant authority or silently change another record. |
| FR-007/FR-021; AC-021/AC-025; D-103 | Conditional scoped holds preserve appointment/permitted attendance and assigned review boundaries. | Held message is not completed/rejected action; no automatic hold on every unsuccessful verification. |
| Accepted Design System §§3/8 and UX amendments; accepted Flow recovery amendment | Icon-first utilities with names/hover-focus/touch safeguards, balanced motion, supplementary toast preference, modal focus/consequence safety and conditional error presentation. | Preserve provisional values and top-right desktop toast preference, not mandatory libraries/durations/layouts or branding fields. |

Approved source requirements remain authoritative; accepted UX guidance is provisional and does not approve implementation. P-009 remains unapproved; D-096/D-101 protect bounded prototype exploration without accepting Checkpoint 11. Gate 2 history and all prior acceptance records remain unchanged.

## Expected behavior

### State and recovery presentation contract

| State or context | Reusable presentation / boundary |
|---|---|
| Initial loading / pending / long-running | Explain activity and retained task context without claiming business success. A skeleton may help but is not universal; avoid blocking tasks on decorative motion or creating excessive announcements. Any repeat control follows the owning operation's safe-retry rules. |
| Genuine empty / no results / no available slots | Explain the actual state and only approved available next actions. Distinguish an empty authorized dataset from denied access, failed load or unknown result. Do not invent availability, reserve a displayed slot or promise future slots. |
| Partial / stale / failed load | Make limitations understandable, retain safe readable context, and avoid presenting incomplete or old information as current authoritative state. Recovery actions depend on operation semantics, not a universal retry button. |
| Disabled / protected / held | Explain why an action is unavailable where safe; use non-color state cues and semantic disabled/toggle behavior. Visible controls never grant permission. A held affected action is neither completed nor rejected and does not pause unrelated permitted attendance. |
| Validation rejection | Persistent labels, clear required-field instructions, associated field/form errors and appropriate error-summary/focus behavior. Preserve only safe approved input; credentials/sensitive values need their separate security treatment. Never rely on tooltip/placeholder alone for essential instructions. |
| Known business rejection | Persistent understandable reason and only approved correction/next steps; do not animate away critical details or mark the operation successful. Exact policy reasons/disclosure remain journey-owned. |
| Established success | Show success only from the owning authoritative committed result. Full essential confirmation remains available/readable for its authorized viewer independent of a supplementary toast or email. |
| Unknown submitted outcome / lost response | Persistent uncertainty and safe next-step explanation supplied by the owning journey. Do not convert network/HTTP/session error into known failure or success, invite blind duplicate submission, or manufacture a reconciliation mechanism. The owning journey uses its approved reconciliation contract when one exists; SDD-006's proposed shared booking contract remains pending review. |
| Duplicate warning or blocking policy | Present a warning distinctly from a blocking rejection, without relying on color alone or disclosing unnecessary appointment details. Where approved effective policy permits continuation after a warning, require an explicit accessible acknowledgement; acknowledgement does not itself authorize a booking or bypass eligibility, capacity, resource, duplicate or permission checks. A blocking result offers no ordinary-user bypass. The journey supplies the actual matching result and allowed next action. |
| Touch / keyboard / assistive technology | Semantic interactive elements, readable labels/programmatic names/state, visible focus and keyboard operation with adequately sized/spaced targets. Explain utilities without relying on hover; announce meaningful changes with appropriate urgency without unexpected focus stealing. |

### HTTP and interruption review scenarios

| Design-review situation | Presentation and recovery safeguard |
|---|---|
| 404 / 403 | Understandable not-found/forbidden feedback, privacy-safe navigation appropriate to actual authority/context. Do not disclose protected resource existence or assume sign-in grants access. |
| 419 where applicable | Distinguish invalid/expired request token from authenticated-session expiration. Reauthentication/token refresh does not establish the outcome of a prior submitted operation; follow authoritative reconciliation. |
| 429 | Explain constrained access where appropriate; no invented numeric wait, automatic replay or override of booking/abuse rules. Owning design determines any permitted retry. |
| 500 / 503 | Safe error/unavailable feedback without stack traces, credentials, internal paths or records. If a mutation might have committed, retain uncertainty/reconciliation semantics. |
| Network interruption / services unavailable | Preserve safe task context and appropriate recoverability; no offline-booking promise, invented failure result or automatic command replay. Safe navigation depends on available application/authentication services. |
| QR/camera or email failure | Show only journey-approved alternatives: authorized manual-reference handling does not confirm attendance/identity; notification failure does not undo a committed action or trigger a duplicate command/email. |

These are review situations, **not six mandatory pages**. Presentation depends on error context, operational application/authentication services, available installation branding and deployment/server fallback capability. Prefer available approved installation branding, with safe neutral output when unavailable. No new branding fields/configuration interface is authorized. Production response mapping and application/server fallback ownership belong to SDD-026 and affected authorized design; SDD-001 only needs its bounded local failure response.

### Interaction and visual continuity

- Preserve the accepted indigo/orange, soft-neumorphic exploration and candidate typography/icons within their recorded scope; no new brand tokens/fonts or required hologram component. Lucide-style outline remains a candidate family, not an installed dependency.
- Familiar compact utilities may be icon-first with accessible names/current action/state; password visibility uses eye/eye-off with Show password/Hide password identification. Primary, unfamiliar, destructive or consequential actions generally retain visible text. Do not remove field labels or essential task instructions.
- Supplementary short tooltips appear on hover and appropriate keyboard focus without obscuring essentials; touch users need understandable non-hover behavior. Avoid native title as the sole strategy. Tooltips are normally non-interactive and need reviewed accessible dismissal/persistence behavior.
- Balanced motion allows nonessential expressive public landing/login exploration and restrained operational feedback. Respect reduced motion, avoid layout shifts/excessive glow/distraction and do not delay a critical task or require animation completion. Candidate durations/easing are not mandatory tokens.
- Toasts may supplement success/error/warning/information; top-right desktop placement is a preference subject to obstruction/responsive review. Limit stacking, avoid focus stealing/color-only meaning and arbitrary short reading/action timeouts. Persistent essential feedback remains.
- Consequential actions show clear labels/consequences and proportionate confirmation. A true modal needs title, initial focus, containment/restoration, visible focus, safe cancellation/Escape where appropriate, no unintended background interaction and responsive presentation. Avoid nested/unnecessary modals and accidental destructive confirmation; preserve safe entered data.
- Dialogs, disabled buttons, spinners and client validation do not replace server-side authorization/validation or duplicate prevention. Recovery/reversal is advertised only when the approved workflow actually supports it. No new deletion, bulk action, cancellation or dispute policy is created.
- On narrow screens, zoom/reflow and touch, forms/records/overlays/notifications remain readable and must not cover essential controls or system UI. Responsive table alternatives are context-dependent, not a new table framework or final navigation scheme. Authorized confirmations remain printable and screenshot-friendly.

### Reusable pattern ownership and evaluated library reuse

Use reviewed reusable accessible presentation patterns for repeated forms, validation, feedback, loading/empty/error states, dialogs and utility interactions instead of independently rebuilding equivalent behavior in every feature. Owning journeys still supply authorized content/state/actions and may need justified context-specific composition/extensions. Reuse must not flatten known rejection, unknown outcome, held action or differing recovery permission into a universal retry/message component.

Maintained, compatible UI component libraries may be evaluated as sources of these patterns rather than automatically rebuilt. Assess lifecycle/maintenance evidence, licensing, selected Laravel/Blade/frontend compatibility, dependency footprint, customization/branding constraints, escaping/security and actual accessibility behavior under D-036/D-102. Compare selective library reuse, framework-native patterns and a small maintained project component set; choose none here. A library's accessibility claim or automated scan is not proof of the rendered integration.

Verify actual keyboard order/focus, semantic labels/state, screen-reader/assistive-technology behavior where applicable, touch/zoom/reflow, contrast, reduced motion and error/recovery comprehension in representative consumer contexts. Combine appropriate automated checks with manual/qualified review and actual rendered evidence; tool success, screenshots or a single browser alone do not establish WCAG 2.2 AA or supported-browser conformance.

Preserve iTakda/available installation-brand continuity within accepted guidance, with neutral accessible fallback when brand assets/settings or services are unavailable. Component theming cannot expand data access, hide essential feedback or reduce contrast/focus visibility. Full client-branding fields/editor/storage/permissions remain outside this SDD and exploratory under Design System §3.

## Acceptance criteria

SDD-023-C01–C15 are local proposed criteria; none is an approved requirement ID or executed result.

| Local criterion | Given / when / then — future evidence |
|---|---|
| SDD-023-C01 | Given loading/pending/long-running or partial/stale/failed data, when displayed, then the state is understandable and not a success/empty/current-authority claim; optional skeletons/animation are not task prerequisites. |
| SDD-023-C02 | Given actual authorized emptiness/no results/no available slots versus denied/failed/unknown data, when presented, then those meanings remain distinct and alternatives appear only if actual and approved; selected availability is never described as reserved capacity. |
| SDD-023-C03 | Given invalid form data, when rejected, then persistent labels/instructions and associated field/form errors support correction and appropriate focus; only safe approved input is retained and server validation remains authoritative. |
| SDD-023-C04 | Given established success, known rejection, unknown submission or a conditional held action, when feedback is rendered, then each accurately reflects its supplied authoritative knowledge and does not invent successful completion, known failure or hold release. |
| SDD-023-C05 | Given HTTP/network/token/session interruption after a possible mutation, when recovery is offered, then no generic error or 419 proves failure or authorizes blind retry; the owning journey's approved reconciliation rules prevail. |
| SDD-023-C06 | Given applicable 403/404/419/429/500/503 situations and unavailable branding/services, when reviewed, then safe understandable authorized navigation/fallback reveals no secrets/internal records, without assuming six custom pages or mandatory branding configuration. |
| SDD-023-C07 | Given icon-only utility controls/tooltips, when using pointer, keyboard, touch or assistive technology, then meaningful names/action/state, focus and supplementary explanations work without hover-only or title-only dependence. Consequential/ambiguous actions and form labels retain visible meaning. |
| SDD-023-C08 | Given keyboard and assistive-technology interaction, when navigating controls and dynamic feedback, then semantic controls, visible focus, meaningful labels/state and appropriate announcements preserve task operation without unexpected focus stealing or color-only outcomes. |
| SDD-023-C09 | Given reduced-motion preferences or slow/disabled nonessential animation, when completing critical tasks, then motion does not obstruct, delay or become required; expressive effects remain bounded to accepted contexts. |
| SDD-023-C10 | Given supplementary toasts on desktop/narrow screens, when displayed/dismissed, then essential confirmation/errors remain persistent elsewhere, stacking/placement does not obstruct tasks and reading/action time is not arbitrarily curtailed. Top-right desktop remains a preference. |
| SDD-023-C11 | Given a justified consequential-action modal, when operated by keyboard/touch/assistive technology, then title, consequence, safe actions, applicable focus containment/restoration/Escape and background-interaction limits work; modal visibility supplies no authorization. |
| SDD-023-C12 | Given narrow screen, zoom/reflow and applicable print/screenshot contexts, when forms/records/confirmations/overlays are reviewed, then essential content and controls remain readable/usable without invented breakpoints, navigation or browser conformance claims. |
| SDD-023-C13 | Given QR/camera or email failure, when feedback suggests recovery, then only authorized available alternatives appear; QR lookup is not identity/attendance, and notification failure does not undo/repeat a commit or suppress legitimate committed-state mail solely for browser response loss. |
| SDD-023-C14 | Given an actual consuming journey and authorized rendered environment, when acceptance is sought, then source-linked state/unknown-outcome, keyboard/focus/contrast, touch/zoom/reflow, reduced-motion and applicable screen-reader/assistive-technology behavior are verified through appropriate automated checks plus manual/qualified review and recorded results/limits. A library claim, scan, fixture, screenshot or single browser alone does not establish workflow WCAG/browser conformance. |
| SDD-023-C15 | Given repeated presentation needs and a reviewed reuse/library assessment, when consumer patterns are designed/integrated, then shared accessible base patterns are reused instead of redundant equivalent implementations, with justified context-specific composition, branding/neutral-fallback checks and journey-owned outcome/recovery authority. No library, package, factor, visual token or full branding mechanism is adopted by this criterion. |
| SDD-023-C16 | Given an effective duplicate policy returns a permitted warning or blocking result, when the presentation is rendered and operated, then the warning is distinguishable from rejection and any permitted continuation requires an explicit accessible acknowledgement; an ordinary user has no bypass from a blocking result. The acknowledgement cannot bypass other booking or authorization checks, and the interface does not claim a booking was created until the owning authoritative outcome confirms it. |

## Considerations and open questions

| Stage | Dependency meaning |
|---|---|
| Drafting | Batch 1 authority and accepted UX/source review suffice; no completed foundation/identity/evidence implementation or Checkpoint 11 acceptance is required. |
| Implementation | Approved bounded scope, explicit authority, local foundation and relevant interaction/content/security decisions with applicable review. Reusable fixtures may be developed independently once authorized; no arbitrary framework/tool or visual token selected. |
| Integration | Owning journeys supply actual authorized data, operation state, error/retry/hold/confirmation meaning. SDD-002/003 supply real authority/evidence where applicable; reusable appearance alone proves neither. SDD-026 owns operational fallback implementation. |
| Acceptance | Verify the individual authorized pattern scope and required rendered contexts/integrations. Partial pattern acceptance must name limitations; full consumer/workflow conformance requires actual journey evidence. No all-four implementation/acceptance barrier. |

| Local open question / timing | Recommendation, alternative and owner |
|---|---|
| UX-Q01 — shared pattern boundary and evaluated library reuse, before implementation | Review reusable accessible base patterns for actual consumer needs and maintained compatible library candidates versus framework-native/small project components. Avoid redundant equivalent per-feature implementation; document necessary context-specific composition. Engineering/UX propose maintenance/licensing/compatibility/security/accessibility evidence under D-036/D-102; Product Owner reviews scope/adoption. No package selected or installed. |
| UX-Q02 — safe content/actions and fallback mapping, before affected integration | Review exact privacy-safe recovery/confirmation/hold wording and available actions with journey/security owners; production/server mapping remains SDD-026. Alternative simpler neutral presentation where authority/services/branding are unavailable. No new routes, retry mechanics or business rules. |
| UX-Q03 — interaction values and meaningful evidence, before affected verification | Assign actual accessibility/UX/evidence reviewers and representative rendered contexts; assess focus/announcements/tooltips/dialogs, keyboard/touch, contrast/reflow/reduced motion and applicable assistive technology. Combine automated checks with manual/qualified review. Numeric timing/targets/layout and tool choice stay provisional; no conformance inferred. |
| UX-Q04 — branding contract ownership and implementation, before affected configuration work | D-109 records the Product Owner-approved direction to define bounded configurable client branding; it does not assign this SDD ownership or approve fields, permissions, storage, editor, assets or implementation. Registry/change control must allocate the contract to an appropriate specification before drafting its detailed behavior. Product Owner confirms scope; UX/accessibility and engineering assess fallback, access, validation and maintenance. Localization remains separate under Q-011. |

| D-102 direction / benefit | Alternative / trade-off | Failure; mitigation/recovery | Verification / residual risk / owner |
|---|---|---|---|
| Reusable semantic states reduce inconsistent feedback. | Per-screen duplication starts faster but drifts; a broad library may over-couple unrelated journeys. | Generic retry turns an unknown booking into duplicate submission; keep journey-owned authoritative semantics and persistent feedback. | Consumer success/rejection/unknown/held tests; state/content integration errors remain. UX/engineering/security design, Product Owner material policy. |
| Progressive keyboard/touch/reduced-motion patterns support varied users. | Animation-heavy/icon-only/hover-only patterns may be compact but obstruct use. | Invisible focus, inaccessible tooltip or modal traps user; semantic controls, visible text where needed and reviewed focus/announcements. | Actual rendered keyboard/assistive-technology/touch/reflow checks; varied devices/users remain. Qualified accessibility review and Product Owner scope. |
| Context-sensitive neutral error fallback avoids depending on branding/app services. | Six bespoke app pages add consistency opportunities but may fail when the app itself is unavailable. | Error page leaks internal paths or implies transaction failure; minimal safe output and source-owned reconciliation. | Failure/branding-unavailable fixtures and later operational fallback checks; hosting failure and incomplete context remain. Engineering/UX plus SDD-026 operational ownership. |

Data minimization, no client/CEAP access, independent installations, protected outcomes and qualified privacy/security review remain source-governed. Do not add color tokens, fonts, icon dependencies, animation requirements, generic autosave, command palette, bulk actions or subscriptions.

## Plan and verification

Future only: select bounded patterns from actual consumer need; review exact states/actions and open questions; authorize files/runtime/rendered checks and applicable specialist review; implement only that scope; exercise accessible fixtures and real journey integrations; record actual environments, criteria, outcomes, reviewer and limitations before individual acceptance.

No prototype, CSS/HTML/JS/Blade, packages, browser/server, application tests or accessibility scans are modified/run by this documentation task. No compatibility/WCAG/legal/security result is asserted. Tool checks cannot replace necessary keyboard/assistive-technology/human review.

## Revision Pass A history and disposition

Draft 0.2 applies preliminary reviewed-reuse direction to the unapproved draft 0.1: reusable accessible base patterns are proposed as required, maintained compatible UI libraries may be evaluated without adoption, and meaningful verification/branding fallback are explicit. C01–C14 identifiers remain; C14 is clarified and C15 added. UX-Q01–Q04 remain open. No approved UX source, requirement, package, token, full branding capability or Checkpoint 11 status is changed.

Prior affected criterion wording is retained for history, not current draft behavior:

| Local criterion | Prior draft 0.1 wording |
|---|---|
| SDD-023-C14 | Given an actual consuming journey and authorized rendered environment, when acceptance is sought, then applicable source-linked state, keyboard/focus/contrast, responsive/assistive-technology, security/unknown-outcome and failure checks are recorded with actual results/limits. Isolated visual fixtures or one browser/tool do not establish all-workflow WCAG compatibility. |

## Revision 0.3 history and disposition

Draft v0.3 incorporates the current Product Owner-approved directions D-106 and D-109: accessible explicit acknowledgement for permitted continuation after duplicate warnings; no ordinary-user bypass of blocking duplicate policy; truthful pending/rejected/unknown outcome presentation; automated and human accessibility verification including keyboard, screen-reader, zoom and touch; and a bounded configurable client-branding direction whose exact specification owner remains unallocated. C01–C15 are preserved; C16 is added for the material acknowledgement/blocking presentation contract. UX-Q01–UX-Q04 remain open where technical, ownership or installation-specific details remain. The prior exact-version approval of v0.2 remains intact; v0.3 is a new draft and not yet approved.

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Current revision | **DRAFT — SDD-023 v0.3, PENDING PRODUCT OWNER REVIEW.** No exact-version approval or implementation authorization is recorded for this revision. |
| Prior exact-version approval | The Product Owner approved SDD-023 v0.2 within its documented scope and open-question boundaries; approval date not separately supplied; recorded 2026-11-12. That approval remains historical and does not cover v0.3. |
| Drafting | AUTHORIZED by explicit Batch 1 instruction; approval date not separately supplied; recorded 2026-11-12. |
| Specification and criteria | **APPROVED** by the Product Owner for exact SDD-023 v0.2, within its documented scope and open-question boundaries. Approval provenance: explicit approval in the current Gate 2 instruction. Approval date: not separately supplied. Recording date: 2026-11-12. The earlier UX reference acceptance remains distinct; this is not implementation approval. |
| Implementation/mechanisms | NOT AUTHORIZED / NOT SELECTED. No UI framework, component dependency, token/font/icon library, route, branding mechanism or deployment fallback adopted. |
| Verification / feature acceptance | Documentation checks only as reported in drafting chat. No rendered/browser/assistive-technology/runtime/security/accessibility verification or feature acceptance recorded. |
| History/boundaries | Gate 2 remains historically unfinished; Checkpoint 11 remains unaccepted; P-009 remains separately unapproved. No new requirement, permission, proof/retry mechanism, gate transition or CEAP access. |

Open UX-Q01–UX-Q04 remain for their recorded owners and stages. Any implementation requires separate bounded authorization and applicable rendered/accessibility verification; this approval does not authorize it.
