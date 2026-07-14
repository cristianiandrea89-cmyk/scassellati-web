"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "scassellati-cookie-consent";
export const REOPEN_EVENT = "cookie-consent:reopen";

type Consent = {
  necessary: true;
  analytics: boolean;
  timestamp: string;
};

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean) {
  const consent: Consent = {
    necessary: true,
    analytics,
    timestamp: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("cookie-consent:updated", { detail: consent }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setAnalyticsChecked(existing.analytics);
    }

    const reopen = () => {
      const current = readConsent();
      setAnalyticsChecked(current?.analytics ?? false);
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  if (!visible) return null;

  function acceptAll() {
    writeConsent(true);
    setVisible(false);
  }

  function rejectNonEssential() {
    writeConsent(false);
    setVisible(false);
  }

  function saveChoices() {
    writeConsent(analyticsChecked);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-dgray text-offwhite"
    >
      <div className="mx-auto max-w-7xl px-6 py-6">
        <h2 id="cookie-consent-title" className="sr-only">
          Preferenze cookie
        </h2>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray/90 max-w-2xl">
            Usiamo cookie tecnici necessari al funzionamento del sito e,
            solo con il tuo consenso, cookie statistici per capire come
            viene usato. Puoi accettare tutti i cookie, rifiutare quelli
            non necessari, oppure scegliere.{" "}
            <Link
              href="/privacy"
              className="underline hover:text-bronze transition-colors"
            >
              Maggiori informazioni
            </Link>
            .
          </p>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              aria-expanded={showDetails}
              aria-controls="cookie-consent-details"
              className="border border-gray/40 text-offwhite px-4 py-2.5 rounded-sm text-sm hover:border-bronze hover:text-bronze transition-colors"
            >
              Personalizza
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className="border border-gray/40 text-offwhite px-4 py-2.5 rounded-sm text-sm hover:border-bronze hover:text-bronze transition-colors"
            >
              Rifiuta non necessari
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="bg-bronze text-dgray font-medium px-4 py-2.5 rounded-sm text-sm hover:bg-bronze/90 transition-colors"
            >
              Accetta tutti
            </button>
          </div>
        </div>

        {showDetails && (
          <div
            id="cookie-consent-details"
            className="mt-5 border-t border-white/10 pt-5 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-offwhite">
                  Cookie necessari
                </p>
                <p className="text-sm text-gray/80">
                  Indispensabili per il funzionamento del sito. Sempre attivi.
                </p>
              </div>
              <input
                type="checkbox"
                checked
                disabled
                aria-label="Cookie necessari, sempre attivi"
                className="mt-1 h-4 w-4 shrink-0 accent-bronze opacity-60"
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <label
                  htmlFor="cookie-analytics"
                  className="text-sm font-medium text-offwhite"
                >
                  Cookie statistici
                </label>
                <p className="text-sm text-gray/80">
                  Ci aiutano a capire come i visitatori usano il sito, in
                  forma aggregata e anonima.
                </p>
              </div>
              <input
                id="cookie-analytics"
                type="checkbox"
                checked={analyticsChecked}
                onChange={(e) => setAnalyticsChecked(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-bronze"
              />
            </div>

            <button
              type="button"
              onClick={saveChoices}
              className="bg-bronze text-dgray font-medium px-4 py-2.5 rounded-sm text-sm hover:bg-bronze/90 transition-colors"
            >
              Salva preferenze
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics ?? false;
}
