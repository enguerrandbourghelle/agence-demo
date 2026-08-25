import AnimatedSection from "./AnimatedSection";

export default function FAQ() {
  const questions = [
    {
      q: "Combien coûte un site web ?",
      r: "1 000€ TTC tout compris — domaine, hébergement 1 an, design sur-mesure, SEO local et formation à l'utilisation de votre site sont inclus dans ce prix. Aucun frais caché ne s'ajoutera en cours de projet.",
    },
    {
      q: "En combien de temps est livré le site ?",
      r: "7 jours ouvrés après validation du devis et réception de vos contenus (textes, photos, logo). Ce délai peut varier légèrement selon la complexité du projet, mais je vous tiens informé à chaque étape.",
    },
    {
      q: "Est-ce que mon site sera visible sur Google ?",
      r: "Oui, le SEO local est inclus dans chaque création de site : optimisation des balises, mots-clés ciblés sur votre zone géographique et configuration de votre fiche Google Business. Le référencement prend généralement quelques semaines pour se mettre en place après la mise en ligne.",
    },
    {
      q: "Que comprend la maintenance à 89€/mois ?",
      r: "5 modifications de contenu par mois (textes, photos, tarifs), surveillance technique du site, gestion de votre fiche Google Business, et un rapport mensuel sur les visites et la performance. Vous n'avez rien à gérer techniquement.",
    },
    {
      q: "Est-ce que je peux arrêter la maintenance ?",
      r: "Oui, sans engagement. Vous pouvez arrêter à tout moment, sans préavis ni pénalité. Le site reste fonctionnel, seule la partie mises à jour et suivi s'arrête.",
    },
    {
      q: "Que dois-je fournir pour lancer mon projet ?",
      r: "Vos textes de présentation (ou je peux vous aider à les rédiger), quelques photos de votre activité, votre logo s'il existe, et vos coordonnées de contact. Si vous n'avez pas tout ça, on en discute ensemble au premier échange.",
    },
    {
      q: "Le site fonctionnera-t-il sur mobile ?",
      r: "Oui, tous les sites que je crée sont responsive, c'est-à-dire qu'ils s'adaptent automatiquement à tous les écrans : ordinateur, tablette et smartphone.",
    },
  ];

  return (
    <section className="py-24 px-6">
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