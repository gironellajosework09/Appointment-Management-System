# iTakda Design System Reference

> **Status: Product Owner-accepted provisional reference; the subsequent §8 amendment is separately accepted as provisional reference guidance.** The original Session 03 acceptance and the amendment acceptance are distinct. Neither adopts a complete design system, finalizes technical choices, amends requirements, accepts Checkpoint 11, establishes WCAG conformance, or authorizes product implementation. The effective requirements baseline is [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), read with preserved v0.8 and unchanged v0.7; effective traceability is [revision 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md), with preserved revisions 1.2 and 1.0. The accepted [PRD](../product/PRD.md) and [TRD](../technical/TRD.md) are supporting references, not competing requirements authorities.

## 1. Authority and status

| Category | What it means here |
|---|---|
| **Approved requirements and governance** | Binding product and accessibility obligations come from Engineering Governance, applicable approved decisions, and the effective requirements and traceability records. D-039 adopted the agent entry point; it does not approve this reference or proposed standard P-009. |
| **Protected prototype direction** | D-096 requires preserving the specified iTakda brand colors and soft-neumorphic direction within its authorized fictional-prototype scope. This does not approve every token role for product-wide use. |
| **Product Owner exploration direction** | Explore a shared design foundation with developer-managed branding variation for independent installations. This is not an approved product requirement or application feature. |
| **Provisional design proposals** | Palette mappings, typography, component appearance, layout, responsive details, and motion below remain candidates for review. A source value or prototype implementation is not approval. |
| **Open decisions** | Branding fields and authority, final token roles, font assets, rendered accessibility, and detailed component behavior remain open where not resolved by approved sources. |

Routine product work follows SDD under D-098. D-101 allows only qualifying bounded refinements to isolated fictional, non-production prototypes; it does not authorize unrestricted product changes or accept Checkpoint 11. Gate and checkpoint records retain their history without reinstating sequential progression. See [Engineering Governance §5](../ENGINEERING_GOVERNANCE.md#5-spec-driven-development-lifecycle), the [Decision Register](../decisions/DECISION_REGISTER.md), and the [SDD transition ledger](../SDD_TRANSITION.md).

## 2. Prototype and visual foundation

The existing `prototype/checkpoint-11/` is the **primary visual exploration reference** for the current direction. Its landing/login compositions, indigo/orange identity, soft-neumorphic surfaces, hologram-inspired artwork and motion, and illustrative components help preserve design continuity; the earlier `prototype/landing-login-preview/` remains related exploration. Do not treat either prototype, its CSS, or its assets as an approved product specification or as disposable material that must be replaced from scratch.

D-096 protects the specified brand direction within its authorized prototype scope. D-101 permits qualifying routine fictional-prototype visual, responsive, motion, interaction, navigation, and accessibility refinements under its safeguards; it does not establish production behavior, a product-wide design standard, or Checkpoint 11 acceptance. Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). Prototype simulation does not establish real authentication, persistence, authorization, booking behavior, or accessibility conformance. Later use of visual treatments remains subject to applicable review, including contrast, keyboard access, reduced-motion behavior, and responsive usability.

## 3. Branding exploration — not an approved feature

The Product Owner prefers a **centralized, developer-managed branding configuration model** for independent client installations, preserving one reusable design foundation. This is an exploratory architectural preference, not an approved implementation requirement or a selected configuration mechanism. Here, *centralized* means branding settings are logically organized within each client’s own installation; it does not mean a centralized hosting service, shared database, or multi-tenant architecture.

| Concept | Current interpretation | Status and boundary |
|---|---|---|
| Default iTakda brand | Existing iTakda identity and reference presentation in the prototype. | Primary visual exploration reference; the protected prototype direction remains bounded by D-096 and D-101. |
| Developer-managed installation branding | Later exploration may consider a business display name, client logo, approved color values, and possibly fonts for a particular installation, configured by developers or appropriately authorized technical operators, subject to product-scope and accessibility review. | Product Owner exploration direction only. Independent installations do not themselves create this capability. Exact fields, validation, ownership, change approval, and rollout remain open. No configuration mechanism is selected. |
| Client-facing branding administration | A business administrator changing branding through application settings. | Not approved by this decision. No interface, permission, or requirement is created. |

This direction grants no new operator access, client-admin permission, configuration interface, white-label commitment, or arbitrary page-layout customization. NFR-004's approved configurability principle does not itself approve branding customization. This exploration does not authorize changing the protected prototype identity; it must be reconciled with product scope before any implementation is proposed.

The prototype's “Organization preview” is a browser-session illustration; its displayed identity changes are not uploaded or persisted. It does not establish developer configuration or client-facing branding administration.

## 4. Color primitives and semantic-token proposals

A **primitive** is a raw value, such as a hex color. A **semantic token** assigns a purpose to a value, such as a primary-action background. Protecting a prototype brand primitive does not approve its product-wide semantic role; proposing a semantic role does not make its value a required implementation standard.

| Primitive group | Source-supported values | Status |
|---|---|---|
| Existing logo colors | Midnight Navy `#11113B`; Sunset Orange `#E97932`. Both appear in the [iTakda lockup](../../brand/itakda-lockup.svg) and [calendar mark](../../brand/itakda-calendar.svg). | Existing brand-asset colors; D-096 protects the specified brand colors within its authorized prototype scope. This does not approve product-wide token mappings. |
| Additional Checkpoint 11 palette primitives | Deep Indigo `#252264`; Royal Indigo `#4944A8`; Soft Apricot `#FFF0E4`; Canvas White `#F7F8FC`; White `#FFFFFF`; Ink Navy `#25283E`. | Listed as owner-baseline primitives in the unfinished Checkpoint 11 source. Retain as visual exploration references; product-wide use and semantic roles remain provisional. |
| Feedback-color candidates | Success `#247B50`; warning `#92400E`; error `#9A3C32`; information `#20557A`. | Provisional foreground candidates only. Their background pairs and rendered states are not verified. |

| Proposed semantic role | Candidate mapping from Checkpoint 11 | Status |
|---|---|---|
| `surface.canvas` / `surface.panel` | Canvas White / White | Provisional; actual pairings require rendered review. |
| `text.primary` | Ink Navy | Provisional role. |
| `nav.background` / `nav.selected` | Midnight Navy / Deep Indigo | Provisional role mapping; preserve the existing prototype exploration. |
| `action.primary` / `action.secondary` | Royal Indigo with White text / White with Ink Navy text and a discernible boundary | Provisional; verify states and focus in context. |
| `accent.emphasis` / `surface.emphasis` | Sunset Orange with a dark label / Soft Apricot with Ink Navy text | Provisional; do not use color alone to convey status, error, selection, or permission. |
| Focus and feedback | Royal Indigo or White focus candidates; semantic feedback candidates above | Provisional; complete foreground/background and focus treatments remain unverified. |

The cited Checkpoint 11 source contains preliminary color calculations, not rendered accessibility results. Do not introduce new colors, replace brand assets, or treat these mappings as approved design tokens through this reference.

## 5. Typography and layout candidates

| Use | Candidate and existing fallback guidance | Status and review considerations |
|---|---|---|
| Headings and navigation | Candidate primary: Manrope; preferred fallback: `system-ui, Arial, sans-serif`. | Candidate primary only. The fallback sequence is a documentation-level design preference, not a mandatory product-wide standard. The prototype's `"Segoe UI", system-ui, sans-serif` remains valid historical exploration; review readability, fallback metrics, responsive wrapping, and performance before adoption. |
| Body, forms, tables, and status | Candidate primary: Source Sans 3; preferred fallback: `system-ui, Arial, sans-serif`. | Candidate primary only; no font file, embedding, CDN, license, or hosting method is approved. The preferred fallback sequence is not a mandatory product-wide standard. |
| Hierarchy and sizing | Use a clear heading/body/help hierarchy that remains readable as content and viewport change. | Detailed proposed scale, weights, spacing, and breakpoints remain in the unfinished [Checkpoint 11 source](../archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md); they are not final product values. |

Illustrative candidate stacks:

```css
font-family: "Manrope", system-ui, Arial, sans-serif;
font-family: "Source Sans 3", system-ui, Arial, sans-serif;
```

The earlier landing/login preview uses Plus Jakarta Sans in its CSS; that is another historical visual exploration, not a selected replacement. No font is selected, required, downloaded, bundled, or authorized by this document. Final font selection, licensing, hosting, loading, asset approval, weights/scales, and whether fonts could vary per installation remain open.

## 6. Component families and review guidance

| Component family | Approved constraint or boundary | Provisional visual direction / review |
|---|---|---|
| Navigation and page structure | Protected actions still require the applicable authority and server-side enforcement; visual visibility does not grant or enforce permission. | Prototype explores an iTakda-branded public header and role-specific internal navigation. Review client context, readable current location, keyboard operation, and narrow-screen navigation. |
| Buttons and links | Approved workflow outcomes must not be misrepresented as success; applicable accessibility target is in §7. | Proposed clear primary/secondary hierarchy, visible focus, discernible links, and legible disabled/loading states. Exact colors and states remain provisional. |
| Form inputs and validation messages | Protected state changes remain subject to approved authentication, authorization, and validation requirements. | Proposed persistent labels, associated help/errors, text beyond color, and logical focus after an error. Do not invent fields or policy rules. |
| Cards, panels, search, and tables | Minimize displayed personal data under applicable requirements. | Proposed restrained surfaces, clear headings/column labels, readable status text, and responsive records. Soft-neumorphic depth is a prototype reference, not a blanket product styling rule or control boundary. |
| Dialogs and overlays | A visual dialog cannot bypass authority or turn an unresolved outcome into success. | Proposed focus handling and clear consequence text; detailed behavior remains in the provisional Checkpoint 11 source. |
| Booking progress and confirmation | FR-010, AC-002, and D-065 require an accessible, readable, printable, screenshot-friendly confirmation for successful actions. | Step indicators, summaries, and layouts remain visual proposals. Display only an established outcome and the approved content. |
| Status and feedback | Booking, attendance, and reconciliation states remain distinct; unknown outcomes must not be presented as established success (FR-007/010; AC-026). | Proposed persistent, actionable text for errors, conflicts, and unknown outcomes; semantic color is supplementary and remains unverified. |
| QR, attendance, and manual fallback | QR lookup is separate from identity and attendance; lookup alone does not mark arrival (D-045; FR-006/014; AC-003/004). | The Checkpoint 11 source proposes a manual-reference alternative to camera use. QR lifecycle, camera dependency, and detailed interaction remain open; prototype controls do not establish policy. |

Detailed component states and screen-specific proposals remain in the unfinished Checkpoint 11 design source and [application-flow reference](APP_FLOW_UI_UX.md). Neither reference supersedes approved requirements.

## 7. Responsiveness, motion, and accessibility

| Topic | Approved target or prototype boundary | Proposed review guidance |
|---|---|---|
| Accessibility target | Applicable core public and administrative workflows target WCAG 2.2 AA: NFR-007, AC-006, S-7, D-052, D-068, and D-069. This is a target, not a conformance result. | Review keyboard operation, focus, labels/errors, contrast, zoom, screen-reader feedback, print, and relevant QR/manual-reference states. These methods do not replace later evidence. |
| Browser and device scope | Applicable desktop and mobile workflows use current and previous stable major releases of Chrome, Edge, Firefox, and Safari under D-069. | The precise device/OS matrix, evidence ownership, and conformance results remain for later verification; none is claimed here. |
| Responsive behavior | Responsive usability is part of NFR-007 and AC-006. | Proposed content reflow, readable forms/records/confirmation, and no reliance on pointer-only interaction. Breakpoint values and detailed responsive checks in Checkpoint 11 remain provisional. |
| Motion | For the fictional prototype, D-096/D-101 safeguards preserve reduced-motion support and usability without decorative effects. | Hologram-inspired and other nonessential motion is visual exploration. Review reduced-motion behavior and ensure content, controls, focus, and task outcomes remain usable without effects. No motion parameter is approved product-wide. |
| Color and focus | WCAG 2.2 AA remains the approved target; no rendered conformance is claimed. | Check actual text/control/focus pairs and non-color cues in rendered states. Source calculations and screenshots alone do not demonstrate conformance. |

The requirements are authoritative; the techniques in this table and the more detailed Checkpoint 11 review scenarios are design proposals. Do not add accessibility thresholds or claim testing based on this reference.

## 8. Post-acceptance amendment — Product Owner-accepted provisional guidance

**All guidance in this section is accepted as provisional reference guidance.** The Product Owner expressed preferences for balanced motion and top-right desktop toast placement; neither those preferences nor this acceptance approves a product standard, dependency, workflow, or implementation. The prior Session 03 acceptance remains complete; this amendment was accepted separately as recorded below.

The existing fictional prototype is the primary visual exploration reference (§2). Its outline SVG icons, animated landing/login artwork, transitions, reduced-motion handling, and simulated navigation dialogs are exploration evidence, not proof of a product component or conformance. The unfinished [Checkpoint 11 reference](../archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md) proposes persistent task feedback and restrained operational motion; reconcile detailed treatments during later review.

### 8.1 Iconography

Explore a consistent **Lucide-style outline** family as a visual candidate, without selecting a package, version, delivery mechanism, or license. Candidate sizes of 16, 20, and 24 px can be reviewed for navigation, actions, status, scheduling, QR, and administrative contexts; check optical alignment and consistent stroke appearance at each size. Define default, active, disabled, and feedback states with legible contrast and cues beyond color. Avoid mixing visual styles without deliberate review.

Pair icons with readable text when meaning is ambiguous; icons do not replace labels. Give meaningful icon-only controls accessible names and hide purely decorative icons from assistive technology where appropriate. Do not communicate important outcomes through icons or color alone. These suggestions create no new action or navigation destination.

#### 8.1.1 Icon-first utility controls and tooltip conventions

The Product Owner prefers icon-first presentation for familiar, compact utility controls when the action is recognizable in context. This is **accepted provisional design guidance**, not an implementation mandate. The following are presentation examples, not newly approved controls or destinations.

| Control | Preferred visible treatment | Tooltip / accessible action label |
|---|---|---|
| Password visibility | Eye / eye-off icon | Show password / Hide password |
| Close or dismiss | X icon | Close / Dismiss |
| Search action | Magnifying-glass icon | Search |
| Calendar picker | Calendar icon | Choose date |
| Overflow menu | Ellipsis icon | More options |
| Panel collapse/expand | Panel or directional icon | Collapse panel / Expand panel |
| Previous/next navigation | Directional chevrons when context is clear | Previous / Next, with context where needed |

Suitable icon-only candidates are familiar, compact, low-risk utility actions with adequate context. Generally retain visible text, optionally with an icon, for primary calls to action, destructive or consequential decisions, unfamiliar actions, and ambiguous controls. Keep visible form-field labels and do not remove action text merely for minimal appearance. Tooltips never replace persistent instructions, validation messages, confirmation content, or other essential task information.

**Provisional agent guidance:** When drafting iTakda interfaces, prefer these icon-first patterns for familiar utility controls instead of substituting visible word-only buttons. Preserve visible text for consequential or ambiguous actions, and provide accessible names and appropriate hover/focus explanations for icon-only controls. This convention remains provisional, not authorization to implement it.

An icon-only control's **visible presentation** is separate from its **programmatic identification and state**. For each meaningful control, use a real interactive element (normally a button for a button action), a meaningful accessible name, keyboard operation, visible keyboard focus, an adequately sized or spaced target, appropriate disabled and toggle state, sufficient rendered contrast, and state cues beyond color. It must work without hover; an `aria-label` alone does not establish accessibility. For password visibility, the icon and accessible action label should reflect the action currently available; review the chosen toggle semantics and state together.

Propose short, descriptive tooltips on pointer hover and, where appropriate, keyboard focus. Keep them supplementary, noninteractive unless a separately justified pattern requires interaction, and positioned so they do not obscure the control or essential content. Do not rely on hover for touch devices or on a native `title` attribute alone. Where applicable under WCAG 2.2 AA, ensure hover/focus content can be dismissed, hovered, and remains available long enough to use. Review actual rendered behavior and exceptions before adoption; no accessibility conformance is claimed.

### 8.2 Motion, transitions, and visual effects

The preferred **balanced motion** personality explores expressive but nonessential floating hologram-inspired artwork, slow ambient rotation, glow or pulse, restrained entrances, and responsive depth on landing/login screens. Preserve the existing indigo/orange identity and soft-neumorphic exploration with controlled shadows and glow. The hologram is not a required product component. Booking forms, administration, tables, scanners, and other critical workflows should favor responsiveness, legibility, predictable state feedback, and minimal distraction. Effects must not obstruct primary actions.

| Candidate category | Illustrative duration | Possible use |
|---|---|---|
| Fast | 120–180 ms | Hover and press feedback |
| Standard | 180–280 ms | Input or small component transitions |
| Deliberate | 250–350 ms | Dialog, drawer, or step entrance |
| Ambient | Several seconds per cycle | Decorative artwork |

These values are examples, not approved tokens. Review consistent easing, interruption by the next user action, and performance; avoid layout shifts, excessive motion, and delays before interaction. Animation is never a prerequisite for completing a task. Honor `prefers-reduced-motion` by removing nonessential movement while preserving content and feedback.

| Context | Provisional review direction |
|---|---|
| Buttons, links, focus, and hover | Use restrained feedback; preserve visible keyboard focus independently of hover or animation. |
| Validation and booking steps | Keep labels and errors readable and persistent as appropriate; preserve entered data and logical focus across transitions. |
| Navigation, drawers, and panels | Make state changes predictable and interruptible, with responsive reflow and no obstruction of essential controls. |
| Loading and outcomes | Pair pending indicators with text. A visual transition or loading indicator does not confirm a server outcome or authorize a protected action. Keep errors and unknown outcomes readable; never animate away critical information or present an unknown result as success. |

### 8.3 Toast notifications

A toast is supplementary, brief interface feedback. The Product Owner prefers **top-right placement on desktop**, subject to review; on narrow screens review placement, width, reflow, and system UI so notices do not cover navigation, forms, or essential controls. Avoid excessive stacking and unexpected focus stealing. Announce messages to screen readers with urgency appropriate to their content; avoid color-only meaning. Auto-dismiss timing is unresolved and must be reviewed for accessibility; do not impose an arbitrary short timeout on messages requiring reading or action.

| Candidate variant | Purpose and treatment | Dismissal, action, and accessibility review |
|---|---|---|
| Success | Supplement an established success with clear text and an optional recognizable icon. | A non-action notice may dismiss after review of timing; offer dismissal as appropriate. Any action must be optional and accessible; use an appropriately polite announcement. |
| Error | Identify a known failure in text, with an optional icon and non-color cue. | Keep critical or actionable errors available in persistent task content; allow dismissal of the supplemental toast. Offer an action only when an approved next step exists; review announcement urgency. |
| Warning | Explain a condition needing attention in text, with an optional icon and non-color cue. | Preserve actionable information in the interface; dismissal must not erase it. An applicable action may be offered; review urgency and reading time. |
| Information | Provide contextual information in text, with an optional icon. | A non-action notice may dismiss after timing review; provide dismissal as appropriate. Offer only relevant accessible actions and use a suitable announcement. |

A toast is never the sole record of an essential booking outcome: confirmed success uses the approved accessible confirmation experience (FR-010, AC-002); unknown, rejected, held, or uncommitted outcomes must not be presented as confirmed success. Detailed message behavior remains a proposal, subject to the approved outcome rules and future review. No toast library or architecture is selected.

### 8.4 Modals and confirmation dialogs

Consider informational dialogs for short contextual information, confirmation dialogs for consequential decisions, and form dialogs only when the task benefits from retained context; use a page or panel when a dialog would be cumbersome. Destructive or consequential actions need clear object and consequence text and distinguishable actions, with a safe cancellation path where applicable. Avoid accidental destructive confirmation and unnecessary or nested dialogs; not every action needs a modal.

For a true modal, propose a clear title, appropriate initial focus, focus containment while open, visible keyboard focus, and focus restoration to the invoking control or a logical alternative. Provide an accessible close or cancel path and Escape behavior where appropriate; prevent background interaction while the modal is active. Review screen-reader naming, responsive sizing and mobile reflow without obscuring essential content; preserve entered data where applicable. Exact behavior and any exceptions require review against the relevant workflow.

Existing approved requirements decide what actions are allowed and when confirmation or review is required. A dialog creates no permission, dispute rule, or exception and cannot bypass server-side authorization or validation.

### 8.5 Accessibility and evidence

NFR-007, AC-006 and D-069 set the applicable WCAG 2.2 AA target and supported browser policy described in §7. Review rendered contrast, keyboard operation, visible focus, labels and announcements, non-color cues, reduced motion, responsive reflow, and assistive-technology behavior in the relevant states. Overlays and notices should not obstruct essential tasks. These are design intentions and future verification considerations, not evidence of conformance or browser compatibility.

## UX completeness amendment — accepted provisional guidance

> **ACCEPTED — provisional UX guidance, separately approved by the Product Owner.** This UX Completeness Amendment is a separate approval and does not retroactively alter the Session 03 acceptance records below. Approval date: not separately recorded. Recording date: 2026-11-11. It creates no product requirement or implementation authorization.

This amendment covers reusable presentation and interaction guidance. Approved requirements remain authoritative, including NFR-007/AC-006 and FR-010/AC-002; the [Application Flow](APP_FLOW_UI_UX.md) describes journey-specific outcomes. No final visual tokens, branding fields, component implementation, breakpoint or dependency are selected.

### Error experiences

The 403, 404, 419, 429, 500 and 503 situations are **design-review scenarios**, not a mandate for six separate application-rendered pages. Explore consistent, accessible presentation with a meaningful heading, understandable message, visible keyboard focus and a safe next step when available. Preserve correct response semantics, authorization and privacy boundaries; never expose stack traces, credentials, internal paths, sensitive records or an unauthorized appointment's existence.

Appropriate presentation depends on error context, application availability, authentication and authorization state, available installation branding, and deployment/server fallback capabilities. Prefer available installation branding with a safe neutral presentation when it cannot be loaded. Branding remains the exploration direction in §3; this approves no configuration interface or new fields. Actual response mapping, page coverage, fallback ownership and implementation mechanisms remain for later authorized design. A network interruption may prevent any server-delivered page from appearing.

Review rendered contrast, responsive reflow, keyboard and assistive-technology behavior. A generic error must not describe an unknown submitted booking or change as a confirmed failure or offer blind retry. Use the [Application Flow](APP_FLOW_UI_UX.md) for outcome and reconciliation boundaries.

### Loading, empty and feedback states

| State | Provisional presentation guidance |
|---|---|
| Initial or in-progress | Identify what is loading or processing with readable status and, where appropriate, meaningful announcements without stealing focus. A visual indicator does not establish a business outcome. |
| Empty or no results | Explain the relevant context and a permitted next step; distinguish an empty dataset from filters producing no matches. |
| No dates or slots | Explain unavailability and offer actual installation-local alternatives only if they exist and the approved workflow permits them. A selection does not reserve capacity. |
| Failed, partial or stale | Label the condition and, where useful, freshness or the unavailable portion. Do not present failed loading as an empty result or stale information as current. |
| Long-running or disabled | Keep status and controls understandable; explain an unavailable action where appropriate. Do not invent a completion time or make essential feedback depend on animation. |

A skeleton is optional, not a universal requirement. Feedback must remain understandable with reduced motion and must not depend on color alone. Persistent task information takes precedence over supplementary toasts for important outcomes.

### Forms and consequential actions

Use persistent labels, understandable instructions and clear required-field indicators. Associate field-level errors with fields and, where useful, provide a form-level summary with logical focus and correction paths. Preserve safe input where appropriate; do not retain or redisplay secrets merely for convenience. Client-side feedback supplements authoritative server-side validation and authorization.

For applicable authorized destructive or irreversible actions, consider clear action labels, consequences and proportionate confirmation; avoid unnecessary confirmation for routine reversible actions. A dialog grants no permission and creates no reversal capability. Protect against accidental repeated submission; present established success, known rejection and unknown outcomes accurately. Show recovery or reversal information only where the approved workflow supports it.

### Responsive and accessibility review

Review small-screen navigation, readable forms and records, responsive tables or labeled alternatives, touch-target usability, zoom and reflow, visible focus, keyboard and assistive-technology operation, contrast and reduced motion. Preserve the accessible, readable, printable and screenshot-friendly confirmation required by FR-010 and AC-002. The WCAG 2.2 AA target and D-069 browser policy remain as recorded in §7; exact layouts, breakpoints and verification environments remain open. These review intentions are not conformance or test results.

## 9. Open decisions and source navigation

| Open item | Boundary |
|---|---|
| Installation branding | The preferred centralized, developer-managed direction is recorded for exploration; confirm product scope, supported values, ownership, validation, change approval, and rollout before any implementation. It means logically organized settings per independent installation, not shared infrastructure or tenancy. It creates no client-facing feature or new permission. |
| Tokens and brand | Decide which additional palette values and semantic mappings, if any, should be adopted beyond protected brand direction. No product-wide token set is approved here. |
| Typography | The fallback sequence `system-ui, Arial, sans-serif` is preferred for documentation but is not a product-wide standard. Resolve candidate primary fonts, licensing/hosting/loading, final scale, and whether per-installation font variation is in scope. |
| Components and responsive details | Review proposals against actual approved workflows, content, authority, and future evidence. Exact component states and breakpoint values remain provisional. |
| Accessibility evidence | Determine applicable test environments and evidence roles through the approved review process; verify actual rendered behavior later. No conformance evidence is claimed. |

### Source map

- **Approved baseline:** [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), read with preserved [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md); [traceability revision 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md), with preserved [revision 1.2](../requirements/REQUIREMENTS-TRACEABILITY-v1.2.md) and [revision 1.0](../requirements/REQUIREMENTS_TRACEABILITY.md); and applicable entries in the [Decision Register](../decisions/DECISION_REGISTER.md).
- **Governance:** [Engineering Governance](../ENGINEERING_GOVERNANCE.md), especially §5 for SDD and the Prototype Exploration Exception. D-098 does not accept Checkpoint 11; D-101 does not change product requirements or implementation governance.
- **Provisional detailed design:** [Checkpoint 11 design system and accessibility](../archive/legacy-sdlc/checkpoint-records/checkpoint-11/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md) and [application flows](APP_FLOW_UI_UX.md).
- **Supporting summaries:** accepted [PRD](../product/PRD.md) and [TRD](../technical/TRD.md) summarize direction but do not supersede approved source records.
- **Specialist references:** [security and privacy](../security/SECURITY.md) and [testing](../engineering/TESTING.md) are draft references for later applicable review and evidence.
- **Visual exploration:** [Checkpoint 11 prototype](../../prototype/checkpoint-11/index.html), [earlier landing/login preview](../../prototype/landing-login-preview/index.html), and [brand assets](../../brand/itakda-lockup.svg). These files remain unchanged by this reference.

Product Owner acceptance of this reference is recorded below; it does not constitute design-system adoption, requirement amendment, Checkpoint 11 acceptance, or implementation authorization.

## Session 03 review and acceptance

| Field | Record |
|---|---|
| Scope and disposition | The Product Owner explicitly accepted the amended iTakda Design System Reference during the Session 03 review. Acceptance covers this provisional reference's source authority, prototype visual direction, branding exploration, color primitives and proposed semantic roles, typography candidates, component review guidance, responsiveness, motion, accessibility traceability, and open decisions. Session 03 is complete. |
| Approver and date | Product Owner; acceptance date not separately supplied. Record prepared 2026-11-11; the recording date is not represented as a separately supplied approval date. |
| Reviewer and verification | Codex compared the current reference with the reviewed amendment, its four session decisions and two clarifications, and checked its authority and provisional boundaries. The acceptance record and repository scope were checked in the Session 03 closure chat. No rendered accessibility or product testing is claimed. |
| Session decisions | DESIGN-Q01 = B-modified: explore developer-managed branding per independent installation. DESIGN-Q02 = B: preserve protected prototype brand colors while broader semantic mappings remain provisional. DESIGN-Q03 = C: retain candidate fonts and fallback guidance without approving final font assets. DESIGN-Q04 = B: retain a concise reference with practical token and component tables. |
| Additional preferences | Centralized, developer-managed branding is an exploratory direction, logically organized within each independent installation. The preferred documentation-level font fallback is `system-ui, Arial, sans-serif`; it is not a mandatory product-wide standard. |
| Limitations and open matters | Acceptance applies to this reference only. It does not approve a complete product design system, final tokens or fonts, font assets, licensing or hosting, branding implementation or client-facing administration, new requirements or permissions, shared infrastructure or multi-tenancy, Checkpoint 11 or its prototype, accessibility conformance, implementation, or deployment. Branding scope, mechanism, fields, permissions, validation, ownership, rollout and accessibility safeguards; final tokens and font selection/assets; component details, responsive values, and rendered accessibility evidence remain open. Review was source-based and assisted by Codex; no independent human technical review is claimed. |

This record follows [Engineering Governance §5](../ENGINEERING_GOVERNANCE.md#5-spec-driven-development-lifecycle) for the change, reviewer, verification, outcome and limitations, and §18 for recording Product Owner approval and an unsupplied approval date. No new decision-register entry or historical gate transition is implied.

## Session 03 post-acceptance amendment review and acceptance

| Field | Record |
|---|---|
| Scope and decision | The Product Owner explicitly accepted §8, including §8.1.1 icon-first utility controls and tooltip conventions, as provisional reference guidance. Amendment review **COMPLETE — ACCEPTED as provisional reference guidance**. This is separate from the original Session 03 acceptance above. |
| Approver and dates | Product Owner; acceptance date not separately supplied. Record prepared 2026-11-11; this recording date is not represented as the acceptance date. |
| Reviewer and verification | Codex compared the reviewed amendment and original acceptance record with the available prior document snapshots, checked source and authority boundaries, and reviewed the scoped documentation change, Markdown, local links and Git state as reported in the amendment closure chat. No independent human technical review, browser or accessibility testing is claimed. |
| Limitations | Acceptance does not adopt a complete product-wide design system, finalize icons, dependencies, motion values or component implementations, authorize implementation or prototype changes, accept Checkpoint 11, amend requirements, or establish accessibility conformance. Tooltip, toast, modal, responsive and rendered accessibility details remain subject to later review. |

This separate record follows [Engineering Governance §5](../ENGINEERING_GOVERNANCE.md#5-spec-driven-development-lifecycle) for review and limitations and §18 for explicit approval and an unsupplied approval date; no new decision-register entry or historical gate transition is implied.
