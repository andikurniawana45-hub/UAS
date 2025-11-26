import React from 'react';
import { Character } from '../types';

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className="group relative w-full h-[400px] overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-500 hover:scale-105 hover:border-opacity-100 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Glowing border based on character color */}
        <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: `inset 0 0 20px ${character.accentColor}` }}
        />

        <img 
            src={character.imageUrl} 
            alt={character.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-3xl font-bold brand-font italic uppercase" style={{ color: character.accentColor }}>
                {character.name}
            </h3>
            <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">
                {character.actor}
            </p>
            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {character.description}
            </p>
        </div>
    </div>
  );
};

export default CharacterCard;