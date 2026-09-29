# ✨ Alejandro Hinarejos — Interactive Portfolio (Liquid Glass Edition)

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Status-Live%20in%20Production-success?style=for-the-badge&logo=vercel&logoColor=white)
[![Live Demo](https://img.shields.io/badge/Demo-portfolio--alehinarejos.vercel.app-00D2FF?style=for-the-badge&logo=firefox-browser&logoColor=white)](https://portfolio-alehinarejos.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  Portafolio personal de alto impacto con diseño <strong>Liquid Glass</strong>, aceleración por GPU, atajos globales de teclado (<code>⌘K</code> / <code>Ctrl+K</code>), soporte multilingüe en tiempo real y dossier curricular descargable.
</p>

[🌐 **Explorar Demo en Vivo**](https://portfolio-alehinarejos.vercel.app/) • [📫 **Contacto Directo**](mailto:jandrohinarejos@gmail.com) • [💼 **LinkedIn**](https://linkedin.com/in/alejandro-hinarejos-gonzalez-0b7982276/)

</div>

---

## 🎯 Aspectos Destacados & Arquitectura

- 💎 **Estética Liquid Glass & Aceleración GPU:** Composiciones visuales de alto impacto (glassmorphism con desenfoque de fondo dinámico y saturación luminosa) optimizadas para sostener 60 FPS estables sin saturar el hilo principal.
- ⚡ **React 19 & TypeScript Estricto:** Código tipado de extremo a extremo con modularidad limpia para componentes, datos y tipografías.
- ⌨️ **Command Palette Global (`⌘K` / `Ctrl+K`):** Sistema de navegación instantáneo mediante atajos de teclado accesible en cualquier vista del portal.
- 🌍 **Internacionalización Dinámica (ES / EN):** Cambio fluido de idioma en cliente sin recarga de página.
- 📱 **Floating Dock Adaptativo:** Barra de navegación interactiva inspirada en macOS / iOS con microinteracciones y efectos hápticos visuales.
- 📄 **Dossier Curricular Integrado:** Visor y descarga directa del CV oficial en PDF con métricas profesionales y certificaciones verificadas.
- 📊 **GitHub Activity Tracker:** Consumo en vivo y visualización de la actividad en GitHub y proyectos de código abierto.

---

## 🛠️ Stack Tecnológico

| Área | Tecnologías |
|---|---|
| **Frontend Framework** | React 19, TypeScript, Vite |
| **Styling & Effects** | Liquid Glass CSS, Variables CSS3 Modernas, Animaciones aceleradas por hardware |
| **Iconografía** | Lucide React |
| **Despliegue & CI/CD** | Vercel (Continuous Deployment automático por rama `main`) |
| **SEO & OpenGraph** | Meta tags dinámicas, optimización de assets e imágenes en formato moderno |

---

## 📁 Estructura del Proyecto

```bash
portfolio-alehinarejos/
├── public/                     # Assets públicos estáticos, CV en PDF e iconos SVG
│   ├── Alejandro_Hinarejos_CV.pdf
│   └── previews/               # Previsualizaciones de proyectos reales
├── src/
│   ├── components/             # Componentes modulares (FloatingDock, GitHubActivity, etc.)
│   ├── data/
│   │   ├── portfolioData.ts    # Fuente de verdad de proyectos, experiencia y titulación
│   │   └── translations.ts     # Diccionario bilingüe reactivo (Español / Inglés)
│   ├── App.tsx                 # Core layout, navegación ⌘K y renderizado editorial
│   ├── App.css                 # Reglas generales de layout
│   ├── index.css               # Sistema de diseño Liquid Glass y temas cromáticos
│   └── main.tsx                # Entrypoint de React 19
├── package.json
└── vite.config.ts
```

---

## 🚀 Instalación y Desarrollo Local

### Requisitos previos
- **Node.js** `>= 18.0.0`
- **pnpm** o **npm**

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/alehinarejos/portfolio-alehinarejos.git
   cd portfolio-alehinarejos
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   # o bien: npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   pnpm run dev
   # o bien: npm run dev
   ```

4. Abrir en tu navegador:
   ```
   http://localhost:5173
   ```

### Scripts disponibles

| Script | Descripción |
|---|---|
| `pnpm run dev` | Inicia el entorno local de desarrollo con Hot Module Replacement (HMR) |
| `pnpm run build` | Compila TypeScript y genera el bundle estático de producción en `/dist` |
| `pnpm run preview` | Previsualiza el bundle compilado localmente |
| `pnpm run lint` | Ejecuta el análisis estático de código con ESLint |

---

## 👤 Sobre el Autor

**Alejandro Hinarejos González**  
*Full Stack & Cross-Platform Developer*  
Valencia, España 🇪🇸

- 🌐 **Web:** [portfolio-alehinarejos.vercel.app](https://portfolio-alehinarejos.vercel.app/)
- 💼 **LinkedIn:** [alejandro-hinarejos-gonzalez](https://linkedin.com/in/alejandro-hinarejos-gonzalez-0b7982276/)
- 🐙 **GitHub:** [@alehinarejos](https://github.com/alehinarejos)
- ✉️ **Email:** [jandrohinarejos@gmail.com](mailto:jandrohinarejos@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
