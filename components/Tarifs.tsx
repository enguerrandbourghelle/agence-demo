"use client";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

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
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
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

export default function Tarifs() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tarifs" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4">{"// tarifs"}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">Des offres adaptées à votre projet</h2>
          <p className="text-gray-400 mb-16 text-lg">Contactez-moi pour un devis personnalisé et gratuit.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatedSection className="md:col-span-7">
            <TiltCard>
              <div className="group bg-gray-900/50 rounded-2xl p-10 md:p-12 border border-gray-800 hover:border-amber-500/40 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.25)] transition-all duration-300 h-full">
                <span className="font-mono text-amber-500/60 text-sm">01</span>
                <h3 className="font-serif text-3xl font-bold mt-4 mb-2 text-white">Création de site</h3>
                <p className="text-gray-400 mb-8">Site vitrine complet livré en 10 jours.</p>
                <p className="font-serif text-5xl font-bold mb-8 text-white">Sur devis</p>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm mb-8">
                  <li>✅ Design moderne et responsive</li>
                  <li>✅ SEO local inclus</li>
                  <li>✅ Formulaire de contact</li>
                  <li>✅ Google Business configuré</li>
                  <li>✅ Nom de domaine + hébergement 1 an</li>
                  <li>✅ Formation incluse</li>
                </ul>
                <MagneticButton onClick={scrollToContact} className="w-full bg-amber-500 text-black py-3 rounded-xl font-medium hover:bg-amber-400">
                  Demander un devis
                </MagneticButton>
              </div>
            </TiltCard>
          </AnimatedSection>
          <AnimatedSection className="md:col-span-5 md:mt-10">
            <TiltCard>
              <div className="group bg-gray-900/50 rounded-2xl p-10 border border-gray-800 hover:border-amber-500/40 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.25)] transition-all duration-300 h-full">
                <span className="font-mono text-amber-500/60 text-sm">02</span>
                <h3 className="font-serif text-2xl font-bold mt-4 mb-2 text-white">Maintenance mensuelle</h3>
                <p className="text-gray-400 mb-8">Je gère tout, vous vous concentrez sur votre métier.</p>
                <p className="font-serif text-4xl font-bold mb-8 text-white">Sur devis</p>
                <ul className="flex flex-col gap-3 text-gray-400 text-sm mb-8">
                  <li>✅ 5 modifications par mois</li>
                  <li>✅ Surveillance du site</li>
                  <li>✅ Gestion fiche Google</li>
                  <li>✅ Rapport mensuel</li>
                  <li>✅ Support prioritaire</li>
                  <li>✅ Sans engagement</li>
                </ul>
                <MagneticButton onClick={scrollToContact} className="w-full bg-amber-500 text-black py-3 rounded-xl font-medium hover:bg-amber-400">
                  Demander un devis
                </MagneticButton>
              </div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}