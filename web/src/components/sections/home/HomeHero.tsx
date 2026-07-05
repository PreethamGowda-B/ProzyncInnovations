"use client";
/* src/components/sections/home/HomeHero.tsx */
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Shield, Clock, Zap, Star, ChevronDown } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Secure & Reliable" },
  { icon: Zap, label: "Scalable Solutions" },
  { icon: Clock, label: "Fast Delivery" },
];

const seq = [0.1, 0.3, 0.45, 0.6, 0.75, 0.9];

/* ── 3D floating cube ─────────────────────────────────────────── */
function FloatingCube({ size = 80, color = "#7c3aed", delay = 0, x = 0, y = 0, opacity = 0.7 }: {
  size?: number; color?: string; delay?: number; x?: number; y?: number; opacity?: number;
}) {
  const id = `c${color.slice(1)}${delay}`;
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ y: [-14, 14, -14], rotateY: [0, 15, 0, -15, 0], rotateX: [0, 5, 0] }}
      transition={{ duration: 7 + delay * 1.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ filter: `drop-shadow(0 0 ${size / 4}px ${color}60)` }}>
        <defs>
          <linearGradient id={`g${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.4} />
          </linearGradient>
        </defs>
        <polygon points="50,8 92,30 50,52 8,30" fill={`url(#g${id})`} />
        <polygon points="92,30 92,72 50,92 50,52" fill={color} opacity={opacity * 0.45} />
        <polygon points="8,30 50,52 50,92 8,72" fill={color} opacity={opacity * 0.6} />
        <polygon points="50,8 72,19 50,30 28,19" fill="white" opacity="0.3" />
        <line x1="50" y1="52" x2="50" y2="92" stroke="white" strokeOpacity="0.12" strokeWidth="0.5" />
      </svg>
    </motion.div>
  );
}

/* ── 3D Laptop with mouse-parallax ─────────────────────────────── */
function LaptopMockup() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    setTilt({ x: dy * -14, y: dx * 14 });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const springX = useSpring(tilt.x, { stiffness: 120, damping: 20 });
  const springY = useSpring(tilt.y, { stiffness: 120, damping: 20 });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[600px] mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      {/* Multi-layer glow */}
      <div className="absolute -inset-8 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, #2563eb 40%, transparent 70%)" }} />
      <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 60%)" }} />

      <motion.div
        className="relative z-10"
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.75, duration: 0.9, ease: "easeOut" }}
      >
        {/* Screen bezel */}
        <div className="rounded-t-2xl overflow-hidden border-[3px]"
          style={{
            borderColor: "#1e2a45",
            background: "linear-gradient(135deg, #0d1525 0%, #1a2540 100%)",
            boxShadow: "0 0 80px rgba(124,58,237,0.35), 0 0 30px rgba(37,99,235,0.2), inset 0 0 40px rgba(0,0,0,0.6)",
          }}
        >
          {/* Browser bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-black/50 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <div className="ml-4 flex-1 bg-white/5 rounded-md h-5 flex items-center px-3 gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-[9px] text-slate-400 font-medium">smarterp.prozync.com/dashboard</span>
            </div>
          </div>

          {/* Dashboard */}
          <div className="p-4 h-[300px] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }} />
                <span className="text-xs font-bold text-white">SmartERP</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Revenue", value: "₹24.5M", color: "#7c3aed", change: "+12%" },
                { label: "Orders", value: "1,245", color: "#2563eb", change: "+8%" },
                { label: "Users", value: "3,456", color: "#06b6d4", change: "+24%" },
              ].map((s, i) => (
                <div key={i} className="rounded-lg p-2.5 border border-white/5" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <p className="text-[9px] text-slate-400 mb-1">{s.label}</p>
                  <p className="text-sm font-bold text-white">{s.value}</p>
                  <p className="text-[8px] mt-0.5 font-semibold" style={{ color: s.color }}>{s.change}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="flex-1 rounded-lg p-3 border border-white/5" style={{ background: "rgba(255,255,255,0.025)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">Revenue Overview</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span className="text-[8px] text-slate-400">2024</span>
                </div>
              </div>
              <div className="flex items-end gap-1 h-14">
                {[40, 65, 45, 80, 60, 90, 70, 85, 75, 95, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      background: i === 11
                        ? "linear-gradient(to top, #7c3aed, #8b5cf6)"
                        : i >= 9 ? "linear-gradient(to top, #2563eb50, #2563eb90)"
                        : "linear-gradient(to top, #ffffff10, #ffffff25)",
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.6 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>

            {/* Donut */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shrink-0">
                <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ffffff08" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#7c3aed" strokeWidth="3"
                    strokeDasharray="72 100" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">72%</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span className="text-[8px] text-slate-400">Inventory: 72%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-[8px] text-slate-400">Payroll: 18%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="h-4 rounded-b-lg mx-3" style={{ background: "linear-gradient(180deg, #1a2540, #0d1525)", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }} />
        <div className="h-2 rounded-b-2xl mx-0" style={{ background: "linear-gradient(180deg, #0d1525, #080f1e)" }} />
        <div className="h-1 w-24 mx-auto rounded-full mt-1" style={{ background: "#0d1525" }} />
      </motion.div>

      {/* Floating mini badge */}
      <motion.div
        className="absolute -right-4 top-16 z-20 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100 flex items-center gap-2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-bold text-slate-700">24 live users</span>
      </motion.div>

      <motion.div
        className="absolute -left-6 bottom-20 z-20 bg-white rounded-xl px-3 py-2 shadow-xl border border-slate-100 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }}
      >
        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
        <span className="text-[10px] font-bold text-slate-700">Trusted by 100+ clients</span>
      </motion.div>
    </div>
  );
}

/* ── Main Hero ─────────────────────────────────────────────────── */
export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f3f0ff 45%, #e0f2fe 100%)" }}
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 65%)", transform: "translate(25%, -25%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 65%)", transform: "translate(-25%, 25%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 65%)" }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
      </motion.div>

      {/* 3D Floating cubes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingCube size={80} color="#7c3aed" delay={0} x={3} y={18} opacity={0.75} />
        <FloatingCube size={55} color="#2563eb" delay={1.5} x={88} y={8} opacity={0.7} />
        <FloatingCube size={42} color="#06b6d4" delay={3.2} x={82} y={72} opacity={0.65} />
        <FloatingCube size={32} color="#8b5cf6" delay={2.1} x={6} y={72} opacity={0.6} />
        <FloatingCube size={28} color="#6366f1" delay={4} x={55} y={4} opacity={0.55} />
        <FloatingCube size={22} color="#f59e0b" delay={1} x={48} y={88} opacity={0.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pt-28 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6 lg:gap-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: seq[0], duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border"
                style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.2)", color: "#7c3aed" }}>
                <motion.span
                  className="w-2 h-2 rounded-full bg-violet-500"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Software Solutions for the Future
              </span>
            </motion.div>

            <div className="flex flex-col gap-1">
              {[
                { text: "Innovate. Automate.", gradient: false },
                { text: "Scale with Prozync.", gradient: true },
              ].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    className="font-heading font-black leading-tight text-[clamp(2.2rem,5vw,3.8rem)]"
                    style={line.gradient ? {
                      background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 55%, #06b6d4 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    } : { color: "#1e293b" }}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ delay: seq[1] + i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}>
              We build powerful, scalable and intelligent software solutions that help businesses automate operations, improve productivity and grow without limits.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[3], duration: 0.5 }}>
              <Link href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{ background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)", boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}>
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pricing#booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 border"
                style={{ borderColor: "rgba(124,58,237,0.2)", color: "#7c3aed", background: "rgba(124,58,237,0.05)" }}>
                Book a Demo
                <div className="w-6 h-6 rounded-full border border-violet-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            <motion.div className="flex flex-wrap gap-5 pt-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: seq[5], duration: 0.6 }}>
              {trustItems.map((item, i) => (
                <motion.div key={item.label} className="flex items-center gap-2 text-sm text-slate-500"
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: seq[5] + i * 0.08 }}>
                  <item.icon className="w-4 h-4 text-violet-500 shrink-0" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <LaptopMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.6 }}>
        <span className="text-[10px] text-slate-400 tracking-widest uppercase font-medium">Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
export default HomeHero;
