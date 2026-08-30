// Portado 1:1 desde <section id="stack"> de referencia/index.html.
export function Stack() {
  return (
    <section className="sec" id="stack" aria-labelledby="stack-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tick" aria-hidden="true"></span>
          <h2 id="stack-h" className="display">
            Stack
          </h2>
          <p>Lo que uso a diario para llevar un producto de la idea al deploy.</p>
        </div>
        <div className="stack-grid reveal-stagger">
          <div>
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Angular</li>
              <li>Shadcn/ui</li>
            </ul>
          </div>
          <div>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>NestJS</li>
              <li>ASP.NET MVC (.NET)</li>
              <li>Python / Flask</li>
              <li>REST APIs</li>
              <li>Prisma ORM</li>
            </ul>
          </div>
          <div>
            <h3>Datos e infraestructura</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>Oracle PL/SQL</li>
              <li>Supabase</li>
              <li>Docker</li>
              <li>Azure, GCP, Vercel</li>
              <li>CI/CD, GitHub Actions</li>
              <li>Firebase Auth</li>
            </ul>
          </div>
          <div>
            <h3>Mobile</h3>
            <ul>
              <li>Flutter</li>
              <li>Ionic (Angular)</li>
            </ul>
          </div>
        </div>
        <p className="stack-note reveal">
          <b>Además:</b> trabajo a diario con Claude Code CLI y Antigravity.
        </p>
      </div>
    </section>
  );
}
