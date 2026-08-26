"use client";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

export default function APropos() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <AnimatedSection className="md:col-span-7">
          <p className="font-mono text-sm text-amber-500 mb-4">{"// à propos"}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-white">Enguerrand Bourghelle</h2>
          <p className="text-gray-400 mb-4 text-lg">
            Je suis développeur web freelance spécialisé dans la création de sites modernes pour les artisans et entreprises locales, partout en France. Chaque projet est pensé sur-mesure, en fonction de votre métier, de vos clients et de vos objectifs.
          </p>
          <p className="text-gray-400 mb-4 text-lg">
            Contrairement aux agences classiques, je travaille en direct avec vous, du premier échange jusqu&apos;à la mise en ligne. Pas d&apos;intermédiaire, pas de jargon technique inutile — juste un site qui fonctionne et qui vous ressemble.
          </p>
          <p className="text-gray-400 mb-8 text-lg">
            Mon objectif est simple : vous donner une présence en ligne professionnelle qui génère de vrais clients, sans vous ruiner.
          </p>
          <MagneticButton onClick={scrollToContact} className="bg-amber-500 text-black px-6 py-3 rounded-xl font-medium hover:bg-amber-400">
            Me contacter
          </MagneticButton>
        </AnimatedSection>
        <AnimatedSection className="md:col-span-5 md:mt-24">
          <div className="flex flex-col gap-0">
            {[
              { n: "01", t: "Site livré en 10 jours" },
              { n: "02", t: "Tarif transparent — devis gratuit sous 24h" },
              { n: "03", t: "SEO local inclus — visible sur Google" },
              { n: "04", t: "Support et maintenance disponible" },
            ].map((item, i) => (
              <div key={i} className="flex items-baseline gap-6 py-6 border-t border-gray-800 last:border-b">
                <span className="font-mono text-amber-500/60 text-sm">{item.n}</span>
                <p className="font-serif text-lg text-white">{item.t}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}