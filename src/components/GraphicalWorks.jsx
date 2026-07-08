import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import xigiScreensImg from '../assets/xigi_screens.png';
import designSystemImg from '../assets/design_system.png';
import caseStudyImg from '../assets/Case Study.png';

// Reusing the star generator logic for the background
const generateStars = (count, size, maxW = 2000, maxH = 2000) => {
  let shadows = [];
  for (let i = 0; i < count; i++) {
    shadows.push(`${Math.floor(Math.random() * maxW)}px ${Math.floor(Math.random() * maxH)}px rgba(255, 255, 255, 0.8)`);
  }
  return shadows.join(', ');
};

const GraphicalWorks = () => {
  const starsFar = useMemo(() => generateStars(250, 1), []);
  const starsMid = useMemo(() => generateStars(100, 2), []);
  const starsNear = useMemo(() => generateStars(40, 3), []);

  return (
    <>
      {/* Light to Dark Transition */}
      <div 
        className="w-full h-[180px]"
        style={{
          background: 'linear-gradient(180deg, #FAFAFA 0%, #ECECEC 15%, #BEBEBE 30%, #777777 45%, #4A4A4A 60%, #2B2B2B 75%, #181818 85%, #090909 100%)'
        }}
      />

      <section className="relative w-full bg-[#090909] pt-[100px] pb-[180px] flex flex-col items-center overflow-hidden">
        
        {/* Star Field Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <div 
            style={{ width: '1px', height: '1px', boxShadow: starsFar, opacity: 0.3 }} 
            className="absolute rounded-full" 
          />
          <div 
            style={{ width: '2px', height: '2px', boxShadow: starsMid, opacity: 0.5 }} 
            className="absolute rounded-full" 
          />
          <div 
            style={{ width: '3px', height: '3px', boxShadow: starsNear, opacity: 0.7 }} 
            className="absolute rounded-full" 
          />
        </div>

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 mb-16">
          <h2 
            className="font-serif text-[48px] md:text-[64px] text-white font-medium mb-4 leading-tight"
          >
            Graphical works
          </h2>
          <p className="text-white/80 text-[18px] md:text-[20px] font-medium tracking-tight">
            Treat your eyes to my quick showreel instead!
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="relative z-10 w-full max-w-[1280px] px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Column (2 Rows) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            
            {/* Card 1: Nautinati */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-[#F5F5F5] rounded-[32px] overflow-hidden flex flex-col pt-10 px-10 relative h-[420px] group border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="font-bold text-blue-500 text-xl tracking-tighter">Nautinati</div>
                <h3 className="text-[32px] font-semibold text-[#111] leading-none">Nautinati</h3>
              </div>
              <p className="text-[#666] text-[16px] md:text-[18px] max-w-[500px] leading-relaxed mb-10">
                Redesigning Nauti Nati's Product Detail Page to create a more engaging and seamless shopping experience for parents.
              </p>
              <div className="w-full flex-grow relative overflow-hidden rounded-t-[16px] shadow-2xl mt-auto">
                <img 
                  src={designSystemImg} 
                  alt="Nautinati Showcase" 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Card 2: Nuvama */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-[#F5F5F5] rounded-[32px] overflow-hidden flex flex-col pt-10 px-10 relative h-[420px] group border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#0B0F19] rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="w-5 h-5 bg-red-500 rounded-sm" />
                </div>
                <h3 className="text-[32px] font-semibold text-[#111] leading-none">Nuvama wealth</h3>
              </div>
              <p className="text-[#666] text-[16px] md:text-[18px] max-w-[500px] leading-relaxed mb-10">
                Designed a 150+ icon set for the Product Bouquet & Order Book, cutting dev time by 45% and improving usability for clients and RMs.
              </p>
              <div className="w-full flex-grow relative overflow-hidden rounded-t-[16px] shadow-2xl mt-auto">
                <img 
                  src={caseStudyImg} 
                  alt="Nuvama Showcase" 
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>

          </div>

          {/* Right Column (1 Tall Card) */}
          <div className="md:col-span-1 flex h-full">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-[#F5F5F5] rounded-[32px] overflow-hidden flex flex-col pt-10 px-8 relative group border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FFD100] rounded-xl flex items-center justify-center text-black font-bold text-xl">
                  B
                </div>
                <h3 className="text-[32px] font-semibold text-[#111] leading-none">Bewakoof</h3>
              </div>
              <p className="text-[#666] text-[16px] md:text-[18px] leading-relaxed mb-10">
                Instant Flash Delivery brings users' favourite fits to their doorstep in just 2 hours ⚡ - Less waiting, more instant delivery. 🔥
              </p>
              <div className="w-full flex-grow relative overflow-hidden rounded-t-[16px] shadow-2xl mt-auto">
                <img 
                  src={xigiScreensImg} 
                  alt="Bewakoof Showcase" 
                  className="w-[120%] max-w-none h-auto object-cover object-left-top origin-top-left transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
};

export default GraphicalWorks;
