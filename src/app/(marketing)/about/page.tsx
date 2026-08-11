import type { Metadata } from "next";
import {
  Target,
  HeartHandshake,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { Process } from "@/components/sections/process";
import { TeamSection } from "@/components/sections/team-section";
import { CTASection } from "@/components/sections/cta-section";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/primitives";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Veyrivo Technologies builds modern software, AI-powered applications, and automation that simplify complex operations and accelerate growth for ambitious businesses.",
  path: "/about",
});

const principles: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Target,
    title: "Outcomes, not output",
    text: "We measure success in hours saved, errors removed, and growth enabled  not in lines of code shipped.",
  },
  {
    Icon: Gauge,
    title: "Simple by default",
    text: "The best system is the one your team actually uses. We favor simple, reliable solutions over clever ones.",
  },
  {
    Icon: HeartHandshake,
    title: "Partners, not vendors",
    text: "We learn your business and stay accountable for results after launch  not just until the invoice is paid.",
  },
  {
    Icon: ShieldCheck,
    title: "Secure and honest",
    text: "Your data is treated as your property. We store only what we need, and we never overstate what our products can do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            We exist to make{" "}
            <span className="text-gradient">business simpler.</span>
          </>
        }
        description="Veyrivo Technologies builds the software, AI, and automation behind businesses that are growing  so their teams can focus on the work that matters."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Branding + Mission */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <BrandLogo className="mx-auto h-24 w-auto sm:h-28" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.26em] text-primary">
                Our mission
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <blockquote className="mt-4 font-heading text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
                “{siteConfig.tagline}”
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Most growing businesses are held back not by lack of effort,
                but by manual work and disconnected tools. Data lives in
                spreadsheets, answers live in someone&apos;s head, and growth
                is limited by how fast people can copy information between
                systems.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We replace those bottlenecks with modern software,
                AI-powered applications, intelligent chatbots, and automated
                workflows  engineered to fit how your business actually
                works, and supported long after launch.
              </p>
            </Reveal>
          </div>

          {/* Principles */}
          <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ Icon, title, text }) => (
              <StaggerItem key={title} className="h-full">
                <div className="group card-premium flex h-full flex-col p-6">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/15 text-primary shadow-[0_8px_22px_-10px] shadow-primary/40 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-heading text-base font-bold text-foreground">
                    {title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <TeamSection />
      <Process showHeading={false} />
      <CTASection />
    </>
  );
}
