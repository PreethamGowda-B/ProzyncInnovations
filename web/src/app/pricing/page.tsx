"use client";
/* src/app/pricing/page.tsx */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Info, Shield, HelpCircle, Calendar, Clock, BarChart } from "lucide-react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { StaggerContainer } from "../../components/animations/StaggerContainer";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { useToast } from "../../providers/ToastProvider";
import { PRICING_PLANS, PRICING_COMPARISON } from "../../constants/pricing";
import { DemoBookingSchema } from "../../lib/validations";
import { DemoBookingPayload } from "../../types/forms";

const availableModules = [
  { id: "dashboard", name: "Executive Dashboard" },
  { id: "inventory", name: "Inventory Management" },
  { id: "payroll", name: "Payroll & Job Tracking" },
  { id: "attendance", name: "Workforce Attendance" },
  { id: "reports", name: "Custom Reports Generator" },
  { id: "analytics", name: "Predictive Analytics" },
  { id: "sales", name: "Sales & Billing Invoices" }
];

export default function PricingPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<DemoBookingPayload>({
    resolver: zodResolver(DemoBookingSchema),
    defaultValues: {
      modulesOfInterest: [],
      consent: false
    }
  });

  const selectedModules = watch("modulesOfInterest") || [];

  const handleModuleToggle = (moduleId: string) => {
    if (selectedModules.includes(moduleId)) {
      setValue("modulesOfInterest", selectedModules.filter(id => id !== moduleId), { shouldValidate: true });
    } else {
      setValue("modulesOfInterest", [...selectedModules, moduleId], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: DemoBookingPayload) => {
    setSubmitting(true);
    try {
      // API request simulation
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        toast("success", "Demo Requested", "Our lead architect will contact you to confirm the time slot.");
      } else {
        toast("error", "Error", result.message || "Something went wrong.");
      }
    } catch (e) {
      toast("error", "Request Failed", "Connection error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      {/* Hero */}
      <Section className="relative overflow-hidden min-h-[45vh] flex items-center border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />
        <Container className="relative z-10 text-center flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Pricing Plans</span>
          <h1 className="heading-page text-text-primary">
            Modular Pricing for{" "}
            <span className="text-gradient">Growing Businesses</span>
          </h1>
          <p className="text-text-muted max-w-2xl text-base lg:text-lg">
            Choose starter packages or custom enterprise platforms matching your active user count, custom databases, and required modules.
          </p>
        </Container>
      </Section>

      {/* Plan Cards */}
      <Section className="border-b border-border-subtle">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {PRICING_PLANS.map((plan) => (
              <FadeUp
                key={plan.id}
                className={`glass-panel p-8 rounded-2xl border flex flex-col gap-6 relative bg-surface-glass ${
                  plan.isRecommended ? "border-accent-primary/45 shadow-glow-blue" : "border-border-glass"
                }`}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-3 left-6">
                    <Badge variant="primary" dot>Recommended</Badge>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-text-primary">{plan.name}</h3>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed min-h-[36px]">{plan.description}</p>
                </div>
                <div className="border-y border-border-glass py-4 flex flex-col gap-1">
                  <span className="text-2xl font-extrabold text-gradient">Custom Quote</span>
                  <span className="text-xs text-text-disabled uppercase tracking-wider font-bold">Contact for Pricing</span>
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Features Included:</p>
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex gap-2.5 items-start text-xs text-text-secondary">
                      <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button
                    variant={plan.isRecommended ? "gradient" : "outline"}
                    className="w-full"
                    onClick={() => {
                      if (plan.id === "professional") {
                        const el = document.getElementById("booking");
                        el?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = plan.ctaHref;
                      }
                    }}
                  >
                    {plan.ctaLabel}
                  </Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section className="border-b border-border-subtle bg-bg-secondary/15">
        <Container>
          <FadeUp className="text-center mb-10">
            <h2 className="heading-sub">Feature Comparison Matrix</h2>
          </FadeUp>

          <div className="overflow-x-auto glass-panel rounded-2xl border border-border-glass">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-border-glass bg-surface-01">
                  <th className="p-4 font-bold text-text-primary">Feature</th>
                  <th className="p-4 font-bold text-text-primary">Starter</th>
                  <th className="p-4 font-bold text-text-primary">Professional</th>
                  <th className="p-4 font-bold text-text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-border-glass hover:bg-surface-glass transition-colors">
                    <td className="p-4 font-semibold text-text-secondary">{row.featureName}</td>
                    <td className="p-4 text-text-muted">
                      {typeof row.starter === "boolean" ? (row.starter ? "✓" : "-") : row.starter}
                    </td>
                    <td className="p-4 text-text-muted">
                      {typeof row.professional === "boolean" ? (row.professional ? "✓" : "-") : row.professional}
                    </td>
                    <td className="p-4 text-text-muted">
                      {typeof row.enterprise === "boolean" ? (row.enterprise ? "✓" : "-") : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* ── Demo Booking Section ── */}
      <Section id="booking" className="border-b border-border-subtle relative scroll-mt-20">
        <Container className="max-w-3xl">
          <FadeUp className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Interactive Demo</span>
            <h2 className="heading-section mt-2">Book a Guided Walkthrough</h2>
            <p className="text-xs text-text-muted mt-2 max-w-lg mx-auto">
              Schedule a private walkthrough session. Select the modules you wish to inspect and enter your preferred slot below.
            </p>
          </FadeUp>

          {success ? (
            <FadeUp className="glass-panel p-8 rounded-2xl border border-success/30 text-center flex flex-col items-center gap-4 bg-success/5">
              <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center text-success">✓</div>
              <h3 className="text-base font-bold text-text-primary">Demo Request Received</h3>
              <p className="text-xs text-text-muted max-w-md">
                Thank you. Our database integration lead will review your requested modules and email you to confirm the time slot.
              </p>
              <Button variant="outline" onClick={() => setSuccess(false)}>Book Another Slot</Button>
            </FadeUp>
          ) : (
            <FadeUp className="glass-panel p-6 sm:p-8 rounded-2xl border border-border-glass shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Your Name</label>
                    <input
                      {...register("name")}
                      className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.name ? "border-error" : "border-border-glass"}`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <span className="text-[10px] text-error">{errors.name.message}</span>}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Company Name</label>
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
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Business Email</label>
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
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Phone Number</label>
                    <input
                      {...register("phone")}
                      className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.phone ? "border-error" : "border-border-glass"}`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-[10px] text-error">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Size */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Org Size</label>
                    <select
                      {...register("organizationSize")}
                      className="glass-panel p-3 rounded-lg border border-border-glass text-xs bg-bg-primary text-text-secondary focus:outline-none focus:border-accent-primary"
                    >
                      <option value="1-10">1 - 10 Employees</option>
                      <option value="11-50">11 - 50 Employees</option>
                      <option value="51-200">51 - 200 Employees</option>
                      <option value="201+">201+ Employees</option>
                    </select>
                  </div>

                  {/* Industry */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Industry</label>
                    <input
                      {...register("industry")}
                      className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.industry ? "border-error" : "border-border-glass"}`}
                      placeholder="Retail, Logistics..."
                    />
                    {errors.industry && <span className="text-[10px] text-error">{errors.industry.message}</span>}
                  </div>

                  {/* Country */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Country</label>
                    <input
                      {...register("country")}
                      className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.country ? "border-error" : "border-border-glass"}`}
                      placeholder="United States"
                    />
                    {errors.country && <span className="text-[10px] text-error">{errors.country.message}</span>}
                  </div>
                </div>

                {/* Modules checkbox matrix */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold text-text-secondary uppercase">Modules of Interest (Select at least one)</label>
                  <div className="grid sm:grid-cols-2 gap-2 mt-1">
                    {availableModules.map(mod => {
                      const checked = selectedModules.includes(mod.id);
                      return (
                        <button
                          type="button"
                          key={mod.id}
                          onClick={() => handleModuleToggle(mod.id)}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                            checked
                              ? "bg-accent-primary/10 border-accent-primary/40 text-text-primary"
                              : "border-border-glass bg-surface-glass text-text-muted hover:border-border-subtle"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            checked ? "bg-accent-cyan border-accent-cyan text-bg-primary" : "border-border-glass"
                          }`}>
                            {checked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-semibold">{mod.name}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.modulesOfInterest && <span className="text-[10px] text-error mt-1">{errors.modulesOfInterest.message}</span>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Preferred Date</label>
                    <input
                      {...register("preferredDate")}
                      type="date"
                      className={`glass-panel p-3 rounded-lg border text-xs bg-bg-primary text-text-secondary focus:outline-none focus:border-accent-primary ${errors.preferredDate ? "border-error" : "border-border-glass"}`}
                    />
                    {errors.preferredDate && <span className="text-[10px] text-error">{errors.preferredDate.message}</span>}
                  </div>

                  {/* Preferred Time */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-text-secondary uppercase">Preferred Time</label>
                    <select
                      {...register("preferredTime")}
                      className="glass-panel p-3 rounded-lg border border-border-glass text-xs bg-bg-primary text-text-secondary focus:outline-none focus:border-accent-primary"
                    >
                      <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                      <option value="evening">Late Afternoon (3:00 PM - 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-text-secondary uppercase">Notes / Key Objectives (Optional)</label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    className="glass-panel p-3 rounded-lg border border-border-glass text-xs bg-transparent focus:outline-none focus:border-accent-primary resize-none"
                    placeholder="We want to inspect inventory low-stock alerts sync with PO invoicing loops..."
                  />
                </div>

                {/* Consent */}
                <div className="flex flex-col gap-2 mt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-1 w-4 h-4 rounded border-border-glass bg-transparent text-accent-primary focus:ring-accent-primary shrink-0"
                    />
                    <span className="text-[10px] text-text-muted leading-relaxed">
                      I consent to Prozync Innovations storage and processing of these contact parameters to schedule and coordinate the software walk-through.
                    </span>
                  </label>
                  {errors.consent && <span className="text-[10px] text-error">{errors.consent.message}</span>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button variant="gradient" size="xl" className="w-full" type="submit" loading={submitting}>
                    Schedule Demonstration Walkthrough
                  </Button>
                </div>
              </form>
            </FadeUp>
          )}
        </Container>
      </Section>
    </div>
  );
}
