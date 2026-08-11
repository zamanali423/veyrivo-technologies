import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock3 } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProjectPreview } from "@/components/ui/project-preview";
import { TechnologyTag } from "@/components/ui/technology-tag";
import { PageHeader } from "@/components/layout/page-header";
import { PortfolioCTA } from "@/components/sections/portfolio-cta";
import { Stagger, StaggerItem } from "@/components/motion/primitives";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects
    .filter((p) => !p.featured)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.featured) return {};
  return buildMetadata({
    title: `${project.title}  ${project.label}`,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.featured || !project.details) notFound();

  const related = projects.filter(
    (p) => !p.featured && p.slug !== project.slug && p.category === project.category,
  );
  const relatedShown = related.slice(0, 3);

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "BusinessApplication",
    url: `${siteConfig.url}/projects/${project.slug}`,
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.description}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Main content */}
            <div>
              <div className="group card-premium overflow-hidden">
                <ProjectPreview project={project} />
              </div>

              <h2 className="mt-10 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {project.details.overview}
              </p>

              <h3 className="mt-10 font-heading text-xl font-bold text-foreground">
                Key capabilities
              </h3>
              <Stagger className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.details.highlights.map((highlight) => (
                  <StaggerItem key={highlight.title} className="h-full">
                    <div className="group card-premium flex h-full flex-col p-5">
                      <h4 className="text-sm font-semibold text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {highlight.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="mt-8 rounded-2xl border border-line/70 bg-surface/60 px-5 py-4 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)]">
                <p className="text-sm leading-relaxed text-foreground/90">
                  <span className="font-semibold text-foreground">
                    What it delivers:{" "}
                  </span>
                  {project.details.outcome}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="card-premium p-6">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-silver-muted">
                  {project.label}
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold text-foreground">
                  {project.title}
                </h3>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted">Category</dt>
                    <dd className="font-medium text-foreground">
                      {project.category}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-muted">Status</dt>
                    <dd>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                        {project.status}
                      </span>
                    </dd>
                  </div>
                  {project.tags?.length ? (
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-muted">Technology</dt>
                      <dd className="flex gap-1.5">
                        {project.tags.map((tag) => (
                          <TechnologyTag key={tag}>{tag}</TechnologyTag>
                        ))}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <ul className="mt-5 space-y-2.5 border-t border-line/70 pt-5">
                  {project.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                    >
                      <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                        <Check className="h-2.5 w-2.5 text-primary" />
                      </span>
                      {capability}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" className="mt-6 w-full">
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-silver-muted">
                  <Clock3 className="h-3 w-3" aria-hidden="true" />
                  Case study coming soon
                </p>
              </div>

              {/* <Link
                href="/projects"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                All projects
              </Link> */}
            </aside>
          </div>

          {/* Related */}
          {relatedShown.length > 0 ? (
            <div className="mt-16">
              <h2 className="font-heading text-xl font-bold text-foreground">
                More in {project.category}
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedShown.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                    className="group card-premium flex flex-col p-5"
                  >
                    <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                      {relatedProject.badge}
                    </span>
                    <h3 className="mt-2 font-heading text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {relatedProject.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {relatedProject.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <PortfolioCTA />
      <JsonLd data={projectJsonLd} />
    </>
  );
}
