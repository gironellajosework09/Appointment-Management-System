# iTakda Testing Reference

> **Status: PROVISIONALLY ACCEPTED — development-stage testing reference guidance.** Mandatory obligations below summarize [Engineering Governance §14](../ENGINEERING_GOVERNANCE.md) and effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), read with preserved v0.8 and unchanged v0.7; proposed test organization and techniques remain guidance, not selected tools or implementation mechanisms. No test results are asserted.

## Approved obligations

- Automated checks cover each approved core workflow's success, rejection, authorization and failure paths as applicable (NFR-010/AC-008). Test security controls and uniqueness, capacity, referential, state-transition and concurrency invariants.
- Use an isolated test environment and its own test database, never production/client data or personal data copied from production. Environment/database creation or migrations require separate authorization.
- For D-070/AC-005, exercise 50 simultaneous valid requests competing for one remaining capacity unit: exactly one successful reservation, safe outcomes for the others, and no prohibited duplicate, over-capacity, partial or orphaned state. Specify applicable duplicate-policy preconditions. Lost responses remain unknown until reconciled, not necessarily failed (D-090).
- D-067 includes the 20–100 appointments/day normal profile and busy 100-appointment peak profile; neither is a measured result or concurrency ceiling. Measurable response-time and availability values remain open.
- Core public and administrative workflows target WCAG 2.2 AA and the D-069 browser policy. Review actual rendered interfaces, keyboard and assistive-technology use, responsive and print behavior; do not equate a tool pass with conformance.
- Record actual checks, environment, result, reviewer and limitations for acceptance; all required tests must pass before release. Applicable security/data-integrity reviews and separate release approval remain necessary.

## Proposed feature-level verification

For each approved spec, map acceptance criteria to targeted tests and evidence. Include, when affected: guest/account parity; cross-appointment and proxy denial; disabled signup with existing account access; linking/dispute holds; profile/booking separation; email recipient and delivery-failure handling; rejected reschedule preserving the original; unknown-outcome reconciliation; separate QR lookup/attendance; and paper conflicts without overwriting current state. Use fictional or synthetic data and examine the security/privacy implications of fixtures.

Unit, integration, concurrency and browser checks are useful categories, not mandated tools or a fixed testing pyramid. No runner, coverage percentage, performance threshold, supported-device matrix beyond the recorded browser policy, or test environment setup is approved here. See [technical requirements](../technical/TRD.md), [security](../security/SECURITY.md), and [SDD plan](../plans/IMPLEMENTATION_PLAN.md).

## Proposed verification layers and fixtures

| Layer | Purpose / evidence to plan |
|---|---|
| Unit | Focused policy/calculation cases with explicit assumptions; no claim that mocks establish persistence, authorization or concurrency correctness. |
| Feature/integration | Exercise request validation, server-side permissions, database constraints, atomic business/audit effects, and integration failure boundaries in the chosen authorized stack. |
| End-to-end | Representative public/account/staff/admin journeys through rendered UI and server; include denial, interrupted network, responsive and accessible feedback. Tool emulation does not replace every required supported environment. |
| Acceptance | Compare actual evidence with the approved spec/criteria; record reviewer, disposition and limitations. Product Owner approval and required specialist reviews remain separate from tool results. |

Use deterministic fictional fixtures: distinguish booker, attendee, proxy, account, staff and installation identities; control time/policy preconditions and identify concurrent contenders. Avoid shared mutable fixtures, order-dependent tests and production-data copies. Create/reset/migrate test databases only with separate authorization. Use the selected production-relevant DB behavior for concurrency evidence rather than assuming a lightweight substitute behaves identically.

## Proposed workflow and failure coverage map

| Concern / approved source | Future checks |
|---|---|
| Guest/account/linking: FR-019–022; AC-014–025; D-103 | Account-free completion; same policy outcomes; disabled signup with existing verified-account access; individual proof/confirmation and no auto-import; cross-appointment/proxy/attendee denial; deactivation preserving appointments; separate profile changes. Proof procedure and actual role assignment must first be approved. |
| Holds/permissions: FR-007/021; AC-021/025 | Ordinary eligible changes proceed normally; claimant/unassigned staff cannot release/reverse; scoped hold preserves existing appointment and permitted attendance. Test denied mutations/disclosures and assigned review evidence. |
| Booking/change lifecycle: NFR-006; BR-013; AC-005/026 | D-070 contention with valid same-unit competitors and explicit duplicate-policy preconditions; competing create/cancel/reschedule/configuration actions; rejected reschedule retains original. Test same-intent repeat, transaction failure, deadlock/timeout and commit/response loss with authoritative reconciliation. No lock/idempotency design is mandated. |
| QR/attendance/paper: D-045; FR-006/014/016/017; AC-012 | Lookup is not identity/attendance/change authority; invalid/stale/repeated QR, camera denial and authorized manual-reference handling; roster provenance, per-item conflicts/unresolved paper outcomes, no silent overwrite or offline booking synchronization. |
| Mail: D-095; FR-010/020; AC-024 | Six permitted purposes and recipient/content restrictions; expired/replayed links; provider/worker outage, throttling, delayed/duplicate/out-of-order delivery and crashes around commit/dispatch if applicable. No committed booking reversal or email-triggered command repeat. Browser response loss must not suppress legitimate committed-state notification. |
| Security/audit/privacy: FR-008; NFR-003/009/011; D-104 | Trace the accepted [Security T01–T15 and PH-01–PH-10](../security/SECURITY.md): actor/action scope, injection/request-origin/input abuse, scoped tokens, credential custody, minimum logs, evidence failure, restricted audit access, data lifecycle and installation isolation. Proposed controls require design approval; no security/legal result inferred from a scan. |
| Accessibility: NFR-007; AC-006; D-069 | Core public/admin keyboard, focus, labels/errors, screen-reader interaction, zoom/reflow, responsive/touch, reduced motion, printable/screenshot-friendly confirmation. Include current/previous stable Chrome, Edge, Firefox and Safari policy with recorded actual environments; no conformance claimed from one browser/tool. |
| Performance/recovery: D-067/070/091; Governance §17 | Normal/peak profiles distinct from concurrency; define measurement boundaries and approve open thresholds before claiming a pass. Restore procedure rehearsal and separately approved privacy-safe real-backup verification before operational reliance; examine completeness and restricted/deleted-data restoration. No recovery target or result invented. |

## Proposed evidence, CI and defect handling

For each criterion record source/spec, preconditions, fixture/environment/tool versions, steps or reproducible check, expected outcome, actual result, artifact location, reviewer, defect/disposition and unverified limits. Protect screenshots, traces, dumps and logs as potentially sensitive; use synthetic data. A skipped or quarantined test is not passing evidence.

Candidate CI checks include scoped formatting/static analysis, server tests, dependency/configuration review and targeted browser checks. Use minimal credentials and isolated resources; untrusted contributions must not receive production secrets. Exact pipeline/provider, tool versions and quality checks remain proposed. All required tests must pass before release; critical defects block release under approved governance. Apply D-071's recorded severity/disposition method, not a new scoring scale or invented coverage threshold. Record meaningful failures and retest affected behavior after authorized correction; do not hide flakiness with retries.

D-102 assessment: layered tests improve defect detection; a smaller/manual suite reduces setup but can miss repeatable regressions. Over-mocking, nondeterministic fixtures, missing contention and compromised CI can create false confidence or disclosure. Mitigate through representative DB/browser boundaries, deterministic fixtures, minimal permissions and reviewed test inventory. Verify repeatability and required success/denial/failure coverage after authorization. Residual risks are untested environments, human error and unknown defects; engineering/evidence owners and applicable reviewers must be assigned. Tool choice and exact CI gates can wait until affected feature planning. Future runtime/release tests are not automatically prerequisites for provisional documentation acceptance or historical Gate 2 closure under D-098.

## Consolidation review and provisional acceptance

| Field | Record |
|---|---|
| Disposition and artifact | **PROVISIONALLY ACCEPTED as development-stage reference guidance** — the reviewed Testing consolidation draft expanded 2026-11-12. Existing approved verification obligations remain binding independently; proposed organization, fixtures, techniques and tooling are not selected implementations. |
| Authority and dates | Product Owner's explicit Gate 2 Documentation Consolidation decision in the current conversation. Approval date: not separately supplied. Recording date: 2026-11-12; this is not represented as the approval date. |
| Verification | Codex matched the document to the reviewed draft and checked the bounded status/acceptance changes, links, Markdown structure and Git/unrelated-file preservation as reported in the recording chat. No test, environment setup, recovery exercise, security assessment or accessibility verification is claimed. |
| Limitations | No specific tool, version, provider, mechanism, deployment procedure, numeric target or passing evidence is approved. P-009 remains separately unapproved. Material decisions and applicable verification/review requirements remain source-governed. No implementation, Checkpoint 11 acceptance, Gate 2 closure or new gate commencement is authorized. |

Recorded under Engineering Governance §§5 and 18; approved requirements and decisions remain authoritative. Other historical acceptances are unchanged.
