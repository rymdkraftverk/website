default:
    @just --list

# ── dev ─────────────────────────────────────────────────────────────────────

serve:
    deno run --allow-net --allow-read jsr:@std/http/file-server --port 4321 web

# ── quality ─────────────────────────────────────────────────────────────────

static-qa:
    prettier --check web

static-fix:
    prettier --write web

# ── deploy ──────────────────────────────────────────────────────────────────

deploy:
    fpcloud website deploy website web --org rkv --project website

rollback:
    fpcloud website rollback website --org rkv --project website
