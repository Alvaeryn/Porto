import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll animate-fade-down ${headerVisible ? 'visible' : ''}`}>
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide mb-3">Tentang</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className={`animate-on-scroll animate-fade-left ${leftVisible ? 'visible' : ''}`}>
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-6xl font-bold text-white">
              A
            </div>
          </div>
          <div ref={rightRef} className={`animate-on-scroll animate-fade-right ${rightVisible ? 'visible' : ''}`}>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Hello! I'm Alvaeryn, a passionate full stack developer with a love for creating elegant and efficient solutions. 
              I specialize in building modern web applications using the latest technologies.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              With a keen eye for design and a commitment to writing clean, maintainable code, 
              I strive to deliver exceptional user experiences in every project I work on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

