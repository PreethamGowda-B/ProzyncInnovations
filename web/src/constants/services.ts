/* src/constants/services.ts */
import { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: "enterprise-software",
    name: "Enterprise Software Development",
    shortDescription: "Custom, secure, and highly scalable software solutions designed to run core operations for large-scale organizations.",
    description: "We build enterprise-grade software that acts as the backbone of your business. Our solutions focus on database security, role-based access controls, robust API integrations, and scalable architectures designed for thousands of concurrent users.",
    icon: "database",
    category: "enterprise",
    capabilities: [
      { title: "Custom ERP Architectures", description: "Design modular databases that mirror your real-world processes." },
      { title: "Legacy System Upgrades", description: "Transform obsolete platforms into modern cloud stacks with zero data loss." },
      { title: "Distributed Database Sync", description: "Implement secure databases across multiple locations and operations." }
    ],
    href: "/services#enterprise"
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    shortDescription: "Tailor-made applications built to address unique business challenges and streamline operational workflows.",
    description: "When template solutions fail, we design and build custom software that fits your business exactly. We analyze your team's workflows and design high-performance digital tools that eliminate bottleneck steps and increase day-to-day productivity.",
    icon: "code",
    category: "development",
    capabilities: [
      { title: "Full-Stack Web Apps", description: "Fast, responsive web tools using modern, search-engine friendly frameworks." },
      { title: "Mobile Deployments", description: "Cross-platform iOS and Android apps built on optimized databases." },
      { title: "Custom Admin Dashboards", description: "Beautiful control interfaces with widgets and visual KPI tracking." }
    ],
    href: "/services#custom-software"
  },
  {
    id: "erp-development",
    name: "ERP Development",
    shortDescription: "Custom module assembly, workflow integration, and unified business databases built for specific industries.",
    description: "We engineering modular ERP systems that grow with your company. By creating custom modules for sales, logistics, inventory, and payroll, we eliminate duplicate data entries and provide managers with a single source of operational truth.",
    icon: "smarterp",
    category: "enterprise",
    capabilities: [
      { title: "Modular Database Assembly", description: "Select and customize modules needed for your sector." },
      { title: "Third-Party Synced Loops", description: "Connect inventory updates directly to billing and customer notifications." },
      { title: "Audit-Ready Logs", description: "Automatic change tracking on critical tables for full regulatory compliance." }
    ],
    href: "/services#erp-dev"
  },
  {
    id: "saas-development",
    name: "SaaS Platform Development",
    shortDescription: "Scale-ready multi-tenant application design, user role management, subscription loops, and cloud deployments.",
    description: "Turn your ideas into profitable software products. We engineer multi-tenant SaaS structures featuring secure user registration, subscription models, developer webhooks, and cloud-native databases designed to grow dynamically.",
    icon: "globe",
    category: "enterprise",
    capabilities: [
      { title: "Multi-Tenant Architecture", description: "Separate customer database scopes securely within a shared codebase." },
      { title: "Billing Loop Integrations", description: "Set up subscription payment gateways and custom invoice templates." },
      { title: "Usage Analytics & Alerts", description: "Track application speed, error counts, and tenant volume changes." }
    ],
    href: "/services#saas"
  },
  {
    id: "ai-solutions",
    name: "Artificial Intelligence Solutions",
    shortDescription: "Inject sensible workflow automation, document processing, and predictive trend analysis into your stack.",
    description: "We deploy AI systems that solve real business problems without the marketing hype. By integrating text reading, data anomaly scanners, and scheduling intelligence, we help teams make decisions backed by solid analytics.",
    icon: "cpu",
    category: "ai-cloud",
    capabilities: [
      { title: "Document Scanners & OCR", description: "Read physical bills, forms, and receipts and output clean database records." },
      { title: "Operational Anomaly Scans", description: "Identify inventory supply errors or unusual invoice transactions." },
      { title: "Intelligent Process Sync", description: "Automatically forecast future stock limits based on customer purchasing history." }
    ],
    href: "/services#ai"
  },
  {
    id: "cloud-integration",
    name: "Cloud Integration & Architecture",
    shortDescription: "Deploy reliable distributed hosting, secure database backups, and redundancy schemes.",
    description: "Migrate your systems into modern cloud infrastructure. We design AWS and Docker environments featuring load balancers, secure database loops, daily backup pipelines, and disaster recovery processes that guarantee high availability.",
    icon: "cloud",
    category: "ai-cloud",
    capabilities: [
      { title: "Secure Cloud Migrations", description: "Transition database tables from physical hardware to cloud nodes." },
      { title: "Redundancy & Load Balancing", description: "Ensure websites remain accessible during unexpected user volume spikes." },
      { title: "Automated Data Backups", description: "Scaffold daily, encrypted table copies stored across regional backups." }
    ],
    href: "/services#cloud"
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    shortDescription: "Stunning, high-end interfaces and comprehensive usability wireframes designed to delight users.",
    description: "We believe enterprise software should feel premium and intuitive. Our design process starts with user interviews and flow maps, moving into pixel-perfect frosted glass interfaces, dark luxury color boards, and smooth, responsive micro-animations.",
    icon: "layout",
    category: "design-consulting",
    capabilities: [
      { title: "Comprehensive Usability Scopes", description: "Build logical flow diagrams and wireframes to outline software steps." },
      { title: "Premium Dark Aesthetics", description: "Design beautiful dark-mode interface mockups and design token maps." },
      { title: "Interactive Prototypes", description: "Create clickable component simulations before developers write code." }
    ],
    href: "/services#ui-ux"
  },
  {
    id: "maintenance-support",
    name: "Maintenance & Continuous Support",
    shortDescription: "Ongoing security patches, bug fixes, database audits, and technical assistance.",
    description: "We establish long-term partnerships with our clients. Our engineering support teams monitor application load times, apply secure dependencies updates, optimize database tables, and coordinate updates so your tools run cleanly year after year.",
    icon: "shield",
    category: "design-consulting",
    capabilities: [
      { title: "Real-Time Log Monitoring", description: "Identify and resolve software errors before they disrupt operations." },
      { title: "Security Patch Audits", description: "Scan and update application files to eliminate vulnerabilities." },
      { title: "Database Query Tuning", description: "Audit database tables and indexing to ensure rapid search times." }
    ],
    href: "/services#support"
  }
];
