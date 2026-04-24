import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './MatrixRain';
import { ShieldCheck, TerminalSquare } from 'lucide-react';
import { useSound } from '../sound/SoundProvider';

const Hero = ({ onEnter, entering }) => {
  const [bootStep, setBootStep] = useState(0);
  const [showReveal, setShowReveal] = useState(false);
  const { play } = useSound();

  const bootSequence = [
    "> Initializing DevLeague System...",
    "> Running Core Selection Protocol...",
    "> Verifying Candidates...",
    "> Access Level: Restricted",
    "> Core Team Reveal: Authorized"
  ];

  useEffect(() => {
    if (bootStep < bootSequence.length) {
      play(bootStep === 0 ? 'systemBoot' : 'heroTyping', 20);
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
  }, [bootStep, play]);

  useEffect(() => {
    if (showReveal) {
      play('accessGranted');
    }
  }, [showReveal, play]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cyber-dark z-10">
      <MatrixRain />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.16),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,255,65,0.05),transparent_30%,transparent_70%,rgba(0,255,65,0.08))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-green rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-[14%] h-px bg-gradient-to-r from-transparent via-cyber-green/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-[14%] h-px bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent" />
      </div>

      <div className="z-20 flex w-full max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6">
        {!showReveal && (
          <div className="mb-8 flex h-60 w-full max-w-2xl flex-col justify-end rounded-md border border-cyber-green/30 bg-black/60 p-4 font-mono text-left shadow-[0_0_15px_rgba(0,255,65,0.15)] backdrop-blur-xl sm:h-64 sm:p-6">
            <AnimatePresence>
              {bootSequence.slice(0, bootStep).map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-2 text-xs sm:text-sm md:text-base ${idx === bootSequence.length - 1 ? 'text-cyber-green neon-text font-bold' : 'text-gray-400'}`}
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

        <AnimatePresence>
          {showReveal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center w-full"
            >
              <div className="mb-5 inline-flex items-center gap-2 border border-cyber-green/25 bg-cyber-green/10 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-cyber-green shadow-[0_0_30px_rgba(0,255,65,0.12)] sm:px-4 sm:text-[11px] sm:tracking-[0.38em]">
                <ShieldCheck size={14} />
                Restricted Access Channel
              </div>

              <h1 className="mb-4 text-4xl font-black tracking-tighter text-white glitch sm:text-6xl md:text-8xl" data-text="ACCESS GRANTED">
                ACCESS GRANTED
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mb-10 max-w-3xl text-base font-mono uppercase tracking-[0.24em] text-cyber-green neon-text sm:text-xl md:mb-12 md:text-3xl md:tracking-widest"
              >
                DLCC 2026 Core Team Reveal
              </motion.p>

              <div className="mb-8 max-w-2xl border border-cyber-green/20 bg-black/45 px-4 py-4 backdrop-blur-xl sm:mb-10 sm:px-5">
                <div className="mb-2 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cyber-green/70 sm:justify-start sm:text-[11px] sm:tracking-[0.34em]">
                  <TerminalSquare size={14} />
                  Terminal Boot Summary
                </div>
                <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                  Secure channel initialized. Leadership profiles encrypted. Clearance granted for classified system entry.
                </p>
              </div>

              <motion.button
                onClick={onEnter}
                disabled={entering}
                onMouseEnter={() => play('buttonHover')}
                whileHover={{ scale: entering ? 1 : 1.05, textShadow: "0px 0px 8px rgb(0,255,65)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full max-w-sm overflow-hidden border-2 border-cyber-green bg-transparent px-5 py-4 font-mono font-bold uppercase tracking-[0.2em] text-cyber-green transition-all duration-300 hover:bg-cyber-green hover:text-black sm:w-auto sm:max-w-none sm:px-8 sm:tracking-wider neon-border cursor-pointer disabled:cursor-progress disabled:opacity-70"
              >
                <span className="relative z-10">
                  {entering ? '[ Establishing System Bridge ]' : '[ Enter the System ]'}
                </span>
                <div className="absolute top-0 left-[-100%] w-full h-full bg-cyber-green opacity-20 skew-x-[-45deg] group-hover:animate-[glitch-anim-1_0.2s_linear]" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
