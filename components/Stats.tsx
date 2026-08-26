"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
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

  return <p ref={ref} className="font-serif text-4xl font-bold text-white mb-2">{count}{suffix}</p>;
}

export default function Stats() {
  return (
    <section className="py-16 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <Counter target={10} suffix="j" />
          <p className="font-mono text-gray-400 text-xs uppercase tracking-wider">Délai de livraison</p>
        </div>
        <div>
          <Counter target={100} suffix="%" />
          <p className="font-mono text-gray-400 text-xs uppercase tracking-wider">Clients satisfaits</p>
        </div>
        <div>
          <p className="font-serif text-4xl font-bold text-amber-500 mb-2">100%</p>
          <p className="font-mono text-gray-400 text-xs uppercase tracking-wider">Sur-mesure</p>
        </div>
        <div>
          <Counter target={24} suffix="h" />
          <p className="font-mono text-gray-400 text-xs uppercase tracking-wider">Réponse garantie</p>
        </div>
      </div>
    </section>
  );
}