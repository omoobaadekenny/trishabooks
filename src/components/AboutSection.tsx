import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden py-8 md:py-10 bg-[#173f2b] text-[#fff8ef]">
      {/* Decorative Radial Arch Ring */}
      <div
        className="absolute w-[460px] h-[460px] border border-[rgba(255,215,228,0.18)] rounded-full -right-24 -top-32 shadow-[0_0_0_38px_rgba(255,215,228,0.035),0_0_0_78px_rgba(255,215,228,0.025)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Column: Quote & Framing */}
          <div>
            <div className="text-[0.72rem] uppercase font-bold tracking-[0.18em] text-[#ff9fbd] mb-3">
              About the Author · Beyond the Headlines
            </div>
            <p className="font-serif text-[clamp(2.3rem,4.5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[#fff8ef] text-balance">
              “A life lived in public.{' '}
              <em className="text-[#ff7eaa] not-italic italic font-normal">A story still unfolding.</em>”
            </p>
            <div className="mt-6 flex flex-col items-start gap-2.5">
              <a
                href="https://www.hachettebookgroup.com/titles/trisha-paytas/crying-on-the-kitchen-floor/9781538781197/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffb2ca] hover:text-white transition-colors"
              >
                Official Hachette Author Profile <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.amazon.com/stores/Trisha-Paytas/author/B00J1YT2F0?ref=ap_rdr&shoppingPortalEnabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ffb2ca] hover:text-white transition-colors"
              >
                Visit Amazon Author Page <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Author Biography & Stats */}
          <div className="space-y-4">
            <p className="text-[0.95rem] text-[#e4e9df] leading-relaxed">
              Trisha Paytas is a media personality known for shaping the modern creator landscape as one of
              the internet’s first influencers. She posted her first video on YouTube in 2007, just 2 years after
              the website’s inception, and has since amassed a devoted following of over 20 million fans across
              platforms.
            </p>

            <p className="text-[0.95rem] text-[#e4e9df] leading-relaxed">
              She has guest starred in more than 50 television shows and films, including <em>Saturday Night Live</em>,{' '}
              <em>Celebrity Big Brother UK</em>, <em>Euphoria</em>, <em>Hacks</em>, and <em>America’s Got Talent</em>.
              She lives in Los Angeles with her husband Moses and their children Malibu Barbie, Elvis, and Aquaman.
            </p>

            <p className="text-[0.95rem] text-[#e4e9df] leading-relaxed">
              Her forthcoming memoir, <em>Crying on the Kitchen Floor</em>, turns the lens inward, reflecting on
              public reinvention, the high-stakes pursuit of Hollywood notoriety, motherhood, and the journey toward
              finding peace within herself.
            </p>

            {/* Stat Row with refined divider spacing */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 mt-4 border-t border-[rgba(255,248,239,0.22)]">
              <div>
                <strong className="block font-serif text-[1.9rem] font-semibold text-[#ffb2ca] leading-none mb-1">
                  2007
                </strong>
                <span className="text-[0.72rem] text-[#d1dfd3] leading-tight block">First YouTube Video</span>
              </div>

              <div>
                <strong className="block font-serif text-[1.9rem] font-semibold text-[#ffb2ca] leading-none mb-1">
                  20M+
                </strong>
                <span className="text-[0.72rem] text-[#d1dfd3] leading-tight block">Followers Worldwide</span>
              </div>

              <div>
                <strong className="block font-serif text-[1.9rem] font-semibold text-[#ffb2ca] leading-none mb-1">
                  50+
                </strong>
                <span className="text-[0.72rem] text-[#d1dfd3] leading-tight block">TV &amp; Film Credits</span>
              </div>

              <div>
                <strong className="block font-serif text-[1.9rem] font-semibold text-[#ffb2ca] leading-none mb-1">
                  8
                </strong>
                <span className="text-[0.72rem] text-[#d1dfd3] leading-tight block">Published Books</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
