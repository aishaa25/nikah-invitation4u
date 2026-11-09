import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

interface EnvelopeSlideProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeSlide: React.FC<EnvelopeSlideProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.68 },
        colors: ['#C5A059', '#E5BDA7', '#74583E', '#FFF7EE', '#96AD91'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 40,
          spread: 95,
          origin: { y: 0.6 },
          colors: ['#C5A059', '#F7E5BF', '#74583E'],
        });
      }, 250);
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      onOpen();
      setIsOpening(false);
    }, 1100);
  };

  return (
    <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-center p-3 sm:p-6 select-none overflow-hidden bg-gradient-to-b from-[#FFFBF7] via-[#FAF4EB] to-[#F3EAE0]">
      {/* Background ambient lighting and subtle floating gold dust particles */}
      <div className="absolute inset-0 luxury-royal-bg opacity-85" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E5BDA7]/20 blur-3xl pointer-events-none" />

      {/* Floating subtle sparkle dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#C5A059] animate-ping opacity-50" />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#74583E] animate-pulse opacity-60" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#E5BDA7] animate-pulse opacity-50" />

      {/* Main Royal Envelope Card Container */}
      <div 
        onClick={handleOpenEnvelope}
        className={`relative w-full max-w-[430px] aspect-[9/16] max-h-[92vh] rounded-[34px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(90,67,45,0.3)] transition-all duration-1000 ease-out border-[2.5px] border-[#E8DACB] cursor-pointer group ${
          isOpening ? 'scale-105 opacity-90 -translate-y-4 shadow-[0_35px_70px_rgba(90,67,45,0.4)]' : 'scale-100 opacity-100 hover:scale-[1.01]'
        }`}
      >
        {/* The Envelope Visual: Cropped generously to completely eliminate ANY trace of the blue Chrome browser bar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/aistudio/Screen_Recording_20261106_230215_Chrome_fb171bd0.jpg"
            alt="Lace wedding envelope with gold Bismillah wax seal"
            className="w-full h-[126%] -mt-[21%] object-cover object-bottom scale-[1.03]"
          />
        </div>

        {/* Top Decorative Cap: Soft warm butter-creme fade with lace arch border that masks the upper edge seamlessly */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F9F4EC] via-[#F9F4EC]/60 to-transparent pointer-events-none" />

        {/* Soft Vignette and Delicate Luster Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#46352B]/15 via-transparent to-transparent pointer-events-none" />

        {/* Dynamic Light Shimmer Sweep across the envelope */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        {/* Interactive Wax Seal Centerpiece */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[17%] sm:pb-[18%] pointer-events-none">
          
          {/* Animated Gold Wax Seal Interactive Focus */}
          <div className="relative pointer-events-auto">
            {/* Concentric Golden Ripple Waves */}
            <div className="absolute -inset-5 rounded-full border border-[#C5A059]/50 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
            <div className="absolute -inset-10 rounded-full border border-[#E5BDA7]/40 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1s] pointer-events-none" />
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#F7E5BF]/40 via-[#E5BDA7]/50 to-[#C5A059]/40 blur-xl animate-pulse pointer-events-none" />

            {/* Tap Action Hitbox matching the exact round wax seal */}
            <div 
              className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-full cursor-pointer flex items-center justify-center transition-transform duration-500 group-hover:scale-105 active:scale-95 ${
                isOpening ? 'scale-125 animate-pulse' : 'animate-[bounce_4s_infinite]'
              }`}
            >
              {/* Golden metallic border halo */}
              <div className="w-full h-full rounded-full border-2 border-[#C5A059]/70 group-hover:border-[#C5A059] transition-all flex items-center justify-center shadow-lg group-hover:shadow-[0_0_25px_rgba(197,160,89,0.5)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Prompt: 'Touch Seal To Unveil' in Soft Butter Creme & Ink Gild */}
          <div className="mt-6 pointer-events-auto flex flex-col items-center">
            <div className="px-7 py-3 rounded-full bg-[#FFF7EE]/95 backdrop-blur-md border border-[#E5BDA7] text-[#74583E] text-xs sm:text-sm tracking-[0.25em] font-cinzel uppercase font-bold shadow-md flex items-center gap-2.5 group-hover:bg-white group-hover:text-[#5A432D] transition-all transform group-hover:-translate-y-0.5">
              <Sparkles className="w-4 h-4 text-[#C5A059] animate-spin" />
              <span>{isOpening ? 'Unfolding Invitation...' : 'Touch Seal To Unveil'}</span>
              <Sparkles className="w-4 h-4 text-[#C5A059] animate-spin" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
