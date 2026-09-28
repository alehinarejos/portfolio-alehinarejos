export interface Project {
  title: string;
  description: string;
  descriptionEn?: string;
  challenge?: string;
  challengeEn?: string;
  solution?: string;
  solutionEn?: string;
  architecturePoints?: string[];
  architecturePointsEn?: string[];
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
  descriptionEn?: string;
}

export interface WorkExperience {
  date: string;
  title: string;
  company: string;
  description: string;
  descriptionEn?: string;
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
  titleEn?: string;
  description: string;
  descriptionEn?: string;
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
    titleEn: "Hello, \nI'm Alejandro Hinarejos. \nBased in Valencia, Spain.",
    description:
      "Soy un desarrollador con conocimientos sólidos tanto en desarrollo front-end como back-end. En el front-end, trabajo con React.js, TypeScript, Next.js y TailwindCSS, diseñando portales interactivos, paneles de datos y aplicaciones de alto rendimiento.\n\nEn el back-end, he trabajado con tecnologías como PHP, Python, REST APIs, Node.js y MySQL, gestionando bases de datos relacionales, autenticación y consumo eficiente de APIs de terceros.\n\nTengo más de 2 años de experiencia en front-end y más de 1 año en back-end, siempre buscando la máxima sincronía entre diseño, arquitectura escalable y rendimiento.",
    descriptionEn:
      "I am a software developer with solid experience across both frontend and backend engineering. On the frontend, I build with React.js, TypeScript, Next.js, and modern CSS architecture, delivering reactive dashboards, web applications, and seamless interfaces.\n\nOn the backend, I work with PHP, Python, REST APIs, Node.js, and MySQL to design database structures, optimize API consumption, and handle real-time data flows.\n\nWith over 2 years of frontend experience and 1+ years in backend development, I constantly pursue scalable system architectures, clean code patterns, and sub-second response times."
  },

  projects: [
    {
      title: "Undercut F1",
      description:
        "Dashboard de telemetría y tiempos de Fórmula 1 en tiempo real con sector timings, deltas entre pilotos y mapas dinámicos de circuitos.",
      descriptionEn:
        "Real-time Formula 1 telemetry dashboard featuring sector timings, live driver deltas, tire compound analysis, and dynamic circuit track maps.",
      challenge:
        "Procesar y calcular diferencias de tiempos (deltas) y telemetría de 20 monoplazas en intervalos de milisegundos sin provocar bloqueos en el hilo de renderizado de React ni caída de framerate en pantallas de alta tasa de refresco.",
      challengeEn:
        "Process and compute real-time telemetry deltas across 20 race cars in millisecond intervals without blocking React's render thread or dropping frame rates on high-refresh displays.",
      solution:
        "Se desacopló la ingesta de telemetría del árbol visual mediante transformadores de datos puros y actualizaciones por lotes. Se implementó memoización selectiva de sectores y cálculo de deltas con precisión temporal flotante.",
      solutionEn:
        "Decoupled telemetry ingestion from the visual component tree using pure data transformers and batched updates. Implemented selective sector memoization and high-precision floating time delta calculations.",
      architecturePoints: [
        "Ingesta y normalización de telemetría en tiempo real",
        "Virtualización y memoización de tablas de cronometraje",
        "Mapas de circuito vectoriales dinámicos con trazada activa"
      ],
      architecturePointsEn: [
        "Real-time telemetry ingestion and normalization",
        "Virtualized and memoized timing sector tables",
        "Dynamic SVG circuit maps with live track positioning"
      ],
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
      descriptionEn:
        "Interactive finder for educational institutions and vocational training centers in the Valencian Community with dynamic maps and geolocation.",
      challenge:
        "Renderizar más de 1.000 colegios, institutos y centros educativos en mapas interactivos de Leaflet en dispositivos móviles sin saturar la memoria ni ralentizar el filtrado de datos.",
      challengeEn:
        "Render over 1,000 schools, colleges, and training centers on interactive Leaflet maps on mobile devices without exhausting memory or lagging multi-attribute filtering.",
      solution:
        "Implementación de clusterización espacial de marcadores (Marker Clustering), carga bajo demanda de coordenadas y debounce reactivo en los filtros por municipio, modalidad y nivel formativo.",
      solutionEn:
        "Implemented geospatial marker clustering, on-demand coordinate fetching, and reactive debouncing across multi-criteria filters (municipality, degree, modality).",
      architecturePoints: [
        "Clusterización geoespacial optimizada para dispositivos de gama baja",
        "Filtrado instantáneo en memoria sin latencia de red",
        "Integración fluida con OpenStreetMap y geolocalización del navegador"
      ],
      architecturePointsEn: [
        "Geospatial clustering optimized for low-end devices",
        "Zero-latency in-memory multi-attribute filtering",
        "Seamless OpenStreetMap and browser geolocation integration"
      ],
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
      descriptionEn:
        "Interactive web application to track the FIFA World Cup 2026 schedule, simulate bracket outcomes, calculate group standings, and schedule match notifications.",
      challenge:
        "Gestionar el nuevo formato ampliado de 48 selecciones con cruces dinámicos de mejores terceros y simulación en tiempo real garantizando persistencia local inmediata y cero inconsistencias de estado.",
      challengeEn:
        "Handle the expanded 48-team FIFA format with complex dynamic best-third-place knockout pairings and real-time simulation while guaranteeing local persistence and zero state desync.",
      solution:
        "Diseño de un motor determinista de cálculo de cuadros en TypeScript puro con caché en LocalStorage y reactividad en tiempo real en React 19.",
      solutionEn:
        "Engineered a deterministic tournament bracket resolution engine in pure TypeScript with LocalStorage caching and instant React 19 state dispatch.",
      architecturePoints: [
        "Motor de resolución de llaves y clasificaciones determinista",
        "Caché offline reactiva sin necesidad de login",
        "Diseño adaptativo con arquitectura de componentes modular"
      ],
      architecturePointsEn: [
        "Deterministic tournament bracket calculation engine",
        "Offline-ready reactive caching requiring no authentication",
        "Responsive glassmorphism UI with modular components"
      ],
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
      descriptionEn:
        "Native iOS application designed to mitigate screen addiction through positive reinforcement, training challenges, and focus blocking timers.",
      challenge:
        "Implementar bloqueo y control de límites de uso de aplicaciones en iOS cumpliendo con las estrictas directivas de Sandbox y privacidad del ecosistema de Apple.",
      challengeEn:
        "Implement app shielding and screen time restriction policies on iOS while fully adhering to Apple's strict Privacy, Sandboxing, and FamilyControls guidelines.",
      solution:
        "Integración con Screen Time API / DeviceActivity framework y persistencia local cifrada en el dispositivo con arquitectura declarativa en SwiftUI.",
      solutionEn:
        "Integrated Screen Time API and DeviceActivity framework with local encrypted on-device persistence and declarative SwiftUI state management.",
      architecturePoints: [
        "Arquitectura nativa con SwiftUI y Swift Concurrency",
        "Cumplimiento 100% de normativas de privacidad de Apple",
        "Diseño sensorial háptico y retroalimentación interactiva"
      ],
      architecturePointsEn: [
        "Native SwiftUI architecture with Swift Concurrency",
        "100% compliance with Apple privacy and sandbox guidelines",
        "Haptic sensory feedback and interactive micro-animations"
      ],
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
      descriptionEn:
        "Agile web utility for calculating tip distribution and consumption splits with real-time reactive feedback.",
      challenge:
        "Cálculo continuo en milisegundos con redondeo monetario exacto libre de errores de coma flotante de JavaScript.",
      challengeEn:
        "Continuous sub-millisecond recalculation with exact monetary currency rounding free of JavaScript floating-point quirks.",
      solution:
        "Aritmética basada en enteros decimales y tipado estricto en TypeScript para una experiencia inmediata y sin lag.",
      solutionEn:
        "Implemented integer-based cents arithmetic and strict TypeScript contracts for immediate zero-lag calculation.",
      architecturePoints: [
        "Aritmética monetaria precisa libre de errores de punto flotante",
        "Interfaz intuitiva de un solo toque"
      ],
      architecturePointsEn: [
        "Precise currency math free of floating-point inaccuracies",
        "Single-touch reactive input flow"
      ],
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
      descriptionEn:
        "Web tracker for monitoring caloric surplus/deficit, macronutrient intake breakdown, and physical exercise logs.",
      challenge:
        "Gestión de estado mutable complejo con múltiples inputs de nutrientes asegurando persistencia entre sesiones.",
      challengeEn:
        "Complex mutable state management across multiple nutrient inputs ensuring persistence between sessions.",
      solution:
        "Uso de reducers personalizados y validación estricta de esquemas de datos con TypeScript y almacenamiento local.",
      solutionEn:
        "Leveraged custom state reducers and strict TypeScript schema validation backed by LocalStorage persistence.",
      architecturePoints: [
        "Cálculo de macros con actualización inmediata",
        "Persistencia automática en LocalStorage"
      ],
      architecturePointsEn: [
        "Instant recalculation of calories and macronutrients",
        "Automated LocalStorage session persistence"
      ],
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
      descriptionEn:
        "Interactive portfolio with Liquid Glass design, live theme switcher, downloadable CV dossier, and ⌘K command palette.",
      challenge:
        "Conseguir un efecto de vidrio líquido de alto impacto (glassmorphism con saturación y desenfoque dinámico) manteniendo 60 FPS estables.",
      challengeEn:
        "Achieve a high-impact liquid glass aesthetic with dynamic saturation and backdrop filters while maintaining solid 60 FPS.",
      solution:
        "Aceleración por GPU mediante transformaciones CSS3 3D, separación de capas de render y tipografía optimizada.",
      solutionEn:
        "Leveraged GPU compositing via 3D transforms, layer isolation, and Apple-grade typography stacks.",
      architecturePoints: [
        "Motor de luz ambiental animado por hardware",
        "Paleta de comandos ⌘K con atajos de teclado globales",
        "Internacionalización nativa en tiempo real (ES / EN)"
      ],
      architecturePointsEn: [
        "Hardware-accelerated ambient lighting engine",
        "Global keyboard shortcut ⌘K command menu",
        "Real-time client-side internationalization (ES / EN)"
      ],
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
      description: "Especialización en desarrollo, implantación y mantenimiento de aplicaciones informáticas multiplataforma, sistemas cliente-servidor y arquitectura de software.",
      descriptionEn: "Higher National Diploma in Cross-Platform Software Development. Specializing in client-server architecture, native mobile apps, and systems engineering."
    },
    {
      date: "2025",
      title: "Python TOTAL - Programador avanzado",
      subtitle: "Udemy",
      description: "Desde 0. Usando IA. 16 proyectos REALES. 160 ejercicios de código. Machine Learning, Data Science, Django, Juegos y más!",
      descriptionEn: "Comprehensive Python course: 16 real-world projects, data science, Django web applications, REST APIs, and machine learning fundamentals."
    },
    {
      date: "2025",
      title: "React - Guía definitiva",
      subtitle: "Udemy",
      description: "Profundización en React: hooks, router, redux, next y desarrollo de proyectos reales.",
      descriptionEn: "Advanced React engineering: custom hooks, modern routing, state management, Next.js, and production architecture."
    },
    {
      date: "09/2022 - 06/2024",
      title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
      subtitle: "IES Consellería, Valencia",
      description: "Desarrollo web adquiriendo conocimientos sólidos en JavaScript, HTML5, PHP, CSS y arquitectura MVC.",
      descriptionEn: "Higher National Diploma in Web Application Development. Core focus on JavaScript, PHP, MySQL, MVC architecture, and backend systems."
    }
  ],

  experience: [
    {
      date: "02/2024 - 03/2025",
      title: "Programador Full-Stack / Full Stack Developer",
      company: "Digital Value, Valencia",
      description:
        "• Desarrollé y desplegué ecosistemas web escalables con JavaScript (Mithril.js / React.js), WordPress y Drupal, reduciendo en aproximadamente un 20% los tiempos de carga de las aplicaciones.\n• Diseñé sistemas de componentes y plantillas reutilizables en JavaScript y HTML5, acelerando en torno a un 30% el tiempo de entrega de nuevos productos digitales.\n• Integré y consumí APIs REST bajo arquitectura MVC para automatizar flujos de datos entre sistemas, mejorando la fiabilidad de la sincronización de datos.\n• Utilicé Angular JS y herramientas de automatización de tareas como Grunt para optimizar el flujo de trabajo de desarrollo front-end.\n• Colaboré con equipos multidisciplinares para identificar y eliminar cuellos de botella técnicos, mejorando la estabilidad general de la plataforma.",
      descriptionEn:
        "• Engineered scalable web solutions with JavaScript (Mithril.js / React.js), WordPress, and Drupal, reducing application load times by ~20%.\n• Designed modular UI component systems and templates, accelerating digital product delivery time by ~30%.\n• Integrated and consumed REST APIs under MVC patterns to automate data synchronization pipelines across disparate services.\n• Leveraged AngularJS and task runners like Grunt to streamline frontend builds and continuous integration.\n• Collaborated with cross-functional teams to resolve technical bottlenecks and improve overall application stability."
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
