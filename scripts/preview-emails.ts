/**
 * Renders the email templates to standalone .html files so you can eyeball
 * them in a browser before sending real mail.
 *
 * Run with: npx tsx scripts/preview-emails.ts
 * Output:   .email-previews/*.html (outside public/ so they can't ship)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  leadNotificationEmail,
  newsletterWelcomeEmail,
  newsletterNotifyEmail,
} from "../src/lib/email-templates";

const lead = leadNotificationEmail({
  name: "Jane Smith",
  email: "jane@acme.com",
  phone: "+1 555 000 1234",
  company: "Acme Ltd",
  service: "AI Chatbots",
  budget: "$15k - $50k",
  timeline: "1-3 months",
  message:
    "We get hundreds of support questions a week and want an AI assistant\nthat answers the common ones and hands off to our team with context.",
});

const welcome = newsletterWelcomeEmail({ email: "jane@acme.com" });
const notify = newsletterNotifyEmail({ email: "jane@acme.com" });

const outDir = join(process.cwd(), ".email-previews");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "lead.html"), lead.html);
writeFileSync(join(outDir, "newsletter-welcome.html"), welcome.html);
writeFileSync(join(outDir, "subscriber-notify.html"), notify.html);

console.log("lead subject:", lead.subject);
console.log("welcome subject:", welcome.subject);
console.log("notify subject:", notify.subject);
console.log("Wrote .email-previews/lead.html, newsletter-welcome.html, subscriber-notify.html");
