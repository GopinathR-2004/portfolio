import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import centerImage from '../assets/myimage.png';
import leftImage from '../assets/leftimage.png';
import rightImage from '../assets/rightimage.png';
import CinematicStars from './CinematicStars';

const Philosophy = () => {
  const containerRef = useRef(null);
  
  // Main section scroll progress
  const { scrollYProgress: sectionProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothSection = useSpring(sectionProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fading the blue glow out as we scroll down
  const bgOpacity = useTransform(smoothSection, [0, 0.4], [1, 0]);

  // Text Animation
  const textRef = useRef(null);
  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 85%", "center center"]
  });

  const smoothText = useSpring(textProgress, { stiffness: 80, damping: 25 });
  
  const headingY = useTransform(smoothText, [0, 0.8], [40, 0]);
  const headingOpacity = useTransform(smoothText, [0, 0.8], [0, 1]);

  const descY = useTransform(smoothText, [0.5, 1], [30, 0]);
  const descOpacity = useTransform(smoothText, [0.5, 1], [0, 0.8]);

  // Image Showcase Animation
  const showcaseRef = useRef(null);
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ["start 80%", "center center"]
  });

  const smoothShowcase = useSpring(showcaseProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Left Image
  const leftX = useTransform(smoothShowcase, [0, 1], [0, -180]);
  const leftRotate = useTransform(smoothShowcase, [0, 1], [-4, -10]);
  const leftScale = useTransform(smoothShowcase, [0, 1], [0.92, 0.92]);
  
  // Right Image
  const rightX = useTransform(smoothShowcase, [0, 1], [0, 180]);
  const rightRotate = useTransform(smoothShowcase, [0, 1], [4, 10]);
  const rightScale = useTransform(smoothShowcase, [0, 1], [0.92, 0.92]);

  // Center Portrait
  const centerScale = useTransform(smoothShowcase, [0, 1], [1, 1.03]);
  const centerY = useTransform(smoothShowcase, [0, 1], [0, -10]);
  const centerOpacity = useTransform(smoothShowcase, [0, 0.5], [0.5, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full flex flex-col items-center overflow-hidden"
      style={{
        paddingTop: '180px',
        paddingBottom: '60px',
        backgroundColor: '#090909'
      }}
    >
      {/* Background glow continuation from Hero */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1000px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% -10%, rgba(45, 90, 255, 0.15) 0%, rgba(9, 9, 9, 0) 70%)',
          opacity: bgOpacity
        }}
      />

      {/* Cinematic Stars Background */}
      <CinematicStars count={300} />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center px-6">
        
        {/* Heading */}
        <div ref={textRef} className="w-full max-w-[820px] mx-auto text-center mb-[56px]">
          <motion.h2 
            className="text-[72px] leading-[1.18] font-medium text-white tracking-[-0.02em]"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              y: headingY,
              opacity: headingOpacity
            }}>
            A designer who codes, an engineer, who cares about pixels.
          </motion.h2>
        </div>

        {/* Description */}
        <motion.div 
          className="w-full max-w-[680px] mx-auto text-center mb-[120px]"
          style={{ y: descY, opacity: descOpacity }}
        >
          <p className="text-[18px] leading-[1.9]" style={{ color: 'rgba(255, 255, 255, 0.72)' }}>
            I build products at the intersection of aesthetics and solid engineering.
            Blending thoughtful UX with performant code for premium experiences.
            Bridging design and development to craft solutions that empower users.
          </p>
        </motion.div>

        {/* Image Showcase */}
        <div 
          ref={showcaseRef}
          className="relative w-full h-[600px] flex justify-center items-center mt-10 perspective-1000"
        >
          {/* Left Image */}
          <motion.div 
            className="absolute rounded-[24px] overflow-hidden shadow-2xl"
            style={{
              x: leftX,
              rotate: leftRotate,
              scale: leftScale,
              width: '380px',
              height: '520px',
              zIndex: 10,
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.7)'
            }}
          >
            <img 
              src={leftImage} 
              alt="Design process" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="absolute rounded-[24px] overflow-hidden shadow-2xl"
            style={{
              x: rightX,
              rotate: rightRotate,
              scale: rightScale,
              width: '380px',
              height: '520px',
              zIndex: 20,
              boxShadow: '0 30px 60px -15px rgba(0,0,0,0.7)'
            }}
          >
            <img 
              src={rightImage} 
              alt="Development process" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Center Portrait */}
          <motion.div 
            className="absolute rounded-[24px] overflow-hidden shadow-2xl"
            style={{
              scale: centerScale,
              y: centerY,
              opacity: centerOpacity,
              width: '420px',
              height: '580px',
              zIndex: 30,
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.8)'
            }}
          >
            <img 
              src={centerImage} 
              alt="Gopinath Portrait" 
              className="w-full h-full object-cover"
            />
            {/* Soft inner shadow/border for premium feel */}
            <div className="absolute inset-0 rounded-[24px] border border-white/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
