import { Inter, Saira_Condensed } from "next/font/google";
import "./globals.css";

// Root layout estático: NO se re-renderiza al cambiar de locale (/es <-> /en),
// así que el <script> de arranque vive aquí sin disparar el warning de
// "script tag while rendering" que salta al re-renderizar en cliente. El
// contenido y la metadata por idioma están en app/[lang]/layout.tsx.

// Mismos pesos que carga hoy referencia/index.html desde Google Fonts:
// Inter 400/500/600 · Saira Condensed 500/600/700/800. next/font los auto-hospeda.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-saira",
});

// Arranque (corre antes del paint):
//  - `.js` en <html> para las CSS de reveal
//  - anti-flash de tema: IIFE portado del <head> de referencia/index.html
//  - `lang` inicial desde la URL (/en -> "en", resto -> "es"); en navegación
//    cliente lo re-sincroniza LangToggle vía useEffect.
const bootScript = `(function () {
  var d = document.documentElement;
  d.classList.add("js");
  d.lang = location.pathname.slice(1, 3) === "en" ? "en" : "es";
  try {
    var t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") d.setAttribute("data-theme", t);
  } catch (e) {}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${sairaCondensed.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        {children}
      </body>
    </html>
  );
}
