function Contact() {
  return (
    <div className="section-wrapper relative flex flex-col gap-14 lg:flex-row lg:items-start">
      <div className="absolute -left-32 top-20 hidden h-64 w-64 rounded-full bg-accent/30 blur-3xl lg:block" aria-hidden="true" />
      <div className="relative lg:w-1/2">
        <p className="eyebrow text-accent/80">Contacto</p>
        <p className="mt-4 text-3xl font-semibold text-white">Hablemos de tu próximo proyecto.</p>
        <p className="mt-6 text-base text-slate-200">
          ¿Quieres colaborar o contar con mi apoyo? Escríbeme a jhonislachito657@gmail.com o visita mis perfiles en LinkedIn y GitHub.
        </p>
        <div className="mt-8 grid gap-4 text-sm text-white/80">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-soft">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">✉</span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Correo</p>
              <a href="mailto:jhonislachito657@gmail.com" className="text-sm font-semibold text-white hover:text-accent">
                jhonislachito657@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-soft">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">in</span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/rodrigodiazi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white hover:text-accent"
              >
                /rodrigodiazi
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-soft">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">GH</span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">GitHub</p>
              <a
                href="https://github.com/RodrigoXDiaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-white hover:text-accent"
              >
                @RodrigoXDiaz
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-soft">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">☎</span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">Teléfono</p>
              <a href="tel:+51946529608" className="text-sm font-semibold text-white hover:text-accent">
                +51 946 529 608
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2">
        <div className="glass-card border-white/15 bg-white/15 p-8">
          <h3 className="text-lg font-semibold text-white">Cómo trabajemos juntos</h3>
          <p className="mt-3 text-sm text-slate-200/85">
            Prefiero coordinar los primeros pasos por correo y una llamada breve. Así aseguramos que el alcance quede claro
            antes de iniciar la implementación o soporte.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-200/90">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span>Respondo a correos en menos de 24 horas. Incluye contexto, objetivos y plazos tentativos.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span>Podemos agendar una videollamada después del primer intercambio para alinear expectativas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span>Documentación, avances y soporte se registran en tableros compartidos y reportes periódicos.</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200/80">
            <span className="rounded-full border border-white/20 px-4 py-2">Email primero</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Disponibilidad remota</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Seguimiento semanal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
