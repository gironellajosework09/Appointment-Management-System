# Checkpoint 11 — MVP Screens and Interactions (Stage 1)

> **D-098 prospective process note (2026-11-10):** Retained as an unfinished, unaccepted design
> baseline. The existing status and evidence history is preserved; this note does not accept or
> complete Checkpoint 11. Future design improvements proceed through authorized feature-level SDD
> work. D-096/D-097 remain limited to their recorded fictional-prototype scopes.

| Field | Value |
|---|---|
| Status | **Unfinished, unaccepted design baseline; Product Owner acceptance not recorded** |
| Historical gate context | Gate 2 was IN PROGRESS at D-098; former Gates 3–7 were planned stages |
| Authority | D-093 Checkpoint 11; this document does not approve policy, prototype implementation, architecture or a gate transition |
| Source baseline | Requirements Specification v0.8 and Traceability revision 1.2 under D-094/D-095; v0.7/revision 1.0 are preserved historical baselines |
| Companion | [Stage 2 design system and accessibility](CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md) |

## 1. Reading contract and scope

This is annotated MVP screen and applicable interaction-state coverage in text, not a set of rendered wireframes or a completed high-fidelity prototype. Each numbered screen is a provisional user-facing composition. Existing `WF-*` and `IF-*` identifiers refer respectively to [Detailed System Workflow Design](../architecture/DETAILED_SYSTEM_WORKFLOW_DESIGN.md) §4 and [Interface & API Design](../architecture/INTERFACE_API_DESIGN.md) §2; those fingerprinted drafts remain working designs, not approved routes or endpoints. Screen IDs and compositions are design proposals, not new requirements or client-policy values. Requirements v0.8/revision 1.2 are effective development-stage assumptions under D-094/D-095, not representative validation. The recorded Checkpoint 11 disposition remains unfinished, unaccepted, and not completed; D-098 supersedes routine Gate 2 progression prospectively but does not alter this baseline's status or evidence.

**Approved-in-scope constraints:** independent installation per client, account-free guest booking and authorized guest changes, assisted/proxy/walk-in work, actual installation-local alternatives, distinct QR lookup/identity procedure/attendance action, supervisor-only reasoned exceptions, controlled minimum daily roster, attributable batch reconciliation, essential privacy-conscious operational visibility and accessible confirmation (D-020/D-042–D-051/D-059–D-075/D-089/D-090; active FRs). Ordinary cancellation and no-show records remain; **MVP cancellation/no-show penalties are excluded by D-089**. Existing v0.7 fee-open wording awaits separately approved versioned reconciliation; unrelated service fees are undecided. No charge/penalty UI is specified. FR-009 and FR-011 remain deferred. No public accounts, mandatory outbound messages/SMS/OTP, payments/deposits, waitlists, multiple branches, advanced analytics/exports, offline booking sync, queue numbers, optional staff notes or routine typing-correction feature (D-042/D-056–D-058/D-076). There is no required operator portal: UJ-004/FR-012 concern authorized technical operations, not permission to invent a client-record console.

### 1.1 Common interaction and wireframe rules

- **Page composition:** public pages use a quiet service header → one page title and step context → primary task → contextual help/summary → one primary action and a back path. Internal pages use client-scoped navigation → page title, date/scope and freshness → search/filter or work item → relevant actions → contextual result. Details open only after authority is established. Brand identity and component specifications are in the companion document.
- **Screen states apply to every applicable surface**, including entry/return routes: `I` initial, `L` loading/submitting (label task and prevent accidental duplicate activation), `E` empty/no match or no availability, `V` invalid input, `S` established success, `R` authoritative rejection/permission denial, `T` stale data or changed appointment/policy, `C` conflict/duplicate/capacity, `F` recoverable technical failure, `U` **unknown outcome after a submitted state change**. A screen's state line below names its specific treatment; `U` does **not** mean rejected or successful, and no success confirmation or new effect is shown until the prior authoritative outcome **and same-intent relationship** are safely established (WF-X02; IF-I04; D-090). A mere read failure is `F`, not `U`. A previously accepted command may have succeeded despite a lost response. Until it is established, offer only a non-replaying status check/authorized staff follow-up, with minimal correlation information if safely available. Never tell users to submit the same booking again blindly.
- **Server is authoritative:** apparent availability is a candidate, not a hold. Every accepted booking/change (including staff and paper walk-ins) rechecks effective capacity, resources/buffers, duplicates, status, authority and applicable policy at the final integrity boundary (WF-X01; IF-I03). Each established success renders the actual returned reference/status; a rejected request leaves no partial booking. Privacy-limited rejection must not expose another person's appointment. A configured duplicate warning is non-punitive; it cannot override a prohibited duplicate (BR-002).
- **Input feedback:** explicit labels, required/optional indication according to the approved per-service field set, clear format hints, inline errors plus a linked error summary on submit; client-side feedback never replaces server validation. Preserve entered non-secret inputs after `V`, `T`, `C` or recoverable `F`, but refresh authority/availability before re-attempt. Never render a proof secret in a confirmation, printout, status message or URL proposal.
- **Keyboard and responsive contract:** meaningful page heading, skip-to-content, logical Tab/Shift+Tab, Enter/Space for controls, visible focus and focus moved to the page title on route change, error summary on failed submit, and resulting status/confirmation on success. Calendar has labelled date list and keyboard-selectable slots, not drag/hover-only input; QR scan always has manual reference entry. On narrow screens use one content column; internal table rows reflow into labelled summaries without losing status, date, reference or action; drill-in preserves filter and scroll context. Dialog focus returns to its trigger after close. Print is a separate uncluttered presentation, never a screenshot of a dark sidebar. These are design intentions for later testing, not a conformance claim.
- **Authorization assumption:** guest discovery may show publishable service/availability only. Booking and every state-changing guest request require approved scoped authentication (without a public account); view/management and recovery need **separately established appointment-scoped proof**, never reference or QR possession alone (NFR-003; D-085(1)/D-090). Staff, supervisor and client-admin actions require individually attributable assigned permissions; hidden/disabled controls are UX cues, not authorization. No operator client-record access is implied (D-034/D-075).

### 1.2 Navigation map (proposed destinations, not URL or endpoint commitments)

```text
Public service entry P01 → availability P02 → booking details P03 → review/submit P04
                                  ↑ alternatives ← stale/full rejection ┘       ↓ accepted
                              P02 ← change destination G03 ← management G02 ← P05 confirmation
Public entry/confirmation → G01 claim or recovery → [proof established] G02 → G03 → P05 (actual change)
                                              └ [not established] safe denial / approved staff help

Internal authorized entry S01 → S02 search ───────────────→ S04 appointment detail
                             ↘ S03 QR/reference lookup → S04 (permitted detail) → S06 explicit attendance
                             ↘ S05 assisted/proxy/walk-in → P02 candidate → P03/P04 staff context → P05
                             ↘ R01 daily roster/print → R02 restored-service batch → R03 conflicts/unresolved
                             ↘ O01 essential operational visibility
S04 permitted cancel/reschedule → G03 staff context → P05 actual change
S04 or S05 configured exception needed → X01 supervisor review → originating action revalidated
Client administrator S01 → A01 service/policy configuration; A02 internal staff access
```

`P05` is a single outcome-specific confirmation layout, not a claim that a cancelled booking retains an active QR. `G03` is an action-specific cancel/reschedule composition used only after scoped proof or staff authority; staff routing does not require guest proof. Staff-assisted and walk-in reuse the booking steps but display the actor, booker/contact and attendee separately. Roster print is a view of `R01`, not a writable offline screen. The operator support path WF-O01/IF-O01 and installation recovery WF-O02/WF-X04/IF-O02 are **boundary/evidence obligations** handled through separately approved procedures, not navigation to a presumed operator portal; client-facing monitoring `O01` is a scoped review of operational signals, not provider access.

## 2. Annotated screen inventory

The original `trace` lines below use the D-081 v0.7 identifiers plus Workflow §4 and Interface §2; the v0.8 amendment trace in §4.2 uses the approved v0.8/revision 1.2 identifiers. `I/L/E/V/S/R/T/C/F/U` are the state key in §1.1; `—` means a state is not an applicable operation outcome (e.g., unknown booking state during a read). Where a screen groups `F/U`, `F` is a known failure before a protected command is submitted (or a safely established no-effect failure); `U` is a submitted command whose result cannot be established. **Never** show a generic retry for `U`. Content order is top-to-bottom wireframe annotation. All screens inherit §1.1's accessible interaction, validation and feedback rules; the specific keyboard/mobile notes below call out additional behavior. “If configured” never supplies a default value.

### Public booking

**P01 — Service discovery.** Actor: public guest/proxy (read-only) or permitted staff. Entry: public entry or back from P02; exit: P02 for selected service, G01 for managing a booking. Layout: installation/service context → service names, location and available arrival guidance → “Choose service” and “Manage an appointment.” Input: service selection only; unavailable/retired service produces a safe notice, not a hidden default. States: `I/L` load publishable offerings; `E` no configured bookable services, no invented times; `R` unsafe/unpublished service; `T/F` refresh or contact the client; `S` advances with service, **not a reservation**; `V/C/U` —. Keyboard/mobile: service choices are labelled buttons/radios in reading order and stack as text-first rows. Trace: FR-001/018; UJ-001; BR-005; AC-001/013; WF-P01; IF-P01. Open: service publishability, unsafe configuration and actual location copy (Q-019; WF-A01).

**P02 — Date, slots and alternatives.** Actor: guest/proxy or permitted staff. Entry: P01, G03 or P04 after stale/full; exit: P03 for a candidate, back to P01. Layout: service/current installation and time context → labelled date control with available/unavailable days → time slots as text buttons (timezone/period displayed) → actual nearby alternatives in the same installation when preferred time unavailable → “Continue.” Input: desired date/slot; reject missing, invalid, past or non-bookable selections under effective client policy, without assuming a search radius. States: `L` loading slots with service/date visible; `E` “No times available for this selection” plus actual local alternatives or honest none; `V` date/slot hint; `T/C` previously shown slot no longer available, refresh alternatives and require reselection; `F` retry search, no promise of a booking; `S` candidate selected, no hold; `R` policy/unsafe configuration notice; `U` —. Keyboard/mobile: native date input or accessible date list plus Prev/Next period and independently Tab-able slot buttons; mobile switches from grid to vertical slot list, with no pointer-only calendar cell. Trace: FR-001/002/018; UJ-001; BR-001/005; AC-001/013; WF-P01/P05; IF-P02/IF-P03. Open: alternative search scope, time-zone display and configurable schedule/resource rules (Q-019).

**P03 — Booking participants and required details.** Actor: guest/proxy or authorized staff in assisted/walk-in context. Entry: P02 or S05; exit: P04, back to P02. Layout: chosen service/time summary → attendee details → booker/contact details only as required, with explicit “booking for someone else” distinction → service-specific required fields and approved instructions. Input: only policy-required attendee/booker/contact and proxy evidence, if approved; field labels and required markers derive from the effective approved service policy. No compulsory public account, universal phone number, document upload or fixed proxy proof. States: `L` field requirements resolving; `E` no valid candidate → P02; `V` missing/malformed required or inconsistent participant data, preserve input; `T/C` changed requirements or slot, review/reselect; `R` proof/policy denial without revealing other appointments; `F` keep draft locally in current interaction only as appropriate, no promise of persistence; `S` go to review; `U` — (no booking submitted). Keyboard/mobile: one-column labelled sections; toggling proxy section moves focus to its heading, does not copy attendee identity into booker implicitly. Trace: FR-002/003/013; UJ-001/005; BR-002/006; AC-001/010; WF-P02/P05; IF-P03/IF-P04. Open: minimum fields, proxy/attendee-presence policy, duplicate identity and scoped guest booking mechanism (Q-015/Q-021).

**P04 — Review and submit booking.** Actor: guest/proxy or permitted staff (actor shown separately for staff). Entry: P03; exit: P05 only on established acceptance, P02 for reselect, P03 to edit. Layout: service/date/time/location, attendee vs booker summary and applicable policy guidance → “Confirm booking” (single primary) → edit links; never promise reservation before acceptance. Input: explicit intent; validate scoped actor, current required fields and selected candidate server-side. States: `L` “Checking your booking” with no parallel submit; `V` linked field errors → P03; `R` unauthorized/invalid or configured prohibited duplicate, no new booking; `T/C` full slot, duplicate warning/blocking or policy change shown distinctly with actual alternatives; `F` known failure before submission, keep review and offer a safe next step; `U` response lost after submit, “We can't confirm the result yet,” status/follow-up only, **no rebooking button**; `S` established accepted reference → P05; `E` —. Keyboard/mobile: edit/back links before submit, focus status on resolution; mobile summary precedes full-width action. Trace: FR-002/003/008/010/013/018; UJ-001/005; BR-001/002/006; AC-001/002/005/010/013; WF-P02/P05/X01/X02; IF-P04/P05/IF-I03/IF-I04. Open: duplicate warning copy/allowed continuation, authoritative-result recovery, guest proof/intent correlation (D-090; Q-021).

**P05 — Actual booking/change confirmation and eligible QR.** Actor: successful guest/proxy claimant within approved presentation scope or permitted staff. Entry: established accepted P04 or G03 result; exit: P01 or G01/G02 via **separate** scoped proof, print. Layout: outcome-specific heading (“Booking confirmed,” “Appointment cancelled,” “Appointment rescheduled”) → unique reference and actual status → service, accepted date/time, location and arrival instructions → eligible QR presentation **only if authorized/eligible** with human-readable reference and “For appointment lookup at the desk; not proof of identity or attendance” → management instructions → Print. Cancelled output must not present an active QR; screenshot view keeps all essential text visible without side chrome or hidden tabs. Input: none; QR issuance/eligibility not inferred from confirmation alone. States: `L` retrieving authorized accepted outcome; `E/R` no permitted confirmation/QR, safe access guidance; `T` refresh status if a later change supersedes displayed details; `F` accurate fallback text and reference only if authorized and established; `S` actual accepted outcome; `V/C/U` — (`U` belongs on the submitting screen, never display a success card for uncertainty). Keyboard/mobile/print: text before image, QR never the only reference, no scan required to read instructions; dedicated light QR region and printable content in one narrow column. Trace: FR-005/010; UJ-001/003; BR-003; AC-002/009; WF-P02/P03/P04; IF-P05/P06. Open: QR issuance, eligibility, lifecycle/recovery, proof for later access (QR-L01–L09).

### Account-free management

**G01 — Claim appointment / request recovery.** Actor: guest or proxy claimant; authorized staff help only under an approved procedure. Entry: public header or P05 management instructions; exit: G02 only after independent scoped proof; safe denial or separately approved staff-mediated help otherwise. Layout: “Manage an appointment” → reference **as locator** → approved independent proof instructions/inputs (placeholder until decided) → “Continue”; separate “Can't access your details?” route. No QR/reference-only access, SMS/OTP or public login presumed. States: `L` checking claim without revealing existence; `V` missing/invalid proof input if policy defines one; `R/E` same non-enumerating safe response; `F` recovery help without data disclosure; `T` proof expiry only if later approved; `S` scoped authority established; `C` ambiguous claimant held for approved review; `U` if recovery evidence is state-changing and uncertain, no repeated grant assumption. Keyboard/mobile: paste allowed, clear labels/instructions, focus proof error without quoting secret. Trace: FR-005/007; NFR-003/009; UJ-003; BR-003; AC-002/009; WF-P03; IF-P07/P08. Open: claimant/attendee/proxy entitlement, proof, recovery channel, expiry, staff mediation, disclosure (D-085(1)/D-090; Q-015); FR-012 does not authorize an operator recovery console.

**G02 — Scoped appointment summary.** Actor: successfully proven appointment-scoped guest/proxy or permitted staff (staff normally uses S04). Entry: G01; exit: G03 eligible action, P05 eligible presentation, P01. Layout: permitted reference/status, service/time/location/arrival, QR link only when eligible, policy-eligible “Cancel”/“Reschedule” with visible reason if unavailable. Input: none. States: `L` verifying scope/current state; `E/R` generic no-permitted-view response; `T/C` changed or cancelled state, show permitted current status and remove inapplicable actions; `F` refresh help, never show unverified cached personal details; `S` scoped current summary; `V/U` —. Keyboard/mobile: single vertical detail list and text-labelled actions, focus refreshed status. Trace: FR-005/007/010; UJ-003; BR-003/005/008; AC-002/009; WF-P03/P04; IF-P06/P07. Open: which claimant sees which details, cutoff/eligibility, QR access (Q-020; QR-L01–L09).

**G03 — Cancel or reschedule.** Actor: proven appointment-scoped guest or individually permitted staff; exception branch requires X01 and configured authority. Entry: G02 or S04; reschedule destination via P02; exit: P05 only for actual accepted change or return to G02/S04 after safe rejection. Layout: current reference/status/time → applicable cutoff guidance (value **not specified**) → mutually clear action choice; cancellation: consequence and “Confirm cancellation”; reschedule: chosen destination and “Confirm new time,” with summary of old/new. Input: explicit action and, for reschedule, destination candidate; reason only if approved client rule requires it. States: `L` processing; `V` missing destination/required data; `R` no authority or ineligible cutoff; `T/C` current state changed or destination full, do not release old capacity, show fresh options; `F` known failure before command submission, keep current context; `U` response lost after submit, original and destination both **unconfirmed** in UI, status check/follow-up only; `S` actual accepted status and time → P05; `E` no eligible action. Keyboard/mobile: no action-on-select; confirmation dialog only for consequential cancellation if useful, focus action heading, Escape restores trigger; mobile keeps current and proposed times visible. Trace: FR-004/007/008/010/018; UJ-003; BR-001/002/005/008; AC-009/013; WF-P04/P05/X02; IF-P09/P10/IF-I03/I04. Open: cutoff Q-020 before final Gate 2 approval, change eligibility/grace, reschedule reference/QR behavior, approved exceptions; D-089 excludes penalties, v0.7 fee wording awaits amendment.

### Internal front desk and supervisors

**S01 — Internal access boundary.** Actor: individually authenticated client staff/supervisor/administrator; never product operator by default. Entry: protected internal destination; exit: permitted S02/S03/S05/R01/A01/A02/O01 or denied state. Layout: client installation identifier → approved sign-in/authority step (method undecided) → role-scoped destination choices. Input: approved individual authentication only; no shared credential, guest reference, QR or host account accepted as staff authority. States: `L` checking role, `V/R` invalid or denied with privacy-safe response, `F` help without bypass, `S` role-appropriate navigation; `E/T/C/U` only if later authentication mechanism makes them applicable, never auto-elevate. Keyboard/mobile: accessible auth fields, paste/autofill permitted where appropriate, focus denied heading; compact labelled mobile nav after entry. Trace: FR-004/008/012/015; UJ-002/004/005; BR-004/007; AC-007; WF-S03/O01; IF-S01/IF-I01. Open: Q-009/Q-018 authentication, provisioning, roles and recovery. No operator portal is proposed by this gate.

**S02 — Appointment search.** Actor: permitted front-desk worker within assigned installation/scope. Entry: S01/nav, back from S04; exit: S04 or S03. Layout: “Appointments” → search by approved reference or minimal permitted criteria, date/status filters → result count and rows (time, reference, attendee/service only if role permits, attendance status) → “View appointment.” Input: scoped search terms; reject malformed reference/date and overly broad unauthorized search. States: `L` retain filters/headers; `E` “No matching appointments” with clear filters; `R` no disclosure outside assigned scope; `T` stale result notice on open; `F` retry search; `S` scoped results; `V` inline filter error; `C/U` —. Keyboard/mobile: semantic table with headers/sort only if needed; mobile labelled list, focus returns to originating row after detail. Trace: FR-004/008; UJ-002/005; BR-007; WF-S01/S03; IF-S02. Open: exact searchable fields, disclosure and role matrix (Q-018; NFR-009).

**S03 — QR/reference verification lookup.** Actor: authorized staff only. Entry: S01/nav or S02; exit: permitted S04 after lookup, S02/manual search. Layout: “Verify appointment” → manual reference entry and optional “Scan QR” accelerator if supported/approved → minimal current lookup result (eligible/invalid/cancelled or later-approved state) → separate policy-required identity/entitlement checklist text → “Open appointment” if permitted; **no arrival button on the scan result**. Input: untrusted QR/reference; invalid format, failed camera permission or unusable camera offers manual entry. States: `L` “Looking up appointment,” audit applies to lookup; `E/R` minimal non-disclosing invalid/not-permitted outcome; `T/C` changed booking or repeated scan according to undecided lifecycle, do not call valid without current check; `F` manual fallback/retry; `S` minimum result, **no status mutation**; `V` malformed value; `U` — for lookup (a required lookup-audit failure must not be misreported as valid). Keyboard/mobile: scan is optional; labelled text input works without camera, Escape closes scan, focus moves to result; mobile camera permission only on explicit scan action. Trace: FR-005/006/008/014; UJ-002; BR-003/008; AC-003/004; WF-S01; IF-S03/IF-I05. Open: QR-L01–L09, lookup display/audit policy, camera feasibility under D-069; no scanner dependency selected.

**S04 — Staff appointment detail and permitted actions.** Actor: staff; supervisor/admin only where expressly granted, not by role name alone. Entry: S02/S03, after S05; exit: G03 staff change, S06 attendance, X01 exception request, S02. Layout: current reference, service, time/location and booking/attendance as **separate labelled fields** → permitted attendee/booker distinction and change history as needed → action group (allowed update/cancel/reschedule; “Record attendance” separate) → audit/result hint, no broad personal-data dump. Input: approved update fields only; no routine typing-correction UI under D-076; booking-affecting updates revalidate current policy. States: `L` current details; `E/R` unavailable or no scope; `T/C` newer appointment/status/config revision, show permitted current data and require re-review; `V` field feedback for approved updates; `F` retry read; `U` for an update submitted here, hold and check prior outcome; `S` actual accepted change and audit-consistent status. Keyboard/mobile: labelled sections, actions in task order not icon-only row menus; mobile detail replaces list, back restores search context. Trace: FR-004/007/008/014; UJ-002/003/005; BR-005/007/008; AC-004/009; WF-S03/P04/X02; IF-S02/S06/IF-P09/P10. Open: allowed fields/permission matrix, update conflicts and attendance transitions (Q-018; WF-S02); no unapproved general correction.

**S05 — Assisted, proxy and streamlined walk-in start.** Actor: individually authorized staff. Entry: S01/nav or S04 when permitted; exit: P02→P03→P04 in **staff context**, then P05 on established acceptance. Layout: “New appointment” → choice “Assisted,” “Booking for another person,” or “Walk-in” as policy-permitted modes → service/date candidate → policy-minimum attendee, booker/contact and acting staff distinctions. Walk-in minimizes inputs but does not remove required identity, audit, capacity or duplicate checks. Input: applicable client/service minimum; proxy evidence and attendee presence only if approved; required field error links. States: `L` load requirements; `E/R` mode/service unavailable or no staff authority; `V` missing minimum; `T/C` capacity/duplicate/changed requirements → fresh P02 and preserve safe fields; `F/U` after submit use P04 unknown-outcome behavior, no second walk-in; `S` actual reference P05. Keyboard/mobile: mode radio group, conditional fields follow selected mode in focus order; one column for counter/phone use. Trace: FR-002/004/008/013; UJ-005; BR-001/002/006/007; AC-001/005/010; WF-P02/S03/X01/X02; IF-S06/IF-P02/P03/P04. Open: walk-in minimum fields, proxy rules, duplicate identity/window, permission granularity (D-064; Q-018/021).

**S06 — Explicit attendance/service action.** Actor: staff with specific transition permission after S04 and any separate required identity/entitlement procedure. Entry: S04 (possibly after S03 read); exit: S04 with actual status, X01 if configured exception needed. Layout: current booking status and attendance status **distinct** → what separate identity check was required/established (if policy applies; not auto-attested by QR) → available status actions “Mark arrived,” “Mark completed,” “Record no-show” as **conditional** examples of FR-014 minimum capability, not an approved transition graph → explicit “Record [status].” Input: selected action and policy-required evidence/reason, if any. States: `L` rechecking state; `E/R` no permitted transition; `V` required check/action missing; `T/C` cancellation/reschedule or attendance changed, no stale transition; `F/U` after action, do not say marked until established; `S` returned actual status and attributable outcome. Keyboard/mobile: select/action distinct from lookup, focused status result; no swipe-to-arrive. Trace: FR-004/008/014/015; UJ-002/005; BR-007/008; AC-004/011; WF-S02; IF-S04/IF-S05 (correction only if approved)/IF-I06. Open: legal transitions, correction authority, cancellation-vs-attendance race and no-show timing (QR-L10–L11; Q-018); no automatic penalty.

**X01 — Supervisor exception review.** Actor: individually authorized supervisor; ordinary staff may initiate a request without approval power **only if an approved handoff exists**. Entry: blocked configured action from S04/S05/G03/S06; exit: originating action for final validation, or denied unchanged. Layout: affected appointment/proposal and rule → current vs proposed outcome → mandatory reason → “Approve exception for final check” or “Deny”; display actor/time and actual result. Input: configured exception type, affected/proposed appointment, reason; reject missing reason, authority or mismatched scope. States: `L` checking current rule/state; `E/R` no allowed exception or denied role; `V` reason missing; `T/C` rule/appointment changed, re-review; `F/U` unknown approval/action result stays unresolved, no assumed bypass; `S` approved *context* then originating action revalidates, never direct acceptance. Keyboard/mobile: reason associated to rule, non-destructive deny equally available; compact review keeps before/after visible. Trace: FR-008/015; UJ-005; BR-001/007; AC-011; WF-S02/S03/X01; IF-S07/IF-I03 (or IF-I06 for approved attendance exception). Open: configured exception types/limits, handoff and review authority (D-048; Q-018/019).

### Roster, reconciliation, client administration and visibility

**R01 — Daily roster and controlled print.** Actor: authorized client staff. Entry: S01/nav; exit: print view, S02 or R02 after restoration. Layout: selected installation-local day/scope → **as-of snapshot** time and source/provenance → rows containing at minimum reference, appointment date/time, attendee name, service, assigned staff/resource if applicable and attendance status → “Print controlled roster” and custody reminder. Input: authorized day/scope; no extra contact by default. States: `L` generating current snapshot; `E` zero appointments explicitly shown with date; `V/R` invalid scope/denied print; `T` older print clearly labelled as-of, never live; `C` state changed while generating, require a consistent snapshot; `F` retry without claiming print succeeded; `S` prepared/printed outcome as evidenced, no attendance change; `U` if print evidence uncertain, do not assert custody/print success. Keyboard/mobile/print: semantic table on desktop, labelled entries on mobile, print-only light header and repeated column headers, as-of and page numbering; never clip name/reference or print action UI. Trace: FR-008/016; UJ-005; BR-009; AC-012; WF-X03; IF-S08. Open: custody/distribution/extra contact and disposal (D-074/D-079; Gate 6 milestone).

**R02 — Post-outage batch entry/review.** Actor: authorized, individually attributable staff after service restoration. Entry: R01 or S01/nav; exit: R03 for conflicts, S04 for accepted result, R01. Layout: identify source roster/as-of and recorder → item list of paper observations with **attendance vs walk-in proposal** → per-item current-state comparison → explicit review and submit; summary counts by *actual* accepted/conflicted/unresolved/rejected outcome. Input: source snapshot reference where available, each observed reference/claimed time/attendee details necessary under policy, item type and actor; missing/unmatched snapshot remains unresolved until approved sufficiency review. Paper annotations are **not** booked offline. States: `L` matching and submitting with per-item progress; `E` no observations, return to roster; `V` missing provenance/required item fields; `R` denied role; `T/C` newer booking, duplicate paper line, cancelled appointment, prohibited duplicate or capacity conflict → hold affected item; `F/U` uncertain batch/item outcome → authoritative review, no reimport or false accepted count; `S` per-item established outcomes. Keyboard/mobile: add/review items in reading order; on mobile one item per panel, keep provenance and summary visible; do not require drag/file import. Trace: FR-008/013/014/016/017; UJ-005; BR-001/002/008/009; AC-005/010/012; WF-X03/X02; IF-S09/IF-I07/IF-I03/IF-I06. Open: batch-vs-item atomicity, matching sufficiency, conflict authority, paper walk-in eligibility (D-063/D-085(4)).

**R03 — Conflict and unresolved-item review.** Actor: permitted reconciliation reviewer; supervisor only for a separately configured exception, not an automatic paper override. Entry: R02 conflict/unresolved item; exit: R02 after authorized disposition or S04 for actual accepted action. Layout: source snapshot/observed value/time and recorder vs current protected appointment/status → named conflict (“Appointment changed since roster printed,” “Source cannot be matched”) → possible approved actions “Keep unresolved,” “Reject proposal,” or separately authorized **re-review**; do not offer “Overwrite current.” Input: review disposition and reason if policy requires; explicit attendance acceptance still passes IF-I06, walk-in still passes online IF-I03. States: `L` refreshing current truth; `E/R` item not accessible; `V` missing required review input; `T/C` current state changes again, force comparison; `F/U` no assumed resolution; `S` only actually accepted/rejected result, provenance remains; no automatic conflict resolution. Keyboard/mobile: side-by-side comparison becomes labelled stacked “Paper / Current,” focus conflict heading, text actions not color alone. Trace: FR-008/014/017; UJ-005; BR-008/009; AC-012; WF-X03; IF-S09/IF-I07/IF-I03/IF-I06. Open: conflict vocabulary, reviewer authority, accepted-vs-rejected semantics and legal correction path (QR-L12; Q-018).

**A01 — Client service, availability and policy configuration.** Actor: authorized client administrator only. Entry: S01/nav; exit: preview/impact review, return to A01 after actual acceptance; S02 to inspect affected bookings under separate permission. Layout: service list → edit service/location/arrival guidance, periods, duration/buffers, staff/physical resource and ordinary capacity, duplicate warning/blocking and change eligibility **as approved configurable categories**, not prefilled values → proposed vs effective revision and affected-booking summary → “Review impact” then “Save proposed changes.” Input: policy-required configuration values with units and effective scope; reject missing/contradictory schedule or unsafe capacity/duplicate conditions, do not fill universal defaults. States: `L` current config/impact; `E` incomplete setup with “Bookings cannot be accepted until policy is defined”; `V` inline invalid/missing fields; `R` no admin scope; `T/C` concurrently changed configuration or affected bookings, hold and re-review, never silently invalidate; `F/U` unresolved save, no new effective value asserted; `S` actual accepted effective revision with attributable audit. Keyboard/mobile: related fieldsets and single-column edit on phone; impact table reflows without losing affected-booking facts. Trace: FR-001/004/008/018; UJ-005; BR-001/002/005/007; AC-001/013; WF-A01/P01; IF-A01/IF-I02/IF-I03 (if approved booking effect). Open: Q-019/020/021, existing-booking disposition, minimum safe config, no penalty switch (D-089).

**A02 — Internal staff access administration.** Actor: authorized **client** administrator; not product operator. Entry: S01/nav; exit: A02 list/detail and S01 under newly established authority. Layout: installation and individually named internal principals → assigned role/scope/state → “Add staff access,” “Change permission,” “Revoke access” (conditional on approved permission model) → review consequence and actual audit result. Input: approved identity/provisioning attributes, permitted scope and explicit target; deny self-asserted role, unclear target or unauthorized escalation. States: `L` list/action; `E` no additional staff, guided setup without shared accounts; `V` missing target/scope; `R` role denial; `T/C` grant or principal changed, require fresh review; `F/U` do not assert a grant/revocation until established; `S` actual attributable result. Keyboard/mobile: semantic list, labelled scope/role controls, destructive revoke confirmation names target; mobile review in one column. Trace: FR-004/008/012; UJ-004/005 (boundary only for UJ-004); BR-004/007; AC-007; WF-S03/O01; IF-A02/IF-S01. Open: Q-009/Q-018 provisioning/permissions; D-034/D-075 prohibit default operator client-admin access.

**O01 — Essential operational signals (client-scoped review).** Actor: expressly authorized client operational reviewer/staff/admin **as determined by role policy**, not automatically the provider/operator. Entry: S01/nav for permitted role or from relevant failed R02/P04 context; exit: scoped S04/R03 or client incident procedure. Layout: title with installation and freshness → actionable privacy-minimized categories: booking failures, unexpected application errors, security-relevant events, capacity/integrity violations, reconciliation failures and important operational failures → event time/category/safe correlation and permitted resolution route; distinguish expected business rejection from system fault and unknown command. Input: time/category filters only; no unrestricted personal search, analytics or export. States: `L` keep prior timestamp; `E` “No events in this scope” not “system healthy”; `R` restricted signals; `T` stale timestamp and refresh; `F` monitoring unavailable without claiming operation healthy; `C` conflicting evidence surfaced for review; `S` current permitted results; `V` invalid filter; `U` show underlying command as unknown where appropriate, never reinterpret it as failed. Keyboard/mobile: filtered list with date labels and one permitted next action; mobile shows category and time first. Trace: FR-008/012; NFR-011; UJ-004 (operator boundary) / UJ-005 (staff continuity); BR-004/009; AC-007/012; WF-X04/O01; IF-S10 (IF-O01/O02 remain separate operational contracts). Open: reviewer permission, alert routing and Q-008 client/provider incident allocation; FR-011 advanced reporting is deferred.

## 3. Screen-to-requirement coverage matrix

This index summarizes §2 and makes cross-screen coverage auditable. In the matrix, numeric shorthand retains the column prefix (e.g., `001/018` under Active FR means FR-001 and FR-018; `P01/P05` under WF means WF-P01 and WF-P05). `NFR-003/006/007/009/011` and `AC-006/008` apply across relevant authority, integrity, accessible UI and later verification paths; their appearance is **design coverage**, never a passed test. `BR` is included because policy-dependent behaviors cannot be read from FR alone.

| Screens | Active FR | UJ / BR | AC | WF | IF |
|---|---|---|---|---|---|
| P01–P02 | 001/018 | UJ-001; BR-001/005 | 001/013 | P01/P05 | P01/P02/P03 |
| P03–P04, S05 | 002/003/008/010/013/018 | UJ-001/005; BR-001/002/006/007 | 001/002/005/010/013 | P02/P05/S03/X01/X02 | P03/P04/P05/S06/I03/I04 |
| P05 | 005/010 | UJ-001/003; BR-003 | 002/009 | P02/P03/P04 | P05/P06 |
| G01–G03 | 004/005/007/008/010/018 | UJ-003; BR-001/002/003/005/008 | 002/009/013 | P03/P04/P05/X02 | P06–P10/I03/I04 |
| S01–S02 | 004/008/012/015 | UJ-002/004/005; BR-004/007 | 007 | S01/S03/O01 | S01/S02/I01 |
| S03–S04 | 004/005/006/008/007/014 | UJ-002/003/005; BR-003/005/007/008 | 003/004/009 | S01/S03/P04 | S02/S03/S06/P09/P10/I05 |
| S06 | 004/008/014/015 | UJ-002/005; BR-007/008 | 004/011 | S02 | S04/S05/I06 |
| X01 | 008/015 | UJ-005; BR-001/007 | 011 | S02/S03/X01 | S07/I03/I06 |
| R01–R03 | 008/013/014/016/017 | UJ-005; BR-001/002/008/009 | 005/010/012 | X03/X02 | S08/S09/I03/I06/I07 |
| A01–A02 | 001/004/008/012/018 | UJ-004/005; BR-001/002/004/005/007 | 001/007/013 | A01/S03/O01 | A01/A02/I02/I03 |
| O01 and operator procedure boundary | 008/012 | UJ-004/005; BR-004/009 | 007/012 | X04/O01/O02 | S10/O01/O02 |

**Coverage result by active FR:** FR-001–008, FR-010, FR-012–018 have a screen or explicitly delimited non-portal operational boundary. FR-009/FR-011 are excluded as deferred. UJ-001–005, BR-001–009 and AC-001–013 are cited; AC-006 applies to all applicable public/internal layouts and AC-008 to their later workflow tests. NFR-001/002/004/005/008/010 are primarily installation/configuration/integrity/evidence constraints rather than separate pages. NFR-003/006/007/009/011 constrain all relevant screens. WF-X04 and WF-O01/O02 do **not** imply new product-operator application navigation. Logical IF-I01–I07 constrain interactions; they are not user-facing pages.

The paragraph above records the pre-v0.8 screen inventory. Approved changed/new v0.8 screen coverage is supplied in §4.2's individual FR/NFR/UJ/BR/AC trace rows; the combined requirements baseline also retains unaffected v0.7 coverage by reference.

## 4. Smaller representative high-fidelity journey set (future Stage 3 proposal)

**Not built or approved here.** The later separately authorized connected prototype can cover: (a) P01→P02 unavailable/actual alternatives→P03/P04→P05 readable print/QR; (b) G01 independent-proof **placeholder with no simulated security assertion**→G02→G03 accepted cancellation or reschedule→P05; (c) S01→S03 QR lookup → separate identity-procedure explanation → S04→S06 explicit arrived action; (d) S02/S04→G03 staff handling or S05 walk-in → X01 configured exception boundary; (e) P04 unknown lost-response and R02→R03 stale-paper conflict as representative error/conflict examples. These are **fewer journeys than the full §2 annotated screen/state inventory**; no security proof, database effect, functional scanner, API or actual rule is implied by a prototype illustration.

## 4.1 Preparation-stage account direction (historical note)

> This section preserves the account-path composition as it was drafted before D-094 and
> Requirements v0.8 were approved. Current screen specifications and traceability are in §4.2
> onward. Approval of requirements did not accept Checkpoint 11 or select account mechanisms.

The current approved journey extends public navigation to a common landing/service-discovery
entry with “Book as guest,” optional
customer sign-in/registration, and “Manage an appointment.” Keep guest entry available at
all times. Both booking paths use the same P01 service/date/time selection and persistent
live selection summary, P03 policy-required details, P04 final review/explicit submission,
and P05 only after an established successful outcome. Stale availability, known rejection
and unknown command outcome remain separate; no false confirmation or blind repeat.

The proposed registered path adds registration/sign-in and recovery specifications,
customer dashboard, authorized My Appointments/details, eligible change request/outcome and
sign-out. The account sees only appointments authorized to it. Account status alone does
not grant priority, capacity, override, status privilege, or access to unrelated records.
Do not automatically associate guest-created appointments based only on matching personal
information. Guest proof, account verification/recovery, association/ownership policy,
profile reuse, deactivation/retention, permissions and abuse policy remain open as
ACCT-L01–ACCT-L08 in the proposed requirements amendment. Do not simulate or imply an
unapproved proof or recovery mechanism.

This historical preparation-stage note predates approval of exact v0.8. The current effective
baseline is stated in §4.2. Checkpoint 11 remains unaccepted; D-098 does not change its evidence
or acceptance status.

## 4.2 Current v0.8 account and shared booking-flow screen specifications

The approved account scope augments the shared public journey; it does not create an account-only
booking path or weaken the existing P01–P05 final-integrity sequence. All screens below are
proposal-level visual/interaction specifications. They define no new endpoint, credential,
proof method, token lifetime, service policy or data schema. Existing Stage 1 state notation and
the unknown-outcome rule in §1.1 apply throughout.

### Shared entry and booking continuation

**P00 — Public entry and booking mode.** Actor: public customer. Purpose: select guest booking,
optional customer sign-in/registration where enabled, or separately scoped appointment
management. Content: installation/service context, “Book as guest” primary/always-visible
choice, optional “Sign in” / “Create account” choices only when customer registration policy
allows it, and “Manage an appointment” linking to G01. Guest entry requires no account. After
account entry, the customer continues through P01 service discovery, P02 availability, P03
required details, P04 review/submission and P05 established outcome; carry forward service/date
context without treating sign-in as a reservation. States: loading; registration disabled (hide
new-signup entry but retain sign-in for verified accounts); no services; session expired; denied
or recoverable technical error; established guest/account entry. Trace: FR-002/003/019;
UJ-001/006; BR-010/012; AC-014/016/018/020.

**Shared booking continuation.** Guest and registered customers use identical service,
eligibility, availability, capacity and duplicate decisions. Account presence changes only the
available presentation/access path; it grants no priority, capacity, override, booking-status or
internal-role privilege. The review step shows participant roles and only policy-authorized
details. Confirmation remains unavailable until the authoritative result is established; email
delivery is separate from booking success.

### Registered-customer account screens

**CA01 — Registration.** Actor: public customer choosing optional registration. Show email and
password fields with persistent labels, clear password-manager/paste support, verification
purpose, privacy-minimized copy and the guest continuation. Include no appointment or attendee
data before verification. States: registration enabled; registration disabled (no new signup,
existing verified-account sign-in remains); invalid fields; duplicate/unknown address with
non-enumerating response; verification pending; delayed/failed email with on-screen recovery
guidance; verified account established. No expiry, retry count or delivery provider is
specified. A signup disabled while pending must not be treated as a verified account; exact
activation-boundary handling remains ACCT-L01. Trace: FR-019/020; NFR-003/010; UJ-006;
BR-012; AC-019/020/024.

**CA02 — Sign-in and recovery.** Actor: existing verified customer. Show sign-in and recovery
as separate tasks; recovery sends only the approved D-095 purpose and does not expose whether
unrelated appointments exist. Unknown address, incorrect credentials, delayed/failed email,
and unavailable recovery all use privacy-limited feedback. Do not make QR, reference, an email
address, or a delivered link proof of attendee/guardian authority. Preserve guest booking as a
way out. Authentication, sessions, proof assurance, abuse thresholds and delivery behavior
remain Gate 2/3 design decisions. Trace: FR-019/020; NFR-003/009/010; UJ-006/007; AC-019/024.

**CA03 — Customer dashboard.** Actor: signed-in verified customer. Show authorized upcoming
and retained past appointment lists, a clear empty state and sign-out. Each row/detail is
visible only if the account created the booking or the appointment was individually linked
after independent original-booker verification. Proxy-created records expose only the
permitted booker view and withhold restricted attendee/service details. States: loading,
upcoming/past populated, empty, access denied/non-enumerating, stale session, recoverable
failure. Account sign-in never auto-links a guest booking by matching name/contact. Trace:
FR-019/021; NFR-003/007/009; UJ-007; BR-010/011; AC-015/017/019/025.

**CA04 — Authorized appointment detail and change request.** Actor: account holder with
appointment-specific authority. Show only authorized appointment details, current status,
effective cancellation/reschedule eligibility and the action actually allowed by service
policy. Reuse G03 change review and P05 outcome; rejected rescheduling preserves the original
appointment; unknown outcome offers status reconciliation only, not a blind repeat. Email
delay/failure cannot reverse a committed change or substitute for the screen/print outcome.
States: eligible, not eligible/cutoff, disputed/held, stale state, full destination, known
rejection, unknown outcome, accepted actual outcome. Trace: FR-007/010/019; BR-005/013;
AC-009/015/025/026.

**CA05 — Individual guest-appointment link and dispute.** Actor: verified customer claiming
to be the original booker of one guest booking. Explain the single-appointment scope, collect
only the approved proof inputs once a proof procedure is selected, require explicit
confirmation before linking, and show a non-enumerating denial if proof is absent/insufficient.
Matching personal information, sign-in, reference, QR or email-link possession alone does not
link or authorize an appointment. A contested claim/change displays a hold and review state;
it does not automatically cancel the appointment or allow claimant self-release. Staff review
controls appear only for the assigned, separately authorized case-review role. Exact proof,
service restrictions, evidence, reviewer mapping and reversible link semantics remain open.
Trace: FR-021; NFR-003/009; BR-011; AC-015/017/021/025.

**CA06 — Profile and account deactivation.** Actor: account holder. Distinguish editing saved
profile fields from editing an appointment; prefill is disclosed and does not silently update
the profile or booking. Deactivation clearly explains that account access ends while
appointments and required records are preserved under approved retention policy. Provide a
safe exit and separately authorized guest/staff route for later eligible management. Exact
retention/deletion, notice and reactivation policy remain ACCT-L05/L06 and D-079/Q-015 work.
Trace: FR-019/022; NFR-009/010; BR-012; AC-019/023/025.

### State and email coverage

| Flow | Required designed states | Trace |
|---|---|---|
| P00/CA01 account enablement | enabled, disabled-new-signup, existing verified sign-in available, pending signup, verification success/failure/delay | FR-019/020; BR-012; AC-019/020/024; ACCT-L01/02 |
| CA02 sign-in/recovery | initial, submitting, non-enumerating denial, recovery requested, delayed/failed email, established recovery, expired/invalid only if later policy defines those states | FR-020; NFR-003/010; AC-019/024; ACCT-L02/07 |
| CA03/CA04 appointment access/change | upcoming, retained past, empty, permitted detail, denied, stale, cutoff-ineligible, conflict, held/disputed, known rejection, unknown, accepted actual outcome | FR-007/019; BR-005/011/013; AC-015/019/025/026; Q-020 |
| CA05 link/dispute | unclaimed, proof not established, confirmation pending, linked, contested/held, staff review, reversed, denial | FR-021; BR-011; AC-015/017/021/025; ACCT-L03/04 |
| CA06 profile/deactivation | profile prefill notice, separate profile edit, deactivation review, access ended, preserved appointments, later guest/staff management route | FR-019/022; NFR-009; BR-012; AC-023/025; ACCT-L05/06 |

D-095 permits six purpose-limited email events (account verification, password recovery,
appointment-scoped guest access, successful booking, cancellation and rescheduling). Use the
recipient/content matrix in effective Requirements Specification v0.8 §5 as the source of
truth. Screen outcomes must distinguish “appointment action committed” from “email delivered”;
no email for rejected, unknown or held changes; no email delivery result triggers a repeated
command. Email token/session design and privacy safeguards remain Gate 2/3 work.

### v0.8 screen traceability (record-level)

| Record | Screen coverage | Workflow / interface references | Design acceptance criteria |
|---|---|---|---|
| FR-019 | P00, CA01–CA06, shared P01–P05 | WF-P02/P04; IF-P01–P05 and scoped account authorization still needs a logical contract | AC-014–020/025 |
| FR-020 | CA01/CA02; G01 scoped guest recovery; P05/change result | WF-P03; IF-P08 is guest recovery candidate; D-095 email contracts not separately inventoried | AC-019/024 |
| FR-021 | CA05, CA03/CA04 authorized result | WF-P03 and IF-P07 are guest/lookup proposals; individual account-link/dispute contract missing | AC-015/017/021/025 |
| FR-022 | P03 and CA06 | WF-P02; IF-P03; profile prefill/edit not separately contracted | AC-010/022/023 |
| FR-008 | P04/P05, CA01–CA06, S03/S06, R02/R03 | WF-P04/P03/S01/S02/X02/X03; IF-I04/S03/S04/S09; include verification/recovery/link/dispute/deactivation/email events under approved audit/privacy policy | AC-021/024/025 |
| FR-013 | P03/P04, CA01/P00 account choice, S05 | WF-P02/S03; IF-P03/P04/S06/IF-I03; actor/booker/attendee remain distinct | AC-010/022 |
| NFR-003 | P00, CA01–CA05, G01–G03, S01 | WF-P03/P04/S03; IF-I01/IF-P07/IF-P08; account-specific identity proof missing | AC-015/017/019/021/024 |
| NFR-006 | P02–P04, CA04, S05 | WF-P02/P04/X01; IF-P04/IF-P10/IF-I03; same final integrity policy across guest/account | AC-005/014/018/026 |
| NFR-007 | P00–P05 and CA01–CA06, applicable staff layouts | Existing responsive/accessibility behavior in §§1/2; account flow extends but does not prove WCAG conformance | AC-006/016/019 |
| NFR-009 | CA03–CA06, P03/P05, R01–R03 | WF-P03/X03; IF-P07/S08/S09; account retention/lifecycle requires Q-015/Gate 3 | AC-015/023/024/025 |
| NFR-010 | P00/CA01–CA06 plus all existing core paths | WF-P02/P03/P04/X02; interface/test inventory update required | AC-008/019–026 |
| UJ-001 | P00/P01–P05 | WF-P01/P02/P05; IF-P01–P05 | AC-001/002/005/013/014/016/018 |
| UJ-003 | G01–G03 and CA04 | WF-P03/P04/X02; IF-P07–P10 | AC-009/015/017/019/026 |
| UJ-006 | P00, CA01/02 then P01–P05, or P00→guest P01–P05 | Existing booking contracts; account entry and authorized dashboard contract missing | AC-014/016/018/019/020 |
| UJ-007 | CA02→CA03→CA04→CA03→sign-out | No registered-customer WF/IF journey in D-087/D-090 working drafts | AC-015/019/025/026 |
| BR-002 | P03/CA01/CA05/S05 | WF-P02/S03; IF-P04/IF-I03; attendee/eligibility key/window and permitted warning/block behavior remain client policy | AC-001/014/022 |
| BR-005 | CA04/G03/S04/A01 | WF-P04/A01; IF-P09/P10/IF-I03; cutoff disposition required, values remain client policy | AC-009/025/026 |
| BR-006 | P03/CA01/S05 | WF-P02/S03; IF-P03/S06; service-specific proxy/attendee-presence restrictions remain open | AC-010/022 |
| BR-010 | P02–P04, CA01→P01–P05 | Final boundary in WF-P02/X01 and IF-I03; account actor isn't represented in contract inventory | AC-014/018/022 |
| BR-011 | CA03–CA05 | WF-P03 scoped guest pattern; account link, dispute and review authorization absent | AC-015/017/021/025 |
| BR-012 | P00/CA01/CA02/CA06 | No registration-toggle workflow/interface currently identified | AC-020/025 |
| BR-013 | CA04/G03/P04 | WF-P04/X02; IF-P10/I03/I04 | AC-009/026 |
| AC-014 | P00/P02/P04/CA01 | Shared guest/account availability, eligibility, capacity and duplicate decision | FR-002/003/019; BR-010 |
| AC-015 | CA03/CA04/CA05 | Own/linked booking scope, proxy visibility and cross-appointment denial | FR-007/019/021; NFR-003/009 |
| AC-016 | P00/P01–P04 | Guest path completes without account and preserves chosen context | FR-003/019; UJ-001 |
| AC-017 | CA03/CA05 | Personal-data match alone reveals/authorizes no guest booking | FR-021; BR-011; NFR-003 |
| AC-018 | P00–P04 | Shared ordered journey and distinct rejection/stale/unknown states | FR-002/003/010; NFR-006 |
| AC-019 | CA02–CA04 | Account sign-in/dashboard/list/detail/change/denial/empty/recovery/sign-out workflow inventory | FR-019/020; NFR-010 |
| AC-020 | P00/CA01/CA02 | New signup disablement preserves verified-account access and guest path | FR-019; BR-012 |
| AC-021 | CA05 | Independent original-booker proof, explicit link, assigned case review and reversal | FR-021; BR-011 |
| AC-022 | P03/CA01/S05 | Same proxy/duplicate service policy for guest and account; no partial booking | FR-013/022; BR-002/006 |
| AC-023 | P03/CA06 | Minimal fields, visible prefill notice, separate profile edit | FR-022; NFR-009 |
| AC-024 | P05/CA01/CA02/CA04 | Six approved recipient/content classes, delivery failure and no duplicate command | FR-010/020; D-095 |
| AC-025 | CA03–CA06 | Authorized upcoming/past details, contested hold, deactivation preservation | FR-007/019/021; BR-005/006/012 |
| AC-026 | CA04/G03/P04 | Atomic capacity reallocation, preserve old booking on known rejection, reconcile unknown result | FR-007; BR-013; NFR-006 |

This screen trace extends the individual requirement rows already in Traceability revision
1.2. It assigns no new official requirement, workflow or interface IDs. Where a referenced
`WF-*`/`IF-*` contract has no account behavior yet, the gap is carried to the Checkpoint 12
integration review rather than silently treating a guest contract as account authorization.

## 5. Remaining Product Owner decisions, evidence and gate boundary

### 5.1 Approved account scope and unresolved design details

The approved v0.8 screen coverage includes registration enabled/disabled, existing verified
account sign-in when signup is off, email verification/recovery failure, and scoped guest
access. The dashboard separates authorized upcoming and retained past appointments. A
guest-booking link is an individual, explicit original-booker proof flow with denied,
contested and reversed states; matching details or QR/reference cannot grant access.
Proxy entry separates booker, attendee and acting staff; service restriction and disputed
authority hold self-service changes for review without auto-cancelling. The common minimal
form adds only approved service fields; prefill notice and separate profile edit are visible.
Deactivation explains preserved appointments and independently verified guest/staff recovery.
Cancellation/reschedule screens show effective deadlines, known rejection, atomic success
and unknown outcome requiring status reconciliation before retry. Security and transaction
email delivery states never substitute for authoritative on-screen/printable outcomes.
This is design coverage of approved requirements, not a completed prototype or accepted
Checkpoint 11 evidence. Exact proof, recipients, policy values and privacy copy remain open.

| Dependency and affected screens | Needed decision/review; no default assumed |
|---|---|
| Guest proof, account sign-in, original-booker linking, proxy entitlement, claimant recovery and staff mediation (CA01–CA05/G01–G03/P05) | D-094/D-095; ACCT-L02–L04, NFR-003 and Q-015. Specify evidence assurance, disclosure, recovery and case-review role for Gate 2/3; QR/reference/email address alone is never proof. |
| QR issuance, eligibility, contents, expiry/revocation/repeats and races (P05/S03/S06) | QR-L01–L12; decide lifecycle and correction authority; lookup remains read plus required audit, never automatic attendance. |
| Change cutoff (G03/CA04/S04/A01) | D-079/Q-020 disposition **before final Gate 2 architecture approval**. D-089 and approved v0.8/AC-009 exclude MVP cancellation/no-show penalties; unrelated service fees remain undecided. |
| Capacity/resource, duplicate, required fields, alternatives, exceptions (P02–P04/S05/X01/A01) | Q-019/Q-021 and D-043/044/059/060/066; no fixed limit, warning rule, search radius, identity key/window or exception type. |
| Attendance graph and correction (S06/R03) | FR-014/BR-008 and QR-L10–L12; decide allowed transitions, actor authority and cancellation/no-show races. |
| Roster custody and paper conflicts (R01–R03) | D-074/D-079 and WF-X03; decide source matching, review/rejection, per-item vs batch effects, handling/disposal **before Gate 6 release approval**. |
| Permissions, monitoring viewer and operator effective access (S01/A02/O01) | Q-009/Q-018/Q-008; no default operator portal. Exceptional operator duration and break-glass policy plus retention/deletion **before Gate 3 security/privacy review approval** (D-079). |
| Account setup, field catalog, deactivation and data retention (CA01/CA06/P03) | ACCT-L01/L05/L06 and Q-015. Product Owner/service policy before final affected design; retention/deletion and qualified privacy review before Gate 3 approval under D-079. |
| Quality and design validation | Q-016/Q-022 target dispositions and Q-020 cutoff **before final Gate 2 architecture approval**; Q-007 final disposition and Q-008 feasibility/responsibility allocation also remain. D-069 browser policy is established; actual environment conformance and design-review findings are not evidenced here. |

Future Checkpoint 11 evidence still requires a connected representative prototype and recorded Product Owner/usability/accessibility design-review findings under D-093. The supplied Stage C/Phase C captures are illustrative review material, not an executed accessibility review. The existing prototype currently has a public selection/review preview and fictional staff views; it has no registration, account dashboard, guest appointment management/linking, authoritative booking confirmation or email delivery states. Its test suite covers seven fictional-model behaviors only, not account flows or real browser accessibility. No prototype source was changed in this task. Gate 3 security/privacy/data-integrity review precedes authorized Gate 4 implementation; representative product-fit/qualified independent privacy-security assessment and release evidence remain later obligations (D-077/D-093). No checkpoint/gate status is changed here.
