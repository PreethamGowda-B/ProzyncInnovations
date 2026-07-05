/* src/lib/animations.ts */
import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration || 0.4,
      ease: "easeOut",
      delay: custom.delay || 0
    }
  })
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.5,
      ease: [0.25, 1, 0.5, 1], // Custom premium easeOut
      delay: custom.delay || 0
    }
  })
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.5,
      ease: [0.25, 1, 0.5, 1],
      delay: custom.delay || 0
    }
  })
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.5,
      ease: [0.25, 1, 0.5, 1],
      delay: custom.delay || 0
    }
  })
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration || 0.5,
      ease: [0.34, 1.56, 0.64, 1], // Spring-like ease
      delay: custom.delay || 0
    }
  })
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: (custom = {}) => ({
    transition: {
      staggerChildren: custom.staggerChildren || 0.1,
      delayChildren: custom.delayChildren || 0
    }
  })
};
