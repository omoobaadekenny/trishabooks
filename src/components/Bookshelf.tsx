import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOOKS_DATA, Book } from '../data/books';
import { BookCard } from './BookCard';

interface BookshelfProps {
  onOpenDetails: (bookId: string) => void;
}

type FilterCategory = 'All' | 'Memoir' | 'Poetry' | 'Empowerment' | 'Fiction & Horror';

export const Bookshelf: React.FC<BookshelfProps> = ({ onOpenDetails }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filteredBooks = BOOKS_DATA.filter((book) => {
    if (activeFilter === 'All') return true;
    return book.category === activeFilter;
  });

  const categories: FilterCategory[] = ['All', 'Memoir', 'Poetry', 'Empowerment', 'Fiction & Horror'];

  return (
    <section id="books" className="py-8 md:py-10 bg-[#fff6ed] border-b border-[rgba(48,21,34,0.1)]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="max-w-[680px]">
            <div className="text-[0.72rem] uppercase font-bold tracking-[0.18em] text-[#e72f70] mb-2">
              The Bookshelf · Complete Author Catalog
            </div>
            <h2 className="font-serif text-[clamp(2.3rem,4.5vw,3.8rem)] font-medium leading-[1.06] tracking-[-0.045em] text-[#301522] mb-3">
              Stories worth<br />
              <em className="text-[#e72f70] not-italic italic font-normal">getting into.</em>
            </h2>
            <p className="text-[#806b73] text-[0.95rem] leading-relaxed">
              Explore Trisha’s full catalog of 8 published works—from her groundbreaking early Hollywood autobiographies
              and raw poetry collections to her upcoming major memoir.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.amazon.com/stores/Trisha-Paytas/author/B00J1YT2F0?ref=ap_rdr&shoppingPortalEnabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#301522] text-[#301522] text-[0.82rem] font-bold hover:bg-[#ffd7e4] transition-all"
            >
              Browse Trisha’s Amazon Store <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filters (interactive segmented tabs with clean styling) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-[rgba(48,21,34,0.1)]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-[0.78rem] font-bold tracking-wide transition-all ${
                activeFilter === cat
                  ? 'bg-[#301522] text-[#fffaf6] shadow-xs'
                  : 'bg-[#fffdf9] text-[#806b73] border border-[rgba(48,21,34,0.12)] hover:border-[#301522] hover:text-[#301522]'
              }`}
            >
              {cat === 'All' ? `All Titles (${BOOKS_DATA.length})` : cat}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onOpenDetails={onOpenDetails} />
          ))}
        </div>
      </div>
    </section>
  );
};
