# SDD-021 — Reviewed Batch Paper/Outage Reconciliation

> **Status: APPROVED — SDD-021 v0.2**, individually within its documented scope. The Product Owner's explicit decision in the ChatGPT Gate 2 continuation conversation is the approval source; approval date not independently supplied, recorded 2026-11-13. v0.1 was returned for authoritative-outcome clarification. This specification selects no batch atomicity, offline synchronization, conflict algorithm, schema or implementation; no live records or operation are authorized.

| Field | Record |
|---|---|
| Owner / provenance | Product Owner/service-policy owner, actual client operators and engineering/data-integrity/privacy reviewers to be assigned. Prepared 2026-11-13 under the bounded documentation package, not an approval date. |
| Risk | High: stale paper, appointment mutation, capacity and personal data. Exact spec approval, specialist review and separate implementation authority required. |

## Purpose and scope

After paper fallback, enable an authorized actor to review multiple paper-recorded attendance and walk-in proposals against current authoritative state, with clear per-item outcomes and attributable review. **In scope:** batch intake as proposals, per-item accepted/conflicted/unresolved outcomes, authorization, current-state checks and evidence. **Out of scope:** offline creation/synchronization of bookings, automatic overwrite, batch atomicity selection, a new exception catalog, paper-retention value and implementation mechanism.

## References

Effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) with v0.8/v0.7: FR-017; NFR-003/006/009/011; BR-009; UJ-005; AC-005/012. [Registry](SDD_REGISTRY.md) dependencies SDD-006/015/018/019/020; SDD-002/003/023/024 are relevant permission, evidence, accessibility and privacy contracts. D-051/063/074/085/098/102/103/105/107/108/109/110 apply in the [Decision Register](../decisions/DECISION_REGISTER.md). Related drafts and their historical approvals remain separate.

## Expected behavior

Paper is an as-of working record, not authoritative current state. An appropriately authenticated and scoped actor proposes each attendance or walk-in item; actor, source context and relevant review outcome are attributable without unnecessary personal data. Evaluate each item against current authority, appointment status and applicable policy, not paper alone. Attendance actions follow SDD-019; walk-in creation follows SDD-015 and SDD-006 final booking/capacity, resources and duplicate checks. Only an expressly permitted, specifically authorized exception under SDD-018 may relax its reviewed control. An item may be accepted, conflicted or unresolved according to a later approved policy; rejection and unknown command outcomes must remain distinguishable and must not become a false success. No newer state is silently overwritten, and no failed booking leaves partial effects. Batch-wide atomicity, duplicate intake and conflict-resolution choices remain open. Reconcile unknown outcomes against the owning authoritative command before unsafe retry; show per-item results without implying every item succeeded. SDD-003 evidence and SDD-024 privacy/custody rules apply to the actual approved design. No new email purpose follows; D-095 messages depend on authoritative outcomes.

## Acceptance criteria

Proposed local criteria; not executed:

- **SDD-021-C01:** Given authorized paper fallback items, when submitted for review, then each is treated as a proposal and checked against current state and scope.
- **SDD-021-C02:** Given unassigned or revoked authority, when intake or reconciliation is attempted, then the action is denied without mutation or unnecessary disclosure.
- **SDD-021-C03:** Given newer conflicting state, when an item is reviewed, then it is not silently overwritten and the conflict is made visible for authorized disposition.
- **SDD-021-C04:** Given a walk-in proposal, when final booking is attempted, then current SDD-006 integrity and applicable service policy apply; paper alone reserves no capacity.
- **SDD-021-C05:** Given an attendance proposal, when processed, then SDD-019's separate explicit permitted status action and current-state validation apply.
- **SDD-021-C06:** Given a claimed exception, when examined, then only separately authorized configured exception handling applies; unrelated checks remain.
- **SDD-021-C07:** Given mixed item outcomes, when presented, then accepted, conflicted and unresolved items are distinguishable; an item is reported accepted only after its authoritative effect is established. If a future design selects all-or-nothing batch atomicity, staged items are not represented as committed before the overall batch transaction is established. A batch success is not falsely implied.
- **SDD-021-C08:** Given rejection, failure or unknown outcome, when recovery is offered, then no partial booking or blind duplicate command is permitted and unknown is reconciled.
- **SDD-021-C09:** Given review and established outcome, when evidence is examined, then actor and relevant result are attributable and consistent without unnecessary data.
- **SDD-021-C10:** Given review, conflict and recovery states, when rendered, then applicable keyboard and assistive-technology guidance is supported.

## Considerations and open questions

| Question / owner / milestone | Unresolved matter |
|---|---|
| REC-Q01 — PO/service-policy and actual client operators, before implementation | Intake source, permitted items, review assignments, per-item disposition and operational escalation. |
| REC-Q02 — PO and data-integrity reviewers, before batch design | Batch atomicity, conflict and duplicate handling, current-state comparison and safe partial-result semantics. |
| REC-Q03 — engineering and SDD-006/015/018/019 owners, before integration | Outcome identity, unknown reconciliation, evidence consistency and concurrency; no locking or schema selected. |
| REC-Q04 — qualified privacy/accessibility reviewers and client operator, before processing/reliance | Minimum paper/digital evidence, custody, retention, restored restrictions, accessible conflict handling and incident process. |

## Plan and verification

Applicable SDD-006/015/018/019/020 approvals and interfaces, scoped permissions, qualified privacy/security/data-integrity review and separately authorized implementation are prerequisites. Future authorized checks cover mixed items, duplicate/replayed intake, stale attendance, capacity contention, unauthorized exception, per-item unknown outcomes, attributable evidence and accessibility. No batch, paper data, test or operational process has been executed. PO exact-version approval, implementation, acceptance and release remain separate.

