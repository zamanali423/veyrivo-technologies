import Image from "next/image";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

const LOGO_SRC = "/images/veyrivo-icon.png";

export function BrandLogo({
  className,
  priority = false,
  alt = "Veyrivo Technologies",
  showWordmark = false,
  wordmarkClassName,
}: {
  className?: string;
  priority?: boolean;
  alt?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={LOGO_SRC}
        alt={showWordmark ? "" : alt}
        width={383}
        height={383}
        priority={priority}
        sizes="(max-width: 640px) 3rem, 4rem"
        // No h-* / w-* defaults here: callers always pass their own sizing
        // (e.g. "h-10 w-auto") and cn() is a plain join, so a base "h-auto"
        // would coexist with "h-10" and the stylesheet order would make the
        // logo render near its 383px intrinsic width on small screens.
        className={cn("max-w-full object-contain", className)}
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-heading font-bold tracking-tight text-metal",
            wordmarkClassName,
          )}
        >
          {siteConfig.name}
        </span>
      ) : null}
    </span>
  );
}
