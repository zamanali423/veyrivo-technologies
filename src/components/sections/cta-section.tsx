import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/primitives";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line/80 bg-gradient-to-b from-surface-2 to-surface px-6 py-16 text-center shadow-[0_30px_80px_-30px] shadow-black/70 sm:px-16 sm:py-20">
            {/* gradient border glow */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              aria-hidden="true"
            />
            <div
              className="animate-orb pointer-events-none absolute -top-28 left-1/2 h-[320px] w-[680px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
              aria-hidden="true"
            />
            <div
              className="animate-orb pointer-events-none absolute -bottom-28 left-1/4 h-[260px] w-[420px] rounded-full bg-accent/20 blur-[110px]"
              style={{ animationDelay: "-6s" }}
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Ready to build a{" "}
                <span className="text-gradient">smarter business?</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Tell us about your business challenge, and we will help you
                identify the right software, AI, or automation solution.
              </p>
              <Button href="/contact" size="lg" className="mt-10">
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-6 font-mono text-xs text-muted">
                {siteConfig.email} · response within one business day
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
