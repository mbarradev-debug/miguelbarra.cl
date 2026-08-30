// Portado 1:1 desde <footer> de referencia/index.html.
// El año lo actualiza el JS de DBO-1189; aquí queda el valor literal + id.
export function Footer() {
  return (
    <footer>
      <span>
        &copy; <span id="year">2026</span> Miguel Barra. Santiago, Chile.
      </span>
      <span>Construido con HTML, CSS y un poco de JavaScript.</span>
    </footer>
  );
}
