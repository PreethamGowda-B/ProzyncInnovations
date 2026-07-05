"use client";
/* src/app/contact/page.tsx */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Clock, MessageSquare, Shield, Check, PhoneCall, Phone, MessageCircle } from "lucide-react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { Button } from "../../components/ui/Button";
import { useToast } from "../../providers/ToastProvider";
import { ContactSchema } from "../../lib/validations";
import { ContactSubmitPayload } from "../../types/forms";
import { COMPANY_INFO } from "../../constants/company";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../components/3d/ThreeCanvas";

// Lazy-load ContactScene
const ContactScene = dynamic(() => import("../../components/3d/scenes/ContactScene").then(m => m.ContactScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactSubmitPayload>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      consent: false
    }
  });

  const onSubmit = async (data: ContactSubmitPayload) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        toast("success", "Message Sent", "Thank you. Our database lead will email you shortly.");
      } else {
        toast("error", "Error", result.message || "Failed to send message.");
      }
    } catch (e) {
      toast("error", "Error", "Connection error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      {/* Hero */}
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center border-b border-border-subtle py-12 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />
        <Container className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[0], duration: 0.4 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-2 rounded-full">
                Contact Us
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Let's Start a <span className="text-gradient">Professional Conversation</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              Coordinate software specifications, request enterprise ERP updates, or consult on database migrations.
            </motion.p>
          </div>

          {/* Right 3D Visual Column */}
          <motion.div
            className="relative w-full h-[320px] lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: seq[3], duration: 0.7 }}
          >
            <ThreeCanvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
              <ContactScene />
            </ThreeCanvas>
          </motion.div>

        </Container>
      </Section>

      {/* Main split grid */}
      <Section className="border-b border-border-subtle">
        <Container className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8">
            <FadeUp className="flex flex-col gap-4">
              <h2 className="heading-sub">Direct Contact</h2>
              <p className="text-xs text-text-muted leading-relaxed">
                Reach us directly via email, phone, or WhatsApp. We respond to all inquiries within 12 hours on business days.
              </p>
            </FadeUp>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {/* Email */}
              <FadeUp className="glass-panel p-5 rounded-xl border border-border-glass flex items-start gap-4 hover:border-border-subtle transition-colors">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-violet-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Business Email</h3>
                  <a href="mailto:prozyncinnovations@gmail.com" className="text-sm font-semibold text-accent-cyan hover:underline w-fit">
                    prozyncinnovations@gmail.com
                  </a>
                  <p className="text-[11px] text-text-muted">General inquiries, project consultations, and support.</p>
                </div>
              </FadeUp>

              {/* Phone 1 */}
              <FadeUp className="glass-panel p-5 rounded-xl border border-border-glass flex items-start gap-4 hover:border-border-subtle transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Phone — Primary</h3>
                  <a href="tel:+919535134351" className="text-sm font-semibold text-accent-cyan hover:underline w-fit">
                    +91 9535134351
                  </a>
                  <p className="text-[11px] text-text-muted">Monday – Friday, 9 AM – 6 PM IST</p>
                </div>
              </FadeUp>

              {/* Phone 2 */}
              <FadeUp className="glass-panel p-5 rounded-xl border border-border-glass flex items-start gap-4 hover:border-border-subtle transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">Phone — Secondary</h3>
                  <a href="tel:+919980114675" className="text-sm font-semibold text-accent-cyan hover:underline w-fit">
                    +91 9980114675
                  </a>
                  <p className="text-[11px] text-text-muted">Monday – Friday, 9 AM – 6 PM IST</p>
                </div>
              </FadeUp>

              {/* WhatsApp */}
              <FadeUp className="glass-panel p-5 rounded-xl border border-border-glass flex items-start gap-4 hover:border-border-subtle transition-colors">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#25d36610" }}>
                  <MessageCircle className="w-5 h-5" style={{ color: "#25d366" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider">WhatsApp — Fastest Response</h3>
                  <a
                    href="https://wa.me/919535134351?text=Hi!%20I'm%20interested%20in%20Prozync%20Innovations%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-white px-3 py-1.5 rounded-lg w-fit transition-all hover:opacity-90"
                    style={{ background: "#25d366" }}
                  >
                    Chat on WhatsApp
                  </a>
                  <p className="text-[11px] text-text-muted">Usually replies within minutes.</p>
                </div>
              </FadeUp>
            </div>

            {/* Hours */}
            <FadeUp className="glass-panel p-5 rounded-xl border border-border-glass flex flex-col gap-3">
              <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-cyan" /> Business Hours (IST)
              </h3>
              <div className="text-xs text-text-muted flex flex-col gap-1 leading-relaxed">
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-[10px] text-text-disabled mt-1">Response target: within 12 hours on all business days.</p>
              </div>
            </FadeUp>
          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            {success ? (
              <FadeUp className="glass-panel p-8 rounded-2xl border border-success/30 text-center flex flex-col items-center gap-4 bg-success/5">
                <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center text-success">✓</div>
                <h3 className="text-base font-bold text-text-primary">Consultation Inquiry Sent</h3>
                <p className="text-xs text-text-muted max-w-md">
                  Thank you. Your project parameters have been securely stored. Our engineering lead will contact you shortly to coordinate details.
                </p>
                <Button variant="outline" onClick={() => setSuccess(false)}>Send Another Message</Button>
              </FadeUp>
            ) : (
              <FadeUp className="glass-panel p-6 sm:p-8 rounded-2xl border border-border-glass shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Full Name</label>
                      <input
                        {...register("fullName")}
                        className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.fullName ? "border-error" : "border-border-glass"}`}
                        placeholder="Jane Doe"
                      />
                      {errors.fullName && <span className="text-[10px] text-error">{errors.fullName.message}</span>}
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Company Name</label>
                      <input
                        {...register("companyName")}
                        className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.companyName ? "border-error" : "border-border-glass"}`}
                        placeholder="Acme Corp"
                      />
                      {errors.companyName && <span className="text-[10px] text-error">{errors.companyName.message}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Business Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.email ? "border-error" : "border-border-glass"}`}
                        placeholder="jane@company.com"
                      />
                      {errors.email && <span className="text-[10px] text-error">{errors.email.message}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Phone Number</label>
                      <input
                        {...register("phone")}
                        className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.phone ? "border-error" : "border-border-glass"}`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <span className="text-[10px] text-error">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* Country */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Country</label>
                      <input
                        {...register("country")}
                        className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.country ? "border-error" : "border-border-glass"}`}
                        placeholder="United States"
                      />
                      {errors.country && <span className="text-[10px] text-error">{errors.country.message}</span>}
                    </div>

                    {/* Industry */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Industry</label>
                      <input
                        {...register("industry")}
                        className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.industry ? "border-error" : "border-border-glass"}`}
                        placeholder="Logistics, Retail..."
                      />
                      {errors.industry && <span className="text-[10px] text-error">{errors.industry.message}</span>}
                    </div>

                    {/* Preferred contact */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Preferred Method</label>
                      <select
                        {...register("preferredContact")}
                        className="glass-panel p-3 rounded-lg border border-border-glass text-xs bg-bg-primary text-text-secondary focus:outline-none focus:border-accent-primary"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Project type */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Project Scope</label>
                      <select
                        {...register("projectType")}
                        className="glass-panel p-3 rounded-lg border border-border-glass text-xs bg-bg-primary text-text-secondary focus:outline-none focus:border-accent-primary"
                      >
                        <option value="smarterp">SmartERP Deployment</option>
                        <option value="custom">Custom Enterprise Software</option>
                        <option value="ai">AI Integration Workflow</option>
                        <option value="saas">SaaS Platform Development</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-text-secondary uppercase">Timeline</label>
                      <select
                        {...register("timeline")}
                        className="glass-panel p-3 rounded-lg border border-border-glass text-xs bg-bg-primary text-text-secondary focus:outline-none focus:border-accent-primary"
                      >
                        <option value="immediate">Immediate (under 1 month)</option>
                        <option value="medium">1 - 3 Months</option>
                        <option value="long">3+ Months</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase">Message Details</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary resize-none ${errors.message ? "border-error" : "border-border-glass"}`}
                      placeholder="Outline your project requirements, active user limits, and required module connections..."
                    />
                    {errors.message && <span className="text-[10px] text-error">{errors.message.message}</span>}
                  </div>

                  {/* Consent */}
                  <div className="flex flex-col gap-2 mt-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("consent")}
                        className="mt-1 w-4 h-4 rounded border-border-glass bg-transparent text-accent-primary focus:ring-accent-primary shrink-0"
                      />
                      <span className="text-[9px] text-text-muted leading-relaxed">
                        I consent to Prozync Innovations storing and processing these coordinates to address my project request.
                      </span>
                    </label>
                    {errors.consent && <span className="text-[10px] text-error">{errors.consent.message}</span>}
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <Button variant="gradient" size="xl" className="w-full" type="submit" loading={submitting}>
                      Submit Consultation Request
                    </Button>
                  </div>
                </form>
              </FadeUp>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}

// Inline Stagger Container definition for compilation safety
function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
