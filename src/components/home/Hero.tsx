"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-dgray text-offwhite overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, x: 60, scale: 1.05 }}
        animate={{ opacity: 1, x: 0, scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/home/hero-header.jpeg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-dgray/30" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-bronze mb-6"
        >
          Dal 1962
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold uppercase text-4xl md:text-6xl max-w-3xl leading-[1.05]"
        >
          Affianchiamo l&apos;industria
          <br />
          meccanica.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-gray text-base md:text-lg"
        >
          Macchine utensili, automazione, metrologia, software CAD/CAM e
          consulenza tecnica per migliorare produttività, qualità ed
          efficienza.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/soluzioni"
            className="bg-bronze text-dgray font-medium px-6 py-3 rounded-sm hover:bg-bronze/90 transition-colors"
          >
            Scopri le soluzioni
          </Link>
          <Link
            href="/contatti"
            className="border border-gray/40 text-offwhite px-6 py-3 rounded-sm hover:border-bronze hover:text-bronze transition-colors"
          >
            Contattaci
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
