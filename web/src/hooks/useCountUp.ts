/* src/hooks/useCountUp.ts */
import { useState, useEffect } from "react";

export function useCountUp(end: number, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out quadratic
      const easedProgress = progress * (2 - progress);
      
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
}
export default useCountUp;
