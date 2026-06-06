import { navigateTo, navigateToSection } from '../utils/navigation';

interface MenuItem {
  name: string;
  type: 'section' | 'page';
  target: string;
}

const Footer = () => {
  const menuItems: MenuItem[] = [
    { name: 'Home', type: 'section', target: '#home' },
    { name: 'Layanan', type: 'section', target: '#services' },
    { name: 'Portfolio', type: 'section', target: '#projects' },
    { name: 'Testimoni', type: 'section', target: '#testimonials' },
    { name: 'Harga', type: 'section', target: '#pricing' },
    { name: 'FAQ', type: 'page', target: '/faq' },
  ];

  const contactItems = [
    { name: 'WhatsApp', href: 'https://wa.me/6281234567890' },
    { name: 'Email', href: 'mailto:alvaeryn@example.com' },
    { name: 'Telegram', href: 'https://t.me/alvaeryn' },
    { name: 'GitHub', href: 'https://github.com' },
  ];

  const handleMenuClick = (type: 'section' | 'page', target: string) => {
    if (type === 'page') {
      navigateTo(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigateToSection(target);
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src="/Final-Logo.png" alt="Alvaeryn Logo" className="h-14 w-14" />
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                Alvaeryn
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-600 mb-4">
              Solusi digital profesional untuk UMKM Indonesia
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 mb-4 uppercase">
              Halaman
            </h4>
            <ul className="space-y-2">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => handleMenuClick(item.type, item.target)}
                    className="text-xs text-slate-600 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 mb-4 uppercase">
              Kontak
            </h4>
            <ul className="space-y-2">
              {contactItems.map((item, i) => (
                <li key={i}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-600">
            © {new Date().getFullYear()} Alvaeryn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
