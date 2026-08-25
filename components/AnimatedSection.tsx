"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function AnimatedSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0", "scale-100");
          el.classList.remove("opacity-0", "translate-y-10", "scale-95");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 translate-y-10 scale-95 transition-all duration-1000 ease-out ${className}`}>
      {children}
    </div>
  );
}