import AnimatedSection from "./AnimatedSection";

export default function Temoignages() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4">{"// avis clients"}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-16 text-white">Ils me font confiance</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <AnimatedSection className="md:col-span-7">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-10 h-full flex flex-col justify-between">
              <p className="font-serif text-2xl md:text-3xl text-white leading-snug mb-8">
                &ldquo;Enguerrand a créé notre site en moins d&apos;une semaine. Résultat professionnel et nous recevons déjà des demandes de devis.&rdquo;
              </p>
              <div>
                <p className="font-mono text-amber-500 text-sm">Thomas M.</p>
                <p className="text-gray-500 text-sm">Gérant — ADN Constructions</p>
              </div>
            </div>
          </AnimatedSection>
          <div className="md:col-span-5 flex flex-col gap-6">
            <AnimatedSection>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <p className="text-gray-300 mb-6">Très professionnel, à l&apos;écoute et réactif. Notre site est moderne et on apparaît maintenant sur Google.</p>
                <p className="font-mono text-amber-500 text-xs">Sophie L. — Plomberie Dupont</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <p className="text-gray-300 mb-6">Prix honnête, délai respecté. Je recommande vivement pour toute entreprise qui veut être visible en ligne.</p>
                <p className="font-mono text-amber-500 text-xs">Marc D. — Électricité du Nord</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}