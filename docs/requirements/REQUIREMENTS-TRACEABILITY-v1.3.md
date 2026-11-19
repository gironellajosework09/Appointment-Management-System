# Requirements Traceability revision 1.3 — Internal MFA Amendment

> **APPROVED DEVELOPMENT-STAGE TRACEABILITY REVISION.** Product Owner approval applies to this exact revision. It supplements approved revision 1.2 and carried-forward revision 1.0 for Requirements Specification v0.9; prior versions remain preserved. No validation or test evidence is created and implementation is not authorized.

| Field | Value |
|---|---|
| Approved revision | 1.3 |
| Current effective baseline | Revision 1.3 with Requirements Specification v0.9; v0.8/v0.7 and traceability revision 1.2/1.0 are preserved predecessors and carry forward except for the stated amendment |
| Review status | APPROVED by Product Owner for this exact revision |
| Incorporation | Adds traceability for NFR-003 and AC-027–AC-029 in approved Requirements Specification v0.9; prior approved rows remain unchanged |
| Decision reference | D-105 records MFA policy coverage; mechanisms remain open |
| Gate / evidence status | Gate 2 remains IN PROGRESS; no verification evidence is claimed |

## 1. Change history

| Revision / date | Author / role | Review status | Change / reason | Affected records and links | Approval / disposition |
|---|---|---|---|---|---|
| 1.3 / prepared 2026-11-12 | Documentation amendment preparer | APPROVED — exact revision | Traces NFR-003 v0.9 and AC-027–AC-029, linking the adopted internal MFA coverage policy to identity, audit, accessibility and future verification references while leaving implementation mechanisms open. | Approved [Requirements Specification v0.9](REQUIREMENTS-SPECIFICATION-v0.9.md); D-105; [SDD-002](../specs/SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md); [SDD-003](../specs/SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md); [SDD-023](../specs/SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md). | Product Owner approved this exact revision in the current Gate 2 instruction; approval date not separately supplied; recorded 2026-11-12. No validation or implementation authorization. |

## 2. Supplemental traceability rows

These rows supplement the full D-081 matrix and approved v0.8 / revision 1.2 supplements. Existing rows remain unchanged. Approval of traceability is not evidence of implementation or successful verification.

| Requirement / record | Priority / approved status | Provenance / decisions | Goals / success criteria | Questions / risks / assumptions | Journeys / rules | Criteria | Planned validation | Evidence |
|---|---|---|---|---|---|---|---|---|
| NFR-003 (approved v0.9 wording) | Mandatory baseline / approved for development-stage design; not validated | D-105; Product Owner MFA coverage policy; Governance §6 version control | G-3; S-4 | SEC-Q02 coverage recorded; factor, session, accessible alternatives evaluation, recovery, custody and implementation mechanisms remain open in SDD-002 IDN-Q02 and relevant security review | Internal sign-in and protected actions; public guest and customer-account journeys remain separately governed | AC-027–AC-029 | Security, accessibility and operational design review; later authorization, denial, lifecycle, recovery and audit-consistency verification | None yet |
| AC-027 | Approved in v0.9; not validated | NFR-003; D-105 | Protected internal access only after MFA; no access on failed/uncertain verification | Confirm covered internal categories and conditional operator authorization; customers/guests excluded from this policy | SDD-002 C01/C02/C06; guest/customer scopes remain separate | NFR-003 | Future positive/negative authorization tests for each covered class and excluded customer/guest journeys | None yet |
| AC-028 | Approved in v0.9; not validated | NFR-003; D-105; SDD-023 UX/accessibility direction | Secure, accessible, individually attributable alternatives without personal-device dependency | No factor or package selected; assess supportability, accessibility and abuse resistance | SDD-002 C10/C14; SDD-023 C10/C14/C15 and applicable UX questions | NFR-003 | Future rendered keyboard, assistive-technology and applicable device review plus security checks; automated scans alone are insufficient | None yet |
| AC-029 | Approved in v0.9; not validated | NFR-003; D-105; SDD-002; SDD-003 | Controlled factor lifecycle, risk-based fresh verification and independently authorized sole-super-admin recovery | Exact triggers, lifecycle procedures, authorization model, evidence details, custody and recovery mechanisms remain open | SDD-002 C08/C09/C13/C15 and IDN-Q02; SDD-003 C08/C13 and EVD-Q01–Q04 | NFR-003 | Future lifecycle, session, recovery, least-privilege and evidence-consistency verification under an authorized plan | None yet |

## 3. Status and evidence boundary

D-105 is the recorded policy decision, not evidence that an authentication control exists or has been tested. NFR-003 v0.9 and AC-027–AC-029 are approved development-stage requirements and are traced by this approved revision 1.3. The v0.8/revision 1.2 predecessors remain preserved; the amendment does not change their other content. No test, accessibility review, security assessment, implementation or release evidence is asserted.

## 4. Bounded verification timing — Product Owner approved (D-123)

| Record | Disposition | Owner | Milestone | Evidence status |
|---|---|---|---|---|
| AC-028 accessible MFA alternative | Deferred — synthetic-local Batch 03 | Product Owner | 2026-12-19 review; earlier triggering milestones control | Not passed; no rendered keyboard, assistive-technology or device evidence recorded |
| Rendered accessibility checks for the Batch 03 internal slice | Deferred — synthetic-local Batch 03 | Product Owner | 2026-12-19 review; earlier triggering milestones control | Not passed; automated checks are not a substitute |

The requirement text and approved status of NFR-003 and AC-028 are unchanged. These dispositions record timing only and grant no production, release or real-client authority.
