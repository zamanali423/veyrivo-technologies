import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";
import { storeSubscriber } from "@/lib/db";
import { sendEmailNotification } from "@/lib/email";
import {
  newsletterWelcomeEmail,
  newsletterNotifyEmail,
} from "@/lib/email-templates";
import { getClientIp } from "@/lib/request";

export const runtime = "nodejs";

export async function POST(req: Request) {
  // Rate limit per IP: 3 subscriptions per minute.
  const ip = getClientIp(req);
  const limited = rateLimit(`newsletter:${ip}`, 3, 60_000);
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

  const parsed = newsletterSchema.safeParse(body);
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
    await storeSubscriber({ email: data.email, source: "newsletter" });
  } catch (err) {
    console.error("[newsletter] Failed to persist subscriber:", err);
  }

  // Welcome email to the subscriber + a notification to the site inbox.
  // Failures are logged server-side; the visitor always sees success.
  try {
    const welcome = newsletterWelcomeEmail({ email: data.email });
    await sendEmailNotification({
      subject: welcome.subject,
      text: welcome.text,
      html: welcome.html,
      to: data.email,
    });
  } catch (err) {
    console.error("[newsletter] Failed to send welcome email:", err);
  }

  try {
    const notify = newsletterNotifyEmail({ email: data.email });
    await sendEmailNotification({
      subject: notify.subject,
      text: notify.text,
      html: notify.html,
    });
  } catch (err) {
    console.error("[newsletter] Failed to send inbox notification:", err);
  }

  return NextResponse.json({ ok: true });
}
