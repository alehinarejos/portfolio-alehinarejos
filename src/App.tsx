import { useState, useEffect, useMemo } from 'react';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Share2,
  Terminal,
  Layers,
  MapPin,
  Calendar,
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
  Laptop
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

type Theme = 'liquid' | 'slate' | 'frost';
type Accent = 'cyan' | 'purple' | 'orange' | 'emerald';
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
    if (['cyan', 'purple', 'orange', 'emerald'].includes(saved)) return saved;
    return 'cyan';
  });

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
      'accent-mono',
      'accent-blue',
      'accent-red'
    );
    document.body.classList.add(`accent-${accent}`);
    localStorage.setItem('portfolio-accent', accent);
  }, [accent]);

  // Global listener para Command Palette (⌘K o Ctrl+K) y tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandMenuOpen(false);
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
        { label: 'Acento Esmeralda Cuántico', icon: <span className="accent-btn-indicator emerald" />, action: () => { setAccent('emerald'); setIsCommandMenuOpen(false); }, tag: accent === 'emerald' ? 'ACTIVO' : '' }
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
            <div className="settings-panel">
              <div className="control-row">
                <span className="control-label">TEMA:</span>
                <div className="control-options">
                  {(['liquid', 'slate', 'frost'] as Theme[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`control-btn ${theme === t ? 'active' : ''}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="control-row">
                <span className="control-label">ACENTO:</span>
                <div className="control-options">
                  {(['cyan', 'purple', 'orange', 'emerald'] as Accent[]).map((a) => (
                    <button
                      key={a}
                      onClick={() => setAccent(a)}
                      className={`control-btn ${accent === a ? 'active' : ''}`}
                    >
                      <span className={`accent-btn-indicator ${a}`} />
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Acciones de cabecera */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '6px' }}>
                <button
                  onClick={() => setIsCommandMenuOpen(true)}
                  className="control-btn command-trigger-btn"
                  title="Abrir paleta de comandos rápida (⌘K)"
                >
                  <Command size={12} style={{ color: 'var(--accent-color)' }} />
                  <span>⌘K / COMANDOS</span>
                </button>

                <button
                  onClick={copyPortfolioLink}
                  className="control-btn"
                  style={{
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-glass)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: 'fit-content'
                  }}
                >
                  <Share2 size={12} />
                  {copiedLink ? 'COPIADO' : 'COMPARTIR'}
                </button>

                <a
                  href={portfolioData.cv.fileUrl}
                  download={portfolioData.cv.fileName}
                  onClick={handleDownloadCV}
                  className="control-btn"
                  style={{
                    border: '1px solid rgba(var(--accent-rgb), 0.5)',
                    background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.28), rgba(var(--accent-rgb), 0.12))',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: 'fit-content',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    fontWeight: 700
                  }}
                  title="Descargar Curriculum Vitae en PDF"
                >
                  <FileDown size={12} style={{ color: 'var(--accent-color)' }} />
                  DESCARGAR CV
                </a>
              </div>
            </div>
          </div>

          {/* REJILLA DE METADATOS TÉCNICOS */}
          <div className="metadata-spec-grid">
            <div className="spec-item">
              <span className="spec-label">ROL PROFESIONAL</span>
              <span className="spec-value">FULL STACK DEVELOPER</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">UBICACIÓN</span>
              <span className="spec-value">
                <MapPin size={12} style={{ color: 'var(--accent-color)' }} />
                VALENCIA, ES
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-label">DISPONIBILIDAD</span>
              <span className="spec-value">
                <span className="status-dot-pulse" />
                COLABORACIÓN ACTIVA
              </span>
            </div>
            <div className="spec-item">
              <span className="spec-label">EXPERIENCIA</span>
              <span className="spec-value">
                <Calendar size={12} style={{ color: 'var(--accent-color)' }} />
                +2A FRoNT / +1A BaCK
              </span>
            </div>
          </div>

          {/* ⚡ IMPACT METRICS BAR (QUICK STATS LIQUID CARDS) */}
          <div className="stats-impact-grid">
            {portfolioData.stats.map((stat, idx) => (
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
                PROYECTOS DESTACADOS
              </h2>
              <span className="section-subtitle-editorial">
                Soluciones reales en producción, arquitecturas web y aplicaciones móviles nativas
              </span>
            </div>
            <span className="section-index">[ FICHA_TÉCNICA_01 ]</span>
          </div>

          {/* 🏷️ FILTROS DE CATEGORÍA INTERACTIVOS */}
          <div className="project-filter-bar">
            <span className="filter-label">
              <Filter size={13} style={{ color: 'var(--accent-color)' }} />
              FILTRAR POR STACK:
            </span>
            <div className="filter-buttons-wrap">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={`filter-pill-btn ${selectedCategory === 'ALL' ? 'active' : ''}`}
              >
                <span>TODOS</span>
                <span className="filter-pill-count">[{categoryCounts.ALL}]</span>
              </button>
              <button
                onClick={() => setSelectedCategory('FRONT_END')}
                className={`filter-pill-btn ${selectedCategory === 'FRONT_END' ? 'active' : ''}`}
              >
                <span>FRONT-END</span>
                <span className="filter-pill-count">[{categoryCounts.FRONT_END}]</span>
              </button>
              <button
                onClick={() => setSelectedCategory('MÓVIL_IOS')}
                className={`filter-pill-btn ${selectedCategory === 'MÓVIL_IOS' ? 'active' : ''}`}
              >
                <span>MÓVIL / IOS</span>
                <span className="filter-pill-count">[{categoryCounts.MÓVIL_IOS}]</span>
              </button>
              <button
                onClick={() => setSelectedCategory('FULL_STACK')}
                className={`filter-pill-btn ${selectedCategory === 'FULL_STACK' ? 'active' : ''}`}
              >
                <span>FULL STACK</span>
                <span className="filter-pill-count">[{categoryCounts.FULL_STACK}]</span>
              </button>
            </div>
          </div>

          {/* LISTA DE PROYECTOS */}
          <div>
            {filteredProjects.slice(0, visibleCount).map((project, idx) => {
              const currentCat = project.category || "DEVELOPMENT";
              const currentRole = project.role || "FULL STACK DEV";

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
                      <span className="mono-tag">[ ESPECIFICACIONES TÉCNICAS ]</span>
                      <h3 className="project-spec-title">{project.title}</h3>
                      <p className="project-spec-description">{project.description}</p>

                      <table className="spec-data-table">
                        <tbody>
                          <tr>
                            <td className="label">Tecnología:</td>
                            <td className="value">
                              {project.tech?.map((t, tIdx) => (
                                <span key={tIdx} className="tag-tech">{t}</span>
                              ))}
                            </td>
                          </tr>
                          <tr>
                            <td className="label">Función:</td>
                            <td className="value">{currentRole}</td>
                          </tr>
                          <tr>
                            <td className="label">Código:</td>
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
                        title="Ver repositorio en GitHub"
                      >
                        <Code size={13} />
                        <span>{project.linkText || 'Código GitHub'}</span>
                        <ExternalLink size={12} />
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="technical-demo-btn"
                          title="Explorar demostración en vivo"
                        >
                          <Sparkles size={13} style={{ color: 'var(--accent-color)' }} />
                          <span>Demo en Vivo</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </article>
              );
            })}
          </div>

          {filteredProjects.length > 5 && (
            <div className="projects-control-bar">
              <div className="projects-status-indicator">
                <span>[ REGISTROS VISIBLES: </span>
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
                    Ver Más [ + ]
                  </button>
                )}
                {visibleCount < filteredProjects.length && (
                  <button
                    onClick={() => setVisibleCount(filteredProjects.length)}
                    className="control-action-btn"
                  >
                    Ver Todos [ ++ ]
                  </button>
                )}
                {visibleCount > 5 && (
                  <button
                    onClick={() => setVisibleCount(5)}
                    className="control-action-btn"
                  >
                    Ver Menos [ - ]
                  </button>
                )}
              </div>
            </div>
          )}
        </section>

        {/* 📐 SECCIÓN DETALLES / ACERCA DE MÍ */}
        <section id="sobre-mi" style={{ marginBottom: '80px' }}>
          <div className="section-header-editorial">
            <h2 className="section-title-editorial">
              SOBRE MÍ
            </h2>
            <span className="section-index">[ PERFIL_02 ]</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 className="editorial-about-title">
              {portfolioData.about.title.replace(/\n/g, ' ')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {portfolioData.about.description.split('\n\n').map((paragraph, idx) => (
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
                EXPERIENCIA PROFESIONAL
              </h2>
              <span className="section-index">[ TRAYECTORIA_03 ]</span>
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
                    <p className="timeline-desc-editorial">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Formación Académica */}
          <div id="educacion" className="column-editorial">
            <div className="section-header-editorial" style={{ marginBottom: '16px' }}>
              <h2 className="section-title-editorial">
                FORMACIÓN ACADÉMICA
              </h2>
              <span className="section-index">[ HISTORIAL_04 ]</span>
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
                    <p className="timeline-desc-editorial">{edu.description}</p>
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
              CURRÍCULUM VITAE
            </h2>
            <span className="section-index">[ EXPEDIENTE_05 ]</span>
          </div>

          <div className="cv-dossier-card">
            <div className="blueprint-overlay" />
            <div className="blueprint-cropmark crop-tl" />
            <div className="blueprint-cropmark crop-tr" />
            <div className="blueprint-cropmark crop-bl" />
            <div className="blueprint-cropmark crop-br" />

            <div className="cv-dossier-header">
              <div className="cv-dossier-header-left">
                <span className="mono-tag">[ EXPEDIENTE PROFESIONAL / VERSIÓN OFICIAL ]</span>
                <h3 className="cv-dossier-title">{portfolioData.cv.role}</h3>
                <p className="cv-dossier-summary">{portfolioData.cv.summary}</p>
              </div>

              <div className="cv-dossier-meta-badge">
                <div className="cv-file-badge">
                  <span className="cv-file-ext">PDF</span>
                  <span className="cv-file-size">{portfolioData.cv.fileSize}</span>
                </div>
                <span className="cv-file-version">ACTUALIZADO {portfolioData.cv.lastUpdated}</span>
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
                <span>Descargar Currículum (PDF)</span>
                <span className="cv-btn-kbd">[{portfolioData.cv.fileSize}]</span>
              </a>

              <a
                href={portfolioData.cv.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-view-secondary-btn"
              >
                <Eye size={15} />
                <span>Visualizar en Navegador</span>
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
              ESPECIFICACIONES DEL STACK
            </h2>
            <span className="section-index">[ SISTEMA_06 ]</span>
          </div>

          <table className="skills-spec-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Categoría</th>
                <th style={{ width: '70%' }}>Tecnologías e Infraestructura</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="skill-category-name">Front-end Development</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">React.js</span>
                  <span className="skill-list-item">Mithril.js</span>
                  <span className="skill-list-item">TypeScript</span>
                  <span className="skill-list-item">TailwindCSS</span>
                  <span className="skill-list-item">JavaScript (ES6+)</span>
                  <span className="skill-list-item">HTML5 / CSS3</span>
                </td>
              </tr>
              <tr>
                <td className="skill-category-name">Back-end Development</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">Java</span>
                  <span className="skill-list-item">Spring Boot</span>
                  <span className="skill-list-item">PHP</span>
                  <span className="skill-list-item">Python</span>
                  <span className="skill-list-item">REST APIs</span>
                  <span className="skill-list-item">MySQL</span>
                  <span className="skill-list-item">MongoDB</span>
                  <span className="skill-list-item">Node.js</span>
                </td>
              </tr>
              <tr>
                <td className="skill-category-name">Mobile & Multiplataforma</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">Swift</span>
                  <span className="skill-list-item">SwiftUI</span>
                  <span className="skill-list-item">iOS SDK</span>
                  <span className="skill-list-item">Leaflet Maps</span>
                </td>
              </tr>
              <tr>
                <td className="skill-category-name">Entorno & Despliegue</td>
                <td className="skill-list-mono">
                  <span className="skill-list-item">Git / GitHub</span>
                  <span className="skill-list-item">Vercel</span>
                  <span className="skill-list-item">Vite</span>
                  <span className="skill-list-item">ESLint</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 📐 SECCIÓN FORMULARIO DE CONTACTO TÉCNICO & WHATSAPP */}
        <section id="contacto" style={{ marginBottom: '60px' }}>
          <div className="section-header-editorial">
            <h2 className="section-title-editorial">
              MÓDULO DE CONTACTO
            </h2>
            <span className="section-index">[ COMUNICACIÓN_07 ]</span>
          </div>

          <form onSubmit={handleFormSubmit} className="technical-contact-form">
            <div className="contact-form-grid">
              <div className="form-group-technical">
                <label className="form-label-technical">Remitente / Nombre</label>
                <input
                  type="text"
                  className="form-input-technical"
                  placeholder="Nombre completo"
                  required
                  value={emailForm.name}
                  onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                />
              </div>
              <div className="form-group-technical">
                <label className="form-label-technical">Correo de Respuesta</label>
                <input
                  type="email"
                  className="form-input-technical"
                  placeholder="email@example.com"
                  required
                  value={emailForm.email}
                  onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group-technical">
              <label className="form-label-technical">Mensaje / Especificación</label>
              <textarea
                className="form-input-technical form-textarea-technical"
                placeholder="Detalla tu propuesta o consulta técnica..."
                required
                rows={4}
                value={emailForm.message}
                onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
              />
            </div>

            <button type="submit" className="form-submit-technical-btn">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Send size={12} />
                Enviar mensaje
              </span>
            </button>
          </form>

          {/* DUAL DIRECT CONTACT ACTIONS: Email & WhatsApp */}
          <div className="contact-quick-actions-grid">
            {/* Direct Email Card */}
            <div onClick={copyEmailToClipboard} className="dashboard-mail-bar" role="button" tabIndex={0} title="Copiar correo electrónico al portapapeles">
              <div className="mail-bar-details">
                <div className="mail-bar-icon-wrap">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="contact-bar-sub">Contacto Directo por Email</p>
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
                  <p className="contact-bar-sub">Chat Instantáneo / WhatsApp</p>
                  <p className="contact-bar-main">+34 633 344 337</p>
                </div>
              </div>
              <div className="contact-online-badge">
                <span className="online-dot" />
                <span>DIRECTO</span>
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
              REDES SOCIALES
            </h2>
            <span className="section-index">[ CONEXIONES_08 ]</span>
          </div>

          <div className="socials-grid-technical">
            {[
              {
                name: 'GitHub',
                handle: '@alehinarejos',
                tag: '[ DEV / REPOSITORIOS ]',
                url: portfolioData.socials.github,
                description: 'Código abierto, proyectos personales, colaboraciones y repositorios de desarrollo continuo.',
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
                description: 'Perfil laboral, experiencia profesional, formación académica y red de contactos en tecnología.',
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
                description: 'Presencia digital, proyectos creativos, actualidad y faceta personal.',
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
                  <span>Visitar perfil</span>
                  <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 📐 PIE DE PÁGINA */}
        <footer className="editorial-footer">
          <p>© {new Date().getFullYear()} ALEJANDRO HINAREJOS. TODOS LOS DERECHOS RESERVADOS.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="footer-command-hint"
              title="Atajo de teclado ⌘K"
            >
              [ ⌘K PALETA DE COMANDOS ]
            </button>
            <p>[ LIQUID GLASS 2026 ]</p>
          </div>
        </footer>

        {/* HUD Toast Alerts */}
        <div className={`toast ${copied ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: EMAIL COPIADO ]</span>
        </div>

        <div className={`toast ${copiedLink ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: ENLACE COPIADO ]</span>
        </div>

        <div className={`toast ${submitted ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: ABRIENDO CLIENTE DE CORREO... ]</span>
        </div>

        <div className={`toast ${downloadedCV ? 'show' : ''}`}>
          <Check size={14} />
          <span>[ STATUS: DESCARGA DE CV INICIADA ]</span>
        </div>

      </div>

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
                placeholder="Escribe un comando o busca secciones..."
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
                  <span>No se encontraron comandos para &quot;{commandQuery}&quot;</span>
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
                <span className="command-kbd">↑↓</span> para navegar
              </span>
              <span className="command-footer-tip">
                <span className="command-kbd">↵</span> para seleccionar
              </span>
              <span className="command-footer-tip">
                <span className="command-kbd">ESC</span> para salir
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
