import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Custom software, AI-powered applications, AI chatbots, business automation, ERP systems, and cloud integrations  engineered to remove manual work and accelerate growth.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything your business needs to{" "}
            <span className="text-gradient">operate digitally.</span>
          </>
        }
        description="Six core capabilities  software, AI, and automation  that work together. Start with one, or build them into a connected platform over time."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesGrid />
      <Process showHeading={false} />
      <CTASection />
    </>
  );
}
