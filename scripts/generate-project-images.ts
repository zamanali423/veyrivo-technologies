/**
 * Pre-renders each project's abstract dashboard mockup as a real static PNG
 * in `public/projects/<slug>.png`.
 *
 * next/image's optimizer cannot reliably decode a runtime ImageResponse
 * stream served from a route handler ("Input buffer contains unsupported
 * image format"), so we generate the images once and ship them as static
 * assets. Run with: `npx tsx scripts/generate-project-images.ts`
 */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createElement } from "react";
import { ImageResponse } from "next/og";
import { projects } from "../src/content/projects";
import { ProjectMockup } from "../src/components/og/project-mockup";

const OUT_DIR = resolve(process.cwd(), "public", "projects");
const SIZE = { width: 640, height: 400 };

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let count = 0;
  for (const project of projects) {
    if (project.featured) continue; // featured card has no preview image

    const response = new ImageResponse(
      createElement(ProjectMockup, { project }),
      { ...SIZE },
    );
    const bytes = Buffer.from(await response.arrayBuffer());
    const file = resolve(OUT_DIR, `${project.slug}.png`);
    await writeFile(file, bytes);
    count += 1;
    console.log(`✓ ${project.slug}.png (${bytes.length} bytes)`);
  }

  console.log(`\nDone. Generated ${count} project images in public/projects/`);
}

main().catch((error) => {
  console.error("Failed to generate project images:", error);
  process.exit(1);
});
