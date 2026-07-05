/* src/types/seo.ts */
export interface PageMetadata {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}
