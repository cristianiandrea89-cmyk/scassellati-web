import PageHero from "@/components/PageHero";

export default function UsatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Usato"
        title="Usato garantito e valutazione"
        subtitle="Se stai rinnovando il tuo parco macchine, possiamo aiutarti a valutare, ritirare o permutare la tua attrezzatura usata. Offriamo inoltre una selezione di macchine usate garantite, testate dai nostri tecnici."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-heading font-extrabold uppercase text-2xl text-dgray mb-4">
              Richiedi la valutazione del tuo usato
            </h2>
            <p className="text-dgray/70 mb-8">
              Vuoi vendere o permutare una macchina utensile? Inviaci le
              informazioni e ti ricontatteremo per una valutazione tecnica e
              commerciale.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Marca"
                className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
              />
              <input
                type="text"
                placeholder="Modello"
                className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
              />
              <input
                type="text"
                placeholder="Anno"
                className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
              />
              <textarea
                placeholder="Stato e note"
                rows={4}
                className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
              />
              <label className="block">
                <span className="block text-sm text-dgray/70 mb-2">
                  Foto della macchina (opzionale)
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm file:mr-4 file:rounded-sm file:border-0 file:bg-dgray file:px-4 file:py-2 file:text-sm file:text-offwhite file:cursor-pointer"
                />
              </label>
              <button
                type="submit"
                className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:bg-dgray/90 transition-colors"
              >
                Invia il modulo
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-heading font-extrabold uppercase text-2xl text-dgray mb-4">
              Macchine disponibili in pronta consegna
            </h2>
            <p className="text-dgray/70 mb-8">
              Gli annunci saranno collegati automaticamente al nostro
              portale dedicato all&apos;usato, ventunoservice.it — questa
              sezione mostrerà a breve le macchine disponibili.
            </p>
            <div className="bg-offwhite border border-dashed border-gray/60 rounded-lg p-10 text-center text-dgray/50 text-sm">
              Elenco macchine usate in arrivo
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
