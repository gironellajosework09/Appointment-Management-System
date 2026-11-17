# SDD-003 — Required Audit and Operational Evidence

> **CURRENT STATUS: APPROVED — SDD-003 v0.5, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.

> **APPROVED — current revision.** Approved by the Product Owner as recorded in the SDD Registry §13/§14; the pre-approval draft status text below is retained as history. SDD-003 v0.4 remains approved for its exact scope; this revision incorporates separately approved evidence-access and diagnostic policy direction while preserving open mechanisms. Feature-specific event/data/permission contracts remain owned by their consuming specifications. **No implementation, database operation, logging/telemetry installation or operational access is authorized.**

| Field | Record |
|---|---|
| Identifier / revision / date | SDD-003 / v0.5 / 2026-11-13; approved revision recorded in Registry §13. |
| Owner / author | Product Owner; Codex-assisted draft. Actual evidence reviewers, administrators and custodians remain to be assigned. |
| Provenance | Batch 1/Revision Pass A and B plus the current authorized MFA policy reconciliation authorize this bounded draft revision. D-105 records MFA coverage policy; approval date not separately supplied; recording date 2026-11-12. Other proposed viewer, evidence and operational details remain subject to review. |
| Planning status / risk | Registry accepted for planning only. Future implementation is high-risk integrity/privacy/security work under Governance §5, requiring explicit scope and applicable specialist review. |

**Policy and specification status:** D-105 and approved Requirements Specification v0.9 record internal MFA coverage. The separately approved current-turn evidence policy requires minimum necessary diagnostic evidence, neutral public security-failure responses, and separate attributable authorization for audit viewing and exporting. Exact reader assignments, export conditions, event catalogs, storage and retention remain open. SDD-003 v0.4 remains approved for its prior exact scope; v0.5 is pending PO review and defines no logging mechanism.

## Purpose and scope

Make required actions and established outcomes explainable and attributable without creating unnecessary personal-data exposure. **Audit evidence** supports accountability for business/security-relevant actions; **operational diagnostics** help explain system behavior. They may have different obligations, readers and retention. Neither a debug message nor a provider acknowledgement automatically proves a business result.

**In scope:** a proposed shared evidence contract, required action/outcome consistency, actor/scope/context minimization, authorized permission-restricted read-only administrative audit viewer, correction/reconciliation provenance, consequential identity/permission/recovery/appointment evidence integration, privacy-safe diagnostics and bounded storage-growth/rotation/monitoring safeguards.

**Out of scope:** choosing log products, telemetry vendors, storage tables/fields, event buses/outboxes, retention periods, generalized analytics dashboards/export packages, generic analytics, business commands, proof methods, case decisions, actual backup/incident operations or logging implementation. No assumption that every read, denial or HTTP request needs a new stored audit record.

Feature owners remain responsible for their event integration and authoritative outcome. This spec does not centralize business command ownership or create separate mandatory records/tables for each concept.

## References

- [Engineering Governance](../ENGINEERING_GOVERNANCE.md) §§5/7/8/11–19 and [Decision Register](../decisions/DECISION_REGISTER.md): approved controls and individually recorded decisions, including D-098 SDD and D-102 proportionate due diligence.
- Effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), read with unchanged [v0.8](../requirements/REQUIREMENTS-SPECIFICATION-v0.8.md) and [v0.7](../requirements/REQUIREMENTS_SPECIFICATION.md); effective [traceability revision 1.3](../requirements/REQUIREMENTS-TRACEABILITY-v1.3.md), read with preserved revisions [1.2](../requirements/REQUIREMENTS-TRACEABILITY-v1.2.md) and [1.0](../requirements/REQUIREMENTS_TRACEABILITY.md). Revision 1.1 remains administrative commentary.
- [Registry](SDD_REGISTRY.md), [template](TEMPLATE.md), [AGENTS](../../AGENTS.md), [Implementation Planning](../plans/IMPLEMENTATION_PLAN.md), [Code Style](../engineering/CODE_STYLE.md) and [Testing](../engineering/TESTING.md) guide this draft within their recorded scope. No tool/version/provider/mechanism is selected; P-009 remains separately unapproved.

- [Architecture](../architecture/ARCHITECTURE.md) §§4–8, [Backend Schema](../architecture/BACKEND_SCHEMA.md), [TRD](../technical/TRD.md) outcome/audit/email and [Security](../security/SECURITY.md) obligations, T07/T11/T15 and PH-01–PH-10 support the review; scenarios are not vulnerability/test evidence.
- Batch contracts: [local foundation](SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md), [internal identity](SDD-002-INTERNAL-IDENTITY-PROVISIONING-AND-PERMISSION-ENFORCEMENT.md) and [presentation](SDD-023-REUSABLE-ACCESSIBLE-STATES-AND-ERROR-RECOVERY-PRESENTATION.md). SDD-024/025/026 in the registry retain lifecycle, recovery and actual operations ownership.

| Source / exact anchor | Approved obligation | Shared contract / feature boundary |
|---|---|---|
| FR-008 effective v0.8; NFR-011; D-047/D-073 | Required booking/change, QR/attendance, configuration/role/exception/operator/reconciliation/monitoring and account/link/dispute/email evidence is attributable as applicable. | Inventory source-required events; consumer specs partition exact event/data/authority needs. No new global payload or universal logging mandate. |
| NFR-006; FR-002/FR-007; BR-013; AC-005/AC-009/AC-026; Governance §11; D-070/D-085/D-090 | Related effects are atomic; no partial/orphaned state; established outcome and required evidence must agree. Known rejected reschedule preserves original; unknown needs reconciliation. | Owning commands enforce this with required evidence. Storage/atomicity/reconciliation mechanism remains open, not selected here. |
| NFR-003/NFR-005; FR-012; BR-004/BR-007; AC-007; D-034/D-075/D-103 | Server-side authority; no default operator client-data access; exceptional access scoped and attributable with review/closure. | Restrict evidence review and technical artifacts too; diagnostics are not an operator backdoor. Actual grants/custody procedures remain open. |
| NFR-009; FR-022; D-050/D-104 | Minimum data, purpose/visibility and qualified privacy/retention treatment. | No credentials, proof secrets, unrestricted before/after payloads or arbitrary personal detail in logs. Exact allowed catalog and retention require review. |
| FR-015; AC-011; FR-021; AC-021/AC-025; D-048/D-103 | Exception reason/actor/time/appointment/rule/before-after evidence; attributable individual link/review/reversal with assigned authority. | Preserve source-required explanatory context where applicable without imposing every field on all events; SDD-013/018 own decisions. |
| FR-016/FR-017; BR-009; AC-012; D-051/D-063/D-074 | Controlled as-of paper provenance and attributable reviewed outcomes; no silent overwrite of newer state. | Consumers SDD-020/021 preserve accepted/conflicted/unresolved item context; batch-wide atomicity/conflict policy remains open. |
| FR-010/FR-020; AC-024; D-095 | Exactly six email purposes and recipient/content rules; failure does not undo a committed change or cause duplicate action. | Distinguish business commit, notification intent/provider acceptance and delivery knowledge. No invented provider events/guarantees or email purposes. |
| NFR-007/NFR-010; AC-006/AC-008; S-4/S-5/S-6/S-8 | Accessible relevant review/feedback, applicable automated and negative/failure verification, recorded evidence. | Proposed restricted audit viewer uses SDD-023 accessibility patterns; no final screen, route or test runner selected. |
| Revision Pass A preliminary direction; FR-008/NFR-011 review/accountability context | Source obligations require attributable reviewable protected evidence, not a selected administrative interface/storage design. | Propose a required permission-restricted viewer, consequential identity/MFA recovery and feature-owned appointment events, plus growth/rotation/monitoring safeguards. Formal spec/policy disposition and exact event/access/retention design remain pending. |

Approved sources remain authoritative over accepted references/proposals. D-088 approves no physical storage; P-009 remains unapproved; D-098 does not accept Gate 2/Checkpoint 11 or authorize product implementation.

## Expected behavior

| Boundary / state | Proposed behavior |
|---|---|
| Evidence classification | Distinguish source-required business/security evidence, operational diagnostics and test/release evidence. Identify purpose, permitted readers and necessary context before producing/retaining each category. Do not duplicate personal payloads across them for convenience. |
| Actor and affected scope | Identify the individually authorized actor where applicable, affected installation/action and relevant approved context/outcome. Where actor cannot be established, do not manufacture identity or authority; classification/recording of anonymous failures needs reviewed policy. |
| Established success | The owning command establishes permitted related state/evidence consistently before claiming success. A later best-effort log cannot substitute for required evidence. Audit storage does not itself authorize the command. |
| Known rejection | Preserve the established unsuccessful result and no partial/orphaned business state. A separate rejected/security attempt may require evidence under its reviewed category; do not falsely record a successful business change or assume every denial needs identical persistence. |
| Unknown outcome / lost response | Distinguish an uncertain browser response from authoritative transaction knowledge. Reconcile same intent/state through the owning feature. Preserve evidence of uncertainty/reconciliation without reissuing commands or relabeling the attempt as confirmed failure/success. |
| Required evidence unavailable | No invented acceptance when required outcome/evidence consistency cannot be established. Apply reviewed command atomicity/uncertainty handling; do not promise a blind rollback after an already committed or externally visible effect. Mechanism remains open. |
| Diagnostic failure | Assess its actual source-required role; not every monitoring failure is identical to losing required audit evidence. No privilege bypass, personal-data dump, duplicate business action or unreviewed universal shutdown rule. |
| Review/access request | Server-side authorized scope and privacy limits apply to search/read/copy/correction/export requests. Audit viewing and exporting are separate permissions; view access does not grant export, correction, disposition or custody. Any separately authorized export is installation/action/record scoped, attributable and limited to reviewed necessary content. Technical custody and generic administrator labels do not grant all audit or client data. No general export facility is introduced. |
| Public security-failure feedback | Authentication, authorization and other security failure responses remain neutral and privacy-limited; they do not disclose protected records, secrets, account existence or internal diagnostics. A separately authorized diagnostic channel may retain only its reviewed minimum evidence and reader access. Exact response mapping and diagnostic signal policy remain open. |
| Correction/reconciliation | Preserve distinguishable prior action and authorized correcting/review outcome, with required provenance; do not silently rewrite history or transfer appointment authority. Exact storage/version/immutability mechanism and correction permission remain open. |
| Notification state | Record only permitted purpose-limited context. Provider API acceptance is not guaranteed delivery; lost browser response does not suppress a legitimate committed-state notification. An authoritatively unknown/uncommitted/rejected/held transaction does not independently authorize success mail. |
| Privacy/retention | Collect/display only reviewed necessary context. Retention/deletion/legal holds, restored restrictions and provider/paper copies require qualified/source-governed policy; do not choose periods or promise erasure. |

No timestamp representation, clock service, correlation/idempotency key, log field schema, hashing/WORM/encryption mechanism or persistence boundary is selected. Tamper resistance and attribution are required qualities to design/test, not claims that an implementation exists. The proposed read-only audit viewer/status must be readable and meaningful without color alone under SDD-023; exact screens, routes and component choices are not selected.

### Proposed administrative viewer and consequential event coverage

Provide an authorized **read-only** administrative audit viewer with reviewed server-side reader permissions and installation/action/record visibility scopes. Administrative or super-admin labels and operator custody do not automatically grant unrestricted audit/client-record access. Evaluate server-side authorization for list/detail/filter/navigation requests and any direct endpoint; present minimum necessary readable event/outcome context with accessible labels/focus/state. Exact layout, query/filter choices, permission assignments and disclosure rules remain open. This is a bounded evidence viewer, not advanced analytics, unrestricted exports or a log-editing/deletion dashboard.

Candidate evidence categories below organize reader/privacy review, not a complete permission matrix, new fixed storage entities or automatic role entitlements. Administrative/super-admin/operator labels do not unlock every category.

| Candidate category | Example source-supported context / reader-review boundary |
|---|---|
| Operational appointment actions | Applicable booking/change/lookup/attendance actions and established outcomes; disclose only the installation/action/record context the reader is authorized to review. |
| Administrative/configuration changes | Applicable user/permission and governed service/configuration changes; sensitive delegation/change evidence may need distinct reviewed visibility from routine appointment work. |
| Security-sensitive identity/MFA/privilege events | Provisioning, factor lifecycle, access and privilege events where adopted by their feature specs; protect proof/factor/recovery secrets and unnecessary personal details even from broadly titled administrators. |
| Recovery, exception and reconciliation | Attributable reviewed recovery, supervisor exception, dispute and paper-reconciliation outcomes/provenance; viewing evidence does not grant case review, factor reset, exception approval or business-mutation authority. |

Ordinary viewer access is separate from export, correction, retention/disposition, deletion, archival/custody and restore operations, each of which needs its own applicable reviewed authority and feature/operational scope. The viewer grants no edit/delete/conceal action, general export capability or administrative permission to alter mandatory history. Exact category intersections, reader assignments and field-level disclosure remain open.

Cover consequential identity/provisioning, privilege/permission changes, factor enrollment/replacement/revocation and MFA/super-admin recovery where adopted by their applicable feature specifications, as well as source-required appointment creation/change/lookup/attendance/exception/link/dispute/reconciliation and limited-purpose email events. D-105's MFA coverage decision does not itself approve new event fields or retention. Producers own validated actor/action scope and authoritative outcome; SDD-003 supplies consistent restricted evidence and review, not appointment or recovery command authority. Do not log credential/factor/recovery secrets or add unapproved email notifications.

### Storage growth, rotation and safe retention — proposed controls

Assess database and file storage growth, sustained event volume, bursts, failed/abusive attempts, evidence-copy/index/backup overhead, disk capacity and hosting quotas. Review byte/quota capacity and file-count/inode limits where applicable to the eventual filesystem/architecture; no filesystem, one-file-per-event scheme, telemetry vendor or storage layout is chosen. Avoid solving growth by arbitrary personal-data collection or unlimited retention assumptions.

Define monitored capacity/failure indicators, responsible responders and reviewed warning/action thresholds before operational reliance, with actual allocation under SDD-026 and lifecycle dependencies under SDD-024/025. Thresholds, forecast/load profile and storage/rotation mechanism remain unresolved. Monitoring cannot silently disclose evidence or promise detection/delivery.

Distinguish diagnostic log rotation from required-audit retention/archival. A diagnostic rotation job cannot assume authority to remove mandatory audit evidence. Safe audit archival/recovery must preserve required accessibility, attribution, outcome meaning, privacy restrictions and approved retention/custody. Rotation is not approval to delete mandatory evidence; a full disk, inode exhaustion or retention job must not silently delete/alter it. Any permitted disposition needs approved category/purpose policy and qualified review with attributable execution; no arbitrary period, blanket erasure guarantee or immutable product is selected.

When required audit persistence cannot be established under capacity/failure pressure, the owning operation must not claim unestablished acceptance and must follow reviewed atomicity/uncertainty handling. Diagnostics have their own policy; do not invent a universal shutdown, fail-open bypass, automatic rollback-after-commit or unsafe retry. Recovery/reconciliation must preserve authoritative knowledge and mandatory evidence.

### Purpose-limited evidence, handover and client administration

Collect only purpose-justified minimum identity/audit context. Qualified privacy review under Security PH-01–PH-10 must address personal information in evidence, reader access/disclosure, applicable Philippine requirements, retention and authorized disposition, archives/backups and restored data/restrictions. These are review subjects, not legal-compliance findings, fixed periods or controller/processor assignments.

The preliminary delivery model is one maintained complete product separately installed with an independent database per client. Record consequential initial technical/business configuration and controlled first-super-admin provisioning/activation/MFA events according to their applicable feature/operational specifications. The actual authorized developer/installer actor and client/setup authority must be attributable as applicable; do not impersonate a client administrator or fabricate an identity merely because handover has not yet completed. Representation remains a design question.

At handover, evidence should establish the reviewed configuration/access context, client establishment/control of individual credentials and MFA, and closure or separately authorized disposition of temporary developer/application access, without recording credential/factor/recovery secrets. No permanent developer/operator business-data authority follows. After handover, ordinary client service/schedule/capacity/staff changes remain permission-limited, attributable and subject to the applicable integrity rules.

SDD-002 owns application identities/permissions; SDD-003 owns required evidence/read-only review and feature-owned event integration; SDD-026 will own detailed installation, initial setup/handover, operational credential custody, maintenance and exceptional support procedures, with SDD-024/025 lifecycle/recovery dependencies. Client-managed routine business operations do not select client-only hosting or waive D-083's both-hosting-model boundary. No installer, configuration capability, audit export or operational execution is authorized here.

## Acceptance criteria

SDD-003-C01–C15 are local proposed criteria; all checks are future and unexecuted.

| Local criterion | Given / when / then — future evidence |
|---|---|
| SDD-003-C01 | Given an affected feature's reviewed event classification, when evidence is proposed, then its source obligation, purpose, necessary context, permitted reader and outcome are identified without treating every concept as a stored entity. |
| SDD-003-C02 | Given an authorized attributable action, when its required evidence is produced, then it identifies the appropriate actor/scope and established result under the approved catalog; unestablished actors are not invented. |
| SDD-003-C03 | Given required business/evidence consistency, when a command is accepted, then its authoritative result and required evidence agree; inject failures at relevant boundaries once implementation is authorized. |
| SDD-003-C04 | Given known rejection, when inspected, then no successful business event or partial/orphaned business state is asserted, and any required denial/security evidence follows its own approved category. |
| SDD-003-C05 | Given missing browser response or uncertain authoritative outcome, when reconciled, then knowledge states remain distinct and same-intent resolution does not create a duplicate command or fabricate success/failure evidence. |
| SDD-003-C06 | Given required-evidence failure, when the owning operation reports its outcome, then it does not invent acceptance; reviewed atomicity/unknown handling applies. Given only a diagnostic failure, do not apply an unapproved universal business-failure rule. |
| SDD-003-C07 | Given a read-only viewer/list/detail/direct request for operational, configuration, security-sensitive or recovery/exception/reconciliation evidence, when reviewed server-side reader permission and installation/action/record scope are evaluated, then only permitted minimum context is visible and unauthorized requests are denied without disclosure or mutation. Admin/super-admin/operator labels do not grant all-category access or export/correction/deletion/custody powers. |
| SDD-003-C08 | Given fictional secret/PII markers, when permitted events/diagnostics are generated and reviewed, then unauthorized credentials, proof secrets and unnecessary personal payloads are absent; review permitted necessary exception fields separately. |
| SDD-003-C09 | Given an authorized corrective/reversal/reconciliation action or a separate disposition operation, when reviewed, then mandatory history and correcting outcome remain attributable/protected with required provenance and newer authoritative state intact. Ordinary viewing cannot silently alter, conceal or delete evidence or grant a new business/recovery authority. |
| SDD-003-C10 | Given six-purpose notification processing, when commit/dispatch/response/delivery knowledge differs, then evidence does not equate provider acceptance with delivery, undo a committed booking, suppress legitimate committed-state mail solely for browser response loss, or trigger duplicate commands/notifications. |
| SDD-003-C11 | Given reviewed purpose-based privacy/retention/authorized-disposition rules, when identity/audit evidence, archives/backups or restored copies are handled, then necessary data, reader restrictions and restored access/disposition safeguards are preserved with applicable qualified Philippine/privacy review. No universal period, compliance finding or erasure guarantee is inferred; restore execution remains separately authorized. |
| SDD-003-C12 | Given an actual consumer integration, when seeking acceptance, then applicable outcome/evidence consistency, access denial, privacy, tamper-resistance and failure checks plus specialist review are recorded. Synthetic producer tests alone do not prove every business workflow's audit compliance. |
| SDD-003-C13 | Given consequential identity/permission/MFA lifecycle or recovery, installation/handover and appointment actions under their applicable reviewed specifications, when outcomes and evidence are produced and reviewed, then required authorized actor, scope and authoritative outcome context is available through permission-limited review without exposing secrets or substituting diagnostics for mandatory evidence. Handover does not silently retain developer credentials/access. MFA coverage is governed by D-105 and approved NFR-003 v0.9. This criterion selects no logging/evidence mechanism, retention period or unrestricted reader permission. |
| SDD-003-C14 | Given reviewed database/file growth, disk/hosting quotas and applicable file-count/inode limits, when pressure, diagnostic rotation, mandatory-audit archival/recovery or retention handling is simulated, then reviewed monitoring/response and evidence-preserving behavior avoid silent mandatory-history alteration/deletion, false business success or blind retry. No one-file-per-event model, product, numeric threshold or retention period is assumed. |
| SDD-003-C15 | Given an audit-view or export request and a public-facing security failure, when each is handled, then view permission does not imply export permission; any separately authorized export is scoped and attributable; and public feedback remains neutral while diagnostic evidence is minimum-necessary and restricted under reviewed policy. No export mechanism, universal failure log or diagnostic field is selected. |

## Considerations and open questions

| Stage | Dependency meaning |
|---|---|
| Drafting | Can proceed from approved sources with Batch 1's identity/presentation contracts; no finished SDD-002 or business implementation required. |
| Implementation | Approved bounded spec/scope and explicit high-risk authority, relevant context/access/privacy and integrity decisions, authorized SDD-001 local baseline and applicable reviews. Synthetic producers may isolate work but authorize no live business bypass. |
| Integration | Real consumer commands must supply/evaluate valid actor and established outcomes; SDD-002 supplies internal authority, other identities come from their own features. Evidence framework does not make all consumers complete. |
| Acceptance | Verify the bounded evidence contract with real integrations required by its accepted scope; later consumers each verify their own event consistency. No circular requirement to implement every product feature first, and no mock-based claim of full product audit compliance. |

| Local question / timing | Recommendation, alternative and owner |
|---|---|
| EVD-Q01 — category/viewer/export minimum context and readers, before affected implementation | Review the four candidate category groupings, server-side installation/action/record reader scopes and minimum fields. Separately authorize viewing, exporting, correction, disposition and custody; view does not imply export. Any export must be attributable, scoped and limited to reviewed necessary content. Include actual developer/setup and client handover events through applicable specs. Product Owner policy with engineering/security/accessibility and qualified privacy review; no role matrix or universal administrator visibility. |
| EVD-Q02 — consistency and tamper resistance, before affected implementation | Engineering evaluates proportional atomic outcome/evidence, uncertain-state/reconciliation and tamper-resistance design under D-102. Alternatives depend on authorized stack and fault model; Product Owner resolves material policy/risk, not arbitrary storage products. No mechanism chosen. |
| EVD-Q03 — diagnostic/denial/anonymous failure handling, before collection | Approved direction: public security failures are neutral and privacy-limited, and diagnostic evidence is minimum-necessary. Still review which signals are needed, safe attribution and permitted diagnostic readers; lower signal volume trades diagnostic value for less collection/exposure. Product Owner with security/operations/privacy input. No blanket every-request logging, personal-data capture, account enumeration or universal diagnostic fail-open/fail-closed policy. |
| EVD-Q04 — lifecycle/capacity/custody, before processing or reliance | Review database/file growth, disk/hosting quotas, applicable file-count/inode constraints, diagnostic rotation versus required-audit archival, monitored thresholds/responders and safe recovery/restored restrictions. Qualified privacy review covers Philippine applicability, personal evidence, readers/disclosure and approved retention/disposition. Actual setup/handover/operations remain SDD-026 with SDD-024/025 dependencies; no periods, architecture or legal allocation chosen. |

| D-102 direction / benefit | Alternative / trade-off | Failure; mitigation/recovery | Verification / residual risk / owner |
|---|---|---|---|
| Shared minimal evidence contract supports consistent accountable outcomes. | Separate ad hoc logs are quicker but drift; over-centralizing business commands is unnecessary coupling. | A command commits without required evidence or a log claims false success; review shared contract and consumer consistency/uncertainty handling. | Boundary fault injection and reconciliation tests; consumer omissions remain possible. Engineering/data-integrity/security review, Product Owner material policy. |
| Separate diagnostic purpose reduces unnecessary exposure. | Full payload logging aids diagnosis but increases leak/retention risk. | Secrets/attendee details leak through logs/exports/backups; minimize, restrict access and review every category/copy. | Fictional marker/access/copy review; privileged custody and unexpected input remain risks. Qualified privacy/security and actual custody owners. |
| Reviewable correction provenance preserves accountability. | Silent edits are simpler but destroy explanation; a mandatory immutable product is not selected automatically. | Reviewer misuse or restore loses/revives restrictions; scoped authority, explainable corrections and approved restoration review. | Authorized correction/reversal and later restore tests; human/provider compromise remains. Product Owner policy and engineering/qualified reviewers. |

Accessibility applies to the proposed audit viewer and every evidence presentation; use SDD-023 patterns for readable persistent outcomes and labels/focus. Integrity is not a toast, a viewer screen or a log-product capability claim. New legal obligations, retention/deletion values, evidence owners and operational support access are not decided by this draft.

## Plan and verification

Future only: review event classification and open questions with consumer contracts; prepare explicit bounded implementation/design and specialist review; implement only when authorized; exercise synthetic producers plus actual required consumer integrations with fault injection, access denial and privacy markers; record reviewer/results/limits before individual acceptance.

No logging products, tables, telemetry providers, environments, databases, fixtures or runtime checks are created/executed now. Evidence is planned, not observed security, recovery or audit compliance. Keep each consumer's acceptance evidence distinct from the shared contract.

## Revision Pass A history and disposition

Draft 0.2 revises the unapproved draft 0.1 under preliminary review directions: a required restricted audit viewer, consequential identity/permission/MFA-recovery and appointment evidence, and capacity/rotation/monitoring safeguards. C01–C12 identifiers remain; C07/C09 are clarified and C13/C14 added. EVD-Q01–Q04 remain open. No logging/storage/retention architecture, new operator entitlement, formal MFA policy, general analytics or implementation is approved.

Prior affected criterion rows are retained below as historical draft 0.1 wording, not current requirements:

| Local criterion | Prior draft 0.1 wording |
|---|---|
| SDD-003-C07 | Given unrelated staff, an unassigned administrator/operator or client-supplied role claim, when requesting evidence, then unauthorized disclosure/mutation is denied even through direct requests or technical artifact paths under reviewed controls. |
| SDD-003-C09 | Given an authorized correction/link reversal/paper reconciliation, when examined, then prior action and reviewed accepted/conflicted/unresolved outcome remain explainable and attributable without silent overwrite or new appointment authority. |

## Revision Pass B continuity and preliminary disposition

Draft 0.3 refines the existing read-only viewer/category boundary, evidence integrity/privacy and database/file/diagnostic-rotation safeguards; it adds only relevant developer setup/client handover evidence implications, with detailed operations left to SDD-026. All fourteen criterion identifiers and source relationships remain; C07/C09/C11/C13/C14 are clarified and no criteria are added/removed. EVD-Q01–Q04 remain open; no final permissions/storage/retention, legal compliance or policy/spec approval is recorded.

Prior draft 0.2 wording is preserved below as history, not current behavior; earlier Pass A history remains above.

| Local criterion | Prior draft 0.2 wording |
|---|---|
| SDD-003-C11 | Given approved retention/restoration/access rules once resolved, when restricted/deleted evidence or copies are handled, then source-governed restrictions are preserved and no universal retention/erasure claim is inferred. Restore execution is separately authorized later. |
| SDD-003-C13 | Given consequential identity/permission/MFA recovery and appointment actions under their applicable reviewed specs, when accepted/rejected/uncertain events are produced and viewed, then required actor/scope/outcome context and accessible permission-limited review are present without secrets or diagnostic-only substitutes. Pending MFA policy is not treated as approved by this test. |
| SDD-003-C14 | Given reviewed storage/copy growth assumptions and simulated byte/quota/file-count/inode exhaustion where applicable, when capacity/rotation/retention/failure handling is verified, then approved monitoring/escalation and evidence-preserving behavior are demonstrated without silent mandatory-evidence deletion/alteration, false business success or blind retry. No architecture, numeric threshold or retention period is selected by this criterion. |
| SDD-003-C07 | Given a viewer/list/detail/direct request, when its reviewed permission and installation/action/record scope are checked server-side, then authorized users receive only permitted minimum evidence and unrelated staff/admin/super-admin/operator or client-role claims are denied without disclosure/mutation. No default administrator audit entitlement is inferred. |
| SDD-003-C09 | Given authorized correction/link reversal/paper reconciliation, when examined, then prior action and accepted/conflicted/unresolved outcome remain explainable and attributable; no silent deletion/alteration of mandatory evidence, overwrite of newer state or new appointment authority is introduced. Disposition/correction follows reviewed permissions and policy. |

## MFA policy reconciliation and Revision Pass C

Draft 0.4 updates SDD-003-C13 and current policy/source references to reflect D-105's recorded MFA coverage decision and then-proposed NFR-003 v0.9. No acceptance-criterion identifiers were added or removed. Reader permissions, evidence categories, consistency mechanisms, retention, storage and operational custody remain open. At draft issuance this version awaited Product Owner review; its approval is recorded below. No audit mechanism, implementation or deployment is authorized.

## Current-turn policy alignment — Revision Pass D

Draft 0.5 incorporates separately approved direction that audit viewing and exporting are distinct permissions, any authorized export is attributable and scoped, diagnostics retain only minimum necessary evidence, and public security-failure feedback is neutral. SDD-003-C15 is added; C01–C14 identifiers and their source relationships remain unchanged. EVD-Q01/Q03 retain unresolved reader assignments, export conditions, signal policy and evidence mechanisms. SDD-003 v0.4 approval is preserved historically; v0.5 is approved as recorded in Registry §13. No export feature, logging mechanism, legal conclusion, retention period or implementation is selected.

## Approval and acceptance

| Record | Current disposition |
|---|---|
| Drafting | AUTHORIZED by explicit Batch 1 instruction and subsequent bounded revision instructions; approval date not separately supplied. |
| Prior specification and criteria | **APPROVED** for exact SDD-003 v0.4 within its documented scope and open-question boundaries; approval provenance and recording date 2026-11-12 are preserved. No evidence schema, retention period or unrestricted review permission is inferred. |
| Current specification and criteria | **APPROVED — SDD-003 v0.5.** Approved 2026-11-13 as recorded in Registry §13; earlier draft-status text describes pre-approval history. |
| Implementation / technology | NOT AUTHORIZED / NOT SELECTED. No database, logging, telemetry, encryption or transaction mechanism adopted. |
| Verification and feature acceptance | Documentation checks only as reported in the drafting chat. No runtime, fault-injection, security, privacy/legal, database or recovery verification performed; acceptance not recorded. |
| History/boundaries | Approved requirements, reference histories, P-009, independent client isolation, CEAP prohibition and historical Gate 2 status remain unchanged; Checkpoint 11 was accepted on 2026-11-13 within its documented design/prototype scope (D-112). |

Implementation, evidence mechanisms, export capability and deployment remain **NOT AUTHORIZED**. Current v0.5 review is separate from the preserved v0.4 approval; no automatic implementation follows.
