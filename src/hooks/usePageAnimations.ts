import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * Custom hook for common page entry animations.
 * Provides standard 'slide-left', 'slide-right', and 'fade-in' patterns.
 * Respects 'prefers-reduced-motion' accessibility settings.
 */
export const usePageAnimations = (containerRef?: React.RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      // Slide in from left
      gsap.from(".slide-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".slide-left",
          start: "top 85%",
        },
      });

      // Slide in from right
      gsap.from(".slide-right", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".slide-right",
          start: "top 85%",
        },
      });

      // Simple Fade In / Slide Up
      gsap.from(".fade-in", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 90%",
        },
      });
    },
    { scope: containerRef }
  );
};
