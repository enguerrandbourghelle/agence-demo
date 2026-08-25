import AnimatedSection from "./AnimatedSection";

export default function Portfolio() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-4">Mes réalisations</h2>
          <p className="text-center text-gray-500 mb-16">Des sites créés pour de vrais clients.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-gray-900 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-bold">ADN Constructions</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ADN Constructions</h3>
                <p className="text-gray-500">Site vitrine pour une entreprise de couverture à Marcq-en-Barœul. SEO local, formulaire de devis, Google Business.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-lg font-bold">Votre projet ici</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Votre entreprise</h3>
                <p className="text-gray-500">Vous souhaitez apparaître ici ? Contactez-moi pour discuter de votre projet.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}