function Hero() {
  const quickFacts = [
    { label: 'Ubicación', value: 'Lurigancho · Chosica' },
    { label: 'Disponibilidad', value: 'Pasantías y proyectos remotos' },
    { label: 'Formación', value: 'TECSUP · 6to ciclo' },
    { label: 'Impacto', value: '+1200 PPTs generadas con TecCreate' },
  ];

  const milestones = [
    {
      title: 'TecCreate en producción',
      detail: 'Sistema multi-rol desplegado en Render con Groq + Gemini.',
    },
    {
      title: 'Experiencia multidisciplinaria',
      detail: 'Proyectos móviles, web y laboratorios de innovación con IA, ciberseguridad y modelado 3D.',
    },
  ];

  const focusTracks = ['Android nativo', 'SaaS educativo', 'Workflows con IA', 'Experiencias web', 'Analítica de impacto'];

  const currentFocus = [
    {
      title: 'TecCreate roadmap',
      description: 'Expansión a dashboards con métricas en tiempo real y despliegues multi-cloud.',
    },
    {
      title: 'Aplicación de seguimiento académico',
      description: 'Prototipo móvil que conecta estudiantes con datos en vivo usando Kotlin y Firebase.',
    },
    {
      title: 'Librería de componentes UI',
      description: 'Sistema de diseño en React + Tailwind para acelerar proyectos estudiantiles.',
    },
    {
      title: 'Automatizaciones con IA',
      description: 'Pruebas con agentes para generar reportes y contenido educativo personalizado.',
    },
  ];

  const contactCards = [
    {
      label: 'Correo directo',
      value: 'jhonislachito657@gmail.com',
      href: 'mailto:jhonislachito657@gmail.com',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: '/rodrigodiazi',
      href: 'https://www.linkedin.com/in/rodrigodiazi',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: '@RodrigoXDiaz',
      href: 'https://github.com/RodrigoXDiaz',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.6 11.6 0 013.01-.4c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: 'Teléfono',
      value: '+51 946 529 608',
      href: 'tel:+51946529608',
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.51l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-midnight via-[#15052b] to-midnight text-slate-100">
      <div className="absolute inset-0 -z-20 bg-hero-grid opacity-60" aria-hidden="true" />
      <div className="absolute -top-36 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[160px]" aria-hidden="true" />
      <div className="absolute -bottom-48 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-accentSoft/30 blur-[140px]" aria-hidden="true" />
      <div className="section-wrapper relative grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-12">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.35em]">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" aria-hidden="true" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              </span>
              Disponible 2025
            </span>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/80">
              Portafolio renovado · Mobile · Web · IA
            </span>
          </div>

          <div className="space-y-8">
            <h1 className="bg-gradient-to-r from-white via-accentSoft to-white/70 bg-clip-text text-5xl font-black leading-tight text-transparent sm:text-6xl">
              Rodrigo Diaz, creador de experiencias digitales híbridas
            </h1>
            <p className="text-lg leading-relaxed text-slate-200 md:text-xl">
              Ingeniero en formación que combina desarrollo móvil nativo, sistemas web con IA y liderazgo de equipos para acelerar la entrega de soluciones educativas y empresariales. Me enfoco en medir resultados y escalar funcionalidades desde el primer sprint.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent/90">
              {focusTracks.map((item) => (
                <span key={item} className="rounded-full border border-accent/25 bg-surfaceAlt/80 px-4 py-2 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-accent/30 bg-surface/80 p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">Resumen rápido</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {quickFacts.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-accent/70">{item.label}</span>
                      <span className="text-sm font-semibold text-slate-100">{item.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-accent/30 bg-surfaceAlt/80 p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">Hitos recientes</p>
              <ul className="mt-4 space-y-4 text-sm text-slate-300">
                {milestones.map((item) => (
                  <li key={item.title} className="relative pl-6">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <p className="font-semibold text-slate-100">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="rounded-3xl border border-accent/20 bg-white/5 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">En construcción ahora</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {currentFocus.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.3em] text-accent/70">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proyecto"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-semibold text-midnight shadow-glow transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="relative z-10">Explorar TecCreate</span>
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_65%)] opacity-0 transition group-hover:opacity-70" />
            </a>
            <a
              href="/PDF.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-surface px-8 py-4 text-base font-semibold text-slate-100 transition hover:-translate-y-1 hover:border-accent hover:text-white"
            >
              Descargar CV
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M12 4v12m0 0-4-4m4 4 4-4M5 20h14"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-1 hover:border-accent hover:text-accent"
            >
              Agenda una reunión
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M8 7h8M8 11h8M10 15h4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>
        </div>

        <aside className="relative flex flex-col gap-6">
          <div className="animate-float group relative overflow-hidden rounded-[3rem] border border-accent/25 bg-surface/60 p-6 shadow-glow">
            <div className="absolute inset-x-10 -top-32 h-48 rounded-full bg-accent/25 blur-[120px]" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <img
                src="/assets/gas.jpg"
                alt="Rodrigo Diaz"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 rounded-[2.5rem] bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent p-6 text-sm text-slate-200">
              <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Caso de estudio</p>
              <p className="mt-2 text-lg font-semibold text-white">TecCreate · Presentaciones con IA para TECSUP</p>
              <p className="mt-3 text-sm text-slate-300">
                Arquitectura full stack con generación de PPT automatizada, autenticación Google y despliegue listo para escalar.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-accent">
                {['Groq', 'Gemini', 'Render', 'PostgreSQL', 'Multi-rol'].map((item) => (
                  <span key={item} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-slate-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200 transition hover:-translate-y-1 hover:border-accent/50 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent transition group-hover:scale-105">
                  {item.icon}
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-accent/70">{item.label}</span>
                  <span className="text-sm font-semibold text-white">{item.value}</span>
                </span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
