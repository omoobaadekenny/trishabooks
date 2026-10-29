import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#fff6ed]/95 backdrop-blur-md border-b border-[rgba(48,21,34,0.12)]">
      <div className="max-w-[1220px] mx-auto px-6 h-[68px] flex items-center justify-between gap-8">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#home"
          className="text-base font-bold tracking-[0.08em] uppercase text-[#301522] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          aria-label="Trisha Paytas Homepage"
        >
          Trisha <span className="text-[#e72f70]">Paytas</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[0.84rem] font-semibold text-[#806b73]">
          <a
            href="#books"
            className="hover:text-[#e72f70] transition-colors whitespace-nowrap shrink-0"
          >
            Books &amp; Catalog
          </a>
          <a
            href="#about"
            className="hover:text-[#e72f70] transition-colors whitespace-nowrap shrink-0"
          >
            About Trisha
          </a>
          <a
            href="#events"
            className="hover:text-[#e72f70] transition-colors whitespace-nowrap shrink-0"
          >
            Appearances
          </a>
          <a
            href="https://www.amazon.com/stores/Trisha-Paytas/author/B00J1YT2F0?ref=ap_rdr&shoppingPortalEnabled=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e72f70] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            Amazon Store <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#featured"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase px-4 py-2.5 rounded-full bg-[#301522] text-[#fffaf6] hover:bg-[#551b38] transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Discover the memoir <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#301522] rounded-lg border border-[rgba(48,21,34,0.18)]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[rgba(48,21,34,0.12)] bg-[#fff6ed] px-6 py-4 flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#featured"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-[#e72f70] text-sm py-1 flex items-center justify-between"
          >
            Featured Memoir <span>↗</span>
          </a>
          <a
            href="#books"
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-[#301522] text-sm py-1"
          >
            Books &amp; Catalog
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-[#301522] text-sm py-1"
          >
            About Trisha
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="font-semibold text-[#301522] text-sm py-1"
          >
            Book Tour &amp; Appearances
          </a>
          <a
            href="https://www.amazon.com/stores/Trisha-Paytas/author/B00J1YT2F0?ref=ap_rdr&shoppingPortalEnabled=true"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#806b73] text-sm py-1 flex items-center justify-between"
          >
            Amazon Author Store <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
