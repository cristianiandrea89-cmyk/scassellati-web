import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = localFont({
  variable: "--font-body",
  src: [
    { path: "../fonts/archivo/Archivo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/archivo/Archivo-Medium.ttf", weight: "500", style: "normal" },
  ],
});

const archivoHeading = localFont({
  variable: "--font-heading",
  src: [
    { path: "../fonts/archivo/Archivo_Condensed-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/archivo/Archivo_Condensed-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/archivo/Archivo_Condensed-Black.ttf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "F. Scassellati Srl — Dal 1962 affianchiamo l'industria meccanica",
  description:
    "Macchine utensili, utensili, software, automazione e trattamenti superficiali. Partner tecnico dell'industria manifatturiera italiana dal 1962.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${archivo.variable} ${archivoHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dgray">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
