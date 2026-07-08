import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/skills/ui_visual_design.png';
import img2 from '../assets/skills/ux_problem_solving.png';
import img3 from '../assets/skills/info_architecture.png';
import img4 from '../assets/skills/user_centered_design.png';
import img5 from '../assets/skills/business_impact.png';
import img6 from '../assets/skills/communication_collab.png';

const skillsData = [
  { id: '01', title: 'UI/Visual Design', img: img1 },
  { id: '02', title: 'UX & Problem solving Skills', img: img2 },
  { id: '03', title: 'Information architecture, UX journey mapping', img: img3 },
  { id: '04', title: 'User-centered design', img: img4 },
  { id: '05', title: 'Business Impact & Growth', img: img5 },
  { id: '06', title: 'Communication & Collaboration', img: img6 },
];

const StrategicSkills = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-[40px] pb-[120px] flex flex-col items-center z-10">
      <div className="w-full max-w-[1280px] px-6">
        
        {/* Top Header */}
        <div className="mb-[60px]">
          <h3 className="text-[#888888] text-[18px] md:text-[20px] font-medium tracking-tight">
            My Strategic Product Skills
          </h3>
        </div>

        {/* Column Labels */}
        <div className="flex w-full text-[#A0A0A0] text-[12px] font-medium tracking-wider mb-4">
          <div className="w-[20%] md:w-[15%]">Pillar</div>
          <div className="w-[80%] md:w-[85%]">Skills i got!</div>
        </div>

        {/* Rows Container */}
        <div className="flex flex-col border-t border-[#EAEAEA]">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.id}
              className="relative border-b border-[#EAEAEA] group cursor-pointer"
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {/* Hover Background - Orange */}
              <div 
                className={`absolute -inset-x-6 md:-inset-x-12 inset-y-0 transition-colors duration-300 rounded-lg md:rounded-none ${hoveredRow === index ? 'bg-[#FF4500]' : 'bg-transparent'}`}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center w-full py-6 md:py-8 px-4 md:px-0">
                <div 
                  className={`w-[20%] md:w-[15%] text-[20px] md:text-[26px] font-medium transition-colors duration-300 ${hoveredRow === index ? 'text-white' : 'text-[#333333]'}`}
                >
                  {skill.id}
                </div>
                <div 
                  className={`w-[80%] md:w-[85%] text-[20px] md:text-[26px] font-medium transition-colors duration-300 ${hoveredRow === index ? 'text-white' : 'text-[#111111]'}`}
                >
                  {skill.title}
                </div>
              </div>

              {/* Hover Image */}
              <AnimatePresence>
                {hoveredRow === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute right-[2%] top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block"
                  >
                    <img 
                      src={skill.img} 
                      alt={skill.title} 
                      className="w-[360px] h-[240px] object-cover rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-black/5"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicSkills;
