import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface GitHubProject {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  link: string;
}

const GitHubProjectCard = ({ project, index }: { project: GitHubProject; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const animationClass = ['animate-fade-up', 'animate-fade-left', 'animate-fade-right'][index % 3];
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
          <i className="devicon-github-original text-2xl"></i>
        </a>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1">
          <i className="fas fa-star text-yellow-500"></i>
          <span>{project.stars} stars</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="fas fa-code-branch text-slate-400"></i>
          <span>{project.forks} forks</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="fas fa-circle" style={{ 
            color: project.language === 'JavaScript' ? '#f1e05a' : 
                   project.language === 'TypeScript' ? '#3178c6' : 
                   project.language === 'Python' ? '#3572A5' : 
                   project.language === 'PHP' ? '#4F5D95' : '#007acc' 
          }}></i>
          <span>{project.language}</span>
        </div>
      </div>
    </div>
  );
};

const GitHubProjects = () => {
  const projects: GitHubProject[] = [
    {
      name: 'portfolio-website',
      description: 'Website portfolio modern dengan React, TypeScript, dan Tailwind CSS',
      stars: 12,
      forks: 4,
      language: 'TypeScript',
      link: 'https://github.com/Alvaeryn/portfolio-website',
    },
    {
      name: 'travel-app',
      description: 'Aplikasi travel dengan Next.js dan Node.js',
      stars: 8,
      forks: 2,
      language: 'TypeScript',
      link: 'https://github.com/Alvaeryn/travel-app',
    },
    {
      name: 'qr-attendance',
      description: 'Sistem absensi siswa berbasis QRCODE',
      stars: 15,
      forks: 6,
      language: 'JavaScript',
      link: 'https://github.com/Alvaeryn/qr-attendance',
    },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, opacity, scale } = useScrollFade();

  return (
    <section id="github-projects" className="py-24 bg-white dark:bg-slate-950">
      <div 
        ref={contentRef} 
        className="max-w-6xl mx-auto px-6"
        style={{ 
          opacity, 
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}
      >
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll animate-scale-up ${headerVisible ? 'visible' : ''}`}>
          <span className="inline-block px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-semibold uppercase tracking-wide mb-3">Open Source</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">Proyek GitHub Saya</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Kumpulan proyek open-source yang saya buat untuk komunitas</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <GitHubProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;