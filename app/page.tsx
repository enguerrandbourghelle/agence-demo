import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950">
        <p className="text-sm font-medium text-gray-400 mb-6 tracking-widest uppercase">
          Agence Web — Hauts-de-France
        </p>
        <h1 className="text-6xl font-bold mb-6 max-w-4xl leading-tight text-white">
          Des sites web qui attirent vos clients
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          Je crée des sites modernes, rapides et optimisés pour les artisans et entreprises locales.
        </p>
        <a href="#contact" className="bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-100 transition">
          Demander un devis gratuit
        </a>
      </section>
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}