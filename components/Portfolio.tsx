"use client";
import { useRef } from "react";
import Image from "next/image";
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
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
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

export default function Portfolio() {
  return (
    <section id="realisations" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4 text-center">{"// mon travail"}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-white">Mes réalisations</h2>
          <p className="text-center text-gray-400 mb-16">Des sites créés pour de vrais clients.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <TiltCard>
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50">
                <div className="relative h-48 border-b border-gray-800">
                  <Image
                    src="/adn-constructions.jpg"
                    alt="Site web ADN Constructions"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-white">ADN Constructions</h3>
                  <p className="text-gray-400">
                    Entreprise du bâtiment dirigée par François Bourghelle, basée à Wambrechies et spécialisée dans les cloisons, plafonds, sanitaires et banques d&apos;accueil pour les professionnels. Le site présente leur savoir-faire, leurs réalisations et permet aux clients de demander un devis en ligne. Fiche Google Business configurée pour améliorer leur visibilité locale, et formulaire de contact connecté directement à leur boîte mail.
                  </p>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
          <AnimatedSection>
            <TiltCard>
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50">
                <div className="bg-gray-800/50 h-48 flex items-center justify-center border-b border-gray-800">
                  <span className="font-mono text-gray-500 text-lg">Votre projet ici</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-white">Votre entreprise</h3>
                  <p className="text-gray-400">Vous souhaitez apparaître ici ? Contactez-moi pour discuter de votre projet et voir comment un site sur-mesure peut vous aider à attirer plus de clients.</p>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}