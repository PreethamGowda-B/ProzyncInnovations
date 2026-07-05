"use client";
/* src/app/not-found.tsx */
import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-[70vh] flex items-center justify-center">
      <Section size="md">
        <Container className="text-center flex flex-col items-center gap-6 max-w-md">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-error border border-error/20 bg-error/5 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse">
            Error 404
          </span>
          
          <h1 className="heading-page text-text-primary mt-2">Page Not Found</h1>
          
          <p className="text-sm text-text-muted leading-relaxed">
            The database parameters you requested do not point to any active routes. Let's redirect you back to operational directories.
          </p>

          <div className="flex gap-4 mt-2">
            <Link href="/">
              <Button variant="gradient" icon={<Home className="w-4 h-4" />}>
                Go Home
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline">
                Explore Products
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
