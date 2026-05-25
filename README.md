# Venkat Job Search OS

This repository is the first durable engineering base for Venkat's job-search system.
It starts with a thin recruiter-facing Next.js app, a deployable staging path, and a
minimal CI baseline that validates linting and TypeScript before more product work lands.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript 5
- Tailwind CSS 4
- GitHub Actions for baseline CI
- GitHub Pages for the first public staging deploy

## Local Setup

Prerequisites:

- Node.js 20.9 or newer
- npm 11 or newer

Install and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run ci` runs the lint and typecheck pair used by the baseline CI workflow.

## Deployment

The current staging path publishes the static Next.js export to GitHub Pages.
That keeps the bootstrap environment simple, public, and inexpensive while the
product is still proving its first recruiter-facing iteration.

## Repository Structure

- `app/`: application shell and landing page
- `docs/technical-audit-30-day-backlog.md`: initial technical audit and staged backlog
- `.github/workflows/ci.yml`: baseline validation workflow

## Current Scope

This bootstrap issue intentionally stops at the thinnest useful base:

- a real git-backed project
- documented setup
- one live staging deploy path
- one working CI validation path

Data models, analytics, the private tracker, and richer recruiter-facing content are
handled in follow-up issues.
