import AnimatedSection from "./AnimatedSection";

export default function Temoignages() {
  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4">{"// avis clients"}</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-16 text-white">Ils me font confiance</h2>
        </AnimatedSection>
        <AnimatedSection>
          <div className="bg-gray-900/50 border border-dashed border-gray-700 rounded-2xl p-12 md:p-16 text-center">
            <p className="font-mono text-amber-500/60 text-sm mb-4">{"// bientôt ici"}</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Votre témoignage pourrait être le premier
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Je démarre mon activité et je construis ma réputation projet après projet. En travaillant avec moi aujourd&apos;hui, vous devenez l&apos;un des tout premiers clients à figurer ici.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}