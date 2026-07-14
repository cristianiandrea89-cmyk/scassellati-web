import PageHero from "@/components/PageHero";
import UsatoForm from "@/components/forms/UsatoForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Macchine utensili usate",
  description:
    "Macchine utensili usate revisionate e testate, valutazione, ritiro e permuta del tuo parco macchine con supporto tecnico Scassellati. Servizio per aziende del Lazio, Umbria e in tutta Italia.",
};

const usatoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Valutazione, ritiro e vendita macchine utensili usate",
  description:
    "Valutazione, ritiro, permuta e vendita di macchine utensili usate revisionate e testate.",
  provider: { "@type": "LocalBusiness", name: "F. Scassellati S.r.l." },
  areaServed: [
    { "@type": "State", name: "Lazio" },
    { "@type": "State", name: "Umbria" },
  ],
};

export default function UsatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usatoJsonLd) }}
      />
      <PageHero
        eyebrow="Usato"
        title="Usato garantito e valutazione"
        subtitle="Se stai rinnovando il tuo parco macchine, possiamo aiutarti a valutare, ritirare o permutare la tua attrezzatura usata. Offriamo inoltre una selezione di macchine utensili usate garantite, testate dai nostri tecnici, per aziende del Lazio, Umbria e di tutta Italia."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading font-extrabold uppercase text-2xl text-dgray mb-4">
              Richiedi la valutazione del tuo usato
            </h2>
            <p className="text-dgray/70 mb-8">
              Vuoi vendere o permutare una macchina utensile? Inviaci le
              informazioni e ti ricontatteremo per una valutazione tecnica e
              commerciale.
            </p>
            <UsatoForm />
          </div>

          <div>
            <h2 className="font-heading font-extrabold uppercase text-2xl text-dgray mb-4">
              Macchine disponibili in pronta consegna
            </h2>
            <p className="text-dgray/70 mb-8">
              Gli annunci saranno collegati automaticamente al nostro
              portale dedicato all&apos;usato,{" "}
              <a
                href="https://ventunoservice.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dgray hover:text-bronze hover:underline transition-colors"
              >
                ventunoservice.it
              </a>{" "}
              — questa sezione mostrerà a breve le macchine disponibili.
            </p>
            <div className="bg-offwhite border border-dashed border-gray/60 rounded-lg p-10 text-center text-dgray/65 text-sm">
              Elenco macchine usate in arrivo
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
