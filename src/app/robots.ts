import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Required for `output: "export"` (Cloudflare Pages): robots.txt is generated
// at build time and shipped as a static file.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
