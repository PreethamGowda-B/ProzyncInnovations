"use client";
/* src/app/privacy/page.tsx */
import React from "react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";

export default function PrivacyPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Section className="border-b border-border-subtle bg-bg-secondary/15 py-16">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Legal</span>
          <h1 className="heading-page text-text-primary">Privacy Policy</h1>
          <p className="text-xs text-text-disabled">Last Updated: July 2026</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <FadeUp className="prose prose-invert text-xs sm:text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <h2 className="text-sm font-bold text-text-primary">1. Information Collection</h2>
            <p>
              Prozync Innovations collects business email addresses, company names, contact numbers, and industry categories submitted directly via our Demo Booking, Contact, and Talent Network forms. We validate all inputs using Zod schemas before processing records.
            </p>
            <h2 className="text-sm font-bold text-text-primary">2. Information Processing</h2>
            <p>
              We process submitted parameters only to schedule software walkthroughs, coordinate custom project requests, or send recruitment pipeline updates. We do not distribute database files or contact records to external marketing registries.
            </p>
            <h2 className="text-sm font-bold text-text-primary">3. Database Security</h2>
            <p>
              We enforce HTTPS transit encryption across all API loops and restrict server database access using secure role-based keys. No sensitive secrets or database credentials appear in the browser client bundle.
            </p>
            <h2 className="text-sm font-bold text-text-primary">4. Cookies</h2>
            <p>
              We do not track browsing logs or usage profiles using marketing cookies. We use simple session trackers to record Loading Screen settings and keep navigations smooth.
            </p>
            <p>
              For legal queries, reach out to our team at hello@prozync.com.
            </p>
          </FadeUp>
        </Container>
      </Section>
    </div>
  );
}
