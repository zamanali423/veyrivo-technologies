import Image from "next/image";
import { Mail } from "lucide-react";
import type { TeamMember } from "@/content/team";
import { cn } from "@/lib/cn";
import { LinkedInGlyph, GitHubGlyph } from "@/components/ui/social-icons";

function SocialGlyph({ label }: { label: string }) {
  if (label === "GitHub") return <GitHubGlyph className="h-3.5 w-3.5" />;
  if (label === "Email") return <Mail className="h-3.5 w-3.5" />;
  return <LinkedInGlyph className="h-3.5 w-3.5" />;
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group card-premium flex h-full flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />

      {/* Portrait — full image, scales subtly on hover; monogram is the fallback.
          An animated gradient ring fades in around the photo on hover. */}
      <div className="relative aspect-square w-full overflow-hidden bg-surface-2">
        {/* Rotating brand-gradient border — first child so the photo frame
            paints over its center, masking it to a 2px ring. Bottom edge is
            subtly dimmed by the vignette, matching the card glow. */}
        <div
          aria-hidden="true"
          className="animate-gradient-spin pointer-events-none absolute -inset-[100%] bg-[conic-gradient(from_0deg,var(--color-primary),var(--color-secondary),var(--color-accent),var(--color-primary))] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        />

        {/* Photo frame inset by 2px so the gradient ring shows around it */}
        <div className="absolute inset-[2px] overflow-hidden rounded-[20px]">
          {member.photo ? (
            <Image
              src={member.photo.src}
              alt={`Portrait of ${member.name}`}
              width={member.photo.width}
              height={member.photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={member.photo.blurDataURL}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div
              className={cn(
                "flex h-full w-full items-center justify-center bg-gradient-to-br p-px",
                member.gradient,
              )}
            >
              <div className="flex h-full w-full items-center justify-center bg-surface-2">
                <span
                  className={cn(
                    "font-heading text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br",
                    member.gradient,
                  )}
                >
                  {member.initials}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Soft bottom vignette + gradient glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030B1C]/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"
          aria-hidden="true"
        />
        <div
          className={cn(
            "pointer-events-none absolute -inset-6 bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-25",
            member.gradient,
          )}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-center font-heading text-lg font-bold text-foreground">
          {member.name}
        </h3>
        <p
          className={cn(
            "mt-1 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r",
            member.gradient,
          )}
        >
          {member.role}
        </p>
        <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-muted">
          {member.bio}
        </p>

        {/* Socials — always visible on touch, appear on hover/focus on desktop */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {member.socials?.map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={`${member.name} on ${social.label}`}
              style={{ transitionDelay: `${i * 50}ms` }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line/80 text-muted opacity-100 transition-all duration-300 hover:border-primary/60 hover:text-foreground hover:shadow-[0_0_16px_-4px] hover:shadow-primary/50 focus-visible:border-primary/60 focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-primary sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100"
            >
              <SocialGlyph label={social.label} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
