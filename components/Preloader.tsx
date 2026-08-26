"use client";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"frame" | "type" | "exit" | "done">("frame");
  const [typed, setTyped] = useState("");
  const url = "agencewebartisan.fr";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setPhase("type"), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "type") return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(url.slice(0, i));
      if (i >= url.length) {
        clearInterval(timer);
        setTimeout(() => setPhase("exit"), 450);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    document.body.style.overflow = "";
    const t = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 600);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center bg-gray-950 transition-opacity duration-600 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`w-[85vw] max-w-md border-2 border-amber-500/70 rounded-2xl overflow-hidden bg-gray-900/50 transition-all duration-700 ease-out ${
          phase === "frame" ? "scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/70">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <div className="flex-1 bg-gray-950/60 rounded px-3 py-1 ml-2">
            <p className="font-mono text-amber-400 text-xs md:text-sm">
              {typed}
              <span className="inline-block w-1.5 h-3 bg-amber-500 ml-0.5 animate-pulse align-middle" />
            </p>
          </div>
        </div>
        <div className="p-8 flex flex-col items-center gap-3">
          <span className="font-serif text-2xl font-bold text-white">
            Agence<span className="text-amber-500">WebArtisan</span>
          </span>
          <span className="font-mono text-xs text-gray-500">{"// construction de votre site en cours"}</span>
        </div>
      </div>
    </div>
  );
}