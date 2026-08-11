export type Prototype = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  outcome: string;
};

/**
 * Clearly-labeled demonstrations. Replace with real client case studies
 * (with measurable outcomes) once client projects go live.
 */
export const prototypes: Prototype[] = [
  {
    title: "Prototype: Retail Operations Dashboard",
    category: "Dashboard & Analytics",
    description:
      "A live dashboard that pulls sales, stock, and customer data into one screen  daily performance, low-stock alerts, and automated reports delivered to the team every morning.",
    tags: ["Dashboard", "Analytics", "Retail", "Automation"],
    outcome:
      "Shows how a retailer replaces weekly spreadsheet reporting with a real-time view of the whole business.",
  },
  {
    title: "Prototype: AI Customer Support Assistant",
    category: "AI & Chatbots",
    description:
      "An AI assistant trained on a sample knowledge base that answers order-status, policy, and product questions  then hands complex conversations to a human with full context.",
    tags: ["AI", "Chatbot", "Customer Support"],
    outcome:
      "Shows how support teams answer more questions faster while keeping the human handover seamless.",
  },
  {
    title: "Prototype: Automated Lead Management",
    category: "Workflow Automation",
    description:
      "An automated pipeline that captures leads from a website form, qualifies and enriches them, routes them to the right salesperson, and sends follow-ups until they respond.",
    tags: ["Automation", "CRM", "Sales"],
    outcome:
      "Shows how follow-up happens reliably for every lead  no more leads slipping through the cracks.",
  },
];
