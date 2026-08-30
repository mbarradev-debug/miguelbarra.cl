// Portado 1:1 desde <div class="mobile-menu"> de referencia/index.html.
export function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobile-menu">
      <button className="close" id="menu-close" type="button" aria-label="Cerrar menú">
        &times;
      </button>
      <a href="#trabajo">Trabajo</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#contacto">Contacto</a>
    </div>
  );
}
