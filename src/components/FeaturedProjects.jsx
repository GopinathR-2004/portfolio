import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fintech Analytics Dashboard',
    company: 'Stripe (Concept)',
    metrics: '+40% User Retention',
    description: 'Redesigned the core analytics experience to help enterprise merchants understand their cash flow intuitively.',
    bgColor: '#f4f4f5'
  },
  {
    id: 2,
    title: 'Global Design System',
    company: 'Atlassian',
    metrics: 'Used by 40+ Teams',
    description: 'Built a comprehensive, accessible component library that unified the visual language across 12 product verticals.',
    bgColor: '#eef2ff'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="work" className="section container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2" style={{ marginBottom: '64px' }}>Selected Work</h2>
        
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '40px',
                alignItems: 'center'
              }}
            >
              {/* Image Placeholder */}
              <div 
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  backgroundColor: project.bgColor,
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--glass-border)'
                }}
                className="image-container"
              >
                {/* Simulated Image Hover */}
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span className="font-semibold">Project Image / Mockup</span>
                </motion.div>
              </div>

              {/* Content */}
              <div>
                <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                  <span className="text-small font-bold" style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.company}
                  </span>
                  <span className="text-small font-semibold glass" style={{ padding: '4px 12px', borderRadius: '100px' }}>
                    {project.metrics}
                  </span>
                </div>
                <h3 className="text-h3" style={{ marginBottom: '16px' }}>{project.title}</h3>
                <p className="text-body" style={{ marginBottom: '32px', maxWidth: '500px' }}>
                  {project.description}
                </p>
                <a href="#" className="btn btn-outline" style={{ display: 'inline-flex', gap: '8px' }}>
                  View Case Study <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 1024px) {
          .project-card {
            grid-template-columns: 1.2fr 1fr !important;
          }
          .project-card:nth-child(even) {
            direction: rtl;
          }
          .project-card:nth-child(even) > * {
            direction: ltr;
          }
        }
      `}} />
    </section>
  );
};

export default FeaturedProjects;
