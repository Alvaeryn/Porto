const Skills = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git", icon: "🐙" },
    { name: "JavaScript", icon: "💛" },
    { name: "HTML/CSS", icon: "🌐" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-2 transition text-center">
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
