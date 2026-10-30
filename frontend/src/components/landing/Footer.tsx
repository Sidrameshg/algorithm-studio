import { LANDING_CONTENT } from '../../content/landingContent';
import { Link } from 'react-router-dom';

export function Footer() {
  const { footer, productName } = LANDING_CONTENT;

  return (
    <footer className="border-t border-surface-3/60 bg-surface-0/95 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 lg:gap-12">
          {/* Brand info - 2 columns on tablet/desktop */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-ink font-bold tracking-tight text-lg">
              <span className="inline-block h-3 w-3 rounded-sm bg-accent shadow-sm shadow-accent/50" />
              {productName}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {footer.description}
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-ink-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-ok" />
              <span>Full-Stack WebGL & FastAPI Platform</span>
            </div>
          </div>

          {/* Nav columns - 3 columns */}
          {footer.links.map((column, colIdx) => (
            <div key={colIdx}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink font-mono">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {item.href.startsWith('http') || item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        className="text-sm text-ink-muted transition-colors hover:text-accent"
                        {...(item.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-sm text-ink-muted transition-colors hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-3/60 pt-8 sm:flex-row text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {productName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Sidrameshg/algorithm-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <a href="#catalog" className="hover:text-ink transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
