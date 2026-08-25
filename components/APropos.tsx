"use client";
import AnimatedSection from "./AnimatedSection";

export default function APropos() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-sm font-medium text-blue-400 mb-4 tracking-widest uppercase">À propos</p>
          <h2 className="text-4xl font-bold mb-6 text-white">Enguerrand Bourghelle</h2>
          <p className="text-gray-400 mb-4">
            Je suis développeur web freelance spécialisé dans la création de sites modernes pour les artisans et entreprises locales, partout en France. Chaque projet est pensé sur-mesure, en fonction de votre métier, de vos clients et de vos objectifs.
          </p>
          <p className="text-gray-400 mb-4">
            Contrairement aux agences classiques, je travaille en direct avec vous, du premier échange jusqu&apos;à la mise en ligne. Pas d&apos;intermédiaire, pas de jargon technique inutile — juste un site qui fonctionne et qui vous ressemble.
          </p>
          <p className="text-gray-400 mb-8">
            Mon objectif est simple : vous donner une présence en ligne professionnelle qui génère de vrais clients, sans vous ruiner. Je m&apos;occupe de tout : design, référencement local, hébergement, et je reste disponible après la livraison pour vous accompagner.
          </p>
          <button onClick={scrollToContact} className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
            Me contacter
          </button>
        </AnimatedSection>
        <AnimatedSection>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-10 text-white">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-blue-400 text-2xl font-bold">01</span>
                <p className="text-gray-300">Site livré en 10 jours</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-400 text-2xl font-bold">02</span>
                <p className="text-gray-300">Prix transparent — 1 000€ tout compris</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-400 text-2xl font-bold">03</span>
                <p className="text-gray-300">SEO local inclus — visible sur Google</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-400 text-2xl font-bold">04</span>
                <p className="text-gray-300">Support et maintenance disponible</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}