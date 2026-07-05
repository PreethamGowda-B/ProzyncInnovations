"use client";
/* src/components/animations/CountUp.tsx */
import React, { useRef } from "react";
import { useInView } from "../../hooks";
import { useCountUp } from "../../hooks";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ end, duration = 2000, prefix = "", suffix = "", className }: CountUpProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCountUp(end, duration, inView);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
export default CountUp;
