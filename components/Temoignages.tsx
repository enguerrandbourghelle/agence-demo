export default function Temoignages() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-blue-500 mb-4 tracking-widest uppercase text-center">Témoignages</p>
        <h2 className="text-4xl font-bold text-center mb-4">Ils me font confiance</h2>
        <p className="text-center text-gray-500 mb-16">Ce que disent mes clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-600 mb-6">Enguerrand a créé notre site en moins d&apos;une semaine. Résultat professionnel et nous recevons déjà des demandes de devis.</p>
            <div>
              <p className="font-bold text-gray-900">Thomas M.</p>
              <p className="text-gray-400 text-sm">Gérant — ADN Constructions</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-600 mb-6">Très professionnel, à l&apos;écoute et réactif. Notre site est moderne et on apparaît maintenant sur Google.</p>
            <div>
              <p className="font-bold text-gray-900">Sophie L.</p>
              <p className="text-gray-400 text-sm">Gérante — Plomberie Dupont</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-600 mb-6">Prix honnête, délai respecté. Je recommande vivement pour toute entreprise qui veut être visible en ligne.</p>
            <div>
              <p className="font-bold text-gray-900">Marc D.</p>
              <p className="text-gray-400 text-sm">Artisan — Électricité du Nord</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}