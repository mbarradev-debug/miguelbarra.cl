import type { Dictionary } from "@/dictionaries";

// Portado desde <section id="sobre-mi"> de referencia/index.html. Texto vía
// diccionario (DBO-1200); ancla en inglés estándar (id="about").
// DBO-1198: la .timeline se divide en dos grupos rotulados (Experiencia /
// Formación). El snapshot referencia/index.html no cambia.
export function SobreMi({ t }: { t: Dictionary["about"] }) {
  const groups = [t.groups.experience, t.groups.education];

  return (
    <section className="sec" id="about" aria-labelledby="about-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tick" aria-hidden="true"></span>
          <h2 id="about-h" className="display">
            {t.heading}
          </h2>
          <p>{t.intro}</p>
        </div>
        <div className="about">
          <div className="about-prose reveal">
            {t.prose.map((p, i) => (
              <p key={i}>
                {p.strong ? <strong>{p.strong}</strong> : null}
                {p.rest}
              </p>
            ))}
          </div>
          <div className="timeline">
            {groups.map((group) => (
              <div className="tl-group reveal" key={group.label}>
                <h3 className="tl-group-h">{group.label}</h3>
                <ul className="reveal-stagger">
                  {group.items.map((item) => (
                    <li key={item.years + item.org}>
                      <span className="yr">{item.years}</span>
                      <div>
                        <b>{item.org}</b>
                        <span>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
