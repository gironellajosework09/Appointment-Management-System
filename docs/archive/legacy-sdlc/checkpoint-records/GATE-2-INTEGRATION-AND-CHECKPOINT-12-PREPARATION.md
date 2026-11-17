# Gate 2 Requirements Integration and Checkpoint 12 Preparation

> **PREPARATORY WORKING DRAFT — NOT Checkpoint 12 execution or acceptance.** Prepared under
> the authorized Gate 2 documentation scope. This document does not accept Checkpoint 11,
> begin/complete Checkpoint 12, approve Gate 2, change status, or authorize implementation.

> **D-098 prospective process note (2026-11-10):** This remains a historical Gate 2 preparation
> record. Gate 2 remains historically unfinished and unaccepted; routine Gate 2/Checkpoint 12
> progression is prospectively superseded. Checkpoint 11 remains an unfinished, unaccepted design
> baseline. Future improvements use authorized feature-level SDD work. This note records no
> checkpoint acceptance, gate completion, or production implementation authority.

| Field | Value |
|---|---|
| Historical gate disposition | Gate 2 — Architecture & Design; IN PROGRESS and unfinished at D-098 |
| Requirements baseline | Specification v0.8 / Traceability revision 1.2; D-094/D-095, development-stage assumptions |
| Historical requirements baseline | Specification v0.7 / Traceability revision 1.0; D-081, preserved historical record |
| Checkpoint 11 | Unfinished, unaccepted design baseline; no retrospective completion |
| Checkpoint 12 | Historical proposed follow-up; superseded as a routine process step by D-098 |
| Approval date | Not supplied for D-094/D-095 or the exact requirement versions; Decision Register revision 1.19 is the recording reference |

## 1. Authority and review boundary

Gate Register §5 and D-093 define Gate 2 deliverables and require Checkpoint 11 evidence
before Checkpoint 12 integration/traceability review and final Gate 2 review. D-086–D-092
accept fingerprinted architecture drafts only as working designs. This preparation therefore
uses separate traceability/reconciliation material and leaves those accepted artifacts
unchanged. Checkpoint 11 screen specifications below are design coverage, not a rendered
prototype, Product Owner/usability/accessibility findings, or an accessibility conformance
result. Checkpoint 12 remains pending until the required sequence and review authorization
are satisfied.

Approved product scope to preserve: account-free guest booking remains mandatory; optional
verified accounts do not confer priority or staff authority; booking paths share final
integrity rules; guest booking is never auto-linked by personal-information match; D-095
permits only six stated email purposes; D-089 excludes MVP cancellation/no-show penalties
while ordinary operational records remain. No client policy value or mechanism is inferred.

## 2. Gate 2 deliverable inventory — current evidence and gaps

| Required deliverable | Existing Gate 2 material / disposition | Remaining material gap before final Gate 2 approval |
|---|---|---|
| Architecture description | `CONCEPTUAL_ARCHITECTURE.md` v0.1; D-085/D-086 directions remain provisional. | It describes the previous guest-only baseline; an account-scope reconciliation must preserve shared booking integrity and add no account module/topology by assumption. Final architecture approval remains separate. |
| Component/module design | `COMPONENT_MODULE_DESIGN.md` v0.1, provisional working design under D-086. | No explicit account identity, account-to-appointment permission, link/dispute, profile/deactivation or purpose-limited email responsibility; keep responsibilities logical until reviewed. |
| Workflow design | `DETAILED_SYSTEM_WORKFLOW_DESIGN.md` v0.1, provisional working design under D-087. | No registered-customer journey or account lifecycle. Existing guest, staff, stale/unknown, capacity and reconciliation workflows remain applicable; account workflow deltas are described in §3. |
| Data model | `DATA_ARCHITECTURE_MODEL_DESIGN.md` v0.1, provisional logical design under D-088. | Candidate #08 is scoped person/contact and #11 is guest authority; neither defines verified accounts, individually linked original-booker appointments, disputes, deactivation or profile separation. No physical schema is authorized. |
| Interface/API design | `INTERFACE_API_DESIGN.md` v0.1, provisional logical contracts under D-090. | 31 candidate interfaces have no account registration/sign-in/dashboard/link/dispute contracts. Existing guest proof/lookup and final integrity boundaries must not be reused as if they already establish account authority. No endpoint/protocol is selected. |
| Configuration/deployment design | `CONFIGURATION_DEPLOYMENT_DESIGN.md` v0.1, provisional under D-091. | Account registration enablement and its administrator authority are not allocated. Q-008's credential, backup/restore, incident and support responsibility/effective-access matrix remains open for both hosting models. |
| Compatibility/dependency design | `COMPATIBILITY_DEPENDENCY_DESIGN.md` v0.1, provisional Q-007 approach under D-092. | Final Gate 2 Q-007 disposition remains open; exact runtime/dependency versions remain reserved for Gate 4 under D-031. |
| Checkpoint 11 UI/UX design | Stage 1 and Stage 2 screen/accessibility specs plus this v0.8 supplement. | Screen/state coverage now includes account journeys, but there is no connected account/confirmation/guest-management prototype or recorded Product Owner/usability/accessibility design-review disposition. Existing prototype files do not close this gap. |
| Checkpoint 12 integration/traceability review | This document is preparatory material only. | Must execute after Checkpoint 11 review; compare final accepted screens and all design artifacts against v0.8/revision 1.2 and record actual findings and disposition. |
| Final Gate 2 architecture review/closure | Pending; no approval evidence. | Requires all required designs and C11/C12 evidence, resolution/disposition of D-079 Gate 2 deadlines and open feasibility decisions, and explicit Product Owner approval. |

## 3. Cross-artifact integration and traceability findings

The matrix is a focused preparatory review of where approved v0.8 changes meet the existing
working designs. It identifies design gaps; it does not modify fingerprinted D-086–D-092
artifacts or assert their acceptance limits have changed.

| Approved requirement area | Working design references | Current integration finding | Gate 2 treatment / owner dependency |
|---|---|---|---|
| Optional registration, verified account and shared booking parity (FR-002/003/019; UJ-001/006; BR-010; AC-014/016/018/020) | Conceptual architecture §§3/6–7; Component §§2–4; Workflow WF-P01/P02/P05; Interface IF-P01–P05/IF-I03; Checkpoint 11 P00/P01–P05/CA01 | Existing designs state account-free guest booking but do not represent optional account entry. The same P04/IF-I03 final integrity boundary can carry the scope without account-based priority. Account-specific identity/entry contract is absent. | Add account entry and shared-path screens; propose account authentication/entry as a separate logical responsibility input, not a new module or endpoint. ACCT-L01 toggle authority and pending-signup transition require Product Owner disposition before final affected design. |
| Account appointment visibility and original-booker linking (FR-007/019/021; NFR-003/009; BR-011; AC-015/017/021/025) | Workflow WF-P03; Interface IF-P07/P08/IF-I01; data candidates #08/#11/#12; Stage 1 CA03/CA05 | Guest-scoped proof is not account ownership. The current logical model has no individually verified account-to-appointment link, dispute hold/reversal, or account dashboard visibility contract. Matching PII, QR, reference, account sign-in or email alone must not grant access. | Keep proof, account/appointment association, reviewer role, minimum view and reversal semantics unresolved; no schema/table. Resolve ACCT-L03/L04 with Product Owner policy and obtain Gate 3 authorization/privacy review. |
| Account/profile and deactivation lifecycle (FR-019/022; NFR-009; BR-012; AC-020/023/025) | Data candidates #08/#09/#11/#14; Config WF-A01/IF-A01; Stage 1 CA01/CA06 | Existing person/contact candidate permits scoped details, not a customer profile. Registration off preserves existing verified access by D-094. Profile edit and booking edit must remain distinct; deactivation preserves appointment/required records. | Design logical access/lifecycle states only. Resolve ACCT-L01 toggle authority/in-flight signup, ACCT-L05 field/profile rules and ACCT-L06 retention/deletion before affected architecture/data review; D-079/Q-015 before Gate 3 approval. |
| Purpose-limited email and failure semantics (FR-008/010/020; NFR-003/009/010; AC-024; D-095) | Workflow WF-P04/X02; Interface IF-P05/P08/IF-I04; Audit candidate #22; Stage 1 P05/CA01/CA02/CA04 | D-095 email scope is approved, but no email contracts/recipient-event audit classification or delivery component is defined in the fingerprinted inventory. Existing confirmation is on-screen/print/screenshot; email is additional and not transaction authority. | Use the six-event recipient/content matrix in Requirements v0.8 §5. Keep provider, tokens/sessions, contact-change verification, consent/notice, abuse and failure recovery open; no external service or retry count. Gate 2 logical contracts and Gate 3 threat/privacy review remain needed. |
| Profile/field minimization and proxy/duplicate behavior (FR-013/022; NFR-009; BR-002/006; AC-010/022/023) | Workflow WF-P02/S03; Interface IF-P03/P04/S06/IF-I03; data candidates #07/#08; screens P03/CA06 | Actor/booker/attendee separation already exists. The approved account scope adds profile prefill and service-field boundaries, while identity key/window and service-specific proxy/consent policy remain open. | Reuse the common form and shared integrity path. Do not add fields, identity keys, profile storage or proxy defaults until ACCT-L04/L05 and Q-021 policy are resolved. |
| Atomic reschedule, cutoff, unknown outcome and D-089 fees (FR-007/010; BR-005/013; AC-009/026) | Workflow WF-P04/X02/X01; Interface IF-P09/P10/IF-I03/I04; data candidates #12–14; screens G03/CA04 | Existing design covers atomic release/reallocation and unknown outcomes. Effective v0.8/AC-009 now reconciles the D-089 penalty boundary; unrelated service fees remain open. Q-020 cutoff/eligibility remains a D-079 Gate 2 blocker. | Preserve atomicity and non-replay behavior. Obtain the specific cutoff disposition in §4 before final Gate 2 approval; do not create a penalty/fee UI or invent a universal cutoff. |
| Staff/operator authorization (FR-004/012/021; NFR-003/005; AC-007/021) | Workflow WF-S01/S03/O01; Interface IF-S01/A02/O01/IF-I01; data candidates #09/#10/#23 | D-034/D-047/D-075 boundaries remain. New disputed-account case review needs a role/permission assignment but grants no default operator or ordinary staff authority. | Resolve a named permission boundary for account-link/dispute case review and Q-009/Q-018 role granularity; retain operator no-default-record-access. Security/access-control mechanics proceed to Gate 3. |
| Booking/load/reliability and compatibility (NFR-006/008; AC-005/018/026; Q-007/016/022) | Conceptual §§2/9; Workflow WF-X01/X02; Interface IF-I03/I04; Config §3; Compatibility §3/5; success targets D-067/D-070 | 50 requests/one capacity unit and 20–100 daily / busy-100 workload profiles remain requirements; they are not test results. D-091's 2s p95 and 99.5% monthly candidates are not approved. Q-007/Q-016/Q-022 dispositions remain open. | Preserve integrity tests and request outcomes. Product Owner must dispose Q-007/Q-016/Q-022 before final Gate 2 architecture approval; recommendations are in §4. |
| Privacy, retention, operator duration and physical roster (NFR-009/011; AC-007/012/025; Q-015; D-079) | Data candidates #18–25; Config §§9–10; Workflow WF-X03/O01/X04; Interface IF-S08/S09/O01/O02; screens R01–R03 | Retention/deletion, break-glass and exceptional operator-access duration remain Gate 3 obligations; printed roster custody/disposal remains Gate 6. D-079 deadlines cannot be moved by this prep. | Keep personal-data and paper copy content minimal; no periods or legal basis inferred. Resolve retention/deletion and exceptional-access terms before Gate 3 approval; physical handling/disposal before Gate 6. |

### Traceability readiness table

| Requirement records (individual links maintained in rev 1.2) | Existing/design screen mapping | C12 validation question |
|---|---|---|
| FR-002/003/019; NFR-006; BR-010; AC-001/005/014/016/018 | P00, P01–P05, CA01; WF-P02/P05; IF-P04/IF-I03 | Do screens and contracts preserve identical guest/account final checks, no account priority, and unknown-outcome handling? |
| FR-007/010/020; NFR-003/009/010; UJ-003/007; BR-005/013; AC-009/019/024/026 | G01–G03, CA02–CA04, P05; WF-P03/P04/X02; IF-P07–P10/IF-I04 | Do proof state, cutoff, committed outcome and six email purposes align, with no false confirmation/replay? |
| FR-019/021; NFR-003/009; UJ-007; BR-011; AC-015/017/021/025 | CA03–CA06; WF-P03; IF-P07/P08 (guest only; account link contract absent) | Is individual original-booker proof, authorized view, dispute hold/reversal and case-review role represented without implicit account ownership? |
| FR-013/022; BR-002/006; AC-010/022/023 | P03, CA06, S05; WF-P02/S03; IF-P03/S06/IF-I03 | Do booker/attendee/staff, service fields, profile prefill and client-configured duplicate/proxy behavior remain separate? |
| FR-008; NFR-009/010; FR-020/021; BR-012/013; AC-019–026 | P04/P05, CA01–CA06, G03, R02/R03 | Are account/email/link/deactivation/reschedule events auditable and included in the core workflow/test inventory? |

## 4. Product Owner recommendations for mandatory Gate 2 dispositions

All values listed as candidates below remain unapproved until the Product Owner explicitly
disposes them. No later checkpoint or D-079 deadline is changed by a recommendation.

| Decision | Recommendation | Alternatives and consequences |
|---|---|---|
| Q-020 cancellation/rescheduling cutoff | Approve a required, client-configurable policy per service and action (cancellation vs rescheduling), with its effective time interpreted in the installation/service timezone; require a policy before a service accepts bookings. Once its configured cutoff passes, deny public self-service and route to an explicitly assigned staff/supervisor path if policy permits. No universal duration; no penalty; capture current status and reason. | **One universal cutoff:** simpler UI, but would impose one business policy across unlike services. **No cutoff:** more flexibility, but lacks a finite public eligibility boundary. **Service/action-specific policy (recommended):** flexible, but needs administration, effective-date and stale-policy handling. PO must decide whether the model and post-cutoff authority are acceptable; exact client values stay configurable. |
| Q-016 response-time target | Disposition the existing D-091 candidate as a measurable target: 2 seconds at the 95th percentile for ordinary core requests under the already approved normal/peak workload profiles, with D-070 contention measured separately for integrity. Define the measured user-visible/server boundary and treatment of unresolved outcomes before final architecture review; do not count email delivery as booking response. | **Accept candidate with measurement boundaries (recommended):** yields a testable target but needs explicit request inventory/environment. **Set a different Product Owner target:** may better fit cost/hosting but must be measurable. **No numeric target:** leaves D-079 unsatisfied unless the Product Owner explicitly records a governed disposition and rationale before Gate 2 approval. |
| Q-022 availability target | Disposition D-091's 99.5% monthly availability candidate for the approved core booking/staff workflows, per independent installation; define measurement window, maintenance treatment and evidence source before adoption. | **Accept candidate with measurement rules (recommended):** creates a baseline expectation, not a current result. **Set a different PO-supplied target:** requires feasibility review across both hosting models. **No numeric target:** remains an unresolved D-079 Gate 2 disposition; does not imply future release acceptance. |
| Q-007 compatibility/dependency approach | Finalize D-092's capability-based compatibility/dependency management approach as a Gate 2 design decision: one profile principle for both hosting models, reviewed direct/transitive dependencies, later reproducible resolution and per-installation update/drift controls. Keep exact runtime/package versions for Gate 4 under D-031. | **Accept D-092 approach (recommended):** closes the Gate 2 method question without selecting versions. **Replace with a different method:** requires a reasoned compatibility/reproducibility comparison before final Gate 2. Exact stack versions remain out of scope either way. |
| Q-008 hosting/effective-access allocation | Complete one responsibility/effective-access matrix for client-managed and provider-managed hosting: who provisions credentials, applies security updates, holds backups, approves/restores a client backup, responds to incidents and reviews exceptional support access. Client remains business-record authority; infrastructure custody alone grants no data permission. | **Explicit split by hosting model (recommended, preserves D-083):** supports both options but requires distinct custodian assignments. **Select one model only:** narrows support but conflicts with D-083's both-model design constraint absent formal change control. Synthetic restore evidence is not real-client backup verification. |
| Account-specific design decisions ACCT-L01/L03/L04/L05/L08 | Before final affected Gate 2 design, decide client-admin authority for registration enablement and pending signup, case-review role for link disputes, service-level proxy/guardian and visibility policy, minimum field/profile catalog, and contact-change/recipient permissions. Keep proof mechanisms, abuse control and retention under their named Gate 2/3 obligations. | **Make each affected policy explicit (recommended):** permits screen/data/interface reconciliation while still leaving implementation mechanisms to later gates. **Leave as provisional:** Gate 2 must mark every dependent data/interface decision provisional and cannot claim complete final account architecture. |

## 5. Checkpoint 11 review evidence and remaining prototype gap

### Evidence inspected in this preparation

| Material | Observed scope | Limitation |
|---|---|---|
| Stage 1 screen document, including §4.2 v0.8 addendum | Existing P01–O01 staff/guest screen inventory and added CA01–CA06 account screen/state and record-level trace coverage. | Text specifications, not rendered wireframes or owner acceptance. |
| Stage 2 accessibility/design system | Existing desktop/mobile and accessibility-oriented rules plus v0.8 account-state WCAG coverage. | Design intent only; no axe/Lighthouse, keyboard/screen-reader session or contrast measurement was run here. |
| Existing prototype captures | Reviewed selected stored desktop public-review, mobile-320 selected flow, mobile menu, mobile detail, 640px effective-width calendar and attendance-preview images. | Captures are supplied artifacts; not produced or revalidated in this task. 640px effective-width is not proof of browser 200% zoom. |
| `prototype.test.js` | `node --test prototype/checkpoint-11/prototype.test.js`: 7 tests passed. | Fictional model tests cover availability, stale selection, reference lookup, no attendance mutation and calendar/dashboard logic; no account, proof, email, actual booking or browser accessibility flow. |
| `app.js` parse | `node --check prototype/checkpoint-11/app.js` completed with no output/error. | Syntax check only. |

The existing prototype is explicitly fictional and read-only. It offers service/date/slot
selection, selection review, staff calendar/dashboard/list, manual reference lookup and a
non-mutating attendance preview. It does **not** demonstrate registration/sign-in, customer
dashboard, account-to-appointment access, scoped guest management, linking/dispute, submission
to an established successful booking/confirmation, transaction email states, or an
unknown-command outcome. Therefore prototype presence cannot satisfy D-093's representative
journey coverage by itself. No prototype source or assets were changed.

Checkpoint 11 remains as recorded in the Gate Register: **authorized, NOT STARTED, not
accepted, not completed**. Screen specs and accessibility coverage are prepared; the connected
account and public-success journeys and Product Owner/usability/accessibility review findings
remain outstanding. No acceptance or status transition is inferred from the work in this
document.

## 6. Checkpoint 12 preparation boundary

This file is prepared for use after Checkpoint 11 review. The matrices in §3 are preliminary
consistency findings, not a completed Checkpoint 12 review. Formal C12 execution must follow
D-093's sequence, inspect the final C11 package/findings and reconcile all interfaces,
workflows, data/configuration, security/privacy and test traceability to v0.8/revision 1.2.
No Checkpoint 12 completion or Gate 2 recommendation is entered here.

## 7. Product Owner checkpoint required

Before final Gate 2 review, the Product Owner must disposition Q-020, Q-016, Q-022, final
Q-007 and the Q-008 allocations where needed for feasibility, plus the ACCT-L01/L03/L04/L05/L08
policies listed above. The Product Owner must also review the C11 screen/accessibility addenda,
provide the required usability/accessibility design-review findings and disposition, and
decide how the prototype coverage gap will be completed under authorized design scope. Gate
Register status remains unchanged pending separate authorization.
