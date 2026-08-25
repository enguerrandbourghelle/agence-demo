import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function Portfolio() {
  return (
    <section id="realisations" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Mes réalisations</h2>
          <p className="text-center text-gray-400 mb-16">Des sites créés pour de vrais clients.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
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
                <h3 className="text-xl font-bold mb-2 text-white">ADN Constructions</h3>
                <p className="text-gray-400">
                  Entreprise du bâtiment dirigée par François Bourghelle, basée à Wambrechies et spécialisée dans les cloisons, plafonds, sanitaires et banques d&apos;accueil pour les professionnels. Le site présente leur savoir-faire, leurs réalisations et permet aux clients de demander un devis en ligne. Fiche Google Business configurée pour améliorer leur visibilité locale, et formulaire de contact connecté directement à leur boîte mail.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50">
              <div className="bg-gray-800/50 h-48 flex items-center justify-center border-b border-gray-800">
                <span className="text-gray-500 text-lg font-bold">Votre projet ici</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Votre entreprise</h3>
                <p className="text-gray-400">Vous souhaitez apparaître ici ? Contactez-moi pour discuter de votre projet et voir comment un site sur-mesure peut vous aider à attirer plus de clients.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}