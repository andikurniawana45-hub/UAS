import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import CharacterCard from './components/CharacterCard';
import AwesomeMix from './components/AwesomeMix';
import NovaDatabase from './components/NovaDatabase';
import { CHARACTERS } from './constants';
import { Zap } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-gray-100 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-black brand-font tracking-tighter text-teal-400 italic">
                GOTG<span className="text-white">.VOL1</span>
            </div>
            <div className="hidden md:flex gap-8 font-bold uppercase text-sm tracking-widest text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Heroes</a>
                <a href="#" className="hover:text-white transition-colors">Music</a>
                <a href="#database" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                    <Zap size={14} className="text-yellow-500" />
                    Database
                </a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-sm font-bold uppercase text-xs tracking-wider transition-all skew-x-[-10deg]">
                <span className="block skew-x-[10deg]">Join The Team</span>
            </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        
        {/* Roster Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                     <h2 className="text-4xl md:text-5xl font-bold brand-font mb-4 text-center">THE TEAM</h2>
                     <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-600"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {CHARACTERS.map(char => (
                        <CharacterCard key={char.id} character={char} />
                    ))}
                </div>
            </div>
        </section>

        <AwesomeMix />

        <NovaDatabase />
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-900">
         <div className="container mx-auto px-4 text-center">
             <h3 className="text-2xl brand-font text-gray-500 mb-6">MARVEL STUDIOS</h3>
             <p className="text-gray-600 text-sm">
                 This is a fan-made demo site showcasing React & Gemini API. <br/>
                 Guardians of the Galaxy imagery and concepts are property of Marvel.
             </p>
         </div>
      </footer>
    </div>
  );
};

export default App;