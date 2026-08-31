import type { Dictionary } from "@/dictionaries";
import { LangToggle } from "@/components/LangToggle";

// Portado desde <nav class="nav"> de referencia/index.html. Texto vía diccionario
// (DBO-1200); anclas en inglés estándar (#work / #about / #contact).
export function Nav({ t }: { t: Dictionary["nav"] }) {
  return (
    <nav className="nav" aria-label={t.primary}>
      <a href="#top" className="mono" aria-label={t.home}>
        MB
      </a>
      <div className="nav-links">
        <a href="#work">{t.work}</a>
        <a href="#about">{t.about}</a>
        <a href="#contact">{t.contact}</a>
      </div>
      <div className="nav-right">
        <button
          className="toggle"
          id="theme-toggle"
          type="button"
          aria-label={t.toggleTheme}
          aria-pressed="false"
        >
          <svg
            className="icon-sun"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <svg
            className="icon-moon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>
        <LangToggle label={t.switchLang} />
        <a className="btn" href="#contact">
          {t.connect}
        </a>
        <button
          className="menu-btn"
          id="menu-open"
          type="button"
          aria-label={t.openMenu}
          aria-expanded="false"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
