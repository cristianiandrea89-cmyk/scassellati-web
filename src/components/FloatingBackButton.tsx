"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingBackButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href={href}
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-bronze text-dgray font-medium text-sm px-4 py-3 rounded-sm shadow-lg hover:bg-bronze/90 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}
