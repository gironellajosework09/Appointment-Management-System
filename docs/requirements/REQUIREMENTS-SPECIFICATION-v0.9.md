# Requirements Specification v0.9 — Internal MFA Amendment

> **APPROVED DEVELOPMENT-STAGE REQUIREMENTS BASELINE.** Product Owner approval applies to this exact v0.9 artifact. It preserves v0.8 and unchanged v0.7 as historical predecessors, and does not create validation evidence or authorize implementation, deployment, release or Gate 2 closure.

| Field | Value |
|---|---|
| Approved version | 0.9 |
| Current effective version | v0.9, read with unchanged v0.8 and v0.7 except where v0.9 replaces NFR-003 and adds AC-027–AC-029; development-stage assumptions, not representative validation |
| Review status | APPROVED by Product Owner for this exact version |
| Owner | Product Owner |
| Prepared by / date | Documentation amendment prepared from the Product Owner's explicit MFA policy direction; prepared 2026-11-12 |
| Approval provenance | Explicit Product Owner approval in the current Gate 2 instruction; approval date not separately supplied; approval recording date 2026-11-12 |
| Change authority | Decision D-105 records MFA coverage; Requirements Governance §6 exact-version approval is recorded here |
| Gate / implementation status | Gate 2 remains IN PROGRESS. No implementation or deployment is authorized. |

## 1. Versioning and incorporation rule

This is an **approved versioned amendment supplement**. Read it with the exact unchanged Requirements Specification v0.7 and approved v0.8 supplement. It replaces only NFR-003 and adds AC-027–AC-029; all other v0.8 and carried-forward v0.7 records remain unchanged. This approval creates no validation, test result, security/privacy approval, release approval or implementation authorization.

At the time this amendment was prepared, the Product Owner had approved the MFA coverage policy direction recorded in D-105, not the exact wording of this requirements version. The Product Owner subsequently approved this exact v0.9 artifact as recorded above. The policy approval date and this exact-version approval date were not separately supplied; the preparation/recording date is not represented as an approval date.

## 2. Change history

| Version / date | Author / role | Review status | Change and reason | Affected traceability | Approval / disposition |
|---|---|---|---|---|---|
| v0.9 / prepared 2026-11-12 | Documentation amendment preparer | APPROVED — exact version | Replaces NFR-003 and adds AC-027–AC-029 to express the recorded internal MFA coverage policy, accessible alternatives, controlled lifecycle and recovery boundaries. Technical mechanisms remain unselected. | Approved Traceability revision 1.3; D-105 records the policy decision. | Product Owner approved this exact artifact; approval date not separately supplied; recorded 2026-11-12. No validation evidence or implementation authorization. |

## 3. Proposed replacement text for existing requirement

The following is the approved v0.9 replacement for NFR-003 only. Other v0.8 and carried-forward v0.7 requirements remain unchanged.

### NFR-003 — Security and privacy (v0.9)

> Every state-changing operation shall use approved authentication, server-side authorization and server-side validation. Guest booking remains account-free; guest management requires independent appointment-scoped proof. Registered-customer access is limited to created or individually linked authorized appointments. An account session, personal-data match, email, reference or QR alone grants no unrelated appointment, attendee or guardian authority. Denials shall not mutate state or disclose unnecessary data. Proposed email/password verification and recovery, linking proof and staff-assisted recovery require separate D-095 approval, detailed design and security/privacy review.
>
> Before protected internal application access, every authenticated internal user shall complete MFA. This includes staff, supervisors, administrators and installation-local super-admins. A technical operator is covered only when separately authorized for protected internal application access. Public guests and customer-facing accounts are outside this policy. Failed or uncertain MFA verification shall not grant protected access.
>
> Secure, accessible and individually attributable MFA pathways shall be available to authorized internal users who do not have or cannot use personal devices. Shared factors, shared credentials and undocumented MFA bypasses are prohibited. Sensitive actions shall require reviewed risk-based fresh verification; routine interactions do not automatically require repeated MFA.
>
> Enrollment, factor replacement, revocation, recovery and deactivation shall follow controlled, attributable processes. Recovery shall support an installation with one super-admin through independently authorized handling and shall not depend on standing developer/operator access. The MFA factor, package, vendor, session interval, reauthentication trigger values and recovery protocol remain subject to later authorized design.

## 4. NFR-003 version metadata

| Field | Record |
|---|---|
| Title | Security and privacy |
| Statement | Every state-changing operation shall use approved authentication, server-side authorization and server-side validation. Guest booking remains account-free; guest management requires independent appointment-scoped proof. Registered-customer access is limited to created or individually linked authorized appointments. An account session, personal-data match, email, reference or QR alone grants no unrelated appointment, attendee or guardian authority. Denials shall not mutate state or disclose unnecessary data. Proposed email/password verification and recovery, linking proof and staff-assisted recovery require separate D-095 approval, detailed design and security/privacy review.<br><br>Before protected internal application access, every authenticated internal user shall complete MFA. This includes staff, supervisors, administrators and installation-local super-admins. A technical operator is covered only when separately authorized for protected internal application access. Public guests and customer-facing accounts are outside this policy. Failed or uncertain MFA verification shall not grant protected access.<br><br>Secure, accessible and individually attributable MFA pathways shall be available to authorized internal users who do not have or cannot use personal devices. Shared factors, shared credentials and undocumented MFA bypasses are prohibited. Sensitive actions shall require reviewed risk-based fresh verification; routine interactions do not automatically require repeated MFA.<br><br>Enrollment, factor replacement, revocation, recovery and deactivation shall follow controlled, attributable processes. Recovery shall support an installation with one super-admin through independently authorized handling and shall not depend on standing developer/operator access. The MFA factor, package, vendor, session interval, reauthentication trigger values and recovery protocol remain subject to later authorized design. |
| Rationale | Protected internal application access needs consistent individual MFA coverage while preserving the separately governed guest and customer-account boundaries, accessible use and controlled recovery. |
| Provenance | Product Owner's explicit MFA policy direction recorded as D-105; existing approved NFR-003 v0.8 remains the effective predecessor. |
| Review status | APPROVED for this exact v0.9 wording; not validated. |
| Release priority | Mandatory baseline under the approved development-stage requirements; not release approval. |
| Planned validation activities | None planned as a completed or approved activity. Feature-specific validation must be defined before implementation approval. |
| Validation evidence | None yet. |
| Approval reference/date | Product Owner approved exact Requirements Specification v0.9 in the current Gate 2 instruction; approval date not separately supplied; recorded 2026-11-12. D-105 remains the policy decision. |
| Owner | Product Owner |
| Current working version / status | v0.9 / APPROVED development-stage baseline |
| Effective approved version | NFR-003 v0.9; approval date not separately supplied; recorded 2026-11-12. |
| Version history | v0.9 prepared 2026-11-12 by documentation amendment preparer; approved by the Product Owner as the exact version; adds internal MFA coverage wording and AC-027–AC-029; approved Traceability revision 1.3. No validation or implementation evidence. |
| Deferral/withdrawal rationale | Not applicable. |

## 5. Proposed additional acceptance criteria

These criteria are approved normative requirements. Their approval is not a test result; they are not `VALIDATED` and have no execution evidence.

| ID | Related requirement / decision | Proposed criterion | Status | Validation need |
|---|---|---|---|---|
| AC-027 | NFR-003; D-105 | Every protected internal application access requires successful MFA for an authenticated staff member, supervisor, administrator or installation-local super-admin; a technical operator is included only when separately authorized for that access. Public guests and customer-facing accounts remain outside this policy. Failed or uncertain verification grants no protected access. | APPROVED in v0.9; not validated | Future authorization and negative-path verification across covered internal user categories; confirm guest/customer flows remain separately governed. |
| AC-028 | NFR-003; D-105; SDD-023 | An authorized internal user without a usable personal device has a secure, accessible and individually attributable MFA pathway. Shared factors, shared credentials and undocumented bypasses do not grant protected access. | APPROVED in v0.9; not validated | Security/accessibility review and future rendered keyboard, assistive-technology and applicable device verification; this criterion selects no factor or package. |
| AC-029 | NFR-003; D-105; SDD-002; SDD-003 | MFA enrollment, replacement, revocation, recovery and deactivation follow controlled, attributable processes. Sensitive actions apply reviewed risk-based fresh verification without requiring repeated MFA for every routine interaction. Single-super-admin recovery requires separately controlled authorization and does not rely on standing developer/operator access. Pending, rejected or uncertain recovery outcomes do not grant protected authority. | APPROVED in v0.9; not validated | Future lifecycle, authorization, recovery and evidence-consistency verification. Actual triggers, procedures, mechanisms and evidence details remain for authorized design. |

## 6. Preserved boundaries and open design

- D-105 establishes policy coverage only. It does not select an MFA factor, package, vendor, session interval, reauthentication threshold, recovery protocol or operational custodian.
- Guest booking remains account-free. Customer-facing account authentication remains outside this MFA policy and follows its separately approved requirements.
- Accessible pathways do not presume personal smartphone ownership or authorize shared devices/factors, shared credentials or undocumented bypasses.
- v0.8 and v0.7 remain preserved predecessors; v0.9 is effective only for its stated amendment. The requirements are not `VALIDATED` and have no execution evidence.
- SDD-002, SDD-003 and SDD-023 remain drafts pending their own review. This amendment does not approve them or authorize implementation, deployment or Gate 2 closure.

## 7. Bounded verification timing — Product Owner approved (D-123)

This note records a timing disposition. It does not amend NFR-003 or AC-028, change their approved status, or select a factor, package or mechanism.

- The Batch 03 synthetic-local verification of the accessible MFA alternative for users without a usable personal device (AC-028) and the related rendered keyboard, assistive-technology and zoom checks is deferred to the review deadline of 2026-12-19.
- The deferred checks are **not passed**. They remain required, enforceable and attributable to the Product Owner as accountable owner.
- Any earlier triggering milestone — real personal or client data, additional users in affected workflows, operational reliance, public access or release — controls before the review deadline.
- The deferral is limited to the synthetic-local development environment. It does not waive MFA, accessible alternatives, attribution, fail-closed behavior or any security/accessibility obligation.
- The §6 sentence describing SDD-002, SDD-003 and SDD-023 as drafts is pre-approval history. Later exact-version approvals are recorded in the SDD Registry §13/§14 and remain unaffected by this note.
