import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="antialiased">
      <body className="min-h-svh bg-cream text-ink">
        {/* Google Fonts — React hoists these to <head>. Swap to next/font/google
            for self-hosting when deploying, if preferred. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:ital,wght@0,300..900;1,300..900&family=Instrument+Serif:ital@0;1&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
