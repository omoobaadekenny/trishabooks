import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MessageCircle, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isDesignerOpen, setIsDesignerOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kennydaviddesigns@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <>
      <footer className="bg-[#103321] text-[#fff5f1] py-8 border-t border-[#173f2b]">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            {/* Brand */}
            <a
              href="#home"
              className="text-base font-bold tracking-[0.08em] uppercase text-[#fff5f1] hover:text-[#ff9aab] transition-colors"
            >
              Trisha <span className="text-[#ff9aab]">Paytas</span>
            </a>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-5 text-[0.8rem] text-[#e4e9df]">
              <a href="#books" className="hover:text-white transition-colors">
                Books
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#events" className="hover:text-white transition-colors">
                Appearances
              </a>
              <a
                href="https://www.amazon.com/stores/Trisha-Paytas/author/B00J1YT2F0?ref=ap_rdr&shoppingPortalEnabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                Amazon Author Store <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://www.hachettebookgroup.com/titles/trisha-paytas/crying-on-the-kitchen-floor/9781538781197/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                Hachette Profile <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Footnote with cloned "Designed by: David" */}
          <div className="mt-6 pt-4 border-t border-[#173f2b] relative flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2.5 text-[0.72rem] text-[#c6b2b5]">
            <span className="text-center sm:text-left">
              © {new Date().getFullYear()} Trisha Paytas. All rights reserved.
            </span>

            {/* Cloned Designed by: David component */}
            <span className="text-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 text-[0.75rem]">
              Designed by:{' '}
              <strong
                role="button"
                tabIndex={0}
                onClick={() => setIsDesignerOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsDesignerOpen(true);
                  }
                }}
                title="Click to reach out to David via WhatsApp or Email"
                className="text-[#f7f8fc] hover:text-[#ff9aab] cursor-pointer underline underline-offset-2 transition-colors inline-flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[#ff9aab] rounded-xs"
              >
                David
              </strong>
            </span>

            <span className="text-center sm:text-right hidden sm:inline-block">
              Los Angeles, CA · Grand Central Publishing
            </span>
          </div>
        </div>
      </footer>

      {/* Designer Contact Modal cloned from author-andy-books.vercel.app */}
      {isDesignerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="designer-modal-title"
          onClick={() => setIsDesignerOpen(false)}
        >
          <div
            className="relative w-full max-w-sm bg-[#0e2718] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-7 text-center text-[#f7f8fc]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsDesignerOpen(false)}
              aria-label="Close designer popup"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff5b91] hover:text-[#301522] flex items-center justify-center transition-colors text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Avatar */}
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-[#ff5b91] to-[#e72f70] flex items-center justify-center text-white font-serif text-2xl font-bold shadow-lg mb-3">
              D
            </div>

            <h3
              id="designer-modal-title"
              className="font-serif text-2xl font-bold uppercase tracking-wider text-white"
            >
              David
            </h3>
            <p className="text-[11px] text-[#ffb2ca] font-medium tracking-wide uppercase mt-0.5 mb-4">
              Website Designer &amp; Developer
            </p>
            <p className="text-xs text-[#d1dfd3] mb-4">
              Choose your preferred way to get in touch:
            </p>

            <div className="space-y-3 mb-5 text-left">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/2348118575678"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block font-semibold text-sm text-white group-hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </span>
                    <span className="block text-[11px] text-[#aab6d0]">
                      Click to message directly
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Open</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Email Section */}
              <div className="bg-white/5 border border-white/10 hover:border-[#ff5b91]/40 rounded-xl p-3.5 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#ff9aab]">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Address</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[10px] text-[#aab6d0] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-[#ff9aab]" />
                        <span className="text-[#ff9aab] font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href="mailto:kennydaviddesigns@gmail.com"
                    className="font-mono text-xs sm:text-sm text-white hover:text-[#ff9aab] font-bold break-all transition-colors"
                  >
                    kennydaviddesigns@gmail.com
                  </a>
                  <a
                    href="mailto:kennydaviddesigns@gmail.com"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ff5b91]/20 text-[#ffb2ca] hover:bg-[#ff5b91] hover:text-[#301522] text-xs font-semibold transition-colors shrink-0"
                  >
                    <span>Write</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDesignerOpen(false)}
              className="w-full py-2.5 px-4 rounded-full border border-white/20 text-xs font-semibold text-[#d1dfd3] hover:text-white hover:bg-white/10 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
