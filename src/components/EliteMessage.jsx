import React from 'react';
import { motion } from 'framer-motion';

const EliteMessage = () => {
  return (
    <section id="elite" className="min-h-screen flex items-center justify-center bg-black relative py-24 z-20 border-t border-cyber-green/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-green/5 via-black to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-400">
              Not everyone made it.
            </h2>
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Only a <span className="text-cyber-green glitch" data-text="few">few</span> earned their place.
            </h2>
          </div>

          <div className="space-y-4 pt-8">
            <p className="text-xl md:text-3xl text-gray-300 font-medium">
              DevLeague is not built for spectators.
            </p>
            <p className="text-2xl md:text-4xl font-bold text-white">
              It is built for <span className="text-cyber-green border-b-2 border-cyber-green">builders</span>.
            </p>
            <p className="text-2xl md:text-4xl font-bold text-white">
              For <span className="text-cyber-green border-b-2 border-cyber-green">problem solvers</span>.
            </p>
            <p className="text-2xl md:text-4xl font-bold text-white">
              For <span className="text-cyber-green border-b-2 border-cyber-green">competitors</span>.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-16"
          >
            <h3 className="text-2xl md:text-4xl font-mono text-cyber-green neon-text border border-cyber-green/30 inline-block px-8 py-4 bg-cyber-green/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,65,0.1)]">
              This is the official Core Team of DLCC 2026.
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EliteMessage;
