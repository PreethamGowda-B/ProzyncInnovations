"use client";
/* src/components/sections/home/HomeFAQ.tsx */
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { FAQS } from "../../../constants/faqs";

export function HomeFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const faqs = FAQS.slice(0, 6);

  return (
    <Section className="bg-bg-secondary/40 border-t border-border-subtle relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container>
        <FadeUp className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">FAQ</span>
          <h2 className="heading-section text-text-primary mt-3">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Everything you need to know before starting your project with us.
          </p>
        </FadeUp>

        <div ref={ref} className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <motion.div
                  className={`glass-card rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-accent-primary/30" : "border-border-glass"
                  }`}
                  animate={isOpen ? {
                    boxShadow: "0 8px 30px rgba(124,58,237,0.12)",
                    background: "rgba(124,58,237,0.04)",
                  } : {
                    boxShadow: "none",
                    background: "transparent",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Question row */}
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                  >
                    {/* Number badge */}
                    <div className="flex items-center gap-3 flex-1">
                      <motion.span
                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: isOpen ? "rgba(124,58,237,0.2)" : "rgba(100,116,139,0.1)",
                          color: isOpen ? "#a78bfa" : "#64748b",
                        }}
                        animate={{ scale: isOpen ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {i + 1}
                      </motion.span>
                      <span className="text-sm font-semibold text-text-primary">{faq.question}</span>
                    </div>

                    {/* Toggle icon */}
                    <motion.div
                      className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen ? "bg-accent-primary/20 text-accent-cyan" : "bg-surface-glass text-text-muted"
                      }`}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {/* Colored top line */}
                        <div className="mx-5 h-px bg-gradient-to-r from-accent-primary/30 via-accent-cyan/30 to-transparent" />
                        <p className="text-sm text-text-muted px-5 pt-4 pb-5 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
export default HomeFAQ;
