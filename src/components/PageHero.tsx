import Image from "next/image";
import FloatingBackButton from "@/components/FloatingBackButton";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backHref,
  backLabel,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  backHref?: string;
  backLabel?: string;
  image?: string;
}) {
  return (
    <section className="relative bg-dgray text-offwhite overflow-hidden">
      {image && (
        <>
          <Image src={image} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dgray via-dgray/80 to-dgray/40" />
        </>
      )}
      <div
        className={`relative mx-auto max-w-7xl px-6 ${
          image ? "py-20" : "py-[2.8125rem]"
        }`}
      >
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.2em] text-bronze mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading font-extrabold uppercase text-3xl md:text-5xl max-w-2xl mb-5">
          {title}
        </h1>
        <p className="max-w-xl text-gray text-base md:text-lg">{subtitle}</p>
      </div>
      {backHref && (
        <FloatingBackButton href={backHref} label={backLabel ?? "Indietro"} />
      )}
    </section>
  );
}
