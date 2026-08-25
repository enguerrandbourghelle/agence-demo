import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Agence WebArtisan — Création de sites web pour artisans",
  description: "Je crée des sites web modernes, rapides et optimisés pour les artisans et entreprises locales, partout en France. Devis gratuit sous 24h.",
  openGraph: {
    title: "Agence WebArtisan — Création de sites web pour artisans",
    description: "Je crée des sites web modernes, rapides et optimisés pour les artisans et entreprises locales, partout en France. Devis gratuit sous 24h.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence WebArtisan — Création de sites web pour artisans",
    description: "Je crée des sites web modernes, rapides et optimisés pour les artisans et entreprises locales, partout en France. Devis gratuit sous 24h.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={font.className}>{children}</body>
    </html>
  );
}