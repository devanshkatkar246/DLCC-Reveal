import React from 'react';
import Hero from './components/Hero';
import EliteMessage from './components/EliteMessage';
import TeamReveal from './components/TeamReveal';
import CoreValues from './components/CoreValues';
import FlagshipEvent from './components/FlagshipEvent';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cyber-dark min-h-screen text-cyber-light font-sans selection:bg-cyber-green selection:text-black">
      <Hero />
      <EliteMessage />
      <TeamReveal />
      <CoreValues />
      <FlagshipEvent />
      <JoinCTA />
      <Footer />
    </div>
  );
}

export default App;
