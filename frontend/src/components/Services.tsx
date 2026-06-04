import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useScrollFade } from '../hooks/useScrollFade';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  
  const animations = ['animate-fade-up', 'animate-scale-up', 'animate-fade-right', 'animate-fade-left', 'animate-rotate', 'animate-slide-up-bounce'];
  const animationClass = animations[index % animations.length];
  
  return (
    <div 
      ref={ref}
      className={`bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:border-cyan-200 dark:hover:border-cyan-800 hover:-translate-y-2 transition-all animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-5xl mb-5">{service.icon}</div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-5">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, j) => (
          <li key={j} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
            <span className="text-cyan-500 dark:text-cyan-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Membangun website modern dengan React, Next.js, dan performa optimal.',
      features: ['Responsive Design', 'SEO Friendly', 'Fast Loading']
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'Aplikasi cross-platform dengan React Native untuk iOS dan Android.',
      features: ['Single Codebase', 'Native Performance', 'Smooth UI']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Desain interface yang menarik dan user-friendly dengan Figma.',
      features: ['Modern Design', 'User Research', 'Prototyping']
    },
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Toko online lengkap dengan payment gateway dan manajemen produk.',
      features: ['Cart System', 'Payment Integration', 'Admin Dashboard']
    },
    {
      icon: '📊',
      title: 'Dashboard & CMS',
      description: 'Panel admin kustom untuk mengelola konten dan data bisnis.',
      features: ['Real-time Data', 'Analytics', 'Easy Management']
    },
    {
      icon: '🚀',
      title: 'Performance Optimization',
      description: 'Optimalkan kecepatan dan performa website kamu.',
      features: ['Speed Optimization', 'Code Refactoring', 'Caching']
    }
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, opacity, scale } = useScrollFade();

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div 
        ref={contentRef} 
        className="max-w-6xl mx-auto px-6"
        style={{ 
          opacity, 
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}
      >
        <div ref={headerRef} className={`text-center mb-12 animate-on-scroll animate-fade-down ${headerVisible ? 'visible' : ''}`}>
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide mb-3">Keahlian Saya</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Layanan yang Saya Sediakan</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
