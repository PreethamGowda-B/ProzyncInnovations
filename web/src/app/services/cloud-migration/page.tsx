"use client";
/* src/app/services/cloud-migration/page.tsx */
import React from "react";
import {
  Cloud,
  Server,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  Lock,
  ArrowRight,
  CheckCircle2,
  Zap,
  DatabaseBackup,
  Globe,
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
    icon: Server,
    title: "Secure Cloud Migrations",
    desc: "Transition database tables, file storage, and application servers from physical hardware or legacy hosting to modern cloud nodes — with zero data loss.",
  },
  {
    icon: RefreshCw,
    title: "Redundancy & Load Balancing",
    desc: "Deploy multi-region load balancers and auto-scaling groups so your platform stays accessible even during unexpected traffic spikes.",
  },
  {
    icon: DatabaseBackup,
    title: "Automated Data Backups",
    desc: "Scaffold daily encrypted snapshots stored across regional data centres — fully automated, versioned, and restoration-tested.",
  },
  {
    icon: ShieldCheck,
    title: "Security Hardening",
    desc: "Implement VPC isolation, IAM policies, encrypted transit, and firewall rules that meet enterprise security standards.",
  },
  {
    icon: BarChart3,
    title: "Cost Optimisation",
    desc: "Right-size your infrastructure, identify idle resources, and architect reserved instance strategies to reduce your cloud bill.",
  },
  {
    icon: Globe,
    title: "Multi-Region Architecture",
    desc: "Deploy your application across geographically distributed regions for low-latency performance and disaster recovery compliance.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Infrastructure Audit",
    desc: "We map your current servers, databases, and services to build a complete migration dependency graph.",
  },
  {
    step: "02",
    title: "Migration Blueprint",
    desc: "We design the target cloud architecture — VPCs, subnets, services, and data pipelines — before a single byte moves.",
  },
  {
    step: "03",
    title: "Staged Migration",
    desc: "Data and services are migrated in controlled stages with rollback points — minimising risk and downtime at every step.",
  },
  {
    step: "04",
    title: "Validation & Handover",
    desc: "Full performance testing, security audits, and team documentation before handing over a production-ready cloud environment.",
  },
];

const USE_CASES = [
  {
    label: "On-Premise to AWS / GCP",
    desc: "Lift and shift legacy server infrastructure to managed cloud environments with improved reliability and lower ops overhead.",
  },
  {
    label: "Database Modernisation",
    desc: "Migrate from aging SQL servers to managed database services with automated failover, backups, and scaling.",
  },
  {
    label: "Disaster Recovery Setup",
    desc: "Establish geographically redundant environments so your business can recover from outages within defined RTOs.",
  },
  {
    label: "DevOps & CI/CD Pipelines",
    desc: "Build containerised deployment pipelines on Docker and Kubernetes that make releases faster and more reliable.",
  },
];

export default function CloudMigrationPage() {
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
                Cloud Migration
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Move to the Cloud{" "}
                <span className="text-gradient">Securely and Without Downtime</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              We architect and execute cloud migrations that move your databases,
              applications, and infrastructure to modern cloud environments —
              with redundancy, security, and scalability built in from day one.
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
                Plan Your Migration
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
              Everything Your Cloud Migration Needs
            </h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              From security hardening to automated backups — we handle every
              layer of your cloud infrastructure.
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
              A Migration Built for Zero Surprises
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
              Common Migration Scenarios
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
              icon: Lock,
              title: "Security at Every Layer",
              desc: "Encryption at rest and in transit, strict IAM policies, and network isolation are standard — not optional add-ons.",
            },
            {
              icon: Zap,
              title: "Minimal Downtime Windows",
              desc: "Our staged migration approach means most transitions happen with live traffic — critical data moves in planned low-traffic windows only.",
            },
            {
              icon: Cloud,
              title: "Cloud-Agnostic Expertise",
              desc: "We work with AWS, Google Cloud, and Azure — selecting the right platform for your performance, compliance, and cost requirements.",
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
            CLOUD MIGRATION
          </Badge>
          <h2 className="heading-section">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Describe your current infrastructure and we'll plan a migration
            strategy that prioritises uptime, security, and long-term
            scalability.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button
              variant="gradient"
              size="lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Plan Migration
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
