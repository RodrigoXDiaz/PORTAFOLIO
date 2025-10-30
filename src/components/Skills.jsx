function Skills({ items }) {
  return (
    <div className="section-wrapper space-y-10">
      <div className="mx-auto max-w-3xl text-center text-slate-200">
        <p className="eyebrow">Habilidades</p>
        <p className="mt-3 text-3xl font-semibold text-white">Stack adaptable y orientado a resultados.</p>
        <p className="mt-4 text-base text-slate-300">
          Cada habilidad está respaldada por proyectos reales y una mentalidad de mejora continua.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-accent/25 bg-surfaceAlt/80 p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-glow"
          >
            <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-accent/15 transition duration-200 group-hover:scale-110" aria-hidden="true" />
            <h3 className="relative text-lg font-semibold text-white">{item.title}</h3>
            <p className="relative mt-3 text-sm text-slate-300">{item.description}</p>
            {item.detail ? (
              <p className="relative mt-2 text-xs text-slate-400">{item.detail}</p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Skills;
