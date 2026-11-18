# Registered-Customer Scope — Gate 2 Planning Amendment Proposal

> **Preparation-stage proposal snapshot — requirements now approved.** D-094/D-095 and
> Requirements v0.8 / Traceability revision 1.2 were approved for development-stage design
> under Decision Register revision 1.19 (approval date not supplied). This file remains an
> unapproved architecture impact proposal; it does not amend any fingerprinted working design,
> accept Checkpoint 11, approve final architecture, or authorize implementation. Current Gate 2
> integration findings and Product Owner recommendations are in
> `docs/archive/legacy-sdlc/checkpoint-records/GATE-2-INTEGRATION-AND-CHECKPOINT-12-PREPARATION.md`.

> **Preparation-time reading rule (2026-11-04):** References below to proposed D-094/D-095 or
> pending v0.8/revision 1.2 describe their state when this analysis was prepared. The exact
> requirements direction is now effective for development-stage design. Proof methods,
> service-specific permissions, quality/cutoff decisions and retention/deletion obligations
> remain open for their Gate 2/3 checkpoints. No provisional architecture or checkpoint status
> is promoted by the approval of requirements.

| Field | Value |
|---|---|
| Affected Gate 2 material | `CONCEPTUAL_ARCHITECTURE.md`; `COMPONENT_MODULE_DESIGN.md`; `DETAILED_SYSTEM_WORKFLOW_DESIGN.md`; `DATA_ARCHITECTURE_MODEL_DESIGN.md`; `INTERFACE_API_DESIGN.md`; Checkpoint 11 screen design |
| Current effective requirements | Specification v0.8 / Traceability revision 1.2, D-094/D-095; development-stage assumptions, not representative validation |
| Preserved historical baseline | Specification v0.7 / Traceability revision 1.0, D-081 |
| Status | DRAFT architecture-impact proposal; not a final architecture or checkpoint approval |

## 1. Product Owner direction captured

The intended MVP includes account-free guest booking and optional registered-customer
booking. Registration is never required to book as a guest. Registered customers may sign
in, access a personal dashboard, view appointments authorized for their account, and request
eligible changes. Both actor paths use the same underlying appointment integrity, capacity,
duplicate and eligibility policies. Account status alone conveys no booking priority,
override authority, status privilege or access to unrelated appointments. Matching personal
information alone never automatically associates a guest-created appointment with an
account. The proposed public journey is landing/service discovery → guest or account entry
→ service/date/time selection with live summary → required details → final review → explicit
submission → established outcome.

These are the Product Owner's scope directions. They are captured as a pending exact D-094
decision and proposed requirement versions; they do not make those documents effective yet.

## 2. Shared architecture constraints

- Guest and registered booking converge on the same existing logical appointment command
  and final booking-integrity responsibilities (FR-002/003; NFR-006; BR-001/002; WF-P02;
  IF-P04/IF-I03). Do not add account-based priority or a separate capacity pool.
- A sign-in is not itself proof that an arbitrary appointment belongs to that account.
  Authorization must identify the permitted appointment scope. Guest reference/QR remains a
  locator only (D-045/D-085(1)/D-090); lookup, identity verification and attendance remain
  separate.
- Do not auto-associate guest-created appointments by matching contact/name or other
  personal information alone. Individual original-booker linking is proposed; independent
  proof, confirmation, reversal and contested-authority procedures require policy review.
- Internal staff, supervisor, client administrator and system operator roles are unchanged.
  Customer accounts do not grant internal navigation, client administration, supervisor
  exception authority or operator access.
- Account presence, profile persistence, identity proof, verification, authentication,
  recovery, authorization/association mechanism, personal-data reuse, deactivation and
  retention are not selected here. Do not add a schema entity, API route, credential method,
  rate limit or external service on the basis of this proposal.

## 3. Affected design documents and proposed treatment

| Existing design | Current content affected | Proposed v0.8/D-094 follow-up |
|---|---|---|
| `docs/architecture/CONCEPTUAL_ARCHITECTURE.md` §§3, 6–7, 12, 14–16 | Public actors and booking explicitly exclude public accounts. | Add registered customer as a proposed public actor, shared final-integrity path, authorized-account appointment visibility and open association policy. Keep D-081 account-free content as the effective baseline until approval. |
| `docs/architecture/COMPONENT_MODULE_DESIGN.md` §§2–4, 12–14 | Scope says public accounts are not MVP; public actor is guest/proxy. | Treat account entry as an optional presentation/identity path if approved; retain shared booking command/integrity and all internal/operator roles. Do not invent a profile/account module. |
| `docs/architecture/DETAILED_SYSTEM_WORKFLOW_DESIGN.md` §§3–5, 9, 11 | Workflow catalog has guest booking and scoped guest management; no registered journey. | Add proposed registered booking and management journeys as drafts; carry all outcomes and controls across actor type. Define authorization scope as unresolved, not presumed from matching data. |
| `docs/architecture/DATA_ARCHITECTURE_MODEL_DESIGN.md` §§3–4, 8–10, 11–12 | Candidate #08 says profile reuse optional; #11 models scoped guest authority; no customer account model. | Evaluate identity/profile and account-appointment authorization only after PO policy decisions. Keep candidates logical; no automatic association, physical schema or retention policy. |
| `docs/architecture/INTERFACE_API_DESIGN.md` §§1–3, 8, 14–15 | Interface inventory and scope exclude public account; guest authority/recovery remains open. | Add proposed account sign-in/dashboard/authorized appointment visibility contracts after exact requirement approval; keep routes/protocols/mechanisms unresolved. Preserve existing guest interfaces. |
| `docs/design/CHECKPOINT-11-SCREENS-AND-INTERACTIONS.md` §§1–5 | Screen inventory has guest-only entry and journey. | Proposed §4.1 adds common landing, optional account entry and account dashboard/detail changes; no proof/recovery mechanism simulated. Checkpoint 11 remains unaccepted/incomplete. |
| `docs/design/CHECKPOINT-11-DESIGN-SYSTEM-AND-ACCESSIBILITY.md` §§4, 6–7 | Accessibility guidance covers core public/admin screens but account screens are not inventoried. | Apply the existing WCAG 2.2 AA design target to account sign-up/sign-in/recovery/dashboard states if approved; no conformance claim. Mechanisms and device/OS matrix remain open. |

## 4. Open design dependencies and checkpoints

| Dependency | Draft-local reference | Required resolution checkpoint |
|---|---|---|
| Registration-toggle authority and in-progress signup | ACCT-L01 | Product Owner decision before final Gate 2 architecture disposition; existing accounts and guests continue. |
| Email/password verification, scoped guest access and recovery details | ACCT-L02 | Proposed D-095 approval; Gate 2 design and Gate 3 security/privacy review; SMS/OTP excluded. |
| Original-booker linking proof, reversal and dispute | ACCT-L03 | Product Owner policy and Gate 3 review before final data/interface design; matching PII is insufficient. |
| Ownership, proxy/guardian scope, visibility of appointments | ACCT-L04 | Product Owner and Gate 3 review; no unrelated appointment disclosure. |
| Profile persistence/reuse and data minimization | ACCT-L05 | Product Owner and qualified privacy review under Q-015 before final data design. |
| Deactivation, deletion and retention | ACCT-L06 | Product Owner and qualified privacy/legal review before Gate 3 approval (D-079/Q-015). |
| Abuse controls | ACCT-L07 | Product Owner policy and Gate 3 threat/privacy review; thresholds/mechanisms remain unspecified. |
| Required fields, account confirmation/QR eligibility, accessibility evidence | ACCT-L08 | Client/service policy and Product Owner review in Gate 2; later Gate 5 verification. |

Existing Q-009/Q-018 staff authentication/permissions, Q-015 retention/privacy, Q-020
change cutoff, Q-021 duplicate identity/window, D-079 quality targets and QR-L01–QR-L12
remain separately open. The operator access boundary remains D-034/D-075/FR-012/NFR-005;
this proposal creates no operator portal or access grant.

## 5. Effective status and change control

D-046 remains preserved and is not marked superseded. D-042/D-061 and D-081 remain
effective until the Product Owner approves exact successor decision D-094 and exact
Specification v0.8 / Traceability revision 1.2. Engineering and Requirements Governance
§§6/8 require versioned changes and preservation of the prior effective text. The Product
Owner directed targeted/versioned Gate 1 amendment. Requirements Governance §§6/8 provide
that route and do not require automatic Gate 1 reopening for every material change; the
historical D-082 approval is preserved and no Gate 1 status transition is proposed. Gate 2
remains IN PROGRESS; Checkpoint 11 is not accepted or completed. This
planning addendum makes no final architecture decision and authorizes no implementation.

## 6. Reconciled policy design brief (2026-11-04; PROPOSED)

This section replaces the earlier open-policy descriptions in §§2–4 where they described
the Product Owner's later preferences as undecided. It is a planning delta only, pending
exact D-094/D-095 and v0.8/rev 1.2 approval; the fingerprinted Gate 2 working designs are
not silently revised or reaccepted.

- **Identity and interfaces:** Design email/password verification, password recovery and
  appointment-scoped guest access under proposed D-095. Account sign-in proves account
  control, not arbitrary booking, attendee or guardian authority. Document approved
  recipients, authority-limited content, delivery failure and non-enumerating denial.
- **Account and appointment model:** Distinguish acting staff, original booker, attendee,
  verified account and per-appointment link. Permit only independently verified original-
  booker linking with explicit confirmation and audit. Model contested/reversed links and
  privacy-limited visibility; do not infer ownership from matching data or QR/reference.
- **Configuration and workflow:** Registration disablement blocks new signup, while
  existing verified accounts and the guest path continue. Service policy controls proxy
  booking/management, attendee or guardian evidence, duplicate attendee/eligibility
  criteria, fields, deadlines and exceptions. Keep guest/account parity in final integrity
  checks. A contested action is held for authorized review without automatic cancellation.
- **Data lifecycle:** Separate profile edits from booking edits; prefill requires notice.
  Show authorized upcoming and retained past bookings. Deactivation ends account access,
  preserves appointments and required records, and routes later eligible management through
  independently verified scoped guest access or authorized staff assistance. Retention
  values, legal basis and deletion rules require qualified review under Q-015/D-079.
- **Transactions and failure states:** Reschedule must exchange capacity atomically;
  known failure preserves the original booking, while unknown outcome requires authoritative
  reconciliation before retry. Email delivery is outside the booking transaction and cannot
  produce a repeat command or false confirmation. D-089 excludes MVP penalties.

Before final affected architecture review, resolve original-booker proof, proxy/consent
restrictions, contested authority, service duplicate criteria/fields, Q-020 cutoff and
Q-016/Q-022 targets. Gate 3 still requires retention/deletion and exceptional operator/
break-glass policy dispositions. No provider, token lifetime, schema, route, rate limit,
retention period or universal service value is selected here.

### Proposed role and action boundary

| Actor | Booking and scoped view/change | Linking, policy or dispute authority |
|---|---|---|
| Guest original booker | Book without account; manage one eligible appointment after independent scoped proof | May request an individual link after verified original-booker proof; no account-wide access |
| Verified customer account | Book on same rules; view/change own created or individually linked authorized appointments | Link only an independently verified original-booker appointment; no internal role |
| Proxy booker | Book/manage scheduling only where service policy permits and proof suffices | No presumed attendee, guardian or sensitive-data authority |
| Attendee or guardian claimant | No booker-level access solely from being named; separately approved entitlement may apply | May contest; review is by authorized staff, without automatic cancellation |
| Front-desk staff | Assigned assisted booking and routine actions with attribution | Evidence intake/recovery only within assigned permission; no automatic ownership transfer |
| Supervisor | Assigned work and specifically authorized, reasoned exceptions | Review disputed authority only under approved permission and audit |
| Client administrator | No booking access from role alone | Configure approved installation/service policy and internal access |
| Product operator | No default client-record access | Technical role only; exceptional access needs separate authority |
