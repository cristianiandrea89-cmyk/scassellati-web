import Image from "next/image";

export default function ValueBlock() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
            Chi siamo
          </p>
          <h2 className="font-heading font-extrabold uppercase text-3xl md:text-4xl text-dgray mb-6">
            Ogni installazione è un progetto,
            <br />
            non una semplice vendita.
          </h2>
          <p className="text-dgray/75 mb-4">
            Analizziamo i processi, consigliamo le soluzioni, affianchiamo
            l&apos;operatore.
          </p>
          <p className="text-dgray/75">
            Offriamo una gamma integrata di macchine, utensili, software e
            formazione, per trasformare la produzione in vantaggio
            competitivo.
          </p>
        </div>

        <div className="bg-dgray rounded-lg aspect-[4/3] flex items-center justify-center">
          <Image
            src="/logo/scassellati-symbol-gold.svg"
            alt="Simbolo Scassellati"
            width={81}
            height={55}
            className="w-24 h-auto opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
