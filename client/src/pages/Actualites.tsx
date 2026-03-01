import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSchool, 
  faSearch, 
  faCalendarDays, 
  faGraduationCap, 
  faArrowRight, 
  faChevronDown,
  faChampagneGlasses,
  faBuilding,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const newsItems = [
  {
    id: 1,
    category: 'Académique',
    date: '12 Oct 2024',
    title: "Nouveau Master en Data Science lancé",
    excerpt: "L'ESCAE élargit son offre académique avec un cursus de pointe conçu pour préparer les étudiants à l'économie axée sur les données.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-4iNWtecbO-vmV7_fEgnjxEuBBjX_riZ2FMjNNqdXamZ8rRdZ6pgioQTyVeWZDKnimXsT_88kJLbpPsYZ6Xe3WjzvESYBL5oyq6mzjp9WVH7A1L1ZS172rQuQ3MzOjXi6oCYQ021myP13Z0oQneQnw_bDcztCPp4wzZcj8f7ibXhyp2pyVoydOVXBxyzfYaFT1RNS8B4oSp7kVDcKuXBgcpQhDqXZwXJ3Zb-EdqjKljg8M-BDhTEscRQbD0XlKMPojw3sL7lceqc',
    color: 'text-primary'
  },
  {
    id: 2,
    category: 'Partenariat',
    date: '28 Sep 2024',
    title: "Alliance stratégique avec des géants de la Tech",
    excerpt: "Un accord historique garantissant à nos meilleurs diplômés des stages au sein des plus grandes entreprises technologiques d'Afrique de l'Ouest.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUSUAW6BkamRWCrdKl_O6MXORkX3v_iPPwk9XTl94jOnSDt48DwJZDcTbGkvGdSSfsi0mHxFkI9K3n-0iTzIHJzUfbXZVl5armoxcsbW8wz4S2VfQmrbO99AVP2qyc3fXVEKxcSIp-6_yl9j0nFUEjp3-g0JhiLgESBKuft0XlHjJAeDHA9_2nhaazUJ3nB66UQDp9QM1BBlgLliIkS8rmDma7GAm2nqp3-rosns_V-DASc8OFA3nhcjWQbvJ5ylPdJoelxAz8hfQ',
    color: 'text-emerald-600'
  },
  {
    id: 3,
    category: 'Étudiants',
    date: '15 Sep 2024',
    title: "Ouverture du Student Innovation Hub",
    excerpt: "La nouvelle installation offre un accès 24/7 à des imprimantes 3D, des stations de travail haut de gamme et des espaces collaboratifs.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqoYho18bwKC9niC4isDCumgTZYg3hidTU2-_rlhd-mwawz1y-MuXxl5PPawHhd101ru5DdB6EMe3YovW9INi5A-k6jfZmCgkZxSjZuaVLM75vauU6LEazVgLeURdSCbUT6xpH53fZvBNK4WzByFHOW_nznzWQgDyCsMBVKqcMljGmiBSZSp1iw_iI_YJW_8H8QBTAMF7jvhrlM7O_OwdhANwDdzfIbbq8ty0BGpOgIlDOgL16Tmi5OT1YhNx20SlAKs0Q_ilGsDI',
    color: 'text-purple-600'
  },
  {
    id: 4,
    category: 'Sport',
    date: '30 Août 2024',
    title: "Les Lions de l'ESCAE remportent le championnat",
    excerpt: "Notre équipe de football universitaire ramène le trophée après une finale palpitante contre l'Université de Lagos.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoCQXEGPpuIaCUj2ymHJo38Pao-FVt2nElwtHJs-az8Pv5tAqWCORRHUuJ4vn5W9hDB9zOCjIquQGmIU4y2wLLdv5bpmek7KxLX5yFbMzyEeKyI8iGySPzuVcRvNKW-lFy3BsA4BRGo4wwdIawlRzlLlXJLzNZPr0SEiklpwFaqYMGBIjbK_-CRryHj6QffAEJ5bRSLXhdmMoY_Mn3QW5cJ7I2rE3pyVzTdcURwT2FYFzjJsYQ5mzldbO3wzzAdqW-Ofh8gNqL9f8',
    color: 'text-orange-600'
  },
  {
    id: 5,
    category: 'Campus',
    date: '22 Août 2024',
    title: "Extension du Campus : Début de la Phase 2",
    excerpt: "La construction commence pour le nouveau laboratoire de bio-recherche et le complexe de dortoirs étudiants étendu.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmE8vqUdchXkt2Dv_YWGdAs2Fx1vxm6Av1HUMoyttBTC-y42_lq13Rz0kLCn15kD_Tn-EPhdwXeqW5sI1iSGTEXH5HgUB6fudS4aYKFlPC5Y2DnJa7uBdtzVpf6i5rNAMuKI3JMJolI6P4isO1r7E7Yb0OHMXJjEn5AIGuvope8F3Pmq8uNHVYtSY0j0lKHdXeUyUYr0yjQG2w6dY83uveX51yuFlybPczHV85hXvRcoFGPBOqlKJd28pL8DMWiXfPZ0bnu2qvsfE',
    color: 'text-primary'
  },
  {
    id: 6,
    category: 'Alumni',
    date: '10 Juil 2024',
    title: "Parcours d'Alumni : De l'ESCAE à la Direction Générale",
    excerpt: "D'une salle de classe de l'ESCAE à la tête de l'une des fintechs à la croissance la plus rapide au Nigeria. Lisez son histoire inspirante.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_MWZAYVxJomw3Mu7Dbk9SzNy_JNWO0gXeMHVprStnnVqOv-wjERXD6VOIp_ZHRYbMnMcKvNlm5ND1wYmFR0pPKSxW3Nyo5qS-WuucusTuVrcp3V6aSOC5TxPxJfVuA7Sp3PmtQlE2OdF1JCyr6bqaCxAXHZeXX_Wz31189ZlmlWdlblDPFrPdvx3IZlNLL6SVihxjeG-vzV_5ew-fpFOIIrorMK6rDg3Hrrucftt-vmMiIOsshXv9cyHtZeNu9ITFozW8Cx9vysU',
    color: 'text-blue-500'
  }
];

export default function Actualites() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="bg-[#FAFAF8] dark:bg-[#0f1823] min-h-screen font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col gap-12">
        
        {/* Hero Section */}
        <section className="relative w-full rounded-2xl overflow-hidden min-h-[420px] flex items-center justify-center bg-gradient-to-br from-[#001F5B] to-[#004AAD] shadow-xl group">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl gap-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              Nos <span className="font-serif italic text-[#D4AF37] block sm:inline">Actualités</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-200 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
            >
              Découvrez les dernières innovations, les réussites étudiantes et les événements marquants de l'université ESCAE.
            </motion.p>
            <div className="flex w-full max-w-md mt-4">
              <label className="relative flex w-full items-center">
                <span className="absolute left-4 text-primary">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input 
                  className="w-full h-12 rounded-full pl-12 pr-32 bg-white/95 backdrop-blur text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border-none shadow-lg text-sm font-medium" 
                  placeholder="Rechercher une actualité..." 
                  type="text"
                />
                <button className="absolute right-1 top-1 bottom-1 px-5 rounded-full bg-primary hover:bg-blue-800 text-white text-sm font-bold transition-colors">
                  Chercher
                </button>
              </label>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>
        </section>

        {/* Filter Chips */}
        <section className="flex flex-wrap items-center gap-3 py-2 overflow-x-auto no-scrollbar">
          {['All', 'Événements', 'Académique', 'Partenariats', 'Vie Étudiante', 'Recherche'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap shadow-sm ${
                activeTab === tab 
                ? 'bg-primary text-white scale-105' 
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary'
              }`}
            >
              {tab === 'All' ? 'Toutes les news' : tab}
            </button>
          ))}
        </section>

        {/* Featured Stories Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-[16/9] shadow-lg cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaMahxlrJNGUPgf3RuR0h1wpUeZ9uf-2VBJWnaNn7ijUtL8Tw98_FtZSxIa0m0bzcELSX_WfRve-gFbQt65Uz-NgIkQvj0y5JVhrPRq0X8278MydzAxaJF9f65E1K9KQJP1nZtI4jDFol72m3DA7w0IbCrzruBnseNE-qzir_7YOZYlRtGQdfDmb-K-p4LFQgJfT8GFdIl-_zjIs8o0UMvjlVrBXJIIx3dIzQU0UkDvLDrCbJHAc07Lvd94CorljuPSmBmmMWkmgM')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#D4AF37] text-slate-900 text-xs font-bold uppercase tracking-wide shadow-sm">
                <FontAwesomeIcon icon={faCalendarDays} className="text-[12px]" /> EN VEDETTE
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col gap-3">
              <p className="text-[#D4AF37] font-serif italic text-lg md:text-xl">Histoire de couverture</p>
              <h3 className="text-white text-2xl md:text-4xl font-serif font-bold leading-tight">AFRIA 2024: Façonner l'avenir de l'IA en Afrique</h3>
              <p className="text-slate-200 line-clamp-2 text-sm md:text-base font-light max-w-lg">
                Rejoignez-nous pour la plus grande conférence sur l'intelligence artificielle de la région, hébergée ici même à l'ESCAE.
              </p>
              <Link href="/actualites/afria-2024" className="flex items-center gap-2 text-white font-bold text-sm mt-2 group-hover:translate-x-2 transition-transform">
                Lire l'article complet <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Featured Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-[16/9] shadow-lg cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBu6lmgDWw2LDEwRhAK8Y8GAY6SGWQ70rGZ07VmGKdz5UqNkcuTsrd1KYtkfLAAHbc8l_ThgOTyHgMtaR6I12-opbHM43dti7ga6UD7HDbRyOBcdaVEThGUJxXe4s559I2lxEtAv7J2qDEk1095HZSjN43g4umLrSMvyGaf8pzpVUhCAM98hoIAWeeY_WJbmHSQLNPygA7DNH84yNUD64lhyDyzA30ophkY2jVrAnSVwy9lC1nPW66PREty7DFbzHh7nEa--DPEsbg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#D4AF37] text-slate-900 text-xs font-bold uppercase tracking-wide shadow-sm">
                <FontAwesomeIcon icon={faChampagneGlasses} className="text-[12px]" /> CULTURE
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col gap-3">
              <p className="text-[#D4AF37] font-serif italic text-lg md:text-xl">Vie de Campus</p>
              <h3 className="text-white text-2xl md:text-4xl font-serif font-bold leading-tight">Célébration de l'English Day</h3>
              <p className="text-slate-200 line-clamp-2 text-sm md:text-base font-light max-w-lg">
                Une vitrine vibrante de talents linguistiques et d'échanges culturels organisée par le Département des Langues.
              </p>
              <Link href="/galerie" className="flex items-center gap-2 text-white font-bold text-sm mt-2 group-hover:translate-x-2 transition-transform">
                Voir la galerie <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Updates Grid */}
        <section className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-10 bg-[#D4AF37] rounded-full"></div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Dernières Mises à Jour</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {newsItems.map((item, idx) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
              >
                <div 
                  className="h-48 w-full bg-cover bg-center" 
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="p-6 flex flex-col flex-grow gap-3">
                  <div className="flex items-center justify-between">
                    <span className={`${item.color} text-xs font-bold tracking-wider uppercase`}>{item.category}</span>
                    <span className="text-slate-400 text-xs font-medium">{item.date}</span>
                  </div>
                  <h4 className="text-slate-900 dark:text-white text-xl font-bold font-display leading-tight hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Link href={`/actualites/${item.id}`} className="mt-auto pt-4 text-primary dark:text-[#D4AF37] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    En savoir plus <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-white bg-transparent hover:bg-white dark:hover:bg-slate-800 transition-all font-semibold">
              Voir plus d'actualités
              <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
