import { siteConfig } from "@/lib/site";

/* ── Brand palette (inline styles only — email clients strip <style>) ── */

const C = {
  bg: "#f2f6fc", // light page background
  card: "#ffffff",
  ink: "#0d1524", // near-black heading
  body: "#3d4c63", // readable body text
  muted: "#7c8ca5",
  line: "#e3eaf4",
  blue: "#168bff", // Electric Blue  dominant
  cyan: "#18c8f5", // Technology Cyan  focal points only
  violet: "#7b4dff", // Digital Violet  premium accent
  cta: "#6d4cff", // CTA gradient end
  success: "#0f9d6e",
} as const;

/* Accent bar  logo dynamic gradient (#08B7F0  #168BFF  #7B4DFF) */
const GRADIENT = `linear-gradient(90deg, #08b7f0 0%, ${C.blue} 45%, ${C.violet} 100%)`;
/* CTA buttons  #168BFF  #6D4CFF */
const CTA_GRADIENT = `linear-gradient(90deg, ${C.blue} 0%, ${C.cta} 100%)`;

/* ── Small helpers ─────────────────────────────────────────────── */

/** Escape user content for safe embedding in HTML emails. */
function esc(value: string | undefined | null): string {
  return (value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:0 0 14px;width:130px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};vertical-align:top;">${esc(label)}</td>
      <td style="padding:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:${C.body};vertical-align:top;">${esc(value)}</td>
    </tr>`;
}

/* ── Shared shell ──────────────────────────────────────────────── */

function shell(input: { preheader: string; content: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${esc(siteConfig.name)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:${C.bg};">
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${esc(input.preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${C.bg};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">

            <!-- Header -->
            <tr>
              <td style="background:${C.card};border-radius:16px 16px 0 0;padding:28px 40px 20px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:800;letter-spacing:0.12em;color:${C.ink};">
                      <span style="color:${C.cyan};">◆</span>&nbsp;VEYRIVO&nbsp;TECHNOLOGIES
                    </td>
                    <td align="right" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.14em;color:${C.muted};">
                      SOFTWARE · AI · AUTOMATION
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Accent bar (solid fallback for clients without gradients) -->
            <tr>
              <td style="height:4px;font-size:0;line-height:0;background-color:${C.blue};background:${GRADIENT};"></td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="background:${C.card};padding:32px 40px 8px;">
                ${input.content}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:${C.card};border-radius:0 0 16px 16px;padding:24px 40px 32px;border-top:1px solid ${C.line};">
                <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.7;color:${C.muted};">
                  ${esc(siteConfig.name)} · ${esc(siteConfig.email)} · ${esc(siteConfig.phone)}
                </p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.7;color:${C.muted};">
                  Building the Intelligent Digital Future of Business.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function ctaButton(href: string, label: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 0;">
      <tr>
        <td style="border-radius:999px;background-color:${C.blue};background:${CTA_GRADIENT};">
          <a href="${esc(href)}" style="display:inline-block;padding:13px 28px;border-radius:999px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">${esc(label)}</a>
        </td>
      </tr>
    </table>`;
}

/* ── Contact / lead notification (to the Veyrivo inbox) ────────── */

export type LeadEmailInput = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
};

export function leadNotificationEmail(lead: LeadEmailInput): {
  subject: string;
  text: string;
  html: string;
} {
  const subject = `New consultation request from ${lead.name}`;

  const html = shell({
    preheader: `${lead.name} — ${lead.company ?? lead.service ?? "consultation request"}`,
    content: `
      <h1 style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:800;color:${C.ink};">New consultation request</h1>
      <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${C.muted};">A new inquiry was submitted through the contact form.</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
        ${row("Name", lead.name)}
        ${row("Email", lead.email)}
        ${row("Phone", lead.phone)}
        ${row("Company", lead.company)}
        ${row("Service", lead.service)}
        ${row("Budget", lead.budget)}
        ${row("Timeline", lead.timeline)}
      </table>

      <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};">Message</p>
      <div style="margin:0 0 28px;padding:16px 18px;border-left:3px solid ${C.cyan};background:${C.bg};border-radius:0 10px 10px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:${C.body};">${esc(lead.message).replaceAll("\n", "<br/>")}</div>

      ${ctaButton(`mailto:${esc(lead.email)}`, "Reply to " + lead.name.split(" ")[0])}
    `,
  });

  const text = [
    "New consultation request",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.company ? `Company: ${lead.company}` : null,
    lead.service ? `Service: ${lead.service}` : null,
    lead.budget ? `Budget: ${lead.budget}` : null,
    lead.timeline ? `Timeline: ${lead.timeline}` : null,
    "",
    "Message:",
    lead.message,
    "",
    "—",
    `${siteConfig.name} · ${siteConfig.email}`,
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, text, html };
}

/* ── Newsletter welcome (to the subscriber) ────────────────────── */

export function newsletterWelcomeEmail(input: { email: string }): {
  subject: string;
  text: string;
  html: string;
} {
  const subject = "Welcome to Veyrivo Technologies 👋";
  const firstName = input.email.split("@")[0] || "there";

  const html = shell({
    preheader: "Practical insights on software, AI, and automation. No spam.",
    content: `
      <h1 style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:800;color:${C.ink};">Welcome aboard 👋</h1>
      <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:${C.body};">Hi ${esc(firstName)}, thanks for subscribing to the Veyrivo newsletter.</p>

      <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:${C.body};">You'll get practical, no-fluff insights on:</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
        <tr>
          <td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${C.body};"><span style="color:${C.cyan};font-weight:700;">›</span>&nbsp; Modern software and business systems</td>
        </tr>
        <tr>
          <td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${C.body};"><span style="color:${C.cyan};font-weight:700;">›</span>&nbsp; AI applications and intelligent automation</td>
        </tr>
        <tr>
          <td style="padding:0 0 10px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${C.body};"><span style="color:${C.cyan};font-weight:700;">›</span>&nbsp; Ideas to remove manual work and grow faster</td>
        </tr>
      </table>

      ${ctaButton(siteConfig.url, "Explore Veyrivo")}

      <p style="margin:28px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.7;color:${C.muted};">No spam, ever. You can unsubscribe at any time by replying to this email.</p>
    `,
  });

  const text = [
    "Welcome to Veyrivo Technologies 👋",
    "",
    `Hi ${firstName}, thanks for subscribing.`,
    "",
    "You'll get practical, no-fluff insights on:",
    "  › Modern software and business systems",
    "  › AI applications and intelligent automation",
    "  › Ideas to remove manual work and grow faster",
    "",
    `Explore: ${siteConfig.url}`,
    "",
    "No spam, ever. You can unsubscribe at any time by replying to this email.",
  ].join("\n");

  return { subject, text, html };
}

/* ── Newsletter notification (to the Veyrivo inbox) ────────────── */

export function newsletterNotifyEmail(input: { email: string }): {
  subject: string;
  text: string;
  html: string;
} {
  const subject = `New newsletter subscriber: ${input.email}`;

  const html = shell({
    preheader: `${input.email} just subscribed`,
    content: `
      <h1 style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:800;color:${C.ink};">New newsletter subscriber</h1>
      <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:${C.muted};">Someone just joined the newsletter.</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
        ${row("Email", input.email)}
        ${row("Source", "Newsletter form")}
      </table>

      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.7;color:${C.muted};">Subscribers are stored in the Supabase <span style="font-weight:700;">newsletter_subscribers</span> table.</p>
    `,
  });

  const text = [
    "New newsletter subscriber",
    "",
    `Email: ${input.email}`,
    "Source: Newsletter form",
    "",
    "Subscribers are stored in the Supabase newsletter_subscribers table.",
  ].join("\n");

  return { subject, text, html };
}
