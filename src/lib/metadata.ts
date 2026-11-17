import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * The base URL for every absolute URL in the page metadata (og:url, og:image,
 * canonical links). On Netlify, production builds use the site's main URL and
 * deploy previews / branch deploys use their own URL, so link previews work
 * before the domain moves. Locally it falls back to site.url.
 */
export function siteUrl(): URL {
  const netlifyUrl =
    process.env.CONTEXT === "production" ? process.env.URL : process.env.DEPLOY_PRIME_URL;
  return new URL(netlifyUrl || site.url);
}

export const homeTitle = `${site.name} — AI-Powered Software, Design & Digital Marketing`;

type PageMetadataInput = {
  /** The page name, e.g. "About Us". The home page passes the full homeTitle. */
  title: string;
  description: string;
  /** The route path, e.g. "/about" or "/services/creative-design". */
  path: string;
};

/**
 * Title, description, canonical URL, Open Graph and Twitter tags for one page.
 *
 * Metadata merges shallowly, so a page that sets `openGraph` replaces the
 * layout's object entirely. This helper always returns the full object.
 * og:image and twitter:image come from the route's opengraph-image.tsx file.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_NG",
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
