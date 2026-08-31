import type { Dictionary } from "@/dictionaries";

// Portado desde <div class="mobile-menu"> de referencia/index.html. Texto vía
// diccionario (DBO-1200); anclas en inglés estándar.
export function MobileMenu({ t }: { t: Dictionary["nav"] }) {
  return (
    <div className="mobile-menu" id="mobile-menu">
      <button className="close" id="menu-close" type="button" aria-label={t.closeMenu}>
        &times;
      </button>
      <a href="#work">{t.work}</a>
      <a href="#about">{t.about}</a>
      <a href="#contact">{t.contact}</a>
    </div>
  );
}
