"use client";
/* src/components/sections/home/HomeIndustries.tsx */
import React from "react";
import { motion } from "framer-motion";
import {
  Settings, Activity, ShoppingBag, BookOpen,
  Hammer, Truck, BriefcaseBusiness, Package
} from "lucide-react";
import Link from "next/link";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { StaggerContainer } from "../../animations/StaggerContainer";
import { fadeUp } from "../../../lib/animations";
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

export function HomeIndustries() {
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

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Package;
            return (
              <motion.div
                key={industry.slug}
                variants={fadeUp}
                className="group glass-card glass-card-hover p-5 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <p className="text-sm font-semibold text-text-secondary group-hover:text-white transition-colors">
                  {industry.name}
                </p>
                <p className="text-[11px] text-text-disabled line-clamp-2 leading-relaxed">
                  {industry.description.split(".")[0]}.
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

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
