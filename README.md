# Setup

`direnv allow` gives you the dev shell. `just` lists every command.

`just serve` runs the site locally from `web/`.

# Update website

Push to `master`. GitHub Actions deploys `web/` to the fpcloud website
`website`, served at rymdkraftverk.com.

`just deploy` does the same by hand, `just rollback` undoes it.
