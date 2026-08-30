import { useEffect } from "react";

// Scroll reveals (.reveal / .reveal-stagger) con IntersectionObserver, con el
// atajo "contenido sobre el fold aparece de inmediato" y fallback reduced-motion.
// Portado 1:1 del bloque "scroll reveals".
export function useScrollReveals() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger"),
    );
    const showAll = () => targets.forEach((t) => t.classList.add("in"));

    if (!reduce && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -6% 0px" },
      );
      targets.forEach((t) => {
        // contenido ya en el fold o por encima aparece de inmediato, sin esperar
        if (t.getBoundingClientRect().top < window.innerHeight * 0.92) {
          t.classList.add("in");
        } else {
          io.observe(t);
        }
      });
      return () => io.disconnect();
    }

    showAll();
  }, []);
}
