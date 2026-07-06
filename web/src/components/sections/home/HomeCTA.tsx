"use client";
/* src/components/sections/home/HomeCTA.tsx */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { Button } from "../../ui/Button";

// Floating particle
function Particle({ delay, x, y, size, color }: { delay: number; x: number; y: number; size: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: color,
        filter: "blur(1px)",
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 10, 0],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: (i * 23 + 7) % 95,
  y: (i * 37 + 11) % 90,
  size: 3 + (i % 4),
  delay: i * 0.3,
  color: i % 3 === 0 ? "rgba(124,58,237,0.6)" : i % 3 === 1 ? "rgba(37,99,235,0.5)" : "rgba(6,182,212,0.5)",
}));

export function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="relative overflow-hidden bg-bg-primary border-t border-border-subtle">
      {/* Animated particles */}
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Rotating rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(124,58,237,0.08)" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{ border: "1px dashed rgba(37,99,235,0.10)" }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(6,182,212,0.07)" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <Container className="relative z-10">
        <div ref={ref} className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">

          {/* Sparkle badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
            </motion.div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-purple">
              Ready to Start?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="heading-section text-text-primary">
              Ready to Build Your{" "}
              <span className="text-gradient">Next Digital Solution?</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
              Let's have a conversation about your business challenges, operational goals, and how Prozync Innovations can help you build software that works.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="gradient"
                size="xl"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                onClick={() => (window.location.href = "/pricing#booking")}
              >
                Book a Free Demo
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="xl"
                icon={<MessageSquare className="w-5 h-5" />}
                iconPosition="left"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust note */}
          <motion.p
            className="text-xs text-text-disabled"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            No obligations. No pressure. Just a professional conversation about your business.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
export default HomeCTA;
