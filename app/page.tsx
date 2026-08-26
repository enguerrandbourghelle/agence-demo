"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import PromoOffre from "../components/PromoOffre";
import Stats from "../components/Stats";
import Services from "../components/Services";
import APropos from "../components/APropos";
import CodeSignature from "../components/CodeSignature";
import Portfolio from "../components/Portfolio";
import Tarifs from "../components/Tarifs";
import Temoignages from "../components/Temoignages";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import Particles from "../components/Particles";
import MagneticButton from "../components/MagneticButton";
import ScrollProgress from "../components/ScrollProgress";
import SmoothScroll from "../components/SmoothScroll";
import Preloader from "../components/Preloader";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnWrapRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const fullText = "// agence web — pour artisans, partout en france";

  useEffect(() => {
    if (!introDone) return;

    let i = 0;
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 14);

    gsap.fromTo(
      [subtitleRef.current, btnWrapRef.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1.4, ease: "power3.out" }
    );

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0, y: 60, rotateX: -40 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.08, delay: 0.9, ease: "power4.out" }
      );
    }

    return () => clearInterval(typing);
  }, [introDone]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = ["Votre", "activité", "mérite", "d'être"];

  return (
    <SmoothScroll>
      <Preloader onComplete={() => setIntroDone(true)} />
      <main className="min-h-screen relative">
        <Particles />
        <div className="relative z-10">
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden">
            <div className="relative z-10 max-w-5xl">
              <p className="font-mono text-sm text-amber-500 mb-8 h-5">
                {typedText}
                <span className="inline-block w-2 h-4 bg-amber-500 ml-1 animate-pulse" />
              </p>
              <h1 ref={titleRef} className="font-serif text-6xl md:text-8xl font-bold mb-8 leading-[0.95] text-white" style={{ perspective: 800 }}>
                {titleWords.map((w, i) => (
                  <span key={i} className="word inline-block mr-4 opacity-0">{w}</span>
                ))}
                <br />
                <span className="word inline-block text-amber-500 italic opacity-0">vue en ligne.</span>
              </h1>
              <p ref={subtitleRef} className="text-xl text-gray-400 max-w-xl mb-10 opacity-0">
                Je crée des sites modernes, rapides et optimisés pour les artisans et entreprises locales.
              </p>
              <div ref={btnWrapRef} className="opacity-0 inline-block">
                <MagneticButton onClick={scrollToContact} className="bg-amber-500 text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-amber-400">
                  Demander un devis gratuit
                </MagneticButton>
              </div>
            </div>
          </section>
          <PromoOffre />
          <Stats />
          <Services />
          <APropos />
          <CodeSignature />
          <Portfolio />
          <Tarifs />
          <Temoignages />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}