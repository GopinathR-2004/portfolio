import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import imgDeals from '../assets/projects/deals_finder.png';
import imgFuture from '../assets/projects/future_me_app.png';
import imgMetro from '../assets/projects/namma_metro.png';
import imgXigi from '../assets/projects/xigi_studio.png';
import CinematicStars from './CinematicStars';

const projects = [
  {
    title: "Deals Finder",
    category: "CAMPAIGN",
    year: "2026",
    color: "bg-[#161616]",
    img: imgDeals,
    desc: "A smart platform that aggregates the best local and online discounts using AI, helping users save money effortlessly on daily purchases."
  },
  {
    title: "Future Me App: Revamping",
    category: "UX REDESIGN",
    year: "2023",
    color: "bg-[#111111]",
    img: imgFuture,
    desc: "Redesigned the core user experience for a habit-tracking application, focusing on intuitive goal setting and motivational visual feedback."
  },
  {
    title: "Enhancing the QR Ticket page in Namma Metro app",
    category: "PRODUCT DESIGN",
    year: "2021",
    color: "bg-[#1A1A1A]",
    img: imgMetro,
    desc: "Streamlined the public transit ticketing flow with a minimalist digital QR interface, significantly reducing passenger onboarding time."
  },
  {
    title: "XIGI Studio",
    category: "WEB EXPERIENCE",
    year: "2022",
    color: "bg-[#0A0A0A]",
    img: imgXigi,
    desc: "A comprehensive digital advertising workspace enabling creators to design, manage, and publish high-quality campaigns for DOOH platforms."
  }
];

const Card = ({ project, i, smoothProgress, totalCards }) => {
  const globalIndex = useTransform(smoothProgress, [0, 1], [0, totalCards - 1]);
  const relativeIndex = useTransform(globalIndex, (v) => v - i);

  const scale = useTransform(relativeIndex, (v) => {
    if (v <= -1) return 0.96;
    if (v < 0) return 1 + (v * 0.04);
    if (v <= 1) return 1 - (v * 0.05);
    if (v <= 2) return 0.95 - ((v - 1) * 0.03);
    if (v <= 3) return 0.92 - ((v - 2) * 0.04);
    return 0.88;
  });

  const y = useTransform(relativeIndex, (v) => {
    if (v <= -1) return "100vh";
    if (v < 0) return `calc(${v * -100}vh)`;
    if (v <= 1) return `${v * -30}px`;
    if (v <= 2) return `${-30 - (v - 1) * 30}px`;
    if (v <= 3) return `${-60 - (v - 2) * 30}px`;
    return "-90px";
  });

  const opacity = useTransform(relativeIndex, (v) => {
    if (v <= 0) return 1;
    if (v <= 1) return 1 - (v * 0.35);
    if (v <= 2) return 0.65 - ((v - 1) * 0.20);
    if (v <= 3) return 0.45 - ((v - 2) * 0.20);
    return 0.25;
  });

  const filter = useTransform(relativeIndex, (v) => {
    let b = 0;
    let br = 100;
    
    if (v <= 0) {
      b = 0;
      br = 100;
    } else if (v <= 1) {
      b = v * 2;
      br = 100 - (v * 30);
    } else if (v <= 2) {
      b = 2 + (v - 1) * 2;
      br = 70 - (v - 1) * 25;
    } else if (v <= 3) {
      b = 4 + (v - 2) * 2;
      br = 45 - (v - 2) * 20;
    } else {
      b = 6;
      br = 25;
    }
    return `blur(${b}px) brightness(${br}%)`;
  });

  const rotate = useTransform(relativeIndex, (v) => {
    if (v <= 0) return "0deg";
    if (v <= 1) return `${v * -1}deg`;
    if (v <= 2) return `${-1 + (v - 1) * 2}deg`;
    if (v <= 3) return `${1 - (v - 2) * 2}deg`;
    return "-1deg";
  });

  const boxShadow = useTransform(relativeIndex, (v) => {
    if (v <= -1) return "0 0px 0px 0px rgba(0,0,0,0)";
    if (v < 0) return `0 ${40 * (v + 1)}px ${80 * (v + 1)}px -20px rgba(0,0,0,${0.8 * (v + 1)})`;
    if (v <= 1) return `0 ${40 - v * 20}px ${80 - v * 40}px -${20 - v * 10}px rgba(0,0,0,${0.8 - v * 0.5})`;
    return "0 20px 40px -10px rgba(0,0,0,0.3)";
  });

  return (
    <motion.div 
      style={{ 
        scale, 
        y, 
        opacity, 
        filter: blur,
        rotate,
        boxShadow,
        transformOrigin: "top center",
      }}
      className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1120px] h-[720px] rounded-[32px] overflow-hidden border border-white/10 flex flex-col ${project.color}`}
    >
      {/* 65% Image Area */}
      <div className="w-full h-[65%] relative overflow-hidden bg-black/40">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle overlay gradient to blend the image perfectly into the dark card */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* 35% Content Area */}
      <div className="w-full h-[35%] p-10 flex flex-col justify-between bg-black/20">
        <div className="flex justify-between items-start">
          <div className="max-w-[80%]">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-3">
              {project.category}
            </div>
            <h3 className="text-3xl font-serif text-white tracking-wide mb-3">
              {project.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2 max-w-[90%]">
              {project.desc}
            </p>
          </div>
          <div className="text-white/40 text-sm font-mono mt-1">
            {project.year}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SelectedWork = () => {
  const containerRef = useRef(null);
  
  const containerHeight = `${projects.length * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 1
  });

  return (
    <section className="relative w-full">
      {/* Introduction Header */}
      <div className="w-full flex flex-col items-center justify-center text-center px-6 pt-20 pb-[80px] relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[64px] md:text-[80px] text-white font-medium mb-6 leading-[1.1] max-w-[900px]"
        >
          Selected Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 font-light max-w-[700px]"
        >
          A collection of projects showcasing my process in crafting meaningful digital experiences.
        </motion.p>
      </div>

      <div ref={containerRef} style={{ height: containerHeight }} className="relative w-full">
      
        {/* 
          Sticky Container 
          position: sticky; top: 12vh; 
        */}
        <div className="sticky top-[12vh] w-full h-[720px] overflow-visible">
          
          {/* Cinematic Stars overlaying the whole viewport behind cards */}
          <div className="absolute top-[-12vh] left-0 w-full h-[100vh] pointer-events-none z-[-1] overflow-hidden">
            <CinematicStars count={300} />
          </div>

          {/* Render all cards absolute positioned on top of each other. */}
          {projects.map((project, i) => (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              smoothProgress={smoothProgress} 
              totalCards={projects.length}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
