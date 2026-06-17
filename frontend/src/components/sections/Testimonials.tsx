import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  photo: string;
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
      <div className="flex items-center gap-4">
        <img 
          src={testimonial.photo} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover border-2 border-cyan-200 dark:border-cyan-800"
        />
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{testimonial.role}</p>
        </div>
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
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Founder Startup Edukasi',
      content: 'Desain UI/UXnya sangat intuitive dan modern. User feedbacknya positif banget!',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'CEO Tech Company',
      content: 'Kerja sama dengan Alvaeryn sangat menyenangkan. Komunikasi dan hasilnya sesuai ekspektasi!',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
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

