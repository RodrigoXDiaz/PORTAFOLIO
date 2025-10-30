const experienceItems = [
  {
    company: 'EFSRT Tecsup',
    period: '2025',
    location: 'Lima, Perú',
    role: 'Programador Full Stack – Pasantía',
    summary:
      'Pasantía desarrollando TecCreate, generador de presentaciones con IA que acelera la creación de material académico para TECSUP.',
    highlights: [
      'Desarrollé un sistema web que genera presentaciones PPTX en minutos usando prompts conectados a la API de ChatGPT.',
      'Implementé el frontend en React y el backend en Django con PostgreSQL y servicios REST seguros.',
      'Integré Cloudinary para manejo de assets y Google Login para autenticación federada.',
      'Documenté el flujo de trabajo y capacitaciones para asegurar adopción por parte de docentes y estudiantes.',
      'Logré reducir los tiempos de creación de presentaciones de horas a minutos gracias a la automatización.',
    ],
    stack: ['React', 'Django', 'PostgreSQL', 'ChatGPT API', 'Cloudinary', 'Google OAuth', 'Tailwind CSS'],
  },
  {
    company: 'TecEats · Proyecto Integrador (4to Ciclo)',
    period: '2024',
    location: 'Lima, Perú',
    role: 'Jefe de Grupo y Desarrollador móvil',
    summary:
      'Aplicativo móvil de gestión gastronómica desarrollado con enfoque Scrum y despliegue académico.',
    highlights: [
      'Lideré el equipo bajo metodología Scrum, gestionando backlog, sprints y entregables con seguimiento constante.',
      'Desarrollé el aplicativo móvil en Kotlin conectado a MySQL para menús y pedidos en tiempo real.',
      'Implementé registro de usuarios, gestión de menús y comunicación interna dentro de la aplicación.',
      'Coordiné la presentación final y la documentación del proyecto asegurando claridad técnica.',
    ],
  stack: ['Kotlin', 'Android Studio', 'MySQL', 'Scrum'],
  },
  {
    company: 'Veterinaria FOX · Proyecto Integrador (3er Ciclo)',
    period: '2023',
    location: 'Lima, Perú',
    role: 'Diseñador UI y Frontend',
    summary:
      'E-commerce veterinario con carrito de compras y simulación de pagos centrado en la experiencia del usuario.',
    highlights: [
      'Diseñé la interfaz de usuario y construí el frontend priorizando accesibilidad y navegación clara.',
      'Implementé carrito de compras y simulaciones de pago con una tasa de éxito del 90% en pruebas.',
      'Integré HTML, CSS y Laravel para manejar la lógica del negocio y la persistencia de datos.',
    ],
    stack: ['HTML', 'CSS', 'Laravel', 'MySQL', 'UI Design'],
  },
];

function Experience() {
  return (
    <section id="experiencia" className="bg-surfaceAlt scroll-mt-24">
      <div className="section-wrapper space-y-12">
        <div className="mx-auto max-w-3xl text-center text-slate-200">
          <p className="eyebrow">Experiencia</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Pasantías y proyectos integradores con entregables reales</h2>
          <p className="mt-4 text-base text-slate-300">
            Planifico, desarrollo y lidero productos que combinan desarrollo móvil, web e integraciones con IA, asegurando métricas claras y adopción por parte de los usuarios.
          </p>
        </div>
        <div className="space-y-10">
          {experienceItems.map((item) => (
            <article
              key={item.company}
              className="relative overflow-hidden rounded-3xl border border-accent/25 bg-surface/90 p-8 text-slate-200 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/50"
            >
              <span className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
              <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-slate-400">{item.company} · {item.location}</p>
                </div>
                <span className="rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.period}
                </span>
              </header>
              <p className="mt-5 text-sm text-slate-300">{item.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
                {item.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-accent/30 bg-surface px-3 py-1">
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

export default Experience;
