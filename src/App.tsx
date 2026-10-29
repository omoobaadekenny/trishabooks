import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { FeaturedBook } from './components/FeaturedBook';
import { Bookshelf } from './components/Bookshelf';
import { AboutSection } from './components/AboutSection';
import { AppearancesSection } from './components/AppearancesSection';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import { BookModal } from './components/BookModal';
import { BackToTop } from './components/BackToTop';
import { BOOKS_DATA } from './data/books';

export default function App() {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const selectedBook = selectedBookId
    ? BOOKS_DATA.find((b) => b.id === selectedBookId) || null
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#fff6ed] text-[#301522] selection:bg-[#ffd7e4] selection:text-[#301522]">
      {/* Primary Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="grow">
        {/* Hero Section */}
        <Hero />

        {/* Text Marquee Ribbon */}
        <MarqueeBanner />

        {/* Featured Memoir Showcase */}
        <FeaturedBook onOpenDetails={(id) => setSelectedBookId(id)} />

        {/* Complete Bookshelf with all 8 titles & direct Amazon destinations */}
        <Bookshelf onOpenDetails={(id) => setSelectedBookId(id)} />

        {/* Official Hachette Author Biography */}
        <AboutSection />

        {/* November 2026 Book Tour & Appearances */}
        <AppearancesSection />

        {/* Closing Call to Action */}
        <ClosingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal / Quick View Drawer */}
      <BookModal book={selectedBook} onClose={() => setSelectedBookId(null)} />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
