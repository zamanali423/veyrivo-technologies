import type { Metadata } from "next";
import { FlaskConical, Info } from "lucide-react";
import { prototypes } from "@/content/work";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Interactive prototypes and demonstrations from Veyrivo Technologies  retail dashboards, AI customer support, and automated lead management.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Demonstrations, not{" "}
            <span className="text-gradient">decoration.</span>
          </>
        }
        description="We built these interactive prototypes to show our approach in action. Once client projects go live, this page becomes a home for real case studies with measurable outcomes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Work" }]}
      />

      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <div className="flex items-start gap-3 rounded-2xl border border-warning/25 bg-warning/10 px-5 py-4 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.04)]">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
            <p className="text-sm leading-relaxed text-foreground/90">
              <span className="font-semibold">An honest note:</span> client
              results are published only with permission and real numbers.
              These prototypes demonstrate the systems we build  they are
              not claims about client outcomes.
            </p>
          </div>

          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {prototypes.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <article className="group card-premium flex h-full flex-col p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 to-primary/10 text-accent shadow-[0_8px_22px_-10px] shadow-accent/40 transition-transform duration-300 group-hover:scale-105">
                    <FlaskConical className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                    {p.category}
                  </p>
                  <h2 className="mt-2.5 font-heading text-lg font-bold leading-snug text-foreground">
                    {p.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <p className="mt-4 border-t border-line/70 pt-4 text-xs font-medium leading-relaxed text-primary">
                    {p.outcome}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line/80 bg-surface-2/70 px-2.5 py-1 font-mono text-[10px] text-silver-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="card-premium mx-auto mt-16 max-w-2xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Want to see one live?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We&apos;re happy to walk you through any of these prototypes
              and explain how the same approach would apply to your
              business.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-cta px-6 text-sm font-semibold text-white shadow-[0_10px_34px_-10px] shadow-primary/60 transition-all hover:brightness-110"
            >
              Book a walkthrough
            </a>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
