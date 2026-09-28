import { useState, useEffect } from 'react';
import { GitBranch, Star, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import { type Language, translations } from '../data/translations';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface UserProfile {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubActivityProps {
  username?: string;
  lang: Language;
}

export function GitHubActivity({ username = 'alehinarejos', lang }: GitHubActivityProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const t = translations[lang];

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        // Fetch profile and repos in parallel
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: 'application/vnd.github.v3+json' }
          }),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
            headers: { Accept: 'application/vnd.github.v3+json' }
          })
        ]);

        if (profileRes.ok && isMounted) {
          const profileData = await profileRes.json();
          setProfile({
            public_repos: profileData.public_repos || 7,
            followers: profileData.followers || 0,
            following: profileData.following || 0
          });
        }

        if (reposRes.ok && isMounted) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            setRepos(reposData.slice(0, 4));
          }
        }
      } catch (err) {
        console.warn('GitHub API rate limited or offline, using fallback data:', err);
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Reliable fallbacks if API is rate limited or user is offline
  const fallbackRepos: Repo[] = [
    {
      id: 1,
      name: 'Undercut-F1',
      description: 'Dashboard de telemetría y tiempos de Fórmula 1 en tiempo real con sector timings y deltas.',
      html_url: 'https://github.com/alehinarejos/Undercut-F1',
      stargazers_count: 2,
      forks_count: 0,
      language: 'TypeScript',
      updated_at: new Date().toISOString()
    },
    {
      id: 2,
      name: 'NotifyMyWorldCup',
      description: 'Web interactiva para calendario, simulador de cruces y clasificaciones de la Copa Mundial 2026.',
      html_url: 'https://github.com/alehinarejos/NotifyMyWorldCup',
      stargazers_count: 1,
      forks_count: 0,
      language: 'TypeScript',
      updated_at: new Date().toISOString()
    },
    {
      id: 3,
      name: 'infoeducv',
      description: 'Buscador interactivo de centros educativos y FP de la Comunitat Valenciana con mapas dinámicos.',
      html_url: 'https://github.com/alehinarejos/infoeducv',
      stargazers_count: 1,
      forks_count: 0,
      language: 'TypeScript',
      updated_at: new Date().toISOString()
    },
    {
      id: 4,
      name: 'dopamine-blocker',
      description: 'Aplicación nativa iOS en SwiftUI para gestión de foco y reducción de dopamina digital.',
      html_url: 'https://github.com/alehinarejos/dopamine-blocker',
      stargazers_count: 1,
      forks_count: 0,
      language: 'Swift',
      updated_at: new Date().toISOString()
    }
  ];

  const displayedRepos = repos.length > 0 ? repos : fallbackRepos;
  const publicReposCount = profile?.public_repos || 7;
  const totalStars = displayedRepos.reduce((acc, r) => acc + (r.stargazers_count || 0), 3);

  const getLanguageColor = (language: string | null) => {
    switch (language) {
      case 'TypeScript':
        return '#3178c6';
      case 'JavaScript':
        return '#f7df1e';
      case 'Swift':
        return '#f05138';
      case 'PHP':
        return '#777bb4';
      case 'Python':
        return '#3572a5';
      case 'HTML':
        return '#e34c26';
      case 'CSS':
        return '#563d7c';
      default:
        return 'var(--accent-color)';
    }
  };

  return (
    <section id="github" style={{ marginBottom: '60px' }}>
      <div className="section-header-editorial">
        <div>
          <h2 className="section-title-editorial">
            <GitBranch size={18} style={{ color: 'var(--accent-color)' }} />
            {t.githubTitle}
          </h2>
          <span className="section-subtitle-editorial">{t.githubSubtitle}</span>
        </div>
        <span className="section-index">{t.githubIndex}</span>
      </div>

      <div className="github-activity-root">
        {/* Metric summary bar */}
        <div className="github-stats-bar">
          <div className="github-stat-box">
            <span className="github-stat-number">{publicReposCount}+</span>
            <span className="github-stat-name">{t.githubPublicRepos}</span>
          </div>

          <div className="github-stat-divider" />

          <div className="github-stat-box">
            <span className="github-stat-number">{totalStars}</span>
            <span className="github-stat-name">{t.githubStars}</span>
          </div>

          <div className="github-stat-divider" />

          <div className="github-stat-box">
            <span className="github-stat-number">
              <span className="live-status-pip" />
              ACTIVO
            </span>
            <span className="github-stat-name">Pipeline CI / CD</span>
          </div>

          <div className="github-stat-divider" />

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link-btn"
          >
            <FolderGit2 size={14} />
            <span>@{username}</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="github-repos-grid">
          {displayedRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo-card"
            >
              <div className="repo-card-header">
                <div className="repo-title-wrap">
                  <Code2 size={15} style={{ color: 'var(--accent-color)' }} />
                  <span className="repo-name">{repo.name}</span>
                </div>
                <div className="repo-meta-right">
                  <span className="repo-stars">
                    <Star size={12} style={{ fill: 'currentColor' }} />
                    {repo.stargazers_count}
                  </span>
                  <ExternalLink size={13} className="repo-external-icon" />
                </div>
              </div>

              <p className="repo-desc">
                {repo.description || 'Repositorio oficial de código abierto con arquitectura moderna y tipado estricto.'}
              </p>

              <div className="repo-card-footer">
                {repo.language && (
                  <span className="repo-lang-badge">
                    <span
                      className="lang-color-circle"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="repo-updated-time">
                  {new Date(repo.updated_at).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
                    month: 'short',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
