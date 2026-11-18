# SDD-018 — Configured Supervisor Exceptions

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
> **DRAFT v0.1 — PENDING PRODUCT OWNER REVIEW.** No exception catalog, role assignment, mechanism or implementation is approved.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Field | Record |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Owner / provenance | Product Owner and service-policy owner; engineering, security and data-integrity reviewers unassigned. Prepared 2026-11-13 under the bounded documentation package; not an approval date. |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Risk | High: privileged policy exceptions and booking integrity. Separate approval, specialist review and implementation authorization required. |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Purpose and scope

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
Define a bounded, explicitly permitted supervisor exception with a mandatory reason and attributable before/after evidence, while preserving all unrelated checks. **In scope:** request, applicable authorization, final decision and evidence, rejected and uncertain outcomes. **Out of scope:** an exception catalog, default supervisor powers, policy values, ordinary bypass, technical transaction design, staffing, evidence storage and actual booking command.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## References

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
Effective [requirements v0.9](../requirements/REQUIREMENTS-SPECIFICATION-v0.9.md), v0.8 and v0.7: FR-015; NFR-003/006/011; BR-001/007; UJ-005; AC-011. [Registry](SDD_REGISTRY.md) prerequisites SDD-002/003/005/006. D-048/070/098/102/105/107/108/110 in the [Decision Register](../decisions/DECISION_REGISTER.md) apply within their recorded scopes. D-107 permits only a specifically authorized exception, not a blanket bypass. Related current drafts remain pending their own review.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Expected behavior

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
A request identifies the intended action and proposed specifically configured policy exception. An authenticated, individually attributable supervisor with the specific authority and applicable fresh verification evaluates it; title alone is insufficient. A mandatory reason and required before/after evidence accompany the authoritative result. The exception may relax only its expressly permitted control: unrelated authorization, capacity/resource, duplicate, eligibility, state and data-integrity checks remain applicable. SDD-006 owns final checks and authoritative booking-affecting outcomes; SDD-003 owns shared evidence. A rejected or unauthorized request changes nothing; an unknown outcome must be reconciled before a safe retry. Approval of an exception alone is not a completed booking, an entitlement to bypass other controls, or a notice of success. Applicable D-095 messaging follows the established outcome. No exact exception or interaction between exception categories is assumed.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Acceptance criteria

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
Proposed local criteria; no test result is implied:

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C01:** Given no specific configured permission, when public or ordinary staff request an exception directly, then it is denied without mutation.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C02:** Given an authorized supervisor, when a specific permitted exception is requested, then reason and reviewed verification are required before a decision.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C03:** Given a permitted exception, when final checks run, then only its expressly permitted control may be relaxed and all other applicable checks remain.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C04:** Given an established decision, when evidence is reviewed, then actor, reason, authorized scope and required before/after context agree with the outcome under SDD-003.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C05:** Given rejection or invalid/missing reason, when processed, then no partial or orphaned booking effect is created.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C06:** Given an unknown decision or booking result, when presented, then success is not asserted and same-intent reconciliation precedes unsafe retry.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C07:** Given concurrent valid requests, when later verified under D-070's applicable profile, then the final integrity boundary is preserved; an exception is not evidence that the profile passed.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **SDD-018-C08:** Given exception states, when rendered, then accessible labels, error and status guidance apply without disclosure beyond authority.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Considerations and open questions

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Question / owner / milestone | Unresolved matter |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| EXC-Q01 — PO/service-policy owner, before implementation | Which specifically configured exceptions, controls, eligible conditions and consequences are permitted? No catalog is invented. |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| EXC-Q02 — PO/security, before authorization | Supervisor assignments, action/service scope, fresh verification and conflicts; ordinary users cannot self-elevate. |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| EXC-Q03 — engineering/data-integrity and evidence owners, before integration | Current-state checks, before/after scope, evidence consistency, uncertain outcomes and SDD-006 contract. |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| EXC-Q04 — qualified privacy/accessibility reviewers, before processing/release | Minimum reason and evidence visibility, retention and accessible recovery. |

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Plan and verification

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
Applicable SDD-002/003/005/006 approvals, EXC decisions, specialist reviews and separate high-risk authorization precede implementation. Future authorized verification covers explicit permission, missing reason, unrelated constraints, current-state contention, evidence failure, unknown reconciliation and accessibility. No test or action has occurred. Exact v0.1 approval, implementation, acceptance and release remain separate and pending.

> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-018 v0.1, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
