"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Errors = Partial<Record<"marca" | "modello" | "privacy", string>>;

const inputClass = (hasError: boolean) =>
  `w-full border rounded-sm px-4 py-3 text-sm ${
    hasError ? "border-red-600" : "border-gray/60"
  }`;

export default function UsatoForm() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const marca = (form.elements.namedItem("marca") as HTMLInputElement).value.trim();
    const modello = (
      form.elements.namedItem("modello") as HTMLInputElement
    ).value.trim();
    const privacy = (form.elements.namedItem("privacy") as HTMLInputElement).checked;

    const nextErrors: Errors = {};
    if (!marca) nextErrors.marca = "Inserisci la marca della macchina.";
    if (!modello) nextErrors.modello = "Inserisci il modello della macchina.";
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
        <label htmlFor="marca" className="sr-only">
          Marca
        </label>
        <input
          id="marca"
          name="marca"
          type="text"
          required
          placeholder="Marca"
          aria-invalid={!!errors.marca}
          aria-describedby={errors.marca ? "marca-error" : undefined}
          className={inputClass(!!errors.marca)}
        />
        {errors.marca && (
          <p id="marca-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.marca}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="modello" className="sr-only">
          Modello
        </label>
        <input
          id="modello"
          name="modello"
          type="text"
          required
          placeholder="Modello"
          aria-invalid={!!errors.modello}
          aria-describedby={errors.modello ? "modello-error" : undefined}
          className={inputClass(!!errors.modello)}
        />
        {errors.modello && (
          <p id="modello-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.modello}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="anno" className="sr-only">
          Anno
        </label>
        <input
          id="anno"
          name="anno"
          type="text"
          placeholder="Anno"
          className={inputClass(false)}
        />
      </div>

      <div>
        <label htmlFor="note" className="sr-only">
          Stato e note
        </label>
        <textarea
          id="note"
          name="note"
          placeholder="Stato e note"
          rows={4}
          className={inputClass(false)}
        />
      </div>

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

      <button
        type="submit"
        className="bg-dgray text-offwhite px-6 py-3 rounded-sm hover:bg-dgray/90 transition-colors"
      >
        Invia il modulo
      </button>
    </form>
  );
}
