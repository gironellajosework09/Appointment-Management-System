# Requirements Governance — Appointment Management System

| Field | Value |
|---|---|
| Document status | APPROVED DEVELOPMENT-STAGE GOVERNANCE — D-077, 2026-10-29 |
| Process context | D-077 requirements baseline; current change workflow is SDD under D-098 |
| Document date | 2026-10-28 |
| Revision | 0.9 (2026-11-19 — aligned to Engineering Governance v2.0 under D-123; §§2–7 requirement controls preserved) |
| Owner | Product Owner |

This document defines the requirements-recording and traceability method for the
D-077 development-stage baseline. It has no independent authority to approve a
requirement, select architecture, or authorize implementation. Requirements and
decisions remain subject to the authorities and approval controls in Engineering
Governance, the Gate Register, Decision Register, and Project Charter.

## 1. Authority and source boundaries

The Product Owner is the approval authority. Current gate status and exit criteria
remain in `docs/GATE_REGISTER.md`; approved decisions, Product Owner confirmation
items, and open questions remain in `docs/decisions/DECISION_REGISTER.md`; product
goals, success criteria, assumptions, dependencies, and risks remain in
`docs/PROJECT_CHARTER.md`.

These namespaces are distinct:

- `D-###` identifies decisions.
- `P-###` identifies Product Owner confirmation or approval items; a `P-###`
  reference must not be presented as a decision.
- `Q-###` identifies unresolved discovery questions.

When records conflict or authority is missing, the affected record does not
advance. The conflict and its practical impact are referred to the Product Owner
under Engineering Governance v2.0 §17 (Stop and Escalation Conditions).

## 2. Identifier taxonomy

Existing identifiers retain their established meanings and are never renumbered:
`D-###`, `P-###`, `Q-###`, `G-#`, `S-#`, `A-#`, `DP-#`, `R-#`, and `SE-###`.

Gate 1 working artifacts use these additional independent identifiers:

| Prefix | Record |
|---|---|
| `FR-###` | Functional requirement |
| `NFR-###` | Non-functional requirement or mandatory constraint |
| `BR-###` | Business rule |
| `UJ-###` | User journey |
| `AC-###` | Acceptance criterion |
| `VAL-###` | Validation activity |
| `EVD-###` | Validation evidence |

Identifiers are permanent. Deferred or withdrawn records are retained and their
identifiers are never reused. An identifier does not imply approval, priority,
release scope, or sequence.

## 3. Required metadata

Every `FR-###` and `NFR-###` record keeps these fields distinct:

| Field | Required content |
|---|---|
| Title | Short stable name |
| Statement | The requirement itself, without embedding rationale or evidence |
| Rationale | Why the requirement is needed |
| Provenance | Exact source, or `Unverified hypothesis — no stakeholder source recorded` |
| Review status | One of the six statuses in §4 |
| Release priority | `Mandatory baseline`, `Candidate v1`, `Optional`, `Unassigned`, or a later Product Owner-approved value; priority is not approval |
| Planned validation activities | Cited `VAL-###` activities, or `None planned`; these are not evidence |
| Validation evidence | Cited completed `EVD-###` records, or `None yet` |
| Approval reference/date | Explicit Product Owner approval of the exact version with reference and supplied date, or `None — not approved` |
| Owner | Accountable role for clarification and maintenance |
| Current working version / status | Version being edited and its own six-status review status |
| Effective approved version | Exact last approved version and approval reference/date, or `None yet`; never inferred from source approval |
| Version history | Each version's date, author/role, review status, change reason/summary, affected links and impact; approval/disposition reference/date where applicable |
| Deferral/withdrawal rationale | Required when status is `DEFERRED` or `WITHDRAWN`; otherwise `Not applicable` |

Traceability keeps provenance, goals/success criteria, decisions, Product Owner
items, questions, risks/assumptions/dependencies, journeys/rules, acceptance
criteria, planned validation activities, completed evidence, and approval references
in separate fields. A blank evidence field is recorded as `None yet`; evidence is
never inferred from a discussion, timestamp, planned activity, or draft. Evidence
classification is explicit: discovery evidence may support a direction while
remaining insufficient for representative validation. AI-assisted summaries,
researcher interpretations, illustrative practitioner discussions, and product
strategy recommendations are not silently treated as equivalent to primary
stakeholder evidence.

## 4. Exact six-status lifecycle

| Status | Meaning |
|---|---|
| `DRAFT` | Captured for analysis; not submitted for formal review. |
| `UNDER_REVIEW` | Submitted for documented stakeholder and Product Owner review; not approved. |
| `VALIDATED` | Supported by cited representative-stakeholder evidence; not approved unless separately advanced. |
| `APPROVED` | Explicitly approved by the Product Owner with reference and date recorded. Under D-077, approval may be recorded as a bounded `development-stage assumption`; this does not mean `VALIDATED` stakeholder evidence or release acceptance. |
| `DEFERRED` | Explicitly postponed by the Product Owner with rationale; not current scope. |
| `WITHDRAWN` | Removed from consideration by explicit Product Owner disposition with rationale; retained for history. |

The normal progression is exactly `DRAFT → UNDER_REVIEW → VALIDATED → APPROVED`.
`DEFERRED` and `WITHDRAWN` are controlled dispositions, not substitutes for an
intermediate review status. Candidate-v1 or mandatory-baseline priority does not
change review status. Acceptance criteria retain their own status; requirement
approval does not silently approve draft criteria.

## 5. Controlled transitions

| From | Permitted next status | Minimum record |
|---|---|---|
| New | `DRAFT` | Provenance, owner, and initial version entry |
| `DRAFT` | `UNDER_REVIEW`, `APPROVED`, `DEFERRED`, `WITHDRAWN` | Review submission, or explicit Product Owner approval/disposition and rationale. The D-077 `APPROVED` route requires exact text, limitations, owner, and later-gate obligation. |
| `UNDER_REVIEW` | `DRAFT`, `VALIDATED`, `DEFERRED`, `WITHDRAWN` | Review outcome; evidence references are mandatory for `VALIDATED` |
| `VALIDATED` | `UNDER_REVIEW`, `APPROVED`, `DEFERRED`, `WITHDRAWN` | Evidence and review record; explicit Product Owner reference/date for `APPROVED` or a disposition |
| `APPROVED` | `DEFERRED`, `WITHDRAWN` | Explicit Product Owner change decision, rationale, impact review, and preserved approved version |
| `DEFERRED` | `DRAFT`, `WITHDRAWN` | Explicit Product Owner authorization and rationale |
| `WITHDRAWN` | — | Terminal; a renewed need receives a new ID linked to the withdrawn record |

Only the Product Owner may set `APPROVED`, `DEFERRED`, or `WITHDRAWN` for a
specific version. Validation participants and authors cannot approve or dispose
of requirements. A new `DRAFT` working version does not change the approved
status of the separately retained effective version.

## 6. Versioned material-change control

A material change alters behavior, scope, actors, constraints, priority, evidence
interpretation, or acceptance conditions. It is never edited into an approved
version as though already approved.

1. Preserve the prior approved text and its version, approval reference, and date,
   and keep it retrievable as the effective approved version.
2. Create a new proposed version under the same requirement ID and set that
   version to `DRAFT`.
3. Record the change reason, author/role, date, affected traceability, and impact
   in a version-history entry, including the working version's review status.
4. Repeat review and validation for affected content.
5. Retain the prior approved version as the effective version until the Product
   Owner explicitly approves the new version or disposes of it.

Editorial corrections that do not alter meaning still receive a version-history
entry. They do not change approval status or erase prior text.
Under D-077, this method is active for the development-stage route. Requirements
Specification v0.7 / Traceability revision 1.0 remain preserved as the historical D-081
baseline. The Product Owner approved Requirements Specification v0.8 and Traceability
revision 1.2, together with D-094/D-095, for development-stage design; Decision Register
revision 1.19 records that approval, with approval date not supplied. The v0.8 baseline is
not `VALIDATED` evidence or release approval. Any later material change must preserve the
approved text, version, reference, and date (or explicitly record that the approval date was
not supplied) before a new proposal is created.

**2026-11-12 exact-version approval:** The Product Owner approved Requirements Specification
v0.9 and Traceability revision 1.3 for development-stage design. Their approval dates were
not separately supplied; the approval recording date is 2026-11-12. These versions are the
effective requirements and traceability baseline for their stated amendment: v0.9 replaces
only NFR-003 and adds AC-027–AC-029 to the preserved v0.8/v0.7 baseline; revision 1.3 adds
the corresponding traceability while preserving revision 1.2 and carried-forward revision
1.0. The earlier v0.8/revision 1.2 approval remains historical and intact. This approval is
not validation, implementation, release or Gate 2 authorization.

**2026-11-19 governance alignment (D-123):** Engineering Governance v2.0 is authoritative.
Its consolidated decision model replaces repeated exact-version approval cycles for the
dependent documentation of one authorized work package. This does not relax §§2–7:
identifiers, approved text, evidence status, traceability and versioned material-change
control still govern requirement *text*. A change to approved wording remains a new
version requiring the applicable Product Owner disposition.

A verification-timing disposition that leaves approved wording and status intact may be
recorded as an appended note on the requirements and traceability artifacts. It may defer
named verification to a stated milestone, but it must identify what is deferred, the
owner, the milestone and the risk, and it must not mark deferred verification as passed.
Batch 03's accessible-MFA and rendered-accessibility verification is recorded this way,
with a 2026-12-19 review deadline and all earlier triggering milestones controlling first.

## 7. Baseline, candidate scope, and criteria

- **Mandatory baseline priority:** a draft requirement constrained by an approved
  goal or decision. The source is in force, but the newly authored requirement
  remains `DRAFT` until separately reviewed and approved.
- **Candidate v1 priority:** a provisional feature candidate for validation and
  prioritization; not scope approval.
- **Optional priority:** a hypothesis whose inclusion depends on evidence and a
  Product Owner decision.
- **Draft acceptance criterion:** a testable interpretation requiring review,
  evidence, and approval; not a release gate by its existence.

Existing open questions remain linked to their actual `Q-###` records. New
discovery prompts use stable draft-local labels (`QR-L01` etc.), never fabricated
official `Q-###` identifiers; a Decision Register update needs separate Product
Owner authorization. Detailed QR flows without recorded stakeholder provenance
are explicitly labeled unverified hypotheses.

## 8. Checkpoint and Gate 1 controls

**Historical scope after D-098:** This section records the requirements baseline and Gate 1
process that produced the approved requirements history. The gate/checkpoint workflow is not a
routine prerequisite for future changes; use the lifecycle and risk-based authorization in Engineering Governance v2.0 §§4–5.
Requirements Governance §§2–7 remain applicable: identifiers, approved text, evidence status,
traceability, and versioned material-change control are unchanged. A feature spec does not amend
an approved requirement; changes to approved behavior must follow §6 and receive the applicable
Product Owner approval. D-098 changes process only and does not alter D-081, D-094/D-095, or any
approved requirement/traceability baseline.

Checkpoint reviews compare every record against its provenance, status, priority,
evidence classification, approval metadata, version history, unresolved questions,
and affected traceability. Material changes update the specification and
traceability matrix together. Resolved questions and new decisions are recorded in
the authoritative Decision Register, not only in these working documents. Product
Owner approval of a product direction does not automatically advance the exact
working requirement wording to `VALIDATED` or `APPROVED`.

The following paragraph preserves the historical D-077 Gate 1 route; it does not establish
routine gate progression under D-098. Under D-077, Gate 1 may use the development-stage route when the exact baseline,
traceability, assumption ownership, milestone obligations, limitations, and explicit
Product Owner gate decision are recorded. `VALIDATED` remains reserved for relevant
representative reviewed EVD evidence; simulated findings remain design assumptions.
Gate 3 design review, genuine product-fit review, qualified independent privacy/
security review, testing, and release evidence remain required at their named gates.
