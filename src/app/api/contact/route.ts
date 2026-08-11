import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";
import { storeLead } from "@/lib/db";
import { sendEmailNotification } from "@/lib/email";
import { leadNotificationEmail } from "@/lib/email-templates";
import { getClientIp } from "@/lib/request";

export const runtime = "nodejs";

export async function POST(req: Request) {
  // Rate limit per IP: 5 submissions per minute.
  const ip = getClientIp(req);
  const limited = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!limited.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Invalid input.";
    return NextResponse.json({ error: firstIssue }, { status: 422 });
  }

  const data = parsed.data;

  // Honeypot: pretend success so bots don't learn the field exists.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await storeLead({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      budget: data.budget,
      timeline: data.timeline,
      message: data.message,
      source: "contact-form",
    });

    const email = leadNotificationEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      budget: data.budget,
      timeline: data.timeline,
      message: data.message,
    });
    await sendEmailNotification({
      subject: email.subject,
      text: email.text,
      html: email.html,
      replyTo: data.email,
    });
  } catch (err) {
    // Never expose storage/email failures to the visitor; log server-side.
    console.error("[contact] Failed to persist submission:", err);
  }

  return NextResponse.json({ ok: true });
}
