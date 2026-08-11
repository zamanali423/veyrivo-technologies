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
        className={cn("h-auto w-auto object-contain", className)}
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
