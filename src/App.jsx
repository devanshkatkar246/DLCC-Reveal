import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import EliteMessage from './components/EliteMessage';
import TeamReveal from './components/TeamReveal';
import FlagshipEvent from './components/FlagshipEvent';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';
import { useSound } from './sound/SoundProvider';

const ACCESS_ROUTE = '/';
const SYSTEM_ROUTE = '/system';

const getRoute = () => {
  const hash = window.location.hash.replace('#', '');
  return hash === SYSTEM_ROUTE ? SYSTEM_ROUTE : ACCESS_ROUTE;
};

const transitionSteps = [
  'Verifying access...',
  'Clearance approved...',
  'Loading Core Profiles...',
  'Access Granted.',
];

const SystemTransition = ({ active }) => {
  const [stepIndex, setStepIndex] = useState(-1);
  const { play } = useSound();

  useEffect(() => {
    if (!active) {
      setStepIndex(-1);
      return undefined;
    }

    const timers = transitionSteps.map((_, index) =>
      window.setTimeout(() => setStepIndex(index), 900 + index * 480)
    );

    return () => timers.forEach(window.clearTimeout);
  }, [active]);

  useEffect(() => {
    if (!active) return undefined;

    play('glitch');
    const timers = [
      window.setTimeout(() => play('authorize'), 260),
      window.setTimeout(() => play('scan'), 1520),
      window.setTimeout(() => play('unlock'), 2360),
      window.setTimeout(() => play('accessGranted'), 3050),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, [active, play]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[120] overflow-hidden bg-black"
        >
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.24),transparent_58%)]"
            animate={{ opacity: [0.3, 0.8, 0.4], scale: [1, 1.12, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%,transparent_76%,rgba(255,255,255,0.06))] mix-blend-screen"
            animate={{ y: ['-18%', '18%', '-8%'], skewX: [0, 3, -2] }}
            transition={{ duration: 0.45, repeat: 4, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 opacity-70"
            animate={{
              filter: [
                'blur(0px) brightness(1)',
                'blur(2px) brightness(1.4)',
                'blur(0px) brightness(1)',
              ],
            }}
            transition={{ duration: 0.28, repeat: 6 }}
          >
            <div className="h-full w-full bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.08)_50%)] bg-[length:100%_4px]" />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-cyber-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.18, 0, 0.1, 0] }}
            transition={{ duration: 1.8, times: [0, 0.18, 0.28, 0.7, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyber-green/0 via-cyber-green/35 to-cyber-green/0 blur-2xl"
            initial={{ x: '-120%' }}
            animate={{ x: ['-120%', '260%'] }}
            transition={{ duration: 1.25, delay: 1.65, ease: 'easeInOut' }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,65,0.12),transparent_38%)]" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-[18%] h-px bg-gradient-to-r from-transparent via-cyber-green/35 to-transparent" />
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-3xl border border-cyber-green/30 bg-black/70 px-5 py-8 shadow-[0_0_80px_rgba(0,255,65,0.16)] backdrop-blur-xl sm:px-8 sm:py-10"
            >
              <div className="mb-5 flex flex-col gap-2 text-[11px] uppercase tracking-[0.32em] text-cyber-green/70 sm:flex-row sm:items-center sm:justify-between sm:tracking-[0.42em]">
                <span>System Authorization</span>
                <span>DLCC 2026</span>
              </div>
              <motion.h2
                className="mb-8 text-2xl font-black uppercase tracking-[0.22em] text-white sm:text-3xl md:text-5xl md:tracking-[0.35em]"
                animate={{ textShadow: ['0 0 0px #00ff41', '0 0 24px #00ff41', '0 0 12px #00ff41'] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'mirror' }}
              >
                Entering Classified System
              </motion.h2>
              <div className="mx-auto max-w-2xl border border-cyber-green/20 bg-[#031106]/85 p-4 text-left font-mono text-xs text-cyber-green/90 sm:p-6 sm:text-sm">
                {transitionSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0.18, x: -10 }}
                    animate={{
                      opacity: stepIndex >= index ? 1 : 0.18,
                      x: stepIndex >= index ? 0 : -10,
                      color: stepIndex === index ? '#ffffff' : '#7dff9a',
                    }}
                    transition={{ duration: 0.28 }}
                    className="mb-3 flex items-center gap-3 last:mb-0"
                  >
                    <span className="text-cyber-green">{'>'}</span>
                    <span>{step}</span>
                    {stepIndex === index && (
                      <motion.span
                        className="inline-block h-4 w-2 bg-cyber-green"
                        animate={{ opacity: [1, 0.25, 1] }}
                        transition={{ duration: 0.55, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AccessPortal = ({ onEnter, entering }) => (
  <motion.div
    key="access-portal"
    initial={{ opacity: 0, scale: 1.01 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, filter: 'blur(14px)' }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <Hero onEnter={onEnter} entering={entering} />
  </motion.div>
);

const UnlockedSystem = () => (
  <motion.div
    key="unlocked-system"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.85, ease: 'easeOut' }}
  >
    <EliteMessage />
    <TeamReveal />
    <FlagshipEvent />
    <JoinCTA />
    <Footer />
  </motion.div>
);

function App() {
  const [route, setRoute] = useState(getRoute);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { play } = useSound();

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route]);

  const handleEnterSystem = () => {
    if (isTransitioning) return;

    play('buttonClick');
    setIsTransitioning(true);
    window.setTimeout(() => {
      window.location.hash = SYSTEM_ROUTE;
      setRoute(SYSTEM_ROUTE);
    }, 3250);
    window.setTimeout(() => setIsTransitioning(false), 3800);
  };

  return (
    <div id="top" className="bg-cyber-dark min-h-screen text-cyber-light font-sans selection:bg-cyber-green selection:text-black">
      <AnimatePresence mode="wait">
        {route === SYSTEM_ROUTE ? (
          <UnlockedSystem key="system" />
        ) : (
          <AccessPortal key="access" onEnter={handleEnterSystem} entering={isTransitioning} />
        )}
      </AnimatePresence>
      <SystemTransition active={isTransitioning} />
    </div>
  );
}

export default App;
