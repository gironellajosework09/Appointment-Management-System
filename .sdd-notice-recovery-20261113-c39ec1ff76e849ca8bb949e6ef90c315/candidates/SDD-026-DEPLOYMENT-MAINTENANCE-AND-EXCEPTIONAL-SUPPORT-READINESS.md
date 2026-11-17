# SDD-026 — Deployment, Maintenance and Exceptional-Support Readiness

> **CURRENT STATUS: APPROVED — SDD-026 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **Status: DRAFT — SDD-026 v0.3, pending Product Owner review.** The prior exact-version approval of v0.1 remains historical and unchanged. This revision makes explicit the D-109 source for the already-recorded measurable-recovery-objective boundary without selecting objective values. It authorizes no installation, infrastructure, production access, deployment or support entitlement.

| Field | Value |
|---|---|
| Identifier / revision / date | SDD-026 / v0.3 / 2026-11-13 |
| Owner | Product Owner for scope and policy; actual client/provider and engineering/operations owners remain to be assigned. |
| Draft provenance | Gate 2 W2 documentation-only drafting authorization. v0.2 added the approved measurable-recovery-objective boundary. v0.3 adds the explicit D-109 source reference and updates the status of related drafts only; no objective values or mechanisms are selected. |
| Approval provenance | Exact v0.1 was explicitly approved by the Product Owner; approval date was not separately supplied, recording date 2026-11-13. That approval remains historical. v0.2 and v0.3 are drafts and have not been approved. |

## Revision history

| Revision | Disposition |
|---|---|
| v0.1 | Exact-version Product Owner approval, within its documented scope and open-question boundaries; preserved as historical. |
| v0.2 | Draft alignment to the approved direction that recovery objectives be measurable against the supported operating profile after feasibility evaluation. No objective values, SLA or mechanism is selected. Pending Product Owner review. |
| v0.3 | Adds explicit D-109 traceability and corrects references to the current SDD-024 draft; no substantive policy or criterion changes. Pending Product Owner review. |

## Purpose and scope

Specify the evidence and operational boundaries needed to prepare, install, hand over, maintain and support iTakda in its intended reusable-product model: one maintained product, separately installed for each client with an independent application and database. Accommodate both client-managed and provider-managed hosting without selecting a deployment topology or assigning unapproved service responsibilities.

**In scope:** installation and handover readiness; supported-profile evaluation; environment/configuration and secrets custody; maintenance/update/rollback planning; monitoring and incident/escalation responsibility planning; backup/restore integration; ordinary non-data technical support and tightly scoped exceptional access; separate operational acceptance and release/deployment authorization.

**Out of scope:** executable installation or deployment instructions, hosting/vendor/provider selection, specific operating system/server/network/container/runtime, credentials, configuration fields, backup product/frequency/retention/RPO/RTO, staffing/on-call/SLA commitments, legal controller/processor assignment, production operation or implementation.

## References

- Requirements: [effective Requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md) read with [approved v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and carried-forward [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md); FR-012, NFR-001, NFR-002, NFR-005, NFR-009, NFR-011, BR-004, BR-007, UJ-004, AC-007; S-1, S-2, S-4, S-9.
- Decisions: [Decision Register](../decisions/DECISION_REGISTER.md) D-075 (client/operator boundary), D-083 (both hosting models), D-084 (one standardized supported-profile principle, no profile selected), D-091 (working-design limits), D-102 (due diligence), D-103 (non-data support and exceptional access), D-104 (provider/privacy responsibility context), D-098 (separate SDD authorization and operational/release controls), and D-109 (measurable recovery-objective evaluation and installation-specific operational planning).
- Governance: [Engineering Governance §17](../ENGINEERING_GOVERNANCE.md#17-release-readiness-backups-recovery-and-operations) for ongoing operations, backups/tested restore and separate release/deployment approval; [§5](../ENGINEERING_GOVERNANCE.md#5-spec-driven-development-lifecycle) for risk-scoped SDD authorization.
- Related specification references: [SDD-002](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) v0.5 and [SDD-003](SDD-003-REQUIRED-AUDIT-AND-OPERATIONAL-EVIDENCE.md) v0.5 are current drafts pending PO review; their exact v0.4 approvals remain historical. [SDD-024](SDD-024-PRIVACY-DATA-LIFECYCLE-AND-INCIDENT-HANDLING-READINESS.md) v0.2 is a draft pending PO review; applicable privacy decisions and qualified reviews remain prerequisites before affected processing or reliance. [SDD-025](SDD-025-BACKUP-RESTORATION-AND-RECOVERABILITY-EVIDENCE.md) v0.3 is a draft pending PO review; its exact v0.1 approval remains historical. These drafts do not authorize bypassing applicable dependencies. [SDD-001](SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md) covers local development/test foundation only.

## Expected behavior

1. Each client receives a separately scoped application installation and independent database. Client-managed and provider-managed hosting are both considered; neither implies shared tenancy or shared appointment data. One standardized supported profile is a design direction, not a selected technical profile.
2. Before an installation is relied on, the applicable environment, installation identity, configuration and credential custody boundaries are reviewed and recorded. Secrets are handled through separately authorized operational controls and are not placed in documentation or exposed in client-side artifacts.
3. Installation and handover distinguish developer/installer technical setup from client-controlled credentials and ordinary client business administration. After handover, no standing developer/operator business-record entitlement is assumed. Application identity, hosting/database custody and exceptional access remain distinct.
4. Routine support defaults to non-data technical work. Any exceptional client-record access requires explicit client authorization, least privilege, defined scope and duration, applicable MFA, attribution, review and closure under D-103 and the relevant approved policies. Hosting custody alone does not authorize business-data inspection.
5. Maintenance, updates, rollback, monitoring, incidents and escalation are planned for the actual hosting arrangement and responsibility allocation before use. Recovery objectives are measurable against the supported operating profile after feasibility evaluation; no numeric objective, staffing assignment, response-time or availability target, or provider guarantee is inferred. D-070 workload and concurrency scenarios do not establish recovery, latency or availability results.
6. Before relying on installation data, backups and a tested restore procedure exist as required by Engineering Governance §17. SDD-025 distinguishes planning, creation, restore testing and separately authorized verification of a particular client backup; this draft performs none of them.
7. Any production deployment or release requires the separate approvals and evidence established by governance. Acceptance of this specification or operational planning artifact does not authorize or prove deployment readiness.

## Acceptance criteria

| ID | Given / when / then |
|---|---|
| SDD-026-C01 | Given an installation is prepared for a client, when its boundary is reviewed, then it has a separately scoped application and independent database, credentials and configuration context; no shared cross-client appointment store or shared SaaS tenant is implied. |
| SDD-026-C02 | Given either client-managed or provider-managed hosting, when operational readiness is documented, then the responsibility areas for installation, credentials, updates, monitoring, backup/restore, incident response and exceptional support are explicitly identified for later allocation without assuming a provider or topology. |
| SDD-026-C03 | Given a handover is proposed, when readiness is reviewed, then individual client-controlled credentials and MFA enrollment, closure of temporary setup authority, and client administration boundaries are accounted for; no reusable default credential or standing developer business-data access is accepted. |
| SDD-026-C04 | Given an operator or support actor requests access to client records, when the request is evaluated, then non-data support remains the default and access is denied unless the applicable explicit client authorization, least privilege, scope, duration, MFA, attribution, review and closure conditions are met. |
| SDD-026-C05 | Given secrets, diagnostic artifacts, exports, backups or restored copies are handled, when custody/access is planned, then installation-scoped protection and privacy boundaries are documented and technical custody is not treated as business-record authority. |
| SDD-026-C06 | Given maintenance or an update is proposed, when operational readiness is assessed, then an authorized plan accounts for change approval, verification, failure handling and rollback ownership without claiming that a deployment or rollback has been executed. |
| SDD-026-C07 | Given monitoring, service interruption or an incident is in scope, when responsibilities are prepared, then signal review, escalation, evidence preservation and privacy/security coordination have named accountable parties before operational reliance; no response-time or availability guarantee is invented. |
| SDD-026-C08 | Given an installation's data is to be relied on operationally, when recovery readiness is assessed, then the backup and tested-restore prerequisites of Governance §17 are evidenced, recovery objectives are measurable against the supported operating profile after feasibility evaluation, and SDD-025's artifact-specific authorization and evidence boundaries are preserved. No objective values are inferred. |
| SDD-026-C09 | Given a production release or deployment is proposed, when authorization is checked, then the applicable separate Product Owner approval, plan, rollback and configuration/secrets handling evidence are present; this SDD draft alone never grants deployment authority. |
| SDD-026-C10 | Given acceptance is sought for an authorized operational-readiness scope, when evidence is reviewed, then the actual installation/hosting model, assigned responsibilities, access boundary, recovery evidence, reviewer, limitations and unresolved items are recorded without exposing secrets or client data. |

## Considerations and open questions

| Question | Unresolved matter, proposed owner and timing |
|---|---|
| OPS-Q01 — Supported deployment profile, before deployment design/authorization | Engineering proposes a compatible, maintainable profile and alternatives under D-102; Product Owner approves the material selection. D-084 approves the standardized-profile principle only. No OS, hosting platform, runtime or container is selected. |
| OPS-Q02 — Actual responsibility allocation, before installation or operational reliance | Product Owner and the actual client/provider identify who controls installation, credentials, data, updates, monitoring, backup/restore, incidents and support for the chosen hosting model. D-083 does not assign these duties. |
| OPS-Q03 — Credential, secret and exceptional-access custody, before any privileged operation | Security/engineering propose controls; Product Owner/client authorize actual access and custody arrangements, including time-bounded exceptional support and closure. No standing operator entitlement or credential-sharing arrangement is approved. |
| OPS-Q04 — Maintenance, rollback, monitoring and incident response, before service operation | Engineering and actual operational owners develop a proportionate plan; Product Owner approves material commitments, scopes and escalation. No on-call assignment, SLA, monitoring product or response target is selected. |
| OPS-Q05 — Recovery objectives and client-specific backup verification, before data reliance | SDD-025 and the actual client/provider arrangement define measurable objectives against the supported operating profile after feasibility evaluation, required evidence, authorized access and responsibility; qualified privacy/security review applies. D-070 workload/concurrency scenarios do not supply recovery, response-time or availability values. No RPO/RTO, backup product, frequency, retention period or real-backup access is authorized here. |
| OPS-Q06 — Privacy/legal/provider processing, before personal-data operations | SDD-024 and qualified Philippine privacy/security/legal review address applicable roles, processing locations, notice, retention, requests and incidents. No compliance conclusion, legal role or contract term is inferred. |

### D-102 alternatives and risk summary

| Direction | Benefit and alternative/trade-off | Failure scenario and mitigation | Future verification / residual risk / owner |
|---|---|---|---|
| Accommodate both hosting models under one reviewed operational boundary. | Supports approved client/provider ownership options; standardizing one provider might simplify operations but is not approved and could limit client choice. | Responsibility gaps or credentials cross installations; document actual boundary and accountable owners before use, then verify scoped access. | Review separate installation and credential contexts for each authorized deployment; provider/host compromise remains. Engineering proposes, Product Owner and client/provider allocate. |
| Keep support non-data by default and exceptional access narrowly authorized. | Protects client control; broad standing access can be faster but creates persistent exposure and conflicts with D-075/D-103. | Support staff inspect or retain records beyond task scope; require explicit time-bounded authorization, attribution, review and closure, including artifacts/copies. | Test denied/default and authorized/closed paths under an approved plan; human/credential compromise remains. Product Owner, client and security reviewers. |
| Plan restore and handover separately from technical installation. | Makes operational readiness observable; a single install checklist may be shorter but can hide recovery and ownership gaps. | Installation is treated as safe despite untested restore or unclear custody; apply §17 and SDD-025 evidence before reliance. | Review actual authorized restoration evidence and responsibilities; disaster conditions and latent corruption remain. Actual operational owners and qualified privacy/security reviewers. |

## Plan and verification

- **Drafting dependencies:** accepted SDD-001 and the historical approved scopes of SDD-002 v0.4, SDD-003 v0.4 and SDD-025 v0.1; current drafts SDD-002 v0.5, SDD-003 v0.5, SDD-024 v0.2 and SDD-025 v0.3 remain pending PO review. D-083/D-084/D-091/D-103/D-104 and bounded drafting authority apply; SDD-024 remains a parallel documentation dependency, not a drafting blocker.
- **Implementation/operational dependencies:** approved bounded specification and explicit authorization; selected supported profile; actual client/provider responsibility, credential custody, privacy review, backup/restore plan and applicable recovery objectives. No deployment or client-data operation is authorized here.
- **Integration dependencies:** identity/permission behavior from SDD-002, evidence from SDD-003, privacy lifecycle from SDD-024, recovery evidence from SDD-025, and actual hosting/client responsibilities must align before operational reliance.
- **Acceptance evidence:** future authorized checks of installation isolation, access denial/exception closure, handover, secrets handling, update/rollback plan and recovery evidence; actual release/deployment approval remains separate. No operational or production verification is claimed.
- **Risk class:** high because installation, privileged access, personal data, recovery and deployment are involved; explicit Product Owner authorization and applicable specialist review remain required.

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Current specification/scope approval | **PENDING** Product Owner review for draft v0.3. |
| Historical specification approval | Exact SDD-026 v0.1 was approved by the Product Owner within its documented scope and open-question boundaries. Approval date was not separately supplied; recording date is 2026-11-13. |
| Implementation / deployment / operations authorization | **NOT AUTHORIZED.** No profile, provider, credentials, responsibility assignment, operational service or deployment procedure is approved. |
| Verification/acceptance | **NOT PERFORMED.** No installation, backup, restore, security, privacy or deployment evidence is claimed. |
| Gate / project status | Gate 2 remains historically IN PROGRESS; Checkpoint 11 remains unaccepted. No implementation or release/deployment authorization follows. |

