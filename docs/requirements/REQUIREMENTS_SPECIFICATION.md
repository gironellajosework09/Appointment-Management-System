# Requirements Specification — Appointment Management System

| Field | Value |
|---|---|
| Document status | DRAFT — Gate 1 Checkpoint 1; pending Product Owner review |
| Gate | Gate 1 (Requirements Discovery) — IN PROGRESS |
| Document date | 2026-10-28 |
| Revision | 0.3 (2026-10-28 — second bounded remediation; DRAFT) |
| Owner | Product Owner |

This checkpoint records draft requirements and hypotheses for review. It does not
claim stakeholder validation, approve requirements, authorize Gate 1 exit, select
architecture, or authorize implementation. The lifecycle proposed in
`REQUIREMENTS_GOVERNANCE.md` is itself pending Product Owner approval.

## 1. Product boundary

The product is a separate commercial Appointment Management System installed
independently for each client organization. It is not the production CEAP system,
does not use CEAP production data or infrastructure, and is not a shared
multi-tenant SaaS product. Customer, workflow, authentication, policy, and
service-level choices remain open in the Decision Register.

## 2. Draft requirement register

All records are `DRAFT`. `Mandatory baseline` identifies an approved source
constraint, not approval of this requirement wording or its detailed behavior.
`Candidate v1` and `Optional` are release-priority hypotheses only.

### 2.1 Functional requirements

| ID | Title | Statement | Review status | Release priority | Owner |
|---|---|---|---|---|---|
| FR-001 | Appointment scheduling | An authorized actor shall be able to make appointments available for scheduling and a public user shall be able to request an available appointment under approved scheduling and booking rules; the system shall return an unambiguous outcome. | DRAFT | Mandatory baseline | Product Owner |
| FR-002 | QR appointment verification | For an appointment eligible under approved rules, the product shall provide a QR presentation to the intended user and permit an authorized verifier to use it to determine and receive an appointment-verification outcome under approved rules. | DRAFT | Mandatory baseline | Product Owner |
| FR-003 | Public booking journey | A public user shall be able to follow an approved journey to request an available appointment under configured scheduling and capacity rules. | DRAFT | Candidate v1 | Product Owner |
| FR-004 | Staff appointment management | An authorized administrator or staff member shall be able to perform only appointment-management actions permitted by an approved role and permission model. | DRAFT | Candidate v1 | Product Owner |
| FR-005 | QR presentation | The intended user shall be able to obtain a QR presentation for an eligible appointment through an approved access path; the presentation shall not itself expose unnecessary personal data. Eligibility, timing, and access path remain open. | DRAFT | Mandatory baseline | Product Owner |
| FR-006 | QR verification outcome | An authorized verifier shall be able to present the QR representation for verification and receive an outcome under approved appointment and QR lifecycle rules; an unauthorized actor shall not receive a valid verification outcome. Verifier roles and method remain open. | DRAFT | Mandatory baseline | Product Owner |
| FR-007 | Cancellation and rescheduling | Cancellation and rescheduling shall be supported only to the extent established by approved business rules. | DRAFT | Candidate v1 | Product Owner |
| FR-008 | Auditable events | The installation shall record appointment and verification events to the extent required by approved privacy, retention, access, and audit rules. | DRAFT | Candidate v1 | Product Owner |
| FR-009 | Eligibility capability | Eligibility import or validation shall be provided only if evidence and Product Owner approval establish it as required. | DRAFT | Optional | Product Owner |
| FR-010 | Notifications | Notifications shall be provided only if evidence and Product Owner approval establish channels, events, consent, and delivery expectations. | DRAFT | Optional | Product Owner |
| FR-011 | Reporting and monitoring | Reporting, export, or operational-monitoring capabilities shall be provided only if evidence and Product Owner approval establish their users and purposes. | DRAFT | Optional | Product Owner |
| FR-012 | Operator support hypothesis | If operator support activities are required, the operator shall be able to complete approved non-data support tasks without default client-data access; any exceptional client-data access must be separately defined, authorized, and audited. The tasks and access procedure remain hypotheses. | DRAFT | Candidate v1 | Product Owner |

### 2.2 Non-functional requirements and constraints

| ID | Title | Statement | Review status | Release priority | Owner |
|---|---|---|---|---|---|
| NFR-001 | Independent installation | Each client organization shall use an independently deployed and operated installation rather than a shared multi-tenant service. | DRAFT | Mandatory baseline | Product Owner |
| NFR-002 | Product and CEAP isolation | The product shall have its own application, database, schema, configuration, credentials, and deployment environment and shall never connect to or affect production CEAP systems or data. | DRAFT | Mandatory baseline | Product Owner |
| NFR-003 | Security and privacy | Every state-changing operation shall require authentication, authorization, and server-side validation; unauthorized attempts shall not change appointment state. Personal-data access and auditability shall follow approved privacy rules. | DRAFT | Mandatory baseline | Product Owner |
| NFR-004 | Configurability | Client-specific needs shall be met through configuration or an approved extension without forking core scheduling logic. | DRAFT | Mandatory baseline | Product Owner |
| NFR-005 | Operator access boundary | The Product Owner or system operator shall not have unrestricted client-data access by default; operational access shall be explicitly defined, authorized, and audited. | DRAFT | Mandatory baseline | Product Owner |
| NFR-006 | Booking integrity | Under normal and concurrent booking attempts, no completed operation shall exceed approved capacity or create a booking prohibited by approved duplicate rules; failed operations shall leave no partial or orphaned appointment records. | DRAFT | Mandatory baseline | Product Owner |
| NFR-007 | Usability and accessibility | Public and administrative experiences shall be usable, accessible, consistent, and responsive across approved devices and viewports. | DRAFT | Mandatory baseline | Product Owner |
| NFR-008 | Measurable service targets | Performance, capacity, concurrency, reliability, and availability targets shall be measurable after representative usage and operating expectations are validated. | DRAFT | Mandatory baseline | Product Owner |
| NFR-009 | Personal-data governance | Personal-data collection, access, retention, deletion, and audit requirements shall follow validated stakeholder, legal, and operational needs. | DRAFT | Candidate v1 | Product Owner |
| NFR-010 | Core-workflow tests | Core scheduling, booking, QR verification, and other workflows once approved shall have automated tests of approved success and failure rules, with passing results recorded before release. The core-workflow set and coverage target remain open. | DRAFT | Mandatory baseline | Product Owner |

## 3. Rationale and provenance

No representative-stakeholder evidence or underlying Product Owner discovery
transcript is available in the repository. Detailed QR behavior is therefore an
unverified hypothesis, even though mandatory QR verification itself is grounded
in approved G-1/P-003.

| ID(s) | Rationale | Provenance |
|---|---|---|
| FR-001 | Preserve the approved scheduling capability while leaving policy open. | Charter G-1; P-003 approval item dated 2026-10-28; Q-005, Q-019 |
| FR-002 | Preserve mandatory QR verification without inventing its lifecycle. | Charter G-1; P-003 approval item dated 2026-10-28 |
| FR-003 | Provide a reviewable public journey hypothesis. | Charter §5 discovery topic; Q-002–Q-005, Q-019, Q-021; no stakeholder evidence |
| FR-004 | Provide a reviewable staff workflow hypothesis within unresolved roles. | D-030; Charter §5; Q-009, Q-018, Q-019; no stakeholder evidence |
| FR-005; FR-006 | Describe the minimum presentation and authorized verification needed for mandatory QR verification, without fixing lifecycle or method. | Charter G-1/P-003 for mandatory capability; detailed paths/outcomes are unverified hypotheses; no attributable stakeholder or discovery transcript |
| FR-007 | Keep cancellation/rescheduling conditional on discovered policy. | Charter §5; Q-020; no stakeholder evidence |
| FR-008 | Support G-3 auditability only within unresolved privacy rules. | Charter G-3 and §5; D-029; Q-015; no stakeholder evidence |
| FR-009 | Avoid assuming a CEAP-like masterlist or eligibility workflow. | Charter §5 and A-3; Q-012, Q-023; no stakeholder evidence |
| FR-010 | Avoid assuming notification channels or commitments. | Charter §5; Q-013; no stakeholder evidence |
| FR-011 | Avoid assuming reporting, export, or monitoring scope. | Charter §5; Q-014; no stakeholder evidence |
| FR-012 | Represent a possible operator support journey without elevating it to a mandatory product feature. | Charter §5 support discovery topic; D-030 identifies operator category; D-034 constrains access; no evidence of specific support tasks |
| NFR-001 | Preserve independent per-client installation. | D-020; Charter G-1, A-1 |
| NFR-002 | Protect product independence and the absolute CEAP boundary. | D-019, D-025, D-035; Charter G-7, S-2, S-9 |
| NFR-003 | Preserve mandatory security and privacy qualities; release finding thresholds remain a separate concern. | D-021, D-029; Charter G-3, S-4 |
| NFR-004 | Preserve configuration without core-logic forks. | D-021; Charter G-4, S-1 |
| NFR-005 | Preserve the approved operator access boundary. | D-034; Charter §8 |
| NFR-006 | Preserve correctness and data-integrity goals while leaving policy open. | D-029; Charter G-2, S-3; Q-019, Q-021 |
| NFR-007 | Preserve the approved usability goal while the standard remains open. | Charter G-6, S-7; Q-011 |
| NFR-008 | Convert unresolved service expectations into a measurable discovery need. | Charter G-8, G-11; Q-016, Q-022; no stakeholder evidence |
| NFR-009 | Avoid inventing privacy, retention, or legal rules. | D-029; Charter G-3; Q-015; no stakeholder or legal evidence |
| NFR-010 | Preserve the approved testing goal and provisional success criterion without inventing a coverage percentage. | Charter G-5, G-9, G-10, S-6 (P-003; P-004 conditional); Engineering Governance §14 |

## 4. Evidence, approval, disposition, and version metadata

The following values are deliberately explicit for every requirement:

| ID range | Working version / status | Effective approved version | Planned activities | Actual evidence | Approval reference/date | Deferral/withdrawal rationale |
|---|---|---|---|---|---|---|
| FR-001–FR-012 | v0.3 / DRAFT | None yet | See traceability matrix (separate activity column) | None yet | None — not approved | Not applicable |
| NFR-001–NFR-010 | v0.3 / DRAFT | None yet | See traceability matrix (separate activity column) | None yet | None — not approved | Not applicable |

**Version history (applies to each ID in the indicated range):**

| Version / date | Author / role | Review status | Change reason and summary | Affected links / impact | Approval or disposition |
|---|---|---|---|---|---|
| v0.1 / 2026-10-28, FR-001–FR-012 and NFR-001–NFR-009 | Gate 1 drafting / author role not recorded | DRAFT | Initial working drafts; per-record changes not recorded | Initial sources and links; incomplete historical detail, not reconstructed | None |
| v0.2 / 2026-10-28, same IDs | Gate 1 remediation / author role not recorded | DRAFT | Restored identifiers, source/status metadata and operator/QR gaps; per-record changes not recorded | Specification and traceability updated; historical impact details unavailable | None |
| v0.3 / 2026-10-28, FR-001–FR-012 and NFR-001–NFR-009 | Gate 1 documentation remediation / AI assistant | DRAFT | Clarified minimum mandatory behavior, hypotheses, operator access, version/evidence separation and incomplete rules | FR-001–FR-012, NFR-003, NFR-006, NFR-008, AC-001–AC-007, BR-001–BR-004, QR-L01–QR-L12; traceability and validation plan updated; no approved version affected | None — pending Product Owner review |
| v0.3 / 2026-10-28, NFR-010 | Gate 1 documentation remediation / AI assistant | DRAFT | New testability draft for approved testing goal and S-6 | G-5, G-9, G-10, S-6; AC-008; traceability updated; coverage target remains open | None — pending Product Owner review |

No requirement has an approved version. If a record is later approved, its exact
approved text, version, approval reference, and supplied date must be preserved
before any material-change proposal is created.

## 5. Draft acceptance criteria

| ID | Related requirement | Draft criterion | Status | Validation need |
|---|---|---|---|---|
| AC-001 | FR-001; FR-003; NFR-006 | Given an available option and valid input under approved rules, a public user can request an appointment and receive an outcome; conflicting concurrent requests cannot exceed approved capacity. | DRAFT | Define actor, fields, scheduling/booking rules, capacity unit, conflict result and test conditions. |
| AC-002 | FR-002; FR-005 | For an eligible appointment, its intended user can access a QR presentation through an approved path without unnecessary personal data being exposed. | DRAFT | Resolve eligibility, issuance, timing, contents, access, privacy, and recovery. |
| AC-003 | FR-002; FR-006; NFR-003 | An authorized verifier presenting the QR representation receives a defined outcome; an unauthorized actor receives no valid verification outcome or unnecessary personal data. | DRAFT | Resolve verifier authority, method, outcomes and information shown. |
| AC-004 | FR-002; FR-006 | Verification attempts affected by expiry, cancellation, revocation, repeated presentations, prior consumption (if any), or exceptions follow approved rules and do not silently produce a valid result. | DRAFT | Define lifecycle, reuse/consumption, exception, recovery, staff confirmation, attendance, outage and reconciliation policies (QR-L01–QR-L12). |
| AC-005 | NFR-006 | Concurrent operations cannot create bookings that violate approved duplicate or capacity rules, and partial failures do not leave inconsistent state. | DRAFT | Define identity, capacity unit, atomic boundary, failure behavior, and test load. |
| AC-006 | NFR-007 | Agreed public and administrative journeys meet the accessibility standard and supported viewport/device criteria selected through Q-011. | DRAFT | Select standard, journeys, devices, and conformance target. |
| AC-007 | FR-012; NFR-005 | For a support task, the operator has no default client-data access; any exceptional access requires a defined authorization and produces an audit record. | DRAFT | Validate whether support tasks are needed; define authorization scope, audit evidence and exceptional procedure. |
| AC-008 | NFR-010 | Automated tests for the approved core-workflow set exercise agreed success, rejection and failure behavior; results are recorded and pass before release. | DRAFT | Define workflow set, coverage threshold, environment and evidence owner for S-6. |

All criteria have evidence `None yet`, approval `None — not approved`, owner
`Product Owner`, working version `0.3` / `DRAFT`, effective approved version
`None yet`, and no deferral/withdrawal rationale. Planned activities are separate
from evidence in the traceability matrix.

## 6. Draft journeys and business rules

| ID | Record | Status | Related requirements | Open references |
|---|---|---|---|---|
| UJ-001 | Public user discovers availability, supplies approved information, requests an appointment, receives an outcome, and accesses a QR presentation when eligible under approved rules. | DRAFT | FR-001; FR-002; FR-003; FR-005 | Q-002–Q-005; Q-019; QR-L01; QR-L02 |
| UJ-002 | Authorized verifier invokes a permitted verification function, presents a QR representation by an approved method, and receives only the allowed result. | DRAFT | FR-002; FR-004; FR-006 | Q-009; Q-018; QR-L06; QR-L10; QR-L11; QR-L12 |
| UJ-003 | An authorized actor cancels or reschedules an appointment under approved rules and receives a clear outcome. | DRAFT | FR-007 | Q-020 |
| UJ-004 | If an operator support task is needed, the system operator receives an approved request, verifies its scope, performs a non-data task without client-data access, records the outcome, and stops for separate authorization if client data would be required. | DRAFT | FR-012; NFR-005 | D-034; Q-008; Q-014; Q-015 |
| BR-001 | Capacity shall not be exceeded; the unit, period, configuration authority, and exception policy remain unresolved. | DRAFT | FR-001; NFR-006 | Q-019; Q-021 |
| BR-002 | Duplicate bookings shall be prevented; identity key, time window, exceptions, and conflict outcome remain unresolved. | DRAFT | FR-003; NFR-006 | Q-005; Q-021 |
| BR-003 | QR verification shall not disclose more personal data than the authorized verification task requires. | DRAFT | FR-006; NFR-003; NFR-009 | Q-015; Q-018 |
| BR-004 | Operator access to client data is denied by default; exceptional access, if needed, requires explicit definition, authorization, and audit. Procedure, duration, and closure behavior remain hypotheses. | DRAFT | FR-012; NFR-005 | D-034; Q-015 |

**Incomplete business rules (not approved):** BR-001 and BR-002 state only
capacity/duplicate invariants. Scheduling availability, calendars, slot creation,
limits and exceptions (Q-019); booking identity, eligibility, confirmation,
failure and concurrency outcomes (Q-005, Q-021); and cancellation/rescheduling
actors, windows, capacity release and conflict handling (Q-020, Q-021) still
need independently validated rules. FR-001, FR-003, FR-007 and AC-001 cannot
substitute for those missing policies. No fixed limit or CEAP-specific rule is
inferred.

Journeys and rules are hypotheses with evidence `None yet`; none is approved.

## 7. Unresolved QR lifecycle and integrity questions

Mandatory QR verification is approved at goal level, but the following are not
decided and must not be inferred from FR-005, FR-006, or AC-002–AC-004:

| Draft-local ref | Topic | Unresolved question |
|---|---|---|
| QR-L01 | Issuance | What event creates the QR representation, who may issue/reissue it, and what may it contain? |
| QR-L02 | Activation | What appointment state makes verification eligible, and when does that begin? |
| QR-L03 | Expiry | Does it expire by time, appointment state, or another event, and which clock/timezone governs? |
| QR-L04 | Revocation | Who may revoke it, for which reasons, and how soon does that affect verification? |
| QR-L05 | Recovery | What happens when the user cannot access or display the representation or needs replacement? |
| QR-L06 | Repeated scans / consumption | Are repeated presentations valid, warning-only, or rejected; is any QR consumed, and when? |
| QR-L07 | Atomicity / concurrency | How are simultaneous presentations and cancellation/rescheduling-versus-verification races resolved? |
| QR-L08 | Exceptions | Which authorized overrides, manual methods, clock-skew and failed-verification outcomes are permitted? |
| QR-L09 | Audit | Which verification and actor events are logged, who may view them, and for how long? |
| QR-L10 | Staff confirmation | Does a successful verification require staff confirmation or a separate action, by whom, and with what outcome? |
| QR-L11 | Attendance | Does verification change attendance state, or is attendance recorded separately; who can correct it? |
| QR-L12 | Outage / reconciliation | What happens when verification is unavailable or connectivity fails; which actions can proceed, how are pending outcomes reconciled, and by whom? |

These labels are stable **within these drafts only**, not official Decision Register
`Q-###` questions. These questions require stakeholder, privacy, security, and
data-integrity review. In particular verification does not imply attendance,
staff confirmation, QR consumption, or offline acceptance.
They select no data model, API, storage format, cryptography, or architecture.

## 8. Explicitly unresolved

Target customer (Q-001), commercial model (Q-010), public account model, staff
provisioning and permissions, scheduling policies, cancellation/rescheduling, QR
lifecycle, duplicate identity, capacity, privacy/retention, optional capabilities,
accessibility standard, performance, reliability, deployment, and support remain
unresolved. No architecture, schema, API, technology version, deployment model,
or implementation detail is selected by this specification.
