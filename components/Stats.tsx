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

  return <p ref={ref} className="text-4xl font-bold text-white mb-2">{count}{suffix}</p>;
}

export default function Stats() {
  return (
    <section className="py-16 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <Counter target={7} suffix="j" />
          <p className="text-gray-400 text-sm">Délai de livraison</p>
        </div>
        <div>
          <Counter target={100} suffix="%" />
          <p className="text-gray-400 text-sm">Clients satisfaits</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-blue-400 mb-2">1 000€</p>
          <p className="text-gray-400 text-sm">Prix tout compris</p>
        </div>
        <div>
          <Counter target={24} suffix="h" />
          <p className="text-gray-400 text-sm">Réponse garantie</p>
        </div>
      </div>
    </section>
  );
}