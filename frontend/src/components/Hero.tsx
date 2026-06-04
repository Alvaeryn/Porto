import { useScrollFade } from '../hooks/useScrollFade';
import { smoothScrollTo } from '../utils/scroll';

const Hero = () => {
  const { ref, opacity, scale } = useScrollFade();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-slate-50 to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 dark:bg-pink-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
      </div>

      <div 
        ref={ref}
        className="max-w-5xl mx-auto px-6 text-center animate-on-load relative z-10"
        style={{ 
          opacity, 
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}
      >
        {/* Logo */}
        <div className="mb-6">
          <img src="/Logo.png" alt="Alvaeryn Logo" className="h-32 w-32 mx-auto rounded-full shadow-2xl mb-4" />
        </div>
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full shadow-sm border border-slate-200 dark:border-slate-800">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Jasa Pembuatan Website & Aplikasi Profesional</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          Bangun <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">Website & Aplikasi</span> Yang Memukau
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-10">
          Alvaeryn siap membantu kamu buat website, landing page, dan aplikasi mobile modern—cepat, responsif, dan profesional!
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('#contact');
            }}
            className="px-8 py-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-cyan-600 dark:to-teal-500 text-white rounded-full font-bold text-sm hover:shadow-lg hover:scale-105 transition-all"
          >
            Konsultasi Gratis Sekarang
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('#projects');
            }}
            className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            Lihat Proyek Saya
          </button>
        </div>

        {/* Divider & Trusted By */}
        <div className="mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
        </div>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-4">
          Teknologi yang Saya Gunakan
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { name: 'React', icon: 'devicon-react-original colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'PHP', icon: 'devicon-php-plain colored' },
            { name: 'Laravel', icon: 'devicon-laravel-plain colored' },
            { name: 'Tailwind', icon: 'devicon-tailwindcss-original colored' },
            { name: 'Figma', icon: 'devicon-figma-plain colored' },
          ].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 hover:-translate-y-1 transition-all">
              <i className={tech.icon} style={{ fontSize: '1.75rem' }}></i>
              <span className="font-semibold text-slate-700 dark:text-slate-300 text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
