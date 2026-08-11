import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { companyNav, siteConfig } from "@/lib/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import {
  LinkedInGlyph,
  GitHubGlyph,
  XGlyph,
} from "@/components/ui/social-icons";

const socials = [
  { label: "LinkedIn", href: siteConfig.socials.linkedin, Icon: LinkedInGlyph },
  { label: "X (Twitter)", href: siteConfig.socials.x, Icon: XGlyph },
  { label: "GitHub", href: siteConfig.socials.github, Icon: GitHubGlyph },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/70 bg-background">
      {/* subtle top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
              aria-label={`${siteConfig.name}  home`}
            >
              <BrandLogo
                className="h-14 w-auto sm:h-16"
                showWordmark
                wordmarkClassName="text-xl sm:text-2xl"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <ul className="mt-6 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all hover:border-primary/60 hover:text-foreground hover:shadow-[0_0_20px_-4px] hover:shadow-primary/40"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-silver">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-silver">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter + contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-silver">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-muted">
              Practical insights on software, AI, and automation. No spam.
            </p>
            <NewsletterForm className="mt-4" />
            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/70 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-xs text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-1 font-mono text-xs text-muted">
              Built by Zaman Ali
              <ArrowUpRight className="h-3 w-3" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
