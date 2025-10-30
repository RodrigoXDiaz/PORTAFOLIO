function Education() {
  return (
    <section id="educacion" className="bg-surface scroll-mt-24">
      <div className="section-wrapper space-y-10">
        <div className="mx-auto max-w-3xl text-center text-slate-200">
          <p className="eyebrow">Educación</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Diseño y Desarrollo de Software · TECSUP</h2>
          <p className="mt-4 text-base text-slate-300">
            Estudiante de 6to ciclo (2023 – actualidad) impulsando proyectos que integran IA, experiencias móviles y plataformas web colaborativas.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Reconocido por liderazgo, adaptabilidad y trabajo bajo presión en entregables académicos y pasantías con resultados medibles.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-accent/25 bg-surfaceAlt/80 p-6 text-slate-200 shadow-soft">
            <h3 className="text-lg font-semibold text-white">Pasantía TecCreate (2025)</h3>
            <p className="mt-3 text-sm text-slate-300">
              Desarrollo de TecCreate, generador de presentaciones con IA integrado con React, Django, PostgreSQL, ChatGPT API, Cloudinary y Google Login. Automatiza la entrega de PPTX en minutos para docentes y estudiantes.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-accent/80">
              Pasantía EFSRT Tecsup · Impacto directo en procesos académicos.
            </p>
          </article>
          <article className="rounded-3xl border border-accent/25 bg-surfaceAlt/80 p-6 text-slate-200 shadow-soft">
            <h3 className="text-lg font-semibold text-white">Enfoque académico</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Desarrollo móvil nativo con Kotlin y prototipos multiplataforma en Flutter/Dart.</li>
              <li>• Construcción de sistemas web con React, Django, Laravel y bases de datos MySQL/PostgreSQL.</li>
              <li>• Metodologías ágiles, liderazgo de sprints y documentación orientada a resultados.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;
