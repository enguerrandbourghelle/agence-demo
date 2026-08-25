import { Globe, Search, Wrench } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Mes services</h2>
        <p className="text-center text-gray-500 mb-16">Tout ce dont vous avez besoin pour être visible en ligne.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Globe className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Site vitrine</h3>
            <p className="text-gray-500">Un site moderne et professionnel pour présenter votre activité et attirer des clients.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Search className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Référencement SEO</h3>
            <p className="text-gray-500">Apparaissez en premier sur Google quand vos clients vous cherchent localement.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Wrench className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Maintenance</h3>
            <p className="text-gray-500">Je gère votre site chaque mois — mises à jour, modifications et support inclus.</p>
          </div>
        </div>
      </div>
    </section>
  );
}