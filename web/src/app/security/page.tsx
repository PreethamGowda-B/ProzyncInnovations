"use client";
/* src/app/security/page.tsx */
import React from "react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";

export default function SecurityPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Section className="border-b border-border-subtle bg-bg-secondary/15 py-16">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Security</span>
          <h1 className="heading-page text-text-primary">Security Standards</h1>
          <p className="text-xs text-text-disabled">Last Updated: July 2026</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <FadeUp className="prose prose-invert text-xs sm:text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <h2 className="text-sm font-bold text-text-primary">1. Input Validation</h2>
            <p>
              We protect all public forms against database injection and automated spam scripts. Every request body is checked on the server side using Zod schema validators before committing any record parameters.
            </p>
            <h2 className="text-sm font-bold text-text-primary">2. Network Encryption</h2>
            <p>
              All connections to SmartERP databases and modular APIs are encrypted in transit using standard HTTPS loops (TLS 1.3). No credentials or database root keys are exposed to client code bundles.
            </p>
            <h2 className="text-sm font-bold text-text-primary">3. Host Redundancy</h2>
            <p>
              Our hosting pipelines feature load balancing nodes and regional replication schedules. Daily encrypted database backups are routed to secure storage to avoid single-point database failures.
            </p>
          </FadeUp>
        </Container>
      </Section>
    </div>
  );
}
