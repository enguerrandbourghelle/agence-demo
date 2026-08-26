"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-20 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-4">
        <div className="flex flex-col">
          <span className="font-serif text-6xl md:text-7xl font-bold text-white leading-none">
            <Counter target={10} suffix="j" />
          </span>
          <span className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-wider">Délai livraison</span>
        </div>
        <div className="hidden md:block w-px h-16 bg-gray-800" />
        <div className="flex flex-col">
          <span className="font-serif text-4xl md:text-5xl font-bold text-gray-400 leading-none">
            <Counter target={100} suffix="%" />
          </span>
          <span className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-wider">Clients satisfaits</span>
        </div>
        <div className="hidden md:block w-px h-16 bg-gray-800" />
        <div className="flex flex-col">
          <span className="font-serif text-4xl md:text-5xl font-bold text-amber-500 leading-none">100%</span>
          <span className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-wider">Sur-mesure</span>
        </div>
        <div className="hidden md:block w-px h-16 bg-gray-800" />
        <div className="flex flex-col">
          <span className="font-serif text-4xl md:text-5xl font-bold text-gray-400 leading-none">
            <Counter target={24} suffix="h" />
          </span>
          <span className="font-mono text-xs text-gray-500 mt-2 uppercase tracking-wider">Réponse garantie</span>
        </div>
      </div>
    </section>
  );
}