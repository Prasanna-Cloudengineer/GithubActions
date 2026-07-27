# Day 4 — YouTube Metadata

---

## Video Title

GitHub Actions Full Course — Security, SHA Pinning, OIDC, Custom Actions & Publishing to GHCR | Day 4

---

## Thumbnail

**Main text (large, bold):** `Harden It`
**Sub text:** `Day 4 — GitHub Actions Zero to Hero`
**Suggested visual elements:**
- Dark GitHub background (#0D1117) with GitHub Actions blue accent (#2088FF)
- A **padlock + shield** on the right over a pipeline graph, with a green "OIDC — no secrets" pill
- A `@v1 → @<sha>` **pin** badge on the left (tag being replaced by a commit hash)
- `SHA · CODEQL · OIDC · GHCR` badge in a bright pill
- Channel name: LearnWithMithran (bottom corner)

**Key message to convey at a glance:** Take a working pipeline and make it production-secure — pinned supply chain, keyless cloud auth, your own actions, and a published image.

---

## Description

*Welcome back to Learn With Mithran! In the previous session you shipped a real build → test → deploy pipeline with approvals. Today we harden and scale it the way production security teams do.*

We start with **supply-chain security** — why the 2025 `tj-actions/changed-files` compromise happened and how pinning actions to a full commit **SHA** (kept fresh by Dependabot) stops it. Then we add **CodeQL** code scanning and **secret scanning** with push protection, and defuse the most dangerous Actions misconfiguration of all: running untrusted pull-request code with `pull_request_target`. Next we go keyless with **OIDC** — authenticating to AWS/Azure/GCP with short-lived tokens and **no stored cloud secrets** — cover **self-hosted runners**, and chain work across workflows and systems with `workflow_run` and `repository_dispatch`. Finally we build: a **Docker image pushed to GHCR**, your **own JavaScript and Docker container actions**, versioning and publishing an action with semver + a moving major tag, debugging tricks (and running workflows locally with `act`), all brought together in a fully **hardened capstone pipeline**. 🚀

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

💻 Anyone who has a working pipeline and now needs to make it secure
🧑‍🎓 Students and freshers preparing for DevOps, cloud and security job roles
🛠️ Developers responsible for CI/CD supply-chain security
🚀 DevOps, SRE and platform engineers hardening delivery pipelines
🔐 Teams moving off long-lived cloud keys toward OIDC
🏗️ Anyone who wants to build and publish their own GitHub Actions

🔍 *Chapters:*
0:00 Intro — From Working to Hardened
3:00 Recap of the Previous Session + Today's Goal
7:00 Supply-Chain Security — Pinning Actions to a SHA
20:00 The tj-actions Compromise & Dependabot
30:00 CodeQL Code Scanning
41:00 Secret Scanning & Push Protection
50:00 Untrusted PRs & pull_request_target
1:03:00 OIDC — Keyless Cloud Authentication
1:18:00 Scoping Trust with the sub Claim
1:26:00 Self-hosted & Scaled Runners
1:35:00 workflow_run & repository_dispatch
1:47:00 Monorepo Change Detection
1:55:00 Build & Push a Docker Image to GHCR
2:08:00 Custom JavaScript Actions
2:22:00 Custom Docker Container Actions
2:33:00 Publishing & Versioning Your Own Action
2:43:00 Debugging & Running Locally with act
2:52:00 🚀 The Hardened Capstone Pipeline
3:12:00 Course Wrap-up & Where to Go Next

⏭️ *You've completed the series:* you can now build secure, production-grade CI/CD pipelines end to end — pinned supply chain, code and secret scanning, keyless OIDC cloud deploys, your own published actions, and a fully hardened capstone. Take it to your own project next.

👍 If this video helps you, like, subscribe, and turn on notifications for more hands-on content on GitHub Actions, DevOps, Azure, AWS, Linux, and Python.

#GitHubActions #CICD #DevOps #DevSecOps #GitHubActionsTutorial #SupplyChainSecurity #SHApinning #OIDC #CodeQL #SecretScanning #GHCR #CustomActions #DockerAction #JavaScriptAction #ContinuousIntegration #ContinuousDeployment #GitHub #WorkflowAutomation #LearnWithMithran #GitHubActionsCourse #GitHubWorkflow #DevOpsTutorial #KeylessAuth #GreensTechnologies #DevOpsTraining

---

## Tags

github actions, github actions tutorial, github actions security, sha pinning github actions, pin actions to sha, tj-actions compromise, dependabot github actions, codeql, github code scanning, secret scanning, push protection, pull_request_target, poisoned pipeline execution, github actions oidc, keyless authentication, oidc aws github actions, id-token write, self-hosted runners, workflow_run, repository_dispatch, monorepo github actions, docker build push ghcr, github container registry, custom github action, javascript action, docker container action, publish github action, moving major tag, act nektos, devsecops, ci cd security, github actions full course, github actions course 2026, learnwithmithran, greens technologies
