import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary backdrop-blur",
        className,
      )}
    >
      <span
        className="relative inline-flex h-1.5 w-1.5 shrink-0"
        aria-hidden="true"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-primary to-accent opacity-70 animate-pulse-dot" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
      </span>
      {children}
    </span>
  );
}
