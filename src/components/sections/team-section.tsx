import { ArrowUpRight } from "lucide-react";
import { team } from "@/content/team";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/ui/team-card";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/3 h-[380px] w-[560px] rounded-full bg-accent/8 blur-[140px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Team"
          title={
            <>
              Meet the people behind{" "}
              <span className="text-gradient">Veyrivo Technologies.</span>
            </>
          }
          description="The founding team behind Veyrivo Technologies  software, AI, and automation experts who take ownership of outcomes, not just tasks."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <TeamCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-2 text-center text-sm text-muted">
          Interested in joining the team?
          <a
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-accent"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </p>
      </Container>
    </section>
  );
}
