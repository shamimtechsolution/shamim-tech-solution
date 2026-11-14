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
    <div className={`inline-flex items-center gap-1.5 sm:gap-3 min-w-0 ${className}`}>
      {/* Official STS Circular Badge Logo (100% Transparent Background, Zero Square Box) */}
      <div className={`relative shrink-0 ${selectedSize.box} flex items-center justify-center rounded-full overflow-hidden bg-transparent`}>
        <img
          src="/logo.png"
          alt="SHAMIM TECH SOLUTION (STS) Official Logo"
          className="w-full h-full object-contain rounded-full bg-transparent"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/logo.png';
          }}
        />
      </div>

      {/* Brand Text Block (Optional) */}
      {showText && (
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
            <span className={`font-extrabold tracking-normal sm:tracking-wide ${isDark ? 'text-white' : 'text-slate-900'} text-[11px] xs:text-xs sm:text-base md:text-lg font-tech leading-none truncate max-w-full sm:max-w-none`}>
              SHAMIM <span className={isDark ? "text-[#22c55e]" : "text-[#038502]"}>TECH</span> SOLUTION
            </span>
          </div>
          <span className={`text-[10px] sm:text-[11px] tracking-wider ${isDark ? 'text-[#4ade80]' : 'text-[#038502]'} font-semibold font-tech mt-0.5 hidden md:flex items-center gap-1 truncate`}>
            <span>SECURITY SALES & SERVICE</span>
          </span>
        </div>
      )}
    </div>
  );
};
