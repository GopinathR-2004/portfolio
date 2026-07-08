import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AboutShowcase = () => {
  const containerRef = useRef(null);

  // Track the element's position relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start when top of container hits 80% of viewport height
    // End when top of container hits 30% of viewport height
    offset: ["start 80%", "start 30%"]
  });

  // Apply a gentle spring to the raw scroll progress to smooth out the mouse wheel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 1
  });

  // Left Card Transforms
  const leftX = useTransform(smoothProgress, [0, 1], [0, -220]);
  const leftRotate = useTransform(smoothProgress, [0, 1], [-6, -14]);
  const leftScale = useTransform(smoothProgress, [0, 1], [0.95, 1]);
  const leftOpacity = useTransform(smoothProgress, [0, 1], [0.85, 1]);

  // Right Card Transforms
  const rightX = useTransform(smoothProgress, [0, 1], [0, 220]);
  const rightRotate = useTransform(smoothProgress, [0, 1], [6, 14]);
  const rightScale = useTransform(smoothProgress, [0, 1], [0.95, 1]);
  const rightOpacity = useTransform(smoothProgress, [0, 1], [0.85, 1]);

  // Center Portrait Transforms
  const centerScale = useTransform(smoothProgress, [0, 1], [1, 1.03]);
  const centerY = useTransform(smoothProgress, [0, 1], [0, -12]);

  return (
    <section ref={containerRef} className="w-full flex justify-center items-center px-6 py-20">
      <div className="relative w-full max-w-[1000px] h-[700px] flex justify-center items-center">
        
        {/* Left Project Image (Background) */}
        <motion.div
          style={{
            x: leftX,
            rotate: leftRotate,
            scale: leftScale,
            opacity: leftOpacity
          }}
          className="absolute z-10 w-[300px] h-[400px] rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
        </motion.div>

        {/* Right Project Image (Background) */}
        <motion.div
          style={{
            x: rightX,
            rotate: rightRotate,
            scale: rightScale,
            opacity: rightOpacity
          }}
          className="absolute z-10 w-[280px] h-[380px] rounded-3xl bg-neutral-800 border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent" />
        </motion.div>

        {/* Center Portrait Image (Foreground) */}
        <motion.div
          style={{
            scale: centerScale,
            y: centerY
          }}
          className="absolute z-20 w-[420px] h-[580px] rounded-3xl bg-neutral-950 border border-white/10 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          {/* Placeholder for actual portrait */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
          
          {/* Glass Information Card */}
          <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-4 shadow-lg">
            <div className="w-14 h-14 rounded-full bg-white/20 overflow-hidden shrink-0">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-white font-semibold text-lg tracking-wide">Gopinath R.</div>
              <div className="text-white/60 text-sm mt-0.5">Principal Product Designer</div>
              <div className="text-white/40 text-xs mt-1 font-mono uppercase tracking-widest">Tech Corp</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutShowcase;
