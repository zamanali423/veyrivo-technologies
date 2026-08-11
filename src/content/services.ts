export type Service = {
  slug: string;
  icon: "code" | "sparkles" | "bot" | "workflow" | "box" | "cloud";
  title: string;
  short: string;
  tagline: string;
  intro: string;
  features: { title: string; description: string }[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    icon: "code",
    title: "Custom Software",
    short:
      "Web platforms, portals, dashboards, and internal business systems.",
    tagline:
      "Purpose-built platforms that fit your operations  not the other way around.",
    intro:
      "Off-the-shelf software forces your business to change how it works. We build the opposite: web platforms, client portals, dashboards, and internal systems shaped around your exact workflows, rules, and users. Each system is designed to be simple for your team, maintainable for years, and easy to extend as your business grows.",
    features: [
      {
        title: "Web platforms & portals",
        description:
          "Customer portals, supplier portals, and member areas that put the right tools in the right hands.",
      },
      {
        title: "Operations dashboards",
        description:
          "Live views of the metrics that matter, so decisions are based on data instead of guesswork.",
      },
      {
        title: "Internal business systems",
        description:
          "Order desks, case management, approvals, and back-office tools that replace spreadsheets and email chains.",
      },
      {
        title: "Modern, accessible interfaces",
        description:
          "Clean, fast, responsive interfaces your team will actually enjoy using.",
      },
      {
        title: "Integration-ready architecture",
        description:
          "APIs from day one, so your new system connects cleanly to the tools you already use.",
      },
      {
        title: "Documentation & handover",
        description:
          "Clear code, tests, and handover docs so your team can run and evolve the product with confidence.",
      },
    ],
    outcomes: [
      "Replace manual work and disconnected tools with one coherent system",
      "Give customers and staff self-service access instead of asking for help",
      "Scale operations without scaling headcount or busywork",
      "Own your software  no per-seat fees or forced upgrades",
    ],
  },
  {
    slug: "ai-solutions",
    icon: "sparkles",
    title: "AI-Powered Applications",
    short:
      "AI assistants, intelligent search, document processing, recommendations, and business insights.",
    tagline:
      "Practical AI that works inside your business  search, documents, insights, and recommendations.",
    intro:
      "AI is most valuable when it removes real, repetitive work. We build AI-powered applications that read your documents, search your data, answer questions, and surface insights  grounded in your own information and designed to be safe, transparent, and useful. No science projects: every model and prompt is chosen for accuracy, cost, and control.",
    features: [
      {
        title: "AI assistants",
        description:
          "Domain-trained assistants that answer questions using your policies, catalogs, and knowledge base.",
      },
      {
        title: "Intelligent search",
        description:
          "Find the right document, order, or record in seconds  even when users don't know the exact term.",
      },
      {
        title: "Document processing",
        description:
          "Extract, validate, and route data from invoices, contracts, and forms without manual re-entry.",
      },
      {
        title: "Recommendations",
        description:
          "Suggest products, content, or next best actions based on behavior and business rules.",
      },
      {
        title: "Business insights",
        description:
          "Natural-language questions over your data, with clear answers and the reasoning shown.",
      },
      {
        title: "Human-in-the-loop controls",
        description:
          "Confidence thresholds, review queues, and audit trails so AI never acts alone where it shouldn't.",
      },
    ],
    outcomes: [
      "Answer customer and staff questions faster with consistent accuracy",
      "Cut hours of manual document and data entry every week",
      "Turn scattered data into answers leadership can act on",
      "Deploy AI with guardrails, monitoring, and clear ownership",
    ],
  },
  {
    slug: "ai-chatbots",
    icon: "bot",
    title: "AI Chatbots",
    short:
      "Website, WhatsApp, and customer-support chatbots with human handover.",
    tagline:
      "Instant, on-brand responses around the clock  with a graceful handover to your team.",
    intro:
      "Customers expect answers in minutes, not business days. We build chatbots that handle the routine questions your team answers every day  order status, pricing, policies, booking  on your website and WhatsApp, then hand complex conversations to a human the moment they're needed. Every handover includes full context, so your team never starts from scratch.",
    features: [
      {
        title: "Website assistants",
        description:
          "A branded chat widget that answers questions and captures leads 24/7.",
      },
      {
        title: "WhatsApp & messaging",
        description:
          "Meet customers where they already talk to you  with templated, compliant replies.",
      },
      {
        title: "Knowledge grounding",
        description:
          "Answers drawn from your real documentation, not a generic model guessing.",
      },
      {
        title: "Human handover",
        description:
          "Clear escalation rules with conversation history passed to a live agent.",
      },
      {
        title: "Lead capture",
        description:
          "Qualify visitors, collect contact details, and push leads into your CRM or inbox.",
      },
      {
        title: "Analytics & tuning",
        description:
          "See what customers ask, where the bot struggles, and improve it continuously.",
      },
    ],
    outcomes: [
      "Respond to customers in seconds, around the clock",
      "Reduce the volume of repetitive support tickets",
      "Capture more leads while visitors are still engaged",
      "Keep the human touch where it matters most",
    ],
  },
  {
    slug: "business-automation",
    icon: "workflow",
    title: "Business Automation",
    short:
      "Automate repetitive workflows, notifications, approvals, and reporting.",
    tagline:
      "Stop your team from doing the same work twice. Automate the repetitive parts.",
    intro:
      "Somewhere in your business, someone copies data from one system into another, chases approvals, or rebuilds the same report every week. We design and build automation that handles those steps reliably  with rules you control, logs you can audit, and failures that notify someone instead of disappearing silently.",
    features: [
      {
        title: "Workflow automation",
        description:
          "Multi-step processes that run themselves: capture, route, validate, notify, archive.",
      },
      {
        title: "Smart notifications",
        description:
          "The right person gets the right alert at the right time  no more email overload.",
      },
      {
        title: "Approval flows",
        description:
          "Structured approvals with reminders, escalations, and a complete audit trail.",
      },
      {
        title: "Automated reporting",
        description:
          "Scheduled reports delivered to the people who need them, in the format they use.",
      },
      {
        title: "Data sync between tools",
        description:
          "Keep CRM, accounting, inventory, and spreadsheets in sync without manual re-entry.",
      },
      {
        title: "Monitoring & alerts",
        description:
          "Every run is logged; failures raise an alert before they become a problem.",
      },
    ],
    outcomes: [
      "Reclaim hours of manual work every single week",
      "Fewer errors from copy-paste and forgotten steps",
      "Processes that run consistently even when staff are away",
      "Clear audit trails for compliance and accountability",
    ],
  },
  {
    slug: "erp-systems",
    icon: "box",
    title: "ERP & Business Systems",
    short:
      "Inventory, sales, purchasing, customers, finance, and operational management.",
    tagline:
      "One connected system for inventory, sales, purchasing, customers, and finance.",
    intro:
      "As businesses grow, data splits across Excel sheets, separate tools, and people's heads. We build and modernize ERP and business systems that keep inventory, sales, purchasing, customers, and finance in one connected place  with real-time visibility, sane permissions, and reporting you can trust.",
    features: [
      {
        title: "Inventory management",
        description:
          "Stock levels, reorder points, transfers, and warehouse movements in real time.",
      },
      {
        title: "Sales & purchasing",
        description:
          "Quotes, orders, invoicing, and purchase orders flowing through one pipeline.",
      },
      {
        title: "Customer management",
        description:
          "Accounts, contacts, pricing, credit limits, and history in one profile.",
      },
      {
        title: "Finance & reporting",
        description:
          "Payments, receivables, VAT-ready views, and financial reports without re-keying.",
      },
      {
        title: "Multi-user permissions",
        description:
          "Role-based access so every team sees only what they need.",
      },
      {
        title: "Migration from spreadsheets",
        description:
          "Careful data cleanup and migration from Excel and legacy systems.",
      },
    ],
    outcomes: [
      "One source of truth instead of conflicting spreadsheets",
      "Inventory accuracy that stops over-ordering and stockouts",
      "Finance close in days instead of weeks",
      "Ownership of a system that scales with your business",
    ],
  },
  {
    slug: "cloud-integrations",
    icon: "cloud",
    title: "Cloud & Integrations",
    short:
      "APIs, third-party integrations, deployments, monitoring, and technical maintenance.",
    tagline:
      "Connected systems, reliable deployments, and maintenance you don't have to worry about.",
    intro:
      "Software is only as good as its plumbing. We design and operate the connections between your systems  payment gateways, shipping providers, accounting tools, CRMs, and the rest  and we keep your applications deployed, monitored, and updated. You get the reliability of a dedicated operations team without hiring one.",
    features: [
      {
        title: "API design & integration",
        description:
          "Clean, documented APIs and connectors that move data between your tools.",
      },
      {
        title: "Third-party connections",
        description:
          "Payments, shipping, messaging, accounting, and CRM integrations done properly.",
      },
      {
        title: "Cloud deployment",
        description:
          "CI/CD pipelines and infrastructure that deploy safely and roll back fast.",
      },
      {
        title: "Monitoring & alerts",
        description:
          "Uptime, errors, and performance watched around the clock with real alerting.",
      },
      {
        title: "Security & backups",
        description:
          "Encrypted data, managed backups, and security patches applied on schedule.",
      },
      {
        title: "Ongoing maintenance",
        description:
          "A technical partner who keeps your systems healthy month after month.",
      },
    ],
    outcomes: [
      "Systems that talk to each other automatically",
      "Fewer outages and faster recovery when something does break",
      "No more version hell or forgotten dependencies",
      "A predictable maintenance partner instead of ad-hoc fixes",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
