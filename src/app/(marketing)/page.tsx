import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Problems } from "@/components/sections/problems";
import { Process } from "@/components/sections/process";
import { FeaturedSolutions } from "@/components/sections/featured-solutions";
import { CaseStudies } from "@/components/sections/case-studies";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PortfolioCTA } from "@/components/sections/portfolio-cta";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Problems />
      <Process />
      <FeaturedSolutions />
      <CaseStudies />
      <ProjectsSection />
      <PortfolioCTA />
      <CTASection />
    </>
  );
}
