"use client";
/* src/app/services/page.tsx */
import React from "react";
import { Database, Code, Cpu, Globe, Cloud, Layout, Shield, ShieldAlert, Zap, Layers, CpuIcon, Eye } from "lucide-react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { StaggerContainer } from "../../components/animations/StaggerContainer";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { SERVICES } from "../../constants/services";

const iconMap: Record<string, React.ComponentType<any>> = {
  database: Database,
  code: Code,
  smarterp: Cpu,
  globe: Globe,
  cpu: Cpu,
  cloud: Cloud,
  layout: Layout,
  shield: Shield,
};

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../components/3d/ThreeCanvas";

// Lazy-load ServicesScene
const ServicesScene = dynamic(() => import("../../components/3d/scenes/ServicesScene").then(m => m.ServicesScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function ServicesPage() {
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
                Services
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                End-to-End Software <span className="text-gradient">Engineering Services</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              We build secure, robust software architectures, custom cloud databases, and intelligent AI platform integrations designed to scale Operations.
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
              <ServicesScene />
            </ThreeCanvas>
          </motion.div>

        </Container>
      </Section>

      {/* Capabilities List */}
      <Section className="border-b border-border-subtle">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon] ?? Code;
              return (
                <FadeUp key={service.id} delay={idx * 0.05} className="glass-panel p-6 rounded-2xl border border-border-glass flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary">{service.name}</h3>
                      <Badge variant="default" className="mt-1">{service.category.toUpperCase()}</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  {service.capabilities && (
                    <div className="mt-4 pt-4 border-t border-border-glass flex flex-col gap-3">
                      <p className="text-xs font-bold text-text-primary uppercase tracking-wider">Key Capabilities</p>
                      {service.capabilities.map((cap) => (
                        <div key={cap.title} className="flex items-start gap-2 text-xs">
                          <span className="text-accent-cyan font-bold shrink-0">✓</span>
                          <div>
                            <span className="font-semibold text-text-secondary">{cap.title}</span>
                            <span className="text-text-muted"> — {cap.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </FadeUp>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Engagement Models */}
      <Section className="bg-bg-secondary/15 border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Models</span>
            <h2 className="heading-section text-text-primary mt-3">Engagement Structures</h2>
            <p className="text-text-muted mt-3 max-w-xl mx-auto">
              Choose the work model that aligns with your timeline, resources, and governance procedures.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Project-Based", desc: "Best for well-scoped milestones and MVPs with defined inputs and fixed delivery times." },
              { title: "Dedicated Team", desc: "Long-term development support integrating software engineers directly with your workflows." },
              { title: "Maintenance & Support", desc: "Focused on operational health, security loops, data updates, and query optimization." }
            ].map((model, i) => (
              <FadeUp key={i} className="glass-card p-6 flex flex-col gap-3">
                <h3 className="text-sm font-bold text-text-primary">{model.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{model.desc}</p>
              </FadeUp>
            ))}
          </div>
        </Container>
      </Section>

      {/* QA & Security */}
      <Section className="border-b border-border-subtle">
        <Container className="grid md:grid-cols-2 gap-12">
          <FadeUp className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-lg font-bold">Reliable Engineering</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We practice defensive programming, execute pull requests under strict reviews, write clear documentation, and run cross-browser QA to avoid dead links or broken layouts.
            </p>
          </FadeUp>
          <FadeUp className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-lg font-bold">Performance Budgeting</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We compile light scripts, lazy load heavy components, compress textures, and structure databases to keep latency under verified millisecond limits.
            </p>
          </FadeUp>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-primary">
        <Container className="text-center flex flex-col items-center gap-6">
          <h2 className="heading-section">Let's Design Your Solution</h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Reach out to describe your requirements and learn how we organize modular components into production platforms.
          </p>
          <div className="flex gap-4">
            <Button variant="gradient" size="lg" onClick={() => window.location.href = "/contact"}>
              Request Consulting
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = "/pricing#booking"}>
              Book a Demo
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
