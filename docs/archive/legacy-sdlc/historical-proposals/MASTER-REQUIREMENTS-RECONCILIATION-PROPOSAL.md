# iTakda — Master Requirements Reconciliation

> **PROPOSED — PENDING PRODUCT OWNER APPROVAL.** This is an analysis and change-control
> proposal only. It does not amend the effective requirements baseline, approve or
> supersede a Decision Register entry, alter checkpoint/gate status, approve architecture,
> or authorize prototype or product implementation.

> **Current proposal reading rule (2026-11-04):** Earlier option lists and "open"
> account/email/ownership wording in this analysis describe the initial proposal
> stage. The corrected proposed Requirements Specification v0.8 §5–6 supplies the
> current actor/action, held-change, six-email recipient/content and D-089 fee
> boundaries; proposed Traceability rev 1.2 §7 supplies individual delta links.
> Remaining proof methods, service policy values and retention/deletion treatment
> retain their stated Gate 2/3 deadlines. Neither proposal is effective until exact
> Product Owner approval; Checkpoint 11 remains authorized, NOT STARTED and unaccepted.

| Field | Value |
|---|---|
| Product | iTakda Appointment Management System |
| Gate | Gate 2 — Architecture & Design; repository status remains IN PROGRESS |
| Source baseline | Requirements Specification v0.7 and Requirements Traceability revision 1.0, D-081; approved development-stage assumptions, not representative validation |
| Prepared for | Product Owner review |
| Review status | PROPOSED / PENDING PRODUCT OWNER APPROVAL |
| Scope | Requirements reconciliation, proposed journeys, controlled impact and prototype alignment; no implementation |

## A. Executive summary

The repository's effective baseline supports **account-free guest booking**, staff-assisted,
proxy and walk-in booking, authorized account-free guest changes, individual staff
authentication, role-scoped internal work, client administration, and strict operator
data-access boundaries. It does **not** include public customer registration or login.

The clarified Product Owner preference to offer optional customer accounts is a material
scope change against D-046, D-061, D-042, the D-081-approved Requirements Specification
v0.7, and the current Checkpoint 11 Stage 1 screen proposal. This report treats that
preference as a **proposed change requiring explicit recorded disposition**, not as an
already effective decision. Guest booking remains mandatory in the proposal; customer
accounts are an additional path and do not confer capacity, priority, booking status, or
access to guest-created appointments by default.

The repository contains an unusually developed provisional Checkpoint 11 screen/state
inventory and an interactive fictional public/staff preview, but its recorded Gate Register
status says Checkpoint 11 is **authorized, NOT STARTED**. That is a status/evidence
reconciliation issue for the Product Owner: design documents and prototype files exist,
but their presence does not establish start authorization acceptance, completion, or review.

Recommended journey: a common landing and service-discovery entry; guest or optional
registered entry; service/date/time selection with a persistent live summary; required
details; a final review of all submitted data; explicit submission; then only the actual
established outcome. Preserve stale availability, rejection, unknown submission outcome,
and safe recovery paths. A reference or QR remains a locator/presentation aid, never proof
of identity or authority.

**Proposed controlled change:** prepare a successor decision to D-046 (retaining D-046 and
its rationale as history), then create a new working requirements version and matching
traceability update under Requirements Governance §§6/8. D-081 remains effective until
the Product Owner expressly approves exact replacement versions. The records do not say
that every material change automatically reopens Gate 1; the Product Owner must explicitly
decide whether this account-scope change needs a targeted Gate 1 review/reopening before
Gate 2 proceeds against the revised baseline.

## B. Verified existing approved baseline

### Authority and status

- `docs/ENGINEERING_GOVERNANCE.md` §§3, 5–8, 15, 18–21: Product Owner owns scope,
  architecture, security exceptions, release and gate transitions. Gate 2 work is
  architecture/design documentation only. A planning artifact or suggestion does not
  authorize implementation. Material changes to approved requirements must be versioned;
  conflicts and unresolved decisions are escalated.
- `docs/GATE_REGISTER.md` §5 and D-093 entry: Gate 2 is **IN PROGRESS**. Checkpoint 11 is
  “Authorized, NOT STARTED”; Checkpoint 12 and final Gate 2 review are pending. Gate 3–7
  remain blocked. The required package includes complete annotated screen/state coverage,
  responsive/accessibility design, a connected representative prototype, traceability and
  recorded Product Owner/usability/accessibility review findings.
- D-082 separately approved Gate 1 exit and Gate 2 documentation entry on 2026-10-29.
  D-081 approved Requirements Specification v0.7 and Traceability rev 1.0 as bounded
  development-stage assumptions only. Neither represents actual validation or release
  approval.
- The working Checkpoint 11 documents at `docs/design/CHECKPOINT-11-SCREENS-AND-INTERACTIONS.md`
  and `docs/design/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md` both identify
  themselves as provisional proposals, not accepted deliverables. Their presence alongside
  “NOT STARTED” in Gate Register §5 requires explicit status/evidence reconciliation; no
  status is changed here.

### Current in-scope public and internal behavior

- FR-002/FR-003 and D-046/D-061: guest booking without a public account; staff-assisted
  and proxy booking; proxy booker distinct from attendee where applicable.
- FR-007, UJ-003 and D-061: eligible guest cancellation/rescheduling through an approved
  scoped path, without mandatory public accounts. Proof, recovery, eligibility and cutoff
  are unresolved. A QR/reference alone grants no authority (D-045, D-085(1), D-090).
- D-047/FR-004/FR-014: individual staff authentication/accountability and authorized
  role-scoped appointment work. Detailed staff authentication/provisioning and role
  permission matrix remain open (Q-009/Q-018). Staff lookup, separate identity/entitlement
  check where required, and explicit attendance are distinct.
- D-048/FR-015: configured exceptions require supervisor authority and reason/audit;
  ordinary staff and public users do not get silent overrides.
- FR-001/FR-008/FR-016/FR-017, D-073/D-074: client-scoped services/schedules/configuration,
  attributable operations, essential operational monitoring, controlled daily roster and
  structured paper reconciliation. FR-011 advanced analytics/reporting remains deferred.
- FR-012/NFR-005 and D-034/D-075: operator handles authorized technical duties; no default
  client-record or client-administrator access. Exceptional access requires client
  authorization, least privilege, defined scope and duration, attribution, review and
  closure. No operator portal is a requirement.
- Every client has a separate installation/data boundary (D-020/D-035); no shared tenancy
  or CEAP dependency is adopted. D-089 excludes cancellation/no-show penalties from MVP.

## C. Product Owner's clarified vision

For review as a proposed scope direction, iTakda should provide the same public landing
page and underlying booking process to both guests and registered customers. A customer
may optionally create/sign in to an account and access a personal dashboard and associated
appointments. Both account holders and guests can book; account status alone provides no
capacity, priority, status or override advantage. Guest booking and a secure, account-free
appointment-management path remain fully supported. A customer account must not silently
claim guest bookings.

Proposed connected public journey:

```text
Public landing
  → guest or optional registered-customer entry
  → service discovery
  → date/time selection (+ persistent live summary)
  → required booking details
  → final review and explicit submission
  → established success, rejection, stale-availability, or unresolved outcome
```

This vision expands the recorded baseline only if and when the Product Owner approves the
successor decision and exact requirements versions. It does not determine which account
policies should be installation-configurable or choose authentication/recovery technology.

## D. D-046 and dependent-decision impact

### Exact approved D-046 wording and rationale

Decision Register §3, D-046 (APPROVED; approval date not recorded):

> “MVP booking supports guest booking without a public account, staff-assisted booking,
> and proxy booking that distinguishes the booker from the attendee. Public
> self-registration/login is deferred. Exact identity fields, proxy authorization evidence,
> and service-specific attendee-presence rules remain configurable or unresolved.”

Rationale recorded with D-046: “Supports front-desk and customer realities without making
public accounts an MVP dependency.” Consequence: “Guest, assisted, and proxy journeys
enter the MVP; unnecessary personal data must not be collected.”

### Why registration/login were deferred

The recorded reason was to avoid making public accounts a dependency for MVP and preserve
low-friction guest, assisted and proxy booking. It was not a finding that accounts are
unsafe or technically impossible. The source provides no approved account implementation
or data-sharing policy. The rationale and D-046 stay intact as historical context even if
a successor is approved.

### Dependent decisions and records

- D-042 defers public accounts in the MVP scope/exclusions; D-046 records the specific
  booking and public-registration/login boundary. D-061 reaffirms secure account-free guest
  booking and authorized cancellation/rescheduling without mandatory public accounts.
- D-057 defers SMS/OTP-based verification and automated outbound messaging; do not infer
  SMS-based registration, recovery, or MFA from account inclusion.
- D-045, D-085(1–2), and D-090 keep reference/QR distinct from identity and change authority;
  guest scoped proof/recovery remains unresolved.
- D-047 defines internal staff/supervisor/admin boundaries, not customer account roles.
- D-050/NFR-009 require minimization and leave retention/legal basis/notices unresolved.
- D-081 makes v0.7/rev 1.0 the effective requirements baseline; FR-003 explicitly specifies
  account-free booking and FR-007 scoped guest changes. UJ-001/UJ-003 and AC-001/AC-009
  currently describe those paths. NFR-003 requires approved authentication and server-side
  authorization, including scoped guest authentication.
- D-085/D-090 accepted working architecture designs treat account-free guest and scoped
  management as current directions; their approval is bounded to Gate 2 working design.
  `CONCEPTUAL_ARCHITECTURE.md` §7 and `COMPONENT_MODULE_DESIGN.md` §§2–4 explicitly list
  public accounts as not MVP. `INTERFACE_API_DESIGN.md` §§1, 3 models no public account.
- Checkpoint 11 screen proposal §§1, 2, 5 and the Gate Register D-093 package describe
  account-free booking/management and say no deferred capability is added by the map.

### Change-impact assessment

| Area | Impact if optional accounts are approved | Required controlled follow-up |
|---|---|---|
| Functional scope | Add registration/sign-in, customer dashboard, account-linked appointments and account booking path; keep all guest capabilities. | New draft requirement records and journeys/criteria; exact owner approval. No silent rewrite of v0.7. |
| Existing requirements | FR-003's “without creating or signing in” is compatible as guest path but not a complete registered path; FR-007's guest path remains, with registered changes only after separate authorization. FR-008/010/012 scope remains. | Propose v0.8 (or next approved version) with explicit change history for touched records and new stable IDs only after authorized assignment; update traceability together. Preserve D-081 effective v0.7 until approval. |
| Journeys/criteria | Add registration, sign-in, account dashboard, account appointment list/details, account-authorized changes and sign-out; guest journey unchanged. | Proposed account UJ and AC records with outcomes, denials and no account privilege for capacity. Existing UJ/AC statuses do not advance automatically. |
| Security/privacy | New credential lifecycle, account enumeration, takeover, weak/reused credentials, recovery abuse, profile data reuse, cross-path account association, deactivation, data-subject and retention concerns. | Threat/privacy review in Gate 3; Q-015 and abuse constraints; approved auth/recovery and account association policy before design is treated final. No mechanism assumed. |
| Architecture/data model | Need to decide whether a durable customer identity/profile exists, which appointment attributes can associate, how guest-to-account association is proven, separation from internal principals, and authorization scopes. Existing data model #08 explicitly says reuse is optional and no customer masterlist. | Revise working logical model only after PO scope disposition; avoid equating guest contact match with account ownership. No physical schema selection in this task. |
| Interface/design | Additional entry choices, sign-up/sign-in/recovery, dashboard, empty/error states, account appointment detail/change, navigation and sign-out; no account-only booking shortcut. | Reconcile Checkpoint 11 inventory with FR/UJ/AC/WF/IF references. Annotated screens can remain specs; representative paths should be interactive. |
| Testing/release | Add registration/sign-in/recovery, ownership/association, privilege parity, abuse, account/guest isolation, deactivation/retention and accessible mobile tests. Add no-account and account booking regression coverage. | Add NFR-010/AC-008 workflow mapping for PO approval; Gate 5 test evidence later. Include trained product-fit and qualified independent privacy/security review before release per D-077. |
| Gate 1 / change control | Material scope and actor change after Gate 1 approval. No repository rule says every material amendment automatically reopens Gate 1. | Product Owner to decide explicitly between a controlled versioned amendment with targeted review and formal Gate 1 reopening. Preserve D-082 history and do not change gate status here. |

**Recommended decision form:** propose a successor D-### linked to D-046/D-042/D-061 that
states optional customer accounts are an additional MVP path; guest remains first-class;
accounts create no booking priority/capacity/status privilege; the successor defines the
approved scope only and leaves installation configurability, credential verification and
recovery, guest association, privacy and account lifecycle decisions explicitly open unless
the Product Owner decides them. D-046 must remain unchanged and not be marked superseded
until the successor is explicitly approved and entered into the Decision Register.

## E. Revised customer journey proposal

### Recommended step order

The two described orders can be reconciled: expose a **live selection summary** while the
customer selects service/date/time, then collect required details, then show a **final
review of all information actually being submitted**, then submit. This retains the useful
early “review selection” as persistent context, while avoiding a premature extra step before
the customer has supplied details. It provides one clear final checkpoint and avoids
redundant review screens.

1. Public landing / service discovery and explicit “Book” / “Manage appointment” entry.
2. Guest or optional registered-customer entry; account creation/sign-in is optional and
   does not gate guest booking.
3. Select service, date, available time; show actual alternatives if unavailable. Keep a
   live summary visible (reflowed above controls on narrow viewports); availability is not a
   reservation.
4. Enter only approved required booking details; validate and preserve safe input on errors.
5. Final review of service, date/time, location, attendee/booker distinction and all
   required fields; allow edit without losing other valid entries.
6. Submit once; show progress and suppress duplicate activation while outcome resolves.
7. Show confirmation only for an authoritative successful result; show rejection/stale
   availability with current alternatives; show “result not yet confirmed” for unknown
   outcome with status/follow-up only, never a blind replay/new-booking action.

This is a proposal, not a replacement of Stage 1 screen sequence or a new approved
requirement. The latest Checkpoint 11 P01–P05 sequence already follows service/date/slot →
details → review/submit → actual outcome and explicitly documents stale, rejection and
unknown outcomes; add landing/account entry and retain live summary as framing.

### Proposed journey map: public actors

| Journey | Entry / actor / preconditions | Main path | Alternatives, failures and authority | Trace and unresolved dependencies | Prototype coverage |
|---|---|---|---|---|---|
| Guest booking | Public landing; guest; client installation has publishable service and usable policy. | Discover → service/date/time → required details → final review → submit → actual outcome. | Stale/full → reselect actual alternatives; invalid → correct; known rejection → no booking; unknown → status check/follow-up, no blind resubmit. Guest path never requires account. Same final capacity/duplicate rules as registered path. | FR-001–003/010/018; UJ-001; BR-001/002/005/006; AC-001/002/005/013; WF-P01/P02/P05/X01/X02; IF-P01–P05/I03/I04; D-046/061/066/070/090. Open: required fields, duplicate policy, guest proof for changes, QR. | Interactive end-to-end path, including one unavailable/stale branch and one unknown/rejection outcome; success confirmation is outcome-gated. |
| Registered-customer booking (proposed) | Same public landing; optional account holder or person choosing to register/sign in; account status must not alter business booking policy. | Optional create/sign-in → same service/date/time/details/review/submit process → actual outcome → account dashboard link only if booking-account association is authorized. | Continue as guest; registration/sign-in failure returns without losing guest booking path; booking rejected/stale/unknown handled identically to guest. No priority, reserved capacity, eligibility or status advantages by account type. | Proposed additions linked to FR-002/003/007/008/010, NFR-003/007/009/010, UJ-001 and AC-001/002/005/008/009; D-046/061 change needed. Open: availability per installation, verification/recovery, account identity/ownership, profile reuse, cross-path association. | Interactive sign-in/register entry and one account booking path after scope approval; account-specific screens marked proposal until approved. |
| Guest appointment management | Public landing “Manage appointment”; guest/proxy claimant; reference locates candidate but does not authenticate. | Locator → separately approved scoped proof → permitted details → eligible cancel/reschedule → actual outcome. | Non-enumerating denial; recovery route; stale/ineligible/cutoff denial; unknown outcome held unresolved. QR/reference alone never grants details or mutation. Staff-mediated recovery only if approved. | FR-005/007/010; UJ-003; BR-003/005/008; AC-002/009; WF-P03/P04/X02; IF-P06–P10/I01/I03/I04; D-045/061/085(1)/090. Open: claimant proof, recovery, disclosure, cutoff (Q-020), QR lifecycle and account-free recovery. | Interactive placeholder journey with no simulated proof assertion; test denial and accepted vs unknown outcome states without implementing real credential mechanism. |
| Registered-customer appointment management (proposed) | Customer sign-in; authenticated customer; authorized relation to appointment must be established. | Dashboard → My Appointments → detail → eligible change request → actual outcome → refreshed dashboard/detail → sign out. | Empty dashboard; denied appointment not owned/associated; expired session/recovery; stale/cutoff conflict; unknown outcome. Account alone does not claim guest booking. | Proposed links to FR-007/008/010, NFR-003/009/010; UJ-003 extension / candidate new customer UJ; AC-009 extension / candidate criteria. Open: appointment ownership and guest association, deactivation/retention, visibility scope, auth/recovery. | Interactive dashboard/list/detail/change and empty/denied state only after PO disposition; no assumed guest-linking. |

### Customer policy decision register (all undecided unless identified as approved)

| Topic | Existing approved boundary | Product Owner decision needed |
|---|---|---|
| Account availability | Public registration/login deferred by D-042/D-046. | Always available or configurable/disabled per installation? Specify who configures and whether disabled accounts preserve guest booking. |
| Registration/authentication | NFR-003 requires approved authentication for state changes; no customer account mechanism approved. D-057 bars assuming SMS/OTP. | Signup fields, credential requirements, verification level/channel (if any), session and sign-in requirements; do not choose provider/mechanism in proposal. |
| Verification and recovery | Privacy and security mandatory; exact rules open (Q-015). | Verification required for which actions; account recovery method, non-enumerating responses, staff support boundary, abuse controls. |
| Guest proof/recovery | Scoped proof required for protected changes; reference/QR alone insufficient (D-045/D-085/D-090). | Independent proof and recovery path, expiry, claimant/proxy scopes and permitted disclosure. |
| Guest-to-account association | No automatic association is approved; a matching name/contact is not proof. | Whether allowed at all; evidence and authorization needed; appointment-level vs profile-wide scope; history/audit and reversal. |
| Ownership/visibility | Least privilege; account is not authority over unrelated appointment. | Define self/guardian/proxy/shared-family access and which appointment data is visible. No automatic account visibility to guest-created appointments. |
| Duplicate bookings | Same configured policy applies; duplicate warning/blocking and integrity apply to guest and account paths (D-044/D-059). | Ensure no account-type priority or separate capacity; define if and how identity keys correlate account and guest booking under Q-021. |
| Customer data reuse | D-050 minimization; logical model #08 makes profile reuse optional and unresolved. | Whether profile data may prefill, what data persists, purpose/consent/notices, edit scope and minimization. Do not create an implicit customer masterlist. |
| Deactivation/retention | Q-015 legal basis and retention/deletion unresolved; D-050 applies. | Deactivation vs deletion semantics, future booking handling, retained audit/appointment records, legal review and period; no period assumed. |
| Cancellation/rescheduling authority | Guest path exists with approved scoped proof; staff path role-scoped; cutoff unresolved under Q-020/D-079. | Account scope may be a credential path only after authorization policy; same eligibility/cutoff across guest and account unless a separate approved policy says otherwise. |
| Required booking fields | Client/service-policy specific; minimize data; no universal phone/name set fixed. | Required fields per service/installation and consistent guest/account details handling. |
| Confirmation / QR | Confirmation only after success; QR eligible only under approved lifecycle (FR-005/010, D-045/D-065). | Whether account dashboard offers QR or reference, which appointment states qualify, and whether account session permits presentation; account must not expand QR authority. |
| Abuse prevention / rate limits | Security/privacy controls mandatory; no concrete control thresholds approved. | Abuse threats, monitoring and action policy. Gate 3 reviews mechanisms; no numeric rate limit or lockout behavior invented. |
| Accessibility/mobile | NFR-007/D-052/D-069: WCAG 2.2 AA target and current/previous stable Chrome/Edge/Firefox/Safari; actual conformance unverified. | Apply same accessible, responsive support to sign-up, recovery, dashboard and booking; decide applicable device/OS matrix and evidence owners. |

## F. Staff journey alignment

**Proposed connected path:** individual staff sign-in → role-appropriate daily dashboard →
calendar/day/week or appointment list → search/reference lookup → permitted appointment
details → separately authorized operational action → truthful result and refreshed view.

1. Authenticate individual staff principal; reject shared or customer credentials as staff
   authority. Staff provisioning and authentication mechanism remain Q-009.
2. Apply assigned installation/scope and permission checks independently of UI visibility;
   permission matrix is open under Q-018. Dashboard supports daily appointment monitoring,
   attention to operational exceptions and current/freshness context; no advanced analytics.
3. Allow calendar/list navigation, date/status search and reference lookup only within
   authorized scope. Provide safe empty/no-match states and preserve search context.
4. On lookup, treat QR/reference as untrusted locator and return minimum permitted
   verification result. This is **lookup**, not identity verification or attendance.
5. Perform identity/entitlement checks as a separate staff procedure only where the
   applicable approved client policy requires it. Failure means no attendance action.
6. Show appointment details only after a separate identity/entitlement check grants detail
   visibility to that role. Do not treat lookup success as permission to view every field.
7. Attendance action is explicit, individually authorized, current-state validated and
   separately recorded. FR-014's minimum labels (expected/arrived/completed/no-show) do not
   define a legal transition graph; do not invent transitions, correction grants, or
   exception authority.
8. Routine cancellation/rescheduling only within role scope and approved policy. An
   exception routes to supervisor only for an approved configured exception and reason;
   supervisor approval still does not bypass final validation.
9. Return actual outcome, update list/detail state, and preserve rejection/stale/unknown
   distinctions. Escalate unresolved state through approved procedure; do not imply a
   permission or workaround.

**Trace:** FR-004/006–008/013–017; NFR-003/007/009/011; UJ-002/UJ-005; BR-003/007/008/009;
AC-003–005/007/010–012; WF-S01–S03/X01–X03; IF-S01–S10/I01–I07; D-045/D-047/D-048/D-068/D-069/D-073/D-074/D-076.

**Prototype:** sign-in boundary annotation; interactive dashboard → calendar/list → search
or reference lookup → detail → no-mutation lookup result → separate explicitly previewed
attendance action and safe restricted outcome; include daily roster/monitoring entry points
only where the interface contract has approved visibility. Keep attendance identity
verification, authorization and transition rules as annotations where no approved policy
exists.

## G. Administrator journey alignment

**Proposed path:** administrator sign-in → client-scoped administrative dashboard →
management area → review current configuration/impact → edit → validate → confirm/save →
show accepted or rejected effective result and refreshed view.

### Core management areas

- **Appointment oversight:** role-scoped appointment lookup, status and operational
  monitoring; actions only within approved role grants. Staff/admin shells may be shared,
  but navigation/actions must reflect the separately approved role matrix.
- **Services and availability:** service definition, schedule, durations, buffers, staff and
  physical-resource availability, ordinary capacity and other client policy categories
  under FR-001. Values are client-specific; no defaults invented. Show proposed/effective
  distinction and affected-booking impact; reject/hold unsafe changes rather than silently
  invalidate appointments (WF-A01).
- **Staff/user administration:** individual internal principals and role/access management
  by a permitted client administrator. No self-grant or role escalation is assumed;
  exact provisioning, scope and permissions remain Q-009/Q-018.
- **Essential operational monitoring:** privacy-minimized booking failures, unexpected
  errors, security-relevant events, capacity/integrity violations, reconciliation failures
  and other important failures requiring attention (FR-008/NFR-011/D-073). This is
  operational handling, not FR-011 advanced reports, analytics or exports.
- **Audit visibility:** only permitted client roles; record actual outcome and attribution.
  Visibility scope, retention and tamper-resistance design remain open. No organization-wide
  access grant is inferred.
- **Client-scoped configuration:** every screen and action explicitly bound to the single
  independent installation; no cross-installation tenant or shared-data management.

**Trace:** FR-001/004/008/012/015/016/018; NFR-001–005/007/009/011; UJ-002/UJ-004/UJ-005;
BR-004/005/007/009; AC-001/007/011/012/013; WF-A01/S03/O01/X03; IF-A01/A02/S10/I02;
D-020/D-034/D-047/D-048/D-073/D-075/D-079.

**Prototype:** representative interactive service/schedule change with impact preview,
validation and rejected/stale/accepted outcomes, plus internal staff/access-management
list/detail and access-denied states. Where final permissions or policy values are open,
use annotations and non-assertive prototypes, not simulated grants.

## H. Operator boundary verification

The system operator is separate from an ordinary client administrator. Under D-034/D-075,
FR-012, NFR-005, BR-004 and AC-007:

- Routine work is installation, maintenance, updates, backups, monitoring, recovery and
  authorized technical support within separately allocated responsibility (Q-008).
- No default ability to browse client appointments, personal data or client administration.
- Technical host/database/backup/diagnostic custody can confer **effective access**; it is
  not business authority and must be separately assessed in both client-managed and
  provider-managed hosting arrangements (D-083/D-091).
- Exceptional record access requires explicit client authorization, least privilege,
  defined scope and duration, attribution, review and closure. Retention/deletion,
  exceptional duration and break-glass policy are due before Gate 3 security/privacy
  review approval under D-079.
- No operator-facing portal, client-record console or operator appointment navigation is
  required. Existing UJ-004/FR-012/WF-O01/IF-O01 are operational boundary/procedure
  obligations, not a product portal specification.

## I. Requirements and architecture impact matrix

| Record / artifact | Existing state | Impact | Proposed treatment / approval boundary |
|---|---|---|---|
| D-042 | Approved MVP exclusion includes public accounts, alongside other deferred features. | Conflicts with customer-account addition. | Retain as history; successor decision must state exact scope disposition, and D-042 should not be rewritten without explicit approval. |
| D-046 | Approved account-free guest/staff-assisted/proxy model; public registration/login deferred. | Direct conflict with optional account feature. | Preserve exact text/rationale; propose successor decision with link and explicit replacement/effect. |
| D-061 | Approved account-free guest booking and changes without mandatory public accounts. | Account addition can coexist only as optional path, while guest remains; wording/context needs review. | Preserve and explicitly reconcile in successor decision. |
| D-057 / D-045 / D-085 / D-090 | No SMS/OTP assumption; QR/reference is not identity/change authority; scoped guest recovery open. | Account feature does not answer verification or recovery questions. | Carry boundaries forward; no credential/provider/recovery mechanism inferred. |
| D-081 / Specification v0.7 | Effective approved assumption baseline; FR-003 only guest; active requirements and current exclusions. | Public-account functionality materially changes actor/scope and authorization/data model. | Create proposed next version per Requirements Governance §6, preserve v0.7 as effective until exact version approved. |
| Traceability rev 1.0 (effective; present rev 1.1 administrative) | Maps FR-003/007, UJ-001/003, criteria and decisions. | New account paths and dependencies need explicit links and evidence obligations. | Draft matching traceability revision with requirements change; no silent link/status edits. |
| NFR-003/007/009/010/011; AC-006/008 | Auth/privacy/accessibility/test/accountability obligations apply. | Include account security, privacy, accessibility, failure and test paths. | Do not relax or assert conformance; map new flows to later Gate 3/5/6 evidence. |
| Data model v0.1 §3 #08/#11 and §4 | Contact/profile reuse optional; guest authority proof separate; candidate logical model only. | Accounts introduce identity/profile/association ownership and retention questions. | Propose logical impact for review; no physical schema, identity key or account linking mechanism. |
| Component / conceptual / detailed workflow architecture | Current public journey guest-led; account-free in scope. | Add optional presentation/identity responsibility without changing shared final integrity. | Update only after PO decision; same booking command/final integrity policy for both types. |
| Interface/API design v0.1 | Public account and management endpoints not in MVP; scoped guest interfaces proposed. | New account journey contracts and authorization outcomes required. | Extend proposed logical inventory after scope approval; no routes, protocols, credential or security mechanism yet. |
| Checkpoint 11 screens / prototype | Public selection preview and staff dashboard/calendar/list; no login, customer dashboard, details submission or true booking. | Screens and connected paths do not cover full desired product journey. | Maintain proposal status; new prototype roadmap below; no code changes in this task. |
| Release/test | D-068 core workflows need applicable success/rejection/authorization/failure coverage; actual results not present here. | Additional account workflows and guest/account parity tests. | Add to proposed test inventory; actual evidence belongs to authorized later testing/release gates. |

## J. Unresolved decisions requiring Product Owner approval

1. Approve/reject optional registered customer accounts as MVP scope and whether each
   client installation may disable or configure account availability.
2. Approve a successor decision to D-046 and define its relationship to D-042/D-061; retain
   D-046 and historical rationale. Determine whether targeted Gate 1 reopening/review is
   needed; no automatic reopening rule was found.
3. Decide registration/authentication requirements, account verification and recovery,
   while respecting D-057 (no assumed SMS/OTP or outbound messaging) and leaving technical
   mechanisms for appropriate Gate 2/Gate 3 review.
4. Decide whether and under what proof guest-created appointments may be associated with
   accounts; no automatic name/contact matching or account-wide access.
5. Define account ownership, appointment visibility, proxy/guardian/shared access, guest
   and registered duplicate identity relationship, profile reuse, deactivation and retention.
6. Confirm same capacity, duplicate, eligibility, appointment status and change rules for
   account and guest journeys; any exception requires a separately approved business rule.
7. Decide required fields per client/service and confirmation/QR eligibility; no QR/reference
   authority change.
8. Decide abuse-prevention policy and required privacy/security review. Thresholds and
   mechanisms remain unspecified until approved design/review.
9. Accept or revise the recommended live summary → details → final review → submit order.
10. Reconcile Checkpoint 11 actual status: Gate Register §5 says NOT STARTED while Stage 1/2
    design files, prototype source, tests, and screenshot artifacts exist. Decide the status
    and evidence record separately; file existence alone is not acceptance.
11. Keep D-079 obligations visible: Q-020 cutoff and Q-016/Q-022 quality targets before final
    Gate 2 architecture approval; retention/deletion and exceptional operator/break-glass
    policy before Gate 3 review approval; roster handling/disposal before Gate 6 release.

## K. Proposed documentation amendments and file changes

### This package

This new file is the **only proposed documentation addition** in this reconciliation task.
It is deliberately standalone and does not edit `DECISION_REGISTER.md`, the D-081
effective requirements or traceability baseline, `GATE_REGISTER.md`, architecture source
documents, or prototype files. The current governance permits Gate 2 design documentation
and the task specifically permits clearly marked proposal drafts. A separately controlled
package avoids presenting any new policy or exact requirement text as already approved.

### Proposed successor decision (draft text for later PO disposition)

> **PROPOSED successor to D-046 — optional public customer accounts (PENDING PRODUCT
> OWNER APPROVAL):** The MVP may offer optional customer registration/sign-in in addition
> to fully supported account-free guest booking. Guest and registered customers use the
> same booking rules and final booking-integrity checks. Account type alone grants no
> capacity, priority, appointment status, cancellation eligibility or exception privilege.
> A customer account does not automatically grant access to appointments created as a
> guest. Account availability by installation, registration/authentication and recovery,
> verification, appointment association/ownership, customer data reuse, deactivation and
> retention remain unresolved unless separately specified in an approved decision. D-046
> remains preserved as historical rationale; D-042/D-061 must be reconciled explicitly.

Do not add this wording as an approved Decision Register row or choose a D-number/date
until the Product Owner decides and authorizes the formal record update.

### Proposed requirements change package

If the successor decision is approved, prepare a new working requirements version and
matching traceability revision under Requirements Governance §§6/8. Candidate changes:

- Retain FR-003's guest capability and add an explicitly optional registered-customer
  capability; never replace the guest requirement with account-only booking.
- Extend UJ-001/UJ-003 with account paths or add new journey records after permanent IDs
  are assigned under the approved change process.
- Add acceptance criteria for optional account access, account/guest booking parity,
  appointment visibility/association, denied/unassociated appointment access, recovery,
  error/unknown outcomes and mobile/accessibility coverage. Keep each criterion in DRAFT
  until exact approval.
- Trace to G-3/G-6, S-4/S-6/S-7, D-046 successor, D-050/D-057/D-061, D-068/D-069,
  Q-009/Q-015/Q-018/Q-021 and R-2/R-6, plus a new question if the PO authorizes assigning
  one in the Decision Register.
- Preserve D-081 as effective approved version until exact new requirement and traceability
  versions are approved. Do not mark new records `VALIDATED` based on this analysis.

No formal register, specification, architecture, prototype or gate-status file is changed
by this report.

## L. Revised Checkpoint 11 prototype roadmap

This is a proposed bounded sequence for separately authorized prototype work. Preserve
the existing iTakda identity, Midnight Indigo × Sunset Orange direction, source assets,
and useful responsive/accessibility design already present. Do not make a real credential,
booking, QR scan, or appointment mutation in a design prototype.

1. **Resolve scope/status gate:** PO decides account scope, journey sequence and Checkpoint
   11 status/evidence reconciliation. Until then, account-only screens are annotated
   proposals, not adopted requirements.
2. **Connect the public foundation:** landing/service discovery → guest entry → service,
   date and available time with live summary. Include empty/no availability and actual
   alternatives. Interactive.
3. **Complete booking:** required details → final review → explicit submit → successful
   confirmation, known rejection/stale availability and unknown outcome. Prototype outcomes
   are controlled fictional states and clearly labeled. Interactive.
4. **Guest management:** public Manage Appointment → reference as locator → annotated
   approved-proof placeholder → detail/change request/outcome. Demonstrate denial and safe
   recovery without claiming any actual proof mechanism. Interactive shell; proof mechanism
   stays annotation pending decisions.
5. **Optional customer path, pending approval:** register/sign-in and recovery, dashboard,
   My Appointments, detail, authorized change, empty/denied state, sign-out. Interactive
   only after PO scope disposition; clearly show guest path remains available and no
   automatic guest-booking association.
6. **Staff boundary and operations:** sign-in boundary → daily dashboard → calendar/list →
   search/reference lookup → detail → separate identity-check annotation → explicit
   attendance preview and restricted/stale outcome. Add supervisor exception handoff only
   as approved authority allows. Interactive representative path; unresolved transition
   graph stays annotated.
7. **Representative administrator:** client-scoped service/schedule edit → impact review →
   validation/rejection or accepted preview; staff/access management role list and denial.
   Interactive representative workflow; open roles/values remain annotations.
8. **Final design evidence:** annotate all other required Checkpoint 11 screens and states,
   map FR/NFR/UJ/BR/AC/WF/IF, record PO/usability/accessibility design-review findings and
   unresolved dependencies. Keep detailed exception, roster print, reconciliation conflicts,
   operational monitoring and other low-frequency policy branches as annotated
   specifications unless chosen as representative interactive paths.

**Coverage already observed in source:** `prototype/checkpoint-11/index.html` and `app.js`
provide fictional public service/date/time selection and a preview (no details or booking),
plus staff dashboard/calendar/list, search/reference lookup and a deliberately non-mutating
attendance preview. `prototype.test.js` checks preview selection/stale state, lookup
non-mutation, restricted attendance preview and calendar/dashboard data. They do not cover
landing entry, guest details/review/submission outcomes, confirmation, account flows,
guest management, authentication boundaries, administrator configuration/user-management,
real policy enforcement, QR scanning or actual attendance. Existing screenshots/visual
artifacts show responsive design work, but are not evidence of connected functionality,
accessibility conformance or PO acceptance. No prototype code or test was changed or run.

## M. Governance compliance and verification results

### Inspected

`AGENTS.md`; `docs/ENGINEERING_GOVERNANCE.md`; `docs/PROJECT_CHARTER.md`;
`docs/GATE_REGISTER.md`; `docs/decisions/DECISION_REGISTER.md` (including D-046, related
decisions, questions, D-081–D-093); `docs/requirements/REQUIREMENTS_GOVERNANCE.md`;
`docs/requirements/REQUIREMENTS_SPECIFICATION.md`; `docs/requirements/REQUIREMENTS_TRACEABILITY.md`;
`docs/requirements/GATE-1-FINAL-VALIDATION-PACKAGE.md`; Gate 2 conceptual, component,
workflow, data-model and interface/API designs; both Checkpoint 11 design documents;
`docs/research/product-owner-input/PRODUCT_OWNER_RESPONSES.md`; and prototype HTML,
JavaScript, and Node tests. No CEAP material or environment was accessed.

### Changed / not changed

- Added: `docs/design/MASTER-REQUIREMENTS-RECONCILIATION-PROPOSAL.md` (this proposal).
- Not changed: formal decisions, approved requirements/traceability baseline, gate status,
  Checkpoint 11 existing files, architecture artifacts, prototype code/tests/assets.
- No implementation, database operation, dependency installation, deployment, browser
  automation, commit or push performed.
- No tests executed; the prototype/test source was inspected only. No accessibility,
  browser, or prototype behavior verification is claimed.
- No Obsidian learning draft was warranted: this task consolidates project-specific
  decision/requirements impacts into the repository proposal, and repository records
  remain authoritative.
- Graphify was not run: no existing `graphify-out/graph.json` was found, and a full graph
  build would write generated repository artifacts and may require tools/dependencies,
  outside this task's no-install/no-unrequested-artifact boundary.

### Outstanding reconciliation issue

The user-provided task framing says Gate 2 Checkpoint 11 is current; `docs/GATE_REGISTER.md`
§5 and D-093 record it as authorized but **NOT STARTED**. New Checkpoint 11 design and
prototype files are present, but their untracked status and content do not prove formal
start, review, or acceptance. Per Engineering Governance §§3/21, this is reported rather
than silently resolved. Product Owner should reconcile the status and evidence before
recording any checkpoint transition.

## N. Exact recommended next approval step

The Product Owner should review this proposal and issue one explicit written disposition
covering:

1. Whether optional customer accounts enter MVP while guest booking stays mandatory;
2. Whether to authorize a **successor decision to D-046** and a controlled next requirements
   version plus matching traceability amendment, including whether targeted Gate 1
   reopening/review is required; and
3. Whether the proposed booking sequence and Checkpoint 11 status/evidence reconciliation
   are accepted as working directions.

Only after that recorded authorization should formal decision/requirements artifacts be
updated. Keep D-046, D-081 and the present Gate Register status in force until explicit
Product Owner approval is recorded. Gate 2 remains IN PROGRESS; no Checkpoint 11 completion,
Gate 1 reopening, Gate 2 closure, Gate 3 entry, or implementation is asserted here.

---

## O. Product Owner scope disposition and controlled amendment status (2026-11-04)

The Product Owner has now supplied scope direction to include both account-free guest
booking and optional registered-customer booking, with the shared booking rules, no
privilege from account status, no automatic guest appointment association from matching
personal information alone, the common proposed journey, and preserved internal/operator
boundaries. The Product Owner directed a targeted/versioned Gate 1 amendment unless
governance requires formal reopening, preserved historical Gate 1 approval, confirmed Gate 2
remains IN PROGRESS, and confirmed Checkpoint 11 is not accepted or completed.

The formal successor decision is prepared as **D-094 PROPOSED — NOT EFFECTIVE**, pending
approval of its exact wording. The v0.8 specification amendment and Traceability revision
1.2 are likewise DRAFT / PENDING PRODUCT OWNER APPROVAL. D-046, D-042, D-061, D-081,
Q-002/Q-003 and all existing effective requirement dispositions remain unchanged until those
exact records are approved. The new account policy questions are recorded in the proposed
v0.8 document as draft-local ACCT-L01–ACCT-L08; they are not approved mechanisms or
Decision Register Q identifiers.

Checkpoint 11 remains recorded as **authorized, NOT STARTED; not accepted; not completed**.
Existing design/prototype artifacts exist, but no evidence establishes their start under the
D-093 authorization or acceptance. The Gate Register contains a reconciliation note rather
than a fabricated transition. No gate status changed and no implementation is authorized.

Files added/updated after the initial reconciliation report are listed in the current task
completion report. This addendum does not itself approve D-094 or the v0.8/rev 1.2 drafts.
