import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy e sui cookie di F. Scassellati S.r.l.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle="Informativa sul trattamento dei dati personali e sull'uso dei cookie."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="border border-gray/60 rounded-lg bg-offwhite p-8">
            <h2 className="font-heading font-bold uppercase text-lg text-dgray mb-3">
              Contenuto in preparazione
            </h2>
            <p className="text-dgray/70">
              Il testo completo dell&apos;informativa privacy (finalità del
              trattamento, base giuridica, titolare, tempi di conservazione,
              categorie di cookie utilizzate) sarà pubblicato a breve. Per
              qualsiasi richiesta relativa ai tuoi dati personali, scrivi a{" "}
              <a
                href="mailto:segreteria@scassellati.com"
                className="text-dgray hover:text-bronze hover:underline transition-colors"
              >
                segreteria@scassellati.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
