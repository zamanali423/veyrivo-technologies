import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroDashboard } from "@/components/sections/hero-dashboard";

const assurances = [
  "Custom-built, not template work",
  "API-first integrations",
  "Support included after launch",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line/70 bg-background">
      {/* layered background: grid + gradient orbs */}
      <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />
      <div
        className="animate-orb absolute -top-48 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="animate-orb absolute -right-44 top-52 h-[440px] w-[540px] rounded-full bg-accent/20 blur-[140px]"
        style={{ animationDelay: "-5s" }}
        aria-hidden="true"
      />
      <div
        className="animate-orb absolute -left-44 bottom-0 h-[360px] w-[480px] rounded-full bg-secondary/15 blur-[130px]"
        style={{ animationDelay: "-9s" }}
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 py-20 sm:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:py-32">
        <div>
          <Eyebrow>Software · AI · Automation</Eyebrow>
          <h1 className="mt-6 font-heading text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-[4.2rem]">
            Building the{" "}
            <span className="text-gradient">Intelligent Digital</span>{" "}
            <span className="text-metal">Future</span> of Business.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            We build modern software, AI-powered applications, intelligent
            chatbots, and automated business solutions that simplify complex
            operations and accelerate growth.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:mt-8">
            <Button href="/contact" size="md" className="w-full sm:w-auto sm:text-base">
              Start Your Digital Transformation
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto sm:text-base"
            >
              Explore Our Solutions
            </Button>
          </div>
          <ul className="mt-11 flex flex-wrap gap-x-7 gap-y-3">
            {assurances.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroDashboard />
      </Container>
    </section>
  );
}
