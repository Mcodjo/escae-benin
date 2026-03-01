import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faExpand, 
  faTimes, 
  faChevronLeft, 
  faChevronRight,
  faDownload,
  faShareNodes,
  faCalendarDay, 
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';

// --- Types & Data ---

type CategoryId = 'tout' | 'soutenances' | 'evenements' | 'campus' | 'vie-sociale' | 'gala';

interface Category {
  id: CategoryId;
  label: string;
  count: number;
}

const categories: Category[] = [
  { id: 'tout', label: 'Tout', count: 156 },
  { id: 'soutenances', label: 'Soutenances', count: 42 },
  { id: 'evenements', label: 'Événements', count: 38 },
  { id: 'campus', label: 'Campus', count: 25 },
  { id: 'vie-sociale', label: 'Vie Sociale', count: 30 },
  { id: 'gala', label: 'Gala & Fêtes', count: 21 },
];

interface GalleryItem {
  id: number;
  category: CategoryId;
  badge: string; // The text shown on the card
  title: string;
  description?: string; // Optional description
  date?: string; // For lightbox
  tags?: string[]; // For lightbox
  image: string;
  heightClass: string; // To simulate the "Tall", "Medium", "Short" from HTML
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'soutenances',
    badge: 'Soutenances',
    title: 'Promotion 2023 - Master II',
    description: 'Cérémonie solennelle de remise des diplômes en présence du corps professoral.',
    date: '14 Octobre 2023',
    tags: ['Excellence Académique'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRMSyufAFzJ6O5Eka309TaJ_7_lyQxL_nhixaF7o8gHberwutREn6pzmkc0RC5ygJkJw6qWz4epVhY-MJ5Ll5wcg6nX6VMM7GXOc1v5ioXuxusuP46madTwN2Fepe2aqT-nnA8nzTfP-17Hp80pHTI_MSAeD6Z54WWa_UHbTflDUTQfbhDQfoIUWFMXRZsFXXogFJ2e2DCQdnkqdEadsl4ow27Jb2kXRR0LZCy_0n_FQ-MfLWpnrgnFcN0WvGkD7KZEnoNk-HuETt_',
    heightClass: 'h-[480px]'
  },
  {
    id: 2,
    category: 'evenements',
    badge: 'Événements',
    title: 'Conférence AFRIA 2024',
    date: '10 Janvier 2024',
    tags: ['Conférence', 'Tech'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs1csPUyG1rmEKteEDyjd-5IglLvcGRabcpRxf5h94HgMj6W0geqYor7C7HjKqdu1S7xYXaIUr-9fsOPjIIY4McrR_FUVE-ILKxypCxQMke_jy9t-bECZEfe5dX3uvF7GB12EfUUBWSzdg6bdGp6yYEZk-anhNTUg0UdTqRCEeBDsGU9WhxWxf7l-Ku7i-ox7YWqLVuTuShzSKEMA26znhYsiAL3SuOtOVU9O8Bi3JFLb_3YP2a3EIthIZ0GqFFu8DVZv67HehGEFT',
    heightClass: 'h-[320px]'
  },
  {
    id: 3,
    category: 'campus',
    badge: 'Campus',
    title: 'Vue du Nouveau Bâtiment',
    date: '02 Février 2024',
    tags: ['Infrastructure'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq2wW9AEzh-YPIS908cXW-asMrpUezBq1VkL4r2PsLmT65vibHQ6ezl284FupQPqg-xBey6NfI_2XXbdIM--qALcgK_SD6IWwfmfK9hqmPWFNuoM5iGq8nvKNaVQ46Mn8soIrlE8-s94BMvhlju77ckwm0VqpStIJ9T_r0NdC1MRzwJZLy9WIHRq7SoLUNV3g5hN4b1oXJooaNswvWshr6JPpNiBYBLhdMdu714m37jkuoZEUxg52e86sr6Hm7MhNXeSc0sRtbOd8h',
    heightClass: 'h-[240px]'
  },
  {
    id: 4,
    category: 'vie-sociale',
    badge: 'Vie Étudiante',
    title: 'Session Travail Collaboratif',
    date: '15 Mars 2024',
    tags: ['Bibliothèque', 'Études'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw-7Tp0WzmIyvFh8v8L_b71cMZBY_KahP3klwC6I3TIU8Fd7XSdoH5dCcZQQJ7h6Q-xmHD2d3mjuyziX-Al1ZZIr6nJ0j7GppG3q0z3_h8Hr63ttf8IiNKCCaWdJqbGDDjgcoNvp-oZ6K_6s-UBtTL_4becuORMw-0uuZMt3v1ZQnpY9HFYPivVS4lTA7d38OhwmRN6EKZPQ3jlSFfuI8yRwolwrYqbjM-XfO05sw3WlBq7swYAlHLIiJRr5yYj6W3wry2m-b40nwf',
    heightClass: 'h-[380px]'
  },
  {
    id: 5,
    category: 'vie-sociale',
    badge: 'Vie Sociale',
    title: 'Festival Culturel',
    description: 'Célébration des traditions et de la diversité au sein du campus.',
    date: '20 Mai 2024',
    tags: ['Culture', 'Danse'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApP6KBx8IE_brJIo5Sj9slNp77fFflgID3_IqNho3kOQQKM2Dff1RnZrwvDN8S43HlTw5OyoTneVT2bIIxQCLuKjodk61V0swYBQSGSbmUKXcbRQOAMi0IsK0tRtB5meRtwQ6Si-1UD8MtedmOaFypIoe3tYBp7Fe5gtRLckXJz3PZltmX6ZaayLKtV2bxUNH29SKzrGaIpk713cvdXDkC63FbHUXTbqZZ4d-H7bmquJZYTU4qMNvnrZVVlD0JAZPlAhJaBwG2Wm_o',
    heightClass: 'h-[420px]'
  },
  {
    id: 6,
    category: 'gala',
    badge: 'Gala & Fêtes',
    title: 'Soirée de Gala 2024',
    date: '24 Décembre 2023',
    tags: ['Fête', 'Élégance'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYSED9MmJojYzmsBFEkxwKZSD2WyxbVYWrCP2_HFwbdSaLXr5RyYTgVFEvo9nV3GlEwXEgWBj1_6t2ykl1o1tKElhmf-1UxpniHnZYeqTGtV3FsYKUUxWTSYlUkdNq6K5UTuAogN3cU3HgwvL3Wbq8ztynXA4UoyeRoJKjRhfiDd92b--LjlYCZLjSGnR3NAPxDpMJeBXLwycoKDo7p9Sf7wy-qtC0O2F-u7OEAGRjpjv3I_pn8ABikqFm4zJ-T2TwR6uGpZef1Pla',
    heightClass: 'h-[300px]'
  },
  {
    id: 7,
    category: 'campus',
    badge: 'Campus',
    title: 'Détente au Parc',
    date: '05 Avril 2024',
    tags: ['Extérieur', 'Détente'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDby-AcfX4bYgQsVtmkrWaMDBJ7DwNTutaWs4e7C5-sMtCAK-8kVVZSFInKRYIGgLmXmLLa_Kg3BjQzho_4Fgew-zGnkjqFhCnGKeQQwpQVK25XE2I8VYqMU8FQuFiUynsJfVToCEt5Ys-Fg1TZ35myOQ78LalApApRsKPCwpY49U3uZHmXbbZT4Cd4uxeKAxtNkK468GjQCSQlyH4yzE_xSkuxcOMARK8QFwRrOA9LzTXF68xoLx_wQ0q09s1bpNnJnmmsFbY0gg9Y',
    heightClass: 'h-[260px]'
  },
  {
    id: 8,
    category: 'evenements',
    badge: 'Événements',
    title: 'Séminaire Leadership',
    date: '12 Juin 2024',
    tags: ['Formation', 'Business'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9yoEqxkwWCF0WbpWz7cWHzshZO6ijbpCa8_D0GCNDSfI3ANlpfBP1w1bES2EKNSHKlJiK47x3egGk5N8PR95d7OlPjdspAoMNBK6SW21w9YqEiGoutX8WhCp600tVSB9DxWw3Uw3ZN1pXgTv9ipZCWWRKM-AW9c2RsKckzDP2Qgq4xs--SlNlXzucB7gD0TuehwlyZi5_HtmlbCncPY93NsErSmVQEGpzTbWgNPniO7dTW6KbB_JYhQrXS9DxZSzhBPXxYVf1O12h',
    heightClass: 'h-[340px]'
  }
];

export default function Galerie() {
  const [activeTab, setActiveTab] = useState<CategoryId>('tout');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'tout' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <div className="bg-[#FAFAF8] dark:bg-[#0f1823] min-h-screen font-body antialiased overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#001F5B] to-[#004AAD]">
        {/* Subtle Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-cover bg-center" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN7slrlCm3Q2e20Mk_7fK74HCY37Jm7KbCDHQoDU4T2Ta54Beac7wdXjlj96dDLgEhfqohjBLOxEAm6i6Dknv3g4UGpm6k2p5Fb7nSyhvn3Ude-IsfRK3UEWJ6uULLkggx1Ng56WtN-4a7XayR75WyIDNxDXJFIzanNzhkm0uDYi4QPJDzUrPsdRZb426lhzREqb01BotYBWbdoRo87ahXVf46J_LLmC4FXaOK1kAt1V0don1Oi9cZIZVffqa-jiLaSNWKD1itFGeh')` }}
        ></div>
        
        <div className="relative max-w-[1440px] mx-auto px-4 lg:px-10 pt-20 pb-32 flex flex-col items-center text-center z-10">
          <h1 className="text-white text-5xl md:text-7xl font-light mb-6 font-display">
            <span className="italic text-[#C5A059] mr-2">Galerie</span> Photos
          </h1>
          <p className="text-blue-100/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Plongez au cœur de l'excellence académique et de la vie étudiante vibrante à l'ESCAE Bénin.
          </p>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(146%)] h-[60px] md:h-[100px] fill-[#FAFAF8] dark:fill-[#0f1823]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-[1440px] mx-auto px-4 lg:px-10 -mt-8 relative z-20 pb-20">
        
        {/* Filter Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex items-center gap-3 p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200/60 dark:border-slate-700">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all group whitespace-nowrap ${
                    activeTab === cat.id 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] transition-colors ${
                    activeTab === cat.id 
                    ? 'bg-white/20' 
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-800 group-hover:text-slate-600 dark:group-hover:text-slate-200'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Social Life Banner */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#FEF3C7] dark:bg-yellow-900/20 border border-yellow-200/60 dark:border-yellow-700/60 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 flex items-center justify-center shrink-0">
                <span className="text-xl font-bold">🌴</span>
              </div>
              <div>
                <h3 className="text-slate-800 dark:text-yellow-100 font-bold text-lg font-display">Vie Sociale Africaine</h3>
                <p className="text-slate-600 dark:text-yellow-200/80 text-sm">Découvrez la richesse culturelle de nos célébrations et l'ambiance unique du campus.</p>
              </div>
            </div>
            <button className="text-sm font-bold text-yellow-800 dark:text-yellow-300 hover:text-yellow-900 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-yellow-400/10 transition-colors whitespace-nowrap">
                Voir l'album dédié
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Masonry Grid (CSS Columns implemented via Tailwind columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 mb-6"
                onClick={() => setSelectedItem(item)}
              >
                <div className={`relative w-full ${item.heightClass}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Icons */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md size-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <FontAwesomeIcon icon={faExpand} className="text-white" />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[#C5A059] text-xs font-bold tracking-wider uppercase mb-1 block">
                      {item.badge}
                    </span>
                    <h3 className="text-white font-display text-xl md:text-2xl font-bold leading-tight">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-slate-200 text-sm mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination / Load More */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold hover:border-primary hover:text-primary transition-all shadow-sm group">
            Charger plus de photos
            <FontAwesomeIcon icon={faAngleDown} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </main>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300 p-4 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 focus:outline-none ring-offset-2 focus:ring-2 ring-primary/50"
              onClick={() => setSelectedItem(null)}
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>

            {/* Nav Buttons */}
            <button 
              className="absolute left-4 md:left-8 z-40 p-4 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-4xl md:text-5xl" />
            </button>
            <button 
              className="absolute right-4 md:right-8 z-40 p-4 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-4xl md:text-5xl" />
            </button>

            {/* Content Wrapper */}
            <div className="relative flex flex-col items-center max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              
              {/* Main Image */}
              <div className="relative w-auto h-auto max-h-[75vh] overflow-hidden rounded-[12px] shadow-2xl ring-1 ring-white/10 group">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-contain max-h-[75vh] bg-slate-900"
                />
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors" title="Download">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors" title="Share">
                    <FontAwesomeIcon icon={faShareNodes} />
                  </button>
                </div>
              </div>

              {/* Caption Area */}
              <div className="mt-6 w-full flex flex-col md:flex-row md:items-center justify-between gap-4 text-white">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    {selectedItem.tags && selectedItem.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white tracking-wide uppercase">
                            {tag}
                        </span>
                    ))}
                    <span className="text-white/60 text-sm font-light flex items-center gap-1">
                      <FontAwesomeIcon icon={faCalendarDay} />
                      {selectedItem.date || 'Date inconnue'}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="text-white/70 text-sm max-w-2xl font-light">
                    {selectedItem.description || "Un moment exceptionnel capturé sur le campus de l'ESCAE Bénin, illustrant notre engagement envers l'excellence et la communauté."}
                  </p>
                </div>

                {/* Counter */}
                <div className="flex items-center gap-2 text-white/50 text-sm font-medium self-end md:self-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <span className="text-white">
                    {filteredItems.findIndex(i => i.id === selectedItem.id) + 1 < 10 ? `0${filteredItems.findIndex(i => i.id === selectedItem.id) + 1}` : filteredItems.findIndex(i => i.id === selectedItem.id) + 1}
                  </span>
                  <span>/</span>
                  <span>
                    {filteredItems.length < 10 ? `0${filteredItems.length}` : filteredItems.length}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Thumbnails strip placeholder background */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent z-30 pointer-events-none"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
