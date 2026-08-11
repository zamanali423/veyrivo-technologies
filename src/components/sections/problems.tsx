import { ArrowRight, X, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

const transitions = [
  {
    before: "Manual processes",
    after: "Automated workflows",
  },
  {
    before: "Scattered data",
    after: "Centralized dashboards",
  },
  {
    before: "Slow customer responses",
    after: "Intelligent chatbots",
  },
  {
    before: "Repetitive reporting",
    after: "Real-time business insights",
  },
];

export function Problems() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="bg-grid-light absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-[360px] w-[560px] rounded-full bg-secondary/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 h-[340px] w-[500px] rounded-full bg-accent/10 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why it matters"
          title={
            <>
              Your business should not depend on{" "}
              <span className="text-gradient">disconnected tools</span> and
              manual work.
            </>
          }
          description="Every hour spent copying data, chasing approvals, or answering the same question is an hour your business is not growing. We replace those hours with systems that work for you."
        />

        <Stagger className="mt-14 grid gap-4 md:grid-cols-2">
          {transitions.map((t) => (
            <StaggerItem key={t.before}>
              <div className="group card-premium flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-6">
                <span className="flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3.5 py-2 text-sm text-muted">
                  <X className="h-4 w-4 shrink-0 text-danger" />
                  <span className="line-through decoration-danger/50 decoration-2">
                    {t.before}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 rotate-90 self-center text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:self-auto sm:rotate-0" />
                <span className="flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-2 text-sm font-medium text-foreground shadow-[0_0_20px_-6px] shadow-primary/40">
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  {t.after}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
