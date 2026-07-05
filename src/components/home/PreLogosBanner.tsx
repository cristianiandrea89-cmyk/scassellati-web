import Image from "next/image";

export default function PreLogosBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
            Consulenza tecnica
          </p>
          <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-dgray mb-4">
            Non vendiamo solo macchine, condividiamo know-how
          </h2>
          <p className="text-dgray/70 mb-4">
            Analizziamo i processi, consigliamo le soluzioni, affianchiamo
            l&apos;operatore: ogni installazione per noi è un progetto, non
            una semplice vendita.
          </p>
          <p className="text-dgray/70">
            Offriamo una gamma integrata di macchine, utensili, software e
            formazione, per trasformare la produzione in vantaggio
            competitivo.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src="/images/home/pre-loghi.jpeg"
            alt="Consulenza tecnica con strumenti digitali dei nostri partner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
