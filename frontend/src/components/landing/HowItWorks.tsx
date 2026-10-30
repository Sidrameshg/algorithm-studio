import { useEffect, useRef, useState } from 'react';
import { LANDING_CONTENT } from '../../content/landingContent';

export function HowItWorks() {
  const { howItWorks } = LANDING_CONTENT;
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={containerRef} className="scroll-mt-20 py-16 sm:py-24 border-t border-surface-3/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-surface-3 bg-surface-1 px-3 py-1 text-xs font-medium text-accent">
            {howItWorks.badge}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-ink-muted sm:text-lg">
            {howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Steps with Connected Line */}
        <div className="relative mt-16 sm:mt-20">
          {/* Desktop horizontal connecting line */}
          <div className="hidden lg:block absolute top-7 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 -z-0" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {howItWorks.steps.map((item, idx) => (
              <div
                key={item.step}
                className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-3 bg-surface-1 text-base font-mono font-bold text-accent shadow-lg shadow-black/50 transition-transform duration-300 hover:scale-105 hover:border-accent">
                  {item.step}
                </div>

                {/* Step Title & Description */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
