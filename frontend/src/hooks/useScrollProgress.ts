import { useEffect, useRef, useState } from 'react';

export const useScrollProgress = (startOffset = 0, endOffset = 1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      
      let newProgress = 1 - (elementCenter - windowCenter) / (windowHeight * 0.6);
      newProgress = Math.max(0, Math.min(1, newProgress));
      
      setProgress(newProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [startOffset, endOffset]);

  return { ref, progress };
};
