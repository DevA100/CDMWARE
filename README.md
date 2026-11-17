# CDMWare website

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
| **All site text, services, case studies, stats, contact details, social links** | `src/content/site.ts` |
| Terms & Privacy text | `src/content/legal.ts` |
| Pages | `src/app/**/page.tsx` |
| Site components (header, footer, sections) | `src/components/site/` |
| Cruise UI components (installed from the registry) | `src/components/cruise/` |
| Cruise UI theme | `src/app/cruise-ui.css` (don't edit; re-install to update) |
| **CDMWare brand colours** (overrides on top of Cruise) | `src/app/globals.css` |
| Logos, OG image | `public/brand/` |
| Favicon / app icons | `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/favicon.ico` |

### Brand colours

| Name | Hex | Used for |
| --- | --- | --- |
| Navy | `#0F0F47` | Text, borders, dark sections |
| Gold | `#DBAE25` | Primary buttons, highlights, hero |
| Sky | `#D2EDF8` | Soft alternating sections |

## Pages

- `/` Home
- `/services` and `/services/[slug]` (4 service pages)
- `/case-studies` and `/case-studies/[slug]` (3 case studies)
- `/industries`
- `/about`
- `/contact` (Netlify Forms)
- `/terms-of-services`, `/privacy-policy` (same URLs as the old site)

## Placeholders to replace before launch

Search the code for `TODO`. In short:

1. **Stats** (`stats` in `src/content/site.ts`) — figures are placeholders.
2. **Case studies** — client names, challenge, approach and results are placeholders. The UI/UX case study also needs a real image (put it in `public/images/` and set `image`).
3. **Social links** (`site.socials`) — all `#` for now.
4. **Phone number** — the old site listed two numbers (+234 704 395 5397 and +234 815 171 4278). The site currently uses the first.

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
