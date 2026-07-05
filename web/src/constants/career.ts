/* src/constants/career.ts */
import { JobPosting } from "../types";

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: "frontend-engineer",
    role: "Frontend Software Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description: "Build premium user interfaces and complex data dashboards using React, Next.js, and TypeScript. Focus on micro-animations, loading states, accessibility, and high performance.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL / Three.js"],
    status: "planned" // Labeled as planned / upcoming to match current hiring status
  },
  {
    id: "backend-engineer",
    role: "Backend Software Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description: "Design modular API gateways, relational databases, and secure background job runners in Node.js. Implement security rules, encryption, backups, and audit logs.",
    skills: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker", "AWS / Cloud Infrastructure"],
    status: "planned"
  },
  {
    id: "ui-ux-designer",
    role: "UI/UX Product Designer",
    location: "Remote",
    type: "Full-time",
    level: "Mid-level",
    description: "Formulate user workflows, layout templates, and dark luxury visual styles. Deliver clean wireframes and interactive prototypes in Figma for dev teams.",
    skills: ["UI/UX Design", "Figma", "User Research", "Wireframing", "Design Token Systems"],
    status: "planned"
  }
];

export const HIRING_STEPS = [
  { step: 1, title: "Application Review", description: "Our engineering lead evaluates your submission, portfolios, and experience." },
  { step: 2, title: "Initial Conversation", description: "A quick 15-minute sync to align on core expectations, values, and Prozync vision." },
  { step: 3, title: "Technical Discussion", description: "A structured session reviewing architecture decisions, code quality, and styling systems." },
  { step: 4, title: "Final Interview", description: "A conversational loop discussing collaborative problems and long-term learning goals." },
  { step: 5, title: "The Offer", description: "We outline contract details, support, and onboarding steps." }
];
