# Checkpoint 11 motion design proposal

| Field | Value |
|---|---|
| Status | First-increment section approved for bounded prototype implementation; acceptance pending |
| Owner | Product Owner |
| Date | 2026-11-10 |
| Change class | Ordinary presentation and interaction change. New behavior and dependencies require prior spec and bounded-scope approval under D-098. |

## Purpose

Define a restrained motion language for the fictional Checkpoint 11 prototype. Motion should make the appointment journey feel clear and polished while keeping its controls readable, its content stable, and its reduced-motion experience complete. The detailed implementation proposal below supersedes earlier estimates where they differ. All design choices and budgets in this document are proposals awaiting Product Owner approval.

## Scope and boundaries

**Proposed scope:** public landing hero, decorative hologram, login presentation, and optional informational sections on the landing page. Effects communicate page hierarchy and demonstrate a fictional interaction only.

**Excluded:** real booking or authentication behavior, staff/admin workflow animation, data-driven animation, production application implementation, and any library loaded into the page before separate implementation approval. This proposal does not accept Checkpoint 11 or change D-096–D-099.

## Motion principles

- Animate opacity and transforms for routine movement. Keep text and controls still while people read or enter information.
- Use one entrance sequence per view. Avoid replaying it on every state change or scroll reversal.
- Keep loops slow, subtle, and decorative. Stop or simplify them for reduced motion, small screens, hidden tabs, and constrained devices.
- Interaction states must work with keyboard, pointer, and touch. Hover never carries the only meaning.

## Proposed interactions

### Landing hero

On first view, reveal the heading and supporting copy with a short opacity and 8 px upward fade. Follow with the primary and secondary actions using a 60 ms stagger, then fade in the illustration stage. Start after first paint and finish the full sequence within 700 ms. Do not animate layout dimensions, count-up values, or the booking actions themselves.

The primary action remains the strongest visual focus. A restrained hover/focus response may raise it by 1–2 px and strengthen its shadow. Keyboard focus uses the existing visible focus treatment without movement.

### Living hologram

Treat the hologram as a contained decorative stage. Default behavior is a gentle 6–10 second float of no more than 4 px with a slow opacity or highlight shift. Keep luminance low enough that nearby text remains legible. No strobing, rapid scanlines, large glow pulses, or continuous rotation.

An optional fine-pointer interaction may nudge the entire illustration by at most 2 degrees, then return over 500–700 ms after input ends. This is purely decorative, disabled for coarse pointers, reduced motion, and the low-performance fallback. It does not trigger booking or imply a selectable control. A Rive state machine would require a separately supplied authored asset and separate approval.

### Login view

Show the destination immediately using the current hash routing and hidden-view behavior. Optionally fade in only its decorative panel over 180 ms. Do not delay routing, hide the form, move focused controls, or couple focus to an animation event. Forms appear without stagger. Preserve existing heading focus and form state.

### Informational sections

If approved landing content includes explanatory sections below the hero, reveal each section once when it enters the viewport. Use opacity plus up to 8 px vertical movement over 250–350 ms. Trigger only after roughly 15% visibility. Keep section height reserved to avoid scroll jumps. All information remains visible when JavaScript is unavailable or reduced motion is requested.

## Timing and performance budgets

| Motion | Duration / range | Budget |
|---|---:|---|
| Hero entrance | 450–700 ms total | One entrance sequence, no layout reads per frame |
| View crossfade | 120 ms out, 180 ms in | Keep navigation responsive during the transition |
| Section reveal | 250–350 ms | Run once per section |
| Hologram idle loop | 6–10 seconds | One contained layer, no full-page repaint |
| Hologram return | 500–700 ms | Maximum 2 degree input tilt |

Prefer transform and opacity. Avoid animating filters, large blurred shadows, dimensions, or full-screen canvases continuously. Pause loops when the page is hidden. Defer any optional runtime until its stage is visible. Proposed incremental compressed transfer budgets, to validate at implementation, are at most 15 KB for routine CSS/JS motion and at most 150 KB for an optional interactive illustration runtime. A Three.js scene is outside this proposal's default budget and requires a separate measured justification.

## Responsive behavior

- Desktop may show the full illustration and the optional pointer nudge.
- Tablet reduces the idle amplitude by about half and removes pointer tracking.
- Mobile uses a static or very lightly fading illustration, with no pointer-follow, scroll smoothing, or large WebGL scene.
- Below-the-fold reveals may use native CSS scroll-driven animation only where supported and where content remains visible without it. Prefer a small IntersectionObserver for broad support if script-based reveals are approved.
- Keep viewport resizing from restarting the entrance sequence.

## Reduced motion and accessibility

Under `prefers-reduced-motion: reduce`, render all content immediately, remove parallax and idle loops, and use instant view changes or a 100 ms opacity-only transition. No content, focus, or state may depend on animation completion. Provide visible focus, adequate contrast, semantic controls, and no flashing. Decorative animation must not compete with reading or form entry. Ensure animation does not cause layout shift or trap focus.

## Technology allocation

| Technology | Proposed role | Decision |
|---|---|---|
| CSS | Hero/view fades, short transform transitions, idle hologram float, reduced-motion overrides | Preferred for these simple effects. Use keyframes and the existing stylesheet. |
| GSAP | Coordinating a future complex, multi-step hologram timeline or scroll-linked sequence | Optional. Do not use for current hero and login effects unless CSS becomes materially hard to maintain. |
| Motion | A future small set of declarative element transitions if the project adopts its vanilla APIs | Alternative to GSAP for element motion, not a second animation system. Do not install into production as part of this proposal. |
| Three.js | Fully rendered 3D hologram with camera, lighting, or geometry | Not proposed for the current decorative illustration. Reconsider only with a specific 3D requirement and mobile/WebGL performance evidence. |
| Rive | Authored vector hologram with meaningful states, if interactivity is approved | Preferred over Three.js for a small authored 2D character/illustration. Keep a static asset fallback and lazy-load the runtime. |
| Lenis | Synchronized smooth scrolling for a deliberate long-form, scroll-led presentation | Not proposed. The landing journey should retain native scrolling and browser accessibility. |

Use CSS first. If a later interaction needs a library, choose one of GSAP or Motion for DOM animation. Choose Rive or Three.js only for a defined illustration/rendering requirement. Lenis remains outside the default experience.

## Acceptance criteria for a future implementation

- The initial landing content remains visible if JavaScript fails. When motion is disabled, existing JavaScript-dependent navigation and login simulation remain usable; no new motion logic may block them.
- Motion preferences stop the hero loop, pointer response, and section movement without hiding content.
- Automated or manual verification records behavior at desktop, tablet, and mobile widths, keyboard focus, reduced motion, page visibility, and a representative low-power device.
- Performance evidence records compressed added transfer, largest contentful paint impact, layout shift, and frame behavior for any continuously animated canvas.
- Product Owner approves this spec and a bounded implementation plan before code changes. Any new dependency or materially interactive behavior receives its own explicit scope decision as D-098 requires.

## Open decisions

- Whether informational landing sections are in the approved prototype content scope.
- Whether the hologram remains decorative or becomes an interactive illustration.
- Whether to approve any animation dependency for implementation after inspecting the D-099 experiment.
- Whether the proposed byte budgets are practical after a concrete asset and build strategy is selected.

## Current prototype assessment

- `index.html` already has responsive public navigation, hero booking/sign-in actions, “How it works,” services and a closing action, plus a split login panel. The existing login layout places a compact art strip before the form on mobile; it does not currently place the form first.
- The hero and login use `references/booking-illustration.svg` as an image, with existing CSS idle motion. It is a flat SVG illustration with embedded iTakda text, not independently accessible depth layers or a 3D model. Whole-image movement can simulate shallow depth; authentic 3D parallax requires newly authored layers or a 3D asset.
- Public and login name/logo slots use `data-org` and `data-org-logo`. The fictional admin preview updates many of these in the current session only. The default wordmark, page title, footer, accessible home label in one update path, and artwork can retain iTakda. This is partial preview substitution, not complete configurable client branding.
- `app.js` routes by hash, toggles `hidden` immediately, and focuses a destination heading on the next frame. Motion must preserve these semantics, including rapid route changes and back/forward navigation.
- The stored desktop capture is historical and uses different hero wording from the current HTML. It is a visual reference, not evidence of the current rendered state. Current responsive and accessibility behavior requires fresh verification after implementation.

## Animation inventory and implementation choices

| Element | Proposed behavior | Timing and easing | Implementation and safety |
|---|---|---|---|
| Header and mobile navigation | Remain stable and immediately usable; existing menu toggles normally | No entrance delay | CSS and existing navigation. Keep focus visible and controls reachable. |
| Hero heading and description | Once-per-page-load opacity and at most 8 px translation | 300 ms ease-out; 60 ms stagger; total entrance at most 600 ms | CSS, progressively enhanced. Content stays visible if script or motion fails; focused elements become visible immediately. |
| Hero actions | Appear with content, remain operable immediately | 150 ms color/outline feedback | CSS. Do not animate the hit area or defer availability. |
| Hologram | Whole SVG floats up to 4 px; subtle existing stage highlight only | 8–10 s ease-in-out loop | CSS. Pause when offscreen or page hidden, and for reduced motion. No animated blur or large repaint. |
| Fine pointer option | Decorative whole-image tilt, at most 2 degrees | Return 600 ms ease-out | Optional separately selectable scope; pointerleave, blur, navigation and preference changes reset it. Disabled on touch/coarse pointers and reduced motion. |
| How/services/closing | Once-only appearance of decorative elements after visibility | 300 ms ease-out, at most 8 px | IntersectionObserver only when available; default visible, never hide focusable controls. Native scrolling and anchors remain intact. |
| Login | Immediate route and heading focus; decorate art panel only | 180 ms opacity | CSS. No outgoing delay or interrupted typing. Existing validation announcements remain immediate. |
| Field feedback | Existing labels, focus, validation and errors remain readable | At most 150 ms color/border | CSS. No shake, delayed error announcement, or animated layout shift. |
| Reduced motion / fallback | Content visible immediately, static art, no pointer tilt or scroll reveals | Instant | `prefers-reduced-motion`; if JS is unavailable or interrupted, visual content remains visible. |

## Technology and asset selection

| Approach | Assets and practical effect | Tradeoffs / recommendation |
|---|---|---|
| CSS plus existing flat SVG | Existing image supports float, opacity and whole-image tilt | **Recommended baseline.** Small transfer and straightforward fallback. No genuine independent depth. |
| GSAP with CSS/SVG | Existing art works as one object; independent parts need a reauthored or inline layered SVG | Recommend GSAP as the single primary JS animation library **if** sequencing later exceeds CSS needs. It adds runtime and cleanup work and requires explicit runtime-use approval. The baseline uses no animation library. |
| Motion | Existing element animation; separate layers require reauthoring | Viable alternative to GSAP. Do not load both for the same effects. |
| Rive Canvas | A designer must supply a `.riv` file and poster fallback | Authored state-machine interaction is possible. Runtime/WASM cost, asset maintenance and accessible control design require separate scope and measurement. |
| Three.js | A 3D model, materials, lighting and static fallback must be created or licensed | True 3D and lighting, with WebGL, GPU, memory and mobile compatibility costs. Separate design and approval needed. |
| Lenis | No new art | Scroll smoothing is unnecessary for the existing informational sections; retain native scrolling and focus behavior. |

Assets needed for the baseline are the existing SVG and logo. To demonstrate non-iTakda client branding convincingly, a neutral or configurable illustration without embedded iTakda text is needed. No suitable replacement is identified in this review. A fictional second client name/logo and approved handling of the default asset are design inputs; avoid real client data. Font, color and logo licensing, accessible contrast and layout with long names need review before use. The current design exception preserves exact iTakda colors, so a broader client-brand palette or changed visual identity needs explicit Product Owner disposition.

## Bounded implementation proposal — pending approval

**Proposed files:** `prototype/checkpoint-11/index.html` for scoped motion hooks and any approved static branding placeholders; `style.css` and, only if needed for login layout, `login-mobile.css` for motion tokens and responsive/reduced-motion rules; `app.js` for narrowly scoped lifecycle hooks while retaining route/focus semantics; and an optional new local `motion-effects.js` loaded by `index.html` for observer and pointer cleanup. These are candidate paths, not permission to edit them. The three CSS files with unexplained baseline differences are excluded from this proposal.

**Dependencies:** no runtime animation package in the recommended first increment. GSAP is the preferred future primary JS library if the Owner approves a demonstrated need; D-099 installed it only for evaluation and does not authorize loading it. No new packages, CDN, asset upload, service, root application changes, persistence, or production configuration. The existing session-only name/logo preview should be exercised, not represented as a production branding feature. Any changes to that preview, embedded branding artwork, client palette, navigation content, new informational sections, or meaningful hologram interaction require an explicit approved scope and asset decision.

**Order:** (1) record spec and exact scope approval, including the chosen branding treatment; (2) establish tokens and immediate/static fallback; (3) implement hero and decorative idle; (4) add optional observer-based reveals and any separately approved pointer response; (5) add login art and responsive adaptations while preserving focus and validation; (6) exercise session-only branding with a fictional example; (7) verify, document findings, and request acceptance. Preserve all unrelated prototype work.

**Risk and authority:** proposed ordinary fictional-prototype presentation and interaction change under D-098, subject to Product Owner approval of this spec and the bounded scope. D-096 permits restrained landing/login illustration glow and motion only within its stated safeguards. New motion on informational sections, optional pointer interaction, runtime loading, or visual branding changes must be explicitly included in the Owner's scope decision where they exceed that authorization. If implementation affects authentication, privacy, architecture, external integration, or real client configuration, stop and classify/review that scope separately under D-098.

## Verification plan for the proposed increment

Use Playwright MCP if operational, with a separate headless browser as documented fallback. Record browser/version and distinguish scripted results from visual judgments. Check desktop 1440×900, tablet 768×1024, mobile 390×844 and 320×640, plus 200% zoom. Exercise home → sign in → back, booking/manage links, anchor navigation, menu, rapid route changes and browser back/forward. Verify keyboard-only access, focus visibility and heading focus, no obscured focus, error/status announcements, and a screen-reader spot check with environment identified. Check normal and reduced motion, preference changes while open, offscreen/hidden-tab cleanup, touch/coarse-pointer fallback, JS-disabled landing and scripted failure fallback. Inspect console and local network for failures or unexpected requests.

Measure before/after compressed incremental transfer, layout shift (target added CLS ≤ 0.01), and LCP difference (target ≤ 100 ms on the same throttled profile) on three repeated runs, reporting median and environment. Target no animation-induced long task above 50 ms and frame pacing near 60 fps on a representative device; report observed frame drops rather than claim universal compliance. Proposed 15 KB compressed incremental CSS/JS budget excludes existing assets and applies to this baseline. A runtime, new asset, or 150 KB illustration budget requires a separate approved scope and measurement. Targets are proposed review thresholds, not measured results or product requirements. Run a contrast check and manual keyboard/screen-reader review; automated checks alone do not establish WCAG conformance.

## Product Owner decisions required

1. Approve or revise the detailed motion inventory, timing, reduced-motion behavior, and candidate file scope above.
2. Choose whether the fine-pointer decoration is included or deferred; recommend deferred for the first increment.
3. Approve reveal motion for the three existing informational sections, or keep them static; no new section content is proposed.
4. Choose a branding approach: retain the existing iTakda artwork as an explicitly fictional fallback, or supply/approve a neutral replacement and a scoped session-only branding demonstration. Full configurable client branding requires separate requirements/design authority.
5. Approve the proposed budgets and verification plan, including how low-performance behavior is selected and measured. Recommend pausing offscreen/hidden art, static reduced-motion output, and no pointer tracking on coarse pointers rather than guessing device power.
6. Approve a new narrow prototype motion authorization where the chosen scope exceeds D-096/D-097. Runtime integration of GSAP, Rive, Motion, Three.js, or Lenis requires explicit approval beyond D-099.

## Final first-increment scope — proposed for approval

This section is the approved first-increment specification. It supersedes conflicting or optional motion, timing, file-scope and budget statements elsewhere in this draft. The Product Owner approved this section and its bounded implementation scope under D-100. Implementation acceptance remains pending.

### Exact motion inventory

| Element | Proposed behavior and timing |
|---|---|
| Header, navigation and hero actions | Immediately visible and operable. CSS color/border feedback is 150 ms ease-out. Keep the current visible focus outline. No movement of controls. |
| Hero heading and description | One opacity and upward entrance, 300 ms ease-out with 60 ms stagger; translate at most 8 px. Total sequence at most 600 ms. Apply only after enhancement is ready; content is visible by default and immediately visible on focus, reduced motion, or failure. |
| Hero and login illustration | Animate the existing flat SVG as a single layer with a 10-second ease-in-out vertical loop of at most 4 px on desktop and 2 px on tablet. Use the existing contained highlight without animating blur or filters. At widths of 650 px or less, display a static illustration. Pause when the document is hidden or the illustration is offscreen, and resume only when visible. |
| Existing How, Services and closing sections | One 300 ms ease-out reveal with at most 8 px vertical translation on decorative/non-focusable content when 15% enters the viewport. Content and controls remain visible and accessible by default. If IntersectionObserver is unavailable or interrupted, leave content fully visible. No replay on reverse scroll. |
| Login art and form | Route and move focus immediately using the existing logic. Fade only the decorative illustration panel in for 180 ms ease-out. Keep the form and validation messages visible and interactive throughout. Field color/border feedback is at most 150 ms; no shake or delayed error announcement. |
| Reduced motion | On `prefers-reduced-motion: reduce`, immediately show all content, stop idle and reveal motion, and use instantaneous view changes. Handle preference changes while the page is open. |

Pointer tracking, 3D, new authored assets, scroll smoothing, and all five experiment libraries are excluded. Retain `references/booking-illustration.svg` as the fictional iTakda fallback. It contains embedded branding and does not demonstrate complete client-configurable branding. Retain native scrolling and existing session-only branding behavior.

### Proposed measurable budgets

- At most 15 KB compressed incremental CSS and JavaScript transfer versus the existing page, excluding existing assets. Measure the new/changed resources with a stated compression method and include both CSS and JavaScript.
- Added cumulative layout shift (CLS) at most 0.01 and median largest contentful paint (LCP) increase at most 100 ms, compared against the pre-change page on the same browser, viewport, network and CPU profile. Take three runs per version and report medians and environment. If the comparison cannot be made, report it as unverified.
- No animation-attributed main-thread task over 50 ms in the captured trace. Aim for approximately 60 frames per second on a representative device and report drops and device details. These are evaluation targets, not evidence of universal device performance.

### Candidate file changes

- `prototype/checkpoint-11/index.html` for scoped motion hooks and an optional local script reference.
- `prototype/checkpoint-11/style.css` for motion tokens, hero/illustration/reveal rules, and reduced-motion safeguards.
- `prototype/checkpoint-11/login-mobile.css` only if needed for the approved mobile static illustration or login presentation.
- `prototype/checkpoint-11/app.js` only for narrowly scoped lifecycle integration that preserves existing routing, heading focus and validation.
- Optional new `prototype/checkpoint-11/motion-effects.js` for bounded observer, visibility and preference handling. No package manifest or lockfile changes.

The existing three CSS files identified in the D-099 acceptance limitation are outside this proposed edit scope. Do not add branding assets, configuration, sections, authentication behavior, or dependencies.

### Acceptance criteria and verification

1. The inventory above is implemented with the stated timing and fallbacks. Motion is decorative, does not block actions, and ends or resets correctly on rapid navigation, back/forward, visibility changes and live preference changes.
2. With JavaScript disabled, landing content and links remain visible. Existing JavaScript-dependent routing and login simulation are evaluated with JavaScript enabled; motion failures must not prevent those existing functions.
3. Normal and reduced-motion checks cover landing, informational sections and login. Reduced motion leaves content visible, illustrations static and navigation immediate. If an observer or script fails, content remains visible and functional.
4. At 1440×900, 768×1024, 390×844 and 320×640, plus 200% zoom, verify home, sign-in, back, booking/manage links, anchors and mobile menu. Check keyboard order, visible and unobscured focus, existing heading focus, and validation/status announcements. Record a screen-reader spot check with environment, or explicitly report it unverified.
5. Record browser/version, visual review, console and local network results, reduced-motion and visibility behavior, and the budget measurements above. Exercise session-only name/logo preview with fictional values and record remaining embedded iTakda text; do not claim full configurable branding or WCAG conformance from these checks.
6. No GSAP, Motion, Three.js, Rive, or Lenis runtime is loaded. The experiment dependencies, application dependencies, existing SVG, three identified CSS files, and unrelated work remain preserved.
7. Review the observed results against these criteria and report failures or unverified checks. Product Owner review and acceptance follow separately; this specification itself does not grant acceptance.

### Required approval

Product Owner approval of this exact final first-increment section and the bounded prototype implementation scope is required before Phase D. The approval must explicitly cover the informational-section reveal beyond the earlier visual exception, while keeping D-096/D-097 history and D-099's dependency boundary intact. Record approval and its supplied date before implementation.

## Approval and acceptance

- Product Owner approved the exact final first-increment section and bounded prototype scope, including informational-section reveals. Approval date not separately supplied. See D-100 in the Decision Register.
- Reviewer, verification evidence, acceptance disposition, and date: **Pending**.

### Implementation verification submitted for review — 2026-11-10

- Changed prototype files: `index.html`, `style.css`, and new `motion-effects.js`. The existing SVG, manifests, three excluded CSS files, `app.js`, and `login-mobile.css` retained their pre-implementation hashes. No experiment library was requested by the smoke-test page.
- Headless Chrome 156.0.8078.80: landing and login loaded at 1440×900, 768×1024, 390×844, and 320×640. Desktop/tablet illustration used the 10-second loop; mobile used a static illustration after its login entrance. Reduced motion stopped the illustration animation. No page/console errors, failed responses, external requests, or package requests were observed in that smoke test.
- Automated interaction checks covered mobile menu, booking/manage routes, rapid route changes, browser back, login validation, heading focus, several keyboard tabs, a section reveal, live reduced-motion changes, offscreen pause, missing IntersectionObserver, blocked motion script, JavaScript-disabled landing visibility, and fictional session name/logo preview. The local browser used a CSS zoom proxy for 200%; actual browser zoom remains unverified. A screen-reader spot check, hidden-tab behavior in an actual background tab, and a representative low-power device remain unverified. Keyboard testing is limited and does not establish accessibility conformance. Existing initial heading focus starts forward Tab navigation after the header; reverse navigation and skip-link discoverability require further review.
- Gzip level 9, summing individual CSS/JS resources, measured 21,789 bytes before and 22,843 after, an increase of 1,054 bytes (target ≤15 KB). In headless Chrome at 1440×900, 4× CPU slowdown, 40 ms latency, 200,000 B/s download and 93,750 B/s upload, three-run median LCP was 1,620 ms before and 1,736 ms after (+116 ms, exceeding the 100 ms target). A repeat measured 1,896 ms before and 1,848 ms after (−48 ms). The illustration was the LCP element in the repeat. This variation does not establish a reliable LCP pass. Median CLS was approximately 0.000011 in both versions in both comparisons. Long tasks above 50 ms occurred in both versions; attribution to animation is unverified. A separate unthrottled, headless two-second frame sample averaged 58 fps with two intervals over 33 ms; it is not representative-device evidence.
- Sampled contrast ratios were 6.21:1 for the hero primary-button text and 14.08:1 for the hero heading. These two samples are not a complete contrast or WCAG audit. The approved iTakda illustration and embedded branding remain a fictional fallback, not complete client-configurable branding.
- Evidence artifacts, including screenshots, scripts, and JSON output, are in `C:/Users/J/.codex/visualizations/2026/11/10/01a1c3ad-c921-7203-8d24-5d1ad1ada9ed/`. Implementation and Checkpoint 11 acceptance remain pending Product Owner review.
