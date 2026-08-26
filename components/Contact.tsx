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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4">{"// contact"}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">Parlons de votre projet</h2>
          <p className="text-gray-400 mb-12">Devis gratuit sous 24h, sans engagement.</p>
        </AnimatedSection>
        <AnimatedSection>
          {status === "success" ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-green-400">
              Merci ! Votre message a bien été envoyé. Je vous réponds sous 24h.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
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