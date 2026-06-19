import type { APIRoute } from 'astro'

const robots = `User-agent: *
Allow: /
Sitemap: https://image.oriz.in/sitemap-index.xml
`

export const GET: APIRoute = () =>
  new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
