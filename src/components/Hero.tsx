import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-10 md:pt-12 md:pb-14 bg-[#fff6ed]">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-14">
          {/* Left Column: Copy */}
          <div className="py-2">
            <div className="inline-block text-[0.72rem] uppercase font-bold tracking-[0.18em] text-[#e72f70] mb-3">
              Author · Creator · Storyteller
            </div>

            <h1 className="font-serif text-[clamp(3.2rem,6.8vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[#301522] mb-5 text-balance">
              You know<br />
              the internet{' '}
              <span className="text-[#e72f70] italic font-medium">version.</span>
            </h1>

            <p className="text-[clamp(1.02rem,1.4vw,1.18rem)] text-[#806b73] max-w-[500px] leading-relaxed mb-7">
              Now, meet the story behind it. A life lived in public, told in Trisha’s own words.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#featured"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#301522] text-[#fffaf6] text-[0.82rem] font-bold tracking-wide hover:bg-[#551b38] transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Explore the memoir <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#301522] text-[#301522] text-[0.82rem] font-bold tracking-wide hover:bg-[#ffd7e4] transition-all hover:-translate-y-0.5"
              >
                Meet Trisha
              </a>

              <a
                href="#books"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[0.82rem] font-bold text-[#e72f70] hover:text-[#551b38] transition-colors"
              >
                All 8 Books <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[0.75rem] text-[#806b73] tracking-[0.02em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e72f70]" />
              <span>A story about fame, reinvention, and finding your way back to yourself.</span>
            </div>
          </div>

          {/* Right Column: Hero Art */}
          <div className="relative max-w-[460px] mx-auto lg:mr-0 w-full pt-4 pr-4">
            {/* Pink Angled Architectural Arch */}
            <div
              className="absolute inset-0 right-[-10px] bottom-[-10px] bg-[#ff5b91] rounded-t-[180px] rounded-b-[18px] rotate-[2.5deg] -z-0"
              aria-hidden="true"
            />

            {/* Official Cover Image Container */}
            <div className="relative z-10 bg-[#fffdf9] p-3 rounded-t-[180px] rounded-b-[18px] shadow-[0_20px_50px_rgba(85,27,56,0.18)] border border-[rgba(48,21,34,0.08)]">
              <div className="overflow-hidden rounded-t-[170px] rounded-b-[12px] bg-[#ffd7e4] aspect-[4/5] flex items-center justify-center">
                <img
                  src="https://www.hachettebookgroup.com/wp-content/uploads/2026/04/9781538781173.jpg?w=700"
                  alt="Official cover of Crying on the Kitchen Floor: A Memoir by Trisha Paytas"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
              </div>

              {/* Caption Overlay Card */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-[#fffdf9] py-3 px-4 rounded-xl border border-[rgba(48,21,34,0.12)] shadow-[0_10px_30px_rgba(67,32,42,0.12)] max-w-[240px]">
                <strong className="block font-serif text-[1.05rem] font-semibold text-[#301522] leading-tight">
                  The story behind the headlines.
                </strong>
                <small className="text-[#806b73] text-[0.72rem] block mt-1">
                  Her memoir. Her words. Her story.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
