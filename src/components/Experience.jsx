import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Principal Product Designer',
    company: 'Tech Corp',
    duration: '2022 - Present',
    description: 'Leading the core product design team. Established a new design system and improved time-to-market by 30%.'
  },
  {
    id: 2,
    role: 'Senior UX Designer',
    company: 'SaaS Startup',
    duration: '2019 - 2022',
    description: 'Designed the flagship B2B dashboard. Increased user engagement by 45% through intuitive data visualization.'
  },
  {
    id: 3,
    role: 'Product Designer',
    company: 'Agency',
    duration: '2017 - 2019',
    description: 'Collaborated with multiple enterprise clients to deliver scalable web and mobile applications.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2" style={{ marginBottom: '64px' }}>Experience</h2>

        <div style={{ position: 'relative', paddingLeft: '24px' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2px',
            height: '100%',
            backgroundColor: 'var(--glass-border)',
            borderRadius: '2px'
          }}>
            <motion.div 
              style={{
                width: '100%',
                backgroundColor: 'var(--accent)',
                transformOrigin: 'top'
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-29px',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '2px solid var(--accent)'
                }} />
                
                <span className="text-small font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {exp.duration}
                </span>
                <h3 className="text-h4" style={{ marginTop: '8px' }}>{exp.role} <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>at {exp.company}</span></h3>
                <p className="text-body" style={{ marginTop: '12px', maxWidth: '600px' }}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
