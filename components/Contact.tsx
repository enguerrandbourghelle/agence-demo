export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Parlons de votre projet</h2>
        <p className="text-gray-500 mb-12">Devis gratuit sous 24h, sans engagement.</p>
        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Votre nom"
            className="border border-gray-200 rounded-xl px-5 py-4 text-base outline-none focus:border-black transition"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-200 rounded-xl px-5 py-4 text-base outline-none focus:border-black transition"
          />
          <textarea
            placeholder="Décrivez votre projet..."
            rows={5}
            className="border border-gray-200 rounded-xl px-5 py-4 text-base outline-none focus:border-black transition resize-none"
          />
          <button
            type="submit"
            className="bg-black text-white py-4 rounded-xl font-medium text-base hover:bg-gray-800 transition"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}