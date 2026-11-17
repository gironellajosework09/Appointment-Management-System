# Checkpoint 11 — Provisional Design System and Accessibility (Stage 2)

> **D-098 prospective process note (2026-11-10):** Retained as an unfinished, unaccepted design
> baseline. Existing evidence and review limitations remain unchanged. Future design improvements
> proceed through authorized feature-level SDD work; this note does not accept or complete
> Checkpoint 11 or expand D-096/D-097.

| Field | Value |
|---|---|
| Status | **Unfinished, unaccepted design baseline; Product Owner acceptance not recorded** |
| Historical gate context | Gate 2 was IN PROGRESS at D-098; former Gates 3–7 were planned stages |
| Authority | D-093 and Product Owner's Midnight Indigo × Sunset Orange brief; documentation only |
| Companion | [Stage 1 annotated screens and interactions](CHECKPOINT-11-SCREENS-AND-INTERACTIONS.md) |

## 1. Basis, purpose and approval boundaries

**Confirmed in source records:** Requirements Specification v0.8 and Traceability revision 1.2 are approved development-stage assumptions under D-094/D-095, not representative validation; v0.7/revision 1.0 remain historical. D-093's historical package included a reusable visual system, responsive/accessibility design, annotated MVP screen/state coverage and a connected representative prototype with recorded design-review findings. NFR-007/AC-006, Charter S-7, D-052/D-068/D-069 set **WCAG 2.2 AA as a target** for applicable core public and administrative workflows on desktop/mobile in current and previous stable major releases of Chrome, Edge, Firefox and Safari. No achieved conformance is claimed. NFR-003/009/011 require scoped authority, privacy minimization, accountability and necessary audit; D-045 separates QR lookup from identity and attendance; D-051/D-074 govern controlled roster minimum fields. Security/data-integrity review and separately authorized implementation remain required where applicable under D-098; Checkpoint 11 is not accepted or completed.

**Provisional design choice:** a hybrid **Midnight Indigo navigation / light workspace**. The dark area is a clear client-scoped wayfinding frame; the work surface stays almost entirely white/off-white for long forms and dense front-desk lists. This intentionally follows the Product Owner's brief even though generic app-screen aesthetic guidance tends to prefer a light sidebar. The design is premium through typography, alignment and careful negative space rather than saturation, gradients, ornamental icons or repeated cards. Orange is a scarce **meaningful emphasis** (for example a single highlighted booking opportunity or a carefully chosen call-to-action), **never** a universal button, error, warning, or attendance signal. Indigo remains the ordinary primary action. These are proposed design tokens and rules for prototype evaluation, not installed assets or implemented CSS.

## 2. Color system, proportion and preliminary contrast

### 2.1 Owner-selected primitives and proposed semantic use

| Primitive (owner baseline) | Hex | Proposed role, not universal permission for every text/surface pair |
|---|---|---|
| Midnight Navy | `#11113B` | Dark sidebar ground; contrast anchor for occasional orange emphasis and white text |
| Deep Indigo | `#252264` | Dark nav selected surface; secondary strong brand text where appropriate |
| Royal Indigo | `#4944A8` | Ordinary filled primary button, links and light-workspace keyboard focus |
| Sunset Orange | `#E97932` | Limited emphasis on meaningful opportunity/action or selected data, **dark label required** |
| Soft Apricot | `#FFF0E4` | Small supportive highlight surface with Ink Navy copy, not orange copy |
| Canvas White | `#F7F8FC` | Main workspace ground |
| White | `#FFFFFF` | Form/table/print surface and primary text on dark nav |
| Ink Navy | `#25283E` | Main workspace headings, body text, labels and orange-button text |

Proposed **role mapping**: `surface.canvas` Canvas White, `surface.panel` White, `text.primary` Ink Navy, `nav.background` Midnight Navy, `nav.selected` Deep Indigo with White text and a visible current-page marker/label, `action.primary` Royal Indigo with White text, `action.secondary` White with Ink Navy text and an independently verified discernible boundary, `accent.emphasis` Sunset Orange with Ink Navy (or Midnight Navy) text, `surface.emphasis` Soft Apricot with Ink Navy text. Links must be distinguishable from nearby plain text by more than hue (underline or clearly named link affordance). `focus.light` Royal Indigo on White/Canvas, `focus.dark` White on Midnight Navy; make the focus indicator visible against both its inner and outer neighboring surfaces at actual rendered sizes. Never use low-opacity text to create disabled or secondary states.

**Semantic status colors are independent of brand.** Provisional *candidates for later measurement*, not approved final tokens: success ink `#247B50` with a pale neutral/green surface; warning ink `#92400E` with a pale neutral/amber surface; error ink `#9A3C32` with a pale neutral/red surface; informational ink `#20557A` with a pale neutral/blue surface. The semantic label **and a descriptive action** carry the message even without color: “Booking confirmed,” “Slot changed,” “Not permitted,” “Result not yet confirmed.” Success is not Royal Indigo, and Sunset Orange must not impersonate warning or error. Candidate semantic foreground/background pairs, muted text, borders, disabled styles and overlay combinations are **unverified** until measured against their actual backgrounds and rendered.

**Proposed color distribution target, not a pixel measurement:** ~75–80% light canvas/white surfaces, ~15–20% dark navigation on desktop, ~3–5% saturated brand accents/controls. On mobile the sidebar collapses, so these percentages are **not** a mobile quota. To avoid harsh blue/orange, never place broad Royal Indigo and orange panels adjacent, never fill table rows with orange, and reserve Soft Apricot for a single contextual inset such as P02's genuine alternatives. To avoid a dull muted-blue impression, keep the exact Royal Indigo on the one ordinary primary action and a clear Midnight Navy frame; use full-contrast Ink Navy for reading instead of desaturated blue-on-blue body copy. No gradient, glow or tinted icon-card grid.

### 2.2 Preliminary hand calculations, **not executed accessibility tests**

For sRGB, each channel `c` on 0–1 is linearized as `c/12.92` if `c ≤ 0.04045`, otherwise `((c+0.055)/1.055)^2.4`; relative luminance is `0.2126 R + 0.7152 G + 0.0722 B`; contrast is `(Llighter+0.05)/(Ldarker+0.05)`. The following **approximate calculations from the stated hex values** assume flat, fully opaque backgrounds without blending, browser antialiasing, shadows or transparency. Threshold comparison is a design screening step only: normal text 4.5:1, large text 3:1, meaningful control boundaries/focus/graphics 3:1; actual usage and conformance require future rendered checks.

| Foreground / background | Approx. ratio | Provisional usage judgement |
|---|---:|---|
| White / Midnight Navy | ~18.0:1 | Appropriate for dark nav primary labels |
| White / Deep Indigo | ~14.1:1 | Appropriate for selected dark nav labels |
| White / Royal Indigo | ~7.8:1 | Appropriate for primary action text |
| Ink Navy / White | ~14.5:1 | Appropriate for ordinary body text |
| Ink Navy / Canvas White | ~13.7:1 | Appropriate for workspace text |
| Ink Navy / Sunset Orange | ~5.0:1 | Candidate for orange emphasis button text; verify in context |
| Midnight Navy / Sunset Orange | ~6.2:1 | Higher-margin candidate for emphasis button label |
| Sunset Orange / Midnight Navy | ~6.2:1 | Candidate small accent text on dark nav, but avoid using hue alone |
| White / Sunset Orange | ~2.9:1 | **Reject for normal-sized button text** |
| Sunset Orange / White | ~2.9:1 | **Reject for normal text and critical non-text icon/border** |
| Sunset Orange / Soft Apricot | ~2.6:1 | **Reject as meaningful text or control boundary** |
| Royal Indigo / White | ~7.8:1 | Candidate light-surface focus/link color; test full focus geometry |

Approximation note: Canvas White luminance is roughly 0.94 and Ink Navy about 0.023; ratios are rounded to one decimal. **Unverified:** semantic candidate pairs, actual rendered focus against composite surfaces, grays/borders, text over selected rows, text on hover/disabled states, forced-colors mode, printed grayscale, screenshot rendering and QR optical scan reliability. Soft Apricot and Canvas White separated from White by tone alone are **not** adequate control boundaries; any critical input outline needs a separately tested ≥3:1 boundary against adjoining colors, plus label/shape. Recalculate when a token or backdrop changes, then verify rendered pixels in supported browsers.

## 3. Typography, spacing and layout foundations

- **Typography candidates:** Manrope for page headings and navigation, fallback `system-ui, Arial, sans-serif`; Source Sans 3 for body, tables, forms and status, fallback `system-ui, Arial, sans-serif`. Candidate selection does **not** authorize download, installation, embedding, a CDN, license adoption or network request. In later approved prototype work, compare actual loaded/fallback metrics and licensing/hosting options before adopting any asset. Do not silently substitute Inter, decorative serif italics or a new font pairing.
- **Proposed scale (CSS px at 100% zoom, design values only):** page heading 28/36 Manrope semibold public, 24/32 Manrope semibold internal; section heading 20/28; subheading 18/26; body and input/table values 16/24 Source Sans 3; secondary/help 14/21 only where still legible; reference and important status at least 16/24. Navigation 15–16/24. No tiny uppercase tracked eyebrow labels, no giant dashboard hero heading; use sentence case. Increase line length restraint for instructional copy (~50–75 characters at desktop), keep form labels short, allow wrapping and 200% zoom. Dates/times and roster numbers use tabular digits where supported; no reliance on a downloaded font for alignment.
- **Spacing tokens, provisional 4px base:** 4/8/12/16/24/32/48; within field label→control 8, field→field 16, card content 20–24, screen sections 32–48. One main column alignment per screen: page title, filter row, table identity column and primary action share a visible left edge. Common internal list row about 48–56 high, controls at least 44 high where feasible for touch, minimum 24×24 CSS px target or adequate separation per WCAG 2.2 target-size exceptions to verify later. Public primary buttons 44–48 high, with clear 8–12 gap between adjacent actions.
- **Grid:** desktop at roughly ≥1100px viewport: labelled ~232px sidebar plus 24–32px workspace gutters; flexible 12-column content up to ~1200px, with forms constrained to readable 1-column width (~640–760px) and search/roster tables using the wider canvas. Tablet roughly 640–1099px: condensed nav via labelled menu/top bar, ~24px workspace gutter, two columns only when each remains readable; table identity/date/action may pair with secondary lines. Narrow phone roughly 320–639px: single column, 16–20px gutters, nav menu and explicit current section, no page-level horizontal scroll; roster/table can use labelled records, and only a genuinely tabular comparison may scroll inside its own framed region. Breakpoint numbers are **proposals to test against content**, not supported-device limits. Keep public P05 confirmation on a single readable sheet at all widths.
- **Density:** one dominant task region per screen. S02 and R01 put the searchable roster/list and the next action first, not a four-KPI dashboard. O01 leads with an actionable failure category/freshness, not invented statistics. A01 puts policy impact alongside edits instead of empty ornamental tiles. No vanity numbers or copied client data in example screens. If actual content is sparse, retain heading and useful next action; do not pad with icon cards. Use consistent 8px corner radius for panels/controls and a smaller 4px status-chip radius; a third larger radius only for a modal if justified.

## 4. Component and navigation contracts tied to screens

| Element and where used | Provisional visual/behavior rule, including state and accessibility |
|---|---|
| Dark sidebar and public navigation (S01–O01; P01–G03) | Desktop dark Midnight Navy sidebar with visible product/client installation context, text-first destinations: Appointments, New appointment, Verify, Daily roster, Reconcile, and role-conditional Settings/Operational signals. Group or fold to avoid overwhelming; no operator destination or default access. Active item: Deep Indigo filled row + White label + `aria-current`/equivalent semantic current location; not a colored left stripe or hover-only marker. Public header instead exposes Book and Manage appointment. On tablet/phone the internal sidebar becomes a labelled menu/drawer with focus containment, Escape/close and trigger focus return; current location stays visible in top bar. |
| Top bar and page header (S02/R01/A01/O01) | Top bar only where it holds real client scope, date/search or current-user context; no decorative bell/avatar filler. One noun title (“Appointments”, “Daily roster”), one optional date/as-of/freshness sentence and the primary work action. Search cannot replace the page title. Sticky header must not obscure focused fields or notices. |
| Buttons, links and confirmations (P04/G03/S06/X01/A01) | One filled Royal Indigo primary per active task, White label; secondary Ink Navy on White with tested boundary; tertiary underlined text. Orange only for deliberately selected emphasis and always Ink/Midnight label, never white text. Destructive/cancellation action uses descriptive copy and separately verified semantic error treatment, not brand orange. `hover` preserves contrast (never fades button), `pressed` changes shape/tone slightly, `focus-visible` has a solid outline and offset, `disabled` remains legible and has a nearby reason; loading says “Checking your booking” rather than replacing label with unlabeled spinner. Do not double-submit an unknown-outcome operation. Confirmation dialog names appointment and consequence; no forced dialog for simple read navigation. |
| Forms and filters (P03/G01/S02/A01/A02/R02) | Visible persistent labels above fields, grouped attendee/booker/actor sections, required/optional indicators derived from policy; never placeholder-only labels. Help text is adjacent and programmatically associated, error is specific and linked, invalid state is not color-only; submit errors summarized and focused. Validate on leaving a field or submit, revalidate after correction, retain safe values. Filter chips name active filters and have a text “Clear filters”; no fake advanced filter categories. Proof entries accept paste and do not echo secrets in errors. A01 shows effective vs proposed values and affected appointments; “Save” applies only after impact review. |
| Calendar, date and slot (P02/G03/S05) | Date picker or labelled date list, with independent keyboard-accessible date/slot controls, visible selected day/time, explicit timezone/period context as approved. Non-bookable dates have an explanation, not merely dimming. Alternatives are real installation-local candidates in a text list; selection is advisory and never claims a hold. On phone use a date control plus vertical time list with touch-sized rows; no swipe/drag requirement. On stale/capacity rejection focus “Time no longer available,” then present fresh alternatives. |
| Cards/panels and status labels (P05/S04/O01) | Few purposeful panels on Canvas White with White content surface and quiet boundaries; text hierarchy carries identity rather than icon boxes. Resting panels use at most a subtle **outer** elevation cue (see §5); no colored left-border cards, heavy shadows or nested-card grids. Booking status, attendance status and reconciliation status are **different named fields**, not a single ambiguous badge. Each label has text and, if used, a semantic shape/tint; a true zero remains “0”, missing data says “Not available”, not an unlabeled dash. |
| Tables, search and daily roster (S02/R01/R02/O01) | Real column headers with scope, text-first identity; date/time and figures align, status labels visible as text; no zebra striping, gradient header band, row of icon-only actions or bulk-action affordance unless an actual approved bulk action exists. Search feedback shows scoped result count and filters; empty view says how to clear filters. Paginate a long result set with current range rather than endless scrolling, but page size is not fixed here. Mobile reflows records with explicit field labels; roster print retains required fields even if on-screen columns collapse. |
| Drawer, dialog and menu (S04/X01/A02) | Use a full page or drawer for details that require context; short confirmation dialog only for consequential action. Dialog has title/consequence, initial focus on heading/least destructive action as appropriate, Escape and close control, trapped focus only while modal, return focus to trigger. A rejected permission cannot be bypassed by reopening the drawer. Never put unresolved paper conflicts in a dismissing toast. |
| Notification and banners (P04/G03/R02/O01) | Inline persistent result adjacent to the task is primary. A short non-action success notice may supplement established success; action-bearing, error, conflict and unknown-outcome notices persist until addressed and point to the permitted next step. Use status text and accessible announcement, not color, animation or a generic “Something went wrong”. System/monitoring freshness is a visible timestamp, not a “healthy” claim on an empty/error screen. |
| QR/reference display and verification (P05/S03/S06) | Eligible QR is dark modules on a plain White area with unclipped quiet margin; adjacent selectable/copyable human-readable reference and explicit “Lookup only; staff will check identity if required.” Payload, format, size, lifecycle, camera dependency and scan behavior remain QR-L01–L09 decisions; do not make screenshot/print QR an access credential. Scan can accelerate S03 but **manual typed reference** always works without camera; denied/no camera state points to it. S03 result never contains a “scan marks arrived” control. A separate visit to S06 performs explicit authorized attendance after any required independent check. |
| Print confirmation and roster (P05/R01) | Print mode removes nav and decorative shadow, uses black/dark ink on White with readable hierarchy and repeatable page headers. P05 keeps actual status, reference, service, date/time, location, arrival, management and QR/reference guidance together and screenshot-friendly without clipping. R01 repeats as-of snapshot identification, minimum D-074 fields, print scope and page number; avoid printing unnecessary contact or proof data. Black-and-white legibility, physical custody, QR scan size/paper quality and disposal require later evaluation and policy. |

### 4.1 Feedback and outcome model

| Meaning | Screen treatment | Required distinction |
|---|---|---|
| Initial/loading | Skeleton or plain labelled progress in the future content area; labels/heading visible, no shimmering gradients or page jump. | Searching availability is a read; submitting a booking may have already taken effect. |
| Empty/unavailable | Explain what is absent and give the next valid action: P02 actual local alternatives or change search, S02 clear filters, O01 no events **in this scope**. | “No appointments found” does not imply all clients have none. |
| Invalid/rejected | Field-specific fix, or safe no-change reason with permitted next action; authorization failure cannot disclose another booking. | A **known** rejection is not a lost response. |
| Stale/conflict | Persistent current-vs-shown comparison where authorized; P02 require reselection, G03 preserve old booking until accepted, R03 retain paper observation vs newer record. | Do not silently resolve a prohibited duplicate, capacity collision or stale print. |
| Established success | Render actual returned state/reference; P05 confirmation for successful booking/cancel/reschedule, S06 actual status, R02 actual per-item counts. | Supervisor approval only supplies exception context, not automatic final success. |
| Recoverable failure | State which read/service failed, keep safe context, offer authorized retry for **read** or status inquiry. | Do not turn failed monitor load into “all clear.” |
| Unknown command outcome | Persistent “Result not yet confirmed” with scope-safe check/follow-up; disable **blind new submission**, retain entered safe information and original intent context if available. | Must establish prior authoritative outcome **and same-intent relationship** before any repeat (D-090/WF-X02/IF-I04). An unknown outcome is neither success nor rejection. |

## 5. Restrained neumorphism, motion and responsive usability

**Neumorphic depth is an optional surface cue, never the control boundary.** On White cards over Canvas White, at most one very low-opacity, short downward shadow for a selected floating or raised surface; a border *or* shadow on a resting panel, not both as decoration. Inputs, disabled controls, focus rings, error boundaries, QR quiet zone and print always use explicit flat contrast/shape. No inset shadow that makes a field look disabled, no embossed dark-nav text, no raised orange KPI tiles, no glass blur, glow, grain, gradient surface or colored left-border card. In high-contrast/forced-colors conditions remove decorative elevation and retain visible native/system boundaries and current/focus indicators. A later visual review should compare a flat variant; if depth harms scanability, remove it.

**Motion is task feedback:** a restrained 150–200ms opacity/position transition for a menu or dialog, never a scroll-triggered fade-in, cursor beam, perpetual shimmer or motion-dependent status. Loading indicators have accompanying text; no control fades on hover. Under `prefers-reduced-motion: reduce`, eliminate travel and nonessential animation without hiding content or delaying success/error announcement. Confirmation should be fully legible without animation or waiting. Tablet and mobile follow §3's content-first reflow; touch does not replace keyboard access. At 320px, 200% zoom and large text, actions wrap/stack without overlapping sticky UI, QR quiet zone or row labels; internal long references remain selectable and can wrap or use accessible overflow within their own region. No fixed orientation.

## 6. Accessibility interaction and future verification contract

| Scenario linked to Stage 1 | Required proposed behavior and future review criterion |
|---|---|
| P01→P04 and G01→G03: forms/steps | One `h1` per screen, visible step/route label and back action; use semantic labels, fieldsets for person roles, explicit error summary linking to fields. When policy changes field requirements, announce that changed requirement before submission. Autofill/paste support where appropriate; no cognitive-only proof challenge is presumed. After failed submit move focus to error summary, after success to P05 title/actual status. Verify keyboard and screen-reader feedback and no redundant re-entry where possible. |
| P02 date/alternatives | Label date, current selection and slot time including locale/time context; arrow-key date navigation only if a compliant calendar widget is later selected, while simple labelled date input/list remains keyboard-operable. Announce refreshed available results without hijacking focus; expose unavailability in text. Check 200% zoom, mobile portrait/landscape and no horizontal page overflow. |
| S02/S04/R01 table/detail | Use semantic table with headers/scope for tabular views; don't add `role=grid` unless implementing its keyboard behavior. Mobile summary has explicit field labels and preserves row-to-detail back focus/scroll. Authorization scope is not just a hidden button. Test keyboard-only dense rows and long names. |
| S03→S06 QR and attendance | Manual reference input remains available when no camera, camera denied, decoder unavailable, or printed/screenshot code unreadable. Text announce lookup outcome and then move to **separate** authorized status action; no QR event alone announces identity, arrival or completed service. Test that the scan result has no implicit attendance mutation and focus lands on the correct result. QR optical scanning is a later hardware/browser test, not achieved here. |
| G03/X01/R02/R03 consequential outcomes | Before action, announce the object, proposed change and actual consequence; reject/unknown/conflict status remains persistent and readable. “Approve exception” means final validation still required. On R03 compare “Paper” vs “Current” with headers, not two colors. Dialog closes to trigger; batch summary conveys accepted/conflicted/unresolved/rejected counts separately. |
| P05/R01 print | Screen-reader reading order exposes reference/status/time/instructions and QR purpose as text. CSS print layout preserves necessary fields and meaningful headings, keeps copy free from dark nav, and does not depend on color. Controlled roster custody/disposal and print accessibility are later policy/review subjects. |

**Focus and targets:** use visible `:focus-visible` outlines rather than shadow-only focus; no positive `tabindex` sequencing. When a view, error summary, drawer, dialog, filtered result or authoritative status changes, focus logically without trapping it in a nonmodal notice; maintain visible focus when sticky navigation is present (WCAG 2.4.11). Ensure controls and adjacent targets meet applicable WCAG 2.5.8 minimum geometry or spacing exceptions; propose 44px comfortable touch controls rather than claiming every table cell is a 44px target. Important form, status and icon graphics require measured non-text contrast on actual surfaces (1.4.11). Color never exclusively signals selection, status, error or permission. Print and screenshots retain real text at readable size rather than a raster-only QR.

**Future authorized validation, not performed in Stages 1–2:** connect representative Stage 3 prototype journeys specified in the companion §4; perform Product Owner/usability and accessibility **design reviews** with recorded findings, assumptions and revisions under D-093. After separate implementation authorization, verify actual typography/font loading, responsive screens at 320px/390px/tablet/desktop and 200% zoom, keyboard-only and screen-reader workflows, contrast on rendered states, reduced motion, print/PDF, real QR readability and manual fallback, and the D-069 current/previous-stable Chrome/Edge/Firefox/Safari policy on applicable desktop/mobile environments. Assign evidence roles per D-072; an automated contrast checker alone cannot prove WCAG conformance. Gate 3 reviews actual security/privacy/data-integrity design before Gate 4 code; genuine product-fit, qualified independent privacy/security and release evidence remain later obligations.

## 6.1 v0.8 registered-customer accessibility design coverage

> D-094 and Requirements v0.8 are approved. Apply the existing NFR-007/D-052/D-069 WCAG 2.2 AA
> design target to registration, sign-in, recovery, dashboard, authorized appointment
> list/detail/change, empty/denied and sign-out states. Preserve guest access and the shared
> booking journey. This is design coverage only; it claims no accessibility conformance and
> chooses no authentication/recovery mechanism.

Review labels, keyboard and screen-reader feedback, focus, error states, mobile reflow and
200% zoom for the added screens under the current applicable browser policy. Appointment
visibility and account-to-appointment association remain unresolved; accessibility design
must not reveal restricted appointment data. No prototype acceptance or checkpoint status
change is implied.

### 6.2 Per-flow accessibility and responsive coverage

The rows below extend existing Stage 2 interaction rules to the account-specific screens in
the Stage 1 v0.8 addendum. They specify review coverage, not executed WCAG testing.

| Screens / interaction | Design coverage and future review evidence | Requirements / WCAG references |
|---|---|---|
| P00, CA01 registration toggle | Guest route is always available; disabled registration omits only new-signup action while preserving existing verified sign-in. Visually identify the current route; keyboard activation, visible focus, screen-reader name and text label for the toggle/state. | FR-019; BR-012; AC-016/020; 2.1.1, 2.4.3, 4.1.2 |
| CA01 registration / verification | Persistent email/password labels, required-field indication, password-manager/paste support, associated error/help text, focused error summary and explicit pending/verified/delivery-failure text. Never encode success solely by color or email receipt. | FR-020; NFR-003/007; AC-019/024; 1.3.1, 3.3.1/3.3.2, 3.3.8, 4.1.3 |
| CA02 sign-in / recovery | Keyboard-operable fields/actions, clear non-enumerating errors, visible focus after route/state change, no cognitive-only proof assumption; recovery completion/failed-delivery announced without revealing appointment records. | FR-020; NFR-003; AC-019/024; 2.1.1, 2.4.3, 3.3.1, 3.3.8, 4.1.3 |
| CA03 dashboard / list / empty / denied | Semantic headings and list/table structure; explicit upcoming vs retained past; field labels survive mobile reflow. Empty and denied states offer safe next actions and do not disclose unauthorized records. | FR-019/021; NFR-003/007/009; AC-015/019/025; 1.3.1, 1.4.3, 1.4.10, 2.4.6, 4.1.3 |
| CA04 detail / change / unknown outcome | Name the appointment, selected action and deadline in text; cancellation/rescheduling require explicit action; old/new time stay readable at 320px/200% zoom. Unknown outcome keeps persistent text and a status-check path, not a focus-stealing toast or blind-retry control. | FR-007/010/019; AC-009/026; 1.4.3, 2.1.1, 2.4.11, 4.1.3 |
| CA05 link / dispute / hold / reversal | Clearly distinguish claimed vs linked vs held/reviewed state without color-only cues. Keep proof entry and reviewer-only controls keyboard operable; do not reveal unrelated appointments through error copy. | FR-021; NFR-003/009; AC-015/017/021/025; 1.4.3, 3.3.1, 4.1.2/4.1.3 |
| CA06 profile / deactivation | Separate profile edit from booking edit; announce preservation of appointments and loss of account access; destructive action names its effect, has an accessible review step, and returns focus to a logical destination. | FR-019/022; NFR-009; BR-012; AC-023/025; 2.4.3, 3.3.2, 3.3.4, 4.1.3 |

**Responsive review matrix:** retain one-column form composition and no page-level horizontal
overflow at 320px; check 390px phone, tablet and desktop; reflow authorized appointment rows
to labelled field summaries; permit 200% zoom without obscuring focus or actions; maintain
WCAG 2.2 AA target size/spacing and the established desktop/mobile supported-browser policy
(current and previous stable Chrome, Edge, Firefox and Safari). User text expansion, reduced
motion, print/screenshot confirmation and forced-colors behavior remain visual-review cases.
These checks are planned; the existing screenshots are not accessibility test results.

## 7. Outstanding Product Owner decisions and design risks

**Approved v0.8 design coverage (D-094/D-095):** Apply WCAG 2.2 AA design intent to
registration-toggle and existing-account states, verification/recovery, scoped guest access,
individual linking and dispute, proxy restrictions, service fields, profile editing,
deactivation, email delivery failure, cutoff denial and atomic reschedule unknown outcomes.
Present denied/contested/deadline states in text, announce established outcomes without
implying email delivery, preserve keyboard focus and safe status-check context, and avoid
disclosure in recovery or error copy. This records design coverage only; no accessibility test
or Checkpoint 11 acceptance is claimed. Proof, recipient, retention and service-policy details
remain as recorded in effective Requirements v0.8 §6 and ACCT-L01–L08.

| Open matter | Screens/components affected and required boundary |
|---|---|
| Q-019/Q-021 scheduling, capacity/resource, duplicate key/window/warning/blocking, alternatives | P02/P04/S05/A01; labels, field requirements and conflict language must reflect effective client policy, never a universal default. |
| D-079/Q-020 change cutoff | G03/S04/A01; cutoff disposition before final Gate 2 architecture approval; D-089 and effective v0.8/AC-009 exclude cancellation/no-show penalties. Unrelated service fees remain undecided. |
| Guest proof, proxy/recovery, staff Q-009/Q-018 permissions, QR-L01–L12 and attendance corrections | G01/G02/P05/S01/S03/S06; no proof mechanism, QR lifecycle, correction graph, required camera dependency or operator admin role has been approved. Gate 3 must review security/privacy choices. |
| Batch conflicts, snapshot custody, printing/disposal | R01–R03; no overwrite or offline sync. D-079 requires physical roster handling/disposal decision before Gate 6 release approval. |
| D-079/Q-015 retention and operator exceptional duration/break-glass | G01/A02/O01/print/audit evidence; require Product Owner disposition before Gate 3 security/privacy design-review approval. No operator portal is required. |
| Q-007/Q-008, numeric Q-016/Q-022, D-069 browser evidence | UI delivery/browser compatibility and operational feedback depend on later approved feasibility; Q-016/Q-022 disposition before final Gate 2 architecture approval. D-091 performance/recovery numbers remain evaluation candidates, not targets. |
| Visual/accessibility risks | Orange-with-white text fails preliminary contrast; muted borders/secondary text and semantic colors are unverified. Dark sidebar against light canvas may dominate on tablet; fallback-font metrics may shift forms/tables. Real print and screenshot legibility, 200% zoom, keyboard focus, QR physical size and screen-reader states remain untested. |

No frontend package, font, asset, browser prototype, token file, database, application source, CEAP environment, vendor or deployment arrangement is selected, installed or tested by this design proposal. Final design tokens and any architecture changes require Product Owner disposition in their appropriate gates; this document is not approval of Checkpoint 11 or Gate 2.
