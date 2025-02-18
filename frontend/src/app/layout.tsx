import type { Metadata, Viewport } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss=false;
import "./globals.css";

import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";

import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/footer";

export const dynamic = 'force-dynamic'; // Add this line

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};


export async function generateMetadata(): Promise<Metadata> {
  // Fetch your SEO data from an API or CMS
  const metadata = await getGlobalPageMetadata();
  const seo = metadata?.data?.seo;

  // Define your site's base URL (frontend URL)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mhconcept.tn';

  return {
    // Set the base URL for resolving relative URLs
    metadataBase: new URL(siteUrl),

    // Title
    title: {
      default: seo?.metaTitle || "MH Concept | Bureau d'Études Architecturales en Tunisie", // Default title
      template: `%s | ${seo?.metaTitle || "MH Concept"}`, // Template for dynamic titles
    },

    // Description
    description: seo?.metaDescription || "MH Concept, bureau d'études architecturales en Tunisie",

    // Keywords
    keywords: seo?.keywords || "MH Concept, bureau d'études architecturales, architecture Tunisie, conception de projets, architecture innovante, études architecturales",

    // Robots
    robots: seo?.metaRobots || "index, follow",

    // Canonical URL
    alternates: {
      canonical: seo?.canonicalURL || "/", // Default to the homepage if no canonical URL is provided
    },

    // OpenGraph (for social sharing)
    openGraph: {
      title: seo?.openGraph?.['og:title'] || seo?.metaTitle || "MH Concept | Bureau d'Études Architecturales en Tunisie",
      description: seo?.openGraph?.['og:description'] || seo?.metaDescription || "MH Concept, bureau d'études architecturales en Tunisie",
      url: seo?.openGraph?.['og:url'] || seo?.canonicalURL || "/",
      type: seo?.openGraph?.['og:type'] || "website",
      images: [
        {
          url: seo?.openGraph?.['og:image']?.url || seo?.metaImage?.url || "/Mh-concept.png", // Fallback to a default image
          width: seo?.openGraph?.['og:image']?.width || seo?.metaImage?.width || 1200,
          height: seo?.openGraph?.['og:image']?.height || seo?.metaImage?.height || 630,
          alt: seo?.openGraph?.['og:image']?.alternativeText || seo?.metaImage?.alternativeText || "MH Concept Banner",
        },
      ],
    },

    // Twitter Card (for Twitter sharing)
    twitter: {
      card: "summary_large_image",
      title: seo?.openGraph?.['og:title'] || seo?.metaTitle || "MH Concept | Bureau d'Études Architecturales en Tunisie",
      description: seo?.openGraph?.['og:description'] || seo?.metaDescription || "MH Concept, bureau d'études architecturales en Tunisie",
      images: [
        {
          url: seo?.openGraph?.['og:image']?.url || seo?.metaImage?.url || "/Mh-concept.png", // Fallback to a default image
          width: seo?.openGraph?.['og:image']?.width || seo?.metaImage?.width || 1200,
          height: seo?.openGraph?.['og:image']?.height || seo?.metaImage?.height || 630,
          alt: seo?.openGraph?.['og:image']?.alternativeText || seo?.metaImage?.alternativeText || "MH Concept Banner",
        },
      ],
    },

    // Structured Data (JSON-LD)
    other: {
      "json-ld": seo?.structuredData
        ? JSON.stringify(seo.structuredData) // Convert structuredData to JSON-LD
        : JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "MH Concept",
            "url": siteUrl,
            "image": seo?.metaImage?.url || "/Mh-concept.png",
            "description": seo?.metaDescription || "MH Concept, bureau d'études architecturales en Tunisie",
          }),
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();
 
  return (
    <html lang="en">
      <body
       
      >
        <Header data={globalData.data.header} />
        {children}
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}