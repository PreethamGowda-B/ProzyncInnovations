/* src/constants/faqs.ts */
import { FAQItem } from "../types";

export const FAQS: FAQItem[] = [
  // Homepage
  {
    id: "home-faq-1",
    question: "Can Prozync custom software integrate with our existing database systems?",
    answer: "Yes. We design custom software and ERP platforms to communicate with external databases via REST APIs or custom gateways, ensuring secure, bi-directional data flow.",
    category: "general"
  },
  {
    id: "home-faq-2",
    question: "How long does a custom ERP or SaaS development project typically take?",
    answer: "Timelines depend entirely on project scope. A standard minimum viable product (MVP) can be delivered in 8 to 12 weeks, while complex multi-module ERP systems can take 4 to 9 months.",
    category: "general"
  },
  {
    id: "home-faq-3",
    question: "What support options does Prozync provide after launch?",
    answer: "We offer tailored support plans including database monitoring, security audits, dependency updates, and general bug resolution to keep platforms running smoothly.",
    category: "general"
  },
  // Products / SmartERP
  {
    id: "prod-faq-1",
    question: "What is SmartERP?",
    answer: "SmartERP is our integrated cloud platform that helps businesses manage inventory, payroll, shift logs, sales, and analytics from a unified database.",
    category: "smarterp"
  },
  {
    id: "prod-faq-2",
    question: "Can we buy only specific modules of SmartERP (e.g., just Inventory)?",
    answer: "Yes. SmartERP is fully modular. You can launch with a single module, like Inventory Management, and add other modules, like Payroll or CRM, as your operations expand.",
    category: "smarterp"
  },
  {
    id: "prod-faq-3",
    question: "Is employee training provided for SmartERP?",
    answer: "Yes. Every SmartERP deployment includes guided user onboarding sessions, detailed documentation, and support contacts to ensure your team adapts quickly.",
    category: "smarterp"
  },
  // Services
  {
    id: "serv-faq-1",
    question: "How do custom software projects begin at Prozync?",
    answer: "We start with a thorough requirement analysis where we map your operational steps. This discovery phase is followed by design wireframes, full planning, and modular development sprints.",
    category: "services"
  },
  {
    id: "serv-faq-2",
    question: "Do you build mobile applications for both iOS and Android?",
    answer: "Yes. We build responsive cross-platform mobile apps using frameworks that utilize a single optimized codebase for fast deployment to both Apple and Google app stores.",
    category: "services"
  },
  // Pricing & Demo
  {
    id: "price-faq-1",
    question: "How are pricing plans structured?",
    answer: "We offer modular licensing tiers based on the number of active users and modules required. For large operations or custom integrations, we configure unique Enterprise plans.",
    category: "pricing"
  },
  {
    id: "price-faq-2",
    question: "Is there a free trial available?",
    answer: "We offer personalized, guided demonstrations where we show how the platform configures to your workflows. Contact sales to arrange a demo query.",
    category: "pricing"
  }
];
