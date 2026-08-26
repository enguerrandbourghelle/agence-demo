"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "Combien coûte un site web ?",
      r: "Le tarif dépend de votre projet et de vos besoins spécifiques. Je vous propose un devis gratuit et personnalisé sous 24h, sans engagement — domaine, hébergement 1 an, design sur-mesure, SEO local et formation à l'utilisation de votre site sont inclus dans chaque offre.",
    },
    {
      q: "En combien de temps est livré le site ?",
      r: "10 jours ouvrés après validation du devis et réception de vos contenus (textes, photos, logo). Ce délai peut varier légèrement selon la complexité du projet, mais je vous tiens informé à chaque étape.",
    },
    {
      q: "Est-ce que mon site sera visible sur Google ?",
      r: "Oui, le SEO local est inclus dans chaque création de site : optimisation des balises, mots-clés ciblés sur votre zone géographique et configuration de votre fiche Google Business. Le référencement prend généralement quelques semaines pour se mettre en place après la mise en ligne.",
    },
    {
      q: "Que comprend la maintenance mensuelle ?",
      r: "Des modifications de contenu régulières (textes, photos, tarifs), surveillance technique du site, gestion de votre fiche Google Business, et un rapport mensuel sur les visites et la performance. Vous n'avez rien à gérer techniquement. Le tarif est adapté à vos besoins.",
    },
    {
      q: "Est-ce que je peux arrêter la maintenance ?",
      r: "Oui, sans engagement. Vous pouvez arrêter à tout moment, sans préavis ni pénalité. Le site reste fonctionnel, seule la partie mises à jour et suivi s'arrête.",
    },
    {
      q: "Que dois-je fournir pour lancer mon projet ?",
      r: "Vos textes de présentation (ou je peux vous aider à les rédiger), quelques photos de votre activité, votre logo s'il existe, et vos coordonnées de contact. Si vous n'avez pas tout ça, on en discute ensemble au premier échange.",
    },
    {
      q: "Le site fonctionnera-t-il sur mobile ?",
      r: "Oui, tous les sites que je crée sont responsive, c'est-à-dire qu'ils s'adaptent automatiquement à tous les écrans : ordinateur, tablette et smartphone.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4 text-center">{"// questions"}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-white">Questions fréquentes</h2>
        </AnimatedSection>
        <div className="flex flex-col gap-4">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span className="font-serif font-bold text-white text-lg">{item.q}</span>
                    <ChevronDown
                      className={`text-amber-500 w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-400 px-8 pb-8">{item.r}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}