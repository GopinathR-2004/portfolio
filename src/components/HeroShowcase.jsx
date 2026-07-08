import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  { id: 0, title: "Future Me", category: "CAMPAIGN", year: "2026", color: "bg-neutral-800" },
  { id: 1, title: "Namma Metro", category: "UX REDESIGN", year: "2023", color: "bg-neutral-900" },
  { id: 2, title: "XIGI Studio", category: "WEB EXPERIENCE", year: "2022", color: "bg-neutral-800" },
  { id: 3, title: "Deals Finder", category: "PRODUCT DESIGN", year: "2021", color: "bg-neutral-900" },
];

const positions = [
  { // 0: Center (Front)
    x: 0, y: 0, rotate: 0, scale: 1, zIndex: 40, opacity: 1, blur: 0,
    width: 420, height: 560, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)"
  },
  { // 1: Top Right
    x: 120, y: -60, rotate: 8, scale: 1, zIndex: 30, opacity: 1, blur: 0,
    width: 320, height: 420, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
  },
  { // 2: Back Card
    x: 50, y: -20, rotate: 16, scale: 1, zIndex: 20, opacity: 0.8, blur: 2,
    width: 300, height: 400, boxShadow: "none"
  },
  { // 3: Bottom Left
    x: -140, y: 80, rotate: -10, scale: 1, zIndex: 30, opacity: 1, blur: 0,
    width: 260, height: 360, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
  },
];

const CinematicLighting = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible">
      {/* Massive Deep Blue Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
        className="absolute"
        style={{
          width: '900px',
          height: '900px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 1) 0%, rgba(37, 99, 235, 0.8) 30%, rgba(9, 9, 9, 0) 70%)',
          filter: 'blur(140px)',
          transform: 'translate3d(0,0,0)'
        }}
      />
      {/* Secondary Cyan Glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1.7, ease: "easeOut" }}
        className="absolute top-[60%]"
        style={{
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 1) 0%, rgba(9, 9, 9, 0) 70%)',
          filter: 'blur(100px)',
        }}
      />
      {/* Small Purple Highlight */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1.9, ease: "easeOut" }}
        className="absolute top-[75%] left-[40%]"
        style={{
          width: '400px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 1) 0%, rgba(9, 9, 9, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Cinematic Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
      />
    </div>
  );
};

const HeroShowcase = () => {
  const [indexOffset, setIndexOffset] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexOffset((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Mouse Parallax & Perspective Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Perspective transforms based on mouse (Max 6 degrees)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      className="relative w-full h-[700px] flex items-center justify-center overflow-visible"
      style={{ perspective: 1400 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CinematicLighting />

      <motion.div 
        className="relative z-10 w-full h-full flex items-center justify-center transform-gpu"
        style={{ rotateX, rotateY }}
      >
        <AnimatePresence>
          {projects.map((project, idx) => {
            const posIndex = (idx + indexOffset) % 4;
            const pos = positions[posIndex];
            const isFront = posIndex === 0;

            return (
              <motion.div
                key={project.id}
                className={`absolute rounded-[32px] border border-white/10 overflow-hidden cursor-pointer ${project.color} flex flex-col justify-end`}
                initial={false}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  rotate: pos.rotate,
                  scale: pos.scale,
                  zIndex: pos.zIndex,
                  opacity: pos.opacity,
                  width: pos.width,
                  height: pos.height,
                  filter: `blur(${pos.blur}px)`,
                  boxShadow: pos.boxShadow
                }}
                transition={{
                  type: "spring",
                  damping: 18,
                  stiffness: 120,
                  duration: 0.9,
                  mass: 1,
                }}
                whileHover={isFront ? { 
                  scale: 1.02,
                  boxShadow: "0 50px 100px -20px rgba(0,0,0,1)",
                } : {}}
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-white/5" />
                
                {/* Editorial Bottom Overlay */}
                <motion.div 
                  animate={{ opacity: isFront ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full p-8 pt-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2">
                        {project.category}
                      </div>
                      <div className="text-white font-serif text-3xl tracking-wide">
                        {project.title}
                      </div>
                    </div>
                    <div className="text-white/40 text-sm font-mono mb-1">
                      {project.year}
                    </div>
                  </div>
                </motion.div>
                
                {/* Simulated Glass Highlight */}
                <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none" style={{ mixBlendMode: 'overlay' }} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HeroShowcase;
