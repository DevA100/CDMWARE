import type { Metadata } from "next";
import { Baloo_2, Bricolage_Grotesque } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { seo, site } from "@/content/site";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: {
    default: seo.home.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_NG",
    title: seo.home.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  slogan: site.tagline,
  description: site.description,
  logo: `${site.url}/brand/logo.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lekki, Lagos",
    addressCountry: "NG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${baloo.variable} ${bricolage.variable} antialiased`}>
      <body className="cruise flex min-h-screen flex-col" data-corners="soft">
        <a
          href="#main"
          className="brutal on-primary sr-only z-50 px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <span id="top" tabIndex={-1} />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
