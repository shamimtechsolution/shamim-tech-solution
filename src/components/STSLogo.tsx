import React from 'react';

interface STSLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export const STSLogo: React.FC<STSLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  theme = 'light',
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8 sm:w-10 sm:h-10', text: 'text-xs sm:text-sm' },
    md: { box: 'w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14', text: 'text-xs sm:text-base' },
    lg: { box: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24', text: 'text-base sm:text-lg' },
    xl: { box: 'w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36', text: 'text-lg sm:text-xl' },
    custom: { box: '', text: '' }
  };

  const selectedSize = sizeMap[size];
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 min-w-0 ${className}`}>
      {/* Official STS Circular Badge Logo */}
      <div className={`relative shrink-0 ${selectedSize.box} flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.4)] border-2 border-cyan-500/60 bg-white`}>
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
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
            <span className={`font-extrabold tracking-wide ${isDark ? 'text-white' : 'text-slate-900'} text-xs xs:text-sm sm:text-base md:text-lg font-tech leading-none truncate max-w-[125px] sm:max-w-none`}>
              SHAMIM <span className={isDark ? "text-cyan-300" : "text-cyan-600"}>TECH</span> SOLUTION
            </span>
            <span className={`text-[8px] sm:text-[10px] uppercase font-bold tracking-widest px-1 py-0.5 rounded shrink-0 ${
              isDark 
                ? 'bg-cyan-500/20 border border-cyan-400/60 text-cyan-200' 
                : 'bg-sky-100 border border-sky-300 text-cyan-800'
            } font-tech`}>
              STS
            </span>
          </div>
          <span className={`text-[10px] sm:text-[11px] tracking-wider ${isDark ? 'text-cyan-300' : 'text-cyan-700'} font-semibold font-tech mt-0.5 hidden md:flex items-center gap-1 truncate`}>
            <span>CCTV SALES & SERVICE, Technician & Electrician</span>
          </span>
        </div>
      )}
    </div>
  );
};
