import type { Dictionary } from "@/dictionaries";

// Portado desde <nav class="deck"> de referencia/index.html. Texto vía diccionario
// (DBO-1200); data-target en inglés estándar, alineado con useSectionDeck.
export function SectionDeck({ t }: { t: Dictionary["deck"] }) {
  return (
    <nav className="deck" aria-label={t.label}>
      <ol className="deck-dots">
        <li>
          <button type="button" data-target="top" aria-label={t.goTo.top}></button>
        </li>
        <li>
          <button type="button" data-target="work" aria-label={t.goTo.work}></button>
        </li>
        <li>
          <button type="button" data-target="stack" aria-label={t.goTo.stack}></button>
        </li>
        <li>
          <button type="button" data-target="about" aria-label={t.goTo.about}></button>
        </li>
        <li>
          <button
            type="button"
            data-target="contact"
            aria-label={t.goTo.contact}
          ></button>
        </li>
      </ol>
      <div className="deck-arrows">
        <button type="button" className="deck-prev" aria-label={t.prev}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 15l6-6 6 6" />
          </svg>
        </button>
        <button type="button" className="deck-next" aria-label={t.next}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
