<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!--
  El bloque de arriba lo regenera `next dev`. No editarlo ni borrarlo: se
  commitea tal cual. Toda la documentación del repo va debajo de esta línea.
-->

# miguelbarra.cl

Portfolio de Miguel Barra, **migrado desde un sitio de un solo archivo
(`referencia/index.html`) a Next.js**. El objetivo es paridad visual y de
comportamiento 1:1 con ese HTML.

**Es una migración, no un rediseño.** No se reinterpreta el diseño, no se
renombran clases, no se reescribe el copy, no se añaden ni quitan secciones. Si
hace falta una decisión de diseño nueva, va en otra issue, no aquí.
`referencia/index.html` es la fuente de verdad para cualquier duda.

## Estructura

```
proxy.ts         Routing por locale (DBO-1200). En Next 16 esta convención se
                 llama `proxy`, no `middleware`. La raíz / redirige 307 a /es o
                 /en (cookie NEXT_LOCALE, si no Accept-Language). Prefija toda
                 ruta sin locale.
dictionaries/
  es.json        Todo el texto del sitio en español. Fuente de verdad de la forma.
  en.json        Traducción al inglés; mismo esquema (Record<Locale,Dictionary>
                 lo verifica en build).
  index.ts       getDictionary(locale), tipo Locale/Dictionary, isLocale().
app/[lang]/
  layout.tsx     Root layout: <html lang={locale}>, fuentes (next/font),
                 generateMetadata + generateStaticParams por locale, script
                 anti-flash de tema, y el shell común (skip link, Nav,
                 MobileMenu, Footer, SectionDeck, Behaviors, Analytics).
  page.tsx       Lee params.lang -> diccionario -> baja cada slice a las
                 secciones: Hero, Stats, y dentro de <main> Trabajo, Stack,
                 SobreMi, Contacto.
app/globals.css  CSS global. Es el <style> de referencia/index.html portado
                 literal: tokens de tema, dark/light vía [data-theme],
                 @media (prefers-reduced-motion / -transparency / -contrast),
                 scroll-snap, etc. Cambios respecto al original: familias
                 "Inter"/"Saira Condensed" -> var(--font-inter)/var(--font-saira);
                 selector #trabajo.sec -> #work.sec.

components/
  Nav, MobileMenu, Hero, Stats, Trabajo, Stack, SobreMi, Contacto, Footer,
  SectionDeck   Un componente por sección/pieza del shell. Server components;
                reciben su slice del diccionario como prop `t` (sin prop-drilling
                más allá de layout/page).
  LangToggle.tsx Client component: selector ES/EN en la nav. Cambia entre /es y
                /en preservando la ruta + cookie NEXT_LOCALE.
  Behaviors.tsx Client component que no renderiza nada; monta los hooks de
                interactividad. Se coloca una vez en layout.tsx.
  behaviors/    Un hook por bloque del <script> vanilla del original:
                useThemeToggle, useMobileMenu, useNavSolidify, useSectionDeck,
                useScrollReveals, useFooterYear. Todos con guards de entorno.

public/
  avatar-opt.jpg, avatar.jpeg, pulso-shot.jpg, MiguelBarra_CV.pdf
  El avatar del hero y la captura de Pulso se sirven con next/image; el CV
  como enlace estático. (Los .svg de create-next-app no se usan.)

referencia/
  index.html    El sitio original de un archivo. Fuente de verdad de la
                migración; se versiona para poder comparar.
```

## Comandos

```bash
npm run dev      # servidor de desarrollo (http://localhost:3000)
npm run build    # build de producción
npm run lint     # eslint (config eslint-config-next). Nota: `next lint` ya
                 # no existe en esta versión de Next.
```

Para comparar contra el original mientras se trabaja, servir el HTML de
referencia en otro puerto y abrirlo al lado:

```bash
cd referencia && python3 -m http.server 8899
# http://localhost:8899/index.html
```

## Convenciones (acordadas en DBO-1186 … DBO-1191, i18n en DBO-1200)

- **i18n:** todo el texto visible + `aria-label` + `alt` + metadatos viven en
  `dictionaries/{es,en}.json`, nunca inline en el JSX. Nombres propios (proyectos,
  empresas, tecnologías), email y URLs sí van inline. Las anclas de sección usan
  nomenclatura estándar en inglés (`#top` `#work` `#stack` `#about` `#contact`),
  iguales en ambos idiomas. `referencia/index.html` (español, `#trabajo` etc.) no
  se toca.
- **Sin Tailwind.** Se quitó en el setup; el porte de estilos es CSS global
  literal. No reintroducir Tailwind.
- **Fuentes:** `next/font/google`, auto-hospedadas. Inter 400/500/600, Saira
  Condensed 500/600/700/800, expuestas como `--font-inter` / `--font-saira`.
- **Assets:** todo en `/public`. `next/image` para imágenes (mismas
  dimensiones y `alt` que el original); enlace estático para el PDF.
- **Metadata:** `generateMetadata` + `viewport` de `app/[lang]/layout.tsx`
  reproducen el `<head>` de `referencia/index.html` por locale (title,
  description, OG con `og:locale` es_CL/en_US, twitter, `theme-color`
  dark/light, favicon SVG inline "MB", `alternates.languages` para hreflang).
- **Tema:** oscuro por defecto, atributo `data-theme`, tokens light/dark en
  `globals.css`. El IIFE anti-flash del `<head>` original va inline en
  `app/[lang]/layout.tsx` y corre antes del paint — recargar en claro no
  muestra un flash del tema oscuro. `<html>` lleva `suppressHydrationWarning`
  porque ese script muta el elemento antes de la hidratación.
- **Interactividad:** el JS vanilla del original vive en `components/behaviors/`
  como hooks con `useEffect`, montados desde el client component `Behaviors`.
  El markup de las secciones se queda como server components; no meter estado
  ni `"use client"` en ellos sin motivo. El array `order` de `useSectionDeck`
  usa las anclas en inglés.
- **No tocar el bloque `nextjs-agent-rules`** de este archivo: lo regenera
  `next dev`. Si aparece como cambio sin commitear, commitéalo tal cual.
