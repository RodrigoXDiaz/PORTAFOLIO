function ProjectCard({ project }) {
  return (
    <article className="relative grid gap-12 rounded-[2.2rem] border border-slate-200 bg-white/95 p-10 shadow-glow lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-midnight text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight/90 to-accent/60 opacity-90" aria-hidden="true" />
        <div className="absolute -left-16 top-10 h-44 w-44 rounded-full bg-accent/40 blur-3xl" aria-hidden="true" />
        <div className="relative flex h-full flex-col justify-between gap-12 p-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Proyecto de titulación TECSUP
            </span>
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
              <p className="text-sm text-white/80">{project.summary}</p>
            </div>
            {project.previewHighlights ? (
              <ul className="space-y-3 text-sm text-white/80">
                {project.previewHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {project.spotlightStats ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {project.spotlightStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/20 bg-white/10 p-4 text-left text-white/80"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/70">{stat.label}</p>
                  {stat.helper ? <p className="mt-2 text-xs text-white/70">{stat.helper}</p> : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">En Producción</h3>
          <p className="mt-3 text-lg text-slate-700">
            Proyecto de titulación para TECSUP actualmente en operación con usuarios piloto y despliegues continuos en AWS y Vercel.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>{project.rolesCopy}</p>
            <p>{project.featuresCopy}</p>
            <p>{project.stackCopy}</p>
            <p>{project.achievementsCopy}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.techBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-midnight"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm">
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Roles</h4>
              <ul className="mt-3 space-y-1 text-slate-700">
                {project.roles.map((role) => (
                  <li key={role}>• {role}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 text-sm">
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Stack</h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-midnight shadow-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-midnight/10 bg-midnight/5 p-5">
            <h4 className="text-sm font-semibold text-midnight">Impacto e IA aplicada</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight"
            >
              {project.liveLabel || 'Ver demo'}
            </a>
          ) : null}
          {project.frontendRepoUrl ? (
            <a
              href={project.frontendRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-midnight px-6 py-3 text-sm font-semibold text-midnight transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {project.frontendRepoLabel || 'Frontend repo'}
            </a>
          ) : null}
          {project.backendRepoUrl ? (
            <a
              href={project.backendRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-midnight px-6 py-3 text-sm font-semibold text-midnight transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {project.backendRepoLabel || 'Backend repo'}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
