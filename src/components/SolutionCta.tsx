import Link from "next/link";

export default function SolutionCta({
  title = "Non sai quale tecnologia scegliere?",
  subtitle = "I nostri tecnici sono a disposizione per individuare la soluzione più adatta alla tua produzione.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-offwhite border-t border-gray/60">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="font-heading font-extrabold uppercase text-2xl md:text-3xl text-dgray mb-4">
          {title}
        </h2>
        <p className="text-dgray/70 mb-8">{subtitle}</p>
        <Link
          href="/contatti"
          className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:text-bronze transition-colors inline-block"
        >
          Contattaci
        </Link>
      </div>
    </section>
  );
}
