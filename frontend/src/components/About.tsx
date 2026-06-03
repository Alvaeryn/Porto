const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-6xl font-bold text-white">
              A
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Hello! I'm Alvaeryn, a passionate full stack developer with a love for creating elegant and efficient solutions. 
              I specialize in building modern web applications using the latest technologies.
            </p>
            <p className="text-lg text-gray-700">
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
