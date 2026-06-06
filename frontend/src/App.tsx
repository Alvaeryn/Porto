import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQPage from './components/FAQPage';
import WhatsAppPopup from './components/WhatsAppPopup';
import { getLocationState } from './utils/navigation';
import { smoothScrollTo } from './utils/scroll';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Projects />
    <Team />
    <Testimonials />
    <Pricing />
    <Contact />
  </>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [location, setLocation] = useState(getLocationState);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(getLocationState());
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
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

  const isFaqPage = location.pathname === '/faq';

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} currentPath={location.pathname} />
      {isFaqPage ? <FAQPage darkMode={darkMode} /> : <HomePage />}
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
