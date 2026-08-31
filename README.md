# miguelbarra.cl

Portfolio de Miguel Barra, migrado desde un sitio de un solo archivo
(`referencia/index.html`) a Next.js (App Router, TypeScript). El objetivo de la
migración es paridad visual y de comportamiento 1:1 con ese HTML. Disponible en
español (`/es`) e inglés (`/en`); la raíz redirige según el navegador.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint     # eslint (eslint-config-next)
```

Para comparar contra el original mientras se trabaja:

```bash
cd referencia && python3 -m http.server 8899
# http://localhost:8899/index.html
```

## Estructura

- `app/layout.tsx` — root estático: `<html>`, fuentes, script de arranque
  (`lang` + anti-flash de tema). `app/[lang]/layout.tsx` — shell + Metadata API
  por locale; `app/[lang]/page.tsx` — composición de secciones. `app/globals.css`
  es el `<style>` original portado literal.
- `dictionaries/` — todo el texto del sitio (`es.json` / `en.json`) + `getDictionary`.
- `proxy.ts` — routing por locale (redirect de `/` según `Accept-Language`).
- `components/` — un componente por sección/pieza del shell; `Behaviors.tsx`
  monta los hooks de interactividad en `components/behaviors/`; `LangToggle.tsx`
  es el selector ES/EN.
- `public/` — imágenes (servidas con `next/image`) y el CV en PDF.
- `referencia/index.html` — el sitio original, fuente de verdad de la migración.

Más contexto y convenciones en [`AGENTS.md`](./AGENTS.md).

## Deploy

Proyecto Next.js estándar; se despliega en Vercel sin configuración adicional.
