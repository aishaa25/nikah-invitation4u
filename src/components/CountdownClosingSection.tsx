import React, { useState, useEffect } from 'react';

export const CountdownClosingSection: React.FC = () => {
  // Target: Thursday, 17 December 2026, 11:30:00 AM
  const targetDate = new Date('2026-12-17T11:30:00');

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full pt-16 pb-0 flex flex-col items-center text-center select-none">
      {/* Title */}
      <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#74583E] font-bold mb-10">
        Counting Down To The Nikah
      </p>

      {/* 4 Circular Countdown Discs with Butter Creme & Rustic Warm Styling (2x2 layout) */}
      <div className="grid grid-cols-2 gap-5 max-w-xs mx-auto mb-14">
        
        {/* Days */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#FFFBF5] border-2 border-[#E5BDA7]/80 shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-105">
          <span className="font-display-lux text-4xl sm:text-5xl text-[#382E2B] font-bold tabular-nums">
            {timeLeft.days}
          </span>
          <span className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#74583E] font-bold mt-1.5">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#FFFBF5] border-2 border-[#E5BDA7]/80 shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-105">
          <span className="font-display-lux text-4xl sm:text-5xl text-[#382E2B] font-bold tabular-nums">
            {timeLeft.hours}
          </span>
          <span className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#74583E] font-bold mt-1.5">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#FFFBF5] border-2 border-[#E5BDA7]/80 shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-105">
          <span className="font-display-lux text-4xl sm:text-5xl text-[#382E2B] font-bold tabular-nums">
            {timeLeft.minutes}
          </span>
          <span className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#74583E] font-bold mt-1.5">
            Minutes
          </span>
        </div>

        {/* Seconds */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#FFFBF5] border-2 border-[#E5BDA7]/80 shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-105">
          <span className="font-display-lux text-4xl sm:text-5xl text-[#382E2B] font-bold tabular-nums">
            {timeLeft.seconds}
          </span>
          <span className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#74583E] font-bold mt-1.5">
            Seconds
          </span>
        </div>

      </div>

      {/* Warm Duas Closing Message */}
      <div className="px-6 max-w-sm space-y-3 mb-14">
        <h3 className="font-serif-lux text-xl sm:text-2xl text-[#382E2B] leading-relaxed font-normal">
          Your gracious presence and duas are sincerely requested.
        </h3>
        <p className="font-serif-lux italic text-base sm:text-lg text-[#74583E] leading-relaxed">
          May Allah SWT bless this union with love, mercy and barakah.
        </p>
        <p className="font-serif-lux italic text-base sm:text-lg text-[#5A432D] font-medium">
          Ameen.
        </p>
      </div>

      {/* Refined Wedding Invitation Closing & Family Hosting Footer */}
      <footer className="w-full pt-10 pb-14 px-6 bg-[#F7EFE6]/90 border-t border-[#E5BDA7]/60 text-center flex flex-col items-center relative">
        {/* Delicate Finial Ornament */}
        <div className="flex items-center justify-center gap-3 w-40 mb-5">
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-[#B88B4A] text-sm">❦</span>
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* Final Invitation Line */}
        <p className="font-serif-lux text-lg sm:text-xl text-[#382E2B] font-normal leading-relaxed max-w-sm mb-4">
          &ldquo;Your presence will make our celebration even more special.&rdquo;
        </p>

        {/* Warm Regard */}
        <p className="font-serif-lux italic text-sm sm:text-base text-[#74583E] tracking-wide mb-1.5">
          With love and blessings,
        </p>

        {/* Prominent Family Name */}
        <p className="font-cinzel text-xl sm:text-2xl text-[#382E2B] font-bold tracking-[0.16em] uppercase">
          The Daroge Family
        </p>

        {/* Subtle Graceful Subtext */}
        <p className="font-serif-lux italic text-xs text-[#8C786A] mt-3 tracking-wider">
          Hosted with love · Rajpuri
        </p>
      </footer>
    </section>
  );
};
