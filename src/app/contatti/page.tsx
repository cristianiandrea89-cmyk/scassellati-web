import PageHero from "@/components/PageHero";

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Contattaci"
        subtitle="Vuoi ricevere informazioni, fissare un appuntamento o inviarci una richiesta tecnica? Siamo a tua disposizione."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-16 md:grid-cols-2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome e cognome"
              className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
            />
            <input
              type="text"
              placeholder="Azienda"
              className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
            />
            <input
              type="tel"
              placeholder="Telefono"
              className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
            />
            <textarea
              placeholder="Messaggio"
              rows={5}
              className="w-full border border-gray/60 rounded-sm px-4 py-3 text-sm"
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:bg-dgray/90 transition-colors"
              >
                Invia richiesta
              </button>
              <button
                type="reset"
                className="border border-gray/60 text-dgray px-6 py-3 rounded-sm hover:border-bronze hover:text-bronze transition-colors"
              >
                Azzera campi
              </button>
            </div>
          </form>

          <div>
            <h3 className="font-heading font-bold uppercase text-lg text-dgray mb-4">
              F. SCASSELLATI S.r.l.
            </h3>
            <p className="text-dgray/70">Via del Casale Ferranti, 85</p>
            <p className="text-dgray/70 mb-4">00173 Roma</p>
            <p className="text-dgray/70">Tel: +39 06 93020906</p>
            <p className="text-dgray/70">Email: segreteria@scassellati.com</p>
            <p className="text-dgray/70 mb-4">PEC: fscassellati@pec.it</p>
            <p className="text-dgray/50 text-sm mb-8">
              Lun–Ven: 9:00–17:00
            </p>
            <div className="rounded-lg overflow-hidden aspect-video border border-gray/60">
              <iframe
                src="https://www.google.com/maps?q=Via%20del%20Casale%20Ferranti%2C%2085%2C%2000173%20Roma&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa: F. Scassellati S.r.l., Via del Casale Ferranti 85, Roma"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
