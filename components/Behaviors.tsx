"use client";

import { useFooterYear } from "@/components/behaviors/useFooterYear";
import { useThemeToggle } from "@/components/behaviors/useThemeToggle";
import { useMobileMenu } from "@/components/behaviors/useMobileMenu";
import { useNavSolidify } from "@/components/behaviors/useNavSolidify";
import { useSectionDeck } from "@/components/behaviors/useSectionDeck";
import { useScrollReveals } from "@/components/behaviors/useScrollReveals";

// Reúne toda la interactividad de referencia/index.html, antes en un único
// <script> vanilla al final del <body>. Cada bloque es ahora un hook con su
// useEffect; este componente cliente sólo los ejecuta y no renderiza nada, así
// el markup de las secciones sigue siendo server components y no hay riesgo de
// mismatch de hidratación.
export function Behaviors() {
  useFooterYear();
  useThemeToggle();
  useMobileMenu();
  useNavSolidify();
  useSectionDeck();
  useScrollReveals();
  return null;
}
