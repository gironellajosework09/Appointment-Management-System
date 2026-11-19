# Batch 05 — Scheduling & Availability

| Field | Value |
|---|---|
| Status | **PROPOSED — NOT AUTHORIZED** |
| Provenance | Preserved from the previous `docs/plans/BATCH-04-PLAN.md` (2026-11-19) after the Product Owner corrected Batch 04 to Service Catalog Management. The scheduling analysis is retained in substance; identifiers were renumbered from B04-* to B05-* to avoid collision with the corrected Batch 04 plan. |
| Routing | Batch 05 in [DEVELOPMENT_ROADMAP.md](DEVELOPMENT_ROADMAP.md). |
| Risk class | High (database schema and scheduling invariants) — requires explicit Product Owner authorization under Engineering Governance v2.0 §5.3 |
| Implementation | **Not started and not authorized** |
| Possible subdivision | This batch may need splitting — for example configuration persistence vs availability derivation/calendar queries — depending on SDD-005 and the SDD-006 dependency. No split is decided here. |

## 1. Proposed scope

Bounded scheduling **configuration only**, under SDD-005.

In scope:

- Persist installation-scoped recurring operating periods and dated exceptions.
- Persist one customer appointment duration per service plus separate preparation and cleanup buffers.
- Persist an explicitly configured installation business time zone.
- Provide an authorized internal configuration interface with attributable evidence.
- Reject ambiguous or conflicting date/period configuration without silently changing accepted appointments.
- Respect installation isolation and current authorization gates.

Explicitly out of scope:

- Availability derivation, calendar queries or slot presentation (SDD-005-C03/C04/C07/C08).
- Duplicate-policy evaluation and final booking integrity (SDD-005-C05/C06/C12; SDD-006).
- Resource allocation and exclusive/shared resource enforcement.
- Booking, cancellation, rescheduling and accepted-appointment impact handling (SDD-022).
- Public or customer-facing access; email; deployment; release.

## 2. Decisions required before implementation

| Decision | Owner | Blocks |
|---|---|---|
| SVC-Q01/Q04 — minimum service fields needed by scheduling | Product Owner | Schema and configuration form |
| SCH-Q01 — eligible-date rules, exception editing constraints and additional date categories | Product Owner | Operating-period persistence |
| SCH-Q02 — duration and buffer units, values and placement semantics | Product Owner | Duration/buffer persistence |
| SCH-Q06 — client-specific time-zone and cutoff values; time-zone change and DST behavior | Product Owner | Time-zone configuration |
| SCH-Q03/Q04 — resource categories and capacity values | Product Owner | Deferred with resource scope |
| SCH-Q05 — duplicate criteria and windows | Product Owner | Deferred with duplicate scope |

SCH-Q07 (accepted-appointment impacts) and SCH-Q08 (bounded alternatives) remain open in SDD-005 but were outside this proposal's configuration-only scope.

If a required decision remains unresolved, the affected field is not implemented. Do not invent policy values.

## 3. Dependencies

- SDD-002 internal identity and permission enforcement (Batch 03 — accepted with limitations).
- SDD-003 attributable evidence (Batch 03 covers `service.created` only; scheduling mutations need their own evidence events).
- SDD-004 service identity and minimum data (partially delivered; Batch 04 addresses the catalog remainder).
- SDD-023 accessible presentation patterns for the configuration interface.
- SDD-006 shared booking integrity for later evaluation work, not this configuration slice.
- Batch 03 limitations must remain visible: CSS delivery unresolved; accessibility checks deferred to 2026-12-19.

## 4. Proposed acceptance criteria

| ID | Criterion |
|---|---|
| B05-AC-01 | An authorized internal user can create, read and update installation-scoped operating periods and dated exceptions; an unauthorized user is denied server-side with no state change. |
| B05-AC-02 | Ambiguous or conflicting date/period configuration is rejected and never presented as valid; no accepted appointment is silently changed. |
| B05-AC-03 | Each service stores one customer duration and separate preparation/cleanup buffers using Product Owner-approved units and semantics. |
| B05-AC-04 | The installation business time zone is explicitly configured; no country, region or server time zone is hard-coded. |
| B05-AC-05 | Every scheduling mutation records attributable evidence (actor, installation, action, subject, time, outcome), or fails atomically. |
| B05-AC-06 | Cross-installation reads and writes are prevented, including missing-context failure before database access. |
| B05-AC-07 | The configuration interface follows SDD-023 accessible patterns; deferred human accessibility checks are recorded as deferred, not passed. |
| B05-AC-08 | Automated unit/feature tests cover authorization, validation, installation scope, atomic evidence and failure paths; results are recorded with counts and limitations. |
| B05-AC-09 | The synthetic-local guard continues to fail closed for any non-synthetic or non-local target. |

## 5. Verification plan

1. Unit tests for authorization, validation, installation scope, time-zone rules and conflict rejection.
2. Feature tests against the isolated synthetic database, opt-in only.
3. Failure-path checks for missing installation context, unauthorized actor and evidence-insert failure.
4. Rendered accessibility checks for the configuration interface; automated checks alone are insufficient.
5. Report actual results, failures and limitations; do not claim deferred checks as passed.

## 6. Carried-forward Batch 03 obligations

- Accessible MFA alternative and rendered accessibility verification — due 2026-12-19, earlier triggers control.
- CSS delivery finding — unresolved.
- Expired-TOTP endpoint verification — partial.
- `Batch03ServiceDatabaseTest` non-portable hardcoded configuration — unresolved.
- Qualified human specialist review and independent privacy/security assessment before production or operational reliance.

Batch 05 must not absorb these obligations in a way that hides them. They remain separately tracked in [BATCH-03-ACCEPTANCE.md](../evidence/BATCH-03-ACCEPTANCE.md).

## 7. Kickoff instructions

Do not begin implementation until the Product Owner authorizes this exact scope, environment, safeguards and boundaries under §5.3.

On authorization:

1. Confirm the listed decisions or mark affected fields out of scope.
2. Create a bounded feature branch from the then-current branch.
3. Inspect current callers, migrations and shared providers before editing.
4. Implement schema, domain rules, authorization, evidence and the configuration UI within the confirmed scope.
5. Run the verification plan; record actual results and limitations.
6. Present the batch for acceptance under §4.4; do not self-accept consequential policy choices.

## 8. Boundaries

No implementation, schema, database, dependency, deployment, merge, push, commit or CEAP access is authorized by this plan. It preserves a proposal only.
