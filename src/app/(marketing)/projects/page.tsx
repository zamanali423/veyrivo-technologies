import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectFilter } from "@/components/ui/project-filter";
import { PortfolioCTA } from "@/components/sections/portfolio-cta";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Solutions",
  description:
    "Explore Veyrivo Technologies' portfolio of products, platforms, prototypes, and internal tools  from ERP systems and AI applications to automation, e-commerce, and data solutions.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects & Solutions"
        title={
          <>
            Built for <span className="text-gradient">Real Business</span>{" "}
            Challenges.
          </>
        }
        description="From intelligent business systems to AI-powered platforms and workflow automation, we build digital products that make complex work simpler, faster, and more connected."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="relative overflow-hidden bg-background pb-20 sm:pb-28">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -bottom-32 right-1/4 h-[360px] w-[520px] rounded-full bg-accent/10 blur-[140px]"
          aria-hidden="true"
        />

        <div className="my-8"></div>
        <Container className="relative">
          <ProjectFilter sticky />
        </Container>
      </section>

      <PortfolioCTA />
      <CTASection />
    </>
  );
}
