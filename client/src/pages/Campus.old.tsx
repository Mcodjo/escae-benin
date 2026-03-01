/*
 * Campus Page - ESCAE Bénin
 * Sections: Hero → Deux Campus → Infrastructures → Vie Étudiante
 */

import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faClock, faWifi, faBookOpen, faUsers, faCoffee, faDumbbell, faArrowRight, faBuilding } from '@fortawesome/free-solid-svg-icons';

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

const campuses = [
  {
    name: 'Campus Principal — Abomey-Calavi',
    location: 'Tankpè, Carrefour Parana, Abomey-Calavi',
    phone: '+229 01 97 62 68 43',
    hours: 'Lun–Ven: 8h–18h | Sam: 8h–14h',
    description: 'Notre campus principal, le cœur battant de l\'ESCAE Bénin. Un espace moderne et verdoyant propice à l\'apprentissage et à l\'épanouissement.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ZsvFoAhNtRjqQkSq.jpg',
    image2: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/lFgdeuJGtVkuwNFn.jpg',
    mapUrl: 'https://maps.google.com/?q=Abomey-Calavi+Benin',
    primary: true,
  },
  {
    name: 'Campus Porto-Novo',
    location: 'Porto-Novo, République du Bénin',
    phone: '+229 01 96 02 59 89',
    hours: 'Lun–Ven: 8h–18h | Sam: 8h–14h',
    description: 'Notre campus de la capitale, offrant les mêmes standards d\'excellence dans un cadre historique et culturellement riche.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/qjtLWoJDRxERvwDN.jpg',
    image2: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/NqAyjHQKnsXXPWeq.JPG',
    mapUrl: 'https://maps.google.com/?q=Porto-Novo+Benin',
    primary: false,
  },
];

const infrastructures = [
  { icon: faBookOpen, title: 'Bibliothèque Moderne', desc: 'Plus de 10 000 ouvrages, accès aux bases de données internationales et espaces de travail collaboratif.', color: '#004AAD' },
  { icon: faWifi, title: 'Wi-Fi Haut Débit', desc: 'Connexion internet haut débit sur l\'ensemble du campus pour faciliter les recherches et l\'apprentissage en ligne.', color: '#00A651' },
  { icon: faUsers, title: 'Salles de Conférence', desc: 'Amphithéâtres modernes et salles équipées pour les cours magistraux, séminaires et événements.', color: '#C9A227' },
  { icon: faCoffee, title: 'Espaces de Détente', desc: 'Cafétéria, jardins et espaces verts pour se ressourcer entre les cours.', color: '#E31E24' },
  { icon: faBuilding, title: 'Laboratoires Informatiques', desc: 'Salles informatiques équipées des dernières technologies pour les formations pratiques.', color: '#004AAD' },
  { icon: faDumbbell, title: 'Installations Sportives', desc: 'Terrains de sport et équipements pour maintenir un équilibre entre études et activité physique.', color: '#00A651' },
];

export default function Campus() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 escae-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/mrzZTKpDRnvGcjsv.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/85 to-[#004AAD]/60" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-label text-yellow-300">Nos Espaces</span>
              <div className="gold-line" />
            </div>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Nos <span className="text-display-italic text-yellow-300">Campus</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Deux campus stratégiquement situés au Bénin, offrant un environnement d'apprentissage 
              moderne et stimulant pour tous nos étudiants.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="py-12 sm:py-20 bg-[#FAFAF8]">
        <div className="container">
          <div className="space-y-16">
            {campuses.map((campus, i) => (
              <FadeIn key={campus.name} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="hidden sm:grid grid-cols-2 gap-4">
                      <div className="image-zoom rounded-2xl overflow-hidden h-56 sm:h-64 shadow-xl">
                        <img src={campus.image} alt={campus.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="image-zoom rounded-2xl overflow-hidden h-56 sm:h-64 shadow-lg mt-8">
                        <img src={campus.image2} alt={campus.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {/* Mobile: single image */}
                    <div className="sm:hidden rounded-2xl overflow-hidden shadow-xl h-52">
                      <img src={campus.image} alt={campus.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    {campus.primary && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#004AAD] px-3 py-1.5 rounded-full mb-4">
                        <FontAwesomeIcon icon={faBuilding} className="w-3 h-3" /> Campus Principal
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="gold-line" />
                      <span className="text-label text-[#C9A227]">
                        {campus.primary ? 'Abomey-Calavi' : 'Porto-Novo'}
                      </span>
                    </div>
                    <h2 className="text-display text-3xl sm:text-4xl text-[#001F5B] mb-4">{campus.name}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{campus.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm">{campus.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-[#C9A227] shrink-0" />
                        <a href={`tel:${campus.phone}`} className="text-gray-700 text-sm hover:text-[#004AAD] transition-colors">{campus.phone}</a>
                      </div>
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                        <span className="text-gray-700 text-sm">{campus.hours}</span>
                      </div>
                    </div>

                    <a
                      href={campus.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 text-sm"
                    >
                      Voir sur la Carte <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructures */}
      <section className="py-20 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Équipements</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Nos <span className="text-display-italic text-[#004AAD]">Infrastructures</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mt-4">
                Des équipements modernes pour offrir les meilleures conditions d'apprentissage à nos étudiants.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructures.map((infra, i) => (
              <FadeIn key={infra.title} delay={i * 0.1}>
                <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${infra.color}15` }}>
                    <FontAwesomeIcon icon={infra.icon} className="w-[22px] h-[22px]" style={{ color: infra.color }} />
                  </div>
                  <h3 className="font-semibold text-[#001F5B] mb-2">{infra.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{infra.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vie Étudiante Preview */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Au-delà des Cours</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Vie <span className="text-display-italic text-[#004AAD]">Estudiantine</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vZFwLqAbTdMFtHll.jpg',
              'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/rfAsFlnSfnFYoIPb.jpg',
              'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/TcuwFuYMpKidkfvm.jpg',
              'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/bamEtAMZWeulzQrv.jpg',
            ].map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="image-zoom rounded-2xl overflow-hidden h-48 shadow-md">
                  <img src={img} alt="Vie étudiante" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-8">
              <Link href="/galerie" className="btn-primary px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2">
                Voir la Galerie Complète <FontAwesomeIcon icon={faArrowRight} className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
