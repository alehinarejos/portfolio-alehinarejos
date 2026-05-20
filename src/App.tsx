import { useState, useEffect } from 'react';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  GraduationCap,
  Folder,
  User,
  Moon,
  Sun,
  Sparkles,
  Share2,
  Briefcase
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

type Theme = 'dark' | 'void' | 'light';

// Custom lightweight SVG Brand Icons to avoid lucide-react version compatibility issues
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved as Theme) || 'dark';
  });

  const [aboutOpen, setAboutOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Apply theme to body
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

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

  const themeIndex = theme === 'dark' ? 0 : theme === 'void' ? 1 : 2;
  const projectsCount = portfolioData.projects.length;

  return (
    <>
      {/* Background Mesh Elements */}
      <div className="mesh-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="app-container">

        {/* TOP CONTROLS: Slidable theme selection and share link */}
        <header
          className="animate-stagger"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            animationDelay: '0ms'
          }}
        >
          {/* Animated sliding Theme Tab Selector */}
          <div className="theme-slider-container">
            <div
              className="theme-slider-active-bg"
              style={{ transform: `translateX(${themeIndex * 72}px)` }}
            />
            {(['dark', 'void', 'light'] as Theme[]).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`theme-slider-btn ${theme === t ? 'active' : ''}`}
              >
                {t === 'dark' && <Moon size={11} />}
                {t === 'void' && <Sparkles size={11} />}
                {t === 'light' && <Sun size={11} />}
                {t}
              </button>
            ))}
          </div>

          {/* Quick share icon */}
          <button
            onClick={copyPortfolioLink}
            className="glass-panel scale-hover"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            title="Copiar enlace de portafolio"
          >
            {copiedLink ? <Check size={16} style={{ color: 'var(--accent-secondary)' }} /> : <Share2 size={16} />}
          </button>
        </header>

        {/* PROFILE HEADER BLOCK (Cohesive Glass card featuring a Cover banner) */}
        <section
          className="glass-panel animate-stagger"
          style={{
            width: '100%',
            textAlign: 'center',
            marginBottom: '20px',
            overflow: 'hidden',
            paddingBottom: '28px',
            animationDelay: '80ms'
          }}
        >
          {/* Rectangular Cover Banner */}
          <div className="profile-card-header">
            <img
              src="/homepage.jpg"
              alt="Portada de Alejandro"
              className="profile-card-banner"
            />
          </div>

          {/* Overlapping Avatar */}
          <div className="avatar-overlap-wrapper">
            <div className="avatar-overlap-inner">
              <img
                src="/image-about.webp"
                alt={portfolioData.main.name}
                className="avatar-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo.png';
                }}
              />
            </div>
            {/* Pulsing Active Status Badge */}
            <div style={{
              position: 'absolute',
              bottom: '6px',
              right: '6px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-secondary)',
              border: '3px solid var(--bg-primary)',
              boxShadow: '0 0 12px var(--accent-secondary)',
              zIndex: 3
            }} title="Disponible para colaborar"></div>
          </div>

          {/* Profile details */}
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '6px', padding: '0 16px' }}>
            <span className="text-gradient">{portfolioData.main.name}</span>
          </h1>

          <p style={{
            fontSize: '0.95rem',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <Briefcase size={15} style={{ color: 'var(--accent-color)' }} />
            Full Stack Developer
          </p>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            margin: '0 auto 20px auto',
            lineHeight: 1.6,
            padding: '0 20px'
          }}>
            Desarrollador con más de 2 años de experiencia en front-end y más de 1 año en back-end.
            Me especializo en crear portales responsivos, dinámicos e intuitivos de alto impacto.
          </p>

          {/* Social icons capsule pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', padding: '0 16px' }}>
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href={portfolioData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
              title="Instagram"
            >
              <InstagramIcon />
            </a>
            <button
              onClick={copyEmailToClipboard}
              className="social-pill"
              style={{ cursor: 'pointer' }}
              title="Copiar correo"
            >
              <Mail size={19} />
            </button>
          </div>
        </section>

        {/* INTERACTIVE EXPANDABLE ACCORDIONS (ABOUT & EDUCATION) */}
        <section
          style={{
            width: '100%',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {/* About Section Accordion */}
          <div
            className="glass-panel animate-stagger"
            style={{ overflow: 'hidden', width: '100%', animationDelay: '160ms' }}
          >
            <button
              className="accordion-header"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <User size={18} style={{ color: 'var(--accent-color)' }} />
                Sobre Mí
              </span>
              <ChevronDown size={18} className={`accordion-icon ${aboutOpen ? 'open' : ''}`} />
            </button>
            <div className={`accordion-body ${aboutOpen ? 'open' : ''}`}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {portfolioData.about.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Education timeline Accordion */}
          <div
            className="glass-panel animate-stagger"
            style={{ overflow: 'hidden', width: '100%', animationDelay: '240ms' }}
          >
            <button
              className="accordion-header"
              onClick={() => setEducationOpen(!educationOpen)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <GraduationCap size={18} style={{ color: 'var(--accent-color)' }} />
                Educación y Trayectoria
              </span>
              <ChevronDown size={18} className={`accordion-icon ${educationOpen ? 'open' : ''}`} />
            </button>
            <div className={`accordion-body ${educationOpen ? 'open' : ''}`}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '10px' }}>
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} style={{
                    position: 'relative',
                    paddingLeft: '24px',
                    borderLeft: '2px solid var(--border-color)',
                  }}>
                    {/* timeline node dot */}
                    <div style={{
                      position: 'absolute',
                      left: '-6px',
                      top: '5px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-color)',
                      border: '2px solid var(--bg-primary)'
                    }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>{edu.title}</h4>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: 'var(--accent-secondary)',
                        background: 'rgba(0, 245, 212, 0.08)',
                        padding: '2px 8px',
                        borderRadius: '100px',
                        border: '1px solid rgba(0, 245, 212, 0.15)'
                      }}>{edu.date}</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>{edu.subtitle}</p>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section style={{ width: '100%', marginBottom: '36px' }}>
          <h2
            className="animate-stagger"
            style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              paddingLeft: '4px',
              animationDelay: '300ms'
            }}
          >
            <Folder size={18} style={{ color: 'var(--accent-color)' }} />
            Mis Proyectos
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {portfolioData.projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel link-card scale-hover animate-stagger"
                style={{ animationDelay: `${360 + idx * 80}ms` }}
              >
                <div className="link-card-logo-container">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="link-card-logo"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
                    }}
                  />
                </div>
                <div className="link-card-content">
                  <div className="link-card-title">
                    {project.title}
                  </div>
                  <div className="link-card-desc">
                    {project.description}
                  </div>
                  {project.tech && (
                    <div style={{ marginTop: '4px' }}>
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <ExternalLink className="link-card-arrow" size={17} />
              </a>
            ))}
          </div>
        </section>

        {/* QUICK MAIL-COPY DASHED BAR */}
        <section
          className="animate-stagger"
          style={{
            width: '100%',
            marginBottom: '32px',
            animationDelay: `${360 + projectsCount * 80 + 80}ms`
          }}
        >
          <div
            onClick={copyEmailToClipboard}
            className="glass-panel scale-hover"
            style={{
              width: '100%',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              borderStyle: 'dashed',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(157, 78, 221, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-color)'
              }}>
                <Mail size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Escríbeme por correo</p>
                <p style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)' }}>{portfolioData.main.email}</p>
              </div>
            </div>

            <div style={{ color: 'var(--text-secondary)' }}>
              {copied ? <Check size={18} style={{ color: 'var(--accent-secondary)' }} /> : <Copy size={17} />}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          className="animate-stagger"
          style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            marginTop: 'auto',
            animationDelay: `${360 + projectsCount * 80 + 160}ms`
          }}
        >
          <p>© {new Date().getFullYear()} Alejandro Hinarejos. Todos los derechos reservados.</p>
          <p style={{ marginTop: '4px', opacity: 0.7 }}>
            Inspirado en <a href="https://solo.to" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>solo.to</a> • Creado con React + TypeScript
          </p>
        </footer>

        {/* Toast alerts for visual confirmation */}
        <div className={`toast ${copied ? 'show' : ''}`}>
          <Check size={16} style={{ color: 'var(--accent-secondary)' }} />
          <span>¡Email copiado al portapapeles!</span>
        </div>

        <div className={`toast ${copiedLink ? 'show' : ''}`}>
          <Check size={16} style={{ color: 'var(--accent-secondary)' }} />
          <span>¡Enlace del portafolio copiado!</span>
        </div>

      </div>
    </>
  );
}

export default App;
