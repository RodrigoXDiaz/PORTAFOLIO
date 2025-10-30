const values = [
  {
    title: 'Aplicaciones móviles Android/iOS',
    detail: 'Prototipo interfaces nativas con Kotlin y Flutter, integrando bases de datos y autenticación para experiencias fluidas.',
  },
  {
    title: 'Sistemas web con frameworks modernos',
    detail: 'Construyo aplicaciones en React, Django y Laravel conectadas a MySQL/PostgreSQL y servicios en la nube.',
  },
  {
    title: 'Integración de IA y APIs externas',
    detail: 'Incorporo ChatGPT API, Cloudinary y Google Login para crear experiencias inteligentes y seguras.',
  },
];

function About() {
  return (
    <section id="sobre-mi" className="bg-surface scroll-mt-24">
      <div className="section-wrapper grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Desarrollo experiencias híbridas: móvil nativo + web con IA</h2>
          <p className="text-base leading-relaxed text-slate-300">
            Estudiante de 6to ciclo en TECSUP con pasión por convertir retos educativos y empresariales en soluciones digitales. Lidero equipos bajo Scrum, documento procesos y priorizo la experiencia de usuario sin perder de vista métricas de impacto.
          </p>
          <div className="grid gap-4 rounded-3xl border border-accent/20 bg-surfaceAlt/80 p-6 text-sm text-slate-300 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">Mi forma de trabajar</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Inicio con entrevistas breves para alinear objetivos, métricas y stakeholders.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Diseño flujos de datos y maquetas antes de escribir código.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Integro APIs y servicios (ChatGPT, Google, Cloudinary) pensando en escalabilidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span>Documentación simple + handoff con tableros y sesiones de adopción.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent/90">
            {['Kotlin', 'Flutter', 'React', 'Django', 'Laravel', 'MySQL', 'PostgreSQL', 'ChatGPT API', 'Google Login', 'Cloudinary'].map((chip) => (
              <span key={chip} className="rounded-full border border-accent/30 bg-surface px-4 py-2">
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {values.map((item) => (
            <article key={item.title} className="rounded-3xl border border-accent/20 bg-surfaceAlt/80 p-6 text-slate-200 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/50">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
