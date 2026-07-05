"use client";
/* src/app/industries/page.tsx */
import React from "react";
import { Settings, Activity, ShoppingBag, BookOpen, Hammer, Truck, BriefcaseBusiness, Package, Cpu } from "lucide-react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { StaggerContainer } from "../../components/animations/StaggerContainer";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { INDUSTRIES } from "../../constants/industries";

const iconMap: Record<string, React.ComponentType<any>> = {
  settings: Settings,
  activity: Activity,
  "shopping-bag": ShoppingBag,
  "book-open": BookOpen,
  hammer: Hammer,
  truck: Truck,
  "briefcase-business": BriefcaseBusiness,
  package: Package,
};

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../components/3d/ThreeCanvas";

// Lazy-load IndustriesScene
const IndustriesScene = dynamic(() => import("../../components/3d/scenes/IndustriesScene").then(m => m.IndustriesScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function IndustriesPage() {
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
                Industries
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Coordinated Software for <span className="text-gradient">Diverse Industries</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              We adapt SmartERP databases and customize frontend layouts to coordinate inventory and staff inputs in retail, manufacturing, logistics, and healthcare scopes.
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
              <IndustriesScene />
            </ThreeCanvas>
          </motion.div>

        </Container>
      </Section>

      {/* Industries details list */}
      <Section className="border-b border-border-subtle">
        <Container className="flex flex-col gap-16">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = iconMap[ind.icon] ?? Package;
            const isEven = idx % 2 === 0;

            return (
              <FadeUp key={ind.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h2 className="heading-sub text-text-primary">{ind.name}</h2>
                      <Badge variant="primary" className="mt-1">Active Solutions</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {ind.description}
                  </p>
                  
                  {/* Related Module Connections */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-text-disabled font-bold uppercase tracking-wider mt-1.5 mr-2">Modules:</span>
                    {ind.modules.map(mod => (
                      <Badge key={mod} variant="cyan" dot>{mod.toUpperCase()}</Badge>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions Box */}
                <div className="glass-panel p-6 rounded-2xl border border-border-glass shadow-md flex flex-col gap-5 bg-surface-glass">
                  <div>
                    <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider pb-3 border-b border-border-glass">Operational Focus</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {ind.challenges.map((chal, ci) => (
                      <div key={ci} className="flex gap-3">
                        <div className="shrink-0 w-6 h-6 rounded bg-error/10 border border-error/20 flex items-center justify-center text-xs text-error font-bold">!</div>
                        <div>
                          <p className="text-xs font-bold text-text-secondary">{chal.title}</p>
                          <p className="text-[11px] text-text-muted mt-0.5">{chal.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 border-t border-border-glass pt-4">
                    {ind.solutions.map((sol, si) => (
                      <div key={si} className="flex gap-3">
                        <div className="shrink-0 w-6 h-6 rounded bg-success/10 border border-success/20 flex items-center justify-center text-xs text-success font-bold">✓</div>
                        <div>
                          <p className="text-xs font-bold text-text-secondary">{sol.title}</p>
                          <p className="text-[11px] text-text-muted mt-0.5">{sol.description} ({sol.moduleName})</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-primary">
        <Container className="text-center flex flex-col items-center gap-6">
          <h2 className="heading-section">Let's Build a Dedicated Workflow</h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Need a modular database designed around your manufacturing lines or hospital shifts? Book an engineering sync to map your workflow today.
          </p>
          <div className="flex gap-4">
            <Button variant="gradient" size="lg" onClick={() => window.location.href = "/contact"}>
              Contact Sales
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = "/pricing#booking"}>
              Request Demo
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
