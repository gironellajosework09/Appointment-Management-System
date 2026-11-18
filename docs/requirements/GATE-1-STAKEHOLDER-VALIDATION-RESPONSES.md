# Gate 1 Validation and Exit Record

## Session Information for VAL-001

| Field | Details |
| --- | --- |
| Session date | October 29, 2026 |
| Time | 10:00–10:45 AM |
| Participant | Mang Dante |
| Role | Owner and Managing Director |
| Business | Dante’s Barber & Salon |
| Relevant experience | Eight years running a busy neighborhood barbershop and salon with five staff members in Candon City |
| Facilitator | Product Owner / Lead Analyst |
| Review method | In person |
| Requirements version | Requirements v0.7 (DRAFT) |
| Materials reviewed | VAL-001 MVP scope, booking flow, double-booking prevention, walk-in handling, and manual outage paper manifest workflow |
| Limitations or conflicts of interest | None reported; participant is an independent local business owner |

## VAL-001 — Target Business and MVP Validation

### Interview Responses

#### Q1. How do customers currently book appointments?

> “Mostly through our Facebook page inbox (Messenger) and phone calls. Some customers also walk straight in, especially on weekends or holidays, and wait on our benches.”

#### Q2. What problems occur with the current booking process?

> “The biggest headache is double-booking. Sometimes my receptionist takes a booking over the phone while I’m replying to a Messenger chat, and we end up assigning the same barber to two people at 2:00 PM. Also, people ghost us a lot—they book a slot, we turn away walk-ins, and then they just don’t show up.”

#### Q3. Would online booking with staff-assisted booking help?

> “Yes, definitely. Having one central calendar that stops us from double-booking would save us so many arguments. And since a lot of our older or regular customers still prefer calling or messaging, staff-assisted booking is an absolute must so we can type it in for them.”

#### Q4. How are staff availability, service duration, and daily capacity managed now?

> “Right now, it's all in our heads and written down in a spiral notebook. We know a haircut takes 30 minutes and a hair color takes 2 hours, but during rush hours, mistakes happen easily.”

#### Q5. Which proposed MVP features would be most useful?

> “The real-time schedule locking to prevent double-booking, the walk-in registration so we can track people sitting in our shop, and the printable daily roster. That paper sheet is our lifesaver when the internet or signal drops during heavy rains.”

#### Q6. Is an essential feature missing from the MVP?

> “Well, automated text or Messenger reminders would have been great because people forget their schedules, but I see that's deferred for now. For the MVP, as long as we can print the daily list and manually message people, we can manage.”

#### Q7. Does the system fit without payments, automated reminders, or multi-branch support?

> “Yes, it fits. We don't have multiple branches anyway, and we can handle GCash or cash payments at the counter ourselves. We just need the core scheduling and walk-in tracking to work smoothly.”

### Validation Findings

- **Problems confirmed:** Double-bookings across chat and phone channels, customer no-shows, and stress from manual tracking.
- **Requirements supported:** Guest booking, staff-assisted entry, service and staff capacity limits, conflict prevention, walk-in logging, and printable daily manifests.
- **Requirements challenged:** None within MVP scope. Automated messaging was noted as absent but accepted as deferred.
- **Missing requirements:** None identified for basic barbershop and salon operations.
- **Overall assessment:** Highly favorable; addresses immediate operational problems.
- **Limitation:** Based on one single-location barber and salon workflow.
- **Provisional disposition:** **PASS**

## VAL-002 — Public User Booking Workflow

### Interview Responses

#### Q1. How would you book an appointment?

> “I’d open the link on my phone, pick a barber, choose 3:00 PM tomorrow, type my name and mobile number, check what I need to know, and hit confirm. Then I’d take a screenshot of the confirmation code just in case.”

#### Q2. Which part seems confusing or difficult?

> “None really, as long as it doesn't force me to create a username and password. If I have to remember a password to get a haircut, I won't use it.”

#### Q3. What personal information would you provide?

> “Just my full name and mobile number. You don't need my home address or my ID just to cut my hair.”

#### Q4. How would you save or present the confirmation?

> “A screenshot on my phone gallery or an SMS text message with a reference code. Mobile data inside buildings can be unstable, so offline screenshots are best.”

#### Q5. How should a lost reference or QR code be recovered?

> “I'd just tell the receptionist my mobile number and name so they can look it up in their system.”

#### Q6. How should cancellation or rescheduling work?

> “There should be a simple link in the confirmation text or email where I can click 'Reschedule' or 'Cancel' without having to call.”

#### Q7. What should appear when a preferred slot is unavailable?

> “It should immediately show the next available times on that same day or the next day, instead of just saying 'Error' or 'Full'.”

#### Q8. Would the process work on your usual device?

> “Yes, very easy on an ordinary Android phone. Older customers might struggle a bit, which is why having staff book for them over the phone is important.”

### Validation Findings

- **Workflow understood:** Yes.
- **Confusing steps:** None, provided account creation is omitted.
- **Privacy concerns:** Strong opposition to collecting addresses or IDs for routine commercial services.
- **Suggested improvements:** Mobile-number lookup and a confirmation designed for screenshots.
- **Requirement affected:** Guest checkout (D-041/v0.7 MVP baseline) validated.
- **Limitation:** Tested with a tech-literate adult user.
- **Provisional disposition:** **PASS**

## VAL-003 — Business and Front-Desk Workflow

### Interview Responses

#### Q1. What should happen during a double-booking attempt?

> “The system must block the second person instantly and show a clear message like 'This slot was just reserved, please choose another time'.”

#### Q2. Should an alternative schedule be offered?

> “Yes, show them the next open slot right away so they don't leave the page.”

#### Q3. How is a walk-in handled when the schedule is full?

> “We put them on a waiting bench and tell them we’ll squeeze them in if someone cancels or if a barber finishes early.”

#### Q4. When may a supervisor override capacity?

> “Only when it's an emergency or for a long-time regular customer who really needs attention before an event. My front desk shouldn't have that power—only I or my senior manager can approve an overbook.”

#### Q5. What should an override record contain?

> “Who approved it, why they overbooked (like 'VIP regular'), and the exact time it was added.”

#### Q6. Who may modify appointments?

> “Front desk staff can reschedule or cancel ordinary bookings, but only managers can delete records or force overrides.”

#### Q7. What restrictions or approvals should apply?

> “Changes should be blocked if it's less than 1 hour before the appointment time, unless approved by management.”

#### Q8. Is a printed roster practical during an outage?

> “Extremely practical. That's what we already do every morning. Print it at 8:00 AM, use a pen when the Wi-Fi dies.”

#### Q9. How should paper changes be reconciled?

> “When the internet comes back, my receptionist should look at the paper sheet and quickly check off who arrived or cancelled on a simple computer screen.”

#### Q10. Which actions belong to receptionists and managers?

> “Receptionists: booking, checking in, rescheduling normal slots. Managers: overrides, deletions, policy changes.”

#### Q11. What operational situation is missing?

> “Buffer times! If a client gets hair bleaching, the chair is messy for 15 minutes after. The system needs to block off cleanup time so the next client isn't kept waiting.”

### Validation Findings

- **Operational workflows:** Accepted with inter-appointment buffer times added.
- **Business rule to clarify:** Staff and manager permission boundaries.
- **Staff permission concern:** Reception staff must not perform unauthorized capacity overrides.
- **Requirements affected:** Role-based access control and buffer-time configuration.
- **Limitation:** Based on a single-shop operational model.
- **Provisional disposition:** **PASS WITH CHANGES** — add buffer-time configuration.

## VAL-004 — Privacy, Security, and Data Integrity Review

### Review Assessments

#### Q1. Are the proposed data categories necessary and proportionate?

> **Assessment:** Yes. Limiting ordinary commercial scheduling data to name, mobile number, service, and timestamp was assessed as proportionate.

#### Q2. Which authentication, authorization, and recovery safeguards are required?

> **Assessment:** Role-based access control separating staff actions from administrative overrides, with secure reference-number lookups.

#### Q3. Could QR codes or references expose information or permit unauthorized actions?

> **Assessment:** QR codes and reference tokens should contain only opaque record identifiers, not personal details. They should serve only as lookup tools.

#### Q4. Are the proposed audit logs sufficient and privacy-conscious?

> **Assessment:** Yes. Audit trails should identify who changed schedules or approved overrides without recording unnecessary personal information.

#### Q5. Which retention, deletion, notice, and legal-basis questions remain?

> **Assessment:** A 12–24 month retention and subsequent anonymization or deletion policy must be formally configured for each tenant installation.

#### Q6. How should printed rosters and exports be protected?

> **Assessment:** Printed rosters contain names and phone numbers. Physical handling rules should require secure end-of-day disposal, such as shredding.

#### Q7. Are concurrency, capacity, and duplicate-booking rules defined sufficiently?

> **Assessment:** Database-level safeguards are required to prevent race conditions during simultaneous booking requests.

#### Q8. What risks exist in operator access?

> **Assessment:** Operators with database access could potentially read tenant personal information. Default masking and time-limited, administrator-approved emergency access were proposed as mitigations.

#### Q9. What must change before design, implementation, or deployment?

> **Assessment:** Use identifiers without personal information in QR payloads and require tenant-level retention cleanup jobs.

#### Q10. What is the overall conclusion?

> **Assessment:** PASS, subject to implementing operational safeguards for printed records and technical safeguards against simultaneous-booking conflicts.

### Reviewer Finding FND-004-01

- **Description:** Printed daily manifests expose customer personal information physically in the shop.
- **Affected area:** Outage continuity and data protection.
- **Significance:** Medium.
- **Recommended action:** Establish end-of-day secure disposal rules for paper rosters.
- **Completion stage:** Before deployment, in operational guidelines.
- **Reviewer conclusion:** Acceptable with procedural mitigation.
- **Provisional disposition:** **PASS**

## VAL-005 — Quality and Performance Requirements

### Review Responses

#### Q1. Is the appointment volume realistic?

> **Response:** Yes. The proposed range of 20–100 appointments per day matches the expected SME traffic.

#### Q2. Is a 50-concurrent-request scenario appropriate?

> **Response:** Yes. It is suitable for stress-testing local server instances during peak booking periods.

#### Q3. What response times are acceptable?

> **Response:** Under three seconds for page loads and calendar lookups; under five seconds for final booking confirmation.

#### Q4. Under what conditions should those times be measured?

> **Response:** Standard 4G/LTE conditions on mid-range Android devices.

#### Q5. Which devices and browsers should be tested?

> **Response:** Mobile Chrome on Android first, Mobile Safari on iOS, and desktop Chrome and Edge for staff stations.

#### Q6. What if a request times out or is submitted twice?

> **Response:** Use idempotency tokens to prevent duplicate writes and show clear timeout feedback.

#### Q7. Who owns and verifies the evidence?

> **Response:** An independent QA reviewer and the technical lead.

#### Q8. Which targets are approved now?

> **Response:** Page loads under three seconds and 50 simultaneous requests are approved as baseline design criteria.

### Validation Findings

- **Targets supported:** Response times, Android/Chrome priority, and concurrency baseline.
- **Provisional disposition:** **PASS**

## VAL-006 — System Operator Access Review

### Review Responses

#### Q1. Which tasks require no customer-record access?

> **Response:** Uptime monitoring, error-log analysis, patch deployment, server backups, and resource scaling.

#### Q2. Who authorizes exceptional customer-data access?

> **Response:** The client business administrator or owner.

#### Q3. What reason, scope, and duration are required?

> **Response:** An explicit technical troubleshooting reason, access scoped to a single booking or tenant identifier, and a maximum duration of four hours.

#### Q4. How is access logged and revoked?

> **Response:** Log all access in an audit trail and revoke it automatically when the approved period ends.

#### Q5. What happens when access expires?

> **Response:** Revoke the relevant read access immediately and send an audit summary to the business owner.

#### Q6. Should emergency access exist?

> **Response:** Yes, under a “break-glass” process that immediately alerts the administrator and requires a post-incident review.

#### Q7. What if the client refuses access or cannot be contacted?

> **Response:** Customer-data access remains blocked. Troubleshooting is limited to system telemetry without personal information.

#### Q8. What needs further qualified review?

> **Response:** None identified in this review; the proposed time-limited, owner-approved model was considered satisfactory.

### Validation Findings

- **Support boundary:** Technical maintenance without default visibility into personal information.
- **Exceptional access:** Addressed through owner approval, time limits, auditing, and alerts.
- **Provisional disposition:** **PASS**

## Consolidated Validation Summary

| Validation | Participant role | Outcome | Evidence reference |
| --- | --- | --- | --- |
| VAL-001 | Business owner/manager (Mang Dante) | PASS | EVD-008 |
| VAL-002 | Public user (customer proxy booker) | PASS | EVD-009 |
| VAL-003 | Front-desk staff/manager | PASS WITH CHANGES | EVD-010 |
| VAL-004 | Qualified privacy/security reviewer | PASS | EVD-011 |
| VAL-005 | Product Owner / Technical Reviewer | PASS | EVD-012 |
| VAL-006 | Product Owner / System Operator | PASS | EVD-013 |

## Findings Requiring Action

### Finding 1 — Inter-Appointment Buffer Time

- **Affected requirements:** Scheduling and capacity rules (VAL-003).
- **Required action:** Add configurable service buffer and cleanup time to prevent back-to-back scheduling overruns.
- **Responsible owner:** Lead Product Analyst / Architect.
- **Target gate:** Before Gate 2 architecture freeze.
- **Disposition:** Approved for incorporation into the v0.8 requirements baseline.

### Finding 2 — Printed Roster Security

- **Affected requirements:** Outage continuity and data protection (VAL-004).
- **Required action:** Establish secure end-of-day disposal guidelines for printed rosters containing customer information.
- **Responsible owner:** Operations Lead.
- **Target gate:** Operational deployment readiness.
- **Disposition:** Approved as a procedural operational rule.

## Product Owner Requirements Baseline Review

- [x] Review the exact Requirements Specification version.
- [x] Check consistency with approved decisions D-041 through D-076, as applicable.
- [x] Review all validation findings.
- [x] Resolve or formally disposition blocking issues.
- [x] Review requirement status and acceptance criteria.
- [x] Review unresolved assumptions and business-rule parameters.
- [x] Review risk ownership, treatments, and residual risks.
- [x] Review measurable quality targets and evidence ownership.
- [x] Confirm that deferred features have not returned to MVP scope.
- [x] Record an explicit decision on the exact requirements baseline.

**Baseline approval decision:** APPROVE

**Exact version reviewed:** Requirements v0.7 (DRAFT), with the agreed v0.8 buffer-time adjustment.

**Recorded rationale:** All six validation sessions passed or passed with changes. The recorded decision states that MVP scope remains bounded and that privacy and outage procedures are addressed.

**Decision date:** October 29, 2026

**Outstanding condition:** Add service buffer-time parameters to the scheduling rules before architecture design.

## Gate 1 Exit Review

- [x] Required validation evidence has been registered and reviewed.
- [x] Mandatory qualified review is complete.
- [x] Outstanding blockers have been resolved or formally dispositioned.
- [x] Requirements baseline has received separate explicit approval.
- [x] Risks and assumptions have been reviewed.
- [x] Requirements traceability is consistent.
- [x] Gate 1 exit criteria have been checked against the Gate Register.
- [x] Product Owner has made a separate Gate 1 exit decision.

**Gate 1 exit decision:** APPROVE

**Recorded rationale:** Discovery and stakeholder validation covered business, public-user, staff, privacy, performance, and operator concerns. The recorded decision states that the MVP scope boundary was maintained.

**Decision date:** October 29, 2026

**Remaining conditions blocking Gate 1:** None recorded.

**Gate 2 authorization:** Proceed to Gate 2 — Architecture and Technical Design.

## Reconciliation Addendum — 2026-10-29

This submitted record has been preserved as source content and reconciled against
the approved Gate 1 controls. The provisional PASS/PASS WITH CHANGES outcomes and
the claimed EVD-008–EVD-013 references are not, by themselves, registered evidence,
requirement approval, or Gate 1 approval. EVD-008–EVD-013 are registered in
`docs/evidence/GATE-1-EVIDENCE.md` with the missing provenance, qualification, and
review limitations recorded.

### Activity reconciliation

| Activity | Submitted outcome | Reconciled status | Reason |
|---|---|---|---|
| VAL-001 | PASS | Incomplete | One business owner is recorded, but the required separate front-desk participant and representative-validation basis are not established. |
| VAL-002 | PASS | Incomplete | Session date, method, facilitator, selection basis, and exact v0.7 walkthrough provenance are not recorded. |
| VAL-003 | PASS WITH CHANGES | Incomplete | Buffer time is already covered by D-060/FR-001; the proposed one-hour cutoff is not an approved universal policy and the required participant set is not established. |
| VAL-004 | PASS | Incomplete | Reviewer qualification, independence, jurisdiction, and completed privacy/security checklist are not recorded. |
| VAL-005 | PASS | Incomplete | Proposed response-time targets and idempotency tokens are not approved by the existing decisions, and review/evidence metadata is incomplete. |
| VAL-006 | PASS | Incomplete | The four-hour limit and break-glass process are proposals; D-075 leaves duration and emergency procedure unresolved. |

### Requirement disposition

| Submitted finding | Disposition |
|---|---|
| Configurable inter-appointment cleanup/buffer times | Existing requirement already covered by D-060 and FR-001/BR-005. No v0.8 wording change is required. |
| One-hour cancellation/rescheduling cutoff | New client-policy proposal. Keep unresolved under Q-020; do not create a universal default. |
| Secure lost-booking recovery | Existing recovery question QR-L05 and existing FR-007/AC-009 coverage. Exact verification and recovery mechanism remain Gate 2/security review work. |
| Alternative slot suggestions | Existing requirement covered by D-066 and FR-018/AC-013. No new requirement is needed. |
| Retention period and secure printed-roster disposal | D-050/D-074/NFR-009 already require controlled retention/disposal without a fixed legal period. The proposed 12–24 months and shredding practice remain unapproved policy proposals. |
| Concurrency safeguards and idempotency | Integrity and contention are covered by D-044/D-070, NFR-006/NFR-008, and AC-005. Idempotency-token mechanics remain a later design decision. |
| Four-hour operator access | Conflicts with the unresolved duration under D-075. Keep pending qualified review and Product Owner disposition. |
| Emergency break-glass access | Security-sensitive new exception proposal. Keep pending; no exception or procedure is approved by this record. |

Accordingly, no requirements v0.8 baseline is approved or created by this
submission. The only supported refinement is already present in the v0.7 working
text; all other proposed changes require qualified review, explicit disposition,
or later-gate design. The baseline approval and Gate 1 exit claims in this source
record are not independently supported by the required evidence and do not change
the Gate Register status.
