import React from 'react';
import { motion } from 'framer-motion';
import CinematicStars from './CinematicStars';
import handCursor from '../assets/real_hand_transparent.png';

const ResumeSection = () => {

  return (
    <section className="relative w-full bg-[#090909] py-[140px] md:py-[200px] flex flex-col items-center justify-center overflow-hidden z-10">
      
      {/* Cinematic Star Field Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <CinematicStars count={250} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-[1000px]">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-[32px] md:text-[52px] lg:text-[60px] leading-[1.2] tracking-tight mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          You've Seen My Work That's All You Need!<br className="hidden md:block" />
          But If You Insist, Here's My Resume.
        </motion.h2>

        <div className="relative mt-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-transparent text-white text-[16px] font-medium transition-colors relative z-10"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 15L8 11M12 15L16 11M12 15V3M21 19H3" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Download Resume
          </motion.a>
          
          {/* Animated Real Hand Cursor */}
          <motion.img 
            src={handCursor}
            alt="Pointer Hand"
            className="absolute -right-[30px] md:-right-[70px] top-[15px] w-[120px] h-[120px] md:w-[180px] md:h-[180px] pointer-events-none drop-shadow-2xl z-20"
            initial={{ x: 60, y: 80, opacity: 0, rotate: 0 }}
            whileInView={{ 
              x: [80, 0, 0, 0, 0, 0, 80],
              y: [100, 0, 0, 0, 0, 0, 100],
              opacity: [0, 1, 1, 1, 1, 1, 0],
              scale: [1, 1, 1, 0.9, 1, 1, 1],
              rotate: [10, 0, 0, -5, 0, 0, 10]
            }}
            transition={{ 
              duration: 3.5, 
              ease: "easeInOut",
              times: [0, 0.3, 0.4, 0.45, 0.5, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 2
            }}
            viewport={{ once: false, margin: "-50px" }}
          />
        </div>
      </div>

    </section>
  );
};

export default ResumeSection;
