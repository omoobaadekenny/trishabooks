export interface Book {
  id: string;
  title: string;
  subtitle: string;
  category: 'Memoir' | 'Poetry' | 'Empowerment' | 'Fiction & Horror';
  year: number;
  releaseDate: string;
  publisher: string;
  isbn10?: string;
  isbn13?: string;
  asin?: string;
  amazonUrl: string;
  storeName?: string;
  ctaLabel?: string;
  hachetteUrl?: string;
  coverUrl: string;
  pages?: number;
  formats: string[];
  pricing?: string;
  synopsis: string;
  keyThemes: string[];
  featured?: boolean;
  themeGradient: {
    bg: string;
    text: string;
    border: string;
  };
}

export const BOOKS_DATA: Book[] = [
  {
    id: 'crying-on-the-kitchen-floor',
    title: 'Crying on the Kitchen Floor',
    subtitle: 'A Memoir by Trisha Paytas',
    category: 'Memoir',
    year: 2026,
    releaseDate: 'November 10, 2026',
    publisher: 'Grand Central Publishing (Hachette Book Group)',
    isbn10: '1538781174',
    isbn13: '978-1538781173',
    amazonUrl: 'https://www.amazon.com/dp/1538781174',
    hachetteUrl: 'https://www.hachettebookgroup.com/titles/trisha-paytas/crying-on-the-kitchen-floor/9781538781173/',
    coverUrl: 'https://www.hachettebookgroup.com/wp-content/uploads/2026/04/9781538781173.jpg?w=700',
    pages: 368,
    formats: ['Hardcover ($30.00)', 'eBook ($14.99)', 'Unabridged Audio ($27.99)'],
    pricing: 'Hardcover $30.00 · eBook $14.99 · Audiobook $27.99',
    synopsis:
      'A raw, candid, and often uproarious memoir exploring the fine line between fame and infamy. Trisha Paytas pulls back the curtain on nearly two decades lived intensely in the public spotlight—from early viral stunts and Hollywood auditions to navigating mental health, finding true love with Moses, becoming a mother to Malibu Barbie, Elvis, and Aquaman, and finally uncovering peace and grounded truth within herself.',
    keyThemes: ['Fame vs. Infamy', 'Hollywood Realities', 'Internet Evolution', 'Motherhood & Maturation'],
    featured: true,
    themeGradient: {
      bg: '#ffbad1',
      text: '#551b38',
      border: '#e72f70',
    },
  },
  {
    id: '101-poems-about-my-ex-boyfriend',
    title: '101 Poems About My Ex-Boyfriend',
    subtitle: 'A Poetic Journey Through Heartbreak & Healing',
    category: 'Poetry',
    year: 2019,
    releaseDate: 'May 21, 2019',
    publisher: 'Independently Published',
    isbn10: '1098502981',
    isbn13: '978-1098502980',
    amazonUrl:
      'https://www.amazon.com/101-Poems-About-My-Ex-Boyfriend/dp/1098502981/ref=pd_sbs_d_sccl_1_2/141-4159623-3140343?pd_rd_w=CKeNH&content-id=amzn1.sym.0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_p=0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_r=8PQXMBR70NBMGYDSYQCG&pd_rd_wg=h6CHq&pd_rd_r=b0434cf2-333a-4c07-9016-a5730c78421d&pd_rd_i=1098502981&psc=1',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/P/1098502981.01.LZZZZZZZ.jpg',
    pages: 122,
    formats: ['Paperback', 'Kindle Edition'],
    pricing: 'Paperback $12.99 · Kindle $4.99',
    synopsis:
      'A deeply intimate, unflinching poetry collection documenting the visceral grief, obsessive rumination, and bittersweet emancipation following a painful romantic collapse. Written during some of Trisha’s most turbulent emotional crossroads, each piece cuts straight to raw vulnerability without pretense.',
    keyThemes: ['Heartbreak', 'Catharsis', 'Obsession & Healing', 'Feminine Vulnerability'],
    themeGradient: {
      bg: '#ffd7e4',
      text: '#301522',
      border: '#ff5b91',
    },
  },
  {
    id: 'the-history-of-my-insanity',
    title: 'The History of My Insanity',
    subtitle: 'Autobiographical Reflections on Los Angeles & Survival',
    category: 'Memoir',
    year: 2013,
    releaseDate: 'April 2013',
    publisher: 'CreateSpace Publishing',
    isbn10: '1482660067',
    isbn13: '978-1482660067',
    amazonUrl: 'https://www.amazon.com/dp/1482660067',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/P/1482660067.01.LZZZZZZZ.jpg',
    pages: 148,
    formats: ['Paperback', 'Kindle Edition'],
    pricing: 'Paperback $11.99 · Kindle $3.99',
    synopsis:
      'Trisha’s breakthrough autobiographical work detailing the shocking, unvarnished reality of her early twenties in Southern California. She dissects the intoxicating illusions of celebrity culture, escorting, stripping, and the intense psychological toll of trying to make a name in a city that consumes dreamers.',
    keyThemes: ['Hollywood Underbelly', 'Survival', 'Mental Health Realities', 'Early Identity'],
    themeGradient: {
      bg: '#fce4ec',
      text: '#4a1525',
      border: '#e72f70',
    },
  },
  {
    id: 'the-stripper-diaries',
    title: 'The Stripper Diaries',
    subtitle: 'Confessions from the Dressing Rooms of LA',
    category: 'Memoir',
    year: 2013,
    releaseDate: 'October 15, 2013',
    publisher: 'CreateSpace Independent Publishing',
    isbn10: '1490428801',
    isbn13: '978-1490428802',
    amazonUrl: 'https://www.amazon.com/dp/1490428801',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/P/1490428801.01.LZZZZZZZ.jpg',
    pages: 134,
    formats: ['Paperback', 'Kindle Edition'],
    pricing: 'Paperback $10.99 · Kindle $2.99',
    synopsis:
      'Drawn directly from real personal journal entries kept while working as a high-end dancer in Hollywood and Downtown Los Angeles clubs. Unsparingly honest, funny, heartbreaking, and humanizing, the book demystifies the nightlife industry from the inside out.',
    keyThemes: ['Nightlife Chronicles', 'Sex Industry Realities', 'Resilience', 'Candid Journals'],
    themeGradient: {
      bg: '#ffcdd2',
      text: '#3b1218',
      border: '#d81b60',
    },
  },
  {
    id: 'curvy-and-loving-it',
    title: 'Curvy and Loving It',
    subtitle: 'Embracing Your Body in a World of Unrealistic Standards',
    category: 'Empowerment',
    year: 2014,
    releaseDate: 'March 2014',
    publisher: 'CreateSpace Independent Publishing',
    isbn10: '1497522803',
    isbn13: '978-1497522800',
    amazonUrl: 'https://www.amazon.com/dp/1497522803',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/P/1497522803.01.LZZZZZZZ.jpg',
    pages: 110,
    formats: ['Paperback', 'Kindle Edition'],
    pricing: 'Paperback $9.99 · Kindle $2.99',
    synopsis:
      'A pioneering body-positivity manifesto published ahead of its time. Trisha unpacks decades of battling Hollywood sample-size shaming, dieting myths, and societal judgment, delivering an upbeat, unapologetic rallying cry for women to reclaim confidence and own their curves proudly.',
    keyThemes: ['Body Positivity', 'Confidence & Glamour', 'Overcoming Dysmorphia', 'Self-Love'],
    themeGradient: {
      bg: '#ffe0b2',
      text: '#4e2600',
      border: '#fb8c00',
    },
  },
  {
    id: 'tease',
    title: 'Tease',
    subtitle: 'Persona, Performance, and the Art of Allure',
    category: 'Empowerment',
    year: 2014,
    releaseDate: 'January 2014',
    publisher: 'CreateSpace Publishing',
    isbn10: '149439152X',
    isbn13: '978-1494391522',
    amazonUrl: 'https://www.amazon.com/dp/149439152X',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/P/149439152X.01.LZZZZZZZ.jpg',
    pages: 98,
    formats: ['Paperback', 'Kindle Edition'],
    pricing: 'Paperback $8.99 · Kindle $2.99',
    synopsis:
      'A stylized, playful exploration of glamour, feminine magnetism, and playing with public perception. Trisha examines how she developed her larger-than-life media persona and navigated male gazes and camera lenses while remaining in command of her own narrative.',
    keyThemes: ['Performance Art', 'Feminine Persona', 'Media Manipulation', 'Style & Allure'],
    themeGradient: {
      bg: '#f8bbd0',
      text: '#491024',
      border: '#ec407a',
    },
  },
  {
    id: 'trishas-31-nights-of-fright',
    title: "Trisha's 31 Nights of Fright",
    subtitle: 'Spooky Tales & Macabre Fiction for Autumn Nights',
    category: 'Fiction & Horror',
    year: 2014,
    releaseDate: 'September 2014',
    publisher: 'CreateSpace Publishing (co-authored with Jeff Rendell)',
    isbn10: '1500813974',
    isbn13: '978-1500813970',
    amazonUrl: 'https://www.amazon.com/dp/1500813974',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/P/1500813974.01.LZZZZZZZ.jpg',
    pages: 162,
    formats: ['Paperback'],
    pricing: 'Paperback $12.50',
    synopsis:
      'A campy, atmospheric, and delightfully chilling horror anthology co-authored with Jeff Rendell. Thirty-one eerie tales designed to be devoured every evening of October, showcasing Trisha’s lifelong love for classic slasher cinema, urban legends, and Halloween suspense.',
    keyThemes: ['Halloween Horror', 'Camp & Pulp Thrills', 'Ghost Stories', 'Short Fiction'],
    themeGradient: {
      bg: '#d1c4e9',
      text: '#281446',
      border: '#7e57c2',
    },
  },
  {
    id: 'how-to-get-internet-famous',
    title: 'How To Get Internet Famous',
    subtitle: 'Lessons from a First-Generation Digital Pioneer',
    category: 'Empowerment',
    year: 2015,
    releaseDate: '2015',
    publisher: 'Independent Digital Publishing',
    asin: undefined,
    amazonUrl: 'https://fable.co/book/how-to-get-internet-famous-by-trisha-paytas-k0nXdBKjpc',
    storeName: 'Fable',
    ctaLabel: 'Read on Fable',
    coverUrl: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1434915400i/25243715.jpg',
    pages: 104,
    formats: ['Digital Edition on Fable'],
    pricing: 'Available via Fable Book Club',
    synopsis:
      'Written after nearly a decade of dominating YouTube trends, this insider guide details how to carve an indelible presence on the internet. Trisha shares practical truths about audience building, navigating haters, handling virality, brand reinvention, and outlasting fleeting digital fads.',
    keyThemes: ['Creator Economy', 'Virality & Algorithms', 'Audience Building', 'Resilience Online'],
    themeGradient: {
      bg: '#ffecb3',
      text: '#432900',
      border: '#ffb300',
    },
  },
];

export const TOUR_APPEARANCES = [
  {
    id: 'nj-american-dream',
    date: 'Nov 10, 2026',
    time: '7:00 PM EDT',
    venue: 'American Dream Mall',
    location: 'Court A, American Dream · East Rutherford, New Jersey',
    details: 'Launch Day Book Signing & Discussion',
    link: 'https://www.hachettebookgroup.com/contributor/trisha-paytas/',
  },
  {
    id: 'nyc-strand',
    date: 'Nov 11, 2026',
    time: '7:00 PM EDT',
    venue: 'The Strand Bookstore',
    location: '828 Broadway, 6th Floor · New York, New York',
    details: 'In-Conversation & Live Audience Q&A',
    link: 'https://www.hachettebookgroup.com/contributor/trisha-paytas/',
  },
  {
    id: 'somerville-crystal-ballroom',
    date: 'Nov 12, 2026',
    time: '7:30 PM EDT',
    venue: 'Brookline Booksmith at Crystal Ballroom',
    location: '55 Davis Square · Somerville, Massachusetts',
    details: 'Evening Memoir Reading & Book Signing',
    link: 'https://www.hachettebookgroup.com/contributor/trisha-paytas/',
  },
  {
    id: 'naperville-andersons',
    date: 'Nov 13, 2026',
    time: '7:00 PM CDT',
    venue: "Anderson's Bookshop at Pfeiffer Hall",
    location: 'North Central College · Naperville, Illinois',
    details: 'Midwest Exclusive Author Evening & Book Signing',
    link: 'https://www.hachettebookgroup.com/contributor/trisha-paytas/',
  },
  {
    id: 'bloomington-moa',
    date: 'Nov 14, 2026',
    time: '11:00 AM CDT',
    venue: 'Mall of America',
    location: 'Huntington Bank Rotunda · Bloomington, Minnesota',
    details: 'Midday Public Appearance & Book Signing',
    link: 'https://www.hachettebookgroup.com/contributor/trisha-paytas/',
  },
  {
    id: 'la-barnes-noble-grove',
    date: 'Nov 21, 2026',
    time: '12:00 PM PDT',
    venue: 'Barnes & Noble at The Grove',
    location: '189 The Grove Drive · Los Angeles, California',
    details: 'Hometown Celebration & Special VIP Book Signing',
    link: 'https://www.hachettebookgroup.com/contributor/trisha-paytas/',
  },
];
