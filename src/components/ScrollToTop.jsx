import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] flex items-center justify-center w-14 h-14 bg-[#111]/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/5 group"
      aria-label="Scroll to top"
    >
      {/* Subtle hover glow background */}
      <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* SVG Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
        <circle 
          cx="50" 
          cy="50" 
          r="46" 
          fill="none" 
          stroke="rgba(255,255,255,0.05)" 
          strokeWidth="4" 
        />
        <motion.circle 
          cx="50" 
          cy="50" 
          r="46" 
          fill="none" 
          stroke="rgba(255,255,255,0.5)" 
          strokeWidth="4" 
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>

      {/* Upward Arrow Icon */}
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-white/70 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1 relative z-10"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </motion.button>
  );
};

export default ScrollToTop;
