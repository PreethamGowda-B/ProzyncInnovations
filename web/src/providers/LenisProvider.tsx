"use client";
/* src/providers/LenisProvider.tsx */
import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "../lib/gsap";

const LenisContext = createContext<Lenis | null>(null);

export const useLenisContext = () => useContext(LenisContext);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Only initialize on client
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    setLenis(instance);

    // Connect Lenis scroll events to ScrollTrigger
    instance.on("scroll", () => {
      ScrollTrigger.update();
    });

    let rafId: number;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      instance.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
export default LenisProvider;
