import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing />
      <Contact />
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
