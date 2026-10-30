import { useEffect, useRef, useState } from 'react';
import { LANDING_CONTENT } from '../../content/landingContent';

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 text-warn" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const { testimonials } = LANDING_CONTENT;
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
    <section ref={containerRef} className="py-16 sm:py-24 border-t border-surface-3/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-surface-3 bg-surface-1 px-3 py-1 text-xs font-medium text-accent">
            {testimonials.badge}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-ink-muted sm:text-lg">
            {testimonials.subtitle}
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-2xl border border-surface-3 bg-surface-1/90 p-6 sm:p-7 backdrop-blur transition-all duration-300 hover:border-accent/40 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <StarRating count={item.rating} />
                <p className="mt-4 text-sm leading-relaxed text-ink/90 italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-surface-3/60 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-3 bg-surface-2 text-xs font-semibold text-accent">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink">{item.name}</h4>
                  <p className="text-xs text-ink-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
