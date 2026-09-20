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
      {/* Official STS Circular Badge Logo */}
      <div className={`relative shrink-0 ${selectedSize.box} flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.6)] border-2 border-cyan-400/60 bg-black`}>
        <img
          src="/logo.png"
          alt="SHAMIM TECH SOLUTION (STS) Official Logo"
          className="w-full h-full object-contain rounded-full hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/favicon.png';
          }}
        />
      </div>

      {/* Brand Text Block (Optional) */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold tracking-wider text-white text-base sm:text-lg font-tech leading-none">
              SHAMIM <span className="text-cyan-400">TECH</span> SOLUTION
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-tech">
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
