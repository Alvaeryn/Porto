import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  
  const animations = ['animate-fade-up', 'animate-rotate', 'animate-scale-up'];
  const animationClass = animations[index % animations.length];
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 text-center hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-700">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{member.name}</h3>
      <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4">{member.role}</p>
      <p className="text-slate-600 dark:text-slate-400 text-sm">{member.bio}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Revalin Amalia',
      role: 'UI/UX Designer',
      bio: 'Desainer kreatif yang fokus pada pengalaman pengguna yang intuitif dan menarik.',
      image: 'https://cdn.discordapp.com/attachments/1259007175908483138/1259007286366066024/image_2024-07-06_152747628-Photoroom2.png?ex=66824900&is=6680f780&hm=b323a625c8d8b9d7b714065052329c57937a7964873203a695d7a263e23e750b&'
    },
    {
      name: 'Carisa Rahmanda R',
      role: 'Mobile App Developer',
      bio: 'Spesialis dalam pengembangan aplikasi mobile yang kreatif dan responsif.',
      image: 'https://cdn.discordapp.com/attachments/1259007175908483138/1259007374600822844/image_2024-07-06_152922600-Photoroom.png?ex=66824915&is=6680f795&hm=b85b6009c6b038d4275fec704615b786b855c6c9a673672b684703880d849315&'
    },
    {
      name: 'Alvaeryn',
      role: 'Founder & Full Stack Developer',
      bio: 'Spesialis dalam pengembangan web dan aplikasi mobile dengan pengalaman lebih dari 2 tahun.',
      image: 'https://cdn.discordapp.com/attachments/1259007175908483138/1259007416144814157/image_2024-07-06_153030401-Photoroom.png?ex=6682491f&is=6680f79f&hm=104022d6b06fa40c1b212c0655e843423bd0b7c315875b4a9febf34d4762b5b0&'
    }
  ];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, opacity, scale } = useScrollFade();

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div 
        ref={contentRef} 
        className="max-w-6xl mx-auto px-6"
        style={{ 
          opacity, 
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
        }}
      >
        <div ref={headerRef} className={`text-center mb-16 animate-on-scroll animate-rotate ${headerVisible ? 'visible' : ''}`}>
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wide mb-3">Tim Kami</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Orang-Orang Hebat di Balik Layar</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

