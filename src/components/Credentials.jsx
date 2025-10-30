const credentials = [
  {
    title: 'Inglés Intermedio Completo',
    issuer: 'Conversa – TECSUP · 2025',
    detail: 'Comunicación efectiva en entornos académicos y laborales, con enfoque en proyectos tecnológicos.',
  },
  {
    title: 'Ciberseguridad',
    issuer: 'Cisco Networking Academy',
    detail: 'Fundamentos de redes seguras y buenas prácticas para proteger aplicaciones y datos.',
  },
  {
    title: 'Ciencia de Datos',
    issuer: 'Cisco Networking Academy',
    detail: 'Conceptos esenciales de analítica, exploración de datos y visualización aplicada.',
  },
  {
    title: 'Fusion 360 (Básico)',
    issuer: 'Autodesk · 2024',
    detail: 'Modelado 3D inicial para conceptualizar prototipos de productos y piezas.',
  },
  {
    title: 'Metodologías Ágiles y APIs',
    issuer: 'TECSUP',
    detail: 'Gestión de sprints con Scrum y consumo de APIs (ChatGPT, Google) en proyectos colaborativos.',
  },
];

function Credentials() {
  return (
    <section id="certificaciones" className="bg-surfaceAlt/70 scroll-mt-24">
      <div className="section-wrapper space-y-10">
        <div className="mx-auto max-w-3xl text-center text-slate-200">
          <p className="eyebrow">Certificaciones y formación</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Aprendizaje continuo y multidisciplinario</h2>
          <p className="mt-4 text-base text-slate-300">
            Refuerzo mis habilidades técnicas con certificaciones y cursos que potencian la entrega de soluciones integrales.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {credentials.map((item) => (
            <article key={item.title} className="rounded-3xl border border-accent/25 bg-surfaceAlt/80 p-6 text-slate-200 shadow-soft">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-accent/80">{item.issuer}</p>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
