import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, PenTool, LayoutTemplate, Zap, FileCode2, LineChart } from 'lucide-react';

const bentoItems = [
  {
    title: 'Product Strategy',
    description: 'Aligning business goals with user needs to define product roadmaps.',
    icon: <LineChart size={24} color="var(--accent)" />,
    colSpan: 'md:col-span-2'
  },
  {
    title: 'Design Systems',
    description: 'Building scalable, accessible component libraries.',
    icon: <LayoutTemplate size={24} color="var(--accent)" />,
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Interaction Design',
    description: 'Crafting fluid micro-interactions and animations.',
    icon: <Zap size={24} color="var(--accent)" />,
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Prototyping',
    description: 'High-fidelity interactive prototypes in Framer & Figma.',
    icon: <MonitorSmartphone size={24} color="var(--accent)" />,
    colSpan: 'md:col-span-2'
  }
];

const SkillsProcess = () => {
  return (
    <section className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2" style={{ marginBottom: '64px' }}>Process & Expertise</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }} className="bento-grid">
          {bentoItems.map((item, i) => (
            <motion.div 
              key={i}
              className={`glass ${item.colSpan || ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '40px',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-h4" style={{ marginBottom: '8px' }}>{item.title}</h3>
                <p className="text-body">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .md\\:col-span-2 {
            grid-column: span 2 / span 2;
          }
          .md\\:col-span-1 {
            grid-column: span 1 / span 1;
          }
        }
      `}} />
    </section>
  );
};

export default SkillsProcess;
