/* src/lib/schema.ts */
import { FAQItem, Product } from "../types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prozync Innovations",
    "url": "https://prozync.com",
    "logo": "https://prozync.com/assets/logo/prozync-logo.svg",
    "sameAs": [
      "https://www.linkedin.com/company/prozync",
      "https://github.com/prozync",
      "https://twitter.com/prozync"
    ],
    "email": "hello@prozync.com"
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateSoftwareApplicationSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "description": product.description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Contact Sales for custom quotes"
    }
  };
}
