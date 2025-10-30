const highlights = [
  {
    value: '5 min',
    label: 'por PPTX generado',
    description: 'TecCreate automatiza presentaciones mediante prompts y API de ChatGPT.',
  },
  {
    value: '100%',
    label: 'login federado',
    description: 'Integración de Google Login para estudiantes y docentes de TECSUP.',
  },
  {
    value: '90%',
    label: 'éxito en pruebas',
    description: 'Veterinaria FOX alcanzó 90% de aprobaciones del carrito y pagos simulados.',
  },
  {
    value: 'Scrum',
    label: 'liderazgo de sprints',
    description: 'Coordinación end-to-end en TecEats con backlog, sprints y entregas puntuales.',
  },
];

function Stats() {
  return (
    <section aria-label="Logros clave" className="bg-surface">
      <div className="section-wrapper">
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surfaceAlt/80 p-8 text-slate-100 shadow-soft"
            >
              <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
              <div className="relative flex flex-col gap-3">
                <span className="text-4xl font-bold tracking-tight text-white">{item.value}</span>
                <p className="text-xs uppercase tracking-[0.25em] text-accent/80">{item.label}</p>
                <p className="text-sm text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
