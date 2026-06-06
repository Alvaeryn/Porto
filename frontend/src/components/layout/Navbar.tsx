import { navigateTo, navigateToSection } from '../../utils/navigation';
import { useThemeStore } from '../../store/themeStore';
import { useUIStore } from '../../store/uiStore';

interface NavbarProps {
  currentPath: string;
}

interface MenuItem {
  name: string;
  type: 'section' | 'page';
  target: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  const menuItems: MenuItem[] = [
    { name: 'Home', type: 'section', target: '#home' },
    { name: 'Layanan', type: 'section', target: '#services' },
    { name: 'Portfolio', type: 'section', target: '#projects' },
    { name: 'Testimoni', type: 'section', target: '#testimonials' },
    { name: 'Harga', type: 'section', target: '#pricing' },
    { name: 'FAQ', type: 'page', target: '/faq' },
  ];

  const handleMenuClick = (type: 'section' | 'page', target: string) => {
    if (type === 'page') {
      navigateTo(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigateToSection(target);
    }

    closeMobileMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center rounded-full bg-white/92 dark:bg-slate-900/92 backdrop-blur-lg border border-slate-200/80 dark:border-slate-800/80 shadow-sm px-3 md:px-7 py-2 md:py-3">
          {/* Logo */}
          <button
            onClick={(e) => {
              e.preventDefault();
              if (currentPath === '/faq') {
                navigateTo('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                closeMobileMenu();
                return;
              }

              navigateToSection('#home');
            }}
            className="flex items-center gap-2 hover:scale-105 transition"
          >
            <img src="/Final-Logo.png" alt="Alvaeryn Logo" className="h-10 w-10 md:h-14 md:w-14" />
            <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
              Alvaeryn
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.type, item.target);
                }}
                className={`text-sm font-medium transition ${
                  currentPath === item.target
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('section', '#contact');
              }}
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Konsultasi Gratis
            </button>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <span className="text-xl">☀️</span> : <span className="text-xl">🌙</span>}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-slate-700 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
            <div className="flex flex-col gap-3 items-center py-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleMenuClick(item.type, item.target);
                  }}
                  className={`font-medium py-2 transition text-xl ${
                    currentPath === item.target
                      ? 'text-cyan-600 dark:text-cyan-400'
                      : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-4 items-center w-full pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={toggleDarkMode}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <span className="text-2xl">☀️</span> : <span className="text-2xl">🌙</span>}
                </button>
                <button
                  onClick={() => {
                    handleMenuClick('section', '#contact');
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-lg"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

