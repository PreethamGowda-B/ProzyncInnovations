"use client";
/* src/components/sections/home/HomeProcess.tsx */
import React from "react";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";

const steps = [
  { step: 1, title: "Discovery", desc: "We analyze your operational workflows, pain points, and business objectives through structured interviews." },
  { step: 2, title: "Planning", desc: "A comprehensive technical plan covering architecture, timelines, milestones, and resource allocation." },
  { step: 3, title: "Design", desc: "Pixel-perfect wireframes and high-fidelity prototypes reviewed before a single line of code is written." },
  { step: 4, title: "Development", desc: "Modular, sprint-based development with continuous integration and weekly progress reviews." },
  { step: 5, title: "Testing", desc: "Rigorous quality assurance including unit tests, integration tests, and real-world usage simulations." },
  { step: 6, title: "Deployment", desc: "Smooth production launches with zero-downtime deployments and comprehensive rollback strategies." },
  { step: 7, title: "Support", desc: "Ongoing maintenance, security patching, performance monitoring, and feature evolution partnerships." },
];

export function HomeProcess() {
  return (
    <Section className="bg-bg-primary">
      <Container>
        <FadeUp className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">How We Work</span>
          <h2 className="heading-section text-text-primary mt-3">
            A Process Built for{" "}
            <span className="text-gradient">Engineering Excellence</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Every project follows a disciplined, transparent workflow that ensures quality at every phase — from first conversation to long-term support.
          </p>
        </FadeUp>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[22px] lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/40 via-accent-cyan/20 to-transparent" />

          <div className="flex flex-col gap-8 lg:gap-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeUp
                  key={step.step}
                  delay={i * 0.08}
                  className={`relative flex items-center gap-6 lg:gap-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step node */}
                  <div className="relative z-10 shrink-0 w-11 h-11 rounded-full glass-panel border border-accent-primary/30 flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <span className="text-sm font-bold text-accent-cyan">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className={`glass-card p-5 rounded-xl lg:w-[42%] ${isEven ? "lg:mr-[58%]" : "lg:ml-[58%]"}`}>
                    <h3 className="text-base font-bold text-text-primary">{step.title}</h3>
                    <p className="text-sm text-text-muted mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default HomeProcess;
