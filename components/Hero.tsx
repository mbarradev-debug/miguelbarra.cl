import Image from "next/image";

// Portado desde <header class="hero"> de referencia/index.html.
// El retrato iba embebido como base64; ahora es /public/avatar-opt.jpg servido
// con next/image (DBO-1187). Mismas dimensiones (600x600) y alt que el original;
// el encuadre/máscara/transform los mantiene .hero-portrait img en globals.css.
export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-portrait">
        <Image
          src="/avatar-opt.jpg"
          width={600}
          height={600}
          alt="Retrato en blanco y negro de Miguel Barra"
          priority
        />
      </div>
      <div className="hero-inner">
        <p className="eyebrow">Miguel Barra - Santiago, Chile</p>
        <h1 className="display">
          Construyo<br />productos que<br />llegan a{" "}
          <span className="accent">producción.</span>
        </h1>
        <p className="hero-sub">
          Full Stack Developer. React, Next.js y TypeScript, de la base de datos al deploy.
        </p>
        <div className="hero-cta">
          <a className="btn" href="#trabajo">
            Ver trabajo
          </a>
        </div>
      </div>
    </header>
  );
}
