# Follow Up Stakeholder Validation Interviews

Three follow-up reviews of the appointment management requirements baseline v0.4, conducted on October 29, 2026.

## Business Owner

**Participant role:** Business Owner / Managing Director (Multi-Services Salon & Spa)  
**Review date:** October 29, 2026  
**Interview type:** Follow-up requirements validation  
**Requirements baseline:** v0.4

### Responses

#### 1. Daily Operations Fit

> “Yes, overall it fits our daily rhythm well, but what’s missing is clear visibility into clean-up and prep time between long services. If a client gets hair coloring, my stylist needs 15 minutes after to clean the station before the next person sits down. If the system books back-to-back without buffers, the afternoon schedule will collapse.”

#### 2. Capacity Rules

> “Capacity has to be determined by a combination of staff member availability and physical station/room capacity. A stylist can only handle one person at a time, and we only have three massage beds. If all beds are taken, even an available therapist can't do anything.”

#### 3. Duplicate Detection

> “Match by mobile number and date. If someone tries to book the same mobile number for two different slots on the exact same day, flag it immediately or ask 'You already have an appointment today at 2:00 PM, do you want to add another?'”

#### 4. Permissions and Roles

> “Front desk receptionists should be able to book, cancel, reschedule, and mark attendance. But ONLY managers or owners should be allowed to grant discounts, approve refunds, or overbook a slot when a day is marked 100% full.”

#### 5. Assisted Booking, Walk-ins, and Printable Rosters

> “Super useful—essential, actually! Half our clients still book over Messenger or phone, so assisted booking is a must. And printing the morning manifest at 8:00 AM is our exact safety net whenever the local internet drops.”

#### 6. Outage Behavior

> “The front desk must be able to view that printed morning list, write down new walk-ins or arrivals with a physical pen, and then do a quick batch-update in the system when Wi-Fi comes back.”

#### 7. Configurable Rules

> “Deposit rules! For standard 30-minute haircuts, no deposit needed. But for 3-hour chemical hair treatments or spa packages, we need a configurable rule that requires a GCash deposit before the slot locks in.”

### Suggested Changes

- Add service-level buffer time padding (mandatory clean-up/setup gaps between appointments).
- Add hardware/station constraint mapping alongside staff availability (e.g., massage bed caps).
- Allow configurable deposit requirements per service category.

### Overall Assessment

**Acceptable with changes**

### Unresolved Concerns

- How GCash transaction reference numbers will be verified without manual front-desk review.

### Evidence Notes

- Summarized from in-person follow-up discussion.
- Participant verbally confirmed that the proposed workflow solves their major double-booking headaches.

## Receptionist

**Participant role:** Lead Front Desk Receptionist  
**Review date:** October 29, 2026  
**Interview type:** Follow-up requirements validation  
**Requirements baseline:** v0.4

### Responses

#### 1. Daily Operations Fit

> “It makes my job much easier, especially seeing who is sitting in the lobby versus who is already inside with a staff member. What's missing is a super fast search bar. When 5 people walk in at once, I need to type just three letters of a name or mobile number and hit Enter.”

#### 2. Capacity Rules

> “Per staff member and time slot. I need to see at a glance if Stylist A is free at 3:00 PM even if Stylist B is busy.”

#### 3. Duplicate Detection

> “Warn us immediately if the same name and mobile number appear twice in one week. Sometimes clients forget they already booked for Friday and try to book again for Saturday.”

#### 4. Permissions and Roles

> “Let reception staff move appointments around when clients call to reschedule. Don't make us ask the manager every time a client wants to come 30 minutes later. Only lock us out if it means overbooking a full day.”

#### 5. Assisted Booking, Walk-ins, and Printable Rosters

> “Yes! The 'Add Walk-In' button needs to take less than 10 seconds. If I have to fill out 10 required fields for a walk-in who just wants a quick 15-minute trim, a line will build up out the door.”

#### 6. Outage Behavior

> “I print the day's roster every morning. When power or internet dies, I check names off on paper. When internet returns, give me a single 'Reconciliation View' with simple checkboxes so I can update 40 people's arrival statuses in two minutes.”

#### 7. Configurable Rules

> “Late grace periods! We need to set a 15-minute grace period rule. After 15 minutes, the system should highlight their name in yellow so I know I can give their slot to a waiting walk-in.”

### Suggested Changes

- Optimize walk-in creation form to require minimal fields (Name + Mobile + Service only).
- Include a streamlined "Post-Outage Batch Reconciliation" checklist screen.
- Add a visual grace-period expiration timer on active lobby appointments.

### Overall Assessment

**Acceptable with changes**

### Unresolved Concerns

- Need to ensure the desktop interface remains fast when switching between chat apps and the booking screen.

### Evidence Notes

- Summarized immediately after a 20-minute screen walkthrough.
- Participant expressed strong satisfaction with the proposed arrival status color tags.

## Customer

**Participant role:** Customer / Appointment Booker (Proxy Booker for Family)  
**Review date:** October 29, 2026  
**Interview type:** Follow-up requirements validation  
**Requirements baseline:** v0.4

### Responses

#### 1. Booking Without Account

> “100% yes! I hate having to create a username and password just to book a haircut or a document request. Just ask for my mobile number and email, send a quick SMS verification code, and let me book.”

#### 2. Post-Booking Information

> “I want ONE single text message or email containing: Date, Time, Exact Address/Branch, What Documents or Items to Bring, a Reference Code, and a direct link to reschedule or cancel if plans change.”

#### 3. Confirmation Preference

> “A booking reference number and a screenshot-friendly confirmation card on my phone screen. QR codes are great for quick scanning, but I always take a screenshot anyway in case I lose mobile signal inside the building.”

#### 4. Cancellation and Rescheduling Expectations

> “I expect a simple 'Reschedule / Cancel' link inside my SMS or email confirmation. If I click it at least 24 hours in advance, it should let me pick a new date without making me call or explain why.”

#### 5. Booking for Others

> “Yes, constantly! I book for my senior parents and younger relatives. The booking screen MUST ask: 'Are you booking for yourself or someone else?' If I choose 'Someone else', it should ask for their legal name so the receptionist doesn't get confused when my parent walks in.”

#### 6. Confusing, Inconvenient, or Unsafe Factors

> “Asking for unnecessary personal information—like uploading a photo of my government ID just for a basic commercial service. Also, vague instructions about where to go or what to bring when I arrive.”

#### 7. Full Schedule Behavior

> “Show me the next available dates immediately! Don't just say 'Fully Booked' and leave me hanging. Give me a 'Join Waitlist' button or show open slots at nearby branches.”

### Suggested Changes

- Ensure guest checkout / no-account booking is the default option.
- Explicitly design the booking confirmation page as a clean, high-contrast, screenshot-friendly digital pass.
- Include a clear "Booking for Someone Else" toggle with separate Booker and Attendee fields.

### Overall Assessment

**Acceptable with changes**

### Unresolved Concerns

- Customer fears that automated waitlists might spam their phone if multiple slots open up at once.

### Evidence Notes

- Responses recorded from a verbal review of proposed client-facing screens.
- Participant confirmed willingness to use the system if account creation is omitted.
