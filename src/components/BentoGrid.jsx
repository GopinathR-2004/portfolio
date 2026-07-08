import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BentoGrid = ({ featuredProjects, designSystem, caseStudy }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch featured project every 4 seconds
  useEffect(() => {
    if (!featuredProjects || featuredProjects.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredProjects]);

  // Viewport entrance animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const activeProject = featuredProjects[activeIndex];

  return (
    <>
      {/* Dedicated Transition Section */}
      <div 
        className="w-full h-[180px]"
        style={{
          background: 'linear-gradient(180deg, #090909 0%, #181818 15%, #2B2B2B 30%, #4A4A4A 45%, #777777 60%, #BEBEBE 75%, #ECECEC 85%, #FAFAFA 100%)'
        }}
      />

      <section className="relative w-full bg-[#FAFAFA] pt-[160px] pb-[60px] flex flex-col items-center overflow-visible z-10">
        
        {/* Soft Depth Radial Blur */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-5" 
          style={{ 
            background: 'radial-gradient(circle at top center, #000000 0%, transparent 70%)',
            filter: 'blur(120px)',
            zIndex: 0
          }} 
        />
        
        {/* Section Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center px-6 mb-[72px] relative z-10"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-[42px] md:text-[68px] text-[#111111] font-medium mb-6 leading-[1.1] max-w-[820px]"
          >
            I tell stories through design.
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-[18px] text-[#111111]/72 font-light max-w-[640px]"
          >
            Every product has a story, and I'm excited to share the ones I've created.
          </motion.p>
        </motion.div>

      {/* Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1280px] px-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
      >
        
        {/* LARGE CARD (Full Width on Desktop) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 relative w-full rounded-[28px] bg-[#111111] border border-black/[0.06] overflow-hidden flex flex-col md:flex-row min-h-[500px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
        >
          {/* Left Content Area */}
          <div className="w-full md:w-[45%] p-10 md:p-14 flex flex-col justify-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <h3 className="font-serif text-[40px] md:text-[56px] text-white leading-tight mb-4">
                  {activeProject.title}
                </h3>
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-[400px]">
                  {activeProject.description}
                </p>
                
                {/* Logo Row Indicator */}
                <div className="flex items-center gap-6 mt-auto">
                  {featuredProjects.map((proj, idx) => (
                    <div 
                      key={idx}
                      className={`text-sm md:text-base font-medium transition-all duration-500 ${activeIndex === idx ? 'text-white scale-110' : 'text-white/30'}`}
                      style={{ 
                        textShadow: activeIndex === idx ? `0 0 12px ${proj.themeColor}80` : 'none',
                        color: activeIndex === idx ? proj.themeColor : undefined
                      }}
                    >
                      {proj.logoText}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image Area */}
          <div className="w-full md:w-[55%] relative overflow-hidden flex items-center justify-center p-6 md:p-0">
            {/* Dynamic Background Accent */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${activeProject.themeColor}, transparent 70%)`
                }}
              />
            </AnimatePresence>

            {/* Auto-switching Preview Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${activeIndex}`}
                src={activeProject.image}
                alt={activeProject.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[90%] md:max-w-[85%] h-auto object-contain drop-shadow-2xl rounded-xl md:translate-x-[5%]"
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* SMALL CARD 1: Design System */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full rounded-[28px] bg-gradient-to-br from-[#E2F7EB] to-[#88F0BE] border border-black/[0.06] overflow-hidden flex flex-col min-h-[460px] md:min-h-[500px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
        >
          {/* Content */}
          <div className="p-10 pb-0 relative z-10 flex flex-col h-full">
            <h3 className="font-serif text-[40px] text-[#090909] leading-tight mb-2">
              {designSystem.title}
            </h3>
            <p className="text-[#090909]/70 text-base mb-6 max-w-[280px]">
              {designSystem.description}
            </p>
            
            {/* Image fills bottom area */}
            <div className="flex-grow flex items-end justify-center mt-4">
              <motion.img 
                src={designSystem.image}
                alt={designSystem.title}
                className="w-full max-w-[110%] h-auto object-cover object-top origin-bottom"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
              />
            </div>
          </div>
        </motion.div>

        {/* SMALL CARD 2: Case Study */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full rounded-[28px] bg-gradient-to-br from-[#E8F2FE] to-[#AECBFA] border border-black/[0.06] overflow-hidden flex flex-col min-h-[460px] md:min-h-[500px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
        >
          {/* Content */}
          <div className="p-10 pb-0 relative z-10 flex flex-col h-full">
            <h3 className="font-serif text-[40px] text-[#090909] leading-tight mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-[#090909]/70 text-base mb-6 max-w-[280px]">
              {caseStudy.description}
            </p>
            
            {/* Image fills bottom area */}
            <div className="flex-grow flex items-end justify-center mt-4">
              <motion.img 
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-[120%] max-w-[120%] h-auto object-cover object-top origin-bottom translate-x-4"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
              />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
    </>
  );
};

export default BentoGrid;
