export type Industry = {
  slug: string;
  icon: "retail" | "car" | "truck" | "health" | "briefcase";
  title: string;
  blurb: string;
  focus: string[];
};

export const industries: Industry[] = [
  {
    slug: "retail",
    icon: "retail",
    title: "Retail & E-commerce",
    blurb:
      "Stores, online shops, and omnichannel retailers that need stock, orders, and customers in one place  plus faster answers for shoppers.",
    focus: [
      "Omnichannel inventory & order management",
      "AI product search and recommendations",
      "Customer-support chatbots with order tracking",
      "Automated restocking and supplier alerts",
    ],
  },
  {
    slug: "automotive",
    icon: "car",
    title: "Automotive",
    blurb:
      "Dealerships, parts distributors, and workshops managing vehicles, parts, service jobs, and customer follow-ups across busy operations.",
    focus: [
      "Parts inventory and cross-reference lookup",
      "Service scheduling, job cards, and workshop dashboards",
      "Vehicle sales pipelines and financing workflows",
      "Automated service reminders and follow-ups",
    ],
  },
  {
    slug: "distribution",
    icon: "truck",
    title: "Distribution & Wholesale",
    blurb:
      "Wholesalers and distributors juggling catalogs, purchasing, warehouse movements, and a sales team that needs live stock answers.",
    focus: [
      "Real-time stock visibility for sales teams",
      "Purchase orders and supplier management",
      "Warehouse movements and dispatch",
      "Sales reporting and margin analysis",
    ],
  },
  {
    slug: "healthcare",
    icon: "health",
    title: "Healthcare & Clinics",
    blurb:
      "Clinics and care providers that need secure patient records, appointments, and communication without adding administrative load.",
    focus: [
      "Secure patient records and appointment management",
      "Automated reminders and recall schedules",
      "HIPAA-conscious data handling and audit logs",
      "Patient-facing portals and intake forms",
    ],
  },
  {
    slug: "professional-services",
    icon: "briefcase",
    title: "Professional Services",
    blurb:
      "Consultancies, agencies, and service firms that bill by the project and live on repeatable delivery  but still run on inboxes.",
    focus: [
      "Project and client management platforms",
      "Time tracking and invoicing automation",
      "Document generation and client portals",
      "Reporting dashboards for leadership",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
