# SDD-004 — Service Catalog and Minimum Booking-Data Configuration

> **CURRENT STATUS: APPROVED — SDD-004 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. SDD-004 v0.1 remains historically approved within its exact recorded scope. v0.3 is the approved current revision per Registry §13; v0.2 is retained as prior draft history. No field catalog, permission matrix, schema, implementation, database operation or deployment is authorized by this draft.

| Field | Value |
|---|---|
| Identifier / revision / date | SDD-004 / v0.3 / 2026-11-13 |
| Owner | Product Owner for product policy; engineering, security and qualified privacy reviewers for applicable design. |
| Draft provenance | Authorized documentation-only SDD revision; v0.1's approval provenance is preserved below. |
| Current approval status | v0.3 is approved for its exact documented scope (Registry §13); v0.1 remains historical. v0.1 was approved by the Product Owner within its exact documented scope; approval date not separately supplied, recorded 2026-11-13. |

## Revision history and prior approval

| Revision | Disposition | Change and boundary |
|---|---|---|
| v0.1 / 2026-11-13 | **APPROVED — exact revision and scope**; approval date not separately supplied | Approved provisional specification. Approval did not approve a field catalog, service policy values, permission matrix, physical schema or implementation. SVC-Q01–Q04 remained open. |
| v0.2 / 2026-11-13 | **DRAFT — pending separate review** | Clarifies the minimum-common-data direction, conditions for service-specific fields, separation of booker/attendee/staff, and connections to SDD-005, SDD-006 and SDD-022. It does not select fields or values, close open questions, or authorize implementation. |
| v0.3 / 2026-11-13 | **DRAFT — pending separate review** | Clarifies that the D-094 reference relies only on the effective v0.8 requirements for guest/account parity and service policy; it does not adopt any proposal text inconsistent with the Decision Register's conflicting status statements. No policy, field, or mechanism is added. |

## Purpose and scope

Specify how an authorized client administrator can maintain the installation-local service catalog and how the service context selects only approved booking information. The product remains one reusable product installed separately for each client; services, their approved configuration and client data remain installation-scoped.

**In scope:** service catalog information needed to present and identify a configured service; approved common booking information and justified service-specific fields; field purpose, validation, visibility and minimum-data boundaries; authorized configuration actions and evidence; safe handling when a proposed change could affect accepted appointments.

**Out of scope:** availability periods, duration, buffers, staff/resource schedules, capacity and duplicate-policy values (SDD-005); the shared final booking-integrity mechanism (SDD-006); configuration changes affecting existing appointments (SDD-022); customer profiles/prefill (SDD-012); identity/permission implementation (SDD-002); a generic form builder, eligibility/masterlist imports, unapproved data fields, final field types/storage, or any physical schema.

## References

- Requirements: [effective Requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) read with [approved v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and carried-forward [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md); FR-001, FR-022, NFR-004, NFR-009, BR-005, BR-006, UJ-001, UJ-005, UJ-006, AC-010, AC-022, AC-023.
- Decisions: [Decision Register](../decisions/DECISION_REGISTER.md) D-043 (capacity/policy values remain client-configurable), D-050 (minimum data and least privilege), D-060 (resource/capacity constraints), D-062 (configuration direction, no plugin framework), D-094 (the Decision Register contains conflicting status statements; this specification relies only on the effective v0.8 requirements for guest/account parity and service policy and adopts no proposal text by citation alone), D-104 (minimal common data and qualified privacy review), D-106 (service-data policy directions), D-108 (default-deny actor/service/action access boundaries), and D-098 (specification and implementation authorization are distinct).
- Accepted supporting references: [Architecture](../architecture/ARCHITECTURE.md) installation boundaries and approved-booking impacts; [Backend Schema](../architecture/BACKEND_SCHEMA.md) conceptual-model limitations; [Application Flow](../design/APP_FLOW_UI_UX.md) form and recovery behavior; [Design System](../design/DESIGN_SYSTEM.md) reusable accessible form guidance; [SDD-002](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) internal authorization; [SDD-003](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md) required evidence.
- Related specifications: SDD-005 owns availability/resource/capacity policies; SDD-006 owns final booking checks; SDD-012 owns explicit profile editing and prefill; SDD-022 owns accepted-appointment impacts. SDD-005 v0.2 was previously approved in its exact scope; current drafts SDD-005 v0.4, SDD-006 v0.1 and SDD-022 v0.2 remain pending separate review and approval.

## Expected behavior

1. An authenticated internal actor may view or change service configuration only when default-deny, server-side authorization permits that actor, service and action within the installation. Client-side controls, claimed roles or self-elevation do not grant permission; no operator entitlement is inferred.
2. A service presented to a booking journey uses only the current, approved service information and booking fields for that installation. The common booking form uses the approved minimum common booking-data set. A service-specific field may be added only after its purpose, necessity, validation, visibility, retention treatment and applicable privacy review are approved.
3. Configuration distinguishes the original booker, attendee and acting staff where applicable. A field collected from one actor does not automatically become visible to another actor or to an unrelated service.
4. Guest and optional-account paths apply the same effective service, eligibility, capacity, duplicate and final-integrity rules. Service configuration does not grant account priority, identity, appointment authority or an integrity bypass.
5. A change to service configuration that may affect an accepted appointment is subject to SDD-022 review before the change can take effect. No service edit may silently invalidate or cancel an accepted appointment; no automatic cancellation or migration is authorized.
6. Configuration errors, missing required approved data, unavailable services and rejected changes are reported without inventing values or partially applying an unsafe change. Applicable consequential configuration changes have attributable evidence under SDD-003.

## Acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-004-C01 | Given an unauthenticated, unauthorized or wrong-installation actor, when service configuration is read or changed directly or through the interface, then the request is denied without changing configuration or disclosing restricted service data. |
| SDD-004-C02 | Given an authorized service-configuration action, when service information is saved, then only fields and values within the approved configuration scope are accepted; availability, resource, capacity and duplicate rules remain owned by SDD-005 and no unapproved field or generic form-builder behavior is introduced. |
| SDD-004-C03 | Given a booking journey, when booking information is collected, then it uses the approved minimum common booking-data set. A service-specific addition is allowed only after its purpose, necessity, validation, actor visibility, retention treatment and applicable privacy review are documented and approved; no unapproved field is collected or displayed. |
| SDD-004-C04 | Given a booking involving a separate booker, attendee or acting staff member, when service fields are presented or reviewed, then those actors remain distinct and no field or record is exposed to an actor solely because they share a name, contact detail, account or service. |
| SDD-004-C05 | Given equivalent guest and optional-account booking requests, when configured service rules are applied, then neither account status nor the service configuration creates priority or bypasses the shared approved eligibility, capacity, duplicate and integrity checks. |
| SDD-004-C06 | Given a proposed service change that may affect accepted appointments, when the change is evaluated, then the SDD-022 impact-review boundary is invoked before the change can take effect; no accepted appointment is silently invalidated, cancelled, migrated or rewritten. |
| SDD-004-C07 | Given invalid, missing or unavailable configuration, when an authorized actor attempts to save or use it, then the system reports the condition safely and does not claim an uncommitted or partial configuration change as successful. |
| SDD-004-C08 | Given a consequential service or data-configuration change, when it is accepted or rejected, then the applicable attributable evidence is consistent with the authoritative outcome under SDD-003 and does not unnecessarily reproduce personal data. |
| SDD-004-C09 | Given a public or internal form using approved service fields, when operated by keyboard, touch or assistive technology, then labels, instructions, validation and state feedback use the reusable accessible patterns in SDD-023 without relying only on color, icon or transient notification. |
| SDD-004-C10 | Given an authorized acceptance plan, when this scope is verified, then positive, negative-authorization, data-minimization, invalid-configuration, existing-appointment-impact and applicable accessibility cases are recorded; no field-catalog, privacy-review or runtime result is claimed by this draft. |

## Considerations and open questions

| Question | Unresolved matter, proposed owner and timing |
|---|---|
| SVC-Q01 — Exact minimum common field catalog and service-specific additions, before field configuration implementation | Product Owner/service-policy owner defines the common set and any service-specific purpose; qualified privacy reviewer evaluates necessity, visibility, validation, retention and applicable review. The policy direction is to keep the common set minimal and require review/approval for additions. Exact fields and sensitive-data categories remain open. |
| SVC-Q02 — Configuration permissions and affected actions, before implementation | Product Owner approves material permission/policy boundaries; engineering maps actions to the approved SDD-002 permission model. No complete role matrix or privileged bypass is selected. |
| SVC-Q03 — Service lifecycle and accepted-booking effects, before allowing changes to existing services | Product Owner resolves material business policy; SDD-022 defines the affected-appointment review contract. Hide/disable/retire behavior and treatment of affected appointments remain open. No automatic cancellation or permission to rewrite accepted appointments is inferred. |
| SVC-Q04 — Validation, visibility and retention detail, before collecting any service-specific field | Engineering proposes proportionate validation and presentation; qualified privacy review addresses purpose, necessity, recipients, retention and notices; Product Owner approves material product policy. No field type, database structure or retention period is selected. |

### D-102 alternatives and risk summary

| Direction | Benefit and alternative/trade-off | Failure scenario and mitigation | Future verification / residual risk / owner |
|---|---|---|---|
| Keep a small approved common field set with justified service-specific additions. | Supports service differences while limiting collection; one universal form is simpler but may collect irrelevant data or fail a justified service need. | Unreviewed or overly broad fields expose sensitive data; require purpose/necessity/visibility review before field use and test denied views. | Review each approved field and actor-visible flow; client-specific policy variation remains. Product Owner and qualified privacy reviewer. |
| Separate catalog information from scheduling policy and accepted-booking changes. | Keeps ownership understandable; a combined service editor may reduce navigation but couples unrelated policy changes. | A description/field edit silently changes existing bookings or availability; route scheduling values to SDD-005 and impacts to SDD-022. | Test configuration and affected-booking cases under authorized plans; exact lifecycle policy remains open. Product Owner and engineering. |

## Plan and verification

- **Drafting dependencies:** current requirements/decisions, approved SDD-002/003 and bounded drafting authority; fulfilled.
- **Implementation dependencies:** Product Owner decision on required field catalog and lifecycle; permission allocation under SDD-002; privacy review before collecting/displaying any service-specific personal data; approved SDD-005/006 contracts for scheduling and final booking behavior; SDD-022 before changes that affect accepted appointments.
- **Integration dependencies:** actual booking consumers must apply identical approved service configuration and booking-integrity rules to guest and optional-account paths; SDD-003 evidence and SDD-023 presentation must be integrated where applicable.
- **Acceptance evidence:** authorized tests for configuration authorization, installation scope, allowed/denied fields, actor visibility, parity, safe rejection, audit consistency and rendered accessibility. No tests, database design or field approval are claimed here.
- **Risk class:** high when implemented because it governs personal-data collection, authorization and business configuration; Product Owner approval and applicable security/privacy review are required before implementation.

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Current specification/scope approval | **APPROVED.** v0.3 is approved for its exact documented scope (Registry §13). The prior v0.1 approval remains historically effective for that exact revision and scope only. |
| Implementation authorization | **NOT AUTHORIZED.** No exact field catalog, permission matrix, schema, migration, configuration UI or service policy value is approved by v0.3. |
| Verification/acceptance | **NOT PERFORMED.** No runtime, privacy, security, usability or accessibility evidence is claimed. |
| Gate / project status | Gate 2 remains historically IN PROGRESS; Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). This draft creates no implementation or release/deployment authorization. |

