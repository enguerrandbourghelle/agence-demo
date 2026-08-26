"use client";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif font-bold text-white mb-1">Agence WebArtisan</p>
          <p className="font-mono text-gray-500 text-xs">
            © 2026 — Enguerrand Bourghelle
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo("services")} className="text-gray-400 hover:text-amber-500 transition">Services</button>
          <button onClick={() => scrollTo("realisations")} className="text-gray-400 hover:text-amber-500 transition">Réalisations</button>
          <button onClick={() => scrollTo("tarifs")} className="text-gray-400 hover:text-amber-500 transition">Tarifs</button>
          <button onClick={() => scrollTo("contact")} className="text-gray-400 hover:text-amber-500 transition">Contact</button>
        </div>
      </div>
    </footer>
  );
}