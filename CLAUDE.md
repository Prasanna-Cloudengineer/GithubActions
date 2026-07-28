# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 📍 Current status / where to pick up

_Keep this block updated when finishing a chunk of work — it's the first thing a new session (or the same author on another machine) should read._

- **Done:** All five days' teaching content + workflow files are written. Recorded: Day 1 (README §1–7, workflows `01`–`11`), Day 2 (§8–15, `12`–`19`), Day 3 (§16–24, `20`–`29`, ending at the composite action). **Day 4 (§25–30, `30`–`34` incl. `33a`)** and **Day 5 (§31–43, `35`–`49` minus `40` + [day-05/actions/](day-05/actions/): a JS action `greet-js` and a Docker action `greet-docker`)** are scripted, recording pending. YouTube metadata exists for all five days.
- **The day boundaries moved twice.** Day 3 was originally planned as `20`–`34`; in the recording it stopped after the composite action (`29`), so `30`–`34` (token permissions, environments & approvals, concurrency, timeouts, pipeline capstone) moved into `day-04/`. That made Day 4 far too long, so the advanced/security half (`35`–`49`) was then split out into **Day 5, the finale**. The course carries **two capstones** — `34` (production pipeline, closes Day 4) and `49` (hardened pipeline, closes Day 5). Self-hosted runners then moved the other way, Day 5 → Day 4, landing as `33a` just before the production capstone (see the numbering note below).
- **Next:** record Day 4 (`30`–`34`) and Day 5 (`35`–`49`); refine content as the videos are shot. No unbuilt topics remain in the outline.
- **Note:** files sit under the folder for the day that teaches them — `day-01/` (`01`–`11`), `day-02/` (`12`–`19`), `day-03/` (`20`–`29`), `day-04/` (`30`–`34`, incl. `33a`), `day-05/` (`35`–`49`, no `40`). The numeric prefix is the teaching order.
- The live scope tracker is the Build Status table in [COURSE_OUTLINE.md](COURSE_OUTLINE.md).

## What this repository is

This is **course content**, not an application. It backs a 5-day YouTube series ("GitHub Actions: Zero to Advanced in 5 Days", channel LearnWithMithran, repo `Iam-mithran/LWM-GithubActions`). The deliverables are teaching documents and copy-paste-ready workflow YAML — the audience is expected to work **100% in the GitHub web UI with nothing installed locally**.

Two consequences that shape almost every edit:

- **There is deliberately no `.github/workflows/` directory here.** The files in [day-01/workflows/](day-01/workflows/) are *teaching artifacts* that learners copy into their own practice repo. Never move or copy them into `.github/workflows/` — that would make this repo run 49 demo workflows against itself. Nothing in this repo is meant to execute on push.
- **The course promises "nothing to generate."** `sample-app/package-lock.json` is committed on purpose so learners never run `npm install` locally. Don't delete it, don't add dependencies to `sample-app` (it is zero-dependency by design so a demo can't break on a missing package).

## Architecture: coupled artifacts that must stay consistent

The course's teaching content is spread across a few files that must agree with each other. Changing one usually means updating the others:

| Artifact | Role |
|---|---|
| [COURSE_OUTLINE.md](COURSE_OUTLINE.md) | The master blueprint — topic list and hands-on goal for all 5 days. Source of truth for scope. |
| [README.md](README.md) (repo root) | **The single teaching script** *and* self-study guide for the whole course. One document with `# Day 1` / `# Day 2` sections; each numbered section explains a keyword, links to its numbered workflow file, says "what to observe" in the Actions tab, and holds the mermaid diagrams. **There is one README, at the root — not one per day.** |
| `day-NN/workflows/NN-topic.yml` | The runnable demo files, numbered to match the README's section order. |
| `day-NN/actions/<name>/action.yml` | Local composite actions, when a day teaches them. |
| `youtube/dayNN_youtube.md` | Video title, thumbnail brief, description, "what you'll learn" bullets, timestamped chapters, and tags. |

The root README references workflows by relative markdown link (e.g. `[`11-setup-node.yml`](day-01/workflows/11-setup-node.yml)`), so **renaming or renumbering a file means fixing those links**. Insert `04a` style names rather than renumbering.

**The numeric prefix is the teaching order.** Numbers run continuously across the whole course: `01`–`11` = Day 1, `12`–`19` = Day 2, `20`–`29` = Day 3, `30`–`34` = Day 4, `35`–`49` = Day 5. **Two deliberate irregularities:** `33a` (self-hosted runners, inserted between `33` and `34`) and a missing `40` in `day-05/` (that same file, before it moved). Letter suffixes and gaps are the price of never renumbering — leave them. Each file sits under the folder for the day that teaches it: `day-01/workflows/` … `day-05/workflows/`. The numeric prefix, not the folder, remains the source of truth for order — always check the number against the mapping above and against the README.

All five days are written in the README: Day 1 §1–7, Day 2 §8–15 (through status functions), Day 3 §16–24 (job outputs → composite actions), Day 4 §25–30 (token permissions → self-hosted runners → the production capstone), Day 5 §31–43 (SHA pinning → the hardened capstone). **README section numbers are continuous 1–43 and do not restart per day** — the day headings are the only thing that marks a boundary, so moving a topic between days means moving the `# Day N` heading, not renumbering sections.

## Conventions for workflow demo files

- Every file opens with a **comment block that teaches the concept** before any YAML. These comments are primary course content — they're what a learner reads when they open the file on GitHub. Preserve and extend them; don't strip them as "noise."
- Most single-concept demos trigger on `on: workflow_dispatch` so they can be run on demand during recording. The trigger-teaching files (02–07) and the capstone (15) are the exceptions that use real events.
- Inline comments call out the failure mode, not just the happy path (e.g. why `paths: 'src/**'` silently matches nothing, why `cache-dependency-path` is needed). That "here's the error message you'll actually see" style is the house style.
- Action versions are pinned to the **2026 platform state** the course teaches: `actions/checkout@v5`, `actions/setup-node@v6`, `actions/cache@v6`, `actions/upload-artifact@v7` (and `upload-artifact/merge@v7`), `actions/download-artifact@v8`. Don't downgrade these to older majors seen elsewhere online, and don't "align" the two artifact majors — they ship independently. Anything on or below `upload-artifact@v5` / `download-artifact@v6` is Node 20 and triggers a deprecation warning on every run.
- Several demos **fail on purpose** (a red matrix row, a denied API write, a hung step). That is the lesson, not a bug — check the file's header comment before "fixing" a failure.

Validate YAML after editing any workflow; a plain scalar containing `": "` is the error that actually shows up here:

```bash
python -c "import glob,yaml; [yaml.safe_load(open(f,encoding='utf-8')) or print('OK',f) for f in glob.glob('day-0*/workflows/*.yml')]"
```

## The `sample-app/` path coupling

`sample-app/` sits at the **repo root** (not under `day-01/`) because learners copy the whole folder into the root of their own repo, and the workflows hardcode that location. The folder name appears in three places that must all agree:

- `defaults.run.working-directory: sample-app` — applies to `run:` steps only
- `cache-dependency-path: 'sample-app/package-lock.json'` — for `uses:` steps, always relative to repo root
- `paths: ['sample-app/**']` in trigger filters

That `run:` vs `uses:` path asymmetry is itself a taught lesson in [README.md](README.md#11---your-first-ci-pipeline-capstone) — keep both spellings rather than "simplifying" one away.

## sample-app commands

Zero dependencies; uses Node's built-in test runner. Node **is** available locally (v24.x), so these can be run here to sanity-check a demo before recording:

```bash
cd sample-app
npm run lint                        # node --check on each src file (syntax only, no ESLint)
npm test                            # node --test  — discovers test/*.test.js
node --test test/math.test.js       # a single test file
npm run build                       # node build.js -> dist/ (added for Day 2 artifacts)
npm start                           # node src/index.js — also the Dockerfile's CMD
```

`package.json` is `"type": "module"` — the app uses ESM `import`/`export`, and import paths need the `.js` extension. Dropping in a CommonJS file (a `require()` test copied from elsewhere) kills the whole `node --test` run with *"require is not defined in ES module scope"* before any assertion runs; [sample-app/README.md](sample-app/README.md) documents that trap for learners. `dist/` and `reports/` are gitignored: Day 2 workflows rebuild `dist/` and upload it as an artifact, which is the point of the build stage.

`sample-app/Dockerfile` (+ `.dockerignore`) exists for files 44 and 49 (Day 5), built with `context: ./sample-app`. `src/index.js` is its `CMD` — the app's only entry point; everything else is library code.

Day 2 workflows use `npm ci` rather than Day 1's `npm install` (deterministic, and it fails loudly when `package.json` and the lockfile disagree). Adding a *script* to `package.json` doesn't invalidate the lockfile; adding a *dependency* would, and would also break the "zero dependencies, nothing to install" promise.

## Demo/recording workflow

Demos are recorded against a **throwaway practice repo**, not this one: one workflow file is created in the browser, run, watched in the Actions tab, then deleted before the next.

Day 3 breaks that one-file-at-a-time rule in two places, and the READMEs call out the setup explicitly:

- **28** needs **27** present at the same time (caller + callee).
- **29** needs `.github/actions/node-ci-setup/action.yml` copied alongside it.

Days 4 and 5 add more of these, and several files are **intentionally not runnable in a vanilla repo** (they teach a concept that needs external infra):

- **34** (the production capstone) calls **27** — a *Day 3* file, in `day-03/workflows/` — so it must be copied alongside, and it needs the `staging` / `production` environments created in repo settings first (see **31**).
- **45** needs `.github/actions/greet-js/` (action.yml + index.js) copied alongside it; **46** needs `.github/actions/greet-docker/` (action.yml + Dockerfile + entrypoint.sh).
- **39** / **49** (OIDC) need a cloud IAM role trusting the repo's OIDC `sub` claim, ARN in `vars.AWS_ROLE_ARN`; **33a** (self-hosted) sits Queued unless a matching runner is online. These "won't just run" states are deliberate teaching points — check the header before "fixing" them. (**44** / **49** build `sample-app/Dockerfile`, which *is* shipped — those need no extra setup beyond the folder.)

The course also depends on repo-level state a learner must create by hand: the `MY_API_KEY` secret (Day 2, file 14), and the two environments with a required reviewer on `production` (Day 4, files 31 and 34; also needed by 49).
