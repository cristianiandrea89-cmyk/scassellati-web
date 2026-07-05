import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dgray text-gray">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-20 md:pb-16 grid gap-10 md:gap-16 md:grid-cols-[1.2fr_1fr_1fr] text-left">
        <div>
          <Image
            src="/logo/scassellati-lockup-white.svg"
            alt="Scassellati"
            width={189}
            height={20}
            className="h-6 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-gray/80 max-w-xs">
            Dal 1962 affianchiamo l&apos;industria meccanica.
          </p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="text-offwhite text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Contatti
          </p>
          <p className="text-gray/80">F. SCASSELLATI S.r.l.</p>
          <p className="text-gray/80">Via del Casale Ferranti, 85 — 00173 Roma</p>
          <p className="mt-3 text-gray/80">Tel: +39 06 93020906</p>
          <p className="text-gray/80">Email: segreteria@scassellati.com</p>
          <p className="text-gray/80">PEC: fscassellati@pec.it</p>
          <p className="mt-3 text-gray/55">Lun–Ven: 9:00–17:00</p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="text-offwhite text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Link rapidi
          </p>
          <ul className="space-y-2.5">
            <li>
              <Link
                href="/usato"
                className="text-gray/80 hover:text-bronze transition-colors duration-200"
              >
                Richiedi valutazione usato
              </Link>
            </li>
            <li>
              <Link
                href="/lavora-con-noi"
                className="text-gray/80 hover:text-bronze transition-colors duration-200"
              >
                Lavora con noi
              </Link>
            </li>
            <li>
              <Link
                href="/contatti"
                className="text-gray/80 hover:text-bronze transition-colors duration-200"
              >
                Contattaci
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-gray/50">
          © {new Date().getFullYear()} F. Scassellati S.r.l. — Tutti i diritti
          riservati
        </div>
      </div>
    </footer>
  );
}
