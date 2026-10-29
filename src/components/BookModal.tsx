import React, { useEffect } from 'react';
import { ArrowUpRight, BookOpen, Check, Hash, Sparkles, X } from 'lucide-react';
import { Book } from '../data/books';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#fffdf9] rounded-2xl max-w-[780px] w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[rgba(48,21,34,0.18)] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#806b73] hover:text-[#301522] hover:bg-[#ffd7e4] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-6 sm:gap-8 items-start">
          {/* Cover Column */}
          <div className="flex flex-col items-center">
            <div
              className="w-full rounded-xl p-4 flex items-center justify-center min-h-[300px]"
              style={{ backgroundColor: book.themeGradient.bg }}
            >
              <img
                src={book.coverUrl}
                alt={`Cover of ${book.title}`}
                className="max-h-[280px] w-auto object-contain rounded shadow-lg"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full mt-4 flex flex-col gap-2">
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#301522] text-[#fffaf6] text-xs font-bold tracking-wide hover:bg-[#551b38] transition-all"
              >
                {book.ctaLabel || (book.featured ? 'Pre-order on Amazon' : 'Order on Amazon')} <ArrowUpRight className="w-4 h-4" />
              </a>

              {book.hachetteUrl && (
                <a
                  href={book.hachetteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[rgba(48,21,34,0.2)] text-[#301522] text-xs font-bold hover:bg-[#ffd7e4] transition-all"
                >
                  Publisher Details <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div>
            <div className="flex items-center gap-2 text-[0.72rem] text-[#806b73] font-semibold mb-2">
              <span className="text-[#e72f70] uppercase tracking-wider">{book.category}</span>
              <span>·</span>
              <span>Released {book.releaseDate}</span>
            </div>

            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-semibold text-[#301522] leading-tight mb-1">
              {book.title}
            </h3>

            <p className="font-serif italic text-sm text-[#806b73] mb-4">
              {book.subtitle}
            </p>

            {/* Synopsis */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#301522] mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#e72f70]" /> Synopsis
              </h4>
              <p className="text-sm text-[#806b73] leading-relaxed">
                {book.synopsis}
              </p>
            </div>

            {/* Themes */}
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#301522] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#e72f70]" /> Core Themes
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {book.keyThemes.map((theme, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded bg-[#ffd7e4]/60 text-[#551b38] font-medium"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="p-3.5 rounded-xl bg-[#fff6ed] border border-[rgba(48,21,34,0.08)] grid grid-cols-2 gap-3 text-xs text-[#806b73]">
              <div>
                <span className="block font-semibold text-[#301522]">Publisher</span>
                <span>{book.publisher}</span>
              </div>
              <div>
                <span className="block font-semibold text-[#301522]">Available Formats</span>
                <span>{book.formats.join(', ')}</span>
              </div>
              {book.isbn13 && (
                <div>
                  <span className="block font-semibold text-[#301522]">ISBN-13</span>
                  <span className="font-mono text-[0.75rem]">{book.isbn13}</span>
                </div>
              )}
              {book.pages && (
                <div>
                  <span className="block font-semibold text-[#301522]">Length</span>
                  <span>{book.pages} pages</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
