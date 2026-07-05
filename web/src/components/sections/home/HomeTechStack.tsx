"use client";
/* src/components/sections/home/HomeTechStack.tsx */
import React from "react";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { StaggerContainer } from "../../animations/StaggerContainer";
import { fadeUp } from "../../../lib/animations";
import { TECHNOLOGIES } from "../../../constants/technologies";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  "cloud-devops": "Cloud & DevOps",
  "animation-3d": "Animation & 3D",
};

const categoryColors: Record<string, string> = {
  frontend: "text-accent-azure",
  backend: "text-accent-cyan",
  database: "text-success",
  "cloud-devops": "text-warning",
  "animation-3d": "text-accent-primary",
};

export function HomeTechStack() {
  const categories = [
    ...new Set(TECHNOLOGIES.map((t) => t.category)),
  ] as (keyof typeof categoryLabels)[];

  return (
    <Section className="bg-bg-secondary/40 border-y border-border-subtle">
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

        <div className="flex flex-col gap-10">
          {categories.map((cat) => {
            const techs = TECHNOLOGIES.filter((t) => t.category === cat);
            const colorClass = categoryColors[cat] ?? "text-text-muted";
            return (
              <FadeUp key={cat} className="flex flex-col gap-4">
                <h3 className={`text-xs font-bold tracking-[0.2em] uppercase ${colorClass}`}>
                  {categoryLabels[cat]}
                </h3>
                <StaggerContainer className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <motion.div
                      key={tech.id}
                      variants={fadeUp}
                      className="group glass-card px-5 py-3 flex items-center gap-2.5 cursor-default hover:-translate-y-0.5 transition-transform"
                    >
                      <div className={`w-2 h-2 rounded-full opacity-70 ${
                        cat === "frontend" ? "bg-accent-azure" :
                        cat === "backend" ? "bg-accent-cyan" :
                        cat === "database" ? "bg-success" :
                        cat === "cloud-devops" ? "bg-warning" :
                        "bg-accent-primary"
                      }`} />
                      <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
export default HomeTechStack;
