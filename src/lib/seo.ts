import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

/**
 * Builds page metadata with canonical, Open Graph and Twitter tags.
 * `metadataBase` is set in the root layout, so relative paths work.
 */
export function buildMetadata(input: SeoInput): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: input.type ?? "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
