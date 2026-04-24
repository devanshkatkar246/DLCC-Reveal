import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-cyber-green/20 bg-[#050505] py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-2 flex items-center gap-2 text-cyber-green">
            <Terminal size={24} />
            <h3 className="text-2xl font-black uppercase tracking-widest">DEVLEAGUE</h3>
          </div>
          <p className="font-mono text-sm text-gray-500">
            DLCC - DSA Campus Chapter PIEMR
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white md:text-base">
            Build <span className="mx-2 text-cyber-green">|</span> Compete <span className="mx-2 text-cyber-green">|</span> Grow
          </p>
        </div>

        <div className="text-center font-mono text-xs text-gray-600 md:text-right">
          <p>&copy; {new Date().getFullYear()} DevLeague.</p>
          <p>All Systems Operational.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
