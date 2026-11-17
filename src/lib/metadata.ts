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

type PageMetadataInput = {
  /** The complete SEO title, e.g. "About CDMware | Innovation & Technology". Used as-is. */
  title: string;
  description: string;
  /** The route path, e.g. "/about" or "/our-work/some-project". */
  path: string;
};

/**
 * Title, description, canonical URL, Open Graph and Twitter tags for one page.
 *
 * The SEO titles already include the brand, so the title is set as
 * `absolute` and the layout's "%s | CDMware" template doesn't apply.
 * Metadata merges shallowly, so a page that sets `openGraph` replaces the
 * layout's object entirely. This helper always returns the full object.
 * og:image and twitter:image come from the route's opengraph-image.tsx file.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_NG",
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
