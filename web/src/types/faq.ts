/* src/types/faq.ts */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string; // e.g. "smarterp", "pricing", "general"
}
