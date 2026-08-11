import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent";

type Size = "sm" | "md" | "lg";

const base =
  "inline-flex select-none items-center justify-center gap-2 whitespace-normal rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-cta text-white shadow-[0_10px_34px_-10px] shadow-primary/60 hover:shadow-[0_12px_44px_-8px] hover:shadow-primary/80 hover:brightness-110",
  secondary:
    "border border-line bg-surface/60 text-foreground hover:border-primary/60 hover:bg-surface-2 hover:shadow-[0_10px_30px_-14px] hover:shadow-primary/40",
  accent:
    "bg-gradient-to-r from-accent to-purple text-white shadow-[0_10px_34px_-12px] shadow-accent/60 hover:shadow-[0_12px_44px_-10px] hover:shadow-accent/80 hover:brightness-110",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  rel,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
