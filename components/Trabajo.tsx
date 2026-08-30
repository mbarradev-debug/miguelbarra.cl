import Image from "next/image";

// Portado desde <section id="trabajo"> de referencia/index.html.
// La captura de Pulso pasa a /public/pulso-shot.jpg con next/image (DBO-1187);
// mismas dimensiones (1400x714) y alt que el original.
export function Trabajo() {
  return (
    <section className="sec" id="trabajo" aria-labelledby="trabajo-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tick" aria-hidden="true"></span>
          <h2 id="trabajo-h" className="display">
            Trabajo
          </h2>
          <p>
            Proyectos en producción para los sectores público y privado: el contexto, mi
            rol y cómo se resolvió.
          </p>
        </div>

        <article className="featured reveal">
          <div>
            <p className="proj-kicker">Proyecto propio · En producción</p>
            <h3 className="proj-title">Pulso</h3>
            <p className="proj-lead">
              Dashboard de indicadores económicos de Chile en tiempo casi real.
            </p>
            <dl className="proj-facts">
              <div>
                <dt>Contexto</dt>
                <dd>
                  La API SI3 del Banco Central de Chile es difícil de consumir directo
                  desde el frontend y tiene particularidades no triviales.
                </dd>
              </div>
              <div>
                <dt>Rol</dt>
                <dd className="text">
                  Diseño y desarrollo completo, frontend y backend.
                </dd>
              </div>
              <div>
                <dt>Solución</dt>
                <dd>
                  Una API intermedia propia con Route Handlers de Next.js que encapsula la
                  fuente, con cache en memoria y fallback ante fallos externos. Diez
                  indicadores (UF, dólar, IPC, IMACEC, TPM y otros) con grilla, gráfico
                  histórico, favoritos y conversor.
                </dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd className="text">
                  En producción en Vercel, con tests unitarios en Vitest, end to end en
                  Playwright e integración continua en GitHub Actions.
                </dd>
              </div>
            </dl>
            <div className="tags">
              <span>Next.js 16</span>
              <span>React 19</span>
              <span>TypeScript</span>
              <span>SWR</span>
              <span>Chart.js</span>
              <span>Vitest</span>
              <span>Playwright</span>
              <span>Vercel</span>
            </div>
            <div className="proj-links">
              <a
                href="https://pulso-cyan-zeta.vercel.app"
                target="_blank"
                rel="noopener"
              >
                Ver sitio
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
              <a
                href="https://github.com/mbarradev-debug/pulso"
                target="_blank"
                rel="noopener"
              >
                Código en GitHub
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
          <div className="featured-media">
            <Image
              src="/pulso-shot.jpg"
              width={1400}
              height={714}
              alt="Captura de Pulso: gráfico histórico de un indicador y grilla de indicadores económicos"
              loading="lazy"
            />
          </div>
        </article>

        <div className="work-grid reveal-stagger">
          <div className="work-item">
            <p className="proj-kicker">Forcast · Full Stack Developer</p>
            <h3 className="proj-title">DOM Digital</h3>
            <p className="proj-lead">
              SaaS para digitalizar trámites de construcción municipal.
            </p>
            <dl className="proj-facts">
              <div>
                <dt>Contexto</dt>
                <dd>
                  Los trámites de la Dirección de Obras Municipales corrían sobre un
                  sistema legacy.
                </dd>
              </div>
              <div>
                <dt>Rol</dt>
                <dd className="text">
                  Construcción desde cero, coordinando requerimientos directo con el
                  cliente.
                </dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>Next.js, Node.js, PostgreSQL, Firebase Auth, Azure.</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>
                  Reemplazó al sistema legacy; desplegado en Azure.{" "}
                  <span className="pending">Métricas de adopción por confirmar</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="work-item">
            <p className="proj-kicker">Forcast · Módulo en solitario</p>
            <h3 className="proj-title">E-Hive</h3>
            <p className="proj-lead">
              Gestión de carga eléctrica con verificación de patente.
            </p>
            <dl className="proj-facts">
              <div>
                <dt>Contexto</dt>
                <dd>
                  La plataforma necesita verificar la patente antes de habilitar la carga.
                </dd>
              </div>
              <div>
                <dt>Rol</dt>
                <dd className="text">
                  Desarrollo en solitario del módulo de escaneo QR y sus endpoints.
                </dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>Angular, Python, Flask, Docker (microservicios).</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>
                  <span className="pending">Estado en producción por confirmar</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="work-item">
            <p className="proj-kicker">Valuesite · Full Stack Developer</p>
            <h3 className="proj-title">Sucursal Virtual de iSalud</h3>
            <p className="proj-lead">
              Plataforma de bonos, reembolsos y certificados de una Isapre de Codelco.
            </p>
            <dl className="proj-facts">
              <div>
                <dt>Contexto</dt>
                <dd>
                  La Sucursal Virtual de iSalud operaba sobre un frontend legacy.
                </dd>
              </div>
              <div>
                <dt>Rol</dt>
                <dd className="text">
                  Modernización individual, con supervisión de un desarrollador senior.
                </dd>
              </div>
              <div>
                <dt>Solución</dt>
                <dd>
                  Migración de funcionalidades críticas del frontend y nuevos métodos en
                  microservicios ASP.NET MVC sobre Oracle (PL/SQL): listado de médicos,
                  consulta de pacientes y otros flujos clínicos.
                </dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd className="text">
                  Plataforma usada por más de 18.000 beneficiarios de Codelco.
                </dd>
              </div>
            </dl>
          </div>

          <div className="work-item">
            <p className="proj-kicker">Ewreka · Práctica profesional</p>
            <h3 className="proj-title">App Ewreka</h3>
            <p className="proj-lead">
              App móvil de una plataforma de beneficios y descuentos.
            </p>
            <dl className="proj-facts">
              <div>
                <dt>Contexto</dt>
                <dd>
                  Aplicación móvil en desarrollo activo de un producto temprano.
                </dd>
              </div>
              <div>
                <dt>Rol</dt>
                <dd className="text">
                  Implementación de funcionalidades y levantamiento de requerimientos
                  directo con la fundadora.
                </dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>Flutter.</dd>
              </div>
              <div>
                <dt>Resultado</dt>
                <dd>
                  <span className="pending">Alcance y estado por confirmar</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
