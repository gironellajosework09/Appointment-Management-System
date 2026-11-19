# iTakda Development Roadmap — Intended Batch Sequence

| Field | Value |
|---|---|
| Status | **PROPOSED PLANNING BASELINE — recorded 2026-11-19. Not an implementation authorization and not an approval of any batch.** |
| Provenance | Intended numbered sequence supplied in the Product Owner instruction "Roadmap Alignment and Batch 04 Planning Correction", dated 2026-11-19, established through Product Owner planning discussions. Recorded by engineering as a planning record; the instruction also directs that it must not be presented as previously approved. |
| Authority | [Engineering Governance v2.0](../ENGINEERING_GOVERNANCE.md) (D-123), effective [Requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) with preserved v0.8/v0.7, and the [SDD Registry](../specs/SDD_REGISTRY.md). |
| Detailed scope | Established per batch in its own batch plan, not in this table. |
| Related records | [Batch 03 acceptance](../evidence/BATCH-03-ACCEPTANCE.md), [Batch 04 plan](BATCH-04-PLAN.md), [Batch 05 plan](BATCH-05-PLAN.md), [Implementation Planning](IMPLEMENTATION_PLAN.md). |

## 1. Purpose and how to read this

This document records the intended delivery order only. It answers "which slice comes next and why" so future agents can find the sequence by normal repository inspection.

- Batch numbers are delivery slices, not a one-to-one mapping to SDDs. One SDD may span batches; one batch may use several SDDs.
- The SDD Registry's W1–W6 waves and H dependency table are architectural guidance, not this numbered sequence. Where they disagree, the dependency analysis wins and the difference is recorded in §4.
- This roadmap approves nothing. A batch is only "authorized" when the Product Owner explicitly authorizes its bounded scope, environment, safeguards and boundaries under Governance v2.0 §5.
- Detailed scope, acceptance criteria and decision gates live in each batch plan.

## 2. Status vocabulary

| Status | Meaning |
|---|---|
| Accepted | Implemented within an authorized scope, verified and accepted by the Product Owner. |
| Accepted with limitations | Accepted for a bounded purpose only; listed findings and deferred checks remain enforceable. |
| Planning | A batch plan exists; implementation is **not authorized**. |
| Provisional | Direction recorded, scope not allocated (no SDD or batch plan yet). |
| Proposed | Placeholder in the intended sequence; no batch plan or authorization exists. |

## 3. Intended sequence and current status

| Batch | Intended scope | Verified related SDDs | Status | Notes |
|---|---|---|---|---|
| 01 | Laravel Application Foundation | SDD-001 | Accepted | Recorded in `TASKS.md` / `MEMORY.md`. |
| 02 | Public UI Foundation | SDD-023, SDD-001 | Accepted | Acceptance recorded 2026-11-18 in SDD-023. |
| 03 | Internal Access & First Service Creation | SDD-002, SDD-003 (partial), SDD-004 (identity slice) | Accepted with limitations | [BATCH-03-ACCEPTANCE.md](../evidence/BATCH-03-ACCEPTANCE.md); synthetic-local only. |
| 04 | **Service Catalog Management** | SDD-004 (remainder), SDD-003, SDD-023, SDD-002 | Planning | [BATCH-04-PLAN.md](BATCH-04-PLAN.md) — proposed, not authorized. |
| 04A | Configurable Branding — provisional | None allocated | Provisional | D-109 approves a direction only; the Registry keeps branding out of MVP implementation scope and does not allocate an SDD ID. |
| 05 | Scheduling & Availability | SDD-005 | Planning | [BATCH-05-PLAN.md](BATCH-05-PLAN.md) — proposed, not authorized; may be subdivided. |
| 06 | First Guest Booking | SDD-009, SDD-006, SDD-007, SDD-008, SDD-023 | Proposed | Depends on 04 and 05; see conflict C1. |
| 07 | Guest Access & Recovery | SDD-008, SDD-007 | Proposed | See conflict C1. |
| 08 | Safe Configuration Changes | SDD-022 | Proposed | Depends on SDD-004/005/006. |
| 09 | Staff Appointment Management | SDD-014, SDD-019 (partial) | Proposed | SDD-014 has an unresolved SDD-013 prerequisite; see C2. |
| 10 | Cancellation & Rescheduling | SDD-016, SDD-017 | Proposed | Both have unresolved SDD-013 prerequisites; see C2. |
| 11 | Assisted / Walk-in Booking | SDD-015 | Proposed | |
| 11A | QR / Manual Lookup & Attendance | SDD-019 | Proposed | |
| 12 | Optional Customer Accounts | SDD-010 | Proposed | |
| 13 | Customer Dashboard | SDD-011 | Proposed | Has an unresolved SDD-013 prerequisite; see C2. |
| 14 | Profile Management & Prefill | SDD-012 | Proposed | |
| 15 | Supervisor Exceptions | SDD-018 | Proposed | |
| 15A | Printable Daily Roster | SDD-020 | Proposed | |
| 16 | Contested-Action Review | SDD-013 | Proposed | Placed after several SDDs that depend on it; see C2. |
| 16A | Outage Reconciliation | SDD-021 | Proposed | |
| 17 | Recovery & Operations | SDD-024, SDD-025, SDD-026, SDD-003 | Proposed | Privacy obligations are continuous, not deferrable to this batch; see C3. |
| 18 | Integrated Release Readiness | SDD-027 | Proposed | Release/deployment approval remains separate. |

## 4. Dependencies and conflicts with the SDD Registry

Verified from [SDD Registry §6](../specs/SDD_REGISTRY.md). These are planning observations, not new decisions.

| ID | Observation | Practical effect |
|---|---|---|
| C1 | SDD-009 (Batch 06) lists SDD-008 as an H prerequisite, but the intended sequence places SDD-008 in Batch 07 (Guest Access & Recovery). SDD-009 also needs SDD-006 and SDD-007. | Either Batch 06 includes the SDD-008 guest-access slice, or Batches 06 and 07 are reordered or merged. Confirm before planning Batch 06. |
| C2 | SDD-013 (Batch 16) is an H prerequisite of SDD-011 (Batch 13), SDD-014 (Batch 09) and SDD-016/017 (Batch 10). | Batches 09, 10 and 13 may need to consume the SDD-013 hold/review contract earlier than Batch 16 plans it. Confirm dependency interpretation or adjust the order. |
| C3 | SDD-024 (privacy review) and SDD-025/SDD-026 (recovery, operations) are W2 registry items, but the intended sequence places "Recovery & Operations" at Batch 17. Batch 06 begins collecting guest personal data. | Privacy review and minimum recovery readiness cannot wait for Batch 17. Both are continuous obligations; Batch 17 completes operational evidence, it does not start the obligation. |
| C4 | SDD-007 (six-purpose email boundary) has no dedicated batch in the intended sequence. | It is folded into consuming features (06, 07, 10, 12). Its MAIL-Q01–Q04 questions must be resolved before those integrations. |
| C5 | SDD-023 (accessible presentation) and SDD-003 (evidence) span every batch. | They are cross-cutting obligations, not separate delivery slices. |
| C6 | Batch 04A branding has no allocated SDD and the Registry keeps it outside MVP implementation scope. | Treat 04A as a scope-review item only; do not create branding fields or a brand editor under this roadmap. |

## 5. Known unresolved decisions affecting upcoming batches

| Batch | Decisions still open | Source |
|---|---|---|
| 04 | SVC-Q01 (minimum service field catalog and service-specific additions), SVC-Q02 (configuration permissions/actions), SVC-Q03 (service lifecycle and accepted-booking effects), SVC-Q04 (validation/visibility/retention for service-specific fields) | SDD-004 |
| 05 | SCH-Q01–SCH-Q08 (operating periods and dated exceptions, duration units/buffers, resource categories, capacity, duplicate criteria, time-zone/cutoff values, accepted-appointment impacts, alternatives search) | SDD-005 |
| 06–07 | GUEST-Q01–Q05 (guest proof and assisted recovery), MAIL-Q01–Q04 (email mechanisms and guarantees) | SDD-008, SDD-007 |
| 17 | BKP-Q01–Q05, OPS-Q01–Q06, PH-01–PH-10 qualified privacy review | SDD-025, SDD-026, SDD-024 |

Later batches carry their own specification-local questions; consult the relevant SDD rather than duplicating them here.

## 6. Current position

- Batch 03 is closed for its synthetic-local development purpose only. Its findings and deferred checks remain enforceable and are carried forward in [BATCH-04-PLAN.md](BATCH-04-PLAN.md) §9.
- Batch 04 is at planning stage. No implementation, schema, database, dependency, deployment, merge, push or commit is authorized.
- Batch 05 is preserved as a proposal only.

## 7. Boundaries

This roadmap does not approve requirements, specifications, policies, mechanisms, dependencies or release. It records sequence and status so that later batch planning starts from a consistent baseline. Where it conflicts with an approved requirements record, decision, or the SDD Registry dependency model, those records control and this table must be corrected.
