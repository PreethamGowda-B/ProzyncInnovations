"use client";
/* src/components/sections/home/HomeStats.tsx */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FolderOpen, Star, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: FolderOpen, value: "120+", label: "Projects Delivered" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

export function HomeStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-14 border-y border-slate-200/50"
      style={{
        background: "linear-gradient(135deg, #f1f5f9 0%, #f8fafc 50%, #f1f5f9 100%)",
      }}
    >
      {/* Subtle purple glow in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/60">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center py-4 lg:py-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-1"
                style={{ background: "rgba(124, 58, 237, 0.08)", border: "1px solid rgba(124,58,237,0.15)" }}
              >
                <stat.icon className="w-5 h-5 text-accent-purple-light" />
              </div>
              <motion.p
                className="text-4xl font-black font-heading text-text-primary"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-text-muted font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HomeStats;
