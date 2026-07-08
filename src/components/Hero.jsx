import React, { useState, useRef } from 'react';
import './Hero.css';
import heroBack from '../assets/hero_back.png';
import cardFront from '../assets/right_ani_3.png';
import cardSecond from '../assets/right_ani_1.png';
import cardThird from '../assets/right _ani_2.png';

const Hero = () => {
  const [mouseRot, setMouseRot] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;
    
    const clampedX = Math.max(-1, Math.min(1, x));
    const clampedY = Math.max(-1, Math.min(1, y));
    
    setMouseRot({ x: clampedY * -5, y: clampedX * 5 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseRot({ x: 0, y: 0 });
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBack})` }}>
      <div className="hero-content-wrapper">
        <div className="hero-grid">
          
          <div className="hero-left">
            <div className="hero-label fade-up delay-1">HELLO WORLD, I'M</div>
            <h1 className="hero-heading fade-up delay-2">Gopinath R.</h1>
            <div className="hero-role fade-up delay-3">
              <span>Product Designer</span>
              <span className="hero-dot">•</span>
              <span>UI/UX Designer</span>
              <span className="hero-dot">•</span>
              <span>Frontend Developer</span>
            </div>
            <p className="hero-description fade-up delay-4">
              Designing intuitive digital experiences and scalable digital products that solve real business problems through strategy, user-centered thinking, and visual craftsmanship.
            </p>
            <div className="hero-buttons fade-up delay-5">
              <button className="hero-btn-primary">View Project</button>
              <button className="hero-btn-secondary">Download Resume</button>
            </div>
          </div>

          <div className="hero-right fade-in-cards">
            <div 
              className="hero-cards-container"
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="hero-cards-interactive"
                style={{
                  transform: `rotateX(${mouseRot.x}deg) rotateY(${mouseRot.y}deg) scale(${isHovered ? 1.02 : 1})`,
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }}
              >
                <img src={cardThird} alt="Project 3" className="hero-card card-3" />
                <img src={cardSecond} alt="Project 2" className="hero-card card-2" />
                <img src={cardFront} alt="Project 1" className="hero-card card-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
