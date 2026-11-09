import React from 'react';

export const NamesSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 flex flex-col items-center text-center select-none">
      {/* Alhamdulillah in Ink Gild */}
      <div className="font-arabic text-2xl sm:text-3xl text-[#74583E] leading-none mb-3 font-semibold drop-shadow-sm">
        الْحَمْدُ لِلَّهِ
      </div>

      <p className="font-cinzel text-xs sm:text-sm tracking-[0.24em] text-[#8C786A] font-semibold max-w-sm mb-8 uppercase">
        We are pleased to announce the Nikah ceremony of
      </p>

      {/* The Iconic Canva Fleet Grey Luxury Wedding Card */}
      <div className="relative w-full max-w-[370px] rounded-[30px] bg-gradient-to-b from-[#4A5361] via-[#3F4754] to-[#333A46] text-white p-7 sm:p-9 shadow-[0_22px_55px_-10px_rgba(50,57,68,0.45)] border border-[#E5BDA7]/45 flex flex-col items-center">
        
        {/* Subtle inner hairline border */}
        <div className="absolute inset-3 rounded-[22px] border border-[#E5BDA7]/30 pointer-events-none" />

        {/* Botanical Sprig Top */}
        <div className="w-32 h-9 text-[#E5BDA7] opacity-90 mb-3 pointer-events-none">
          <svg viewBox="0 0 120 30" className="w-full h-full fill-none stroke-current" strokeWidth="1.2">
            <path d="M 10,15 Q 60,10 110,15" />
            <path d="M 30,14 C 28,8 35,4 40,11" fill="#E5BDA7" />
            <path d="M 45,13 C 48,6 55,8 53,14" fill="#E5BDA7" />
            <path d="M 65,13 C 63,6 70,5 74,12" fill="#E5BDA7" />
            <path d="M 80,14 C 83,7 90,9 88,15" fill="#E5BDA7" />
            <circle cx="20" cy="15" r="1.5" fill="#E5BDA7" />
            <circle cx="100" cy="15" r="1.5" fill="#E5BDA7" />
          </svg>
        </div>

        {/* Header invitation phrase honoring hosts */}
        <p className="font-serif-lux italic text-sm sm:text-base text-[#E5BDA7] font-medium tracking-wide mb-3 max-w-[280px]">
          Mr. &amp; Mrs. Aijaz Daroge request the honour of your presence at the Nikah of their daughter
        </p>

        {/* Bride Name Section */}
        <div className="space-y-1.5 py-1">
          <div className="font-arabic text-2xl sm:text-3xl text-[#FFF7EE]/95 leading-tight font-medium drop-shadow-sm">
            عَائِشَة
          </div>

          {/* Ayesha: Flowing Royal Luxury Calligraphy */}
          <h2 className="py-1 tracking-wide">
            <span className="font-pinyon text-6xl sm:text-7xl md:text-8xl text-[#E5BDA7] font-normal inline-block drop-shadow-[0_3px_12px_rgba(229,189,167,0.35)] hover:scale-105 transition-transform duration-300">
              Ayesha
            </span>
          </h2>

          {/* Title Case: Daughter of Mr. & Mrs. Aijaz Daroge - BOLD & CLEAR */}
          <p className="font-sans-clean text-xs sm:text-sm tracking-[0.22em] uppercase text-[#E5BDA7] font-semibold pt-1">
            Daughter of
          </p>
          <p className="font-serif-lux text-base sm:text-lg tracking-wider text-[#FFF7EE] font-bold drop-shadow-sm">
            Mr. &amp; Mrs. Aijaz Daroge
          </p>
        </div>

        {/* Ornate Calligraphy Ampersand with Golden Hairlines */}
        <div className="my-2 flex items-center justify-center gap-3 w-44">
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#E5BDA7]/80" />
          <span className="font-pinyon text-4xl sm:text-5xl text-[#E5BDA7] italic drop-shadow-sm leading-none px-1">
            &amp;
          </span>
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#E5BDA7]/80" />
        </div>

        {/* Groom Name Section */}
        <div className="space-y-1.5 py-1">
          <div className="font-arabic text-2xl sm:text-3xl text-[#FFF7EE]/95 leading-tight font-medium drop-shadow-sm">
            صَيْف الدِّين
          </div>

          {/* Saifuddin: Flowing Royal Luxury Calligraphy */}
          <h2 className="py-1 tracking-wide">
            <span className="font-pinyon text-6xl sm:text-7xl md:text-8xl text-[#E5BDA7] font-normal inline-block drop-shadow-[0_3px_12px_rgba(229,189,167,0.35)] hover:scale-105 transition-transform duration-300">
              Saifuddin
            </span>
          </h2>

          {/* Title Case: Son of Mr. & Mrs. Rizwan Kadri - BOLD & CLEAR */}
          <p className="font-sans-clean text-xs sm:text-sm tracking-[0.22em] uppercase text-[#E5BDA7] font-semibold pt-1">
            Son of
          </p>
          <p className="font-serif-lux text-base sm:text-lg tracking-wider text-[#FFF7EE] font-bold drop-shadow-sm">
            Mr. &amp; Mrs. Rizwan Kadri
          </p>
        </div>

        {/* Botanical Sprig Bottom */}
        <div className="w-32 h-9 text-[#E5BDA7] opacity-90 my-3 pointer-events-none rotate-180">
          <svg viewBox="0 0 120 30" className="w-full h-full fill-none stroke-current" strokeWidth="1.2">
            <path d="M 10,15 Q 60,10 110,15" />
            <path d="M 30,14 C 28,8 35,4 40,11" fill="#E5BDA7" />
            <path d="M 45,13 C 48,6 55,8 53,14" fill="#E5BDA7" />
            <path d="M 65,13 C 63,6 70,5 74,12" fill="#E5BDA7" />
            <path d="M 80,14 C 83,7 90,9 88,15" fill="#E5BDA7" />
            <circle cx="20" cy="15" r="1.5" fill="#E5BDA7" />
            <circle cx="100" cy="15" r="1.5" fill="#E5BDA7" />
          </svg>
        </div>

        {/* Invitation Line */}
        <p className="font-serif-lux italic text-sm sm:text-base text-[#FFF7EE] font-medium tracking-wide">
          cordially invite you to celebrate their Nikah
        </p>

      </div>

      {/* Invitation Subtitle below card */}
      <div className="mt-8 space-y-1.5 max-w-sm">
        <p className="font-serif-lux italic text-lg sm:text-xl text-[#434B58] font-medium">
          to share in their joy as they unite in marriage
        </p>
      </div>
    </section>
  );
};
