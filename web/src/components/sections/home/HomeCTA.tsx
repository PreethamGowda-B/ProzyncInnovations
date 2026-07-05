"use client";
/* src/components/sections/home/HomeCTA.tsx */
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";
import { Button } from "../../ui/Button";

export function HomeCTA() {
  return (
    <Section className="relative overflow-hidden bg-bg-primary border-t border-border-subtle">
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none animate-pulse-slow"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(37,99,235,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent-purple/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent-primary/5 pointer-events-none" />

      <Container className="relative z-10">
        <FadeUp className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-purple">
              Ready to Start?
            </span>
            <h2 className="heading-section text-text-primary">
              Ready to Build Your{" "}
              <span className="text-gradient">Next Digital Solution?</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
              Let's have a conversation about your business challenges, operational goals, and how Prozync Innovations can help you build software that works.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="gradient"
              size="xl"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              onClick={() => window.location.href = "/pricing#booking"}
            >
              Book a Free Demo
            </Button>
            <Button
              variant="outline"
              size="xl"
              icon={<MessageSquare className="w-5 h-5" />}
              iconPosition="left"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Sales
            </Button>
          </div>

          {/* Small trust note */}
          <p className="text-xs text-text-disabled">
            No obligations. No pressure. Just a professional conversation about your business.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}
export default HomeCTA;
