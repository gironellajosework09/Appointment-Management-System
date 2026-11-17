# SDD-011 — Customer Dashboard and Individual Appointment Association

> **Status: APPROVED — SDD-011 v0.2**, individually within its documented scope. The Product Owner's explicit decision in the ChatGPT Gate 2 continuation conversation is the approval source; approval date not independently supplied, recorded 2026-11-13. v0.1 was returned for the AC-021 correction. No implementation or verification is authorized.

| Field | Value |
|---|---|
| Date / provenance | 2026-11-13; bounded documentation drafting |
| Owner | Product Owner for policy; engineering/security and qualified privacy/accessibility reviewers. |

## Purpose and scope

Show an authenticated customer only authorized upcoming and retained past appointments and permit individually verified original-booker association with explicit confirmation. **Out of scope:** account lifecycle (SDD-010), proof design (SDD-008), contested review (SDD-013), cancellation/reschedule (SDD-016/017), automatic data matching or bulk import.

## References

Effective [v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md), unchanged [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md), [traceability 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md): FR-019/021, NFR-003/009/011, BR-006/011, UJ-007, AC-015/017/021/025. [Registry](SDD_REGISTRY.md), [decisions](../decisions/DECISION_REGISTER.md) D-094/098/103/104/108–111 and SDD-003/006/008/010/013/023 govern interfaces; drafts are not approved by citation.

## Expected behavior and proposed acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-011-C01 | Given an authenticated account, when the dashboard loads, then only authorized upcoming and retained past appointments and permitted details are displayed; empty or unavailable states disclose no other appointments. |
| SDD-011-C02 | Given a request to link an appointment, when account session, reference, QR or matching personal data is provided without independent original-booker proof, then no association or unrelated details are disclosed. |
| SDD-011-C03 | Given independently established original-booker authority for one appointment, when explicit confirmation is obtained and the authorized link commits, then only that appointment is associated and the outcome is attributable. |
| SDD-011-C04 | Given a permitted unlink or reversal, when an authorized action succeeds, then association changes are attributable and the appointment is preserved; no automatic cancellation or transfer of attendee authority occurs. A claimant or account holder cannot self-release a contested hold or reverse another party's link. Release of the hold or reversal of the link requires an assigned, appropriately authorized reviewer and documented disposition under SDD-013. |
| SDD-011-C05 | Given uncertain proof or failed linking, when evaluated, then no automatic dispute hold is created; an assigned review may place only an approved scoped hold under SDD-013 while preserving appointment and permitted attendance. |
| SDD-011-C06 | Given a held, rejected or unknown action, when feedback is shown, then no false success or blind repeat occurs; authoritative same-intent reconciliation and accessible SDD-023 states apply. |
| SDD-011-C07 | Given any list, detail, link or reversal, when access is checked, then actor/service/action permissions and minimum visibility apply, with required evidence consistent with the outcome. |

## Open questions and dependencies

| ID / owner | Decision and timing |
|---|---|
| DASH-Q01 / Product Owner, security/privacy | Proof, confirmation and per-service visibility via SDD-008 before linking implementation. |
| DASH-Q02 / Product Owner and assigned operators | Authorized unlink/reversal, dispute process and evidence lifecycle via SDD-013/024 before affected operations. |
| DASH-Q03 / UX/accessibility and engineering | Empty, unavailable and unknown presentation, retention-dependent history and integration before acceptance. |

## Plan, verification and approval

High-risk access work needs exact-version approval, dependent contracts, qualified review and separate implementation authority. Future synthetic tests exercise unrelated-account denial, proof replay, explicit confirmation, reversal, contested holds, uncertain outcomes and accessible lists. No testing, implementation or feature acceptance is claimed.
