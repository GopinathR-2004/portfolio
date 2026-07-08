import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{
          padding: '80px 40px',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          backgroundColor: 'rgba(233, 248, 255, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h2 className="text-h1" style={{ marginBottom: '24px' }}>Let's build together.</h2>
          <p className="text-lead" style={{ marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px auto' }}>
            Open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:hello@example.com" className="btn btn-primary">
              <Mail size={18} /> Say Hello
            </a>
            <a href="#" className="btn btn-outline" aria-label="LinkedIn">
              <Globe size={18} />
            </a>
            <a href="#" className="btn btn-outline" aria-label="Twitter">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        
        {/* Glow effect behind */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
      </motion.div>
    </section>
  );
};

export default Contact;
