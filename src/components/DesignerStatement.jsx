import React from 'react';
import { motion } from 'framer-motion';

const DesignerStatement = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] text-white font-medium max-w-[900px] mb-[40px]"
      >
        A designer who codes,<br className="hidden md:block"/> an engineer<br className="md:hidden"/> who cares about pixels.
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.8] max-w-[700px] font-light"
      >
        I specialize in bridging the gap between design and engineering. By understanding both the user's needs and the technical constraints, I craft solutions that are not only beautiful but scalable and highly performant.
      </motion.p>
      
      {/* 80px spacing at the bottom of the statement content as requested */}
      <div className="h-[80px]" />
    </section>
  );
};

export default DesignerStatement;
