"use client";
/* src/components/global/LoadingScreen.tsx */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Standard asset loading timer (e.g. 1.8 seconds maximum, or dynamic on window loaded)
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timer
      const timeout = setTimeout(() => setLoading(false), 2000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#050b18] flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated Logo Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              className="relative w-20 h-20 flex items-center justify-center rounded-2xl glass-panel border border-accent-primary/20 shadow-glow-blue"
            >
              <span className="text-4xl font-extrabold text-gradient font-heading tracking-tighter">P</span>
              
              {/* Soft glow indicator */}
              <div className="absolute inset-0 rounded-2xl bg-accent-primary/5 blur-md animate-pulse-slow" />
            </motion.div>

            {/* Monogram Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
              className="text-sm font-bold tracking-widest text-text-secondary uppercase"
            >
              PROZYNC INNOVATIONS
            </motion.h1>

            {/* Thin Progress Bar */}
            <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-accent-primary to-accent-cyan"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default LoadingScreen;
