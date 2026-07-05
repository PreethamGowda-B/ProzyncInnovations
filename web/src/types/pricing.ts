/* src/types/pricing.ts */
export interface PricingPlan {
  id: string;
  name: string;
  price?: string; // No actual prices, will be "Request Quote" or "Contact Us" or similar
  description: string;
  idealFor: string;
  features: string[];
  isRecommended?: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export interface ComparisonRow {
  featureName: string;
  category: "core" | "modules" | "security" | "support";
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}
