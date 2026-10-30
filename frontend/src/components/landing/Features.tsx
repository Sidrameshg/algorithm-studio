import { useEffect, useRef, useState } from 'react';
import type { FeatureItem } from '../../content/landingContent';
import { LANDING_CONTENT } from '../../content/landingContent';

function FeatureIcon({ type }: { type: FeatureItem['icon'] }) {
  const iconProps = {
    className: 'h-6 w-6 text-accent',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (type) {
    case 'cube':
      return (
        <svg {...iconProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'code':
      return (
        <svg {...iconProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case 'sync':
      return (
        <svg {...iconProps}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.19" />
          <polyline points="2.5 22 2.5 16 8.5 16" />
        </svg>
      );
    case 'bot':
      return (
        <svg {...iconProps}>
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'path':
      return (
        <svg {...iconProps}>
          <circle cx="6" cy="19" r="3" />
          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
          <circle cx="18" cy="5" r="3" />
        </svg>
      );
  }
}

export function Features() {
  const { features } = LANDING_CONTENT;
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
    <section id="features" ref={containerRef} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-surface-3 bg-surface-1 px-3 py-1 text-xs font-medium text-accent">
            Core Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything You Need to Master Algorithms
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-ink-muted sm:text-lg">
            Built from the ground up for spatial understanding, hands-on practice, and interview confidence.
          </p>
        </div>

        {/* 2x3 Feature Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`group card-glow rounded-2xl border border-surface-3 bg-surface-1/90 p-6 sm:p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-surface-3 bg-surface-2/80 transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                <FeatureIcon type={feature.icon} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
