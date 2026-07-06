"use client";
/* src/components/sections/home/HomeHero.tsx */
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Shield, Clock, Zap, Star, Activity, ArrowUpRight, CheckCircle2, Server, Globe, Database, Cpu } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Secure & Reliable" },
  { icon: Zap, label: "Scalable Solutions" },
  { icon: Clock, label: "Fast Delivery" },
];
const seq = [0.1, 0.3, 0.45, 0.6, 0.75, 0.9];

/* ── Interactive 3D Parallax Dashboard Component ────────────────── */
function PremiumDashboardVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth 3D tilt
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Spring configurations for buttery-smooth damping
  const springConfig = { damping: 25, stiffness: 120, mass: 0.6 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Max 12 degrees rotation
    rotateX.set(-(mouseY / (height / 2)) * 12);
    rotateY.set((mouseX / (width / 2)) * 12);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[500px] flex items-center justify-center cursor-pointer select-none perspective-[1000px]"
    >
      {/* Dynamic 3D tilt wrapper */}
      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[540px] aspect-[4/3] flex items-center justify-center"
      >
        {/* ── Background soft glow orbs behind dashboard ── */}
        <div className="absolute inset-0 pointer-events-none blur-[100px] opacity-40 mix-blend-multiply"
          style={{
            background: "radial-gradient(circle, #a78bfa 0%, #3b82f6 50%, transparent 70%)",
            transform: "translateZ(-80px)",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-cyan-200/30 blur-[80px] pointer-events-none"
          style={{ transform: "translateZ(-100px)" }}
        />

        {/* ── Background vector grids & orbits ── */}
        <svg className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%] opacity-45 pointer-events-none" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="180" stroke="url(#orbit-grad-1)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="300" r="240" stroke="url(#orbit-grad-2)" strokeWidth="1.5" />
          <path d="M 150 150 C 250 100, 350 500, 450 450" stroke="url(#orbit-grad-3)" strokeWidth="1" strokeDasharray="3 9" />
          <defs>
            <linearGradient id="orbit-grad-1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orbit-grad-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="orbit-grad-3" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Main Glassmorphism Dashboard Card ── */}
        <motion.div
          style={{ transform: "translateZ(0px)" }}
          className="relative w-full h-full bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-[0_24px_50px_rgba(31,38,135,0.07)] overflow-hidden flex flex-col"
        >
          {/* Dashboard Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-white/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 border border-slate-100/60 text-[10px] text-slate-500 font-medium select-none">
              <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
              <span>prozync-cloud-portal</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] text-slate-400 font-bold tracking-wider uppercase">Live</span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="flex-1 p-5 grid grid-cols-3 gap-4 bg-gradient-to-b from-white/10 to-slate-50/20">
            {/* Sidebar section */}
            <div className="col-span-1 border-r border-slate-100/80 pr-4 flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Automation Modules</span>
                {[
                  { icon: Cpu, name: "Neural AI Core", active: true },
                  { icon: Database, name: "SmartERP Sync", active: false },
                  { icon: Server, name: "Data Warehouse", active: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-2.5 py-2 rounded-lg border transition-all duration-300 ${
                      item.active
                        ? "bg-violet-500/10 border-violet-100 text-violet-700 font-semibold"
                        : "bg-white/40 border-slate-100/60 text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    <item.icon className={`w-3.5 h-3.5 ${item.active ? "text-violet-600" : "text-slate-400"}`} />
                    <span className="text-[10px] truncate">{item.name}</span>
                  </div>
                ))}
              </div>

              {/* Server health check logs */}
              <div className="mt-auto flex flex-col gap-1.5">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Realtime status</span>
                <div className="p-2 rounded-lg bg-slate-900 text-cyan-400 font-mono text-[8px] leading-relaxed flex flex-col gap-0.5 shadow-inner">
                  <span className="text-[7px] text-slate-500">[12:44:02] CPU load: 12%</span>
                  <span className="text-[7px] text-emerald-400">&gt; DB latency: 1.4ms</span>
                  <span className="text-[7px] text-violet-400">&gt; Sync complete (100%)</span>
                </div>
              </div>
            </div>

            {/* Main Graph Area */}
            <div className="col-span-2 flex flex-col justify-between pl-1">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-medium">Efficiency Index</span>
                  <span className="text-sm font-black text-slate-800 tracking-tight">+94.6%</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[9px] text-emerald-700 font-semibold">
                  <span>99.9% Uptime</span>
                </div>
              </div>

              {/* High-quality vector chart (Revenue / Optimization scale) */}
              <div className="relative w-full h-[110px] my-3">
                <svg className="absolute w-full h-full" viewBox="0 0 240 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="20" x2="240" y2="20" stroke="#f1f5f9" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="240" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="240" y2="80" stroke="#f1f5f9" strokeWidth="0.5" />

                  {/* Chart Path Area */}
                  <path
                    d="M 0 90 Q 40 70, 70 85 T 120 40 T 180 55 T 240 15 L 240 100 L 0 100 Z"
                    fill="url(#chart-area-grad)"
                  />

                  {/* Main Line */}
                  <path
                    d="M 0 90 Q 40 70, 70 85 T 120 40 T 180 55 T 240 15"
                    fill="none"
                    stroke="url(#line-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Interactive Nodes */}
                  <circle cx="120" cy="40" r="4" fill="#7c3aed" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="240" cy="15" r="4.5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1.5" />
                </svg>

                {/* Animated Scanner Bar */}
                <motion.div
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-violet-500/80 via-indigo-500/40 to-transparent pointer-events-none"
                />
              </div>

              {/* Sub features bar */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[9px] text-slate-500">Auto-Scaling</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[9px] text-slate-500">Multi-Cloud</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[9px] text-slate-500">Edge API</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── FLOATING WIDGET 1: Premium Glass Credit Card / Payment success ── */}
        <motion.div
          style={{ transform: "translateZ(45px)" }}
          className="absolute -left-6 top-[22%] w-[210px] p-4 bg-white/80 backdrop-blur-xl border border-white/90 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex flex-col gap-2.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase">Transactions</span>
            <span className="text-[8px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold flex items-center gap-0.5 border border-emerald-100">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
              Verified
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
              <Globe className="w-4 h-4 text-white animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-800">Prozync Global API</span>
              <span className="text-[8px] text-slate-400">Payment Routing Gateway</span>
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-1 border-t border-slate-100">
            <span className="text-xs font-black text-slate-800">$18,490.50</span>
            <span className="text-[9px] text-emerald-600 font-bold flex items-center gap-0.5">
              <ArrowUpRight className="w-3 h-3" /> +14.2%
            </span>
          </div>
        </motion.div>

        {/* ── FLOATING WIDGET 2: Active User Bubble ── */}
        <motion.div
          style={{ transform: "translateZ(30px)" }}
          className="absolute -right-8 top-[10%] bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-slate-100/80 flex items-center gap-2.5"
        >
          <div className="relative w-2.5 h-2.5 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-700 tracking-tight">142 users active</span>
            <span className="text-[8px] text-slate-400 font-medium">Real-time cloud instances</span>
          </div>
        </motion.div>

        {/* ── FLOATING WIDGET 3: AI Copilot System Status ── */}
        <motion.div
          style={{ transform: "translateZ(55px)" }}
          className="absolute -right-6 bottom-[18%] w-[200px] p-3.5 bg-gradient-to-r from-violet-600/90 to-indigo-600/90 backdrop-blur-xl border border-violet-500/30 rounded-xl shadow-[0_15px_30px_rgba(124,58,237,0.18)] flex items-center justify-between text-white"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Cpu className="w-3.5 h-3.5 text-violet-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-wide">AI Auto-Agent</span>
              <span className="text-[8px] text-violet-200">Processing workflows</span>
            </div>
          </div>
          <span className="text-[8px] px-2 py-0.5 rounded-full bg-white/20 text-white font-bold border border-white/10 uppercase tracking-widest">
            Idle
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── 3D floating background glass cube ───────────────────────── */
function FloatingCube({
  size = 80,
  color = "#7c3aed",
  delay = 0,
  x = 0,
  y = 0,
  opacity = 0.7,
}: {
  size?: number;
  color?: string;
  delay?: number;
  x?: number;
  y?: number;
  opacity?: number;
}) {
  const id = `c${color.slice(1)}${delay}`;
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [-16, 16, -16],
        rotateY: [0, 15, 0, -15, 0],
        rotateX: [0, 8, 0],
      }}
      transition={{
        duration: 8 + delay * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        style={{ filter: `drop-shadow(0 4px ${size / 3}px ${color}35)` }}
      >
        <defs>
          <linearGradient id={`g${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <stop offset="100%" stopColor={color} stopOpacity={opacity * 0.35} />
          </linearGradient>
        </defs>
        {/* Top Face */}
        <polygon points="50,8 92,30 50,52 8,30" fill={`url(#g${id})`} />
        {/* Right Face */}
        <polygon points="92,30 92,72 50,92 50,52" fill={color} opacity={opacity * 0.45} />
        {/* Left Face */}
        <polygon points="8,30 50,52 50,92 8,72" fill={color} opacity={opacity * 0.65} />
        {/* Top Glare Edge */}
        <polygon points="50,8 72,19 50,30 28,19" fill="white" opacity="0.35" />
        {/* Internal Core Accent Line */}
        <line x1="50" y1="52" x2="50" y2="92" stroke="white" strokeOpacity="0.18" strokeWidth="0.5" />
      </svg>
    </motion.div>
  );
}


/* ── Main Hero ────────────────────────────────────────────────── */
export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #f6f4fe 45%, #eff6ff 100%)" }}
    >
      {/* ── Premium Gradient background orbs (parallax + video morphing animation) ───────────────── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes orb-float-right {
            0% { transform: translate(20%, -20%) scale(1) rotate(0deg); }
            33% { transform: translate(15%, -15%) scale(1.15) rotate(120deg); }
            66% { transform: translate(25%, -25%) scale(0.9) rotate(240deg); }
            100% { transform: translate(20%, -20%) scale(1) rotate(360deg); }
          }
          @keyframes orb-float-left {
            0% { transform: translate(-20%, 20%) scale(1.05) rotate(0deg); }
            50% { transform: translate(-10%, 15%) scale(0.85) rotate(-180deg); }
            100% { transform: translate(-20%, 20%) scale(1.05) rotate(-360deg); }
          }
          @keyframes orb-float-mid {
            0% { transform: translate(-50%, -50%) scale(0.9) rotate(0deg); opacity: 0.05; }
            50% { transform: translate(-45%, -52%) scale(1.1) rotate(180deg); opacity: 0.08; }
            100% { transform: translate(-50%, -50%) scale(0.9) rotate(360deg); opacity: 0.05; }
          }
          .animate-orb-r {
            animation: orb-float-right 28s infinite ease-in-out;
            will-change: transform;
          }
          .animate-orb-l {
            animation: orb-float-left 32s infinite ease-in-out;
            will-change: transform;
          }
          .animate-orb-m {
            animation: orb-float-mid 24s infinite ease-in-out;
            will-change: transform;
          }
        `}} />
        
        {/* Violet Right Orb */}
        <div
          className="absolute top-0 right-0 w-[950px] h-[950px] rounded-full blur-[140px] opacity-[0.14] animate-orb-r"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 68%)",
          }}
        />
        
        {/* Blue Left Orb */}
        <div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[125px] opacity-[0.11] animate-orb-l"
          style={{
            background: "radial-gradient(circle, #2563eb 0%, transparent 68%)",
          }}
        />

        {/* Cyan Center Orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[110px] animate-orb-m"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 65%)",
          }}
        />
        
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>


      {/* ── Background floating 3D glass cubes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingCube size={85} color="#7c3aed" delay={0} x={3} y={18} opacity={0.75} />
        <FloatingCube size={58} color="#2563eb" delay={1.5} x={88} y={8} opacity={0.7} />
        <FloatingCube size={44} color="#06b6d4" delay={3.2} x={82} y={72} opacity={0.65} />
        <FloatingCube size={34} color="#8b5cf6" delay={2.1} x={6} y={72} opacity={0.6} />
        <FloatingCube size={28} color="#6366f1" delay={4} x={55} y={4} opacity={0.55} />
        <FloatingCube size={24} color="#f59e0b" delay={1} x={48} y={88} opacity={0.5} />
      </div>


      {/* ── Main content grid ─────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pt-28 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT: Text Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[0], duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  borderColor: "rgba(124,58,237,0.18)",
                  color: "#7c3aed",
                }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-violet-500"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Software Solutions for the Future
              </span>
            </motion.div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              {[
                { text: "Innovate. Automate.", gradient: false },
                { text: "Scale with Prozync.", gradient: true },
              ].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    className="font-heading font-black leading-tight text-[clamp(2.2rem,5vw,3.8rem)]"
                    style={
                      line.gradient
                        ? {
                            background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 55%, #06b6d4 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : { color: "#1e293b" }
                    }
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ delay: seq[1] + i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Description */}
            <motion.p
              className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              We build powerful, scalable and intelligent software solutions that help businesses
              automate operations, improve productivity and grow without limits.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[3], duration: 0.5 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                  boxShadow: "0 8px 30px rgba(124,58,237,0.32)",
                }}
              >
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing#booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 border"
                style={{
                  borderColor: "rgba(124,58,237,0.20)",
                  color: "#7c3aed",
                  background: "rgba(124,58,237,0.04)",
                }}
              >
                Book a Demo
                <div className="w-6 h-6 rounded-full border border-violet-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-5 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: seq[5], duration: 0.6 }}
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-slate-500"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: seq[5] + i * 0.08 }}
                >
                  <item.icon className="w-4 h-4 text-violet-500 shrink-0" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Interactive 3D Parallax Dashboard Column (7 cols) */}
          <motion.div
            className="lg:col-span-7 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <PremiumDashboardVisual />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[10px] text-slate-400 tracking-widest uppercase font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeHero;
