"use client";
/* src/components/global/WhatsAppButton.tsx */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/919535134351?text=Hi!%20I'm%20interested%20in%20Prozync%20Innovations%20services.";

/* ── Centered, Premium WhatsApp SVG Icon ─────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l112.5-29.5c32.9 17.9 69.9 27.4 108.3 27.4 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 445.5c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

/* ── Main Component ──────────────────────────────────────────── */
export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[300] flex items-center justify-end gap-3 pointer-events-none">
      
      {/* Slide-in tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-none select-none"
          >
            <div
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-white text-sm font-semibold whitespace-nowrap shadow-xl"
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Pulsing indicator */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25d366]" />
              </span>
              Chat with us on WhatsApp
              
              {/* Arrow pointer */}
              <span
                className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0"
                style={{
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: "5px solid #0f172a",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button wrapper — positioned to prevent clipping */}
      <div className="relative pointer-events-auto p-4 -m-4">
        {/* Soft, breathing radial aura behind the button instead of hard clipped lines */}
        <motion.div
          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#25d366]/30 blur-md pointer-events-none"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full select-none outline-none"
          style={{
            background: "linear-gradient(135deg, #2ee86a 0%, #25d366 100%)",
            boxShadow: hovered
              ? "0 10px 25px rgba(37,211,102,0.5), 0 4px 10px rgba(0,0,0,0.15)"
              : "0 6px 20px rgba(37,211,102,0.3), 0 3px 8px rgba(0,0,0,0.1)",
            WebkitTapHighlightColor: "transparent",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {/* Centered WhatsApp SVG */}
          <WhatsAppIcon className="w-6.5 h-6.5 text-white relative z-10 drop-shadow-sm" />
        </motion.a>
      </div>
    </div>
  );
}

export default WhatsAppButton;
