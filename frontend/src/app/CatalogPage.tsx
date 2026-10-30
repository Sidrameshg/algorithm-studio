import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ALGORITHMS } from '../engine/registry';
import { TOPICS } from '../engine/lessons/topics';
import { LESSONS } from '../engine/lessons/lessons';

import { Hero } from '../components/landing/Hero';
import { Stats } from '../components/landing/Stats';
import { Features } from '../components/landing/Features';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Testimonials } from '../components/landing/Testimonials';
import { FAQ } from '../components/landing/FAQ';
import { FinalCTA } from '../components/landing/FinalCTA';
import { Footer } from '../components/landing/Footer';

const mapCategoryToTopic = (category: string) =>
  ({
    sorting: 'arrays',
    searching: 'arrays',
    graph: 'graphs',
    'data-structure': 'trees',
    ml: 'ml',
  }[category] ?? 'arrays');

export interface CatalogItem {
  id: string;
  name: string;
  summary: string;
  topic: string;
  cost: string;
  href: string;
  type: string;
}

export const ALL_CATALOG_ITEMS: CatalogItem[] = [
  ...ALGORITHMS.map((a) => ({
    id: a.id,
    name: a.name,
    summary: a.summary,
    topic: mapCategoryToTopic(a.category),
    cost: a.bigO,
    href: `/algorithms/${a.id}`,
    type: '3D | C++ / Java / Python | Practice | AI Tutor',
  })),
  ...LESSONS.map((l) => ({
    id: l.id,
    name: l.name,
    summary: l.summary,
    topic: l.topic,
    cost: l.time,
    href: `/learn/${l.id}`,
    type: '3D | C++ / Java / Python | Practice | AI Tutor',
  })),
];

export function CatalogPage() {
  const [params, setParams] = useSearchParams();
  const activeTopicId = params.get('topic');
  const activeTopic = TOPICS.find((t) => t.id === activeTopicId);

  const [query, setQuery] = useState('');

  const matchingItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_CATALOG_ITEMS;
    return ALL_CATALOG_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.topic.toLowerCase().includes(q),
    );
  }, [query]);

  const topicItems = useMemo(() => {
    if (!activeTopic) return matchingItems;
    return matchingItems.filter((item) => item.topic === activeTopic.id);
  }, [activeTopic, matchingItems]);

  return (
    <div className="flex flex-col">
      {/* Landing Sections Above Existing Catalog */}
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />

      {/* Existing Catalog Component — Untouched Logic, Wrapped with id="catalog" */}
      <section id="catalog" className="scroll-mt-20 border-t border-surface-3/50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-widest text-accent font-medium">
            Algorithm Studio · CS learning library
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {activeTopic?.name ?? 'Choose a topic. Explore the ideas inside.'}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {activeTopic?.description ??
              `${ALL_CATALOG_ITEMS.length} algorithms and techniques across ${TOPICS.length} topics. Open a topic for its lessons, editable examples, and step-by-step explanations.`}
          </p>

          <div className="my-6 flex flex-wrap items-center gap-3">
            {activeTopic && (
              <button
                onClick={() => setParams({})}
                className="rounded-md border border-surface-3 bg-surface-1 px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:bg-surface-2 cursor-pointer"
              >
                ← All topics
              </button>
            )}
            <label className="flex flex-1 items-center gap-3 text-sm">
              Search
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find an algorithm…"
                className="min-w-0 flex-1 rounded-md border border-surface-3 bg-surface-1 p-2 text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
              />
            </label>
          </div>

          {activeTopic || query.trim() ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topicItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="group rounded-xl border border-surface-3 bg-surface-1 p-5 transition-colors hover:border-accent hover:bg-surface-2"
                >
                  <p className="text-xs text-accent font-medium">{item.type}</p>
                  <h3 className="mt-2 font-semibold text-ink group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted line-clamp-3">{item.summary}</p>
                  <p className="mt-3 font-mono text-xs text-ink-muted">{item.cost}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TOPICS.map((topic) => {
                const topicAlgos = ALL_CATALOG_ITEMS.filter((item) => item.topic === topic.id);
                const count = topicAlgos.length;
                if (!count) return null;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setParams({ topic: topic.id })}
                    className="group rounded-xl border border-surface-3 bg-surface-1 p-5 text-left transition-colors hover:border-accent hover:bg-surface-2 cursor-pointer"
                  >
                    <span className="text-xs text-accent font-medium">{count} lessons →</span>
                    <h3 className="mt-2 text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                      {topic.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">{topic.description}</p>
                    <p className="mt-4 text-xs text-ink-muted">
                      {topicAlgos
                        .slice(0, 3)
                        .map((a) => a.name)
                        .join(' · ')}
                    </p>
                  </button>
                );
              })}
            </div>
          )}

          {(activeTopic ? topicItems.length === 0 : matchingItems.length === 0) && (
            <p role="status" className="py-8 text-center text-sm text-ink-muted">
              No matching lessons. Try another search.
            </p>
          )}
        </div>
      </section>

      {/* Landing Sections Below Catalog */}
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
