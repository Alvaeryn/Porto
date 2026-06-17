import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TrustedBy = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-8 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div 
        ref={ref} 
        className={`max-w-6xl mx-auto px-6 text-center animate-on-scroll animate-fade-up ${isVisible ? 'visible' : ''}`}
      >
        <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">Dipercaya oleh Startup & UMKM Mapan</p>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {['aws', 'stripe', 'gpay', 'apple', 'android'].map((brand, i) => (
            <div key={i} className="text-3xl text-slate-400 dark:text-slate-600 grayscale hover:grayscale-0 transition-all duration-300">
              <i className={`devicon-${brand}-plain`} style={{ fontSize: '2.5rem' }}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
