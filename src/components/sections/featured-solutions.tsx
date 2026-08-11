import { solutions } from "@/content/solutions";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export function FeaturedSolutions() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -top-32 left-0 h-[400px] w-[560px] rounded-full bg-primary/8 blur-[140px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Featured solutions"
          title={
            <>
              Products we build on{" "}
              <span className="text-gradient">your business.</span>
            </>
          }
          description="Reusable product patterns  configured to your data, rules, and brand. Each one solves a specific problem and ships with a clear business benefit."
        />

        <Stagger className="mt-14 space-y-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.slug}>
              <FeatureCard solution={solution} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
