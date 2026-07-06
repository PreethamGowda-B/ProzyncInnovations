"use client";
/* src/components/sections/home/HomeStats.tsx */
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FolderOpen, Star, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 50, suffix: "+", label: "Happy Clients", color: "#7c3aed" },
  { icon: FolderOpen, value: 120, suffix: "+", label: "Projects Delivered", color: "#2563eb" },
  { icon: Star, value: 98, suffix: "%", label: "Client Satisfaction", color: "#06b6d4" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Available", color: "#10b981" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function HomeStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-16 border-y border-slate-200/50 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f1f5f9 0%, #f8fafc 50%, #f1f5f9 100%)",
      }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/60">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center py-4 lg:py-0"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
            >
              {/* Glowing icon */}
              <motion.div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${stat.color}12`, border: `1px solid ${stat.color}25` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ boxShadow: `0 0 20px ${stat.color}30` }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                />
                <stat.icon className="w-6 h-6 relative z-10" style={{ color: stat.color }} />
              </motion.div>

              {/* Animated number */}
              <motion.p
                className="text-4xl font-black font-heading"
                style={{ color: stat.color }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.12 + 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
              </motion.p>

              <p className="text-sm text-slate-500 font-semibold">{stat.label}</p>

              {/* Shimmer underline */}
              <motion.div
                className="h-0.5 rounded-full w-8"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
                animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.5, 1.5, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HomeStats;
