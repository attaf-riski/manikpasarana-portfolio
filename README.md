# Manik Parasara — Maritime Expert Portfolio

Professional portfolio website for **Manik Parasara**, a maritime expert based in
Jakarta, Indonesia. Covers bulk carrier operations, container shipping, navigation,
safety, risk assessment, sailing instruction, LNG support, and port engineering.

Built with [Astro](https://astro.build) — a fast, static-first site with build-time
image optimization (WebP, responsive `srcset`).

🌐 **Live:** https://manikparasara.attaf.my.id

## Tech stack

- **Astro 7** — static site generation, near-zero client JS
- **Sharp** — build-time image optimization
- Plain CSS design system (Modern Corporate Maritime theme)

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  assets/images/   # source images (optimized at build time)
  components/       # Nav, Footer, Icon
  layouts/          # Base layout (head, fonts, scripts)
  pages/            # index.astro (all sections)
  styles/           # global.css design system
.github/workflows/  # CI/CD: build + deploy to server
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the site and
deploys the static `dist/` output to the production server via SSH/rsync, served
by nginx behind HTTPS.
