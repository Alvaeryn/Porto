import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useScrollFade } from '../hooks/useScrollFade';

const Pricing = () => {
  const packages = [
    {
      name: 'Landing Page',
      price: 'Rp 399K',
      popular: false,
      features: ['Responsive Design', '5-7 Sections', 'Contact Form', 'Basic SEO', '7 Hari Pengerjaan']
    },
    {
      name: 'Business Website',
      price: 'Rp 1,2JT',
      popular: true,
      features: ['Multi Page (Max 8)', 'Premium UI/UX', 'SEO Optimization', 'Admin CMS', '14 Hari Pengerjaan', '30 Hari Support', 'Free Domain 1 Tahun']
    },
    {
      name: 'Full-Stack App',
      price: 'Rp 3JT+',
      popular: false,
      features: ['Full-Stack Development', 'Custom Features', 'Database Integration', 'API Development', '21-30 Hari Pengerjaan', 'Full Source Code']
    }
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, opacity, scale } = useScrollFade();

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div 
        ref={contentRef} 
        className="max-w-6xl mx-auto px-6"
        style={{ 
          opacity, 
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}
      >
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll animate-bounce ${headerVisible ? 'visible' : ''}`}>
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide mb-3">Harga</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Paket yang Sesuai untuk Kamu</h2>
        </div>
        
        <div ref={packagesRef} className={`grid md:grid-cols-3 gap-8 animate-on-scroll stagger-scale ${packagesVisible ? 'visible' : ''}`}>
          {packages.map((pkg, i) => (
            <div key={i} className={`p-8 rounded-2xl border-2 transition-all ${
              pkg.popular 
                ? 'border-cyan-500 shadow-2xl bg-gradient-to-b from-cyan-50 to-white dark:from-cyan-900/30 dark:to-slate-900 scale-105' 
                : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-cyan-300 dark:hover:border-cyan-700 hover:shadow-xl'
            }`}>
              {pkg.popular && (
                <span className="inline-block bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">Paling Populer</span>
              )}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
              <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-6">{pkg.price}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-slate-700 dark:text-slate-300">
                    <span className="text-cyan-500 dark:text-cyan-400 mr-3 text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                pkg.popular 
                  ? 'bg-gradient-to-r from-cyan-600 to-teal-500 text-white hover:shadow-lg' 
                  : 'bg-white dark:bg-slate-800 border-2 border-cyan-600 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600'
              }`}>
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
