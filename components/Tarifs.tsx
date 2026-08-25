export default function Tarifs() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-blue-500 mb-4 tracking-widest uppercase text-center">Tarifs</p>
        <h2 className="text-4xl font-bold text-center mb-4">Des prix clairs et transparents</h2>
        <p className="text-center text-gray-500 mb-16">Pas de surprise, tout est inclus.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Création de site</h3>
            <p className="text-gray-500 mb-8">Site vitrine complet livré en 7 jours.</p>
            <p className="text-5xl font-bold mb-8">1 000€ <span className="text-base font-normal text-gray-400">TTC</span></p>
            <ul className="flex flex-col gap-3 text-gray-600 text-sm">
              <li>✅ Design moderne et responsive</li>
              <li>✅ SEO local inclus</li>
              <li>✅ Formulaire de contact</li>
              <li>✅ Google Business configuré</li>
              <li>✅ Nom de domaine + hébergement 1 an</li>
              <li>✅ Formation incluse</li>
            </ul>
          </div>
          <div className="bg-gray-950 rounded-2xl p-10 shadow-sm border border-gray-800">
            <h3 className="text-xl font-bold mb-2 text-white">Maintenance mensuelle</h3>
            <p className="text-gray-400 mb-8">Je gère tout, vous vous concentrez sur votre métier.</p>
            <p className="text-5xl font-bold mb-8 text-white">89€ <span className="text-base font-normal text-gray-400">/ mois</span></p>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>✅ 5 modifications par mois</li>
              <li>✅ Surveillance du site</li>
              <li>✅ Gestion fiche Google</li>
              <li>✅ Rapport mensuel</li>
              <li>✅ Support prioritaire</li>
              <li>✅ Sans engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}