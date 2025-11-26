import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient simulating the poster's deep space look */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black z-0"></div>
      
      {/* Star overlay handled by global CSS class .star-bg in index.html, added here too for safety */}
      <div className="absolute inset-0 opacity-50 star-bg z-0"></div>

      {/* Nebula effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-teal-400 tracking-[0.5em] text-sm md:text-lg mb-4 uppercase font-bold animate-fade-in-up">
          From the Studio that brought you Avengers
        </p>
        
        <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-2 tracking-tighter brand-font transform skew-x-[-2deg]">
          GUARDIANS
        </h1>
        <h2 className="text-4xl md:text-7xl font-bold text-gray-300 tracking-wide brand-font mb-8">
          OF THE GALAXY
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
           <button className="group relative px-8 py-4 bg-transparent border-2 border-teal-400 text-teal-400 font-bold uppercase tracking-widest hover:bg-teal-400 hover:text-black transition-all duration-300 skew-x-[-10deg]">
              <span className="block skew-x-[10deg]">Watch Trailer</span>
              <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
           </button>
           
           <button className="group relative px-8 py-4 bg-yellow-600 text-white font-bold uppercase tracking-widest hover:bg-yellow-500 transition-all duration-300 skew-x-[-10deg] shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              <span className="block skew-x-[10deg]">Get Tickets</span>
           </button>
        </div>

        <p className="mt-16 text-gray-400 text-sm tracking-widest uppercase">
          All Heroes Start Somewhere
        </p>
      </div>
    </section>
  );
};

export default Hero;