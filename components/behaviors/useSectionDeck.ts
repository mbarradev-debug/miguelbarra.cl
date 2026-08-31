import { useEffect } from "react";

// Deck de navegación desktop: dots + flechas prev/next, scrollIntoView
// (respeta reduced-motion), scroll-spy con IntersectionObserver que sincroniza
// aria-current en dots y en los enlaces de la nav, disable en los extremos.
// Portado 1:1 del bloque "desktop: section-by-section navigation control".
// Anclas en inglés estándar (DBO-1200), iguales en /es y /en.
const order = ["top", "work", "stack", "about", "contact"];

export function useSectionDeck() {
  useEffect(() => {
    const deck = document.querySelector<HTMLElement>(".deck");
    if (!deck) return;

    const secs = order.map((id) => document.getElementById(id));
    const dots = Array.from(
      deck.querySelectorAll<HTMLButtonElement>(".deck-dots button"),
    );
    const prevBtn = deck.querySelector<HTMLButtonElement>(".deck-prev");
    const nextBtn = deck.querySelector<HTMLButtonElement>(".deck-next");
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-links a"),
    );
    if (!prevBtn || !nextBtn) return;

    let cur = 0;
    const motion = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";

    function go(i: number) {
      i = Math.max(0, Math.min(order.length - 1, i));
      if (i === 0) {
        window.scrollTo({ top: 0, behavior: motion() as ScrollBehavior });
      } else if (secs[i]) {
        secs[i]!.scrollIntoView({
          behavior: motion() as ScrollBehavior,
          block: "start",
        });
      }
    }

    function mark(i: number) {
      cur = i;
      dots.forEach((d, k) =>
        d.setAttribute("aria-current", k === i ? "true" : "false"),
      );
      navLinks.forEach((a) => {
        const id = (a.getAttribute("href") || "").replace(/^#/, "");
        a.setAttribute("aria-current", id === order[i] ? "true" : "false");
      });
      prevBtn!.disabled = i === 0;
      nextBtn!.disabled = i === order.length - 1;
    }

    mark(0);

    const onPrev = () => go(cur - 1);
    const onNext = () => go(cur + 1);
    prevBtn.addEventListener("click", onPrev);
    nextBtn.addEventListener("click", onNext);
    const dotHandlers = dots.map((d, i) => {
      const h = () => go(i);
      d.addEventListener("click", h);
      return h;
    });

    let deckIo: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      deckIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              const idx = secs.indexOf(en.target as HTMLElement);
              if (idx !== -1) mark(idx);
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      );
      secs.forEach((el) => {
        if (el) deckIo!.observe(el);
      });
    }

    return () => {
      prevBtn.removeEventListener("click", onPrev);
      nextBtn.removeEventListener("click", onNext);
      dots.forEach((d, i) => d.removeEventListener("click", dotHandlers[i]));
      deckIo?.disconnect();
    };
  }, []);
}
