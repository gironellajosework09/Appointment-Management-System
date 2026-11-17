# Gate 2 — consolidated Product Owner decision checkpoint

**2026-11-13; read-only assessment, not approval.** [Gate Register §5](GATE_REGISTER.md#5-gate-2--architecture--design), [D-098/D-111](decisions/DECISION_REGISTER.md), [Governance](ENGINEERING_GOVERNANCE.md), [Registry](specs/SDD_REGISTRY.md), [DOC-WP-02 matrix](../TASKS.md#consolidated-exact-version-acceptance-matrix) and [targeted evidence](technical/ARCH-EVIDENCE-CHECKPOINT.md) govern this assessment. Gate 2 remains historically IN PROGRESS. D-098 supersedes unfinished routine progression prospectively; it does not record historical closure or waive independent controls. A formal historical disposition requires explicit Product Owner authority and determination of the applicable route; the historical checklist is not silently reinstated as a routine SDD prerequisite.

**Subsequent status, 2026-11-13:** The Product Owner accepted Checkpoint 11 within its documented design and prototype scope under D-112. This supersedes the CP11-unaccepted statement for current status only; the assessment below is preserved as of its review date. Gate 2 remains historically IN PROGRESS, and CP12/final review remain not recorded complete.

## 27-scope inventory

Registry v0.1 provisionally accepted **candidate scopes for planning**, not 27 individual specifications. Existing current drafts have no identified documentary blocker to submission for PO review per DOC-WP-02; pending approval is not approval. Where no file exists, a document must first be drafted before its own acceptance, but that is not automatically a Gate 2 closure requirement under D-098. Prior exact approvals are recorded in Registry §10 and remain limited to their approved versions.

| ID and exact title | Current document / approval reference | Remaining work / acceptance blocker |
|---|---|---|
| 001 Application Foundation and Development Environment Baseline | v0.3 approved; Registry §10 | FND-Q01–Q04 and separate implementation authority; no current-spec review blocker. |
| 002 Internal Identity, Provisioning and Permission Enforcement | v0.5 draft; prior v0.4 approved §10 | PO review; IDN-Q01–Q04 before affected implementation. |
| 003 Required Audit and Operational Evidence | v0.5 draft; prior v0.4 approved §10 | PO review; EVD-Q01–Q04 and privacy/operations before affected work. |
| 004 Service Catalog and Minimum Booking-Data Configuration | v0.3 draft; prior v0.1 approved §10 | PO review; SVC-Q01–Q04 before affected collection. |
| 005 Availability, Resource, Capacity and Scheduling Policy | v0.4 draft; prior v0.2 approved §10 | PO review; SCH-Q01–Q08 and SDD-006 integration before affected work. |
| 006 Shared Booking Integrity and Authoritative Outcomes | v0.1 draft; no prior approved version | PO review; INT-Q01–Q07 and future integrity verification before affected implementation/acceptance. |
| 007 Six-Purpose Email Boundary and Delivery Recovery | v0.3 draft; prior v0.2 approved §10, v0.1 earlier | PO review; MAIL-Q01–Q04 and provider review before adoption. |
| 008 Appointment-Scoped Guest Access and Assisted Recovery | v0.2 draft; prior v0.1 approved §10 | PO review; GUEST-Q01–Q05 before affected guest management. |
| 009 Public guest booking, alternatives and accessible confirmation | No individual version/file; Registry §3 planning scope | Draft journey, confirmation and integrity integration before spec acceptance. |
| 010 Optional customer accounts and registration lifecycle | No individual version/file; Registry §3 planning scope | Draft lifecycle, signup boundary, authentication/recovery before spec acceptance. |
| 011 Customer dashboard and individual appointment association | No individual version/file; Registry §3 planning scope | Draft scoped access, independent proof, link/unlink and audit before spec acceptance. |
| 012 Profile correction and explained booking prefill | No individual version/file; Registry §3 planning scope | Draft explicit profile/booking separation and field policy before spec acceptance. |
| 013 Contested-Action Holds and Assigned Case Review | v0.3 draft; v0.1/v0.2 prior drafts, no approval | PO review; CASE-Q01–Q06 before affected case operation. |
| 014 Authorized staff appointment lookup and routine edits | No individual version/file; Registry §3 planning scope | Draft permissions and permitted edit boundaries before spec acceptance. |
| 015 Staff-assisted, proxy and streamlined walk-in booking | No individual version/file; Registry §3 planning scope | Draft actor/attendee authority, proxy visibility and shared integrity before spec acceptance. |
| 016 Eligible cancellation and cancellation confirmation | No individual version/file; Registry §3 planning scope | Draft cutoff/authority, atomic release and confirmation before spec acceptance. |
| 017 Eligible rescheduling and preserved-original outcomes | No individual version/file; Registry §3 planning scope | Draft atomic reallocation and unknown reconciliation before spec acceptance. |
| 018 Configured supervisor exceptions | No individual version/file; Registry §3 planning scope | Draft permission-specific exceptions, reason and evidence before spec acceptance. |
| 019 Staff QR/manual-reference lookup and attendance | No individual version/file; Registry §3 planning scope | Draft minimum lookup and separate attendance actions before spec acceptance. |
| 020 Controlled printable daily roster | No individual version/file; Registry §3 planning scope | Draft minimum fields, access and paper custody before spec acceptance. |
| 021 Reviewed batch paper/outage reconciliation | No individual version/file; Registry §3 planning scope | Draft item conflict/review semantics; batch atomicity open. |
| 022 Configuration Changes Affecting Accepted Appointments | v0.2 draft; no prior approved version | PO review; IMP-Q01–Q06 and SDD-006 boundary before affected change. |
| 023 Reusable Accessible States and Error-Recovery Presentation | v0.3 draft; prior v0.2 approved §10 | PO review; UX-Q01–Q04, branding owner and later accessibility evidence. |
| 024 Privacy, Data Lifecycle and Incident-Handling Readiness | v0.2 draft; no prior approved version | PO review as planning spec; LIFE-Q01–Q07 and PH-01–PH-10 before affected processing/release. |
| 025 Backup, Restoration and Recoverability Evidence | v0.3 draft; prior v0.1 approved §10 | PO review; BKP-Q01–Q05, ownership and actual backup verification before reliance. |
| 026 Deployment, Maintenance and Exceptional-Support Readiness | v0.3 draft; prior v0.1 approved §10 | PO review as planning spec; OPS-Q01–Q06 before affected operation. |
| 027 Integrated quality, product-fit and release evidence | No individual version/file; Registry §3 planning scope | Draft integrated evidence/qualified review scope before spec acceptance; separate release decision. |

## Exact-version acceptance decisions

Recommend individual PO review and approval within each documented scope, or specific requested corrections; no known documentary blocker is identified by DOC-WP-02. Criteria below are draft criteria, not test results. Earlier approvals retain their exact scope.

| Draft / criteria | Actual commitment and material limitation |
|---|---|
| 002 v0.5 C01–C15 | Internal MFA, default-deny actor/service/action, independent admin approval/recovery; assignments, factor and session/recovery mechanisms open. |
| 003 v0.5 C01–C15 | Attributable outcome-consistent audit, view/export separation and minimal diagnostics; integrity, readers, custody and retention open. |
| 004 v0.3 C01–C10 | Minimum booking data, justified service additions, booker/attendee distinction; actual fields and lifecycle open. |
| 005 v0.4 C01–C15 | Recurring/dated availability, buffers, resources/capacity, duplicate and cutoff boundaries; client values and detailed semantics open. |
| 006 v0.1 C01–C12 | Final checks, atomic outcome, same-intent/unknown handling and D-070; no mechanism or executed concurrency evidence. |
| 007 v0.3 C01–C09 | Six purposes, independent notification recovery and truthful state; provider and processing choices open. |
| 008 v0.2 C01–C11 | Independent appointment-scoped proof, distinct roles, uncertain-claim referral; proof and assisted recovery open. |
| 013 v0.3 C01–C10 | Assigned scoped contested hold, preserve appointment/attendance; intake, assignment and procedure open. |
| 022 v0.2 C01–C09 | Review impact, no silent changes; SDD-006 checks for booking/capacity actions; impact outcomes open. |
| 023 v0.3 C01–C16 | Accessible states, truthful unknown, warning acknowledgement and human/automated verification; branding owner and actual verification open. |
| 024 v0.2 C01–C12 | Minimization, lifecycle and review readiness; PH-01–PH-10 and legal/retention decisions open. |
| 025 v0.3 C01–C08 | Distinguishes plan, backup, restore and particular-client verification; method, objective and owner open. |
| 026 v0.3 C01–C10 | Both hosting models, isolation, scoped support and operations readiness; profile and actual responsibilities open. |
| Registry v0.4 | Current planning overlay only; v0.1 remains provisionally accepted for planning. Approval would not approve SDDs or implementation. |

## Architecture decisions and milestones

D-111 already endorses the five **investigation priorities**, not mechanisms; do not request reapproval. PO can decide the exact SDD versions and appoint engineering and qualified reviewers now. Targeted evidence supports evaluating conflict-domain transaction/optimistic alternatives, coordinated evidence/intent, cryptographic keys with accessible recovery, and a native profile first. The coarse gate and finer protocol remain untested; MariaDB timeout semantics, guest-proof independence, provider ambiguity and restore divergence require version- and installation-specific review. Laravel 12/13 examples are not a selected compatible stack.

| Classification / decision | Owner, evidence and latest milestone |
|---|---|
| Conditional booking mechanism and same-intent contract | Engineering maps all writers, absent rows, policy/authority freshness and failure boundaries; integrity/security review; PO material choice before affected implementation. D-070 is future correctness verification, not an SLA. |
| Conditional evidence/notification mechanism and provider | Engineering proves commit/connection, attribution, six-purpose eligibility and recovery; security/privacy/operations review; PO material choice before affected implementation/provider adoption. |
| Conditional MFA, guest proof, recovery and case authority | PO/service owner and client independent authority; qualified security/privacy/accessibility review before affected implementation/processing. |
| Conditional profile, backup method and measured targets | Engineering and actual operators establish exact-version compatibility, cost and separately authorized feasibility; PO decides material profile/objective before affected adoption or reliance. |
| Installation-specific values, staffing, custody, monitoring, incident, recovery authorizer and support | Actual client/provider owners with PO/service owner and qualified reviewers before affected configuration, processing or reliance. Security/OPS-Q01 concerns ownership; SDD-026/OPS-Q01 concerns profile. |
| Deferred branding, localization, nonessential tooling and numeric commitments | PO/engineering resolve before affected implementation or commitment; P-009 remains unapproved. |
| Release/operational controls | PH reviews as applicable before processing/adoption; independent PH-10 before release as required; protected backups/tested restoration and separately authorized privacy-safe particular-client backup verification before reliance. None is automatically a prerequisite for reviewing a draft SDD. |

## Historical Gate 2 criteria and shortest defensible route

| Historical criterion / evidence | Assessment for a formal historical closure decision |
|---|---|
| Gate 1 approval | **Satisfied:** D-082 and Gate Register record Gate 1 complete. |
| Architecture, logical data, interface and deployment design | **Conditionally satisfiable:** accepted/provisional references and D-088–D-092 working designs exist, but their scope is not final architecture. PO must decide whether the submitted evidence is sufficient for the chosen formal disposition. |
| Q-007 compatibility / dependency disposition | **Unsatisfied for historical final approval:** D-092 records a provisional approach and explicitly leaves final Q-007 disposition open. Exact versions remain later choices; a final disposition need not imply installation or a version selection. |
| Q-008 hosting responsibility and effective-access feasibility | **Conditional:** D-091 requires sufficiently concrete allocation and review before final architecture approval **where needed for feasibility**. Current ownership matrices remain proposed; identify only the missing allocation necessary for the intended disposition. |
| Checkpoint 11 package and review | **Unsatisfied as historical completed/accepted checkpoint:** D-093 describes inventory, annotated screens/states, design system, responsive/accessibility design, representative connected prototype and PO/usability/accessibility design-review evidence; D-096/D-097 authorized bounded work, but CP11 remains unaccepted. Existence does not prove coverage or review. |
| Checkpoint 12 integration/traceability and final review | **Not recorded complete:** preparation exists, not execution/acceptance. D-098 prospectively supersedes these as routine progression; whether and how to dispose of them for historical closure needs explicit PO direction consistent with governance. |
| Requirements/product/engineering design review and traceability | **Conditional:** approved requirements v0.9 with v0.8/v0.7 and traceability 1.3 exist; final cross-design review/traceability for historical closure is not recorded. Existing reference acceptance does not itself prove that review. |
| Historical D-079 cutoff and Q-016/Q-022 quality dispositions | **Conditional / later directions apply:** D-106/107 record cutoff policy and D-109 approves measurable evaluation, not numeric targets. D-098 makes former gate deadlines historical for SDD work. If PO seeks formal historical closure, resolve the applicable disposition under existing records rather than invent a numeric SLA or silently waive it. |
| Explicit Product Owner approval | **Unsatisfied:** no Gate 2 approval recorded. |

**Minimum next action:** PO first chooses whether to retain historical IN PROGRESS while SDD continues, or request a bounded formal historical disposition and identify how D-098 applies to the former CP11/12/final-review obligations. For formal closure, prepare an evidence-backed CP11 status/coverage and review disposition, a bounded cross-design/traceability review or explicitly authorized governance-compatible disposition, and the outstanding Q-007 and feasibility-dependent Q-008/quality-target dispositions. Then PO reviews the concrete record and explicitly decides closure. Do not infer that approving all 27 SDDs, running D-070, real-backup tests or completing release/security assessments is a historical Gate 2 prerequisite: those remain scoped to their own applicable acceptance, processing, operational and release milestones.

**PO questions:** (1) Individually approve, reject or request changes to the 13 exact SDD revisions and Registry v0.4? (2) Retain historical Gate 2 status or authorize a bounded formal disposition, specifying the treatment of superseded routine checkpoint obligations under D-098? (3) If formal disposition is chosen, identify reviewers and direct the minimal CP11, cross-design, Q-007/Q-008 and relevant quality-target evidence/disposition required for that decision. No decision or waiver is recorded by this report.
