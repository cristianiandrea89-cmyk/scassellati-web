"use client";

import { REOPEN_EVENT } from "./CookieConsent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(REOPEN_EVENT))}
      className="text-gray/65 hover:text-bronze underline transition-colors"
    >
      Gestisci cookie
    </button>
  );
}
