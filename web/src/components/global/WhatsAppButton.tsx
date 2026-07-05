"use client";
/* src/components/global/WhatsAppButton.tsx */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/919535134351?text=Hi!%20I'm%20interested%20in%20Prozync%20Innovations%20services.";

/* ── Animated pulse ring ─────────────────────────────────────── */
function PulseRing({ delay }: { delay: number }) {
  return (
    <motion.span
      className="absolute inset-0 rounded-full"
      style={{ border: "2px solid #25d366" }}
      initial={{ opacity: 0.7, scale: 1 }}
      animate={{ opacity: 0, scale: 2.2 }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

/* ── WhatsApp SVG icon ───────────────────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.426.002 9.84-4.394 9.843-9.842.002-2.638-1.017-5.114-2.87-6.97C16.388 1.939 13.92 1.917 11.28 1.917 5.858 1.917 1.445 6.315 1.442 11.765c-.001 1.558.423 3.082 1.233 4.417l-.98 3.58 3.69-.97c1.332.822 2.87 1.22 4.262 1.222zm10.843-8.056c-.3-.15-1.782-.88-2.057-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.02-.463.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.66-.52-.17-.01-.365-.01-.56-.01-.195 0-.51.075-.775.362-.265.288-1.013.99-1.013 2.413 0 1.422 1.037 2.795 1.18 2.99.145.195 2.036 3.11 4.93 4.36.688.297 1.227.473 1.646.606.693.22 1.324.19 1.823.115.556-.08 1.782-.73 2.032-1.435.25-.705.25-1.31.175-1.435-.075-.125-.275-.2-.575-.35z" />
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────── */
export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[300] flex items-center justify-end gap-3 pointer-events-none">

      {/* Slide-in tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 16, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.92 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-none select-none"
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-2xl text-white text-sm font-semibold whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              {/* Green dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25d366]" />
              </span>
              Chat with us on WhatsApp
              {/* Arrow */}
              <span
                className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0"
                style={{
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderLeft: "6px solid #16213e",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center w-[58px] h-[58px] rounded-full select-none outline-none focus:outline-none"
        style={{
          background: "linear-gradient(145deg, #2ee86a 0%, #25d366 50%, #1db954 100%)",
          boxShadow: hovered
            ? "0 0 0 0 rgba(37,211,102,0), 0 12px 40px rgba(37,211,102,0.55), 0 4px 16px rgba(0,0,0,0.2)"
            : "0 8px 28px rgba(37,211,102,0.40), 0 4px 12px rgba(0,0,0,0.15)",
          WebkitTapHighlightColor: "transparent",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 280, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Multi-ring pulse (3 staggered rings) */}
        <PulseRing delay={0} />
        <PulseRing delay={0.65} />
        <PulseRing delay={1.3} />

        {/* Icon */}
        <WhatsAppIcon className="w-7 h-7 text-white relative z-10 drop-shadow-sm" />
      </motion.a>
    </div>
  );
}

export default WhatsAppButton;
