"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
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
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.fromTo(
      [eyebrowRef.current, titleRef.current, subtitleRef.current, btnRef.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Cursor />
      <Navbar />
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950 overflow-hidden">
        <Particles />
        <div className="relative z-10 flex flex-col items-center">
          <p ref={eyebrowRef} className="text-sm font-medium text-gray-400 mb-6 tracking-widest uppercase opacity-0">
            Agence Web — Hauts-de-France
          </p>
          <h1 ref={titleRef} className="text-6xl font-bold mb-6 max-w-4xl leading-tight text-white opacity-0">
            Des sites web qui attirent vos <span className="text-blue-400">clients</span>
          </h1>
          <p ref={subtitleRef} className="text-xl text-gray-400 max-w-2xl mb-10 opacity-0">
            Je crée des sites modernes, rapides et optimisés pour les artisans et entreprises locales.
          </p>
          <a ref={btnRef} href="#contact" className="bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-100 transition opacity-0">
            Demander un devis gratuit
          </a>
        </div>
      </section>
      <Stats />
      <Services />
      <APropos />
      <Portfolio />
      <Tarifs />
      <Temoignages />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}