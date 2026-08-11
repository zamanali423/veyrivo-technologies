import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectFilter } from "@/components/ui/project-filter";
import { Reveal } from "@/components/motion/primitives";

/**
 * "Projects & Solutions" portfolio section. Server component: heading and
 * intro are server-rendered; the interactive filter + animated grid is a
 * small client island (ProjectFilter).
 */
export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-[360px] w-[520px] rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Projects & Solutions"
            title={
              <>
                Built for <span className="text-gradient">Real Business</span>{" "}
                Challenges.
              </>
            }
            description="From intelligent business systems to AI-powered platforms and workflow automation, we build digital products that make complex work simpler, faster, and more connected."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ProjectFilter />
        </Reveal>
      </Container>
    </section>
  );
}
