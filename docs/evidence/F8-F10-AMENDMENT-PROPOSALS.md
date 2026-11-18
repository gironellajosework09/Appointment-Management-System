# F8–F10 Amendment Proposals and Gate 2 Readiness

| Field | Record |
|---|---|
| Status | **PROPOSAL — AI-assisted; not approved, activated, or effective** |
| Scope | F8 wording proposal for SDD-011-C04; F10 versioned Requirements Specification erratum proposal; Gate 2 exit-readiness checklist |
| Authority | Prepared under the bounded remediation authority in D-115. This artifact records proposals only. |
| File boundary | This proposal does not edit or replace any approved SDD, requirement, or traceability artifact. |

## 1. F8 — SDD-011-C04 authority clarification

### Source and governing boundary

The approved SDD-011 v0.2 criterion currently reads as follows (source: `docs/specs/SDD-011-CUSTOMER-DASHBOARD-AND-INDIVIDUAL-APPOINTMENT-ASSOCIATION.md:25`):

> Given a permitted unlink or reversal, when an authorized action succeeds, then association changes are attributable and the appointment is preserved; no automatic cancellation or transfer of attendee authority occurs. A claimant or account holder cannot self-release a contested hold or reverse another party's link. Release of the hold or reversal of the link requires an assigned, appropriately authorized reviewer and documented disposition under SDD-013.

SDD-011 v0.2 and SDD-013 v0.3 are approved within their documented scopes (`docs/specs/SDD_REGISTRY.md:432,444–453`). SDD-013 distinguishes releasing a hold from link reversal and requires separately assigned permissions; placing a hold or viewing evidence does not itself confer link-reversal authority (`docs/specs/SDD-013-CONTESTED-ACTION-HOLDS-AND-ASSIGNED-CASE-REVIEW.md:32,46,63`). AC-021 is included in the approved v0.8 development-stage baseline: the explicit approval disposition says changed/new criteria are approved for design and retained DRAFT labels are historical preparation metadata (`docs/requirements/REQUIREMENTS-SPECIFICATION-v0.8.md:25-36`); its carried-forward trace row is at `docs/requirements/REQUIREMENTS-TRACEABILITY-v1.2.md:147`. The clarification proposed here is based on approved SDD-011/013 text and does not amend AC-021.

### Exact proposed before/after

**Before — approved SDD-011 v0.2, C04 (preserve pending approval):**

> Given a permitted unlink or reversal, when an authorized action succeeds, then association changes are attributable and the appointment is preserved; no automatic cancellation or transfer of attendee authority occurs. A claimant or account holder cannot self-release a contested hold or reverse another party's link. Release of the hold or reversal of the link requires an assigned, appropriately authorized reviewer and documented disposition under SDD-013.

**After — proposed replacement only:**

> Given a permitted unlink or reversal, when an authorized action succeeds, then association changes are attributable and the appointment is preserved; no automatic cancellation or transfer of attendee authority occurs. A claimant or account holder cannot self-release a contested hold or reverse another party’s link. Releasing a contested hold and reversing a link are distinct actions; each requires an assigned, trained staff member or supervisor holding the applicable approved case-review permission and a documented disposition after review under SDD-013.

### Classification and impact

- This is a **substantive approved-SDD amendment** for authorization purposes: it expressly distinguishes authority for hold release from authority for link reversal. D-115 permits demonstrably editorial corrections but excludes changes to approved design substance; it does not authorize this replacement. Obtain explicit Product Owner approval before changing SDD-011-C04 (`docs/decisions/DECISION_REGISTER.md:811–813`).
- If approved and applied within the boundaries of approved SDD-011 v0.2 and SDD-013 v0.3, this proposal changes no requirement or traceability status; no requirement-text or traceability amendment is proposed. No role assignment, case procedure, proof method, permission mechanism, or other implementation mechanism is selected.
- Any later proposal to change approved requirement text or its traceability remains subject to Requirements Governance §§6/8; no such change is proposed here (`docs/requirements/REQUIREMENTS_GOVERNANCE.md:123–148,177–194`).
- Keep the approved SDD-011 v0.2 text effective unless and until the Product Owner approves a new exact SDD revision. Registry §14 records SDD-011 v0.2 as the approved exact revision (`docs/specs/SDD_REGISTRY.md:444–453`).

## 2. F10 — proposed Requirements Specification v0.10 erratum

### Exact proposed before/after for v0.9 line 77

**Before — approved Requirements Specification v0.9, line 77:**

> SDD-002, SDD-003 and SDD-023 remain drafts pending their own review. This amendment does not approve them or authorize implementation, deployment or Gate 2 closure.

**After — proposed v0.10 erratum wording:**

> SDD-002 v0.5, SDD-003 v0.5 and SDD-023 v0.3 are approved within their documented scopes, as recorded in SDD Registry §13. Their documented limitations and open questions remain. This correction does not authorize implementation, deployment or Gate 2 closure.

The approved revisions are recorded in Registry §13: SDD-002 and SDD-003 v0.5 and SDD-023 v0.3 (`docs/specs/SDD_REGISTRY.md:421–440`). The contradictory sentence is at `docs/requirements/REQUIREMENTS-SPECIFICATION-v0.9.md:77`.

### Version control and traceability treatment

- Prepare this as proposed **Requirements Specification v0.10**, with v0.9 retained verbatim and its prior approval/provenance preserved. Requirements Governance records v0.9 as approved on 2026-11-12 for its stated amendment; its approval date was not separately supplied (`docs/requirements/REQUIREMENTS_GOVERNANCE.md:150–157`).
- Suggested version-history entry (proposal state at preparation; do not treat as a recorded approval):

  | Revision / date | Author / role | Review status | Change / reason | Affected records and links | Approval / disposition |
  |---|---|---|---|---|---|
  | 0.10 / proposed 2026-11-15 | AI-assisted proposal preparer | DRAFT — proposal state before Product Owner decision; this entry does not record approval | Corrects the stale SDD approval-status statement at v0.9 line 77 to match the approved exact revisions in SDD Registry §13. No requirement behavior, scope, priority, or acceptance criterion changes. | Requirements Specification v0.9 line 77; SDD Registry §13; SDD-002 v0.5, SDD-003 v0.5, SDD-023 v0.3; traceability revision 1.3 reviewed and unaffected. | **If approved:** update this history entry to record the Product Owner’s explicit decision, exact approved revision, approval reference and supplied approval date (or state that the date was not separately supplied), and recording date. Preserve v0.9 and its approval/provenance. Until that decision/disposition is recorded, v0.9 remains effective. |

- Requirements Governance §6 says editorial corrections that do not alter meaning still receive a version-history entry and do not change approval status or erase prior text. It also requires preserving the prior approved version as effective until the Product Owner explicitly approves the new version or disposes of it (`docs/requirements/REQUIREMENTS_GOVERNANCE.md:123–148`). The `DRAFT` status above describes this proposal before a Product Owner decision, not the status of any approved version. If the Product Owner approves v0.10, record that approval and its provenance in the history entry, retain v0.9 and its approval/provenance, and update effective-version navigation accordingly. D-115 authorizes status correction in active documentation where primary records establish the status, but this assigned artifact prepares the requested governed proposal and does not update v0.9 or make v0.10 effective (`docs/decisions/DECISION_REGISTER.md:811–813`).
- The proposed sentence is an editorial status/provenance correction: it changes no behavior, requirement, or AC. Requirements Governance §8 requires the traceability matrix and specification to change together for material changes, but does not require changing traceability for this non-material erratum. Preserve traceability revision 1.3 and its approval/provenance unchanged; its MFA rows and scope are unaffected (`docs/requirements/REQUIREMENTS-TRACEABILITY-v1.3.md:3–18,24–33`).
- Governance does not state that an editorial correction, by itself, always requires a separate approval cycle. The versioned proposal therefore makes no such blanket claim. Because §6 keeps the prior version effective until explicit Product Owner approval or disposition, do not present v0.10 as effective without that recorded action.

### Proposed Product Owner wording for F10

> I approve the exact proposed Requirements Specification v0.10 erratum wording in `docs/evidence/F8-F10-AMENDMENT-PROPOSALS.md`, including its version-history entry. This is an editorial status/provenance correction only; it does not change requirements behavior, scope, priority, acceptance criteria, or traceability revision 1.3. Preserve approved v0.9 and its provenance. Record this exact v0.10 as approved and effective only upon this decision; otherwise v0.9 remains the effective version. This decision grants no implementation, deployment, release, or Gate 2 closure authority.

## 3. Gate 2 exit-criteria readiness checklist

Gate Register §5 lists the required inputs/deliverables and exit criteria (`docs/GATE_REGISTER.md:343–369`). Statuses below report the present record; they do not assert acceptance or closure.

| Item | Status | Evidence and remaining action |
|---|---|---|
| Gate 1 approved prerequisite | **PASS** | Gate Register §5 records Gate 1 approval under D-082 (`docs/GATE_REGISTER.md:343–345,381`). No further action for this prerequisite. |
| Integrated design review against requirements, product goals, and engineering priorities | **CONDITIONAL** | Approved and provisionally accepted design artifacts and decisions exist, but the final integrated review is not recorded complete. Review the designs together against the effective requirements and record findings, limitations, and proposed dispositions. D-115 authorizes preparation of the final review package, not its acceptance (`GATE_REGISTER.md:362–369`; `DECISION_REGISTER.md:811–813`). |
| CP11 design package reviewed and included in final architecture review | **CONDITIONAL** | D-112 accepts CP11 only within its documented design/prototype scope. That does not establish its inclusion in a completed final Gate 2 review (`DECISION_REGISTER.md:787–789`; `GATE_REGISTER.md:355–359,366–367`). Include the CP11 evidence, limitations, and review findings in the final review. |
| CP12 design-to-requirements integration / traceability review | **NOT READY FOR PRODUCT OWNER ACCEPTANCE** | `docs/evidence/CP12-INTEGRATION-REVIEW.md` documents forward/reverse criterion-level crosswalks. It remains NOT READY because the F1–F17 source report is unavailable and 14 findings remain unreconciled (`CP12-INTEGRATION-REVIEW.md:3–5,154–190,200–221`). D-115 authorizes review work, not acceptance (`DECISION_REGISTER.md:811–813`). |
| Traceability established for Gate 2 | **CONDITIONAL** | Requirements v0.9 and traceability revision 1.3 are approved, and CP12's forward/reverse matrices are documented. The F1–F17 source remains missing; reconcile the 17 findings against the source when available, update CP12 findings/dispositions and evidence references, then submit the package for review (`CP12-INTEGRATION-REVIEW.md:154–190,200–221`; `GATE_REGISTER.md:360,368`; `REQUIREMENTS-TRACEABILITY-v1.3.md:3,20–33`). |
| Q-007 Gate 2 disposition | **PASS — disposition only** | D-116 adopts the D-092 capability-based approach; no platform, lockfile, package graph, or tested matrix is accepted. Exact versions remain Gate 4 work (`DECISION_REGISTER.md:819`). No additional Product Owner disposition is required for Q-007’s Gate 2 question. |
| Q-008 Gate 2 disposition | **PASS — minimum allocation only** | D-117 records the minimum responsibility allocation; detailed arrangements, provider terms, and runbooks remain open for later approval (`DECISION_REGISTER.md:820`). No additional Product Owner disposition is required for Q-008’s Gate 2 question. |
| Q-016 / Q-022 Gate 2 disposition milestone | **PASS — evaluation approach only** | D-118 records the D-109 approach as satisfying the Gate 2 disposition milestone; numeric targets and feasibility evidence remain open for later evaluation (`DECISION_REGISTER.md:821`). No numeric target or service commitment is approved. |
| Q-020 cutoff-policy disposition | **PASS — policy direction only** | D-107 records separate cancellation/rescheduling eligibility and cutoffs relative to appointment start, inclusive boundary, installation business time zone, and no penalties. D-079's cutoff-policy milestone is recorded; per-service values, exception authority, detailed states and enforcement remain open for affected work (`DECISION_REGISTER.md:264,747`; `GATE_REGISTER.md:371–373`). No further Gate 2 policy disposition is required. |
| Final Gate 2 review and Product Owner approval | **BLOCKED** | CP12 review work is documented, but not accepted; 14 findings remain unreconciled and no final closure decision is recorded (`CP12-INTEGRATION-REVIEW.md:200–221`; `GATE_REGISTER.md:371–373`). Gate 2 remains IN PROGRESS and D-115 withholds closure authority (`DECISION_REGISTER.md:811–813`). Reconcile findings, then obtain explicit PO review and decision. |

### Gate 2 closure decision template — for use only after readiness criteria pass

> **Gate 2 closure decision — conditional template; not a current decision**
>
> I have reviewed the completed Gate 2 exit-criteria evidence, including the integrated design review, the CP11 package and findings, and the CP12 bidirectional traceability review and its dispositions. I **[approve Gate 2 closure / do not approve Gate 2 closure and require: ___]**. This decision applies only to Gate 2 status. It does not authorize implementation, installation, deployment, release, CEAP access, or any separately controlled activity.
>
> Product Owner: ___  
> Decision date: ___  
> Evidence/package revision: ___

This template is not usable as an approval until the listed evidence is available, reviewed, and the outstanding criteria are met or explicitly dispositioned by the authorized Product Owner. No Gate 2 closure is asserted by this artifact.

## 4. Decision boundary

This document is an AI-assisted proposal artifact only. F8 and F10 text above remains proposed; the approved SDD-011 v0.2, Requirements Specification v0.9, and traceability revision 1.3 remain unchanged and effective according to their recorded approvals. D-116–D-118 already dispose of Q-007, Q-008, Q-016, and Q-022 for their Gate 2 milestones; this checklist does not reopen them or imply a new decision. Gate 2 remains IN PROGRESS unless and until the Product Owner records an explicit closure decision after applicable criteria are satisfied.
