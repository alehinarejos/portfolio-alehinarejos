export type Language = 'es' | 'en';

export interface Translations {
  tagline: string;
  roleLabel: string;
  role: string;
  locationLabel: string;
  location: string;
  coreStackLabel: string;
  coreStack: string;
  directContactLabel: string;
  directContact: string;
  theme: string;
  accent: string;
  language: string;
  commands: string;
  share: string;
  copied: string;
  downloadCv: string;
  settingsTitle: string;
  settingsClose: string;
  
  // Stats
  stat1Label: string;
  stat1Detail: string;
  stat2Label: string;
  stat2Detail: string;
  stat3Label: string;
  stat3Detail: string;
  stat4Label: string;
  stat4Detail: string;

  // Projects
  projectsTitle: string;
  projectsSubtitle: string;
  projectsIndex: string;
  filterByStack: string;
  filterAll: string;
  filterFrontend: string;
  filterMobile: string;
  filterFullstack: string;
  liveDemo: string;
  sourceCode: string;
  viewChallenge: string;
  hideChallenge: string;
  challengeTitle: string;
  solutionTitle: string;
  keyTechTitle: string;
  showMore: string;
  showLess: string;

  // GitHub Section
  githubTitle: string;
  githubSubtitle: string;
  githubIndex: string;
  githubLoading: string;
  githubPublicRepos: string;
  githubFollowers: string;
  githubStars: string;
  githubViewProfile: string;
  githubLatestRepos: string;
  githubUpdated: string;

  // About & Experience
  aboutTitle: string;
  aboutSubtitle: string;
  experienceTitle: string;
  educationTitle: string;

  // CV Dossier
  cvTitle: string;
  cvSubtitle: string;
  cvIndex: string;
  cvOfficialPdf: string;
  cvQuickStats: string;
  cvAvailability: string;
  cvAvailabilityDetail: string;
  cvEducationCount: string;
  cvEducationDetail: string;
  cvDownloadBtn: string;
  cvViewBtn: string;

  // Tech Stack
  stackTitle: string;
  stackSubtitle: string;
  stackFrontend: string;
  stackBackend: string;
  stackTools: string;
  stackArchitecture: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactIndex: string;
  contactDirectEmail: string;
  contactCopyEmail: string;
  contactCopied: string;
  contactOpenGmail: string;
  contactFormTitle: string;
  contactNamePlaceholder: string;
  contactEmailPlaceholder: string;
  contactMessagePlaceholder: string;
  contactSendBtn: string;
  contactSending: string;
  contactSuccess: string;
  contactSuccessDetail: string;
  contactSendAnother: string;

  // Socials
  socialsTitle: string;
  socialsIndex: string;

  // Floating Dock
  dockTop: string;
  dockProjects: string;
  dockGithub: string;
  dockAbout: string;
  dockExperience: string;
  dockCv: string;
  dockStack: string;
  dockContact: string;

  // Footer
  footerRights: string;
  footerStackNotice: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    tagline: '[ PORTFOLIO / LIQUID GLASS EDITION 2026 ]',
    roleLabel: 'ROL / ESPECIALIDAD',
    role: 'Full Stack Developer',
    locationLabel: 'UBICACIÓN',
    location: 'Valencia, España',
    coreStackLabel: 'STACK PRINCIPAL',
    coreStack: 'JavaScript • React • PHP/Laravel • Node.js',
    directContactLabel: 'CONTACTO DIRECTO',
    directContact: 'jandrohinarejos@gmail.com',
    theme: 'TEMA:',
    accent: 'ACENTO:',
    language: 'IDIOMA:',
    commands: '⌘K / Comandos',
    share: 'COMPARTIR',
    copied: 'COPIADO',
    downloadCv: 'DESCARGAR CV',
    settingsTitle: 'PERSONALIZACIÓN & AJUSTES',
    settingsClose: 'Cerrar',

    stat1Label: 'Exp. en Empresa',
    stat1Detail: 'Digital Value (1 año 2 meses)',
    stat2Label: 'Certificaciones',
    stat2Detail: 'AWS, Microsoft MTA & AI',
    stat3Label: 'Titulaciones Oficiales',
    stat3Detail: 'CFGS DAM + CFGS DAW',
    stat4Label: 'Disponibilidad',
    stat4Detail: 'Incorporación inmediata',

    projectsTitle: 'Proyectos Destacados',
    projectsSubtitle: 'Soluciones reales en producción, arquitecturas web y aplicaciones móviles nativas',
    projectsIndex: '[ PROYECTOS_01 ]',
    filterByStack: 'FILTRAR POR STACK:',
    filterAll: 'TODOS',
    filterFrontend: 'FRONT-END',
    filterMobile: 'MÓVIL / IOS',
    filterFullstack: 'FULL-STACK',
    liveDemo: 'Demo en Vivo',
    sourceCode: 'Código GitHub',
    viewChallenge: 'Ver Reto Técnico & Arquitectura',
    hideChallenge: 'Ocultar Reto Técnico',
    challengeTitle: '🎯 Reto Técnico:',
    solutionTitle: '⚡ Solución Aplicada:',
    keyTechTitle: 'Stack clave utilizado:',
    showMore: 'Cargar más proyectos',
    showLess: 'Mostrar menos proyectos',

    githubTitle: 'Actividad en GitHub',
    githubSubtitle: 'Métricas en tiempo real, repositorios activos y proyectos de código abierto',
    githubIndex: '[ GITHUB_02 ]',
    githubLoading: 'Sincronizando con GitHub API...',
    githubPublicRepos: 'Repos Públicos',
    githubFollowers: 'Seguidores',
    githubStars: 'Total Stars',
    githubViewProfile: 'Ver perfil completo en GitHub',
    githubLatestRepos: 'Últimos repositorios actualizados',
    githubUpdated: 'Actualizado recientemente',

    aboutTitle: 'Sobre Mí y Trayectoria',
    aboutSubtitle: 'Enfoque práctico en arquitecturas frontend modernas y sistemas backend robustos',
    experienceTitle: 'Experiencia Laboral',
    educationTitle: 'Educación & Certificaciones',

    cvTitle: 'Currículum Vitae',
    cvSubtitle: 'Resumen profesional consolidado, certificaciones oficiales y experiencia laboral verificada',
    cvIndex: '[ CURRICULUM_05 ]',
    cvOfficialPdf: 'PDF Oficial',
    cvQuickStats: 'Resumen del Perfil',
    cvAvailability: '100% Inmediata',
    cvAvailabilityDetail: 'Disponibilidad de incorporación',
    cvEducationCount: '2 CFGS Oficiales',
    cvEducationDetail: 'Grados Superiores DAM + DAW',
    cvDownloadBtn: 'Descargar CV en PDF',
    cvViewBtn: 'Abrir en nueva pestaña',

    stackTitle: 'Stack Tecnológico',
    stackSubtitle: 'Herramientas, frameworks y tecnologías aplicadas en entornos reales',
    stackFrontend: 'Frontend & UI Systems',
    stackBackend: 'Backend, APIs & Bases de Datos',
    stackTools: 'Herramientas, DevOps & Testing',
    stackArchitecture: 'Arquitectura & Patrones',

    contactTitle: 'Contacto Directo',
    contactSubtitle: '¿Tienes una propuesta o quieres colaborar en un proyecto? Escríbeme y hablemos.',
    contactIndex: '[ CONTACTO_07 ]',
    contactDirectEmail: 'Correo Electrónico',
    contactCopyEmail: 'Copiar Correo',
    contactCopied: '¡Correo copiado!',
    contactOpenGmail: 'Abrir en Gmail',
    contactFormTitle: 'Enviar Mensaje Directo',
    contactNamePlaceholder: 'Tu nombre o empresa...',
    contactEmailPlaceholder: 'tu.email@empresa.com...',
    contactMessagePlaceholder: 'Cuéntame sobre tu proyecto, posición o propuesta...',
    contactSendBtn: 'Enviar Mensaje',
    contactSending: 'Enviando...',
    contactSuccess: '¡Mensaje recibido correctamente!',
    contactSuccessDetail: 'Gracias por ponerte en contacto. Te responderé en menos de 24 horas.',
    contactSendAnother: 'Enviar otro mensaje',

    socialsTitle: 'Redes y Perfiles',
    socialsIndex: '[ REDES_08 ]',

    dockTop: 'Inicio',
    dockProjects: 'Proyectos',
    dockGithub: 'GitHub',
    dockAbout: 'Sobre mí',
    dockExperience: 'Experiencia',
    dockCv: 'CV',
    dockStack: 'Stack',
    dockContact: 'Contacto',

    footerRights: 'Alejandro Hinarejos. Todos los derechos reservados.',
    footerStackNotice: 'Construido con React 19, TypeScript, Liquid Glass CSS & Apple Design System.'
  },
  en: {
    tagline: '[ PORTFOLIO / LIQUID GLASS EDITION 2026 ]',
    roleLabel: 'ROLE / SPECIALITY',
    role: 'Full Stack Developer',
    locationLabel: 'LOCATION',
    location: 'Valencia, Spain',
    coreStackLabel: 'CORE STACK',
    coreStack: 'JavaScript • React • PHP/Laravel • Node.js',
    directContactLabel: 'DIRECT CONTACT',
    directContact: 'jandrohinarejos@gmail.com',
    theme: 'THEME:',
    accent: 'ACCENT:',
    language: 'LANGUAGE:',
    commands: '⌘K / Commands',
    share: 'SHARE',
    copied: 'COPIED',
    downloadCv: 'DOWNLOAD CV',
    settingsTitle: 'CUSTOMIZATION & SETTINGS',
    settingsClose: 'Close',

    stat1Label: 'Industry Experience',
    stat1Detail: 'Digital Value (1 yr 2 mos)',
    stat2Label: 'Certifications',
    stat2Detail: 'AWS, Microsoft MTA & AI',
    stat3Label: 'Official Degrees',
    stat3Detail: 'HND Software (DAM + DAW)',
    stat4Label: 'Availability',
    stat4Detail: 'Immediate incorporation',

    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'Real production solutions, modern web architectures, and native mobile applications',
    projectsIndex: '[ PROJECTS_01 ]',
    filterByStack: 'FILTER BY STACK:',
    filterAll: 'ALL',
    filterFrontend: 'FRONT-END',
    filterMobile: 'MOBILE / IOS',
    filterFullstack: 'FULL-STACK',
    liveDemo: 'Live Demo',
    sourceCode: 'GitHub Code',
    viewChallenge: 'View Technical Challenge & Architecture',
    hideChallenge: 'Hide Technical Challenge',
    challengeTitle: '🎯 Technical Challenge:',
    solutionTitle: '⚡ Applied Solution:',
    keyTechTitle: 'Key stack utilized:',
    showMore: 'Load more projects',
    showLess: 'Show fewer projects',

    githubTitle: 'GitHub Activity',
    githubSubtitle: 'Real-time telemetry, active repositories, and open source contribution flow',
    githubIndex: '[ GITHUB_02 ]',
    githubLoading: 'Synchronizing with GitHub API...',
    githubPublicRepos: 'Public Repos',
    githubFollowers: 'Followers',
    githubStars: 'Total Stars',
    githubViewProfile: 'View full GitHub profile',
    githubLatestRepos: 'Recently updated repositories',
    githubUpdated: 'Updated recently',

    aboutTitle: 'About Me & Background',
    aboutSubtitle: 'Hands-on focus on modern frontend architectures and resilient backend systems',
    experienceTitle: 'Work Experience',
    educationTitle: 'Education & Certifications',

    cvTitle: 'Curriculum Vitae',
    cvSubtitle: 'Consolidated engineering profile, certified qualifications, and verified work history',
    cvIndex: '[ RESUME_05 ]',
    cvOfficialPdf: 'Official PDF',
    cvQuickStats: 'Candidate Overview',
    cvAvailability: '100% Immediate',
    cvAvailabilityDetail: 'Availability to start',
    cvEducationCount: '2 Higher Degrees',
    cvEducationDetail: 'Dual HND (DAM + DAW)',
    cvDownloadBtn: 'Download CV in PDF',
    cvViewBtn: 'Open in new tab',

    stackTitle: 'Tech Stack',
    stackSubtitle: 'Tools, frameworks, and languages implemented in production environments',
    stackFrontend: 'Frontend & UI Systems',
    stackBackend: 'Backend, APIs & Databases',
    stackTools: 'Tooling, DevOps & Testing',
    stackArchitecture: 'Architecture & Patterns',

    contactTitle: 'Direct Contact',
    contactSubtitle: 'Have an interesting opportunity or want to collaborate? Send a message and let\'s talk.',
    contactIndex: '[ CONTACT_07 ]',
    contactDirectEmail: 'Direct Email',
    contactCopyEmail: 'Copy Email',
    contactCopied: 'Email copied!',
    contactOpenGmail: 'Open in Gmail',
    contactFormTitle: 'Send Direct Message',
    contactNamePlaceholder: 'Your name or company...',
    contactEmailPlaceholder: 'your.email@company.com...',
    contactMessagePlaceholder: 'Tell me about your project, opening, or proposition...',
    contactSendBtn: 'Send Message',
    contactSending: 'Sending...',
    contactSuccess: 'Message received successfully!',
    contactSuccessDetail: 'Thank you for reaching out. I will reply to you within 24 hours.',
    contactSendAnother: 'Send another message',

    socialsTitle: 'Social & Profiles',
    socialsIndex: '[ SOCIAL_08 ]',

    dockTop: 'Top',
    dockProjects: 'Projects',
    dockGithub: 'GitHub',
    dockAbout: 'About',
    dockExperience: 'Experience',
    dockCv: 'CV',
    dockStack: 'Stack',
    dockContact: 'Contact',

    footerRights: 'Alejandro Hinarejos. All rights reserved.',
    footerStackNotice: 'Engineered with React 19, TypeScript, Liquid Glass CSS & Apple Design System.'
  }
};
