"use client";
/* src/app/error.tsx */
import React, { useEffect } from "react";
import { RotateCcw, AlertTriangle } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics or reporting hook
    console.error("Unhandle layout error:", error);
  }, [error]);

  return (
    <div className="bg-bg-primary text-text-primary min-h-[70vh] flex items-center justify-center">
      <Section size="md">
        <Container className="text-center flex flex-col items-center gap-6 max-w-md">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-error border border-error/20 bg-error/5 px-4 py-2 rounded-full flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5" /> Error 500
          </span>
          
          <h1 className="heading-page text-text-primary mt-2">Server Error</h1>
          
          <p className="text-sm text-text-muted leading-relaxed">
            An unexpected error occurred in our background database rendering thread. Try reloading the active route context.
          </p>

          <div className="flex gap-4 mt-2">
            <Button variant="gradient" icon={<RotateCcw className="w-4 h-4" />} onClick={() => reset()}>
              Retry Reload
            </Button>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              Return Home
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
