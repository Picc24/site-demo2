export const metadata = {
  title: "Vintage Chupiteria — Stradella",
  description:
    "Chupiteria, cocktail bar, ristorante e nightlife nel cuore di Stradella (PV).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
