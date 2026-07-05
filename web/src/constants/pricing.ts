/* src/constants/pricing.ts */
import { PricingPlan, ComparisonRow } from "../types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "Ideal for growing startups and local operations looking to automate inventory and simple registers.",
    idealFor: "1-10 Users",
    features: [
      "Access to 1 core module (e.g. Inventory)",
      "Up to 10 active user logins",
      "Standard cloud hosting (shared)",
      "Daily automated database backups",
      "Email and FAQ support access"
    ],
    ctaLabel: "Get Started",
    ctaHref: "/contact?plan=starter"
  },
  {
    id: "professional",
    name: "Professional Plan",
    description: "Perfect for mid-size enterprises seeking unified inventory, scheduling, and payroll pipelines.",
    idealFor: "10-50 Users",
    features: [
      "Access to up to 4 modules",
      "Up to 50 active user logins",
      "Performance-tuned hosting nodes",
      "Bi-daily encrypted backups",
      "Priority email & chat support",
      "Custom role-based permissions"
    ],
    isRecommended: true,
    ctaLabel: "Request Demo",
    ctaHref: "/pricing#booking"
  },
  {
    id: "enterprise",
    name: "Enterprise Solutions",
    description: "Custom architecture designed for multi-location organizations, large teams, and complex APIs.",
    idealFor: "Unlimited Users",
    features: [
      "Full access to all SmartERP modules",
      "Unlimited user logins",
      "Dedicated server infrastructure (AWS/Docker)",
      "Hourly backup pipelines",
      "24/7 dedicated support contact",
      "Tailor-made API development & integrations",
      "Custom training and onboarding campaigns"
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/contact?plan=enterprise"
  }
];

export const PRICING_COMPARISON: ComparisonRow[] = [
  {
    featureName: "Active Users",
    category: "core",
    starter: "Up to 10",
    professional: "Up to 50",
    enterprise: "Unlimited"
  },
  {
    featureName: "Modules Included",
    category: "core",
    starter: "1 Module",
    professional: "Up to 4 Modules",
    enterprise: "All Modules"
  },
  {
    featureName: "Hosting Environment",
    category: "core",
    starter: "Shared Cloud Node",
    professional: "Performance Node",
    enterprise: "Dedicated AWS/Docker"
  },
  {
    featureName: "Database Backups",
    category: "core",
    starter: "Daily",
    professional: "Bi-Daily",
    enterprise: "Hourly Pipelines"
  },
  {
    featureName: "Role-Based Permissions",
    category: "security",
    starter: "Standard",
    professional: "Custom Roles",
    enterprise: "Full Custom Controls"
  },
  {
    featureName: "Encrypted Data Loops",
    category: "security",
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    featureName: "API Integration Access",
    category: "security",
    starter: "Read-only APIs",
    professional: "Standard Rest APIs",
    enterprise: "Custom Gateways & Webhooks"
  },
  {
    featureName: "Support SLA",
    category: "support",
    starter: "48-Hour Email",
    professional: "24-Hour Email & Chat",
    enterprise: "Dedicated 24/7 Phone & Slack"
  },
  {
    featureName: "Employee Onboarding",
    category: "support",
    starter: "Documentation",
    professional: "2 Video Sessions",
    enterprise: "Fully Guided Campaigns"
  }
];
