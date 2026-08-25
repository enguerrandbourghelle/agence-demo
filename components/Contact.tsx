import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-4 text-white">Parlons de votre projet</h2>
          <p className="text-gray-400 mb-12">Devis gratuit sous 24h, sans engagement.</p>
        </AnimatedSection>
        <AnimatedSection>
          <form className="flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Votre nom"
              className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-base text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-base text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
            />
            <textarea
              placeholder="Décrivez votre projet..."
              rows={5}
              className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-base text-white placeholder-gray-500 outline-none focus:border-blue-500 transition resize-none"
            />
            <button
              type="submit"
              className="bg-white text-black py-4 rounded-xl font-medium text-base hover:bg-gray-100 transition"
            >
              Envoyer ma demande
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}