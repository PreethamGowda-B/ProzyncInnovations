"use client";
/* src/components/sections/home/HomeServices.tsx */
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Code, Globe, Cpu, Cloud, Smartphone, Layout, Shield } from "lucide-react";
import Link from "next/link";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { StaggerContainer } from "../../animations/StaggerContainer";
import { fadeUp } from "../../../lib/animations";
import { SERVICES } from "../../../constants/services";

const iconComponents: Record<string, React.ComponentType<any>> = {
  database: Database,
  code: Code,
  smarterp: Cpu,
  globe: Globe,
  cpu: Cpu,
  cloud: Cloud,
  layout: Layout,
  shield: Shield,
};

export function HomeServices() {
  return (
    <Section className="bg-bg-secondary/30">
      <Container>
        <FadeUp className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Our Services</span>
          <h2 className="heading-section text-text-primary mt-3">
            End-to-End Software{" "}
            <span className="text-gradient">Development & Engineering</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            From custom enterprise platforms to AI integrations and cloud infrastructure, we deliver complete software solutions built for long-term growth.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = iconComponents[service.icon] ?? Code;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group glass-card glass-card-hover p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary/5 flex items-center justify-center group-hover:bg-accent-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-accent-purple-light" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-bold text-text-primary group-hover:text-accent-purple transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-xs text-accent-purple font-semibold hover:text-accent-purple-light transition-colors group/link"
                >
                  Learn More <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>

        <FadeUp className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-purple hover:text-white border border-accent-purple/20 hover:border-accent-purple/50 hover:bg-accent-purple px-6 py-3 rounded-lg glass-panel transition-all duration-300"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </Container>
    </Section>
  );
}
export default HomeServices;
