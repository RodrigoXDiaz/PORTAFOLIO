function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? <p className="eyebrow tracking-[0.3em] text-accent/90">{eyebrow}</p> : null}
      {title ? (
        <h2 className="text-3xl font-semibold text-midnight sm:text-4xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
