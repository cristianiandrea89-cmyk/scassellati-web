import Link from "next/link";

const solutions = [
  {
    title: "Fresatura CNC",
    subtitle: "Verticali, orizzontali e 5 assi",
    href: "/soluzioni/asportazione-truciolo/fresatura",
  },
  {
    title: "Tornitura & fantina mobile",
    subtitle: "Torni CNC, fantina mobile, plurimandrino, caricatori",
    href: "/soluzioni/asportazione-truciolo/tornitura",
  },
  {
    title: "Macchine per lamiera",
    subtitle: "Piegatrici, punzonatrici, laser, taglio ad acqua",
    href: "/soluzioni/lamiera",
  },
  {
    title: "Software CAD/CAM",
    subtitle: "Programmazione CNC, simulazione, MES, ERP",
    href: "/soluzioni/software",
  },
  {
    title: "Metrologia & controllo",
    subtitle: "Soluzioni per controllo qualità e collaudo",
    href: "/soluzioni/metrologia",
  },
  {
    title: "Automazione industriale",
    subtitle: "Magazzini automatici, robotica e linee integrate",
    href: "/soluzioni/automazione",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="bg-dgray">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
          Soluzioni
        </p>
        <h2 className="font-heading font-extrabold uppercase text-3xl md:text-4xl text-offwhite mb-12 max-w-2xl">
          Soluzioni tecnologiche per ogni esigenza produttiva
        </h2>

        <div className="grid gap-px bg-white/10 md:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-dgray p-8 hover:bg-white/[0.03] transition-colors"
            >
              <h3 className="font-heading font-bold uppercase text-xl text-offwhite mb-2 group-hover:text-bronze transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray/70">{s.subtitle}</p>
              <span className="mt-4 inline-block text-bronze text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Scopri di più →︎
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
