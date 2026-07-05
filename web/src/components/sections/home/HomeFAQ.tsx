"use client";
/* src/components/sections/home/HomeFAQ.tsx */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { FAQS } from "../../../constants/faqs";

export function HomeFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const faqs = FAQS.slice(0, 6);

  return (
    <Section className="bg-bg-secondary/40 border-t border-border-subtle">
      <Container>
        <FadeUp className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">FAQ</span>
          <h2 className="heading-section text-text-primary mt-3">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </FadeUp>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <FadeUp key={faq.id} delay={i * 0.05}>
                <div
                  className={`glass-card rounded-xl border transition-all duration-300 ${
                    isOpen ? "border-accent-primary/30 bg-accent-primary/5" : "border-border-glass"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-text-primary">{faq.question}</span>
                    <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isOpen ? "bg-accent-primary/20 text-accent-cyan" : "bg-surface-glass text-text-muted"
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-text-muted px-5 pb-5 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
export default HomeFAQ;
