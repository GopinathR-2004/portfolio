import React, { useEffect, useRef, useState } from 'react';

const generateStarsData = (count) => {
  const stars = [];
  const sizes = [1, 1.5, 2, 3];
  const opacities = [0.2, 0.4, 0.6, 0.8, 1];
  
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      baseOpacity: opacities[Math.floor(Math.random() * opacities.length)],
    });
  }
  return stars;
};

const CinematicStars = ({ count = 300, className = "" }) => {
  const containerRef = useRef(null);
  const [stars] = useState(() => generateStarsData(count));
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isActive = false;
    let timeoutId;
    
    const animateStar = () => {
      if (!isActive) return;
      
      const starElements = Array.from(container.children);
      const visibleStars = starElements.filter(star => {
        const rect = star.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight && rect.left >= 0 && rect.right <= window.innerWidth;
      });
      
      if (visibleStars.length > 0) {
        // Occasionally move one star (e.g. 20% chance)
        const isMove = Math.random() < 0.2;
        
        if (isMove) {
          const starEl = visibleStars[Math.floor(Math.random() * visibleStars.length)];
          const angle = Math.random() * Math.PI * 2;
          const distance = 10 + Math.random() * 15;
          const moveX = Math.cos(angle) * distance;
          const moveY = Math.sin(angle) * distance;
          
          starEl.style.transition = 'transform 800ms ease-out';
          const currentX = parseFloat(starEl.dataset.tx || 0);
          const currentY = parseFloat(starEl.dataset.ty || 0);
          const newX = currentX + moveX;
          const newY = currentY + moveY;
          
          starEl.dataset.tx = newX;
          starEl.dataset.ty = newY;
          starEl.style.transform = `translate(${newX}px, ${newY}px) scale(1)`;
        } else {
          // Twinkle 1-3 stars
          const numToTwinkle = Math.floor(Math.random() * 3) + 1;
          for (let i = 0; i < numToTwinkle; i++) {
            if (visibleStars.length === 0) break;
            const index = Math.floor(Math.random() * visibleStars.length);
            const starEl = visibleStars.splice(index, 1)[0];
            
            starEl.style.transition = 'opacity 600ms ease-in-out, transform 600ms ease-in-out, box-shadow 600ms ease-in-out';
            const baseOpacity = parseFloat(starEl.dataset.baseOpacity);
            
            // Phase 1: Glow up
            starEl.style.opacity = '1';
            const currentX = parseFloat(starEl.dataset.tx || 0);
            const currentY = parseFloat(starEl.dataset.ty || 0);
            starEl.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.4)`;
            starEl.style.boxShadow = '0 0 10px 2px rgba(255,255,255,0.8)';
            
            // Phase 2: Glow down
            setTimeout(() => {
              if (!isActive) return;
              starEl.style.opacity = baseOpacity;
              starEl.style.transform = `translate(${currentX}px, ${currentY}px) scale(1)`;
              starEl.style.boxShadow = 'none';
            }, 600);
          }
        }
      }
      
      const nextDelay = 3000 + Math.random() * 3000;
      timeoutId = setTimeout(animateStar, nextDelay);
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        isActive = true;
        const initialDelay = 500 + Math.random() * 2000;
        timeoutId = setTimeout(animateStar, initialDelay);
      } else {
        isActive = false;
        clearTimeout(timeoutId);
      }
    }, { threshold: 0.1 });

    observer.observe(container);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)'
      }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          data-base-opacity={star.baseOpacity}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.baseOpacity,
            willChange: 'transform, opacity, box-shadow',
          }}
        />
      ))}
    </div>
  );
};

export default CinematicStars;
