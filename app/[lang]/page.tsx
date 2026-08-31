import { getDictionary } from "@/dictionaries";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Trabajo } from "@/components/Trabajo";
import { Stack } from "@/components/Stack";
import { SobreMi } from "@/components/SobreMi";
import { Contacto } from "@/components/Contacto";

type Props = { params: Promise<{ lang: string }> };

// Composición de las secciones de referencia/index.html. El shell común
// (skip link, nav, menú móvil, footer, deck) vive en app/[lang]/layout.tsx.
export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      <Hero t={dict.hero} />
      <Stats t={dict.stats} />
      <div className="stats-fade" aria-hidden="true"></div>
      <main>
        <Trabajo t={dict.work} />
        <Stack t={dict.tech} />
        <SobreMi t={dict.about} />
        <Contacto t={dict.contact} />
      </main>
    </>
  );
}
