# H&S Car Carriers — Homepage Redesign

A premium, mobile-first, single-page redesign concept for **H&S Car Carriers, LLC** (Nahunta, Georgia) — the family-owned auto transport and brokerage company operating since 1999.

Built as a plain static site: **HTML5 + CSS3 + vanilla JavaScript**. No frameworks, no build step, no backend. GitHub Pages ready.

> **Status:** design concept / preview build. The page carries `noindex, nofollow` so it never competes with the live production site at <https://handscarcarriers.com>.

---

## Preview

| Environment | URL |
| --- | --- |
| GitHub Pages | `https://<owner>.github.io/handscarcarriers.com/website-demo/` |
| Local | `python3 -m http.server 8000` → <http://localhost:8000/website-demo/> |

The repository root holds a tiny `index.html` that redirects to `website-demo/`, so the Pages site root also works.

---

## Structure

```
website-demo/
├── index.html                  # the entire homepage (semantic, single page)
├── .nojekyll                   # serve files as-is on GitHub Pages
├── css/
│   └── style.css               # tokens → base → components → sections → breakpoints
├── js/
│   └── script.js               # nav, accordion, reveal, counters, active links
└── assets/
    ├── fonts/                  # self-hosted Archivo + JetBrains Mono (variable, latin)
    ├── icons/                  # favicon.svg, apple-touch-icon.png
    ├── images/                 # photography (WebP, responsive widths)
    └── logo/                   # hs-logo.png (trimmed), hs-logo-sm.png, hs-logo-original.png
```

All paths are **relative**, so the site works from a project subdirectory (`/repo/website-demo/`) as well as a custom domain.

---

## Design direction

**Industrial editorial.** The identity comes straight out of the existing brand: the H&S script logo, its red (`#CE1C22`) and the near-black of its outlines, set against a warm paper tone (`#F4F1EC`).

- **Typography** — Archivo (variable grotesque) for headlines and body, JetBrains Mono for labels, numbering and operational details. Two families, no decorative fonts.
- **Layout** — asymmetric split hero, oversized section numbering, hairline rules instead of card shadows, full-bleed photography, one accent colour used with restraint.
- **Motion** — subtle: scroll reveals, animated counters, a single marquee ticker, hover-filled service rows. All of it switches off under `prefers-reduced-motion`.
- **No** gradients-as-decoration, no glassmorphism past the hero chip, no emoji icons.

### Sections

1. Utility bar + sticky navigation (with full-screen mobile menu)
2. Split hero — headline, positioning, dual CTA, credibility markers, fleet photography
3. Credential ticker
4. Key numbers band (25+ years · 250K+ cars/yr · 10M+ miles/yr · 48 states)
5. Services — five numbered rows (direct hauling, brokerage, dealer/private, ports, repair)
6. The company — brand story, facts, in-house documentation photo, brand statement
7. Coverage — Southeast corridors, 48-state brokerage card, HQ, state list
8. Process — four steps from call to signed delivery
9. Drivers — driver types, benefits, requirements, live application link
10. Carriers — Auto Dispatch onboarding, payment terms, insurance minimums
11. Testimonials — three genuine partner quotes from the existing site
12. FAQ — accessible accordion
13. Contact — phone, email, address, hours
14. Footer + mobile "call dispatch" bar

---

## Content & brand sources

Everything factual on the page was taken from the existing website (`handscarcarriers.com` — home, careers, autodispatch, contact). No invented services, contacts, certifications, testimonials or claims.

| Item | Source |
| --- | --- |
| Logo | Original H&S logo file, background trimmed from the transparent PNG — artwork untouched |
| Brand red | `#CE1C22`, sampled from the logo |
| Phone / email / address / hours | Existing contact page and footer |
| Statistics | Existing homepage counters (25+, 250,000+, 10,000,000+, 48 states) |
| Testimonials | Existing contact page (Vitaliy Tarasenko, Ramos Man, Brother's Transport) |
| Driver terms & requirements | Existing careers page |
| Carrier terms & insurance | Existing Auto Dispatch page |

### Photography

The existing site's imagery is hosted on a CDN that is not reachable from the build environment, so the hero, drivers, coverage, shop and contact visuals were **generated as brand-consistent concept photography** (H&S livery on trucks, logo on uniforms) rather than lifted from the live site. They are illustrative concept imagery, not photographs of real H&S jobs, staff or customers — swap them for the client's own photo library before any production launch. The logo is the only purely original brand asset in the photography set.

---

## Accessibility & quality

- Semantic landmarks, one `<h1>`, logical heading order, skip link
- Keyboard-operable menu and accordion (`aria-expanded` / `aria-controls`, `inert` when closed, Escape to close)
- Visible `:focus-visible` styles, 4.5:1 text contrast on body copy, large-text accents ≥3:1
- Descriptive `alt` text on every image, decorative SVGs hidden
- Responsive images with width/height (no layout shift), lazy loading below the fold
- `prefers-reduced-motion` and print styles

## Verified in this build

- `html-validate` — no structural or ARIA errors (two intentional `tel:` formatting notices remain)
- `csstree-validator` — CSS parses clean
- Headless Chromium render at **360 / 390 / 430 / 768 / 1024 / 1280 / 1440 px** — no horizontal overflow, no console errors, no failed requests
- Functional checks (jsdom) — mobile menu open/close/Escape, accordion single-open behaviour, aria wiring, counters, footer year

Not done here: real-device testing, Safari/Firefox visual QA, and any backend form handling (there is no form — quotes route to phone/email on purpose).

---

## Editing notes

- Brand and type tokens live at the top of `css/style.css` (`:root`).
- Photography is WebP; widths included: hero `960/1376`, aerial and night `960/1376`, driver and shop single width.
- If you swap in real photography, keep the 16:9 (or 4:5 portrait) crops and update the `width`/`height` attributes.
- The `noindex` directive is deliberate for the demo. Remove `<meta name="robots" content="noindex, nofollow">` and the `canonical` tag only if this ever becomes the production site.
