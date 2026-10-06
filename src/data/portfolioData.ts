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
    { value: "+1 año", label: "EXP. EN EMPRESA", detail: "Digital Value (1 año 2 meses)" },
    { value: "5", label: "CERTIFICACIONES", detail: "AWS, Microsoft MTA & AI" },
    { value: "2", label: "TITULACIONES OFICIALES", detail: "CFGS DAM + CFGS DAW" },
    { value: "100%", label: "DISPONIBILIDAD", detail: "Incorporación inmediata" }
  ],

  homepage: {
    title: "Alejandro Hinarejos, \nFull Stack Developer",
    description:
      "Desarrollador full stack afincado en Valencia, especializado en construir aplicaciones web escalables con JavaScript, Angular y React, e integrar APIs bajo arquitecturas MVC. Experiencia profesional en DIGITAL VALUE S.L reduciendo ~20% tiempos de carga y acelerando ~30% las entregas mediante componentes reutilizables. Conocimientos sólidos de backend (Laravel, Node.js) y bases de datos relacionales y no relacionales (MySQL, PostgreSQL, MongoDB).",
  },

  about: {
    title: "Hola, \nsoy Alejandro Hinarejos. \nVivo en Valencia, España.",
    titleEn: "Hello, \nI'm Alejandro Hinarejos. \nBased in Valencia, Spain.",
    description:
      "Soy desarrollador full stack afincado en Valencia, especializado en construir aplicaciones web escalables con JavaScript, Angular y React, e integrar APIs bajo arquitecturas MVC.\n\nComo Programador Full-Stack en Digital Value, he trabajado en el desarrollo y despliegue de ecosistemas web con WordPress y Drupal, reduciendo en torno a un 20% los tiempos de carga y acelerando en un 30% la entrega de nuevos productos digitales mediante sistemas de componentes reutilizables.\n\nComplemento mi perfil front-end con conocimientos prácticos de backend (Laravel, Node.js) y bases de datos relacionales y no relacionales (MySQL, PostgreSQL, MongoDB), desarrollados en proyectos personales y formativos.\n\nTecnologías: JavaScript · Angular · React · PHP · Laravel · Node.js · MySQL · PostgreSQL · MongoDB · HTML5 · CSS3 · APIs REST · MVC · WordPress · Drupal · Git.\n\nDisponible para nuevas oportunidades como desarrollador full stack. Abierto a hablar — puedes contactarme directamente por correo en jandrohinarejos@gmail.com.",
    descriptionEn:
      "I am a full stack developer based in Valencia, specialized in building scalable web applications with JavaScript, Angular, and React, and integrating APIs under MVC architectures.\n\nAs a Full-Stack Developer at Digital Value, I worked on the development and deployment of web ecosystems using WordPress and Drupal, reducing load times by ~20% and accelerating digital product delivery times by ~30% through reusable component systems.\n\nI complement my front-end profile with practical backend knowledge (Laravel, Node.js) and relational and non-relational databases (MySQL, PostgreSQL, MongoDB), developed across personal and educational projects.\n\nTechnologies: JavaScript · Angular · React · PHP · Laravel · Node.js · MySQL · PostgreSQL · MongoDB · HTML5 · CSS3 · REST APIs · MVC · WordPress · Drupal · Git.\n\nAvailable for new opportunities as a full stack developer. Open to talk — feel free to reach out directly at jandrohinarejos@gmail.com."
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
      date: "09/2025 - 06/2026",
      title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      subtitle: "Florida Universitària, Valencia",
      description: "Desarrollo de Aplicaciones Multiplataforma, Web Page, Digital/Multimedia and Information Resources Design.",
      descriptionEn: "Higher National Diploma in Cross-Platform Software Development, Web Page, Digital/Multimedia and Information Resources Design."
    },
    {
      date: "2022 - 2024",
      title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
      subtitle: "IES CONSELLERIA, Valencia",
      description: "Desarrollo de Aplicaciones Web: JavaScript, PHP, MySQL, arquitectura MVC, desarrollo front-end y back-end.",
      descriptionEn: "Higher National Diploma in Web Application Development: JavaScript, PHP, MySQL, MVC architecture, frontend and backend development."
    },
    {
      date: "09/2019 - 06/2021",
      title: "Bachillerato - Modalidad Tecnologías Científicas",
      subtitle: "Colegio Santísima Trinidad, Valencia",
      description: "Bachillerato con especialización en ciencias y tecnologías científicas.",
      descriptionEn: "High School Diploma, Scientific and Technological curriculum."
    },
    {
      date: "Certificación Oficial",
      title: "AWS Technical Essentials",
      subtitle: "Amazon Web Services (AWS)",
      description: "Fundamentos de computación en la nube, infraestructura, bases de datos y seguridad en AWS.",
      descriptionEn: "Cloud computing fundamentals, infrastructure, cloud databases, and security on AWS."
    },
    {
      date: "Certificación Oficial",
      title: "MTA: HTML5 Application Development Fundamentals",
      subtitle: "Microsoft",
      description: "Certificación oficial de Microsoft en desarrollo de aplicaciones web con HTML5, CSS3 y JavaScript.",
      descriptionEn: "Official Microsoft certification in web application development using HTML5, CSS3, and JavaScript."
    },
    {
      date: "Certificación Oficial",
      title: "MTA: Introduction to Programming Using HTML and CSS",
      subtitle: "Microsoft",
      description: "Certificación oficial de Microsoft en fundamentos de programación web con HTML y CSS.",
      descriptionEn: "Official Microsoft certification in web programming fundamentals using HTML and CSS."
    },
    {
      date: "Certificación Oficial",
      title: "Artificial Intelligence Fundamentals",
      subtitle: "Certificación Profesional",
      description: "Fundamentos de inteligencia artificial, modelos de machine learning y conceptos de aprendizaje automático.",
      descriptionEn: "Fundamentals of Artificial Intelligence, core machine learning models, and practical AI applications."
    },
    {
      date: "Certificación",
      title: "React - Guía definitiva: hooks router redux next +Proyectos",
      subtitle: "Udemy",
      description: "Especialización avanzada en React: custom hooks, react-router, Redux, Next.js y desarrollo de aplicaciones de producción.",
      descriptionEn: "Advanced React specialization: custom hooks, routing, Redux, Next.js, and production web applications."
    }
  ],

  experience: [
    {
      date: "02/2024 - 03/2025",
      title: "Desarrollador de full stack / Full Stack Developer",
      company: "DIGITAL VALUE S.L, Valencia (1 año 2 meses)",
      description:
        "• Desarrollé y desplegué ecosistemas web escalables con JavaScript (Mithril.js/React.js), WordPress y Drupal, reduciendo ~20% los tiempos de carga.\n• Diseñé sistemas de componentes y plantillas reutilizables, acelerando ~30% la entrega de nuevos productos digitales.\n• Integré APIs REST bajo arquitectura MVC para automatizar flujos de datos entre sistemas.\n• Utilicé Angular JS y Grunt para optimizar el flujo de trabajo front-end.",
      descriptionEn:
        "• Developed and deployed scalable web ecosystems with JavaScript (Mithril.js/React.js), WordPress, and Drupal, reducing ~20% load times.\n• Designed modular UI component systems and templates, accelerating digital product delivery times by ~30%.\n• Integrated REST APIs under MVC architecture to automate data flows between systems.\n• Leveraged AngularJS and Grunt to optimize the front-end development workflow."
    }
  ],

  cv: {
    fileUrl: "/Alejandro_Hinarejos_CV.pdf",
    fileName: "Alejandro_Hinarejos_CV.pdf",
    fileSize: "48 KB",
    lastUpdated: "2025 - 2026",
    role: "Full Stack Developer | JavaScript · Java · React · PHP/Laravel · Node.js | APIs REST & MVC",
    summary:
      "Desarrollador full stack afincado en Valencia con experiencia en DIGITAL VALUE S.L. Especializado en JavaScript, Angular, React, PHP/Laravel, Node.js, arquitecturas MVC y APIs REST. Doble titulación oficial DAM y DAW, y 5 certificaciones oficiales (AWS, Microsoft MTA y AI).",
    badges: ["INCORPORACIÓN INMEDIATA", "VEHÍCULO PROPIO", "INGLÉS INTERMEDIO (A2)", "VALENCIA, ESPAÑA"],
    highlights: [
      {
        label: "Perfil Profesional",
        value: "Full Stack Developer (JavaScript · Java · React · PHP/Laravel · Node.js · APIs REST & MVC · WebSockets · SignalR)."
      },
      {
        label: "Experiencia en Empresa",
        value: "Desarrollador full stack en DIGITAL VALUE S.L (1 año 2 meses · Reducción ~20% tiempos de carga, aceleración ~30% entregas con componentes reutilizables)."
      },
      {
        label: "Educación Oficial",
        value: "CFGS DAM (Florida Universitària, 2025-2026) · CFGS DAW (IES CONSELLERIA, 2022-2024) · Bachillerato Científico-Tecnológico (2019-2021)."
      },
      {
        label: "Certificaciones",
        value: "AWS Technical Essentials · Microsoft MTA HTML5 · Microsoft MTA HTML/CSS · Artificial Intelligence Fundamentals · React Avanzado."
      }
    ]
  }
};
