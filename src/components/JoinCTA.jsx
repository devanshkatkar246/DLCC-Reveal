import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Link as LinkIcon, Globe, ChevronRight } from 'lucide-react';

const JoinCTA = () => {
  return (
    <section className="py-24 bg-black relative z-20 border-t border-cyber-green/20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass-card p-12 md:p-16 border-cyber-green shadow-[0_0_50px_rgba(0,255,65,0.1)] relative overflow-hidden"
        >
          {/* Animated Background Lines */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-green to-transparent opacity-50"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Think you <span className="text-cyber-green glitch" data-text="belong">belong</span> here?
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-mono mb-12">
            The network is always expanding. We are always watching for top talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 w-full sm:w-auto bg-cyber-green text-black font-bold uppercase tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Join Future Opportunities <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
            </button>
            
            <button className="group relative px-8 py-4 w-full sm:w-auto bg-transparent border-2 border-cyber-green text-cyber-green font-bold uppercase tracking-wider overflow-hidden hover:text-black transition-colors duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Follow Instagram <Camera size={20} />
              </span>
              <div className="absolute inset-0 bg-cyber-green scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></div>
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex justify-center gap-8">
            <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
              <Camera size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
              <LinkIcon size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors hover:scale-110 transform duration-200">
              <Globe size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
