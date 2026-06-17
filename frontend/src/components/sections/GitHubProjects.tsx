import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface GitHubProject {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  link: string;
  author: string;
}

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const GitHubProjectCard = ({ project, index }: { project: GitHubProject; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const animationClass = ['animate-fade-up', 'animate-fade-left', 'animate-fade-right'][index % 3];
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-slate-950 p-6 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>
      </div>
      <div className="flex items-center gap-1 mb-3 text-xs text-slate-500">
        <i className="fas fa-star text-yellow-400"></i>
        <span>{formatNumber(project.stars)}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
            {project.language}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-xs">by @{project.author}</span>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs font-medium hover:underline">
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

const GitHubProjects = () => {
  const projects: GitHubProject[] = [
    {
      name: 'react',
      description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
      stars: 240000,
      forks: 49000,
      language: 'JavaScript',
      link: 'https://github.com/facebook/react',
      author: 'facebook'
    },
    {
      name: 'next.js',
      description: 'The React Framework',
      stars: 140000,
      forks: 26000,
      language: 'JavaScript',
      link: 'https://github.com/vercel/next.js',
      author: 'vercel'
    },
    {
      name: 'laravel',
      description: 'A PHP framework for web artisans.',
      stars: 76000,
      forks: 25000,
      language: 'PHP',
      link: 'https://github.com/laravel/laravel',
      author: 'laravel'
    },
    {
      name: 'express',
      description: 'Fast, unopinionated, minimalist web framework for node.',
      stars: 62000,
      forks: 11800,
      language: 'JavaScript',
      link: 'https://github.com/expressjs/express',
      author: 'expressjs'
    },
    {
      name: 'flutter',
      description: 'Flutter makes it easy and fast to build beautiful apps for mobile and beyond',
      stars: 170000,
      forks: 29000,
      language: 'Dart',
      link: 'https://github.com/flutter/flutter',
      author: 'flutter'
    },
    {
      name: 'tailwindcss',
      description: 'A utility-first CSS framework for rapid UI development.',
      stars: 79000,
      forks: 4000,
      language: 'JavaScript',
      link: 'https://github.com/tailwindlabs/tailwindcss',
      author: 'tailwindlabs'
    },
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, opacity, scale } = useScrollFade();

  return (
    <section id="github-projects" className="py-24 bg-slate-50 dark:bg-slate-900">
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
          <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold uppercase tracking-wide mb-3">GitHub Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">Project Populer</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Showcase project-project terbaik dari GitHub dengan teknologi modern</p>
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
