import { useState } from 'react';
import { LANDING_CONTENT } from '../../content/landingContent';

export function FAQ() {
  const { faq } = LANDING_CONTENT;
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
    );
  };

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24 border-t border-surface-3/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-surface-3 bg-surface-1 px-3 py-1 text-xs font-medium text-accent">
            {faq.badge}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-ink-muted sm:text-lg">
            {faq.subtitle}
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="mt-12 space-y-4">
          {faq.items.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            const contentId = `faq-answer-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-surface-3 bg-surface-1/90 backdrop-blur transition-colors hover:border-surface-3/80"
              >
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0 rounded-2xl"
                >
                  <span className="text-base font-semibold text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface-3 bg-surface-2 text-ink-muted transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-accent border-accent/40 bg-accent/10' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="border-t border-surface-3/60 px-6 pt-4 pb-6"
                  >
                    <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
