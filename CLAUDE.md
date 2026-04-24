# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Production build (outputs to dist/)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

## Architecture

**React 19 + Vite SPA** deployed on Netlify, with Decap CMS for content management via Git-backed JSON files.

### Routing (React Router v7)

Defined in [src/App.jsx](src/App.jsx):

| Route | Component |
|-------|-----------|
| `/` | `Home.jsx` |
| `/courses` | `Courses.jsx` |
| `/internships` | `Internships.jsx` |
| `/about` | `About.jsx` |
| `/train-demo` | `train-demo.jsx` |

### Content Management

All page content lives in `content/*.json` files — not hardcoded in components:

- `content/home.json` — hero, services, CTA, dashboard stats
- `content/courses.json` — course listings
- `content/internships.json` — program details
- `content/about.json` — team, mission, vision
- `content/settings.json` — site-wide settings (name, email, policies)

These files are edited via the Decap CMS admin panel at `/admin`. Changes commit to GitHub, triggering a Netlify auto-deploy. The CMS schema is defined in [public/admin/config.yml](public/admin/config.yml).

### Forms

Netlify Forms handles both contact and internship application forms. Hidden form definitions must remain in `index.html` (at root) for Netlify to detect them at build time — do not remove these.

### Key Files

- [index.html](index.html) — Vite entry point; includes MediaPipe CDN scripts and Netlify form definitions
- [public/_redirects](public/_redirects) — Netlify SPA routing rule (`/* /index.html 200`)
- [tailwind.config.js](tailwind.config.js) — Tailwind with Poppins font
- [vite.config.js](vite.config.js) — Vite + React plugin + `historyApiFallback` for dev SPA routing

### Styling

Tailwind CSS 3. Global styles in [src/index.css](src/index.css). Font is Poppins (loaded via Google Fonts in `index.html`).

### MediaPipe

[src/train-demo.jsx](src/train-demo.jsx) uses MediaPipe face detection and drawing utilities loaded from CDN in `index.html`. This page is an interactive AI training demo — changes here may affect face detection behavior.
