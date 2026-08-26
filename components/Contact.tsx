"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/moeagdqo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <AnimatedSection className="md:col-span-5">
          <p className="font-mono text-sm text-amber-500 mb-4">{"// contact"}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Parlons de votre projet</h2>
          <p className="text-gray-400 text-lg mb-10">Devis gratuit sous 24h, sans engagement.</p>
          <div className="flex flex-col gap-6 border-t border-gray-800 pt-8">
            <div>
              <p className="font-mono text-amber-500/60 text-xs mb-1">RÉPONSE</p>
              <p className="text-white">Sous 24h ouvrées</p>
            </div>
            <div>
              <p className="font-mono text-amber-500/60 text-xs mb-1">ZONE</p>
              <p className="text-white">Partout en France</p>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection className="md:col-span-7">
          {status === "success" ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-green-400">
              Merci ! Votre message a bien été envoyé. Je vous réponds sous 24h.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                required
                className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-base text-white placeholder-gray-500 outline-none focus:border-amber-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-base text-white placeholder-gray-500 outline-none focus:border-amber-500 transition"
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Votre numéro de téléphone"
                required
                className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-base text-white placeholder-gray-500 outline-none focus:border-amber-500 transition"
              />
              <textarea
                name="message"
                placeholder="Décrivez votre projet..."
                rows={5}
                required
                className="bg-gray-900/50 border border-gray-800 rounded-xl px-5 py-4 text-base text-white placeholder-gray-500 outline-none focus:border-amber-500 transition resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-amber-500 text-black py-4 rounded-xl font-medium text-base hover:bg-amber-400 transition disabled:opacity-50"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Une erreur est survenue, réessayez.</p>
              )}
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}