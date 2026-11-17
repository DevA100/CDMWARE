# CDMware website

The new cdmware.com, built with **Next.js 16**, **Tailwind CSS v4** and **[Cruise UI](https://cruiseui.dev)**, deployed on **Netlify**.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build (what Netlify runs)
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| **All page copy, navigation, footer, SEO titles/descriptions, contact details, social links** | `src/content/site.ts` |
| **Case studies** (add an entry to `caseStudies` to publish one) | `src/content/site.ts` |
| Source copy and brand guidelines from the CDMware team | `docs/website-content.md` |
| Terms & Privacy text | `src/content/legal.ts` |
| Pages | `src/app/**/page.tsx` |
| Page metadata helper (title, Open Graph, Twitter) | `src/lib/metadata.ts` |
| Link-preview images (one `opengraph-image.tsx` per route, shared design) | `src/lib/og.tsx` |
| Site components (header, footer, page header, closing CTA, icons) | `src/components/site/` |
| Cruise UI components (installed from the registry) | `src/components/cruise/` |
| Cruise UI theme | `src/app/cruise-ui.css` (don't edit; re-install to update) |
| **CDMware brand colours** (overrides on top of Cruise) | `src/app/globals.css` |
| Logos | `public/brand/` |
| Favicon / app icons | `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/favicon.ico` |
| Redirects from old URLs | `netlify.toml` |

### Brand colours

| Name | Hex | Used for |
| --- | --- | --- |
| Navy | `#0F0F47` | Text, borders, dark sections |
| Gold | `#DBAE25` | Primary buttons, highlights, hero |
| Sky | `#D2EDF8` | Soft alternating sections |

## Pages

- `/` Home
- `/about`
- `/services` (Business Innovation, Digital Innovation and AI-Powered Engineering as sections: `#business-innovation`, `#digital-innovation`, `#ai-powered-engineering`)
- `/who-we-serve` (Startups & Founders, SMEs, Organizations & Institutions)
- `/how-we-work`
- `/our-work` and `/our-work/[slug]` (case studies; none published yet)
- `/insights` (categories and upcoming article titles; no articles yet)
- `/contact` (Netlify Forms)
- `/terms-of-services`, `/privacy-policy` (same URLs as the old site)

Old URLs (`/industries`, `/case-studies/*`, the four `/services/<slug>` pages) are 301-redirected in `netlify.toml`.

### Adding a case study

Add an object to `caseStudies` in `src/content/site.ts`. The `CaseStudy` type lists the fields: context, challenge, assessment, approach, an optional solution, and outcome, plus `slug`, `title`, `category`, `summary` and `image`. Put the image in `public/images/`, or leave `image` empty for a branded placeholder. The card on `/our-work`, the page at `/our-work/<slug>`, its link-preview image and the sitemap entry are all generated from that entry. Only publish projects with accurate descriptions and the client's permission (or an approved anonymized version).

## Placeholders to replace before launch

Search the code for `TODO`. In short:

1. **Social links** (`site.socials`) — all `#` for now.
2. **Case studies** — `caseStudies` is empty, so `/our-work` shows a "being prepared" message.
3. **Insights articles** — the six article titles show as "Coming soon"; there are no article pages yet.

## Contact form (Netlify Forms)

The form posts to Netlify Forms. Netlify finds it through the static copy in `public/__forms.html`; if you add or rename a field in `src/components/site/contact-form.tsx`, change it there too.

After the first deploy: **Netlify → Site configuration → Forms → enable form detection**, then redeploy. Set up email notifications under **Forms → Form notifications** so submissions go to info@cdmware.com.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub** and pick the repo.
3. Netlify reads `netlify.toml` (build command `npm run build`, Node 22). No environment variables are needed.
4. Enable form detection (see above).
5. Point the `cdmware.com` domain at the Netlify site under **Domain management**.

## Adding more Cruise UI components

```bash
npx shadcn@latest add @cruiseui/<component>
```

The registry is set in `components.json`. Browse components at https://cruiseui.dev.
