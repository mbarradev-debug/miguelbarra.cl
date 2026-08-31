import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

// Portado desde <section id="trabajo"> de referencia/index.html. Texto vía
// diccionario (DBO-1200); ancla en inglés estándar (id="work"). Nombres de
// proyecto, tags y URLs se quedan inline (son datos, no copy).

type Fact = Dictionary["work"]["featured"]["facts"][number];

function Facts({
  labels,
  facts,
}: {
  labels: Record<string, string>;
  facts: readonly Fact[];
}) {
  return (
    <dl className="proj-facts">
      {facts.map((f, i) => (
        <div key={i}>
          <dt>{labels[f.k]}</dt>
          <dd className={f.em ? "text" : undefined}>
            {f.v || null}
            {f.pending ? <span className="pending">{f.pending}</span> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

const linkIcon = (
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
);

const featuredTags = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "SWR",
  "Chart.js",
  "Vitest",
  "Playwright",
  "Vercel",
];

export function Trabajo({ t }: { t: Dictionary["work"] }) {
  const labels = t.labels as Record<string, string>;
  const featured = t.featured;

  return (
    <section className="sec" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-tick" aria-hidden="true"></span>
          <h2 id="work-h" className="display">
            {t.heading}
          </h2>
          <p>{t.intro}</p>
        </div>

        <article className="featured reveal">
          <div>
            <p className="proj-kicker">{featured.kicker}</p>
            <h3 className="proj-title">{featured.name}</h3>
            <p className="proj-lead">{featured.lead}</p>
            <Facts labels={labels} facts={featured.facts} />
            <div className="tags">
              {featuredTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="proj-links">
              <a
                href="https://pulso-cyan-zeta.vercel.app"
                target="_blank"
                rel="noopener"
              >
                {t.linkSite}
                {linkIcon}
              </a>
              <a
                href="https://github.com/mbarradev-debug/pulso"
                target="_blank"
                rel="noopener"
              >
                {t.linkCode}
                {linkIcon}
              </a>
            </div>
          </div>
          <div className="featured-media">
            <Image
              src="/pulso-shot.jpg"
              width={1400}
              height={714}
              alt={featured.shotAlt}
              loading="lazy"
            />
          </div>
        </article>

        <div className="work-grid reveal-stagger">
          {t.items.map((item) => (
            <div className="work-item" key={item.name}>
              <p className="proj-kicker">{item.kicker}</p>
              <h3 className="proj-title">{item.name}</h3>
              <p className="proj-lead">{item.lead}</p>
              <Facts labels={labels} facts={item.facts} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
