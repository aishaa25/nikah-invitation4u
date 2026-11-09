import React from 'react';

export const HadithSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 flex flex-col items-center text-center select-none">
      {/* Arched Hadith Card Frame in Butter Creme */}
      <div className="relative w-full max-w-sm rounded-t-[160px] rounded-b-3xl bg-[#FFFBF5] border border-[#E5BDA7]/70 p-9 sm:p-11 shadow-lg">
        
        {/* Subtle Inner Arch Hairline Border */}
        <div className="absolute inset-3.5 rounded-t-[145px] rounded-b-2xl border border-dashed border-[#E5BDA7]/50 pointer-events-none" />

        {/* Soft Champagne Gold Quotation Mark */}
        <div className="font-serif-lux text-6xl sm:text-7xl text-[#C5A059] leading-none mb-3 select-none">
          “
        </div>

        {/* Arabic Prophetic Hadith text in Deep Ink Gild Calligraphy */}
        <div className="font-arabic text-3xl sm:text-4xl text-[#382E2B] leading-loose drop-shadow-sm font-medium mb-6">
          إِذَا تَزَوَّجَ الْعَبْدُ فَقَدِ اسْتَكْمَلَ نِصْفَ الدِّينِ
        </div>

        {/* English Translation */}
        <p className="font-serif-lux italic text-lg sm:text-xl text-[#4A3C38] leading-relaxed mb-6">
          &ldquo;When a servant of Allah marries, he has completed half of his faith.&rdquo;
        </p>

        {/* Attribution */}
        <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#74583E] font-bold">
          — Prophet Muhammad ﷺ · Al-Bayhaqi
        </p>

      </div>
    </section>
  );
};
