import React from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause Nasheed' : 'Play Nasheed'}
      className="w-9 h-9 rounded-full border border-[#74583E]/40 hover:border-[#74583E] bg-[#FFFBF5]/80 backdrop-blur-sm flex items-center justify-center text-[#5A432D] transition-all hover:bg-white active:scale-95 shadow-sm"
    >
      {isPlaying ? (
        // Minimalist pause icon II
        <span className="font-serif-lux font-semibold text-xs tracking-tighter select-none leading-none">
          II
        </span>
      ) : (
        // Minimalist play triangle
        <span className="font-serif-lux text-xs ml-0.5 select-none leading-none text-[#74583E]">
          ▶
        </span>
      )}
    </button>
  );
};
