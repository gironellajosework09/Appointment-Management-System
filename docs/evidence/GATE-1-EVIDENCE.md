# Gate 1 Discovery Evidence Register — Appointment Management System

| Field | Value |
|---|---|
| Document status | DRAFT — discovery evidence preserved; development-stage closure recorded; genuine validation remains outstanding |
| Gate | Gate 1 (Requirements Discovery) — COMPLETE (APPROVED) |
| Record date | 2026-10-29 |
| Revision | 0.8 (2026-10-29 — D-082 closure recorded; evidence classifications unchanged) |
| Owner | Product Owner |
| Recorded by | AI assistant at the Product Owner's written instruction |

This register records existing research as discovery evidence under the evidence
schema in `docs/requirements/STAKEHOLDER_VALIDATION_PLAN.md` §6. Registration
does not establish representative sampling, formal stakeholder validation,
requirement approval. D-081 separately records the development-stage requirement
baseline and D-082 separately records Gate 1 exit; neither changes the evidence
classifications.

Under D-077–D-081, the development-stage requirements baseline may use explicitly
labeled assumptions. This does not change any EVD classification: simulated
material creates no EVD record, and VAL-001–VAL-006 remain incomplete real
validation activities.

## Gate 1 closure record

| Field | Value |
|---|---|
| Decision | D-082 |
| Approval status | `APPROVED (PO DECISION)` |
| Approval date | 2026-10-29 |
| Approver | Product Owner |
| Scope | Gate 1 exit and Gate 2 Architecture & Technical Design entry for documentation only |
| Authorization exclusions | No implementation, database changes, deployment, production access, or CEAP access |
| Evidence disposition | EVD-001–EVD-013 retain their original provenance and limitations; simulated material creates no EVD record |
| Follow-up | D-079 milestone obligations; Gate 3 design review; qualified independent privacy/security assessment before Gate 6 |

## 1. Evidence boundaries

- **Primary discovery evidence:** statements and workflow accounts obtained from
  real stakeholders and retained in REC-001, BO-001, GOV-001, and CUS-001.
- **AI-assisted research summaries:** BO-001, GOV-001, and CUS-001 summarize
  researcher notes with AI assistance. They are not verbatim transcripts.
- **Researcher interpretations:** analysis labeled as researcher observation or
  interpretation is secondary analysis, not a participant statement.
- **Illustrative practitioner discussions:** the forum-style material in the
  source is illustrative and is not registered as stakeholder evidence.
- **Product strategy recommendations:** proposed product directions in the source
  are recommendations, not research findings or approval records. Product Owner
  approval is recorded separately in the Decision Register.

The source contains no participant names needed for this work. This register does
not add personal identifying information.

## 2. Evidence records

### EVD-001 — Receptionist/front-desk discovery

| Field | Recorded value |
|---|---|
| Source and classification | REC-001; primary discovery evidence from a real receptionist/front-desk participant; accompanying researcher interpretations are secondary analysis |
| Known date | 2026-10-28 |
| Participant role | Receptionist / front-desk staff in a multi-services office |
| Research method | Direct in-person interview; note-taking permission recorded in the source |
| Facilitator | Not recorded |
| Records reviewed | REC-001 interview responses, summary notes, researcher interpretations, and listed follow-up questions |
| Relevant findings | Concurrent updates can create double bookings; staff-assisted booking is routine; service durations and capacity vary; supervisors may authorize exceptions; arrival and attendance statuses are distinct; printed daily rosters and later reconciliation support outages; reminders were requested |
| Contradictions / open matters | Exact capacity, exception, grace-period, no-show, notification-channel, and identity rules are organization-specific and are not adopted as universal defaults |
| Limitations | One recorded role and organization context; participant selection and representativeness not recorded; raw-note location and consent artifact not recorded; discovery interview was not a formal requirements walkthrough |
| Related activities | VAL-001 partially supported; VAL-002 partially supported; VAL-003 partially supported; VAL-005 partially supported |
| Affected records | FR-001–FR-004; FR-007–FR-008; FR-010; FR-013–FR-017; NFR-006–NFR-011; BR-001–BR-002; BR-005; BR-007–BR-009; UJ-001–UJ-003; UJ-005; AC-001; AC-005; AC-009; AC-011–AC-012 |
| Storage reference | `docs/research/interviews/ORGANIZED_INTERVIEWS.md` § "Receptionist Interview REC-001" |
| Approval / provenance | Registration as discovery evidence approved by the Product Owner; approval date not recorded. No stakeholder sign-off or requirement approval is claimed. |

### EVD-002 — Business-owner discovery

| Field | Recorded value |
|---|---|
| Source and classification | BO-001; primary discovery from a real business owner, represented through an AI-assisted summary of researcher notes; researcher interpretations are secondary analysis |
| Known date | 2026-10-28 |
| Participant role | Owner and managing director of a salon and wellness business |
| Research method | In-person discussion; handwritten notes summarized with AI assistance; note-taking permission recorded in the source |
| Facilitator | Not recorded |
| Records reviewed | BO-001 interview summary, completed notes template, and researcher observations |
| Relevant findings | Capacity depends on services, staff, equipment, duration, and buffers; concurrent channels cause double booking; staff handle routine changes while owner/supervisor approval is required for overbooking and other exceptions; proxy booking and flexible staff assistance occur; printed rosters support outages; clear reminders reduce manual work |
| Contradictions / open matters | Deposits, fees, VIP treatment, exact grace periods, waitlist order, messaging channels, and budgets are client policies and are not universal MVP defaults |
| Limitations | One recorded business-owner context; AI-assisted rather than verbatim; participant selection and representativeness not recorded; raw-note location and consent artifact not recorded; no formal journey walkthrough or sign-off |
| Related activities | VAL-001 partially supported; VAL-002 partially supported; VAL-003 partially supported; VAL-005 partially supported |
| Affected records | FR-001–FR-004; FR-007–FR-008; FR-010; FR-013–FR-017; NFR-004; NFR-006–NFR-011; BR-001–BR-002; BR-005–BR-009; UJ-001–UJ-003; UJ-005; AC-001; AC-005; AC-009–AC-012 |
| Storage reference | `docs/research/interviews/ORGANIZED_INTERVIEWS.md` § "Business Owner Interview BO-001" |
| Approval / provenance | Registration as discovery evidence approved by the Product Owner; approval date not recorded. No stakeholder sign-off or requirement approval is claimed. |

### EVD-003 — Government-supervisor discovery

| Field | Recorded value |
|---|---|
| Source and classification | GOV-001; primary discovery from a real government supervisor, represented through an AI-assisted summary of researcher notes; researcher interpretations are secondary analysis |
| Known date | 2026-10-28 |
| Participant role | Administrative/frontline-services supervisor in a regional government office |
| Research method | In-person interview; handwritten notes summarized with AI assistance; note-taking permission recorded in the source |
| Facilitator | Not recorded |
| Records reviewed | GOV-001 interview summary, completed notes template, and researcher observations |
| Relevant findings | Service-specific quotas and priority rules exist; QR/reference codes accelerate lookup but identity and eligibility require separate checks; frontline and supervisor permissions differ; changes and overrides need accountability; attendance states are distinct; daily printed manifests and post-outage reconciliation are operational safeguards |
| Contradictions / open matters | Government eligibility, priority lanes, statutory obligations, and public-service workflows are not requirements for the selected commercial MVP target; exact legal and retention rules require qualified review |
| Limitations | Secondary future target rather than the selected initial segment; one recorded government role/context; AI-assisted rather than verbatim; participant selection and representativeness not recorded; raw-note location and consent artifact not recorded |
| Related activities | VAL-001 contextual support only; VAL-003 partially supported; VAL-004 partially supported but not a legal/privacy review; VAL-005 partially supported |
| Affected records | FR-002; FR-004–FR-008; FR-013–FR-017; NFR-003; NFR-006; NFR-009–NFR-011; BR-003; BR-005–BR-009; UJ-002–UJ-003; UJ-005; AC-003–AC-005; AC-009–AC-012 |
| Storage reference | `docs/research/interviews/ORGANIZED_INTERVIEWS.md` § "Government Employee Interview GOV-001" |
| Approval / provenance | Registration as discovery evidence approved by the Product Owner; approval date not recorded. It does not validate the primary target segment or impose government requirements on the MVP. |

### EVD-004 — Consolidated customer discovery

| Field | Recorded value |
|---|---|
| Source and classification | CUS-001; consolidated primary discovery from several real customers, represented through an AI-assisted summary; not fictional, simulated, or attributable to one individual; researcher interpretations are secondary analysis |
| Known date | Individual interview dates not recorded; the source summary carries 2026-10-28, but that is not treated as every participant's interview date |
| Participant roles | Customers and appointment bookers, including proxy-booking experience; exact participant count and individual roles are not recorded |
| Research method | Consolidated interviews summarized from researcher notes with AI assistance; individual method and duration are not recorded |
| Facilitator | Not recorded |
| Records reviewed | CUS-001 consolidated responses, completed summary template, and researcher observations |
| Relevant findings | Customers need immediate and clear booking outcomes; guest and proxy booking reduce digital barriers; confirmations should identify date, time, place, requirements, and reference details; QR speeds record lookup but does not replace identity checks; cancellation/rescheduling need clear outcomes; customers value human fallback and data minimization |
| Contradictions / open matters | Service experiences span government and commercial contexts; channel preference, payment rules, identity requirements, and cancellation consequences vary; no individual response may be attributed from the composite record |
| Limitations | Exact participant count, individual dates, facilitator, sampling, consent artifacts, raw-note locations, and attribution are not recorded; AI-assisted composite cannot establish prevalence or representative validation; no formal draft-journey walkthrough occurred |
| Related activities | VAL-001 partially supported; VAL-002 partially supported; VAL-004 partially supported as privacy expectations only, not legal review; VAL-005 partially supported |
| Affected records | FR-002–FR-007; FR-010; FR-013–FR-014; NFR-003; NFR-007; NFR-009; BR-003; BR-006; BR-008; UJ-001–UJ-003; UJ-005; AC-002–AC-004; AC-006; AC-009–AC-010 |
| Storage reference | `docs/research/interviews/ORGANIZED_INTERVIEWS.md` § "Customer Discovery CUS-001" |
| Approval / provenance | Registration as discovery evidence approved by the Product Owner; approval date not recorded. No representative-sampling or formal validation claim is made. |

### EVD-005 — Business owner / managing director follow-up

| Field | Recorded value |
|---|---|
| Source and classification | `FOLLOW_UP_INTERVIEWS.md` — supplied follow-up requirements-validation summary; treated as reported follow-up evidence, not independently verified by this register |
| Known date | 2026-10-29 |
| Participant role | Business Owner / Managing Director, multi-services salon and spa |
| Research method | Summarized in-person follow-up discussion; independent raw notes, recording, facilitator, consent artifact, and participant identity are not supplied |
| Records reviewed | Requirements baseline v0.4 follow-up responses, suggested changes, assessment, unresolved concern, and evidence notes |
| Relevant findings | The baseline was assessed acceptable with changes. The participant supported service buffers, combined staff/resource capacity, assisted booking, printed outage rosters, and batch catch-up; configurable deposit rules were suggested. |
| Suggested changes | Add service-level cleanup/setup buffers; map staff and physical-station constraints; allow service-level deposit requirements. |
| Unresolved concerns | GCash transaction-reference verification without manual front-desk review. |
| Limitations | Supplied summary is not an independently verified transcript; the review concerns v0.4, not explicit approval of v0.6; representativeness, sampling, and formal requirement sign-off are not established. |
| Related activities | VAL-001 partially supported; VAL-003 partially supported; VAL-005 partially supported |
| Affected records | FR-001; FR-002; FR-004; FR-013; FR-016; FR-017; NFR-004; NFR-006; NFR-008; BR-001; BR-005; BR-006; BR-009; UJ-005; AC-005; AC-010; AC-012; D-056; D-060; D-063; D-064 |
| Storage reference | `docs/research/interviews/FOLLOW_UP_INTERVIEWS.md` § "Business Owner" |
| Assessment | Acceptable with changes; not stakeholder approval of v0.6 |

### EVD-008–EVD-013 — Submitted VAL-001–VAL-006 record

The six records below are registered because the complete submitted source is
available. Registration preserves the source and its claims; it does not convert
the claims into completed validation. Missing facts are recorded as `Not recorded`.

| Evidence | Activity / submitted outcome | Provenance available | Findings relevant to Gate 1 | Material limitations and disposition |
|---|---|---|---|---|
| EVD-008 | VAL-001 / PASS | 2026-10-29, 10:00–10:45 AM; in-person; business owner/managing director; Product Owner / Lead Analyst facilitator; v0.7 scope and workflows listed | Supports guest/staff-assisted booking, capacity/conflict prevention, walk-ins, and printed outage rosters | Required separate front-desk participant, selection/representativeness basis, and stakeholder sign-off are not recorded. Retain as submitted input; VAL-001 remains incomplete. |
| EVD-009 | VAL-002 / PASS | Role stated as public user/customer proxy booker; exact date, time, method, facilitator, selection basis, and consent boundary are `Not recorded` | Supports account-free booking, data minimization, screenshot-friendly confirmation, assisted recovery, and alternatives | Does not establish representative public-user validation or accessibility conformance. Retain as submitted input; VAL-002 remains incomplete. |
| EVD-010 | VAL-003 / PASS WITH CHANGES | Role summarized as front-desk staff/manager; exact participant identity, date/time, method, facilitator, and selection basis are `Not recorded` | Supports buffers, role separation, audited exceptions, rosters, reconciliation, and alternatives | Required participant set is not established. The proposed one-hour cutoff is a client-policy proposal, not an approved universal rule. Buffer wording is already covered by D-060/FR-001. VAL-003 remains incomplete. |
| EVD-011 | VAL-004 / PASS | Claimed privacy/security reviewer; identity, qualification, independence, jurisdiction, date/time, method, facilitator, and completed checklist are `Not recorded` | Supports opaque QR identifiers, least privilege, auditability, concurrency safeguards, and controlled roster disposal | This is not the required qualified privacy/security review. The proposed 12–24 month retention, shredding practice, four-hour access, and break-glass process are not approved policies. VAL-004 remains incomplete. |
| EVD-012 | VAL-005 / PASS | Product Owner / Technical Reviewer role stated; identity, qualification, independence, date/time, method, facilitator, and evidence assignment are `Not recorded` | Supports the 20–100 daily profile and 50-request contention scenario | Proposed response-time targets and idempotency-token mechanics are not approved by the existing decisions; no measurements exist. VAL-005 remains incomplete. |
| EVD-013 | VAL-006 / PASS | Product Owner / System Operator role stated; identity, separate operator representation, date/time, method, facilitator, and selection basis are `Not recorded` | Supports no-default access, client authorization, scoped access, expiry, audit, and telemetry-only fallback | The four-hour duration and break-glass process remain proposals under D-075. No operator walkthrough or exact procedure is recorded. VAL-006 remains incomplete. |

**Affected records:** EVD-008 affects FR-001–FR-004, FR-013, and FR-016–FR-017;
EVD-009 affects FR-003, FR-005, FR-007, FR-010, FR-013, and FR-018; EVD-010
affects FR-001, FR-004, FR-007, and FR-013–FR-018; EVD-011 affects FR-005–FR-006,
FR-008, FR-012, and FR-016–FR-017 plus NFR-003, NFR-005–NFR-006, NFR-009,
NFR-011, BR-003–BR-004, BR-009, AC-002–AC-004, AC-007, AC-012, QR-L01–QR-L12,
and Q-015; EVD-012 affects NFR-006, NFR-008, NFR-010, AC-005, AC-008, S-3, and
Q-016/Q-022; EVD-013 affects FR-008, FR-012, NFR-005, NFR-011, BR-004, UJ-004,
AC-007, Q-008, and D-075. The source location for all six is
`docs/requirements/GATE-1-STAKEHOLDER-VALIDATION-RESPONSES.md` under the matching
VAL section.

### EVD-006 — Lead front-desk receptionist follow-up

| Field | Recorded value |
|---|---|
| Source and classification | `FOLLOW_UP_INTERVIEWS.md` — supplied follow-up requirements-validation summary; treated as reported follow-up evidence, not independently verified by this register |
| Known date | 2026-10-29 |
| Participant role | Lead Front Desk Receptionist |
| Research method | Summarized 20-minute screen walkthrough; independent raw notes, recording, facilitator, consent artifact, and participant identity are not supplied |
| Records reviewed | Requirements baseline v0.4 follow-up responses, suggested changes, assessment, unresolved concern, and evidence notes |
| Relevant findings | The baseline was assessed acceptable with changes. The participant requested fast search, staff/time-slot visibility, minimal-field walk-in creation, batch reconciliation, and a visible grace-period indicator; the participant supported the outage roster and status workflow. |
| Suggested changes | Optimize walk-in creation for minimal fields; add a post-outage batch-reconciliation checklist; add a grace-period timer. |
| Unresolved concerns | Desktop responsiveness while switching between chat applications and the booking screen. |
| Limitations | Supplied summary is not an independently verified transcript; the review concerns v0.4, not explicit approval of v0.6; representativeness, sampling, and formal requirement sign-off are not established. |
| Related activities | VAL-001 partially supported; VAL-003 partially supported; VAL-005 partially supported |
| Affected records | FR-004; FR-013; FR-014; FR-016; FR-017; NFR-006; NFR-007; NFR-008; NFR-010; BR-006; BR-009; UJ-002; UJ-005; AC-008; AC-010; AC-012; D-063; D-064 |
| Storage reference | `docs/research/interviews/FOLLOW_UP_INTERVIEWS.md` § "Receptionist" |
| Assessment | Acceptable with changes; not stakeholder approval of v0.6 |

### EVD-007 — Customer / proxy appointment booker follow-up

| Field | Recorded value |
|---|---|
| Source and classification | `FOLLOW_UP_INTERVIEWS.md` — supplied follow-up requirements-validation summary; treated as reported follow-up evidence, not independently verified by this register |
| Known date | 2026-10-29 |
| Participant role | Customer / Appointment Booker, proxy booker for family |
| Research method | Verbal review of proposed client-facing screens; independent raw notes, recording, facilitator, consent artifact, and participant identity are not supplied |
| Records reviewed | Requirements baseline v0.4 follow-up responses, suggested changes, assessment, unresolved concern, and evidence notes |
| Relevant findings | The baseline was assessed acceptable with changes. The participant supported account-free booking, complete confirmation content, screenshot-friendly confirmation, proxy distinction, and simple cancellation/rescheduling; the participant requested SMS verification, which is outside the approved MVP direction. |
| Suggested changes | Keep guest checkout as the default; make confirmation high-contrast and screenshot-friendly; distinguish booker and attendee fields. |
| Unresolved concerns | Automated waitlist notifications could spam the customer; the requested SMS verification conflicts with the approved MVP exclusion and is not adopted. |
| Limitations | Supplied summary is not an independently verified transcript; the review concerns v0.4, not explicit approval of v0.6; one customer perspective does not establish representative public-user validation or accessibility conformance. |
| Related activities | VAL-001 partially supported; VAL-002 partially supported; VAL-005 partially supported |
| Affected records | FR-003; FR-005; FR-007; FR-010; FR-013; FR-018; NFR-003; NFR-007; NFR-009; BR-003; BR-006; UJ-001; UJ-003; AC-001; AC-002; AC-006; AC-009; AC-010; AC-013; D-057; D-061; D-065; D-066 |
| Storage reference | `docs/research/interviews/FOLLOW_UP_INTERVIEWS.md` § "Customer" |
| Assessment | Acceptable with changes; not stakeholder approval of v0.6 |

## 3. Evidence assessment

The four records provide genuine discovery support for appointment-driven
organizations with staffed front desks, especially for booking integrity,
staff-assisted service, role separation, QR lookup, attendance handling, and
paper-based outage continuity. They do not establish a representative sample,
complete validation of the revised requirement text, legal/privacy compliance,
or agreement on client-configurable parameters.

The follow-up records strengthen workflow coverage for the business owner, front
desk, and proxy-booker perspectives, but they are summaries of supplied records and
review v0.4 rather than explicit approval of v0.7. They do not establish
representative sampling, complete formal walkthrough validation, accessibility
conformance, or qualified privacy/security review. A qualified privacy/security
review remains required for VAL-004. The exact v0.7 baseline and remaining Gate 1
matters were addressed through the approved development-stage route in D-081/D-082;
unresolved items retain their later-gate owners and milestones.

EVD-008–EVD-013 preserve the submitted October 29 validation record and its
provisional outcomes, but the missing session metadata, participant-selection
information, reviewer qualification, and exact dispositions listed above prevent
the records from completing VAL-001–VAL-006. They do not establish a qualified
privacy/security review. D-081 records exact-version development-stage approval and
D-082 records Gate 1 exit without upgrading the submitted evidence to genuine
validation.

## 4. Change log

| Date | Change | By |
|---|---|---|
| 2026-10-29 | Register created; EVD-001–EVD-004 registered as discovery evidence with corrected provenance and explicit limitations. No formal validation, requirement approval, or Gate 1 exit recorded. | Authorized Gate 1 documentation task |
| 2026-10-29 | Revision 0.2. Noted EVD-005–EVD-007 as reported but unregistered because the full response text is unavailable. No findings, identity, consent, or sign-off recorded; VAL statuses unchanged. | Authorized Gate 1 consolidated evidence task |
| 2026-10-29 | Revision 0.3. Confirmed the reported EVD-005–EVD-007 records were still not supplied with the final-execution input; no registration, findings, identity, consent, or sign-off recorded. VAL-001–VAL-003 remain partially supported. | Authorized Gate 1 final-execution task |
| 2026-10-29 | Revision 0.4. Registered EVD-005–EVD-007 from `FOLLOW_UP_INTERVIEWS.md` as supplied follow-up evidence, preserving the review date, v0.4 baseline, statements, suggested changes, unresolved concerns, provenance limits, and acceptable-with-changes assessments. No v0.6 approval, representative validation, qualified privacy/security review, or Gate 1 exit is recorded. | Authorized Gate 1 final-execution task |
| 2026-10-29 | Revision 0.5. Recorded D-067–D-075 as approved directions without claiming evidence or closure, and recorded the bounded Obsidian MCP access limitation. | Authorized Gate 1 final-validation task |
| 2026-10-29 | Revision 0.6. Registered the supplied VAL-001–VAL-006 record as EVD-008–EVD-013 with explicit provenance and qualification gaps. No provisional outcome was promoted to completed validation; no requirement version or gate status changed. | Authorized Gate 1 reconciliation task |

## 5. Reusable engineering knowledge checkpoint

This Gate 1 pass establishes the permanent lightweight knowledge-capture checkpoint in
`AGENTS.md`, `docs/ENGINEERING_GOVERNANCE.md`, and `docs/GATE_REGISTER.md`. No separate
Obsidian knowledge note is proposed from the stakeholder evidence itself: the supplied
follow-up summaries are project evidence, not a reusable engineering lesson, and the
governed vault was not accessible for consultation or update in this workspace. In
this execution, the connected Obsidian tools were invoked, but root and guessed folder
scopes were rejected by `obsidian-guard` because no approved vault folder was exposed;
the MCP resource/template listings were empty. The vault was therefore not inspected
and no note was created or adopted. The repository remains authoritative; any later
reusable lesson must follow the vault's existing governance and approval/adoption rules.
