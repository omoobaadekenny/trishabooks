import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  return (
    <section className="bg-[#ff5b91] text-[#301522] py-6 sm:py-8 md:py-9">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div className="max-w-[760px]">
            <div className="text-[0.72rem] uppercase font-bold tracking-[0.18em] text-[#551b38] mb-1.5">
              The Next Chapter · Crying on the Kitchen Floor
            </div>
            <h2 className="font-serif text-[clamp(2.3rem,5vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.05em] text-[#301522] mb-2 text-balance">
              Ready to read<br />
              <em className="text-[#551b38] not-italic italic font-normal">the story?</em>
            </h2>
            <p className="text-[#4a1525] text-[0.95rem] md:text-[1.02rem] max-w-[540px] leading-relaxed">
              Explore the memoir, find your preferred format, and discover the raw truth behind the internet’s
              many versions of Trisha.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 md:pt-0">
            <a
              href="https://www.amazon.com/dp/1538781174"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#301522] text-[#fffaf6] text-[0.82rem] font-bold tracking-wide hover:bg-[#551b38] transition-all hover:-translate-y-0.5 shadow-sm"
            >
              Pre-order on Amazon <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.amazon.com/stores/Trisha-Paytas/author/B00J1YT2F0?ref=ap_rdr&shoppingPortalEnabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4.5 py-3 rounded-full border border-[#301522] text-[#301522] text-[0.82rem] font-bold hover:bg-[#ffd7e4] transition-all"
            >
              Full Amazon Store <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
