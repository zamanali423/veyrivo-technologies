import type { LucideIcon } from "lucide-react";

export type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export function ProcessStep({ number, title, description, Icon }: ProcessStepProps) {
  return (
    <div className="group card-premium relative flex h-full flex-col p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
      <div className="flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/15 text-primary shadow-[0_8px_22px_-10px] shadow-primary/40 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-metal">
          {number}
        </span>
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}
