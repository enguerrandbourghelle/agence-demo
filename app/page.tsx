import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-6 max-w-4xl leading-tight">
          Des sites web qui attirent vos clients
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-10">
          Je crée des sites modernes, rapides et optimisés pour les artisans et entreprises locales.
        </p>
        <a href="#contact" className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition">
          Demander un devis gratuit
        </a>
      </section>
    </main>
  );
}