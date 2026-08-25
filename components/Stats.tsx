export default function Stats() {
  return (
    <section className="py-16 px-6 bg-gray-950 border-t border-gray-800">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-white mb-2">7j</p>
          <p className="text-gray-400 text-sm">Délai de livraison</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white mb-2">100%</p>
          <p className="text-gray-400 text-sm">Clients satisfaits</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-blue-400 mb-2">1 000€</p>
          <p className="text-gray-400 text-sm">Prix tout compris</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-white mb-2">24h</p>
          <p className="text-gray-400 text-sm">Réponse garantie</p>
        </div>
      </div>
    </section>
  );
}