export type Brand = { name: string; url: string };
export type Item = {
  name: string;
  description: string;
  image?: string;
  brands?: Brand[];
};
export type SolutionCategory = {
  title: string;
  subtitle: string;
  metaDescription?: string;
  items: Item[];
};

// Le 9 macro-categorie mostrate in /soluzioni. "slug" corrisponde alla
// route: /soluzioni/[slug], eccetto "asportazione-truciolo" che ha le
// proprie sotto-pagine in /soluzioni/asportazione-truciolo/[slug]
// (vedi asportazionePages sotto).
export const areas = [
  {
    slug: "asportazione-truciolo",
    title: "Macchine per asportazione truciolo",
    description:
      "Centri di lavoro verticali, orizzontali e a 5 assi, torni CNC, fantina mobile, plurimandrino, lavorazioni piastre e compositi.",
    image: "/images/soluzioni/asportazione-truciolo.jpeg",
  },
  {
    slug: "lamiera",
    title: "Macchine per lamiera",
    description:
      "Piegatrici, punzonatrici, taglio laser, taglio ad acqua. Soluzioni integrate per lavorazioni lamiera leggere e strutturali.",
    image: "/images/soluzioni/lamiera.png",
  },
  {
    slug: "utensili",
    title: "Utensili",
    description:
      "Inserti, portautensili e sistemi di serraggio. Supporto tecnico nella scelta, test e ottimizzazione dei cicli di lavorazione.",
    image: "/images/soluzioni/utensili.jpeg",
  },
  {
    slug: "metrologia",
    title: "Metrologia",
    description:
      "Soluzioni per il controllo dimensionale e la qualità: CMM, strumenti ottici, sonde e attrezzature di misura per ogni reparto.",
    image: "/images/soluzioni/metrologia.jpeg",
  },
  {
    slug: "software",
    title: "Software",
    description:
      "CAD/CAM (ESPRIT EDGE, VISI CAM), simulazione CNC (NC SIMUL), gestione produzione (MES), integrazione ERP.",
    image: "/images/soluzioni/software.jpeg",
  },
  {
    slug: "presse-meccaniche",
    title: "Presse meccaniche",
    description:
      "Presse ad alta produttività per stampaggio e deformazione, ideali per lavorazioni complesse e componenti per infrastrutture.",
    image: "/images/soluzioni/presse-meccaniche.png",
  },
  {
    slug: "automazione",
    title: "Automazione",
    description:
      "Robot industriali, magazzini automatici, sistemi di carico/scarico. Integrazione completa tra macchina e processo produttivo.",
    image: "/images/soluzioni/automazione-magazzini.jpeg",
  },
  {
    slug: "lavorazione-plastica",
    title: "Lavorazione plastica",
    description:
      "Presse per stampaggio termoplastico, refrigerazione, accessori e sistemi per lo stampaggio ad alte prestazioni.",
    image: "/images/soluzioni/lavorazione-plastica.png",
  },
  {
    slug: "finitura-trattamenti",
    title: "Finitura e trattamenti",
    description:
      "Impianti per trattamenti termici e superficiali, sabbiatura, lavaggio, verniciatura e altre finiture post-lavorazione.",
    image: "/images/soluzioni/finitura-trattamenti.png",
  },
];

export const soluzioniPages: Record<string, SolutionCategory> = {
  utensili: {
    title: "Utensili",
    subtitle:
      "Seleziona la soluzione di utensileria più adatta alle tue lavorazioni. Distributori Sandvik Coromant e Schunk per le aziende del Lazio e Umbria.",
    metaDescription:
      "Utensili, inserti e sistemi di serraggio Sandvik Coromant e Schunk. Vendita, supporto tecnico e ottimizzazione dei cicli di lavorazione per le aziende del Lazio e Umbria.",
    items: [
      {
        name: "Sandvik Coromant",
        description: "Utensili e inserti per ogni tipo di lavorazione.",
        image: "/images/soluzioni/utensili-sandvik.jpeg",
        brands: [{ name: "Sandvik Coromant", url: "https://www.sandvik.coromant.com/it-it" }],
      },
      {
        name: "Schunk",
        description: "Sistemi di serraggio e presa per macchine utensili.",
        image: "/images/soluzioni/utensili-schunk.jpg",
        brands: [{ name: "Schunk", url: "https://schunk.com/it/it" }],
      },
    ],
  },
  metrologia: {
    title: "Metrologia",
    subtitle:
      "Seleziona la tecnologia di misura più adatta alle tue esigenze di controllo.",
    items: [
      {
        name: "Macchine di misura a coordinate e strumenti ottici",
        description: "Controllo dimensionale e collaudo per la massima precisione.",
        image: "/images/soluzioni/metrologia-detail.jpeg",
        brands: [
          {
            name: "Hexagon",
            url: "https://hexagon.com/it/products/product-groups/measurement-inspection-hardware/coordinate-measuring-machines",
          },
        ],
      },
    ],
  },
  software: {
    title: "Software",
    subtitle:
      "Seleziona il software più adatto per programmare, simulare e gestire la produzione.",
    items: [
      {
        name: "CAD/CAM",
        description: "Programmazione e simulazione digitale dei cicli di lavorazione.",
        image: "/images/soluzioni/software-cadcam.png",
        brands: [
          {
            name: "Hexagon",
            url: "https://hexagon.com/it/products/product-groups/computer-aided-manufacturing-cad-cam-software",
          },
        ],
      },
      {
        name: "MES / ERP",
        description: "Gestione digitale della produzione e dei processi aziendali.",
        image: "/images/soluzioni/software-mes-erp.jpeg",
        brands: [{ name: "Vero Project Group", url: "https://www.veroprojectgroup.com/" }],
      },
    ],
  },
  "presse-meccaniche": {
    title: "Presse meccaniche",
    subtitle:
      "Seleziona la tecnologia di stampaggio più adatta al tuo processo produttivo.",
    items: [
      {
        name: "Presse meccaniche Pressix",
        description: "Presse per stampaggio e deformazione ad alta produttività.",
        image: "/images/soluzioni/presse-pressix-raddrizzatrice.jpg",
        brands: [{ name: "Pressix", url: "https://www.pressix.it/" }],
      },
    ],
  },
  lamiera: {
    title: "Macchine per lamiera",
    subtitle:
      "Seleziona la tecnologia più adatta per tagliare e lavorare la lamiera.",
    items: [
      {
        name: "Piegatrici",
        description: "Piegatura di precisione per lamiere sottili e spesse.",
        image: "/images/soluzioni/lamiera-piegatrice-lvd.jpg",
        brands: [{ name: "LVD", url: "https://www.lvdgroup.com/en" }],
      },
      {
        name: "Punzonatrici",
        description: "Punzonatura veloce per forature e lavorazioni ripetitive.",
        image: "/images/soluzioni/lamiera-punzonatrice-lvd.jpg",
        brands: [{ name: "LVD", url: "https://www.lvdgroup.com/en" }],
      },
      {
        name: "Taglio laser",
        description: "Taglio laser di precisione per lamiere di ogni spessore.",
        image: "/images/soluzioni/lamiera-laser-phoenix.jpg",
        brands: [{ name: "LVD", url: "https://www.lvdgroup.com/en" }],
      },
      {
        name: "Taglio ad acqua",
        description: "Taglio a getto d'acqua senza alterazioni termiche del materiale.",
        image: "/images/soluzioni/lamiera-taglio-acqua-flow.jpg",
        brands: [{ name: "Flow", url: "https://www.flowwaterjet.it/" }],
      },
      {
        name: "Foratura e taglio piastre",
        description: "Foratura e taglio automatizzato di piastre in acciaio.",
        image: "/images/soluzioni/lamiera-ficep-foratura.jpg",
        brands: [{ name: "Ficep", url: "https://www.ficepgroup.com/it/" }],
      },
    ],
  },
  automazione: {
    title: "Automazione",
    subtitle:
      "Scopri le soluzioni per automatizzare e ottimizzare il tuo processo produttivo.",
    items: [
      {
        name: "Magazzini automatici",
        description: "Stoccaggio automatizzato per una gestione efficiente del materiale.",
        image: "/images/soluzioni/automazione-magazzini.jpeg",
        brands: [{ name: "Icam", url: "https://www.icamonline.eu/" }],
      },
      {
        name: "Celle robotizzate",
        description: "Automazione robotizzata per carico e scarico macchina.",
        image: "/images/soluzioni/automazione-celle-robotizzate.png",
        brands: [{ name: "Precision Robotica", url: "https://www.precisionrobotica.it/" }],
      },
      {
        name: "Saldatura robotizzata",
        description: "Saldatura automatizzata per cicli produttivi costanti e ripetibili.",
        image: "/images/soluzioni/automazione-saldatura.png",
        brands: [{ name: "Tecnorobot", url: "https://www.tecnorobot.com/" }],
      },
    ],
  },
  "lavorazione-plastica": {
    title: "Lavorazione plastica",
    subtitle:
      "Seleziona la tecnologia più adatta per lo stampaggio, la gestione dei materiali e l'automazione del processo produttivo.",
    items: [
      {
        name: "Presse Engel",
        description: "Stampaggio a iniezione per componenti in materiale plastico.",
        image: "/images/soluzioni/plastica-engel-victory160.jpg",
        brands: [{ name: "Engel", url: "https://www.engelglobal.com/it/it/index.html" }],
      },
      {
        name: "Refrigerazione Frigel",
        description: "Raffreddamento dei processi per una produzione più stabile.",
        image: "/images/soluzioni/plastica-frigel-microgel.jpg",
        brands: [{ name: "Frigel", url: "https://www.frigel.com/it" }],
      },
      {
        name: "Miscelatori Shini",
        description: "Miscelazione e dosaggio dei materiali plastici prima dello stampaggio.",
        image: "/images/soluzioni/plastica-shini-miscelatore.jpg",
        brands: [{ name: "Shini", url: "https://www.shini.it/" }],
      },
      {
        name: "Nastri trasportatori Virginio",
        description: "Movimentazione automatica dei pezzi lungo la linea produttiva.",
        image: "/images/soluzioni/plastica-virgilio-nastri.jpg",
        brands: [{ name: "Virginio Nastri", url: "https://www.virginionastri.it/" }],
      },
    ],
  },
  "finitura-trattamenti": {
    title: "Finitura e trattamenti",
    subtitle:
      "Seleziona la tecnologia più adatta per migliorare le caratteristiche meccaniche, superficiali ed estetiche dei tuoi componenti.",
    items: [
      {
        name: "Lavaggio metalli",
        description: "Lavaggio industriale dei componenti dopo la lavorazione meccanica.",
        image: "/images/soluzioni/finitura-lavaggio-firbimatic.jpg",
        brands: [{ name: "Firbimatic", url: "https://www.firbimatic.it/home" }],
      },
      {
        name: "Lucidatura",
        description: "Finitura superficiale per componenti dall'aspetto uniforme e brillante.",
        image: "/images/soluzioni/finitura-lucidatura.jpg",
        brands: [{ name: "Otec", url: "https://www.otec.de/it/" }],
      },
      {
        name: "Burattatura",
        description: "Levigatura di massa per componenti di piccole dimensioni.",
        image: "/images/soluzioni/finitura-otec-burattatura.jpg",
        brands: [{ name: "Otec", url: "https://www.otec.de/it/" }],
      },
      {
        name: "Verniciatura",
        description: "Verniciatura protettiva ed estetica dei componenti lavorati.",
        image: "/images/soluzioni/finitura-verniciatura.jpg",
      },
      {
        name: "Trattamenti termici a induzione",
        description: "Tempra a induzione per componenti meccanici resistenti.",
        image: "/images/soluzioni/finitura-ceia-powercube.jpg",
        brands: [{ name: "Ceia Power", url: "https://www.ceia-power.com/" }],
      },
      {
        name: "Forni per trattamenti termici",
        description: "Trattamenti termici in forno per migliorare le proprietà meccaniche.",
        image: "/images/soluzioni/finitura-forno-nabertherm.jpg",
        brands: [{ name: "Nabertherm", url: "https://nabertherm.com/en" }],
      },
    ],
  },
};

export const asportazionePages: Record<string, SolutionCategory> = {
  fresatura: {
    title: "Fresatura",
    subtitle: "Seleziona la tipologia di centro di lavoro più adatta alla tua produzione.",
    items: [
      {
        name: "Centri di lavoro verticali",
        description: "Fresatura verticale per pezzi di media e piccola dimensione.",
        image: "/images/soluzioni/fresatura-centri-verticali.png",
        brands: [
          { name: "United Machining", url: "https://www.machining.com" },
          { name: "Emco", url: "https://www.emco-world.com/it/" },
        ],
      },
      {
        name: "Centri di lavoro orizzontali",
        description: "Fresatura orizzontale per lavorazioni complesse su più lati.",
        image: "/images/soluzioni/fresatura-centri-orizzontali.png",
        brands: [{ name: "MCM", url: "https://www.mcmspa.it/" }],
      },
      {
        name: "Centri di lavoro a 5 assi",
        description: "Lavorazioni simultanee a 5 assi per geometrie complesse.",
        image: "/images/soluzioni/fresatura-5-assi.png",
        brands: [
          { name: "United Machining", url: "https://www.machining.com" },
          { name: "Emco", url: "https://www.emco-world.com/it/" },
        ],
      },
      {
        name: "Lavorazione materiali compositi",
        description: "Lavorazione di compositi e materiali leggeri per l'aerospaziale.",
        image: "/images/soluzioni/fresatura-materiali-compositi.jpeg",
        brands: [{ name: "Belotti", url: "https://www.belotti.com/en/cnc-machining-centers/" }],
      },
      {
        name: "Alesatrici e fresatrici di grandi dimensioni",
        description: "Lavorazioni di precisione su componenti di grandi dimensioni.",
        image: "/images/soluzioni/fresatura-alesatrici.png",
        brands: [{ name: "Pama", url: "https://pamamachinetools.com/" }],
      },
      {
        name: "Lavorazione piastre",
        description: "Fresatura di piastre e componenti di grande formato.",
        image: "/images/soluzioni/fresatura-lavorazione-piastre.jpeg",
        brands: [{ name: "Belotti", url: "https://www.belotti.com/en/cnc-machining-centers/" }],
      },
    ],
  },
  tornitura: {
    title: "Tornitura",
    subtitle: "Seleziona la tipologia di tornio più adatta alla tua produzione.",
    items: [
      {
        name: "Centri di tornitura",
        description: "Tornitura di precisione per componenti cilindrici complessi.",
        image: "/images/soluzioni/tornitura-centri-tornitura.png",
        brands: [
          { name: "Biglia", url: "https://www.bigliaspa.it/" },
          { name: "Emco", url: "https://www.emco-world.com/it/" },
        ],
      },
      {
        name: "Multitasking",
        description: "Tornitura e fresatura integrate in un solo ciclo.",
        image: "/images/soluzioni/tornitura-multitasking.png",
        brands: [{ name: "Emco", url: "https://www.emco-world.com/it/" }],
      },
      {
        name: "Torni a fantina mobile e plurimandrino",
        description: "Tornitura ad alta produttività per grandi volumi.",
        image: "/images/soluzioni/tornitura-fantina-mobile.png",
        brands: [{ name: "Tornos", url: "https://www.tornos.com/it" }],
      },
      {
        name: "Alimentatori di barre",
        description: "Alimentazione automatica delle barre per cicli continui.",
        image: "/images/soluzioni/tornitura-alimentatori-barre.png",
        brands: [{ name: "Top Automazioni", url: "https://www.topautomazioni.com/" }],
      },
    ],
  },
  rettifica: {
    title: "Rettifica",
    subtitle: "Seleziona la tecnologia di rettifica più adatta alle tue esigenze produttive.",
    items: [
      {
        name: "Fenix",
        description: "Rettifica tangenziale di precisione per superfici piane.",
        image: "/images/soluzioni/rettifica-fenix.jpeg",
        brands: [{ name: "Fenix", url: "https://www.fenixgrind.it/" }],
      },
      {
        name: "Mar",
        description: "Rettifica per lavorazioni di alta precisione dimensionale.",
        image: "/images/soluzioni/rettifica-mar.jpeg",
        brands: [{ name: "Mar", url: "https://www.mar.sm/" }],
      },
    ],
  },
  "macchine-da-taglio": {
    title: "Macchine da taglio",
    subtitle: "Seleziona la tecnologia di taglio più adatta ai tuoi materiali e alle tue esigenze produttive.",
    items: [
      {
        name: "Segatrici Bianco",
        description: "Taglio a nastro di barre e profilati metallici.",
        image: "/images/soluzioni/taglio-bianco-segatrice.jpg",
        brands: [{ name: "Bianco", url: "https://www.bianco.bg.it/" }],
      },
      {
        name: "Segatrici a nastro Ficep",
        description: "Taglio a nastro per profilati e strutture in acciaio.",
        image: "/images/soluzioni/taglio-ficep-segatrice.jpg",
        brands: [{ name: "Ficep", url: "https://www.ficepgroup.com/it/" }],
      },
      {
        name: "Segatrici Riboni",
        description: "Taglio a nastro per lavorazioni siderurgiche pesanti.",
        image: "/images/soluzioni/taglio-riboni-segatrice.jpg",
        brands: [{ name: "Riboni", url: "http://ribonisegatrici.it/" }],
      },
    ],
  },
};

// Deriva l'elenco completo e univoco dei partner realmente citati nelle
// pagine Soluzioni (source of truth). Ogni brand riporta le categorie
// (titoli delle macro-aree /soluzioni) in cui compare.
export type DirectoryBrand = { name: string; url: string; categories: string[] };

export function getSolutionBrands(): DirectoryBrand[] {
  const registry = new Map<string, DirectoryBrand>();

  const collect = (category: SolutionCategory, categoryLabel: string) => {
    for (const item of category.items) {
      for (const brand of item.brands ?? []) {
        const existing = registry.get(brand.name);
        if (existing) {
          if (!existing.categories.includes(categoryLabel)) {
            existing.categories.push(categoryLabel);
          }
        } else {
          registry.set(brand.name, {
            name: brand.name,
            url: brand.url,
            categories: [categoryLabel],
          });
        }
      }
    }
  };

  // Rispetta l'ordine reale delle sezioni /soluzioni: itera "areas" nel suo
  // ordine, espandendo "asportazione-truciolo" nelle sue sotto-pagine.
  for (const area of areas) {
    if (area.slug === "asportazione-truciolo") {
      for (const category of Object.values(asportazionePages)) {
        collect(category, area.title);
      }
    } else {
      const category = soluzioniPages[area.slug];
      if (category) collect(category, area.title);
    }
  }

  return Array.from(registry.values());
}
