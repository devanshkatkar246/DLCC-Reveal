import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamData } from '../data';
import { Link as LinkIcon, X, Terminal, Cpu, Code, Mail, ChevronRight } from 'lucide-react';

const TeamCard = ({ member, onClick }) => {
  const isPresident = member.role === 'President' || member.role === 'Vice President';
  const isTech = member.dept === 'Technical';

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={`glass-card rounded-xl p-8 relative group cursor-pointer overflow-hidden flex flex-col items-center justify-center border bg-black/60 backdrop-blur-xl ${isPresident ? 'border-cyber-green/60 shadow-[0_0_30px_rgba(0,255,65,0.15)] min-h-[350px]' : 'border-cyber-green/20 hover:border-cyber-green/80 min-h-[300px]'}`}
      onClick={() => onClick(member)}
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-green/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Border Tracing Effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-anim-1_2s_linear_infinite] transition-opacity duration-300"></div>

      {/* Photo with floating light glow */}
      <div className={`relative mb-6 ${isPresident ? 'w-36 h-36 md:w-44 md:h-44' : 'w-28 h-28 md:w-32 md:h-32'}`}>
        <div className="absolute inset-0 bg-cyber-green/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="w-full h-full rounded-full border-2 border-cyber-green/50 group-hover:border-cyber-green transition-all duration-300 overflow-hidden relative z-10 bg-[#050505]">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              style={{ objectPosition: member.position || 'center top' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <Terminal className="text-cyber-green/50 w-8 h-8 group-hover:text-cyber-green transition-colors" />
            </div>
          )}
        </div>
        {isPresident && (
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cyber-green text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-sm whitespace-nowrap shadow-[0_0_10px_#00ff41] z-20">
            Elite Command
          </div>
        )}
      </div>

      <div className="text-center relative z-10 w-full">
        
        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyber-green transition-colors font-sans mb-1 group-hover:glitch" data-text={member.name}>
          {member.name}
        </h4>
        <p className="text-sm font-mono text-gray-400 mb-4 h-10">{member.role}</p>
        
        <div className="flex justify-center gap-3 mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
          <div className="p-2 rounded-full bg-cyber-green/5 border border-cyber-green/20 group-hover:border-cyber-green/50 text-gray-400 hover:text-cyber-green transition-colors hover:shadow-[0_0_10px_rgba(0,255,65,0.4)]">
            <LinkIcon size={16} />
          </div>
          {isTech && (
            <div className="p-2 rounded-full bg-cyber-green/5 border border-cyber-green/20 group-hover:border-cyber-green/50 text-gray-400 hover:text-cyber-green transition-colors hover:shadow-[0_0_10px_rgba(0,255,65,0.4)]">
              <Code size={16} />
            </div>
          )}
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-cyber-green/50 group-hover:border-cyber-green transition-colors"></div>
    </motion.div>
  );
};

const Modal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          className="bg-[#050505] border border-cyber-green/50 shadow-[0_0_50px_rgba(0,255,65,0.15)] w-full max-w-4xl rounded-xl overflow-hidden relative"
          onClick={e => e.stopPropagation()}
        >
          {/* Animated Modal Background Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

          {/* Header */}
          <div className="p-4 border-b border-cyber-green/30 flex justify-between items-center bg-cyber-green/10 relative z-10">
            <div className="flex items-center gap-2 text-cyber-green font-mono text-sm">
              <Cpu size={16} />
              <span>SYS.PROFILE_VIEW // ID: {member.id.toUpperCase()}</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-cyber-green transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
            {/* Avatar Column */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg bg-[#020202] border-2 border-cyber-green shrink-0 shadow-[0_0_30px_rgba(0,255,65,0.2)] relative overflow-hidden flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                    style={{ objectPosition: member.position || 'center top' }}
                  />
                ) : (
                  <Terminal className="text-cyber-green/50 w-16 h-16" />
                )}
                <div className="absolute inset-0 bg-cyber-green/10 mix-blend-overlay"></div>
              </div>
              <div className="mt-6 flex gap-4 w-full justify-center">
                <a href="#" className="p-3 bg-cyber-green/10 border border-cyber-green/30 text-cyber-green hover:bg-cyber-green hover:text-black transition-colors rounded">
                  <LinkIcon size={20} />
                </a>
                <a href="#" className="p-3 bg-cyber-green/10 border border-cyber-green/30 text-cyber-green hover:bg-cyber-green hover:text-black transition-colors rounded">
                  <Mail size={20} />
                </a>
                {member.dept === 'Technical' && (
                  <a href="#" className="p-3 bg-cyber-green/10 border border-cyber-green/30 text-cyber-green hover:bg-cyber-green hover:text-black transition-colors rounded">
                    <Code size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Details Column */}
            <div className="flex-1 text-center md:text-left w-full">
              <div className="inline-block mb-4 px-3 py-1 border border-cyber-green/30 rounded text-xs text-cyber-green bg-cyber-green/10 uppercase tracking-widest font-mono shadow-[0_0_10px_rgba(0,255,65,0.1)]">
                {member.dept} DIVISION
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight glitch" data-text={member.name}>
                {member.name}
              </h3>
              <p className="text-xl md:text-2xl text-cyber-green font-mono mb-6 pb-6 border-b border-gray-800 flex items-center justify-center md:justify-start gap-2">
                <ChevronRight size={24} /> {member.role}
              </p>
              
              <div className="mb-8">
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest font-bold flex items-center justify-center md:justify-start gap-2">
                  <Terminal size={16} /> Core Protocols / Skills
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#0a0a0a] border border-cyber-green/30 rounded text-gray-300 text-sm font-mono hover:border-cyber-green hover:text-cyber-green transition-colors cursor-default shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-cyber-green/5 border border-cyber-green/20 rounded font-mono text-sm text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                <div><span className="text-cyber-green">{'>'}</span> STATUS: <span className="text-white">ACTIVE</span></div>
                <div><span className="text-cyber-green">{'>'}</span> CLEARANCE: <span className="text-white">LEVEL {member.dept === 'Leadership' ? 'MAX' : '5'}</span></div>
                <div><span className="text-cyber-green">{'>'}</span> UPLINK: <span className="text-white">ESTABLISHED</span></div>
                <div><span className="text-cyber-green">{'>'}</span> ID: <span className="text-white">{member.id.toUpperCase()}</span></div>
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
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="font-mono text-cyber-green text-sm md:text-base mb-4 flex items-center justify-center">
      <span>{'>'} {displayText}</span>
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-4 bg-cyber-green ml-1"
      />
    </div>
  );
};

const TeamReveal = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-32 bg-[#020202] relative z-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-24 text-center">
          <AnimatedHeader text="LOADING LEADERSHIP DIVISION... ACCESS GRANTED." />
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(0,255,65,0.2)]">
            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-emerald-500">Selection</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent mx-auto"></div>
        </div>

        <div className="space-y-32">
          {teamData.map((category, idx) => {
            const isLeadership = category.category === 'Leadership';
            return (
              <div key={idx} className="relative">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="flex items-center gap-6 mb-12"
                >
                  <div className="text-cyber-green font-mono font-bold text-sm bg-cyber-green/10 px-3 py-1 rounded border border-cyber-green/20">
                    {String(idx + 1).padStart(2, '0')} //
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest border-l-4 border-cyber-green pl-4 shadow-cyber-green drop-shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                    {category.category}
                  </h3>
                  <div className="h-px bg-gradient-to-r from-cyber-green/50 to-transparent flex-1"></div>
                </motion.div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center ${isLeadership ? 'lg:w-3/4 mx-auto lg:grid-cols-2' : ''}`}
                >
                  {category.members.map((member) => (
                    <motion.div 
                      key={member.id} 
                      variants={itemVariants} 
                      className={member.role === 'President' && !isLeadership ? 'md:col-span-2 lg:col-span-2' : ''}
                    >
                      <TeamCard member={member} onClick={setSelectedMember} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>

      {selectedMember && (
        <Modal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </section>
  );
};

export default TeamReveal;
