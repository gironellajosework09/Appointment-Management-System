# Requirements Traceability revision 1.2 — Approved Gate 1 Amendment

> **APPROVED DEVELOPMENT-STAGE BASELINE — D-094/D-095 and Product Owner approval of this exact version.** This versioned supplement is effective with Traceability revision 1.0 under D-081 (revision 1.1 remains administrative only); it does not reopen Gate 1 or change gate/checkpoint status.

| Field | Value |
|---|---|
| Approved successor revision | 1.2 |
| Effective approved baseline | Revision 1.2 with Requirements Specification v0.8 under D-094/D-095; approval date not supplied |
| Current administrative copy | Revision 1.1; status commentary only, not separately approved |
| Review status | APPROVED development-stage assumption baseline; not representative validation |
| Incorporation | Unchanged matrix rows/sections carry forward from effective revision 1.0; replacement/additional rows below complete the proposed v0.8 delta |
| Gate | Targeted/versioned Gate 1 requirements amendment; Gate 2 remains IN PROGRESS |

## 1. Change history

| Revision / date | Author / role | Review status | Change / reason | Affected records and links | Approval / disposition |
|---|---|---|---|---|---|
| 1.2 / prepared 2026-11-04 | Documentation amendment preparer | APPROVED development-stage assumption baseline; not representative validation | Reconciles optional accounts, scoped email, original-booker linking, proxy/duplicate policies, profile, deactivation and atomic changes. Prior discovery evidence does not validate the new wording. | Exact replacements: FR-002/003/007/008/010/013, NFR-003/009/010, UJ-001/003, BR-002/005/006, AC-009. New: FR-019–022, UJ-006/007, BR-010–013, AC-014–026. NFR-007 and AC-001/002/005/006/008/010/013 retain v0.7 wording; impact links only. Each changed/new FR/NFR/BR/AC has an individual row in §7. | Product Owner approved this exact version; date not supplied; recorded in Decision Register revision 1.19. |

The preparation date is not the approval date. Approval is recorded for this exact version;
the date was not supplied. No EVD record, validation result, or test result is created.

## 2. Replacement/additional traceability rows

These rows supplement the full D-081 matrix. Existing unaffected rows are incorporated from
revision 1.0 without change. The v0.8 changed/new records have approved development-stage
assumption status under this exact approved baseline; none is `VALIDATED`.
Record-level `DRAFT` labels, proposed-source wording and `None` evidence cells below preserve
their preparation-time values; §5 and the exact-version approval disposition in §8 establish
the current approved development-stage status and do not imply validation.

| Requirement / record | Priority / approved status | Provenance / decisions | Goals / success criteria | Questions / risks / assumptions | Journeys / rules | Criteria | Planned validation | Evidence |
|---|---|---|---|---|---|---|---|---|
| FR-002 (v0.8 wording) | Mandatory baseline / DRAFT | D-042/D-044/D-070; proposed D-094 | G-1/G-2; S-3 | Q-005/Q-021; R-5; ACCT-L08 | UJ-001/UJ-006; BR-001/002/010 | AC-001/005/014/018 | VAL-002/003/005; later Gate 5 integrity/parity tests | None for new wording |
| FR-003 (v0.8 wording) | Mandatory baseline / DRAFT | D-046/D-061; proposed D-094 | G-1 | Q-002/Q-003 status remains governed by D-046 until D-094 effective; ACCT-L01/L02 | UJ-001/UJ-006; BR-002/006/010 | AC-001/016/018 | VAL-002; Checkpoint 11 review; later Gate 5 | EVD-001/EVD-002/EVD-004 support earlier guest direction only; none validates new version |
| FR-007 (v0.8 wording) | Mandatory baseline / DRAFT | D-045/D-049/D-061; proposed D-094 | G-1/G-2 | Q-015/Q-020/Q-021; R-5/R-6; ACCT-L02–L06 | UJ-003/UJ-007; BR-005/008/011 | AC-009/015/017/019 | VAL-002/003/004; Gate 3 review; later Gate 5 | None for new wording |
| FR-019 (new) | Proposed Mandatory baseline / DRAFT | Product Owner scope direction; proposed D-094 | G-1/G-3/G-6; S-4/S-6/S-7 | Q-002/Q-003 pending D-094; Q-009/Q-015/Q-018; R-2/R-6; ACCT-L01–L08 | UJ-006/UJ-007; BR-010/011 | AC-014–AC-019 | Product Owner review; Gate 2 design; Gate 3 qualified privacy/security review; later Gate 5; genuine product-fit review before release | None yet |
| NFR-003 (v0.8 wording) | Mandatory baseline / DRAFT | D-021/D-029/D-045/D-050/D-057; proposed D-094 | G-3; S-4 | Q-009/Q-015/Q-018; R-2/R-6; ACCT-L02–L04/L07 | BR-003/004/010/011; UJ-001/003/006/007 | AC-003/007/014–019 | VAL-004; Gate 3 threat/privacy review; later authorization and failure tests | None for new wording |
| UJ-001 (v0.8 wording) | DRAFT | D-046/D-061/D-066/D-070/D-090; proposed D-094 | G-1/G-6 | Q-019/Q-021; ACCT-L01/L02/L08 | BR-001/002/005/006/010; FR-001–003/010/018/019 | AC-001/002/005/013/014/016/018 | VAL-002; Checkpoint 11 design review; later Gate 5 | Earlier EVD references only; no v0.8 validation |
| UJ-003 (v0.8 wording) | DRAFT | D-045/D-049/D-061/D-079; proposed D-094 | G-1/G-2 | Q-015/Q-020; ACCT-L02–L06 | BR-003/005/008/011; FR-007/010/019 | AC-009/015/017/019 | VAL-002/003/004; Gate 3 and later tests | None for new wording |
| UJ-006 (new) | DRAFT | Product Owner scope direction; proposed D-094 | G-1/G-3/G-6 | Q-002/Q-003 pending D-094; ACCT-L01/L02/L03/L05/L07/L08 | FR-002/003/019; BR-010/011 | AC-014/016/018/019 | Product Owner review; Checkpoint 11; Gate 3; Gate 5 | None yet |
| UJ-007 (new) | DRAFT | Product Owner scope direction; proposed D-094 | G-1/G-3/G-6 | Q-015/Q-020; ACCT-L02–L08 | FR-007/008/010/019; BR-011 | AC-015/017/019 | Product Owner review; Gate 3; Gate 5 | None yet |
| BR-010/BR-011 (new) | DRAFT | D-043/D-044/D-045/D-048/D-050/D-059/D-070; proposed D-094 | G-2/G-3; S-3/S-4 | Q-015/Q-021; R-2/R-5/R-6; ACCT-L03–L07 | FR-002/003/007/019; UJ-001/003/006/007 | AC-014/015/017 | Gate 2 integrity/access design; Gate 3 review; Gate 5 tests | None yet |
| AC-014–AC-019 (new) | DRAFT criteria | D-044/D-059/D-068/D-070/D-094 proposal | S-3/S-4/S-6/S-7 | Q-002/Q-003/Q-015/Q-018/Q-021; ACCT-L01–L08 | UJ-001/003/006/007; BR-010/011 | See proposed specification v0.8 §5 | Gate 2 design review; Gate 3 security/privacy; Gate 5 success/rejection/authorization/failure tests; WCAG 2.2 AA review | None yet |

## 3. Approved change-impact links

- **Account scope:** FR-019/UJ-006/UJ-007/BR-010/BR-011/AC-014–AC-019 link the Product
  Owner direction to guest parity, authorized account appointments and no automatic
  association from matching personal information alone.
- **Account-free guest route:** FR-003/UJ-001/AC-016 preserve account-free booking as a
  mandatory path under the same effective policies.
- **Shared integrity:** FR-002/003/019, NFR-006, BR-001/002/010 and AC-005/014/018 share the
  final-capacity/duplicate/eligibility obligations; D-070's exact contention requirement
  remains unchanged.
- **Security/privacy:** NFR-003/009, FR-007/008/019, BR-011 and AC-015/017/019 link to
  Q-015, R-2/R-6 and Gate 3. No credential, proof, recovery, ownership, retention or
  association mechanism is selected by this traceability baseline.
- **Accessibility and release verification:** NFR-007/010, AC-006/008/016/018/019 and
  D-068/D-069 apply to public and account flows. D-052/D-069 remain targets, not results.
- **Current effective status:** D-094/D-095 and exact v0.8/revision 1.2 approval are recorded
  in Decision Register revision 1.19; D-046 and D-081 remain preserved as historical
  decisions/baselines. Q-002/Q-003 dispositions are updated in the Decision Register.

## 4. Open policy labels and resolution checkpoints

`ACCT-L01`–`ACCT-L08` are defined in the proposed Requirements Specification v0.8 §6 and
are draft-local labels, not Decision Register question identifiers. Their stated policy
directions are proposed; only the explicitly named implementation/policy details remain open with
their recorded Gate 2, Gate 3, Gate 5 or pre-release resolution checkpoints. Existing
Q-009/Q-015/Q-018/Q-020/Q-021 and D-079 obligations remain unchanged.

## 5. Approval/evidence status

| Record set | Approved disposition | Effective approved version | Evidence / approval |
|---|---|---|---|
| FR-002/003/007/008/010/013, NFR-003/009/010, UJ-001/003, BR-002/005/006, AC-009 (changed wording) | APPROVED development-stage assumption, v0.8 | D-094/D-095; exact v0.8 approval | No validation evidence; approval date not supplied |
| FR-019–022, UJ-006/007, BR-010–013, AC-014–026 | APPROVED development-stage assumption in approved v0.8 | D-094/D-095; exact v0.8 approval | No validation evidence; approval date not supplied |
| NFR-007 and AC-001/002/005/006/008/010/013 (impact links only) | Unchanged text | D-081 v0.7 | Effective text and approval preserved; no new validation claimed |
| Unchanged records | Inherited by reference | D-081 v0.7 / Traceability v1.0 | Existing limitations/evidence status preserved |

No requirement is marked `VALIDATED`; no evidence is created; the historical Gate 1 approval
under D-082 is preserved. Requirements Governance §§6/8 do not require automatic reopening
for every material amendment; this is the targeted/versioned route. This approved supplement
is effective for development-stage design only.

## 6. Expanded approved delta trace and remaining gate dependencies

These rows refine the broad rows above. No existing EVD item validates the new policy wording;
the current approval/effective disposition is in §§5 and 8.

| Requirement / rule / criterion | Proposed decision and open policy | Gate 2 design and Checkpoint 11 | Gate 3 review / Gate 5 test obligation |
|---|---|---|---|
| FR-019; BR-012; AC-020 | D-094; ACCT-L01 toggle authority and in-progress signup | Account entry, enabled/disabled and existing-account states; client configuration authority | Account authorization and toggle transition tests |
| FR-020; FR-010; AC-024 | D-095 successor to D-057/D-049; ACCT-L02/L08 recipient, proof, delivery failure | Identity/email contracts; verification, recovery, scoped guest access and transaction-email states | Enumeration/privacy and delivery-failure threat review; no duplicate command on email failure |
| FR-021; BR-011; AC-015/017/021 | D-094; ACCT-L03 original-booker proof, reversal/dispute | Individual account-link contract, denied/contested states and actor/attendee distinction | Cross-appointment and proxy authorization tests; audit/reversal review |
| FR-013/022; BR-002/006; AC-010/022/023 | D-094; Q-021 and ACCT-L04/L05 service proxy, duplicate identity and field catalog | Data model separates actor/booker/attendee; service configuration and forms | Privacy review of identifiers/fields; legitimate proxy and prohibited-duplicate concurrency tests |
| FR-007/019; BR-005/012/013; AC-009/025/026 | D-094 and D-089; Q-020 deadline/state values, ACCT-L06 retention | Workflow/API/data model for upcoming/past, contested/deactivated and atomic change/unknown outcome | Authorized-state, deadline, atomic rollback/unknown-outcome and preserved-appointment tests |
| FR-008; NFR-003/009/010; AC-019–026 | D-050/D-068/D-079; ACCT-L06/L07 and Q-015 | Audit, access, retention and Checkpoint 11 failure-state coverage | Qualified privacy/legal retention review before Gate 3 approval; Gate 5 core-workflow evidence |

**Resolved Phase 1 approval dependency:** exact D-094/D-095 wording and exact v0.8/rev 1.2
approval are recorded in Decision Register revision 1.19. Remaining Gate 2/3 dependencies:
Q-020 cutoff and Q-016/Q-022 measurable targets before final Gate 2 approval; approved
original-booker/proxy/dispute/duplicate/field policy sufficient for final affected design;
Q-015 retention/deletion and exceptional operator/break-glass dispositions before Gate 3
review approval under D-079. Checkpoint 11 remains authorized, NOT STARTED, not accepted or
completed. No test result or final architecture approval is claimed.

## 7. Individual delta trace

Each changed or new FR/NFR/BR/AC has one row below. Changed and new records are approved
development-stage assumptions under the exact v0.8 approval, with no validation evidence.
Changed records retain their prior text and approval in v0.7 history; new identifiers become
effective in v0.8. The validation column names planned work only. Unchanged v0.7 rows remain
incorporated from effective revision 1.0.

| Record | Provenance / decision | Goal / target | Question / risk | Journey / rule | Criterion / linked requirement | Planned validation | Evidence |
|---|---|---|---|---|---|---|---|
| FR-002 | D-044/D-070; proposed D-094 | G-1/G-2; S-3 | Q-021/R-5 | UJ-001/006; BR-002/010 | AC-001/005/014/018 | VAL-002/003; Gate 5 parity/contention | None |
| FR-003 | D-046/D-061; proposed D-094 | G-1; S-7 | Q-002/003 | UJ-001/006; BR-010 | AC-001/016/018 | VAL-002; Checkpoint 11; Gate 5 guest path | None; earlier EVD supports guest direction only |
| FR-007 | D-045/D-049; proposed D-094 | G-1/G-2; S-4 | Q-020/R-6; ACCT-L03/04 | UJ-003/007; BR-005/013 | AC-009/015/025/026 | Gate 3/5 authority and atomicity | None |
| FR-008 | D-045/D-050; proposed D-094/095 | G-3; S-4 | Q-015/R-2; ACCT-L06 | UJ-003/007; BR-011 | AC-021/024/025 | Gate 3 audit/privacy; Gate 5 attribution | None |
| FR-010 | D-049/D-065; proposed D-095 | G-1/G-3; S-7 | Q-015/R-6; ACCT-L08 | UJ-001/003; BR-013 | AC-002/009/018/024 | Checkpoint 11; Gate 5 confirmation/email failure | None |
| FR-013 | D-046/D-064; proposed D-094 | G-1/G-2; S-3 | Q-021/R-5; ACCT-L04 | UJ-005; BR-002/006 | AC-010/022 | Gate 5 proxy/walk-in denials | None |
| FR-019 | proposed D-094 | G-1/G-3; S-4/S-6 | Q-002/003/015; ACCT-L01/06 | UJ-006/007; BR-012 | AC-014–020/025 | Checkpoint 11; Gate 3/5 account controls | None |
| FR-020 | proposed D-095; D-057/D-049 | G-3; S-4/S-6 | Q-015/R-6; ACCT-L02/08 | UJ-001/003/007; BR-011 | AC-019/024 | Gate 3 token/email; Gate 5 recipient tests | None |
| FR-021 | proposed D-094; D-045/D-050 | G-3; S-4 | Q-015/R-2; ACCT-L03/04 | UJ-007; BR-011 | AC-015/017/021/025 | Gate 3 linking; Gate 5 reversal/cross-appointment denial | None |
| FR-022 | proposed D-094; D-050/D-064 | G-1/G-3; S-4 | Q-015/021; ACCT-L05 | UJ-001/005/006; BR-002/006 | AC-010/022/023 | Gate 3 fields; Gate 5 profile isolation | None |
| NFR-003 | D-045/D-050; proposed D-094/095 | G-3; S-4 | Q-009/015/R-2 | UJ-003/007; BR-011 | AC-015/017/021/024 | Gate 3 threat review; Gate 5 denial | None |
| NFR-009 | D-050/D-079; proposed D-094/095 | G-3; S-4 | Q-015/R-2; ACCT-L06/08 | UJ-006/007; BR-006/012 | AC-015/023/024/025 | Gate 3 retention/deletion and roster/audit protection | None |
| NFR-010 | D-052/D-068; proposed D-094/095 | G-3; S-6 | Q-015/R-6; ACCT-L07 | UJ-001/003/006/007; BR-010–013 | AC-008/019–026 | Gate 5 automated required tests; release gate | None |
| BR-002 | D-044/D-059; proposed D-094 | G-2; S-3 | Q-021/R-5 | UJ-001/005/006; FR-002/013 | AC-001/005/014/022 | Gate 5 duplicate/proxy concurrency | None |
| BR-005 | D-043/D-049/D-079/D-089; proposed D-094 | G-1/G-2; S-3 | Q-020/R-5 | UJ-003/007; FR-007 | AC-009/025/026 | Product Owner cutoff; Gate 5 deadline tests | None |
| BR-006 | D-046/D-064; proposed D-094 | G-1/G-3; S-4 | Q-015/021; ACCT-L04 | UJ-005/007; FR-013/022 | AC-010/015/022 | Gate 3 proxy visibility; Gate 5 guardian/denial | None |
| BR-010 | D-044/D-070; proposed D-094 | G-2; S-3 | Q-021/R-5 | UJ-001/006; FR-002/003 | AC-014/018 | Gate 5 parity/contention | None |
| BR-011 | D-045/D-050; proposed D-094 | G-3; S-4 | Q-015/R-2; ACCT-L03/04 | UJ-007; FR-021 | AC-015/017/021/025 | Gate 3 reversal; Gate 5 cross-appointment denial | None |
| BR-012 | proposed D-094 | G-1/G-3; S-4 | Q-002/003/015; ACCT-L01/06 | UJ-006/007; FR-019 | AC-020/025 | Gate 5 toggle/deactivation | None |
| BR-013 | D-070/D-090; proposed D-094/095 | G-2; S-3 | Q-020/R-5 | UJ-003/007; FR-007 | AC-009/026 | Gate 5 rollback/unknown-outcome | None |
| AC-009 | D-049/D-089; proposed D-094 | G-1/G-2; S-3 | Q-020/R-5 | UJ-003; BR-005/013 | FR-007; NFR-006 | Gate 5 atomic change/no-penalty tests | None |
| AC-014 | D-044/D-070; proposed D-094 | G-2; S-3 | Q-021/R-5 | UJ-001/006; BR-010 | FR-002/003/019 | Gate 5 parity/contention | None |
| AC-015 | D-045/D-050; proposed D-094 | G-3; S-4 | Q-015/R-2; ACCT-L03/04 | UJ-007; BR-006/011 | FR-007/019/021 | Gate 3 visibility; Gate 5 proxy/cross-appointment denial | None |
| AC-016 | D-046/D-061; proposed D-094 | G-1; S-7 | Q-002/003 | UJ-001/006; BR-012 | FR-003/019 | Checkpoint 11; Gate 5 guest path | None |
| AC-017 | D-045/D-050; proposed D-094 | G-3; S-4 | Q-015/R-2 | UJ-007; BR-011 | FR-021; NFR-003 | Gate 5 no auto-link/denial | None |
| AC-018 | D-066/D-070/D-090; proposed D-094 | G-1/G-2; S-3 | Q-021/R-5 | UJ-001/006; BR-010/013 | FR-002/010/019 | Checkpoint 11; Gate 5 unknown outcome | None |
| AC-019 | D-068; proposed D-094/095 | G-3/G-6; S-6/S-7 | Q-015/018; ACCT-L07 | UJ-007; BR-012 | FR-019/020; NFR-010 | Gate 3; Gate 5 core inventory/denial | None |
| AC-020 | proposed D-094 | G-1/G-3; S-4 | Q-002/003; ACCT-L01 | UJ-006/007; BR-012 | FR-019 | Gate 5 signup toggle | None |
| AC-021 | D-045/D-050; proposed D-094 | G-3; S-4 | Q-015/R-2; ACCT-L03/04 | UJ-007; BR-011 | FR-021; NFR-003 | Gate 3 case authority; Gate 5 link/reversal/denial | None |
| AC-022 | D-044/D-064; proposed D-094 | G-2/G-3; S-3/S-4 | Q-021; ACCT-L04 | UJ-005/006; BR-002/006 | FR-013/022 | Gate 5 proxy/duplicate denial and concurrency | None |
| AC-023 | D-050; proposed D-094 | G-3; S-4 | Q-015; ACCT-L05 | UJ-001/006; BR-006 | FR-022; NFR-009 | Gate 3 privacy; Gate 5 profile isolation | None |
| AC-024 | D-049/D-057; proposed D-095 | G-3; S-4/S-6 | Q-015/R-6; ACCT-L02/08 | UJ-001/003/007; BR-013 | FR-010/020 | Gate 3 recipient/token; Gate 5 delivery failure | None |
| AC-025 | D-050/D-079; proposed D-094 | G-3; S-4 | Q-015/R-2; ACCT-L03/04/06 | UJ-007; BR-005/006/012 | FR-007/019/021 | Gate 3 dispute/retention; Gate 5 hold/release/deactivation | None |
| AC-026 | D-070/D-090; proposed D-094 | G-2; S-3 | Q-020/R-5 | UJ-003/007; BR-013 | FR-007; NFR-006 | Gate 5 atomic/unknown-outcome | None |

## 8. Exact-version approval disposition

The Product Owner explicitly approved this exact Traceability revision 1.2 together with
Requirements Specification v0.8 and decisions D-094/D-095. Decision Register revision 1.19
records the approval; its approval date was not supplied. Changed and new records are effective
as development-stage assumptions only, with no `VALIDATED` status or new evidence. D-081/v0.7
and Traceability revision 1.0 remain preserved historical baselines. Gate 1 history, Gate 2
status, and Checkpoint 11 status are unchanged.
