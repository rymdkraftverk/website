# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal static website for Rymdkraftverk, hosted as an fpcloud website. The site consists of pure HTML/CSS with no build tools or JavaScript frameworks.

## Development Workflow

### Local Development
- Edit files directly in the `web/` directory
- Test using any local web server (e.g., `python -m http.server` from the web/ directory)
- No build process required

### Deployment
Push to `master`; `.github/workflows/deploy.yml` syncs `web/` to the fpcloud
website `website` (project `website`, org `rkv`), which serves rymdkraftverk.com.
`fpcloud website deploy website web` does the same by hand, and
`fpcloud website rollback website` undoes a deploy.
- The website name and project live in the workflow file