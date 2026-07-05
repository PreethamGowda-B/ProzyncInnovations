"use client";
/* src/components/global/CustomCursor.tsx */
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, input[type="submit"], input[type="button"], [role="button"], select, textarea, input'
      );
      
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add event listener to capture DOM updates
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
      className={`fixed w-8 h-8 rounded-full border border-accent-cyan/35 pointer-events-none z-[99999] hidden lg:block`}
      animate={{
        scale: linkHovered ? 1.5 : clicked ? 0.8 : 1,
        backgroundColor: linkHovered ? "rgba(6, 182, 212, 0.08)" : "rgba(0,0,0,0)",
        borderColor: linkHovered ? "rgba(6, 182, 212, 0.8)" : "rgba(37, 99, 235, 0.35)",
        boxShadow: linkHovered ? "0 0 10px rgba(6, 182, 212, 0.3)" : "none"
      }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  );
}
export default CustomCursor;
