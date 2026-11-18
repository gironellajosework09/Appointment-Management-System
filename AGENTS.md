# Appointment Management System — Agent Instructions

| Field | Value |
|---|---|
| Document status | **Adopted** by Product Owner decision D-039 as the project's agent entry point. The effective date is recorded once, in `docs/decisions/DECISION_REGISTER.md` (D-039), and is deliberately not duplicated here. |
| Revision | 1.0 |
| Owner | Product Owner |
| Supersedes | The previous `AGENTS.md` (18 sections, numbered 0–17), whose engineering content was already recorded in the approved governance documents. Its lineage note is preserved in `docs/evidence/GATE-0-EVIDENCE.md` §7. Nothing in the previous file is re-approved by this replacement, and nothing is withdrawn from the approved governance. |

## 1. Purpose and authority

This file is the concise entry point for AI agents and other automated contributors working on
the Appointment Management System.

It directs contributors to the project's approved governance, decisions, requirements, and
technical documents. It does not independently approve requirements, architecture,
implementation, releases, or gate transitions.

The Product Owner retains the approval authority defined in the approved project governance.

Engineering work follows the efficiency principle approved as D-054 and recorded in
`docs/ENGINEERING_GOVERNANCE.md` §2. This file references that principle and does not
restate or extend it.

## 2. Required reading

Before performing project work, consult the applicable authoritative documents:

- `docs/PROJECT_CHARTER.md` — product purpose, scope, roles, and project authority.
- `docs/ENGINEERING_GOVERNANCE.md` — engineering controls, authorization, change management,
  and stop conditions.
- `docs/GATE_REGISTER.md` — current gate status, prerequisites, blockers, and transition
  authorization.
- `docs/decisions/DECISION_REGISTER.md` — recorded decisions, approvals, proposals, and
  unresolved questions.

Read additional approved requirements, architecture, security, testing, or delivery documents
when relevant to the task.

Where accessible and relevant, consult approved or adopted reusable engineering knowledge from
the project's governed Obsidian Software Engineering Knowledge Base at gate entry or the start of
substantial authorized work. It is guidance only and never overrides repository decisions,
requirements, evidence, approvals, or gate status. During authorized OpenCode work, follow the
conditional knowledge-capture workflow in `docs/ENGINEERING_GOVERNANCE.md` §5; report any draft
created, or that none was warranted.

`docs/evidence/GATE-0-EVIDENCE.md` is historical Gate 0 evidence and the home of the project's
lineage note. It is not a current status source.

A document's presence in the repository does not, by itself, establish that its contents are
approved.

## Learning-First Engineering Collaboration

OpenCode supports the Product Owner's engineering growth while completing authorized work:

- Explain significant engineering concepts in clear, beginner-friendly language.
- Explain why an approach is chosen, including important alternatives and trade-offs.
- Connect explanations to the actual Appointment Management System work.
- Define unfamiliar terminology when first introduced.
- Distinguish established facts, project decisions, assumptions, and recommendations.
- Identify meaningful learning opportunities during requirements, architecture, implementation,
  testing, security, and deployment.
- When useful, provide a small practical example, a common mistake, and one optional self-check
  question.
- Encourage understanding and independent problem-solving rather than blind acceptance of
  AI-generated work.
- Keep explanations concise by default; expand when the Product Owner requests deeper teaching.
- Do not interrupt every routine task with lessons or quizzes.

Meaningful reusable learning is captured only through the conditional, guarded Obsidian workflow
defined in `docs/ENGINEERING_GOVERNANCE.md` §5. Existing notes remain governed drafts unless
separately approved; repository records remain authoritative for project-specific decisions.

## 3. Conflicts and uncertainty

Do not silently resolve contradictions between project documents, infer missing approvals, or
treat a proposal as an approved decision.

When records conflict, an approval is missing, or authority is unclear:

1. Stop the affected action.
2. Identify the conflicting records and the practical impact.
3. Report the issue to the Product Owner.
4. Await the required decision or written authorization before proceeding.

Do not invent a precedence rule that the approved governance has not established.

## 4. Authorization and change boundaries

Perform only work within the scope of the applicable approval and written authorization.

Do not infer permission to edit files, create or change branches, commit, push, install
dependencies, alter configuration, access or modify databases, deploy, or change external
services merely because those actions would help complete a task.

Preserve unrelated changes and uncommitted work. Report the exact scope of changes and
verification results honestly. Never claim that an action or test succeeded unless it was
actually performed and its result was observed.

## 5. Product separation

The Appointment Management System is a separate product.

Do not modify, merge, or treat the CEAP Appointment System as its foundation. Only optional,
non-production historical CEAP reference material may be consulted, when explicitly authorized
and relevant, for lessons learned and candidate workflows. Production CEAP systems, databases,
deployments, and live data remain off-limits; CEAP implementation and business rules are not
automatically requirements for this product.

## 6. Security and stop conditions

Protect credentials, personal data, and client information. Do not expose secrets in reports,
logs, prompts, or version control.

Pause and report before proceeding when an action would exceed authorization, weaken a security
control, introduce an unapproved dependency or external service, or conflict with an approved
requirement or governance rule.

## 7. Source of truth

Use the applicable approved project records for current decisions, requirements, and gate
status. This file is an entry point, not a duplicate status register.

If this file becomes inconsistent with approved governance or project records, report the
discrepancy and follow the approved conflict-resolution process. Do not silently choose one
interpretation.

---

## 8. Approval

| Approver | Role | Decision | Date |
|---|---|---|---|
| Product Owner | Product Owner | Adopted this file as the project's agent entry point (D-039) | Recorded in `DECISION_REGISTER.md` D-039; not restated here |
