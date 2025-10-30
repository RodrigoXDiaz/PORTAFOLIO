const steps = [
  {
    title: 'Descubrimiento y definición',
    detail: 'Analizo requerimientos con usuarios finales, defino métricas de éxito y delineo arquitectura móvil/web.',
    time: 'Semana 1',
  },
  {
    title: 'Arquitectura y diseño de experiencia',
    detail: 'Modelo bases de datos SQL, rutas de navegación y wireframes que guían la experiencia en React o Kotlin.',
    time: 'Semana 2',
  },
  {
    title: 'Desarrollo e integración de servicios',
    detail: 'Implemento funcionalidades clave, integro APIs (ChatGPT, Google Login, Cloudinary) y sincronizo datos en tiempo real.',
    time: 'Semanas 3-4',
  },
  {
    title: 'Pruebas, despliegue y capacitación',
    detail: 'Ejecuto pruebas con usuarios, documento entregables, despliego en cloud (Render/Vercel) y capacito al equipo.',
    time: 'Semana 5+',
  },
];

function Approach() {
  return (
    <section aria-label="Proceso de trabajo" className="bg-gradient-to-b from-surface to-surfaceAlt/60">
      <div className="section-wrapper space-y-12">
        <div className="mx-auto max-w-3xl text-center text-slate-200">
          <p className="eyebrow">Proceso</p>
          <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Cómo convierto ideas en prototipos y lanzamientos</h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Transparencia, iteración y métricas para entregar software confiable y listo para escalar.
          </p>
        </div>
        <ol className="relative mx-auto max-w-5xl space-y-8 border-l border-accent/30 pl-6 lg:pl-10">
          {steps.map((step) => (
            <li key={step.title} className="group relative pl-4">
              <span className="absolute -left-[18px] flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-surfaceAlt/80 text-sm font-semibold text-accent shadow-soft group-hover:border-accent group-hover:text-white">
                {step.time}
              </span>
              <div className="mt-4 rounded-3xl border border-accent/25 bg-surfaceAlt/80 p-6 shadow-soft transition duration-200 group-hover:-translate-y-1 group-hover:border-accent/60 group-hover:shadow-glow">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Approach;
