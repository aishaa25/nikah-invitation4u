import React from 'react';

interface IntroSectionProps {
  onScrollToEnter: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onScrollToEnter }) => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 select-none">
      {/* Arabic Bismillah in Ink Gild / Deep Warm Brown */}
      <div className="font-arabic text-4xl sm:text-5xl md:text-6xl text-[#74583E] leading-relaxed drop-shadow-sm font-medium tracking-wide">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>

      <p className="mt-5 font-sans-clean text-xs sm:text-sm tracking-[0.24em] text-[#8C786A] font-medium max-w-sm uppercase">
        In the name of Allah, the Most Beneficent, the Most Merciful
      </p>

      {/* Ornate Gold / Ink Gild Divider */}
      <div className="my-12 flex items-center justify-center gap-4 w-56">
        <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/70 to-[#C5A059]" />
        <span className="text-[#C5A059] text-base">❦</span>
        <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059]/70 to-[#C5A059]" />
      </div>

      <p className="font-serif-lux text-base sm:text-lg tracking-[0.2em] text-[#382E2B] font-semibold max-w-md uppercase">
        With the love and blessings of our families
      </p>

      {/* Elegant Scroll to Enter Button in Butter Creme */}
      <button
        onClick={onScrollToEnter}
        className="mt-14 px-8 py-3 rounded-full border border-[#C5A059]/50 hover:border-[#74583E] bg-[#FFF7EE]/90 backdrop-blur-sm text-[#74583E] text-xs sm:text-sm font-cinzel uppercase tracking-[0.24em] font-medium transition-all hover:bg-white active:scale-95 shadow-sm flex items-center gap-2.5"
      >
        <span>Scroll to Enter</span>
        <span className="text-sm">↓</span>
      </button>
    </section>
  );
};
