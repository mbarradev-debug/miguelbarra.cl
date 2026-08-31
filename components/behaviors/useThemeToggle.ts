import { useEffect } from "react";

// Toggle de tema con persistencia en localStorage + aria-pressed.
// Portado del bloque "theme toggle" del <script> de referencia/index.html.
// El estado inicial de data-theme lo fija el script de arranque (app/layout.tsx).
// DBO-1202: el cambio añade la clase `theme-anim` durante ~200 ms para que los
// colores por token hagan un crossfade breve en vez de saltar. Con
// prefers-reduced-motion no se añade la clase (swap directo).
export function useThemeToggle() {
  useEffect(() => {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    let animTimer: ReturnType<typeof setTimeout> | undefined;

    function currentTheme() {
      const attr = root.getAttribute("data-theme");
      if (attr) return attr;
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }
    function syncPressed() {
      toggle!.setAttribute(
        "aria-pressed",
        currentTheme() === "light" ? "true" : "false",
      );
    }
    function onClick() {
      const next = currentTheme() === "dark" ? "light" : "dark";
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!reduce) {
        root.classList.add("theme-anim");
        clearTimeout(animTimer);
        animTimer = setTimeout(() => root.classList.remove("theme-anim"), 200);
      }

      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* almacenamiento no disponible */
      }
      syncPressed();
    }

    syncPressed();
    toggle.addEventListener("click", onClick);
    return () => {
      toggle.removeEventListener("click", onClick);
      clearTimeout(animTimer);
      root.classList.remove("theme-anim");
    };
  }, []);
}
