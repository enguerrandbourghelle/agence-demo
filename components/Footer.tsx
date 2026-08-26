"use client";
import Link from "next/link";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-10 px-6 md:px-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div>
            <p className="font-serif text-3xl font-bold text-white mb-3">
              Agence<span className="text-amber-500">WebArtisan</span>
            </p>
            <p className="font-mono text-xs text-gray-500 max-w-xs">
              {"// sites web sur-mesure pour artisans, partout en france"}
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs text-amber-500/60 uppercase tracking-wider mb-2">Navigation</p>
              <button onClick={() => scrollTo("services")} className="text-gray-400 hover:text-amber-500 transition text-left text-sm">Services</button>
              <button onClick={() => scrollTo("realisations")} className="text-gray-400 hover:text-amber-500 transition text-left text-sm">Réalisations</button>
              <button onClick={() => scrollTo("tarifs")} className="text-gray-400 hover:text-amber-500 transition text-left text-sm">Tarifs</button>
              <button onClick={() => scrollTo("contact")} className="text-gray-400 hover:text-amber-500 transition text-left text-sm">Contact</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          <p className="font-mono text-gray-600 text-xs">
            © 2026 — Enguerrand Bourghelle
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="font-mono text-gray-600 text-xs hover:text-amber-500 transition">
              Mentions légales
            </Link>
            <p className="font-mono text-gray-600 text-xs">
              Codé avec soin depuis la France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}