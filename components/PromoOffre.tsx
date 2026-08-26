"use client";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";

export default function PromoOffre() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="relative bg-linear-to-br from-amber-500/10 via-gray-900/50 to-gray-900/50 border border-amber-500/30 rounded-3xl p-10 md:p-16 overflow-hidden">
            <div className="absolute top-6 right-6 font-mono text-xs text-amber-500/40 hidden md:block">
              {"{ places: 5, statut: \"ouvert\" }"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <p className="font-mono text-sm text-amber-500 mb-5">{"// offre de lancement"}</p>
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  500€ pour les<br />5 premiers clients
                </h2>
                <p className="text-gray-400 text-lg max-w-xl">
                  Je lance mon activité et je vous offre un tarif exceptionnel sur la création de votre site, en échange de votre témoignage. Places limitées.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <MagneticButton
                  onClick={scrollToContact}
                  className="bg-amber-500 text-black px-8 py-5 rounded-xl text-lg font-medium hover:bg-amber-400 whitespace-nowrap"
                >
                  Profiter de l&apos;offre →
                </MagneticButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}