/* src/types/product.ts */
export interface ProductModule {
  id: string;
  name: string;
  description: string;
  benefit: string;
  screenshotUrl?: string;
  icon?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  oneLiner: string;
  description: string;
  icon: string;
  features: ProductFeature[];
  modules?: ProductModule[];
  status: "active" | "coming-soon" | "planned";
  href: string;
  isFlagship?: boolean;
}
