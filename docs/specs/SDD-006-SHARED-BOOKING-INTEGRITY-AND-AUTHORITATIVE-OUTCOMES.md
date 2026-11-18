# SDD-006 — Shared Booking Integrity and Authoritative Outcomes

> **CURRENT STATUS: APPROVED — SDD-006 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. This document defines the approved shared contract for final booking-affecting checks and outcomes. Implementation is not authorized or performed. The registry lists SDD-002/003/004/005 as capability prerequisites; their approved scopes and unresolved policies remain distinct and controlling. This draft selects no database, API, transaction, locking, idempotency or retry mechanism.

| Field | Value |
|---|---|
| Identifier / revision / date | SDD-006 / v0.1 / 2026-11-13 |
| Owner | Product Owner for policy; engineering for integrity design; applicable security, privacy and data-integrity reviewers before implementation/acceptance. Actual named evidence owners remain unassigned. |
| Provenance | Authorized documentation-only drafting under the current SDD task. |
| Approval | Pending separate Product Owner review of this exact scope and revision. |

## Purpose and scope

Define the shared final integrity boundary for operations that create, change, cancel or otherwise affect appointments and effective booking capacity. Availability is advisory. Before an operation is presented as successful, the authoritative outcome must reflect current authority, appointment state and approved effective policy, and must not leave partial or orphaned booking effects.

**In scope:** final checks across approved public guest, optional-account, staff-assisted, proxy and walk-in paths; combined capacity/resource and duplicate policy enforcement; eligible cancellation/rescheduling boundaries; explicit policy-specific exceptions; atomic outcome requirements; concurrent contention; and safe treatment of known rejection versus unknown outcome and same-intent reconciliation.

**Out of scope:** service-field catalog (SDD-004); scheduling-policy configuration and availability presentation (SDD-005); impact assessment for configuration changes affecting accepted appointments (SDD-022); identity/permission assignment (SDD-002); evidence storage/viewing (SDD-003); customer/guest proof mechanisms (SDD-008); command-specific journeys and user messaging (SDD-009/015/016/017); email delivery (SDD-007); physical schema, interfaces, infrastructure and technical mechanisms. Any separately authorized appointment-state effect arising from an SDD-022 review must use this shared final integrity boundary.

## References

- **Effective requirements:** Requirements Specification v0.9 read with preserved v0.8 and carried-forward v0.7. SDD-006's registered traceability mapping is FR-002/007/013; NFR-003/006/008/011; BR-001/002/010/013; UJ-001/003/005/006/007; AC-001/005/009/014/018/022/026; S-3/4/6. v0.9 changes NFR-003 wording and adds AC-027–029; internal identity/MFA assignment remains with SDD-002, while SDD-006 applies the approved authority check at its boundary.
- **Traceability:** approved revision 1.3, preserving revision 1.2 and carried-forward revision 1.0. The registry's SDD-006 mapping is planning traceability, not feature acceptance or verification evidence.
- **Approved decisions and registered references:** D-044, D-070, D-085, D-090, D-094, D-106, D-107 and D-108 appear in the registry's SDD-006 mapping. D-043, D-048, D-059, D-060, D-061, D-079, D-089, D-098, D-109 and D-110 also apply within their recorded scopes. D-090 is a provisional logical interface design, not a final API. D-094's register row remains labeled proposed while a later register statement treats Q-002/Q-003 and effective v0.8 as resolved; this draft relies on the effective v0.8 requirements for guest/account parity and adopts no additional D-094 proposal by citation alone. D-108 sets applicable access boundaries; no role assignment or authentication mechanism is selected. D-109 approves evaluation of measurable performance and availability targets, not numeric values. D-110 governs package execution only and changes no feature policy.
- **Related specifications:** SDD-002 internal identity and permission enforcement; SDD-003 attributable evidence; SDD-004 service and minimum booking data; SDD-005 availability/scheduling policy; SDD-007 limited email; SDD-008 guest authority; SDD-016 cancellation; SDD-017 rescheduling; SDD-018 authorized exceptions; SDD-022 accepted-appointment configuration impacts.
- **Governance:** Engineering Governance §§2, 5 and 17; Gate Register; Decision Register Q-019/020/021 and Q-016/022.

## Expected behavior

### Shared final checks

Every approved booking-affecting path uses the same effective installation/service policy and final integrity boundary. The boundary applies default-deny authorization by actor, service and action, with no self-elevation, and checks current appointment/command state, current service eligibility and effective cutoff, applicable service/time-period capacity, all applicable staff and physical-resource constraints, and the approved duplicate policy. A previously displayed or selected availability choice is not a reservation and cannot bypass these checks.

The final capacity decision enforces service/time-period capacity together with resource constraints. An exclusive resource is not allocated to overlapping appointments. A shared resource is constrained by its explicitly configured limit. Resource capacity does not substitute for service/time-period capacity, or vice versa.

Duplicate evaluation uses the approved attendee/eligibility criterion for the same service and its effective service-specific comparison window. A booker-only match is not a duplicate criterion. Guest, account, staff-assisted and proxy paths apply the same effective policy; legitimate proxy and multiple-attendee cases remain distinct.

### Cutoffs, exceptions and changes

Cancellation and rescheduling have separate eligibility rules. Their cutoff is relative to appointment start, interpreted in the explicitly configured installation business time zone, and the boundary is inclusive. Ambiguous local times are rejected. After the applicable cutoff, self-service cancellation/rescheduling is denied. A staff path is available only when separately authorized by effective policy and specific permission. MVP cancellation/no-show penalties are excluded under D-089; no penalty is created by this specification.

An exception may relax only the specifically permitted policy control. It requires the specific applicable permission, approved policy basis, explicit reason and attributable evidence; it does not create a blanket bypass of unrelated authority, eligibility, capacity, resource, duplicate or state checks. No exception category or permission matrix is invented here.

Operations that affect accepted appointments preserve the original appointment on known rejection. Configuration changes that may affect accepted appointments follow SDD-022 before taking effect. No operation silently cancels, invalidates, moves or rewrites an accepted appointment.

### Outcomes, atomicity and uncertainty

A successful operation has one established authoritative outcome and the applicable required evidence. A known rejection creates no partial or orphaned booking effects. Rescheduling releases the old allocation and establishes the new allocation as one logical operation; known rejection preserves the original appointment and allocation.

An unknown outcome is neither success nor rejection. It must not be presented as either or trigger a blind second command. Reconciliation establishes the authoritative result for the same intent before any safe follow-up; a genuinely new attempt is evaluated against current policy and state. Email delivery is outside the booking transaction and does not reverse or repeat it. Performance and availability targets require separate feasibility evaluation and Product Owner disposition; D-070 concurrency correctness is not a latency promise.

The system must preserve booking integrity under concurrent requests. **D-070 scenario:** for 50 valid simultaneous booking requests competing for one remaining capacity unit, exactly one successful reservation is established and the other 49 receive safe, clear unsuccessful outcomes; there is no over-capacity, prohibited duplicate, partial state or orphaned booking. This is a future verification obligation, not a test result or performance target.

## Acceptance criteria — proposed, not approved or executed

| ID | Given / when / then |
|---|---|
| SDD-006-C01 | Given any approved booking-affecting path, when a request is submitted, then it reaches the same final integrity policy and checks current authority, state, eligibility and effective installation/service configuration before success is established. |
| SDD-006-C02 | Given an availability choice that was displayed or selected, when the user submits a booking, then the system re-evaluates current capacity and resource constraints; the former display does not reserve the choice or bypass final checks. |
| SDD-006-C03 | Given an ordinary booking request, when service/time-period capacity and resource constraints are evaluated, then both must be satisfied; exclusive resources do not overlap and any shared-resource limit is explicitly configured. |
| SDD-006-C04 | Given a configured duplicate policy, when guest, account, staff-assisted or proxy booking is evaluated, then the approved attendee/eligibility criterion and same-service comparison window apply consistently; a booker-only match is not sufficient. |
| SDD-006-C05 | Given warning mode permits continuation, when the ordinary user elects to continue, then explicit accessible acknowledgement is obtained before continuation and all other checks still apply; the user cannot bypass a blocking result. |
| SDD-006-C06 | Given a cutoff-governed cancellation or reschedule, when eligibility is evaluated, then the applicable distinct action policy is checked relative to appointment start in the installation business time zone using the inclusive boundary; ambiguous local times are rejected. After cutoff, self-service is denied and any staff path requires separate effective authorization. |
| SDD-006-C07 | Given a proposed exception, when it is evaluated, then only the specifically permitted control may be relaxed by an actor with the applicable permission under approved policy; the reason, actor, time, affected appointment and before/after outcome are attributable under D-048. No blanket or unrelated-check bypass occurs. |
| SDD-006-C08 | Given a successful creation or cancellation, when the authoritative outcome is established, then only the actual committed outcome is reported and required evidence agrees with it. |
| SDD-006-C09 | Given a reschedule that is rejected, when the authoritative rejection is established, then the original appointment and its effective allocation remain intact without partial or orphaned effects. |
| SDD-006-C10 | Given a request whose outcome cannot be established, when an authorized actor follows up, then unknown remains distinct from success/rejection and same-intent authoritative reconciliation occurs before a retry or confirmation; blind duplicate submission is not encouraged. |
| SDD-006-C11 | Given 50 valid simultaneous booking requests for one remaining capacity unit under D-070 preconditions, when integrated verification is authorized and run, then exactly one reservation succeeds, the other 49 receive safe, clear unsuccessful outcomes, and no capacity, duplicate, partial-state or orphaned-booking violation occurs. No result is claimed by this draft. |
| SDD-006-C12 | Given a self-service cancellation/reschedule request after cutoff or an exception request without the specific permission, when evaluated, then it is denied without changing appointment/capacity state or exposing unrelated appointment data. Separately authorized staff handling remains governed by approved effective policy. |

## Open questions and assumptions

| ID | Open question | Owner / dependency | Required timing |
|---|---|---|---|
| INT-Q01 / Q-019 | Exact client-configured capacity units/periods, resource categories, shared-resource limits, and service eligibility states. | Product Owner defines policy; engineering evaluates the contract. SDD-004/005 inputs. | Before affected configuration and booking-integrity implementation. |
| INT-Q02 / Q-021 | Exact approved attendee/eligibility criteria, comparison-window values per service, legitimate exceptions and permitted warning continuation. | Product Owner; qualified privacy/security review for criterion necessity and false-positive/disclosure risks. | Before duplicate configuration or affected implementation. |
| INT-Q03 / Q-020 | Client-specific cutoff values, appointment eligibility states and exact separately authorized staff handling after cutoff. D-106/D-107 set separate cancellation/rescheduling cutoffs relative to appointment start, inclusive boundary, installation business time zone, post-cutoff self-service denial and no-penalty scope; values remain open. | Product Owner; engineering date/time evaluation; SDD-016/017 consume the contract. | Policy disposition is recorded. Values and eligible states before affected client configuration and cancellation/rescheduling implementation. |
| INT-Q04 / D-048 | Which specific exception types and permissions may relax which policy controls, and what review is required for each. | Product Owner; SDD-002/003 authority/evidence contracts; SDD-018 consumer integration. | Before exception implementation. |
| INT-Q05 / D-070 | Same-intent identity, outcome retrieval, safe retry, retention and transport details. | Engineering proposes alternatives; PO reviews material risk choices; applicable security/data-integrity review. | Before implementing unknown-outcome handling; no mechanism is selected here. |
| INT-Q06 / Q-016/Q-022 | Numeric response-time and availability targets remain open; D-109 approves their measurable evaluation approach. D-070 integrity and D-067 workload profiles are separate approved inputs and are not latency or availability promises. | Engineering/operations feasibility evaluation and Product Owner disposition; D-102 due diligence applies to any significant technology choice. | Before approval of an affected target or operational commitment. D-079's former Gate 2 timing is historical under D-098; it does not block this draft or unrelated work. |
| INT-Q07 | Error disclosure, post-cutoff guidance, and command-specific confirmation details. | Owning journey specs (SDD-009/015/016/017) and SDD-023 accessible states. | Before affected journey implementation and acceptance. |

## Technical design candidates — not selections

| Candidate | Owner / dependency | Unselected choices |
|---|---|---|
| Atomic booking/capacity/resource effects | Engineering; SDD-005 policy inputs | No transaction, locking, isolation, queue, schema or service topology selected. |
| Same-intent outcome reconciliation | Engineering; D-070 and approved command contracts | No token, key, retention, retry interval, transport or persistence mechanism selected. |
| Policy evaluation contract | Engineering with PO-confirmed policy | No algorithm, interface, package or implementation model selected. |
| Error and review presentation | Owning journey SDDs and SDD-023 | No message text or user-facing override control selected. |

## Plan, verification and status

- **Scope risk:** high, due to personal-data authority, appointment integrity, concurrency and capacity/resource decisions. Applicable security/privacy and data-integrity review is required before affected implementation or acceptance.
- **Future verification:** authorize concrete scenarios for each path, success/rejection/unknown outcomes, reschedule preservation, cutoff boundaries, exclusive/shared resources, policy exceptions, concurrent contention, and evidence consistency. Use approved synthetic data and record actual environment, preconditions, result, reviewer and limitations.
- **Current verification:** none. This is a documentation draft only; no tests, application/database operations, performance checks or reviews are claimed.
- **Approval/authorization:** Product Owner specification approval is pending. Implementation, database, API, dependency, deployment and release authority are not granted.

