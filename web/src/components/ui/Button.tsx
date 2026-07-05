"use client";
/* src/components/ui/Button.tsx */
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:pointer-events-none disabled:opacity-40 select-none",
  {
    variants: {
      variant: {
        primary: [
          "bg-accent-primary text-white",
          "hover:bg-accent-secondary hover:-translate-y-0.5",
          "shadow-glow-blue hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]",
          "active:scale-[0.97] active:translate-y-0",
        ],
        secondary: [
          "bg-surface-01 text-text-primary border border-border-subtle",
          "hover:border-border-active hover:bg-surface-02 hover:-translate-y-0.5",
          "active:scale-[0.97] active:translate-y-0",
        ],
        outline: [
          "bg-transparent border border-border-glass text-text-secondary",
          "hover:border-accent-primary/50 hover:text-text-primary hover:bg-surface-glass hover:-translate-y-0.5",
          "active:scale-[0.97] active:translate-y-0",
        ],
        ghost: [
          "bg-transparent text-text-secondary",
          "hover:text-accent-cyan hover:bg-surface-glass",
          "active:scale-[0.97]",
        ],
        gradient: [
          "text-white font-bold",
          "bg-gradient-to-r from-accent-primary to-accent-cyan",
          "hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]",
          "active:scale-[0.97] active:translate-y-0",
        ],
        destructive: [
          "bg-error/10 text-error border border-error/20",
          "hover:bg-error/20 hover:border-error/40",
          "active:scale-[0.97]",
        ],
      },
      size: {
        sm: "text-xs px-4 py-2 h-8",
        md: "text-sm px-5 py-2.5 h-10",
        lg: "text-base px-8 py-3.5 h-12",
        xl: "text-lg px-10 py-4 h-14",
        icon: "w-10 h-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  className,
  variant,
  size,
  loading = false,
  icon,
  iconPosition = "left",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
          {children}
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </button>
  );
}

export { buttonVariants };
export default Button;
