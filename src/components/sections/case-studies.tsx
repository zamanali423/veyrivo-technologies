import Link from "next/link";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { prototypes } from "@/content/work";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-paper pb-20 sm:pb-28">
      <Container className="relative">
        <SectionHeading
          eyebrow="Our work"
          title={
            <>
              Demonstrations of{" "}
              <span className="text-gradient">what we can build.</span>
            </>
          }
          description="Interactive prototypes that show our approach in action. Once client projects go live, we'll publish real case studies with measurable outcomes."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {prototypes.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <Link
                href="/work"
                className="group card-premium flex h-full flex-col p-6"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 to-primary/10 text-accent shadow-[0_8px_22px_-10px] shadow-accent/40 transition-transform duration-300 group-hover:scale-105">
                    <FlaskConical className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                  {p.category}
                </p>
                <h3 className="mt-2.5 font-heading text-lg font-bold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <p className="mt-5 border-t border-line/70 pt-4 text-xs font-medium leading-relaxed text-primary">
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
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
