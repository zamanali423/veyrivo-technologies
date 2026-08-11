import Image from "next/image";
import {
  Warehouse,
  BrainCircuit,
  Bot,
  Target,
  Bus,
  Car,
  Workflow,
  Search,
  ShoppingBag,
  Clapperboard,
  Briefcase,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

const iconMap: Record<Project["icon"], LucideIcon> = {
  warehouse: Warehouse,
  brain: BrainCircuit,
  bot: Bot,
  target: Target,
  bus: Bus,
  car: Car,
  workflow: Workflow,
  search: Search,
  bag: ShoppingBag,
  clapperboard: Clapperboard,
  briefcase: Briefcase,
  sparkles: Sparkles,
};

const toneChip: Record<Project["tone"], string> = {
  blue: "border-primary/30 from-primary/15 to-accent/15 text-primary shadow-primary/40",
  violet:
    "border-accent/30 from-accent/15 to-purple/15 text-accent shadow-accent/40",
  cyan: "border-focal/30 from-focal/15 to-primary/15 text-focal shadow-focal/40",
};

const toneOrb: Record<Project["tone"], string> = {
  blue: "bg-primary/25",
  violet: "bg-accent/20",
  cyan: "bg-focal/20",
};

/**
 * Visual area for a project card. Shows a real screenshot when `project.image`
 * is provided; otherwise renders a clean, abstract product graphic (icon chip,
 * soft gradient orb, subtle grid, and skeleton UI bars)  never a fake
 * screenshot. Purely decorative, hidden from assistive tech.
 */
export function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[22px] border-b border-line/60">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"
          aria-hidden="true"
        />
      </div>
    );
  }

  const Icon = iconMap[project.icon];

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[22px] border-b border-line/60 bg-surface-2 transition-colors duration-300"
      aria-hidden="true"
    >
      {/* soft gradient orb */}
      <div
        className={cn(
          "absolute -right-10 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-80",
          toneOrb[project.tone],
        )}
      />
      {/* subtle grid */}
      <div className="bg-grid-dark absolute inset-0 opacity-40" />

      {/* icon chip */}
      <span
        className={cn(
          "absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-[0_8px_24px_-10px] transition-transform duration-300 group-hover:scale-105",
          toneChip[project.tone],
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      {/* status pill */}
      <span className="absolute right-4 top-5 rounded-full border border-line/80 bg-background/70 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-silver-muted backdrop-blur">
        {project.status}
      </span>

      {/* skeleton dashboard bars */}
      <div className="absolute inset-x-5 bottom-5 space-y-2.5">
        <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
        <div className="h-1.5 w-1/2 rounded-full bg-white/[0.07]" />
        <div className="flex gap-1.5">
          {[40, 70, 55, 85, 60].map((w, i) => (
            <div
              key={i}
              className="h-8 rounded-md bg-gradient-to-t from-primary/25 to-accent/15"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>

      {/* bottom gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/35 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
