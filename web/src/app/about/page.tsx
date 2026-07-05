"use client";
/* src/app/about/page.tsx */
import React from "react";
import { Shield, Target, Eye, Award, Users, ArrowRight, Zap, RefreshCw, Cpu, Database } from "lucide-react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { StaggerContainer } from "../../components/animations/StaggerContainer";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { HIRING_STEPS } from "../../constants/career";

// Values
const VALUES = [
  { icon: Shield, title: "Security First", desc: "Every database, API, and platform is designed with encryption and strict auth schemas." },
  { icon: Target, title: "Precision", desc: "We translate business processes into software modules without gaps or functional shortcuts." },
  { icon: Award, title: "Engineering Quality", desc: "No generic templates. Clean, structured TypeScript, documented models, and high performance." },
  { icon: Users, title: "Long-Term Partnerships", desc: "We coordinate operational updates, backups, and scale support year after year." }
];

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../components/3d/ThreeCanvas";

// Lazy-load 3D AboutScene
const AboutScene = dynamic(() => import("../../components/3d/scenes/AboutScene").then(m => m.AboutScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function AboutPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      {/* ── 1. About Hero ── */}
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
                About Prozync
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Building Intelligent Software for <span className="text-gradient">Modern Businesses</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              Prozync Innovations develops enterprise-grade software, ERP frameworks, and custom digital platforms engineered to streamline workflows and scale business operations.
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
              <AboutScene />
            </ThreeCanvas>
          </motion.div>

        </Container>
      </Section>

      {/* ── 2. Vision & Mission ── */}
      <Section className="border-b border-border-subtle">
        <Container className="grid md:grid-cols-2 gap-12">
          <FadeUp className="glass-panel p-8 rounded-2xl flex flex-col gap-4 border border-border-glass">
            <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-accent-cyan" />
            </div>
            <h2 className="text-xl font-bold">Our Vision</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              We envision a future where business operations are unified, transparent, and driven by high-performance software. We aim to eliminate the friction of legacy tools and disconnected systems by building coordinated digital ecosystems.
            </p>
          </FadeUp>

          <FadeUp className="glass-panel p-8 rounded-2xl flex flex-col gap-4 border border-border-glass">
            <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-accent-cyan" />
            </div>
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Our mission is to engineer reliable software systems that deliver real-world business value. We do this by combining rigorous coding standards, strict security practices, and custom, user-focused designs built for performance.
            </p>
          </FadeUp>
        </Container>
      </Section>

      {/* ── 3. Core Values ── */}
      <Section className="bg-bg-secondary/20 border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Values</span>
            <h2 className="heading-section text-text-primary mt-3">What Drives Our Work</h2>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => (
              <div key={val.title} className="glass-card p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                  <val.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-sm font-bold text-text-primary">{val.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* ── 4. The Story / Timeline ── */}
      <Section className="border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">History</span>
            <h2 className="heading-section text-text-primary mt-3">Our Roadmap & Milestones</h2>
          </FadeUp>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border-subtle" />

            <div className="flex flex-col gap-10">
              {[
                { year: "2026", title: "Prozync Foundation", desc: "Prozync Innovations founded with a mission to address the growing operational bottleneck in enterprise databases." },
                { year: "Upcoming", title: "SmartERP Expansion", desc: "Beta launch of additional product modules including CRM integration, HRMS registries, and custom billing models." },
                { year: "Planned", title: "AI Business Integrations", desc: "Injecting machine OCR scanner models and stock forecasting intelligence directly into SmartERP databases." }
              ].map((milestone, i) => (
                <FadeUp key={i} className="flex gap-6 relative">
                  <div className="z-10 w-10 h-10 rounded-full bg-bg-primary border-2 border-accent-cyan flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-accent-cyan">{milestone.year === "Upcoming" || milestone.year === "Planned" ? "•" : milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary flex items-center gap-3">
                      {milestone.title}
                      <Badge variant={milestone.year === "2026" ? "primary" : "warning"}>
                        {milestone.year === "2026" ? "Active" : milestone.year === "Upcoming" ? "Upcoming" : "Planned"}
                      </Badge>
                    </h3>
                    <p className="text-sm text-text-muted mt-2 leading-relaxed">{milestone.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 5. Team Section ── */}
      <Section className="bg-bg-secondary/10 border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Our Team</span>
            <h2 className="heading-section text-text-primary mt-3">Founder & Leadership</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              We present our structure with honesty. Prozync is led by its founding developer, supported by external network consultants, and designed to expand with planned team slots.
            </p>
          </FadeUp>

          <div className="max-w-sm mx-auto">
            <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-full bg-surface-02 border border-border-glass flex items-center justify-center">
                <Users className="w-10 h-10 text-text-muted" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary">Founder</h3>
                <p className="text-xs text-accent-cyan mt-1">Lead Architect & Developer</p>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Directs the modular system engineering of SmartERP and coordinates custom development sprints for Prozync client integrations.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 6. Final Call to Action ── */}
      <Section className="relative overflow-hidden bg-bg-primary">
        <Container className="text-center relative z-10 flex flex-col items-center gap-6">
          <h2 className="heading-section">Let's Build Something Exceptional</h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Interested in deploying SmartERP in your organization, or seeking custom development support? Get in touch with our team today.
          </p>
          <div className="flex gap-4">
            <Button variant="gradient" size="lg" onClick={() => window.location.href = "/pricing#booking"}>
              Book a Demo
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = "/contact"}>
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
