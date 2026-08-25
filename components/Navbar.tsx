"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-xl text-white">Agence WebArtisan</span>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("services")} className="text-gray-400 hover:text-white transition text-sm">Services</button>
          <button onClick={() => scrollTo("realisations")} className="text-gray-400 hover:text-white transition text-sm">Réalisations</button>
          <button onClick={() => scrollTo("tarifs")} className="text-gray-400 hover:text-white transition text-sm">Tarifs</button>
          <button onClick={() => scrollTo("contact")} className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
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
          <button onClick={() => scrollTo("services")} className="text-white text-3xl font-bold">Services</button>
          <button onClick={() => scrollTo("realisations")} className="text-white text-3xl font-bold">Réalisations</button>
          <button onClick={() => scrollTo("tarifs")} className="text-white text-3xl font-bold">Tarifs</button>
          <button onClick={() => scrollTo("contact")} className="bg-white text-black px-8 py-4 rounded-xl text-xl font-medium mt-4">
            Me contacter
          </button>
        </div>
      )}
    </>
  );
}