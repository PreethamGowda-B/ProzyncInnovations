"use client";
/* src/app/careers/page.tsx */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Users, FileText, CheckCircle, ArrowRight, ShieldAlert, Cpu, Code } from "lucide-react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { useToast } from "../../providers/ToastProvider";
import { TalentNetworkSchema } from "../../lib/validations";
import { TalentNetworkPayload } from "../../types/forms";
import { JOB_POSTINGS, HIRING_STEPS } from "../../constants/career";

const interestFields = [
  "Frontend Engineering",
  "Backend Engineering",
  "UI/UX Product Design",
  "QA & Testing",
  "Database & Cloud Ops"
];

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../components/3d/ThreeCanvas";

// Lazy-load CareersScene
const CareersScene = dynamic(() => import("../../components/3d/scenes/CareersScene").then(m => m.CareersScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function CareersPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<TalentNetworkPayload>({
    resolver: zodResolver(TalentNetworkSchema),
    defaultValues: {
      areasOfInterest: [],
      consent: false
    }
  });

  const selectedAreas = watch("areasOfInterest") || [];

  const handleAreaToggle = (area: string) => {
    if (selectedAreas.includes(area)) {
      setValue("areasOfInterest", selectedAreas.filter(a => a !== area), { shouldValidate: true });
    } else {
      setValue("areasOfInterest", [...selectedAreas, area], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: TalentNetworkPayload) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (result.success) {
        setSuccess(true);
        toast("success", "Application Sent", "Your file has been added to our upcoming talent network.");
      } else {
        toast("error", "Error", result.message || "Failed to submit.");
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
                Careers
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Build the Future of <span className="text-gradient">Enterprise Platforms</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              We value defensive engineering, clean pull requests, structured document types, and responsive micro-animations.
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
              <CareersScene />
            </ThreeCanvas>
          </motion.div>

        </Container>
      </Section>

      {/* Engineering Culture */}
      <Section className="border-b border-border-subtle">
        <Container className="grid md:grid-cols-3 gap-8">
          <FadeUp className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <Code className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-base font-bold text-text-primary">TypeScript Typings</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We compile code under strict mode with zero any types, separate content values from visual structures, and keep files modular.
            </p>
          </FadeUp>
          <FadeUp className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-base font-bold text-text-primary">Sprint Cycles</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We organize tasks into clear timelines, run thorough code reviews on every pull request, and document configurations.
            </p>
          </FadeUp>
          <FadeUp className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-base font-bold text-text-primary">Collaborative Focus</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We value clear developer communication, coordinate operational support pipelines, and avoid marketing jargon.
            </p>
          </FadeUp>
        </Container>
      </Section>

      {/* Current hiring status - honest and clean */}
      <Section className="bg-bg-secondary/15 border-b border-border-subtle">
        <Container className="max-w-2xl text-center flex flex-col items-center gap-6">
          <Badge variant="warning" dot>Current Status</Badge>
          <h2 className="heading-sub">Not Actively Hiring</h2>
          <p className="text-xs text-text-muted leading-relaxed">
            We are currently focused on launching SmartERP flagship modules and are not actively filling open positions. However, we are expanding our core team slots in the future.
          </p>
          <p className="text-xs text-accent-cyan font-bold uppercase tracking-wider">
            Join our upcoming talent network to receive updates when slots open.
          </p>
        </Container>
      </Section>

      {/* Talent Network Form */}
      <Section className="border-b border-border-subtle">
        <Container className="max-w-xl">
          {success ? (
            <FadeUp className="glass-panel p-8 rounded-2xl border border-success/30 text-center flex flex-col items-center gap-4 bg-success/5">
              <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center text-success">✓</div>
              <h3 className="text-base font-bold text-text-primary">Talent Profile Received</h3>
              <p className="text-xs text-text-muted">
                Thank you. We have securely stored your coordinates and will reach out when team recruitment sprints begin.
              </p>
              <Button variant="outline" onClick={() => setSuccess(false)}>Submit Another Profile</Button>
            </FadeUp>
          ) : (
            <FadeUp className="glass-panel p-6 sm:p-8 rounded-2xl border border-border-glass shadow-lg">
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-6 pb-3 border-b border-border-glass text-center">
                Talent Network Profile
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase">Your Name</label>
                  <input
                    {...register("name")}
                    className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.name ? "border-error" : "border-border-glass"}`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span className="text-[10px] text-error">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.email ? "border-error" : "border-border-glass"}`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <span className="text-[10px] text-error">{errors.email.message}</span>}
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase">LinkedIn URL (Optional)</label>
                  <input
                    {...register("linkedinUrl")}
                    className={`glass-panel p-3 rounded-lg border text-xs bg-transparent focus:outline-none focus:border-accent-primary ${errors.linkedinUrl ? "border-error" : "border-border-glass"}`}
                    placeholder="https://linkedin.com/in/username"
                  />
                  {errors.linkedinUrl && <span className="text-[10px] text-error">{errors.linkedinUrl.message}</span>}
                </div>

                {/* Areas of interest checkbox */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-text-secondary uppercase">Areas of Interest (Select at least one)</label>
                  <div className="grid sm:grid-cols-2 gap-2 mt-1">
                    {interestFields.map(field => {
                      const checked = selectedAreas.includes(field);
                      return (
                        <button
                          type="button"
                          key={field}
                          onClick={() => handleAreaToggle(field)}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                            checked
                              ? "bg-accent-primary/10 border-accent-primary/45 text-text-primary"
                              : "border-border-glass bg-surface-glass text-text-muted hover:border-border-subtle"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            checked ? "bg-accent-cyan border-accent-cyan text-bg-primary" : "border-border-glass"
                          }`}>
                            {checked && <CheckCircle className="w-3 h-3 text-accent-cyan fill-none" />}
                          </div>
                          <span className="text-xs font-semibold">{field}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.areasOfInterest && <span className="text-[10px] text-error mt-1">{errors.areasOfInterest.message}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase">Brief Intro / Key Skills (Optional)</label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    className="glass-panel p-3 rounded-lg border border-border-glass text-xs bg-transparent focus:outline-none focus:border-accent-primary resize-none"
                    placeholder="Outline your background, programming languages, and why you are interested in Prozync..."
                  />
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
                      I consent to Prozync Innovations storing and processing my details to update me on upcoming recruitment campaigns.
                    </span>
                  </label>
                  {errors.consent && <span className="text-[10px] text-error">{errors.consent.message}</span>}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button variant="gradient" size="xl" className="w-full" type="submit" loading={submitting}>
                    Join Talent Network
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
