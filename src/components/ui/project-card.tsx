import Link from "next/link";
import { ArrowRight, Check, Clock3, Sparkles } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectPreview } from "@/components/ui/project-preview";
import { TechnologyTag } from "@/components/ui/technology-tag";
import { cn } from "@/lib/cn";

const badgeTone: Record<Project["tone"], string> = {
  blue: "border-primary/30 bg-primary/10 text-primary",
  violet: "border-accent/30 bg-accent/10 text-accent",
  cyan: "border-focal/30 bg-focal/10 text-focal",
};

const CTA_CLASSES =
  "group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-primary";

const MUTED_LINK_CLASSES =
  "group/link inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-primary";

/**
 * A single portfolio card. Standard cards show a preview, badge, label,
 * title, description, capabilities, and a CTA. The featured "More Custom
 * Solutions" card renders with a stronger visual and its own call to action.
 */
export function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    return (
      <article className="group card-premium flex h-full flex-col justify-center p-6 sm:p-8">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden="true"
        />
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-gradient-to-br from-primary/15 via-surface-2 to-accent/15 text-accent shadow-[0_8px_24px_-10px] shadow-accent/40 transition-transform duration-300 group-hover:scale-105">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {project.label}
        </p>
        <h3 className="mt-2.5 font-heading text-xl font-bold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <p className="mt-6 rounded-2xl border border-line/70 bg-surface/60 px-4 py-3.5 text-sm font-medium text-foreground shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)]">
          Have a different business challenge?{" "}
          <span className="text-gradient font-semibold">
            Let&apos;s design the right solution.
          </span>
        </p>
        <div className="mt-6">
          <Link href="/contact" className={CTA_CLASSES}>
            Discuss Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </article>
    );
  }

  // Internal links use next/link for client-side navigation; a missing link
  // falls back to a "Request a Demo" CTA against the contact page.
  const cta = project.link ?? { href: "/contact", label: "Request a Demo" };

  return (
    <article className="group card-premium flex h-full flex-col overflow-hidden">
      <p className="sr-only">Status: {project.status}</p>
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              "inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]",
              badgeTone[project.tone],
            )}
          >
            {project.badge}
          </span>
          {project.tags?.length ? (
            <span className="flex gap-1.5">
              {project.tags.map((tag) => (
                <TechnologyTag key={tag}>{tag}</TechnologyTag>
              ))}
            </span>
          ) : null}
        </div>

        <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-silver-muted">
          {project.label}
        </p>
        <h3 className="mt-1.5 font-heading text-lg font-bold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2.5">
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

        <div className="mt-auto space-y-2.5 pt-6">
          <Link href={`/projects/${project.slug}`} className={CTA_CLASSES}>
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link
              href={cta.href}
              target={cta.href.startsWith("http") ? "_blank" : undefined}
              rel={cta.href.startsWith("http") ? "noreferrer" : undefined}
              className={MUTED_LINK_CLASSES}
            >
              {cta.label}
            </Link>
            {!project.link ? (
              <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-silver-muted">
                <Clock3 className="h-3 w-3" aria-hidden="true" />
                Case study coming soon
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
