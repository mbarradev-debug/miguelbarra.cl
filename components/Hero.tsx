import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

// Portado desde <header class="hero"> de referencia/index.html. Texto vía
// diccionario (DBO-1200). El h1 se ensambla desde piezas (pre/mid/post/accent)
// porque lleva <br> y <span class="accent"> incrustados. CTA -> #work.
export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <header className="hero" id="top">
      <div className="hero-portrait">
        <Image
          src="/avatar-opt.jpg"
          width={600}
          height={600}
          alt={t.portraitAlt}
          priority
        />
      </div>
      <div className="hero-inner">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 className="display">
          {t.h1.pre}
          <br />
          {t.h1.mid}
          <br />
          {t.h1.post}
          <span className="accent">{t.h1.accent}</span>
        </h1>
        <p className="hero-sub">{t.sub}</p>
        <div className="hero-cta">
          <a className="btn" href="#work">
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
