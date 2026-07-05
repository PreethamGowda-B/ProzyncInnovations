/* src/constants/products.ts */
import { Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: "smarterp",
    name: "SmartERP",
    oneLiner: "Intelligent Cloud Management Platform",
    description: "SmartERP is an integrated, modular cloud platform designed to unify business workflows. From inventory tracking and employee schedules to payroll engines and live analytics, SmartERP brings clarity and efficiency to organizational operations.",
    icon: "smarterp",
    isFlagship: true,
    status: "active",
    href: "/products/smarterp",
    features: [
      { title: "Inventory Management", description: "Real-time stock tracking, automated alerts, and supplier coordination." },
      { title: "Employee & Attendance", description: "Biometric and digital registers, shift logs, and role control." },
      { title: "Payroll & Job Tracking", description: "Automated calculations, tax reports, and task-linked metrics." },
      { title: "Interactive Dashboards", description: "Live tracking feeds, clean statistics, and custom reports." },
      { title: "Role-Based Security", description: "Granular authorization levels for full secure database operations." },
      { title: "Cloud Architecture", description: "Hosted on secure database infrastructure, accessible from any device." }
    ],
    modules: [
      {
        id: "dashboard",
        name: "Dashboard",
        description: "A centralized command center displaying live operational KPIs and visual analytics.",
        benefit: "Instantly understand business performance with custom widgets and notifications."
      },
      {
        id: "inventory",
        name: "Inventory",
        description: "Automated stock thresholds, batch tracking, and direct purchase orders.",
        benefit: "Reduce warehouse waste, prevent stockouts, and manage suppliers seamlessly."
      },
      {
        id: "payroll",
        name: "Payroll",
        description: "Tax deductions, automated salary disbursement files, and expense processing.",
        benefit: "Ensure error-free compliance, reduce manual math, and track overhead expenditures."
      },
      {
        id: "attendance",
        name: "Attendance",
        description: "Check-in logs, leave request calendars, and overtime calculations.",
        benefit: "Track employee time sheets and feed accurate numbers directly into the payroll engine."
      },
      {
        id: "reports",
        name: "Reports",
        description: "Custom tabular filters, downloadable PDFs, and exportable CSV documents.",
        benefit: "Generate audit-ready documentation and financial statements in seconds."
      },
      {
        id: "analytics",
        name: "Analytics",
        description: "Flow charts, usage patterns, and historical trend forecasting.",
        benefit: "Predict supply shortages, track growth indices, and execute plans based on solid data."
      },
      {
        id: "sales",
        name: "Sales",
        description: "Billing creation, customer registries, payment receipts, and delivery notes.",
        benefit: "Fast invoicing and streamlined deal tracking directly connected to stock updates."
      }
    ]
  },
  {
    id: "crm",
    name: "CRM",
    oneLiner: "Customer Relationship & Pipeline Suite",
    description: "Manage client communications, log interactions, analyze deal stages, and close deals faster.",
    icon: "users",
    status: "coming-soon",
    href: "/products#crm",
    features: [
      { title: "Lead Pipelines", description: "Drag-and-drop board for deal tracking." },
      { title: "Activity Logs", description: "Record emails, calls, and meetings dynamically." }
    ]
  },
  {
    id: "hrms",
    name: "HRMS",
    oneLiner: "Human Resource & Talent Lifecycle",
    description: "From hiring campaigns to retirement, handle staff files, performance reviews, and training logs.",
    icon: "briefcase",
    status: "coming-soon",
    href: "/products#hrms",
    features: [
      { title: "Employee Directory", description: "Centralized file catalog with secure access." },
      { title: "Performance Scopes", description: "Define custom review parameters and scales." }
    ]
  },
  {
    id: "inventory-app",
    name: "Inventory Suite",
    oneLiner: "Advanced Multi-Warehouse Control",
    description: "Detailed inventory planning, shipping logistics, multi-location logs, and custom item attributes.",
    icon: "box",
    status: "coming-soon",
    href: "/products#inventory",
    features: [
      { title: "Multi-Warehouse Sync", description: "Track items across dozens of geographic locations." },
      { title: "Barcode Scanner integration", description: "Process arrivals and dispatches on smart devices." }
    ]
  },
  {
    id: "accounting",
    name: "Accounting Module",
    oneLiner: "Financial Books & Double-Entry Ledger",
    description: "Comprehensive financial bookkeeping, tax filings, asset depreciation scales, and double-entry ledgers.",
    icon: "credit-card",
    status: "coming-soon",
    href: "/products#accounting",
    features: [
      { title: "Double-Entry Bookkeeping", description: "Fully compliant accounts and audit logs." },
      { title: "Tax Computation Engine", description: "Automated standard tax configurations." }
    ]
  },
  {
    id: "ai-platform",
    name: "AI Business Platform",
    oneLiner: "Intelligent Process Optimization",
    description: "Inject document parsing, natural language invoice generation, and predictive process schedules into your business.",
    icon: "cpu",
    status: "planned",
    href: "/products#ai-platform",
    features: [
      { title: "Document Scanners", description: "Extract values from invoices and receipts via OCR." },
      { title: "Anomaly Detection", description: "Identify inventory errors or financial irregularities." }
    ]
  }
];
