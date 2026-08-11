"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import {
  serviceOptions,
  budgetOptions,
  timelineOptions,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-line/80 bg-surface-2/80 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.03)] transition-all focus:border-primary/70 focus:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-primary/25";

const labelClasses = "mb-1.5 block text-sm font-medium text-silver";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setStatus("error");
        setError(
          data?.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      trackEvent("contact_submit");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="card-premium flex min-h-[420px] flex-col items-center justify-center p-10 text-center"
        role="status"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-success/40 bg-success/10 shadow-[0_0_30px_-8px] shadow-success/50">
          <CheckCircle2 className="h-7 w-7 text-success" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
          Message received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Thank you for reaching out. A member of the Veyrivo team will
          respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card-premium p-6 sm:p-8"
      noValidate
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />

      {/* Honeypot  hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClasses}>
            Name <span className="text-danger">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClasses}>
            Work email <span className="text-danger">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelClasses}>
            Company
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            maxLength={120}
            autoComplete="organization"
            placeholder="Company Ltd"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClasses}>
            Phone number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            placeholder="+1 555 000 1234"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="cf-service" className={labelClasses}>
            What do you need?
          </label>
          <select
            id="cf-service"
            name="service"
            defaultValue=""
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className={labelClasses}>
            Budget range
          </label>
          <select
            id="cf-budget"
            name="budget"
            defaultValue=""
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-timeline" className={labelClasses}>
            Timeline
          </label>
          <select
            id="cf-timeline"
            name="timeline"
            defaultValue=""
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelClasses}>
            Your challenge <span className="text-danger">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            minLength={10}
            maxLength={4000}
            rows={5}
            placeholder="Tell us about the process, data, or customer experience you'd like to improve…"
            className={`${inputClasses} resize-y`}
          />
        </div>
      </div>

      {error ? (
        <p
          className="mt-4 flex items-center gap-2 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-foreground"
          role="alert"
        >
          <AlertCircle className="h-4 w-4 shrink-0 text-danger" />
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-cta px-7 text-base font-semibold text-white shadow-[0_10px_34px_-10px] shadow-primary/60 transition-all hover:brightness-110 hover:shadow-[0_12px_44px_-8px] hover:shadow-primary/80 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Book a Consultation
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-muted">
        We reply within one business day. Your details are never shared.
      </p>
    </form>
  );
}
