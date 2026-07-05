"use client";
/* src/app/accessibility/page.tsx */
import React from "react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";

export default function AccessibilityPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Section className="border-b border-border-subtle bg-bg-secondary/15 py-16">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Accessibility</span>
          <h1 className="heading-page text-text-primary">Accessibility Statement</h1>
          <p className="text-xs text-text-disabled">Last Updated: July 2026</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <FadeUp className="prose prose-invert text-xs sm:text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <h2 className="text-sm font-bold text-text-primary">1. Standards Commitment</h2>
            <p>
              Prozync Innovations is committed to ensuring our digital experiences are accessible to all visitors. We align our components and styling parameters with the Web Content Accessibility Guidelines (WCAG 2.1 Level AA).
            </p>
            <h2 className="text-sm font-bold text-text-primary">2. Implementation Practices</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong>Semantic HTML:</strong> We use layout wrappers and semantic tags (nav, main, header, footer) to support screen readers.</li>
              <li><strong>Keyboard Navigation:</strong> All navigation menus, dropdown buttons, and forms support Tab routing and have visible focus indicators.</li>
              <li><strong>Reduced Motion:</strong> We check media query prefers-reduced-motion triggers to disable active 3D loops and page transitions for sensitive users.</li>
              <li><strong>Color Contrast:</strong> Text colors are selected to maintain contrast thresholds above 4.5:1 on dark luxury surfaces.</li>
            </ul>
            <p>
              Please contact us at hello@prozync.com if you encounter any accessibility bottlenecks.
            </p>
          </FadeUp>
        </Container>
      </Section>
    </div>
  );
}
