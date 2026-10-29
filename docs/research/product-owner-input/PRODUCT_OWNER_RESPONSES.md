# Appointment Management System Validation Answers

These answers describe the proposed target market, customer experience, staff workflows, privacy controls, quality targets, and system operator access.

## VAL-001 — Target Customers

### 1. Which businesses should the product serve first?

Start with small, appointment-based Philippine service businesses that have regular customer traffic and need to reduce no-shows and scheduling confusion.

**Initial target segments:**

1. **Salons, barbershops, nail spas, and aesthetic clinics:** Frequent bookings, walk-ins, Messenger inquiries, deposits, and no-shows.
2. **Small clinics, dental clinics, and wellness centers:** Reminders, eligibility or document checks, and predictable patient flow.
3. **Local service centers:** Repair shops, tutoring centers, pet groomers, spas, and similar scheduled services.

Large hospitals, government agencies, and enterprises requiring deep integrations are later-stage segments. The initial businesses commonly use Messenger, Viber, phone calls, walk-ins, and manual calendars, making double-bookings and no-shows immediate problems.

### 2. Is there a real business or potential customer to consult?

There is no committed design partner yet. Discovery has gathered four stakeholder perspectives:

- **REC-001:** Front-desk receptionist in a high-volume multi-service office.
- **BO-001:** Business owner or manager of an appointment-based SME.
- **GOV-001:** Government or public-service administrator.
- **CUS-001:** Customer and appointment booker.

The next step is to recruit one or two real pilot businesses, preferably a salon or small clinic. A government or LGU frontline office could be consulted separately for usability testing and requirements validation.

### 3. Which appointment problems should the product solve?

The recurring problems are:

- Double-bookings caused by shared calendars, spreadsheets, and simultaneous chat bookings.
- No-shows and late arrivals caused by weak reminders and unclear cancellation rules.
- Manual scheduling work, including repeated Messenger inquiries and calendar updates.
- Unclear requirements, schedule changes, and waiting times.
- Walk-in confusion and unclear priority handling.
- Interruptions caused by internet, power, or system failures.
- Weak records of arrivals, completed services, and no-shows.

The first version should focus on real-time scheduling, reminders, walk-in and queue support, role-based staff access, and practical offline continuity.

## VAL-002 — Public User Experience

### 1. How should customers book appointments?

Customers should be able to:

1. Choose a business, branch, service, staff member if applicable, date, and time.
2. Enter only the details needed for the service, such as name and mobile number.
3. Review any requirements before confirming.
4. Confirm the booking.
5. Receive the date, time, location, requirements, and reference number.

The booking page should be simple, mobile-first, and usable on entry-level Android phones. Staff should also be able to create bookings for customers who call, message through Messenger or Viber, or visit in person.

**Device priority:** Optimize for Android and Chrome first while supporting iPhone and Safari. [Statcounter mobile browser data for the Philippines](https://gs.statcounter.com/browser-market-share/mobile/philippines/statcounter.com)

### 2. How should customers receive and retrieve confirmations?

Send a confirmation immediately through an available channel:

- SMS for a short confirmation and reminder.
- Email for fuller details when an email address is provided.
- Messenger or Viber where the business already uses those channels.
- A confirmation page that can be saved or screenshotted.

Each booking should have a unique reference number and may include a QR code. Customers should be able to retrieve a booking using their mobile number with verification, or their reference number.

A confirmation should show:

- Business name, branch, and location.
- Service and staff member, if applicable.
- Date and time.
- Required documents or preparation.
- Cancellation and rescheduling instructions.
- Reference number or QR code.
- Contact details for assistance.

A QR code can speed up booking lookup, but it should not be treated as proof of identity by itself.

### 3. How should customers cancel, reschedule, or recover a lost confirmation?

Offer three routes:

1. **Self-service:** A link in the confirmation to view, reschedule, or cancel.
2. **Verified recovery:** Mobile number and reference number, or a one-time verification code.
3. **Assisted recovery:** Staff locate the booking by name and mobile number after the customer calls, messages, or visits.

Before a change, show the business’s cutoff rules and any deposit consequences. After a cancellation, show the next available time or an enabled waitlist. Send an updated confirmation after every change. Warn customers when a similar active booking may already exist.

## VAL-003 — Staff Workflows and Business Rules

### 1. What should staff be allowed to do?

**Reception staff should be able to:**

- Create assisted bookings.
- View daily and weekly schedules.
- Check in customers and record walk-ins.
- Issue queue numbers.
- Mark appointments completed, no-show, cancelled, or rescheduled.
- Send or resend confirmations and reminders.
- Add service-related notes.
- Correct obvious typing errors, with an audit record.

**Supervisors, managers, or owners should approve:**

- Overbooking and capacity exceptions.
- Refunds, deposit forfeitures, and fee waivers.
- Permanent deletion or major changes to appointment records.
- Access to sensitive customer information.
- Changes to service duration, capacity, pricing, and business policies.

Important actions should record who acted, when, and why.

### 2. What should happen when the schedule is full?

Prevent ordinary double-booking. When standard capacity is full, offer the next available slot, an enabled waitlist, or an allowed walk-in queue. Staff may request a supervisor override for urgent or exceptional cases.

Every override should record the reason, approver, timestamp, schedule marking, and reporting data. The system should distinguish standard, reserved priority, walk-in, and override capacity.

### 3. How should walk-ins and customers without internet be handled?

1. Reception creates a walk-in record with the customer’s name, mobile number if available, service, and arrival time.
2. The system issues a queue number.
3. Staff see queue order, estimated waiting time, and assigned staff or window.
4. A vacated appointment slot may be offered to a walk-in under the business’s rules.
5. Priority customers are flagged according to the organization’s policy.
6. Customers without internet can book by phone or in person, with staff entering the booking.

Queue updates should be available where possible, while the basic process must still work for customers without smartphones.

### 4. What should staff do during an internet outage?

The minimum fallback should allow staff to:

- Print or view the daily appointment manifest before opening.
- Check in customers on paper or through an available offline mode.
- Issue walk-in queue numbers.
- Record arrivals, completed services, no-shows, cancellations, and walk-ins.
- Note schedule changes and exceptions.
- Reconcile the records when connectivity returns.

Reconciliation should flag conflicts, including two customers claiming one slot or a booking changed both online and offline.

## VAL-004 — Privacy and Security

### 1. What customer information should be collected?

Collect only information needed to schedule, verify, communicate, and complete the appointment.

**Default information:**

- Full name and mobile number.
- Optional email address.
- Selected service, date, and time.
- Appointment status.
- Booking-related notes.
- Consent status for messages and data processing.

**Service-specific information, only when necessary:**

- Address, birthdate, or government ID details.
- Deposit or payment status.
- Representative or guardian details.
- Eligibility documents or checklist results.
- Health, government, or other sensitive information when there is a clear legal basis and appropriate safeguards.

Explain why information is requested. Do not collect sensitive information “just in case.” Philippine privacy guidance calls for a declared, legitimate purpose and an appropriate retention and disposal policy. [National Privacy Commission advisory opinion](https://privacy.gov.ph/wp-content/uploads/2022/01/NPC_AdvisoryOpinionNo._2017-024.pdf)

### 2. Who should be able to see customer information?

Access should be limited to what each person needs for their work.

| Role | Typical access |
| --- | --- |
| Reception staff | Contact and appointment details needed for frontline service |
| Service provider | Assigned appointments and relevant service notes |
| Supervisor or manager | Schedules, overrides, reports, and records needed for management |
| Business administrator | Configuration, user management, reports, and retention controls |
| System operator | Technical logs and system health by default; temporary customer-record access only when approved |
| Customer | Their own booking details and appointment management options |

Use role-based permissions, audit logs, and restrictions on sensitive fields. Staff should have a work-related reason to open customer records.

### 3. What should happen to information after an appointment?

Keep records only while they serve a legitimate operational or legal purpose. Then delete, anonymize, or archive them under a documented policy.

A proposed starting approach is to:

- Keep upcoming records while needed for service.
- Keep completed records for reporting and dispute resolution.
- Configure retention by business type and legal obligation; **12–24 months is a proposal, not a universal rule**.
- Delete or anonymize contact details when the retention period ends, unless a longer period is required.
- Allow verified export or secure deletion requests where applicable.

The retention period should not be hardcoded. [National Privacy Commission advisory opinion](https://privacy.gov.ph/wp-content/uploads/2022/01/NPC_AdvisoryOpinionNo._2017-024.pdf)

## VAL-005 — Quality and Performance

### 1. How many appointments should a typical business handle?

The initial working assumption is **20–100 appointments per day per location**:

- Small salon or clinic: 20–40.
- Busy salon, dental clinic, or multi-provider business: 40–80.
- High-volume multi-service office: 80–100 or more, plus walk-ins.

Design for at least **100 scheduled appointments and 20–30 walk-ins per day per location** without noticeable performance problems. Several staff members should be able to update bookings and check-ins at the same time.

### 2. Which devices and browsers should be supported?

**Customer devices:** Android phones, iPhones, and desktop computers.

**Staff devices:** Android phones and tablets, iPhones and iPads, and Windows laptops or desktops.

**Browser priority:**

1. Android with Chrome.
2. iPhone with Safari.
3. Windows with Chrome or Edge.

Include entry-level phones and weak connections in testing. [Statcounter mobile browser data for the Philippines](https://gs.statcounter.com/browser-market-share/mobile/philippines/statcounter.com)

### 3. What loading times are acceptable?

Under normal internet conditions, proposed targets are:

| Action | Target time |
| --- | --- |
| Booking page load | 2–3 seconds |
| Availability or calendar load | 2–3 seconds |
| Booking confirmation | 3–5 seconds |
| Staff schedule load | 2–3 seconds |
| Check-in action | 1–2 seconds |
| Booking search | 2–3 seconds |

During poor connectivity, show a loading state, prevent duplicate submissions, and provide cached or offline staff information where possible.

### 4. Who should test the system before release?

- A business owner or manager to validate policies, pricing, capacity, and reports.
- Reception staff to test daily booking, check-in, walk-ins, and rescheduling.
- Customers to test mobile booking, confirmation, reminders, cancellation, and accessibility.
- An independent QA tester to test edge cases, permissions, concurrency, and recovery.
- A qualified privacy or security reviewer to review data handling and access controls.
- A pilot business to use the system in a controlled live setting for one to two weeks.

Test on entry-level Android devices and weak connections. Include simultaneous bookings, walk-ins, proxy bookings, and offline reconciliation.

## VAL-006 — System Operator Access

### 1. What should a system operator be allowed to do?

**Allowed by default:**

- Install and configure the system.
- Monitor servers, databases, integrations, errors, uptime, performance, and backups.
- Apply updates and security patches.
- Restore backups during a major failure.
- Troubleshoot logs that do not reveal customer content.
- Assist with accounts and access configuration when authorized.

**Not allowed by default:**

- Browse customer names, contact details, notes, IDs, or payment details.
- Edit business records without authorization.
- Export customer data without approval.
- Access production customer data from an unapproved device or location.

### 2. Should operators see customer records by default?

**No.** Operators should normally see technical metadata such as error messages, timestamps, system logs, performance metrics, and appointment IDs without full customer details where feasible.

If a technical issue requires customer-record access, use a time-limited, purpose-specific request:

1. The operator states the reason and requested scope.
2. The business administrator approves or denies it.
3. Access is limited to specific records or a time range.
4. Access expires automatically, normally after 1–4 hours.
5. Viewed or changed records are logged.
6. The business receives an access summary.

### 3. Who approves exceptional access, and when does it end?

The business administrator or owner—not the requesting operator—should approve exceptional access.

1. The operator identifies an issue that cannot be resolved from logs.
2. The operator requests access with a purpose, scope, and duration.
3. The business administrator approves or denies the request.
4. The system grants temporary, scoped access.
5. The operator completes the work.
6. Access expires automatically.
7. Both parties can review the access log.

The default duration is **1–4 hours**, with a maximum of **24 hours** unless a new request is approved.

For a critical outage when the administrator is unavailable, a pre-authorized emergency process may grant limited access. It must notify the business immediately, log all activity, and require a post-incident review.