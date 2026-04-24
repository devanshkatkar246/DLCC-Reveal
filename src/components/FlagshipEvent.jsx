import React from 'react';
import { motion } from 'framer-motion';
import { Code, Gavel, Zap, ShieldAlert } from 'lucide-react';

const timeline = [
  { round: "Round 1", title: "Blind Coding", icon: <Code />, desc: "Monitors off. Pure logic and syntax mastery." },
  { round: "Round 2", title: "Auction War", icon: <Gavel />, desc: "Bid on problem statements using virtual currency." },
  { round: "Round 3", title: "Optimization Battle", icon: <Zap />, desc: "Refactor. Reduce time complexity. Survive." },
  { round: "Final", title: "Showdown", icon: <ShieldAlert />, desc: "The ultimate face-off for the championship title." }
];

const FlagshipEvent = () => {
  return (
    <section className="py-32 bg-[#050505] relative z-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyber-green/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Info */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-cyber-green/10 border border-cyber-green text-cyber-green font-mono text-sm uppercase tracking-widest mb-4"
            >
              Signature Protocol
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white leading-tight"
            >
              DSA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-emerald-400">AUCTION</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-xl md:text-2xl font-medium text-gray-300"
            >
              <p>Teams compete using logic, coding, and strategy.</p>
              <p className="text-white font-mono bg-black/50 p-4 border-l-4 border-cyber-green">
                <span className="text-red-500">No internet.</span><br/>
                <span className="text-red-500">No shortcuts.</span><br/>
                <span className="text-cyber-green neon-text">Only skill.</span>
              </p>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyber-green before:to-transparent">
              
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-cyber-green bg-black text-cyber-green shadow-[0_0_15px_rgba(0,255,65,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,65,0.6)] group-hover:bg-cyber-green group-hover:text-black transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-0 md:ml-0">
                    {item.icon}
                  </div>
                  
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg glass-card text-left md:group-odd:text-right ml-4 md:ml-0 md:group-odd:pr-8 md:group-even:pl-8 transition-transform duration-300 group-hover:-translate-y-1">
                    <h4 className="text-cyber-green font-mono text-sm uppercase mb-1">{item.round}</h4>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FlagshipEvent;
