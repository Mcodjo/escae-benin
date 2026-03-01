/*
 * Galerie Page - ESCAE Bénin
 * Sections: Hero → Filtres → Grid Masonry → Lightbox
 * Note: Photos de loisirs/sorties placées dans la section "Vie Sociale"
 */

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSearchPlus, faImage } from '@fortawesome/free-solid-svg-icons';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  caption?: string;
};

const allPhotos: GalleryItem[] = [
  // Soutenances & Remises de diplômes
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vZFwLqAbTdMFtHll.jpg', alt: 'Soutenance', category: 'Soutenances', caption: 'Cérémonie de soutenance de thèse' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/rfAsFlnSfnFYoIPb.jpg', alt: 'Soutenance', category: 'Soutenances', caption: 'Remise de diplômes' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/helCZRZIhjvoFpvN.jpg', alt: 'Soutenance', category: 'Soutenances', caption: 'Jury de soutenance' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vSaikdhtAiyyFEmj.jpg', alt: 'Soutenance', category: 'Soutenances', caption: 'Diplômés ESCAE' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vJMuycupGpVGLaxT.jpg', alt: 'Soutenance', category: 'Soutenances', caption: 'Promotion sortante' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/GPKZkNiADDEyBLAD.jpg', alt: 'Soutenance', category: 'Soutenances', caption: 'Cérémonie de remise de diplômes' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/jRcqRDKsYXQtDnxb.webp', alt: 'Diplômés', category: 'Soutenances', caption: 'Diplômés en toge' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/qcdsIgmiAcAEsZul.webp', alt: 'Diplômés', category: 'Soutenances', caption: 'Promotion ESCAE' },

  // Événements académiques
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/TcuwFuYMpKidkfvm.jpg', alt: 'Événement', category: 'Événements', caption: 'Conférence académique' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/bamEtAMZWeulzQrv.jpg', alt: 'Événement', category: 'Événements', caption: 'English Lovers Day' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/JXhfTKkPwySZnUKq.jpg', alt: 'Événement', category: 'Événements', caption: 'Club d\'Anglais Porto-Novo' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/rUmRXjFWXCONlrLW.jpg', alt: 'Événement', category: 'Événements', caption: 'Séminaire étudiant' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/SuLHhkPbcnVoIMUP.jpg', alt: 'Événement', category: 'Événements', caption: 'Journée portes ouvertes' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/WZYITiIcIFIqtjRD.jpg', alt: 'IA', category: 'Événements', caption: 'Partenariat AFRIA — Intelligence Artificielle' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/MZlELZbyeiNhvFbM.jpg', alt: 'IA', category: 'Événements', caption: 'Formation en IA' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/hxEdxkntFliGBnCf.jpg', alt: 'IA', category: 'Événements', caption: 'Innovation technologique' },

  // Campus & Vie académique
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ZsvFoAhNtRjqQkSq.jpg', alt: 'Campus', category: 'Campus', caption: 'Campus Abomey-Calavi' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/mrzZTKpDRnvGcjsv.jpg', alt: 'Campus', category: 'Campus', caption: 'Vue du campus' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/lFgdeuJGtVkuwNFn.jpg', alt: 'Campus', category: 'Campus', caption: 'Zone académique' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/qjtLWoJDRxERvwDN.jpg', alt: 'Campus', category: 'Campus', caption: 'Campus Porto-Novo' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/xbYcgjRtaOOOczUO.jpg', alt: 'Projet', category: 'Campus', caption: 'Projet étudiant' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/FIYYCHArodwUGCSz.jpg', alt: 'Prix', category: 'Campus', caption: 'Remise de prix' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/KNjVeMSYvWCWgJVj.jpg', alt: 'Prix', category: 'Campus', caption: 'Cérémonie de distinction' },

  // Vie Sociale — Sorties & Loisirs (hors contexte universitaire)
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/UefoedIIjlbbfUjF.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Sortie entre amis' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/lUTtGlTYuQvYSAib.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Moments de détente' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/mvqmKGTqrdXXHSqn.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Activités récréatives' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/OqxQUjFBurMPYoWq.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Plage entre étudiants' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vBWbeDdgUDQmpvFb.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Groupe d\'amis' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/LyauaXZzwXMFaGyD.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Sortie à la plage' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/IHKlFYldDVoDnDSM.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Étudiants souriants' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/oJRxPWxSNdFMtmoq.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Couple d\'étudiants' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/xoBdJiYtRkBnHDdY.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Groupe en sortie' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/yBnZhZEORqXBDdHQ.webp', alt: 'Sortie', category: 'Vie Sociale', caption: 'Étudiant à la plage' },

  // Gala & Fêtes
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/wnvrjETRtdxVANpO.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Gala de fin d\'année' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/UwcWnVVDJHgLNydN.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Soirée de gala' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/auJrWQQgyOUmVUvY.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Cérémonie festive' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/VrHSvOrrRfiERDTX.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Fête étudiante' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/UYlvXzzXjLLLHrOO.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Soirée de promotion' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/JmOoTxSmpKlnBlbP.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Gala annuel' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/TgnVtSosKhzrQqXq.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Célébration' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/KTKmHFZquQguQYCA.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Fête de fin d\'année' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/LxfFsFajoQPCcIoX.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Ambiance festive' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/MHyNkdCScydZZYSd.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Soirée étudiante' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ksXRIrGtQxCMLqSY.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Gala de promotion' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/hydHdGkOfpdyOjSQ.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Cérémonie annuelle' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/lFtEdXGLAUPnWIrR.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Soirée de gala' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/MvmigqtfuJRMEnPh.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Fête étudiante' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/nNEOxrJTRZUdjtbh.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Ambiance de gala' },
  { src: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/GTgkNhdSmQjAORQe.jpg', alt: 'Gala', category: 'Gala & Fêtes', caption: 'Soirée de fin d\'année' },
];

const categories = ['Tout', 'Soutenances', 'Événements', 'Campus', 'Vie Sociale', 'Gala & Fêtes'];

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState('Tout');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === 'Tout'
    ? allPhotos
    : allPhotos.filter((p) => p.category === activeCategory);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 escae-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vZFwLqAbTdMFtHll.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/85 to-[#004AAD]/60" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-label text-yellow-300">Nos Moments</span>
              <div className="gold-line" />
            </div>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              <span className="text-display-italic text-yellow-300">Galerie</span> Photos
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Revivez les moments forts de la vie à l'ESCAE Bénin : cérémonies académiques, 
              événements culturels et moments de convivialité.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 sm:py-16 bg-[#FAFAF8]">
        <div className="container">
          {/* Filter Tabs */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[#004AAD] text-white shadow-lg shadow-blue-900/20'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-[#004AAD] border border-gray-200'
                  }`}
                >
                  {cat}
                  <span className="ml-1.5 text-xs opacity-70">
                    ({cat === 'Tout' ? allPhotos.length : allPhotos.filter(p => p.category === cat).length})
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Category Description */}
          {activeCategory === 'Vie Sociale' && (
            <FadeIn>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-center">
                <p className="text-amber-800 text-sm">
                  <span className="font-semibold">🌴 Vie Sociale & Loisirs</span> — Ces photos illustrent les moments de détente et de convivialité entre étudiants, 
                  en dehors du cadre universitaire.
                </p>
              </div>
            </FadeIn>
          )}

          {/* Grid */}
          <motion.div
            layout
            className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
          >
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                  className="break-inside-avoid mb-4"
                >
                  <div
                    className="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                    onClick={() => setLightbox(photo)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-xs font-medium">{photo.caption}</p>
                        <span className="text-yellow-300 text-xs">{photo.category}</span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <FontAwesomeIcon icon={faSearchPlus} className="w-[14px] h-[14px] text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <FontAwesomeIcon icon={faImage} className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Aucune photo dans cette catégorie</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              {lightbox.caption && (
                <div className="mt-4 text-center">
                  <p className="text-white font-medium">{lightbox.caption}</p>
                  <span className="text-yellow-300 text-sm">{lightbox.category}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
