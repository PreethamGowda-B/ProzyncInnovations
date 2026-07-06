"use client";
/* src/app/services/ai-solutions/page.tsx */
import React from "react";
import {
  Cpu,
  ScanLine,
  TrendingUp,
  BrainCircuit,
  Workflow,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  Zap,
  Database,
  ShieldCheck,
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
    icon: ScanLine,
    title: "Document Scanners & OCR",
    desc: "Extract structured data from physical bills, invoices, forms, and receipts — converting them directly into clean database records.",
  },
  {
    icon: BrainCircuit,
    title: "Operational Anomaly Detection",
    desc: "Identify unusual transactions, inventory discrepancies, and data irregularities before they escalate into costly errors.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Forecasting",
    desc: "Forecast stock levels, demand patterns, and revenue trends based on historical purchasing data and seasonal signals.",
  },
  {
    icon: Workflow,
    title: "Intelligent Process Automation",
    desc: "Automate repetitive approval workflows, document routing, and data entry — freeing your team for higher-value tasks.",
  },
  {
    icon: BarChart2,
    title: "Business Intelligence Dashboards",
    desc: "Surface AI-generated insights in clear, actionable dashboards that give leadership a real-time view of operational health.",
  },
  {
    icon: Database,
    title: "Data Pipeline Engineering",
    desc: "Design clean, structured data pipelines that feed AI models with accurate, normalized inputs for reliable outputs.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Data Audit",
    desc: "We assess your existing data sources, quality, and structure to identify the highest-impact AI integration points.",
  },
  {
    step: "02",
    title: "Model Selection",
    desc: "We select or train the right models for your use case — OCR, classification, forecasting, or anomaly detection.",
  },
  {
    step: "03",
    title: "Integration & Testing",
    desc: "AI models are integrated into your workflows with rigorous accuracy testing before production deployment.",
  },
  {
    step: "04",
    title: "Monitoring & Refinement",
    desc: "We monitor model performance over time and retrain as your data evolves to maintain accuracy and reliability.",
  },
];

const USE_CASES = [
  {
    label: "Accounts Payable Automation",
    desc: "OCR scans supplier invoices and populates AP records automatically — cutting manual entry by over 80%.",
  },
  {
    label: "Inventory Demand Forecasting",
    desc: "Predict stock replenishment needs 30–90 days in advance based on sales velocity and seasonal trends.",
  },
  {
    label: "Fraud & Anomaly Detection",
    desc: "Flag unusual transaction patterns in financial records before they cause real losses.",
  },
  {
    label: "Smart Scheduling",
    desc: "Automate resource allocation and shift planning based on workload forecasts and team availability.",
  },
];

export default function AISolutionsPage() {
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
                AI Solutions
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Practical AI That{" "}
                <span className="text-gradient">Solves Real Business Problems</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              We deploy AI systems grounded in your actual data — automating
              document processing, detecting anomalies, and forecasting trends
              so your team can make faster, better decisions.
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
                Discuss Your AI Needs
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
              AI Tools We Build Into Your Operations
            </h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Every AI solution we deliver is purpose-built for your data — no
              generic models, no marketing hype.
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
              From Data to Deployed Intelligence
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.1}>
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
              Use Cases
            </span>
            <h2 className="heading-section text-text-primary mt-3">
              AI Applied to Real Workflows
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

      {/* ── Differentiators ── */}
      <Section className="bg-bg-secondary/10 border-b border-border-subtle">
        <Container className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "No Hype — Just Results",
              desc: "We only deploy AI where it measurably improves accuracy, speed, or cost. Every model is validated against your real data before going live.",
            },
            {
              icon: ShieldCheck,
              title: "Your Data Stays Yours",
              desc: "We build on-premise or private-cloud AI pipelines. Your sensitive business data never leaves your infrastructure.",
            },
            {
              icon: Cpu,
              title: "ERP-Native Integration",
              desc: "Our AI layers plug directly into your existing ERP or custom software — no standalone tools that create new silos.",
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
            AI SOLUTIONS
          </Badge>
          <h2 className="heading-section">
            Let's Put Your Data to Work
          </h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Tell us about your workflows and we'll identify exactly where AI can
            eliminate friction, reduce errors, and surface insights you're
            currently missing.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Start AI Integration
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
