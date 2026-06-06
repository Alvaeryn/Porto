import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  
  const animations = ['animate-fade-left', 'animate-fade-up', 'animate-fade-right'];
  const animationClass = animations[index % animations.length];
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-yellow-400 text-2xl mb-4">
        {'⭐'.repeat(testimonial.rating)}
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg italic">"{testimonial.content}"</p>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Rizky Pratama',
      role: 'Owner Toko Fashion',
      content: 'Hasilnya luar biasa! Website toko online saya jadi cepat dan profesional. Penjualan naik 35%!',
      rating: 5
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Founder Startup Edukasi',
      content: 'Desain UI/UXnya sangat intuitive dan modern. User feedbacknya positif banget!',
      rating: 5
    },
    {
      name: 'Ahmad Fauzi',
      role: 'CEO Tech Company',
      content: 'Kerja sama dengan Alvaeryn sangat menyenangkan. Komunikasi dan hasilnya sesuai ekspektasi!',
      rating: 5
    }
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, opacity, scale } = useScrollFade();

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950">
      <div 
        ref={contentRef} 
        className="max-w-6xl mx-auto px-6"
        style={{ 
          opacity, 
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}
      >
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll animate-slide-up-bounce ${headerVisible ? 'visible' : ''}`}>
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide mb-3">Testimoni</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Apa Kata Mereka?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

