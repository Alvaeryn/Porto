import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  
  const animationClass = index % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right';
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-slate-950 p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <span className="inline-block text-cyan-600 dark:text-cyan-400 font-semibold mb-2">{project.category}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center mb-1">
                <span className="text-orange-500 mr-2">🎯</span> Masalah
              </h4>
              <p className="text-slate-600 dark:text-slate-400">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center mb-1">
                <span className="text-cyan-500 mr-2">💡</span> Solusi
              </h4>
              <p className="text-slate-600 dark:text-slate-400">{project.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center mb-1">
                <span className="text-green-500 mr-2">📊</span> Hasil
              </h4>
              <p className="text-green-700 dark:text-green-400 font-semibold">{project.result}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            {project.tech.map((t, j) => {
              const iconMap: Record<string, string> = {
                'React': 'devicon-react-original colored',
                'Tailwind': 'devicon-tailwindcss-original colored',
                'Node.js': 'devicon-nodejs-plain colored',
                'JavaScript': 'devicon-javascript-plain colored',
                'PHP': 'devicon-php-plain colored',
                'Laravel': 'devicon-laravel-plain colored',
                'React Native': 'devicon-react-original colored',
                'Flutter': 'devicon-flutter-plain colored',
                'Firebase': 'devicon-firebase-plain colored',
                'Figma': 'devicon-figma-plain colored',
                'D3.js': 'devicon-d3js-original colored',
              };
              return (
                <span key={j} className="px-3 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium flex items-center gap-2">
                  <i className={iconMap[t] || ''} style={{ fontSize: '1.25rem' }}></i>
                  {t}
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="w-full h-48 bg-gradient-to-br from-cyan-200 to-teal-200 dark:from-cyan-900/50 dark:to-teal-900/50 rounded-xl flex items-center justify-center text-6xl">
            📱
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Toko Fashion Online',
      category: 'Web Development',
      problem: 'Butuh website modern untuk meningkatkan penjualan.',
      solution: 'Membuat website e-commerce dengan React dan payment gateway.',
      result: 'Penjualan naik 35% dalam 2 bulan.',
      tech: ['React', 'Tailwind', 'JavaScript']
    },
    {
      title: 'Aplikasi Kasir UMKM',
      category: 'Mobile App',
      problem: 'UMKM butuh aplikasi kasir yang ringkas dan mudah dipakai.',
      solution: 'Aplikasi mobile dengan Flutter yang bisa bekerja offline.',
      result: 'Transaksi jadi lebih tercatat, laporan otomatis.',
      tech: ['Flutter', 'Firebase']
    },
    {
      title: 'Sistem Manajemen Sekolah',
      category: 'Full-Stack Web',
      problem: 'Sekolah butuh sistem untuk manajemen siswa dan nilai.',
      solution: 'Membuat web app dengan Laravel dan MySQL.',
      result: 'Proses manajemen jadi lebih cepat dan terstruktur.',
      tech: ['PHP', 'Laravel', 'JavaScript']
    },
    {
      title: 'Aplikasi Booking Klinik',
      category: 'Mobile App',
      problem: 'Klinik butuh sistem booking yang mudah.',
      solution: 'Aplikasi mobile dengan React Native untuk booking.',
      result: 'Booking online naik 50%, antrian berkurang.',
      tech: ['React Native', 'Firebase']
    },
    {
      title: 'Dashboard Analytics',
      category: 'UI/UX Design',
      problem: 'Butuh dashboard untuk monitoring data.',
      solution: 'Desain dan develop dashboard dengan chart interaktif.',
      result: 'Pengambilan keputusan lebih cepat dan akurat.',
      tech: ['Figma', 'React', 'D3.js']
    }
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, opacity, scale } = useScrollFade();

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
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
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Studi Kasus Proyek Terbaru</h2>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

