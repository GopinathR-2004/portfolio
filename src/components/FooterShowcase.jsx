import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/myimage.png';
import CinematicStars from './CinematicStars';

const BehanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4V6z"></path>
    <path d="M4 14h7a5 5 0 0 1 5 5 5 5 0 0 1-5 5H4v-10z"></path>
    <line x1="16" y1="8" x2="20" y2="8"></line>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FooterShowcase = () => {
  return (
    <footer className="relative w-full bg-[#090909] pt-[160px] pb-[80px] flex flex-col items-center overflow-hidden z-10">
      {/* Cinematic Star Field Background - subtly fading in from the bottom */}
      <div className="absolute bottom-0 w-full h-[60%] pointer-events-none z-0">
        <CinematicStars count={250} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-[800px] w-full">
        
        {/* Profile Card Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mb-12 relative"
        >
          {/* Abstract Wave SVG behind the profile */}
          <svg className="absolute right-[100%] mr-[-20px] top-1/2 -translate-y-1/2 w-[50px] h-[100px] text-[#332a13] hidden md:block" viewBox="0 0 50 100" fill="none">
            <path d="M 50 5 A 45 45 0 0 0 50 95" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
            <path d="M 50 30 A 20 20 0 0 0 50 70" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
          </svg>
          
          <div className="w-[100px] h-[100px] rounded-[24px] overflow-hidden relative z-10 bg-[#1A1A1A] border border-white/5 shadow-2xl">
            <img src={myImage} alt="Gopinath R" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col items-start text-left">
            <h3 className="text-white text-[32px] md:text-[36px] font-medium leading-none mb-2 tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Gopinath R
            </h3>
            <p className="text-[#888] text-[14px] md:text-[15px] mb-4">UI/UX designer</p>
            <div className="flex gap-4 text-[#888]">
              <a href="#" className="hover:text-white transition-colors" aria-label="Behance"><BehanceIcon /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </motion.div>

        {/* Contact Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col items-center"
        >
          <p className="text-[#666] text-[14px] uppercase tracking-widest mb-4">Contact me</p>
          <a 
            href="mailto:gopinathr9344@gmail.com" 
            className="text-white text-[28px] md:text-[48px] hover:text-[#bbb] transition-colors tracking-tight break-all md:break-normal px-4" 
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            gopinathr9344@gmail.com
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-[480px]"
        >
          <p className="text-[#888] text-[16px] md:text-[18px] leading-[1.7]">
            Hit me up if you're looking for a <span className="text-white font-medium">fast, reliable</span><br />
            <span className="text-white font-medium">uiux designer</span> who can bring your vision to life
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterShowcase;
