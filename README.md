# oriz-image-tools

Free, browser-based image tools for the [oriz](https://oriz.in) family.
Compress, resize, crop, convert (HEIC/WEBP/JPG/PNG), watermark, rotate,
upscale with AI, remove backgrounds, blur faces, and generate memes — every
operation runs in your browser. Your photos never travel over the network.

Lives at <https://image.oriz.in>. The legacy domain `img.oriz.in` 301s here.

## Stack

- **Astro 6** static site, deployed via Cloudflare Workers Static Assets
- **React 19** islands for interactive tools
- **Tailwind v4** + the [`@chirag127/oriz-ui`](https://github.com/chirag127/oriz-ui) design system
- **Firebase Auth + Firestore** (shared `oriz-app` project, optional sign-in)
- Image processing libs: `browser-image-compression`, `heic2any`,
  `@imgly/background-removal`, `face-api.js`, `fabric`, `jszip`,
  `react-image-crop`, `gif.js`, `html2canvas`

## Develop

```bash
pnpm install
npx envpact-cli@0.2.0          # pull shared .env from envpact (Firebase keys etc.)
pnpm dev                        # http://localhost:4321
```

`pnpm typecheck`, `pnpm lint`, `pnpm format`, `pnpm build`, `pnpm preview`.

## Deploy

```bash
pnpm build
pnpm deploy                     # wrangler deploy
```

Cloudflare project name: `oriz-image-tools`. The custom domain
`image.oriz.in` is bound from the dashboard. The legacy `img.oriz.in`
domain is configured as a 301 bulk-redirect to `image.oriz.in` at the
Cloudflare account level.

## Layout

- `src/pages/` — Astro routes (`/`, `/tools/*`, `/blog/*`, `/about/`,
  `/contact/`, `/account/`, `/legal/*`)
- `src/components/tools/*` — React islands per tool (one per route under
  `/tools/`)
- `src/components/ui/*` — small shared UI primitives (DropZone, Slider,
  ProgressBar, ImagePreview, etc.)
- `src/layouts/BaseLayout.astro` — every page extends this; mounts the
  Header, left Sidebar, and Footer
- `src/layouts/ToolLayout.astro` — tool-page wrapper with breadcrumbs,
  FAQ, and related-tools blocks
- `src/lib/toolMeta.ts` — registry of tools shown on `/`, `/tools/`, and
  the sidebar
- `src/styles/global.css` — imports `@chirag127/oriz-ui/styles` +
  `components.css`, plus a small compatibility shim mapping legacy class
  names (`.btn-primary`, `.tool-card`, etc.) onto oriz-ui tokens
