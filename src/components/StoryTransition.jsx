import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Generate random stars for the background
const generateStars = (count, size, maxW = 2000, maxH = 2000) => {
  let shadows = [];
  for (let i = 0; i < count; i++) {
    shadows.push(`${Math.floor(Math.random() * maxW)}px ${Math.floor(Math.random() * maxH)}px rgba(255, 255, 255, 0.8)`);
  }
  return shadows.join(', ');
};

export const StarFieldWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  // Subtle parallax effect across the entire wrapped content
  const farY = useTransform(smoothProgress, [0, 1], ["0%", "-5%"]);
  const midY = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const nearY = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);

  const starsFar = useMemo(() => generateStars(250, 1), []);
  const starsMid = useMemo(() => generateStars(100, 2), []);
  const starsNear = useMemo(() => generateStars(40, 3), []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#090909]">
      {/* Sticky Star Field */}
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden pointer-events-none z-0">
        <motion.div 
          style={{ y: farY, width: '1px', height: '1px', boxShadow: starsFar, opacity: 0.3 }} 
          className="absolute rounded-full" 
        />
        <motion.div 
          style={{ y: midY, width: '2px', height: '2px', boxShadow: starsMid, opacity: 0.5 }} 
          className="absolute rounded-full" 
        />
        <motion.div 
          style={{ y: nearY, width: '3px', height: '3px', boxShadow: starsNear, opacity: 0.7 }} 
          className="absolute rounded-full" 
        />
      </div>
      
      {/* Pull content up over the sticky background */}
      <div className="relative z-10 w-full -mt-[100svh]">
        {children}
      </div>
    </div>
  );
};

export const StoryTransition = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001
  });

  // --- Animation Map ---
  
  // Phase 1: Fade In (as it enters viewport)
  // Phase 2: Fade Out (as it leaves viewport)
  
  // Line 1: "Hey,"
  const line1Opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const line1Y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [20, 0, 0, -40]);

  // Line 2: "I'm Gopinath." (Slightly delayed)
  const line2Opacity = useTransform(smoothProgress, [0.15, 0.45, 0.7, 1], [0, 1, 1, 0]);
  const line2Y = useTransform(smoothProgress, [0.15, 0.45, 0.7, 1], [20, 0, 0, -40]);

  // Outward transition effects applied to the container
  const containerScale = useTransform(smoothProgress, [0.7, 1], [1, 0.96]);
  const containerFilter = useTransform(smoothProgress, [0.7, 1], ["blur(0px)", "blur(4px)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[40vh] flex flex-col items-center justify-center">
      <motion.div 
        className="flex flex-col items-center justify-center"
        style={{ scale: containerScale, filter: containerFilter }}
      >
        <motion.div 
          className="text-[64px] font-semibold text-white tracking-[-0.02em] text-center"
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            opacity: line1Opacity, 
            y: line1Y,
            marginBottom: '12px' 
          }}
        >
          Hey,
        </motion.div>
        <motion.div 
          className="text-[64px] font-semibold text-white tracking-[-0.02em] text-center"
          style={{ 
            fontFamily: "'Inter', sans-serif", 
            opacity: line2Opacity,
            y: line2Y 
          }}
        >
          I'm Gopinath.
        </motion.div>
      </motion.div>
    </section>
  );
};
