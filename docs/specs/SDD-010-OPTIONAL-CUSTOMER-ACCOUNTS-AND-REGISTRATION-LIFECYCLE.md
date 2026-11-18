# SDD-010 — Optional Customer Accounts and Registration Lifecycle

> **Status: APPROVED — SDD-010 v0.2**, individually within its documented scope. The Product Owner's explicit decision in the ChatGPT Gate 2 continuation conversation is the approval source; approval date not independently supplied, recorded 2026-11-13. v0.1 was returned for the AC-020 correction. No implementation or feature acceptance follows.

| Field | Value |
|---|---|
| Date / provenance | 2026-11-13; bounded documentation drafting |
| Owner | Product Owner for policy; security/engineering, qualified privacy and accessibility reviewers; actual operators unassigned. |

## Purpose and scope

Support optional email/password registration with email verification, sign-in/out, recovery, registration enablement and account deactivation while preserving guest access and appointments. **Out of scope:** internal staff identity/MFA (SDD-002), delivery mechanism (SDD-007), guest proof (SDD-008), dashboard/linking (SDD-011), profile edits (SDD-012), authentication packages, protocols, retention and deletion mechanisms.

## References

Effective [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md), unchanged [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md), [traceability 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md): FR-019/020, NFR-003/009/010, BR-010/012, UJ-006/007, AC-014/016/019/020/024/025. [Registry](SDD_REGISTRY.md) and [decisions](../decisions/DECISION_REGISTER.md) D-094/095/098/103/104/108–111 apply in their exact scopes; effective v0.8 governs account direction without adopting additional proposed D-094 wording. SDD-003/007/008 are contract dependencies, not implementation prerequisites to drafting.

## Expected behavior and proposed acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-010-C01 | Given registration is enabled, when a customer registers with email/password, then account activation requires the approved email-verification boundary; an unverified account is not represented as verified. |
| SDD-010-C02 | Given registration is disabled, when a new signup is requested, then it is blocked while existing verified accounts retain sign-in, authorized dashboard and appointment management, and guest booking and scoped guest management remain available. |
| SDD-010-C03 | Given registration is disabled while signup is incomplete, when a later verification or recovery step requests activation, then activation is blocked while registration remains disabled. Handling and resumption of the pending record remain open. |
| SDD-010-C04 | Given sign-in, sign-out or recovery is requested, when authority is evaluated, then only the authorized account action occurs, session/recovery failures are handled safely and responses avoid unnecessary account disclosure. Exact controls remain open. |
| SDD-010-C05 | Given account deactivation, when it succeeds, then account access ends without cancelling appointments or silently erasing required records; later management requires independent scoped guest proof or authorized assistance. |
| SDD-010-C06 | Given an authenticated account, when booking or an existing appointment is requested, then account status grants no priority, override or unrelated-appointment access; independent individual linking is owned by SDD-011. |
| SDD-010-C07 | Given verification or recovery email, when processed, then only the applicable D-095 purpose and authorized recipient/content are used, required evidence is attributable, and delivery status is truthful without promising inbox receipt. |
| SDD-010-C08 | Given failed, expired or uncertain account actions, when recovery is offered, then accessible feedback does not falsely assert activation or disclose unrelated account information; security and accessibility checks are independently evidenced. |

## Open questions and dependencies

| ID / owner | Decision and timing |
|---|---|
| ACCT-Q01 / Product Owner | Registration-toggle authority and handling/resumption of pending signup records; before affected configuration/implementation. The AC-020 activation block is already required. |
| ACCT-Q02 / security/engineering and Product Owner | Credential, session, verification and recovery controls, abuse handling and D-102 alternatives; before implementation. |
| ACCT-Q03 / privacy, security and actual operators | Deactivation, retention, notices and support responsibilities; before affected processing or operations. |

## Plan, verification and approval

High-risk identity and personal-data scope requires exact-version PO approval, qualified review, resolved affected policy and separate implementation authority. Later authorized synthetic tests cover toggle transitions, activation boundary, existing verified access, guest continuity, session/recovery denial, deactivation without cancellation, six-purpose email and accessible flows. No implementation, tests, privacy/security conclusion or feature acceptance is claimed.
