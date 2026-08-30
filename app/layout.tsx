import type { Metadata, Viewport } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { MobileMenu } from "@/components/MobileMenu";
import { Footer } from "@/components/Footer";
import { SectionDeck } from "@/components/SectionDeck";
import { Behaviors } from "@/components/Behaviors";

// Mismos pesos que carga hoy referencia/index.html desde Google Fonts:
// Inter 400/500/600 · Saira Condensed 500/600/700/800.
// next/font los auto-hospeda; el render es equivalente y sin layout shift.
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

// Favicon: el SVG inline "MB" del original, como data URI — reproduce el
// <link rel="icon" href="data:image/svg+xml,..."> tal cual.
const faviconDataUri =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23ec5334'/%3E%3Ctext x='16' y='22' font-family='Helvetica,Arial,sans-serif' font-size='15' font-weight='700' fill='%230b0b0a' text-anchor='middle'%3EMB%3C/text%3E%3C/svg%3E";

// Cada campo reproduce un tag del <head> de referencia/index.html:
//   title               -> <title>
//   description          -> <meta name="description">
//   authors              -> <meta name="author">
//   icons.icon           -> <link rel="icon" href="data:image/svg+xml,...">
//   openGraph.*          -> <meta property="og:title|description|type|locale|url|image">
//   twitter.card         -> <meta name="twitter:card" content="summary_large_image">
//   viewport.themeColor  -> <meta name="theme-color" ... media="(prefers-color-scheme: ...)">
// metadataBase resuelve la og:image relativa al mismo host que el original
// (https://miguelbarra.cl/avatar-opt.jpg) y además funciona en previews.
export const metadata: Metadata = {
  metadataBase: new URL("https://miguelbarra.cl"),
  title: "Miguel Barra — Full Stack Developer",
  description:
    "Miguel Barra, Full Stack Developer en Santiago de Chile. React, Next.js y TypeScript, de la base de datos al deploy. Proyectos en producción para los sectores público y privado.",
  authors: [{ name: "Miguel Barra" }],
  icons: { icon: faviconDataUri },
  openGraph: {
    title: "Miguel Barra — Full Stack Developer",
    description:
      "React, Next.js y TypeScript, de la base de datos al deploy. Proyectos en producción para los sectores público y privado.",
    type: "website",
    locale: "es_CL",
    url: "https://miguelbarra.cl",
    images: ["/avatar-opt.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
    { media: "(prefers-color-scheme: light)", color: "#f4f2ec" },
  ],
};

// Anti-flash de tema: IIFE portado tal cual desde el <head> de referencia/index.html.
// Corre antes del paint para que un recargo en modo claro no muestre el tema oscuro.
const themeScript = `(function () {
  var d = document.documentElement;
  d.classList.add("js");
  try {
    var t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") d.setAttribute("data-theme", t);
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${sairaCondensed.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a className="skip" href="#trabajo">
          Saltar al contenido
        </a>
        <Nav />
        <MobileMenu />
        {children}
        <Footer />
        <SectionDeck />
        <Behaviors />
      </body>
    </html>
  );
}
