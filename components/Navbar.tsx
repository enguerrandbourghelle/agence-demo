"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-gray-950/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <span className="font-serif font-bold text-xl text-white">
          Agence<span className="text-amber-500">WebArtisan</span>
        </span>
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollTo("services")} className="font-mono text-xs uppercase tracking-wider text-gray-400 hover:text-amber-500 transition">01. Services</button>
          <button onClick={() => scrollTo("realisations")} className="font-mono text-xs uppercase tracking-wider text-gray-400 hover:text-amber-500 transition">02. Réalisations</button>
          <button onClick={() => scrollTo("tarifs")} className="font-mono text-xs uppercase tracking-wider text-gray-400 hover:text-amber-500 transition">03. Tarifs</button>
          <button onClick={() => scrollTo("contact")} className="bg-amber-500 text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-amber-400 transition">
            Me contacter
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 bg-gray-950 flex flex-col items-center justify-center gap-8">
          <button onClick={() => scrollTo("services")} className="font-serif text-white text-3xl font-bold">Services</button>
          <button onClick={() => scrollTo("realisations")} className="font-serif text-white text-3xl font-bold">Réalisations</button>
          <button onClick={() => scrollTo("tarifs")} className="font-serif text-white text-3xl font-bold">Tarifs</button>
          <button onClick={() => scrollTo("contact")} className="bg-amber-500 text-black px-8 py-4 rounded-xl text-xl font-medium mt-4">
            Me contacter
          </button>
        </div>
      )}
    </>
  );
}