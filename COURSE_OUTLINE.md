# GitHub Actions: Zero to Advanced in 4 Days

A hands-on, project-driven course that takes you from *never having written a line of YAML* to *building secure, production-grade CI/CD pipelines* with GitHub Actions. Built for a YouTube audience, it is structured as four self-contained days of roughly **2–4 hours of video each**, mixing short concept explainers with live, buildable demos.

Everything is taught against the **current (2026) GitHub Actions platform and terminology** — current action versions, artifact actions **v4**, OIDC cloud authentication, SHA-pinning and immutable-actions guidance, and least-privilege `GITHUB_TOKEN` defaults.

---

## Who This Course Is For

- **Students** who know a little Git/GitHub and want a job-ready automation skill.
- **Working professionals** — developers, QA, DevOps, SREs, platform engineers — who want to standardize builds, tests, and deployments.
- Anyone migrating from Jenkins, GitLab CI, CircleCI, or Travis who wants the GitHub-native way.

### Prerequisites

- A free **GitHub account** and basic Git (clone, commit, push, pull request).
- Comfort with a terminal and a code editor (VS Code recommended).
- Familiarity with *any* one language/runtime (we use **Node.js** as the running example, plus a Python/Docker example) — you do **not** need to be an expert.
- **No prior YAML, CI/CD, or GitHub Actions experience required.** We start from zero.

---

## Learning Outcomes

By the end of the course you will be able to:

1. Explain CI/CD and how GitHub Actions implements it (events → workflows → jobs → steps → runners).
2. Read and write workflow YAML confidently, using triggers, contexts, expressions, and variables.
3. Consume Marketplace actions correctly and pin them safely.
4. Build multi-job pipelines with dependencies (`needs`), conditionals (`if`), job outputs, and **matrix** strategies.
5. Speed up and connect jobs using **dependency caching** and **artifacts (v4)**.
6. Choose correctly between **reusable workflows**, **composite actions**, and **custom (JavaScript/Docker) actions**, and build each.
7. Manage secrets, **environments**, and **deployment protection rules** (approvals, wait timers, branch policies).
8. Apply security hardening: **least-privilege `GITHUB_TOKEN`**, **SHA pinning / immutable actions**, third-party action risk management, secret scanning, and CodeQL.
9. Authenticate to cloud providers **without long-lived secrets using OIDC**.
10. Publish Docker images to **GHCR**, publish and version your own action, and ship a full capstone pipeline.

---

## Day 1 — Foundations: Your First CI Workflow

**Goal:** Demystify CI/CD and GitHub Actions, get comfortable with YAML and workflow anatomy, and ship a working continuous-integration workflow from scratch.

### Topics

1. **CI/CD & automation fundamentals**
   1. What CI/CD is and the problems it solves (integrate often, catch failures early, ship reliably).
   2. Where GitHub Actions fits vs. other CI tools; the GitHub Actions mental model.
   3. Actions pricing/minutes basics and free-tier expectations (public vs. private repos).
2. **YAML you actually need**
   1. Syntax essentials: key/value, indentation, lists, maps, multi-line strings (`|` and `>`), quoting gotchas.
   2. How YAML maps onto a workflow file.
3. **Workflow anatomy**
   1. The `.github/workflows/` directory and the workflow file.
   2. Core keys: `name`, `on`, `jobs`, `runs-on`, `steps`, `uses` vs. `run`.
   3. How a run executes: events → workflow → jobs → steps; the run/job/step UI and logs.
4. **Triggers (events)**
   1. `push` and `pull_request` (with branch/path filters as a preview).
   2. `workflow_dispatch` (manual runs with inputs) and `schedule` (cron).
   3. Filtering by branches, tags, and paths.
5. **Runners**
   1. GitHub-hosted runners: `ubuntu-latest`, `windows-latest`, `macos-latest`, and what's preinstalled.
   2. `runs-on` labels and when a runner matters (self-hosted is covered later).
6. **Steps: `run` vs. `uses`**
   1. `run:` shell commands vs. `uses:` reusable actions, and passing inputs with `with:`.
7. **Using Marketplace actions**
   1. `actions/checkout` (current **v5**) and `actions/setup-node` (current **v6**) — and how to read an action's README/inputs (`with`).
   2. Versioning references: `@v5` major tag vs. exact tag vs. commit **SHA** (why SHA matters — full deep-dive later in the course).

> **Hands-on:** From an empty repo, build up to a Node.js CI workflow — trigger on push, pull request, and a manual `workflow_dispatch` button; pick a runner; check out the code; and set up Node. Read every run in the Actions tab. (The full install → lint → test capstone comes next.)

---

## Day 2 — The workflow language & your first multi-job pipeline

**Goal:** Finish the core language of GitHub Actions — variables, contexts, and secrets — ship a complete single-job CI pipeline, then take the leap from one job to a real multi-job DAG wired together with `needs`, `if`, and status functions.

### Topics

1. **Variables, contexts, and secrets**
   1. Default environment variables and custom `env` at workflow/job/step scope (and which scope wins); `$NAME` (shell) vs. `${{ env.NAME }}` (GitHub).
   2. Contexts and expressions: `${{ github.* }}`, `${{ runner.* }}`, `${{ env.* }}`, `${{ needs.* }}`, `${{ vars.* }}`, and the `toJSON()` debugging trick; context availability.
   3. **Secrets vs. variables**: adding a repository secret, masking, the fork-PR rule, and referencing them safely (never echo a secret; don't put a URL in a secret).
2. **Your first full CI pipeline (capstone)**
   1. Combine triggers + runner + checkout + setup-node + `env` into install → lint → test against `sample-app/`.
   2. The subfolder rule: `defaults.run.working-directory` (for `run:`) vs. repo-root paths for `uses:` (`cache-dependency-path`); reading a red build on purpose; the status badge.
3. **From one job to many**
   1. Why every job runs on its own isolated runner, and what that breaks (nothing is shared).
   2. `needs` for job dependencies and building a DAG (build → test → deploy), including fan-in.
   3. `if` conditionals on jobs and steps (and the `if: 'false'` quoting gotcha that is actually **TRUE**).
   4. **Status functions** (`success()`, `failure()`, `always()`, `cancelled()`) and the invisible `if: success()` default.

> **Hands-on:** Ship the full Node.js CI capstone — trigger, checkout, setup-node, install, lint, test, read the results — then split it into multiple jobs connected with `needs`, made conditional with `if`, and add a reporter job that runs on `failure()`.

---

## Day 3 — Real pipelines: matrix, caching, artifacts, reuse & gated deploys

**Goal:** Turn the multi-job workflow into a production-grade pipeline — pass data between jobs, parallelize with a matrix, speed it up with caching, connect jobs with artifacts, factor out reusable building blocks, lock down permissions, and gate the deploy behind a human approval.

### Topics

1. **Passing data between jobs**
   1. **Job outputs** and `steps.*.outputs` via `$GITHUB_OUTPUT` — the three-link chain, multi-line values, and why every output is a string.
2. **Matrix builds**
   1. `strategy.matrix` across versions/OSes; `include`/`exclude` (and why `exclude` is applied before `include`).
   2. `fail-fast` and `max-parallel` for controlling matrix behavior.
3. **Caching and artifacts**
   1. **Dependency caching** with `actions/cache` (and built-in caching in setup actions): cache keys, `hashFiles()`, `restore-keys`, and the immutable-key bug.
   2. **Artifacts v4** — `actions/upload-artifact@v4` / `download-artifact@v4`; the v3 actions were fully retired (Jan 30, 2025), so v4 is the standard.
   3. v4 behavior to know: artifacts are **immutable**, artifact **names must be unique** per run (no appending across parallel jobs), and the `upload-artifact/merge` action for combining matrix outputs.
4. **Reuse: choosing the right building block**
   1. **Reusable workflows** (`on: workflow_call`, typed `inputs`/`secrets`/`outputs`) — reuse an entire job.
   2. **Composite actions** — bundle multiple steps into one local/shared action.
   3. Decision guide: workflow-level reuse vs. step-level reuse (custom JavaScript/Docker actions are built later in the course).
5. **Environments, secrets, and token permissions**
   1. **`GITHUB_TOKEN` permissions**: the least-privilege model, the `permissions:` block (it's not additive), and setting read-only by default then elevating per-job.
   2. **Environments** and environment-scoped secrets/variables (e.g., `staging`, `production`); repository vs. environment vs. organization secret precedence.
   3. **Deployment protection rules**: required reviewers/approvals, wait timers, and allowed branches — pausing a deploy until a human clicks Approve.
6. **Concurrency and efficiency**
   1. `concurrency` groups and `cancel-in-progress` (e.g., cancel stale PR builds; serialize deploys).
   2. Timeouts, `continue-on-error` (`outcome` vs. `conclusion`), and keeping pipelines fast and cheap.

> **Hands-on:** Build a multi-stage **build → test → deploy** pipeline. Run tests across a **matrix** of Node versions and OSes, cache dependencies, upload a build artifact and consume it in a later job, factor the test job into a **reusable workflow**, gate the deploy behind a `production` **environment** with a required reviewer, and lock down `GITHUB_TOKEN` with an explicit least-privilege `permissions:` block.

---

## Day 4 — Advanced: Security, OIDC, Custom Actions & Publishing

**Goal:** Harden and scale your pipelines the way production teams do — secure supply chain, keyless cloud auth, custom tooling, container publishing, and gated deployments — culminating in a full capstone.

### Topics

1. **Security hardening (supply chain)**
   1. **Pin actions to a full commit SHA**, not a tag/branch — why (the 2025 `tj-actions/changed-files` compromise) and how; using **Dependabot** to bump pinned SHAs.
   2. **Immutable actions / immutable releases** and org-level **SHA-pinning enforcement & action-blocking policies** (available since Aug 2025) that fail unpinned workflows.
   3. Reconfirming **least-privilege `GITHUB_TOKEN`** and safe secret handling; risks of `pull_request_target` and untrusted PR code (poisoned pipeline execution).
   4. **Secret scanning** / push protection and **CodeQL** code scanning as part of the pipeline.
2. **OIDC — keyless cloud authentication**
   1. Why long-lived cloud secrets are risky; how **OpenID Connect (OIDC)** issues **short-lived, scoped tokens** at runtime.
   2. Configuring a cloud provider to trust GitHub's OIDC provider (AWS role / Azure / GCP) and the `id-token: write` permission.
   3. Scoping trust with subject claims (repo, branch, environment).
3. **Self-hosted & scaled runners**
   1. When to use **self-hosted runners** (custom hardware, private network, licensed tools) and their security caveats (avoid on public repos).
   2. Runner groups and a note on modern scaling (Actions Runner Controller / runner scale sets).
4. **Advanced triggers & orchestration**
   1. `workflow_run` (chain workflows) and `repository_dispatch` (external events).
   2. **Reusable workflow chaining** and passing secrets/outputs between them.
   3. **Monorepo strategies**: path filters, per-path pipelines, and change detection.
5. **Advanced deployments** *(builds on the environments introduced earlier)*
   1. Deployment history on the Environments page, and rollbacks / re-runs of a deployment.
   2. Multi-environment promotion patterns and custom deployment-protection integrations.
6. **Building and publishing**
   1. Build and push a **Docker image to GHCR** (GitHub Container Registry) with proper `packages: write` permission.
   2. Author, tag/version, and publish your **own custom action** — **JavaScript** vs. **Docker container** actions, when to reach for each, following semantic version tags + moving major tag.
   3. Debugging: re-run with debug logging, step debugging, and running workflows locally with **`act`**.

> **Hands-on / Capstone:** Ship a complete, hardened delivery pipeline: all third-party actions **pinned to SHA**, least-privilege `permissions`, CodeQL + secret scanning enabled, a **Docker image built and pushed to GHCR**, and a deploy job that authenticates to a cloud provider via **OIDC (no static secrets)** and is gated behind a `production` environment with **required approval**. Bonus: extract a step into a **published custom action** and consume it back in the pipeline.

---

## Build Status

This document is the master blueprint. The teaching script for the recorded videos is the single [`README.md`](README.md) at the repo root; workflow files and YouTube metadata sit alongside it.

| Day | Teaching content | Workflow files | YouTube metadata | Status |
|-----|------------------|----------------|------------------|--------|
| Day 1 | [`README.md`](README.md) §1–7 | [`day-01/workflows/`](day-01/workflows/) `01`–`11` | [`youtube/day01_youtube.md`](youtube/day01_youtube.md) | ✅ Recorded |
| Day 2 | [`README.md`](README.md) §8–15 | [`day-02/workflows/`](day-02/workflows/) `12`–`19` | [`youtube/day02_youtube.md`](youtube/day02_youtube.md) | 🎬 Recording |
| Day 3 | [`README.md`](README.md) §16–29 | [`day-03/workflows/`](day-03/workflows/) `20`–`34` + [`day-03/actions/`](day-03/actions/) | [`youtube/day03_youtube.md`](youtube/day03_youtube.md) | 📝 Script ready, recording pending |
| Day 4 | [`README.md`](README.md) §30–43 | [`day-04/workflows/`](day-04/workflows/) `35`–`49` + [`day-04/actions/`](day-04/actions/) | [`youtube/day04_youtube.md`](youtube/day04_youtube.md) | 📝 Script ready, recording pending |

**Workflow files are numbered continuously across the whole course** (`01`–`11` = Day 1, `12`–`19` = Day 2, `20`–`34` = Day 3, `35`–`49` = Day 4) — the number is the teaching order. Each file lives under the folder for the day that teaches it (`day-01/` … `day-04/`).

> ⚠️ **The course grew from a 3-day plan into 4 days as the videos were recorded.** The original blueprint packed all of "intermediate real pipelines" into one day; in practice it split across Day 2 (orchestration) and Day 3 (matrix → reuse → gated deploys), and the advanced material became its own Day 4.
> - Day 1 stopped after `actions/setup-node`, so variables / contexts / secrets and the CI capstone (`12`–`15`) are taught at the **start of Day 2**.
> - Day 2 runs through **status functions (`19`)**. **Job outputs (`20`) through the pipeline capstone (`34`) are Day 3.**
> - Everything **advanced** — SHA pinning, CodeQL/secret scanning, OIDC, custom actions, GHCR, self-hosted runners — is **Day 4** (`35`–`49`).
>
> The single root [`README.md`](README.md) is the source of truth for what is actually taught and in what order; the per-topic lists above are the blueprint.

**Next:** all four days' teaching content and workflow files are written (README §1–43, workflows `01`–`49`, `youtube/day0{1..4}_youtube.md`). Remaining work is **recording** Days 3 and 4 and refining as the videos are shot.
