import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useScrollFade } from '../../hooks/useScrollFade';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  color: string;
  socials: { icon: string; link: string }[];
}

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  
  const animations = ['animate-fade-up', 'animate-rotate', 'animate-scale-up', 'animate-slide-up-bounce'];
  const animationClass = animations[index % animations.length];
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 text-center hover:-translate-y-2 transition-all duration-300 animate-on-scroll ${animationClass} ${isVisible ? 'visible' : ''}`}
    >
      <div className={`w-28 h-28 mx-auto mb-6 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-4xl font-bold text-white`}>
        {member.avatar}
      </div>
      <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{member.name}</h3>
      <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-4">{member.role}</p>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{member.bio}</p>
      <div className="flex justify-center gap-4">
        {member.socials.map((social, j) => (
          <a 
            key={j} 
            href={social.link}
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-all"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Alvaeryn',
      role: 'Founder & Full Stack Developer',
      bio: 'Spesialis dalam pengembangan web dan aplikasi mobile dengan pengalaman lebih dari 5 tahun.',
      avatar: 'A',
      color: 'from-cyan-500 to-teal-500',
      socials: [
        { icon: 'fab fa-github', link: '#' },
        { icon: 'fab fa-linkedin', link: '#' },
        { icon: 'fab fa-instagram', link: '#' }
      ]
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Desainer kreatif yang fokus pada pengalaman pengguna yang intuitif dan menarik.',
      avatar: 'S',
      color: 'from-pink-500 to-purple-500',
      socials: [
        { icon: 'fab fa-github', link: '#' },
        { icon: 'fab fa-dribbble', link: '#' },
        { icon: 'fab fa-behance', link: '#' }
      ]
    },
    {
      name: 'Rizky Ramadhan',
      role: 'Backend Developer',
      bio: 'Ahli dalam arsitektur server dan database yang scalable dan aman.',
      avatar: 'R',
      color: 'from-blue-500 to-indigo-500',
      socials: [
        { icon: 'fab fa-github', link: '#' },
        { icon: 'fab fa-linkedin', link: '#' },
        { icon: 'fab fa-twitter', link: '#' }
      ]
    },
    {
      name: 'Dewi Lestari',
      role: 'Mobile Developer',
      bio: 'Spesialis Flutter yang membuat aplikasi mobile performa tinggi untuk iOS dan Android.',
      avatar: 'D',
      color: 'from-orange-500 to-red-500',
      socials: [
        { icon: 'fab fa-github', link: '#' },
        { icon: 'fab fa-linkedin', link: '#' },
        { icon: 'fab fa-instagram', link: '#' }
      ]
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

