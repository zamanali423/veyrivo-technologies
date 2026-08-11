import { z } from "zod";

export const serviceOptions = [
  "Custom Software",
  "AI-Powered Applications",
  "AI Chatbots",
  "Business Automation",
  "ERP & Business Systems",
  "Cloud & Integrations",
  "Not sure yet",
] as const;

export const budgetOptions = [
  "Under $5k",
  "$5k - $15k",
  "$15k - $50k",
  "$50k+",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "ASAP",
  "1-3 months",
  "3-6 months",
  "Just exploring",
] as const;

/**
 * Contact / consultation request form.
 * `website` is a honeypot field  real users never fill it in.
 * `phone`, `budget`, and `timeline` are optional.
 */
/**
 * Optional select/text field: HTML forms submit `""` for an unselected
 * dropdown, so each optional field accepts the empty string and then maps
 * it to `undefined` to keep the stored lead tidy.
 */
const optionalSelect = <T extends readonly string[]>(options: T) =>
  z.enum(options).optional().or(z.literal("")).transform((v) => v || undefined);

const optionalText = (max: number, message?: string) =>
  z.string().trim().max(max, message).optional().transform((v) => v || undefined);

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(120),
  phone: optionalText(30, "Please enter a valid phone number."),
  company: optionalText(120),
  service: optionalSelect(serviceOptions),
  budget: optionalSelect(budgetOptions),
  timeline: optionalSelect(timelineOptions),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about your challenge.")
    .max(4000),
  // Honeypot: any non-empty value is a bot. Kept as a plain string so a
  // filled honeypot passes validation and the route can silently fake
  // success instead of revealing the field's existence via a 422.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Newsletter subscription form. Also includes the honeypot field. */
export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(120),
  website: z.string().optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
