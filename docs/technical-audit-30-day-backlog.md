# VEN-2 Technical Audit and First 30-Day Backlog

Date: 2026-05-24
Issue: VEN-2
Goal: Land a US role that can sponsor an F-1 student as quickly as possible

## Executive Summary

The current execution workspace is empty. There is no application code, no deployment configuration, no tests, no analytics, no CRM for applications, and no public proof-of-work artifact in this workspace.

That means the fastest credible technical path is not to design a large product. It is to build a compact job-search operating system with two outputs:

1. A public, recruiter-facing portfolio site that demonstrates technical credibility and makes sponsorship-relevant strengths obvious.
2. A private application pipeline that tracks target companies, applications, outreach, and iteration metrics.

This keeps the first 30 days focused on time-to-learning and leverage per engineer-hour instead of premature platform work.

## What Actually Exists

Based on the current assigned workspace:

- The workspace directory exists.
- The workspace contains no files or subdirectories beyond `.` and `..`.
- There is no detectable repository, package manifest, source tree, CI config, or environment template in the current workspace.

## Key Risks

1. No technical artifact exists yet to convert engineering skill into recruiter trust.
2. No application funnel instrumentation exists, so effort cannot be optimized against interviews or sponsorship-friendly responses.
3. A second engineering hire would add coordination cost before there is a system worth parallelizing.
4. A pure marketing hire would optimize messaging before there is a strong technical asset to market.

## Fastest Credible Technical Path

Build a thin stack that improves job outcomes directly:

- Public surface: a portfolio and proof-of-work site with case studies, resume variants, contact flow, and evidence of execution.
- Private ops surface: a lightweight tracker for target companies, applications, referrals, sponsorship status, and follow-up cadence.
- Automation layer: small workflows to tailor resumes, summarize job descriptions, score application fit, and measure response rates.

Recommended stage-fit architecture:

- Frontend: Next.js app deployed on Vercel.
- Data: Supabase Postgres for application tracking and artifact metadata.
- Auth: defer until private tooling actually needs multi-device protection; start with a single-operator internal flow.
- Analytics: lightweight event tracking for portfolio visits, resume downloads, outreach replies, and application funnel state changes.
- Content: markdown or database-backed case studies, not a CMS-heavy build.

## 30-Day Backlog

### P0: Establish the execution base

#### 1. Bootstrap the repo, runtime, and deployment path

Priority: P0
Why now: Nothing else is durable until the workspace becomes a real project.
Dependencies: None
Acceptance criteria:

- A Git-backed project exists in the workspace.
- The project has a documented local setup path.
- The baseline app deploys successfully to a staging URL.
- CI runs at least one validation check on pull requests or main pushes.

#### 2. Define the job-search data model and success metrics

Priority: P0
Why now: The system needs instrumentation before scaling activity.
Dependencies: Task 1
Acceptance criteria:

- Core entities are defined: company, role, contact, application, outreach, interview, sponsorship signal, artifact.
- The funnel metrics are documented: applications sent, responses, interviews, referrals, recruiter callbacks, sponsorship-positive leads.
- A schema or typed model exists in code for the tracking entities.

#### 3. Launch a recruiter-facing portfolio skeleton

Priority: P0
Why now: Public proof is the fastest way to turn engineering work into hiring leverage.
Dependencies: Task 1
Acceptance criteria:

- A live site has a clear headline, sponsorship-relevant context, resume access, and at least one proof-of-work section.
- The site includes basic analytics events for visits and resume downloads.
- The site works on mobile and desktop.

### P1: Make the system useful

#### 4. Build the private application tracker

Priority: P1
Why now: A repeatable search needs operational discipline.
Dependencies: Tasks 1 and 2
Acceptance criteria:

- New opportunities can be entered and updated with status, dates, contacts, and sponsorship notes.
- The system can list next follow-ups due.
- The tracker exposes a simple dashboard for funnel counts by stage.

#### 5. Add case-study and artifact publishing

Priority: P1
Why now: Hiring managers need concrete evidence beyond a generic portfolio shell.
Dependencies: Tasks 1 and 3
Acceptance criteria:

- At least two structured project/case-study entries can be published without code duplication.
- Each case study includes problem, approach, tradeoffs, and measurable outcome.
- Portfolio navigation makes these artifacts easy to find from the landing page.

#### 6. Create a resume and job-tailoring workflow

Priority: P1
Why now: Tailored applications will likely outperform generic submissions.
Dependencies: Tasks 2 and 4
Acceptance criteria:

- A job description can be stored and tagged.
- The system produces a reusable tailoring brief: key skills, gaps, resume emphasis, outreach angle.
- The workflow logs which artifact version was used for each application.

### P2: Tighten the loop

#### 7. Add referral and outreach tracking

Priority: P2
Why now: Sponsorship-friendly roles often move through networks faster than cold applications.
Dependencies: Task 4
Acceptance criteria:

- Contacts and referrals can be linked to roles and companies.
- Follow-up reminders are visible.
- Response and conversion rates can be segmented by outreach source.

#### 8. Instrument portfolio-to-application conversion

Priority: P2
Why now: The public artifact should become measurable, not just polished.
Dependencies: Tasks 3 and 5
Acceptance criteria:

- Traffic sources, resume downloads, and contact submissions are measurable.
- A weekly report can identify which artifacts correlate with recruiter or referral responses.

#### 9. Harden the minimal system

Priority: P2
Why now: Reliability matters once the workflow becomes daily-use infrastructure.
Dependencies: Tasks 4 through 8
Acceptance criteria:

- Secrets are not hard-coded.
- The database has backups or export procedures.
- The app has a basic smoke test or equivalent health verification.

## Dependency Order

`1 -> 2 -> 4 -> 6 -> 7 -> 9`

`1 -> 3 -> 5 -> 8 -> 9`

## Recommended Immediate Child Issues

1. Bootstrap the repo, deploy path, and CI baseline.
2. Define the data model and funnel metrics for the job-search system.
3. Build the first recruiter-facing portfolio shell.

These are the smallest parallelizable tasks that create an execution base without overcommitting architecture.

## Hiring Recommendation

Do not hire another engineer yet.

If a single next seat must be added before this system is built, choose `UXDesigner`.

Reasoning:

- Another engineering seat is premature while the workspace is empty and the initial architecture is still reversible.
- A `CMO` is lower leverage at this stage because there is no validated funnel or differentiated technical asset to amplify.
- A `UXDesigner` would improve recruiter-facing clarity, portfolio quality, and case-study presentation once the first technical artifacts exist.

Re-evaluate the hiring decision after Tasks 1 through 4 are complete and there is real funnel data.

## Smallest Verification

- `ls -la` in the assigned workspace shows the workspace is empty before this document is added.
- This document provides the first durable technical artifact for the issue.
