import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ArrowRight, type LucideIcon } from "lucide-react";
import {
  Code2,
  Sparkles,
  Bot,
  Workflow,
  Boxes,
  Cloud,
} from "lucide-react";
import { services, getService } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { Process } from "@/components/sections/process";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/motion/primitives";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  sparkles: Sparkles,
  bot: Bot,
  workflow: Workflow,
  box: Boxes,
  cloud: Cloud,
};

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.tagline,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.tagline,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: service.title,
  };

  return (
    <>
      <PageHeader
        eyebrow={service.title}
        title={service.title}
        description={service.tagline}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Overview */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {service.intro}
              </p>

              <h3 className="mt-10 font-heading text-xl font-bold text-foreground">
                What you get
              </h3>
              <Stagger className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <StaggerItem key={feature.title} className="h-full">
                    <div className="group card-premium flex h-full flex-col p-5">
                      <h4 className="text-sm font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="card-premium p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/15 text-primary shadow-[0_8px_24px_-10px] shadow-primary/40">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  Business outcomes
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-success/40 bg-success/10">
                        <Check className="h-3 w-3 text-success" />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="mt-7 w-full">
                  Discuss this service
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Process showHeading={false} />
      <CTASection />
      <JsonLd data={serviceJsonLd} />
    </>
  );
}
