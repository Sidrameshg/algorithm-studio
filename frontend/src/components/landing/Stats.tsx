import { useEffect, useRef, useState } from 'react';
import { LANDING_CONTENT } from '../../content/landingContent';

export function Stats() {
  const { stats } = LANDING_CONTENT;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative z-10 -mt-6 sm:-mt-10 mb-16 sm:mb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-surface-3 bg-surface-1/90 p-6 sm:p-8 backdrop-blur shadow-xl shadow-black/40">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-surface-3">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center lg:px-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <span className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl font-mono">
                  {item.number}
                </span>
                <span className="mt-2 text-sm font-semibold text-ink sm:text-base">
                  {item.label}
                </span>
                <span className="mt-1 text-xs text-ink-muted">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
