import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    'FAME',
    'REINVENTION',
    'IDENTITY',
    'FINDING PEACE',
    'OVER 20M DEVOTED FOLLOWERS',
    'INTERNET PIONEER',
    'MOTHERHOOD',
    'CATHARSIS',
    'HOLLYWOOD REALITIES',
    '18+ YEARS ONLINE',
  ];

  return (
    <div
      className="bg-[#173f2b] text-[#fff5f1] py-3.5 overflow-hidden whitespace-nowrap font-serif italic text-[1.05rem] tracking-[0.04em] border-y border-[#103321]"
      aria-label="Core Themes Marquee Banner"
    >
      <div className="animate-marquee flex items-center">
        {/* Double list for infinite loop */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <span key={idx} className="flex items-center">
            <span
              className={
                item === 'FAME' || item === 'FINDING PEACE' || item === 'INTERNET PIONEER'
                  ? 'text-[#ff9aab] font-medium px-4'
                  : 'text-[#fff5f1] px-4'
              }
            >
              {item}
            </span>
            <span className="text-[#ff9aab]/60 text-sm" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
