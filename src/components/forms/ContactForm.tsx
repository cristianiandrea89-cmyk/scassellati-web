"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Errors = Partial<
  Record<"nome" | "email" | "messaggio" | "privacy", string>
>;

const inputClass = (hasError: boolean) =>
  `w-full border rounded-sm px-4 py-3 text-sm ${
    hasError ? "border-red-600" : "border-gray/60"
  }`;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const messaggio = (
      form.elements.namedItem("messaggio") as HTMLTextAreaElement
    ).value.trim();
    const privacy = (form.elements.namedItem("privacy") as HTMLInputElement).checked;

    const nextErrors: Errors = {};
    if (!nome) nextErrors.nome = "Inserisci il tuo nome e cognome.";
    if (!email) {
      nextErrors.email = "Inserisci un indirizzo email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "L'indirizzo email non è valido.";
    }
    if (!messaggio) nextErrors.messaggio = "Scrivi il messaggio da inviarci.";
    if (!privacy)
      nextErrors.privacy = "Devi accettare la Privacy Policy per continuare.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
      const firstErrorField = form.elements.namedItem(
        Object.keys(nextErrors)[0]
      ) as HTMLElement | null;
      firstErrorField?.focus();
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="nome" className="sr-only">
          Nome e cognome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Nome e cognome"
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? "nome-error" : undefined}
          className={inputClass(!!errors.nome)}
        />
        {errors.nome && (
          <p id="nome-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.nome}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="azienda" className="sr-only">
          Azienda
        </label>
        <input
          id="azienda"
          name="azienda"
          type="text"
          placeholder="Azienda"
          className={inputClass(false)}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefono" className="sr-only">
          Telefono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="Telefono"
          className={inputClass(false)}
        />
      </div>

      <div>
        <label htmlFor="messaggio" className="sr-only">
          Messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          required
          placeholder="Messaggio"
          rows={5}
          aria-invalid={!!errors.messaggio}
          aria-describedby={errors.messaggio ? "messaggio-error" : undefined}
          className={inputClass(!!errors.messaggio)}
        />
        {errors.messaggio && (
          <p id="messaggio-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.messaggio}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-2.5">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            aria-invalid={!!errors.privacy}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-bronze"
          />
          <label htmlFor="privacy" className="text-sm text-dgray/70">
            Ho letto e accetto la{" "}
            <Link
              href="/privacy"
              target="_blank"
              className="text-dgray underline hover:text-bronze transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {errors.privacy && (
          <p id="privacy-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.privacy}
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:bg-dgray/90 transition-colors"
        >
          Invia richiesta
        </button>
        <button
          type="reset"
          onClick={() => setErrors({})}
          className="border border-gray/60 text-dgray px-6 py-3 rounded-sm hover:border-bronze hover:text-bronze transition-colors"
        >
          Azzera campi
        </button>
      </div>
    </form>
  );
}
