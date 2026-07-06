"use client";
/* src/components/sections/home/HomeTechStack.tsx */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { TECHNOLOGIES } from "../../../constants/technologies";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  "cloud-devops": "Cloud & DevOps",
  "animation-3d": "Animation & 3D",
};

const categoryColors: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  frontend:      { text: "#60a5fa", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.2)",  glow: "rgba(96,165,250,0.3)" },
  backend:       { text: "#22d3ee", bg: "rgba(34,211,238,0.08)",  border: "rgba(34,211,238,0.2)",  glow: "rgba(34,211,238,0.3)" },
  database:      { text: "#34d399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.2)",  glow: "rgba(52,211,153,0.3)" },
  "cloud-devops":{ text: "#fbbf24", bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.2)",  glow: "rgba(251,191,36,0.3)" },
  "animation-3d":{ text: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", glow: "rgba(167,139,250,0.3)" },
};

// Auto-scrolling marquee row
function MarqueeRow({ techs, speed, reverse, catKey }: { techs: typeof TECHNOLOGIES; speed: number; reverse: boolean; catKey: string }) {
  const c = categoryColors[catKey] ?? categoryColors.frontend;
  // Duplicate for infinite loop
  const items = [...techs, ...techs, ...techs];

  return (
    <div className="overflow-hidden relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--color-bg-secondary, #0f172a), transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-bg-secondary, #0f172a), transparent)" }} />

      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: reverse ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tech, i) => (
          <motion.div
            key={`${tech.id}-${i}`}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl cursor-default shrink-0"
            style={{
              background: c.bg,
              border: `1px solid ${c.border}`,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 4px 20px ${c.glow}`,
              borderColor: c.text,
            }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: c.text, boxShadow: `0 0 6px ${c.glow}` }}
            />
            <span className="text-sm font-semibold whitespace-nowrap" style={{ color: c.text }}>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function HomeTechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const categories = [
    ...new Set(TECHNOLOGIES.map((t) => t.category)),
  ] as (keyof typeof categoryLabels)[];

  return (
    <Section className="bg-bg-secondary/40 border-y border-border-subtle overflow-hidden">
      <Container>
        <FadeUp className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Technology Stack</span>
          <h2 className="heading-section text-text-primary mt-3">
            Modern Technologies,{" "}
            <span className="text-gradient">Enterprise Standards</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Every product and project is built using proven, battle-tested technologies selected for their performance, security, and developer ergonomics.
          </p>
        </FadeUp>
      </Container>

      <div ref={ref} className="flex flex-col gap-5 py-4">
        {categories.map((cat, i) => {
          const techs = TECHNOLOGIES.filter((t) => t.category === cat);
          const c = categoryColors[cat] ?? categoryColors.frontend;
          return (
            <motion.div
              key={cat}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Category label */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: c.text }}
                >
                  {categoryLabels[cat]}
                </span>
              </div>
              <MarqueeRow
                techs={techs}
                speed={20 + i * 5}
                reverse={i % 2 !== 0}
                catKey={cat}
              />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
export default HomeTechStack;
