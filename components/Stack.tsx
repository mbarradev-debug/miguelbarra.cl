import type { Dictionary } from "@/dictionaries";

// Portado desde <section id="stack"> de referencia/index.html. Texto vía
// diccionario (DBO-1200). Nombres de tecnología iguales en ambos idiomas; se
// traducen títulos, intro y la nota.
export function Stack({ t }: { t: Dictionary["tech"] }) {
  return (
    <section className="sec" id="stack" aria-labelledby="stack-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tick" aria-hidden="true"></span>
          <h2 id="stack-h" className="display">
            {t.heading}
          </h2>
          <p>{t.intro}</p>
        </div>
        <div className="stack-grid reveal-stagger">
          {t.columns.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="stack-note reveal">
          <b>{t.note.prefix}</b>
          {t.note.rest}
        </p>
      </div>
    </section>
  );
}
