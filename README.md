# Manikandan P — Portfolio

A fast, minimal React portfolio. Refined editorial-engineering aesthetic, dark/light themes, three pages (Home · About · Work).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Edit your content

**Everything lives in one file:** `src/data/content.js`
Change text, add/remove projects, update links, metrics, experience, skills, and awards there — no need to touch any layout code.

Images go in `/public`. The hackathon photo should be named `elevenlabs-hackathon.jpg`.

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Publish (pick one — all free)

- **Vercel** (recommended): push to GitHub, "Import Project" at vercel.com. `vercel.json` already handles routing.
- **Netlify**: drag-and-drop the `dist/` folder at app.netlify.com/drop, or connect the repo. `public/_redirects` handles routing.
- **GitHub Pages**: works too, but needs a base path tweak — ask and I'll set it up.

## Stack

React 18 · React Router · Vite · Tailwind CSS v4 · Framer Motion
Fonts: Fraunces (display) · Geist (body) · JetBrains Mono (labels)
