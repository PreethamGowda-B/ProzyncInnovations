"use client";
/* src/app/cookies/page.tsx */
import React from "react";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";

export default function CookiesPage() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Section className="border-b border-border-subtle bg-bg-secondary/15 py-16">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Legal</span>
          <h1 className="heading-page text-text-primary">Cookie Policy</h1>
          <p className="text-xs text-text-disabled">Last Updated: July 2026</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <FadeUp className="prose prose-invert text-xs sm:text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <h2 className="text-sm font-bold text-text-primary">1. What are Cookies?</h2>
            <p>
              Cookies are small files stored in your browser coordinates to record preferences, logins, or navigation paths.
            </p>
            <h2 className="text-sm font-bold text-text-primary">2. Our Cookie Usage</h2>
            <p>
              We do not track you using advertising cookies or search log databases. Prozync Innovations uses simple functional cookies to record browser preferences (such as when you dismiss the loading screen or cookies disclaimer banner).
            </p>
            <p>
              If you wish, you can configure your browser tools to block cookies, which may cause minor layout reload delays.
            </p>
          </FadeUp>
        </Container>
      </Section>
    </div>
  );
}
