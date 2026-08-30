import { useEffect } from "react";

// Toggle de tema con persistencia en localStorage + aria-pressed.
// Portado 1:1 del bloque "theme toggle" del <script> de referencia/index.html.
// El estado inicial de data-theme lo fija el script anti-flash del <head>
// (app/layout.tsx); aquí sólo se cablea el botón.
export function useThemeToggle() {
  useEffect(() => {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

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
    return () => toggle.removeEventListener("click", onClick);
  }, []);
}
