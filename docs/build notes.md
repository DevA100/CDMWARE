# CDMware website rebuild — build notes (2026-11-17)

## Stack
- Next.js 16 (App Router, Cache Components on), Tailwind CSS v4, Cruise UI (shadcn registry `@cruiseui`, components in `src/components/cruise/`)
- Hosting: Netlify, connected to the team's GitHub repo. `netlify.toml` included (Node 22, `npm run build`).
- Contact form: Netlify Forms (detection file `public/__forms.html`; enable form detection in Netlify after first deploy).

## Brand
- Logo kept from the old site (cropped, transparent): `public/brand/logo.png`, `logo-light.png` (white "WARE" for navy), `logo-full*.png` (with tagline). Link-preview images are generated per page by `opengraph-image.tsx` files (shared design in `src/lib/og.tsx`). Favicon from the old "C" app icon.
- Colours: Navy `#0F0F47` (ink, dark sections), Gold `#DBAE25` (primary), Sky `#D2EDF8` (soft panels). Overrides live in `src/app/globals.css`.
- Fonts: Cruise UI defaults (Baloo 2 + Bricolage Grotesque). Old site used Figtree.
- Corners: `data-corners="soft"` on body.

## Content rebuild (later on 2026-11-17)
The site was rebuilt around the new positioning in `docs/website-content.md`. Pages are now `/`, `/about`, `/services`, `/who-we-serve`, `/how-we-work`, `/our-work` (+ `/our-work/[slug]` template), `/insights`, `/contact`, `/terms-of-services`, `/privacy-policy`. The old `/industries`, `/case-studies/*` and `/services/[slug]` routes were removed and 301-redirected in `netlify.toml`. Stats, the tech stack and the placeholder case studies were dropped. The rest of these notes describe the first build.

## Pages (first build)
`/`, `/services` + 4 service pages, `/case-studies` + 3 case study pages, `/industries`, `/about`, `/contact`, `/terms-of-services`, `/privacy-policy` (same URLs as old site), 404, sitemap.xml, robots.txt.

## Content
All copy in `src/content/site.ts`; legal text in `src/content/legal.ts`. Search for `TODO` to find placeholders.

## Open items before launch
- Social links all `#` — user will send real accounts
- No case studies or Insights articles published yet (see README)
- Testimonial photos from old site not used (initials avatars instead)

## Workflow
The user works in VS Code with the Claude extension; Claude in claude.ai writes prompts they paste there for follow-up changes.