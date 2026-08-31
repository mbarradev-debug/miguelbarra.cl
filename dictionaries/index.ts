import es from "./es.json";
import en from "./en.json";

// Diccionarios de i18n (DBO-1200). El texto del sitio vive aquí, no en el JSX.
// es.json es la fuente de verdad de la forma; en.json debe encajar en el mismo
// tipo (`Record<Locale, Dictionary>` lo verifica en build).

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof es;

export const defaultLocale: Locale = "es";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "es" || value === "en";
}

const dictionaries: Record<Locale, Dictionary> = { es, en };

// El locale llega como `params.lang` desde app/[lang]/{layout,page}.tsx y se
// baja a cada componente como slice del diccionario.
export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
