# Engineering Governance — iTakda Appointment Management System

| Field | Value |
|---|---|
| Document | Engineering Governance |
| Project | iTakda — Appointment Management System |
| Version | 2.0 |
| Status | ADOPTED — authoritative from 2026-11-19 (D-123) |
| Governance Model | Highly Autonomous, Risk-Based, AI-Assisted Development |
| Owner | Product Owner |
| Supersedes | Engineering Governance v1.7 |
| Effective date | 2026-11-19 |
| Scope | Commercial iTakda Appointment Management System |

---

# 1. Purpose

This document establishes the engineering governance for the development, maintenance, testing, and release of iTakda.

The governance is designed for a **solo developer working collaboratively with AI coding agents**, while remaining applicable to future human contributors.

Its objectives are to:

- Enable efficient, autonomous software development.
- Minimize unnecessary approval cycles and administrative overhead.
- Maintain software correctness, security, privacy, and data integrity.
- Establish clear boundaries for AI-assisted engineering.
- Support iterative, specification-driven development.
- Preserve accountability for significant technical and product decisions.
- Separate development acceptance from production readiness.
- Ensure that engineering safeguards are proportional to actual risk.

**Core principle: Engineering governance must enable development rather than unnecessarily obstruct it.**

Processes should provide meaningful engineering value. Documentation, reviews, and approvals must be proportional to the risk, complexity, and consequences of the work.

---

# 2. Governance Philosophy

iTakda follows five engineering principles.

## 2.1 Autonomy by Default

Authorized contributors and AI agents should complete routine engineering work without repeated permission requests.

Autonomy includes planning, implementation, debugging, testing, refactoring, and maintaining related documentation within approved boundaries.

## 2.2 Risk-Based Control

Not every change requires the same level of oversight.

Low-risk changes should move quickly. High-risk changes require stronger authorization, verification, and appropriate review.

## 2.3 One Decision, One Authorization

A Product Owner decision may authorize an entire bounded work package, including its dependent implementation, testing, and documentation activities.

Do not request repeated approval for an unchanged decision.

## 2.4 Evidence Over Paperwork

Engineering confidence comes primarily from working software, reproducible tests, meaningful reviews, and verified behavior.

Documentation supports those activities; it must not become a substitute for them.

## 2.5 Development Is Not Production

Development-stage acceptance confirms that work is sufficiently complete for its authorized development purpose.

It does not automatically establish security assurance, operational readiness, regulatory compliance, or production release authority.

---

# 3. Authority and Responsibilities

## 3.1 Product Owner

The Product Owner is the final decision-maker for:

- Product direction and material scope changes.
- Major architecture and technology decisions.
- Material security, authentication, authorization, and privacy policy decisions.
- High-risk implementation boundaries.
- Acceptance of development batches and milestones.
- Material risk acceptance where permitted.
- Production deployment and operational release.
- Changes to this governance.

The Product Owner may authorize multiple related activities through a single explicit instruction.

An authorization remains valid throughout its defined scope unless revoked, superseded, or invalidated by material new evidence.

## 3.2 Developer

The developer is responsible for:

- Implementing approved functionality.
- Maintaining code quality and architecture consistency.
- Verifying correctness and reliability.
- Identifying security and data-integrity risks.
- Preserving existing functionality.
- Reporting material findings and limitations.

The Product Owner and developer may be the same person.

Where self-review occurs, the acceptance record must identify the combined roles and evidence used.

## 3.3 AI Coding Agents

AI coding agents are authorized engineering assistants.

Within approved boundaries, agents may:

- Investigate requirements and existing implementations.
- Develop technical plans.
- Implement approved features.
- Select ordinary implementation details.
- Debug and resolve related defects.
- Refactor code.
- Create and execute tests.
- Perform technical reviews.
- Update related specifications and documentation.
- Maintain local development environments.
- Prepare implementation and acceptance reports.
- Propose architecture and technology improvements.

AI agents must not independently make consequential product-policy decisions, waive mandatory safeguards, or authorize production releases.

**AI-generated analysis and tests are engineering evidence, not independent human approval or qualified specialist assessment.**

---

# 4. Development Lifecycle

iTakda follows a lightweight, iterative lifecycle:

**Define → Build → Verify → Accept**

The lifecycle applies to development batches, features, and meaningful engineering changes.

It does not require a separate administrative approval for every stage.

## 4.1 Define

Identify:

- Objective and expected outcome.
- Scope and exclusions.
- Relevant requirements and specifications.
- Acceptance criteria.
- Dependencies and constraints.
- Significant technical risks.
- Verification approach.

Use existing authoritative documents wherever possible.

For routine work within an approved roadmap, agents may prepare and maintain these details autonomously.

A separate feature specification is not mandatory when an existing specification or task record sufficiently defines the work.

## 4.2 Build

Once authorized, agents may execute the complete bounded work package.

This includes implementation, related debugging, refactoring, local verification, and documentation maintenance.

Agents should not interrupt development for routine decisions that fall within their existing authority.

## 4.3 Verify

Verification must be proportional to risk.

Applicable verification may include:

- Automated tests.
- Integration tests.
- Database integrity and concurrency tests.
- Security and authorization checks.
- Browser and usability testing.
- Accessibility verification.
- Manual inspection.
- Failure-path testing.
- Regression testing.

Only tests actually performed may be reported as passed.

Incomplete verification must remain explicitly identified.

## 4.4 Accept

The Product Owner determines whether the completed work satisfies its authorized development purpose.

Acceptance may be:

- **Accepted:** Required development criteria are satisfied.
- **Accepted with Limitations:** The development outcome is accepted with explicitly recorded, permissible residual limitations or deferred verification.
- **Not Accepted:** Material acceptance criteria remain unsatisfied.
- **Blocked:** A mandatory condition prevents acceptance.

Acceptance does not imply production readiness.

A single Product Owner instruction may authorize recording acceptance, closing the completed batch, and preparing the next batch, provided applicable mandatory conditions are satisfied.

---

# 5. Risk-Based Authorization

Engineering work is classified according to potential impact.

## 5.1 Low-Risk Changes

Examples:

- Typography and spacing adjustments.
- Minor UI refinements.
- Text and label corrections.
- Documentation corrections.
- Nonfunctional cleanup.
- Small, behavior-preserving refactoring.

**Authorization:** Standing engineering authority within approved product scope.

Agents may implement and verify these changes without additional Product Owner approval.

## 5.2 Moderate-Risk Changes

Examples:

- Ordinary feature development.
- Service-management functionality.
- Routine CRUD workflows.
- UI interactions within approved requirements.
- Bounded application refactoring.
- Noncritical performance improvements.
- Routine test and documentation improvements.

**Authorization:** Existing approved roadmap, specification, or bounded development work package.

Agents may plan and execute these changes autonomously within established requirements and technical boundaries.

A separate approval is not required for every feature or implementation step.

## 5.3 High-Risk Changes

Examples:

- Authentication and authorization.
- Identity verification and MFA.
- Privileged account management.
- Sensitive personal-data processing.
- Security-control changes.
- Database schema changes and migrations.
- Concurrency-sensitive operations.
- Data-integrity invariants.
- Major architectural changes.
- Consequential external integrations.
- Destructive operations.
- Production infrastructure changes.

**Authorization:** Explicit Product Owner authorization identifying the high-risk scope, permitted environment, relevant safeguards, and execution boundaries.

One authorization may cover an entire related high-risk development batch.

Repeated authorization is unnecessary for tasks already included in that scope.

High-risk local implementation may proceed using synthetic data and AI-assisted review within an expressly authorized isolated environment, subject to mandatory obligations and applicable acceptance restrictions.

High-risk changes require appropriate verification and review before their applicable acceptance or release milestone.

## 5.4 Risk Escalation

Agents must escalate when a change materially exceeds its authorization, introduces a consequential unresolved decision, or creates an unacceptable security, privacy, or data-integrity risk.

Routine uncertainty should be investigated rather than automatically treated as a blocker.

---

# 6. AI Agent Autonomy

## 6.1 Standing Engineering Authority

Within an approved roadmap or bounded work package, agents have standing authority to:

1. Inspect relevant project files and documentation.
2. Develop implementation plans.
3. Implement approved functionality.
4. Fix directly related defects.
5. Refactor affected code.
6. Create and execute appropriate tests.
7. Perform safe local debugging.
8. Update related documentation.
9. Create local feature branches and focused commits.
10. Prepare development reports and handoff materials.

Routine activities do not require individual approval.

## 6.2 Decision-Making Boundaries

Agents may independently decide:

- Internal code organization.
- Naming and structure.
- Framework-conventional implementation details.
- Appropriate test strategies.
- Minor UI implementation details.
- Routine refactoring approaches.
- Safe local debugging methods.

Agents must escalate:

- Material product-scope changes.
- Major architectural changes.
- New security or identity policies.
- Material changes to approved business rules.
- Consequential changes to personal-data handling.
- Unapproved destructive operations.
- Production deployment decisions.
- Material deviations from approved requirements.

## 6.3 No Redundant Approval Requests

When the Product Owner has explicitly authorized a decision or work package, agents should execute all dependent activities within that authorization.

Do not repeatedly request approval for:

- Unchanged requirements.
- Previously approved technical approaches.
- Routine documentation updates.
- Related test creation.
- Minor implementation corrections.
- Work already covered by the authorized scope.

If a genuine new decision is necessary, request only that decision.

## 6.4 Tool and Skill Usage

Agents should use relevant installed tools, plugins, skills, and project instructions when they materially improve the task.

Prefer:

- Targeted file inspection.
- Existing project context.
- Appropriate documentation references.
- Focused testing.
- Incremental, reviewable changes.
- Reuse of existing components and patterns.

Avoid unnecessary tool calls, redundant searches, repeated analysis, and excessive documentation.

---

# 7. Requirements and Change Control

Requirements and specifications define intended product behavior.

They remain authoritative until changed through an authorized decision.

However, requirements administration must remain lightweight.

## 7.1 Routine Changes

Agents may update related specifications, implementation plans, and traceability records as part of an authorized development work package.

Separate approval of each document revision is not required.

## 7.2 Material Changes

Material changes require a clear Product Owner decision.

One decision may authorize all directly related updates to:

- Requirements.
- Specifications.
- Architecture documentation.
- Traceability.
- Decision records.
- Acceptance criteria.
- Implementation plans.

The decision must identify the substantive change and its boundaries.

Agents may translate that decision into consistent document amendments without requesting approval for every individual wording change.

If the implementation would materially change the decision itself, escalate before proceeding.

## 7.3 Conflicting Requirements

Agents must not silently override approved requirements.

When a new Product Owner decision conflicts with existing documentation:

1. Identify the conflict.
2. Determine whether the decision clearly authorizes the substantive change.
3. Update affected authoritative records consistently.
4. Preserve historical evidence.
5. Report any unresolved conflict.

An approved governance revision does not automatically waive an independently binding product requirement.

## 7.4 Versioning

Use versioning when it materially improves traceability.

Do not create unnecessary versions for minor corrections.

Historical versions must remain recoverable through Git history or retained records.

Do not rewrite past approvals to imply that a new decision was approved earlier.

## 7.5 Decision Register

Record decisions that materially affect:

- Product behavior or scope.
- Architecture.
- Security or privacy policy.
- Data integrity.
- Operational responsibilities.
- Release readiness.
- Governance.

Routine implementation choices do not require separate decision identifiers.

---

# 8. Development Acceptance and Deferrals

Development acceptance is separate from production acceptance.

## 8.1 Development-Stage Acceptance

For isolated development using synthetic data, the Product Owner may accept work with documented incomplete verification when:

- The implemented outcome has sufficient supporting evidence.
- The incomplete verification is clearly identified.
- Relevant risks and limitations are disclosed.
- An owner and resolution milestone are assigned.
- No unresolved critical security or data-integrity issue makes acceptance unsafe.
- No applicable mandatory legal, contractual, privacy, or safety obligation is bypassed.

Acceptance with limitations does not mean all requirements have been satisfied.

## 8.2 Deferred Work

Deferred work must identify:

- What remains incomplete.
- Why it is deferred.
- The accountable owner.
- The required completion milestone or trigger.
- Relevant risks and restrictions.

Deferred requirements remain enforceable.

Agents must not classify deferred work as passed, completed, or independently verified.

## 8.3 Development and Release Milestones

The Product Owner may authorize risk-appropriate timing for development-stage verification, subject to applicable binding obligations.

Stronger assurance may be required before:

- Additional users participate in affected workflows.
- Real personal or client data is processed.
- Operational reliance begins.
- Public access is enabled.
- Production release occurs.

Where an applicable obligation requires earlier completion, that earlier requirement controls.

## 8.4 Critical Findings

Unresolved critical security or data-integrity findings block unsafe development acceptance.

High-severity findings require remediation or an explicitly authorized, permissible risk disposition.

No risk acceptance may bypass mandatory legal, privacy, safety, or contractual obligations.

---

# 9. Engineering Quality

All contributors must prioritize:

- Correctness.
- Maintainability.
- Readability.
- Modularity.
- Appropriate separation of concerns.
- Security.
- Performance proportional to requirements.
- Accessibility and usability.
- Testability.
- Reliability.

Prefer established framework conventions over unnecessary custom implementations.

Avoid premature optimization, unnecessary abstraction, duplicated logic, and excessive dependencies.

Refactoring should improve maintainability without unintentionally changing behavior.

Agents should preserve existing functionality unless the authorized work explicitly changes it.

---

# 10. Database and Data Integrity

Database integrity is a mandatory engineering concern.

Requirements include:

- Server-side enforcement of business invariants.
- Appropriate uniqueness and referential constraints.
- Transactions for operations requiring atomicity.
- Correct rollback behavior.
- Defined state transitions.
- Concurrency-safe operations.
- Validation of relevant failure conditions.

## 10.1 Development Databases

Agents may perform routine local database operations within an expressly authorized isolated development or test environment.

Database authorization must identify the permitted database or environment and operation boundaries.

Authorization for one database does not extend to another.

## 10.2 Destructive Operations

Destructive or irreversible operations require explicit authorization unless already specifically included in a bounded, isolated, disposable test workflow.

Agents must not assume that data can be discarded merely because it is stored locally.

## 10.3 CEAP Separation

iTakda is an independent commercial product.

Agents must never access, connect to, migrate, import, modify, or otherwise operate against the production CEAP application or database.

CEAP may serve only as a historical behavioral reference when explicitly authorized.

Its implementation and schema are not automatically authoritative for iTakda.

---

# 11. Security, Privacy, and Identity

Security and privacy are mandatory engineering responsibilities.

All applicable workflows must use:

- Server-side authentication and authorization.
- Appropriate input validation.
- Secure session handling.
- Safe credential and secret management.
- Least-privilege access.
- Individual accountability where required.
- Appropriate audit logging.
- Secure configuration management.
- Protected personal-data processing.

Never store secrets in committed source code or documentation.

Do not create undocumented authentication bypasses, shared privileged identities, or unauthorized recovery mechanisms.

Security exceptions require explicit Product Owner authorization and documented scope, rationale, safeguards, and review conditions where legally and technically permissible.

AI-assisted security analysis does not constitute qualified independent assessment.

---

# 12. Testing and Verification

Testing must be appropriate to the risk and expected behavior.

## 12.1 Automated Testing

Use automated tests for relevant:

- Business rules.
- Input validation.
- Authorization.
- Authentication.
- Data integrity.
- State transitions.
- Failure handling.
- Concurrency.
- Regression behavior.

Not every cosmetic or documentation change requires a full test-suite run.

## 12.2 Manual Verification

Use manual or browser verification when necessary to assess:

- User workflows.
- Visual behavior.
- Responsive layouts.
- Keyboard interaction.
- Accessibility.
- Error recovery.
- Cross-component behavior.

## 12.3 Test Environments

Tests must use authorized isolated environments.

Synthetic data should be used for development and testing.

Never run destructive tests against production or unauthorized client databases.

## 12.4 Honest Reporting

Verification outcomes must be reported as:

- Passed.
- Failed.
- Partial.
- Deferred.
- Not Tested.
- Blocked.

Do not claim verification, security assurance, accessibility conformance, or successful testing without supporting evidence.

---

# 13. Documentation

Documentation must support engineering decisions, continuity, maintenance, and accountability.

Prefer a small number of authoritative documents.

## 13.1 Core Documentation

Maintain, as relevant:

- Product requirements and specifications.
- Architecture and significant technical decisions.
- Development batch records.
- Testing and verification evidence.
- Material defects and risks.
- Deployment and operational procedures.

## 13.2 Documentation Efficiency

Avoid:

- Duplicate specifications.
- Repeated approval summaries.
- Unnecessary decision-register entries.
- Multiple documents containing identical information.
- Excessive evidence packages for minor changes.
- Rewriting approved decisions without a substantive reason.

Agents should update existing documents rather than create new ones unless a separate artifact provides clear value.

## 13.3 Historical Records

Preserve meaningful historical approvals and decisions.

Historical records are evidence of past project decisions, not necessarily current operational instructions.

When superseded, identify the current authoritative rule without rewriting the original decision.

---

# 14. Git and Repository Management

Use Git for version control and change traceability.

## 14.1 Branching

Prefer focused feature or development branches.

Agents may create local branches within authorized work.

Protected branches remain subject to repository rules.

## 14.2 Commits

Agents may create focused local commits when covered by standing engineering authority or an authorized work package.

Do not include unrelated or unreviewed changes.

## 14.3 Protected Operations

The following require applicable explicit authorization:

- Pushing changes to remote repositories.
- Merging pull requests.
- Modifying branch protection.
- Force pushing.
- Rewriting shared history.
- Deleting protected branches.
- Changing repository remotes.
- Deploying to external environments.

## 14.4 Existing Work

Before editing, inspect relevant existing changes.

Preserve unrelated uncommitted work.

Do not overwrite, revert, or discard another contributor's changes without authorization.

---

# 15. Defects and Risk Management

Defects and risks should be handled according to severity and impact.

## 15.1 Routine Defects

Agents may fix defects directly related to authorized work.

Minor unrelated defects may be documented for later resolution.

## 15.2 Material Defects

Security, privacy, data-integrity, and reliability issues must be assessed promptly.

Critical issues must not be ignored or concealed.

## 15.3 Risk Disposition

Material unresolved risks require:

- Description.
- Severity and impact.
- Mitigation or proposed disposition.
- Responsible owner.
- Applicable resolution milestone.

Only the Product Owner may authorize material risk acceptance where permitted.

---

# 16. Release and Deployment Governance

Production release is a separately controlled activity.

Development acceptance does not authorize deployment.

Before operational reliance or production release, complete applicable:

- Security and privacy assessments.
- Required accessibility verification.
- Integration and regression testing.
- Data-integrity verification.
- Backup and restoration testing.
- Recovery procedures.
- Configuration and secrets review.
- Deployment and rollback preparation.
- Operational readiness assessment.
- Required independent or qualified human reviews.

A qualified independent security/privacy assessment remains required where established by the project's approved release obligations.

Production deployment requires explicit Product Owner approval.

No AI agent may independently authorize production release.

---

# 17. Stop and Escalation Conditions

Agents must stop the affected operation when:

1. Work materially exceeds authorized scope.
2. A consequential product or security decision remains unresolved.
3. A destructive or irreversible operation lacks authorization.
4. A critical security, privacy, or data-integrity risk cannot be safely contained.
5. Mandatory legal, contractual, privacy, or safety obligations would be violated.
6. CEAP or unauthorized production/client data could be affected.
7. Existing unrelated work cannot be preserved safely.
8. A required external deployment or protected repository action lacks authorization.

Do not stop an otherwise authorized work package solely because of unrelated noncritical issues.

When possible, continue independent safe work and report the blocked portion.

Escalation must identify the specific decision needed rather than requesting broad or redundant approval.

---

# 18. Work Reporting

Reports should be concise and actionable.

For substantial work, include:

1. **Completed:** What changed or was delivered.
2. **Verification:** What was tested and the results.
3. **Limitations:** Failures, incomplete checks, and material uncertainties.
4. **Risks:** Significant unresolved issues.
5. **Next Action:** Recommended continuation or required decision.

Do not produce lengthy administrative reports unless the complexity or risk justifies them.

Agents should avoid repeatedly reporting unchanged information.

---

# 19. Governance Changes

The Product Owner may revise this governance through an explicit documented decision.

A single approval may authorize the complete governance change and directly related documentation alignment.

A governance revision must identify:

- The new authoritative version.
- The previous version being superseded.
- Its effective date.
- Material changes to engineering authority or safeguards.
- Any independently approved requirements or procedures requiring reconciliation.

Do not create repeated approval cycles for unchanged decisions.

Historical governance and approvals must remain recoverable.

## 19.1 Governance Precedence

After valid adoption, this document governs the project's general engineering workflow and authorization model.

Product requirements and specifications continue to govern product behavior.

Applicable legal, contractual, privacy, security, and safety obligations remain binding.

Where another active project document contains a conflicting process rule, reconcile it through the authorized governance migration rather than silently ignoring it.

## 19.2 Historical Gates

Previously completed gates and accepted checkpoints remain part of project history.

The project uses iterative, risk-based development rather than requiring sequential completion of historical gates for every future feature.

Historical gate records must not be rewritten or retroactively approved.

---

# 20. Governance Transition

This document is intended to replace Engineering Governance v1.7.

Upon Product Owner approval and valid adoption:

1. Preserve the prior governance and historical decisions.
2. Record Governance v2.0 as authoritative.
3. Align active agent instructions and conflicting engineering-process procedures.
4. Preserve independently binding product requirements until appropriately reconciled.
5. Continue development under the new autonomy and risk-based authorization model.

Adoption does not automatically approve unfinished implementation, waive unresolved requirements, or authorize production deployment.

Existing development evidence and Product Owner decisions remain valid within their originally authorized scope.

---

# 21. Final Engineering Principle

**iTakda follows highly autonomous, risk-based engineering.**

AI agents should independently complete routine engineering work within approved boundaries.

The Product Owner controls consequential decisions rather than individual implementation steps.

Documentation should support engineering, not dominate it.

Testing should reflect actual risk.

Development acceptance should support iterative progress without misrepresenting incomplete verification.

Production release requires stronger assurance and explicit authorization.

**Build efficiently. Verify responsibly. Escalate material risks. Preserve accountability.**

---

# 22. Approval Record

| Field | Value |
|---|---|
| Document | Engineering Governance v2.0 |
| Approving Authority | Product Owner |
| Decision | ADOPTED — D-123, explicit Product Owner instruction of 2026-11-19 |
| Approval Date | 2026-11-19 (instruction date; recorded the same day) |
| Effective Date | 2026-11-19 |
| Superseded Version | Engineering Governance v1.7 |
| Scope | Commercial iTakda Appointment Management System |

**Document status:** ADOPTED and authoritative. The prior "Proposed — Pending Product Owner Adoption" state is preserved as history.

### 22.1 Adoption record (D-123)

The Product Owner explicitly approved replacement of Engineering Governance v1.7 with this v2.0 (Highly Autonomous) model, authorized recording the adoption, aligning agent and requirements-process instructions, and reconciling the bounded requirements timing decision recorded in D-123. The adoption is recorded in [Decision Register D-123](decisions/DECISION_REGISTER.md#d-123--governance-v20-adoption-and-batch-03-closure).

Material changes from v1.7:

- Routine work proceeds under standing engineering authority; separate approvals are required only for the risk classes in §5.
- One Product Owner instruction may authorize a bounded work package, its documentation, acceptance recording, batch closure and next-batch preparation (§2.3, §4.4).
- Development-stage acceptance may record incomplete verification as a limitation or deferral when §8.1 conditions are met.
- Verification timing may be risk-appropriate before the milestones in §8.3; earlier binding obligations still control.
- Governance and requirements process documents are aligned through the same decision rather than repeated exact-version approval cycles.

Preserved without change:

- Independence from CEAP (§10.3).
- Mandatory security, privacy, data-integrity, accessibility and legal obligations (§§8.4, 11).
- Qualified human specialist review and independent privacy/security assessment before production release or operational reliance.
- Historical approvals and past gate/checkpoint records (§19.2); this adoption does not rewrite them.

### 22.2 Preservation of prior governance

- Engineering Governance revision 1.6 is recoverable in full from Git (`38659f9`), the last commit before this adoption. It remains the last recoverable complete text.
- Engineering Governance v1.7's bounded synthetic-local high-risk development and local acceptance arrangement is preserved in substance in [D-122](decisions/DECISION_REGISTER.md#d-122--synthetic-local-high-risk-development-arrangement) and carried into §§5.3, 8 and 11 of this document.
- A complete v1.7 file was not present in the working tree, any branch, or Git history at adoption. This is a preservation limitation, not a rewrite: the v1.7 arrangement is recoverable from D-122, but its exact full wording is not separately recoverable. No v1.7 text has been reconstructed or invented.

This adoption does not approve unfinished implementation, waive unresolved requirements, or authorize production deployment (§20). Requirements and specifications continue to govern product behavior; independently binding legal, contractual, privacy, security and safety obligations remain in force (§19.1).
