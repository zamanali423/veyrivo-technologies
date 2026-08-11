import type { Metadata } from "next";
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Search,
  Rocket,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { Stagger, StaggerItem } from "@/components/motion/primitives";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a consultation with Veyrivo Technologies. Tell us about your business challenge and we'll help you identify the right software, AI, or automation solution.",
  path: "/contact",
});

const steps = [
  {
    Icon: MessageSquare,
    title: "You tell us your challenge",
    text: "A quick form is enough  the more context, the better.",
  },
  {
    Icon: Search,
    title: "We assess the opportunity",
    text: "We review your process and suggest the right starting point.",
  },
  {
    Icon: Rocket,
    title: "You get a clear roadmap",
    text: "A concrete plan, timeline, and honest expectations.",
  },
];

const faqs = [
  {
    q: "How quickly do you reply?",
    a: "Within one business day. If your request is urgent, mention it in the message.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes  most of our clients are growing businesses that have outgrown spreadsheets and disconnected tools. We size every project to fit.",
  },
  {
    q: "What does a project cost?",
    a: "It depends on scope, which is why we start with a free assessment. You'll always get a fixed proposal before we begin.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Always. Every project includes a support period after launch, and most clients continue with us for monitoring and improvements.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-gradient">smarter.</span>
          </>
        }
        description="Tell us about your business challenge, and we will help you identify the right software, AI, or automation solution."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 right-1/4 h-[360px] w-[520px] rounded-full bg-primary/8 blur-[130px]"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <ContactForm />

            <div className="space-y-6">
              {/* Contact details */}
              <div className="card-premium p-6 sm:p-7">
                <h2 className="font-heading text-lg font-bold text-foreground">
                  Reach us directly
                </h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-muted transition-colors hover:text-primary"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="text-muted transition-colors hover:text-primary"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Response time</p>
                      <p className="text-muted">Within one business day</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* What happens next */}
              <div className="card-premium p-6 sm:p-7">
                <h2 className="font-heading text-lg font-bold text-foreground">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-5">
                  {steps.map(({ Icon, title, text }, i) => (
                    <li key={title} className="flex gap-4">
                      <span className="relative flex flex-col items-center">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        {i < steps.length - 1 ? (
                          <span className="mt-1 w-px flex-1 bg-line" />
                        ) : null}
                      </span>
                      <div className="pb-2">
                        <p className="font-semibold text-foreground">{title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <Stagger className="mx-auto mt-20 max-w-3xl">
            <StaggerItem>
              <h2 className="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Common questions
              </h2>
            </StaggerItem>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group card-premium px-0 open:border-primary/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 group-open:rotate-45 group-open:border-primary group-open:text-primary"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </Stagger>
        </Container>
      </section>
    </>
  );
}
