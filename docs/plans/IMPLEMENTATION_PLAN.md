# iTakda Implementation Planning Reference

> **Status: PROVISIONALLY ACCEPTED — development-stage planning reference guidance; no implementation authorization or approved delivery sequence.** [Engineering Governance §5](../ENGINEERING_GOVERNANCE.md) and D-098 govern; the [feature template](../specs/TEMPLATE.md) is the starting point for bounded specifications. This reference is not itself a feature specification or a commitment to a release date.

## Lightweight feature cycle

1. **Specify:** choose a bounded user need; cite effective FR/NFR/BR/UJ/AC records and decisions; define scope, exclusions, observable outcomes, risks and material open questions.
2. **Plan:** identify affected areas, dependencies, verification, change-risk class and required approvals. Escalate unresolved questions that materially affect the feature; unrelated questions do not automatically block it.
3. **Implement:** only within the approved feature and explicitly authorized scope. Ordinary changes require Product Owner spec and bounded-scope approval; high-risk changes require explicit Product Owner authorization and applicable specialist review. Narrow presentation-only work has the standing authorization and restrictions in Governance §5.
4. **Verify:** run appropriate isolated checks and record actual results, failures, limitations and applicable specialist review findings.
5. **Accept:** a reviewer checks the verified change against its spec; Product Owner decisions and approvals reserved to that role are recorded. High-risk findings must be resolved or explicitly dispositioned as Governance §5 requires.

D-101 separately permits qualifying routine refinements of isolated fictional prototypes with appropriate browser verification and concise summaries; it does not authorize real product behavior, new dependencies or deployment. Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112).

## Proposed feature candidates, not a sequential commitment

Use the approved baseline and [traceability](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md) to select a first bounded feature. Candidate areas include client service configuration, shared booking and integrity, account-free management, optional customer accounts and limited-purpose email, staff QR/attendance, controlled roster/reconciliation, audit and operational recovery. Dependencies and risk reviews must be identified per feature; listing an area does not approve its policy, design, implementation order or scope. [PRD](../product/PRD.md) identifies approved and deferred product scope.

Before an affected feature is implemented, resolve material identity, permission, capacity, duplicate, cutoff, privacy or architecture choices as applicable. Security/data-integrity review, isolated verification, genuine product-fit review, qualified independent privacy/security assessment, and release/deployment approval remain applicable independent controls. Backups and a tested restore are required before relying on installation data.

## SDD-001 readiness

The [template](../specs/TEMPLATE.md), effective baseline and working designs can support **drafting** a first specification once the Product Owner identifies its bounded feature and intended outcome. A draft grants no approval, and unresolved material questions or missing authorization block affected implementation. Former sequential gate progression is historical; D-098 did not complete or accept Gate 2 or Checkpoint 11. See the [Gate Register](../GATE_REGISTER.md) for the transition and retained controls.

## Proposed deployment and operations preparation

This supplement is accepted only as provisional planning guidance, not an executable runbook or selected deployment profile. The fingerprinted [Configuration/Deployment working design](../archive/legacy-sdlc/architecture-working-designs/CONFIGURATION_DEPLOYMENT_DESIGN.md) retains its limited D-091 disposition and is not rewritten by this supplement. The accepted [Architecture](../architecture/ARCHITECTURE.md), [TRD](../technical/TRD.md), [Security](../security/SECURITY.md) and decisions govern boundaries. Both client-managed and provider-managed hosting remain design constraints (D-083); one standardized profile is a principle, not a selected host/OS/provider (D-084). Docker remains conditional, not adopted (D-023/D-036).

| Area | Preparation to review before affected operation | Open owner / evidence |
|---|---|---|
| Installation/environment | Independent application and independent database per client; installation-scoped configuration, credentials, artifacts and sender context. Separate development/test/production and authorized restore-validation contexts; never connect to CEAP. | Actual client/provider allocation and supported profile; synthetic isolation/configuration checks. |
| Secrets/access | Identify who provisions, holds, rotates, revokes and recovers each credential. Technical custody is not client-record permission; default non-data support and explicit client-authorized exceptional access remain (D-075/D-103). | Least privilege, scope/duration, attributable review/closure and emergency-access procedure; no entitlement/role assigned here. |
| Deployment/update | Proposed review sequence: approve bounded release/change; verify artifact/configuration/migration compatibility and recovery plan; execute only when separately authorized; check outcome and record disposition. | Executor/reviewer, maintenance communication, rollout constraints and verification; no platform/command selected. |
| Rollback/recovery | Assess application/data/configuration compatibility, irreversible changes and restore/forward-repair paths. Do not assume reverting code reverses schema/data or external effects. | Reviewed migration/recovery evidence before authorized execution; no RPO/RTO or downtime commitment. |
| Backup/disaster recovery | Distinguish a plan, produced backup, tested restore procedure and recoverability of actual client backups. Governance §17 and D-091 require tested procedure plus separately approved privacy-safe real-backup verification before reliance. | Custody, completeness, schedule/retention, protected copies, restore authority and recovery objectives remain open. Synthetic rehearsal is not proof of a particular real backup. |
| Monitoring/incidents | Map essential NFR-011 signals to privacy-safe diagnostics, actionable review, escalation and incident evidence. Inspect service/DB/worker/provider failures and unknown outcomes without claiming success. | Who observes/responds, secure artifact access and maintenance/incident procedure; no availability SLA or alert threshold selected. |
| Mail/delivery | D-095's six purposes and recipient/content matrix only. Review sender/domain and scoped credentials, provider limits/failures, worker supervision and recoverable notification intent as applicable. | Provider/mechanism and TECH-Q02 expectations open; demonstrate no booking undo/repeat, no false success, and recovery of pending/ambiguous delivery. Provider acceptance is not inbox delivery. |
| Privacy/providers | D-104 initial Philippines context and PH-01–PH-10 qualified review; examine actual providers/subprocessors, processing locations, contracts, data visibility and retention/restored restrictions. Client-led requests remain a planning assumption with separately authorized assistance. | Actual legal roles, notices/basis, periods, request/incident allocations and reporting conclusions need qualified review; no managed privacy service selected. |
| Handover/support | Prepare installation identity, approved configurations, authorized contacts/custodians, known limits/open risks, verified backup/restore and support boundaries, incident/request routes and credential transfer/revocation evidence. | Client/provider acceptance of actual duties and separately authorized release/operational reliance. Document acceptance alone is not operational acceptance. |

### D-102 operational trade-offs and dependencies

| Proposed choice | Benefit / alternative / trade-off | Failure, mitigation and future criterion | Residual risk / decision dependency |
|---|---|---|---|
| Standardized per-installation preparation | Reusable checks reduce drift; bespoke profiles offer flexibility at higher support cost. | Wrong credentials/profile exposes data; scoped inventory and synthetic cross-installation/configuration checks. | Operator/provider mistakes; Product Owner supported-profile and actual duty review before deployment. |
| Recoverable notification work | Persistent intent/reconciliation can close commit-to-dispatch gaps; synchronous mail is simpler but couples provider failure to request handling. Queue/outbox adds recovery and cleanup duties. | Crash or retry loses/duplicates external effects; fault-inject commit/enqueue/send/ack boundaries once authorized and reconcile without business replay. | Ambiguous provider delivery; engineering/operations review before mail implementation; no mechanism selected. |
| Verified recovery and controlled updates | Evidence reduces destructive-loss risk; lighter rehearsal costs less but leaves actual-backup uncertainty. | Corrupt backup/incompatible rollback; isolated rehearsal, approved real-backup verification and compatibility/recovery review. | Unproven recovery objectives/completeness; Product Owner and qualified reviewers before operational reliance. |

## Documentation consolidation review and provisional acceptance

| Field | Record |
|---|---|
| Disposition and artifact | **PROVISIONALLY ACCEPTED as development-stage reference guidance** — the reviewed Implementation Planning consolidation draft expanded 2026-11-12, including its operations-preparation supplement. No executable runbook, supported profile or delivery sequence is approved. |
| Authority and dates | Product Owner's explicit Gate 2 Documentation Consolidation decision in the current conversation. Approval date: not separately supplied. Recording date: 2026-11-12; this is not represented as the approval date. |
| Verification | Codex matched the document to the reviewed draft and checked the bounded status/acceptance changes, links, Markdown structure and Git/unrelated-file preservation as reported in the recording chat. No deployment, recovery exercise, application test or operational readiness is claimed. |
| Limitations and handoff | No specific tool, version, provider, mechanism, deployment procedure, legal role, numeric target or implementation sequence is approved. Code Style and Testing have their own provisional reference acceptance; P-009 remains separately unapproved. Material decisions and applicable verification remain governed by existing records. TECH-Q01 and Session 07 acceptance retain their separate scopes. Checkpoint 11 was accepted on 2026-11-13 (D-112); D-098 does not close Gate 2. No SDD-001, implementation, release, operational activity or new gate begins from this document. |

Recorded under Engineering Governance §§5 and 18. Resolve material dependencies before affected work; unrelated open items do not automatically block every feature. Historical approvals and the D-091 working design remain unchanged.
