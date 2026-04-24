import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MessageSquare, ChevronRight, MessageCircle } from 'lucide-react';
import { useSound } from '../sound/SoundProvider';

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const JoinCTA = () => {
  const { play } = useSound();

  return (
    <section id="join-devleague" className="py-24 bg-black relative z-20 border-t border-cyber-green/20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[24px] border-cyber-green bg-[linear-gradient(145deg,rgba(0,255,65,0.08),rgba(0,0,0,0.95)_30%,rgba(0,255,65,0.03))] p-8 shadow-[0_0_60px_rgba(0,255,65,0.12)] glass-card sm:rounded-[32px] sm:p-12 md:p-16"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.04)_50%)] bg-[length:100%_5px] opacity-25 pointer-events-none"></div>
          
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.34em] text-cyber-green/65">
            Access Channel
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Think you <span className="text-cyber-green glitch" data-text="belong">belong</span> here?
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-mono mb-5">
            Exclusive systems stay selective.
          </p>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            DevLeague keeps an eye on builders, operators, and competitors who move with intent. If you want in, make sure your work speaks first.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://chat.whatsapp.com/L8PX0hMfONIB7STIP2xRl2"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => play('buttonHover')}
              onClick={() => play('buttonClick')}
              className="group relative w-full overflow-hidden bg-cyber-green px-6 py-4 font-bold uppercase tracking-wider text-black sm:w-auto sm:px-8"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Join WhatsApp Ecosystem <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
            </a>
            
            <a
              href="https://www.instagram.com/dlcc_piemr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => play('buttonHover')}
              onClick={() => play('buttonClick')}
              className="group relative w-full overflow-hidden border-2 border-cyber-green bg-transparent px-6 py-4 font-bold uppercase tracking-wider text-cyber-green transition-colors duration-300 hover:text-black sm:w-auto sm:px-8"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Follow Instagram <Camera size={20} />
              </span>
              <div className="absolute inset-0 bg-cyber-green scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex justify-center gap-8">
            <a href="https://www.instagram.com/dlcc_piemr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" onMouseEnter={() => play('buttonHover')} onClick={() => play('buttonClick')} className="text-gray-400 hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
              <Camera size={28} />
            </a>
            <a href="https://chat.whatsapp.com/L8PX0hMfONIB7STIP2xRl2" target="_blank" rel="noopener noreferrer" onMouseEnter={() => play('buttonHover')} onClick={() => play('buttonClick')} className="text-gray-400 hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
              <MessageCircle size={28} />
            </a>
            <a href="https://www.linkedin.com/in/devleague-dsa-campus-chapter-piemr-b042a1405/" target="_blank" rel="noopener noreferrer" onMouseEnter={() => play('buttonHover')} onClick={() => play('buttonClick')} className="text-gray-400 hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
              <LinkedinIcon size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
