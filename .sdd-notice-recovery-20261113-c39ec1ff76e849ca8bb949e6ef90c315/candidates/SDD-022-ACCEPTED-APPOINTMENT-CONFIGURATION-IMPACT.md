# SDD-022 — Configuration Changes Affecting Accepted Appointments

> **CURRENT STATUS: APPROVED — SDD-022 v0.2, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **Status: DRAFT — SDD-022 v0.2, PENDING PRODUCT OWNER REVIEW.** This document proposes a review boundary for authorized service/scheduling configuration changes that could affect accepted appointments. It has not been approved or implemented. No impact algorithm, automatic migration, grandfathering rule, cancellation, notification or technical mechanism is selected.

| Field | Value |
|---|---|
| Identifier / revision / date | SDD-022 / v0.2 / 2026-11-13 |
| Owner | Product Owner for business policy; engineering for impact evaluation; SDD-002/003 for authority/evidence contracts; applicable security/privacy/data-integrity review before implementation. Actual operational reviewers remain unassigned. |
| Provenance | Authorized documentation-only drafting under the current SDD task. |
| Revision history | v0.1 was the initial draft. v0.2 narrows C04 to booking/capacity-affecting appointment actions and clarifies the historical D-079 timing under D-098; no new policy or mechanism is selected. |
| Approval | v0.2 is pending separate Product Owner review of this exact scope and revision; no prior approval is claimed. |

## Purpose and scope

Ensure a service or scheduling configuration change does not silently invalidate, cancel, move, or falsely represent an accepted appointment. Before an authorized configuration change can take effect, the affected-appointment impact must be evaluated and handled under an approved policy.

**In scope:** service lifecycle/configuration changes (SDD-004) and schedule, duration/buffer, resource, capacity, duplicate-policy, cutoff, or business-time-zone changes (SDD-005) that may affect accepted appointments; review authority and attributable outcomes; preserving appointment state; and routing any separately authorized appointment-level action through SDD-006 and its owning workflow.

**Out of scope:** ordinary service or schedule configuration with no accepted-appointment impact; defining the values or client policy in SDD-004/005; final booking integrity/concurrency (SDD-006); appointment cancellation or rescheduling user flows (SDD-016/017); internal identity/permissions (SDD-002); evidence storage (SDD-003); email delivery (SDD-007); dispute holds (SDD-013); physical schema, UI/API, algorithms, deployment, or a universal grandfathering/automatic migration policy.

## References

- **Effective requirements:** Requirements Specification v0.9 read with preserved v0.8 and carried-forward v0.7. SDD-022's registered traceability mapping is FR-001/004/008; NFR-004/006/011; BR-001/002/005/010; AC-001/005/009; S-1/3/4. v0.9 changes NFR-003 and adds AC-027–029; it does not amend configuration-impact scope.
- **Traceability:** approved revision 1.3, preserving revision 1.2 and carried-forward revision 1.0. The registry's SDD-022 mapping is planning traceability only.
- **Approved decisions and registered references:** D-043, D-060, D-085, D-086, D-106 and D-107 appear in the registry's SDD-022 mapping. D-048 (permissioned exception with reason and before/after evidence), D-079 (quality-target timing), D-089 (no cancellation/no-show penalties), D-098 (specification approval distinct from implementation authority) and D-108 (default-deny actor/service/action authorization) also apply within their scopes. D-086 is provisional logical data design and approves no physical schema.
- **Related specifications:** SDD-002 internal identity/permissions; SDD-003 attributable evidence; SDD-004 service catalog/data; SDD-005 scheduling policy; SDD-006 final booking integrity; SDD-007 email limits; SDD-016 cancellation; SDD-017 rescheduling.
- **Planning source:** Master SDD Registry assigns SDD-022 configuration impacts and gives H prerequisites SDD-002/003/004/005/006. H rows apply at relevant implementation/integration stages, not as a prohibition on drafting contracts.
- **Governance:** Engineering Governance §§2, 5 and 17; Decision Register Q-019/020/021; D-079's former Gate 2 milestones are read as historical under D-098's SDD workflow. D-109 records the evaluation approach for measurable performance/availability targets but does not set target values or decide configuration-impact outcomes.

## Expected behavior

### Impact review before a change takes effect

Before an authorized change to service or scheduling configuration takes effect, the system evaluates whether the effective change may conflict with or change the meaning/handling of any accepted appointment. The review uses the approved policy and installation business time-zone context. It must not assume a universal time zone, capacity unit, resource type, duration, cutoff value or duplicate criterion.

If the change has no accepted-appointment impact, it may proceed through its ordinary approved authorization, validation and evidence path. If it may affect accepted appointments, the change is not silently applied. The impact and the allowed handling must be reviewed before the configuration becomes effective. Until an approved policy defines a permitted affected-appointment outcome, the existing effective configuration and accepted appointment state remain unchanged.

The review must preserve the accepted appointment as authoritative unless a distinct appointment-level action is separately authorized and accepted under its applicable policy, permission, SDD-006 final checks and owning workflow (for example, SDD-016 cancellation or SDD-017 rescheduling). Configuration alone never automatically cancels, moves, rewrites, or changes attendance for an appointment.

No blanket grandfathering, forced rebooking, automatic migration, new notification purpose, penalty, or customer-data disclosure is introduced. A future-effective configuration that avoids changing accepted appointments may be considered by the Product Owner, but this draft does not select or require that treatment. SDD-007's approved recipient/content limits continue to apply.

### Authority, evidence, privacy and accessibility

Only an actor with the approved installation-, service- and action-specific permission may initiate, review, approve, or apply the change. Access is default-deny, self-elevation is not permitted, and SDD-002 owns permission enforcement; this specification creates no role or bypass. Consequential accepted/rejected outcomes and required decisions are attributable under SDD-003, including applicable reason and before/after context without unnecessary personal data. An impact view discloses only the minimum appointment information needed to make the authorized decision.

An invalid, ambiguous, conflicting, unauthorized or unresolved impact review does not claim success or partially apply the change. The review experience follows SDD-023 accessible state and recovery guidance. No UI, API, storage or comparison algorithm is selected.

## Acceptance criteria — proposed, not approved or executed

| ID | Given / when / then |
|---|---|
| SDD-022-C01 | Given an authorized proposal to change service/scheduling configuration, when the change could affect accepted appointments, then impact review occurs before the new configuration takes effect. |
| SDD-022-C02 | Given an impact review that finds no accepted-appointment conflict or semantic effect, when the configuration is otherwise authorized and valid, then it may follow the ordinary approved configuration path with attributable outcome evidence. |
| SDD-022-C03 | Given a configuration change that may affect an accepted appointment, when no approved affected-appointment handling authorizes its outcome, then the current effective configuration and accepted appointment state remain unchanged; no partial or silent application is represented as success. |
| SDD-022-C04 | Given an approved reviewed change with an accepted-appointment impact, when it is applied, then any separately authorized appointment-level cancellation, reschedule or other action that affects booking/capacity integrity requires its applicable authority and policy, SDD-006 final checks, and the owning workflow; other appointment state changes follow their owning workflows. Configuration itself does not automatically cancel, move or rewrite appointments. |
| SDD-022-C05 | Given a proposed time-zone, cutoff, service duration, buffer, resource, capacity or duplicate-policy change, when impact is evaluated, then the effective installation/service policy is used and ambiguous local-time meaning is not silently inferred. |
| SDD-022-C06 | Given an unauthorized, invalid, ambiguous or unresolved change, when attempted, then the change is rejected or left pending without changing effective configuration or accepted appointment state and without unnecessary appointment-data disclosure. |
| SDD-022-C07 | Given an accepted or rejected consequential configuration-impact action, when evidence is recorded, then the actual outcome, actor, applicable reason and required before/after context are attributable under SDD-003 and do not unnecessarily reproduce personal data. |
| SDD-022-C08 | Given an authorized reviewer using the impact flow, when keyboard, touch or assistive technology is used, then impact, error, unresolved and recovery states are perceivable and operable under SDD-023; no accessibility conformance is claimed by this draft. |
| SDD-022-C09 | Given a future acceptance plan, when this scope is verified, then it covers no-impact changes, conflicting/ambiguous changes, unresolved outcomes, unauthorized actions, preservation of appointments, separately authorized appointment-level actions and evidence consistency. No test result is claimed here. |

## Open questions and assumptions

| ID | Open question | Owner / dependency | Required timing |
|---|---|---|---|
| IMP-Q01 / Q-019 | Which changes count as materially affecting an accepted appointment (including schedule, duration/buffer, resource, capacity and duplicate-policy changes), and what impact categories must be identified? | Product Owner policy; engineering evaluates policy semantics against SDD-004/005. | Decide before implementation of affected configuration changes. |
| IMP-Q02 / Q-020 | What reviewed outcomes are permitted when a change conflicts with an accepted appointment, including effective-date treatment and the point at which cancellation/rescheduling is available? | Product Owner; SDD-006 final integrity; SDD-016/017 appointment-level workflows. D-107 sets separate cutoffs and post-cutoff authority boundaries; exact values/eligibility states remain open. | Approve before implementing any change that can affect accepted appointments. |
| IMP-Q03 / D-048 | Which actor permissions authorize impact review/approval and which exception decisions require a reason or separate approver? | Product Owner with SDD-002/003; no role assignment inferred. | Before implementation of configuration-impact decisions. |
| IMP-Q04 | What minimum appointment information and aggregate detail may the authorized reviewer see, and what customer notification, if any, is permitted? | Product Owner and qualified privacy review; SDD-007 constrains email; no new email purpose assumed. | Before design/implementation of reviewer disclosures or notifications. |
| IMP-Q05 / SCH-Q07 / SVC-Q03 | How are an invalid/conflicting policy, ambiguous local time, date exception, and accepted-booking conflict represented and resolved? | Product Owner policy; engineering technical evaluation; SDD-005/004 inputs. | Before affected configuration implementation. |
| IMP-Q06 | Are prospective effective-date changes permitted when they preserve accepted appointment meaning, and if so what review and communication are required? | Product Owner; SDD-004/005 and SDD-007 boundaries; D-079 does not decide it. | Before implementing effective-date or migration behavior. |

## Technical design candidates — not selections

| Candidate | Owner / dependency | Unselected choices |
|---|---|---|
| Impact identification and preview | Engineering evaluates after PO-approved impact definition | No algorithm, query model, field list, API or UI selected. |
| Applying an approved configuration change | Engineering with SDD-006 integration | No transaction, schema, lock, versioning or migration mechanism selected. |
| Appointment-level resolution | Owning SDD-016/017 and SDD-006 | No automatic cancellation/reschedule, grandfathering, bulk action or new notification selected. |
| Evidence and privacy-safe review | SDD-003 plus qualified privacy/security review | No evidence store, retention value, diagnostic payload or new access permission selected. |

## Plan, verification and status

- **Scope risk:** high due to accepted appointment integrity, capacity/resource policy and personal-data visibility. Applicable security/privacy/data-integrity review is required before implementation or acceptance.
- **Future verification:** under separate authorization, test no-impact changes, date/time ambiguity, affected appointments, unresolved/conflicting policy, unauthorized reviews, preservation, separately authorized outcomes and attributable evidence using approved synthetic data.
- **Current verification:** none. This is a documentation draft only; no implementation, test, privacy/security review or operational result is claimed.
- **Approval/authorization:** Product Owner specification approval is pending. Implementation, database, API, dependency, deployment and release authority are not granted.

