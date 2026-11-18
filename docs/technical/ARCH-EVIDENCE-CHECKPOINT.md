# Targeted architecture and SDD decision checkpoint

**2026-11-13 — review draft.** [D-111](../decisions/DECISION_REGISTER.md#930-targeted-technical-investigation-priorities) records the five Product Owner investigation priorities only. No proposed model, mechanism, risk, SDD or Gate 2 transition is approved by this checkpoint. The lead integrated [booking](ARCH-EVIDENCE-BOOKING.md), [identity](ARCH-EVIDENCE-IDENTITY.md), [evidence/notifications](ARCH-EVIDENCE-CONSISTENCY.md), [runtime/recovery](ARCH-EVIDENCE-RUNTIME.md) and [specialist handoff](ARCH-EVIDENCE-REVIEW.md).

## Integrated interface and remaining issues

Booking proposes a coarse per-installation integrity gate as a correctness baseline and a finer ordered-domain candidate; both require all relevant writers and policy activation to participate. Same-intent scope and revalidation of authority must be resolved with identity. The candidate local commit coordinates booking, required evidence and eligible notification intent; notification processing is independent and cannot reissue the business command. Restored business, intent, evidence and delivery observations require reconciliation before processing resumes; an older restore can diverge from provider activity. The six email purposes and recipient/content rules remain controlling. Pending/unknown is not a success or automatic failure. No logical domain or state in these drafts is a selected schema, API or protocol.

| Classification / matter | Owner and necessary next evidence | Latest affected milestone |
|---|---|---|
| **Blocking affected booking implementation:** complete conflict coverage, policy/authority freshness, same-intent binding and outcome/evidence boundary | Engineering proposes exact-version semantics, common-writer inventory and proof of absent-row/overlap coverage; qualified integrity/security review; PO decides material trade-offs. | Before affected implementation authorization; D-070 and failure tests require separate authority. |
| **Blocking affected identity/processing:** independent proof, role assignment, recovery authority, case acceptance and applicable review | PO/service policy decides actual permission and proof/recovery rules; qualified security/privacy/accessibility review evaluates scenarios; client assigns independent authority. | Before affected implementation or personal-data processing. |
| **Conditional architecture choice:** coarse gate versus fine-grained locks versus optimistic version protocol; local coordinated evidence/intent versus demonstrably equivalent recovery | Engineering compares complete conflicts and costs; qualified integrity/security/privacy reviewers assess and PO decides material mechanism/risk. No performance result exists. | Before affected mechanism approval. |
| **Conditional profile and operations:** native tuple, Docker alternative, backup method, recovery objectives and provider | Engineering obtains exact version/extension/lifecycle evidence and feasible measured recovery under separately authorized work; PO decides material choice with specialists and operators. | Before profile adoption, deployment or operational reliance as applicable. |
| **Installation-specific:** custody, independent recovery authorizer, staffing, monitoring, incidents, backup/restore authorization, values and support scope | Actual client/provider owners agree responsibilities; PO resolves relevant policy, privacy and contractual questions. `SECURITY/OPS-Q01` and `SDD-026/OPS-Q01` remain distinct. | Before affected processing or reliance. |
| **Deferred, nonblocking to unrelated evidence:** branding owner, localization, exact fields, client scheduling values and nonessential tooling | PO/service owner or engineering; follow existing SDD/requirements controls. | Before the particular affected implementation. |
| **Release/operational evidence:** PH-01–PH-10, applicable specialist findings, actual test evidence and D-091 particular real-backup verification | Named qualified reviewers and actual operators; separately authorized implementation/testing and privacy-safe client-specific verification. | Applicable processing/reliance milestones and independent PH-10 before release as required. |

**Unresolved integration interfaces:** atomicity if policy or authority lives outside the local store; a complete overlap mapping when resources or duplicate windows change; durable identity, scope and expiry of same-intent outcomes; evidence for rejection versus committed outcome; stale recipient and ambiguous provider submission; how to resolve restored records that disagree with external observations; support coverage for unavailable independent authorizers. These are explicit review questions, not silently chosen defaults.

## Product Owner decision requests

1. Review the exact versions below using the existing [DOC-WP-02 acceptance matrix](../../TASKS.md#consolidated-exact-version-acceptance-matrix); approve, reject or request corrections per artifact. The matrix's documentary readiness is not implementation readiness.
2. Review whether the proposed coarse baseline, fine-grained/optimistic comparison and coordinated evidence/intent model are suitable for further detailed review. Approval of an actual mechanism or acceptance of residual risk requires the missing evidence and applicable specialist reviews listed above.
3. Decide the independent guest proof and recovery authority, service/action permissions and contested-case policy only after the identified security/privacy/accessibility review; decide material profile and operational allocation with actual client/provider owners after feasibility evidence.
4. Name qualified review and engineering owners and specify the next separately authorized evidence or verification scope. This checkpoint does not require a new broad comparison package.

## Exact-version SDD decision sheet

All entries below are pending PO review; this is a navigation sheet, not a repeated acceptance review. Prior approvals and limitations remain in the matrix and Registry.

| Artifact | Exact current version | Material limitation |
|---|---|---|
| SDD-002 | v0.5 | MFA factor, permissions and independent recovery details remain open. |
| SDD-003 | v0.5 | Evidence access, consistency, custody and retention remain open. |
| SDD-004 | v0.3 | Actual fields, visibility and lifecycle remain open. |
| SDD-005 | v0.4 | Installation scheduling values and detailed semantics remain open. |
| SDD-006 | v0.1 | Conflict, same-intent and policy details need further review and future verification. |
| SDD-007 | v0.3 | Provider and notification recovery mechanics remain open. |
| SDD-008 | v0.2 | Independent proof, assistance and representative authority remain open. |
| SDD-013 | v0.3 | Case intake, assignment, hold and disposition procedure remain open. |
| SDD-022 | v0.2 | Configuration-impact decisions and effective handling remain open. |
| SDD-023 | v0.3 | Accessible pattern details, branding ownership and verification remain open. |
| SDD-024 | v0.2 | PH-01–PH-10 and lifecycle/legal responsibilities require qualified review. |
| SDD-025 | v0.3 | Recovery objectives, method, actual backup verification and owner remain open. |
| SDD-026 | v0.3 | Supported profile and installation responsibility allocation remain open. |
| SDD Registry | proposed v0.4 | Planning overlay only; approval does not approve individual SDDs or implementation. |

## Historical Gate 2 readiness

Gate 2 remains **IN PROGRESS**; Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). Checkpoint 12 and final review are not recorded complete. The historical register identifies design/requirements review, traceability, the Checkpoint 11 package and final PO approval, with compatibility Q-007 and hosting/responsibility Q-008 decisions where architecture feasibility depends on them. Formal historical disposition requires explicit PO authority; D-098 prospectively supersedes routine sequential progression and does not make closure a prerequisite to SDD work. Qualified security/privacy, data-integrity, verification, operational and release controls remain independent. No closure is requested or inferred.
