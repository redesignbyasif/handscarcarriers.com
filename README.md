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

## GitHub Pages

The site is a static build — no build step or dependencies:

1. Repository **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Open `https://<owner>.github.io/handscarcarriers.com/` — the root `index.html` forwards to `website-demo/`

`.nojekyll` files at the repository root and inside `website-demo/` keep Jekyll from touching the asset folders.

> This is a preview concept, not the live production site. The page is set to `noindex, nofollow` and is not intended to compete with <https://handscarcarriers.com> in search results.
