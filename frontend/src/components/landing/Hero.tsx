import { LANDING_CONTENT } from '../../content/landingContent';
import { Link } from 'react-router-dom';

export function Hero() {
  const { hero, pillBadge } = LANDING_CONTENT;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background radial glow & subtle dot pattern */}
      <div className="bg-radial-hero pointer-events-none absolute inset-0 -z-10" />
      <div className="bg-grid-dots pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            {/* Pill Badge */}
            <a
              href={pillBadge.link}
              className="group inline-flex items-center gap-2 rounded-full border border-surface-3 bg-surface-1/80 px-3.5 py-1.5 text-xs text-ink-muted backdrop-blur transition-colors hover:border-accent/60 hover:text-ink"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>{pillBadge.text}</span>
              <span className="text-accent transition-transform group-hover:translate-x-0.5">→</span>
            </a>

            {/* Headline */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {hero.headlineStart}{' '}
              <span className="text-gradient inline-block font-extrabold">{hero.headlineGradient}</span>{' '}
              {hero.headlineEnd}
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={hero.primaryCta.link}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-surface-0 shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-accent/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
              >
                {hero.primaryCta.text}
              </a>
              <Link
                to={hero.secondaryCta.link}
                className="inline-flex items-center justify-center rounded-lg border border-surface-3 bg-surface-1/90 px-6 py-3 text-sm font-semibold text-ink backdrop-blur transition-all hover:border-accent/50 hover:bg-surface-2 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
              >
                {hero.secondaryCta.text}
              </Link>
            </div>

            {/* Trust Text */}
            <p className="mt-8 text-xs tracking-wide text-ink-muted/80">
              {hero.trustText}
            </p>
          </div>

          {/* Right Column: Realistic Product Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md rounded-2xl border border-surface-3 bg-surface-1/95 p-4 shadow-2xl shadow-black/60 backdrop-blur">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-surface-3 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-ok animate-ping" />
                  <span>MergeSort.3d.ts</span>
                </div>
                <span className="rounded bg-ok/10 px-2 py-0.5 text-[10px] font-semibold text-ok border border-ok/20">
                  Medium
                </span>
              </div>

              {/* Simulated 3D Array Bar Visualizer */}
              <div className="mt-4 rounded-xl border border-surface-3 bg-surface-0/90 p-4">
                <div className="flex items-center justify-between text-[11px] text-ink-muted">
                  <span>3D Event Stream: Step 14 / 28</span>
                  <span className="font-mono text-accent">O(n log n)</span>
                </div>

                {/* Animated simulated bar array */}
                <div className="mt-4 flex h-32 items-end justify-center gap-2 border-b border-surface-3 pb-2">
                  {[
                    { h: '38%', color: 'bg-surface-3', label: '12' },
                    { h: '62%', color: 'bg-accent shadow-sm shadow-accent/50', label: '24' },
                    { h: '45%', color: 'bg-warn shadow-sm shadow-warn/50', label: '18' },
                    { h: '88%', color: 'bg-accent-2 shadow-sm shadow-accent-2/50', label: '45' },
                    { h: '30%', color: 'bg-ok shadow-sm shadow-ok/50', label: '9' },
                    { h: '72%', color: 'bg-surface-3', label: '33' },
                    { h: '95%', color: 'bg-ok shadow-sm shadow-ok/50', label: '50' },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        style={{ height: bar.h }}
                        className={`w-6 rounded-t transition-all duration-300 ${bar.color}`}
                      />
                      <span className="font-mono text-[9px] text-ink-muted">{bar.label}</span>
                    </div>
                  ))}
                </div>

                {/* Step Narration */}
                <div className="mt-3 flex items-start gap-2 text-xs text-ink">
                  <span className="text-accent font-mono font-bold">›</span>
                  <p className="text-[11px] text-ink-muted leading-tight">
                    Comparing left partition element <code className="text-accent font-mono">arr[2] = 18</code> with right partition <code className="text-accent-2 font-mono">arr[3] = 45</code>.
                  </p>
                </div>
              </div>

              {/* Simulated Code & Submissions status */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-surface-2/60 px-3 py-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-ink-muted">judge/python</span>
                    <span className="text-[11px] text-ink">test_suite_10.py</span>
                  </div>
                  <span className="text-[11px] text-ok font-semibold">10/10 Passed</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-surface-2/40 px-3 py-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-ink-muted">ai_tutor</span>
                    <span className="text-[11px] text-ink-muted">“Partition logic balanced cleanly”</span>
                  </div>
                  <span className="text-[10px] text-accent font-mono">0.03s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
