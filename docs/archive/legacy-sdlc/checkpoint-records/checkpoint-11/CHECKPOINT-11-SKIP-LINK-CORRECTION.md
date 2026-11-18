# Feature: Checkpoint 11 prototype skip-link correction

> **Disposition under D-101:** Retained as historical context for the Product Owner-authorized
> skip-link correction. The correction is classified as a routine prototype accessibility/navigation
> refinement under the Prototype Exploration Exception; approval of this separate specification is
> no longer a prerequisite. This note does not claim the correction was implemented, verified, or
> accepted. The earlier pending-approval statements below are preserved as history.

| Field | Value |
|---|---|
| Status | Product Owner supplied bounded authorization and behavior; specification approval pending |
| Owner | Product Owner |
| Approval date | Not separately supplied |

## Purpose and scope

Correct the existing fictional prototype's skip link, which routes a user from sign-in to the landing view.

**In scope:** The Product Owner authorized a separate bounded correction in relevant Checkpoint 11 prototype navigation files and local verification. Diagnose the reported browser 404; correct it only if clearly within that scope.

**Out of scope:** D-100 animation changes, unrelated UI components, dependencies, Laravel application, CEAP, production, branches, commits, pushes, merges, and deployment. This correction does not accept D-100 or Checkpoint 11.

## References

- Accessibility target: D-052, D-069, NFR-007 and AC-006.
- Decisions: D-096, D-097, D-098, D-100 and the separate Product Owner authorization in Decision Register §9.19.
- Provisional design: `docs/design/CHECKPOINT-11-SCREENS-AND-INTERACTIONS.md` §1.1.

## Expected behavior

As specified by the Product Owner, skip to content must remain within the current view, move keyboard focus to the appropriate main-content destination, and not unexpectedly reset the active route. It must work from landing, sign-in, and other existing prototype routes, preserve heading focus after ordinary route navigation, and remain usable with keyboard navigation and assistive technology.

## Acceptance criteria

- Given landing, sign-in, or another existing route, activating skip to content retains the active route and focuses the appropriate destination within the active view.
- Ordinary navigation retains its existing destination-heading focus behavior.
- Skip activation is keyboard-operable and focus is visible; any assistive-technology verification limitation is reported honestly.
- D-100 motion behavior remains unchanged; identify the exact 404 request and its cause or report it unverified.

## Considerations and open questions

- Change class: ordinary, bounded fictional-prototype navigation behavior. No authentication, authorization, real data, database, or service behavior is changed.
- Product Owner approval of this recorded feature specification is not separately evidenced. The Product Owner explicitly supplied the correction authorization, expected behavior and boundary in the current request; do not infer approval of this artifact.

## Plan and verification

After required specification approval, reproduce the skip-link defect and write a failing browser regression check. Make the smallest change to relevant prototype navigation files, then rerun it on landing, sign-in and other representative routes, including ordinary route heading focus. Examine keyboard focus, validation, responsive overflow, reduced-motion preference changes, and 404 request details; report actual browser zoom, background tab, and screen-reader checks as unverified where unavailable. Preserve existing D-100 performance evidence and report LCP variation without relaxing its budget.

## Approval and acceptance

- Product Owner explicitly authorized the bounded correction and supplied its behavior and exclusions in the current request; approval date not separately supplied.
- Product Owner approval of this recorded specification: **pending**.
- Reviewer, verification result, acceptance disposition, and date: **pending**.
