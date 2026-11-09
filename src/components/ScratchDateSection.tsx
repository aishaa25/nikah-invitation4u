import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface ScratchCardProps {
  id: string;
  topValue: string;
  bottomLabel: string;
  isRevealed: boolean;
  onReveal: (id: string) => void;
}

const TriangleScratchCard: React.FC<ScratchCardProps> = ({
  id,
  topValue,
  bottomLabel,
  isRevealed,
  onReveal,
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

    // Warm rustic champagne satin gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#B38B6D');
    grad.addColorStop(0.5, '#967054');
    grad.addColorStop(1, '#74533C');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Delicate golden dotted texture
    ctx.fillStyle = 'rgba(255, 247, 238, 0.45)';
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

    // Gold inner hairline rim
    ctx.strokeStyle = 'rgba(247, 229, 191, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(4, 4, w - 8, h - 8);
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
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    scratchedPixels.current += 1;
    if (scratchedPixels.current > 14) {
      onReveal(id);
    }
  };

  return (
    <div className="relative w-36 h-48 sm:w-40 sm:h-52 rounded-[22px] p-[2.5px] bg-gradient-to-b from-[#FFFDF9] via-[#EADBCE] to-[#C8B29E] shadow-lg group select-none">
      {/* Revealed content in Butter Creme & Deep Ink Gild for maximum visibility */}
      <div className="w-full h-full rounded-[20px] bg-[#FFF8F0] flex flex-col items-center justify-center p-3 text-center border border-[#E5BDA7]/60 shadow-inner">
        <span className="font-serif-lux text-4xl sm:text-5xl text-[#74583E] font-bold leading-tight tracking-tight">
          {topValue}
        </span>
        <span className="text-xs sm:text-sm font-cinzel uppercase tracking-[0.22em] text-[#8C786A] font-semibold mt-1.5">
          {bottomLabel}
        </span>
      </div>

      {/* Interactive Scratch Canvas Surface */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          width={160}
          height={210}
          className="absolute inset-0 w-full h-full rounded-[22px] cursor-pointer touch-none z-10 transition-opacity duration-300"
          onMouseDown={(e) => { isDrawing.current = true; scratchAt(e.clientX, e.clientY); }}
          onMouseMove={(e) => { if (isDrawing.current) scratchAt(e.clientX, e.clientY); }}
          onMouseUp={() => { isDrawing.current = false; }}
          onMouseLeave={() => { isDrawing.current = false; }}
          onTouchStart={(e) => { isDrawing.current = true; if (e.touches[0]) scratchAt(e.touches[0].clientX, e.touches[0].clientY); }}
          onTouchMove={(e) => { if (isDrawing.current && e.touches[0]) scratchAt(e.touches[0].clientX, e.touches[0].clientY); }}
          onTouchEnd={() => { isDrawing.current = false; }}
        />
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
            colors: ['#C5A059', '#E5BDA7', '#74583E'],
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
    <section className="relative w-full py-20 px-4 flex flex-col items-center text-center select-none">
      {/* Title in Sophisticated Calligraphy & Serif */}
      <h2 className="font-calligraphy text-5xl sm:text-6xl text-[#74583E] font-normal leading-tight">
        Reveal the day.
      </h2>
      <p className="font-serif-lux italic text-base sm:text-lg text-[#8C786A] mt-2">
        Scratch and reveal our special day
      </p>

      <p className="font-cinzel text-xs sm:text-sm tracking-[0.35em] text-[#74583E] uppercase font-bold mt-7 mb-9">
        T H U R S D A Y
      </p>

      {/* Triangular 3-card layout */}
      <div className="flex flex-col items-center gap-5">
        {/* Top row: 17 DECEMBER and 2026 YEAR */}
        <div className="flex items-center justify-center gap-5">
          <TriangleScratchCard
            id="day"
            topValue="17"
            bottomLabel="DECEMBER"
            isRevealed={revealed.day}
            onReveal={handleRevealCard}
          />
          <TriangleScratchCard
            id="year"
            topValue="2026"
            bottomLabel="YEAR"
            isRevealed={revealed.year}
            onReveal={handleRevealCard}
          />
        </div>

        {/* Bottom row: 11:30 AM - Crisp, High-Contrast & Clearly Readable */}
        <div className="flex items-center justify-center">
          <TriangleScratchCard
            id="time"
            topValue="11:30 AM"
            bottomLabel="TIMING"
            isRevealed={revealed.time}
            onReveal={handleRevealCard}
          />
        </div>
      </div>

      {(!revealed.day || !revealed.year || !revealed.time) && (
        <button
          onClick={handleRevealAll}
          className="mt-8 text-xs font-cinzel uppercase tracking-[0.2em] text-[#74583E] hover:text-[#382E2B] transition-colors py-1.5 px-4 rounded-full border border-[#C5A059]/40 hover:border-[#74583E] bg-[#FFF7EE]"
        >
          Tap to reveal all
        </button>
      )}
    </section>
  );
};
