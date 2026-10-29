import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Check, Clock, Copy, MapPin } from 'lucide-react';
import { TOUR_APPEARANCES } from '../data/books';

export const AppearancesSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (item: (typeof TOUR_APPEARANCES)[0]) => {
    const text = `Trisha Paytas Book Tour: ${item.date} at ${item.time} - ${item.venue}, ${item.location}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="events" className="py-8 md:py-10 bg-[#fffdf9] border-b border-[rgba(48,21,34,0.1)]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-[690px] mb-6">
          <div className="text-[0.72rem] uppercase font-bold tracking-[0.18em] text-[#e72f70] mb-2">
            Meet the Author · November 2026 Tour
          </div>
          <h2 className="font-serif text-[clamp(2.3rem,4.5vw,3.8rem)] font-medium leading-[1.06] tracking-[-0.045em] text-[#301522] mb-3">
            Memoir events &amp;<br />
            <em className="text-[#e72f70] not-italic italic font-normal">book appearances.</em>
          </h2>
          <p className="text-[#806b73] text-[0.95rem] leading-relaxed">
            Hachette Book Group lists the following November 2026 tour stops for <em>Crying on the Kitchen Floor</em>.
            Confirm details with the venue before travelling.
          </p>
        </div>

        {/* Events List with refined divider lines */}
        <div className="border-t border-[rgba(48,21,34,0.14)] divide-y divide-[rgba(48,21,34,0.1)]">
          {TOUR_APPEARANCES.map((event) => (
            <div
              key={event.id}
              className="py-4 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 group hover:bg-[#fff6ed]/40 px-2 rounded-lg transition-colors"
            >
              {/* Date & Time */}
              <div className="md:w-[170px] shrink-0">
                <span className="text-[0.82rem] font-bold text-[#e72f70] tracking-wide uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {event.date}
                </span>
                <span className="text-[0.74rem] text-[#806b73] flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" /> {event.time}
                </span>
              </div>

              {/* Venue & Location */}
              <div className="grow">
                <h3 className="font-serif text-[1.18rem] font-semibold text-[#301522] leading-tight group-hover:text-[#e72f70] transition-colors">
                  {event.venue}
                </h3>
                <p className="text-[0.82rem] text-[#806b73] flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[#806b73]" />
                  <span>{event.location}</span>
                  <span className="hidden sm:inline" aria-hidden="true">·</span>
                  <span className="hidden sm:inline text-[#301522] font-medium">{event.details}</span>
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                <button
                  type="button"
                  onClick={() => handleCopy(event)}
                  className="text-xs text-[#806b73] hover:text-[#301522] p-1.5 rounded border border-[rgba(48,21,34,0.12)] flex items-center gap-1 hover:bg-white transition-colors"
                  title="Copy event details"
                >
                  {copiedId === event.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Share
                    </>
                  )}
                </button>

                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.78rem] font-bold text-[#301522] hover:text-[#e72f70] border-b border-[#e72f70] pb-0.5 flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  Event details <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
