import { useState } from 'react';
import { smoothScrollTo } from '../utils/scroll';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: '#home' },
    { name: 'Layanan', id: '#services' },
    { name: 'Portfolio', id: '#projects' },
    { name: 'Tim', id: '#team' },
    { name: 'Testimoni', id: '#testimonials' },
    { name: 'Harga', id: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('#home');
            }}
            className="flex items-center gap-3 hover:scale-105 transition"
          >
            <img src="/Logo.png" alt="Alvaeryn Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
              Alvaeryn
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.id);
                }}
                className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#contact');
              }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              Konsultasi Gratis
            </button>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <span className="text-xl">☀️</span> : <span className="text-xl">🌙</span>}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-slate-700 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
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
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-4 items-center">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    smoothScrollTo(item.id);
                  }}
                  className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium py-2 transition text-xl"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-4 items-center w-full pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <span className="text-2xl">☀️</span> : <span className="text-2xl">🌙</span>}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    smoothScrollTo('#contact');
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
