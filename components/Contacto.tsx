import type { Dictionary } from "@/dictionaries";

// Portado desde <section id="contacto"> de referencia/index.html. Texto vía
// diccionario (DBO-1200); ancla en inglés estándar (id="contact"). El CV se
// sirve como archivo estático desde /public (DBO-1187).
export function Contacto({ t }: { t: Dictionary["contact"] }) {
  return (
    <section className="sec contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap reveal">
        <span className="sec-tick" aria-hidden="true"></span>
        <h2 id="contact-h" className="display">
          {t.heading}
        </h2>
        <p>{t.intro}</p>
        <a className="mail" href="mailto:mbarra.git@gmail.com">
          mbarra.git@gmail.com
        </a>
        <div className="contact-links">
          <a href="https://github.com/mbarradev-debug" target="_blank" rel="noopener">
            GitHub
          </a>
          <a href="https://linkedin.com/in/miguelbarrarios" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="https://miguelbarra.cl" target="_blank" rel="noopener">
            miguelbarra.cl
          </a>
          <a href="/MiguelBarra_CV.pdf" target="_blank" rel="noopener">
            {t.links.cv}
          </a>
        </div>
      </div>
    </section>
  );
}
