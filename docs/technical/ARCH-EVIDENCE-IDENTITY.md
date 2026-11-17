# Architecture evidence — identity, proof and recovery contracts

> **Review draft, 2026-11-13.** These illustrative contracts expose boundaries, failures and unresolved decisions for Product Owner and qualified specialist review. They are not a specification approval, implementation design, tested behavior or authority to process data. No factor, provider, role assignment, protocol, retention period or service is selected. All scenarios are fictional and deliberately contain no personal data.

## Source and status

Effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) replace only NFR-003 and add AC-027–029 to v0.8 and v0.7. D-103/104/105/108 in the [Decision Register](../decisions/DECISION_REGISTER.md) govern guest authority, privacy planning, internal MFA and access policy; D-095 limits email purposes. D-102 requires proportionate comparison and D-098 separates specification from implementation authority. [TECH-WP-02 identity](TECH-WP-02-IDENTITY.md) contains candidate trade-offs and source evidence. [Engineering Governance](../ENGINEERING_GOVERNANCE.md) §§5 and 15 retain high-risk approval, qualified review and due diligence controls.

[SDD-002 v0.5](../specs/SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) and [SDD-008 v0.2](../specs/SDD-008-APPOINTMENT-SCOPED-GUEST-ACCESS-AND-ASSISTED-RECOVERY.md) remain drafts awaiting exact-version review; approved v0.4 and v0.1 respectively retain their recorded scopes. [SDD-013 v0.3](../specs/SDD-013-CONTESTED-ACTION-HOLDS-AND-ASSIGNED-CASE-REVIEW.md) remains a draft. References to draft criteria below describe proposed contracts, not approved requirements. Applicable SDD-003 evidence, SDD-006 authoritative outcomes, SDD-007 email, SDD-010/011 accounts/linking, SDD-023 accessibility and SDD-024 privacy contracts have their own statuses and decisions; their citation does not approve them.

## Contract 1 — internal sign-in, accessible use and lifecycle

**Inputs and boundary.** A provisioned individual requests protected access within a client installation. Authentication and MFA establish the actor; an independent authorization decision evaluates requested action, service and installation. Successful sign-in alone grants no case, audit, customer or operator privilege. D-105 covers staff, supervisors, administrators and installation-local super-admins; an operator is covered when separately authorized for protected internal application access. Guest and customer accounts are not covered by this internal MFA policy.

| Scenario | Required policy boundary / draft contract | Failure and review evidence |
|---|---|---|
| Credentials accepted; MFA pending, failed or uncertain | No protected internal access. An enrollment or recovery context, if later designed, is not a business session. | A lost response cannot be presented as successful authentication; test direct protected requests as well as UI. SDD-002 C01/C13 are draft criteria; AC-027 is approved, not validated. |
| Internal user has no usable personal device | A secure, accessible and individually attributable MFA pathway must be available; no shared factors, credentials or undocumented bypass. A portable key, organization-managed device or another method is only a candidate, not a guarantee of accessibility or MFA by its name. | Assess physical interaction, keyboard, screen reader, cognitive load, supported workstation and replacement under realistic conditions. AC-028 is approved, not validated; the actual pathway remains open. |
| A factor is lost, compromised, replaced or revoked | Controlled attributable lifecycle and recovery apply. Pending or uncertain replacement does not grant authority; any session/factor invalidation behavior must follow later reviewed design. | Determine affected sessions, old factor and recovery custody; exercise replay and direct requests after revocation under a future authorized plan. Avoid secrets in evidence. |
| Authorized user seeks sensitive action | Separately authorized action and reviewed risk-based fresh verification apply. Routine interactions do not automatically require repeated MFA. | The action, actor and context must be checked; triggers and intervals are not yet selected. Failed or uncertain verification denies the action. |
| Device or dependency unavailable | Fail safely without granting a password-only business session; offer only later-reviewed accessible recovery/assistance. | Evaluate loss, incompatible workstation and accessibility barriers, as well as availability and support burden. No assumed personal phone or provider. |

## Contract 2 — independent guest proof and individual linking

Guest booking remains account-free. For an existing appointment, a reference, QR, email/link possession, account session or personal-data match alone cannot establish original-booker authority or disclose protected details. A successful proof must be independently established and scoped to the relevant appointment and permitted action, with actual mechanism and service visibility still undecided (D-103/D-108; GUEST-Q01–Q05). Account linking additionally requires account control, independent proof, explicit confirmation and attributable evidence. Booker, attendee and representative authority are distinct.

| Fictional scenario | Boundary and expected treatment for review | Unresolved issue / negative case |
|---|---|---|
| Claimant presents reference for appointment A and knows a contact detail | No access or appointment disclosure based on those facts alone; neutral response and approved assistance route. | Knowledge can be leaked or guessed; verify that a direct request for appointment B also denies. |
| A booking-time secret is later presented | Possession alone is not automatically independent original-booker authority. Review how issued, delivered, controlled and combined with other evidence before any claim of sufficiency. | A reference renamed “secret,” two values delivered to one shared mailbox, or a copied paper containing both may fail together. Map correlation and compromise; no factor or additional data is approved. |
| Independently established proof accepted for A | Under a later approved service policy, limit visibility and requests to that booker, appointment and permitted action. | Proof of A must not expose B or restricted attendee information. Determine what revocation, replay, sharing and expiration mean without assuming values. |
| Account holder asks to link A | Account authentication alone is not proof of original-booker authority; require independent proof and explicit confirmation for the individual appointment. | No bulk linking or automatic representative authority. Failed, cancelled or unknown linking must not be shown as success; SDD-011 owns link outcomes. |
| Person asserts guardian/proxy status or lost proof | Deny or refer uncertain/conflicting authority to separately authorized assistance; an assigned helper's role alone does not prove the claim. | PO/service policy and qualified privacy/security reviewers must decide acceptable independent evidence, access, training and escalation. Do not assume ID documents, biometrics or universal guardianship. |

## Authority matrix for review

This is a **boundary matrix**, not approved assignments. “Conditional” means a separately reviewed, scoped authorization and applicable verification are needed; it never grants permission by itself. Every operation must evaluate actor, action, service and installation; absent or uncertain authorization denies. Detailed assignments, first custodian, ownership and mechanisms remain IDN-Q01–Q04.

| Actor/context | Requested action | Boundary |
|---|---|---|
| Authenticated internal staff member | Service-specific appointment action | Conditional on explicit actor/service/action/installation scope; sign-in and MFA alone do not grant it. |
| Staff/supervisor assigned and trained for case review | Accept contested case and place scoped hold | Conditional on approved case-review permission and later approved intake/acceptance procedure; general title is insufficient. |
| Case reviewer | View evidence, release hold or reverse link | Separately scoped permissions; viewing does not imply export, release, reversal or appointment mutation. Documented review and applicable independent authorization remain required. |
| Guest claimant | Request dispute review | Submission alone grants no access, case acceptance or hold; claimant cannot self-release or reverse a link. |
| Existing administrator | Appoint additional super-admin | Independent approval and fresh verification, no self-approval; exact approver and process open. No self-elevation. |
| Technical operator/host custodian | Inspect client business record | No standing authority. Exceptional access requires explicit client authorization and least privilege, scope/duration, attribution, review and closure; infrastructure custody is insufficient. |
| Audit reader | Review or export evidence | Viewing and export are separate permissions. Scope and evidence lifecycle remain open; do not expose factor or proof secrets. |
| Booker, attendee or representative | See/manage appointment information | Only independently established and service-specific permitted authority; one relationship does not automatically confer another. |

## Contract 3 — contested action and authoritative outcome

1. **Intake:** An unverified claimant submits a concern. Submission, failed proof or uncertainty alone does not establish a contested case, create a hold or reveal appointment details. CASE-Q01 requires the PO/service-policy owner to decide the acceptance threshold.
2. **Acceptance and scope:** Only explicitly assigned trained staff/supervisors with the approved case-review permission can accept and apply the later-approved procedure. A hold covers only the disputed management action or individual link; the appointment and permitted attendance remain. Ordinary eligible actions are not automatically held.
3. **Review and disposition:** Assigned review is attributable and privacy-limited. Review itself proves no claimant authority; release and reversal need their own applicable permissions and documented review. Claimants cannot self-release. No automatic cancellation or broad reversal follows.
4. **Outcomes and messages:** Held is not completed. Do not send a success notice for an uncompleted action; SDD-006 owns authoritative appointment command reconciliation and D-095 constrains messages. Pending or unknown outcome remains unknown until reconciled. Evidence under SDD-003 must agree with the established outcome, exclude secrets and follow restricted reader/export rules.

**Failure scenarios to resolve:** malicious repetitive submissions, reviewer absence or conflict, incorrect hold scope, revoked reviewer permission, independent action attempted during hold, unknown outcome at hold time, failed evidence recording, and disclosure through status or notice. CASE-Q02–Q06 leave assignment, conflict handling, procedure, evidence lifecycle, state integration and operational coverage open. A timer, staffing commitment or automatic release is not selected.

## Contract 4 — sole-super-admin factor recovery

A fictional installation has one super-admin who loses the only usable factor. The request does not itself authenticate the claimant or restore authority. A separately controlled, independently authorized path must be available without standing developer/operator access, shared credentials or unrestricted bypass (D-105/D-108). SDD-002 draft C15 further proposes independent identity verification and attributable outcome, reviewed factor replacement/revocation and session invalidation before restoration; it is pending review.

| State | Review boundary / failure handling |
|---|---|
| Request or proof incomplete | No protected access or business authority. A self-held recovery code or email possession alone is not independent authorization. |
| Independent authorizer unavailable, compromised or identity uncertain | Do not self-approve or substitute an operator bypass; remain pending/denied and escalate via a later approved installation-specific procedure. Who substitutes and how independence is established are open. |
| Independent authorization established | A separately permitted executor may perform only the later-approved scoped recovery process. Document accountable actor, authorization and established outcome without recording secrets; do not infer authority to read business records. |
| Replacement and closure | Reviewed lifecycle must resolve old factor and affected sessions, verify intended new factor and record closure before protected authority returns. If any outcome is unknown, do not assert success; reconcile under the owning process. |
| Additional super-admin appointment | A separate privilege action needing independent approval and fresh verification, with no self-approval; recovery does not imply appointment permission. |

Possible client-designated independent authorizer or independently held recovery material are evaluation candidates, not approved procedures. Availability, false authorization, collusion, custody, turnover and accessibility require practical evidence before selection. The client and operational owners, alternate authorizer and actual handover are not yet assigned.

## Review questions, dependencies and proposed evidence

| Decision / reviewer | Question and dependency | Future verification, only under separate authorization |
|---|---|---|
| PO, identity/security and accessibility — IDN-Q01–Q03 | Which factor combinations demonstrably provide MFA and accessible individual pathways without personal devices? Who provisions, replaces and independently authorizes sole-admin recovery; what fresh-verification and session lifecycle rules apply? | Exercise each covered internal category, failed/uncertain MFA, shared workstation, accessibility, factor loss, compromised/revoked factor and no-operator one-admin recovery; verify no business session in recovery. |
| PO/service-policy, security/privacy — GUEST-Q01–Q05 | What independent evidence establishes original-booker authority, and how do issuance, correlation, assisted recovery and service-specific visibility work without unnecessary data or prohibited email? | Simulate shared mailbox, leaked/copied proof, same-channel correlation, cross-appointment access, account link and uncertain representative claims; review accessibility and neutral responses. |
| PO/service-policy and assigned operations — CASE-Q01–Q06 | What facts permit accepting a dispute, who is assigned and available, what separates release and reversal, and how are conflicts and unknown outcomes resolved? | Exercise unassigned/revoked reviewer, repeated failed proof, narrow hold, unrelated actions, attendance, independent disposition and notification/evidence consistency. |
| Qualified privacy/security and actual installation owners — IDN-Q04, SDD-003/024/026 | What minimum evidence, reader/export grants, retention and restored restrictions apply; who owns processing, access, support and incident handling? | Review information flows and actual provider/installation terms before collection; test unauthorized readers/export, closure and restored restrictions under an approved plan. |

Specialists and actual client operators remain to be named. Current reviews, SDD approvals, scoped implementation authorization, applicable privacy/security/accessibility review and later acceptance are independent steps. No live case, test, user study or implementation has occurred as part of this artifact; no legal compliance, security assurance or Gate 2/Checkpoint 11 completion is claimed.
