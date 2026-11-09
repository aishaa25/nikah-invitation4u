import React from 'react';

export const FloralWatercolorAccents: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Background ambient royal linen texture and soft butter creme sheen */}
      <div className="absolute inset-0 luxury-royal-bg opacity-95" />
      <div className="absolute inset-0 filigree-watermark opacity-75" />

      {/* Top Arched Filigree Lace Header Motif */}
      <div className="absolute top-0 left-0 right-0 h-44 flex justify-center opacity-60 pointer-events-none">
        <svg viewBox="0 0 400 120" className="w-full max-w-md h-full text-[#C5A059]/35 fill-none stroke-current" strokeWidth="1">
          <path d="M 30,0 Q 200,90 370,0" />
          <path d="M 40,0 Q 200,80 360,0" strokeDasharray="3,3" />
          <path d="M 60,8 Q 80,24 100,10 Q 120,26 140,12 Q 160,28 180,14 Q 200,30 220,14 Q 240,28 260,12 Q 280,26 300,10 Q 320,24 340,8" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Top-Right Corner: Muted Rustic Warm & Subtle Sage Botanical Spray */}
      <div className="absolute -top-3 -right-3 w-56 h-64 pointer-events-none z-10">
        <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-sm">
          <defs>
            {/* Rustic Warm / Butter Creme Gradients */}
            <radialGradient id="rusticGrad1" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFBF5" />
              <stop offset="50%" stopColor="#F5E3D8" />
              <stop offset="85%" stopColor="#E5BDA7" />
              <stop offset="100%" stopColor="#D4A790" />
            </radialGradient>
            <radialGradient id="rusticGrad2" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFBF7" />
              <stop offset="60%" stopColor="#EBD3C4" />
              <stop offset="100%" stopColor="#D9B7A3" />
            </radialGradient>
            {/* Subtle Sage Leaf Gradient */}
            <linearGradient id="sageLeafGradNew" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C4D1BF" />
              <stop offset="50%" stopColor="#A9BBA2" />
              <stop offset="100%" stopColor="#8E9F88" />
            </linearGradient>
            {/* Ink Gild Accent */}
            <radialGradient id="inkGildBud" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#DFBE82" />
              <stop offset="100%" stopColor="#74583E" />
            </radialGradient>
          </defs>

          {/* Sage Leaves */}
          <path d="M 120,40 C 90,20 60,50 80,80 C 100,100 130,70 120,40 Z" fill="url(#sageLeafGradNew)" opacity="0.65" />
          <path d="M 160,80 C 130,60 110,95 130,120 C 150,140 180,105 160,80 Z" fill="url(#sageLeafGradNew)" opacity="0.55" />
          <path d="M 85,20 C 65,5 40,30 55,50 C 70,65 95,40 85,20 Z" fill="url(#sageLeafGradNew)" opacity="0.5" />

          {/* Warm Rustic Peony Blossom */}
          <g transform="translate(130, 45)">
            <path d="M 0,-45 C -25,-45 -45,-25 -45,0 C -45,25 -25,45 0,45 C 25,45 45,25 45,0 C 45,-25 25,-45 0,-45 Z" fill="url(#rusticGrad1)" opacity="0.85" />
            <path d="M -15,-35 C -35,-20 -35,15 -15,35 C 10,40 35,20 35,-10 C 35,-30 5,-40 -15,-35 Z" fill="url(#rusticGrad2)" opacity="0.9" />
            <circle cx="2" cy="0" r="10" fill="#E5BDA7" opacity="0.75" />
            <circle cx="2" cy="0" r="5" fill="#74583E" opacity="0.6" />
          </g>

          {/* Secondary Rosebud */}
          <g transform="translate(80, 85)">
            <circle cx="0" cy="0" r="20" fill="url(#rusticGrad2)" opacity="0.8" />
            <path d="M -8,-8 C -15,0 -8,12 0,12 C 8,12 14,4 10,-6 Z" fill="url(#rusticGrad1)" />
          </g>

          {/* Ink Gild Buds & Champagne Pearls */}
          <circle cx="65" cy="50" r="6" fill="url(#inkGildBud)" opacity="0.7" />
          <circle cx="95" cy="115" r="3" fill="#FFFBF5" stroke="#C5A059" strokeWidth="0.75" />
          <circle cx="110" cy="130" r="2.5" fill="#FFFBF5" stroke="#C5A059" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Bottom-Left Corner: Matching Rustic Warm & Sage Spray */}
      <div className="absolute -bottom-4 -left-4 w-60 h-72 pointer-events-none z-10">
        <svg viewBox="0 0 220 240" className="w-full h-full drop-shadow-sm">
          <path d="M 80,180 C 110,200 140,170 120,140 C 100,120 70,150 80,180 Z" fill="url(#sageLeafGradNew)" opacity="0.65" />
          <path d="M 40,140 C 70,160 90,125 70,100 C 50,80 20,115 40,140 Z" fill="url(#sageLeafGradNew)" opacity="0.55" />

          <g transform="translate(65, 175)">
            <path d="M 0,-45 C -25,-45 -45,-25 -45,0 C -45,25 -25,45 0,45 C 25,45 45,25 45,0 C 45,-25 25,-45 0,-45 Z" fill="url(#rusticGrad1)" opacity="0.85" />
            <path d="M 15,35 C 35,20 35,-15 15,-35 C -10,-40 -35,-20 -35,10 C -35,30 -5,40 15,35 Z" fill="url(#rusticGrad2)" opacity="0.9" />
            <circle cx="-2" cy="0" r="10" fill="#E5BDA7" opacity="0.75" />
            <circle cx="-2" cy="0" r="5" fill="#74583E" opacity="0.6" />
          </g>

          <g transform="translate(120, 135)">
            <circle cx="0" cy="0" r="20" fill="url(#rusticGrad2)" opacity="0.8" />
          </g>

          <circle cx="105" cy="105" r="3" fill="#FFFBF5" stroke="#C5A059" strokeWidth="0.75" />
          <circle cx="90" cy="90" r="2.5" fill="#FFFBF5" stroke="#C5A059" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Floating Center Soft Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#E5BDA7]/15 blur-3xl pointer-events-none" />
    </div>
  );
};
