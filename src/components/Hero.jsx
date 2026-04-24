import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const [bootStep, setBootStep] = useState(0);
  const [showReveal, setShowReveal] = useState(false);

  const bootSequence = [
    "> Initializing DevLeague System...",
    "> Running Core Selection Protocol...",
    "> Verifying Candidates...",
    "> Access Level: Restricted",
    "> Core Team Reveal: Authorized"
  ];

  useEffect(() => {
    if (bootStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setBootStep(prev => prev + 1);
      }, Math.random() * 600 + 400); // Random delay between 400-1000ms
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowReveal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [bootStep]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cyber-dark z-10">
      <MatrixRain />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-green rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="z-20 w-full max-w-4xl px-6 flex flex-col items-center justify-center text-center">
        
        {/* Terminal Boot Sequence */}
        {!showReveal && (
          <div className="font-mono text-left w-full max-w-2xl bg-black/60 p-6 rounded-md border border-cyber-green/30 shadow-[0_0_15px_rgba(0,255,65,0.15)] mb-8 h-64 flex flex-col justify-end">
            <AnimatePresence>
              {bootSequence.slice(0, bootStep).map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-2 text-sm md:text-base ${idx === bootSequence.length - 1 ? 'text-cyber-green neon-text font-bold' : 'text-gray-400'}`}
                >
                  {text}
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-5 bg-cyber-green inline-block mt-2"
            />
          </div>
        )}

        {/* Reveal Title */}
        <AnimatePresence>
          {showReveal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white glitch" data-text="ACCESS GRANTED">
                ACCESS GRANTED
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-3xl text-cyber-green font-mono uppercase tracking-widest neon-text mb-12"
              >
                DLCC 2026 Core Team Reveal
              </motion.p>

              <Link to="elite" smooth={true} duration={800}>
                <motion.button
                  whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(0,255,65)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 bg-transparent border-2 border-cyber-green text-cyber-green font-mono font-bold uppercase tracking-wider overflow-hidden group hover:bg-cyber-green hover:text-black transition-all duration-300 neon-border cursor-pointer"
                >
                  <span className="relative z-10">[ Enter the System ]</span>
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-cyber-green opacity-20 skew-x-[-45deg] group-hover:animate-[glitch-anim-1_0.2s_linear]" />
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {showReveal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-cyber-green"
        >
          <Link to="elite" smooth={true} duration={800}>
            <ChevronDown size={32} />
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
