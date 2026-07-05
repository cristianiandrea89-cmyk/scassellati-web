@AGENTS.md

# Istruzioni di progetto — Scassellati Website

## Modalità di lavoro (per risparmiare token)
- Non rileggere file interi se non necessario: usa grep/ricerca mirata
  per trovare solo le righe rilevanti prima di aprire un file.
- Quando modifichi codice, usa diff/patch mirate (edit puntuali),
  non riscrivere file interi se la modifica è piccola.
- Non stampare l'intero contenuto di file lunghi nella chat/output
  a meno che non sia esplicitamente richiesto: limitati a confermare
  cosa hai cambiato e dove (file + numero riga).
- Prima di eseguire comandi di build/test pesanti, chiedi conferma
  se non è chiaro che siano necessari.
- Evita di rigenerare componenti o pagine già esistenti da zero:
  parti sempre dal codice esistente e modifica solo le parti richieste.
- Risposte concise: niente riepiloghi lunghi di cosa hai fatto,
  solo un elenco puntato breve delle modifiche.
- Se un task è ambiguo, fai una sola domanda mirata invece di
  esplorare tutto il codebase per dedurre il contesto.

## Struttura del progetto

Homepage (`src/app/page.tsx`): Hero, ServiceBoxes, PreLogosBanner,
PartnerLogos (marquee), SolutionsGrid, FinalCta.

- `/soluzioni` — indice con 9 card (immagine + descrizione)
  - `/soluzioni/asportazione-truciolo` — pagina categoria (4 card)
    - `/soluzioni/asportazione-truciolo/[fresatura|tornitura|rettifica|macchine-da-taglio]`
  - `/soluzioni/[utensili|metrologia|software|presse-meccaniche|lamiera|automazione|lavorazione-plastica|finitura-trattamenti]`
- `/aziende` — 13 brand rappresentati (card con descrizione)
- `/servizi` — 3 card (Consulenza tecnica, Formazione, Assistenza)
- `/formazione` — landing dedicata (raggiunta da /servizi e homepage),
  include sezione HxGN Machine Trainer (Hexagon)
- `/usato` — form valutazione + macchine disponibili (da collegare a
  ventunoservice.it via WooCommerce API, non ancora fatto)
- `/chi-siamo`, `/contatti`, `/lavora-con-noi`

Nota: "Utensili" non è una voce di primo livello — è solo una
sotto-categoria dentro `/soluzioni`.

## Convenzioni

**Stack**: Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind
CSS v4 · Framer Motion (animazioni) · lucide-react (icone).

**Font**: Archivo locale (non Google Fonts), file in
`src/fonts/archivo/`, caricato via `next/font/local` in
`src/app/layout.tsx`. Body = Regular/Medium, titoli = Condensed
Bold/ExtraBold/Black. Variabili CSS: `--font-body`, `--font-heading`.

**Colori** (token Tailwind in `globals.css` `@theme`): `bronze`
#CE9041, `dgray` #2D2926, `gray` #CFCECF, `offwhite` #F6F6F6.

**Asset**:
- `public/logo/` — logo/simbolo brand Scassellati
- `public/logo/partner/` — loghi aziende rappresentate (marquee homepage)
- `public/images/{home,soluzioni,servizi,formazione}/` — foto per sezione

**Componenti condivisi** (`src/components/`): `Navbar` (trasparente in
cima, scuro dopo 20px di scroll), `Footer`, `PageHero` (accetta
`backHref`/`backLabel` opzionali per il pulsante "torna indietro" nelle
pagine di dettaglio). Sezioni homepage in `src/components/home/`.

**Pattern pagine di dettaglio dinamiche**: oggetto `Record<string, {...}>`
con i dati + `generateStaticParams()` + `notFound()` per slug non validi
(vedi `src/app/soluzioni/[slug]/page.tsx` come riferimento).

**Marquee loghi partner**: animazione CSS infinita definita come
`--animate-marquee` dentro `@theme` in `globals.css` (Tailwind v4
richiede che le utility `animate-*` custom siano registrate nel tema,
non una classe `.animate-marquee` semplice — non funziona altrimenti).
