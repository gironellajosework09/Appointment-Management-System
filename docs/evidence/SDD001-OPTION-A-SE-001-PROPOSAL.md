# SDD-001 Option A — Proposed SE-001 and Review Conditions

**Status: DRAFT FOR QUALIFIED SECURITY REVIEW AND PRODUCT OWNER DECISION — NOT AUTHORIZED.**

This is a proposed, evaluation-specific security exception and review packet. It is not a Decision Register authorization, specialist approval, runtime authorization, or SDD-001 implementation authorization. No PHP, Composer installation, Laravel, PHPUnit, database, or networked application check was run in preparing it.

## 1. Authority and record basis

- [Engineering Governance](../ENGINEERING_GOVERNANCE.md) §§3, 5, 7, 9, 10, 12–14, 16, 18–19: high-risk review, environment and secret controls, security exceptions, isolated testing, evidence, and separate approval.
- [Decision Register](../decisions/DECISION_REGISTER.md) §7: SE identifiers are independent, never reused, and the register records Product Owner authorization; detailed scope, controls, owner, expiry/review, and closure belong in exception evidence.
- [Gate Register](../GATE_REGISTER.md): Gate 3 is historical planned work; under D-098 its sequential progression is not a prerequisite, but applicable security and data-integrity review remains required.
- [D-114](../decisions/DECISION_REGISTER.md#933-sdd-001-technical-direction-and-phpunit-choice): PHP 8.5.12-1 x64 NTS, Composer 2.11.2, Laravel 13.40.0 and PHPUnit 12.5.43 direction; no database creation, migration, connection, or external dispatch for SDD-001.
- [SDD-001 v0.3](../specs/SDD-001-APPLICATION-FOUNDATION-AND-INSTALLATION-CONFIGURATION.md): approved feature specification; implementation and dependency installation are not authorized by that approval.
- Prior scratch-test authorization designated `C:\Users\J\iTakda-evaluations\sdd001-runtime` and required OS-enforced network isolation of the actual runtime, including protection against local database access. It required stopping if effective isolation could not be established. The PO's later Option A approval accepts the direction only and explicitly does not authorize execution. This proposal seeks a narrow replacement for that prior condition.

The SE register currently has no authorized entries. **SE-001** is the next available identifier. It is reserved here as a proposal and must not be represented as approved or inserted as an authorized register entry until every prerequisite below is complete and the Product Owner expressly authorizes it. If the proposal is declined, retain this identifier and its declined status; do not reuse it.

## 2. Proposed exception record

| Field | Proposed value |
|---|---|
| Identifier | SE-001 (proposed; not yet authorized) |
| Exception | Waive OS-enforced network isolation of the actual PHP/Laravel/PHPUnit runtime solely for the one-time SDD-001 scratch compatibility evaluation described here. This does not waive the isolation requirement for future security audits, general application testing, implementation, or deployment. |
| Governance exception | Permit only non-database bootstrap, route, and PHPUnit compatibility checks in a disposable Windows scratch environment without the separate test database otherwise required by Governance §14. No test in this package may create, open, connect to, or write a database. General §14 requirements remain unchanged. |
| Scope | `C:\Users\J\iTakda-evaluations\sdd001-runtime` only; synthetic local/testing values; approved tool versions and reviewed dependency graph only; exact file/action allowlist to be confirmed in the final execution authorization. No repository, XAMPP, PATH, CEAP, production, personal/client data, credentials, external integration, or deployment access. |
| Justification | The prior read-only host capability check found Windows 10 Home Single Language x64, Windows Sandbox unsupported, WSL unavailable, and no VM command found in PATH; DISM feature inspection required elevation and did not establish another supported isolation mechanism. The PO selected controlled Windows compatibility testing to answer the narrow Laravel/PHPUnit compatibility question. The package is deliberately non-persistent and does not need a database to answer that question. |
| Residual risk | Reviewed PHP and package code would run with the Windows account's permissions and host network access. It could read or alter accessible files, launch child processes, or transmit data before detection. Synthetic configuration, absence of credentials/database drivers, a disposable scratch tree, least-privilege account, and monitoring reduce exposure but do not provide equivalent isolation or prevent all effects. |
| Proposed compensating controls | Exact dependency-lock comparison to the reviewed 110-package inventory; fresh Composer locked advisory review; reviewed official package sources and checksums; Composer scripts/plugins disabled; isolated PHP/Composer by absolute path; no credentials or DB configuration/drivers; synthetic-only test inputs; disposable scratch-only outputs; no skeleton setup, generators, migrations, SQLite, mail, queues, or dispatch; capture and post-run review of process, file, IPC, and network events; immediate stop on unexpected behavior. These do not replace OS network isolation. |
| Owner | Product Owner is the exception approver and risk owner. The authorized operator is responsible for maintaining the scratch boundary and evidence; the person must be named in the final authorization. |
| Required review | A qualified, independent human security reviewer must assess this exception and the monitoring design before PO authorization. A separate independent acceptance reviewer must review the completed compatibility evidence before it is reported accepted. Neither reviewer is identified or has approved this proposal yet. |
| Expiry / review | One execution window for the named scratch evaluation, ending when the authorized commands finish or are stopped. Expire at completion, any scope/graph/tool change, unexpected event, or 30 calendar days after authorization, whichever comes first. No carry-forward to another test or audit. Any rerun requires fresh review and authorization. |
| Status | PROPOSED — pending monitoring-control validation, qualified security review, named operators/reviewers, and explicit Product Owner authorization. |

## 3. Monitoring design and unresolved control

### Detection proposal

Before any future execution, a read-only preflight must establish whether the approved host has a trusted, available event-capture tool and whether it can capture the complete PHP process tree. Separate Composer dependency acquisition/audit from application execution: Composer may contact only the approved package/advisory sources during its explicitly authorized install/audit phase; those expected requests are recorded as install-phase network activity. During Laravel/PHPUnit runtime, no network or database access is expected, and any observed attempt stops the runtime phase. The proposed detection set is:

1. Capture process creation and parent/child relationships for the isolated PHP process and every descendant.
2. Capture file-system create, write, rename, and delete events for those processes, with full paths, before, during, and after the run. Compare a pre-run inventory and hashes for the scratch tree and approved evidence locations to post-run results. Any changed or new path outside the allowlist is unexpected.
3. Capture network connection attempts/results for TCP and UDP, including loopback, plus named-pipe/IPC access where available. Correlate events to the captured process tree. Review all events, not only events matching the expected scratch path.
4. Store the native event log and sanitized report only in the approved scratch evidence directory. Record tool identity/version/signature, capture settings, start/stop times, process IDs, dropped-event indicators, event counts, and before/after inventories. Qualified security review must confirm that the capture is complete enough for these claims.

Microsoft documents Process Monitor as capturing file-system, Registry, and process/thread activity, and Sysmon as recording process creations and network connections. Microsoft documents Windows Firewall logging for allowed and dropped network connections. These are candidate sources, not proof that a particular installed configuration captures every relevant event on this host. Any system-wide logging change, driver/service installation, elevation, or firewall-policy change needs explicit scope in the later authorization and security review. [Process Monitor](https://learn.microsoft.com/sysinternals/downloads/procmon), [Sysmon](https://learn.microsoft.com/sysinternals/downloads/sysmon), [Windows Firewall logging](https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/configure-the-windows-firewall-log).

### Detection is not prevention

The proposed event capture is detective. It cannot stop a write or network action, undo exfiltration, prove that no event escaped capture, or establish a boundary equivalent to a VM or OS sandbox. Disabling PDO/SQLite/database extensions and omitting database configuration prevents ordinary supported Laravel DB access through those drivers, but is not a general network control and cannot prove that arbitrary package code will not open sockets or use another mechanism. Do not describe these controls as isolation.

### Stop condition: monitoring not established

Read-only host inspection found that `C:\Users\J\iTakda-evaluations\sdd001-runtime` does not currently exist. `Procmon`/`Sysmon` executables were not found through the checked command search; this does not prove they are absent from every location. No monitor has been installed, configured, or validated. Therefore **complete and reliable monitoring has not been established**. A qualified reviewer must approve a concrete, available capture configuration and its coverage before any execution authorization. If the preflight cannot verify process-tree coverage, file/IPC events, allowed and blocked network attempts including loopback, no dropped events, and scratch-contained evidence, stop; do not run PHP/Laravel/PHPUnit under this proposal. Monitoring detects activity but cannot prevent a runtime network attempt or data transfer; this residual risk must be explicitly dispositioned by the qualified reviewer and Product Owner, not described as isolation.

## 4. Reviewer assignments and evidence ownership

No qualified security reviewer, security approval, or independent acceptance reviewer is recorded for this package. Governance §§3, 5, 18–19 and D-072 require human review and clear separation of preparer, reviewer, approver, and independent reviewer roles.

- **Qualified security reviewer — pending Product Owner assignment.** The reviewer must be a qualified human independent of the proposal author and execution operator, with relevant Windows host/process/network monitoring and application security experience. They review residual risk, control coverage, stop conditions, and whether the proposed exception remains within mandatory safety and data-protection requirements. Record identity, qualifications relevant to the review, scope, date, findings, and disposition. No approval is claimed here.
- **Independent acceptance reviewer — pending Product Owner assignment.** A different human from the execution operator reviews the final lock comparison, fresh dependency advisory findings, runtime/test outputs, event captures, hashes, deviations, and limitations. This review follows execution and does not approve the security exception or implementation.
- **Product Owner — exception approver and risk owner.** Approval follows qualified review and a demonstrated monitoring preflight. The Product Owner records any disposition of review findings and the exact bounded authorization.
- **Evidence preparer/operator — to be named in final authorization.** This person may not self-approve security review or independent acceptance.

## 5. Preconditions before SE-001 can be authorized

1. Assign the qualified security reviewer and independent acceptance reviewer by name/role; receive and record the security review findings and disposition.
2. Demonstrate, without running Laravel/PHPUnit, that the selected event-capture configuration is available, correctly scoped, detects all listed event classes, produces no dropped events, and stores evidence only in the designated scratch directory. If this cannot be demonstrated, the proposal stops and requires a different environment or revised PO decision.
3. Confirm the scratch directory is new/disposable and establish the exact path/file/action allowlist, the actual verified PHP/Composer binary paths, and the reviewed dependency inventory/hash baseline.
4. Insert SE-001 as an authorized Decision Register entry only after explicit PO approval, with its rationale and scope; retain this document as its detailed evidence. Do not amend SDD-001 or general Governance §§13–14.
5. Issue a separate explicit execution authorization. This exception preparation itself authorizes no installation or execution.

## 6. Proposed Decision Register row (for use only after approval)

| ID | Exception | Authorisation and rationale | Owner | Expiry / review | Status | Gate evidence |
|---|---|---|---|---|---|---|
| SE-001 | Waive OS-enforced network isolation only for the one-time controlled Windows SDD-001 scratch compatibility evaluation; permit only non-database tests without a separate test database as a narrow Governance §14 exception. | Product Owner authorization date to be recorded only when supplied. Rationale: bounded compatibility check on the selected host; full terms and residual risks in the linked evidence. | Product Owner (risk owner); named execution operator | End of one authorized run or 30 days after authorization, whichever first; immediate expiry on deviation | Do not use until explicitly authorized | [SDD-001 Option A SE-001 review packet](SDD001-OPTION-A-SE-001-PROPOSAL.md) |

## 7. Exact Product Owner authorization wording for later use

Use only after the qualified security review, reviewer assignments, monitoring preflight, and exact file/action allowlist are complete:

> I authorize SE-001 as documented in `docs/evidence/SDD001-OPTION-A-SE-001-PROPOSAL.md`, subject to the recorded qualified security review and its dispositions. For one run only in `C:\Users\J\iTakda-evaluations\sdd001-runtime`, I explicitly waive OS-enforced network isolation of the actual PHP/Laravel/PHPUnit runtime and authorize the narrow Governance §14 exception for non-database bootstrap, route, and PHPUnit compatibility checks without a test database. This does not waive OS-enforced isolation for any security audit, general application testing, implementation, or deployment. I authorize only the exact files, commands, dependencies, paths, monitors, and actions in the attached execution allowlist. Composer may use network access only to the expressly allowlisted package and advisory sources during its separately bounded installation/audit phase; no other network access is authorized. No credentials, client configuration, database driver/configuration/connection, SQLite, migrations, mail, queues, external dispatch, CEAP, repository/XAMPP/PATH changes, Git changes, or deployment are authorized. Stop on any dependency mismatch, applicable advisory, unexpected write or process, any runtime network/database/IPC attempt, unexpected install-phase network access, dropped or incomplete monitoring event, or other deviation. The authorization expires at the end of this run or 30 days after approval, whichever comes first. This authorizes only the scratch evaluation and not SDD-001 implementation.

This wording is a template, not an approval. It cannot be used until the allowlist and review evidence are attached and the Product Owner supplies an explicit approval.
