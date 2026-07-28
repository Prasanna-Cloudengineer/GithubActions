# Day 4 — YouTube Metadata

---

## Video Title

GitHub Actions Full Course — Permissions, Approvals, SHA Pinning, OIDC, Custom Actions & GHCR | Day 4

---

## Thumbnail

**Main text (large, bold):** `Gate It. Harden It.`
**Sub text:** `Day 4 — GitHub Actions Zero to Hero`
**Suggested visual elements:**
- Dark GitHub background (#0D1117) with GitHub Actions blue accent (#2088FF)
- A **padlock + shield** on the right over a pipeline graph whose last box carries a yellow ⏸️ "Waiting for approval" badge, plus a green "OIDC — no secrets" pill
- A `@v1 → @<sha>` **pin** badge on the left (tag being replaced by a commit hash)
- `APPROVAL · SHA · OIDC · GHCR` badge in a bright pill
- Channel name: LearnWithMithran (bottom corner)

**Key message to convey at a glance:** Finish the pipeline and make it production-secure — least-privilege tokens, a human approval gate, pinned supply chain, keyless cloud auth, and your own published actions and images.

---

## Description

*Welcome back to Learn With Mithran! In the previous session you made your pipeline fast and maintainable — matrix builds, caching, artifacts, reusable workflows and composite actions. Today we finish it and then harden it the way production security teams do.*

First we lock the pipeline down: least-privilege **`GITHUB_TOKEN` permissions** (and why the `permissions:` block is not additive), **environments** with scoped secrets and secret precedence, **required reviewers** that pause a deploy until a human clicks Approve, **`concurrency`** to cancel stale builds or serialise deploys, and **timeouts** with `continue-on-error` — all brought together in a full **build → test → deploy** capstone with a gated production environment.

Then we harden it. We start with **supply-chain security** — why the 2025 `tj-actions/changed-files` compromise happened and how pinning actions to a full commit **SHA** (kept fresh by Dependabot) stops it. Then we add **CodeQL** code scanning and **secret scanning** with push protection, and defuse the most dangerous Actions misconfiguration of all: running untrusted pull-request code with `pull_request_target`. Next we go keyless with **OIDC** — authenticating to AWS/Azure/GCP with short-lived tokens and **no stored cloud secrets** — cover **self-hosted runners**, and chain work across workflows and systems with `workflow_run` and `repository_dispatch`. Finally we build: a **Docker image pushed to GHCR**, your **own JavaScript and Docker container actions**, versioning and publishing an action with semver + a moving major tag, debugging tricks (and running workflows locally with `act`), all brought together in a fully **hardened capstone pipeline**. 🚀

**Still 100% browser-based — no local setup, nothing to install.** Every workflow file used in this video is prebuilt in the GitHub repo below. Copy, commit, watch it run.

📂 *Get the course notes, diagrams and all workflow files from GitHub:*
- https://github.com/Iam-mithran/LWM-GithubActions

♾️ *Join the Discord:*
- https://discord.gg/N7GBNHBdqw

📢 *Follow Us on Social Media:*
- https://www.instagram.com/learnwithmithran/

☎️ *Contact Information:*
Phone Mithran: +91 91500 87745
Greens Technologys, Perumbakkam (https://maps.app.goo.gl/u34U3rXu8zPFfQh5A)

🧩 *Put the pieces together with this reference – watch here!*

☁️ Master core AWS services step-by-step – watch the full AWS playlist here (https://youtube.com/playlist?list=PLPLf8iqkntdMxtXT04-TG1WzDvBPUJ3qk&si=CFx_IMjpWcufkTme)
🛠️ Get hands-on with top DevOps tools and workflows – dive into the DevOps playlist here (https://youtube.com/playlist?list=PLPLf8iqkntdNaU9GbaZckoQalKPRJMvT6&si=eUAHHibEmDI4bQuP)
🧠 Level up your coding with practical Python lessons – start learning here (https://youtube.com/playlist?list=PLPLf8iqkntdNefseVlDOaRQ7zersK79AI&si=6UUBU90Q6Ov96g96)
🐧 Build your Linux fundamentals from scratch – explore the Linux series here (https://youtube.com/playlist?list=PLPLf8iqkntdMew0yP5Ad9pbaZki0Wf-2w&si=4uJ2EAYamtO6PZgz)

🎯 *Topics Covered*:

🔹 `GITHUB_TOKEN` and least-privilege `permissions` — why the block is not additive
🔹 Environments — scoped secrets, secret precedence, and deployment URLs
🔹 Required reviewers — pausing a deploy until a human clicks Approve
🔹 `concurrency` — cancelling stale PR builds vs serialising deploys
🔹 `timeout-minutes` and `continue-on-error` — plus `outcome` vs `conclusion`
🔹 Production capstone — build → test → deploy with approval, artifacts and least privilege
🔹 Supply-chain security — pinning actions to a full commit SHA, and why tags are dangerous
🔹 The 2025 `tj-actions/changed-files` compromise — what happened and the lesson
🔹 Dependabot for GitHub Actions — keeping SHA pins fresh automatically
🔹 CodeQL code scanning — catching vulnerabilities on every push and PR
🔹 Secret scanning & push protection — blocking credentials before they land
🔹 `pull_request` vs `pull_request_target` — poisoned pipeline execution and how to avoid it
🔹 OIDC — keyless cloud authentication with short-lived tokens (no stored keys)
🔹 Scoping cloud trust with the `sub` claim (repo, branch, environment)
🔹 Self-hosted runners — when to use them and the public-repo security rule
🔹 `workflow_run` — chaining one workflow off another
🔹 `repository_dispatch` — triggering workflows from outside GitHub
🔹 Monorepo change detection — build only what changed
🔹 Building and pushing a Docker image to GHCR with `packages: write`
🔹 Custom JavaScript actions — `using: node20`, inputs and outputs under the hood
🔹 Custom Docker container actions — full control of the environment
🔹 Publishing your own action — semver tags + the moving major tag trick
🔹 Debugging workflows — debug logging, tmate, and running locally with `act`
🔹 Full hardened capstone — SHA-pinned, scanned, GHCR image, OIDC-gated deploy

📌 *Who Is This Video For:*

💻 Anyone who has a working pipeline and now needs approvals and security on it
🧑‍🎓 Students and freshers preparing for DevOps, cloud and security job roles
🛠️ Developers responsible for CI/CD supply-chain security
🚀 DevOps, SRE and platform engineers hardening delivery pipelines
🏢 Teams that need gated deploys and least-privilege tokens before they can ship
🔐 Teams moving off long-lived cloud keys toward OIDC
🏗️ Anyone who wants to build and publish their own GitHub Actions

🔍 *Chapters:*
0:00 Intro — From Working to Gated and Hardened
3:00 Recap of the Previous Session + Today's Goal
7:00 GITHUB_TOKEN and Least-Privilege `permissions`
19:00 Environments, Scoped Secrets and Secret Precedence
29:00 Deployment Gates — Requiring a Human Approval
39:00 Concurrency — Cancel Stale Builds, Serialise Deploys
49:00 Timeouts and continue-on-error (outcome vs conclusion)
57:00 🚀 Capstone — The Full Build → Test → Deploy Pipeline
1:17:00 Supply-Chain Security — Pinning Actions to a SHA
1:30:00 The tj-actions Compromise & Dependabot
1:40:00 CodeQL Code Scanning
1:51:00 Secret Scanning & Push Protection
2:00:00 Untrusted PRs & pull_request_target
2:13:00 OIDC — Keyless Cloud Authentication
2:28:00 Scoping Trust with the sub Claim
2:36:00 Self-hosted & Scaled Runners
2:45:00 workflow_run & repository_dispatch
2:57:00 Monorepo Change Detection
3:05:00 Build & Push a Docker Image to GHCR
3:18:00 Custom JavaScript Actions
3:32:00 Custom Docker Container Actions
3:43:00 Publishing & Versioning Your Own Action
3:53:00 Debugging & Running Locally with act
4:02:00 🚀 The Hardened Capstone Pipeline
4:22:00 Course Wrap-up & Where to Go Next

⏭️ *You've completed the series:* you can now build secure, production-grade CI/CD pipelines end to end — least-privilege tokens, gated deployments with human approval, a pinned supply chain, code and secret scanning, keyless OIDC cloud deploys, your own published actions, and a fully hardened capstone. Take it to your own project next.

👍 If this video helps you, like, subscribe, and turn on notifications for more hands-on content on GitHub Actions, DevOps, Azure, AWS, Linux, and Python.

#GitHubActions #CICD #DevOps #DevSecOps #GitHubActionsTutorial #DeploymentApproval #LeastPrivilege #GitHubEnvironments #SupplyChainSecurity #SHApinning #OIDC #CodeQL #SecretScanning #GHCR #CustomActions #DockerAction #JavaScriptAction #ContinuousIntegration #ContinuousDeployment #GitHub #WorkflowAutomation #LearnWithMithran #GitHubActionsCourse #GitHubWorkflow #DevOpsTutorial #KeylessAuth #GreensTechnologies #DevOpsTraining

---

## Tags

github actions, github actions tutorial, github actions permissions, github_token permissions, least privilege github actions, github environments, deployment approval github actions, required reviewers, github actions concurrency, cancel in progress, github actions timeout, continue-on-error, outcome vs conclusion, build test deploy pipeline, github actions security, sha pinning github actions, pin actions to sha, tj-actions compromise, dependabot github actions, codeql, github code scanning, secret scanning, push protection, pull_request_target, poisoned pipeline execution, github actions oidc, keyless authentication, oidc aws github actions, id-token write, self-hosted runners, workflow_run, repository_dispatch, monorepo github actions, docker build push ghcr, github container registry, custom github action, javascript action, docker container action, publish github action, moving major tag, act nektos, devsecops, ci cd security, github actions full course, github actions course 2026, learnwithmithran, greens technologies
