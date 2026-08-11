export type ProjectCategory =
  | "ERP & Business Systems"
  | "AI Applications"
  | "Automation"
  | "E-Commerce"
  | "Platforms"
  | "Data & Integrations";

export type ProjectStatus =
  | "Product"
  | "Platform"
  | "Prototype"
  | "Internal Tool"
  | "Solution";

export type ProjectIcon =
  | "warehouse"
  | "brain"
  | "bot"
  | "target"
  | "bus"
  | "car"
  | "workflow"
  | "search"
  | "bag"
  | "clapperboard"
  | "briefcase"
  | "sparkles";

export type ProjectHighlight = {
  title: string;
  description: string;
};

/** Rich content used on the dedicated per-project detail pages. */
export type ProjectDetails = {
  overview: string;
  highlights: ProjectHighlight[];
  outcome: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Short label shown in the card badge, e.g. "ERP". */
  badge: string;
  /** Role label under the title, e.g. "Business Management Platform". */
  label: string;
  status: ProjectStatus;
  description: string;
  capabilities: string[];
  icon: ProjectIcon;
  /** Accent tone used for the preview visual + icon chip. */
  tone: "blue" | "violet" | "cyan";
  /** Technology tags  only when accurate, never invented. */
  tags?: string[];
  /** Optional public link. When omitted, cards show a demo/coming-soon CTA. */
  link?: { href: string; label: string };
  /** Optional real screenshot. When omitted, an abstract visual is shown. */
  image?: { src: string; width: number; height: number; alt: string };
  /** Featured "more solutions" card rendered across every filter. */
  featured?: boolean;
  /** Detail-page content. Featured cards omit details. */
  details?: ProjectDetails;
};

export const projectCategories: ProjectCategory[] = [
  "ERP & Business Systems",
  "AI Applications",
  "Automation",
  "E-Commerce",
  "Platforms",
  "Data & Integrations",
];

export const projects: Project[] = [
  {
    slug: "sanitro-erp",
    title: "Sanitro ERP",
    category: "ERP & Business Systems",
    badge: "ERP",
    label: "Business Management Platform",
    status: "Product",
    description:
      "A modern ERP solution designed for sanitary and hardware businesses to manage products, inventory, sales, purchases, customers, suppliers, and daily operations from one centralized platform.",
    capabilities: [
      "Inventory and warehouse management",
      "Sales and purchase workflows",
      "Customer and supplier management",
      "Reporting and business dashboards",
      "Role-based administration",
    ],
    icon: "warehouse",
    tone: "blue",
    image: {
      src: "/projects/sanitro-erp.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for Sanitro ERP",
    },
    details: {
      overview:
        "Sanitro ERP consolidates the daily operations of sanitary and hardware businesses into a single platform. Products, stock levels, sales, purchases, customers, and suppliers are managed from one place, replacing scattered spreadsheets and disconnected tools with a structured, shared system of record that the whole team works from.",
      highlights: [
        {
          title: "Inventory and warehouse management",
          description:
            "Track products, variants, stock levels, and warehouse movements with a clear view of what is available and what needs reordering.",
        },
        {
          title: "Sales and purchase workflows",
          description:
            "Create sales orders and purchase orders that flow through confirmation, invoicing, and delivery without re-keying data between steps.",
        },
        {
          title: "Customer and supplier management",
          description:
            "Maintain customer and supplier records with contact details, pricing context, and transaction history in one place.",
        },
        {
          title: "Reporting and business dashboards",
          description:
            "Dashboards surface sales, stock, and purchasing activity so owners can see how the business is performing at a glance.",
        },
        {
          title: "Role-based administration",
          description:
            "Control access by role so staff see only what they need, while managers and administrators get full visibility and control.",
        },
      ],
      outcome:
        "One source of truth for operations, removing double entry and giving the business a clear, current picture of stock and sales.",
    },
  },
  {
    slug: "ai-interviewer-platform",
    title: "AI Interviewer Platform",
    category: "AI Applications",
    badge: "AI Applications",
    label: "AI-Powered Assessment Platform",
    status: "Prototype",
    description:
      "An intelligent interview and coding-assessment platform inspired by technical interview workflows, designed to help evaluate candidates through structured questions, coding challenges, and AI-assisted feedback.",
    capabilities: [
      "Technical interview workflows",
      "Coding challenge environment",
      "Candidate evaluation",
      "AI-assisted interview feedback",
      "Recruiter and admin dashboard",
    ],
    icon: "brain",
    tone: "violet",
    image: {
      src: "/projects/ai-interviewer-platform.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the AI Interviewer Platform",
    },
    details: {
      overview:
        "The AI Interviewer Platform structures the technical hiring process end to end. Recruiters define interview stages and questions, candidates work through them in a dedicated environment, and AI-assisted feedback helps evaluators focus on signal instead of transcription.",
      highlights: [
        {
          title: "Technical interview workflows",
          description:
            "Design structured interviews with defined stages, questions, and scoring criteria that every candidate experiences consistently.",
        },
        {
          title: "Coding challenge environment",
          description:
            "Candidates solve coding challenges in a browser-based environment with a familiar editor, so assessments test ability rather than tooling familiarity.",
        },
        {
          title: "Candidate evaluation",
          description:
            "Responses and challenge submissions are collected in one place, giving evaluators a single, organized record for each candidate.",
        },
        {
          title: "AI-assisted interview feedback",
          description:
            "AI summarizes and highlights key parts of responses, helping interviewers review evidence faster without replacing human judgment.",
        },
        {
          title: "Recruiter and admin dashboard",
          description:
            "Recruiters track candidates through the pipeline while administrators manage interviews, questions, and platform configuration.",
        },
      ],
      outcome:
        "A repeatable, fair assessment process that helps teams evaluate more candidates consistently and spend less time on administrative review.",
    },
  },
  {
    slug: "ai-chatbot-widget",
    title: "AI Chatbot Widget",
    category: "AI Applications",
    badge: "AI Applications",
    label: "Customer Experience Solution",
    status: "Product",
    description:
      "A customizable AI chatbot widget for websites that helps businesses answer customer questions, qualify leads, share product information, and route complex requests to human support teams.",
    capabilities: [
      "Website embed widget",
      "Knowledge-base responses",
      "Lead collection",
      "Conversation history",
      "Human support handover",
    ],
    icon: "bot",
    tone: "cyan",
    image: {
      src: "/projects/ai-chatbot-widget.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the AI Chatbot Widget",
    },
    details: {
      overview:
        "The AI Chatbot Widget gives websites an always-available front line for customer questions. Trained on the business's own knowledge, it answers common questions instantly, collects leads, and hands more complex conversations to human support with full context.",
      highlights: [
        {
          title: "Website embed widget",
          description:
            "A lightweight, customizable widget that matches the site's look and behavior, embeddable on any page without disrupting the experience.",
        },
        {
          title: "Knowledge-base responses",
          description:
            "Answers are grounded in the business's own documentation and product information, so responses stay accurate and on-brand.",
        },
        {
          title: "Lead collection",
          description:
            "Captures visitor contact details and intent during conversation, so no inquiry is lost when a visitor is not ready to commit.",
        },
        {
          title: "Conversation history",
          description:
            "Every conversation is recorded, giving the team full visibility of what customers ask and how well the bot answers.",
        },
        {
          title: "Human support handover",
          description:
            "Complex or sensitive requests are routed to a human agent with the conversation summary attached, so customers never repeat themselves.",
        },
      ],
      outcome:
        "Instant answers for common questions, fewer lost inquiries, and a support team that spends time on the conversations that need a human.",
    },
  },
  {
    slug: "b2b-lead-generation-platform",
    title: "B2B Lead Generation Platform",
    category: "Platforms",
    badge: "Platforms",
    label: "Sales Intelligence Tool",
    status: "Platform",
    description:
      "A B2B lead-generation solution that helps sales teams discover, organize, qualify, and manage potential business prospects through structured data and workflow-driven outreach.",
    capabilities: [
      "Prospect discovery",
      "Lead qualification",
      "Contact management",
      "Outreach workflow support",
      "Sales activity dashboard",
    ],
    icon: "target",
    tone: "blue",
    image: {
      src: "/projects/b2b-lead-generation-platform.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the B2B Lead Generation Platform",
    },
    details: {
      overview:
        "The B2B Lead Generation Platform turns scattered prospect research into an organized sales pipeline. Sales teams discover prospects, qualify them against structured criteria, manage contacts, and track outreach activity from one workspace.",
      highlights: [
        {
          title: "Prospect discovery",
          description:
            "Find and capture prospects from multiple sources into a structured list, with the fields your team actually filters on.",
        },
        {
          title: "Lead qualification",
          description:
            "Score and qualify leads against your criteria so reps focus energy on prospects most likely to convert.",
        },
        {
          title: "Contact management",
          description:
            "Keep contact records, notes, and history organized per prospect, avoiding the chaos of personal spreadsheets and inboxes.",
        },
        {
          title: "Outreach workflow support",
          description:
            "Track touchpoints across email and other channels so follow-ups happen on schedule and nothing falls through the cracks.",
        },
        {
          title: "Sales activity dashboard",
          description:
            "See pipeline movement and activity at a glance, giving managers visibility without manual reporting.",
        },
      ],
      outcome:
        "A structured, repeatable lead process that keeps every prospect tracked and makes sales activity visible to the whole team.",
    },
  },
  {
    slug: "van-pooling-school-transport",
    title: "Van Pooling & School Transport System",
    category: "Platforms",
    badge: "Platforms",
    label: "Mobility Management Platform",
    status: "Platform",
    description:
      "A transport coordination system for van pooling and school transportation, designed to improve route visibility, passenger management, scheduling, and communication for operators and families.",
    capabilities: [
      "Route and schedule management",
      "Driver and vehicle management",
      "Student or passenger records",
      "Pickup and drop-off coordination",
      "Admin dashboard and notifications",
    ],
    icon: "bus",
    tone: "violet",
    image: {
      src: "/projects/van-pooling-school-transport.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the Van Pooling & School Transport System",
    },
    details: {
      overview:
        "The Van Pooling & School Transport System helps transport operators coordinate daily runs with less manual back-and-forth. Routes and schedules are managed in one place, drivers and vehicles are tracked, and passengers are matched to trips with clear pickup and drop-off coordination.",
      highlights: [
        {
          title: "Route and schedule management",
          description:
            "Define routes, stops, and daily schedules that can be adjusted as passenger demand changes throughout the term.",
        },
        {
          title: "Driver and vehicle management",
          description:
            "Keep driver assignments and vehicle records organized, linking each trip to the right driver and vehicle.",
        },
        {
          title: "Student or passenger records",
          description:
            "Maintain passenger profiles and contact information, with records of who belongs to which route and schedule.",
        },
        {
          title: "Pickup and drop-off coordination",
          description:
            "Passengers are matched to stops and trips, reducing confusion about who is on which van and where they get on and off.",
        },
        {
          title: "Admin dashboard and notifications",
          description:
            "Operators see daily operations at a glance and can send schedule or delay notifications to relevant passengers and families.",
        },
      ],
      outcome:
        "Fewer coordination mistakes, clearer daily operations, and reliable communication between operators, drivers, and families.",
    },
  },
  {
    slug: "onestopcar",
    title: "OneStopCar",
    category: "E-Commerce",
    badge: "E-Commerce",
    label: "Automotive Commerce Platform",
    status: "Product",
    description:
      "A modern automotive e-commerce platform built to simplify the discovery, management, and online sale of automotive products and services.",
    capabilities: [
      "Product catalog and search",
      "Category and brand management",
      "Customer accounts",
      "Order management",
      "Administrative dashboard",
    ],
    icon: "car",
    tone: "cyan",
    image: {
      src: "/projects/onestopcar.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for OneStopCar",
    },
    details: {
      overview:
        "OneStopCar is an automotive commerce platform that brings product discovery and online sales together. Customers search a structured catalog of automotive products and services, manage accounts, and place orders, while administrators control categories, brands, and fulfillment from a single dashboard.",
      highlights: [
        {
          title: "Product catalog and search",
          description:
            "A browsable, searchable catalog makes it easy for customers to find the right products and services quickly.",
        },
        {
          title: "Category and brand management",
          description:
            "Administrators organize products by category and brand, keeping the storefront structured and easy to navigate.",
        },
        {
          title: "Customer accounts",
          description:
            "Customers create accounts to track orders, save details, and return with a consistent, personal experience.",
        },
        {
          title: "Order management",
          description:
            "Orders flow from placement through processing with clear status, keeping the team aligned on fulfillment.",
        },
        {
          title: "Administrative dashboard",
          description:
            "A central dashboard gives the team control over catalog, orders, and operations without touching code.",
        },
      ],
      outcome:
        "A complete online selling channel for automotive products, with a structured catalog and streamlined order flow.",
    },
  },
  {
    slug: "n8n-automation-solutions",
    title: "n8n Automation Solutions",
    category: "Automation",
    badge: "Automation",
    label: "Workflow Automation",
    status: "Solution",
    description:
      "Custom workflow automation solutions using n8n to connect business tools, reduce repetitive tasks, trigger notifications, synchronize data, and streamline operational processes.",
    capabilities: [
      "CRM and lead automation",
      "Email and WhatsApp notifications",
      "Data synchronization",
      "Approval workflows",
      "Scheduled reporting",
    ],
    icon: "workflow",
    tone: "blue",
    tags: ["n8n"],
    image: {
      src: "/projects/n8n-automation-solutions.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for n8n Automation Solutions",
    },
    details: {
      overview:
        "n8n Automation Solutions connects the tools a business already uses and removes the manual steps between them. Using n8n, we design workflows that move data, trigger notifications, and run scheduled processes so repetitive operational work happens automatically.",
      highlights: [
        {
          title: "CRM and lead automation",
          description:
            "Capture leads from web forms and channels, qualify them, and push them into your CRM without manual entry.",
        },
        {
          title: "Email and WhatsApp notifications",
          description:
            "Trigger timely notifications across email and WhatsApp so the right people hear about important events as they happen.",
        },
        {
          title: "Data synchronization",
          description:
            "Keep records in sync between systems, eliminating the copy-paste drift between your tools of record.",
        },
        {
          title: "Approval workflows",
          description:
            "Route requests through defined approval steps with reminders, so decisions move forward instead of stalling in inboxes.",
        },
        {
          title: "Scheduled reporting",
          description:
            "Generate and deliver regular reports automatically, replacing manual weekly compilation with a scheduled process.",
        },
      ],
      outcome:
        "Operational tasks run themselves, data stays consistent across tools, and teams reclaim hours previously spent on manual handoffs.",
    },
  },
  {
    slug: "web-scraper-data-collection",
    title: "Web Scraper & Data Collection Tool",
    category: "Data & Integrations",
    badge: "Data & Integrations",
    label: "Data Automation Tool",
    status: "Internal Tool",
    description:
      "A configurable data-collection solution for gathering structured public web data, monitoring changes, organizing records, and supporting research or business intelligence workflows.",
    capabilities: [
      "Structured data extraction",
      "Scheduled collection",
      "Data cleaning and export",
      "Change monitoring",
      "Dashboard-ready data",
    ],
    icon: "search",
    tone: "violet",
    image: {
      src: "/projects/web-scraper-data-collection.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the Web Scraper & Data Collection Tool",
    },
    details: {
      overview:
        "The Web Scraper & Data Collection Tool turns public web data into structured, reusable records. Collection targets are configured once, data is gathered on a schedule, cleaned, and exported in formats that feed straight into research and business intelligence workflows.",
      highlights: [
        {
          title: "Structured data extraction",
          description:
            "Extract defined fields from public web pages into consistent, structured records instead of raw, unstructured text.",
        },
        {
          title: "Scheduled collection",
          description:
            "Runs collection on a schedule, keeping datasets fresh without manual re-runs or ad-hoc copy-pasting.",
        },
        {
          title: "Data cleaning and export",
          description:
            "Deduplicate, normalize, and export records in common formats so downstream tools can consume them directly.",
        },
        {
          title: "Change monitoring",
          description:
            "Track when monitored pages or values change, alerting on meaningful differences rather than every edit.",
        },
        {
          title: "Dashboard-ready data",
          description:
            "Output is shaped for dashboards and analysis, reducing the transformation work usually needed before data is useful.",
        },
      ],
      outcome:
        "Reliable, structured data on a schedule, giving research and BI teams a dependable source instead of manual collection.",
    },
  },
  {
    slug: "shopify-product-crawler",
    title: "Shopify Product Crawler",
    category: "Data & Integrations",
    badge: "Data & Integrations",
    label: "E-Commerce Intelligence Tool",
    status: "Internal Tool",
    description:
      "A Shopify-focused data crawler built to collect and organize publicly available product, category, pricing, and catalog information for research, analysis, and market monitoring.",
    capabilities: [
      "Product catalog collection",
      "Category and collection discovery",
      "Pricing and availability tracking",
      "Structured export",
      "Research and analysis workflow",
    ],
    icon: "bag",
    tone: "cyan",
    tags: ["Shopify"],
    image: {
      src: "/projects/shopify-product-crawler.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the Shopify Product Crawler",
    },
    details: {
      overview:
        "The Shopify Product Crawler collects publicly available catalog information from Shopify stores for market research and monitoring. Product details, categories, pricing, and availability are gathered into structured records that can be exported for analysis.",
      highlights: [
        {
          title: "Product catalog collection",
          description:
            "Collect product listings with their publicly shown attributes into a structured, deduplicated catalog.",
        },
        {
          title: "Category and collection discovery",
          description:
            "Discover how stores organize products into categories and collections, preserving that structure in the collected data.",
        },
        {
          title: "Pricing and availability tracking",
          description:
            "Track published pricing and availability over time, giving a historical view for market monitoring.",
        },
        {
          title: "Structured export",
          description:
            "Export collected records in clean, structured formats ready for spreadsheets, databases, or analysis tools.",
        },
        {
          title: "Research and analysis workflow",
          description:
            "Designed to feed research and competitive analysis workflows rather than one-off manual browsing.",
        },
      ],
      outcome:
        "Organized, repeatable market data from public Shopify catalogs, supporting pricing and assortment research.",
    },
  },
  {
    slug: "multimedia-ecommerce-platform",
    title: "Multimedia E-Commerce Platform",
    category: "E-Commerce",
    badge: "E-Commerce",
    label: "Digital Commerce Solution",
    status: "Prototype",
    description:
      "A multimedia-focused e-commerce platform designed for managing and selling products with rich images, video, product details, categories, customer accounts, and streamlined ordering.",
    capabilities: [
      "Rich media product listings",
      "Product and category management",
      "Customer accounts",
      "Cart and checkout workflow",
      "E-commerce administration",
    ],
    icon: "clapperboard",
    tone: "violet",
    image: {
      src: "/projects/multimedia-ecommerce-platform.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the Multimedia E-Commerce Platform",
    },
    details: {
      overview:
        "The Multimedia E-Commerce Platform is built for products that sell better with rich media. Listings support images and video alongside detailed product information, organized into categories with customer accounts and a streamlined cart-and-checkout flow.",
      highlights: [
        {
          title: "Rich media product listings",
          description:
            "Listings combine images, video, and detailed product information so customers understand the product before they buy.",
        },
        {
          title: "Product and category management",
          description:
            "Administrators manage products and categories in a structured way, keeping the storefront organized as the catalog grows.",
        },
        {
          title: "Customer accounts",
          description:
            "Customers can create accounts to manage their details and track their purchases across visits.",
        },
        {
          title: "Cart and checkout workflow",
          description:
            "A clear cart and checkout flow moves customers from selection to order without unnecessary friction.",
        },
        {
          title: "E-commerce administration",
          description:
            "A central admin area covers catalog, orders, and operations, so the store is managed without developer involvement.",
        },
      ],
      outcome:
        "A media-rich storefront that presents products at their best and converts browsing into structured, manageable orders.",
    },
  },
  {
    slug: "job-hunting-platform",
    title: "Job Hunting Platform",
    category: "Platforms",
    badge: "Platforms",
    label: "Career & Recruitment Platform",
    status: "Platform",
    description:
      "A modern job-hunting platform that connects candidates with relevant opportunities while providing tools for job discovery, applications, profiles, employer listings, and application tracking.",
    capabilities: [
      "Candidate profiles",
      "Job search and filters",
      "Application tracking",
      "Employer job posting",
      "Admin and moderation tools",
    ],
    icon: "briefcase",
    tone: "blue",
    image: {
      src: "/projects/job-hunting-platform.png",
      width: 640,
      height: 400,
      alt: "Abstract dashboard mockup for the Job Hunting Platform",
    },
    details: {
      overview:
        "The Job Hunting Platform connects candidates with relevant opportunities. Candidates build profiles, search and filter jobs, and track applications, while employers post roles and administrators moderate content to keep the marketplace healthy.",
      highlights: [
        {
          title: "Candidate profiles",
          description:
            "Candidates build structured profiles that present their experience and make applying faster and more consistent.",
        },
        {
          title: "Job search and filters",
          description:
            "Search and filter roles by the criteria that matter, so candidates find relevant opportunities without wading through everything.",
        },
        {
          title: "Application tracking",
          description:
            "Candidates see where each application stands, and employers see applications organized by role.",
        },
        {
          title: "Employer job posting",
          description:
            "Employers publish roles with structured details, keeping listings consistent and searchable.",
        },
        {
          title: "Admin and moderation tools",
          description:
            "Administrators review and moderate listings and activity, keeping the platform trustworthy and clean.",
        },
      ],
      outcome:
        "A structured marketplace where candidates find relevant roles and employers reach qualified applicants with less noise.",
    },
  },
  {
    slug: "more-custom-solutions",
    title: "More Custom Solutions",
    category: "Platforms",
    badge: "Custom Software",
    label: "Custom Software & Digital Transformation",
    status: "Solution",
    description:
      "Veyrivo Technologies also develops custom dashboards, internal tools, APIs, CRM systems, business portals, AI assistants, automation workflows, and scalable platforms tailored to specific business requirements.",
    capabilities: [
      "Custom dashboards and internal tools",
      "APIs and CRM systems",
      "Business portals",
      "AI assistants and automation workflows",
      "Scalable custom platforms",
    ],
    icon: "sparkles",
    tone: "violet",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
