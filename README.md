# My Personal Production Platform

This repository contains my personal production platform, a full-stack portfolio application that will be developed and operated throughout the senior capstone.

## Current Status

The initial repository structure and Git/GitHub development workflow have been established.

The frontend, backend, database, deployment environments, and other production capabilities will be added incrementally during the course.

## Repository Structure

- `frontend/` — React frontend
- `backend/` — application backend
- `docs/` — engineering and production documentation
- `requirements/` — cimplementation requirements and completion evidence for production-platform capabilities

## Development Workflow

Development is performed from WSL/Linux.

Changes are developed on focused branches and merged into protected `trunk` through pull requests.

## Engineering Conventions

Project conventions are documented in:

`docs/style-guide.md`

## Deployment

The frontend is deployed with Cloudflare Pages from the GitHub repository.

Live URLs:

* Production: `https://comp451.amusingimpala.com`

* Cloudflare Pages: `https://my-platform-36w.pages.dev`

Cloudflare Pages configuration:

* Production branch: `trunk`

* Root directory: `frontend`

* Build command: `npm run build`

* Build output directory: `dist`

Current status:

* Frontend deployment is active.

* Backend deployment is not yet configured.

* Production database integration is not yet configured.
