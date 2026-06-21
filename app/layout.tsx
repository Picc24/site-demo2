import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notte — Milano, Navigli",
  description:
    "Cocktail d'autore, musica selezionata e un'atmosfera che non trovi altrove.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
