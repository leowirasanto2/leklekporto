# leklekportfolio

Personal portfolio site — iOS Engineer, Videographer, Photographer.

## Stack

- **Vite 5** — build tool / dev server
- **Vanilla JS** — ES Modules, no framework
- **CSS Custom Properties** — no utility framework, no Tailwind
- **Google Fonts** — Inter (weights 300, 400, 500)

## Design System

See `src/style.css` `:root` block for all tokens.

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FAFAFA` | Page background |
| `--color-surface` | `#F0F0F0` | Cards, subtle surfaces |
| `--color-accent` | `#1A1A1A` | Buttons, links, highlights |
| `--color-text` | `#111111` | Primary text |
| `--color-muted` | `#888888` | Secondary / caption text |

Typography scale: `--text-xs` through `--text-5xl` using `clamp()` for fluid sizing.

Layout: CSS Grid + Flexbox, `max-width: 1200px`, responsive at 375 / 768 / 1280px breakpoints.

## Commands

```bash
npm run dev      # start dev server at localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Project Structure

```
leklekportfolio/
├── CLAUDE.md
├── index.html          # single page — all sections live here
├── package.json
├── vite.config.js
├── src/
│   ├── main.js         # scroll animations (Intersection Observer), interactions
│   └── style.css       # all styles, design tokens in :root
└── public/
    └── assets/
        ├── images/     # portfolio thumbnails (WebP preferred)
        └── icons/      # favicon, OG image
```

## Conventions

- **CSS naming:** BEM-lite — `.section__title`, `.card--featured`
- **Animations:** CSS transitions + Intersection Observer API only
- **Images:** WebP format, `loading="lazy"` on all `<img>`
- **JS:** keep `main.js` small; prefer CSS animations over JS where possible
- **Fonts:** loaded via `<link>` in `<head>`, not imported in CSS

## Don't

- **No CSS frameworks** — no Tailwind, Bootstrap, or any utility CSS library
- **No extra JS dependencies** — don't add npm packages without explicit discussion
- **No JS for CSS work** — don't use JS animations or effects when CSS can handle it

## Sections

1. **Hero** — full viewport, name, role tags, tagline, scroll indicator
2. **What I Do** — 3-col grid: iOS Engineer / Videographer / Photographer
3. **Selected Works** — 2-col grid of project cards with category tags
4. **Contact** — email + social links, no form
