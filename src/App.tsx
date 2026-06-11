import { useState, useEffect } from 'react';
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
  Send
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

type Theme = 'dark' | 'void' | 'light';
type Accent = 'mono' | 'orange' | 'blue' | 'red';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved as Theme;
    
    // Si no hay tema guardado, respetar el modo claro/oscuro del dispositivo
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  const [accent, setAccent] = useState<Accent>(() => {
    // Al entrar a la página, el acento cambia aleatoriamente
    const accents: Accent[] = ['mono', 'orange', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * accents.length);
    return accents[randomIndex];
  });

  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Sincronizar tema del sistema en tiempo real si el usuario no ha seleccionado uno manualmente
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return; // Si ya hay selección manual guardada, no hacemos nada

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'light' : 'dark');
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
    // Limpiar clases de acento anteriores
    document.body.classList.remove('accent-mono', 'accent-orange', 'accent-blue', 'accent-red');
    document.body.classList.add(`accent-${accent}`);
  }, [accent]);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailForm.name && emailForm.email && emailForm.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmailForm({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <div className="app-container">

      {/* 📐 SECCIÓN HEADER EDITORIAL */}
      <header className="editorial-header">
        <div className="editorial-header-top">
          <div>
            <span className="mono-tag" style={{ marginBottom: '8px', display: 'block' }}>
              [ PORTFOLIO / EDICIÓN 2026 ]
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
                {(['dark', 'void', 'light'] as Theme[]).map((t) => (
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
                {(['mono', 'orange', 'blue', 'red'] as Accent[]).map((a) => (
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

            {/* Compartir portafolio en cabecera */}
            <button
              onClick={copyPortfolioLink}
              className="control-btn"
              style={{
                marginTop: '4px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                width: 'fit-content'
              }}
            >
              <Share2 size={12} />
              {copiedLink ? 'COPIADO' : 'COMPARTIR ENLACE'}
            </button>
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
      </header>

      {/* 📐 SECCIÓN PROYECTOS / FICHA TÉCNICA */}
      <section style={{ marginBottom: '60px' }}>
        <div className="section-header-editorial">
          <h2 className="section-title-editorial">
            <Layers size={18} style={{ color: 'var(--accent-color)' }} />
            PROYECTOS DESTACADOS
          </h2>
          <span className="section-index">[ FICHA_TÉCNICA_01 ]</span>
        </div>

        <div>
          {portfolioData.projects.map((project, idx) => {
            const currentCat = project.category || "DEVELOPMENT";
            const currentRole = project.role || "FULL STACK DEV";

            return (
              <article key={idx} className="project-sheet">

                {/* Visual Render Card maquetado en CSS técnico */}
                <div className="project-render-container">
                  <div className="blueprint-overlay" />
                  <div className="blueprint-axis-x" />
                  <div className="blueprint-axis-y" />

                  <div className="blueprint-cropmark crop-tl" />
                  <div className="blueprint-cropmark crop-tr" />
                  <div className="blueprint-cropmark crop-bl" />
                  <div className="blueprint-cropmark crop-br" />

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

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="technical-link-btn"
                  >
                    <span>{project.linkText}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

              </article>
            );
          })}
        </div>
      </section>

      {/* 📐 SECCIÓN DETALLES / ACERCA DE MÍ Y TRAYECTORIA */}
      <section className="editorial-double-column">

        {/* Columna Izquierda: Sobre Mí */}
        <div className="column-editorial">
          <div className="section-header-editorial" style={{ marginBottom: '16px' }}>
            <h2 className="section-title-editorial">
              SOBRE MÍ
            </h2>
            <span className="section-index">[ PERFIL_02 ]</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {portfolioData.about.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="editorial-about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Trayectoria de Educación */}
        <div className="column-editorial">
          <div className="section-header-editorial" style={{ marginBottom: '16px' }}>
            <h2 className="section-title-editorial">
              TRAYECTORIA
            </h2>
            <span className="section-index">[ HISTORIAL_03 ]</span>
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

      {/* 📐 SECCIÓN TECH STACK / ESPECIFICACIONES TÉCNICAS */}
      <section style={{ marginBottom: '60px' }}>
        <div className="section-header-editorial">
          <h2 className="section-title-editorial">
            <Terminal size={18} style={{ color: 'var(--accent-color)' }} />
            ESPECIFICACIONES DEL STACK
          </h2>
          <span className="section-index">[ SISTEMA_04 ]</span>
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

      {/* 📐 SECCIÓN FORMULARIO DE CONTACTO TÉCNICO */}
      <section style={{ marginBottom: '60px' }}>
        <div className="section-header-editorial">
          <h2 className="section-title-editorial">
            MÓDULO DE CONTACTO
          </h2>
          <span className="section-index">[ COMUNICACIÓN_05 ]</span>
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
              placeholder="Detalla tu propuesta o consulta..."
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

        {/* Mail copiar bar */}
        <div onClick={copyEmailToClipboard} className="dashboard-mail-bar">
          <div className="mail-bar-details">
            <div className="mail-bar-icon-wrap">
              <Mail size={14} />
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contacto Directo por Email
              </p>
              <p style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>
                {portfolioData.main.email}
              </p>
            </div>
          </div>
          <div style={{ color: 'var(--text-muted)' }}>
            {copied ? <Check size={16} style={{ color: 'var(--accent-color)' }} /> : <Copy size={14} />}
          </div>
        </div>
      </section>

      {/* 📐 PIE DE PÁGINA */}
      <footer className="editorial-footer">
        <p>© {new Date().getFullYear()} ALEJANDRO HINAREJOS. TODOS LOS DERECHOS RESERVADOS.</p>
        <p>
          [ REACT + TS ]
          <span className="footer-bullet">•</span>
          [ EDITORIAL DESIGN v2.5 ]
        </p>
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
        <span>[ STATUS: MENSAJE ENVIADO ]</span>
      </div>

    </div>
  );
}

export default App;
