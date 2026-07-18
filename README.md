# arnabbiswas.in

Personal portfolio site for **Arnab Biswas** — Software Engineer.
Live at **[arnabbiswas.in](https://arnabbiswas.in)**.

Dark, terminal-inspired design with smooth motion. Built as a static site that
ships near-zero JavaScript for content, loading interactivity only where needed.

## Stack

- **[Astro](https://astro.build)** — static site, file-based routing
- **React** — interactive islands only (nav, cursor spotlight, scroll reveals, typing, tilt cards)
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling via the Vite plugin, themed design tokens
- **[Framer Motion](https://www.framer.com/motion/)** — animations

## Structure

```
├── public/CNAME                 # custom domain (copied to build root)
├── src/
│   ├── data/site.js             # all content: profile, skills, projects, contacts, nav
│   ├── layouts/Base.astro       # head, fonts, backdrop, nav
│   ├── pages/index.astro        # page composition
│   ├── components/react/        # islands: Nav, Spotlight, Reveal, Typed, TiltCard
│   └── styles/global.css        # Tailwind theme tokens + base
└── astro.config.mjs
```

**Editing content:** change `src/data/site.js` — no component edits needed for text, projects, or skills.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # serve the build
```

## Deploy

Hosted **free** on GitHub Pages, built by GitHub Actions on every push to `main`
(`.github/workflows/deploy.yml`). Cloudflare sits in front for DNS, CDN, and SSL.

Architecture: `Visitor → Cloudflare → GitHub Pages`

## License

Content and design © Arnab Biswas. Code available for reference.
