export const siteConfig = {
  name: "Veyrivo Technologies",
  shortName: "Veyrivo",
  tagline: "Building the Intelligent Digital Future of Business.",
  description:
    "We build modern software, AI-powered applications, intelligent chatbots, and automated business solutions that simplify complex operations and accelerate growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://veyrivo-technologies.netlify.app/",
  email: "veyrivotechnologies@gmail.com",
  phone: "+92 370 6018275",
  socials: {
    linkedin: "https://www.linkedin.com/company/veyrivo-technologies",
    x: "https://x.com/veyrivo",
    github: "https://github.com/veyrivo-technologies",
  },
} as const;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const companyNav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
