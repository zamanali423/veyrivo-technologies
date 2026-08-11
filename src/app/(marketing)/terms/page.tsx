import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use the Veyrivo Technologies website and contact our team.",
  path: "/terms",
});

const sections = [
  {
    title: "1. Who we are",
    body: `This website is operated by ${siteConfig.name}. By using this website or submitting a form, you agree to these terms.`,
  },
  {
    title: "2. Use of this website",
    body: "You may use this website to learn about our services and contact us. You agree not to misuse the site  for example, by submitting false information, attempting to disrupt the site, or using automated tools to spam our forms.",
  },
  {
    title: "3. Information you submit",
    body: "Information you submit through our contact or newsletter forms is used to respond to your enquiry. We take reasonable steps to protect it, and we never sell it. Full details are in our Privacy Policy.",
  },
  {
    title: "4. No professional advice",
    body: "Content on this website  including articles and case-study descriptions  is provided for general information and does not constitute professional, legal, or financial advice.",
  },
  {
    title: "5. Our work together",
    body: "Proposals for client work are separate from these website terms. Any project scope, pricing, and delivery commitments are governed by the written agreement we sign with you, not by this page.",
  },
  {
    title: "6. Intellectual property",
    body: "The design, text, and graphics on this website belong to Veyrivo Technologies unless stated otherwise. You may not reproduce them without permission.",
  },
  {
    title: "7. Limitation of liability",
    body: "This website is provided on an 'as is' basis. To the extent permitted by law, we are not liable for any loss arising from the use of this website, and our total liability in connection with it will not exceed the amount you paid us in connection with the relevant services.",
  },
  {
    title: "8. Changes to these terms",
    body: "We may update these terms from time to time. The 'last updated' date above reflects the latest version, which always applies.",
  },
  {
    title: "9. Contact",
    body: `Questions about these terms? Email ${siteConfig.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: January 2026. The terms that apply when you use this website and contact our team."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms" }]}
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
          </div>
        </Container>
      </section>
    </>
  );
}
