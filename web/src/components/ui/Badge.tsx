"use client";
/* src/components/ui/Badge.tsx */
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1 tracking-wide border",
  {
    variants: {
      variant: {
        default: "bg-surface-glass border-border-glass text-text-secondary",
        primary: "bg-accent-primary/10 border-accent-primary/20 text-accent-primary",
        cyan: "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan",
        success: "bg-success/10 border-success/20 text-success",
        warning: "bg-warning/10 border-warning/20 text-warning",
        error: "bg-error/10 border-error/20 text-error",
        active: "bg-success/10 border-success/20 text-success",
        "coming-soon": "bg-warning/10 border-warning/20 text-warning",
        beta: "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan",
        planned: "bg-surface-glass border-border-glass text-text-muted",
        new: "bg-accent-primary/15 border-accent-primary/30 text-accent-azure",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: any; // Bypasses CVA/TS strict widening mismatch errors
  dot?: boolean;
}

export function Badge({ className, variant, dot = false, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant: variant || "default" }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            variant === "active" || variant === "success" ? "bg-success" : "",
            variant === "coming-soon" || variant === "warning" ? "bg-warning" : "",
            variant === "beta" || variant === "cyan" ? "bg-accent-cyan" : "",
            variant === "error" ? "bg-error" : "",
            !["active","success","coming-soon","warning","beta","cyan","error"].includes(variant as string)
              ? "bg-accent-primary" : ""
          )}
        />
      )}
      {children}
    </span>
  );
}
export default Badge;
