# Requirements Specification v0.8 — Approved Gate 1 Amendment

> **APPROVED DEVELOPMENT-STAGE BASELINE — D-094/D-095 and Product Owner approval of this exact version.** This controlled amendment supplement is effective with the unchanged Requirements Specification v0.7 under D-081. It does not reopen Gate 1, accept Checkpoint 11, or authorize implementation.

| Field | Value |
|---|---|
| Proposed replacement version | 0.8 |
| Current effective version | v0.7 — D-081 (2026-10-29), development-stage assumptions; not representative validation |
| Review status | APPROVED development-stage assumption baseline; not representative validation |
| Owner | Product Owner |
| Proposed author | Documentation amendment prepared from Product Owner scope direction |
| Change authority | D-094 and D-095; exact-version approval recorded in Decision Register revision 1.19; approval date not supplied |
| Gate | Gate 1 targeted/versioned requirements amendment; Gate 2 remains IN PROGRESS |

## 1. Versioning and incorporation rule

This is a **versioned amendment supplement**, intended to be read together with the exact
unchanged Requirements Specification v0.7 under D-081. It defines the exact replacement
wording for affected existing records and exact proposed text for new records. All
unmodified v0.7 records, rationale, open items, and criteria are carried forward unchanged
by reference. This supplement and v0.7 together constitute the complete v0.8 working
specification. The exact v0.8 is effective for development-stage design; v0.7 remains
preserved as its historical predecessor.

**Approval disposition:** The Product Owner approved this exact v0.8 and Traceability
revision 1.2, together with D-094/D-095, as a development-stage assumption baseline. This
approval disposition supersedes the proposal-stage conditional statements and `None — not
approved` metadata in the preparation record below. Changed and new requirement records and
their criteria are approved for design under this baseline but are not `VALIDATED`; no
representative evidence, security/privacy review, test result, release approval or
implementation authorization is created.

No requirement here is marked `VALIDATED`. The approved review disposition is `APPROVED`
as a development-stage assumption; preparation tables retain their original draft-stage
metadata as historical submission information. Approval does not constitute representative
validation, privacy/security approval, test evidence, release approval, or implementation
authorization.

## 2. Change history

| Version / date | Author / role | Review status | Change and reason | Affected traceability | Approval / disposition |
|---|---|---|---|---|---|
| v0.8 / prepared 2026-11-04 | Documentation amendment preparer | APPROVED development-stage assumption baseline; not representative validation | Replaces FR-002/003/007/008/010/013, NFR-003/009/010, UJ-001/003, BR-002/005/006 and AC-009; adds FR-019–022, UJ-006/007, BR-010–013 and AC-014–026. Preserves the exact effective audit, confirmation, privacy and release-test obligations while adding account and six email-purpose boundaries. AC-001/002/005/006/008/010/013 and NFR-007 are unchanged text with impact/validation links only. | Each changed/new record has an individual revision 1.2 trace row; D-094/D-095; D-089; Q-002/003/015/020/021; Gate 2 architecture and Checkpoint 11. | Product Owner approved this exact version; date not supplied; recorded in Decision Register revision 1.19. |

The preparation date is not the approval date. Product Owner approval is recorded for this
exact version; its date was not supplied. Approval establishes a development-stage assumption
baseline only, not representative validation, privacy/security approval, test evidence, release
approval, or implementation authorization.

## 3. Approved replacement text for existing requirements

The following replaces only the cited records in v0.8. Their identifiers,
owners, priorities, evidence classifications, and other metadata remain as in v0.7 except
where the version-history entry above records an impact. New text remains `DRAFT` until
explicit exact-version disposition.

### FR-002 — Appointment booking (proposed v0.8 wording)

> A guest, registered customer, or authorized staff actor shall be able to request an
> appointment through the shared booking process, and the system shall atomically return a
> successful booking with a unique reference or a clear rejection without creating partial
> state. Guest and registered-customer requests shall use the same effective appointment
> eligibility, capacity, duplicate, and booking-integrity policies. Account status alone
> shall not grant booking priority, capacity, override authority, or appointment status.

### FR-003 — Guest booking journey (proposed v0.8 wording)

> A public user shall be able to book an appointment as a guest without creating or signing
> in to a public account, through the shared booking process and subject to the same
> configured availability, capacity, duplicate, eligibility, and required-input rules as a
> registered customer.

### FR-007 — Cancellation and rescheduling (proposed v0.8 wording)

> A guest through independently verified appointment-scoped access, a registered customer
> for an individually authorized appointment, or assigned staff may request cancellation or
> rescheduling under client/service state and deadline policy. Contested self-service
> actions are held for authorized review without automatically cancelling the booking.
> A rejected reschedule preserves the original appointment; an unknown outcome requires
> authoritative reconciliation before retry. Account status does not grant unrelated access.

The proof procedure and cutoff values remain open; the proposed policy boundaries are
specified in §§5–6 below.

### NFR-003 — Security and privacy (proposed v0.8 wording)

> Every state-changing operation shall use approved authentication, server-side
> authorization and server-side validation. Guest booking remains account-free; guest
> management requires independent appointment-scoped proof. Registered-customer access is
> limited to created or individually linked authorized appointments. An account session,
> personal-data match, email, reference or QR alone grants no unrelated appointment,
> attendee or guardian authority. Denials shall not mutate state or disclose unnecessary
> data. Proposed email/password verification and recovery, linking proof and staff-assisted
> recovery require separate D-095 approval, detailed design and security/privacy review.

### Version metadata for changed existing requirements

The following per-record version-control metadata is supplied under Requirements
Governance §3. Exact v0.7 statements remain retrievable in the preserved historical source and are
incorporated unchanged except for the replacement wording above.

| ID | Current working version/status | Effective approved version | Rationale / provenance | Planned validation | Evidence | Approval reference/date | Owner | Version history / deferral |
|---|---|---|---|---|---|---|---|---|
| FR-002 | v0.8 / APPROVED development-stage assumption | v0.4 / D-081 / 2026-10-29 (prior version) | D-094; D-042/D-044/D-070; no representative account-path evidence | Gate 2 design; later Gate 5 shared-integrity tests | Prior v0.7 EVD-001–EVD-004 support discovery only; none validates v0.8 | D-094 and approved v0.8; date not supplied | Product Owner | v0.8 adds registered actor and parity; prior version/history preserved. Not deferred. |
| FR-003 | v0.8 / APPROVED development-stage assumption | v0.4 / D-081 / 2026-10-29 (prior version) | D-094; D-046/D-061; guest booking remains mandatory | Public-user design review; later Gate 5 guest/account parity | Prior EVD-001/EVD-002/EVD-004 support earlier guest direction only; none validates v0.8 | D-094 and approved v0.8; date not supplied | Product Owner | v0.8 clarifies guest path remains account-free and uses shared rules. Not deferred. |
| FR-007 | v0.8 / APPROVED development-stage assumption | v0.4 / D-081 / 2026-10-29 (prior version) | D-094; D-045/D-049/D-061/D-079; no account ownership or guest association mechanism selected | Gate 2/3 authority and privacy review; later Gate 5 authorization/change tests | Prior EVD-001–EVD-004 support earlier guest change direction only; none validates v0.8 | D-094 and approved v0.8; date not supplied | Product Owner | v0.8 adds account-authorized eligible changes and explicit non-association constraint. Not deferred. |
| NFR-003 | v0.8 / APPROVED development-stage assumption | v0.7 / D-081 / 2026-10-29 (prior version) | D-094/D-095; D-021/D-029/D-045/D-050/D-057; security/privacy mechanism remains open | Gate 3 threat/privacy review; later authorization and failure tests | Prior EVD-003/EVD-004 are partial privacy expectations only; none validates account controls | D-094/D-095 and approved v0.8; date not supplied | Product Owner | v0.8 adds customer-account scope and no auto-association from matching personal data; preserves prior mandatory controls. Not deferred. |

FR-008/010/013 and NFR-009/010 retain their v0.7 Mandatory-baseline priority,
Product Owner ownership and D-081 effective approval metadata; their exact proposed
replacement statements are in §4. Their proposed status is DRAFT, approval/evidence
for changed wording is None, and planned validation is Product Owner exact-text review,
Gate 2/3 design review as applicable, and Gate 5 tests. FR-010's email exception
requires separate proposed D-095 approval. The same proposed-status and inherited
metadata rule applies to BR-002/005/006 and AC-009. Unchanged AC-001/002/005/006/008/
010/013 and NFR-007 retain their exact v0.7 wording; only their test and trace links
are expanded. No replacement text is implied for those unchanged records.

## 4. Approved new requirement records

These identifiers are effective in v0.8 as approved development-stage assumptions. They are
not `VALIDATED`; identifiers remain permanent under Requirements Governance §2.

### FR-019 — Optional registered-customer access

| Field | Proposed content |
|---|---|
| Statement | Where registration is enabled, a customer may create an email/password account activated after email verification. Disabling registration blocks new signups only; existing verified accounts retain sign-in, dashboard, and authorized appointment management. The dashboard shows authorized upcoming and retained past appointments. Guest booking and scoped guest management remain available in either setting. Deactivation ends account access without cancelling appointments; subsequent management requires independent scoped guest proof or authorized staff assistance. Account status grants no appointment priority, override, capacity, status, or unrelated-appointment access. |
| Rationale | Provide the proposed optional account experience while preserving account-free access and least-privilege appointment visibility. |
| Provenance | Product Owner scope decision in current task; no stakeholder validation evidence claimed. |
| Review status | APPROVED development-stage assumption; not `VALIDATED` |
| Release priority | Mandatory baseline under approved v0.8 |
| Planned validation activities | Product Owner review; Gate 2 design review; qualified Gate 3 security/privacy review; applicable Gate 5 tests; genuine product-fit review before release |
| Validation evidence | None yet |
| Approval reference/date | D-094 and exact v0.8 approval; approval date not supplied |
| Owner | Product Owner |
| Current working version/status | v0.8 / APPROVED development-stage assumption |
| Effective approved version | v0.8 / D-094 and exact-version approval; date not supplied |
| Version history | v0.8 proposed / 2026-11-04 / DRAFT at preparation; subsequently approved for development-stage design under D-094; no validation evidence |
| Deferral/withdrawal rationale | Not applicable |
| Unresolved dependencies | ACCT-L01–ACCT-L08 below; Q-002/Q-003 disposition recorded under D-094; D-095 is approved, while email design details remain open |

### Additional approved replacement requirements and new records

The following text replaces the named v0.7 statements in the effective v0.8 baseline.
FR-020–FR-022 are new approved development-stage assumption records, not validation evidence.

| ID | Proposed v0.8 statement |
|---|---|
| FR-008 | The installation shall record booking, cancellation, rescheduling, QR lookup, attendance, configuration, role, exception, operator-access, outage-reconciliation, and required operational-monitoring events under approved access, privacy, and retention rules, without unnecessary personal information in diagnostic records. It shall also record attributable account verification/recovery/deactivation, individual linking/unlinking, permitted proxy actions, dispute intake/review/hold/reversal, and purpose-limited email events under those rules. |
| FR-010 | Each successful booking, cancellation, or rescheduling action shall produce an accessible confirmation that is readable on screen, printable, and screenshot-friendly, containing the booking reference, service, date/time, location and arrival instructions, QR/reference presentation guidance, booking-management instructions, and status. Under proposed D-095, purpose-limited transaction email may also be sent only to the recipients and with the content specified in §5; delayed or failed delivery shall neither reverse a committed change, trigger a duplicate command, nor turn an unknown outcome into success. Reminders, SMS/OTP and marketing remain excluded. |
| FR-013 | Authorized staff shall be able to create a booking for an attendee, including a proxy booking where the booker and attendee are distinct, and a streamlined staff-assisted walk-in requiring only the information necessary under the applicable booking and service policies, while preserving required identity information, capacity and duplicate enforcement, authorization, validation, auditability, and the relationship needed for service. Acting staff, original booker and attendee remain distinct; staff assistance does not itself transfer customer authority. |
| NFR-009 | The MVP shall minimize collection and display, enforce least-privilege access, protect roster and audit data, and support approved retention/deletion rules. Exact periods, legal bases, notices, and jurisdiction-specific obligations remain open for qualified review. Common and justified service-specific data, prefill, profile, booking, audit and email visibility shall also be limited by purpose and authority. Booking edits shall never silently update an account profile, and profile edits shall never silently rewrite a booking. Account, appointment and audit deletion treatment remains subject to D-079 before Gate 3 security/privacy review approval; no universal period is inferred. |
| NFR-010 | Every approved core workflow shall have automated success, rejection, authorization, and failure-path tests as applicable, and all required tests shall pass before release. No code-coverage percentage is approved. The approved core-workflow inventory shall include applicable guest, account, proxy, recovery, link, dispute, deactivation, email and change journeys, with concurrency and cross-appointment denial tests where applicable. |
| FR-020 | Provide account-verification, password-recovery and appointment-scoped guest-access email paths under proposed D-095. Possession of an email address, reference, QR or account session alone does not establish attendee or representative authority. Staff-assisted recovery requires documented verification, assigned permission and audit. |
| FR-021 | Permit an authenticated account to request an individual link only to an appointment for which that customer is independently verified as the original booker; require explicit confirmation and attributable audit. Do not link by matching personal information alone or expose unrelated bookings. Support authorized reversal and contested-claim review without automatic cancellation. |
| FR-022 | Use a minimal common booking form plus approved service-specific fields, distinguishing booker, attendee and acting staff. Service fields require approved purpose, validation, visibility and retention. Permit profile prefill with notice and a separate explicit profile-edit action. |

### Proposed business-rule replacements and additions

| ID | Proposed v0.8 rule |
|---|---|
| BR-002 | Client/service duplicate policy uses approved attendee or eligibility identifiers, comparison window, warning/blocking behavior and exceptions; the same rule applies to guests and accounts. Account ID, booker email or booker identity alone cannot substitute for the approved attendee criterion. Preserve legitimate proxy and multiple-attendee cases, privacy limits and atomic enforcement. Exact values remain open under Q-021. |
| BR-005 | Service availability, duration, buffers, resources, cancellation/rescheduling windows, grace periods, and ordinary capacity remain client policies; no fixed historical value is a universal default. Self-service cancellation/reschedule is limited to authorized, uncontested, future eligible appointments before the effective deadline; later or restricted actions require separately authorized review. No universal cutoff value is invented. D-089 excludes MVP cancellation/no-show penalties; unrelated service fees remain separately unresolved. |
| BR-006 | Guest, staff-assisted, proxy, and streamlined walk-in booking remain permitted MVP modes, subject to approved service policy that enables, restricts or prohibits proxy action and defines attendee-presence and minimum-field rules. Record original booker separately from attendee and acting staff. A verified booker may manage permitted scheduling only within that service's visibility, consent/evidence and change restrictions; attendee status alone does not grant booker authority. Contested actions are held for authorized review without automatic cancellation. |
| BR-011 | Never auto-link from matching personal data. Link one appointment only to the independently verified original booker after explicit confirmation; preserve actor/attendee distinctions, audit and reversible dispute handling. An account session or reference/QR alone is insufficient. |
| BR-012 (new) | Registration disablement affects new signup only. Existing verified accounts retain authorized access; guest booking and verified scoped guest management remain available. Account deactivation ends account access but neither cancels appointments nor erases records required by approved policy. |
| BR-013 (new) | A reschedule commits old-slot release and new-slot reservation as one operation after current authority, state, duplicate and capacity checks. On known rejection the original booking remains intact. On an unknown outcome, reconcile authoritative state before retry or confirmation; email delivery is outside this transaction. |

For FR-020–FR-022 and BR-012/013: working version v0.8; approved for development-stage
design under D-094/D-095 and the exact-version approval recorded in Decision Register
revision 1.19; approval date not supplied. Validation evidence remains none. Owner: Product
Owner. Planned validation remains policy review, Gate 2 design, Gate 3 security/privacy review
and later Gate 5 tests. The identifiers are effective and permanent; approval does not mark
them `VALIDATED`.

## 5. Proposed journey, rule and acceptance-criterion records

### Proposed user journeys

| ID | Proposed record | Status | Related requirements | Open references |
|---|---|---|---|---|
| UJ-001 (v0.8) | A public customer discovers services, enters as a guest or chooses optional account sign-in/registration, selects service/date/time with a live selection summary, supplies required details, reviews all submitted information, explicitly submits, and receives only an established booking outcome; guest booking requires no account. | DRAFT | FR-001–FR-003; FR-005; FR-010; FR-018; proposed FR-019 | D-046 successor pending; D-066/D-070/D-090; AC-001/002/005/013/014/018; ACCT-L01–L08 |
| UJ-003 (v0.8) | A guest using approved scoped proof or a registered customer for an appointment authorized to that account, or authorized staff, requests an eligible cancellation/reschedule and receives only the actual established outcome. | DRAFT | FR-007; FR-010; proposed FR-019 | Q-020; ACCT-L02/L03/L04/L06 |
| UJ-006 (new) | Where customer accounts are enabled under approved installation policy, a customer may register/sign in or continue as guest; a registered customer books using the same service/date/time/details/review/submission process and the same final integrity policies as a guest; the account dashboard exposes only appointments authorized for that account. | DRAFT | FR-002/003; proposed FR-019; NFR-003/007/009 | D-046 successor pending; Q-002/Q-003; ACCT-L01/L03/L05/L07/L08 |
| UJ-007 (new) | A registered customer signs in, opens a personal dashboard, views authorized appointments, opens an authorized detail, requests an eligible change, sees an established outcome, and signs out. | DRAFT | FR-007/008/010; proposed FR-019; NFR-003/009/010 | Q-015/Q-020; ACCT-L02–L08 |

### Proposed business rules

| ID | Proposed rule | Status | Links |
|---|---|---|---|
| BR-010 (new) | Guest and registered-customer bookings use the same effective installation/service availability, eligibility, capacity, duplicate, exception, and final integrity policies. Account status alone grants no booking priority, capacity, override authority, or appointment status privilege. | DRAFT | FR-002/003; proposed FR-019; NFR-006; D-043/044/048/059/070; AC-014/018 |
| BR-011 (new) | A guest-created appointment is never associated by matching personal information alone. Individual linking requires independent original-booker proof, authenticated account control, explicit confirmation and audit; attendee status, an email token, a reference or QR alone grants no link. A contested link or proposed self-service change is held under the §5 actor/action boundary pending assigned case review, with no automatic cancellation. | DRAFT | FR-007/008/021; FR-019; NFR-003/009; D-045/050; AC-015/017/021/025; ACCT-L03/L04 |

### Proposed acceptance criteria

| ID | Related requirement | Proposed criterion | Status | Validation need |
|---|---|---|---|---|
| AC-014 (new) | FR-002/003; proposed FR-019; BR-010; NFR-006 | Given equivalent effective policy and valid request details, guest and registered-customer booking requests are subject to the same availability, eligibility, capacity and duplicate decisions; account status alone changes neither priority nor outcome. Both paths preserve the approved 50-request/one-capacity-unit integrity result. | DRAFT | Exact policy preconditions and later isolated tests; no result claimed. |
| AC-015 (new) | FR-007; proposed FR-019; BR-011; NFR-003/009 | A signed-in customer can view only an appointment booked by that authenticated original booker under the account, or individually linked after independent original-booker proof. A proxy-created record exposes only the booker's permitted scheduling view under approved service policy, never restricted attendee data by account status alone. Eligible changes require the same appointment-specific authority and state/deadline check. Unrelated or unassociated appointments are denied without disclosure or mutation. | DRAFT | Proof procedure and service-specific visibility require policy review; test own, proxy and cross-appointment cases. |
| AC-016 (new) | FR-003; proposed FR-019; NFR-003/007 | A public user can complete the entire guest booking path without creating/signing in to an account; account entry can be skipped without losing the chosen booking context. | DRAFT | Confirm wording and later usability/accessibility evidence. |
| AC-017 (new) | FR-007; proposed FR-019; BR-011; NFR-003 | Matching personal information between a guest appointment and a customer account does not by itself expose the appointment or authorize a change. | DRAFT | Association policy and security review; no matching algorithm assumed. |
| AC-018 (new) | FR-002/003; proposed FR-019; FR-010; NFR-006 | The proposed landing → entry → selection/live summary → details → final review → explicit submission journey shows confirmation only after authoritative success; stale availability/rejection and unknown submission outcomes are distinct, and unknown is neither success nor rejection or a license to blindly resubmit. | DRAFT | Checkpoint 11 design review; later implementation tests. |
| AC-019 (new) | proposed FR-019; NFR-003/007/009/010 | Registered-customer sign-in, dashboard, authorized appointment list/detail/change request, denial, empty state, recovery and sign-out are included in the approved core-workflow inventory, with authorization and failure tests before release. | DRAFT | Exact authentication/recovery/retention policies and evidence ownership remain open. |
| AC-020 (new) | FR-019; BR-012 | Disabling registration blocks new signups, including an incomplete signup at the activation boundary, while existing verified accounts retain sign-in and authorized dashboard/actions; guest booking and scoped guest management still work. | DRAFT | Installation administration and transition handling review; later Gate 5 tests. |
| AC-021 (new) | FR-021; BR-011 | An appointment is linked individually only after authenticated account control, independent original-booker proof and explicit confirmation; unrelated bookings and attendee-only claims stay inaccessible. Only assigned staff or supervisor with approved case-review permission may accept a dispute, place or release its hold, or reverse a link after documented review; the claimant and account holder may submit a dispute but cannot self-release the hold or reverse another party's link. Link, denial, reversal and dispute outcomes are attributable and do not cancel the appointment. | DRAFT | Proof method and staff case-review assignment require design and Gate 3 authorization review; test claimant, unrelated-account and staff denials. |
| AC-022 (new) | FR-013/022; BR-002/006 | Service-specific proxy and duplicate policies apply equally to guest/account bookings using approved attendee/eligibility criteria; prohibited proxy or duplicate actions fail without partial booking or unrelated disclosure. | DRAFT | Service policies and later concurrency/authorization tests. |
| AC-023 (new) | FR-022; NFR-009 | The common form collects only approved minimum data; justified service fields are shown when applicable. Prefill is explained, and changing booking details does not edit the saved profile or other bookings; profile edits require a separate action. | DRAFT | Qualified privacy review and UI tests. |
| AC-024 (new) | FR-010/020; D-095 proposal | Each of the six permitted email events follows the recipient/content matrix below. A failed/delayed email neither changes a committed appointment nor triggers a duplicate action; the full accessible on-screen/printable/screenshot-friendly confirmation remains available. Token possession grants only its approved single-purpose scope and does not prove attendee, guardian or unrelated-appointment authority. | DRAFT | D-095 approval, Gate 3 threat/privacy review and Gate 5 recipient, content, denial and delivery-failure tests. |
| AC-025 (new) | FR-007/019/021; BR-005/006/012 | Upcoming and retained past dashboard lists respect individual authorization and service-specific proxy visibility. A contested link or self-service cancellation/reschedule is held for case review: the affected link/change and its email or confirmation are not executed while held; existing appointment and authorized staff attendance work remain intact. Only assigned staff/supervisor with case-review permission may release or reverse after documented review. Deactivation removes account access but preserves appointments and permits later independently verified scoped guest or authorized staff management. | DRAFT | Dispute intake/review procedure, retention policy and later hold/release/cross-appointment tests. |
| AC-026 (new) | FR-007; BR-013; NFR-006 | A successful reschedule atomically reallocates capacity. A known failure preserves the original appointment; an unknown outcome prompts authoritative status reconciliation before retry, without a false confirmation or email-triggered repeat. | DRAFT | Q-020 state/deadline policy and later contention/failure tests. |

**AC-009 exact proposed replacement criterion:** An eligible cancellation or rescheduling
produces a clear confirmation, atomically releases or reallocates capacity as applicable,
and cannot create a duplicate or over-capacity booking. Known rejected changes leave the
original appointment intact; an unknown outcome requires authoritative reconciliation
before retry or confirmation. No cancellation or no-show penalty is charged or imposed in
the MVP under D-089. **Replacement validation need:** Confirm client/service deadlines,
eligible states, independently verified guest/account authority, atomicity and conflict
outcomes. Unrelated service fees require separate policy disposition.

### Proposed appointment-authority and email acceptance boundaries

These are proposed policy boundaries for AC-015/021/024/025, not a selected proof or
delivery mechanism. Each decision is made server-side for the specific appointment,
service, actor, action and current state; denial discloses no unrelated data or mutation.

| Actor / claim | Permitted action and limit | Denial / review case |
|---|---|---|
| Authenticated original booker who booked under that account | View own permitted booking details and request eligible scheduling changes; proxy-created bookings expose only the approved booker view, withholding restricted attendee fields. | Account sign-in alone does not unlock attendee/guardian identity, sensitive-service details, another booker's appointment, attendance changes or staff controls. |
| Independently verified original booker of a guest booking | Request one explicit link or independently verified appointment-scoped guest management; proof binds claimant, booking and action. | Matching name/contact, account email, reference, QR or emailed token alone does not prove original-booker or representative authority. |
| Attendee, guardian or proxy claimant | Book or manage only when approved service policy permits that relationship, required consent/evidence and limited view/action; guardian/attendee authority is separately verified where required. | Attendee status, proxy role or booker-account control grants no restricted information or management powers by itself. |
| Assigned staff / supervisor | Perform only role- and service-authorized work. Assigned case-review permission and documented evidence are required to place/release a dispute hold or reverse a link; reversal removes account access, preserves the appointment and audit, and transfers no ownership. | Ordinary staff without case-review permission and public actors cannot resolve a dispute or override a hold. |
| Contested claimant or account holder | Submit a dispute about a specific link or proposed self-service change. A hold blocks that link/change, its transaction email and success claim pending review; the existing booking and permitted staff attendance continue. | Neither party can self-release a hold, cancel by disputing or access another appointment. Denied/reversed claims leave other records unchanged. |

| Email event under proposed D-095 | Permitted recipient | Authority-limited content |
|---|---|---|
| Account verification | The address being verified for that pending account only. | Single-purpose verification instruction; no appointment, attendee or profile details. |
| Password recovery | The verified address of the account being recovered only. | Single-purpose recovery instruction; no appointment list, attendee details or credential disclosure. Unknown-address responses remain privacy-limited. |
| Appointment-scoped guest access | Independently established original booker's approved booking contact, after scoped proof and service-policy checks. | Single-appointment, single-purpose access instruction; no restricted attendee or sensitive-service detail. Token control enables only the approved access step, not attendee/guardian proof or access to a second appointment. |
| Successful booking | Verified account contact of the authorized original booker, or approved contact supplied by the original guest booker, subject to service-policy contact restrictions. | Reference, transaction status and safe route to the full on-screen confirmation; service/date/location or attendee detail only if separately authorized for that recipient. No QR or restricted attendee detail by default. |
| Successful cancellation | Same currently authorized original-booker contact for that appointment, after the committed change. | Reference, cancellation status and safe management route; no restricted attendee/service detail beyond that recipient's authorized view. |
| Successful rescheduling | Same currently authorized original-booker contact for that appointment, after the committed change. | Reference, reschedule status and safe management route; new time/location only if permitted for that recipient by service policy; no restricted attendee detail. |

No email is sent for an uncommitted, rejected, unknown or held transaction. The
on-screen confirmation still contains all FR-010 fields for its authorized viewer;
email is an additional limited channel. Recipient changes, delivery safeguards,
token design and evidence procedures require Gate 2 design and Gate 3 review.

## 6. Explicit open account policy decisions

The following track **remaining details of proposed policy directions**, not wholly open
product preferences. Draft-local labels are not official Decision Register `Q-###` identifiers.

| Draft-local label | Open decision | Required resolution checkpoint |
|---|---|---|
| ACCT-L01 | Registration is configurable per installation and disables new signup only. Open: which client-administrator permission changes it, and disposition of in-progress signup when switched off. | Product Owner policy before final Gate 2 architecture approval. |
| ACCT-L02 | Email/password and email verification, password recovery, scoped guest email access and staff-assisted recovery are proposed. Open: independent proof assurance, credentials/sessions, delivery failure and abuse procedures; D-095 approval is prerequisite to email scope. | Product Owner policy, Gate 2 design and Gate 3 threat/privacy review. |
| ACCT-L03 | Individual original-booker linking follows the actor/action boundaries above. Open: independent proof procedure, assigned case-review role mapping, dispute evidence and audit detail. No name/contact match, email token, reference or QR alone suffices. | Product Owner policy before final account-access design; Gate 3 authorization review. |
| ACCT-L04 | Service-configurable proxy restriction and the held-action boundary above are proposed. Open: service-by-service guardian/attendee consent or evidence, sensitive-field catalog, dispute intake workflow and authorized exceptions. | Product Owner service-policy values before final Gate 2 design; Gate 3 review. |
| ACCT-L05 | Minimal common form, approved service fields and optional profile prefill with separate profile edit are proposed. Open: field catalog, purposes, notices, visibility and correction rules. | Client/service policy and qualified privacy review before final data design. |
| ACCT-L06 | Deactivation preserves appointments; retention follows approved client/service policy within mandatory privacy requirements. Open: legal basis, notice, effective periods, deletion/anonymization and audit treatment. No universal duration. | Product Owner and qualified privacy/legal review before Gate 3 review approval (D-079/Q-015). |
| ACCT-L07 | Registration/sign-in/recovery abuse prevention controls and rate/lockout behavior. No numerical threshold or mechanism approved. | Product Owner policy and Gate 3 threat/privacy review; test obligations mapped before Gate 5. |
| ACCT-L08 | The six event-specific recipient/content boundaries above are proposed. Open: contact verification and change procedure, service-specific field permissions, consent/notice, token/delivery safeguards, accessibility/device evidence and QR availability. Account status does not expand QR identity or change authority. | Client/service policy and Product Owner review in Gate 2; D-095 and Gate 3 privacy review; Gate 5 verification. |

Other approved open items remain unchanged: Q-009/Q-018 internal staff authentication and
permissions; Q-015 privacy/retention; Q-020 cancellation/rescheduling cutoff; Q-021 duplicate
identity key/window; Q-016/Q-022 remaining quality targets; QR-L01–QR-L12. D-079 deadlines
remain binding.

## 7. Scope and governance exclusions

- Staff, supervisor, client administrator, and system-operator boundaries remain those in
  D-034/D-045/D-047/D-048/D-075 and FR-004/FR-012/FR-015. Customer accounts do not become
  internal roles or grant staff/admin/operator authority.
- Guest reference/QR remains a locator/presentation aid, never independent identity proof
  or appointment-change authority. QR lookup remains distinct from identity checks and
  attendance recording.
- Email/password and the six purpose-limited email categories are approved by D-094/D-095.
  No provider, token/session design, independent identity
  proof procedure, retention period, database/schema, API route or deployment is selected.
- The approved v0.8 amendment establishes the account scope defined in D-094; D-046 remains
  preserved as history, D-061's account-free guest requirements remain in force, and other
  D-042 exclusions remain unchanged.
- This approved targeted/versioned amendment does not reopen Gate 1 or change the historical
  D-082 approval. Requirements Governance §§6/8 do not require automatic Gate 1 reopening for
  every material amendment; no Gate 1 status transition is recorded.
- Gate 2 remains IN PROGRESS. Checkpoint 11 remains authorized, NOT STARTED,
  not accepted or completed. No implementation
  or gate transition is authorized by this requirements baseline.
