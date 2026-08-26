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
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
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
      className="transition-transform duration-200 ease-out will-change-transform h-full"
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="realisations" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4">{"// mon travail"}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-16 text-white">Mes réalisations</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatedSection className="md:col-span-8">
            <TiltCard>
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 group h-full flex flex-col">
                <div className="relative h-64 md:h-80 border-b border-gray-800 overflow-hidden">
                  <Image
                    src="/adn-constructions.jpg"
                    alt="Site web ADN Constructions"
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-white">ADN Constructions</h3>
                  <p className="text-gray-400">
                    Entreprise du bâtiment dirigée par François Bourghelle, basée à Wambrechies et spécialisée dans les cloisons, plafonds, sanitaires et banques d&apos;accueil pour les professionnels. Le site présente leur savoir-faire, leurs réalisations et permet aux clients de demander un devis en ligne. Fiche Google Business configurée pour améliorer leur visibilité locale, et formulaire de contact connecté directement à leur boîte mail.
                  </p>
                </div>
              </div>
            </TiltCard>
          </AnimatedSection>
          <AnimatedSection className="md:col-span-4">
            <TiltCard>
              <div className="rounded-2xl overflow-hidden border border-dashed border-gray-700 bg-gray-900/30 h-full flex flex-col items-center justify-center text-center p-8">
                <span className="font-mono text-gray-500 text-sm mb-4">{"// prochain projet"}</span>
                <h3 className="font-serif text-2xl font-bold mb-3 text-white">Votre entreprise</h3>
                <p className="text-gray-400 text-sm">Vous souhaitez apparaître ici ? Contactez-moi pour discuter de votre projet.</p>
              </div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}