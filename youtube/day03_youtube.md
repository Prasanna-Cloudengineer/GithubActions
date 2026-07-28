# Day 3 — YouTube Metadata

---

## Video Title

GitHub Actions Full Course — Job Outputs, Matrix Builds, Caching, Artifacts, Reusable Workflows & Composite Actions | Day 3

---

## Thumbnail

**Main text (large, bold):** `Matrix · Cache · Reuse`
**Sub text:** `Day 3 — GitHub Actions Zero to Hero`
**Suggested visual elements:**
- Dark GitHub background (#0D1117) with GitHub Actions blue accent (#2088FF)
- A **fan-out graph** on the right: one job box branching into several parallel job boxes with green ticks
- A 3×3 **matrix grid** icon on the left (Ubuntu / Windows / macOS × Node 20 / 22 / 24)
- `MATRIX · CACHE · ARTIFACTS · REUSE` badge in a bright pill
- Channel name: LearnWithMithran (bottom corner)

**Key message to convey at a glance:** A real pipeline — parallel across versions, cached, sharing files between jobs, and with the copy-pasted YAML factored out.

---

## Description

*Welcome back to Learn With Mithran! In the previous session you connected jobs into a multi-job pipeline with `needs` and `if`. Today we make that pipeline fast, parallel and maintainable — the way a real team actually writes it.*

We start by passing data between jobs with **outputs** and `$GITHUB_OUTPUT`, then test across a **matrix** of Node versions and operating systems (`include`, `exclude`, `fail-fast`, `max-parallel`). We speed everything up with **dependency caching** — cache keys, `hashFiles()`, `restore-keys` and the immutable-key bug that silently freezes your cache forever — and share real files between jobs using **artifacts**, including the immutable-artifact trap that breaks migrated matrix workflows and how to merge reports back together. We finish by killing copy-pasted YAML for good with **reusable workflows** (`workflow_call` with typed inputs, secrets and outputs) and **composite actions**, and a clear decision guide for which one to reach for. 🚀

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

🔹 Job outputs — `$GITHUB_OUTPUT`, the three-link chain, and multi-line values
🔹 Why `::set-output::` is dead, and why every output is a string
🔹 Matrix builds — one job definition, many versions, in parallel
🔹 Multi-dimension matrices — versions × operating systems, `include` and `exclude`
🔹 Why `exclude` runs before `include` — the ordering that trips everyone up
🔹 `fail-fast` and `max-parallel` — controlling a matrix
🔹 Dependency caching — cache keys, `hashFiles()`, `restore-keys` and the immutable-key bug
🔹 Cache vs artifact — the difference people get wrong
🔹 Artifacts — upload, download, and which majors are current (upload@v7 / download@v8)
🔹 The immutable-artifact matrix trap — "an artifact with this name already exists" and how to fix it
🔹 Merging matrix artifacts with `upload-artifact/merge` and `merge-multiple`
🔹 Reusable workflows — `workflow_call`, typed inputs, secrets and outputs
🔹 Composite actions — bundling steps, the mandatory `shell:`, and the checkout chicken-and-egg
🔹 Reusable workflow vs composite action vs custom action — the decision guide

📌 *Who Is This Video For:*

💻 Anyone who has built a multi-job pipeline and wants to make it production-grade
🧑‍🎓 Students and freshers preparing for DevOps and cloud job roles
🛠️ Developers whose CI is slow, flaky, or full of copy-pasted YAML
🚀 DevOps, SRE and platform engineers standardizing builds and deployments
🔁 Anyone migrating multi-stage pipelines from Jenkins, GitLab CI or CircleCI
🏢 Teams maintaining the same CI YAML across many repositories

🔍 *Chapters:*
0:00 Intro — From a Multi-Job Pipeline to a Fast, Reusable One
3:00 Recap of the Previous Session + What We're Building Today
7:00 Job Outputs — Passing Data Between Jobs
19:00 Matrix Builds — One Job, Many Versions
29:00 Multi-Dimension Matrices — `include` / `exclude`
39:00 `fail-fast` and `max-parallel`
47:00 Caching Dependencies — Keys, hashFiles and restore-keys
1:01:00 Cache vs Artifact — The Difference That Matters
1:07:00 Artifacts — Upload and Download Between Jobs
1:19:00 The Immutable-Artifact Matrix Trap and How to Merge Artifacts
1:29:00 Reusable Workflows — `workflow_call` and Typed Inputs
1:43:00 Calling a Reusable Workflow (and Matrixing It)
1:53:00 Composite Actions — Bundling Repeated Steps
2:05:00 Which One Do I Use? The Reuse Decision Guide
2:11:00 Day 3 Cheat Sheet & Recap
2:17:00 What's Next — Permissions, Approvals & Security

⏭️ *Coming next:* locking down `GITHUB_TOKEN` with least-privilege `permissions`, environments with scoped secrets and **required human approvals**, `concurrency` and timeouts, and the full **build → test → deploy** capstone — and then, in the finale, supply-chain security and pinning actions to a commit SHA, CodeQL and secret scanning, OIDC keyless authentication to AWS/Azure/GCP, self-hosted runners, `workflow_run` and monorepo strategies, publishing images to GHCR, and building and publishing your own JavaScript and Docker actions.

👍 If this video helps you, like, subscribe, and turn on notifications for more hands-on content on GitHub Actions, DevOps, Azure, AWS, Linux, and Python.

#GitHubActions #CICD #DevOps #GitHubActionsTutorial #CIPipeline #MatrixBuild #ReusableWorkflows #CompositeActions #GitHubArtifacts #DependencyCaching #JobOutputs #ContinuousIntegration #ContinuousDeployment #GitHub #DevOpsForBeginners #WorkflowAutomation #LearnWithMithran #GitHubActionsCourse #BuildAutomation #GitHubWorkflow #DevOpsTutorial #WorkflowCall #GreensTechnologies #DevOpsTraining #JenkinsAlternative

---

## Tags

github actions, github actions tutorial, github actions matrix, github actions matrix build, fail-fast, max-parallel, github actions cache, hashfiles, restore-keys, github actions artifacts, upload artifact v7, download artifact v8, upload-artifact merge, github actions reusable workflow, workflow_call, composite action github actions, github actions needs, github actions job outputs, github_output, cache vs artifact, ci cd pipeline tutorial, multi stage pipeline, build test deploy pipeline, devops tutorial, devops for beginners, github actions full course, github actions course 2026, learnwithmithran, greens technologies
