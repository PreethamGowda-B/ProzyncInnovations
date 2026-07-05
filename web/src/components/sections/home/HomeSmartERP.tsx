"use client";
/* src/components/sections/home/HomeSmartERP.tsx */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart2, Box, Clock, FileText, ShoppingBag, Users, LayoutDashboard, TrendingUp } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { Button } from "../../ui/Button";
import { PRODUCTS } from "../../../constants/products";

const moduleIcons: Record<string, React.ComponentType<any>> = {
  dashboard: LayoutDashboard,
  inventory: Box,
  payroll: FileText,
  attendance: Clock,
  reports: BarChart2,
  analytics: TrendingUp,
  sales: ShoppingBag,
};

const smartERP = PRODUCTS.find(p => p.id === "smarterp")!;
const modules = smartERP.modules ?? [];

// Build a mock UI for each module tab
function MockDashboard({ moduleId }: { moduleId: string }) {
  const colors = {
    dashboard: { primary: "#2563eb", secondary: "#06b6d4" },
    inventory: { primary: "#10b981", secondary: "#06b6d4" },
    payroll: { primary: "#8b5cf6", secondary: "#a78bfa" },
    attendance: { primary: "#f59e0b", secondary: "#fbbf24" },
    reports: { primary: "#2563eb", secondary: "#60a5fa" },
    analytics: { primary: "#06b6d4", secondary: "#67e8f9" },
    sales: { primary: "#10b981", secondary: "#34d399" },
  };

  const c = colors[moduleId as keyof typeof colors] ?? colors.dashboard;

  return (
    <div className="w-full h-full bg-bg-tertiary/80 rounded-xl p-4 flex flex-col gap-3">
      {/* Top stat cards */}
      <div className="grid grid-cols-3 gap-2">
        {[68, 42, 91].map((val, i) => (
          <div key={i} className="bg-surface-01 rounded-lg p-3 flex flex-col gap-1">
            <span className="text-[10px] text-text-muted font-medium">
              {moduleId === "inventory" ? ["In Stock", "Low Stock", "Orders"][i] :
               moduleId === "payroll" ? ["Processed", "Pending", "Disputes"][i] :
               moduleId === "attendance" ? ["Present", "Absent", "On Leave"][i] :
               ["Active", "Pending", "Complete"][i]}
            </span>
            <span
              className="text-lg font-bold"
              style={{ color: i === 0 ? c.primary : i === 1 ? c.secondary : "#94a3b8" }}
            >
              {val}{moduleId === "attendance" ? "%" : ""}
            </span>
          </div>
        ))}
      </div>

      {/* Chart mock */}
      <div className="flex-1 bg-surface-01 rounded-lg p-3 flex flex-col gap-2">
        <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider">Performance Overview</span>
        <div className="flex items-end gap-1.5 flex-1 pt-1">
          {[35, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm opacity-80 transition-all duration-700"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, ${c.primary}, ${c.secondary})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom table rows */}
      <div className="bg-surface-01 rounded-lg p-3 flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-surface-02" />
              <div className="w-20 h-2 rounded bg-surface-02" />
            </div>
            <div className="w-10 h-2 rounded" style={{ backgroundColor: c.primary + "40" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeSmartERP() {
  const [activeModule, setActiveModule] = useState(modules[0]?.id ?? "dashboard");
  const currentModule = modules.find(m => m.id === activeModule);

  return (
    <Section className="bg-bg-primary">
      <Container>
        <FadeUp className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Flagship Product</span>
          <h2 className="heading-section text-text-primary mt-3">
            SmartERP —{" "}
            <span className="text-gradient">Intelligent Business Management</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            A fully integrated, cloud-native ERP platform that unifies your inventory, workforce, payroll, and analytics into one responsive dashboard.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          {/* ── Left: module selector ── */}
          <div className="flex flex-col gap-2">
            {modules.map((mod) => {
              const Icon = moduleIcons[mod.id] ?? LayoutDashboard;
              const isActive = mod.id === activeModule;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border ${
                    isActive
                      ? "bg-accent-primary/10 border-accent-primary/30"
                      : "border-border-glass bg-surface-glass hover:bg-surface-glass-hover hover:border-border-subtle"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isActive ? "bg-accent-primary/20" : "bg-surface-02 group-hover:bg-accent-primary/10"
                  }`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-accent-cyan" : "text-text-muted group-hover:text-accent-cyan"} transition-colors`} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isActive ? "text-text-primary" : "text-text-secondary"}`}>
                      {mod.name}
                    </p>
                    <p className="text-xs text-text-muted line-clamp-1">{mod.benefit}</p>
                  </div>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  )}
                </button>
              );
            })}

            <Button
              variant="gradient"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="mt-4"
              onClick={() => window.location.href = "/pricing#booking"}
            >
              Request a Live Demo
            </Button>
          </div>

          {/* ── Right: animated dashboard mockup ── */}
          <div className="relative">
            {/* Laptop-like frame */}
            <div className="glass-panel rounded-2xl border border-border-glass p-3 shadow-lg">
              {/* Screen header bar */}
              <div className="flex items-center gap-1.5 mb-3 px-1">
                <div className="w-3 h-3 rounded-full bg-error/50" />
                <div className="w-3 h-3 rounded-full bg-warning/50" />
                <div className="w-3 h-3 rounded-full bg-success/50" />
                <div className="ml-auto text-[10px] text-text-disabled font-medium tracking-wider">
                  SmartERP — {currentModule?.name ?? "Dashboard"}
                </div>
              </div>

              {/* Module description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="h-[360px]"
                >
                  <MockDashboard moduleId={activeModule} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating description box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule + "-desc"}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 glass-card p-4 rounded-xl"
              >
                <p className="text-sm font-semibold text-text-primary">{currentModule?.name}</p>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">{currentModule?.description}</p>
                <p className="text-xs text-accent-cyan mt-2 font-medium">✓ {currentModule?.benefit}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default HomeSmartERP;
