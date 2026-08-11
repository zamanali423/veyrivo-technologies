import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { insights, getInsight } from "@/content/insights";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return buildMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    type: "article",
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const related = insights
    .filter((i) => i.slug !== insight.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    url: `${siteConfig.url}/insights/${insight.slug}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-line/70 bg-background">
        <div
          className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,black,transparent)]"
          aria-hidden="true"
        />
        <div
          className="animate-orb absolute -top-36 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
          aria-hidden="true"
        />
        <Container className="relative py-16 sm:py-20">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All insights
          </Link>
          <p className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
            <span className="rounded-full border border-line/80 bg-surface-2/70 px-2.5 py-1 text-primary">
              {insight.category}
            </span>
            {formatDate(insight.date)} · {insight.readTime} read
          </p>
          <h1 className="mt-5 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {insight.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {insight.excerpt}
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="bg-grid-light absolute inset-0 opacity-30" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <div className="prose-sm space-y-5">
              {insight.body.map((paragraph, i) => (
                <p key={i} className="text-base leading-[1.85] text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="card-premium mt-12 p-6">
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-foreground">
                  Veyrivo Technologies
                </span>{" "}
                builds software, AI, and automation for growing businesses.
                If this article sparked a thought about your own operations,
                we&apos;d love to talk.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-cta px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px] shadow-primary/60 transition-all hover:brightness-110"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Related */}
            <div className="mt-14">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Keep reading
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {related.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    className="group card-premium flex flex-col p-5"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {article.category}
                    </span>
                    <h3 className="mt-2 font-heading text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-auto pt-3 font-mono text-xs text-muted">
                      {formatDate(article.date)} · {article.readTime} read
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
      <JsonLd data={articleJsonLd} />
    </>
  );
}
