/* src/constants/blog.ts */
import { BlogArticle, BlogCategory } from "../types";

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: "all", name: "All Articles" },
  { id: "engineering", name: "Software Engineering", description: "Design patterns, TypeScript database models, and cloud setups." },
  { id: "erp", name: "ERP Systems", description: "Configuring inventory, payroll calculation rules, and logistics." },
  { id: "ai", name: "Business AI", description: "OCR scanners, document parsers, and scheduling anomaly alerts." }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "modular-database-design-for-erp",
    title: "Structuring Modular Databases for Custom ERP Systems",
    summary: "A deep dive into aligning relational database models, inventory tables, and workforce shift logs under unified enterprise schemas.",
    content: "Content will be loaded from markdown scopes dynamically.",
    author: { name: "Lead Architect", role: "Software Engineering Lead" },
    date: "July 2026",
    readTime: "6 min read",
    category: "engineering",
    coverImageUrl: ""
  },
  {
    slug: "optimizing-payroll-computations",
    title: "Optimizing Payroll Calculation Rules with Workforce Sync",
    summary: "Analyzing the math and triggers connecting employee check-in logs directly to monthly payroll engines without errors.",
    content: "Content will be loaded from markdown scopes dynamically.",
    author: { name: "Lead Developer", role: "Workforce System Lead" },
    date: "June 2026",
    readTime: "5 min read",
    category: "erp",
    coverImageUrl: ""
  },
  {
    slug: "practical-ai-document-scanners",
    title: "Practical AI Document Scanners in Invoicing Pipelines",
    summary: "Reviewing how OCR models parse raw invoice PDF values and sync them with purchase lists securely.",
    content: "Content will be loaded from markdown scopes dynamically.",
    author: { name: "AI Lead", role: "Automation Architect" },
    date: "May 2026",
    readTime: "7 min read",
    category: "ai",
    coverImageUrl: ""
  }
];
export default BLOG_ARTICLES;
export const BLOG_ARTICLES_INDEX = BLOG_ARTICLES;
