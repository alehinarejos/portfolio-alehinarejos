import { useState, useEffect } from 'react';
import {
  Layers,
  User,
  Briefcase,
  FileText,
  Mail,
  ArrowUp,
  Command,
  Globe,
  GitBranch
} from 'lucide-react';
import { type Language, translations } from '../data/translations';

interface FloatingDockProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenCommand: () => void;
}

export function FloatingDock({ lang, onToggleLang, onOpenCommand }: FloatingDockProps) {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);

      // Calculate scroll progress percentage (0 - 100)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }

      // Detect current section
      const sections = ['contacto', 'stack', 'curriculum', 'experiencia', 'sobre-mi', 'github', 'proyectos'];
      let found = false;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sectionId);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 200) {
        setActiveSection('top');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global numeric keyboard shortcuts: 1 to 6
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput = activeEl && (
        activeEl.tagName === 'INPUT' ||
        activeEl.tagName === 'TEXTAREA' ||
        (activeEl as HTMLElement).isContentEditable
      );
      if (isInput) return;

      const keyMap: Record<string, string> = {
        '1': 'proyectos',
        '2': 'github',
        '3': 'sobre-mi',
        '4': 'experiencia',
        '5': 'curriculum',
        '6': 'contacto'
      };

      if (keyMap[e.key]) {
        scrollToSection(keyMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'proyectos', label: t.dockProjects, icon: Layers, keyHint: '1' },
    { id: 'github', label: t.dockGithub, icon: GitBranch, keyHint: '2' },
    { id: 'sobre-mi', label: t.dockAbout, icon: User, keyHint: '3' },
    { id: 'experiencia', label: t.dockExperience, icon: Briefcase, keyHint: '4' },
    { id: 'curriculum', label: t.dockCv, icon: FileText, keyHint: '5' },
    { id: 'contacto', label: t.dockContact, icon: Mail, keyHint: '6' },
  ];

  return (
    <nav
      className="floating-dock-container visible"
      aria-label="Navegación rápida"
    >
      <div className="floating-dock-glass">
        {/* Dynamic Reading Scroll Progress Bar */}
        <div className="dock-progress-track">
          <div
            className="dock-progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Scroll to Top (Appears when scrolled down) */}
        {isScrolled && (
          <>
            <button
              onClick={() => scrollToSection('top')}
              className="dock-item dock-item-icon-only"
              title={`${t.dockTop} (Inicio)`}
              aria-label={t.dockTop}
            >
              <ArrowUp size={15} />
            </button>
            <div className="dock-separator" />
          </>
        )}

        {/* Section Navigation Items */}
        <div className="dock-nav-items">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`dock-item ${isActive ? 'active' : ''}`}
                title={`${item.label} (Tecla ${item.keyHint})`}
              >
                <Icon size={14} className="dock-icon" />
                <span className="dock-label">{item.label}</span>
                <span className="dock-key-badge">{item.keyHint}</span>
                {isActive && <span className="dock-active-dot" />}
              </button>
            );
          })}
        </div>

        <div className="dock-separator" />

        {/* Command Menu ⌘K */}
        <button
          onClick={onOpenCommand}
          className="dock-item dock-item-cmd"
          title="Abrir comandos (⌘K)"
          aria-label="Abrir comandos"
        >
          <Command size={13} style={{ color: 'var(--accent-color)' }} />
          <span className="dock-cmd-kbd">⌘K</span>
        </button>

        {/* Language Switcher */}
        <button
          onClick={onToggleLang}
          className="dock-item dock-item-lang"
          title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          aria-label="Cambiar idioma"
        >
          <Globe size={13} />
          <span className="dock-lang-code">{lang.toUpperCase()}</span>
        </button>
      </div>
    </nav>
  );
}
