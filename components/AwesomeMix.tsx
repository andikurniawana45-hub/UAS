import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';

const AwesomeMix: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setRotation((prev) => (prev + 5) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl brand-font text-yellow-500 mb-8 text-center drop-shadow-md">
                    AWESOME MIX VOL. 1
                </h2>
                
                {/* Cassette UI */}
                <div className="relative w-[320px] h-[210px] bg-orange-600 rounded-xl shadow-[0_10px_30px_rgba(234,88,12,0.3)] p-4 border-b-8 border-r-8 border-orange-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    {/* Cassette Label */}
                    <div className="absolute top-4 left-4 right-4 h-8 bg-white/90 transform -skew-x-6 flex items-center justify-center">
                        <span className="font-handwriting text-black font-bold tracking-tighter text-lg">Awesome Mix Vol. 1</span>
                    </div>

                    {/* Reels Window */}
                    <div className="absolute top-16 left-8 right-8 h-24 bg-gray-900 rounded-md flex items-center justify-center gap-8 border-4 border-gray-700">
                        {/* Left Reel */}
                        <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center relative bg-transparent overflow-hidden">
                             <div 
                                className="w-full h-1 bg-white absolute" 
                                style={{ transform: `rotate(${rotation}deg)` }} 
                             />
                             <div 
                                className="h-full w-1 bg-white absolute" 
                                style={{ transform: `rotate(${rotation}deg)` }} 
                             />
                        </div>
                         {/* Right Reel */}
                         <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center relative bg-transparent overflow-hidden">
                             <div 
                                className="w-full h-1 bg-white absolute" 
                                style={{ transform: `rotate(${rotation}deg)` }} 
                             />
                             <div 
                                className="h-full w-1 bg-white absolute" 
                                style={{ transform: `rotate(${rotation}deg)` }} 
                             />
                        </div>
                    </div>

                    {/* Bottom Tape Info */}
                    <div className="absolute bottom-4 left-4 text-xs text-orange-900 font-bold">A</div>
                    <div className="absolute bottom-4 right-4 text-xs text-orange-900 font-bold">NR 60</div>
                </div>

                {/* Controls */}
                <div className="flex gap-6 mt-10">
                    <button className="p-4 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                        <SkipBack size={24} />
                    </button>
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-6 rounded-full bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-110 transition-all shadow-[0_0_15px_rgba(234,179,8,0.5)]"
                    >
                        {isPlaying ? <Pause size={32} fill="black" /> : <Play size={32} fill="black" />}
                    </button>
                    <button className="p-4 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all">
                        <SkipForward size={24} />
                    </button>
                </div>
            </div>

            {/* Tracklist Visualizer */}
            <div className="w-full md:w-1/2">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
                    <h3 className="text-xl text-teal-400 font-bold mb-4 flex items-center gap-2">
                        <Music className="animate-bounce" /> NOW PLAYING
                    </h3>
                    <ul className="space-y-4">
                        {[
                            { title: "Hooked on a Feeling", artist: "Blue Swede" },
                            { title: "Go All the Way", artist: "Raspberries" },
                            { title: "Spirit in the Sky", artist: "Norman Greenbaum" },
                            { title: "Moonage Daydream", artist: "David Bowie" },
                            { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop" },
                        ].map((song, idx) => (
                            <li key={idx} className={`flex items-center justify-between p-3 rounded border border-transparent ${isPlaying && idx === 0 ? 'bg-indigo-900/30 border-indigo-500/50' : 'hover:bg-gray-800'}`}>
                                <span className={isPlaying && idx === 0 ? 'text-yellow-400' : 'text-gray-300'}>
                                    {idx + 1}. {song.title}
                                </span>
                                <span className="text-gray-500 text-sm">{song.artist}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AwesomeMix;