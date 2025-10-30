function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-accent/20 bg-surface">
      <div className="section-wrapper flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">© {currentYear} Rodrigo Diaz · MIT License</p>
          <p className="text-xs text-slate-400">
            Portafolio construido con React + Tailwind · Integraciones Groq | Gemini | Render · Preparado para Vercel y AWS.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#inicio" className="rounded-full border border-white/10 px-4 py-2 text-white/80 transition hover:border-accent hover:text-accent">
            Inicio
          </a>
          <a href="#proyecto" className="rounded-full border border-white/10 px-4 py-2 text-white/80 transition hover:border-accent hover:text-accent">
            Proyecto
          </a>
          <a href="#habilidades" className="rounded-full border border-white/10 px-4 py-2 text-white/80 transition hover:border-accent hover:text-accent">
            Habilidades
          </a>
          <a href="#contacto" className="rounded-full border border-white/10 px-4 py-2 text-white/80 transition hover:border-accent hover:text-accent">
            Contacto
          </a>
          <a href="/LICENSE" className="underline-offset-4 transition hover:text-accent">
            Ver licencia
          </a>
          <a href="/PDF.pdf" className="underline-offset-4 transition hover:text-accent">
            CV actualizado
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
