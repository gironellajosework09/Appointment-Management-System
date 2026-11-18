# SDD-007 — Six-Purpose Email Boundary and Delivery Recovery

> **CURRENT STATUS: APPROVED — SDD-007 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. The prior exact-version approval of v0.2 remains historical and unchanged. This revision records bounded approved operational-policy directions; it is not implementation authority, approval of an email provider or delivery mechanism, or evidence of delivery behavior.

| Field | Value |
|---|---|
| Identifier / revision / date | SDD-007 / v0.3 / 2026-11-13 |
| Owner | Product Owner for scope and policy; engineering/security/privacy responsibilities remain subject to assignment. |
| Draft provenance | Batch 2 documentation-only drafting authorization; v0.2 clarified shared-contract versus consumer-owned outcome and integration criteria. v0.3 is a narrow documentation alignment to Product Owner-approved current-turn operational directions on independent notification recovery and truthful delivery status. |
| Approval provenance | v0.1 was approved in an earlier, separate Product Owner decision; its approval date was not separately supplied. Exact v0.2 was separately approved and remains a prior approved revision. Current v0.3 was approved as recorded in Registry §13; approval date not separately supplied, recorded 2026-11-13. |

## Revision history

| Revision | Disposition |
|---|---|
| v0.1 | Earlier exact-version Product Owner approval; preserved as historical. |
| v0.2 | Exact-version Product Owner approval recorded 2026-11-13; preserved as the prior approved revision, superseded by v0.3. |
| v0.3 | Draft alignment to approved policy that notification processing is recovered independently of a committed business transaction and delivery status is reported only as supported by evidence. No mechanism, retry limit, provider, delivery guarantee or new email purpose is selected. Approved as recorded in Registry §13. |

## Purpose and scope

Define the shared email-purpose, recipient, content, triggering, outcome and recovery boundaries for the six email purposes permitted by D-095. Feature specifications remain responsible for deciding when their own authorized event occurs and for integrating its approved email behavior.

**In scope:** the six D-095 purposes; purpose-limited recipient and content; relationship between authoritative application outcomes and notification eligibility; privacy-safe handling of delivery uncertainty and failure; reusable integration and verification expectations.

**Out of scope:** selecting providers, sender domains, packages, queues, persistence/outbox architecture, retry counts, delivery guarantees, token/session mechanisms or retention periods; defining feature-specific booking, account, guest-proof or permission rules; adding reminders, marketing, SMS, phone OTP, or any other purpose; changing MFA policy or using email as an MFA factor; implementation, deployment or operational service commitments.

## References

- Requirements: [effective requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) read with [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and preserved v0.7; FR-010, FR-020, NFR-003, NFR-009, NFR-011, BR-011, BR-013, UJ-001, UJ-003, UJ-006, UJ-007, AC-019, AC-024, AC-026.
- Decisions: [D-095](../decisions/DECISION_REGISTER.md) (six permitted purposes and boundaries); D-102 (proportionate due diligence); D-104 (privacy/provider review context); D-098 (specification and implementation authorization are distinct).
- Accepted supporting references: [Application Flow](../design/APP_FLOW_UI_UX.md) unknown-outcome and notification guidance; [Architecture](../architecture/ARCHITECTURE.md) email and outcome boundaries; [SDD-003](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md) evidence obligations; [SDD-023](SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md) reusable accessible feedback.
- Planned consumer specifications: SDD-008, SDD-009, SDD-010, SDD-016 and SDD-017 own their respective event integrations and feature-specific authority checks. These candidate specifications are not approved by this reference.
- Supporting security/privacy context: [Security](../security/SECURITY.md), including T12 and PH-01–PH-10; it remains subject to its recorded scope and qualified-review dependencies.

## Expected behavior

The system may send only the following purpose-limited messages, to recipients and with content permitted by D-095 and the effective v0.8 §5 recipient/content matrix:

| Approved purpose | Trigger boundary | Recipient/content boundary |
|---|---|---|
| Account verification | A verification request for the pending account. | The address being verified; the message is single-purpose and contains no appointment or attendee details. |
| Password recovery | A recovery request for an account. | The verified address for that account; no appointment list, attendee details or credential disclosure. Responses remain privacy-limited. |
| Appointment-scoped guest access | Applicable independent proof and service-policy checks establish the approved original-booker access step. | The approved booking contact; access is limited to the single authorized appointment/action. An email address or delivered link alone proves no further identity or authority. |
| Established booking | The authoritative booking transaction has committed. | The authorized original booker's approved contact; content follows that recipient's permitted view. |
| Established cancellation | The authoritative cancellation transaction has committed. | The currently authorized original-booker contact; content is limited to the approved cancellation outcome and view. |
| Established rescheduling | The authoritative rescheduling transaction has committed. | The currently authorized original-booker contact; new appointment details are included only if permitted. |

An unconfirmed browser response is different from the authoritative transaction state. If the browser does not receive a response, the transaction may nevertheless have committed. A legitimate notification associated with that independently established committed state remains permitted under the approved email rules.

Do not trigger a new transaction email solely because an outcome is unknown. An authoritatively unknown, uncommitted, rejected or held transaction does not independently authorize a transaction email. Notification eligibility follows the authoritative committed state and approved email rules. An unsafe retry must not create a duplicate command or notification.

Delivery delay, provider acceptance, delivery failure or unavailable delivery status does not reverse a committed appointment. The established on-screen/printable outcome remains authoritative for the user-facing confirmation; email is an additional limited channel, not proof of identity, authority or guaranteed inbox delivery.

Notification-processing recovery is independent of the committed booking, cancellation or rescheduling command: recovering or retrying a permitted notification must not repeat that business command. Any delivery status presented or recorded must reflect the evidence actually available; a request, queue/transport acceptance or provider acceptance is not represented as delivery to an inbox. The delivery-state vocabulary and recovery mechanism remain for later bounded design and must not imply an inbox guarantee.

## Acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-007-C01 | Given an email request, when its purpose is evaluated, then it is one of the six D-095 purposes listed in this specification; no unrelated or new message purpose is introduced. |
| SDD-007-C02 | Given one of the six purposes, when recipient and content are determined, then only the corresponding approved recipient and authority-limited content are used, with restricted attendee/service information withheld unless separately permitted by the effective requirement and service policy. |
| SDD-007-C03 | Given a booking, cancellation or rescheduling command, when a transaction email is considered, then it is eligible only after the authoritative committed outcome and applicable D-095 recipient/content rules are established. |
| SDD-007-C04 | Given an unconfirmed browser response or authoritatively unknown, uncommitted, rejected or held transaction, when notification eligibility is evaluated, then no new transaction email is triggered solely by uncertainty; the owning transaction/journey specification governs user-facing outcome wording and authoritative reconciliation before an unsafe retry. |
| SDD-007-C05 | Given a committed transaction whose browser response was not received, when its approved notification is processed, then browser response loss alone does not suppress the legitimate committed-state notification, and duplicate commands or notifications are not created by blind retry. |
| SDD-007-C06 | Given delayed, failed or indeterminate email delivery, when the outcome is presented or recovered, then the committed appointment remains committed, notification processing is recovered independently without repeating the business command, the established user-facing outcome remains available, and the reported delivery state does not exceed available evidence or represent provider acceptance as guaranteed inbox delivery. |
| SDD-007-C07 | Given a guest-access message or account message, when its content or link is used, then it grants only its approved single-purpose scope and does not independently prove attendee/guardian identity, another appointment's authority or permission to change a booking. |
| SDD-007-C08 | Given a user-visible mail status or recovery path, when evaluated using the approved automated checks and human keyboard, screen-reader, zoom and touch review, then the status and next safe action are perceivable and operable using the reusable accessibility guidance in SDD-023; no outcome depends only on color, animation or transient feedback. |
| SDD-007-C09 | Given an authorized verification plan for this shared contract, when acceptance is sought, then its purpose, recipient/content, commit/dispatch uncertainty, delivery failure, duplicate-prevention and privacy-denial cases are evidenced using bounded contract checks; each consumer specification separately owns end-to-end integration evidence, and this specification alone does not claim it. |

## Considerations and open questions

| Question | Unresolved matter, proposed owner and timing |
|---|---|
| MAIL-Q01 — Provider and sender processing, before provider adoption | Engineering and privacy/security reviewers assess provider, sender/domain, processing location, access, terms, availability and failure feedback under D-102/D-104. Product Owner approves any external provider/service selection. No provider is selected. |
| MAIL-Q02 — Delivery intent, retry and reconciliation, before affected implementation | Engineering evaluates proportionate approaches to preserve a committed notification intent and recover delayed/failed delivery without duplicate messages or commands. Product Owner reviews material trade-offs; no queue, outbox, persistence, retry count or delivery guarantee is selected. |
| MAIL-Q03 — Purpose-specific proof, content and token lifecycle, before affected consumer implementation | Consumer specifications and security/privacy review define the applicable proof, recipient change, token/session, abuse and accessible recovery boundaries. Product Owner resolves material policy choices; no token type, expiry or identity method is selected here. |
| MAIL-Q04 — Notice, retention and delivery evidence, before personal-data processing/reliance | Qualified privacy review and actual client/provider responsibility allocation determine permitted data, notice/processing, retention and evidence handling. No legal conclusion, retention period or controller/processor assignment is inferred. |

### D-102 alternatives and risk summary

| Direction | Benefit and alternative/trade-off | Failure scenario and mitigation | Future verification / residual risk / owner |
|---|---|---|---|
| Keep one shared purpose/recipient/outcome contract while consumer features own event integration. | Reuse reduces conflicting message rules; a separate implementation per feature may be simpler locally but risks divergent privacy and outcome behavior. | A consumer sends on request receipt rather than commit, or sends restricted details; bind triggering to authoritative outcome and test recipient/content boundaries. | Exercise each actual consumer after its scope is authorized. Human/provider compromise and ambiguous delivery remain; engineering, feature owners and qualified privacy/security reviewers. |
| Keep delivery mechanisms open pending proportional evaluation. | Allows use of an approved existing delivery capability if suitable; persistent/retry mechanisms may improve recovery but add state and operations. | Provider or worker outage delays a valid message, or retries duplicate it; preserve application outcome and evaluate safe recovery before implementation. | Fault-injection and reconciliation evidence under the selected design; no inbox guarantee. Engineering proposes, Product Owner approves material selections. |

## Plan and verification

- **Drafting dependencies:** approved D-095/v0.8 email boundaries and this bounded documentation revision; fulfilled. Consumer specifications may be drafted in parallel and need not be implemented to review this contract.
- **Implementation dependencies:** individually approved consumer specifications and implementation authority; resolved provider/processing and material security/privacy choices; review of applicable delivery recovery and duplicate-prevention design. No implementation is authorized here.
- **Integration dependencies:** each consumer's authoritative event, recipient authorization and audit/outcome contract must operate with the selected email capability. Provider/test doubles do not prove real delivery.
- **Acceptance evidence:** authorized tests for all applicable purpose, recipient/content, committed/unknown/rejected/held, browser-response-loss, delayed/failed delivery, accessibility and duplicate-command/message cases; record what was actually tested and limitations. No tests or delivery behavior have been performed or verified for this draft.
- **Risk class:** high when implemented because it involves personal data, external integration and transaction-sensitive communications; applicable governance approval and security/privacy review remain required.

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Current specification/scope approval | **APPROVED — SDD-007 v0.3** as recorded in Registry §13; approval date not separately supplied, recorded 2026-11-13. |
| Historical specification approval | Exact SDD-007 v0.2 was approved within its documented scope and open-question boundaries; v0.1 approval remains separately preserved. |
| Implementation authorization | **NOT AUTHORIZED.** No provider, package, sender, queue, persistence, token, retry or deployment mechanism selected. |
| Verification/acceptance | **NOT PERFORMED.** No application, provider, browser, accessibility or security testing is claimed. |
| Gate / project status | Gate 2 remains historically IN PROGRESS; Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). No implementation or release authorization follows. |

