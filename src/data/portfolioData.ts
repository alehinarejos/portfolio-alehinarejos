export interface Project {
  title: string;
  description: string;
  logo: string;
  linkText: string;
  link: string;
  tech?: string[];
  category?: string;
  role?: string;
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

export interface PortfolioData {
  main: MainInfo;
  socials: Socials;
  homepage: HomepageInfo;
  about: AboutInfo;
  projects: Project[];
  education: Education[];
  experience: WorkExperience[];
}

export const portfolioData: PortfolioData = {
  main: {
    title: "Portfolio by Alejandro Hinarejos",
    name: "Alejandro Hinarejos",
    email: "jandrohinarejos@gmail.com",
    logo: "/logo.png", // Pointing directly to copied public logo
  },

  socials: {
    github: "https://github.com/alehinarejos",
    linkedin: "https://linkedin.com/in/alejandro-hinarejos-gonzalez-0b7982276/",
    instagram: "https://instagram.com/alehinarejos"
  },

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
      title: "Notify My World Cup 2026",
      description:
        "Aplicación web interactiva para seguir el calendario oficial de la Copa Mundial de la FIFA 2026, simular resultados, calcular clasificaciones en tiempo real y programar recordatorios personalizados.",
      logo: "/notifymyworldcup.svg",
      linkText: "Ver Proyecto",
      link: "https://github.com/alehinarejos/NotifyMyWorldCup",
      tech: ["React 19", "TypeScript", "Vite", "Vanilla CSS", "Lucide React"],
      category: "FRONT_END",
      role: "CREADOR / DEV"
    },
    {
      title: "InfoEdu CV",
      description:
        "Buscador interactivo de centros educativos y FP en la Comunitat Valenciana. Construido con Next.js, Tailwind CSS y Leaflet para mapas dinámicos.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      linkText: "Ver Proyecto",
      link: "https://github.com/alehinarejos/infoeducv",
      tech: ["Next.js", "Tailwind CSS", "Leaflet", "TypeScript"],
      category: "FRONT_END",
      role: "CREADOR / DEV"
    },
    {
      title: "Dopamine Lock",
      description:
        "Aplicación de productividad para iOS diseñada para combatir la adicción a las redes sociales mediante refuerzo positivo y ejercicio físico.",
      logo: "https://images.icon-icons.com/2699/PNG/512/swift_logo_icon_168770.png",
      linkText: "Ver Proyecto",
      link: "https://github.com/alehinarejos/dopamine-blocker",
      tech: ["Swift", "SwiftUI", "iOS"],
      category: "MÓVIL_IOS",
      role: "DISEÑADOR / DEV"
    },
    {
      title: "Calculadora de propinas",
      description:
        "Proyecto de cálculo de propinas que demuestra mis habilidades en desarrollo web con React, TypeScript y TailwindCSS.",
      logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
      linkText: "Ver Proyecto",
      link: "https://github.com/alehinarejos/calculadora_propinas",
      tech: ["React", "TypeScript", "TailwindCSS"],
      category: "FRONT_END",
      role: "CREADOR / DEV"
    },
    {
      title: "Calorie Tracker",
      description:
        "Proyecto de gestión de calorías utilizando tecnologías como React, TypeScript y TailwindCSS.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      linkText: "Ver Proyecto",
      link: "https://github.com/alehinarejos/calorie-tracker",
      tech: ["React", "TypeScript", "TailwindCSS"],
      category: "FRONT_END",
      role: "CREADOR / DEV"
    },
    {
      title: "Portfolio",
      description: "Este sitio web es una muestra de mi trabajo y habilidades, incluyendo proyectos de desarrollo web, experiencia profesional y mi enfoque en crear aplicaciones interactivas y fáciles de usar.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      linkText: "Ver Proyecto",
      link: "https://github.com/alehinarejos/portfolio-alehinarejos",
      tech: ["React", "TypeScript", "TailwindCSS"],
      category: "DESARROLLO_WEB",
      role: "DISEÑADOR / DEV"
    }
  ],

  education: [
    {
      date: "2022 - 2024",
      title: "Técnico en Desarrollo de Aplicaciones Web (DAW)",
      subtitle: "IES Conselleria",
      description: "Desarrollo web adquiriendo conocimientos sólidos en JavaScript, HTML5, PHP y CSS."
    },
    {
      date: "2025",
      title: "React - Guía definitiva",
      subtitle: "Udemy",
      description: "Profundización en React: hooks, router, redux, next y desarrollo de proyectos reales."
    },
    {
      date: "2025",
      title: "Python TOTAL - Programador avanzado",
      subtitle: "Udemy",
      description: "Desde 0. Usando IA. 16 proyectos REALES. 160 ejercicios de código. Machine Learning, Data Science, Django, Juegos y más!"
    },
    {
      date: "2026",
      title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      subtitle: "Florida Universitaria",
      description: "Completado en modalidad semipresencial, especializándome en el desarrollo, implantación y mantenimiento de aplicaciones informáticas multiplataforma."
    }
  ],

  experience: [
    {
      date: "feb. 2024 - mar. 2025",
      title: "Desarrollador de full stack",
      company: "DIGITAL VALUE S.L",
      description: "He desarrollado diversas aplicaciones web utilizando el framework Mithril.js, logrando una experiencia de usuario fluida y un rendimiento eficiente. Además, tengo experiencia en la gestión y mantenimiento de portales web con Drupal, implementando soluciones personalizadas para la administración de contenidos y asegurando la seguridad y actualización de los sitios.\n\nHe trabajado en desarrollo y gestión de backend mediante APIs, mejorando la integración y funcionalidad de las aplicaciones web. También he diseñado, desarrollado y mantenido sitios web en WordPress, personalizando temas y plugins para satisfacer las necesidades específicas de los clientes, garantizando un rendimiento óptimo y una alta disponibilidad.\n\nAlgunos de los proyectos en los que he trabajado:\n- Creación de la página web del mercado de Villareal y su correcta implementación.\n- Elaboración de diferentes plantillas web.\n- Elaboración de varios kit digitales.\n- Desarrollo de una web de plantillas, para su uso como temas (estilo temas de wordpress).\n\nTecnologías empleadas: HTML5, CSS, JS, Mithril.js, PHP, WordPress, Drupal"
    }
  ]
};
