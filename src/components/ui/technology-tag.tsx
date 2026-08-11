import { Tag } from "lucide-react";
import { cn } from "@/lib/cn";

/** Small mono tag for accurate technology mentions (n8n, Shopify, etc.). */
export function TechnologyTag({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-surface-2/70 px-2.5 py-1 font-mono text-[10px] font-medium text-silver-muted",
        className,
      )}
    >
      <Tag className="h-3 w-3" aria-hidden="true" />
      {children}
    </span>
  );
}
