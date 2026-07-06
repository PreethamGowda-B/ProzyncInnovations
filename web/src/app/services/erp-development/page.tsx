"use client";
/* src/app/services/erp-development/page.tsx */
import React from "react";
import {
  Database,
  Layers,
  RefreshCw,
  FileCheck,
  BarChart3,
  Settings,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Puzzle,
} from "lucide-react";
import { Container } from "../../../components/layout/Container";
import { Section } from "../../../components/layout/Section";
import { FadeUp } from "../../../components/animations/FadeUp";
import { StaggerContainer } from "../../../components/animations/StaggerContainer";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../../components/3d/ThreeCanvas";

const ServicesScene = dynamic(
  () =>
    import("../../../components/3d/scenes/ServicesScene").then(
      (m) => m.ServicesScene
    ),
  { ssr: false }
);

const seq = [0.1, 0.3, 0.45, 0.6];

const CAPABILITIES = [
  {
    icon: Puzzle,
    title: "Modular Database Assembly",
    desc: "Select and customize ERP modules — sales, procurement, inventory, HR, and payroll — tailored precisely to your industry sector.",
  },
  {
    icon: RefreshCw,
    title: "Third-Party Synced Loops",
    desc: "Connect inventory updates directly to billing, logistics notifications, and customer communication workflows automatically.",
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Logs",
    desc: "Automatic change tracking on critical database tables ensures full regulatory compliance and transparent audit trails.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    desc: "Custom KPI dashboards that surface operational data across departments in a single unified view.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    desc: "Granular permission schemas ensure each user sees only what they need — protecting sensitive financial and HR records.",
  },
  {
    icon: Settings,
    title: "Legacy System Migration",
    desc: "Transition your existing databases and workflows into the new ERP with zero data loss and minimal downtime.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We map your current workflows, data structures, and operational bottlenecks to design the exact module set you need.",
  },
  {
    step: "02",
    title: "Module Architecture",
    desc: "We architect the database schemas, relationships, and API layers that will power your ERP's core operations.",
  },
  {
    step: "03",
    title: "Development & Integration",
    desc: "Modules are built and connected — syncing inventory, billing, HR, and logistics into a single operational loop.",
  },
  {
    step: "04",
    title: "Testing & Handover",
    desc: "Full QA, staff onboarding documentation, and a structured handover with ongoing support options.",
  },
];

const USE_CASES = [
  { label: "Manufacturing", desc: "Track raw materials, production runs, and distribution from a single system." },
  { label: "Retail & Distribution", desc: "Unify POS, warehouse stock, and supplier invoicing in real time." },
  { label: "Professional Services", desc: "Manage project timelines, billable hours, and client invoices seamlessly." },
  { label: "Healthcare", desc: "Coordinate patient records, inventory, and billing under strict compliance rules." },
];

export default function ERPDevelopmentPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      {/* ── Hero ── */}
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center border-b border-border-subtle py-12 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />
        <Container className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[0], duration: 0.4 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-2 rounded-full">
                ERP Development
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Custom ERP Systems Built for{" "}
                <span className="text-gradient">Enterprise Operations</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              We engineer modular ERP architectures that unify sales, inventory,
              HR, billing, and logistics into a single source of operational
              truth — built to grow with your business.
            </motion.p>

            <motion.div
              className="flex gap-3 flex-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Start Your ERP Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "/pricing#booking")}
              >
                Book a Demo
              </Button>
            </motion.div>
          </div>

          {/* Right 3D Visual */}
          <motion.div
            className="relative w-full h-[320px] lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: seq[3], duration: 0.7 }}
          >
            <ThreeCanvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
              <ServicesScene />
            </ThreeCanvas>
          </motion.div>
        </Container>
      </Section>

      {/* ── Key Capabilities ── */}
      <Section className="border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">
              Capabilities
            </span>
            <h2 className="heading-section text-text-primary mt-3">
              What We Build Into Your ERP
            </h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Every capability is designed to eliminate data silos and give your
              team a unified view of operations.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="glass-panel p-6 rounded-2xl border border-border-glass flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                  <cap.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-sm font-bold text-text-primary">
                  {cap.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── Process ── */}
      <Section className="bg-bg-secondary/15 border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">
              Process
            </span>
            <h2 className="heading-section text-text-primary mt-3">
              How We Deliver Your ERP
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.1} className="relative">
                <div className="glass-card p-6 flex flex-col gap-4 h-full">
                  <span className="text-4xl font-black text-accent-cyan/20 leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Use Cases ── */}
      <Section className="border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">
              Industries
            </span>
            <h2 className="heading-section text-text-primary mt-3">
              ERP Solutions Across Sectors
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc, i) => (
              <FadeUp
                key={uc.label}
                delay={i * 0.08}
                className="glass-panel p-6 rounded-2xl border border-border-glass flex items-start gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-text-primary">
                    {uc.label}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Why Prozync ERP ── */}
      <Section className="bg-bg-secondary/10 border-b border-border-subtle">
        <Container className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Database,
              title: "One Source of Truth",
              desc: "All departments — sales, HR, finance, logistics — read and write to the same synchronized database, eliminating conflicting records.",
            },
            {
              icon: Layers,
              title: "Modular by Design",
              desc: "Start with the modules you need today and expand as your business grows. No expensive re-architectures.",
            },
            {
              icon: ShieldCheck,
              title: "Compliance Ready",
              desc: "Built-in audit logs, change tracking, and access controls to support regulatory requirements from day one.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-accent-cyan" />
              </div>
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </FadeUp>
          ))}
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section className="bg-bg-primary">
        <Container className="text-center flex flex-col items-center gap-6">
          <Badge variant="default" className="mb-2">
            ERP DEVELOPMENT
          </Badge>
          <h2 className="heading-section">
            Ready to Unify Your Operations?
          </h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Tell us about your workflows and we'll design a modular ERP
            architecture that fits your business — not the other way around.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Start ERP Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/services")}
            >
              View All Services
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
