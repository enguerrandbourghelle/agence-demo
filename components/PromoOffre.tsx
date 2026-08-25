"use client";
import AnimatedSection from "./AnimatedSection";

export default function PromoOffre() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-blue-500/10 via-gray-900/50 to-purple-500/10 border border-blue-500/30 rounded-3xl p-16 md:p-20 text-center">
            <p className="text-base font-medium text-blue-400 mb-5 tracking-widest uppercase">Offre de lancement</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              500€ pour les 5 premiers clients
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
              Je lance mon activité et je vous offre un tarif exceptionnel sur la création de votre site, en échange de votre témoignage. Places limitées.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-black px-10 py-5 rounded-xl text-xl font-medium hover:bg-gray-100 transition"
            >
              Profiter de l&apos;offre
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}