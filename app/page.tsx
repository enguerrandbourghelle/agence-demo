"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import PromoOffre from "../components/PromoOffre";
import Stats from "../components/Stats";
import Services from "../components/Services";
import APropos from "../components/APropos";
import Portfolio from "../components/Portfolio";
import Tarifs from "../components/Tarifs";
import Temoignages from "../components/Temoignages";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import Particles from "../components/Particles";

export default function Home() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.fromTo(
      [eyebrowRef.current, titleRef.current, subtitleRef.current, btnRef.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative">
      <Particles />
      <div className="relative z-10">
        <Cursor />
        <Navbar />
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
          <div className="relative z-10 max-w-5xl">
            <p ref={eyebrowRef} className="font-mono text-sm text-amber-500 mb-8 opacity-0">
              {"// agence web — pour artisans, partout en france"}
            </p>
            <h1 ref={titleRef} className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-[0.95] text-white opacity-0">
              Des sites web qui<br />attirent vos <span className="text-amber-500 italic">clients</span>
            </h1>
            <p ref={subtitleRef} className="text-xl text-gray-400 max-w-xl mb-10 opacity-0">
              Je crée des sites modernes, rapides et optimisés pour les artisans et entreprises locales.
            </p>
            <button ref={btnRef} onClick={scrollToContact} className="bg-amber-500 text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-amber-400 transition opacity-0">
              Demander un devis gratuit
            </button>
          </div>
        </section>
        <PromoOffre />
        <Stats />
        <Services />
        <APropos />
        <Portfolio />
        <Tarifs />
        <Temoignages />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}