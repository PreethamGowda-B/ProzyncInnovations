/* src/hooks/useInView.ts */
import { useState, useEffect, useRef, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}): [RefObject<any>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      if (el && !triggerOnce) {
        observer.unobserve(el);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [elementRef as RefObject<any>, inView];
}
export default useInView;
