export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "ai-chatbots-vs-live-chat",
    title: "AI chatbots vs. live chat: when to automate, when to hand over",
    excerpt:
      "The winning pattern is not 'bot or human'  it's a bot that knows its limits and hands over gracefully. Here's how to design that boundary.",
    category: "AI",
    date: "2026-06-18",
    readTime: "6 min",
    body: [
      "The old debate  should our website use a chatbot or live agents?  assumes the two are rivals. In practice, the businesses that get the best results treat automation and humans as one system with a clear handover point, not a replacement of one by the other.",
      "The key is designing for the boundary. A good assistant resolves the 70–80% of questions that are routine  order status, business hours, pricing, policy lookups  and recognizes when a conversation needs a person: high value, high emotion, or simply beyond its knowledge. The handover must carry context, so the agent doesn't ask the customer to repeat everything.",
      "Three signals tell you where to draw the line. First, conversation logs: what do customers actually ask? Second, resolution rate: which questions does the bot solve without escalation? Third, handover quality: do agents waste time re-reading transcripts? Track these for a month and the boundary designs itself.",
      "A pragmatic start is a bot grounded in your own documentation, a clear escalation button, and a weekly review of the 'bot said no' cases. Automation should make your team faster, never leave customers stuck in a loop.",
    ],
  },
  {
    slug: "why-small-businesses-lose-hours-to-spreadsheets",
    title: "Why growing businesses lose hours every week to spreadsheets",
    excerpt:
      "Spreadsheets are where data goes to be copied. When a business outgrows them, the cost shows up as manual re-entry, conflicting numbers, and slow answers.",
    category: "Operations",
    date: "2026-05-27",
    readTime: "5 min",
    body: [
      "Every spreadsheet has a hidden cost: someone copies its contents into another spreadsheet. Inventory from the stock sheet into the sales sheet. Orders from email into the finance sheet. Each copy is a chance for a typo, a stale figure, or a formula that silently breaks.",
      "The trigger for replacing a spreadsheet is rarely one dramatic failure  it's the slow accumulation of double entry. If the same information lives in three places, it's already inconsistent. If a decision requires waiting for someone to 'send the latest version,' the process has outgrown the tool.",
      "The alternative isn't a complex ERP on day one. It's a single system of record with the right views for each role, and automation that moves data between the tools that remain. The goal is that information is entered once, and everything else reads from that one source.",
      "A good first project: pick the single most-copied spreadsheet in your business and build a small system around it. Measure the time saved in a month. That number usually justifies the next step.",
    ],
  },
  {
    slug: "automation-that-saves-time-not-creates-it",
    title: "Automation that actually saves time (and what makes it fail)",
    excerpt:
      "Half of automation projects fail because they automate the wrong process, or none at all. Start with frequency, pain, and a measurable before.",
    category: "Automation",
    date: "2026-05-06",
    readTime: "7 min",
    body: [
      "Automation projects fail in predictable ways: they automate a process that happens once a month, they build for a happy path that never occurs, or they create a system so fragile that someone still babysits it. The result is an expensive way to save ten minutes.",
      "A better filter: automate processes that are frequent, painful, and rule-based. Frequency matters because automation has fixed costs  build time, maintenance, monitoring. Pain matters because a process nobody complains about will be abandoned. Rules matter because fuzzy judgment is where humans still win.",
      "Before writing any code, measure the 'before.' How many hours does this process take this week? How many errors occurred last month? A baseline turns a vague 'it'll save time' into a number you can check against after launch.",
      "Finally, design for failure. Every automated step should either confirm success or alert a human. Automation that fails silently erodes trust  and trust is what keeps people from putting their workflows back into a spreadsheet.",
    ],
  },
  {
    slug: "practical-ai-adoption-roadmap",
    title: "A practical AI adoption roadmap for a small business",
    excerpt:
      "You don't need a data science team to benefit from AI. You need a narrow problem, your own data, and guardrails. Here's the order to do it in.",
    category: "AI",
    date: "2026-04-15",
    readTime: "8 min",
    body: [
      "Every conversation about AI in business eventually hits the same wall: it sounds impressive and vague. The way through is to make it specific  one department, one task, one dataset. A chatbot over your support FAQ is a better first project than 'an AI strategy.'",
      "Start where the data already lives. Customer questions, product catalogs, invoices, order histories  these are the raw material. An AI application is only as good as the information it can access, and grounding answers in your own data is also what makes them trustworthy.",
      "Guardrails come before scale. Decide what the AI is allowed to do autonomously, what requires a human review, and what it must never do. For a marketing site, that might mean: answer questions from the knowledge base, escalate anything uncertain, and never invent prices.",
      "Measure in business terms: minutes saved per week, tickets deflected, questions answered correctly. Small, measurable wins build the confidence  and the budget  for the next project. AI adoption is a series of small, real deployments, not one big transformation.",
    ],
  },
  {
    slug: "customer-portals-lower-support-volume",
    title: "Customer portals quietly reduce support volume  here's how",
    excerpt:
      "The cheapest customer-service improvement is often not more agents  it's letting customers answer their own questions. Portals do exactly that.",
    category: "Product",
    date: "2026-03-24",
    readTime: "5 min",
    body: [
      "Support volume is a product of information asymmetry: customers email because they can't see their order, their invoice, or their status. Every portal that exposes that information removes a category of ticket  often the most repetitive one.",
      "The pattern holds across industries. A distributor that shows live stock to customers stops answering 'do you have this in stock?' A clinic that sends automated appointment reminders cuts no-shows. A retailer that shows order tracking stops fielding 'where is my order?'",
      "The design principle is boring in the best way: give customers the same view your staff have, filtered to what's theirs. No admin UI, no sensitive fields  just their orders, documents, and statuses, up to date.",
      "The payoff compounds. Fewer tickets, shorter call times, and staff freed to handle the conversations that genuinely need a human. Portals are among the highest-return features a business can build, precisely because they remove the most repetitive work from both sides.",
    ],
  },
  {
    slug: "data-safety-ai-systems",
    title: "Keeping customer data safe when you add AI",
    excerpt:
      "AI doesn't change the rules of data protection  it raises the stakes. Know what your AI can access, and keep the human accountable.",
    category: "Security",
    date: "2026-03-02",
    readTime: "6 min",
    body: [
      "Adding AI to a business means giving software access to business data  and with access comes obligation. The uncomfortable truth is that data-protection rules were written before chatbots, so the practical standard is stricter, not looser: store only what you need, and know exactly what your AI can see.",
      "The first rule is minimization. If a chatbot answers order-status questions, it needs order numbers and statuses  not customer payment details. Scope AI access to the smallest dataset that does the job. This shrinks both your risk and your compliance burden.",
      "The second rule is logging. Every AI interaction that touches customer data should leave an audit trail: what was asked, what was returned, what was escalated. Logging is what turns 'the AI said something wrong' from a mystery into a fixable bug.",
      "The third rule is that a human stays accountable. AI can draft, recommend, and automate  but for decisions that affect customers or compliance, the final responsibility should sit with a person, and the system should make that handover explicit.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
