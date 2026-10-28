# Gate 0 Evidence Record — Appointment Management System

| Field | Value |
|---|---|
| Purpose | Gate 0 exit evidence required by `docs/GATE_REGISTER.md` §3 |
| Gate | Gate 0 (Project Initiation & Governance) |
| Gate 0 status at time of record | **IN PROGRESS** (unchanged) |
| Record date | 2026-10-22 |
| Recorded by | AI assistant (Hermes Agent), at the product owner's written instruction for the Gate 0 correction pass |
| Owner approval of this record | **Approved (signed off) by the Product Owner on 2026-10-22** — the record is signed off as written; no time recorded, and no new evidence was collected for the sign-off |
| Relationship to P-001 | Separate Gate 0 exit requirement; **outside** the five-artifact P-001 scope |

This record documents only what was inspected and observed. It deliberately does
not assert more than the observations support. Limitations are stated in §4 and
must be read before any conclusion is drawn from §3.

---

## 1. Scope of this record

This record covers the local Git repository at
`C:/xampp/htdocs/Appointment-Management-System` as inspected on 2026-10-22
between 15:56 and 16:03 (+0800), on branch `planning/gate-0`.

It addresses one Gate 0 question: **what does the repository show about whether
implementation, dependency, database, deployment, or destructive Git-history
operation occurred during Gate 0 governance work?**

It does not evaluate the content, quality, or correctness of any governance
document, and it is not a substitute for the product owner's review.

---

## 2. Snapshot observed before the correction pass

| Item | Observed value |
|---|---|
| Branch | `planning/gate-0` |
| HEAD | `0af50c3362ab7e531654727cb0feb2e55a5e3a21` (`0af50c3`) |
| Upstream | `origin/planning/gate-0` at the same commit (0 ahead / 0 behind) |
| `main` | `b491816`; `origin/main` at `b491816` |
| Working tree | clean (`git status --porcelain=v1` produced no entries) |
| Tracked files | 5 (listed in §3.1) |
| Commits in repository | 2 |
| Stashes | 0 |
| Tags | 0 |

SHA-256 of the five artifacts **as inspected before** this correction pass:

```
03c24039eb15545ae7280bca6c05d3e4d3fefe47f4ba1512983e2ca4ef9ebf21  docs/PROJECT_CHARTER.md
71a1a228bcef2cc6c97640986cf405e9d537c82364f0768969205f0ee01b1094  docs/ENGINEERING_GOVERNANCE.md
298edb32edd07bf14e1b533bdee9956edc2e973f9b9dc4458ed5fd4c5ae9cc39  docs/GATE_REGISTER.md
cbe2f501f662c7d6892b1aa1d8f14a2dcbe6328637a723cdfebbb44668fba67c  docs/decisions/DECISION_REGISTER.md
394110218156de81347fa10cf19bf085469bea2db693d71affc19108aa91f754  AGENTS.md
```

A copy of the four corrected documents and of `AGENTS.md` was saved outside the
repository before editing, with a SHA-256 manifest. `AGENTS.md` was not edited;
its hash after the pass is identical to the value above.

---

## 3. What was inspected, and what was observed

### 3.1 Repository contents

Command: `git ls-tree -r HEAD --name-only`

Output — exactly five paths:

```
AGENTS.md
docs/ENGINEERING_GOVERNANCE.md
docs/GATE_REGISTER.md
docs/PROJECT_CHARTER.md
docs/decisions/DECISION_REGISTER.md
```

Command: `git ls-tree -r HEAD --name-only | grep -Ei "composer|package|\.env|\.php|artisan|migration|schema|sql|docker|lock"`

Output: none (no match).

**Observed:** the tracked tree at `0af50c3` contains five Markdown files and
nothing else. There is no application source, no dependency manifest or lock
file, no database schema, migration, or SQL file, no container definition, and no
environment or credential file.

### 3.2 Commit history

Command: `git log --all --format="%h %ad %an %d %s" --date=iso`

```
0af50c3 2026-10-22 15:45:36 +0800 Jose Gironella  (HEAD -> planning/gate-0, origin/planning/gate-0) feat: gate 0-initialization
b491816 2026-10-15 14:51:58 +0800 Jose Gironella  (origin/main, main) feat: gate 0-initialization
```

Command: `git log --all --oneline -- AGENTS.md`

```
0af50c3 feat: gate 0-initialization
```

**Observed:** two commits exist. `AGENTS.md` first appears in `0af50c3`
(2026-10-22); it was untracked before that commit.

### 3.3 Reflog (local reference-update log)

Command: `git reflog --all --date=iso` — 9 entries, complete output:

```
0af50c3 refs/remotes/origin/planning/gate-0@{2026-10-22 15:47:14 +0800}: update by push
0af50c3 refs/heads/planning/gate-0@{2026-10-22 15:45:36 +0800}: commit: feat: gate 0-initialization
0af50c3 HEAD@{2026-10-22 15:45:36 +0800}: commit: feat: gate 0-initialization
b491816 refs/heads/planning/gate-0@{2026-10-22 15:45:20 +0800}: branch: Created from HEAD
b491816 HEAD@{2026-10-22 15:45:20 +0800}: checkout: moving from main to planning/gate-0
b491816 HEAD@{2026-10-22 11:25:40 +0800}: checkout: moving from main to main
b491816 refs/remotes/origin/main@{2026-10-15 14:52:04 +0800}: update by push
b491816 refs/heads/main@{2026-10-15 14:51:58 +0800}: commit (initial): feat: gate 0-initialization
b491816 HEAD@{2026-10-15 14:51:58 +0800}: commit (initial): feat: gate 0-initialization
```

`core.logallrefupdates` is `true`. Reflog files present:
`.git/logs/HEAD`, `.git/logs/refs/heads/main`,
`.git/logs/refs/heads/planning/gate-0`,
`.git/logs/refs/remotes/origin/main`,
`.git/logs/refs/remotes/origin/planning/gate-0`.

**Observed:** every recorded reference update is one of: initial commit, commit,
push, branch creation, or checkout. **No reflog entry records a reset, rebase,
amend, force-push, clean, or history-rewrite operation.** Coverage begins at the
repository's initial commit (2026-10-15 14:51:58 +0800) and ends at 2026-10-22
15:47:14 +0800.

### 3.4 Object store integrity

Commands and output:

| Command | Output |
|---|---|
| `git fsck --unreachable --no-progress` | no output (exit 0) |
| `git fsck --no-progress` | no output (no dangling or broken objects reported) |
| `git count-objects -v` | `count: 17`, `in-pack: 0`, `packs: 0`, `garbage: 0`, `size-garbage: 0` |

Additional absence checks:

| Path | Result |
|---|---|
| `.git/ORIG_HEAD` | absent (no reset-created origin ref recorded) |
| `.git/shallow` | absent (full, non-shallow clone) |

**Observed:** the local object store holds exactly the objects for the two
existing commits. No unreachable, dangling, or garbage objects were reported.

---

## 4. What this record does NOT establish

These limits are part of the evidence, not caveats:

1. **Local clone only.** Nothing here establishes anything about other working
   copies, other clones, or the GitHub server's own history. No network access,
   remote API, or server-side audit log was consulted.
2. **Reflog absence is not proof of non-occurrence.** A reflog records reference
   updates that this clone observed. Expired reflog entries, a re-clone after a
   rewrite elsewhere, or operations performed in another copy would leave no trace
   here. The correct reading of §3.3 is "no such operation is recorded", not "no
   such operation happened anywhere".
3. **Garbage collection erases traces.** If a destructive operation had occurred
   and `git gc --prune` had since run, the discarded objects would be gone;
   `git fsck` would then also report nothing. The clean fsck result corroborates,
   but does not prove, that history was not rewritten.
4. **No database, deployment, hosting, or environment inspection was performed.**
   Statements about database and deployment work are limited to what the
   repository contains. No database server, connection, migration state, hosting
   account, or deployment target was accessed.
5. **No secrets were inspected.** The observation is only that no tracked file is
   an environment or credential file. The `.env`-free conclusion rests on the
   tracked path list, not on reading any configuration.
6. **Authorship, intent, and correctness are out of scope.** This record does not
   assess whether commit messages accurately describe their contents, or whether
   the documents are substantively correct or approved.
7. **Timestamps are Git metadata from the local clock** (+0800), not an
   independent time authority.
8. **The period before 2026-10-15 14:51:58 +0800 is not covered** — there is no
   earlier history or record to inspect.
9. **Work performed after this record's snapshot is not covered.** Later edits to
   the working tree (including the 2026-10-22 correction pass to four documents)
   are uncommitted at the time of writing and are not part of the committed history
   described above.

---

## 5. Residual risk statement

The evidence supports this narrow conclusion: **within this local clone, between
2026-10-15 14:51:58 +0800 and 2026-10-22 15:47:14 +0800, no destructive
Git-history operation was recorded, and the repository contains no application,
dependency, schema, migration, container, or environment artifact.**

It does not support a claim that no such operation occurred anywhere, that no
database or deployment work was performed outside this repository, or that the
Gate 0 documents are approved. Residual risk is assessed as: low for the
repository-content question (the tree is directly inspectable and is
documentation-only); **not eliminable** for the history-rewrite question, which
remains an attestation-supported inference rather than a proof.

---

## 6. Change control

This record belongs to Gate 0 evidence and is not a decision. It records the
product owner's sign-off of this evidence, but it does not itself approve a gate.
It must not be edited to record a stronger claim than §3 and §4 support. Any
future amendment must append a dated entry stating what was re-inspected, by what
command, and with what result; earlier entries are not to be rewritten.

| Date | Change |
|---|---|
| 2026-10-22 | Record created. Based on the observations in §3, taken before the 2026-10-22 documentation correction pass. |
| 2026-10-22 | Product-owner sign-off recorded. The Product Owner approved this evidence record as written on 2026-10-22 (no time recorded). No new evidence was collected; the findings and limitations in §3–§5 are unchanged. |
| 2026-10-23 | Amendment for D-039. Lineage note appended as §7 (product-owner supplied; not evidence). Re-inspection at amendment time: `git ls-tree -r HEAD --name-only` returned 6 paths; `git status --porcelain=v1` returned 5 modified paths (four authorized edits plus the pre-existing `docs/PROJECT_CHARTER.md` draft); SHA-256 of those five files, recorded after the final formatting corrections were applied and re-verified as the final post-edit values: AGENTS.md `98c0b204122697341694f4704fe9cd24d14a1533e8d0be393f5caf3c5f356b94`; ENGINEERING_GOVERNANCE.md `44b36302d6f8698b0833007cedc30ac6a5010bfb822f1f8df446a987e5a8ddeb`; GATE_REGISTER.md `7dd04487ed1a040a538e58d21ee88687be894ef958b6f96bbd43a9768a317bf8`; DECISION_REGISTER.md `f5f628953f3eba5e2bc644545b50b59fb9df5f054b59fc18581e5705c8189be0`; PROJECT_CHARTER.md `6b32787d92c87512ce6799c8280c7eb8a781f79139a8e92cf0edd4df4be11b51`. This record's own pre-amendment SHA-256 was `fe1af0436c88977a003c124fee5cac9b52528598b41b3ffca4de84c4f9ca5ec9`; its hash necessarily changes when this row is appended, so no post-amendment self-hash is claimed. No earlier entry rewritten; §3–§5 findings and limitations unchanged. |
| 2026-10-23 | Correction following audit finding D-1. §7 Provenance wording changed from "carried **verbatim**" to "preserved **in substance**"; no other text in §7 or elsewhere in this record was altered, and no other file was modified. Re-verification before this entry was written: `git status --porcelain=v1` returned 6 modified paths (the five authorized governance files plus the pre-existing `docs/PROJECT_CHARTER.md` draft); SHA-256 of the five other in-scope files, unchanged by this correction: AGENTS.md `98c0b204122697341694f4704fe9cd24d14a1533e8d0be393f5caf3c5f356b94`; ENGINEERING_GOVERNANCE.md `44b36302d6f8698b0833007cedc30ac6a5010bfb822f1f8df446a987e5a8ddeb`; GATE_REGISTER.md `7dd04487ed1a040a538e58d21ee88687be894ef958b6f96bbd43a9768a317bf8`; DECISION_REGISTER.md `f5f628953f3eba5e2bc644545b50b59fb9df5f054b59fc18581e5705c8189be0`; PROJECT_CHARTER.md `6b32787d92c87512ce6799c8280c7eb8a781f79139a8e92cf0edd4df4be11b51`. This record's own pre-correction SHA-256 was `101d26f973a21629b75167b533b7ac8a0425efab15486d323e9f9a07a2d698f4`; its hash necessarily changes when this entry is appended, so no post-amendment self-hash is claimed. Earlier entries are not rewritten. |

---

## 7. Lineage note (product-owner supplied — not evidence)

**Provenance:** this note was supplied by the Product Owner and was preserved in substance in
`AGENTS.md` until that file was replaced under D-039. It is recorded here so the statement
is not lost. It is **not** an observation made by this record.

> This repository is the fresh commercial Appointment Management System project. It
> is distinct from the former commercial project from which the product owner has
> stated it was derived. That former project was itself derived from a copy of the
> separate production CEAP appointment system, including application code, assets,
> database schema and seed data, tests, and CEAP-specific documentation. Neither the
> former project nor the production CEAP system is part of this repository, and the
> production CEAP system is **not** modified.
>
> Only this repository and its available Git history have been inspected. Nothing
> inspected indicates that the former project's files, a CEAP `AGENTS.md`, or any
> other historical copy is present here. This note states only what the available
> evidence supports and does not claim that the original source repository, every
> historical copy, or every prior file has been independently inspected.

**Scope limitation.** This section adds no inspection. Consistent with §4(1) and
§4(6), it establishes nothing about other clones, the original source repository, or
the accuracy of the derivation described above. It records a product-owner statement
and the limits that statement itself declares.
