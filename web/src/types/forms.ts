/* src/types/forms.ts */
export interface ContactSubmitPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  projectType: string;
  timeline: string;
  budget?: string;
  message: string;
  attachment?: File;
  preferredContact: "email" | "phone";
  consent: boolean;
}

export interface DemoBookingPayload {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  organizationSize: string;
  industry: string;
  country: string;
  message?: string;
  preferredDate: string;
  preferredTime: string;
  modulesOfInterest: string[]; // Module IDs
  consent: boolean;
}

export interface NewsletterSubmitPayload {
  name: string;
  email: string;
  consent: boolean;
}

export interface TalentNetworkPayload {
  name: string;
  email: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  resumeFile?: File;
  areasOfInterest: string[];
  message?: string;
  consent: boolean;
}
