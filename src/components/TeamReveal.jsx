import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  Mail,
  Shield,
  Sparkles,
  Terminal,
  UserRound,
  X,
  Camera,
} from 'lucide-react';
import { teamData } from '../data';
import { useSound } from '../sound/SoundProvider';

const statusTone = {
  'ELITE COMMAND': 'text-cyber-green bg-cyber-green/15 border-cyber-green/35 shadow-[0_0_28px_rgba(0,255,65,0.18)]',
  ACTIVE: 'text-emerald-200 bg-emerald-500/10 border-emerald-400/30',
  VERIFIED: 'text-white bg-white/5 border-white/15',
};

const generateParticles = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: index,
    x: `${12 + ((index * 17) % 74)}%`,
    y: `${10 + ((index * 23) % 78)}%`,
    duration: 3.2 + (index % 4) * 0.7,
    delay: index * 0.18,
  }));

const DossierStat = ({ label, value, strong }) => (
  <div className="rounded-xl border border-cyber-green/15 bg-black/35 px-4 py-3 backdrop-blur-md">
    <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.35em] text-cyber-green/55">{label}</p>
    <p className={`text-sm ${strong ? 'font-semibold text-white' : 'text-gray-300'}`}>{value}</p>
  </div>
);

const previewRole = (member) => {
  if (member.role === 'Core Member') {
    return `Core Member - ${member.dept === 'Technical' ? 'Technical Team' : member.dept === 'Events' ? 'Events Team' : member.dept === 'PR' ? 'PR & Outreach' : member.dept === 'Sponsorship' ? 'Sponsorship Team' : member.dept}`;
  }
  return member.role;
};

const TeamCard = ({ member, onClick }) => {
  const isPresident = member.role === 'President';
  const isExecutive = member.role === 'President' || member.role === 'Vice President';
  const particles = generateParticles(isExecutive ? 6 : 4);
  const { play } = useSound();

  return (
    <motion.button
      type="button"
      whileHover={{ y: -10, scale: 1.012 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onClick(member)}
      onMouseEnter={() => play('cardHover')}
      className={`group relative w-full h-full flex flex-col overflow-hidden rounded-[28px] border text-left backdrop-blur-2xl ${
        isPresident
          ? 'border-cyber-green/40 bg-[linear-gradient(145deg,rgba(0,255,65,0.09),rgba(5,5,5,0.94)_36%,rgba(0,255,65,0.05))] shadow-[0_0_55px_rgba(0,255,65,0.16)]'
          : 'border-cyber-green/18 bg-[linear-gradient(150deg,rgba(255,255,255,0.03),rgba(5,5,5,0.94)_30%,rgba(0,255,65,0.04))] shadow-[0_0_35px_rgba(0,255,65,0.07)]'
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_70%_75%,rgba(0,255,65,0.16),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.04)_50%)] bg-[length:100%_5px] opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_28%)]" />
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5" />
      <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-70 group-hover:animate-trace-line" />
      <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-cyber-green/80 to-transparent opacity-50 group-hover:animate-trace-line-reverse" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyber-green/70 blur-[1px]"
          style={{ left: particle.x, top: particle.y }}
          animate={{ y: [0, -10, 0], opacity: [0.12, 0.55, 0.12], scale: [0.85, 1.1, 0.85] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
        />
      ))}

      <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col h-full flex-1">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.34em] text-cyber-green/55">Elite Preview</p>
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] ${statusTone[member.status] ?? statusTone.ACTIVE}`}>
              <BadgeCheck size={12} />
              {member.status}
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div className={`relative mb-5 overflow-hidden rounded-[24px] border bg-black/80 ${isExecutive ? 'h-[18rem] sm:h-[20rem] lg:h-[22rem] border-cyber-green/45' : 'h-64 sm:h-72 border-cyber-green/24'} shadow-[0_0_35px_rgba(0,255,65,0.10)] transition-all duration-500 group-hover:border-cyber-green/55 group-hover:shadow-[0_0_45px_rgba(0,255,65,0.18)]`}>
            <div className={`absolute inset-0 bg-cyber-green/20 blur-2xl transition-all duration-500 group-hover:bg-cyber-green/30 ${isExecutive ? 'scale-110' : ''}`} />
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: member.position || 'center top' }}
              />
            ) : (
              <div className="relative z-10 flex h-full w-full items-center justify-center bg-[#050505] text-cyber-green/55">
                <UserRound size={44} />
              </div>
            )}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.2)_35%,rgba(0,0,0,0.72))]" />
            <div className="absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_38%)]" />
            {isPresident && (
              <div className="absolute left-4 top-4 z-30 rounded-full border border-cyber-green/35 bg-black/55 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cyber-green shadow-[0_0_18px_rgba(0,255,65,0.12)]">
                Featured Command
              </div>
            )}
          </div>

          <div className="min-h-[100px] mb-2 flex flex-col justify-center">
            <h4 className="max-w-[16ch] text-2xl font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-cyber-green md:text-[2.2rem] leading-[1.1]">
              {member.name}
            </h4>
            <p className="mt-3 text-sm font-semibold text-cyber-green/90 sm:text-base">{previewRole(member)}</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-cyber-green/12 pt-4 mt-auto">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-all duration-300 group-hover:text-cyber-green">
            <span>Access Profile</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    </motion.button>
  );
};

const ProfileModal = ({ member, onClose }) => {
  const { play } = useSound();

  useEffect(() => {
    if (!member) return undefined;

    play('panelOpen');
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        play('panelClose');
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [member, onClose, play]);

  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[140] flex items-center justify-center bg-black/88 p-3 backdrop-blur-md sm:p-4"
        onClick={() => {
          play('panelClose');
          onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.97 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={(event) => event.stopPropagation()}
          className="relative max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-[22px] border border-cyber-green/30 bg-[linear-gradient(155deg,rgba(0,255,65,0.08),rgba(3,8,5,0.96)_18%,rgba(0,0,0,0.98))] shadow-[0_0_80px_rgba(0,255,65,0.15)] sm:max-h-[92vh] sm:rounded-[30px]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.045)_50%)] bg-[length:100%_4px] opacity-35 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,65,0.14),transparent_30%)] pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between border-b border-cyber-green/20 bg-black/45 px-4 py-4 sm:px-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-cyber-green/55">Command Dossier</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.28em] text-cyber-green">{member.id.toUpperCase()} // {member.status}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                play('panelClose');
                onClose();
              }}
              className="rounded-full border border-cyber-green/18 bg-black/45 p-2 text-gray-400 transition-colors duration-200 hover:border-cyber-green/50 hover:text-cyber-green"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative z-10 grid max-h-[calc(92vh-74px)] gap-0 overflow-y-auto lg:grid-cols-[320px_1fr]">
            <div className="border-b border-cyber-green/15 bg-black/35 p-4 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="relative mx-auto mb-6 h-[280px] max-w-[220px] overflow-hidden rounded-[22px] border border-cyber-green/28 bg-black shadow-[0_0_40px_rgba(0,255,65,0.12)] sm:h-[360px] sm:max-w-[260px] sm:rounded-[26px]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.position || 'center top' }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-cyber-green/55">
                    <UserRound size={56} />
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.48))]" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              <div className="space-y-3">
                <DossierStat label="Selection Status" value={member.status} strong />
                <DossierStat label="Clearance Level" value={member.clearance} strong />
                <DossierStat label="Leadership Role" value={member.leadershipRole} />
                <DossierStat label="Department" value={member.dept} />
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-8 flex flex-col gap-5 border-b border-cyber-green/15 pb-7 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.34em] text-cyber-green/55">Profile Overview</p>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-5xl">{member.name}</h3>
                  <p className="mt-3 text-base font-semibold text-cyber-green sm:text-lg">{member.title}</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.28em] text-gray-500">{member.role} // {member.id.toUpperCase()}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 self-stretch md:min-w-[240px]">
                  <DossierStat label="Uplink" value="Secured" strong />
                  <DossierStat label="Profile State" value="Unlocked" strong />
                  <DossierStat label="Command Tier" value={member.clearance} />
                  <DossierStat label="Focus" value={member.dept} />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6">
                  <section className="rounded-[24px] border border-cyber-green/15 bg-black/30 p-5">
                    <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.34em] text-cyber-green/65">
                      <Terminal size={14} />
                      Full Professional Intro
                    </div>
                    <p className="text-base leading-relaxed text-gray-300">{member.intro}</p>
                  </section>

                  <section className="rounded-[24px] border border-cyber-green/15 bg-black/30 p-5">
                    <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.34em] text-cyber-green/65">
                      <Sparkles size={14} />
                      Skills / Specialization
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-cyber-green/18 bg-cyber-green/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-6">
                  <section className="rounded-[24px] border border-cyber-green/15 bg-black/30 p-5">
                    <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.34em] text-cyber-green/65">
                      <Shield size={14} />
                      Core Strengths
                    </div>
                    <div className="space-y-3">
                      {member.strengths.map((strength) => (
                        <div key={strength} className="flex items-start gap-3 rounded-xl border border-cyber-green/12 bg-black/35 px-4 py-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-cyber-green" />
                          <p className="text-sm text-gray-300">{strength}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-[24px] border border-cyber-green/15 bg-black/30 p-5">
                    <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.34em] text-cyber-green/65">
                      <Mail size={14} />
                      Contact / Social Relay
                    </div>
                    <div className="grid gap-3">
                      <a
                        href="https://chat.whatsapp.com/L8PX0hMfONIB7STIP2xRl2"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => play('buttonHover')}
                        onClick={() => play('buttonClick')}
                        className="inline-flex items-center justify-between rounded-xl border border-cyber-green/18 bg-cyber-green/10 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-cyber-green/45 hover:text-cyber-green"
                      >
                        Initiate Contact Request
                        <ArrowUpRight size={16} />
                      </a>
                      <a
                        href="https://www.instagram.com/dlcc_piemr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => play('buttonHover')}
                        onClick={() => play('buttonClick')}
                        className="inline-flex items-center justify-between rounded-xl border border-cyber-green/18 bg-cyber-green/10 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-cyber-green/45 hover:text-cyber-green"
                      >
                        Access Official Instagram
                        <Camera size={16} />
                      </a>
                      <a
                        href="#join-devleague"
                        onMouseEnter={() => play('buttonHover')}
                        onClick={() => play('buttonClick')}
                        className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition-colors duration-200 hover:border-cyber-green/30 hover:text-white"
                      >
                        Route via DevLeague Access Channel
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AnimatedHeader = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayText('');
    const interval = window.setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index += 1;
      } else {
        window.clearInterval(interval);
      }
    }, 38);

    return () => window.clearInterval(interval);
  }, [text]);

  return (
    <div className="mb-4 flex items-center justify-center font-mono text-sm text-cyber-green md:text-base">
      <span>{'>'} {displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block h-4 w-2 bg-cyber-green"
      />
    </div>
  );
};

const TeamReveal = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { play } = useSound();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 26 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative z-20 overflow-hidden bg-[#020202] py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:54px_54px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,65,0.14),transparent_36%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-24 text-center">
          <AnimatedHeader text="UNLOCKING LEADERSHIP DOSSIERS // CLASSIFIED ACCESS CONFIRMED." />
          <h2 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Elite <span className="bg-gradient-to-r from-cyber-green to-emerald-400 bg-clip-text text-transparent">Profile Access</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
            A clean preview for each core member. Click any card to unlock the full classified dossier and see the complete professional profile.
          </p>
          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-cyber-green to-transparent" />
        </div>

        <div className="space-y-28">
          {teamData.map((category, index) => {
            const isLeadership = category.category === 'Leadership';

            return (
              <div key={category.category} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="mb-12 flex items-center gap-6"
                >
                  <div className="rounded-full border border-cyber-green/20 bg-cyber-green/10 px-3 py-1 font-mono text-sm font-bold text-cyber-green">
                    {String(index + 1).padStart(2, '0')} //
                  </div>
                  <h3 className="border-l-4 border-cyber-green pl-4 text-3xl font-black uppercase tracking-[0.18em] text-white md:text-4xl">
                    {category.category}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyber-green/60 to-transparent" />
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className={isLeadership ? "flex flex-col md:flex-row gap-10 w-full items-stretch" : "grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"}
                >
                  {category.members.map((member) => (
                    <motion.div
                      key={member.id}
                      variants={itemVariants}
                      className={isLeadership ? (member.role === 'President' ? 'flex-[1.15]' : 'flex-1') : 'w-full'}
                    >
                      <TeamCard
                        member={member}
                        onClick={(selected) => {
                          play('cardOpen');
                          setSelectedMember(selected);
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <ProfileModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
};

export default TeamReveal;
