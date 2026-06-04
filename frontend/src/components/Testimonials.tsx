import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useScrollFade } from '../hooks/useScrollFade';

const Testimonials = () => {
  const testimonials = [
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

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
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
        
        <div ref={cardsRef} className={`grid md:grid-cols-3 gap-8 animate-on-scroll stagger-children ${cardsVisible ? 'visible' : ''}`}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
              <div className="text-yellow-400 text-2xl mb-4">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
