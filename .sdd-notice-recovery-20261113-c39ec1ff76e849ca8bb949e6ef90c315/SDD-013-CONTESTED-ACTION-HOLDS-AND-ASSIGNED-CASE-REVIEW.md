# SDD-013 — Contested-Action Holds and Assigned Case Review

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
> **Status: DRAFT — SDD-013 v0.3, awaiting Product Owner review.** This draft records approved authority boundaries and leaves trigger, evidence and operational details open. It authorizes no implementation, appointment access or case handling. v0.1 and v0.2 are preserved as prior drafts; no specification approval is implied.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Field | Value |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Identifier / revision / date | SDD-013 / v0.3 / 2026-11-13; documentation revision date only, not approval date. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Owner | Product Owner for policy; engineering/security, actual service operators and qualified privacy reviewers remain to be assigned. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Draft provenance | Initial v0.1 was prepared under the authorized SDD sprint and bounded policy direction. v0.2 was prepared under DOC-WP-01 to reconcile cross-specification dependency status. v0.3 corrects decision and related-specification status references under DOC-WP-02; approval remains pending. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Risk class | High: identity, appointment authority, dispute handling, sensitive data and privileged review. Applicable specialist review and separate bounded implementation authorization remain required. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Purpose and scope

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
Define how an authorized reviewer handles a contested guest-account link or proposed self-service appointment-management action without allowing the dispute process to transfer appointment ownership, cancel the appointment, or broaden staff authority. A dispute restricts only the contested management action/link while the appointment and permitted staff attendance remain intact.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
**In scope:** dispute submission and authorized acceptance for review; narrowly scoped contested-action holds; assigned case-review authority; documented review and attributable outcomes; hold release or link reversal under authorized review; integration with appointment outcomes, notifications, evidence and privacy boundaries.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
**Out of scope:** proof-factor selection or claimant identity-verification protocols; case-management product, queue, data schema or evidence-storage design; complete staff role catalog/training program; service-specific representative/guardian policy; ordinary cancellation/rescheduling eligibility or transaction integrity; appointment cancellation as a consequence of dispute; identity-document collection; retention periods or legal conclusions; operational staffing commitments; implementation or live case review.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## References

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- Requirements: effective v0.9 with approved v0.8 supplement and carried-forward v0.7; FR-007, FR-008, FR-021, NFR-003, NFR-009, NFR-011, BR-005, BR-006, BR-011; AC-015, AC-021, AC-025.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- Decisions: D-045 (reference/QR is not identity or authority), D-050 (minimum data and protected records), D-094 (account and linking boundaries), D-095 (purpose-limited email), D-103 (bounded identity/permission design directions), D-108 (contested-claim and scoped-hold policy boundary), D-098 (SDD and implementation authorization).

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- Related specifications: SDD-002 (actor/service/action permissions and MFA; v0.5 draft pending Product Owner review, with v0.4 approval historical); SDD-003 (required attributable evidence and restricted review; v0.5 draft pending Product Owner review, with v0.4 approval historical); SDD-008 (independent guest proof and scoped access; v0.2 draft pending Product Owner review, with v0.1 approval historical); SDD-006 (authoritative transaction outcomes; v0.1 draft); SDD-011 (individual account linking); SDD-016/017 (cancellation/rescheduling); SDD-018 (supervisor exceptions); SDD-024 (privacy/data lifecycle readiness; v0.1 draft pending Product Owner review); SDD-023 (accessible status and recovery presentation; v0.3 draft pending Product Owner review, with v0.2 approval historical).

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Approved policy boundary

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
The Product Owner approved the following bounded directions in D-103, D-108 and the current-turn policy instruction. They are policy constraints, not implementation mechanisms:

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
1. Only explicitly assigned, trained staff or supervisors holding the approved case-review permission may accept a dispute for review, place or release its hold, or reverse a link after documented review. The exact assignment, training evidence, scope and procedure remain open.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
2. A dispute may restrict only the contested appointment-management action or individual link. The appointment is not automatically cancelled; permitted staff attendance continues.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
3. Ordinary eligible changes are not automatically held. A failed or uncertain proof attempt alone does not create a dispute or hold. A public claimant may submit a dispute but cannot accept it, place/release its hold, self-release it, or reverse another party’s link.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
4. Review does not itself establish claimant identity, original-booker authority, attendee or representative authority, or the outcome of an appointment command.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
5. Any notification or success claim follows the authoritative state and D-095. A held action/link is not represented as completed; its success confirmation/email is paused while held. Unknown transaction outcomes remain unknown until the owning command reconciles them.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Expected behavior

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| State / action | Proposed behavior within approved boundary |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Dispute submitted | Record a request for review through a separately authorized intake path. Submission alone is not acceptance, verification, a hold, or a change to the appointment. Keep feedback neutral and privacy-limited. Exact intake fields and route remain open. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Intake rejected, incomplete or uncertain | Do not create a hold or grant access solely from an unverified/ambiguous submission. Do not expose appointment details to an unverified claimant. Provide only reviewed next steps; no automatic cancellation or status inference. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Authorized reviewer accepts contested case | An assigned trained staff member/supervisor with the approved case-review permission may accept the dispute and place a hold only on the affected appointment link or proposed self-service management action, under the later-approved procedure. A generic administrator title is not a substitute for the approved assignment. Exact conflict rules remain open. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Hold active | Block only the contested link/action and its success confirmation/email. Preserve the appointment, its current authoritative state, unrelated authorized access, and permitted staff attendance. Do not expand the hold to unrelated appointments/actions or infer a cancellation. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Review and disposition | An assigned reviewer follows the approved evidence and service policy, records the reviewed disposition and its basis at the approved level, and releases the hold or requests an authorized link reversal only within separately assigned permissions. Viewing evidence or placing a hold does not itself grant link-reversal or appointment-mutation authority. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Pending / rejected / unknown review outcome | Do not claim that authority, a link, a hold or an appointment command succeeded when its outcome is unestablished. Reconcile appointment commands through SDD-006; do not encourage blind repeat commands. Exact case workflow and persistence remain open. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Notifications and evidence | Evidence is attributable and consistent with the established outcome under SDD-003, minimum-necessary, and does not contain proof secrets or unnecessary attendee details. No new email purpose is created. D-095 notifications follow the committed authoritative result; held actions do not receive a success message. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Acceptance criteria

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
These are specification-local proposed criteria, not new requirement IDs or passed tests.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Local criterion | Given / when / then — future evidence |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C01 | Given a claimant submits a dispute, when intake is received, then submission alone does not verify identity, grant appointment access, change appointment state, accept the case or place a hold. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C02 | Given an ordinary eligible cancellation/reschedule request or a failed/uncertain proof attempt without an accepted contested case, when evaluated, then it is not automatically held. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C03 | Given an unassigned, untrained or otherwise unauthorized actor attempts to accept a case, place/release a hold or reverse a link, when server-side authorization is evaluated, then the request is denied without disclosure or mutation. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C04 | Given an assigned trained reviewer with approved case-review permission accepts a contested case under the approved procedure, when a hold is placed, then it covers only the disputed action or individual link. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C05 | Given a contested action/link is held, when appointment state and attendance are inspected, then the appointment is not cancelled or otherwise changed by the hold, permitted staff attendance remains available, and unrelated authorized actions remain unaffected. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C06 | Given a hold is active, when the disputed action’s outcome and notifications are presented, then no success, completed link or success email is asserted; other notifications follow D-095 and authoritative state. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C07 | Given evidence is reviewed or a disposition is recorded, when viewer, direct request and correction paths are evaluated, then minimum permitted context is visible to assigned readers, viewing does not itself grant mutation/reversal/export authority, and the outcome is attributable under SDD-003. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C08 | Given the reviewer releases a hold or requests reversal, when the decision is made, then only an independently authorized assigned reviewer may take the applicable action after documented review; no claimant self-release or automatic link reversal occurs. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C09 | Given a review or linked appointment command has a pending, rejected or unknown outcome, when feedback/retry is offered, then no unestablished result is represented as success/failure and no blind duplicate command is encouraged; appointment commands follow SDD-006 reconciliation. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| SDD-013-C10 | Given case intake, denial, hold and disposition states are presented, when rendered in an authorized consumer journey, then applicable SDD-023 keyboard, focus, readable status and assistive-technology patterns are used without disclosing protected details. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Considerations and open questions

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Local question / timing | Unresolved matter and owner |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| CASE-Q01 — dispute intake and acceptance threshold, before hold implementation | D-103 settles that failed/uncertain proof alone is insufficient and holds must remain scoped; it does not define what additional facts make a claim contested or sufficient for acceptance. Product Owner/service-policy owner sets the policy; security/privacy review examines abuse and disclosure. No automatic hold rule is selected. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| CASE-Q02 — reviewer assignment and independence, before case-review implementation | Product Owner assigns actors/services/action scopes among trained staff/supervisors under the existing permission. Define conflicts of interest, self-review restrictions, separation between intake and decision where needed, training evidence and reassignment. No new role, universal two-person rule or staffing commitment is created. SDD-002 maps enforcement. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| CASE-Q03 — review, release and reversal procedure, before linking/management integration | Define permitted review evidence, documented outcome choices, what releases only a hold versus separately reverses a link, escalation and what happens when evidence remains insufficient. Product Owner/service-policy owner with security input; SDD-011 owns link consumer behavior, SDD-016/017 own command behavior. No reviewer decision or reversal is inferred from sympathy, contact matching or dispute submission. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| CASE-Q04 — evidence and lifecycle, before collection or reliance | SDD-003 defines minimum evidence/viewer boundaries; SDD-024 and qualified privacy review must resolve collected data, permitted readers, retention/disposition and restored restrictions. No evidence fields, retention period or legal basis are selected here. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| CASE-Q05 — hold state and unknown outcomes, before affected command integration | Engineering/data-integrity reviewers define how the owning feature represents a hold without changing the authoritative appointment or duplicating SDD-006’s command-outcome rules. PO decides material behavior. No storage schema, locking, retry, notification mechanism or automatic release timer is selected. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| CASE-Q06 — operating responsibility and review timing, before operational reliance | Actual client/service operators identify intake ownership, reviewer availability, escalation and closure. Product Owner approves material commitments; SDD-026 owns operational allocation. No response-time/SLA or staffing promise is inferred. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
### Alternatives and risk considerations

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Direction | Benefit and alternative | Failure scenario and mitigation | Future verification / residual risk |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|---|---|

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Narrow hold on the contested action/link after authorized case acceptance | Preserves unaffected appointment and staff work; broader appointment lock may be easier to implement but disrupts legitimate attendance and management. | Malicious or mistaken claim blocks more than necessary; scope by appointment plus affected action/link and require assigned review. | Test routine eligible change, unrelated action, failed proof without dispute, and authorized dispute paths. Human misjudgment and delay remain. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Assigned trained reviewers with distinct permissions | Limits self-release and broad staff privilege; allowing any administrator to decide is simpler but risks insider misuse and inconsistent authority. | Unassigned actor releases or reverses a link; server-side permission and attributable disposition are required. | Test assigned/unassigned/direct requests and separate hold versus reversal grants. Staffing, evidence and conflict safeguards remain open. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Preserve unresolved states and avoid automatic cancellation | Prevents a dispute or lost response from destroying an appointment; automatic resolution may appear simpler but invents business outcomes. | Unknown result is falsely reported or retried, causing duplicate/change; keep uncertainty and use SDD-006 reconciliation. | Verify pending/rejected/unknown presentation and no blind repeat under an authorized plan. Human and provider evidence may remain incomplete. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Plan and verification

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **Drafting dependencies:** approved v0.8/v0.9 requirements, D-094/D-103, and current SDD-002/003/008 contracts; fulfilled for bounded policy drafting.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **Implementation dependencies:** exact-version approval, CASE-Q01–Q05 decisions as applicable, explicit high-risk implementation authorization, SDD-002 permission assignments, SDD-003 evidence integration, qualified privacy/security review and the affected consumer’s approved spec.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **Integration dependencies:** SDD-008/011 establishes claimant/link authority; SDD-006 owns appointment transaction result and reconciliation; SDD-016/017 own cancellation/reschedule commands; SDD-003 owns shared evidence; SDD-024 v0.1 is drafted and pending Product Owner review. Its criteria and qualified privacy review remain unaccepted/unresolved and do not authorize evidence collection or reliance.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
- **Acceptance evidence:** future authorized positive/negative case-review checks, denial of unassigned actors, scoped-hold preservation, no automatic cancellation, separate release/reversal authority, truthful unknown outcomes, evidence access/privacy, notifications and rendered accessibility. No test or live review is claimed.

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
## Approval and acceptance

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.


> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Record | Current disposition |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
|---|---|

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Specification and scope | **DRAFT — AWAITING PRODUCT OWNER REVIEW** for exact SDD-013 v0.3. v0.1 and v0.2 remain prior draft history. D-103, D-108 and other approved directions constrain the policy statements above; no exact SDD approval is claimed. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Implementation / case handling | **NOT AUTHORIZED.** No live case intake/review, appointment access, hold, release or reversal is authorized by this draft. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Verification / acceptance | **NOT PERFORMED.** No identity, authorization, privacy, security, accessibility or integration testing is claimed. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
| Project status | Gate 2 remains historically in progress and Checkpoint 11 remains unaccepted. No implementation, release or deployment authorization follows. |

> **CURRENT STATUS: APPROVED — SDD-013 v0.3, within its documented specification scope.** Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; implementation, specialist sign-off and release are not authorized.
