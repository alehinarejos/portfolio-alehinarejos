import { useState, useEffect, useMemo, useRef } from 'react';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Share2,
  Terminal,
  Layers,
  MapPin,
  Send,
  FileDown,
  FileText,
  Eye,
  Command,
  Search,
  X,
  Code,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Filter,
  User,
  Briefcase,
  GraduationCap,
  Sun,
  Moon,
  Laptop,
  ChevronDown,
  ChevronUp,
  GitBranch,
  Palette
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { type Language, translations } from './data/translations';
import { FloatingDock } from './components/FloatingDock';
import { GitHubActivity } from './components/GitHubActivity';

type Theme = 'liquid' | 'slate' | 'frost';
type Accent = 'cyan' | 'purple' | 'orange' | 'emerald' | 'white';
type CategoryFilter = 'ALL' | 'FRONT_END' | 'MÓVIL_IOS' | 'FULL_STACK';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'slate') return 'slate';
    if (saved === 'frost' || saved === 'light') return 'frost';
    return 'liquid';
  });

  const [accent, setAccent] = useState<Accent>(() => {
    const saved = localStorage.getItem('portfolio-accent') as Accent;
    if (['cyan', 'purple', 'orange', 'emerald', 'white'].includes(saved)) return saved;
    return 'cyan';
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'es') return saved;
    return 'es';
  });

  const toggleLang = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const t = translations[lang];

  const [expandedChallenge, setExpandedChallenge] = useState<Record<number, boolean>>({});

  const toggleChallenge = (idx: number) => {
    setExpandedChallenge(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadedCV, setDownloadedCV] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');

  // Sincronizar tema del sistema en tiempo real si el usuario no ha seleccionado uno manualmente
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'frost' : 'liquid');
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Sincronizar tema en el DOM y persistir la selección manual
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Sincronizar color de acento dinámicamente en el DOM
  useEffect(() => {
    document.body.classList.remove(
      'accent-cyan',
      'accent-purple',
      'accent-orange',
      'accent-emerald',
      'accent-white',
      'accent-mono',
      'accent-blue',
      'accent-red'
    );
    document.body.classList.add(`accent-${accent}`);
    localStorage.setItem('portfolio-accent', accent);
  }, [accent]);

  // Cerrar panel de ajustes flotante al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    if (isSettingsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSettingsOpen]);

  // Global listener para Command Palette (⌘K o Ctrl+K) y tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandMenuOpen(false);
        setIsSettingsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(portfolioData.main.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPortfolioLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadCV = () => {
    setDownloadedCV(true);
    setTimeout(() => setDownloadedCV(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailForm.name && emailForm.email && emailForm.message) {
      const subject = encodeURIComponent(`Propuesta Profesional / Contacto Portfolio - ${emailForm.name}`);
      const body = encodeURIComponent(
        `Hola Alejandro,\n\nSoy ${emailForm.name} (${emailForm.email}).\n\nMensaje:\n${emailForm.message}\n\n---\nEnviado desde el formulario de tu portafolio.`
      );
      
      setSubmitted(true);
      window.location.href = `mailto:${portfolioData.main.email}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setSubmitted(false);
        setEmailForm({ name: '', email: '', message: '' });
      }, 3500);
    }
  };

  const scrollToSection = (id: string) => {
    setIsCommandMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtrado reactivo de proyectos
  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter(project => {
      if (selectedCategory === 'ALL') return true;
      return project.category === selectedCategory;
    });
  }, [selectedCategory]);

  // Conteo de proyectos por categoría para las etiquetas
  const categoryCounts = useMemo(() => {
    return {
      ALL: portfolioData.projects.length,
      FRONT_END: portfolioData.projects.filter(p => p.category === 'FRONT_END').length,
      MÓVIL_IOS: portfolioData.projects.filter(p => p.category === 'MÓVIL_IOS').length,
      FULL_STACK: portfolioData.projects.filter(p => p.category === 'FULL_STACK').length,
    };
  }, []);

  // Lista de comandos disponibles para la paleta ⌘K
  const commandItems = [
    {
      group: 'Navegación Rápida',
      items: [
        { label: 'Proyectos Destacados', icon: <Layers size={14} />, action: () => scrollToSection('proyectos'), tag: '[ SECCIÓN 01 ]' },
        { label: 'Sobre Mí / Perfil', icon: <User size={14} />, action: () => scrollToSection('sobre-mi'), tag: '[ SECCIÓN 02 ]' },
        { label: 'Experiencia Profesional', icon: <Briefcase size={14} />, action: () => scrollToSection('experiencia'), tag: '[ SECCIÓN 03 ]' },
        { label: 'Formación Académica', icon: <GraduationCap size={14} />, action: () => scrollToSection('educacion'), tag: '[ SECCIÓN 04 ]' },
        { label: 'Currículum Vitae (Dossier PDF)', icon: <FileText size={14} />, action: () => scrollToSection('curriculum'), tag: '[ SECCIÓN 05 ]' },
        { label: 'Especificaciones del Stack', icon: <Terminal size={14} />, action: () => scrollToSection('stack'), tag: '[ SECCIÓN 06 ]' },
        { label: 'Módulo de Contacto', icon: <Mail size={14} />, action: () => scrollToSection('contacto'), tag: '[ SECCIÓN 07 ]' }
      ]
    },
    {
      group: 'Acciones Rápidas',
      items: [
        {
          label: 'Descargar Currículum (PDF)',
          icon: <FileDown size={14} style={{ color: 'var(--accent-color)' }} />,
          action: () => {
            const link = document.createElement('a');
            link.href = portfolioData.cv.fileUrl;
            link.download = portfolioData.cv.fileName;
            link.click();
            handleDownloadCV();
            setIsCommandMenuOpen(false);
          },
          tag: 'PDF'
        },
        {
          label: 'Copiar Email (jandrohinarejos@gmail.com)',
          icon: <Copy size={14} />,
          action: () => {
            copyEmailToClipboard();
            setIsCommandMenuOpen(false);
          },
          tag: 'CLIPBOARD'
        },
        {
          label: 'Abrir WhatsApp (+34 633 344 337)',
          icon: <MessageCircle size={14} style={{ color: '#25D366' }} />,
          action: () => {
            window.open('https://wa.me/34633344337?text=Hola%20Alejandro,%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactar%20contigo.', '_blank');
            setIsCommandMenuOpen(false);
          },
          tag: 'DIRECT'
        },
        {
          label: 'Compartir enlace del portafolio',
          icon: <Share2 size={14} />,
          action: () => {
            copyPortfolioLink();
            setIsCommandMenuOpen(false);
          },
          tag: 'URL'
        }
      ]
    },
    {
      group: 'Tema Visual (Liquid Glass)',
      items: [
        { label: 'Tema Obsidian (Liquid Dark)', icon: <Moon size={14} />, action: () => { setTheme('liquid'); setIsCommandMenuOpen(false); }, tag: theme === 'liquid' ? 'ACTIVO' : '' },
        { label: 'Tema Pizarra (Slate Mate)', icon: <Laptop size={14} />, action: () => { setTheme('slate'); setIsCommandMenuOpen(false); }, tag: theme === 'slate' ? 'ACTIVO' : '' },
        { label: 'Tema Cristalino (Frost Ice)', icon: <Sun size={14} />, action: () => { setTheme('frost'); setIsCommandMenuOpen(false); }, tag: theme === 'frost' ? 'ACTIVO' : '' }
      ]
    },
    {
      group: 'Acento Cromático',
      items: [
        { label: 'Acento Cian Neón', icon: <span className="accent-btn-indicator cyan" />, action: () => { setAccent('cyan'); setIsCommandMenuOpen(false); }, tag: accent === 'cyan' ? 'ACTIVO' : '' },
        { label: 'Acento Púrpura Eléctrico', icon: <span className="accent-btn-indicator purple" />, action: () => { setAccent('purple'); setIsCommandMenuOpen(false); }, tag: accent === 'purple' ? 'ACTIVO' : '' },
        { label: 'Acento Naranja Solar', icon: <span className="accent-btn-indicator orange" />, action: () => { setAccent('orange'); setIsCommandMenuOpen(false); }, tag: accent === 'orange' ? 'ACTIVO' : '' },
        { label: 'Acento Esmeralda Cuántico', icon: <span className="accent-btn-indicator emerald" />, action: () => { setAccent('emerald'); setIsCommandMenuOpen(false); }, tag: accent === 'emerald' ? 'ACTIVO' : '' },
        { label: 'Acento Blanco Puro', icon: <span className="accent-btn-indicator white" />, action: () => { setAccent('white'); setIsCommandMenuOpen(false); }, tag: accent === 'white' ? 'ACTIVO' : '' }
      ]
    }
  ];

  const filteredCommandGroups = commandItems.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.label.toLowerCase().includes(commandQuery.toLowerCase()) ||
      group.group.toLowerCase().includes(commandQuery.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="portfolio-liquid-root">
      {/* 🔮 LIQUID GLASS AMBIENT LIGHT ENGINE */}
      <div className="liquid-ambient-backdrop" aria-hidden="true">
        <div className="liquid-orb liquid-orb-1" />
        <div className="liquid-orb liquid-orb-2" />
        <div className="liquid-orb liquid-orb-3" />
        <div className="liquid-orb liquid-orb-4" />
        <div className="liquid-noise-layer" />
      </div>

      <div className="app-container">

        {/* 📐 SECCIÓN HEADER EDITORIAL */}
        <header className="editorial-header">
          <div className="editorial-header-top">
            <div>
              <span className="mono-tag" style={{ marginBottom: '8px', display: 'block' }}>
                [ PORTFOLIO / LIQUID GLASS EDITION 2026 ]
              </span>
              <h1 className="editorial-title">
                {portfolioData.main.name.split(' ')[0]}<br />
                {portfolioData.main.name.split(' ')[1]}
              </h1>
            </div>

            {/* PANEL DE CONTROL TÉCNICO */}
            <div ref={settingsRef} className={`settings-panel ${isSettingsOpen ? 'mobile-expanded' : ''}`}>
              {/* BACKDROP OVERLAY FOR MOBILE */}
              {isSettingsOpen && (
                <div
                  className="settings-backdrop-overlay"
                  onClick={() => setIsSettingsOpen(false)}
                  aria-hidden="true"
                />
              )}

              <div className="settings-controls-group">
                {/* Mobile Drawer Header */}
                <div className="settings-modal-header">
                  <div className="settings-modal-handle" />
                  <div className="settings-modal-title-row">
                    <span className="settings-modal-title">
                      <Palette size={14} style={{ color: 'var(--accent-color)' }} />
                      {t.settingsTitle}
                    </span>
                    <button
                      onClick={() => setIsSettingsOpen(false)}
                      className="settings-modal-close-btn"
                      aria-label={t.settingsClose}
                      type="button"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                <div className="control-row">
                  <span className="control-label">{t.theme}</span>
                  <div className="control-options control-options-theme">
                    {(['liquid', 'slate', 'frost'] as Theme[]).map((thm) => (
                      <button
                        key={thm}
                        onClick={() => setTheme(thm)}
                        className={`control-btn ${theme === thm ? 'active' : ''}`}
                      >
                        {thm}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="control-row">
                  <span className="control-label">{t.accent}</span>
                  <div className="control-options control-options-accent">
                    {(['cyan', 'purple', 'orange', 'emerald', 'white'] as Accent[]).map((a) => (
                      <button
                        key={a}
                        onClick={() => setAccent(a)}
                        className={`control-btn control-btn-accent ${accent === a ? 'active' : ''}`}
                        title={a.toUpperCase()}
                      >
                        <span className={`accent-btn-indicator ${a}`} />
                        <span className="accent-btn-label">{a}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="control-row">
                  <span className="control-label">{t.language}</span>
                  <div className="control-options control-options-lang">
                    {(['es', 'en'] as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`control-btn ${lang === l ? 'active' : ''}`}
                        title={l === 'es' ? 'Español' : 'English'}
                      >
                        {l.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Acciones secundarias en móvil dentro del menú desplegable */}
                <div className="mobile-secondary-actions">
                  <button
                    onClick={copyPortfolioLink}
                    className="control-btn header-share-btn"
                  >
                    <Share2 size={12} />
                    {copiedLink ? t.copied : t.share}
                  </button>

                  <a
                    href={portfolioData.cv.fileUrl}
                    download={portfolioData.cv.fileName}
                    onClick={handleDownloadCV}
                    className="control-btn header-cv-btn"
                    title="Descargar Curriculum Vitae en PDF"
                  >
                    <FileDown size={12} style={{ color: 'var(--accent-color)' }} />
                    {t.downloadCv}
                  </a>
                </div>
              </div>

              {/* Acciones de cabecera */}
              <div className="header-actions-group">
                <button
                  onClick={() => setIsCommandMenuOpen(true)}
                  className="control-btn command-trigger-btn"
                  title="Abrir paleta de comandos rápida (⌘K)"
                  aria-label={t.commands}
                >
                  <Command size={12} className="command-icon-desktop" style={{ color: 'var(--accent-color)' }} />
                  <Search size={14} className="command-icon-mobile" style={{ color: 'var(--accent-color)' }} />
                  <span>{t.commands}</span>
                </button>

                <button
                  onClick={() => setIsSettingsOpen(prev => !prev)}
                  className={`control-btn settings-toggle-btn ${isSettingsOpen ? 'active' : ''}`}
                  title="Ajustes de personalización"
                  aria-label="Ajustes de personalización"
                  aria-expanded={isSettingsOpen}
                >
                  <Palette size={14} style={{ color: 'var(--accent-color)' }} />
                  <span className="settings-toggle-label">{t.accent} / {t.theme}</span>
                </button>

                <button
                  onClick={copyPortfolioLink}
                  className="control-btn header-share-btn desktop-only"
                >
                  <Share2 size={12} />
                  {copiedLink ? t.copied : t.share}
                </button>

                <a
                  href={portfolioData.cv.fileUrl}
                  download={portfolioData.cv.fileName}
                  onClick={handleDownloadCV}
                  className="control-btn header-cv-btn desktop-only"
                  title="Descargar Curriculum Vitae en PDF"
                >
                  <FileDown size={12} style={{ color: 'var(--accent-color)' }} />
                  {t.downloadCv}
                </a>
              </div>
            </div>
          </div>

          {/* 🧭 BARRA DE NAVEGACIÓN SUPERIOR / TOP HEADER NAVBAR */}
          <nav className="header-nav-bar" aria-label="Navegación principal">
            {[
              { id: 'proyectos', label: t.dockProjects, icon: Layers },
              { id: 'github', label: t.dockGithub, icon: GitBranch },
              { id: 'sobre-mi', label: t.dockAbout, icon: User },
              { id: 'experiencia', label: t.dockExperience, icon: Briefcase },
              { id: 'curriculum', label: t.dockCv, icon: FileText },
              { id: 'stack', label: t.dockStack, icon: Terminal },
              { id: 'contacto', label: t.dockContact, icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="header-nav-btn"
                >
                  <Icon size={13} style={{ color: 'var(--accent-color)' }} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* REJILLA DE METADATOS TÉCNICOS */}
          <div className="metadata-spec-grid">
            <div className="spec-item">
              <span className="spec-label">{t.roleLabel}</span>
              <span className="spec-value">
                <Briefcase size={12} style={{ color: 'var(--accent-color)' }} />
                {t.role}
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t.locationLabel}</span>
              <span className="spec-value">
                <MapPin size={12} style={{ color: 'var(--accent-color)' }} />
                {t.location}
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t.coreStackLabel}</span>
              <span className="spec-value">
                <Code size={12} style={{ color: 'var(--accent-color)' }} />
                {t.coreStack}
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-label">{t.directContactLabel}</span>
              <a
                href={`mailto:${portfolioData.main.email}`}
                className="spec-value spec-link"
                title={`Enviar correo a ${portfolioData.main.email}`}
              >
                <Mail size={12} style={{ color: 'var(--accent-color)' }} />
                {portfolioData.main.email}
              </a>
            </div>
          </div>

          {/* ⚡ IMPACT METRICS BAR (QUICK STATS LIQUID CARDS) */}
          <div className="stats-impact-grid">
            {[
              { value: '+2', label: t.stat1Label, detail: t.stat1Detail },
              { value: '7+', label: t.stat2Label, detail: t.stat2Detail },
              { value: '2', label: t.stat3Label, detail: t.stat3Detail },
              { value: '100%', label: t.stat4Label, detail: t.stat4Detail }
            ].map((stat, idx) => (
              <div key={idx} className="stat-impact-card">
                <div className="stat-card-glow" />
                <div className="stat-card-top">
                  <span className="stat-card-badge">[ STAT_0{idx + 1} ]</span>
                  <span className="stat-card-dot" />
                </div>
                <div className="stat-impact-value">{stat.value}</div>
                <div className="stat-impact-label">{stat.label}</div>
                <div className="stat-impact-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </header>

        {/* 📐 SECCIÓN PROYECTOS / FICHA TÉCNICA */}
        <section id="proyectos" style={{ marginBottom: '60px' }}>
          <div className="section-header-editorial">
            <div>
              <h2 className="section-title-editorial">
                <Layers size={18} style={{ color: 'var(--accent-color)' }} />
                {t.projectsTitle}
              </h2>
              <span className="section-subtitle-editorial">
                {t.projectsSubtitle}
              </span>
            </div>
            <span className="section-index">{t.projectsIndex}</span>
          </div>

          {/* 🏷️ FILTROS DE CATEGORÍA INTERACTIVOS */}
          <div className="project-filter-bar">
            <span className="filter-label">
              <Filter size={13} style={{ color: 'var(--accent-color)' }} />
              {t.filterByStack}
            </span>
            <div className="filter-buttons-wrap">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={`filter-pill-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
              >
                <span>{t.filterAll}</span>
                <span className="filter-pill-count">[{categoryCounts.ALL}]</span>
              </button>
              <button
                onClick={() => setSelectedCategory('FRONT_END')}
                className={`filter-pill-btn ${selectedCategory === 'FRONT_END' ? 'active' : ''}`}
              >
                <span>{t.filterFrontend}</span>
                <span className="filter-pill-count">[{categoryCounts.FRONT_END}]</span>
              </button>
              <button
                onClick={() => setSelectedCategory('MÓVIL_IOS')}
                className={`filter-pill-btn ${selectedCategory === 'MÓVIL_IOS' ? 'active' : ''}`}
              >
                <span>{t.filterMobile}</span>
                <span className="filter-pill-count">[{categoryCounts.MÓVIL_IOS}]</span>
              </button>
              <button
                onClick={() => setSelectedCategory('FULL_STACK')}
                className={`filter-pill-btn ${selectedCategory === 'FULL_STACK' ? 'active' : ''}`}
              >
                <span>{t.filterFullstack}</span>
                <span className="filter-pill-count">[{categoryCounts.FULL_STACK}]</span>
              </button>
            </div>
          </div>

          {/* LISTA DE PROYECTOS */}
          <div>
            {filteredProjects.slice(0, visibleCount).map((project, idx) => {
              const currentCat = project.category || "DEVELOPMENT";
              const currentRole = project.role || "FULL STACK DEV";
              const projectDesc = lang === 'en' && project.descriptionEn ? project.descriptionEn : project.description;
              const hasChallenge = Boolean(project.challenge || project.challengeEn);

              return (
                <article
                  key={project.title}
                  className="project-sheet project-animate-entrance"
                  style={{ '--index': idx } as React.CSSProperties}
                >

                  {/* Visual Render Card maquetado con vista previa real e interfaz técnica */}
                  <div className="project-render-container">
                    <div className="blueprint-overlay" />
                    <div className="blueprint-axis-x" />
                    <div className="blueprint-axis-y" />

                    <div className="blueprint-cropmark crop-tl" />
                    <div className="blueprint-cropmark crop-tr" />
                    <div className="blueprint-cropmark crop-bl" />
                    <div className="blueprint-cropmark crop-br" />

                    {project.previewImage ? (
                      /* Render con Mockup de UI Real y Barra de Navegador Liquid */
                      <div className="project-preview-frame">
                        <div className="project-preview-browser-bar">
                          <div className="traffic-lights">
                            <span className="traffic-dot red" />
                            <span className="traffic-dot yellow" />
                            <span className="traffic-dot green" />
                          </div>
                          <span className="browser-url-text">
                            {project.demoUrl
                              ? project.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
                              : `github.com/alehinarejos/${project.link.split('/').pop()}`}
                          </span>
                          <span className="browser-cat-badge">[ {currentCat} ]</span>
                        </div>

                        <div className="project-preview-img-wrap">
                          <img
                            src={project.previewImage}
                            alt={`Captura interactiva de ${project.title}`}
                            className="project-preview-img"
                            loading="lazy"
                          />
                          <div className="project-preview-glaze" />
                          <div className="project-preview-overlay-info">
                            <span className="project-preview-badge-scale">[ ESCALA 1:1 ]</span>
                            <span className="project-preview-badge-tech">{project.tech?.[0] || 'Vite'}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Fallback técnico con logo */
                      <div className="project-render-card">
                        <div className="project-render-header">
                          <span>[ REF_MODEL_0{idx + 1} ]</span>
                          <span>[ {currentCat} ]</span>
                        </div>

                        <div>
                          <div className="project-render-logo-wrap">
                            <img
                              src={project.logo}
                              alt={project.title}
                              className="project-render-logo"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
                              }}
                            />
                          </div>
                          <h3 className="project-render-title">{project.title}</h3>
                        </div>

                        <div className="project-render-footer">
                          <span>[ ESCALA 1:1 ]</span>
                          <span>[ {project.tech?.[0] || 'TSX'} ]</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technical Specifications Container */}
                  <div className="project-spec-container">
                    <div className="project-spec-meta">
                      <span className="mono-tag">[ {lang === 'en' ? 'TECHNICAL SPECIFICATIONS' : 'ESPECIFICACIONES TÉCNICAS'} ]</span>
                      <h3 className="project-spec-title">{project.title}</h3>
                      <p className="project-spec-description">{projectDesc}</p>

                      <table className="spec-data-table">
                        <tbody>
                          <tr>
                            <td className="label">{lang === 'en' ? 'Tech Stack:' : 'Tecnología:'}</td>
                            <td className="value">
                              {project.tech?.map((techItem, tIdx) => (
                                <span key={tIdx} className="tag-tech">{techItem}</span>
                              ))}
                            </td>
                          </tr>
                          <tr>
                            <td className="label">{lang === 'en' ? 'Role:' : 'Función:'}</td>
                            <td className="value">{currentRole}</td>
                          </tr>
                          <tr>
                            <td className="label">{lang === 'en' ? 'License:' : 'Código:'}</td>
                            <td className="value">Open Source</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* DUAL ACTION BUTTONS: GitHub Repo + Live Demo */}
                    <div className="project-actions-row">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="technical-link-btn"
                        title={lang === 'en' ? 'View repository on GitHub' : 'Ver repositorio en GitHub'}
                      >
                        <Code size={13} />
                        <span>{t.sourceCode}</span>
                        <ExternalLink size={12} />
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="technical-demo-btn"
                          title={lang === 'en' ? 'Explore live demo' : 'Explorar demostración en vivo'}
                        >
                          <Sparkles size={13} style={{ color: 'var(--accent-color)' }} />
                          <span>{t.liveDemo}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>

                    {/* ⚡ TECHNICAL CHALLENGE & ARCHITECTURAL CASE STUDY */}
                    {hasChallenge && (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleChallenge(idx)}
                          className={`project-challenge-btn ${expandedChallenge[idx] ? 'expanded' : ''}`}
                          title="Desplegar reto técnico y solución arquitectónica"
                        >
                          <Sparkles size={12} />
                          <span>
                            {expandedChallenge[idx] ? t.hideChallenge : t.viewChallenge}
                          </span>
                          {expandedChallenge[idx] ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                        </button>

                        {expandedChallenge[idx] && (
                          <div className="project-challenge-drawer">
                            <div className="challenge-block">
                              <span className="challenge-header-title">
                                {t.challengeTitle}
                              </span>
                              <p className="challenge-body-text">
                                {lang === 'en' && project.challengeEn ? project.challengeEn : project.challenge}
                              </p>
                            </div>

                            <div className="challenge-block">
                              <span className="challenge-header-title">
                                {t.solutionTitle}
                              </span>
                              <p className="challenge-body-text">
                                {lang === 'en' && project.solutionEn ? project.solutionEn : project.solution}
                              </p>
                            </div>

                            {((lang === 'en' && project.architecturePointsEn) || project.architecturePoints) && (
                              <div className="challenge-block">
                                <span className="challenge-header-title">
                                  {t.keyTechTitle}
                                </span>
                                <ul className="architecture-points-list">
                                  {(lang === 'en' && project.architecturePointsEn
                                    ? project.architecturePointsEn
                                    : project.architecturePoints
                                  )?.map((point, pIdx) => (
                                    <li key={pIdx}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                </article>
              );
            })}
          </div>

          {filteredProjects.length > 5 && (
            <div className="projects-control-bar">
              <div className="projects-status-indicator">
                <span>[ {lang === 'en' ? 'VISIBLE RECORDS: ' : 'REGISTROS VISIBLES: '}</span>
                <span className="indicator-number">
                  {Math.min(visibleCount, filteredProjects.length)} / {filteredProjects.length}
                </span>
                <span> ]</span>
              </div>
              <div className="projects-actions">
                {visibleCount < filteredProjects.length && (
                  <button
                    onClick={() => setVisibleCount(prev => prev + 5)}
                    className="control-action-btn"
                  >
                    {t.showMore} [ + ]
                  </button>
                )}
                {visibleCount > 5 && (
                  <button
                    onClick={() => setVisibleCount(5)}
                    className="control-action-btn"
                  >
                    {t.showLess} [ - ]
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* 🐙 SECCIÓN ACTIVIDAD GITHUB EN TIEMPO REAL */}
        <GitHubActivity username="alehinarejos" lang={lang} />

        {/* 📐 SECCIÓN DETALLES / ACERCA DE MÍ */}
        <section id="sobre-mi" style={{ marginBottom: '80px' }}>
          <div className="section-header-editorial">
            <h2 className="section-title-editorial">
              {t.aboutTitle}
            </h2>
            <span className="section-index">[ SOBRE_MI_03 ]</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="editorial-about-title">
              {(lang === 'en' && portfolioData.about.titleEn ? portfolioData.about.titleEn : portfolioData.about.title).replace(/\s*\n\s*/g, ' ')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {(lang === 'en' && portfolioData.about.descriptionEn ? portfolioData.about.descriptionEn : portfolioData.about.description).split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="editorial-about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 📐 SECCIÓN EXPERIENCIA Y EDUCACIÓN */}
        <section className="editorial-double-column" style={{ marginBottom: '60px' }}>

          {/* Columna Izquierda: Experiencia Laboral */}
          <div id="experiencia" className="column-editorial">
            <div className="section-header-editorial" style={{ marginBottom: '16px' }}>
              <h2 className="section-title-editorial">
                {t.experienceTitle}
              </h2>
              <span className="section-index">[ EXPERIENCIA_04 ]</span>
            </div>

            <div className="technical-timeline">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="timeline-editorial-item">
                  <div className="timeline-date-mono">
                    {exp.date}
                  </div>
                  <div className="timeline-detail-wrap">
                    <h4 className="timeline-title-editorial">{exp.title}</h4>
                    <span className="timeline-subtitle-editorial">{exp.company}</span>
                    <p className="timeline-desc-editorial">
                      {lang === 'en' && exp.descriptionEn ? exp.descriptionEn : exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Formación Académica */}
          <div id="educacion" className="column-editorial">
            <div className="section-header-editorial" style={{ marginBottom: '16px' }}>
              <h2 className="section-title-editorial">
                {t.educationTitle}
              </h2>
              <span className="section-index">[ FORMACION_05 ]</span>
            </div>

            <div className="technical-timeline">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="timeline-editorial-item">
                  <div className="timeline-date-mono">
                    {edu.date}
                  </div>
                  <div className="timeline-detail-wrap">
                    <h4 className="timeline-title-editorial">{edu.title}</h4>
                    <span className="timeline-subtitle-editorial">{edu.subtitle}</span>
                    <p className="timeline-desc-editorial">
                      {lang === 'en' && edu.descriptionEn ? edu.descriptionEn : edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* 📐 SECCIÓN CURRÍCULUM VITAE */}
        <section id="curriculum" style={{ marginBottom: '60px' }}>
          <div className="section-header-editorial">
            <h2 className="section-title-editorial">
              <FileText size={18} style={{ color: 'var(--accent-color)' }} />
              {t.cvTitle}
            </h2>
            <span className="section-index">{t.cvIndex}</span>
          </div>

          <div className="cv-dossier-card">
            <div className="blueprint-overlay" />
            <div className="blueprint-cropmark crop-tl" />
            <div className="blueprint-cropmark crop-tr" />
            <div className="blueprint-cropmark crop-bl" />
            <div className="blueprint-cropmark crop-br" />

            <div className="cv-dossier-header">
              <div className="cv-dossier-header-left">
                <span className="mono-tag">[ {t.cvOfficialPdf} ]</span>
                <h3 className="cv-dossier-title">{portfolioData.cv.role}</h3>
                <p className="cv-dossier-summary">{portfolioData.cv.summary}</p>
              </div>

              <div className="cv-dossier-meta-badge">
                <div className="cv-file-badge">
                  <span className="cv-file-ext">PDF</span>
                  <span className="cv-file-size">{portfolioData.cv.fileSize}</span>
                </div>
                <span className="cv-file-version">
                  {lang === 'en' ? 'UPDATED ' : 'ACTUALIZADO '}
                  {portfolioData.cv.lastUpdated}
                </span>
              </div>
            </div>

            <div className="cv-badges-row">
              {portfolioData.cv.badges.map((badge, idx) => (
                <span key={idx} className="cv-badge-item">
                  <span className="cv-badge-dot" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="cv-highlights-grid">
              {portfolioData.cv.highlights.map((item, idx) => (
                <div key={idx} className="cv-highlight-row">
                  <span className="cv-highlight-label">{item.label}</span>
                  <span className="cv-highlight-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="cv-actions-bar">
              <a
                href={portfolioData.cv.fileUrl}
                download={portfolioData.cv.fileName}
                onClick={handleDownloadCV}
                className="cv-download-primary-btn"
              >
                <FileDown size={15} />
                <span>{t.cvDownloadBtn}</span>
                <span className="cv-btn-kbd">[{portfolioData.cv.fileSize}]</span>
              </a>

              <a
                href={portfolioData.cv.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-view-secondary-btn"
              >
                <Eye size={15} />
                <span>{t.cvViewBtn}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* 📐 SECCIÓN TECH STACK / ESPECIFICACIONES TÉCNICAS */}
        <section id="stack" style={{ marginBottom: '60px' }}>
          <div className="section-header-editorial">
            <h2 className="section-title-editorial">
              <Terminal size={18} style={{ color: 'var(--accent-color)' }} />
              {t.stackTitle}
            </h2>
            <span className="section-index">[ STACK_06 ]</span>
          </div>

          <table className="skills-spec-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>{lang === 'en' ? 'Category' : 'Categoría'}</th>
                <th style={{ width: '70%' }}>{lang === 'en' ? 'Technologies & Infrastructure' : 'Tecnologías e Infraestructura'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="skill-category-name">{t.stackFrontend}</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">React.js</span>
                  <span className="skill-list-item">Next.js</span>
                  <span className="skill-list-item">TypeScript</span>
                  <span className="skill-list-item">TailwindCSS</span>
                  <span className="skill-list-item">JavaScript (ES6+)</span>
                  <span className="skill-list-item">HTML5 / Modern CSS</span>
                  <span className="skill-list-item">Mithril.js</span>
                </td>
              </tr>
              <tr>
                <td className="skill-category-name">{t.stackBackend}</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">Node.js</span>
                  <span className="skill-list-item">PHP</span>
                  <span className="skill-list-item">Python</span>
                  <span className="skill-list-item">REST APIs</span>
                  <span className="skill-list-item">MySQL</span>
                  <span className="skill-list-item">MongoDB</span>
                  <span className="skill-list-item">Java / Spring Boot</span>
                </td>
              </tr>
              <tr>
                <td className="skill-category-name">{lang === 'en' ? 'Mobile & Cross-Platform' : 'Mobile & Multiplataforma'}</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">Swift</span>
                  <span className="skill-list-item">SwiftUI</span>
                  <span className="skill-list-item">iOS SDK</span>
                  <span className="skill-list-item">Leaflet Maps</span>
                </td>
              </tr>
              <tr>
                <td className="skill-category-name">{t.stackTools}</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">Git / GitHub</span>
                  <span className="skill-list-item">Vercel</span>
                  <span className="skill-list-item">Vite</span>
                  <span className="skill-list-item">ESLint / Prettier</span>
                  <span className="skill-list-item">Docker</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 📐 SECCIÓN FORMULARIO DE CONTACTO TÉCNICO & WHATSAPP */}
        <section id="contacto" style={{ marginBottom: '60px' }}>
          <div className="section-header-editorial">
            <div>
              <h2 className="section-title-editorial">
                <Mail size={18} style={{ color: 'var(--accent-color)' }} />
                {t.contactTitle}
              </h2>
              <span className="section-subtitle-editorial">{t.contactSubtitle}</span>
            </div>
            <span className="section-index">{t.contactIndex}</span>
          </div>

          <form onSubmit={handleFormSubmit} className="technical-contact-form">
            <div className="contact-form-grid">
              <div className="form-group-technical">
                <label className="form-label-technical">{lang === 'en' ? 'Sender / Name' : 'Nombre o Empresa'}</label>
                <input
                  type="text"
                  className="form-input-technical"
                  placeholder={t.contactNamePlaceholder}
                  required
                  value={emailForm.name}
                  onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                />
              </div>
              <div className="form-group-technical">
                <label className="form-label-technical">{lang === 'en' ? 'Your Email' : 'Tu Correo Electrónico'}</label>
                <input
                  type="email"
                  className="form-input-technical"
                  placeholder={t.contactEmailPlaceholder}
                  required
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group-technical">
              <label className="form-label-technical">{lang === 'en' ? 'Message / Details' : 'Mensaje o Propuesta'}</label>
              <textarea
                className="form-input-technical form-textarea-technical"
                placeholder={t.contactMessagePlaceholder}
                required
                rows={4}
                value={emailForm.message}
                onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
              />
            </div>

            <button type="submit" className="form-submit-technical-btn">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Send size={12} />
                {t.contactSendBtn}
              </span>
            </button>
          </form>

          {/* DUAL DIRECT CONTACT ACTIONS: Email & WhatsApp */}
          <div className="contact-quick-actions-grid">
            {/* Direct Email Card */}
            <div onClick={copyEmailToClipboard} className="dashboard-mail-bar" role="button" tabIndex={0} title={t.contactCopyEmail}>
              <div className="mail-bar-details">
                <div className="mail-bar-icon-wrap">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="contact-bar-sub">{t.contactDirectEmail}</p>
                  <p className="contact-bar-main">{portfolioData.main.email}</p>
                </div>
              </div>
              <div style={{ color: 'var(--text-muted)' }}>
                {copied ? <Check size={16} style={{ color: 'var(--accent-color)' }} /> : <Copy size={14} />}
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <a
              href="https://wa.me/34633344337?text=Hola%20Alejandro,%20he%20visto%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactar%20contigo."
              target="_blank"
              rel="noopener noreferrer"
              className="dashboard-whatsapp-bar"
              title="Abrir chat directo en WhatsApp"
            >
              <div className="mail-bar-details">
                <div className="whatsapp-bar-icon-wrap">
                  <MessageCircle size={15} />
                </div>
                <div>
                  <p className="contact-bar-sub">{lang === 'en' ? 'Instant Chat / WhatsApp' : 'Chat Instantáneo / WhatsApp'}</p>
                  <p className="contact-bar-main">+34 633 344 337</p>
                </div>
              </div>
              <div className="contact-online-badge">
                <span className="online-dot" />
                <span>{lang === 'en' ? 'DIRECT' : 'DIRECTO'}</span>
                <ArrowUpRight size={13} />
              </div>
            </a>
          </div>
        </section>

        {/* 📐 SECCIÓN REDES SOCIALES */}
        <section style={{ marginBottom: '60px' }}>
          <div className="section-header-editorial">
            <h2 className="section-title-editorial">
              <Share2 size={18} style={{ color: 'var(--accent-color)' }} />
              {t.socialsTitle}
            </h2>
            <span className="section-index">{t.socialsIndex}</span>
          </div>

          <div className="socials-grid-technical">
            {[
              {
                name: 'GitHub',
                handle: '@alehinarejos',
                tag: '[ DEV / REPOSITORIOS ]',
                url: portfolioData.socials.github,
                description: lang === 'en'
                  ? 'Open source software, personal projects, collaborations, and active repositories.'
                  : 'Código abierto, proyectos personales, colaboraciones y repositorios de desarrollo continuo.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                )
              },
              {
                name: 'LinkedIn',
                handle: 'Alejandro Hinarejos González',
                tag: '[ PROFESIONAL / RED ]',
                url: portfolioData.socials.linkedin,
                description: lang === 'en'
                  ? 'Professional profile, engineering background, academic records, and network.'
                  : 'Perfil laboral, experiencia profesional, formación académica y red de contactos en tecnología.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )
              },
              {
                name: 'Instagram',
                handle: '@alehinarejos',
                tag: '[ SOCIAL / PERSONAL ]',
                url: portfolioData.socials.instagram,
                description: lang === 'en'
                  ? 'Digital lifestyle, creative projects, news, and personal interests.'
                  : 'Presencia digital, proyectos creativos, actualidad y faceta personal.',
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                )
              }
            ].map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-technical"
              >
                <div className="social-card-header">
                  <div className="social-card-icon-wrap">
                    {channel.icon}
                  </div>
                  <span className="mono-tag">{channel.tag}</span>
                </div>

                <div className="social-card-body">
                  <h3 className="social-card-title">{channel.name}</h3>
                  <span className="social-card-handle">{channel.handle}</span>
                  <p className="social-card-description">{channel.description}</p>
                </div>

                <div className="social-card-action">
                  <span>{lang === 'en' ? 'Visit profile' : 'Visitar perfil'}</span>
                  <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 📐 PIE DE PÁGINA */}
        <footer className="editorial-footer">
          <p>© {new Date().getFullYear()} {t.footerRights}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="footer-command-hint"
              title="Atajo de teclado ⌘K"
            >
              [ {t.commands} ]
            </button>
            <p>[ {t.footerStackNotice} ]</p>
          </div>
        </footer>

        {/* HUD Toast Alerts */}
        <div className={`toast ${copied ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: {t.contactCopied} ]</span>
        </div>

        <div className={`toast ${copiedLink ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: {lang === 'en' ? 'PORTFOLIO LINK COPIED' : 'ENLACE COPIADO'} ]</span>
        </div>

        <div className={`toast ${submitted ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: {lang === 'en' ? 'OPENING EMAIL CLIENT...' : 'ABRIENDO CLIENTE DE CORREO...'} ]</span>
        </div>

        <div className={`toast ${downloadedCV ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: {lang === 'en' ? 'CV DOWNLOAD STARTED' : 'DESCARGA DE CV INICIADA'} ]</span>
        </div>

      </div>

      {/* 🧭 APPLE-STYLE FLOATING DOCK */}
      <FloatingDock
        lang={lang}
        onToggleLang={toggleLang}
        onOpenCommand={() => setIsCommandMenuOpen(true)}
      />

      {/* 🚀 COMMAND PALETTE MODAL (⌘K / CTRL+K) */}
      {isCommandMenuOpen && (
        <div className="command-palette-backdrop" onClick={() => setIsCommandMenuOpen(false)}>
          <div
            className="command-palette-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Input Header */}
            <div className="command-input-wrap">
              <Search size={16} className="command-search-icon" />
              <input
                type="text"
                autoFocus
                placeholder={lang === 'en' ? 'Type a command or search sections...' : 'Escribe un comando o busca secciones...'}
                className="command-search-input"
                value={commandQuery}
                onChange={(e) => setCommandQuery(e.target.value)}
              />
              <button
                onClick={() => setIsCommandMenuOpen(false)}
                className="command-close-btn"
                title="Cerrar paleta"
              >
                <span className="command-kbd-esc">ESC</span>
                <X size={14} />
              </button>
            </div>

            {/* Command List Results */}
            <div className="command-results-list">
              {filteredCommandGroups.length === 0 ? (
                <div className="command-empty-state">
                  <span>{lang === 'en' ? `No commands found for "${commandQuery}"` : `No se encontraron comandos para "${commandQuery}"`}</span>
                </div>
              ) : (
                filteredCommandGroups.map((group, gIdx) => (
                  <div key={gIdx} className="command-group-block">
                    <div className="command-group-title">{group.group}</div>
                    <div className="command-group-items">
                      {group.items.map((item, iIdx) => (
                        <button
                          key={iIdx}
                          onClick={item.action}
                          className="command-item-btn"
                        >
                          <div className="command-item-left">
                            <span className="command-item-icon">{item.icon}</span>
                            <span className="command-item-label">{item.label}</span>
                          </div>
                          {item.tag && (
                            <span className="command-item-tag">{item.tag}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Quick Keys */}
            <div className="command-palette-footer">
              <span className="command-footer-tip">
                <span className="command-kbd">↑↓</span> {lang === 'en' ? 'navigate' : 'para navegar'}
              </span>
              <span className="command-footer-tip">
                <span className="command-kbd">↵</span> {lang === 'en' ? 'select' : 'para seleccionar'}
              </span>
              <span className="command-footer-tip">
                <span className="command-kbd">ESC</span> {lang === 'en' ? 'exit' : 'para salir'}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
