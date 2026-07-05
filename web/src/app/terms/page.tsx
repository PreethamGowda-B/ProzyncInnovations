"use client";
/* src/app/terms/page.tsx */
import React from "react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";

export default function TermsPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Section className="border-b border-border-subtle bg-bg-secondary/15 py-16">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Legal</span>
          <h1 className="heading-page text-text-primary">Terms of Service</h1>
          <p className="text-xs text-text-disabled">Last Updated: July 2026</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <FadeUp className="prose prose-invert text-xs sm:text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <h2 className="text-sm font-bold text-text-primary">1. Agreement to Terms</h2>
            <p>
              By accessing this website, you agree to comply with these terms, browser parameters, and design guidelines. If you do not consent to safe operational guidelines, you must cease using our services.
            </p>
            <h2 className="text-sm font-bold text-text-primary">2. Intellectual Property</h2>
            <p>
              SmartERP modular systems, logos, codebases, design tokens, illustrations, and visual mockups are exclusive assets of Prozync Innovations. You may not copy, scrape, or distribute these layouts without our written contract.
            </p>
            <h2 className="text-sm font-bold text-text-primary">3. Disclaimer</h2>
            <p>
              Prozync website materials are provided for operational overview. We make no financial guarantees or direct revenue claims regarding SmartERP deployments. Factual statements are supportable by operational parameters.
            </p>
            <p>
              Terms are subject to regular updates. Contact us at hello@prozync.com for further inquiries.
            </p>
          </FadeUp>
        </Container>
      </Section>
    </div>
  );
}
