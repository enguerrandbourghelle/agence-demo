import AnimatedSection from "./AnimatedSection";

export default function FAQ() {
  const questions = [
    { q: "Combien coûte un site web ?", r: "1 000€ TTC tout compris — domaine, hébergement, SEO et formation inclus." },
    { q: "En combien de temps est livré le site ?", r: "7 jours après validation du devis et réception de vos contenus." },
    { q: "Est-ce que mon site sera visible sur Google ?", r: "Oui, le SEO local est inclus dans chaque création de site." },
    { q: "Que comprend la maintenance à 89€/mois ?", r: "5 modifications par mois, surveillance du site, gestion Google Business et rapport mensuel." },
    { q: "Est-ce que je peux arrêter la maintenance ?", r: "Oui, sans engagement. Vous pouvez arrêter à tout moment." },
  ];

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium text-blue-400 mb-4 tracking-widest uppercase text-center">FAQ</p>
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Questions fréquentes</h2>
        </AnimatedSection>
        <div className="flex flex-col gap-4">
          {questions.map((item, i) => (
            <AnimatedSection key={i}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                <p className="font-bold text-white mb-3">{item.q}</p>
                <p className="text-gray-400">{item.r}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}