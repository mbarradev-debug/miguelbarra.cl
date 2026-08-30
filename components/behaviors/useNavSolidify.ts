import { useEffect } from "react";

// "Nav solidify": IntersectionObserver sobre <main> que alterna .scrolled en la
// nav y .on-dark en el deck — transparente sobre el hero oscuro, sólida cuando
// el contenido claro llega. Portado 1:1 del bloque "nav solidify".
export function useNavSolidify() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".nav");
    const deck = document.querySelector<HTMLElement>(".deck");
    const mainEl = document.querySelector<HTMLElement>("main");
    if (!nav) return;

    if ("IntersectionObserver" in window && mainEl) {
      const io = new IntersectionObserver(
        (entries) => {
          const overHero = !entries[0].isIntersecting;
          nav.classList.toggle("scrolled", !overHero);
          if (deck) deck.classList.toggle("on-dark", overHero);
        },
        { rootMargin: "-66px 0px 0px 0px", threshold: 0 },
      );
      io.observe(mainEl);
      return () => io.disconnect();
    }

    nav.classList.add("scrolled");
  }, []);
}
