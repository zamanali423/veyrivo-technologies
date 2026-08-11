import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/motion/primitives";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical articles on AI, business automation, software, and digital transformation  written for growing businesses, not tech insiders.",
  path: "/insights",
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Ideas that help you{" "}
            <span className="text-gradient">grow digitally.</span>
          </>
        }
        description="Practical thinking on AI, automation, and software  written for business leaders, not tech insiders."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          {/* Featured article */}
          <Link
            href={`/insights/${featured.slug}`}
            className="group card-premium grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1.3fr]"
          >
            <div className="flex flex-col justify-center">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Featured · {featured.category}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <p className="mt-5 flex items-center gap-2 font-mono text-xs text-muted">
                {formatDate(featured.date)} · {featured.readTime} read
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </div>
            <div
              className="relative hidden min-h-[260px] overflow-hidden rounded-2xl border border-line/70 bg-surface-2 lg:block"
              aria-hidden="true"
            >
              <div className="bg-grid-dark absolute inset-0 opacity-70" />
              <div className="animate-orb absolute -top-20 right-0 h-[260px] w-[360px] rounded-full bg-primary/25 blur-[90px]" />
              <div className="animate-orb absolute bottom-0 left-0 h-[200px] w-[280px] rounded-full bg-accent/20 blur-[90px]" style={{ animationDelay: "-6s" }} />
              <span className="absolute left-6 top-6 font-mono text-xs text-muted">
                insights / {featured.category.toLowerCase()}
              </span>
            </div>
          </Link>

          {/* Article grid */}
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <StaggerItem key={article.slug} className="h-full">
                <Link
                  href={`/insights/${article.slug}`}
                  className="group card-premium flex h-full flex-col p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-line/80 bg-surface-2/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                      {article.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <h2 className="mt-4 font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <p className="mt-auto pt-5 font-mono text-xs text-muted">
                    {formatDate(article.date)} · {article.readTime} read
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
