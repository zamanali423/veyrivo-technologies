"use client";

import { useMemo, useState } from "react";
import { LayoutGrid } from "lucide-react";
import { projects, projectCategories } from "@/content/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { Stagger, StaggerItem } from "@/components/motion/primitives";
import { cn } from "@/lib/cn";

export type FilterValue = "All Projects" | (typeof projectCategories)[number];

const FILTERS: FilterValue[] = ["All Projects", ...projectCategories];/**
 * Category filter + animated project grid. Client component (interactive
 * filters), while the surrounding section stays server-rendered. Pass
 * `sticky` to pin the filter bar under the header on long pages.
 */
export function ProjectFilter({ sticky = false }: { sticky?: boolean }) {
  const [active, setActive] = useState<FilterValue>("All Projects");

  const { visible, count } = useMemo(() => {
    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);
    const filtered =
      active === "All Projects"
        ? rest
        : rest.filter((p) => p.category === active);
    return { visible: [...filtered, ...featured], count: filtered.length };
  }, [active]);

  return (
    <div>
      {/* Filter bar  sticky variant pins under the header with a blur panel */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className={cn(
          "flex flex-wrap items-center justify-center gap-2.5",
          sticky &&
            "sticky top-[4.5rem] z-30 -mx-5 rounded-2xl border border-line/60 bg-background/80 px-3 py-3 shadow-[0_16px_40px_-20px] shadow-black/60 backdrop-blur-xl sm:-mx-8",
        )}
      >
        {FILTERS.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-primary",
                isActive
                  ? "border-primary/60 bg-primary/10 text-primary shadow-[0_0_24px_-8px] shadow-primary/50"
                  : "border-line bg-surface/60 text-muted hover:border-primary/40 hover:text-foreground",
              )}
            >
              {filter === "All Projects" ? (
                <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              ) : null}
              {filter}
            </button>
          );
        })}
      </div>

      {/* Grid  keyed by filter so cards re-stagger on change */}
      <Stagger
        key={active}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>

      <p className="mt-10 text-center font-mono text-xs text-muted">
        {count} project{count === 1 ? "" : "s"}
        {active === "All Projects" ? " shown" : " in this category"} · every
        project is labeled accurately
      </p>
    </div>
  );
}
