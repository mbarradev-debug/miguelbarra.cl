import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Trabajo } from "@/components/Trabajo";
import { Stack } from "@/components/Stack";
import { SobreMi } from "@/components/SobreMi";
import { Contacto } from "@/components/Contacto";

// Composición de las secciones de referencia/index.html. El shell común
// (skip link, nav, menú móvil, footer, deck) vive en app/layout.tsx.
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <div className="stats-fade" aria-hidden="true"></div>
      <main>
        <Trabajo />
        <Stack />
        <SobreMi />
        <Contacto />
      </main>
    </>
  );
}
