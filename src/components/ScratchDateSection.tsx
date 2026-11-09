import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

interface ScratchCardProps {
  id: string;
  topValue: string;
  bottomLabel: string;
  subText?: string;
  isRevealed: boolean;
  onReveal: (id: string) => void;
  isWide?: boolean;
}

const ArchedScratchCard: React.FC<ScratchCardProps> = ({
  id,
  topValue,
  bottomLabel,
  subText,
  isRevealed,
  onReveal,
  isWide = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);
  const scratchedPixels = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.globalCompositeOperation = 'source-over';

    // Canva Fleet Grey textured slate surface
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#5E6572');
    grad.addColorStop(0.5, '#4A5260');
    grad.addColorStop(1, '#383F4C');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Delicate Rustic Warm golden stippled dots
    ctx.fillStyle = 'rgba(229, 189, 167, 0.55)';
    const dotSpacing = 16;
    for (let x = -w; x < w * 2; x += dotSpacing) {
      for (let y = 0; y < h; y += dotSpacing) {
        if ((x + y) % (dotSpacing * 2) === 0) {
          ctx.beginPath();
          ctx.arc(x + 5, y + 5, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Rustic Warm inner hairline arch
    ctx.strokeStyle = 'rgba(229, 189, 167, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(6, 6, w - 12, h - 12);
  }, [isRevealed]);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratchAt = (clientX: number, clientY: number) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    scratchedPixels.current += 1;
    if (scratchedPixels.current > 12) {
      onReveal(id);
    }
  };

  return (
    <div 
      className={`relative rounded-t-[70px] sm:rounded-t-[80px] rounded-b-3xl p-[2.5px] bg-gradient-to-b from-[#FFFDF9] via-[#EADBCE] to-[#C8B29E] shadow-[0_15px_35px_rgba(70,53,43,0.18)] group select-none overflow-hidden ${
        isWide ? 'w-64 sm:w-72 h-44 sm:h-48' : 'w-36 sm:w-44 h-52 sm:h-60'
      }`}
    >
      {/* Revealed content in Royal Arched Silhouette with Generous Typography */}
      <div className="w-full h-full rounded-t-[68px] sm:rounded-t-[78px] rounded-b-[22px] bg-[#FFFBF7] flex flex-col items-center justify-center p-4 text-center border border-[#E5BDA7]/60 shadow-inner relative overflow-hidden">
        {/* Subtle decorative inner arch */}
        <div className="absolute inset-2.5 rounded-t-[60px] sm:rounded-t-[70px] rounded-b-[18px] border border-dashed border-[#E5BDA7]/40 pointer-events-none" />

        {/* Delicate top finial */}
        <span className="text-[#C5A059] text-sm sm:text-base leading-none mb-1">❦</span>

        <span className={`font-serif-lux font-bold leading-tight tracking-tight text-[#3A424F] drop-shadow-sm ${
          isWide ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'
        }`}>
          {topValue}
        </span>

        <span className="text-xs sm:text-sm font-cinzel uppercase tracking-[0.25em] text-[#74583E] font-bold mt-2">
          {bottomLabel}
        </span>

        {subText && (
          <span className="font-serif-lux italic text-xs sm:text-sm text-[#8C786A] mt-1">
            {subText}
          </span>
        )}
      </div>

      {/* Interactive Scratch Canvas Surface */}
      {!isRevealed && (
        <div className="absolute inset-0 w-full h-full rounded-t-[70px] sm:rounded-t-[80px] rounded-b-3xl overflow-hidden z-10">
          <canvas
            ref={canvasRef}
            width={isWide ? 280 : 180}
            height={isWide ? 190 : 240}
            className="w-full h-full cursor-pointer touch-none transition-opacity duration-300"
            onMouseDown={(e) => { isDrawing.current = true; scratchAt(e.clientX, e.clientY); }}
            onMouseMove={(e) => { if (isDrawing.current) scratchAt(e.clientX, e.clientY); }}
            onMouseUp={() => { isDrawing.current = false; }}
            onMouseLeave={() => { isDrawing.current = false; }}
            onTouchStart={(e) => { isDrawing.current = true; if (e.touches[0]) scratchAt(e.touches[0].clientX, e.touches[0].clientY); }}
            onTouchMove={(e) => { if (isDrawing.current && e.touches[0]) scratchAt(e.touches[0].clientX, e.touches[0].clientY); }}
            onTouchEnd={() => { isDrawing.current = false; }}
          />

          {/* Hint Overlay prior to scratch */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-[#FFF7EE]/90">
            <Sparkles className="w-4 h-4 text-[#E5BDA7] mb-1 animate-pulse" />
            <span className="font-cinzel text-xs tracking-[0.22em] uppercase font-bold text-[#E5BDA7]">
              Scratch
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export const ScratchDateSection: React.FC = () => {
  const [revealed, setRevealed] = useState<{ day: boolean; year: boolean; time: boolean }>({
    day: false,
    year: false,
    time: false,
  });

  const handleRevealCard = (id: string) => {
    setRevealed((prev) => {
      const next = { ...prev, [id]: true };
      if (next.day && next.year && next.time) {
        try {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#5E6572', '#E5BDA7', '#74583E', '#FFF7EE', '#C5A059'],
          });
        } catch {}
      }
      return next;
    });
  };

  const handleRevealAll = () => {
    setRevealed({ day: true, year: true, time: true });
  };

  return (
    <section className="relative w-full py-16 px-4 flex flex-col items-center text-center select-none">
      {/* Title in Sophisticated Calligraphy & Serif */}
      <h2 className="font-calligraphy text-5xl sm:text-6xl text-[#3F4754] font-normal leading-tight">
        Reveal the day.
      </h2>
      <p className="font-serif-lux italic text-base sm:text-lg text-[#5E6572] mt-2">
        Scratch the royal arches to unveil our special date
      </p>

      {/* Prominent Day Label */}
      <p className="font-cinzel text-sm sm:text-base tracking-[0.35em] text-[#74583E] uppercase font-bold mt-7 mb-9">
        T H U R S D A Y
      </p>

      {/* Royal Arched 3-card layout */}
      <div className="flex flex-col items-center gap-6">
        {/* Top row: 17 DECEMBER and 2026 YEAR in Arched Gateways */}
        <div className="flex items-center justify-center gap-5 sm:gap-6">
          <ArchedScratchCard
            id="day"
            topValue="17"
            bottomLabel="DECEMBER"
            isRevealed={revealed.day}
            onReveal={handleRevealCard}
          />
          <ArchedScratchCard
            id="year"
            topValue="2026"
            bottomLabel="YEAR"
            isRevealed={revealed.year}
            onReveal={handleRevealCard}
          />
        </div>

        {/* Bottom row: 11:30 AM in a Grand Wide Arched Gateway */}
        <div className="flex items-center justify-center">
          <ArchedScratchCard
            id="time"
            topValue="11:30 AM"
            bottomLabel="CEREMONY TIME"
            subText="Morning Nikah"
            isRevealed={revealed.time}
            onReveal={handleRevealCard}
            isWide={true}
          />
        </div>
      </div>

      {(!revealed.day || !revealed.year || !revealed.time) && (
        <button
          onClick={handleRevealAll}
          className="mt-9 text-xs sm:text-sm font-cinzel uppercase tracking-[0.24em] text-[#5A432D] hover:text-[#382E2B] transition-all py-2.5 px-6 rounded-full border border-[#74583E]/50 hover:border-[#74583E] bg-[#FFF7EE] hover:bg-white shadow-sm active:scale-95 font-semibold"
        >
          Tap to reveal all
        </button>
      )}
    </section>
  );
};
