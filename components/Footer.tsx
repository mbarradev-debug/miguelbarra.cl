import type { Dictionary } from "@/dictionaries";

// Portado desde <footer> de referencia/index.html. Texto vía diccionario
// (DBO-1200). El año lo actualiza useFooterYear; aquí queda el valor literal + id.
export function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer>
      <span>
        &copy; <span id="year">2026</span> {t.copyright}
      </span>
      <span>{t.built}</span>
    </footer>
  );
}
