# Portafolio — Rodrigo Díaz

Portafolio personal construido con Vite + React + Tailwind CSS para presentar el perfil de **Rodrigo Daniel Díaz Isla**, estudiante de 6to ciclo de Diseño y Desarrollo de Software en TECSUP. El sitio destaca la pasantía en TecCreate, proyectos integradores y habilidades en desarrollo móvil/web con IA.

## ✨ Características principales
- One-page responsive con navegación anclada, menú móvil y estados activos dinámicos.
- Secciones: Hero, Sobre mí, Logros, Proyecto destacado, Experiencia, Proyectos, Habilidades, Certificaciones, Contacto y Footer.
- Copy basado en el CV oficial: incluye pasantía EFSRT Tecsup, proyectos TecEats y Veterinaria FOX, además de certificaciones Cisco y Conversa.
- Imágenes optimizadas en `public/assets` y assets generados mediante `scripts/generate-assets.ps1`.
- Contacto directo vía `mailto:jhonislachito657@gmail.com`, enlaces a LinkedIn y GitHub.

## 🛠️ Tech stack
- [Vite](https://vitejs.dev/) + React (JSX)
- [Tailwind CSS](https://tailwindcss.com/)
- Node.js 18+

## 📦 Requisitos previos
- Node.js ≥ 18
- npm ≥ 9

## 🚀 Comandos disponibles
Todos los comandos se ejecutan desde la raíz del proyecto (`c:\Users\PC\Desktop\Portafolio`).

```bash
npm install      # instala dependencias
npm run dev      # modo desarrollo con hot reload
npm run build    # genera build optimizada en dist/
npm run preview  # sirve la carpeta dist en http://localhost:4173 (ideal para pruebas locales)
npm run start    # alias de preview
```

## 🧩 Estructura de carpetas clave
```
public/
  assets/
    gas.jpg
    logo.png
    og-image.png
    screenshot-1.png
  favicon.ico
  manifest.json
  PDF.pdf
src/
  components/
    About.jsx
    Contact.jsx
    Credentials.jsx
    Education.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    OtherProjects.jsx
    ProjectCard.jsx
    Skills.jsx
    Stats.jsx
  App.jsx
  main.jsx
scripts/
  generate-assets.ps1
```

## 📝 Proyecto destacado
```
TecCreate – Generador de Presentaciones con IA
Plataforma React + Django desarrollada durante la pasantía en EFSRT Tecsup.

Rol: Programador Full Stack
Funcionalidades: prompts dinámicos, API de ChatGPT, Cloudinary, Google Login, panel multi-rol.
Stack: React, Django, PostgreSQL, ChatGPT API, Cloudinary, Google OAuth, Tailwind CSS, Render/Vercel.
Impacto: presentaciones PPTX listas en minutos; automatización que reduce horas de trabajo manual.
```

## 🌐 Despliegue en Vercel
1. Haz push del repositorio a GitHub.
2. En [Vercel](https://vercel.com/new), elige **Importar proyecto** desde GitHub.
3. Configura:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Despliega. (El botón “Ver demo” se puede apuntar al dominio que configures al publicar.)
5. Para mantener los assets livianos en Vercel, recuerda excluir `node_modules`, `dist` y archivos temporales en un `.vercelignore` si es necesario.

## ✅ Buenas prácticas implementadas
- Meta tags SEO y Open Graph actualizadas para Rodrigo Díaz (`index.html` y `manifest.json`).
- Paleta azul midnight + acento naranja; tipografía [Inter](https://fonts.google.com/specimen/Inter).
- Animaciones y transiciones con Tailwind; `loading="lazy"` en imágenes.
- Accesibilidad: uso de `aria-` attributes, enlaces externos seguros y navegación teclado-friendly.

## 📄 Licencia
El proyecto se distribuye bajo licencia [MIT](LICENSE).

---
¿Quieres colaborar o contratarme? Escríbeme a [jhonislachito657@gmail.com](mailto:jhonislachito657@gmail.com) o conéctate en [LinkedIn](https://www.linkedin.com/in/rodrigodiazi) y [GitHub](https://github.com/RodrigoXDiaz).
