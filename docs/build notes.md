# CDMWare website rebuild — build notes (2026-11-17)

## Stack
- Next.js 16 (App Router, Cache Components on), Tailwind CSS v4, Cruise UI (shadcn registry `@cruiseui`, components in `src/components/cruise/`)
- Hosting: Netlify, connected to the team's GitHub repo. `netlify.toml` included (Node 22, `npm run build`).
- Contact form: Netlify Forms (detection file `public/__forms.html`; enable form detection in Netlify after first deploy).

## Brand
- Logo kept from the old site (cropped, transparent): `public/brand/logo.png`, `logo-light.png` (white "WARE" for navy), `logo-full*.png` (with tagline), `og-image.png`. Favicon from the old "C" app icon.
- Colours: Navy `#0F0F47` (ink, dark sections), Gold `#DBAE25` (primary), Sky `#D2EDF8` (soft panels). Overrides live in `src/app/globals.css`.
- Fonts: Cruise UI defaults (Baloo 2 + Bricolage Grotesque). Old site used Figtree.
- Corners: `data-corners="soft"` on body.

## Pages
`/`, `/services` + 4 service pages, `/case-studies` + 3 case study pages, `/industries`, `/about`, `/contact`, `/terms-of-services`, `/privacy-policy` (same URLs as old site), 404, sitemap.xml, robots.txt.

## Content
All copy in `src/content/site.ts`; legal text in `src/content/legal.ts`. Search for `TODO` to find placeholders.

## Open items before launch
- Stats (50+ clients, 100+ projects, 5+ awards, 24/7) are placeholders
- Case studies: client names, challenge, approach, results are placeholders; UI/UX case study needs a real image (old one was a stock template)
- Social links all `#` — user will send real accounts
- Phone number conflict on old site: +234 704 395 5397 (footer/WhatsApp, used now) vs +234 815 171 4278 (policy pages)
- Testimonial photos from old site not used (initials avatars instead)

## Workflow
The user works in VS Code with the Claude extension; Claude in claude.ai writes prompts they paste there for follow-up changes.