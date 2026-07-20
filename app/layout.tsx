import type { Metadata } from "next";
import { Anton, Archivo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-archivo",
});
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});
export const metadata: Metadata = {
  title: "NEGRONI Aperitivo Bar — Bucharest",
  description:
    "12 aperitivo cocktails on tap, signature twists and Italian snacks. Hop on the Aperitivo Train, daily 18:19–20:19. 5 Matei Millo St, Bucharest.",
  openGraph: {
    title: "NEGRONI Aperitivo Bar — Bucharest",
    description:
      "Wanna drink about it? 12 aperitivo cocktails on tap, daily Aperitivo Train 18:19–20:19.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased ${anton.variable} ${archivo.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-svh bg-cream text-ink">
              <SmoothScroll />
              <Nav />
        {children}
      </body>
    </html>
  );
}
