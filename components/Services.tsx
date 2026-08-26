"use client";
import { useRef } from "react";
import { Globe, Search, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4 text-center">{"// ce que je propose"}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-white">Mes services</h2>
          <p className="text-center text-gray-400 mb-16">Tout ce dont vous avez besoin pour être visible en ligne.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection>
            <TiltCard>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-amber-500/50 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all duration-300">
                  <Globe className="text-amber-500 w-6 h-6 group-hover:text-black transition-all duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-white">Site vitrine</h3>
                <p className="text-gray-400">
                  Un site moderne et professionnel pour présenter votre activité et attirer des clients. Design sur-mesure adapté à votre métier, optimisé mobile, avec page d&apos;accueil, présentation de vos services, réalisations et formulaire de contact intégré. Livré clé en main en 10 jours.
                </p>
              </div>
            </TiltCard>
          </AnimatedSection>
          <AnimatedSection>
            <TiltCard>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-amber-500/50 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all duration-300">
                  <Search className="text-amber-500 w-6 h-6 group-hover:text-black transition-all duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-white">Référencement SEO</h3>
                <p className="text-gray-400">
                  Apparaissez en premier sur Google quand vos clients vous cherchent localement. Optimisation technique du site, mots-clés ciblés sur votre zone géographique, configuration de votre fiche Google Business pour apparaître sur Google Maps et dans les recherches locales.
                </p>
              </div>
            </TiltCard>
          </AnimatedSection>
          <AnimatedSection>
            <TiltCard>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-amber-500/50 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all duration-300">
                  <Wrench className="text-amber-500 w-6 h-6 group-hover:text-black transition-all duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-white">Maintenance</h3>
                <p className="text-gray-400">
                  Je gère votre site chaque mois — mises à jour, modifications de contenu, surveillance de la sécurité et de la performance. Vous m&apos;envoyez vos demandes, je m&apos;occupe du reste. Support réactif inclus, sans que vous ayez à toucher au code.
                </p>
              </div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}