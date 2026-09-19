import React from 'react';

interface STSLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
}

export const STSLogo: React.FC<STSLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: { box: 'w-10 h-10', text: 'text-sm' },
    md: { box: 'w-14 h-14', text: 'text-base' },
    lg: { box: 'w-24 h-24', text: 'text-lg' },
    xl: { box: 'w-36 h-36', text: 'text-xl' },
    custom: { box: '', text: '' }
  };

  const selectedSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SVG Emblem Logo matching user's official badge */}
      <div className={`relative shrink-0 ${selectedSize.box} flex items-center justify-center`}>
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="stsBgGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0a1936" />
              <stop offset="70%" stopColor="#040a18" />
              <stop offset="100%" stopColor="#02050e" />
            </radialGradient>
            <linearGradient id="stsCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="stsBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="stsGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <filter id="stsGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Ring & Gear Teeth */}
          <circle cx="200" cy="200" r="190" fill="url(#stsBgGrad)" stroke="#06b6d4" strokeWidth="4" />
          <circle cx="200" cy="200" r="182" stroke="#0369a1" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
          
          {/* Cyan Glow Rim */}
          <circle cx="200" cy="200" r="172" stroke="url(#stsCyanGrad)" strokeWidth="3" opacity="0.9" />

          {/* Top Security Camera Dome & Bracket */}
          <g transform="translate(140, 28) scale(0.6)">
            {/* Camera mount */}
            <rect x="70" y="10" width="60" height="15" rx="4" fill="#06b6d4" />
            <path d="M100 25 L100 50" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" />
            {/* Camera body */}
            <ellipse cx="100" cy="80" rx="65" ry="35" fill="#0f172a" stroke="#22d3ee" strokeWidth="4" />
            <ellipse cx="100" cy="80" rx="35" ry="20" fill="#0369a1" stroke="#38bdf8" strokeWidth="3" />
            <circle cx="100" cy="80" r="12" fill="#020617" stroke="#22d3ee" strokeWidth="2" />
            <circle cx="96" cy="76" r="4" fill="#e0f2fe" />
            {/* Blue indicator LED */}
            <circle cx="135" cy="75" r="4" fill="#ef4444" filter="url(#stsGlow)" />
          </g>

          {/* Center Shield Graphic */}
          <path
            d="M200 95 L285 130 C285 240 200 295 200 295 C200 295 115 240 115 130 Z"
            fill="#08142c"
            stroke="url(#stsCyanGrad)"
            strokeWidth="5"
            filter="url(#stsGlow)"
          />
          <path
            d="M200 112 L268 142 C268 230 200 275 200 275 C200 275 132 230 132 142 Z"
            fill="none"
            stroke="#0284c7"
            strokeWidth="2"
            opacity="0.7"
          />

          {/* STS Acronym Ribbon / Pill */}
          <rect x="150" y="132" width="100" height="34" rx="17" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <text
            x="200"
            y="156"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="22"
            fontWeight="900"
            fontFamily="'Chakra Petch', sans-serif"
            letterSpacing="3"
          >
            STS
          </text>

          {/* SHAMIM Text */}
          <text
            x="200"
            y="205"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="38"
            fontWeight="900"
            fontFamily="'Chakra Petch', sans-serif"
            letterSpacing="2"
            style={{ textShadow: '0 0 10px rgba(6,182,212,0.8)' }}
          >
            SHAMIM
          </text>

          {/* TECH SOLUTION Subtitle */}
          <text
            x="200"
            y="232"
            textAnchor="middle"
            fill="#38bdf8"
            fontSize="18"
            fontWeight="800"
            fontFamily="'Chakra Petch', sans-serif"
            letterSpacing="4"
          >
            TECH SOLUTION
          </text>

          {/* Security Circuit / Wing Accents */}
          <path d="M145 248 L170 248 L185 258 L215 258 L230 248 L255 248" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
          <circle cx="145" cy="248" r="3" fill="#22d3ee" />
          <circle cx="255" cy="248" r="3" fill="#22d3ee" />

          {/* Bottom Banner with Slogan: "Your Safety Our Priority" */}
          <g transform="translate(0, 5)">
            <path
              d="M75 325 Q200 365 325 325 L335 350 Q200 395 65 350 Z"
              fill="#0369a1"
              stroke="#06b6d4"
              strokeWidth="2"
            />
            {/* Banner fold ends */}
            <polygon points="65,350 75,325 50,335" fill="#024e75" />
            <polygon points="335,350 325,325 350,335" fill="#024e75" />
            
            <text
              x="200"
              y="350"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="16"
              fontWeight="700"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontStyle="italic"
              letterSpacing="1"
            >
              Your Safety Our Priority
            </text>
          </g>

          {/* Top Decorative Arc Notches */}
          <circle cx="200" cy="19" r="4" fill="#06b6d4" />
          <circle cx="160" cy="24" r="3" fill="#0284c7" />
          <circle cx="240" cy="24" r="3" fill="#0284c7" />
        </svg>
      </div>

      {/* Brand Text Block (Optional) */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-wider text-white text-base sm:text-lg font-tech leading-none">
              SHAMIM <span className="text-cyan-400">TECH</span> SOLUTION
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
              STS
            </span>
          </div>
          <span className="text-[11px] tracking-wider text-cyan-400/90 font-semibold font-tech mt-0.5 flex items-center gap-1">
            <span>Technician & Electrician Services</span>
          </span>
        </div>
      )}
    </div>
  );
};
