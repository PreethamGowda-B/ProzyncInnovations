"use client";
/* src/components/sections/home/HomeWhyChoose.tsx */
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Lightbulb, Star, TrendingUp } from "lucide-react";

const checkpoints = [
  "Experienced & Skilled Team",
  "Agile Development Process",
  "On-Time Delivery",
  "Security & Data Protection",
  "Cost-Effective Solutions",
];

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We use the latest technologies to keep you ahead.",
    color: "#7c3aed",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We follow best practices to ensure top-notch quality.",
    color: "#2563eb",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    desc: "Your success is our priority. We are always here.",
    color: "#06b6d4",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "We build solutions that grow with your business.",
    color: "#10b981",
  },
];

// Orbital ring visual
function OrbitalVisual() {
  const orbits = [
    { size: 160, duration: 6,  color: "#7c3aed", dotSize: 10, tilt: "rotateX(60deg)" },
    { size: 110, duration: 4,  color: "#2563eb", dotSize: 8,  tilt: "rotateX(60deg) rotateZ(60deg)" },
    { size: 70,  duration: 2.8, color: "#06b6d4", dotSize: 6,  tilt: "rotateX(60deg) rotateZ(120deg)" },
  ];

  return (
    <div className="relative w-64 h-64 flex items-center justify-center" style={{ perspective: "600px" }}>
      {/* Platform glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-4 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, transparent 80%)", filter: "blur(8px)" }}
        animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbiting rings */}
      {orbits.map((o, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: o.size,
            height: o.size,
            transform: o.tilt,
          }}
        >
          {/* Ring border */}
          <div
            className="w-full h-full rounded-full"
            style={{ border: `1px solid ${o.color}30` }}
          />
          {/* Orbiting dot */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: o.dotSize,
              height: o.dotSize,
              background: o.color,
              boxShadow: `0 0 10px ${o.color}80`,
              top: "50%",
              left: "50%",
              marginTop: -(o.size / 2),
              marginLeft: -(o.dotSize / 2),
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: o.duration, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
            transformTemplate={({ rotate }) =>
              `translateX(${o.size / 2 - o.dotSize / 2}px) rotate(${rotate})`
            }
          />
        </div>
      ))}

      {/* Center cube */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <defs>
            <filter id="cube-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <polygon points="50,8 92,30 50,52 8,30" fill="#7c3aed" filter="url(#cube-glow)" />
          <polygon points="92,30 92,72 50,92 50,52" fill="#5b21b6" />
          <polygon points="8,30 50,52 50,92 8,72" fill="#6d28d9" />
          <polygon points="50,8 72,19 50,30 28,19" fill="white" opacity="0.25" />
        </svg>
      </motion.div>
    </div>
  );
}

export function HomeWhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #ffffff 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(124,58,237,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* LEFT: Text + checkpoints */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p
                className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
                style={{ color: "#7c3aed" }}
              >
                Why Choose Prozync?
              </p>
              <h2 className="text-3xl lg:text-4xl font-black font-heading text-text-primary leading-tight mb-4">
                We Don't Just Build Software,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  We Build Success.
                </span>
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                At Prozync Innovations, we combine technology, creativity and strategy to deliver solutions that drive real results.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {checkpoints.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <CheckCircle className="w-4 h-4 text-accent-purple-light shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                  boxShadow: "0 8px 25px rgba(124, 58, 237, 0.25)",
                }}
              >
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* CENTER: 3D Cube Visual */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <OrbitalVisual />
          </motion.div>

          {/* RIGHT: Feature cards 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="flex flex-col gap-3 p-4 rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-sm transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, background: "rgba(255, 255, 255, 1)", boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.08)", borderColor: "rgba(124, 58, 237, 0.2)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}25` }}
                >
                  <feat.icon className="w-5 h-5" style={{ color: feat.color }} />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary mb-1">{feat.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeWhyChoose;
