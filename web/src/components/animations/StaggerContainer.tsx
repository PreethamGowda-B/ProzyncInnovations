"use client";
/* src/components/animations/StaggerContainer.tsx */
import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks";
import { staggerContainer } from "../../lib/animations";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className,
  once = true,
  amount = 0.1,
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={{ staggerChildren, delayChildren }}
    >
      {children}
    </motion.div>
  );
}
export default StaggerContainer;
