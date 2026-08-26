"use client";
import AnimatedSection from "./AnimatedSection";

export default function Tarifs() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tarifs" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4 text-center">{"// tarifs"}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-white">Des offres adaptées à votre projet</h2>
          <p className="text-center text-gray-400 mb-16">Contactez-moi pour un devis personnalisé et gratuit.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-gray-900/50 rounded-2xl p-10 border border-gray-800">
              <h3 className="font-serif text-xl font-bold mb-2 text-white">Création de site</h3>
              <p className="text-gray-400 mb-8">Site vitrine complet livré en 10 jours.</p>
              <p className="font-serif text-4xl font-bold mb-8 text-white">Sur devis</p>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm mb-8">
                <li>✅ Design moderne et responsive</li>
                <li>✅ SEO local inclus</li>
                <li>✅ Formulaire de contact</li>
                <li>✅ Google Business configuré</li>
                <li>✅ Nom de domaine + hébergement 1 an</li>
                <li>✅ Formation incluse</li>
              </ul>
              <button onClick={scrollToContact} className="w-full bg-amber-500 text-black py-3 rounded-xl font-medium hover:bg-amber-400 transition">
                Demander un devis
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-900/50 rounded-2xl p-10 border border-gray-800">
              <h3 className="font-serif text-xl font-bold mb-2 text-white">Maintenance mensuelle</h3>
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
              <button onClick={scrollToContact} className="w-full bg-amber-500 text-black py-3 rounded-xl font-medium hover:bg-amber-400 transition">
                Demander un devis
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}