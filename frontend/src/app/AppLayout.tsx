/**
 * AppLayout — top nav shell shared by all routes.
 * Sticky translucent navbar with backdrop blur, desktop nav links,
 * auth actions, and mobile hamburger drawer.
 */

import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { pageTitle } from '../lib/pageTitle';
import { useAuth } from '../stores/auth';

export function AppLayout() {
  const user = useAuth((s) => s.user);
  const ready = useAuth((s) => s.ready);
  const { bootstrap, logout } = useAuth.getState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    void bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = pageTitle(pathname);
    setMobileMenuOpen(false);
  }, [pathname]);

  const scrollToHash = (hash: string) => {
    setMobileMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(`/${hash}`);
  };

  const navLinks = [
    { label: 'Catalog', hash: '#catalog' },
    { label: 'Features', hash: '#features' },
    { label: 'How It Works', hash: '#how-it-works' },
    { label: 'FAQ', hash: '#faq' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-surface-0 text-ink">
      <header className="sticky top-0 z-50 border-b border-surface-3/80 bg-surface-0/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 text-base font-bold tracking-tight text-ink transition-opacity hover:opacity-90"
          >
            <span className="inline-block h-3 w-3 rounded-sm bg-accent shadow-sm shadow-accent/50" />
            <span>Algorithm Studio</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToHash(item.hash)}
                className="rounded-lg px-3.5 py-1.5 text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/dashboard"
              className="rounded-lg px-3.5 py-1.5 text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
            >
              Dashboard
            </Link>
          </nav>

          {/* Auth Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {!ready ? null : user ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {user.avatar_url ? (
                    <img
                      src={user.avatar_url}
                      alt=""
                      className="h-6 w-6 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-3 text-[11px] font-semibold text-ink">
                      {user.name.slice(0, 1).toUpperCase()}
                    </span>
                  )}
                  <span>{user.name}</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    void logout().then(() => navigate('/'));
                  }}
                  className="rounded-lg border border-surface-3 bg-surface-1 px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-surface-2 cursor-pointer"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-lg px-3 py-1.5 text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="rounded-lg bg-accent px-3.5 py-1.5 text-xs font-semibold text-surface-0 shadow-sm shadow-accent/30 transition-all hover:bg-accent/90"
                >
                  Get started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="rounded-lg border border-surface-3 bg-surface-1 p-2 text-ink-muted hover:text-ink cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-surface-3 bg-surface-1/95 px-4 pt-2 pb-5 backdrop-blur-lg md:hidden">
            <div className="space-y-1">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToHash(item.hash)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-ink-muted hover:bg-surface-2 hover:text-ink cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-ink-muted hover:bg-surface-2 hover:text-ink"
              >
                Dashboard
              </Link>
            </div>

            <div className="mt-4 border-t border-surface-3 pt-4">
              {!ready ? null : user ? (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ink-muted">{user.name}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      void logout().then(() => navigate('/'));
                    }}
                    className="rounded-lg border border-surface-3 bg-surface-2 px-3 py-1.5 text-xs font-medium text-ink cursor-pointer"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg border border-surface-3 bg-surface-2 py-2 text-center text-xs font-semibold text-ink"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg bg-accent py-2 text-center text-xs font-semibold text-surface-0 shadow-sm shadow-accent/30"
                  >
                    Get started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="min-h-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
