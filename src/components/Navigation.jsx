import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Moon } from 'lucide-react';

const navItems = ['About', 'Work', 'Projects', 'Contact'];

const Navigation = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        className="flex items-center justify-between h-[56px] md:h-[52px] rounded-full px-5 md:px-6 transition-all duration-300 w-[92%] max-w-[360px] md:w-fit md:max-w-none md:min-w-[400px]"
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" className="text-white font-semibold text-[11px] md:text-sm tracking-widest md:mr-8 hover:opacity-80 transition-opacity">
          GOPINATH
        </a>

        {/* Menu Items */}
        <ul className="flex items-center gap-6 mr-8 hidden md:flex">
          {navItems.map((item) => (
            <li key={item} className="group relative">
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-white/60 text-sm font-medium transition-all duration-300 ease-out group-hover:text-white inline-block group-hover:-translate-y-0.5"
              >
                {item}
              </a>
              {/* Underline grow from center */}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 rounded-full" />
            </li>
          ))}
        </ul>

        {/* Theme Toggle Placeholder */}
        <button className="text-white/60 hover:text-white transition-colors duration-300 p-1 rounded-full hover:bg-white/10">
          <Moon size={18} strokeWidth={2} />
        </button>
      </motion.nav>
    </motion.div>
  );
};

export default Navigation;
