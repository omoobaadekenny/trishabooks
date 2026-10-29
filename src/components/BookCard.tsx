import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { Book } from '../data/books';

interface BookCardProps {
  book: Book;
  onOpenDetails: (bookId: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onOpenDetails }) => {
  const [imageError, setImageError] = useState(false);

  React.useEffect(() => {
    setImageError(false);
  }, [book.coverUrl]);

  return (
    <article className="group bg-[#fffdf9] p-5 rounded-xl border border-[rgba(48,21,34,0.14)] hover:border-[#ff5b91]/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between">
      <div>
        {/* Cover Stage */}
        <div
          className="relative h-[240px] rounded-lg mb-4 flex items-center justify-center overflow-hidden cursor-pointer p-4 transition-transform duration-300 group-hover:-translate-y-1"
          style={{ backgroundColor: book.themeGradient.bg }}
          onClick={() => onOpenDetails(book.id)}
          title={`Click to read details of ${book.title}`}
        >
          {/* Subtle concentric decorative ring */}
          <div
            className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full border border-black/5 pointer-events-none"
            aria-hidden="true"
          />

          {!imageError ? (
            <img
              src={book.coverUrl}
              alt={`Cover of ${book.title} by Trisha Paytas`}
              className="h-full max-w-[170px] object-contain shadow-[0_12px_24px_rgba(48,21,34,0.22)] rounded transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            /* Resilient Fallback Book Cover */
            <div
              className="w-[150px] h-[210px] rounded p-3 flex flex-col justify-between shadow-[0_10px_20px_rgba(48,21,34,0.18)] border text-left"
              style={{
                backgroundColor: book.themeGradient.bg,
                borderColor: book.themeGradient.border,
                color: book.themeGradient.text,
              }}
            >
              <div>
                <span className="text-[0.62rem] uppercase tracking-wider font-bold block opacity-75">
                  Trisha Paytas
                </span>
                <h4 className="font-serif font-bold text-sm leading-tight mt-1 line-clamp-3">
                  {book.title}
                </h4>
              </div>
              <div>
                <p className="text-[0.65rem] italic opacity-80 line-clamp-2">
                  {book.subtitle}
                </p>
                <div className="mt-2 pt-1 border-t border-current/20 flex items-center justify-between text-[0.62rem] font-bold">
                  <span>{book.year}</span>
                  <BookOpen className="w-3 h-3" />
                </div>
              </div>
            </div>
          )}

          {/* Featured or Year Badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 text-[0.68rem] font-bold px-2 py-0.5 rounded bg-white/90 text-[#301522] shadow-xs backdrop-blur-xs">
            {book.featured ? (
              <>
                <Sparkles className="w-3 h-3 text-[#e72f70]" />
                <span className="text-[#e72f70]">Forthcoming Memoir</span>
              </>
            ) : (
              <span>{book.year} · {book.category}</span>
            )}
          </div>
        </div>

        {/* Book Details */}
        <div className="mb-3">
          <div className="flex items-center gap-2 text-[0.72rem] text-[#806b73] mb-1 font-medium">
            <span>{book.category}</span>
            <span aria-hidden="true">·</span>
            <span>{book.releaseDate}</span>
          </div>

          <h3
            className="font-serif font-semibold text-[1.25rem] leading-[1.18] text-[#301522] mb-1 group-hover:text-[#e72f70] transition-colors cursor-pointer"
            onClick={() => onOpenDetails(book.id)}
          >
            {book.title}
          </h3>

          <p className="text-[#806b73] text-[0.82rem] leading-normal line-clamp-2 mb-2">
            {book.subtitle}
          </p>

          <p className="text-[#806b73] text-[0.78rem] line-clamp-2 leading-relaxed">
            {book.synopsis}
          </p>
        </div>
      </div>

      {/* Card Footer: Amazon link & Modal button */}
      <div className="pt-3 border-t border-[rgba(48,21,34,0.1)] flex items-center justify-between gap-2 text-[0.78rem]">
        <a
          href={book.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-[#301522] hover:text-[#e72f70] border-b border-[#e72f70] pb-0.5 transition-colors"
        >
          {book.ctaLabel || (book.featured ? 'Pre-order on Amazon' : 'Buy on Amazon')}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <button
          type="button"
          onClick={() => onOpenDetails(book.id)}
          className="text-[#806b73] hover:text-[#301522] font-semibold text-[0.75rem] inline-flex items-center gap-1 transition-colors"
        >
          Details
        </button>
      </div>
    </article>
  );
};
