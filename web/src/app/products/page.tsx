"use client";
/* src/app/products/page.tsx */
import React, { useState } from "react";
import { Cpu, Users, Box, CreditCard, Brain, ArrowRight, ShieldCheck, Database, Zap, ExternalLink, Globe, MonitorSmartphone, Building2 } from "lucide-react";
import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { StaggerContainer } from "../../components/animations/StaggerContainer";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { PRODUCTS } from "../../constants/products";

const iconMap: Record<string, React.ComponentType<any>> = {
  smarterp: Cpu,
  users: Users,
  briefcase: Box,
  box: Box,
  "credit-card": CreditCard,
  cpu: Brain,
};

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../components/3d/ThreeCanvas";

// Lazy-load ProductsScene
const ProductsScene = dynamic(() => import("../../components/3d/scenes/ProductsScene").then(m => m.ProductsScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function ProductsPage() {
  const flagship = PRODUCTS.find((p) => p.isFlagship)!;
  const suites = PRODUCTS.filter((p) => !p.isFlagship);

  return (
    <div className="bg-bg-primary text-text-primary">
      {/* ── Hero ── */}
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
                Product Catalog
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Enterprise Platforms Built for <span className="text-gradient">Modern Businesses</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              Explore our ecosystem of modular tools designed to unify databases, streamline payroll calculation, track inventories, and optimize logistics pipelines.
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
              <ProductsScene />
            </ThreeCanvas>
          </motion.div>

        </Container>
      </Section>

      {/* ── Featured: SmartERP ── */}
      <Section className="border-b border-border-subtle">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp className="flex flex-col gap-6">
              <div>
                <Badge variant="primary" dot className="mb-3">Flagship Solution</Badge>
                <h2 className="heading-section text-text-primary">SmartERP</h2>
                <p className="text-sm text-accent-cyan font-semibold mt-2">{flagship.oneLiner}</p>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                SmartERP acts as a single operational command center for your entire enterprise. Unify inventory, shift registers, time clocks, payroll calculations, and analytics feeds under a single secure login.
              </p>
              <div className="flex flex-col gap-3">
                {flagship.features.map((feat) => (
                  <div key={feat.title} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary">{feat.title}</h4>
                      <p className="text-xs text-text-muted mt-0.5">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Button variant="gradient" size="lg" onClick={() => window.location.href = "/products/smarterp"}>
                  Explore SmartERP Details
                </Button>
              </div>
            </FadeUp>

            {/* SmartERP visual mockup */}
            <FadeUp className="glass-panel p-6 rounded-2xl border border-border-glass shadow-lg flex flex-col gap-4">
              <div className="flex items-center gap-1.5 px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-error" />
                <div className="w-2.5 h-2.5 rounded-full bg-warning" />
                <div className="w-2.5 h-2.5 rounded-full bg-success" />
                <span className="ml-auto text-[10px] text-text-disabled tracking-wider font-semibold">SmartERP Ecosystem</span>
              </div>
              <div className="bg-bg-tertiary rounded-xl p-4 flex flex-col gap-4 border border-border-subtle">
                <div className="flex justify-between items-center border-b border-border-subtle pb-3">
                  <span className="text-xs font-bold text-text-primary">Operational Status</span>
                  <span className="text-xs text-success font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" /> Live & Healthy
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Active Connections", val: "1,240", change: "+12%" },
                    { label: "Database Latency", val: "14ms", change: "Optimal" },
                    { label: "Sync Status", val: "Coordinated", change: "100%" },
                    { label: "Server Load", val: "18%", change: "Healthy" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-surface-01 p-3 rounded-lg flex flex-col gap-1">
                      <span className="text-[10px] text-text-muted">{stat.label}</span>
                      <span className="text-sm font-bold text-text-primary">{stat.val}</span>
                      <span className="text-[9px] text-accent-cyan">{stat.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </Section>

      {/* ── Client Websites ── */}
      <ClientWebsitesSection />

      {/* ── Upcoming Ecosystem ── */}
      <Section className="bg-bg-secondary/15 border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Roadmap</span>
            <h2 className="heading-section text-text-primary mt-3">Upcoming Platform Suites</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Our development roadmap includes modular tools fully compatible with the core SmartERP database system.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suites.map((suite) => {
              const Icon = iconMap[suite.icon] ?? Cpu;
              return (
                <div key={suite.id} className="glass-card p-6 flex flex-col gap-4 border border-border-glass">
                  <div className="flex justify-between items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <Badge variant={suite.status === "coming-soon" ? "coming-soon" : "planned"} dot>
                      {suite.status === "coming-soon" ? "Coming Soon" : "Planned"}
                    </Badge>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-bold text-text-primary">{suite.name}</h3>
                    <p className="text-xs text-accent-cyan font-medium mt-1">{suite.oneLiner}</p>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed">{suite.description}</p>
                  </div>
                  {suite.features && (
                    <ul className="border-t border-border-glass pt-3 flex flex-col gap-1.5">
                      {suite.features.map((feat) => (
                        <li key={feat.title} className="flex items-center gap-2 text-[11px] text-text-muted">
                          <span className="w-1 h-1 rounded-full bg-accent-primary/60 shrink-0" />
                          <span className="font-semibold text-text-secondary">{feat.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── Integrations & Security ── */}
      <Section className="border-b border-border-subtle">
        <Container className="grid md:grid-cols-2 gap-12">
          <FadeUp className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <Database className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-lg font-bold">Secure Databases</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We separate customer database scopes cleanly and enforce HTTPS transit encryption across all platforms. In accordance with our security requirements, no credentials or keys are exposed to the client bundle.
            </p>
          </FadeUp>
          <FadeUp className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-lg font-bold">Role-Based Access</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Define custom authorization matrices for staff types. Limit access to payroll adjustments or inventory edits to verified management logins.
            </p>
          </FadeUp>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <Section className="bg-bg-primary">
        <Container className="text-center flex flex-col items-center gap-6">
          <h2 className="heading-section">Interested in seeing SmartERP live?</h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Book a private guided demonstration with our lead architects to walk through inventory tracking, attendance logging, and dashboard widgets.
          </p>
          <div className="flex gap-4">
            <Button variant="gradient" size="lg" onClick={() => window.location.href = "/pricing#booking"}>
              Book a Demo
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = "/contact"}>
              Contact Sales
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

// ── Real client websites section ────────────────────────────────────────────
const CLIENT_WEBSITES = [
  {
    id: 1,
    name: "Kamadhenu Honey Farms",
    url: "https://kamadhenuhoneyfarms.in",
    category: "Business Website",
    Icon: Globe,
    color: "#f59e0b",
    colorBg: "#fffbeb",
    colorBorder: "#fde68a",
    description:
      "A premium business website for a natural honey brand — modern UI, product presentation, and brand storytelling designed to drive customer trust.",
    tags: ["Next.js", "Responsive", "UI/UX", "SEO"],
    highlight: "Live & Active",
  },
  {
    id: 2,
    name: "Master Time Table Portal",
    url: "https://master-time-table-portal.vercel.app",
    category: "Web Application",
    Icon: MonitorSmartphone,
    color: "#7c3aed",
    colorBg: "#f5f3ff",
    colorBorder: "#ddd6fe",
    description:
      "A full-featured timetable management web app — organized scheduling interface for academic institutions with a clean, user-friendly dashboard.",
    tags: ["React", "Vercel", "Dashboard", "Full-Stack"],
    highlight: "Live & Active",
  },
  {
    id: 3,
    name: "Futuristic CNC Solutions",
    url: "https://futuristiccncsolutions.vercel.app",
    category: "Corporate Website",
    Icon: Building2,
    color: "#2563eb",
    colorBg: "#eff6ff",
    colorBorder: "#bfdbfe",
    description:
      "A professional corporate website for a CNC precision engineering company — modern business design that communicates expertise and builds enterprise trust.",
    tags: ["Next.js", "Vercel", "Corporate", "SEO"],
    highlight: "Live & Active",
  },
];

function ClientWebsiteCard({ project, index }: { project: typeof CLIENT_WEBSITES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { Icon } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        background: hovered ? project.colorBg : "#ffffff",
        borderColor: hovered ? project.colorBorder : "#e2e8f0",
        boxShadow: hovered
          ? `0 20px 60px ${project.color}18, 0 4px 20px rgba(0,0,0,0.08)`
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`, opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s" }}
      />
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase w-fit"
              style={{ background: `${project.color}14`, color: project.color }}
            >
              <Icon className="w-3 h-3" />
              {project.category}
            </div>
            <h3 className="text-lg font-black text-slate-800 leading-tight">{project.name}</h3>
          </div>
          <motion.div animate={{ rotate: hovered ? 0 : -45, opacity: hovered ? 1 : 0.35 }} transition={{ duration: 0.2 }}>
            <ExternalLink className="w-4 h-4 shrink-0 mt-1" style={{ color: project.color }} />
          </motion.div>
        </div>

        {/* Live badge */}
        <div className="flex items-center gap-1.5 text-[10px] font-bold" style={{ color: project.color }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.color }} />
          {project.highlight}
        </div>

        <p className="text-sm text-slate-500 leading-relaxed flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500">{t}</span>
          ))}
        </div>

        {/* Visit button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-5 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200"
          style={{
            background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
            boxShadow: hovered ? `0 8px 24px ${project.color}40` : "none",
          }}
        >
          <span>Visit Website</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

function ClientWebsitesSection() {
  return (
    <Section className="border-b border-border-subtle" style={{ background: "#f8fafc" }}>
      <Container>
        <FadeUp className="text-center mb-12">
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full"
            style={{ background: "#7c3aed14", color: "#7c3aed", border: "1px solid #7c3aed25" }}
          >
            Our Work
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-slate-800 mt-4">
            Websites &amp; Apps We&apos;ve Built
          </h2>
          <p className="text-slate-400 mt-3 text-sm max-w-xl mx-auto">
            Real, live projects delivered to real clients — each built with premium design and measurable results.
          </p>
        </FadeUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_WEBSITES.map((project, i) => (
            <ClientWebsiteCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
