# SDD-009 — Public Guest Booking, Alternatives and Accessible Confirmation

> **Status: APPROVED — SDD-009 v0.2**, individually within its documented scope. The Product Owner's explicit decision in the ChatGPT Gate 2 continuation conversation is the approval source; approval date not independently supplied, recorded 2026-11-13. v0.1 was returned for correction; v0.2 adds the AC-018 selection summary. No implementation, verification or release authorization follows.

| Field | Value |
|---|---|
| Date / provenance | 2026-11-13; bounded documentation drafting |
| Owner | Product Owner for journey/policy; engineering and qualified security, privacy and accessibility reviewers for design and verification. Named reviewers remain unassigned. |

## Purpose and scope

Provide guest and registered customers an accessible booking journey using actual available choices, explicit submission and truthful confirmation. Guest access never requires an account. **In scope:** selection, alternatives, details, review, submission, resulting states and reusable confirmation/eligible QR presentation. **Out of scope:** policy configuration (SDD-004/005), authoritative integrity (SDD-006), delivery mechanism (SDD-007), proof (SDD-008), account lifecycle (SDD-010), staff lookup/attendance (SDD-019), UI technology or physical design.

## References

Effective [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md), unchanged [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md) and [traceability 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md): FR-002/003/005/010/018/022, NFR-006/007/009, BR-001/002/003/005/006/010, UJ-001, AC-001/002/005/006/013/016/018/022/023/024. [Registry](SDD_REGISTRY.md) and [decisions](../decisions/DECISION_REGISTER.md) D-045/065/066/070/094/095/098/106–111 apply within their recorded scope. D-094 citation is limited to effective v0.8, not adoption of additional proposed wording. SDD-004/005/006/007/008/023 supply contracts; each dependency retains its own exact-version approval and open questions.

## Expected behavior and proposed acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-009-C01 | Given a user without an account, when booking is offered, then guest booking remains available; registered users use the same effective eligibility, availability, capacity and duplicate policies without account priority. |
| SDD-009-C02 | Given booking choices change, when availability is presented, then an accessible live selection summary updates to reflect the tentative service, date and time choices. Only currently derived choices and permitted actual alternatives are shown; if none exist, communicate that state without inventing an alternative. Neither displayed availability nor the summary holds capacity or represents an established reservation. |
| SDD-009-C03 | Given booking details, when the user reviews them, then approved common and service-specific fields distinguish booker and attendee as applicable; validation and visibility follow SDD-004 and service policy, and submission is explicit. |
| SDD-009-C04 | Given stale availability or prohibited duplicate, when final SDD-006 checks reject submission, then no confirmation or partial booking is presented and a clear accessible result permits an appropriate new selection. A permitted warning requires explicit accessible acknowledgement; blocking cannot be bypassed. |
| SDD-009-C05 | Given a request whose authoritative result is unknown, when the response is lost, then neither success nor rejection is claimed and the same intent is reconciled before an unsafe retry. |
| SDD-009-C06 | Given established successful booking, when confirmation is presented, then it is readable on screen, printable and screenshot-friendly and contains reference, service, date/time, location/arrival, status, management instructions and QR/reference guidance. QR/reference does not itself establish identity, authority or attendance. |
| SDD-009-C07 | Given an established outcome, when eligible purpose-limited email is delayed or fails, then the booking and full accessible confirmation remain valid, and delivery failure does not trigger a repeat command or guarantee inbox receipt. |
| SDD-009-C08 | Given any form, alternative, warning, rejection or unknown state, when used with keyboard, touch or assistive technology, then SDD-023 applies; required evidence matches the authoritative outcome and avoids unnecessary disclosure. |

## Open questions and dependencies

| ID / owner | Decision and timing |
|---|---|
| BOOK-Q01 / Product Owner and service owner | Exact fields, eligibility, alternatives and visibility depend on SDD-004/005; resolve before affected client configuration and journey implementation. |
| BOOK-Q02 / engineering, security, privacy | Same-intent recovery, QR presentation and disclosure boundaries depend on SDD-006/008/019; resolve before affected implementation. |
| BOOK-Q03 / UX/accessibility and Product Owner | Confirmation layout, accessible error wording and permitted channels remain open; review before rendered journey acceptance. |

## Plan, verification and approval

High-risk integration requires exact-version specification approval, approved shared contracts, policy values and separate implementation authority. Future authorized tests cover guest/account parity, stale and no-choice cases, explicit warning, cross-path integrity, lost response, all confirmation formats, email failure and human/automated accessibility review using synthetic data. D-070 is a future integrity test, not a latency target or a result. No tests or specialist reviews have been performed; feature acceptance is pending.
