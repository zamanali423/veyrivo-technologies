import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/primitives";

/** Portfolio call-to-action band rendered below the projects grid. */
export function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
      <div className="bg-grid-light absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line/80 bg-gradient-to-b from-surface-2 to-surface px-6 py-14 text-center shadow-[0_30px_80px_-30px] shadow-black/70 sm:px-16 sm:py-16">
            {/* gradient border glow */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              aria-hidden="true"
            />
            <div
              className="animate-orb pointer-events-none absolute -top-24 left-1/2 h-[300px] w-[620px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
              aria-hidden="true"
            />
            <div
              className="animate-orb pointer-events-none absolute -bottom-24 right-1/4 h-[240px] w-[400px] rounded-full bg-accent/15 blur-[110px]"
              style={{ animationDelay: "-6s" }}
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Have a <span className="text-gradient">project in mind?</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Whether you need a custom business platform, AI-powered
                application, e-commerce solution, chatbot, or automated
                workflow, Veyrivo Technologies can help you turn the idea into
                a scalable digital product.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
                <Button href="/contact" size="lg">
                  Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
