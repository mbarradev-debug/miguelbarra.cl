// Portado desde <section id="contacto"> de referencia/index.html.
// El CV se sirve como archivo estático desde /public (DBO-1187).
export function Contacto() {
  return (
    <section className="sec contact" id="contacto" aria-labelledby="contact-h">
      <div className="wrap reveal">
        <span className="sec-tick" aria-hidden="true"></span>
        <h2 id="contact-h" className="display">
          Conversemos.
        </h2>
        <p>
          Estoy abierto a conectar y a conversar sobre proyectos, equipos y oportunidades.
        </p>
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
            Descargar CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
