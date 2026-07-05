"use client";
/* src/app/portfolio/page.tsx */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Globe, MonitorSmartphone, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { Button } from "../../components/ui/Button";

// ── Real completed projects ──────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: "Kamadhenu Honey Farms",
    url: "https://kamadhenuhoneyfarms.in",
    category: "Business Website",
    categoryIcon: Globe,
    color: "#f59e0b",
    colorBg: "#fffbeb",
    colorBorder: "#fde68a",
    description:
      "A premium business website developed for a natural honey brand. Features modern UI with product presentation, brand storytelling, and complete business information — designed to establish credibility and drive customer engagement.",
    tags: ["Next.js", "Responsive Design", "UI/UX", "Brand Identity", "SEO"],
    highlight: "Premium consumer brand experience",
  },
  {
    id: 2,
    name: "Master Time Table Portal",
    url: "https://master-time-table-portal.vercel.app",
    category: "Web Application",
    categoryIcon: MonitorSmartphone,
    color: "#7c3aed",
    colorBg: "#f5f3ff",
    colorBorder: "#ddd6fe",
    description:
      "A full-featured web application designed to simplify academic timetable management. Provides an organized, user-friendly interface for scheduling and managing class timetables with efficiency and clarity.",
    tags: ["React", "Vercel", "Full-Stack", "Dashboard", "Data Management"],
    highlight: "Smart scheduling for institutions",
  },
  {
    id: 3,
    name: "Futuristic CNC Solutions",
    url: "https://futuristiccncsolutions.vercel.app",
    category: "Corporate Website",
    categoryIcon: Building2,
    color: "#2563eb",
    colorBg: "#eff6ff",
    colorBorder: "#bfdbfe",
    description:
      "A professional corporate website for a CNC precision engineering solutions company. Features a modern business-focused design that communicates technical expertise, showcases services, and builds enterprise trust.",
    tags: ["Next.js", "Vercel", "Corporate Design", "Responsive", "SEO"],
    highlight: "Enterprise-grade corporate presence",
  },
];

// ── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.categoryIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        background: hovered ? project.colorBg : "#ffffff",
        borderColor: hovered ? project.colorBorder : "#e2e8f0",
        boxShadow: hovered
          ? `0 20px 60px ${project.color}18, 0 4px 20px rgba(0,0,0,0.08)`
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.color} 0%, ${project.color}80 100%)`,
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.3s",
        }}
      />

      {/* Card content */}
      <div className="flex flex-col flex-1 p-7 gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            {/* Category badge */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase w-fit"
              style={{ background: `${project.color}14`, color: project.color }}
            >
              <Icon className="w-3 h-3" />
              {project.category}
            </div>
            <h3 className="text-xl font-black text-slate-800 leading-tight">{project.name}</h3>
          </div>

          {/* External link icon */}
          <motion.div
            animate={{ rotate: hovered ? 0 : -45, opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 mt-1"
          >
            <ExternalLink className="w-5 h-5" style={{ color: project.color }} />
          </motion.div>
        </div>

        {/* Highlight line */}
        <div
          className="text-xs font-semibold px-3 py-1.5 rounded-lg w-fit"
          style={{ background: `${project.color}10`, color: project.color }}
        >
          ✦ {project.highlight}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed flex-1">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-5 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 group/btn"
          style={{
            background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}cc 100%)`,
            boxShadow: hovered ? `0 8px 24px ${project.color}40` : "none",
          }}
        >
          <span>Visit Website</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero */}
      <Section className="relative overflow-hidden min-h-[48vh] flex items-center border-b border-slate-200/60">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #f0f4ff 50%, #fdf4ff 100%)",
          }}
        />
        {/* Decorative orbs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />

        <Container className="relative z-10 text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 rounded-full"
            style={{ background: "#7c3aed14", color: "#7c3aed", border: "1px solid #7c3aed25" }}
          >
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-black text-slate-800 leading-tight max-w-3xl"
          >
            Real Projects.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real Results.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 max-w-2xl text-base lg:text-lg leading-relaxed"
          >
            Every project we showcase is a completed, live product. No placeholders, no mock-ups — only real work delivered to real clients.
          </motion.p>
        </Container>
      </Section>

      {/* Project grid */}
      <Section className="bg-slate-50/60">
        <Container>
          <FadeUp className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-800">
              Completed Projects
            </h2>
            <p className="text-slate-400 mt-3 text-sm max-w-xl mx-auto">
              Browse our completed client deliverables — each built with premium design, clean code, and measurable outcomes.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white border-t border-slate-200/60">
        <Container className="text-center flex flex-col items-center gap-6">
          <FadeUp>
            <h2 className="text-3xl font-black text-slate-800">
              Ready to Build Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Next Project?
              </span>
            </h2>
            <p className="text-slate-400 max-w-xl text-sm leading-relaxed mt-3">
              Let's discuss your requirements and build something exceptional together. We deliver premium digital products on time.
            </p>
            <div className="flex gap-4 justify-center mt-6 flex-wrap">
              <Link href="/contact">
                <Button variant="gradient" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Start a Project
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </FadeUp>
        </Container>
      </Section>
    </div>
  );
}
