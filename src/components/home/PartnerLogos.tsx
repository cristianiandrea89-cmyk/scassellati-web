import Image from "next/image";

// scale: fattore di ingrandimento del singolo logo rispetto al riferimento
// Sandvik Coromant (scale: 1). Regola questi valori a occhio in base al
// peso visivo percepito, senza toccare il resto del componente.
const partners = [
  // Macchine per asportazione truciolo
  { name: "Tornos", image: "/logo/partner/tornos.svg", scale: 1.15 },
  { name: "Biglia", image: "/logo/partner/biglia.png", scale: 1.0 },
  { name: "United Machining", image: "/logo/partner/unitedmachining.svg", scale: 1.2 },
  { name: "CMT", image: "/logo/partner/cmt.png", scale: 0.85 },
  { name: "Emco", image: "/logo/partner/emco.png", scale: 0.9 },
  { name: "MCM", image: "/logo/partner/mcm.png", scale: 1.15 },
  { name: "Belotti", image: "/logo/partner/belotti.svg", scale: 1.05 },
  { name: "Pama", image: "/logo/partner/pama.png", scale: 1.1 },
  { name: "Fenix", image: "/logo/partner/fenix.png", scale: 1.15 },
  { name: "Mar", image: "/logo/partner/mar.png", scale: 1.0 },
  { name: "Bianco", image: "/logo/partner/bianco.png", scale: 1.0 },
  { name: "Ficep", image: "/logo/partner/ficep.png", scale: 0.85 },
  { name: "Riboni", image: "/logo/partner/riboni.jpg", scale: 0.9 },
  // Utensili
  { name: "Sandvik Coromant", image: "/logo/partner/sandvik-coromant.svg", scale: 1 },
  { name: "Schunk", image: "/logo/partner/schunk.svg", scale: 1 },
  // Metrologia
  { name: "Hexagon", image: "/logo/partner/hexagon.png", scale: 1.1 },
  // Software
  { name: "Icam", image: "/logo/partner/icam.png", scale: 1.0 },
  // Presse meccaniche
  { name: "Pressix", image: "/logo/partner/pressix.png", scale: 1.0 },
  // Macchine per lamiera
  { name: "LVD", image: "/logo/partner/lvd.svg", scale: 1.1 },
  { name: "Flow", image: "/logo/partner/flow.png", scale: 1.25 },
  // Automazione
  { name: "Top Automazioni", image: "/logo/partner/topautomazioni.png", scale: 0.95 },
  { name: "Precision Robotica", image: "/logo/partner/precisionrobotica.png", scale: 1.1 },
  { name: "Tecnorobot", image: "/logo/partner/tecnorobot.svg", scale: 1.1 },
  // Lavorazione plastica
  { name: "Engel", image: "/logo/partner/engel.svg", scale: 1.0 },
  { name: "Frigel", image: "/logo/partner/frigel.svg", scale: 1.05 },
  { name: "Shini Italia", image: "/logo/partner/shini.png", scale: 1.0 },
  { name: "Virginio Nastri", image: "/logo/partner/virginio.png", scale: 1.0 },
  // Finitura e trattamenti
  { name: "Garboli", image: "/logo/partner/garboli.png", scale: 0.95 },
  { name: "Ceia Power", image: "/logo/partner/ceia.webp", scale: 1.0 },
  { name: "Nabertherm", image: "/logo/partner/nabertherm.svg", scale: 1.0 },
  { name: "Otec", image: "/logo/partner/otec.svg", scale: 1.0 },
  { name: "Firbimatic", image: "/logo/partner/firbimatic.svg", scale: 1.0 },
  { name: "Rösler", image: "/logo/partner/rosler.jpg", scale: 1.0 },
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
    <span className="shrink-0 font-heading font-bold uppercase text-xl text-dgray/40 transition-colors hover:text-dgray">
      {partner.name}
    </span>
  );
}

export default function PartnerLogos() {
  return (
    <section className="bg-offwhite border-y border-gray/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-dgray/60 mb-8">
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
