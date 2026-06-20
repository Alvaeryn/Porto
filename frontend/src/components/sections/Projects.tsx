import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const animationClass = ['animate-fade-up', 'animate-rotate', 'animate-scale-up'][index % 3];
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-slate-950 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-semibold hover:bg-cyan-700 transition-colors">
              Lihat Proyek
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-2">{project.category}</span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, j) => {
            const iconMap: Record<string, string> = {
              'React': 'devicon-react-original colored',
              'Next.js': 'devicon-nextjs-original colored',
              'TypeScript': 'devicon-typescript-plain colored',
              'Tailwind': 'devicon-tailwindcss-original colored',
              'Node.js': 'devicon-nodejs-plain colored',
              'Express': 'devicon-express-original colored',
              'MySQL': 'devicon-mysql-original colored',
              'JavaScript': 'devicon-javascript-plain colored',
              'PHP': 'devicon-php-plain colored',
              'Laravel': 'devicon-laravel-plain colored',
              'Flutter': 'devicon-flutter-plain colored',
              'Dart': 'devicon-dart-plain colored',
              'Figma': 'devicon-figma-plain colored',
            };
            return (
              <span key={j} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium flex items-center gap-1">
                <i className={iconMap[t] || ''} style={{ fontSize: '0.875rem' }}></i>
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Travel App',
      category: 'Full-Stack Web',
      description: 'Platform travel untuk booking paket wisata dengan antarmuka modern dan integrasi pembayaran Midtrans.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/Alvaeryn/Travel-App',
    },
    {
      title: 'Absensi Siswa Berbasis QRCODE',
      category: 'Full-Stack Web',
      description: 'Sistem absensi modern dengan face recognition dan QR code untuk SD.',
      tech: ['React', 'Express', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/Alvaeryn/Absensi-Siswa-Berbasis-QRCODE',
    },
    {
      title: 'Portfolio Website',
      category: 'Full-Stack Web',
      description: 'Website portfolio modern dengan React, TypeScript, dan Tailwind CSS.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/Alvaeryn/Porto',
    },
    {
      title: 'Aplikasi Perkuliahan',
      category: 'Mobile App',
      description: 'Aplikasi mobile untuk manajemen perkuliahan dengan antarmuka yang user-friendly.',
      tech: ['Flutter', 'Dart'],
      image: 'https://plus.unsplash.com/premium_photo-1664301435093-9804155eb991?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://github.com/ychaara/Aplikasi_Perkuliahan',
    },
    {
      title: 'Simpati Flutter',
      category: 'Mobile App',
      description: 'Aplikasi mobile untuk manajemen simpati yang dibangun dengan Flutter.',
      tech: ['Flutter', 'Dart'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ychaara/simpati_flutter',
    },
    {
      title: 'Tokoaki Demo',
      category: 'Mobile App',
      description: 'Demo aplikasi mobile toko online untuk manajemen produk dan transaksi.',
      tech: ['Flutter', 'Dart'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ychaara/tokoakidemo',
    },
    {
      title: 'Perpustakaan',
      category: 'Mobile App',
      description: 'Aplikasi mobile manajemen perpustakaan untuk mengelola buku dan peminjaman.',
      tech: ['Flutter', 'Dart'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ychaara/Perpustakaan',
    },
    {
      title: 'Fluttix App',
      category: 'Mobile App',
      description: 'Aplikasi streaming dan booking tiket film dengan antarmuka yang menarik.',
      tech: ['Flutter', 'Dart'],
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/ychaara/Fluttix_App',
    },
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
          <span className="inline-block px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-semibold uppercase tracking-wide mb-3">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">Proyek Terbaru Kami</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Kumpulan proyek yang telah kami kerjakan dengan penuh dedikasi</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;