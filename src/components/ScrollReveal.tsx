import { useEffect } from "react";

/**
 * Viewport-triggered reveal for every element using the `animate-rise`
 * utility. Elements below the fold are paused until they scroll into view,
 * then play the existing fade-up animation (0.5s, subtle translateY).
 * Respects prefers-reduced-motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(".animate-rise:not(.reveal-init)").forEach((el) => {
        el.classList.add("reveal-init");
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("reveal-in");
          return;
        }
        el.classList.add("reveal-pending");
        observer.observe(el);
      });
    };

    let id = 0;
    let started = false;
    // Defer past hydration so we never mutate classNames React is still matching.
    const begin = () => {
      if (started) return;
      started = true;
      scan();
      id = window.setInterval(scan, 800);
    };
    const start = window.setTimeout(begin, 1200);
    if (document.readyState === "complete") {
      requestAnimationFrame(() => requestAnimationFrame(begin));
    } else {
      window.addEventListener("load", () => requestAnimationFrame(begin), { once: true });
    }
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
      observer.disconnect();
    };
  }, []);

  return null;
}
