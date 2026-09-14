# Setup

Nothing to install. Edit `web/`, open the files in a browser.

# Update website

Push to `master`. GitHub Actions deploys `web/` to the fpcloud website
`website`, served at rymdkraftverk.com.

To deploy by hand: `fpcloud website deploy website web --org rkv --project games`.
