import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

import img1 from '../assets/design_system.png';
import img2 from '../assets/Case Study.png';
import img3 from '../assets/xigi_screens.png';
import aiDashboardImg from '../assets/ai_dashboard.png';
import mobileBankingImg from '../assets/mobile_banking.png';

const projects = [
  {
    id: 1,
    title: "Saas Product",
    desc: "A sophisticated platform for generating and managing marketing campaigns using AI. Involves complex logic, user management, and data processing.",
    img: img1,
    delay: 0
  },
  {
    id: 2,
    title: "Logo Design",
    desc: "Built WhatsApp automation with auto-replies, scheduling, and real-time analytics to boost engagement. Integrated campaign management for seamless customer communication.",
    img: img2,
    delay: 0.12
  },
  {
    id: 3,
    title: "Card and sutable Labels",
    desc: "A sophisticated platform for generating campaigns using AI. Involves complex logic and data processing.",
    img: img3,
    delay: 0.24
  },
  {
    id: 4,
    title: "AI Dashboard",
    desc: "Enterprise analytics platform with modern data visualization and interactive dashboards.",
    img: aiDashboardImg,
    delay: 0.36
  },
  {
    id: 5,
    title: "Mobile Banking",
    desc: "Premium fintech mobile experience focused on onboarding and financial management.",
    img: mobileBankingImg,
    delay: 0.48
  }
];

const easeOutExpo = [0.16, 1, 0.3, 1];

const Card = ({ project }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: easeOutExpo, delay: project.delay }}
      className="shrink-0 relative w-[90vw] md:w-[420px] lg:w-[520px] h-[480px] md:h-[600px] lg:h-[700px] rounded-[26px] overflow-hidden group"
      style={{
        backgroundColor: '#1A1A1A',
        boxShadow: isHovered ? '0 14px 40px rgba(0,0,0,0.26)' : '0 10px 40px rgba(0,0,0,0.22)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderColor: isHovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)',
        transition: 'box-shadow 400ms ease-out, border-color 400ms ease-out, transform 400ms ease-out',
        transform: isHovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0px) scale(1)',
      }}
    >
      <motion.div
        className="w-full h-full flex flex-col"
        animate={{
          x: isHovered ? mousePos.x * 12 : 0,
          y: isHovered ? mousePos.y * 12 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        {/* Image Area - 73% */}
        <div className="w-full h-[73%] relative overflow-hidden shrink-0 bg-[#222]">
          <img 
            src={project.img} 
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{
              transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 400ms ease-out'
            }}
          />
        </div>

        {/* Bottom Content - 27% */}
        <div className="w-full h-[27%] flex flex-col justify-center" style={{ padding: '32px' }}>
          <h3 
            style={{ 
              fontSize: '26px', 
              fontWeight: 500, 
              lineHeight: '110%', 
              color: '#FFFFFF',
              marginBottom: '14px' 
            }}
          >
            {project.title}
          </h3>
          <p 
            className="line-clamp-3"
            style={{
              fontSize: '15px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '90%',
              lineHeight: '1.5',
              margin: 0
            }}
          >
            {project.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioGallery = () => {
  const targetRef = useRef(null);
  
  // Track vertical scroll progress ONLY while the section is sticking to the screen
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Dynamically calculate the perfect translation distance using CSS calc
  // 100vw (viewport) - 100% (container width) = total distance to move
  const x = useMotionTemplate`calc((100vw - 100%) * ${scrollYProgress})`;

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-[#090909]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full">
        <motion.div 
          className="flex w-max"
          style={{ 
            x, // Apply dynamic horizontal translation
            gap: '24px',
            paddingLeft: 'max(24px, calc((100vw - 1500px) / 2 + 24px))',
            paddingRight: '24px'
          }}
        >
          {projects.map((proj) => (
            <Card key={proj.id} project={proj} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
