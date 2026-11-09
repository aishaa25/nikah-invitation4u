/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { MusicPlayer } from './components/MusicPlayer';
import { EnvelopeSlide } from './components/EnvelopeSlide';
import { FloralWatercolorAccents } from './components/FloralWatercolorAccents';
import { IntroSection } from './components/IntroSection';
import { NamesSection } from './components/NamesSection';
import { ScratchDateSection } from './components/ScratchDateSection';
import { GatheringSection } from './components/GatheringSection';
import { HadithSection } from './components/HadithSection';
import { CountdownClosingSection } from './components/CountdownClosingSection';

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const namesSectionRef = useRef<HTMLDivElement | null>(null);

  // Initialize Nasheed Audio
  useEffect(() => {
    const audio = new Audio('/assets/aistudio/Assubhu_Bada____________Ayisha_Abdul_Basith__OFFICIAL_VIDEO__69fc3352.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {
        // browser autoplay policy handled
      });
    }
  };

  const handleToggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch(() => {
        // audio playback error handled
      });
    }
  };

  const handleScrollToEnter = () => {
    if (namesSectionRef.current) {
      namesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F5EFEB] text-[#382E2B] selection:bg-[#E5BDA7] selection:text-[#382E2B] overflow-x-hidden font-serif-lux">
      
      {/* If envelope is closed, show initial envelope opening experience */}
      {!envelopeOpened ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FDFBF7]">
          <EnvelopeSlide isOpen={envelopeOpened} onOpen={handleOpenEnvelope} />
        </div>
      ) : (
        /* The serene, refined continuous wedding invitation page */
        <div className="relative w-full max-w-md mx-auto min-h-screen flex flex-col justify-between shadow-2xl bg-[#FFFDF9] border-x border-[#E5BDA7]/50">
          
          {/* Layered Luxury Floral & Royal Watermark Accents */}
          <FloralWatercolorAccents />

          {/* Minimalist Top Bar: 'A · S' on Left, Round Replay & Pause Button on Right */}
          <header className="sticky top-0 z-40 w-full px-6 py-4 flex items-center justify-between bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#E5BDA7]/40">
            <span className="font-cinzel text-base sm:text-lg tracking-[0.4em] uppercase text-[#382E2B] font-semibold">
              A · S
            </span>

            <div className="flex items-center gap-2">
              {/* Button to re-experience the opening envelope */}
              <button
                onClick={() => setEnvelopeOpened(false)}
                className="w-9 h-9 rounded-full border border-[#74583E]/30 hover:border-[#74583E] bg-[#FFFBF5]/80 backdrop-blur-sm flex items-center justify-center text-[#5A432D] hover:bg-white transition-all text-xs shadow-sm"
                title="View Opening Envelope"
                aria-label="Replay envelope"
              >
                ✉
              </button>
              {/* Small pause button with NO title tab */}
              <MusicPlayer isPlaying={isPlayingMusic} onToggle={handleToggleMusic} />
            </div>
          </header>

          {/* Main Invitation Stream */}
          <main className="relative z-10 w-full flex flex-col items-center">
            
            {/* 1. Intro Section (Bismillah & Blessings, removed 'A beginning to forever' & 'Till Jannah') */}
            <IntroSection onScrollToEnter={handleScrollToEnter} />

            {/* 2. Names Section (Mauve Oval with Beaded Border, Ayesha & Saifuddin in lavish calligraphy, Parents) */}
            <div ref={namesSectionRef} className="w-full">
              <NamesSection />
            </div>

            {/* 3. Scratch Date Section (3 Triangle Cards, 17 December 2026, 11:30 AM) */}
            <ScratchDateSection />

            {/* 4. The Gathering / Venue Section (Date, Time, Venue Cards - Add to Calendar removed) */}
            <GatheringSection />

            {/* 5. Hadith Section (Arched Frame, No Heading) */}
            <HadithSection />

            {/* 6. Countdown & Closing Section (2x2 Discs, 'Until we say Qubool Hai' removed, Ameen, RSVP and Send Duas removed) */}
            <CountdownClosingSection />
          </main>
        </div>
      )}
    </div>
  );
}
