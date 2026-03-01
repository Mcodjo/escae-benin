/*
 * Actualités Page - ESCAE Bénin
 * Contenu basé sur les vraies actualités du site original
 */

import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTag, faArrowRight, faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

type Article = {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  featured?: boolean;
};

const articles: Article[] = [
  {
    id: 1,
    date: '15 Janvier 2024',
    category: 'Partenariat',
    title: 'Partenariat historique entre ESCAE-BENIN et l\'Agence Francophone de l\'Intelligence Artificielle (AFRIA)',
    excerpt: 'Un accord de coopération majeur ouvrant de nouvelles perspectives pour nos étudiants dans le domaine de l\'Intelligence Artificielle.',
    content: 'L\'ESCAE Bénin a signé un accord de partenariat historique avec l\'Agence Francophone de l\'Intelligence Artificielle (AFRIA). Ce partenariat ouvre de nouvelles perspectives pour nos étudiants en matière de formation aux technologies de l\'IA, de recherche appliquée et d\'insertion professionnelle dans ce secteur en pleine expansion.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/WZYITiIcIFIqtjRD.jpg',
    featured: true,
  },
  {
    id: 2,
    date: '07 Décembre 2024',
    category: 'Événement',
    title: 'English Lovers\' Day — Une journée récréative à ne pas manquer !',
    excerpt: 'Une journée dédiée à la pratique de l\'anglais dans un cadre convivial et stimulant pour tous les étudiants de l\'ESCAE.',
    content: 'L\'English Lovers\' Day est une initiative innovante de l\'ESCAE Bénin pour encourager la pratique de l\'anglais dans un cadre ludique et convivial. Cette journée réunit étudiants et enseignants dans des activités variées : débats, jeux de rôle, présentations et échanges culturels, le tout en anglais.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/bamEtAMZWeulzQrv.jpg',
    featured: true,
  },
  {
    id: 3,
    date: '03 Novembre 2023',
    category: 'Actualité',
    title: 'Lancement du Club d\'Anglais sur le Campus de Porto-Novo',
    excerpt: 'Une nouvelle initiative pour renforcer les compétences linguistiques de nos étudiants et préparer leur insertion internationale.',
    content: 'Le Club d\'Anglais de l\'ESCAE Bénin étend ses activités au campus de Porto-Novo. Ce club offre aux étudiants un espace d\'échange et de pratique de la langue anglaise à travers des sessions hebdomadaires, des débats et des activités culturelles.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/TcuwFuYMpKidkfvm.jpg',
  },
  {
    id: 4,
    date: '20 Octobre 2023',
    category: 'Académique',
    title: 'Cérémonie de Remise de Diplômes — Promotion 2023',
    excerpt: 'Une cérémonie émouvante marquant la fin du parcours académique de notre promotion 2023.',
    content: 'La cérémonie de remise de diplômes de la promotion 2023 a été un moment de fierté et d\'émotion pour toute la communauté ESCAE. Plus de 200 étudiants ont reçu leurs diplômes en présence de leurs familles et des autorités académiques.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vZFwLqAbTdMFtHll.jpg',
  },
  {
    id: 5,
    date: '15 Septembre 2023',
    category: 'Partenariat',
    title: 'Renforcement des Partenariats Internationaux de l\'ESCAE',
    excerpt: 'L\'ESCAE Bénin consolide ses liens avec des universités et institutions partenaires à l\'international.',
    content: 'Dans le cadre de sa stratégie d\'internationalisation, l\'ESCAE Bénin a renforcé ses partenariats avec plusieurs universités et institutions internationales. Ces accords permettront des échanges d\'étudiants, des programmes de double diplôme et des collaborations de recherche.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/MZlELZbyeiNhvFbM.jpg',
  },
  {
    id: 6,
    date: '01 Septembre 2023',
    category: 'Académique',
    title: 'Rentrée Académique 2023-2024 : Bienvenue aux Nouveaux Étudiants',
    excerpt: 'L\'ESCAE Bénin accueille chaleureusement sa nouvelle promotion avec des cérémonies d\'intégration.',
    content: 'La rentrée académique 2023-2024 marque l\'arrivée d\'une nouvelle promotion d\'étudiants à l\'ESCAE Bénin. Des cérémonies d\'accueil et d\'intégration ont été organisées pour permettre aux nouveaux étudiants de découvrir leur institution et de créer des liens avec leurs camarades.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/rUmRXjFWXCONlrLW.jpg',
  },
  {
    id: 7,
    date: '10 Juillet 2023',
    category: 'Événement',
    title: 'Gala de Fin d\'Année — Une Soirée Mémorable',
    excerpt: 'Le gala annuel de l\'ESCAE Bénin a réuni étudiants, enseignants et partenaires dans une ambiance festive.',
    content: 'Le gala annuel de l\'ESCAE Bénin a été une soirée inoubliable, réunissant toute la communauté académique dans une ambiance festive et conviviale. Des prix d\'excellence ont été remis aux meilleurs étudiants de l\'année.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/wnvrjETRtdxVANpO.jpg',
  },
  {
    id: 8,
    date: '15 Mai 2023',
    category: 'Prix',
    title: 'ESCAE Bénin Remporte le Prix de l\'Innovation Pédagogique',
    excerpt: 'Notre institution a été récompensée pour ses approches innovantes en matière d\'enseignement supérieur.',
    content: 'L\'ESCAE Bénin a été honorée du Prix de l\'Innovation Pédagogique lors du Forum de l\'Enseignement Supérieur Africain. Cette distinction récompense les efforts de l\'institution pour intégrer les nouvelles technologies et méthodes pédagogiques dans ses programmes.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/KNjVeMSYvWCWgJVj.jpg',
  },
];

const allCategories = ['Tout', 'Partenariat', 'Événement', 'Académique', 'Prix', 'Actualité'];

export default function Actualites() {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === 'Tout' || a.category === activeCategory;
    const matchSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = articles.filter((a) => a.featured);

  if (selectedArticle) {
    return (
      <div className="overflow-x-hidden">
        <section className="relative py-16 sm:py-24 escae-gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={selectedArticle.image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/85 to-[#004AAD]/60" />
          <div className="container relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-yellow-300 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              ← Retour aux actualités
            </button>
            <span className="text-xs font-bold text-white bg-[#C9A227] px-3 py-1.5 rounded-full">{selectedArticle.category}</span>
            <h1 className="text-display text-3xl sm:text-5xl text-white mt-4 mb-4 max-w-3xl">{selectedArticle.title}</h1>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <FontAwesomeIcon icon={faCalendar} className="w-[14px] h-[14px]" />
              <span>{selectedArticle.date}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
            </svg>
          </div>
        </section>

        <section className="py-16 bg-[#FAFAF8]">
          <div className="container max-w-3xl">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-72 object-cover" />
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedArticle.excerpt}</p>
              <p className="text-gray-600 leading-relaxed">{selectedArticle.content}</p>
            </div>
            <button
              onClick={() => setSelectedArticle(null)}
              className="mt-8 btn-primary px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              ← Retour aux actualités
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 escae-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/bamEtAMZWeulzQrv.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/85 to-[#004AAD]/60" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-label text-yellow-300">Restez Informé</span>
              <div className="gold-line" />
            </div>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Nos <span className="text-display-italic text-yellow-300">Actualités</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Suivez toute l'actualité de l'ESCAE Bénin : partenariats, événements académiques, 
              cérémonies et innovations pédagogiques.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-line" />
              <span className="text-label text-[#C9A227]">À la Une</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featured.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.1}>
                <div
                  className="relative rounded-2xl overflow-hidden h-72 group cursor-pointer card-hover shadow-lg"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="image-zoom h-full">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/90 via-[#001F5B]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#001F5B] bg-yellow-300 px-2.5 py-1 rounded-full">{article.category}</span>
                      <span className="text-xs text-blue-200 flex items-center gap-1"><FontAwesomeIcon icon={faCalendar} className="w-[11px] h-[11px]" /> {article.date}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-yellow-300 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Filters & Search */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1 max-w-sm">
                <FontAwesomeIcon icon={faSearch} className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une actualité..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] bg-white"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat
                        ? 'bg-[#004AAD] text-white'
                        : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.08}>
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover cursor-pointer group"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="image-zoom h-44">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <FontAwesomeIcon icon={faTag} className="w-3 h-3 text-[#C9A227]" />
                      <span className="text-xs font-semibold text-[#004AAD]">{article.category}</span>
                      <span className="text-xs text-gray-400 ml-auto flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendar} className="w-[11px] h-[11px]" /> {article.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#001F5B] mb-2 line-clamp-2 group-hover:text-[#004AAD] transition-colors text-sm leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-1 text-[#004AAD] text-xs font-medium group-hover:gap-2 transition-all">
                      Lire l'article <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">Aucun article trouvé pour cette recherche.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
