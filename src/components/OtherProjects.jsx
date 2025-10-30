const projects = [
  {
    name: 'Veterinaria FOX',
    context: 'Proyecto Integrador · 3er Ciclo',
    description:
      'E-commerce veterinario con catálogo, carrito de compras y simulación de pagos enfocado en usabilidad.',
    impact: '90% de éxito en pruebas de compra y pago durante la demo académica.',
    tech: ['HTML', 'CSS', 'Laravel', 'MySQL'],
  },
  {
    name: 'TecEats',
    context: 'Proyecto Integrador · 4to Ciclo',
    description:
      'Aplicación móvil que conecta usuarios con menús y pedidos en tiempo real, gestionada bajo metodología Scrum.',
    impact: 'Coordinación end-to-end del equipo y entregas puntuales de sprints.',
    tech: ['Kotlin', 'Android Studio', 'MySQL', 'Scrum'],
  },
  {
    name: 'Laboratorios de Innovación',
    context: 'Intereses profesionales',
    description:
      'Exploro integraciones con IA, ciberseguridad Cisco y modelado en Fusion 360 para enriquecer soluciones móviles y web.',
    impact: 'Prototipos que amplían las capacidades de las apps con analítica y automatización.',
    tech: ['ChatGPT API', 'Ciberseguridad Cisco', 'Fusion 360', 'Ciencia de Datos'],
  },
];

function OtherProjects() {
  return (
    <section id="portafolio" className="bg-surface scroll-mt-24">
      <div className="section-wrapper space-y-10">
        <div className="mx-auto max-w-3xl text-center text-slate-200">
          <p className="eyebrow">Otros proyectos</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Proyectos y exploraciones complementarias</h2>
          <p className="mt-4 text-base text-slate-300">
            Complemento la pasantía con proyectos integradores y laboratorios que refuerzan mis habilidades móviles, web y de innovación.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-accent/25 bg-surfaceAlt/80 p-6 text-slate-200 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-glow"
            >
              <header>
                <p className="text-xs uppercase tracking-[0.25em] text-accent/80">{project.context}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{project.name}</h3>
              </header>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">{project.impact}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-slate-100">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;
