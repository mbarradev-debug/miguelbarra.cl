import { useEffect } from "react";

// Año dinámico del footer — equivalente a:
//   var y = document.getElementById("year");
//   if (y) y.textContent = String(new Date().getFullYear());
export function useFooterYear() {
  useEffect(() => {
    const y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }, []);
}
