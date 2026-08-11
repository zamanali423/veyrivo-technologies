import {
  Bot,
  LayoutDashboard,
  Workflow,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Solution } from "@/content/solutions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  dashboard: LayoutDashboard,
  workflow: Workflow,
};

const statusTones: Record<string, string> = {
  Prototype: "border-warning/30 bg-warning/10 text-warning",
  "Production-ready": "border-success/30 bg-success/10 text-success",
};

export function FeatureCard({ solution }: { solution: Solution }) {
  const Icon = iconMap[solution.icon];

  return (
    <article className="group card-premium grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
      {/* Left: narrative */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/15 text-primary shadow-[0_8px_24px_-10px] shadow-primary/40 transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={cn(
              "rounded-full border px-3 py-1 font-mono text-[11px] font-medium",
              statusTones[solution.status],
            )}
          >
            {solution.status}
          </span>
        </div>
        <h3 className="mt-6 font-heading text-xl font-bold text-foreground sm:text-2xl">
          {solution.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          {solution.tagline}
        </p>

        <div className="mt-7 space-y-5">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-danger">
              The problem
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {solution.problem}
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              The solution
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {solution.solution}
            </p>
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-accent/25 bg-gradient-to-br from-primary/10 to-accent/10 px-4 py-3.5 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05)]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-metal">
            Business benefit
          </p>
          <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground">
            {solution.benefit}
          </p>
        </div>
      </div>

      {/* Right: feature checklist */}
      <div className="flex flex-col border-t border-line/70 bg-paper-deep/70 p-6 sm:p-8 lg:border-l lg:border-t-0">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-silver-muted">
          What&apos;s included
        </p>
        <ul className="mt-5 space-y-3.5">
          {solution.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-success/40 bg-success/10">
                <Check className="h-3 w-3 text-success" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <Button href="/solutions" variant="secondary">
            Learn more
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
