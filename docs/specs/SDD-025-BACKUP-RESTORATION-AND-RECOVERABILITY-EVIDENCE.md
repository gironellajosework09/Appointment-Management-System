# SDD-025 — Backup, Restoration and Recoverability Evidence

> **CURRENT STATUS: APPROVED — SDD-025 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. The prior exact-version approval of v0.1 remains historical and unchanged. This revision makes explicit the D-109 source for the already-recorded direction that recovery objectives be measurable against the supported operating profile after feasibility evaluation; it sets no objective values and authorizes no backup, restore, client-data access, deployment or production operation.

| Field | Value |
|---|---|
| Identifier / revision / date | SDD-025 / v0.3 / 2026-11-13 |
| Owner | Product Owner for scope and policy; engineering, privacy/security and actual operational responsibilities remain subject to assignment. |
| Draft provenance | Batch 2 documentation-only drafting authorization. v0.2 added the approved recovery-objective measurement boundary and associated evidence criterion. v0.3 adds the explicit D-109 source reference only; no numeric target or mechanism is selected. |
| Approval provenance | Exact v0.1 was approved in an earlier, separate Product Owner decision; its approval date was not separately supplied. That approval remains historical. v0.3 is the approved current revision per Registry §13; v0.2 is retained as prior draft history. |

## Revision history

| Revision | Disposition |
|---|---|
| v0.1 | Earlier exact-version Product Owner approval; preserved as historical. |
| v0.2 | Draft alignment to the approved direction that recovery objectives be measurable for the supported operating profile after feasibility evaluation. No RPO/RTO, cadence, SLA or implementation mechanism is selected. Approved as recorded in Registry §13. |
| v0.3 | Adds explicit D-109 traceability for the existing measurable recovery-objective direction; no substantive policy or criterion changes. Approved as recorded in Registry §13. |

## Purpose and scope

Define what must be distinguished and evidenced when planning backup and recovery for iTakda's independently installed client applications and databases. Engineering Governance §17 requires backups and a tested restore procedure before relying on an installation's data. This specification describes the planning, authorization and evidence boundaries without choosing or executing a recovery mechanism.

**In scope:** installation-scoped backup/recovery planning; distinction among plan, backup creation, tested restore procedure and verification of a particular real client backup; authorization, privacy and isolation boundaries for future recovery evidence; failure and limitation reporting.

**Out of scope:** selecting backup products/providers, infrastructure, topology, encryption, schedule/frequency, retention, RPO/RTO, replication, storage layout, restore tooling, operational owners or support entitlements; executing backups/restores or accessing client data; defining application schema; claiming release readiness or regulatory compliance.

## References

- Requirements: [effective requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) read with [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and preserved v0.7; FR-012, NFR-001, NFR-002, NFR-009, NFR-011, BR-004, BR-009, UJ-004, UJ-005, AC-007, AC-012; S-2, S-5, S-9.
- Decisions: [Decision Register](../decisions/DECISION_REGISTER.md) D-075 (operator/business-data authority), D-083 (installation and custody boundary), D-091 (limited working-design disposition and real-backup verification limitation), D-104 (privacy and provider responsibility context), D-102 (proportionate due diligence), D-098 (specification and implementation authorization remain separate), and D-109 (measurable recovery-objective evaluation after feasibility assessment).
- Governance: [Engineering Governance §17](../ENGINEERING_GOVERNANCE.md#17-release-readiness-backups-recovery-and-operations) (backups and tested restore before data reliance; ongoing operational responsibility).
- Accepted supporting references: [Architecture](../architecture/ARCHITECTURE.md) recovery and P2 deferrals; [Backend Schema](../architecture/BACKEND_SCHEMA.md) conceptual data limitations; [Security](../security/SECURITY.md) T15 and PH-01–PH-10 qualified-review dependencies; [SDD-003](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md) evidence and restored-data privacy boundaries.
- Related planned specification: SDD-024 owns broader privacy/data-lifecycle and incident-handling readiness; SDD-026 owns installation, handover, maintenance and operational custody procedures. Their drafts may be developed in parallel; applicable decisions and operational responsibilities must be resolved before affected reliance or acceptance.

## Expected behavior

The planning and future evidence must distinguish these claims:

| Claim | What it establishes | What it does not establish |
|---|---|---|
| Backup/recovery plan exists | A reviewed plan describes relevant installation scope, authority, custody, privacy and recovery considerations. | That a backup was created or can be restored. |
| A backup was created | A specific backup operation reports a result for an identified installation and point/context. | That the artifact is complete, usable, protected or recoverable. |
| A restore procedure was tested | An authorized test demonstrates the procedure under its stated environment, scope and limitations. | That a particular real client's backup is valid or that all recovery targets are met. |
| A particular real client backup was verified | Separately authorized, privacy-safe evidence supports that the identified backup was restored or otherwise verified under an approved procedure. | General verification of other backups, legal compliance, or an unapproved service guarantee. |

Any future recovery work is limited to the authorized client installation and environment. Technical custody of an application, database, backup, restored copy, diagnostic artifact or credential does not itself grant authority to inspect client business records. Restored data remains subject to applicable access, retention, deletion and privacy restrictions; restoration must not silently remove those restrictions or revive access that should remain restricted.

Recovery planning records unavailable, failed, partial, uncertain and verified outcomes truthfully. An incomplete or unverified backup/restore result is not represented as successful recovery. Before operational reliance on installation data, the applicable backup and tested-restore obligations in Engineering Governance §17 must be met, with the scope and evidence limits stated.

Recovery objectives must be measurable against the supported operating profile after feasibility evaluation. Their values are not set here. Recovery objectives are distinct from response-time and availability targets (Q-016/Q-022), and D-070's appointment-volume, peak and concurrency scenarios do not establish recovery, latency or availability results.

## Acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-025-C01 | Given a client installation, when recovery readiness is described, then the plan, creation of a backup, testing of a restore procedure and verification of a particular real client backup are reported as distinct claims with their actual scope and evidence. |
| SDD-025-C02 | Given an installation's data is to be relied on operationally, when readiness is assessed, then the applicable backup and tested-restore obligations in Governance §17 are evidenced; recovery objectives are measurable against the supported operating profile after feasibility evaluation; and a plan or synthetic rehearsal alone is not represented as a tested real-client backup. No objective values are supplied by this criterion. |
| SDD-025-C03 | Given a backup, restore or verification activity is proposed, when its authorization and scope are checked, then it is installation-specific and explicitly authorized for that environment; this specification alone grants no production/client-data access or operation. |
| SDD-025-C04 | Given technical custody of backups, restored copies, credentials or diagnostics, when access is requested, then custody alone does not grant client-record authority and applicable least-privilege, attribution and installation boundaries are preserved. |
| SDD-025-C05 | Given personal or restricted data in backups or restored copies, when recovery is planned or evidenced, then minimum-necessary exposure, applicable restrictions and qualified privacy review are addressed without claiming deletion, retention compliance or legal approval. |
| SDD-025-C06 | Given a failed, partial, unavailable or uncertain backup/restore result, when it is reported, then it is not described as verified recovery and the stated limitations and required follow-up remain visible; no business-state outcome is fabricated. |
| SDD-025-C07 | Given a restored copy contains restricted or previously limited data, when it is used, then the applicable access, deletion and retention restrictions are reviewed and preserved; restore does not silently reinstate revoked access or remove required history. |
| SDD-025-C08 | Given acceptance is sought for an authorized recovery scope, when evidence is reviewed, then it identifies the actual installation/artifact scope, authorization, procedure, outcome, reviewer and limitations without exposing unnecessary client data. |

## Considerations and open questions

| Question | Unresolved matter, proposed owner and timing |
|---|---|
| BKP-Q01 — Recovery objectives and operational allocation, before operational reliance | Engineering/actual operations owners evaluate feasibility against the supported operating profile and propose measurable recovery objectives; the Product Owner and actual client/provider operational owners determine applicable objectives, responsibilities and escalation. D-091 records no final assignments or numeric targets. D-070 workload/concurrency evidence is not a recovery, response-time or availability result. No RPO/RTO or service promise is selected here. |
| BKP-Q02 — Backup method, protection and storage, before implementation | Engineering/security evaluate proportionate backup, access, integrity, separation and recovery alternatives under D-102, including client-managed/provider-managed hosting implications. Product Owner authorizes material selections; no product, schedule, encryption or topology is selected. |
| BKP-Q03 — Particular real-backup verification, before relying on a specific client backup | Product Owner/client authorization and qualified privacy/security review determine safe scope, custody, evidence and independent review for any real-client verification. No live backup may be accessed under this draft. Synthetic verification cannot substitute for this decision. |
| BKP-Q04 — Retention, deletion and restored restrictions, before personal-data recovery | SDD-024 and qualified privacy review address category/purpose, applicable Philippine review, retention/disposition and restrictions on archived/restored copies. No period, legal basis or erasure guarantee is inferred. |
| BKP-Q05 — Installation handover and ongoing operations, before service reliance | SDD-026 and actual operational arrangements allocate custody, monitoring, maintenance, incident escalation and recovery responsibilities in either hosting model. Technical custody alone does not authorize business-record access. |

### D-102 alternatives and risk summary

| Direction | Benefit and alternative/trade-off | Failure scenario and mitigation | Future verification / residual risk / owner |
|---|---|---|---|
| Keep recovery claims tied to the exact evidence and installation. | Prevents a written plan or generic rehearsal from being mistaken for recoverability; broader real-client checks provide stronger evidence but require authorization and privacy controls. | A corrupted, incomplete or mismatched backup is relied on; identify scope and limits, use an authorized restore procedure and report failure/uncertainty honestly. | Record actual artifact/procedure evidence and reviewer; latent corruption between checks remains. Engineering proposes, Product Owner/client authorizes, qualified reviewers assess. |
| Leave custody and mechanism choices to later design. | Fits both client-managed and provider-managed hosting without implying a universal platform; detailed mechanisms can be tailored but delay implementation/reliance decisions. | Unclear responsibility prevents recovery or leads to unauthorized operator access; allocate actual custody and access before operational reliance. | Review allocation, isolation, recovery and restored restrictions for each authorized deployment; provider/client compromise remains. Product Owner and actual operational owners. |

## Plan and verification

- **Drafting dependencies:** current governance, D-091/D-104, effective requirements and authorization to draft; fulfilled. SDD-024 and SDD-026 operational/privacy contracts may be drafted in parallel.
- **Implementation dependencies:** individually approved scope and explicit implementation/operational authorization; actual responsibility and custody allocation; reviewed recovery objectives and material technical/privacy/security choices. No implementation or data operation is authorized here.
- **Integration dependencies:** an actual independent client installation and its approved hosting/operational procedures must be in scope before asserting installation-specific recovery readiness. SDD-024 privacy restrictions and SDD-026 custody/operations must align.
- **Acceptance evidence:** future authorized plan review, isolated restore-procedure evidence, failure/partial/uncertainty handling and privacy-safe, separately approved evidence for a particular real backup where required. No restore or backup test is performed or claimed by this draft.
- **Risk class:** high when implemented or used operationally because recovery involves sensitive client data, availability and privileged custody; applicable Product Owner and specialist reviews remain required.

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Current specification/scope approval | **PENDING** Product Owner review for draft v0.3. |
| Historical specification approval | Exact SDD-025 v0.1 was approved by the Product Owner within its documented scope and open-question boundaries under a separate earlier decision. Approval date was not separately supplied; recording date is 2026-11-13. v0.3 was approved as recorded in Registry §13; v0.2 is retained as prior draft history. |
| Implementation / backup / restore authorization | **NOT AUTHORIZED.** No data access, recovery execution, provider, product, schedule, objective or operational owner is approved. |
| Verification/acceptance | **NOT PERFORMED.** No backup, restore, environment, privacy or operational testing is claimed. |
| Gate / project status | Gate 2 remains historically IN PROGRESS; Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). No implementation, production access or release/deployment authorization follows. |

