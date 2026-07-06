"use client";
/* src/components/sections/home/HomeIndustries.tsx */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Settings, Activity, ShoppingBag, BookOpen,
  Hammer, Truck, BriefcaseBusiness, Package
} from "lucide-react";
import Link from "next/link";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { INDUSTRIES } from "../../../constants/industries";

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

const industryColors = [
  { color: "#7c3aed", glow: "rgba(124,58,237,0.3)" },
  { color: "#2563eb", glow: "rgba(37,99,235,0.3)" },
  { color: "#06b6d4", glow: "rgba(6,182,212,0.3)" },
  { color: "#10b981", glow: "rgba(16,185,129,0.3)" },
  { color: "#f59e0b", glow: "rgba(245,158,11,0.3)" },
  { color: "#ef4444", glow: "rgba(239,68,68,0.3)" },
  { color: "#8b5cf6", glow: "rgba(139,92,246,0.3)" },
  { color: "#0ea5e9", glow: "rgba(14,165,233,0.3)" },
];

export function HomeIndustries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="bg-bg-primary">
      <Container>
        <FadeUp className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Industries We Serve</span>
          <h2 className="heading-section text-text-primary mt-3">
            Flexible Software for{" "}
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            SmartERP's modular architecture adapts to the operational patterns, inventory systems, and compliance requirements of businesses across multiple sectors.
          </p>
        </FadeUp>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] ?? Package;
            const c = industryColors[i % industryColors.length];
            return (
              <motion.div
                key={industry.slug}
                className="group relative glass-card p-6 flex flex-col items-center text-center gap-3 cursor-default overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Hover glow background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${c.color}10, transparent 70%)` }}
                />

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(225deg, ${c.color}20, transparent)`,
                    borderTopRightRadius: "12px",
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon container */}
                <motion.div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${c.color}10`, border: `1px solid ${c.color}25` }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glow pulse */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{ boxShadow: `0 0 24px ${c.glow}` }}
                    animate={{ opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <Icon className="w-6 h-6 relative z-10 transition-colors duration-300 group-hover:text-white" style={{ color: c.color }} />
                </motion.div>

                <p className="text-sm font-semibold text-text-secondary group-hover:text-white transition-colors duration-300">
                  {industry.name}
                </p>
                <p className="text-[11px] text-text-disabled line-clamp-2 leading-relaxed">
                  {industry.description.split(".")[0]}.
                </p>

                {/* Bottom border accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: i * 0.07 + 0.4, duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>

        <FadeUp className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan border border-accent-cyan/20 hover:border-accent-cyan/50 px-6 py-3 rounded-lg glass-panel transition-all hover:text-white duration-300"
          >
            Explore All Industries
          </Link>
        </FadeUp>
      </Container>
    </Section>
  );
}
export default HomeIndustries;
