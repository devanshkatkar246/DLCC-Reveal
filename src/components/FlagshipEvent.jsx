import React from 'react';
import { motion } from 'framer-motion';
import { LockKeyhole, Radar, ShieldAlert, TimerReset } from 'lucide-react';
import { useSound } from '../sound/SoundProvider';

const signals = [
  {
    label: 'SOMETHING BIG',
    value: 'IS COMING SOON',
    icon: <LockKeyhole size={18} />,
  },
  {
    label: 'Signal Type',
    value: 'SIGNATURE EVENT',
    icon: <Radar size={18} />,
  },
  {
    label: 'Audience',
    value: 'THINKERS / STRATEGISTS / COMPETITORS',
    icon: <ShieldAlert size={18} />,
  },
  {
    label: 'Reveal State',
    value: 'COMING SOON',
    icon: <TimerReset size={18} />,
  },
];

const FlagshipEvent = () => {
  const { play } = useSound();

  return (
    <section className="relative z-20 overflow-hidden bg-[#040404] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,65,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,255,65,0.08),transparent_24%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => play('mystery', 400)}
            className="relative overflow-hidden rounded-[24px] border border-cyber-green/22 bg-[linear-gradient(140deg,rgba(0,255,65,0.08),rgba(0,0,0,0.94)_28%,rgba(0,255,65,0.03))] p-6 shadow-[0_0_55px_rgba(0,255,65,0.1)] sm:rounded-[30px] sm:p-8 md:p-10"
          >
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.04)_50%)] bg-[length:100%_5px] opacity-30 pointer-events-none" />
            <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-cyber-green/85 to-transparent" />

            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyber-green/25 bg-cyber-green/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.34em] text-cyber-green">
                Signature Protocol Incoming
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-7xl"
              >
                SOMETHING BIG <span className="glitch text-cyber-green" data-text="IS COMING">IS COMING</span>
              </motion.h2>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                <p>We are preparing something bigger.</p>
                <p>Not just another event. Not just another competition.</p>
                <p>
                  A challenge built for thinkers. For strategists. For those who compete to win.
                </p>
                <p className="font-mono uppercase tracking-[0.25em] text-cyber-green/85">
                  Access will be revealed soon.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-cyber-green/15 bg-black/35 px-4 py-4 backdrop-blur-md"
                  >
                    <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-cyber-green/60">
                      {signal.icon}
                      {signal.label}
                    </div>
                    <p className="text-sm font-semibold tracking-[0.18em] text-white">{signal.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onMouseEnter={() => play('mystery', 400)}
            className="relative overflow-hidden rounded-[24px] border border-cyber-green/18 bg-black/50 p-6 shadow-[0_0_55px_rgba(0,255,65,0.08)] sm:rounded-[30px] sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.12),transparent_52%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.05)_50%)] bg-[length:100%_4px] opacity-25 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.34em] text-cyber-green/65">
                Terminal Suspense Feed
              </div>

              <div className="space-y-4 font-mono text-sm text-cyber-green/90">
                <div className="rounded-xl border border-cyber-green/14 bg-[#031106]/85 px-4 py-4">
                  <p>{'>'} Incoming signal detected...</p>
                </div>
                <div className="rounded-xl border border-cyber-green/14 bg-[#031106]/85 px-4 py-4">
                  <p>{'>'} Event signature masked behind classified protocol.</p>
                </div>
                <div className="rounded-xl border border-cyber-green/14 bg-[#031106]/85 px-4 py-4">
                  <p>{'>'} Clearance release pending official unlock.</p>
                </div>
              </div>

              <div className="mt-10 rounded-[24px] border border-cyber-green/18 bg-[linear-gradient(135deg,rgba(0,255,65,0.12),rgba(0,0,0,0.9))] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-cyber-green/60">
                  Coming Soon
                </p>
                <p className="mt-3 text-3xl font-black uppercase tracking-[0.22em] text-white md:text-4xl">
                  Hidden Reveal
                </p>
                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-cyber-green/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyber-green/30 via-cyber-green to-cyber-green/30"
                    animate={{ x: ['-35%', '100%'] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '35%' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipEvent;
