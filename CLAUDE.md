# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal static website for Rymdkraftverk, hosted on AWS S3. The site consists of pure HTML/CSS with no build tools or JavaScript frameworks.

## Development Workflow

### Local Development
- Edit files directly in the `web/` directory
- Test using any local web server (e.g., `python -m http.server` from the web/ directory)
- No build process required

### Deployment
```bash
./deploy.sh  # Syncs web/ directory to AWS S3 bucket
```

Before first deployment:
1. Copy `.env.example` to `.env`
2. Add AWS credentials (AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY)

## Project Structure

- `web/` - All website content (HTML, CSS, images, fonts)
  - `index.html` - Homepage with animated GIFs and YouTube embed
  - `team.html` - Team profiles with social links
  - `index.css` - Shared styles for all pages
  - `patchy-robots.otf` - Custom font used throughout
- `deploy.sh` - AWS S3 sync script
- `.env` - AWS credentials (not in git)

## Design Guidelines

- Dark theme: Background #212121, white text
- Custom font: "patchy-robots"
- Keep HTML semantic and minimal
- Maintain mobile-friendly viewport settings
- All pages share `index.css` for consistent styling

## Common Tasks

### Adding Team Members
Edit `web/team.html` and follow the existing structure with photo, name, and social links.

### Updating Homepage Content
Edit `web/index.html` - main content areas are the GIF links and YouTube embed.

### Modifying Styles
All styles are in `web/index.css` - changes affect both pages.

## Important Notes

- No JavaScript is used - keep it that way for simplicity
- Images should be optimized before adding (current team photos are ~2-6MB)
- The site links to two subdomains (tails and sticky-feet) which are separate deployments
- AWS S3 bucket name is defined in deploy.sh environment variable