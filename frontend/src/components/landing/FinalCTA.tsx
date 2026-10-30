import { LANDING_CONTENT } from '../../content/landingContent';

export function FinalCTA() {
  const { finalCta } = LANDING_CONTENT;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Wide rounded container with gradient border & glow */}
        <div className="relative overflow-hidden rounded-3xl border border-surface-3 bg-gradient-to-b from-surface-1 via-surface-1 to-surface-0 p-8 sm:p-14 text-center shadow-2xl shadow-black/60">
          {/* Subtle accent glow behind the card */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {finalCta.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {finalCta.subtext}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={finalCta.primaryCta.link}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-surface-0 shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-accent/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
              >
                {finalCta.primaryCta.text}
              </a>
              <a
                href={finalCta.secondaryCta.link}
                className="inline-flex items-center justify-center rounded-xl border border-surface-3 bg-surface-2/80 px-8 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-all hover:border-accent/50 hover:bg-surface-3 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
              >
                {finalCta.secondaryCta.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
