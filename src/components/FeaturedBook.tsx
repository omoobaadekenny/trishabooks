import React from 'react';
import { ArrowUpRight, BookOpen, Check } from 'lucide-react';

interface FeaturedBookProps {
  onOpenDetails: (bookId: string) => void;
}

export const FeaturedBook: React.FC<FeaturedBookProps> = ({ onOpenDetails }) => {
  return (
    <section id="featured" className="py-10 md:py-14 bg-[#fffdf9] border-b border-[rgba(48,21,34,0.1)]">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-14 items-center">
          {/* Left Column: Interactive Book Stage */}
          <div className="relative bg-[#ffbad1] rounded-t-[160px] rounded-b-[18px] p-6 sm:p-10 flex items-center justify-center min-h-[420px] sm:min-h-[480px] overflow-hidden group shadow-sm border border-[rgba(105,42,61,0.12)]">
            {/* Concentric Subtle Arcs */}
            <div
              className="absolute w-[320px] h-[320px] border border-[rgba(105,42,61,0.18)] rounded-full pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute w-[420px] h-[420px] border border-[rgba(105,42,61,0.15)] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            {/* Book Cover with 3D Float */}
            <div className="relative z-10 w-[min(100%,290px)] transition-transform duration-500 transform group-hover:rotate-0 group-hover:-translate-y-2 -rotate-3 cursor-pointer"
                 onClick={() => onOpenDetails('crying-on-the-kitchen-floor')}>
              <img
                src="https://www.hachettebookgroup.com/wp-content/uploads/2026/04/9781538781173.jpg?w=700"
                alt="Crying on the Kitchen Floor: A Memoir book cover by Trisha Paytas"
                className="w-full h-auto rounded-md shadow-[18px_22px_40px_rgba(85,27,56,0.28)]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-1 text-[0.72rem] font-bold text-[#551b38] bg-white/70 px-3 py-1 rounded-full backdrop-blur-xs">
                  <BookOpen className="w-3.5 h-3.5" /> Click to view synopsis &amp; excerpts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Copy */}
          <div>
            <div className="text-[0.72rem] uppercase font-bold tracking-[0.18em] text-[#e72f70] mb-2">
              The featured book · Coming November 10, 2026
            </div>

            <h2 className="font-serif text-[clamp(2.4rem,4.4vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[#301522] mb-2 text-balance">
              <em className="text-[#e72f70] not-italic italic font-normal">Crying on the</em><br />
              Kitchen Floor
            </h2>

            <div className="font-serif italic text-[1.12rem] text-[#806b73] mb-4">
              A Memoir by Trisha Paytas
            </div>

            <p className="text-[#806b73] text-[0.95rem] leading-relaxed max-w-[580px] mb-4">
              A raw, candid, and often uproarious memoir about the complicated line between fame and infamy.
              Trisha looks back on her search for identity, her life in Hollywood, the highs and lows of internet
              fame, and the journey toward finding peace within herself.
            </p>

            {/* Refined Divider Padding: scaled down divider vertical padding */}
            <div className="flex flex-wrap items-center gap-0 border-y border-[rgba(48,21,34,0.14)] my-4 py-2.5">
              <div className="pr-5 border-r border-[rgba(48,21,34,0.14)]">
                <small className="block text-[#806b73] text-[0.66rem] uppercase tracking-[0.14em] font-semibold">
                  Publisher
                </small>
                <strong className="text-[0.85rem] text-[#301522]">Grand Central Publishing</strong>
              </div>

              <div className="px-5 border-r border-[rgba(48,21,34,0.14)]">
                <small className="block text-[#806b73] text-[0.66rem] uppercase tracking-[0.14em] font-semibold">
                  Format
                </small>
                <strong className="text-[0.85rem] text-[#301522]">Hardcover · Ebook · Audio</strong>
              </div>

              <div className="pl-5">
                <small className="block text-[#806b73] text-[0.66rem] uppercase tracking-[0.14em] font-semibold">
                  Release Date
                </small>
                <strong className="text-[0.85rem] text-[#301522]">Nov 10, 2026</strong>
              </div>
            </div>

            <p className="text-[0.84rem] text-[#806b73] mb-5">
              <strong className="text-[#301522]">Available formats:</strong> Hardcover $30.00 · eBook $14.99 · Audiobook $27.99.
              Prices are publisher-listed US prices.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <a
                href="https://www.amazon.com/dp/1538781174"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#301522] text-[#fffaf6] text-[0.82rem] font-bold tracking-wide hover:bg-[#551b38] transition-all hover:-translate-y-0.5 shadow-sm"
              >
                Pre-order on Amazon <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.hachettebookgroup.com/titles/trisha-paytas/crying-on-the-kitchen-floor/9781538781173/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#301522] text-[#301522] text-[0.82rem] font-bold hover:bg-[#ffd7e4] transition-all"
              >
                Publisher Details <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenDetails('crying-on-the-kitchen-floor')}
                className="text-[0.82rem] font-bold text-[#e72f70] hover:text-[#551b38] underline underline-offset-4 px-2"
              >
                Read synopsis &amp; themes
              </button>
            </div>

            <div className="flex items-center gap-3 text-[0.72rem] text-[#806b73]">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#173f2b]" /> ISBN-13: 978-1538781173
              </span>
              <span>·</span>
              <span>368 pages</span>
              <span>·</span>
              <span>Grand Central Publishing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
