# Requirements Specification — Appointment Management System

| Field | Value |
|---|---|
| Document status | HISTORICAL APPROVED DEVELOPMENT-STAGE BASELINE — D-081, 2026-10-29; superseded for current design by v0.8 under D-094/D-095 |
| Gate | Gate 1 (Requirements Discovery) — COMPLETE (APPROVED); Gate 2 documentation authorized |
| Document date | 2026-10-28 |
| Revision | 0.7 (2026-10-29 — D-067–D-075 refinements; exact baseline approved under D-081) |
| Owner | Product Owner |

This exact revision is preserved as the D-081 historical baseline. Its current effective
successor for development-stage design is Requirements Specification v0.8 in
`REQUIREMENTS-SPECIFICATION-v0.8.md`, read with this unchanged v0.7 text. This exact revision incorporates the Product Owner's approved Gate 1 directions
(D-041–D-053; D-056–D-075) and is approved as a bounded development-stage baseline
under D-077/D-081. FR-009 and FR-011 remain `DEFERRED` by D-042. The active baseline
is approved for design assumptions only; it is not `VALIDATED` stakeholder evidence,
privacy/security review, test evidence, release approval, Gate 1 exit, architecture
approval, or implementation authorization.

## 4.1 Exact baseline approval record

| Field | Value |
|---|---|
| Decision | D-081 |
| Approved version | Requirements Specification v0.7 |
| Scope | 18 FR, 11 NFR, 9 BR, 5 UJ, 13 AC; FR-009 and FR-011 remain deferred |
| Classification | `APPROVED` development-stage assumptions where applicable; not `VALIDATED` |
| Approval date | 2026-10-29 |
| Approver | Product Owner |
| Limitations | Simulated findings are design assumptions only; real validation, Gate 3 review, later testing, and release evidence remain required |

| Record set | Development-stage disposition | Effective version / reference |
|---|---|---|
| FR-001–FR-008, FR-010, FR-012–FR-018 | `APPROVED` development-stage assumption | v0.7 / D-081 / 2026-10-29 |
| FR-009, FR-011 | `DEFERRED` | D-042; identifier retained |
| NFR-001–NFR-011 | `APPROVED` development-stage assumption | v0.7 / D-081 / 2026-10-29 |
| BR-001–BR-009; UJ-001–UJ-005; AC-001–AC-013 | `APPROVED` development-stage assumption | v0.7 / D-081 / 2026-10-29 |

## 1. Product boundary

The product is a separate commercial Appointment Management System installed
independently for each client organization. The initial target is small-to-medium
appointment-driven service businesses with staffed front desks (D-041).
Government/public-sector and enterprise capabilities are deferred. The product is
not the production CEAP system, does not use CEAP production data or
infrastructure, and is not a shared multi-tenant SaaS product.

## 2. Requirement register and working-history view

The row-level review-status values preserve the working-history view used before
D-081. The authoritative development-stage disposition and effective versions are
recorded in §4.1: active records are approved for design assumptions, while FR-009
and FR-011 remain deferred under D-042. `Mandatory baseline` identifies an approved
source constraint, not release approval or representative validation.
`Optional` is a release-priority value; for FR-009 and FR-011, the separate
`DEFERRED` lifecycle status records the approved disposition.

### 2.1 Functional requirements

| ID | Title | Statement | Review status | Release priority | Owner |
|---|---|---|---|---|---|
| FR-001 | Configurable availability | An authorized administrator shall be able to configure appointment services, available periods, service durations, preparation/cleanup buffers, staff availability, physical resources, and ordinary capacity under client policy without editing core scheduling logic. | DRAFT | Mandatory baseline | Product Owner |
| FR-002 | Appointment booking | A guest or authorized staff actor shall be able to request an available appointment, and the system shall atomically return a successful booking with a unique reference or a clear rejection without creating partial state. | DRAFT | Mandatory baseline | Product Owner |
| FR-003 | Guest booking journey | A public user shall be able to book an appointment without creating or signing in to a public account, subject to configured availability, capacity, duplicate, and required-input rules. | DRAFT | Mandatory baseline | Product Owner |
| FR-004 | Staff appointment management | An authorized internal user shall be able to create, view, update, cancel, reschedule, and record attendance only as permitted by the approved role boundaries and client policy. | DRAFT | Mandatory baseline | Product Owner |
| FR-005 | QR presentation | The intended user or authorized staff member shall be able to obtain a QR presentation for an eligible appointment through an approved access path; the presentation shall expose no unnecessary personal data. | DRAFT | Mandatory baseline | Product Owner |
| FR-006 | QR appointment lookup | An authorized staff member shall be able to scan or enter the QR representation to retrieve the minimum appointment-verification outcome needed for front-desk work. The outcome shall not assert identity or automatically record attendance. | DRAFT | Mandatory baseline | Product Owner |
| FR-007 | Cancellation and rescheduling | A guest through an approved reference-based path, or an authorized staff actor, shall be able to cancel or reschedule an eligible appointment under configured client policy and receive a clear outcome. | DRAFT | Mandatory baseline | Product Owner |
| FR-008 | Auditable events | The installation shall record booking, cancellation, rescheduling, QR lookup, attendance, configuration, role, exception, operator-access, outage-reconciliation, and required operational-monitoring events under approved access, privacy, and retention rules, without unnecessary personal information in diagnostic records. | DRAFT | Mandatory baseline | Product Owner |
| FR-009 | Eligibility capability | Generic eligibility/masterlist import and organization-specific document validation are deferred from the MVP and shall be added only by a later approved requirement. | DEFERRED | Optional | Product Owner |
| FR-010 | Confirmation | Each successful booking, cancellation, or rescheduling action shall produce an accessible confirmation that is readable on screen, printable, and screenshot-friendly, containing the booking reference, service, date/time, location and arrival instructions, QR/reference presentation guidance, booking-management instructions, and status. Automated external delivery and reminders are deferred; no mandatory SMS or email delivery is introduced. | DRAFT | Mandatory baseline | Product Owner |
| FR-011 | Advanced reporting and analytics | Advanced reporting, analytics, and exports other than the MVP daily roster are deferred and shall be added only by a later approved requirement. Operational-monitoring needs remain open under Q-014. | DEFERRED | Optional | Product Owner |
| FR-012 | Operator support boundary | The operator shall handle installation, maintenance, updates, backups, and authorized technical support without default access to client appointment records or personal data; exceptional access requires explicit client authorization, least privilege, defined scope and duration, auditability, and review. Product-level support tooling beyond this boundary is deferred. | DRAFT | Mandatory baseline | Product Owner |
| FR-013 | Staff-assisted, proxy, and walk-in booking | Authorized staff shall be able to create a booking for an attendee, including a proxy booking where the booker and attendee are distinct, and a streamlined staff-assisted walk-in requiring only the information necessary under the applicable booking and service policies, while preserving required identity information, capacity and duplicate enforcement, authorization, validation, auditability, and the relationship needed for service. | DRAFT | Mandatory baseline | Product Owner |
| FR-014 | Attendance and service status | Authorized staff shall be able to record configured attendance/service statuses, including at minimum expected, arrived, completed, and no-show. QR lookup, identity checking, arrival, and service completion shall remain distinct actions. | DRAFT | Mandatory baseline | Product Owner |
| FR-015 | Role-controlled exceptions | A supervisor shall be able to approve a configured capacity or policy exception with a mandatory reason and audit record; ordinary staff and public actors shall not silently bypass the applicable rule. | DRAFT | Mandatory baseline | Product Owner |
| FR-016 | Printable daily roster | Authorized staff shall be able to generate a controlled printable daily roster containing, at minimum, the appointment reference, appointment date/time, attendee name, service, assigned staff/resource where applicable, and attendance status. Additional contact information shall appear only when justified by operational need and appropriately controlled. | DRAFT | Mandatory baseline | Product Owner |
| FR-017 | Batch outage reconciliation | After paper fallback, authorized staff shall be able to batch-reconcile multiple paper-recorded attendance and walk-in updates in a structured workflow that detects conflicts, preserves booking and capacity integrity, records the actor, requires authorization, is auditable, and clearly handles records that cannot be reconciled automatically without silently overwriting newer state. Offline creation or synchronization of new bookings is not required. | DRAFT | Mandatory baseline | Product Owner |
| FR-018 | Alternative availability | When a preferred date or slot is unavailable, the system shall offer available alternatives within the current client installation, determined by actual availability and capacity checks. Waitlists, cross-branch search, and multi-branch support are not introduced. | DRAFT | Mandatory baseline | Product Owner |

### 2.2 Non-functional requirements and constraints

| ID | Title | Statement | Review status | Release priority | Owner |
|---|---|---|---|---|---|
| NFR-001 | Independent installation | Each client organization shall use an independently deployed and operated installation rather than a shared multi-tenant service. | DRAFT | Mandatory baseline | Product Owner |
| NFR-002 | Product and CEAP isolation | The product shall have its own application, database, schema, configuration, credentials, and deployment environment and shall never connect to or affect production CEAP systems or data. | DRAFT | Mandatory baseline | Product Owner |
| NFR-003 | Security and privacy | Every state-changing operation shall use approved authentication, server-side authorization, and server-side validation. Guest operations shall use an approved scoped guest-authentication mechanism without requiring a public account. Unauthorized attempts shall not change state or disclose unnecessary personal data. | DRAFT | Mandatory baseline | Product Owner |
| NFR-004 | Configurability | Client-specific needs shall be met through configuration or an approved extension without forking core scheduling logic. | DRAFT | Mandatory baseline | Product Owner |
| NFR-005 | Operator access boundary | The Product Owner or system operator shall not have unrestricted client-data access by default; operational access shall be explicitly defined, authorized, and audited. | DRAFT | Mandatory baseline | Product Owner |
| NFR-006 | Booking integrity | Under normal and concurrent operations, no ordinary completed booking shall exceed effective configured capacity or violate approved duplicate rules; approved supervisor exceptions shall be explicit and audited; failed operations shall leave no partial or orphaned records. | DRAFT | Mandatory baseline | Product Owner |
| NFR-007 | Usability and accessibility | Approved core public and administrative workflows shall conform to WCAG 2.2 AA and remain usable and responsive across applicable desktop and mobile experiences using modern Google Chrome, Microsoft Edge, Mozilla Firefox, and Apple Safari, verified under a current-and-previous-stable-major-release policy. Localization remains unresolved. | DRAFT | Mandatory baseline | Product Owner |
| NFR-008 | Measurable service targets | Performance, concurrency, reliability, and availability shall be tested against the approved normal profile of 20–100 appointments per day per client installation, a busy 100-appointment peak profile with applicable staff-assisted and walk-in activity, and a contention profile of 50 simultaneous valid booking requests competing for one remaining capacity unit. The contention result shall be exactly one successful reservation, safe outcomes for all unsuccessful requests, and no capacity, duplicate-rule, partial-state, or orphaned-record violation. Daily volume is not a concurrency target; measured response-time and availability results are not asserted by this requirement. | DRAFT | Mandatory baseline | Product Owner |
| NFR-009 | Personal-data governance | The MVP shall minimize collection and display, enforce least-privilege access, protect roster and audit data, and support approved retention/deletion rules. Exact periods, legal bases, notices, and jurisdiction-specific obligations remain open for qualified review. | DRAFT | Mandatory baseline | Product Owner |
| NFR-010 | Core-workflow tests | Every approved core workflow shall have automated success, rejection, authorization, and failure-path tests as applicable, and all required tests shall pass before release. No code-coverage percentage is approved. | DRAFT | Mandatory baseline | Product Owner |
| NFR-011 | Accountability, continuity, and monitoring | Security-relevant, operational exception/reconciliation, booking-failure, unexpected-error, capacity/integrity-violation, and other important operational-failure events shall be attributable to an individual authorized actor where applicable, privacy-conscious, tamper-resistant within the approved design, reviewable only by authorized roles, and retained under the approved policy. | DRAFT | Mandatory baseline | Product Owner |

## 3. Rationale and provenance

EVD-001–EVD-007 are registered discovery/follow-up evidence. They support the
problem and workflow direction but do not establish representative sampling or
formal validation of this wording. EVD-005–EVD-007 review v0.4 and are not explicit
stakeholder approval of v0.7. D-041–D-075 approve product direction, not the review
status or exact version of any requirement.

| ID(s) | Rationale | Provenance |
|---|---|---|
| FR-001 | Provide configurable scheduling without universalizing one client's values. | D-041–D-043; D-060; EVD-001–EVD-003; EVD-005–EVD-006 |
| FR-002 | Produce an unambiguous and atomic booking outcome. | D-042; D-044; EVD-001–EVD-004 |
| FR-003 | Remove public-account friction from the selected MVP. | D-046; EVD-004; partial support from EVD-001–EVD-002 |
| FR-004 | Support routine front-desk work within explicit permissions. | D-047; EVD-001–EVD-003 |
| FR-005; FR-006 | Implement mandatory QR capability as privacy-minimizing appointment lookup rather than identity proof. | Charter G-1/P-003; D-045; EVD-003–EVD-004 |
| FR-007 | Support cancellation/rescheduling while leaving client windows and consequences configurable. | D-042; D-049; EVD-001–EVD-004 |
| FR-008 | Make material state changes and exceptions accountable. | D-047–D-050; EVD-001–EVD-003 |
| FR-009 | Preserve the explicit deferral of generic eligibility/masterlist capability. | D-042; EVD-003 is government-context evidence only |
| FR-010 | Require an immediate clear, printable, screenshot-friendly confirmation without committing to an external provider. | D-049; D-065; EVD-001–EVD-004; EVD-007 |
| FR-011 | Preserve the explicit deferral of advanced reporting while FR-016 covers the MVP roster. | D-042; D-051 |
| FR-012 | Preserve D-034 while defining client/operator responsibilities and bounded exceptional support access. | D-034; D-047; D-050; D-075 |
| FR-013 | Support observed staff-assisted, proxy, and walk-in booking while separating booker and attendee. | D-046; D-064; EVD-001–EVD-007 |
| FR-014 | Keep QR lookup, identity checks, arrival, and service completion distinct. | D-045; EVD-001; EVD-003–EVD-004 |
| FR-015 | Permit necessary human exceptions without silent invariant bypass. | D-048; EVD-001–EVD-003 |
| FR-016; FR-017 | Provide the minimal observed outage fallback without selecting offline-first architecture. | D-051; D-063; D-074; EVD-001–EVD-006 |
| FR-018 | Offer real alternatives when the preferred date or slot is unavailable, without waitlists or multi-branch scope. | D-066; EVD-001–EVD-004; EVD-007 |
| NFR-001 | Preserve independent per-client installation. | D-020; Charter G-1, A-1 |
| NFR-002 | Protect product independence and the absolute CEAP boundary. | D-019, D-025, D-035; Charter G-7, S-2, S-9 |
| NFR-003 | Preserve mandatory security and privacy qualities; release finding thresholds remain a separate concern. | D-021, D-029; Charter G-3, S-4 |
| NFR-004 | Preserve configuration without core-logic forks. | D-021; Charter G-4, S-1 |
| NFR-005 | Preserve the approved operator access boundary. | D-034; Charter §8 |
| NFR-006 | Preserve correctness and data-integrity goals while leaving policy open. | D-029; Charter G-2, S-3; Q-019, Q-021 |
| NFR-007 | Apply the approved accessibility target and browser support policy to core workflows. | Charter G-6, S-7; D-052; D-069 |
| NFR-008 | Keep workload, concurrency, and integrity testing measurable without treating daily volume as concurrency or claiming results. | Charter G-8, G-11; D-052; D-067; D-070; Q-016, Q-022 |
| NFR-009 | Apply approved minimization and least-privilege direction without inventing legal or retention values. | D-029; D-050; EVD-004; Q-015 |
| NFR-010 | Apply the approved core-workflow test target without inventing a code-coverage percentage. | Charter G-5, G-9, G-10, S-6; D-052; Engineering Governance §14 |
| NFR-011 | Preserve individual accountability for exceptions and outage reconciliation and provide essential privacy-conscious operational monitoring. | D-047–D-051; D-073; EVD-001–EVD-003 |

## 4. Evidence, approval, disposition, and version metadata

The following values are deliberately explicit for every requirement:

| ID range | Working version / status | Effective approved version | Planned activities | Actual evidence | Approval reference/date | Deferral/withdrawal rationale |
|---|---|---|---|---|---|---|
| FR-001 | v0.5 / APPROVED development assumption | v0.5 / D-081 / 2026-10-29 | See traceability matrix (separate activity column) | EVD-001–EVD-004 as cited; discovery support only | D-081 / 2026-10-29 | Not `VALIDATED`; buffers remain configurable |
| FR-002–FR-008; FR-012; FR-014–FR-016 | v0.4 / APPROVED development assumption | v0.4 / D-081 / 2026-10-29 | See traceability matrix (separate activity column) | EVD-001–EVD-004 as cited; discovery support only | D-081 / 2026-10-29 | Not `VALIDATED`; later design remains required |
| FR-010; FR-013; FR-017; FR-018 | v0.7 / APPROVED development assumption | v0.7 / D-081 / 2026-10-29 | See traceability matrix (separate activity column) | EVD-001–EVD-007 as cited; discovery/follow-up support only | D-081 / 2026-10-29 | Not `VALIDATED`; simulated material is design input only |
| FR-009; FR-011 | v0.4 / DEFERRED | None yet | None while deferred | Discovery context only | D-042; approval date not recorded | Product Owner deferred generic eligibility/masterlist capability and advanced reporting/analytics from the MVP; identifiers retained |
| NFR-001–NFR-011 | v0.7 / APPROVED development assumption | v0.7 / D-081 / 2026-10-29 | See traceability matrix (separate activity column) | EVD-001–EVD-007 as cited; discovery/follow-up support only | D-081 / 2026-10-29 | Not `VALIDATED`; later security/privacy and test evidence remain required |

**Version history (applies to each ID in the indicated range):**

| Version / date | Author / role | Review status | Change reason and summary | Affected links / impact | Approval or disposition |
|---|---|---|---|---|---|
| v0.1 / 2026-10-28, FR-001–FR-012 and NFR-001–NFR-009 | Gate 1 drafting / author role not recorded | DRAFT | Initial working drafts; per-record changes not recorded | Initial sources and links; incomplete historical detail, not reconstructed | None |
| v0.2 / 2026-10-28, same IDs | Gate 1 remediation / author role not recorded | DRAFT | Restored identifiers, source/status metadata and operator/QR gaps; per-record changes not recorded | Specification and traceability updated; historical impact details unavailable | None |
| v0.3 / 2026-10-28, FR-001–FR-012 and NFR-001–NFR-009 | Gate 1 documentation remediation / AI assistant | DRAFT | Clarified minimum mandatory behavior, hypotheses, operator access, version/evidence separation and incomplete rules | FR-001–FR-012, NFR-003, NFR-006, NFR-008, AC-001–AC-007, BR-001–BR-004, QR-L01–QR-L12; traceability and validation plan updated; no approved version affected | None — pending Product Owner review |
| v0.3 / 2026-10-28, NFR-010 | Gate 1 documentation remediation / AI assistant | DRAFT | New testability draft for approved testing goal and S-6 | G-5, G-9, G-10, S-6; AC-008; traceability updated; coverage target remains open | None — pending Product Owner review |
| v0.4 / 2026-10-29, FR-001–FR-008, FR-010, FR-012–FR-017 and NFR-001–NFR-011 | Authorized Gate 1 documentation / AI assistant | DRAFT | Incorporated D-041–D-053, registered discovery evidence, clarified MVP scope, and added the authorized requirement records | Specification, traceability, validation, risks, decisions, and EVD-001–EVD-004 updated together; no effective approved requirement version affected | None — formal review, validation, and exact-version approval pending |
| v0.4 / 2026-10-29, FR-009 and FR-011 | Authorized Gate 1 documentation / AI assistant | DEFERRED | Recorded D-042's MVP deferral of generic eligibility/masterlist and advanced reporting/analytics | Identifiers and rationale retained; operational monitoring remains open under Q-014 | D-042; approval date not recorded |
| v0.5 / 2026-10-29, FR-001; BR-002; AC-001 | Product Owner-approved refinements / AI assistant | DRAFT | Recorded D-060's staff/physical-resource and preparation/cleanup buffer wording in FR-001; recorded D-059's configurable duplicate warning/blocking and proxy/multiple-attendee preservation in BR-002 and AC-001 | No requirement status or effective approved version changed; EVD-005–EVD-007 are not registered | D-059; D-060 (2026-10-29) |
| v0.6 / 2026-10-29, FR-010; FR-013; FR-017; FR-018; BR-006; BR-009; UJ-001; UJ-005; AC-002; AC-010; AC-012; AC-013 | Product Owner-approved refinements / AI assistant | DRAFT | Recorded D-063–D-066: batch outage reconciliation, streamlined walk-in creation, screenshot-friendly confirmation contents, and alternative availability | No requirement status or effective approved version changed; EVD-005–EVD-007 review v0.4 and provide partial follow-up support only; no formal v0.6 validation performed | D-063–D-066 (2026-10-29) |
| v0.7 / 2026-10-29, FR-008; FR-012; FR-016; NFR-007–NFR-011; AC-005–AC-007; AC-012; S-3; S-5; S-7 | Product Owner-approved refinements / AI assistant | APPROVED development-stage assumption | Recorded D-067–D-075 and exact baseline approval D-081: workload profile, core workflow inventory, browser/accessibility policy, measurable contention scenario, severity method, evidence ownership, essential monitoring, roster custody, and operator responsibilities. No measurements, conformance results, named evidence owners, or formal v0.7 validation are claimed | D-067–D-075; D-081 (2026-10-29) |

The exact v0.7 text is the effective development-stage baseline under D-081. Its
approval does not establish `VALIDATED` evidence or release readiness. Any later
material change must preserve this approved text, version, reference, and date
before a new proposal is created.

## 5. Draft acceptance criteria

| ID | Related requirement | Draft criterion | Status | Validation need |
|---|---|---|---|---|
| AC-001 | FR-001–FR-003; NFR-006 | Given valid input and effective availability, a guest can receive exactly one confirmed booking and reference; unavailable or over-capacity requests receive a clear rejection; duplicate requests follow the configured warning or blocking policy; no prohibited booking is created. | DRAFT | Confirm required fields, client duplicate policy, and later test profile. |
| AC-002 | FR-005; FR-010 | An eligible appointment's intended user can access an accessible, readable, printable, and screenshot-friendly confirmation and QR presentation containing the reference, service, date/time, location and arrival instructions, QR/reference presentation guidance, and booking-management instructions, without unnecessary personal data being displayed or encoded. | DRAFT | Resolve QR issuance, recovery, expiry, and exact minimum contents. |
| AC-003 | FR-006; NFR-003 | An authorized staff member can use a QR presentation to retrieve the allowed appointment result; an unauthorized actor receives neither a valid result nor unnecessary data, and the result does not assert identity. | DRAFT | Resolve verifier roles, entry method, and displayed result. |
| AC-004 | FR-006; FR-014 | QR lookup does not itself mark arrival or completion; cancelled or invalid presentations, and expired or revoked presentations where those lifecycle states are approved, cannot silently return a valid active outcome; repeated lookups follow the approved idempotency rule. | DRAFT | Resolve whether expiry/revocation apply and define the lifecycle and repeated-lookup policy (QR-L01–QR-L09). |
| AC-005 | FR-002; NFR-006; NFR-008 | Under the approved normal, peak, and contention profiles, ordinary bookings produce zero capacity or duplicate-rule violations and failed operations leave no partial state. For 50 simultaneous valid requests competing for one remaining capacity unit, exactly one reservation succeeds and all other requests receive safe clear outcomes. | DRAFT | Confirm test preconditions, duplicate identity/window, capacity unit, atomic boundary, and later performance evidence owner. |
| AC-006 | NFR-007 | The D-068 core workflows conform to WCAG 2.2 AA across applicable desktop and mobile experiences using current and previous stable major releases of Chrome, Edge, Firefox, and Safari under the approved verification policy. | DRAFT | Confirm applicable device/OS matrix, review method, and accessibility evidence owner. |
| AC-007 | FR-012; NFR-005 | The operator has no default client-data access; each exceptional access requires explicit client authorization, least privilege, defined scope and duration, an attributable audit record, and review/closure. | DRAFT | Record the minimum exceptional-access procedure and assign the operational/evidence roles. |
| AC-008 | NFR-010 | Every approved core workflow has passing automated success, rejection, authorization, and failure-path tests as applicable before release. | DRAFT | Confirm workflow inventory, environment, and evidence owner; no code-coverage percentage is approved. |
| AC-009 | FR-007; NFR-006 | An eligible cancellation or rescheduling produces a clear confirmation, atomically releases or reallocates capacity as applicable, and cannot create a duplicate or over-capacity booking. | DRAFT | Confirm client windows, fees, authorization path, and conflict outcomes. |
| AC-010 | FR-013; NFR-009 | Staff-assisted, proxy, and walk-in bookings distinguish the actor, booker/contact, and attendee where applicable, collect only required data, and do not treat the booker as identity proof for the attendee. The walk-in path preserves capacity, duplicate, authorization, validation, and audit controls. | DRAFT | Confirm minimum fields, walk-in field set, and service-specific proxy authorization rules. |
| AC-011 | FR-015; NFR-011 | A permitted exception succeeds only with supervisor authority and a reason; the record identifies actor, time, affected appointment, rule, and before/after outcome. | DRAFT | Confirm configurable exception types and review responsibility. |
| AC-012 | FR-016–FR-017; NFR-009; NFR-011 | Authorized staff can print a daily roster containing the appointment reference, date/time, attendee name, service, assigned staff/resource where applicable, and attendance status, with additional contact information only when justified and controlled; authorized staff can later batch-reconcile multiple paper-recorded attendance and walk-in updates; conflicts and non-reconcilable records are surfaced, custody/disposal is controlled, actions are attributable, and newer state is not silently overwritten. | DRAFT | Confirm roster access/printing, physical custody, retention/disposal policy, batch conflict handling, non-reconcilable-record procedure, and reconciliation review. |
| AC-013 | FR-018 | When the preferred date or slot is unavailable, the user is offered actual available alternatives within the current installation, and selecting one still passes availability and capacity checks; no waitlist, cross-branch, or multi-branch result is produced. | DRAFT | Confirm the alternative-search scope and display. |

All criteria have development-stage approval under D-081, owner `Product Owner`,
and their working versions remain preserved for history. No criterion is
`VALIDATED`; no deferral/withdrawal rationale applies to the active criteria.
EVD-001–EVD-007 provide discovery/follow-up support where cited in traceability;
they are not formal criterion validation. EVD-005–EVD-007 are supplied summaries
of v0.4 follow-up reviews and do not approve v0.6.

### 5.1 Provisional S-1–S-7 targets

These Product Owner-approved targets (D-052) are provisional and subject to
later approved test profiles, environments, workflow inventories, and evidence.
They are not claims that testing or conformance has occurred.

| ID | Provisional target |
|---|---|
| S-1 | A clean client installation can be configured for its approved services and scheduling policies with no edit to core scheduling logic. |
| S-2 | All approved isolation checks pass: an installation cannot read or write another installation's or production CEAP's data. |
| S-3 | Zero capacity or duplicate-rule violations occur under the approved normal, peak, and contention profiles; the 50-request/one-capacity-unit contention case produces exactly one success and safe outcomes for all other requests. |
| S-4 | 100% of state-changing operations use approved authentication, including any scoped guest-authentication mechanism, plus server-side authorization and server-side validation. |
| S-5 | Zero known high- or critical-severity security findings remain at release. |
| S-6 | 100% of approved core workflows have required automated success, rejection, authorization, and failure-path tests, and all required tests pass. This is not a code-coverage percentage. |
| S-7 | D-068 core public and administrative workflows conform to WCAG 2.2 AA across D-069 supported browser families and applicable desktop/mobile experiences. |

## 6. Draft journeys and business rules

| ID | Record | Status | Related requirements | Open references |
|---|---|---|---|---|
| UJ-001 | A guest discovers configured availability, supplies approved minimum information, requests an appointment, receives a clear success or rejection (and available alternatives when the preferred date or slot is unavailable), and accesses the screenshot-friendly confirmation/QR when eligible. | DRAFT | FR-001–FR-003; FR-005; FR-010; FR-018 | D-043–D-046; D-049; D-065–D-066; QR-L01–QR-L05 |
| UJ-002 | An authorized front-desk staff member locates an appointment by QR or approved search, performs any separate identity/entitlement check required by client policy, and records the appropriate attendance/service state without conflating those actions. | DRAFT | FR-004; FR-006; FR-014 | D-045; D-047; QR-L03–QR-L09 |
| UJ-003 | A guest through an approved reference path, or authorized staff actor, cancels or reschedules an eligible appointment, receives a clear outcome, and capacity is updated atomically. | DRAFT | FR-007; FR-010 | D-044; D-049; Q-020 |
| UJ-004 | The system operator performs an approved non-data support task without client-data access and stops for separate authorization if client data would be required; any exceptional access is scoped and audited. | DRAFT | FR-012; NFR-005 | D-034; D-047; D-050 |
| UJ-005 | Front-desk staff create an assisted, proxy, or streamlined walk-in booking, manage routine appointment/attendance work, obtain supervisor approval for an exception when required, print the daily roster, use paper during an outage, and batch-reconcile outcomes after restoration. | DRAFT | FR-013–FR-017 | D-046–D-051; D-063–D-064 |
| BR-001 | Ordinary bookings shall never exceed effective configured capacity. Capacity unit, period, resources, and policy values are client-configurable; only a permitted audited supervisor exception may exceed the ordinary limit. | DRAFT | FR-001–FR-002; FR-015; NFR-006 | D-043; D-048 |
| BR-002 | Duplicate booking follows the configured warning or blocking policy. Bookings prohibited by that policy shall not complete, including under concurrency. Legitimate proxy and multiple-attendee scenarios are preserved. The identity key, comparison window, warning/blocking behavior, and permitted exceptions remain client-policy parameters. | DRAFT | FR-002–FR-003; NFR-006 | D-044; D-059 |
| BR-003 | QR presentation and lookup shall disclose no more personal data than the authorized appointment-lookup task requires and shall not be treated as identity proof. | DRAFT | FR-005–FR-006; NFR-003; NFR-009 | D-045; D-050 |
| BR-004 | Operator access to client data is denied by default; each exceptional access requires separate authorization, least scope, attribution, review, and closure under the approved procedure. | DRAFT | FR-012; NFR-005; NFR-011 | D-034; D-047; D-050 |
| BR-005 | Service availability, duration, buffers, resources, cancellation/rescheduling windows, grace periods, and ordinary capacity are client policies. No fixed CEAP or interview-specific value is a universal default. | DRAFT | FR-001; FR-007 | D-043; D-049 |
| BR-006 | Guest, staff-assisted, proxy, and streamlined walk-in booking are permitted MVP modes. A proxy booker and attendee are distinct where applicable; service-specific authorization, attendee-presence, and walk-in minimum-field rules remain configurable. | DRAFT | FR-003; FR-013 | D-046; D-064 |
| BR-007 | Front-desk staff perform routine permitted work; supervisors authorize configured exceptions; administrators configure the installation and internal access; operator access remains bounded by BR-004. | DRAFT | FR-004; FR-012; FR-015 | D-047–D-048 |
| BR-008 | QR lookup, identity/entitlement checking, arrival, service start/completion, cancellation, and no-show are distinct events. One shall not silently imply another. | DRAFT | FR-006–FR-007; FR-014 | D-045 |
| BR-009 | Paper fallback is a controlled snapshot. Batch reconciliation shall be attributable, preserve an audit trail, detect and surface conflicts, clearly handle records that cannot be reconciled automatically, and never silently overwrite newer state; offline new-booking synchronization is outside MVP. | DRAFT | FR-016–FR-017; NFR-011 | D-051; D-063 |

**Open configurable values (not approved defaults):** exact scheduling periods,
capacity/resource models, duplicate identity/window, cancellation/rescheduling
windows or fees, grace periods, exception categories, proxy evidence, walk-in
minimum fields, alternative-search scope, roster fields/custody, and reconciliation
conflict handling still require formal review and client-policy definition. No
interview-specific value or CEAP rule is inferred.

**D-059/D-060 refinements:** FR-001 now names staff availability, physical
resources, service durations, and preparation/cleanup buffers. BR-002 and AC-001
now distinguish a configurable duplicate warning from blocking while preserving
mandatory integrity and legitimate proxy/multiple-attendee scenarios. These are
wording refinements authorized by D-059 and D-060; they create no policy values,
evidence, or validation.

**D-063–D-066 refinements:** FR-017/BR-009/AC-012 now cover batch reconciliation
and records that cannot be reconciled automatically. FR-013/BR-006/AC-010 now cover
a streamlined walk-in that keeps required identity, capacity, duplicate,
authorization, validation, and audit controls; no completion-time target is set.
FR-010/AC-002 now require an accessible, printable, screenshot-friendly
confirmation with the reference, service, date/time, location and arrival
instructions, QR/reference guidance, and management instructions; SMS/email delivery
remains deferred. FR-018/AC-013 add alternative availability within the current
installation only. These refinements create no policy values, evidence, or
validation, and no deferred waitlist or multi-branch capability enters MVP.

Journeys and rules are `DRAFT`. EVD-001–EVD-004 provide partial discovery support;
none has completed formal walkthrough validation or exact-version approval.

## 7. Unresolved QR lifecycle and integrity questions

Mandatory QR verification is approved at goal level, but the following are not
decided and must not be inferred from FR-005, FR-006, or AC-002–AC-004:

| Draft-local ref | Topic | Unresolved question |
|---|---|---|
| QR-L01 | Issuance | What event creates the QR representation, who may issue/reissue it, and what may it contain? |
| QR-L02 | Activation | What appointment state makes verification eligible, and when does that begin? |
| QR-L03 | Expiry | Does it expire by time, appointment state, or another event, and which clock/timezone governs? |
| QR-L04 | Revocation | Who may revoke it, for which reasons, and how soon does that affect verification? |
| QR-L05 | Recovery | What happens when the user cannot access or display the representation or needs replacement? |
| QR-L06 | Repeated scans / consumption | Are repeated presentations valid, warning-only, or rejected; is any QR consumed, and when? |
| QR-L07 | Atomicity / concurrency | How are simultaneous presentations and cancellation/rescheduling-versus-verification races resolved? |
| QR-L08 | Exceptions | Which authorized overrides, manual methods, clock-skew and failed-verification outcomes are permitted? |
| QR-L09 | Audit | Which verification and actor events are logged, who may view them, and for how long? |
| QR-L10 | Staff confirmation | Resolved in direction by D-045: lookup is separate from staff confirmation; exact permitted actor/outcome remains under review. |
| QR-L11 | Attendance | Resolved in direction by D-045/BR-008: lookup does not change attendance; correction permissions remain under review. |
| QR-L12 | Outage / reconciliation | Resolved in MVP direction by D-051: use printable roster and structured reconciliation; exact roster fields/conflict procedure remain under review and offline booking is deferred. |

These labels are stable **within these drafts only**, not official Decision Register
`Q-###` questions. These questions require stakeholder, privacy, security, and
data-integrity review. In particular verification does not imply attendance,
staff confirmation, QR consumption, or offline acceptance.
They select no data model, API, storage format, cryptography, or architecture.

## 8. Explicitly unresolved

Representative validation of the selected target segment, commercial model
(Q-010 deferred to Gate 6 by D-055), internal authentication/provisioning
mechanism, exact client-policy values, QR lifecycle details, duplicate
identity/window, legal/privacy/retention details, localization, numeric
load/availability targets, deployment, and support remain unresolved. Deferred
capabilities remain traceable under D-042 and D-056–D-058. No architecture,
schema, API, technology version, deployment model, or implementation detail is
selected by this specification.

## 9. Gate 1 requirements quality assessment (v0.7)

This assessment covers the exact working baseline after the D-063–D-075
refinements. It records no approval and no validation result.

| Item | Current position | Gate 1 action |
|---|---|---|
| NFR-007 / AC-006 / S-7 | WCAG 2.2 AA and the Chrome/Edge/Firefox/Safari current-and-previous-stable policy are approved for the D-068 core workflows (D-069). Conformance, device/OS matrix, test method, and evidence owner are not completed. | Required before exit: record the applicable environment matrix, method, and evidence roles; do not claim conformance. |
| NFR-008 / S-3 | D-067 and D-070 define the 20–100 daily profile, busy-day peak profile, and 50-request/one-capacity-unit contention acceptance result. Numeric response-time and availability targets remain open (Q-016, Q-022), and no measured result exists. | Required before exit: assign profile and evidence roles and record whether remaining numeric targets are deferred to Gate 2/5 with owner approval. |
| NFR-010 / AC-008 / S-6 | Every D-068 core workflow must have passing automated success, rejection, authorization, and failure-path tests as applicable; no code-coverage percentage is approved. | Required before exit: confirm the inventory mapping and evidence owner; test results remain later-gate evidence. |
| NFR-011 | Accountability, tamper resistance within the approved design, restricted review access, and approved retention are required. "Tamper-resistant" is design-dependent and not Gate 1-testable. | Interpret at Gate 2/Gate 3; record the interpretation and retention dependency without selecting a mechanism now. |
| S-1–S-7 | Provisional targets are approved (D-052). S-1 "clean client installation", S-3 profile, S-4 operation inventory, S-5 severity method, S-6 workflow inventory, and S-7 environments are not fully defined. | Assign each remaining definition and evidence owner, or explicitly defer to a named later gate; no test result is claimed now. |
| Q-014 | D-073 resolves Q-014 in favor of essential privacy-conscious MVP monitoring for booking failures, errors, security events, capacity/integrity violations, reconciliation failures, and important operational failures. Advanced reporting/analytics remains deferred; implementation and alerting architecture are later-gate work. | Record the requirement mapping and evidence owner; do not select monitoring technology at Gate 1. |
| Duplicate identity and warning/blocking | D-044/D-059 approve the invariant and configurable warning/blocking. Identity key, comparison window, and permitted exceptions remain client policy. | Client-configurable; implementation detail to Gate 2 design. No Gate 1 value is invented. |
| Staff/resource capacity | D-043/D-060 approve staff availability, physical resources, durations, and preparation/cleanup buffers as constraints. Capacity unit, period, resource model, and values remain client policy. | Client-configurable values; enforcement design to Gate 2. |
| Minimum roster fields | D-074 defines appointment reference, date/time, attendee name, service, assigned staff/resource where applicable, and attendance status, with justified controlled contact data only. Printing authorization, custody, distribution, retention/disposal policy, and reconciliation review remain open. | Confirm with VAL-004 and record the responsible evidence roles; do not invent a legal retention period. |
| QR lifecycle and security | D-045 fixes lookup-not-identity, data minimization, and separation from attendance. QR-L01–QR-L09, QR-L12 details remain open. | Architecture/security design at Gate 2 with VAL-004 input; no issuance, expiry, revocation, or storage mechanism is selected here. |
| Staff authentication/provisioning | D-047 approves role boundaries, server-side authorization, and individual accountability; the mechanism and provisioning process are Gate 2 work (Q-009). | Confirm the requirement wording is sufficient for Gate 2; no mechanism is selected now. |
| Privacy retention/deletion | D-050/NFR-009 require minimization, least privilege, and approved retention/deletion support. Legal basis, notices, exact periods, and jurisdiction remain open. | VAL-004 qualified review and legal escalation; no period or legal conclusion is invented. |
| Operator exceptional access | D-075 and FR-012/NFR-005/BR-004/AC-007 deny default access and require client authorization, least privilege, defined scope/duration, attribution, review, and closure. The operating model is approved direction; no walkthrough evidence exists. | VAL-006 operator review; record the minimum procedure or explicitly defer client-data support access. |
| Deployment/support for Gate 2 | D-020 fixes per-client installation; D-055 defers pricing to Gate 6. Hosting, backup, restoration, monitoring, and support model remain open (Q-008). | Identify architecture-required deployment/support assumptions at Gate 2; pricing stays at Gate 6. |
| Deferred scope | FR-009, FR-011, payments/deposits/GCash, SMS/OTP and automated outbound notifications, waitlists, multi-branch, public accounts, offline booking synchronization, and advanced reporting remain outside MVP. | Preserve; no deferred feature re-enters without a new Product Owner decision. |

| Defect severity and evidence ownership | D-071 defines Critical/High/Medium/Low using security, integrity, operational, scope, and workaround impact; D-072 distinguishes evidence preparer, reviewer, approver, and independent reviewer. No findings or named assignments are recorded. | Record role assignments and apply the method in later evidence; unresolved Critical or High security findings remain release-blocking. |

**Classification summary.** Approved direction: D-041–D-075. Client-configurable
parameters: scheduling periods, capacity values/model, duplicate policy values,
cancellation/rescheduling windows and fees, grace periods, exception categories,
proxy and walk-in fields, alternative-search scope, and roster/reconciliation
details. Gate 2 architecture decisions: QR lifecycle mechanism, duplicate
enforcement design, capacity enforcement design, authentication/provisioning,
retention mechanics, and deployment/support design. Deferred features: the list
above. Unresolved Gate 1 items that materially affect measurability, privacy, or
the operator boundary: environment matrix and evidence ownership (NFR-007/AC-006),
remaining numeric quality profiles (NFR-008), later test results, roster custody,
VAL-004, and VAL-006.

**Smallest Product Owner decisions still needed for exit readiness:** (1) review
the exact v0.7 baseline; (2) assign or defer the remaining environment, profile,
severity, and evidence-owner details; (3) complete the required business/front-desk,
public-user, privacy/security, and operator reviews; and (4) separately decide Gate
1 exit. D-067–D-075 resolve direction questions but do not create validation
evidence, measurements, legal retention periods, or gate approval.
