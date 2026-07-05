/* src/types/career.ts */
export interface JobPosting {
  id: string;
  role: string;
  location: string; // e.g. "Remote", "Office (when available)"
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  level: "Junior" | "Mid-level" | "Senior" | "Lead";
  description: string;
  skills: string[];
  status: "open" | "closed" | "planned";
}
