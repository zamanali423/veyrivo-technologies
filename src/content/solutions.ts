export type Solution = {
  slug: string;
  icon: "bot" | "dashboard" | "workflow";
  title: string;
  tagline: string;
  status: "Prototype" | "Production-ready";
  problem: string;
  solution: string;
  features: string[];
  benefit: string;
};

export const solutions: Solution[] = [
  {
    slug: "ai-customer-assistant",
    icon: "bot",
    title: "AI Customer Assistant",
    tagline:
      "A 24/7 assistant that answers customer questions and hands off to your team with full context.",
    status: "Prototype",
    problem:
      "Customers expect instant answers, but your team can only respond during business hours  so every evening and weekend, questions pile up and leads go cold.",
    solution:
      "An AI assistant grounded in your own documentation answers routine questions instantly on your website and WhatsApp, captures leads, and escalates to a human agent with the full conversation history when a customer needs a real person.",
    features: [
      "Answers grounded in your own knowledge base",
      "Website widget and WhatsApp integration",
      "Lead capture that pushes into your CRM or inbox",
      "Human handover with conversation context",
      "Analytics on what customers ask and where it struggles",
    ],
    benefit:
      "Respond to every customer within seconds, cut repetitive support volume, and never lose another after-hours lead.",
  },
  {
    slug: "business-operations-platform",
    icon: "dashboard",
    title: "Business Operations Platform",
    tagline:
      "One live dashboard for orders, inventory, customers, and performance across your business.",
    status: "Prototype",
    problem:
      "Sales, inventory, and finance live in separate tools and spreadsheets, so nobody has a real-time picture of the business and reporting takes days.",
    solution:
      "A centralized platform that brings orders, stock, customers, and finance into one live view  with role-based access, automated reporting, and the workflows your team actually uses.",
    features: [
      "Real-time orders, inventory, and customer views",
      "Automated daily and weekly reports",
      "Role-based access for staff, managers, and finance",
      "Integrations with payments and accounting tools",
      "Migration from spreadsheets to one source of truth",
    ],
    benefit:
      "Make decisions on today's data instead of last month's, and close the books in days instead of weeks.",
  },
  {
    slug: "workflow-automation-hub",
    icon: "workflow",
    title: "Workflow Automation Hub",
    tagline:
      "Design, run, and monitor your business automations from one control room.",
    status: "Prototype",
    problem:
      "Repetitive processes  order entry, approvals, notifications, reporting  are done by hand, which is slow, error-prone, and impossible to scale.",
    solution:
      "A visual hub where your workflows run automatically: capture, validate, route, approve, notify, and archive  with every run logged and failures alerted before they cause damage.",
    features: [
      "Visual workflow builder for your processes",
      "Approval flows with reminders and escalations",
      "Automated notifications and scheduled reports",
      "Connectors to your CRM, accounting, and messaging tools",
      "Run logs and failure alerts for every workflow",
    ],
    benefit:
      "Reclaim hours of manual work every week with processes that run consistently and leave a clean audit trail.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
