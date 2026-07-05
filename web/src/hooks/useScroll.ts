/* src/hooks/useScroll.ts */
import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | "none">("none");

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setScrollX(window.scrollX);

      if (currentY > lastY) {
        setDirection("down");
      } else if (currentY < lastY) {
        setDirection("up");
      } else {
        setDirection("none");
      }
      
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollX, direction };
}
