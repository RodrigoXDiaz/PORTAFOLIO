import { useEffect, useState } from 'react';

const NAVBAR_ID = 'primary-navigation';

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.2,
      }
    );

    const observed = links
      .map((link) => (link.href.startsWith('#') ? link.href.substring(1) : null))
      .map((id) => (id ? document.getElementById(id) : null))
      .filter(Boolean);

    observed.forEach((section) => observer.observe(section));

    return () => {
      observed.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [links]);

  return (
    <header
      className={`sticky top-0 z-40 overflow-hidden text-white transition duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent ${
        isScrolled ? 'bg-midnight/95 shadow-xl backdrop-blur-lg' : 'bg-midnight/70 backdrop-blur'
      }`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            className="text-xl font-bold tracking-tight transition-all duration-300 hover:text-accent lg:text-2xl"
            aria-label="Ir al inicio"
          >
            Rodrigo Diaz
          </a>
          <span className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.35em] text-white/70 lg:inline-flex">
            Mobile · Web · IA
          </span>
        </div>
        <nav
          className="hidden items-center gap-2 text-sm font-medium md:flex xl:gap-3"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative inline-flex items-center rounded-full px-5 py-2.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeSection === link.href
                  ? 'bg-white/15 text-white shadow-soft'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {activeSection === link.href && (
                <span
                  className="absolute inset-0 rounded-full border border-accent/40"
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" aria-hidden="true" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            </span>
            Disponible
          </span>
          <a
            href="mailto:jhonislachito657@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-orange-500 px-6 py-2.5 text-sm font-bold text-midnight shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Escríbeme
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-expanded={isOpen}
          aria-controls={NAVBAR_ID}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
              <path
                d="M6 6l12 12M6 18L18 6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          )}
          <span className="sr-only">{isOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>
      {isOpen && (
        <nav
          id={NAVBAR_ID}
          className="border-t border-white/10 bg-midnight/95 px-6 pb-6 pt-4 md:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    activeSection === link.href ? 'bg-white/10 text-accent shadow-soft' : 'hover:bg-white/10'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:jhonislachito657@gmail.com"
                className="block rounded-2xl bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={closeMenu}
              >
                Contacto directo
              </a>
            </li>
            <li>
              <a
                href="tel:+51946529608"
                className="block rounded-2xl px-4 py-3 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={closeMenu}
              >
                Llamar ahora
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
