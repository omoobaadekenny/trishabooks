import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed right-6 bottom-6 w-12 h-12 rounded-full bg-[#ff5b91] text-[#fffaf6] flex items-center justify-center font-bold text-lg shadow-2xl z-40 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-3'
      } hover:bg-[#e72f70] hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#e72f70] focus:ring-offset-2`}
    >
      <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      
      {/* Tooltip on hover */}
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#301522] text-[#fffaf6] text-xs font-semibold tracking-wide whitespace-nowrap shadow-xl border border-white/15 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex items-center gap-1"
      >
        Back to top
        <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#301522] border-t border-r border-white/15 rotate-45" />
      </span>
    </button>
  );
};
