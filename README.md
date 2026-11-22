# handscarcarriers.com

Homepage redesign concept for **H&S Car Carriers, LLC** — family-owned auto transport and brokerage, Nahunta, Georgia, since 1999.

The full project lives in [`website-demo/`](website-demo/):

- `website-demo/index.html` — the homepage
- `website-demo/css/style.css`, `website-demo/js/script.js`
- `website-demo/assets/` — photography, fonts, icons, original logo
- [`website-demo/README.md`](website-demo/README.md) — design rationale, content sources, QA notes

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/website-demo/
```

## Deploy on GitHub Pages (one manual step)

The site is a pure static build — no build step, no dependencies. Pages is **not enabled yet** on this repository; the GitHub integration used to build the site cannot change repository settings, so it has to be switched on once by hand:

1. Repository → **Settings → Pages**
2. **Build and deployment → Source:** *Deploy from a branch*
3. **Branch:** `main` · **Folder:** `/ (root)` → **Save**
4. Wait ~1 minute for the first build, then open:
   - `https://redesignbyasif.github.io/handscarcarriers.com/` — forwards to the homepage
   - `https://redesignbyasif.github.io/handscarcarriers.com/website-demo/` — the homepage itself

`.nojekyll` files at the repository root and inside `website-demo/` keep Jekyll from touching the asset folders, so the files are served exactly as committed. No custom domain or DNS change is needed.

> This is a preview concept, not the live production site. The page is set to `noindex, nofollow` and is not intended to compete with <https://handscarcarriers.com> in search results.
