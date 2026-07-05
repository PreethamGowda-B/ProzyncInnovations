"use client";
/* src/app/products/smarterp/page.tsx */
import React, { useState } from "react";
import { LayoutDashboard, Box, FileText, Clock, BarChart2, TrendingUp, ShoppingBag, ArrowRight, ShieldCheck, Database, Layers, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "../../../components/layout/Container";
import { Section } from "../../../components/layout/Section";
import { FadeUp } from "../../../components/animations/FadeUp";
import { StaggerContainer } from "../../../components/animations/StaggerContainer";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";
import { PRODUCTS } from "../../../constants/products";

const iconMap: Record<string, React.ComponentType<any>> = {
  dashboard: LayoutDashboard,
  inventory: Box,
  payroll: FileText,
  attendance: Clock,
  reports: BarChart2,
  analytics: TrendingUp,
  sales: ShoppingBag,
};

const smartERP = PRODUCTS.find((p) => p.id === "smarterp")!;

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../../components/3d/ThreeCanvas";

// Lazy-load ProductsScene for SmartERP
const ProductsScene = dynamic(() => import("../../../components/3d/scenes/ProductsScene").then(m => m.ProductsScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function SmartERPPage() {
  const [activeTab, setActiveTab] = useState(smartERP.modules?.[0]?.id ?? "dashboard");

  return (
    <div className="bg-bg-primary text-text-primary">
      {/* Back button and breadcrumb */}
      <div className="bg-bg-secondary/40 border-b border-border-subtle py-4">
        <Container className="flex items-center justify-between text-xs text-text-muted">
          <Link href="/products" className="inline-flex items-center gap-1.5 hover:text-accent-cyan transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-text-primary font-semibold">SmartERP</span>
          </div>
        </Container>
      </div>

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
              <Badge variant="primary" dot>Flagship Enterprise ERP</Badge>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                SmartERP — Complete Operational <span className="text-gradient">Visibility</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              Align database pipelines, schedule workforce shifts, automate payroll calculations, and audit warehouse logistics from a unified secure workspace.
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

      {/* Interactive module tabs deep-dive */}
      <Section className="border-b border-border-subtle">
        <Container>
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Modules</span>
            <h2 className="heading-section mt-2">Deep-Dive Module Features</h2>
          </FadeUp>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 border-b border-border-glass pb-6">
            {smartERP.modules?.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg border transition-all duration-200 ${
                  activeTab === mod.id
                    ? "bg-accent-primary/10 border-accent-primary/30 text-accent-cyan"
                    : "border-border-glass bg-surface-glass text-text-muted hover:text-text-primary"
                }`}
              >
                {mod.name}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <StaggerContainer key={activeTab} className="grid lg:grid-cols-2 gap-12 items-center">
            {smartERP.modules
              ?.filter((m) => m.id === activeTab)
              .map((mod) => {
                const Icon = iconMap[mod.id] ?? LayoutDashboard;
                return (
                  <React.Fragment key={mod.id}>
                    <div className="flex flex-col gap-6">
                      <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-cyan" />
                      </div>
                      <h3 className="heading-sub text-text-primary">{mod.name} Module</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{mod.description}</p>
                      <div className="glass-card p-4 rounded-xl border border-border-glass">
                        <p className="text-xs font-bold text-accent-cyan uppercase tracking-wider">Business Impact</p>
                        <p className="text-xs text-text-secondary mt-1">{mod.benefit}</p>
                      </div>
                    </div>
                    {/* Visual Mock representation */}
                    <div className="glass-panel p-6 rounded-2xl border border-border-glass shadow-lg">
                      <div className="flex justify-between items-center pb-4 border-b border-border-glass mb-4">
                        <span className="text-xs font-bold text-text-primary">{mod.name} Workspace</span>
                        <Badge variant="cyan">Coordinated Sync</Badge>
                      </div>
                      <div className="bg-bg-tertiary rounded-xl p-4 h-[240px] flex items-center justify-center border border-border-subtle">
                        <span className="text-xs text-text-muted uppercase tracking-wider font-bold">
                          {mod.name} Module Simulation Frame
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
          </StaggerContainer>
        </Container>
      </Section>

      {/* Security & Implementation */}
      <Section className="bg-bg-secondary/15 border-b border-border-subtle">
        <Container className="grid md:grid-cols-3 gap-8">
          <FadeUp className="glass-panel p-6 rounded-2xl border border-border-glass flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-accent-cyan" />
            </div>
            <h4 className="text-sm font-bold text-text-primary">Encrypted Sync</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              We encrypt database fields at rest and mandate secure transit endpoints across all API loops.
            </p>
          </FadeUp>
          <FadeUp className="glass-panel p-6 rounded-2xl border border-border-glass flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <Database className="w-5 h-5 text-accent-cyan" />
            </div>
            <h4 className="text-sm font-bold text-text-primary">Custom Database Keys</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Access permissions are configured using custom keys associated with user roles, ensuring secure database separation.
            </p>
          </FadeUp>
          <FadeUp className="glass-panel p-6 rounded-2xl border border-border-glass flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-accent-cyan" />
            </div>
            <h4 className="text-sm font-bold text-text-primary">Zero-Downtime Migration</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Our engineering team maps legacy columns and deploys staging replicas to ensure safe migrations.
            </p>
          </FadeUp>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-bg-primary">
        <Container className="text-center flex flex-col items-center gap-6">
          <h2 className="heading-section">Ready to Deploy SmartERP?</h2>
          <p className="text-text-muted max-w-xl text-sm leading-relaxed">
            Reach out to coordinate a requirement mapping session and schedule a guided walkthrough of our ERP platform.
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
