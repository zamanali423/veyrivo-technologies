import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

/**
 * Sends a notification email over SMTP (defaults to Gmail's SMTP server).
 *
 * Requires SMTP_USER + SMTP_PASSWORD in .env. For Gmail, SMTP_USER is your
 * Gmail address and SMTP_PASSWORD must be an App Password (Google Account →
 * Security → 2-Step Verification → App passwords), not your login password.
 * When the vars are missing, the notification is logged server-side only.
 */
export async function sendEmailNotification(input: {
  subject: string;
  text: string;
  html?: string;
  /** Recipient; defaults to the site inbox. */
  to?: string;
  /** When set, replies to the notification go to this address (e.g. the lead). */
  replyTo?: string;
}): Promise<{ sent: boolean; reason?: "smtp-not-configured" }> {
  const host = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    console.info(
      `[email] SMTP not configured (SMTP_USER/SMTP_PASSWORD)  notification logged only:\\n${input.subject}\\n${input.text}`,
    );
    return { sent: false, reason: "smtp-not-configured" };
  }

  const from = process.env.SMTP_FROM ?? user;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to: input.to ?? siteConfig.email,
    subject: input.subject,
    text: input.text,
    html: input.html,
    replyTo: input.replyTo,
  });

  return { sent: true };
}
