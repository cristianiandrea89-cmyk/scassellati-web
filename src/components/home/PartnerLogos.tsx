import Image from "next/image";

// scale: fattore di ingrandimento del singolo logo rispetto al riferimento
// Sandvik Coromant (scale: 1). Valori calcolati automaticamente in base
// all'area effettiva occupata dal contenuto di ogni logo (bounding box)
// una volta adattato al riquadro 140x40, cosi' da rendere omogeneo il
// peso visivo percepito lungo tutta la marquee.
const partners = [
  // Macchine per asportazione truciolo
  { name: "Tornos", image: "/logo/partner/tornos.svg", scale: 1.01 },
  { name: "Biglia", image: "/logo/partner/biglia.png", scale: 1.05 },
  { name: "United Machining", image: "/logo/partner/unitedmachining.svg", scale: 1.34 },
  { name: "CMT", image: "/logo/partner/cmt.png", scale: 2.16 },
  { name: "Emco", image: "/logo/partner/emco.png", scale: 1.07 },
  { name: "MCM", image: "/logo/partner/mcm-2024.png", scale: 1.67 },
  { name: "Belotti", image: "/logo/partner/belotti.svg", scale: 1.1 },
  { name: "Pama", image: "/logo/partner/pama.png", scale: 1.77 },
  { name: "Fenix", image: "/logo/partner/fenix.png", scale: 1.4 },
  { name: "Mar", image: "/logo/partner/mar.png", scale: 1.01 },
  { name: "Bianco", image: "/logo/partner/bianco.png", scale: 1.12 },
  { name: "Ficep", image: "/logo/partner/ficep.png", scale: 2.16 },
  { name: "Riboni", image: "/logo/partner/riboni-2024.png", scale: 2.54 },
  // Utensili
  { name: "Sandvik Coromant", image: "/logo/partner/sandvik-coromant.svg", scale: 1 },
  { name: "Schunk", image: "/logo/partner/schunk.svg", scale: 1.06 },
  // Metrologia
  { name: "Hexagon", image: "/logo/partner/hexagon.png", scale: 2.38 },
  // Software
  { name: "Icam", image: "/logo/partner/icam.png", scale: 1.07 },
  // Presse meccaniche
  { name: "Pressix", image: "/logo/partner/pressix.png", scale: 0.99 },
  // Macchine per lamiera
  { name: "LVD", image: "/logo/partner/lvd.svg", scale: 1.01 },
  { name: "Flow", image: "/logo/partner/flow.png", scale: 2.16 },
  // Automazione
  { name: "Top Automazioni", image: "/logo/partner/topautomazioni.png", scale: 1.66 },
  { name: "Precision Robotica", image: "/logo/partner/precisionrobotica.png", scale: 1.03 },
  { name: "Tecnorobot", image: "/logo/partner/tecnorobot.svg", scale: 1.02 },
  // Lavorazione plastica
  { name: "Engel", image: "/logo/partner/engel.svg", scale: 1.0 },
  { name: "Frigel", image: "/logo/partner/frigel.svg", scale: 1.08 },
  { name: "Virginio Nastri", image: "/logo/partner/virginio.png", scale: 1.0 },
  // Finitura e trattamenti
  { name: "Garboli", image: "/logo/partner/garboli.png", scale: 1.08 },
  { name: "Ceia Power", image: "/logo/partner/ceia.webp", scale: 1.33 },
  { name: "Nabertherm", image: "/logo/partner/nabertherm.svg", scale: 1.14 },
  { name: "Otec", image: "/logo/partner/otec.svg", scale: 1.34 },
  { name: "Firbimatic", image: "/logo/partner/firbimatic.svg", scale: 1.02 },
  { name: "Rösler", image: "/logo/partner/rosler-2024.png", scale: 1.06 },
];

function PartnerItem({ partner }: { partner: (typeof partners)[number] }) {
  if (partner.image) {
    return (
      <div className="relative h-10 w-[140px] shrink-0 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          className="object-contain object-center"
          style={{ transform: `scale(${partner.scale ?? 1})` }}
          sizes="140px"
        />
      </div>
    );
  }
  return (
    <span className="shrink-0 font-heading font-bold uppercase text-xl text-dgray/65 transition-colors hover:text-dgray">
      {partner.name}
    </span>
  );
}

export default function PartnerLogos() {
  return (
    <section className="bg-offwhite border-y border-gray/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-dgray/65 mb-8">
          I nostri partner tecnologici
        </p>
        <div className="animate-marquee flex w-max items-center gap-x-16">
          {[...partners, ...partners].map((partner, i) => (
            <PartnerItem key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
