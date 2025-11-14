import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Stats from './components/Stats.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import OtherProjects from './components/OtherProjects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Credentials from './components/Credentials.jsx';

const project = {
  id: 'teccreate',
  title: 'TecCreate - Generador de Presentaciones con IA',
  summary:
    'Sistema administrativo multi-rol desplegado en Render para TECSUP. Genera presentaciones PowerPoint automáticas mediante IA (Groq y Gemini), con +1200 PPTs creadas y en uso activo.',
  rolesCopy: 'Roles funcionales: Usuario, Admin y Soporte con permisos diferenciados.',
  featuresCopy:
    'Flujos clave: generación automática con IA, sistema multi-rol, dashboards analíticos, despliegue en producción en Render.',
  stackCopy:
    'Tecnologías: Node.js, Vue.js, PostgreSQL, Groq, Gemini, Render, API REST.',
  achievementsCopy:
    'Resultados: +1200 presentaciones generadas en TECSUP, sistema multi-rol en producción desplegado en Render con alta disponibilidad. Implementación en curso con despliegues continuos en AWS y Vercel.',
  previewHighlights: [
    'Genera PPT automáticos con IA (Groq y Gemini) integrada al backend.',
    'Sistema multi-rol: Usuario, Admin y Soporte con permisos diferenciados.',
    'Desplegado en Render con PostgreSQL, APIs REST y alta escalabilidad.',
  ],
  spotlightStats: [
    { value: '1200+', label: 'PPTs generadas', helper: 'En uso activo en TECSUP con sistema TecCreate.' },
    { value: 'Render', label: 'desplegado en producción', helper: 'Alta disponibilidad y escalabilidad automática.' },
    { value: '3 roles', label: 'Usuario · Admin · Soporte', helper: 'Permisos diferenciados en todo el sistema.' },
    { value: 'IA Integrada', label: 'Groq + Gemini', helper: 'Generación automática de contenido y diseño profesional.' },
  ],
  techBadges: ['Node.js', 'Vue.js', 'PostgreSQL', 'Groq', 'Gemini', 'Render', 'API REST', 'Sistema Multi-Rol'],
  roles: ['Usuario', 'Admin', 'Soporte'],
  features: [
    'Generación automática de PPT mediante IA con Groq y Gemini integrados.',
    'Sistema multi-rol con permisos diferenciados: Usuario, Admin y Soporte.',
    'Desplegado en Render con PostgreSQL, APIs REST y alta escalabilidad.',
  ],
  stack: ['Node.js', 'Vue.js', 'PostgreSQL', 'Groq', 'Gemini', 'Render', 'API REST', 'Tailwind CSS', 'Sistema Multi-Rol'],
  imageAlt: 'TecCreate - Sistema generador de presentaciones con IA',
  liveUrl: 'https://www.teccreate.me/',
  liveLabel: 'Ver TecCreate en vivo',
  frontendRepoUrl: 'https://github.com/RodrigoXDiaz/TecCreateFrontedDeployed.git',
  frontendRepoLabel: 'Repo frontend (Vue.js)',
  backendRepoUrl: 'https://github.com/RodrigoXDiaz/TecCreateBackendDeployed.git',
  backendRepoLabel: 'Repo backend (Node.js)',
  imageSrc: '/assets/screenshot-1.png',
};

const skills = [
  {
    title: 'Desarrollo de aplicaciones móviles',
    description: 'Kotlin · Android Studio · Flutter/Dart',
    detail: 'Construyo apps Android nativas y prototipos multiplataforma con autenticación y datos en tiempo real.',
  },
  {
    title: 'Arquitectura de sistemas web',
    description: 'React · Django · Laravel',
    detail: 'Diseño interfaces modernas y APIs robustas conectadas a bases de datos SQL para proyectos académicos y pasantías.',
  },
  {
    title: 'Integración con servicios de IA',
    description: 'ChatGPT API · Automatización',
    detail: 'Genero contenido dinámico y workflows asistidos por IA que reducen tiempos operativos de horas a minutos.',
  },
  {
    title: 'Metodologías ágiles y liderazgo',
    description: 'Scrum · Gestión de sprints',
    detail: 'Coordino equipos estudiantiles, priorizo backlog y facilito entregas iterativas enfocadas en valor.',
  },
  {
    title: 'Bases de datos y backend',
    description: 'MySQL · PostgreSQL · SQL',
    detail: 'Modelo esquemas relacionales, escribo consultas optimizadas y conecto servicios móviles y web.',
  },
  {
    title: 'Adaptabilidad y trabajo bajo presión',
    description: 'Resolución de problemas',
    detail: 'Respondo a cambios rápidos manteniendo calidad y comunicación transparente con el equipo.',
  },
];

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyecto', href: '#proyecto' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
];

function App() {
  return (
    <div className="min-h-screen bg-midnight font-sans text-slate-200">
      <Navbar links={navLinks} />
      <main id="inicio">
        <Hero />
        <section id="logros" className="scroll-mt-24">
          <Stats />
        </section>
    <About />
    <OtherProjects />
    <section id="proyecto" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <SectionHeading
            eyebrow="Proyecto destacado"
            title="Generador de PPT con IA"
            description="Una solución full-stack que convierte ideas en presentaciones listas para compartir, combinando infraestructura estable con IA generativa."
          />
          <ProjectCard project={project} />
        </section>
        <Experience />
        <Education />
        <section id="habilidades" className="bg-surfaceAlt/60 scroll-mt-24">
          <Skills items={skills} />
        </section>
        <Credentials />
        <section id="contacto" className="bg-midnight text-white scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
