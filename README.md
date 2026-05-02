# Design Bookmarks

A curated collection of high-craft websites with detailed technique breakdowns. Pixel-perfect reference for designers and developers who want to learn from the best work on the web.

Built with Vite + React. Deployed on Vercel.

---

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build    # produce static site in /dist
npm run preview  # serve the production build locally
```

---

## Adding a new bookmark

1. **Capture a screenshot** of the site's hero or most representative section. Save as JPEG (~80% quality, max 1200px wide). Drop into `public/screenshots/{id}.jpg` where `{id}` is a short slug.

2. **Add a JSON entry** to `src/data/bookmarks.json`:

   ```json
   {
     "id": "site-slug",
     "url": "https://...",
     "title": "Site Name",
     "subtitle": "Short tagline",
     "creator": "Studio or Designer",
     "handle": "@handle or domain",
     "style": "Visual style label — e.g. Editorial Dark SaaS",
     "builder": "Stack — e.g. Next.js · Framer Motion",
     "categories": ["landing-page", "motion", "typography"],
     "accent": "#a78bfa",
     "accentDim": "rgba(167,139,250,0.08)",
     "accentBorder": "rgba(167,139,250,0.18)",
     "techniques": [
       {
         "label": "Short technique name",
         "desc": "Specific, code-implementable description — what API/property/value, why it works, how to reproduce."
       }
     ],
     "dateAdded": "YYYY-MM-DD",
     "cover": "/screenshots/site-slug.jpg"
   }
   ```

3. **Available categories** (used for color-coded tags and filtering):
   - `landing-page` · `typography` · `motion` · `layout` · `ui-components`
   - `data-viz` · `color` · `illustration` · `3d` · `interaction`

4. **Commit and push.** Vercel deploys automatically.

### Technique writing standards

Each `desc` field should be specific enough that someone could re-implement the effect from the description alone. Avoid generic praise.

- ❌ "Beautiful hero animation"
- ✅ "WebGL canvas mesh gradient — indigo/purple/teal/coral shifting via shader uniform; static PNG fallback for reduced-motion"

Aim for 3–6 techniques per entry. The five most distinctive moves, not an exhaustive list.

---

## Project structure

```
.
├── index.html              # Vite entry shell
├── public/
│   └── screenshots/        # one image per bookmark, named {id}.jpg
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # top-level layout, filter, layout toggle
│   ├── styles.css          # global resets + font setup
│   ├── components/
│   │   ├── Card.jsx        # bookmark card with expandable techniques
│   │   ├── Cover.jsx       # screenshot + visit pill
│   │   ├── Tag.jsx         # color-coded category pill
│   │   └── TechRow.jsx     # single technique row
│   └── data/
│       └── bookmarks.json  # source of truth — all entries live here
├── vercel.json             # Vite framework hint
├── vite.config.js
└── package.json
```

---

## Deployment

Vercel auto-deploys on push to `main`. To set up:

1. Push this repo to GitHub.
2. Visit https://vercel.com/new, import the repo.
3. Vercel detects Vite automatically — accept defaults.
4. First deploy completes in ~30 seconds.

Custom domains can be added later in the Vercel dashboard.

---

## Companion: the visual-design-craft skill

This site is the published canon for the `visual-design-craft` Claude skill. The skill has three modes:

- **Analyze** — break down a site's design and tech stack
- **Bookmark** — save sites to a personal collection (in-chat scratchpad via `window.storage`, or commit to this repo for the published canon)
- **Build** — generate a starter React component recreating the site's key techniques

When the skill produces a bookmark entry, copy the JSON into `src/data/bookmarks.json`, drop the screenshot into `public/screenshots/`, commit, push.
