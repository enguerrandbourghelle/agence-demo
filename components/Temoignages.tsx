import AnimatedSection from "./AnimatedSection";

export default function Temoignages() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium text-blue-400 mb-4 tracking-widest uppercase text-center">Témoignages</p>
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Ils me font confiance</h2>
          <p className="text-center text-gray-400 mb-16">Ce que disent mes clients.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-400 mb-6">Enguerrand a créé notre site en moins d&apos;une semaine. Résultat professionnel et nous recevons déjà des demandes de devis.</p>
              <div>
                <p className="font-bold text-white">Thomas M.</p>
                <p className="text-gray-500 text-sm">Gérant — ADN Constructions</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-400 mb-6">Très professionnel, à l&apos;écoute et réactif. Notre site est moderne et on apparaît maintenant sur Google.</p>
              <div>
                <p className="font-bold text-white">Sophie L.</p>
                <p className="text-gray-500 text-sm">Gérante — Plomberie Dupont</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <p className="text-gray-400 mb-6">Prix honnête, délai respecté. Je recommande vivement pour toute entreprise qui veut être visible en ligne.</p>
              <div>
                <p className="font-bold text-white">Marc D.</p>
                <p className="text-gray-500 text-sm">Artisan — Électricité du Nord</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}