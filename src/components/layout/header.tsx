"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the menu when the route changes. Doing this during render is the
  // recommended pattern for "adjust state when props change"  it avoids a
  // cascading setState inside an effect.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Move focus into the dialog when it opens so keyboard users land inside
  // the menu instead of behind it.
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  // NOTE: the slide-over menu must live OUTSIDE <header>. The header gets a
  // backdrop-filter (backdrop-blur) when open/scrolled, and any ancestor with
  // a backdrop-filter becomes the containing block for position: fixed
  // descendants  which would trap the full-screen overlay inside the 72px
  // header on small screens.
  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled || open
            ? "border-line/70 bg-background/80 shadow-[0_12px_40px_-18px] shadow-black/70 backdrop-blur-2xl"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-[4.5rem] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8"
        >
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-90"
            aria-label={`${siteConfig.name}  home`}
          >
            <BrandLogo
              className="h-10 w-auto shrink-0 sm:h-12"
              priority
              showWordmark
              wordmarkClassName="text-base max-[360px]:hidden sm:text-lg"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gradient-to-r from-secondary to-accent transition-transform duration-300",
                      active
                        ? "scale-x-100 opacity-80"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60 text-foreground backdrop-blur transition-colors hover:border-primary/50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile slide-over menu */}
      <div
        id="mobile-menu"
        className={cn(
          // z-[60] keeps the panel above the sticky header (z-50) so the
          // menu's own logo + close button are visible and tappable.
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        // inert removes the closed menu from both tab order and the
        // accessibility tree.
        inert={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          tabIndex={-1}
          className={cn(
            // overflow-y-auto keeps the menu usable on short / landscape
            // viewports where the links + CTA exceed the screen height.
            "absolute right-0 top-0 flex h-full w-[min(21.5rem,90vw)] flex-col overflow-y-auto border-l border-line bg-surface px-6 pb-8 pt-5 shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <BrandLogo
              className="h-9 w-auto shrink-0"
              showWordmark
              // Hide the wordmark on very narrow screens so the logo + close
              // button never overflow the panel width.
              wordmarkClassName="text-base max-[360px]:hidden"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
            {mainNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: `${i * 30}ms` }}
                className={cn(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0",
                  pathname === item.href ||
                    pathname.startsWith(`${item.href}/`)
                    ? "bg-surface-2 text-foreground"
                    : "text-muted hover:bg-surface-2 hover:text-foreground",
                )}
              >
                {item.label}
                <ArrowRight className="h-4 w-4 opacity-40" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 border-t border-line/70 pt-6">
            <Button href="/contact" className="w-full" size="lg">
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="text-center font-mono text-xs text-muted">
              {siteConfig.email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
