/* src/lib/validations.ts */
import { z } from "zod";

export const ContactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  email: z.string().email("Invalid business email address."),
  phone: z.string().min(6, "Phone number must be at least 6 digits."),
  country: z.string().min(2, "Please select your country."),
  industry: z.string().min(2, "Please select your industry."),
  projectType: z.string().min(2, "Please select a project type."),
  timeline: z.string().min(2, "Please specify a timeline."),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
  preferredContact: z.enum(["email", "phone"]),
  consent: z.boolean().refine(val => val === true, { message: "You must consent to data processing." })
});

export const DemoBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  email: z.string().email("Invalid business email address."),
  phone: z.string().min(6, "Phone number must be at least 6 digits."),
  organizationSize: z.string().min(1, "Please specify your organization size."),
  industry: z.string().min(2, "Please specify your industry."),
  country: z.string().min(2, "Please specify your country."),
  message: z.string().optional(),
  preferredDate: z.string().min(5, "Please select a valid date."),
  preferredTime: z.string().min(2, "Please select a preferred time."),
  modulesOfInterest: z.array(z.string()).min(1, "Select at least one module of interest."),
  consent: z.boolean().refine(val => val === true, { message: "You must consent to data processing." })
});

export const NewsletterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  consent: z.boolean().refine(val => val === true, { message: "You must consent to receive updates." })
});

export const TalentNetworkSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  linkedinUrl: z.string().url("Invalid LinkedIn URL.").or(z.string().length(0)).optional(),
  portfolioUrl: z.string().url("Invalid portfolio URL.").or(z.string().length(0)).optional(),
  areasOfInterest: z.array(z.string()).min(1, "Select at least one area of interest."),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, { message: "You must consent to data processing." })
});
