import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

export const GatheringSection: React.FC = () => {
  // Exact user-provided Google Maps location for Jama Masjid, Rajpuri
  const mapsUrl = 'https://maps.app.goo.gl/9hYLeVdyWdis2FnD9?g_st=ac';

  return (
    <section className="relative w-full py-16 px-4 flex flex-col items-center text-center select-none">
      {/* Section Header */}
      <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-[#74583E] font-bold mb-2">
        The Gathering
      </p>

      {/* Elegant Serif Title */}
      <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#382E2B] font-normal tracking-wide">
        The Nikah Ceremony
      </h2>

      {/* Delicate Champagne Divider */}
      <div className="my-8 flex items-center justify-center gap-3 w-48">
        <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
        <span className="text-[#B88B4A] text-sm">❦</span>
        <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
      </div>

      {/* Unified Wedding Invitation Card */}
      <div className="w-full max-w-sm rounded-3xl bg-[#FFFBF5] border border-[#E5BDA7]/70 p-7 sm:p-9 shadow-lg text-center relative overflow-hidden">
        {/* Subtle inner hairline border */}
        <div className="absolute inset-2.5 rounded-[20px] border border-[#E5BDA7]/30 pointer-events-none" />

        {/* 1. DAY & DATE */}
        <div className="space-y-1 pb-5">
          <p className="font-cinzel text-[11px] uppercase tracking-[0.32em] text-[#8C786A] font-semibold">
            Day &amp; Date
          </p>
          <p className="font-cinzel text-xl sm:text-2xl text-[#382E2B] font-bold tracking-[0.2em] uppercase">
            THURSDAY
          </p>
          <p className="font-serif-lux text-lg sm:text-xl text-[#5A432D] font-medium tracking-wide">
            17th December 2026
          </p>
        </div>

        {/* Delicate Card Divider */}
        <div className="w-24 h-[1px] bg-[#E5BDA7]/60 mx-auto my-2" />

        {/* 2. TIME - Crystal-clear, bold, and high contrast */}
        <div className="space-y-1.5 py-4">
          <p className="font-cinzel text-[11px] uppercase tracking-[0.32em] text-[#8C786A] font-semibold">
            Time
          </p>
          <div className="inline-block px-5 py-2 rounded-xl bg-[#FAF0E4] border border-[#E5BDA7]/50 shadow-inner">
            <p className="font-display-lux text-3xl sm:text-4xl text-[#382E2B] font-bold tracking-wider">
              11:30 AM
            </p>
          </div>
          <p className="font-serif-lux italic text-xs text-[#74583E] pt-0.5">
            Morning Ceremony
          </p>
        </div>

        {/* Delicate Card Divider */}
        <div className="w-24 h-[1px] bg-[#E5BDA7]/60 mx-auto my-2" />

        {/* 3. VENUE - ALL CAPITAL LETTERS consistent with THURSDAY */}
        <div className="space-y-1.5 pt-4">
          <p className="font-cinzel text-[11px] uppercase tracking-[0.32em] text-[#8C786A] font-semibold">
            Venue
          </p>
          <p className="font-cinzel text-xl sm:text-2xl text-[#382E2B] font-bold tracking-[0.18em] uppercase">
            JAMA MASJID, RAJPURI
          </p>
          <p className="font-serif-lux text-xs sm:text-sm text-[#74583E] tracking-wide">
            Murud, Maharashtra
          </p>
        </div>

      </div>

      {/* Direct Google Maps Navigation Button */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full border border-[#74583E] text-[#5A432D] bg-[#FFF7EE] hover:bg-[#F3E7DC] font-cinzel text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold flex items-center gap-2.5 transition-all shadow-sm active:scale-95"
        >
          <MapPin className="w-4 h-4 text-[#B88B4A]" />
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#B88B4A]" />
        </a>

        <p className="text-[11px] text-[#8C786A] font-serif-lux italic pt-1">
          Opens location directly in Google Maps
        </p>
      </div>
    </section>
  );
};
