import type { Metadata } from "next";
import AziendeClient from "./AziendeClient";

export const metadata: Metadata = {
  title: "Aziende",
  description:
    "I nostri partner tecnologici: i costruttori e le aziende leader con cui collaboriamo per offrire soluzioni complete per la produzione industriale.",
};

export default function AziendePage() {
  return <AziendeClient />;
}
