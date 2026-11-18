# Checkpoint 11 animation dependency experiment

| Field | Value |
|---|---|
| Status | ACCEPTED — PASS WITH MINOR ISSUES (Product Owner, 2026-11-10) |
| Owner | Product Owner |
| Date | 2026-11-10 (Product Owner approval date) |

## Purpose and scope

Evaluate the installability and local cost of five web animation libraries for the fictional Checkpoint 11 prototype. This is a dependency experiment, not a decision to use all five in the prototype or the Laravel application.

**In scope:** Create `prototype/checkpoint-11/package.json` and its npm lockfile. Install exact, pinned, compatible versions of `gsap`, `motion`, `three`, `@rive-app/canvas` (or document why a different current Rive web runtime is appropriate), and `lenis` under that directory only. Run bounded dependency-resolution, security, size, and local browser smoke checks. Report observed package versions and sizes, risks, overlap, and recommendations for later Laravel/Blade/Tailwind design.

**Out of scope:** Loading or integrating the five libraries into the prototype page; changing its behavior or visual design; root application dependencies or code; database, CEAP, production, external application services, deployment, branch changes, commit, push, or merge.

## References

- Decisions: D-096 and D-097 (prototype authorization with explicit dependency exclusion); D-098 (feature-level SDD and approval controls); D-031 (exact production dependency/runtime versions remain a later decision).
- Governance: `docs/ENGINEERING_GOVERNANCE.md` §§5, 7, 15, 18; `docs/GATE_REGISTER.md` transition record.
- No product requirement is changed by this experiment.

## Approved narrow decision amendment — D-099

**Proposed D-099 wording:** Amend D-096 and D-097 only to permit a five-package, isolated dependency experiment in `prototype/checkpoint-11/`. Authorize creation of an npm manifest and lockfile there and installation of exact pinned compatible versions of GSAP (`gsap`), Motion (`motion`), Three.js (`three`), Rive's web canvas runtime (`@rive-app/canvas`, or a documented appropriate current web runtime), and Lenis (`lenis`). Authorize local dependency-resolution, package-size/security review, and bounded browser smoke checks. Installing a package does not authorize loading it into the prototype page, changing prototype behavior, adding it to the Laravel application, or selecting it for production. D-096/D-097's other restrictions remain effective; Checkpoint 11 remains unfinished and unaccepted. No gate transition, production application implementation, database, CEAP, deployment, commit, push, or merge is approved.

**Approval record:** The Product Owner approved this exact spec, bounded scope, and amendment wording on 2026-11-10. D-099 is recorded in the Decision Register and supersedes only D-096/D-097's dependency-installation exclusion for this isolated experiment. Their historical text and other restrictions remain recorded.

## Expected behavior

The five packages resolve locally from the isolated manifest and lockfile. The existing prototype page continues to load without using the packages. A package failure is reported as an experiment result, not silently worked around by changing the app or adding another dependency. Existing reduced-motion behavior remains intact because the page is not altered.

## Acceptance criteria

- Given the isolated manifest and lockfile, when dependencies are installed from the lockfile, then the five direct packages resolve at the exact recorded versions.
- Given the existing prototype page, when opened in a local browser after installation, then it loads without new errors attributable to the experiment and its existing reduced-motion behavior remains available.
- Given the installed tree, when inspected, then the report lists each direct package's installed version and measured package/disk size, relevant security findings, runtime/performance concerns, overlap, and recommendations for eventual application implementation.
- The root application and existing uncommitted/untracked prototype files are preserved.

## Considerations and open questions

- **Risk class:** Ordinary, prototype-only dependency experiment proposed; it is outside cosmetic standing authorization and needs the Product Owner's exact spec/scope approval. Escalate if package selection or testing would create an architecture or external-integration decision.
- The npm registry supplies packages for local evaluation; no runtime external service or production use is proposed.
- Package versions and sizes are intentionally not asserted before registry inspection and installation. Runtime and performance findings are limited to the checks actually performed.
- Whether any package should be integrated into the prototype or eventual Laravel app is a separate decision.

## Plan and verification

1. After approval is recorded, inspect the current prototype and package compatibility, then select exact versions.
2. Add only the isolated npm manifest and lockfile; install locally without overwriting existing prototype files.
3. Verify resolution, inspect package sizes and security findings, and run a bounded local browser smoke check including reduced-motion behavior already implemented.
4. Report evidence and recommendations. Seek separate authorization before any prototype integration or app dependency change.

## Approval and acceptance

- Product Owner approved the exact spec, scope and amendment wording on **2026-11-10**. See [D-099](../decisions/DECISION_REGISTER.md#917-checkpoint-11-animation-dependency-experiment).
- Reviewer and approver: Product Owner, assisted by Codex. No independent human technical review is claimed.
- Verification and outcome: **ACCEPTED — PASS WITH MINOR ISSUES**, 2026-11-10. Registry-backed `npm ci`, direct dependency resolution, and npm audit succeeded. The recorded audit reported zero known vulnerabilities. The landing/sign-in browser smoke test and reduced-motion checks are conversation evidence, not a separately stored test artifact.
- Accepted limitations: fully offline installation was not reproduced because the npm cache lacked a `tslib` tarball. All 33 pre-existing prototype files matched their baseline immediately after the experiment. Three CSS files now differ from that baseline; when and why they changed is unconfirmed, and those differences are not attributed to D-099.
- This acceptance covers the dependency experiment only. Checkpoint 11 remains unfinished and unaccepted, and no gate transition or application implementation is authorized.
