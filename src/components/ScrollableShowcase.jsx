import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import xigiScreensImg from '../assets/xigi_screens.png';
import designSystemImg from '../assets/design_system.png';
import caseStudyImg from '../assets/Case Study.png';

// Reusing the star generator logic for the background to seamlessly continue the space theme
const generateStars = (count, size, maxW = 2000, maxH = 2000) => {
  let shadows = [];
  for (let i = 0; i < count; i++) {
    shadows.push(`${Math.floor(Math.random() * maxW)}px ${Math.floor(Math.random() * maxH)}px rgba(255, 255, 255, 0.8)`);
  }
  return shadows.join(', ');
};

const ScrollableShowcase = () => {
  const starsFar = useMemo(() => generateStars(200, 1), []);
  const starsMid = useMemo(() => generateStars(80, 2), []);
  const starsNear = useMemo(() => generateStars(30, 3), []);

  return (
    <section className="relative w-full bg-[#090909] py-[100px] flex flex-col overflow-hidden z-10">
      
      {/* Star Field Background - Matches GraphicalWorks perfectly */}
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

      {/* Scrollable Cards Container */}
      <div 
        className="relative z-10 w-full flex overflow-x-auto gap-6 md:gap-8 snap-x snap-mandatory pb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-0"
        style={{ paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))' }}
      >
        
        {/* Card 1 */}
        <div className="min-w-[85vw] md:min-w-[460px] lg:min-w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden flex flex-col snap-start shrink-0 h-[580px] md:h-[620px] group shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="w-full h-[320px] md:h-[360px] relative overflow-hidden bg-black/40 shrink-0">
            <img 
              src={designSystemImg} 
              alt="Saas Product" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col flex-grow justify-start bg-gradient-to-b from-transparent to-black/40">
            <h4 className="text-white text-[28px] md:text-[32px] font-semibold mb-3 md:mb-4 tracking-tight">Saas Product</h4>
            <p className="text-[#A0A0A0] text-[16px] md:text-[18px] leading-[1.7]">
              A sophisticated platform for generating and managing marketing campaigns using AI. Involves complex logic, user management, and data processing.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[85vw] md:min-w-[460px] lg:min-w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden flex flex-col snap-start shrink-0 h-[580px] md:h-[620px] group shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="w-full h-[320px] md:h-[360px] relative overflow-hidden bg-black/40 shrink-0">
            <img 
              src={caseStudyImg} 
              alt="Logo Design" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col flex-grow justify-start bg-gradient-to-b from-transparent to-black/40">
            <h4 className="text-white text-[28px] md:text-[32px] font-semibold mb-3 md:mb-4 tracking-tight">Logo Design</h4>
            <p className="text-[#A0A0A0] text-[16px] md:text-[18px] leading-[1.7]">
              Built WhatsApp automation with auto-replies, scheduling, and real-time analytics to boost engagement. Integrated campaign management for seamless customer communication.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[85vw] md:min-w-[460px] lg:min-w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden flex flex-col snap-start shrink-0 h-[580px] md:h-[620px] group shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="w-full h-[320px] md:h-[360px] relative overflow-hidden bg-black/40 shrink-0">
            <img 
              src={xigiScreensImg} 
              alt="Card and sutable Labels" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col flex-grow justify-start bg-gradient-to-b from-transparent to-black/40">
            <h4 className="text-white text-[28px] md:text-[32px] font-semibold mb-3 md:mb-4 tracking-tight">Card and sutable Labels</h4>
            <p className="text-[#A0A0A0] text-[16px] md:text-[18px] leading-[1.7]">
              A sophisticated platform for generating campaigns using AI. Involves complex logic and data processing.
            </p>
          </div>
        </div>

        {/* Card 4 (Demo) */}
        <div className="min-w-[85vw] md:min-w-[460px] lg:min-w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden flex flex-col snap-start shrink-0 h-[580px] md:h-[620px] group shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="w-full h-[320px] md:h-[360px] relative overflow-hidden bg-black/40 shrink-0">
            <img 
              src={designSystemImg} 
              alt="Fintech App" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col flex-grow justify-start bg-gradient-to-b from-transparent to-black/40">
            <h4 className="text-white text-[28px] md:text-[32px] font-semibold mb-3 md:mb-4 tracking-tight">Fintech App Design</h4>
            <p className="text-[#A0A0A0] text-[16px] md:text-[18px] leading-[1.7]">
              A clean, modern financial dashboard built for scale. Focuses on rapid data consumption and clear metrics.
            </p>
          </div>
        </div>

        {/* Card 5 (Demo) */}
        <div className="min-w-[85vw] md:min-w-[460px] lg:min-w-[480px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden flex flex-col snap-start shrink-0 h-[580px] md:h-[620px] group shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div className="w-full h-[320px] md:h-[360px] relative overflow-hidden bg-black/40 shrink-0">
            <img 
              src={caseStudyImg} 
              alt="Health Platform" 
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col flex-grow justify-start bg-gradient-to-b from-transparent to-black/40">
            <h4 className="text-white text-[28px] md:text-[32px] font-semibold mb-3 md:mb-4 tracking-tight">Health Platform</h4>
            <p className="text-[#A0A0A0] text-[16px] md:text-[18px] leading-[1.7]">
              Comprehensive patient management system bridging the gap between doctors and virtual consultations seamlessly.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ScrollableShowcase;
