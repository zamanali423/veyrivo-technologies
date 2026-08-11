import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Veyrivo Technologies collects, uses, and protects the information you submit through this website.",
  path: "/privacy",
});

const sections = [
  {
    title: "Information we collect",
    body: "We collect only the information you choose to submit through our contact and newsletter forms: your name, email address, company, and the message you send. We do not collect payment details, and we do not require an account.",
  },
  {
    title: "How we use your information",
    body: "We use the information you submit to respond to your enquiry, prepare a consultation, and  if you subscribe  send insights about software, AI, and automation. We never sell your information, and we never share it with third parties for their own marketing.",
  },
  {
    title: "Where it is stored",
    body: "Form submissions are stored in a secure database and are accessible only to the Veyrivo team. If you contact us from outside your country, please be aware your submission may be processed on servers located abroad.",
  },
  {
    title: "Retention",
    body: "Enquiry messages are kept for as long as needed to serve you, and no longer. Newsletter subscribers can unsubscribe at any time using the link in every email, after which their details are removed from our list.",
  },
  {
    title: "Cookies and analytics",
    body: "We may use privacy-respecting analytics to understand how visitors use the site. We do not sell data derived from analytics, and we do not use invasive cross-site tracking.",
  },
  {
    title: "Your rights",
    body: "You may request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it. Contact us at the address below and we will respond within a reasonable time.",
  },
  {
    title: "Contact",
    body: `For any privacy question or request, email ${siteConfig.email} or write to us via the contact page on this website.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: January 2026. This page explains how Veyrivo Technologies handles information you submit through this website."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />
      <section className="relative overflow-hidden bg-paper py-16 sm:py-20">
        <div className="bg-grid-light absolute inset-0 opacity-30" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-2.5 text-base leading-relaxed text-muted">
                  {section.body}
                </p>
              </div>
            ))}
            <p className="card-premium p-5 text-sm leading-relaxed text-muted">
              This policy is a general statement of practice. Specific
              client engagements may be governed by separate agreements.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
