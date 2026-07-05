/* src/lib/gsap.ts */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only register ScrollTrigger on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set global defaults
  gsap.defaults({
    ease: "power2.out",
    duration: 0.6
  });
}

export { gsap, ScrollTrigger };
export default gsap;
