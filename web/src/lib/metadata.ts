/* src/lib/metadata.ts */
import { Metadata } from "next";
import { PageMetadata } from "../types";

export function generatePageMetadata(config: PageMetadata): Metadata {
  const title = `${config.title} | Prozync Innovations`;
  const description = config.description;
  const canonical = config.canonical || "https://prozync.com";
  const ogImage = config.ogImage || "https://prozync.com/assets/og-default.jpg";

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Prozync Innovations",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@prozync"
    },
    robots: config.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true }
  };
}
