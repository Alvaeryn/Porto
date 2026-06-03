import { useEffect, useRef, useState } from 'react';

export const useScrollFade = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const bottom = rect.bottom;
      
      let newOpacity = 1;
      let newScale = 1;
      
      if (bottom < windowHeight * 0.8) {
        const distance = windowHeight * 0.8 - bottom;
        newOpacity = Math.max(0, 1 - (distance / (windowHeight * 0.5)));
        newScale = Math.max(0.85, 1 - (distance / (windowHeight * 1.5)));
      }
      
      setOpacity(newOpacity);
      setScale(newScale);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { ref, opacity, scale };
};
