import { Search, PenTool, Code2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessStep, type ProcessStepProps } from "@/components/ui/process-step";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

const steps: ProcessStepProps[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, your workflows, and where the pain actually is.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We plan the experience, architecture, and solution before writing a line of code.",
    Icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, test, and integrate the system  with you in the loop at every milestone.",
    Icon: Code2,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We monitor, improve, and scale the product so it keeps delivering long after launch.",
    Icon: TrendingUp,
  },
];

export function Process({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="relative overflow-hidden border-y border-line/70 bg-background py-20 sm:py-28">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
        aria-hidden="true"
      />
      <Container className="relative">
        {showHeading ? (
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A clear process, from{" "}
                <span className="text-gradient">first call to scale.</span>
              </>
            }
            description="No black boxes. You always know what's being built, why, and what's coming next."
          />
        ) : null}

        <Stagger
          className={
            showHeading
              ? "relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              : "relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {steps.map((step) => (
            <StaggerItem key={step.number} className="h-full">
              <ProcessStep {...step} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
