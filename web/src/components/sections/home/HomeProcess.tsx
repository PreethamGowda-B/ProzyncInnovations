"use client";
/* src/components/sections/home/HomeProcess.tsx */
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";

const steps = [
  {
    step: 1,
    title: "Discovery",
    desc: "We analyze your operational workflows, pain points, and business objectives through structured interviews.",
    color: "#7c3aed",
    icon: "🔍",
  },
  {
    step: 2,
    title: "Planning",
    desc: "A comprehensive technical plan covering architecture, timelines, milestones, and resource allocation.",
    color: "#2563eb",
    icon: "📋",
  },
  {
    step: 3,
    title: "Design",
    desc: "Pixel-perfect wireframes and high-fidelity prototypes reviewed before a single line of code is written.",
    color: "#06b6d4",
    icon: "🎨",
  },
  {
    step: 4,
    title: "Development",
    desc: "Modular, sprint-based development with continuous integration and weekly progress reviews.",
    color: "#10b981",
    icon: "⚙️",
  },
  {
    step: 5,
    title: "Testing",
    desc: "Rigorous quality assurance including unit tests, integration tests, and real-world usage simulations.",
    color: "#f59e0b",
    icon: "🧪",
  },
  {
    step: 6,
    title: "Deployment",
    desc: "Smooth production launches with zero-downtime deployments and comprehensive rollback strategies.",
    color: "#ef4444",
    icon: "🚀",
  },
  {
    step: 7,
    title: "Support",
    desc: "Ongoing maintenance, security patching, performance monitoring, and feature evolution partnerships.",
    color: "#8b5cf6",
    icon: "🛡️",
  },
];

function ProcessStep({ step, index, inView }: { step: typeof steps[0]; index: number; inView: boolean }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className={`relative flex items-center gap-6 lg:gap-0 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
    >
      {/* Step node */}
      <div
        className="relative z-10 shrink-0 w-12 h-12 rounded-full flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        style={{
          background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
          border: `2px solid ${step.color}50`,
          boxShadow: `0 0 20px ${step.color}30`,
        }}
      >
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${step.color}` }}
          animate={inView ? { scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
        />
        <span className="text-sm font-bold" style={{ color: step.color }}>
          {step.step}
        </span>
      </div>

      {/* Content card */}
      <motion.div
        className={`glass-card p-5 rounded-xl lg:w-[42%] ${isEven ? "lg:mr-[58%]" : "lg:ml-[58%]"}`}
        whileHover={{
          y: -4,
          boxShadow: `0 12px 40px ${step.color}20`,
          borderColor: `${step.color}40`,
        }}
        transition={{ duration: 0.2 }}
        style={{ borderColor: "transparent" }}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl">{step.icon}</span>
          <h3 className="text-base font-bold text-text-primary">{step.title}</h3>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">{step.desc}</p>

        {/* Progress indicator */}
        <motion.div
          className="mt-3 h-0.5 rounded-full"
          style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}30)` }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function HomeProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

        <div ref={ref} className="relative">
          {/* Animated scroll-driven connector line */}
          <div ref={lineRef} className="absolute left-[22px] lg:left-1/2 top-0 bottom-0 w-px bg-border-subtle/30">
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: lineHeight,
                background: "linear-gradient(to bottom, #7c3aed, #2563eb, #06b6d4, #10b981)",
              }}
            />
          </div>

          <div className="flex flex-col gap-8 lg:gap-0">
            {steps.map((step, i) => (
              <ProcessStep key={step.step} step={step} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default HomeProcess;
