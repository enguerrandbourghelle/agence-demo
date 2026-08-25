import { Globe, Search, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Mes services</h2>
          <p className="text-center text-gray-400 mb-16">Tout ce dont vous avez besoin pour être visible en ligne.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all duration-300">
                <Globe className="text-blue-400 w-6 h-6 group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Site vitrine</h3>
              <p className="text-gray-400">
                Un site moderne et professionnel pour présenter votre activité et attirer des clients. Design sur-mesure adapté à votre métier, optimisé mobile, avec page d&apos;accueil, présentation de vos services, réalisations et formulaire de contact intégré. Livré clé en main en 10 jours.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all duration-300">
                <Search className="text-blue-400 w-6 h-6 group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Référencement SEO</h3>
              <p className="text-gray-400">
                Apparaissez en premier sur Google quand vos clients vous cherchent localement. Optimisation technique du site, mots-clés ciblés sur votre zone géographique, configuration de votre fiche Google Business pour apparaître sur Google Maps et dans les recherches locales.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all duration-300">
                <Wrench className="text-blue-400 w-6 h-6 group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Maintenance</h3>
              <p className="text-gray-400">
                Je gère votre site chaque mois — mises à jour, modifications de contenu, surveillance de la sécurité et de la performance. Vous m&apos;envoyez vos demandes, je m&apos;occupe du reste. Support réactif inclus, sans que vous ayez à toucher au code.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}