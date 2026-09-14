default:
    @just --list

# ── dev ─────────────────────────────────────────────────────────────────────

serve:
    python -m http.server --directory web

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
