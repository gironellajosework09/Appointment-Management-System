# SDD-008 — Appointment-Scoped Guest Access and Assisted Recovery

> **CURRENT STATUS: APPROVED — SDD-008 v0.2, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. SDD-008 v0.1 remains approved for its exact scope. This revision aligns the specification with separately approved guest-authority policy while retaining open proof and operational mechanisms. It selects no proof method, token, credential or staff procedure.

| Field | Value |
|---|---|
| Identifier / revision / date | SDD-008 / v0.2 / 2026-11-13 |
| Owner | Product Owner for access policy; engineering/security and qualified privacy reviewers for applicable design. |
| Draft provenance | Gate 2 W2 documentation-only drafting authorization. |
| Approval provenance | SDD-008 v0.1 was explicitly approved in the current Gate 2 W2 instruction; its approval date was not separately supplied and recording date was 2026-11-13. SDD-008 v0.2 is a new draft under current-turn bounded documentation authority and awaits exact-version review; no v0.2 approval date or provenance is claimed. |

## Purpose and scope

Define how an original guest booker can request access to an individual appointment for permitted lookup or management, and how an authorized assisted path handles cases where online proof cannot safely establish authority. Guest booking itself remains available without account registration. Current approved policy also requires representative authority to remain distinct from booker/attendee status, uncertain claims to be denied or referred for assistance, and a contested management hold to preserve the appointment and permitted attendance without automatic cancellation.

**In scope:** appointment-scoped guest access request and authorization contract; privacy-limited lookup and denial behavior; permitted read/change requests after independent original-booker proof; authorized staff-assisted recovery; contested-action and audit boundaries.

**Out of scope:** choosing proof factors, credentials, tokens, identity documents or recovery protocols; booking creation (SDD-009); registered-account dashboard or individual account linking (SDD-010/011); case review/hold administration (SDD-013); final cancellation/rescheduling eligibility or integrity (SDD-006/016/017); email delivery implementation (SDD-007); staff role catalogs, physical data structures or retention periods.

## References

- Requirements: [effective Requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) read with [approved v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and carried-forward [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md); FR-003, FR-007, FR-020, NFR-003, NFR-009, BR-006, BR-011, UJ-001, UJ-003, UJ-007, AC-015, AC-017, AC-021, AC-024, AC-025.
- Decisions: [Decision Register](../decisions/DECISION_REGISTER.md) D-045 (QR/reference is not identity/authority), D-061 (account-free guest booking), D-094 (guest/account boundaries), D-095 (limited-purpose email), D-103 (bounded guest, linking and assisted-access direction), D-098 (separate specification and implementation authorization).
- Accepted supporting references: [Architecture](../architecture/ARCHITECTURE.md) §5; [Application Flow](../design/APP_FLOW_UI_UX.md) guest/account and recovery journeys; [Security](../security/SECURITY.md) guest-access threats and open PH review; [SDD-002](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) internal permissions/MFA; [SDD-003](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md) evidence; [SDD-007](SDD-007-SIX-PURPOSE-EMAIL-BOUNDARY-AND-DELIVERY-RECOVERY.md) message limits; [SDD-023](SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md) accessible states.
- Related planned specifications: SDD-009 owns guest booking/confirmation, SDD-011 owns account appointment lists and individual linking, SDD-013 owns assigned contested-case review, and SDD-016/017 own cancellation/reschedule commands. Their implementations are not prerequisites to draft this authority contract.

## Expected behavior

1. A user may book as a guest without creating an account. Requesting access to an existing guest appointment is a separate action requiring independent proof that the claimant is the original booker for that specific appointment and action.
2. Appointment reference, QR code, matching name/contact/personal data, account possession, or email/link possession alone does not establish original-booker, attendee, guardian or representative authority. Proof procedures remain open for qualified design.
3. Before proof is established, the system does not disclose appointment details or grant appointment-management authority. Requests, denials, unavailable services and uncertain proof outcomes avoid unnecessary disclosure; exact enumeration/abuse controls remain for security design.
4. After proof, access is limited to the individually authorized appointment, the original booker’s permitted view and actions, and the applicable service policy. It does not grant attendee-restricted data, another appointment, staff functionality, or authority beyond the action proved. Booker, attendee, representative and acting staff authority remain distinct and are evaluated by action and service.
5. Authorized staff-assisted recovery is available when online proof cannot safely establish authority. It requires an individually authorized staff action and the applicable independent authority checks; staff assistance does not itself make a claimant the original booker or transfer attendee authority. An uncertain, conflicting or insufficient representative claim is denied or referred for separately authorized assistance.
6. An ordinary eligible cancellation/reschedule request follows its approved rules and is not automatically held. A contested hold, placed only under an approved and assigned case-review process, applies only to the disputed management action or link, preserves the appointment and permitted staff attendance, and is controlled under SDD-013. It does not automatically cancel the appointment. Failed or uncertain proof alone does not create a dispute hold.
7. Success, rejection and unknown outcomes remain distinct. A missing browser response does not prove failure; unsafe retry or confirmation waits on authoritative reconciliation under the owning transaction specification. A confirmed booking remains committed if email fails or is delayed; notification recovery is separate and does not promise inbox delivery. Do not repeat a booking command or send a duplicate notification because delivery is uncertain. Any notification follows D-095 and the authoritative committed state.

## Acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-008-C01 | Given a public user who has no customer account, when they book an appointment, then account creation or sign-in is not required; guest booking continues to use the shared approved booking rules. |
| SDD-008-C02 | Given a claimant requests access to an existing guest appointment, when the submitted reference, QR, matching personal information, account or email/link possession is considered without independent proof, then none alone grants access, authority or disclosure of appointment details. |
| SDD-008-C03 | Given an access request, when independent original-booker proof has not been established or is uncertain, then appointment details and management authority remain unavailable and the result does not claim verified identity or successful access. |
| SDD-008-C04 | Given independent proof is established for one appointment/action, when access is granted, then the claimant can see or request only the information and actions permitted to that original booker by the applicable service policy; unrelated appointments and restricted attendee data remain denied. |
| SDD-008-C05 | Given a proxy, attendee, guardian or representative claim, when access or visibility is requested, then service-specific action/visibility rules and independently established authority are applied; booker, attendee, account or contact status alone grants no representative authority. Uncertain or conflicting claims are denied or referred for separately authorized assistance. |
| SDD-008-C06 | Given online proof cannot safely be established, when assisted recovery is requested, then only an appropriately authorized internal actor may conduct the reviewed recovery action; assistance is individually attributable and scoped, and does not grant broad or standing access or itself establish claimant authority. |
| SDD-008-C07 | Given an ordinary eligible change versus an approved contested hold, when the request is processed, then routine eligible changes are not automatically held; failed/uncertain proof alone does not create a hold; and only the disputed action/link is paused under assigned SDD-013 review, preserving the appointment and permitted attendance without automatic cancellation. |
| SDD-008-C08 | Given proof, access or an appointment-change result is pending, rejected or unknown, when feedback or retry is offered, then no success/failure is invented, no blind duplicate command is encouraged, and applicable authoritative reconciliation and D-095 notification rules are followed. |
| SDD-008-C09 | Given an authorized access, denial, assisted-recovery or dispute outcome, when mandatory evidence is produced, then it is attributable and consistent with the authoritative result under SDD-003, while excluding proof secrets and unnecessary personal data. |
| SDD-008-C10 | Given a guest uses access, denial or recovery states, when rendered for keyboard, touch or assistive technology, then the applicable reusable SDD-023 presentation guidance is followed without relying only on color, icon, animation or transient feedback; authorized acceptance records automated and human review for the applicable rendered contexts. |
| SDD-008-C11 | Given acceptance is sought, when verification is performed under an authorized plan, then positive/negative proof, cross-appointment denial, privacy-limited response, assisted authority, held action, and failure/unknown cases are evidenced; no proof mechanism or live identity verification is claimed by this draft. |

## Considerations and open questions

| Question | Unresolved matter, proposed owner and timing |
|---|---|
| GUEST-Q01 — Independent original-booker proof, before access implementation | Approved policy direction: existing guest-appointment access requires independent appointment-scoped original-booker authority; listed identifiers or possession alone are insufficient. Security/engineering still evaluate proportionate proof alternatives and abuse/replay risks; Product Owner decides any material policy choice and qualified privacy review addresses collected evidence. No OTP, token, document, biometric or factor is selected. |
| GUEST-Q02 — Guest access request and recovery communication, before using email or another channel | SDD-007 consumer design, security/privacy review and Product Owner resolve approved recipient/contact-change, token/session, abuse and recovery behavior. No address, link or possession-only proof is approved. |
| GUEST-Q03 — Assisted recovery permissions and procedures, before staff-assisted access implementation | Approved direction requires authorized, scoped and attributable assistance that does not itself establish claimant authority. Exact staff/service assignments, independent checks, evidence and procedure remain open; Product Owner assigns policy; SDD-002 maps server-side permission; SDD-026 owns actual operational support/handover. No role matrix or evidence procedure is invented. |
| GUEST-Q04 — Booker, attendee and representative visibility, before affected service use | Approved direction preserves distinct booker/attendee/representative contexts, minimum common information and service-specific visibility; uncertain claims are denied or referred for separately authorized assistance. Exact service actions, fields and evidence remain open; PO/service-policy owner and qualified privacy/security reviewers resolve them. No universal guardianship rule is inferred. |
| GUEST-Q05 — Contested claims, evidence retention and restoration, before dispute handling/reliance | Approved boundary: only the disputed management action/link may be held under assigned review, preserving the appointment and permitted attendance, without automatic cancellation; failed proof alone is insufficient. Exact intake/hold/release/reversal procedure and evidence lifecycle remain open. SDD-013 owns review procedures; SDD-024 and qualified privacy review determine evidence lifecycle and restored restrictions. No retention period or deletion rule is selected here. |

### D-102 alternatives and risk summary

| Direction | Benefit and alternative/trade-off | Failure scenario and mitigation | Future verification / residual risk / owner |
|---|---|---|---|
| Require appointment-specific independent proof before disclosure or management. | Limits cross-appointment exposure; simpler reference-only access is easier but transfers authority with a shared/observable identifier. | Attacker enumerates bookings or replays a link; minimize response detail, scope any later proof to one appointment/action and evaluate abuse controls. | Authorized attack/denial tests and review of proof lifecycle; mailbox/device compromise remains. Security/engineering propose, Product Owner decides material policy. |
| Retain an authorized assisted route with separate controls. | Provides recovery without forcing account registration or unsafe online proof; assisted review adds operational load and insider risk. | Staff grants access from sympathy or matching data alone; require assigned permission, independent checks, attribution and review. | Test unauthorized staff denial and scoped actions; staffing/training responsibility remains open. Product Owner and actual client operators. |

## Plan and verification

- **Drafting dependencies:** effective guest/account requirements, D-103, accepted SDD-002/003/023 and authorized bounded drafting; fulfilled. SDD-007 is drafted and supplies message limits.
- **Implementation dependencies:** approved proof and recovery policy, service-specific visibility rules, SDD-002 permission assignments, applicable SDD-013 procedures and explicit implementation authority. No proof factor, staff workflow or implementation is authorized here.
- **Integration dependencies:** SDD-009/010/011/016/017 consumers use this scoped authority contract; SDD-003 evidence and SDD-007 approved notification behavior integrate for applicable outcomes. Mocks do not establish proof or production authority.
- **Acceptance evidence:** future authorized negative/positive access checks, cross-appointment and restricted-attendee denial, assisted staff permission, hold/outcome/reconciliation, email boundaries, privacy review and rendered accessibility. No application or identity testing is claimed.
- **Risk class:** high because access involves identity verification, sensitive appointment data and authorization; Product Owner and applicable security/privacy review are required before implementation.

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Prior specification/scope approval | **APPROVED** by the Product Owner for exact SDD-008 v0.1, within its documented scope and open-question boundaries. Approval date: not separately supplied. Recording date: 2026-11-13. This record is preserved. |
| Current specification/scope | **APPROVED — SDD-008 v0.2.** Approved 2026-11-13 as recorded in Registry §13; earlier draft-status text describes pre-approval history. |
| Implementation authorization | **NOT AUTHORIZED.** No proof factor, token/session mechanism, role allocation, recovery protocol or exact service-specific authority matrix is selected. |
| Verification/acceptance | **NOT PERFORMED.** No identity, authorization, security, privacy or accessibility test is claimed. |
| Gate / project status | Gate 2 remains historically IN PROGRESS; Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). No implementation or release/deployment authorization follows. |

## Revision Pass A continuity

SDD-008 v0.1 remains the exact approved prior specification. Draft v0.2 incorporates approved current-turn authority direction: preserve distinct actor/service/action scope, deny or refer uncertain/conflicting representative claims, and limit a contested hold to the affected management action/link while preserving the appointment and permitted attendance without automatic cancellation. C05–C07 are clarified; no local criterion identifiers are added or removed. GUEST-Q01/Q03/Q04/Q05 remain open for proof mechanisms, actual assignments, service-specific policy, dispute procedures and evidence lifecycle. No legal conclusion, technical mechanism or implementation approval is asserted.

