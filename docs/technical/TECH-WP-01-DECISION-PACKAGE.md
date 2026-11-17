# TECH-WP-01 — Product Owner technical decision checkpoint

**2026-11-13 — evaluation draft; decisions and approvals pending.** The [DOC-WP-02 acceptance matrix](../../TASKS.md#consolidated-exact-version-acceptance-matrix) remains the exact-version specification review package. This comparison does not repeat that review or approve any of its 13 current drafts or Registry v0.4. Earlier exact approvals remain effective within their documented scopes.

| Track | Conditional direction for further assessment | Decision and evidence still needed |
|---|---|---|
| [A — booking](TECH-WP-01-BOOKING.md) | Assess a transaction-centered boundary, precisely applicable constraints, concurrency control and durable same-intent reconciliation against alternatives. | PO resolves material policy/risk trade-offs; engineering and data-integrity/security reviewers need store-specific interleaving and failure evidence. D-070 is a future exactly-one-of-50 integrity check, not a latency SLA. |
| [B — identity](TECH-WP-01-IDENTITY.md) | Assess individually attributable phishing-resistant MFA with an accessible non-personal-device path, independent guest proof, default-deny enforcement and independently authorized recovery. | PO decides material policy and assignments; security, privacy and accessibility reviews, proof independence, recovery authority, costs and installation staffing remain open. |
| [C — evidence and email](TECH-WP-01-EVIDENCE.md) | Assess coordinated required evidence and recoverable notification intent, with protected diagnostics and strictly six permitted email purposes. | PO resolves material risk and any provider selection; engineering, security and privacy review consistency, provider terms, costs and residual risks. Provider acceptance is not inbox receipt. |
| [D — hosting and recovery](TECH-WP-01-HOSTING.md) | Compare one supported technical profile usable across both hosting models, with protected backups and separately evidenced restore procedures. | PO approves material profile and risk; client/provider allocate per-installation responsibilities; engineering, security and privacy review feasibility, cost, access and recovery. No objective values are set. |

## Integration assessment

- Booking state, required evidence and same-intent outcomes need a coherent failure boundary; a separate evidence service or notification worker must demonstrate recovery from gaps. A restored installation must reconcile all three before resuming uncertain operations.
- Independent appointment-scoped guest proof and actor/service/action permissions govern outcome lookup, case handling and notification access. Correlation identifiers and email possession do not independently confer authority. Only assigned review can impose an authorized scoped hold; uncertain claims do not automatically hold or cancel an appointment.
- A committed appointment survives notification failure. Recovery of email must not repeat the booking; external submission uncertainty remains visible. Audit export, diagnostics, backups and restored copies require separately scoped access and privacy review.
- Hardware, workers, storage and recovery processes must fit the ultimately approved supported profile and actual client/provider staffing. `SECURITY/OPS-Q01` concerns operational ownership; `SDD-026/OPS-Q01` concerns the supported profile. Neither is resolved here.
- These are document-level compatibility conclusions, not proof that a candidate implementation works. Candidates depend on unresolved configuration, independently qualified reviews, actual provider/platform terms and later authorized verification.

## Requested dispositions and next work

1. Review the existing acceptance matrix and decide exact-version SDD/Registry scope separately from technology choices.
2. Review the four conditional directions and identify any material risk or policy trade-off to accept, reject or send for further evidence. No residual risk is accepted by this package.
3. Assign qualified security, privacy, accessibility and data-integrity reviewers and an engineering owner. Obtain current primary-source compatibility, lifecycle, provider terms and real cost evidence for concrete candidates, plus installation-specific ownership. PH-01–PH-10 remain pending.
4. The next executable package is **TECH-WP-02 — candidate-specific evidence and specialist review**, documentation-only when separately scoped and authorized: collect supported-version and provider terms, threat/interleaving analysis, realistic costs and review findings for candidates chosen for investigation. Actual tests, dependencies, client data, implementation and operational activity require their own authorization. Runtime/tooling P2 remains in the DOC-WP-02 queue and P-009 remains unapproved.

## Historical Gate 2 disposition

Gate 2 remains historically **IN PROGRESS**, not accepted. Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112); Checkpoint 12 and final Gate 2 review are not recorded complete. The historical register identifies compatibility/deployment decisions and Product Owner final approval among its outstanding dependencies; a formal disposition requires explicit Product Owner authority and review of the applicable historical record. D-098 supersedes routine sequential gate progression prospectively, so those historical steps are not prerequisites for the SDD path. Applicable security, privacy, integrity, verification and release controls remain independent. This package requests no gate closure.
