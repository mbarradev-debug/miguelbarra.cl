"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Selector de idioma (DBO-1200). Cambia entre /es y /en preservando la ruta y
// deja una cookie NEXT_LOCALE para que el redirect de la raíz sea persistente.
// El tema y el scroll no se tocan (navegación cliente, misma página).
export function LangToggle({ label }: { label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const current = pathname.startsWith("/en") ? "en" : "es";
  const other = current === "en" ? "es" : "en";
  const target = `/${other}${pathname.slice(3)}`;

  // El <html lang> lo fija el script de arranque desde la URL en carga dura;
  // en navegación cliente lo re-sincronizamos aquí (sin <script> en el árbol).
  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  function switchLang() {
    document.cookie = `NEXT_LOCALE=${other};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    router.replace(target);
  }

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={switchLang}
      aria-label={label}
    >
      <span aria-current={current === "es" ? "true" : "false"}>ES</span>
      <span className="lang-sep" aria-hidden="true">
        /
      </span>
      <span aria-current={current === "en" ? "true" : "false"}>EN</span>
    </button>
  );
}
