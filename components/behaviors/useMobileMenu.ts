import { useEffect } from "react";

// Menú móvil: abrir/cerrar, bloqueo de scroll del body, foco, cierre con
// Escape y al click en un enlace. Portado 1:1 del bloque "mobile menu".
export function useMobileMenu() {
  useEffect(() => {
    const mOpen = document.getElementById("menu-open");
    const mClose = document.getElementById("menu-close");
    const menu = document.getElementById("mobile-menu");
    if (!mOpen || !mClose || !menu) return;

    function setMenu(open: boolean) {
      menu!.classList.toggle("open", open);
      mOpen!.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      if (open) {
        menu!.querySelector("a")?.focus();
      } else {
        mOpen!.focus();
      }
    }

    const onOpen = () => setMenu(true);
    const onClose = () => setMenu(false);
    const onMenuClick = (e: Event) => {
      if ((e.target as HTMLElement).tagName === "A") setMenu(false);
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menu.classList.contains("open")) setMenu(false);
    };

    mOpen.addEventListener("click", onOpen);
    mClose.addEventListener("click", onClose);
    menu.addEventListener("click", onMenuClick);
    document.addEventListener("keydown", onKeydown);
    return () => {
      mOpen.removeEventListener("click", onOpen);
      mClose.removeEventListener("click", onClose);
      menu.removeEventListener("click", onMenuClick);
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
    };
  }, []);
}
