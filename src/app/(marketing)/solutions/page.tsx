import type { Metadata } from "next";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { FeaturedSolutions } from "@/components/sections/featured-solutions";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "Product patterns we build on your business: AI customer assistants, business operations platforms, and workflow automation hubs  each with a clear business benefit.",
  path: "/solutions",
});

const included = [
  "Security and data protection by design",
  "Documentation and team training",
  "Monitoring, backups, and ongoing support",
  "Iterative delivery  you see progress as we build",
];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title={
          <>
            Products built on{" "}
            <span className="text-gradient">your business.</span>
          </>
        }
        description="These are the solutions we build most often  each configured to your data, your rules, and your brand. Choose one to start, or combine them over time."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <FeaturedSolutions />

      <section className="relative overflow-hidden border-t border-line/70 bg-background py-20 sm:py-24">
        <div
          className="pointer-events-none absolute -bottom-32 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Every solution includes the same foundation
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Whatever we build, you get the same standard of engineering,
              security, and support.
            </p>
          </div>
          <Stagger className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <StaggerItem key={item} className="h-full">
                <div className="group card-premium flex h-full items-start gap-3 p-5 text-sm font-medium leading-relaxed text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-success/40 bg-success/10">
                    <Check className="h-3 w-3 text-success" />
                  </span>
                  {item}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
