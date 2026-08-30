// Portado 1:1 desde <nav class="deck"> de referencia/index.html.
// Los botones aún no navegan: la lógica del deck se cablea en DBO-1189.
export function SectionDeck() {
  return (
    <nav className="deck" aria-label="Navegación por secciones">
      <ol className="deck-dots">
        <li>
          <button type="button" data-target="top" aria-label="Ir a Inicio"></button>
        </li>
        <li>
          <button type="button" data-target="trabajo" aria-label="Ir a Trabajo"></button>
        </li>
        <li>
          <button type="button" data-target="stack" aria-label="Ir a Stack"></button>
        </li>
        <li>
          <button
            type="button"
            data-target="sobre-mi"
            aria-label="Ir a Sobre mí"
          ></button>
        </li>
        <li>
          <button
            type="button"
            data-target="contacto"
            aria-label="Ir a Contacto"
          ></button>
        </li>
      </ol>
      <div className="deck-arrows">
        <button type="button" className="deck-prev" aria-label="Sección anterior">
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
        <button type="button" className="deck-next" aria-label="Sección siguiente">
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
