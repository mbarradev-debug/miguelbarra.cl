import type { Dictionary } from "@/dictionaries";

// Portado desde <section class="stats"> de referencia/index.html. Texto vía
// diccionario (DBO-1200).
export function Stats({ t }: { t: Dictionary["stats"] }) {
  return (
    <section className="stats" aria-label={t.label}>
      <div className="wrap">
        {t.items.map((s) => (
          <div key={s.value}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
