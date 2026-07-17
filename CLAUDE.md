# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# Istruzioni di progetto — Scassellati Website

## Comandi

- `npm run dev` — avvia il dev server (Turbopack) su `localhost:3000`
- `npm run build` — build di produzione
- `npm run start` — avvia il build di produzione
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

Nessun test runner configurato nel progetto.

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
- `/aziende` — 31 brand rappresentati (card con descrizione), lista
  derivata automaticamente da `getSolutionBrands()` (vedi sotto)
- `/servizi` — 3 card (Consulenza tecnica, Formazione, Assistenza)
- `/formazione` — landing dedicata (raggiunta da /servizi e homepage),
  include sezione HxGN Machine Trainer (Hexagon)
- `/usato` — form valutazione (invia email via API route) + link al
  portale esterno ventunoservice.it per le macchine disponibili
- `/contatti` — form di contatto (invia email via API route)
- `/privacy` — testo Privacy Policy/GDPR
- `/chi-siamo`, `/lavora-con-noi`

Nota: "Utensili" non è una voce di primo livello — è solo una
sotto-categoria dentro `/soluzioni`.

### Dati soluzioni/brand (`src/data/soluzioni.ts`)

Fonte di verità unica per aree, categorie e brand:
- `areas` — le 9 macro-aree mostrate su `/soluzioni` (slug, titolo, immagine)
- `soluzioniPages` / `asportazionePages` — `Record<slug, SolutionCategory>`
  con gli `items` (prodotto/servizio + brand associati) per ciascuna
  categoria; `asportazionePages` copre le 4 sotto-pagine di
  asportazione-truciolo
- `getSolutionBrands()` — deriva l'elenco univoco di brand (con
  categorie di appartenenza) da tutti gli `items` sopra; è la fonte
  dati di `/aziende`. Aggiungere un brand a una pagina soluzioni lo fa
  comparire automaticamente anche in `/aziende`, non serve toccare
  quella pagina a mano.

## Convenzioni

**Stack**: Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind
CSS v4 · Framer Motion (animazioni) · lucide-react (icone) · Resend
(invio email dai form).

**Font**: Archivo locale (non Google Fonts), file in
`src/fonts/archivo/`, caricato via `next/font/local` in
`src/app/layout.tsx`. Body = Regular/Medium, titoli = Condensed
Bold/ExtraBold/Black. Variabili CSS: `--font-body`, `--font-heading`.

**Colori** (token Tailwind in `globals.css` `@theme`): `bronze`
#CE9041, `dgray` #2D2926, `gray` #CFCECF, `offwhite` #F6F6F6.

**Asset**:
- `public/logo/` — logo/simbolo brand Scassellati (varianti white/black/gold;
  `scassellati-lockup-white.svg` ha il `viewBox` ritagliato sul bordo
  reale del disegno per allinearsi pixel-perfect col testo accanto —
  non reintrodurre padding interno)
- `public/logo/partner/` — loghi aziende rappresentate (marquee homepage
  in `PartnerLogos.tsx` e griglia in `AziendeClient.tsx`, ciascuno con
  la propria mappa `scale` per compensare loghi con proporzioni diverse)
- `public/images/{home,soluzioni,servizi,formazione}/` — foto per sezione

**Componenti condivisi** (`src/components/`): `Navbar` (trasparente in
cima, scuro dopo 20px di scroll; logo con crossfade bianco→bronze
all'hover), `Footer`, `PageHero` (accetta `backHref`/`backLabel`
opzionali per il pulsante "torna indietro" nelle pagine di dettaglio),
`CookieConsent` (banner cookie montato in `layout.tsx`, riapribile da
`CookiePreferencesButton` nel footer tramite un evento DOM custom
`cookie-consent:reopen`). Sezioni homepage in `src/components/home/`.

**Pattern client component per interattività su pagine server**: le
pagine restano Server Component (per `metadata`/SEO); la parte
interattiva viene estratta in un componente `"use client"` dedicato,
es. `AziendeClient.tsx` per `/aziende`, `ContactForm.tsx`/`UsatoForm.tsx`
(in `src/components/forms/`) per i form.

**Pattern pagine di dettaglio dinamiche**: oggetto `Record<string, {...}>`
con i dati + `generateStaticParams()` + `notFound()` per slug non validi
(vedi `src/app/soluzioni/[slug]/page.tsx` come riferimento).

**Marquee loghi partner**: animazione CSS infinita definita come
`--animate-marquee` dentro `@theme` in `globals.css` (Tailwind v4
richiede che le utility `animate-*` custom siano registrate nel tema,
non una classe `.animate-marquee` semplice — non funziona altrimenti).

**Form e invio email**: `ContactForm`/`UsatoForm` validano lato client
(required, formato email/telefono, checkbox privacy obbligatoria) poi
fanno `fetch` a `src/app/api/{contatti,usato}/route.ts`, che rivalida
lato server e invia l'email a `segreteria@scassellati.com` via Resend.
Richiede la variabile d'ambiente `RESEND_API_KEY` (non versionata);
senza, le route rispondono con un errore gestito invece di fallire
silenziosamente. Il form Usato invia anche gli allegati foto (max 5,
8MB ciascuno) come attachment dell'email.
