import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="font-heading font-extrabold uppercase text-3xl md:text-4xl text-dgray mb-4">
          Hai una richiesta tecnica o vuoi proporre una macchina usata?
        </h2>
        <p className="text-dgray/70 max-w-xl mx-auto mb-10">
          Ti aiutiamo a trovare la soluzione migliore per la tua produzione —
          nuova o usata.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contatti"
            className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:text-bronze transition-colors"
          >
            Contattaci
          </Link>
          <Link
            href="/usato"
            className="border border-dgray/30 text-dgray px-6 py-3 rounded-sm hover:border-bronze hover:text-bronze transition-colors"
          >
            Richiedi valutazione usato
          </Link>
        </div>
      </div>
    </section>
  );
}
