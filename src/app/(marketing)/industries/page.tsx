import type { Metadata } from "next";
import {
  ShoppingBag,
  Car,
  Truck,
  HeartPulse,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/content/industries";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "Software, AI, and automation for retail, automotive, distribution, healthcare, and professional services  built around how your industry actually works.",
  path: "/industries",
});

const iconMap: Record<string, LucideIcon> = {
  retail: ShoppingBag,
  car: Car,
  truck: Truck,
  health: HeartPulse,
  briefcase: Briefcase,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={
          <>
            Built for how{" "}
            <span className="text-gradient">your industry works.</span>
          </>
        }
        description="Every industry has its own rhythms, regulations, and customer expectations. We start with yours  then design software and AI around it, not the other way around."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <StaggerItem key={industry.slug} className="h-full">
                  <article className="group card-premium flex h-full flex-col p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/15 text-primary shadow-[0_8px_22px_-10px] shadow-primary/40 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 font-heading text-lg font-bold text-foreground">
                      {industry.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {industry.blurb}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-line/70 pt-5">
                      {industry.focus.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-secondary to-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}

            {/* Helper card */}
            <StaggerItem className="h-full">
              <div className="card-premium flex h-full flex-col justify-center border-dashed p-6">
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Don&apos;t see your industry?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  If your business runs on manual processes and disconnected
                  tools, we can help  whatever industry you&apos;re in.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  Talk to us →
                </a>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
