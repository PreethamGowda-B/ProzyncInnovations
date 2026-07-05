/* src/constants/navigation.ts */
import { NavItem } from "../types";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Products",
    href: "/products",
    isMegaMenu: true,
    megaMenuSections: [
      {
        title: "Flagship Product",
        items: [
          {
            title: "SmartERP",
            description: "Integrated cloud management platform for complete business operations.",
            href: "/products/smarterp",
            icon: "smarterp",
            status: "active"
          }
        ]
      },
      {
        title: "Business Solutions",
        items: [
          { title: "CRM", description: "Customer relationship management and sales pipelines.", href: "/products#crm", status: "coming-soon" },
          { title: "HRMS", description: "Human resource management and employee lifecycle.", href: "/products#hrms", status: "coming-soon" },
          { title: "Inventory", description: "Warehouse control and real-time stock tracking.", href: "/products#inventory", status: "coming-soon" },
          { title: "Accounting", description: "General ledger, invoicing, and financial reporting.", href: "/products#accounting", status: "coming-soon" },
          { title: "Billing", description: "Subscription billing and client invoicing engines.", href: "/products#billing", status: "coming-soon" }
        ]
      },
      {
        title: "AI Products",
        items: [
          { title: "AI Assistant", description: "Context-aware help and natural language operations.", href: "/products#ai-assistant", status: "planned" },
          { title: "Automation Platform", description: "Cross-app workflow triggers and automated processes.", href: "/products#automation", status: "planned" },
          { title: "Analytics", description: "Intelligent predictions and forecasting algorithms.", href: "/products#analytics", status: "planned" }
        ]
      },
      {
        title: "Cloud Solutions",
        items: [
          { title: "Cloud Migration", description: "Fast transit, database transformation, secure hosting.", href: "/products#cloud-migration", status: "planned" },
          { title: "Infrastructure", description: "Distributed deployment templates and redundancy.", href: "/products#infrastructure", status: "planned" },
          { title: "API Integration", description: "Enterprise gateways and webhooks engine.", href: "/products#api-integration", status: "planned" }
        ]
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    isMegaMenu: true,
    megaMenuSections: [
      {
        title: "Enterprise Solutions",
        items: [
          { title: "Enterprise Software", description: "Custom business-wide tools and architectures.", href: "/services#enterprise" },
          { title: "ERP Development", description: "Tailored module assembly and workflow engineering.", href: "/services#erp-dev" },
          { title: "SaaS Platform Development", description: "Multi-tenant platforms built to scale dynamically.", href: "/services#saas" },
          { title: "Business Automation", description: "Operational process automation engines.", href: "/services#automation" }
        ]
      },
      {
        title: "Development & Engineering",
        items: [
          { title: "Custom Software", description: "Tailor-made apps addressing unique needs.", href: "/services#custom-software" },
          { title: "Web Applications", description: "High-performance web apps in Next.js & React.", href: "/services#web-apps" },
          { title: "Mobile Applications", description: "Cross-platform iOS and Android deployments.", href: "/services#mobile-apps" },
          { title: "API Development", description: "Secure gateways and third-party data routes.", href: "/services#api" }
        ]
      },
      {
        title: "AI & Cloud Integration",
        items: [
          { title: "AI Solutions", description: "Workflow intelligence and document scanners.", href: "/services#ai" },
          { title: "Cloud Integration", description: "Scalable hosting, storage, and databases.", href: "/services#cloud" },
          { title: "Database Design", description: "Relational architecture and storage pipelines.", href: "/services#database" },
          { title: "Software Modernization", description: "Updating legacy apps into modern stacks.", href: "/services#modernization" }
        ]
      },
      {
        title: "Design & Consulting",
        items: [
          { title: "UI/UX Design", description: "Stunning, high-end interfaces and smooth wireframes.", href: "/services#ui-ux" },
          { title: "Enterprise Consulting", description: "Strategic tech stack advice for scale.", href: "/services#consulting" },
          { title: "Maintenance & Support", description: "Ongoing operational security and support.", href: "/services#support" }
        ]
      }
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    isMegaMenu: true,
    megaMenuSections: [
      {
        title: "Key Verticals",
        items: [
          { title: "Manufacturing", description: "Production line sync and inventory tracking.", href: "/industries#manufacturing" },
          { title: "Healthcare", description: "Scheduler interfaces and staff timetables.", href: "/industries#healthcare" },
          { title: "Retail", description: "Omnichannel inventory, sales, and billing.", href: "/industries#retail" },
          { title: "Education", description: "Class registers, reporting, and administration.", href: "/industries#education" }
        ]
      },
      {
        title: "Supportive Sectors",
        items: [
          { title: "Construction", description: "Material logs, staff payroll, task boards.", href: "/industries#construction" },
          { title: "Hospitality", description: "Booking logs and inventory tracking.", href: "/industries#hospitality" },
          { title: "Logistics", description: "Route maps and shipment progress trackers.", href: "/industries#logistics" },
          { title: "Professional Services", description: "Billing tracking, task sheets, CRM integration.", href: "/industries#professional-services" }
        ]
      }
    ]
  },
  {
    label: "Portfolio",
    href: "/portfolio"
  },
  {
    label: "Resources",
    href: "/blog",
    isMegaMenu: true,
    megaMenuSections: [
      {
        title: "Content Center",
        items: [
          { title: "Blog & Insights", description: "Articles and case studies on modern software design.", href: "/blog" },
          { title: "Documentation", description: "Implementation, config, and operational guides.", href: "/blog#docs" },
          { title: "FAQ Center", description: "Answers to common development and software questions.", href: "/blog#faq" }
        ]
      },
      {
        title: "Downloads",
        items: [
          { title: "Product Brochure", description: "Overview of SmartERP modules and architecture.", href: "/blog#downloads" },
          { title: "Company Profile", description: "Introduction to Prozync values and practices.", href: "/blog#downloads" }
        ]
      }
    ]
  },
  {
    label: "Careers",
    href: "/careers"
  },
  {
    label: "Contact",
    href: "/contact"
  }
];
