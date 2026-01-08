export interface ServiceType {
  slug: string;
  title: string;
  description: string;
  text: string;
  image: string[];
  banner: string;
  modules: string[];
  exampleProjects: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const services: ServiceType[] = [
  // 1. Website Development
  {
    slug: "website-development",
    title: "Website Design & Development",
    description:
      "Corporate websites, landing pages, and multi-language sites built with world-class UI/UX.",
    text: "AKODTECH delivers modern, scalable, and SEO-optimized websites tailored for global businesses. Every website is built with blazing speed, responsiveness, clean architecture, and conversion-focused UI. Whether it's a corporate site, catalog, or landing page, we help businesses build strong digital presence.",
    image: [
      "/dummy/website1.jpg",
      "/dummy/website2.jpg",
      "/dummy/website3.jpg",
      "/dummy/website4.jpg",
    ],
    banner: "/dummy/website-banner.jpg",

    modules: [
      "Corporate & Company Profile Websites",
      "Multi-Language Websites (EN/AR/FR)",
      "Product Catalog Websites",
      "Landing Page Development",
      "React / Next.js Frontend Development",
      "Custom Admin Panel (CMS)",
      "SEO-Optimized Website Structure",
      "UI/UX Wireframing & Prototyping",
      "Speed Optimization & Security",
      "API Integrations",
    ],

    exampleProjects: [
      {
        title: "Logistics Company Website",
        description:
          "Developed a multi-language corporate website with service pages, inquiry flow, and CMS control panel.",
        image: "/dummy/project-web1.jpg",
      },
      {
        title: "Tech Startup Showcase Website",
        description:
          "Created a modern landing page with animations, pricing tables, and lead capture forms.",
        image: "/dummy/project-web2.jpg",
      },
      {
        title: "Corporate Industrial Website",
        description:
          "Built a high-performance product catalog website with advanced filtering and SEO structure.",
        image: "/dummy/project-web3.jpg",
      },
    ],
  },

  // 2. E-Commerce Development
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    description:
      "Secure, scalable, and high-conversion e-commerce solutions built with modern technologies.",
    text: "We build e-commerce platforms designed for real-world business operations. Whether Shopify, WooCommerce, or custom MERN, our systems support secure payment gateways, inventory automation, and analytics. We ensure customers enjoy smooth, fast, and secure shopping experiences.",
    image: [
      "/dummy/ecom1.jpg",
      "/dummy/ecom2.jpg",
      "/dummy/ecom3.jpg",
      "/dummy/ecom4.jpg",
    ],
    banner: "/dummy/ecom-banner.jpg",

    modules: [
      "Shopify Store Setup",
      "WooCommerce Development",
      "Custom MERN E-Commerce Platform",
      "Admin Dashboard with Roles",
      "Inventory & Order Management",
      "Payment Gateway Integration",
      "Cart, Checkout & Wishlist Flow",
      "Product Variants & Stock Control",
      "Coupons & Discount System",
      "Customer Login & Analytics",
    ],

    exampleProjects: [
      {
        title: "Fashion Brand Shopify Store",
        description:
          "Built a high-end Shopify store with variant management, lookbook, and automated email flows.",
        image: "/dummy/project-ecom1.jpg",
      },
      {
        title: "Electronics E-Commerce Platform",
        description:
          "Developed a MERN-based store with inventory sync, order tracking, and full admin control.",
        image: "/dummy/project-ecom2.jpg",
      },
      {
        title: "Grocery Delivery System",
        description:
          "Custom-built system with delivery slots, wallet system, and zone-based delivery charges.",
        image: "/dummy/project-ecom3.jpg",
      },
    ],
  },

  // 3. Custom Software / ERP / CRM
  {
    slug: "enterprise-software",
    title: "Custom Software & Enterprise Solutions",
    description:
      "CRM, ERP, HRMS, Warehouse, and Automation Systems tailored for enterprise workflows.",
    text: "AKODTECH develops powerful enterprise-grade software designed to automate operations, improve efficiency, and support large-scale business processes. Our systems are built using secure backend architecture, scalable APIs, and a user-friendly dashboard experience.",
    image: [
      "/dummy/software1.jpg",
      "/dummy/software2.jpg",
      "/dummy/software3.jpg",
    ],
    banner: "/dummy/software-banner.jpg",

    modules: [
      "Custom CRM (Sales, Leads, Tickets)",
      "ERP System (Inventory, HR, Purchase, Finance)",
      "Warehouse Management System (WMS)",
      "Attendance & Payroll Automation",
      "Project & Task Management Tools",
      "Document Control System (DMS)",
      "Role-Based Access Control (RBAC)",
      "Barcode & QR Code Integration",
      "Dashboard Analytics & Reporting",
      "Automated Notification System",
    ],

    exampleProjects: [
      {
        title: "Real Estate CRM Platform",
        description:
          "A full CRM with lead funnel, reminders, sales stages, and internal communication tools.",
        image: "/dummy/project-crm1.jpg",
      },
      {
        title: "Manufacturing ERP System",
        description:
          "Designed a complete ERP for stock handling, purchasing, production, HR, and vendor management.",
        image: "/dummy/project-erp1.jpg",
      },
      {
        title: "Warehouse Automation System",
        description:
          "Built a WMS with bin allocation, inward/outward tracking, and barcode scanning.",
        image: "/dummy/project-wms1.jpg",
      },
    ],
  },

  // 4. AI & Automation
  {
    slug: "ai-automation",
    title: "AI & Automation Solutions",
    description:
      "AI chatbots, document intelligence, automation bots, and predictive analytics.",
    text: "Our AI solutions automate repetitive processes, improve customer service, and assist teams with smart decision-making. We integrate OpenAI, machine learning, and workflow automation tools to deliver real-time intelligence and advanced automation capabilities.",
    image: ["/dummy/ai1.jpg", "/dummy/ai2.jpg", "/dummy/ai3.jpg"],
    banner: "/dummy/ai-banner.jpg",

    modules: [
      "AI Chatbots for Websites & WhatsApp",
      "AI Lead Qualification",
      "Document AI (Auto-Summary, Extraction)",
      "AI Email & Support Auto-Response",
      "AI Recommendation Engine",
      "Workflow Automation Bots",
      "AI-Based Data Analytics",
      "Customer Intent Detection",
      "Predictive Sales Forecasting",
      "Voice AI Integration",
    ],

    exampleProjects: [
      {
        title: "AI Customer Support Bot",
        description:
          "Reduced customer support workload by 70% using automated FAQs, tracking, and live chat escalation.",
        image: "/dummy/project-ai1.jpg",
      },
      {
        title: "AI Lead Assistant for Real Estate",
        description:
          "A smart agent that chats with leads, qualifies them, and sends data to CRM.",
        image: "/dummy/project-ai2.jpg",
      },
      {
        title: "Document Intelligence System",
        description:
          "Reads PDFs, invoices, and contracts and extracts key data automatically.",
        image: "/dummy/project-ai3.jpg",
      },
    ],
  },

  // 5. Digital Marketing
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    description:
      "SEO, Google Ads, Meta Ads, content creation, and brand growth strategies.",
    text: "AKODTECH delivers growth-oriented digital marketing campaigns powered by SEO optimization, paid ads, content strategies, and data-driven planning. Our goal is to improve brand reach, generate leads, and maximize ROI.",
    image: ["/dummy/marketing1.jpg", "/dummy/marketing2.jpg"],
    banner: "/dummy/marketing-banner.jpg",

    modules: [
      "SEO (Technical, On-Page, Off-Page)",
      "Google Ads (PPC)",
      "Facebook & Instagram Ads",
      "Lead Generation Campaigns",
      "Social Media Branding",
      "Poster & Creative Design",
      "Content Writing & Blogging",
      "YouTube SEO & Management",
      "Email Marketing",
      "Brand Messaging & Positioning",
    ],

    exampleProjects: [
      {
        title: "Digital Campaign for Education Institute",
        description:
          "Generated 450+ leads in 30 days using Google Ads & landing page optimization.",
        image: "/dummy/project-marketing1.jpg",
      },
      {
        title: "SEO Ranking for Corporate Website",
        description:
          "Ranked 30+ keywords on Google Page 1, increasing organic traffic by 300%.",
        image: "/dummy/project-marketing2.jpg",
      },
      {
        title: "Social Branding for Retail Brand",
        description:
          "Created 60+ creative posts, banners, and reel concepts that boosted engagement.",
        image: "/dummy/project-marketing3.jpg",
      },
    ],
  },

  // 6. Branding & Creative
  {
    slug: "branding-design",
    title: "Branding & Creative Design",
    description:
      "Logo design, company profile, brochures, banners, packaging, and creative assets.",
    text: "We craft visually appealing branding that communicates your company’s identity. From logo design to full corporate identity kits and promotional creative design, AKODTECH helps brands build credibility and consistency.",
    image: ["/dummy/branding1.jpg", "/dummy/branding2.jpg"],
    banner: "/dummy/branding-banner.jpg",

    modules: [
      "Logo & Brand Identity",
      "Company Profiles (PDF)",
      "Brochures & Catalogs",
      "Social Media Kits",
      "Business Cards & Stationery",
      "Posters & Banners",
      "Packaging & Label Design",
      "Print-Ready Designs",
      "Color & Typography Guide",
    ],

    exampleProjects: [
      {
        title: "Brand Identity for Startup",
        description:
          "Delivered a full brand kit including logo, colors, typography, and templates.",
        image: "/dummy/project-branding1.jpg",
      },
      {
        title: "Corporate Company Profile",
        description:
          "Designed a 20-page high-end company profile with service sections and case studies.",
        image: "/dummy/project-branding2.jpg",
      },
      {
        title: "Social Media Templates",
        description:
          "Created reusable templates for promotions, updates, and campaigns.",
        image: "/dummy/project-branding3.jpg",
      },
    ],
  },
];
