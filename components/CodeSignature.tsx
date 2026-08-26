"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

type Token = { t: string; c: string };
const line = (tokens: Token[]) => tokens;

const codeLines: Token[][] = [
  line([{ t: "// la philosophie derrière chaque site", c: "text-gray-500 italic" }]),
  line([{ t: "" , c: "" }]),
  line([{ t: "const", c: "text-amber-500" }, { t: " monAgence", c: "text-white" }, { t: " = {", c: "text-gray-500" }]),
  line([{ t: "  fondateur", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "\"Enguerrand Bourghelle\"", c: "text-amber-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  livraison", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "\"10 jours\"", c: "text-amber-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  code", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "\"écrit à la main, par moi\"", c: "text-amber-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  clients", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "\"artisans partout en France\"", c: "text-amber-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  intermediaires", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "0", c: "text-purple-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  transparence", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "\"prix clairs, sans surprise\"", c: "text-amber-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  seo", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "\"local, inclus par défaut\"", c: "text-amber-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  support", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "\"après la mise en ligne aussi\"", c: "text-amber-300" }, { t: ",", c: "text-gray-500" }]),
  line([{ t: "  satisfaction", c: "text-blue-300" }, { t: ": ", c: "text-gray-500" }, { t: "true", c: "text-purple-300" }]),
  line([{ t: "};", c: "text-gray-500" }]),
  line([{ t: "" , c: "" }]),
  line([{ t: "export default", c: "text-amber-500" }, { t: " monAgence", c: "text-white" }, { t: ";", c: "text-gray-500" }]),
];

export default function CodeSignature() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const totalTokens = codeLines.reduce((sum, l) => sum + l.length, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let count = 0;
          const timer = setInterval(() => {
            count++;
            setVisibleCount(count);
            if (count >= totalTokens) clearInterval(timer);
          }, 55);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [totalTokens]);

  let tokenIndex = 0;

  return (
    <section className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="font-mono text-sm text-amber-500 mb-4 text-center">{"// derrière le code"}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Chaque ligne, écrite avec soin
          </h2>
        </AnimatedSection>
        <div ref={sectionRef}>
          <div className="bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800 bg-gray-900/50">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="font-mono text-sm text-gray-500 ml-3">agence.config.ts</span>
            </div>
            <div className="p-8 md:p-10 font-mono text-base md:text-lg leading-loose overflow-x-auto">
              {codeLines.map((tokens, li) => (
                <div key={li} className="whitespace-pre min-h-6">
                  {tokens.map((tok, ti) => {
                    const idx = tokenIndex;
                    tokenIndex++;
                    const show = idx < visibleCount;
                    return (
                      <span key={ti} className={`${tok.c} transition-opacity duration-150 ${show ? "opacity-100" : "opacity-0"}`}>
                        {tok.t}
                      </span>
                    );
                  })}
                </div>
              ))}
              <span className={`inline-block w-2.5 h-5 bg-amber-500 ml-1 ${visibleCount < totalTokens ? "animate-pulse" : "opacity-0"}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}