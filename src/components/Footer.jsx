import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-cyber-green/20 py-12 relative z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 text-cyber-green mb-2">
            <Terminal size={24} />
            <h3 className="text-2xl font-black tracking-widest uppercase">DEVLEAGUE</h3>
          </div>
          <p className="text-gray-500 font-mono text-sm">
            DLCC – DSA Campus Chapter PIEMR
          </p>
        </div>

        <div className="text-center">
          <p className="text-white font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            Build <span className="text-cyber-green mx-2">•</span> Compete <span className="text-cyber-green mx-2">•</span> Grow
          </p>
        </div>

        <div className="text-gray-600 font-mono text-xs text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} DevLeague.</p>
          <p>All Systems Operational.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
