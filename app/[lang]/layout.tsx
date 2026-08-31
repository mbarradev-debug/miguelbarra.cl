import type { Metadata, Viewport } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import "../globals.css";
import { locales, getDictionary, isLocale, defaultLocale } from "@/dictionaries";
import { Nav } from "@/components/Nav";
import { MobileMenu } from "@/components/MobileMenu";
import { Footer } from "@/components/Footer";
import { SectionDeck } from "@/components/SectionDeck";
import { Behaviors } from "@/components/Behaviors";
import { Analytics } from "@vercel/analytics/next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

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

// Favicon: el SVG inline "MB" del original, como data URI.
const faviconDataUri =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23ec5334'/%3E%3Ctext x='16' y='22' font-family='Helvetica,Arial,sans-serif' font-size='15' font-weight='700' fill='%230b0b0a' text-anchor='middle'%3EMB%3C/text%3E%3C/svg%3E";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Metadata equivalente al <head> de referencia/index.html, por locale (DBO-1190
// + DBO-1200). `alternates.languages` emite los <link rel="alternate" hreflang>.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const t = getDictionary(locale).meta;

  return {
    metadataBase: new URL("https://miguelbarra.cl"),
    title: t.title,
    description: t.description,
    authors: [{ name: "Miguel Barra" }],
    icons: { icon: faviconDataUri },
    alternates: {
      canonical: `/${locale}`,
      languages: { "es-CL": "/es", "en-US": "/en", "x-default": "/es" },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      type: "website",
      locale: t.ogLocale,
      url: `/${locale}`,
      images: ["/avatar-opt.jpg"],
    },
    twitter: { card: "summary_large_image" },
  };
}

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

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${sairaCondensed.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a className="skip" href="#work">
          {dict.skip}
        </a>
        <Nav t={dict.nav} />
        <MobileMenu t={dict.nav} />
        {children}
        <Footer t={dict.footer} />
        <SectionDeck t={dict.deck} />
        <Behaviors />
        {/* Vercel Web Analytics: no renderiza nada, sin cookies. Sólo reporta en
            el deploy de Vercel con Web Analytics habilitado en el dashboard. */}
        <Analytics />
      </body>
    </html>
  );
}
