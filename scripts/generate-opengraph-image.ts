/**
 * Pre-renders the site's 1200×630 Open Graph card as a static PNG at
 * `src/app/opengraph-image.png`.
 *
 * Why a script instead of `src/app/opengraph-image.tsx` (a `next/og` route)?
 * `next.config.ts` sets `output: "export"` for Cloudflare Pages, and dynamic
 * image-generation routes cannot run under static export. The static
 * `opengraph-image.png` file convention is copied to the export as-is and is
 * picked up automatically by Next's metadata for openGraph/twitter.
 *
 * Run with: `npm run og:image`
 */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { ImageResponse } from "next/og";
import { OpengraphCard } from "../src/components/og/opengraph-card";

const OUT_DIR = resolve(process.cwd(), "src", "app");
const OUT_FILE = resolve(OUT_DIR, "opengraph-image.png");
const SIZE = { width: 1200, height: 630 };

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const response = new ImageResponse(createElement(OpengraphCard), { ...SIZE });
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(OUT_FILE, bytes);

  console.log(`✓ opengraph-image.png (${bytes.length} bytes)`);
}

main().catch((error) => {
  console.error("Failed to generate Open Graph image:", error);
  process.exit(1);
});
