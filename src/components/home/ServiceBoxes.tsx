import Link from "next/link";
import { Wrench, GraduationCap, RefreshCw, Headset } from "lucide-react";

const services = [
  {
    Icon: Wrench,
    title: "Soluzioni tecnologiche",
    description:
      "Macchine utensili, utensili, software, metrologia e automazione: tecnologie integrate per ogni fase della produzione.",
    href: "/soluzioni",
  },
  {
    Icon: GraduationCap,
    title: "Formazione",
    description:
      "Corsi tecnici per operatori, CAM, e supporto pratico con strumenti digitali.",
    href: "/formazione",
  },
  {
    Icon: RefreshCw,
    title: "Usato garantito",
    description:
      "Macchine revisionate e testate, con supporto tecnico e valutazione del vostro usato.",
    href: "/usato",
  },
  {
    Icon: Headset,
    title: "Consulenza tecnica",
    description:
      "Supporto applicativo, ottimizzazione processi e avviamento impianti.",
    href: "/servizi",
  },
];

export default function ServiceBoxes() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white border border-gray/60 rounded-lg p-6 hover:border-bronze transition-colors"
            >
              <service.Icon
                strokeWidth={1.5}
                className="w-8 h-8 text-bronze mb-4"
              />
              <h3 className="font-heading font-bold uppercase text-lg text-dgray mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-dgray/70">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
