import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Bot,
  Workflow,
  Boxes,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/content/services";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  sparkles: Sparkles,
  bot: Bot,
  workflow: Workflow,
  box: Boxes,
  cloud: Cloud,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card-premium flex h-full flex-col p-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-surface-2 to-accent/15 text-primary shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08),0_8px_24px_-10px] shadow-primary/40 transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-heading text-lg font-bold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {service.short}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </Link>
  );
}
