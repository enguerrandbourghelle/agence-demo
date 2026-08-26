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
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
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

const services = [
  {
    icon: Globe,
    title: "Site vitrine",
    desc: "Un site moderne et professionnel pour présenter votre activité et attirer des clients. Design sur-mesure adapté à votre métier, optimisé mobile, avec page d'accueil, présentation de vos services, réalisations et formulaire de contact intégré. Livré clé en main en 10 jours.",
  },
  {
    icon: Search,
    title: "Référencement SEO",
    desc: "Apparaissez en premier sur Google quand vos clients vous cherchent localement. Optimisation technique du site, mots-clés ciblés sur votre zone géographique, configuration de votre fiche Google Business pour apparaître sur Google Maps et dans les recherches locales.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Je gère votre site chaque mois — mises à jour, modifications de contenu, surveillance de la sécurité et de la performance. Vous m'envoyez vos demandes, je m'occupe du reste. Support réactif inclus, sans que vous ayez à toucher au code.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
            <div>
              <p className="font-mono text-sm text-amber-500 mb-4">{"// ce que je propose"}</p>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">Mes services</h2>
            </div>
            <p className="text-gray-400 max-w-xs md:text-right">Tout ce dont vous avez besoin pour être visible en ligne.</p>
          </div>
        </AnimatedSection>
        <div className="flex flex-col">
          {services.map((s, i) => (
            <AnimatedSection key={i}>
              <TiltCard>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start py-10 border-t border-gray-800 ${i === services.length - 1 ? "border-b" : ""}`}>
                  <span className="font-mono text-amber-500/50 text-sm md:col-span-1">0{i + 1}</span>
                  <div className="md:col-span-3 flex items-center gap-4">
                    <s.icon className="text-amber-500 w-8 h-8" />
                    <h3 className="font-serif text-2xl font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-gray-400 md:col-span-8">{s.desc}</p>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}