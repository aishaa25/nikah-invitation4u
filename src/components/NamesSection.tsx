import React from 'react';

export const NamesSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center text-center select-none">
      {/* Alhamdulillah in Gold Calligraphy */}
      <div className="font-arabic text-2xl sm:text-3xl text-[#C5A059] leading-none mb-3 font-semibold drop-shadow-sm">
        الْحَمْدُ لِلَّهِ
      </div>

      <p className="font-cinzel text-xs sm:text-sm tracking-[0.24em] text-[#8C786A] font-semibold max-w-sm mb-10 uppercase">
        We are pleased to announce the Nikah ceremony of
      </p>

      {/* The Royal Oval in Warm Rustic Taupe with Pearl Border */}
      <div className="relative w-[310px] h-[470px] sm:w-[340px] sm:h-[510px] rounded-[50%] p-[9px] bg-gradient-to-b from-[#FFFBF7] via-[#EADBCE] to-[#C8B29E] shadow-[0_20px_45px_rgba(70,53,43,0.18)] flex items-center justify-center">
        
        {/* Soft Beaded Pearl Ring along the border */}
        <div className="absolute inset-[3px] rounded-[50%] border-2 border-dotted border-white/95 pointer-events-none" />

        {/* Inner Oval Disc in Warm Deep Walnut Taupe */}
        <div className="w-full h-full rounded-[50%] bg-gradient-to-b from-[#5C4536] via-[#483427] to-[#36261C] flex flex-col items-center justify-center p-6 text-center shadow-inner">
          
          {/* Bride Name Section */}
          <div className="space-y-1">
            <div className="font-arabic text-xl sm:text-2xl text-white/95 leading-tight">
              عَائِشَة
            </div>

            {/* Ayesha: Explicit, Grand Royal Capital 'A' in Gold Foil Calligraphy */}
            <h2 className="text-gold-foil leading-tight drop-shadow-md py-0.5 flex items-baseline justify-center tracking-wide">
              <span className="font-pinyon text-6xl sm:text-7xl font-semibold inline-block -mr-1 text-[#F7E5BF]">
                A
              </span>
              <span className="font-calligraphy text-5xl sm:text-6xl text-[#F7E5BF]">
                yesha
              </span>
            </h2>

            {/* Title Case: Daughter of Mr. & Mrs. Aijaz Daroge */}
            <p className="font-sans-clean text-[11px] sm:text-xs tracking-[0.15em] text-[#E5BDA7] font-medium pt-1">
              Daughter of
            </p>
            <p className="font-serif-lux text-sm sm:text-base tracking-wider text-white font-medium">
              Mr. &amp; Mrs. Aijaz Daroge
            </p>
          </div>

          {/* Golden Calligraphy Ampersand */}
          <div className="my-2.5 font-calligraphy text-3xl sm:text-4xl text-[#E5BDA7] leading-none drop-shadow-sm">
            &amp;
          </div>

          {/* Groom Name Section */}
          <div className="space-y-1">
            <div className="font-arabic text-xl sm:text-2xl text-white/95 leading-tight">
              صَيْف الدِّين
            </div>

            {/* Saifuddin: Grand Royal Capital 'S' in Gold Foil Calligraphy */}
            <h2 className="text-gold-foil leading-tight drop-shadow-md py-0.5 flex items-baseline justify-center tracking-wide">
              <span className="font-pinyon text-6xl sm:text-7xl font-semibold inline-block -mr-0.5 text-[#F7E5BF]">
                S
              </span>
              <span className="font-calligraphy text-5xl sm:text-6xl text-[#F7E5BF]">
                aifuddin
              </span>
            </h2>

            {/* Title Case: Son of Mr. & Mrs. Rizwan Kadri */}
            <p className="font-sans-clean text-[11px] sm:text-xs tracking-[0.15em] text-[#E5BDA7] font-medium pt-1">
              Son of
            </p>
            <p className="font-serif-lux text-sm sm:text-base tracking-wider text-white font-medium">
              Mr. &amp; Mrs. Rizwan Kadri
            </p>
          </div>

        </div>
      </div>

      {/* Invitation Subtitle below oval */}
      <div className="mt-10 space-y-1.5 max-w-sm">
        <p className="font-serif-lux italic text-lg sm:text-xl text-[#46352B] leading-snug">
          cordially invite you to grace the occasion
        </p>
        <p className="font-serif-lux italic text-base sm:text-lg text-[#74583E]">
          of their Nikah ceremony
        </p>
      </div>
    </section>
  );
};
