/* src/types/service.ts */
export interface ServiceCapability {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  capabilities: ServiceCapability[];
  href: string;
  category: "enterprise" | "development" | "ai-cloud" | "design-consulting";
}
