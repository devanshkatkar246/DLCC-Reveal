import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Trophy, TrendingUp } from 'lucide-react';

const values = [
  {
    id: "build",
    title: "BUILD",
    description: "We don't just talk about ideas. We write code, build systems, and ship products that matter.",
    icon: <Wrench size={48} />
  },
  {
    id: "compete",
    title: "COMPETE",
    description: "Sharpening our skills in the fire of competition. Algorithms, hackathons, and global leaderboards.",
    icon: <Trophy size={48} />
  },
  {
    id: "grow",
    title: "GROW",
    description: "A continuous loop of learning, failing, and evolving. We elevate ourselves and the network around us.",
    icon: <TrendingUp size={48} />
  }
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-black relative border-y border-cyber-green/20 z-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-4"
          >
            Core <span className="text-cyber-green">Directives</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, idx) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative group p-8 bg-[#0a0a0a] border border-gray-800 hover:border-cyber-green transition-all duration-300"
            >
              <div className="absolute inset-0 bg-cyber-green/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-cyber-green/50 flex items-center justify-center text-cyber-green mb-6 group-hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] group-hover:scale-110 transition-all duration-300 bg-black">
                  {value.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-widest group-hover:text-cyber-green transition-colors">{value.title}</h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
