import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
<Navbar />
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          Agence Web Enguerrand
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl">
          Je crée des sites internet modernes, rapides et optimisés
          pour aider les entreprises à développer leur présence en ligne.
        </p>

        <button className="mt-10 rounded-xl bg-black px-8 py-4 text-white transition hover:bg-gray-800">
          Découvrir mes services
        </button>
      </section>

    </main>
  );
}