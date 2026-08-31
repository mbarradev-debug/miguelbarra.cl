import { NextResponse, type NextRequest } from "next/server";
import { locales, isLocale, defaultLocale } from "@/dictionaries";

// DBO-1200 — routing por locale. En Next 16 esta convención se llama `proxy`
// (antes `middleware`). Prefija toda ruta sin locale con /es o /en:
//   - cookie NEXT_LOCALE si existe (la setea el selector de idioma)
//   - si no, Accept-Language: es-* -> es, resto -> en
const COOKIE = "NEXT_LOCALE";

function detectLocale(request: NextRequest): string {
  const fromCookie = request.cookies.get(COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  const header = request.headers.get("accept-language") ?? "";
  const primary = header.split(",")[0]?.trim().toLowerCase() ?? "";
  return primary.startsWith("es") ? "es" : "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url, 307);
  if (locale !== defaultLocale || request.cookies.has(COOKIE)) {
    response.cookies.set(COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  // Todo excepto internos de Next, endpoints de Vercel y archivos con extensión.
  matcher: ["/((?!_next/|_vercel/|.*\\..*).*)"],
};
