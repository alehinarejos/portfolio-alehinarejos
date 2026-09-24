export interface Project {
  title: string;
  description: string;
  logo: string;
  linkText: string;
  link: string;
  demoUrl?: string;
  previewImage?: string;
  tech?: string[];
  category?: string;
  role?: string;
  featured?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface Education {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface WorkExperience {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface MainInfo {
  title: string;
  name: string;
  email: string;
  logo: string;
}

export interface HomepageInfo {
  title: string;
  description: string;
}

export interface AboutInfo {
  title: string;
  description: string;
}

export interface ResumeInfo {
  fileUrl: string;
  fileName: string;
  fileSize: string;
  lastUpdated: string;
  role: string;
  summary: string;
  badges: string[];
  highlights: {
    label: string;
    value: string;
  }[];
}

export interface PortfolioData {
  main: MainInfo;
  socials: Socials;
  homepage: HomepageInfo;
  about: AboutInfo;
  stats: StatItem[];
  projects: Project[];
  education: Education[];
  experience: WorkExperience[];
  cv: ResumeInfo;
}

export const portfolioData: PortfolioData = {
  main: {
    title: "Portfolio by Alejandro Hinarejos",
    name: "Alejandro Hinarejos",
    email: "jandrohinarejos@gmail.com",
    logo: "/logo.png",
  },

  socials: {
    github: "https://github.com/alehinarejos",
    linkedin: "https://linkedin.com/in/alejandro-hinarejos-gonzalez-0b7982276/",
    instagram: "https://instagram.com/alehinarejos"
  },

  stats: [
    { value: "+2", label: "AÑOS EXPERIENCIA", detail: "Front-end & Back-end" },
    { value: "7+", label: "PROYECTOS OPEN SOURCE", detail: "Web, APIs & Mobile" },
    { value: "2", label: "TITULACIONES OFICIALES", detail: "CFGS DAM + CFGS DAW" },
    { value: "100%", label: "DISPONIBILIDAD", detail: "Incorporación inmediata" }
  ],

  homepage: {
    title: "Alejandro Hinarejos, \nFull Stack Developer",
    description:
      "Soy un desarrollador con experiencia tanto en front-end como en back-end. En el front-end, he trabajado con React.js, Mithril.js, TypeScript y TailwindCSS, desarrollando portales autogestionables, tiendas en línea y marketplaces. En el back-end, he utilizado PHP, Python, REST APIs y MySQL para gestionar bases de datos y el consumo de APIs. Tengo más de 2 años de experiencia en front-end y más de 1 año en back-end, siempre buscando mejorar y aprender nuevas metodologías.",
  },

  about: {
    title: "Hola, \nsoy Alejandro Hinarejos. \nVivo en Valencia, España.",
    description:
      "Soy un desarrollador con conocimientos tanto en desarrollo front-end como back-end. En el lado del front-end, he trabajado con tecnologías como React.js, Mithril.js, JavaScript, TypeScript, TailwindCSS y más. He pasado más tiempo desarrollando proyectos de front-end, incluyendo portales web autogestionables, varias tiendas en línea con sus características estándar e incluso un marketplace.\n\nSin embargo, también me interesé por el desarrollo back-end, ya que el aspecto del servidor también llamó mi atención. Esto me llevó a investigar y aprender diferentes metodologías y tecnologías. En el desarrollo back-end, he trabajado con tecnologías como PHP, Python, REST APIs y MySQL. Usando estas tecnologías, he colaborado con el desarrollo front-end para gestionar bases de datos de productos, hacer llamadas a APIs para recuperar contenido y manejar las respuestas de manera eficiente.\n\nTengo más de 2 años de experiencia en desarrollo front-end y más de 1 año en desarrollo back-end, siempre esforzándome por integrar ambos lo máximo posible. Disfruto aprender nuevas formas de trabajar y diferentes metodologías cada día para convertirme en un desarrollador más completo.",
  },

  projects: [
    {
      title: "Undercut F1",
      description:
        "Dashboard de telemetría y tiempos de Fórmula 1 en tiempo real con sector timings, deltas entre pilotos y mapas dinámicos de circuitos.",
      logo: "/undercut.svg",
      linkText: "Código GitHub",
      link: "https://github.com/alehinarejos/Undercut-F1",
      demoUrl: "https://undercut-f1-live.vercel.app/",
      previewImage: "/previews/undercut-f1-real.png",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "FRONT_END",
      role: "CREADOR / DEV",
      featured: true
    },
    {
      title: "InfoEdu CV",
      description:
        "Buscador interactivo de centros educativos y formación profesional en la Comunitat Valenciana con mapas dinámicos y geolocalización.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      linkText: "Código GitHub",
      link: "https://github.com/alehinarejos/infoeducv",
      demoUrl: "https://info-edu-cv.vercel.app",
      previewImage: "/previews/infoedu-cv-real.png",
      tech: ["Next.js", "Tailwind CSS", "Leaflet", "TypeScript"],
      category: "FRONT_END",
      role: "CREADOR / DEV",
      featured: true
    },
    {
      title: "Notify My World Cup 2026",
      description:
        "Aplicación web interactiva para seguir el calendario oficial de la Copa Mundial FIFA 2026, simular resultados, calcular clasificaciones y programar recordatorios.",
      logo: "/notifymyworldcup.svg",
      linkText: "Código GitHub",
      link: "https://github.com/alehinarejos/NotifyMyWorldCup",
      demoUrl: "https://notify-my-world-cup.vercel.app/",
      previewImage: "/previews/worldcup-2026-real.png",
      tech: ["React 19", "TypeScript", "Vite", "Vanilla CSS", "Lucide React"],
      category: "FRONT_END",
      role: "CREADOR / DEV",
      featured: true
    },
    {
      title: "Dopamine Lock",
      description:
        "Aplicación nativa para iOS diseñada para combatir la adicción a las pantallas mediante refuerzo positivo, retos de entrenamiento y temporizadores de foco.",
      logo: "https://images.icon-icons.com/2699/PNG/512/swift_logo_icon_168770.png",
      linkText: "Código GitHub",
      link: "https://github.com/alehinarejos/dopamine-blocker",
      previewImage: "/previews/dopamine-lock-real.png",
      tech: ["Swift", "SwiftUI", "iOS SDK"],
      category: "MÓVIL_IOS",
      role: "DISEÑADOR / DEV",
      featured: true
    },
    {
      title: "Calculadora de propinas",
      description:
        "Herramienta web ágil de cálculo y desglose automático de consumo y propinas con reactividad instantánea.",
      logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
      linkText: "Código GitHub",
      link: "https://github.com/alehinarejos/calculadora_propinas",
      previewImage: "/previews/tips-calculator.jpg",
      tech: ["React", "TypeScript", "TailwindCSS"],
      category: "FRONT_END",
      role: "CREADOR / DEV"
    },
    {
      title: "Calorie Tracker",
      description:
        "Aplicación web de control y seguimiento de balance calórico, ingesta de macronutrientes y actividad física.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      linkText: "Código GitHub",
      link: "https://github.com/alehinarejos/calorie-tracker",
      demoUrl: "https://calorie-tracker-peach.vercel.app",
      previewImage: "/previews/calorie-tracker-real.png",
      tech: ["React", "TypeScript", "TailwindCSS"],
      category: "FRONT_END",
      role: "CREADOR / DEV"
    },
    {
      title: "Portfolio Liquid Glass",
      description:
        "Portafolio interactivo con diseño Liquid Glass, tema en tiempo real, dossier de CV descargable y paleta de comandos ⌘K.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      linkText: "Código GitHub",
      link: "https://github.com/alehinarejos/portfolio-alehinarejos",
      demoUrl: "https://portfolio-alehinarejos.vercel.app",
      previewImage: "/previews/portfolio-glass-real.png",
      tech: ["React 19", "TypeScript", "Vite", "Liquid Glass CSS"],
      category: "FULL_STACK",
      role: "DISEÑADOR / DEV"
    }
  ],


  education: [
    {
      date: "2025 - Actualidad",
      title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      subtitle: "Florida Universitaria, Valencia",
      description: "Especialización en desarrollo, implantación y mantenimiento de aplicaciones informáticas multiplataforma, sistemas cliente-servidor y arquitectura de software."
    },
    {
      date: "2025",
      title: "Python TOTAL - Programador avanzado",
      subtitle: "Udemy",
      description: "Desde 0. Usando IA. 16 proyectos REALES. 160 ejercicios de código. Machine Learning, Data Science, Django, Juegos y más!"
    },
    {
      date: "2025",
      title: "React - Guía definitiva",
      subtitle: "Udemy",
      description: "Profundización en React: hooks, router, redux, next y desarrollo de proyectos reales."
    },
    {
      date: "09/2022 - 06/2024",
      title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
      subtitle: "IES Consellería, Valencia",
      description: "Desarrollo web adquiriendo conocimientos sólidos en JavaScript, HTML5, PHP, CSS y arquitectura MVC."
    }
  ],

  experience: [
    {
      date: "02/2024 - 03/2025",
      title: "Programador Full-Stack / Full Stack Developer",
      company: "Digital Value, Valencia",
      description:
        "• Desarrollé y desplegué ecosistemas web escalables con JavaScript (Mithril.js / React.js), WordPress y Drupal, reduciendo en aproximadamente un 20% los tiempos de carga de las aplicaciones.\n• Diseñé sistemas de componentes y plantillas reutilizables en JavaScript y HTML5, acelerando en torno a un 30% el tiempo de entrega de nuevos productos digitales.\n• Integré y consumí APIs REST bajo arquitectura MVC para automatizar flujos de datos entre sistemas, mejorando la fiabilidad de la sincronización de datos.\n• Utilicé Angular JS y herramientas de automatización de tareas como Grunt para optimizar el flujo de trabajo de desarrollo front-end.\n• Colaboré con equipos multidisciplinares para identificar y eliminar cuellos de botella técnicos, mejorando la estabilidad general de la plataforma."
    }
  ],

  cv: {
    fileUrl: "/Alejandro_Hinarejos_CV.pdf",
    fileName: "Alejandro_Hinarejos_CV.pdf",
    fileSize: "48 KB",
    lastUpdated: "2025 - 2026",
    role: "Desarrollador de Software / Full Stack Developer",
    summary:
      "Documento curricular oficial con experiencia en desarrollo Full-Stack (JavaScript, PHP, React, Angular, Laravel, Node.js), titulaciones DAM y DAW, integraciones de APIs y gestión de bases de datos.",
    badges: ["PDF OFICIAL", "INCORPORACIÓN INMEDIATA", "VEHÍCULO PROPIO", "INGLÉS INTERMEDIO (A2)"],
    highlights: [
      {
        label: "Perfil Profesional",
        value: "Desarrollador Full-Stack enfocado en soluciones escalables, optimización de tiempos de carga y flujos de datos automatizados."
      },
      {
        label: "Experiencia Laboral",
        value: "Full-Stack Developer en Digital Value (Mithril.js, React, WordPress, Drupal, APIs REST, Grunt)."
      },
      {
        label: "Formación Oficial",
        value: "CFGS DAM (Florida Universitaria) · CFGS DAW (IES Consellería) · Cursos OpenWebinars."
      },
      {
        label: "Disponibilidad",
        value: "Incorporación inmediata · Carné de conducir B y vehículo propio · Movilidad activa."
      }
    ]
  }
};
