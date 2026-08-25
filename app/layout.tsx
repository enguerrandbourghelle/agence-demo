import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agence WebArtisan — Création de sites web pour artisans",
  description: "Je crée des sites web modernes, rapides et optimisés pour les artisans et entreprises locales des Hauts-de-France. Devis gratuit sous 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}