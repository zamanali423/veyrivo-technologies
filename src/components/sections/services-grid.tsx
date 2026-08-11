import { services } from "@/content/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export function ServicesGrid({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="bg-grid-light absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[380px] w-[520px] rounded-full bg-accent/8 blur-[130px]"
        aria-hidden="true"
      />
      <Container className="relative">
        {showHeading ? (
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Software, AI, and automation {" "}
                <span className="text-gradient">one partner.</span>
              </>
            }
            description="Six capabilities, engineered to work together. Whatever your starting point, we design and build systems that remove manual work and make your data useful."
          />
        ) : null}

        <Stagger
          className={
            showHeading
              ? "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {services.map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
