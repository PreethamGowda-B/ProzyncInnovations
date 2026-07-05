"use client";
/* src/components/animations/FadeUp.tsx */
import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks";
import { fadeUp } from "../../lib/animations";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  amount = 0.15,
}: FadeUpProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}
export default FadeUp;
