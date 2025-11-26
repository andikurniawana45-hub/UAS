import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Cpu, AlertTriangle } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToNovaCorps } from '../services/geminiService';

const NovaDatabase: React.FC = () => {
  const [history, setHistory] = useState<ChatMessage[]>([
    { role: 'model', text: 'NOVA CORPS DATABASE ACCESSED. IDENTITY VERIFIED. WAITING FOR QUERY...' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSend = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setHistory(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToNovaCorps(history, input);
      setHistory(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setHistory(prev => [...prev, { role: 'model', text: 'ERROR: COMMUNICATION JAMMED.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, history, isLoading]);

  return (
    <section className="py-24 relative bg-gray-900" id="database">
        {/* Holographic grid background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 text-cyan-400 border border-cyan-400 px-4 py-1 rounded-full bg-cyan-900/20 mb-4 animate-pulse">
                    <Cpu size={16} />
                    <span className="text-xs font-mono font-bold tracking-widest">LIVE UPLINK ESTABLISHED</span>
                </div>
                <h2 className="text-4xl md:text-5xl brand-font text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                    NOVA CORPS DATABASE
                </h2>
                <p className="text-cyan-200/60 mt-2 font-mono text-sm">Ask about the Galaxy, The Team, or Planetary Threats.</p>
            </div>

            {/* Terminal UI */}
            <div className="bg-black/80 border-2 border-cyan-500/50 rounded-lg shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-md flex flex-col h-[500px]">
                {/* Terminal Header */}
                <div className="bg-cyan-900/30 border-b border-cyan-500/30 p-2 flex justify-between items-center px-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono text-cyan-400">TERM_SESSION_ID: XANDAR_PRIME</div>
                </div>

                {/* Chat Area */}
                <div 
                    className="flex-1 p-6 overflow-y-auto scrollbar-hide font-mono text-sm md:text-base space-y-4"
                    ref={scrollRef}
                >
                    {history.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-4 rounded-sm border-l-2 ${
                                msg.role === 'user' 
                                ? 'bg-purple-900/20 border-purple-500 text-purple-100' 
                                : msg.isError 
                                    ? 'bg-red-900/20 border-red-500 text-red-400'
                                    : 'bg-cyan-900/20 border-cyan-400 text-cyan-100'
                            }`}>
                                <div className="text-[10px] opacity-50 mb-1 uppercase tracking-wider">
                                    {msg.role === 'user' ? 'Starlord_Term' : 'Nova_Prime_AI'}
                                </div>
                                {msg.isError && <AlertTriangle className="inline-block mr-2 mb-1" size={16}/>}
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-cyan-900/20 border-l-2 border-cyan-400 p-4 text-cyan-400 animate-pulse font-mono">
                                 PROCESSING REQUEST...
                             </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-gray-900/90 border-t border-cyan-500/30 flex gap-2">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="ENTER QUERY COMMAND..."
                        className="flex-1 bg-black/50 border border-cyan-700 text-cyan-400 p-3 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] placeholder-cyan-800"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={isLoading}
                        className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold p-3 px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default NovaDatabase;