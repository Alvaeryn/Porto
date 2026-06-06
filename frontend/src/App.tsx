import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppPopup from './components/common/WhatsAppPopup';
import AppRoutes from './routes/AppRoutes';
import { useLocationStore } from './store/locationStore';
import { useThemeStore } from './store/themeStore';
import { smoothScrollTo } from './utils/scroll';

function App() {
  const { darkMode } = useThemeStore();
  const location = useLocationStore();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/faq') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!location.hash) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      smoothScrollTo(location.hash);
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar currentPath={location.pathname} />
      <AppRoutes darkMode={darkMode} />
      <Footer />
      
      {/* Floating Buttons */}
      <>
        {/* Scroll to Top - Kiri */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 dark:from-cyan-600 dark:to-teal-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
            showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <svg 
            className="w-7 h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>

        {/* WhatsApp Popup - Kanan */}
        <WhatsAppPopup />
      </>
    </div>
  );
}

export default App;
