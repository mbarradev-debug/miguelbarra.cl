// Portado desde <section id="sobre-mi"> de referencia/index.html.
// DBO-1198 se aparta de la paridad 1:1 a propósito: la .timeline se divide en
// dos grupos rotulados (Experiencia / Formación) para que la entrada académica
// deje de leerse como un empleo más. El snapshot referencia/index.html no cambia.
export function SobreMi() {
  return (
    <section className="sec" id="sobre-mi" aria-labelledby="about-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tick" aria-hidden="true"></span>
          <h2 id="about-h" className="display">
            Sobre mí
          </h2>
          <p>Formación, recorrido y la forma en que me gusta trabajar.</p>
        </div>
        <div className="about">
          <div className="about-prose reveal">
            <p>
              <strong>Soy ingeniero en Computación e Informática</strong>, titulado en la
              Universidad Andrés Bello en 2025.
            </p>
            <p>
              En poco más de dos años he entregado productos en producción para los
              sectores público y privado: un SaaS de gestión municipal, la modernización
              de la Sucursal Virtual de una Isapre de Codelco y herramientas propias para
              el mercado chileno.
            </p>
            <p>Trabajo el stack completo, con foco en React, Next.js y TypeScript.</p>
          </div>
          <div className="timeline">
            <div className="tl-group reveal">
              <h3 className="tl-group-h">Experiencia</h3>
              <ul className="reveal-stagger">
                <li>
                  <span className="yr">2025 - 2026</span>
                  <div>
                    <b>Forcast</b>
                    <span>
                      Full Stack Developer. SaaS de gestión municipal (DOM Digital) y app
                      de carga eléctrica (E-Hive).
                    </span>
                  </div>
                </li>
                <li>
                  <span className="yr">2024</span>
                  <div>
                    <b>Ewreka</b>
                    <span>Práctica profesional. Desarrollo móvil con Flutter.</span>
                  </div>
                </li>
                <li>
                  <span className="yr">2022 - 2023</span>
                  <div>
                    <b>Valuesite Ltda.</b>
                    <span>
                      Full Stack Developer. Modernización de plataformas de salud para
                      Codelco (iSalud).
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tl-group reveal">
              <h3 className="tl-group-h">Formación</h3>
              <ul className="reveal-stagger">
                <li>
                  <span className="yr">2025</span>
                  <div>
                    <b>Universidad Andrés Bello</b>
                    <span>Titulado en Ingeniería en Computación e Informática.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
