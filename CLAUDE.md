# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal static website for Rymdkraftverk, hosted as an fpcloud website. The site consists of pure HTML/CSS with no build tools or JavaScript frameworks.

## Development Workflow

`just` lists every command; anything run in this repo is a recipe.

### Local Development
- Edit files directly in the `web/` directory
- `just serve` runs a local web server from `web/`
- `just static-qa` checks formatting, `just static-fix` rewrites it
- No build process required

### Deployment
Push to `master`; `.github/workflows/deploy.yml` syncs `web/` to the fpcloud
website `website` (project `website`, org `rkv`), which serves rymdkraftverk.com.
`just deploy` does the same by hand, and `just rollback` undoes a deploy.
- The website name and project live in the workflow file and the `justfile`
