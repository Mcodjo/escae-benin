/*
 * About Page - ESCAE Bénin
 * Sections: Hero → Histoire → Mission/Vision → Valeurs → Équipe → Alumni
 */

import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faTarget, faEye, faHeart, faGlobe, faUsers, faBookOpen, faLightbulb, faArrowRight, faCheckCircle, faQuoteLeft, faStar, faCompass, faFlag, faDownload, faGraduationCap, faHandshake, faTrophy } from '@fortawesome/free-solid-svg-icons';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const values = [
  { icon: faAward, title: 'Emprise', description: 'Nous cultivons l\'esprit de compétition et de dépassement de soi pour atteindre les sommets de l\'excellence académique et professionnelle.', color: '#004AAD' },
  { icon: faHeart, title: 'Incongrupes', description: 'Nous incarnons des principes de probité, de transparence et d\'éthique dans toutes nos interactions et décisions institutionnelles.', color: '#E31E24' },
  { icon: faUsers, title: 'Inclusion', description: 'Nous embrassons la diversité sous toutes ses formes et créons un environnement où chacun trouve sa place et s\'épanouit.', color: '#00A651' },
  { icon: faLightbulb, title: 'Innovation', description: 'Nous encourageons la créativité et les approches novatrices pour résoudre les défis du monde contemporain et de demain.', color: '#C9A227' },
  { icon: faGlobe, title: 'Ouverture', description: 'Nous cultivons une perspective internationale et encourageons les échanges interculturels pour former des citoyens du monde.', color: '#004AAD' },
  { icon: faBookOpen, title: 'Savoir', description: 'Nous valorisons la soif d\'apprendre continue, la recherche rigoureuse et le développement permanent des compétences.', color: '#C9A227' },
];

const team = [
  {
    name: 'Directeur Général',
    role: 'Direction Générale',
    description: 'Leader visionnaire avec plus de 20 ans d\'expérience dans l\'enseignement supérieur africain.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vZFwLqAbTdMFtHll.jpg',
  },
  {
    name: 'Directeur Académique',
    role: 'Direction Académique',
    description: 'Expert en pédagogie moderne et en développement des programmes universitaires.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/rfAsFlnSfnFYoIPb.jpg',
  },
  {
    name: 'Directrice Administrative',
    role: 'Administration',
    description: 'Gestionnaire expérimentée assurant le bon fonctionnement de l\'institution.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/helCZRZIhjvoFpvN.jpg',
  },
];

const alumni = [
  {
    name: 'Peter OKOYE',
    promo: 'Promotion 2022',
    role: 'Manager International',
    quote: 'Mon diplôme de l\'ESCAE Bénin a ouvert des portes incroyables dans ma carrière internationale.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ybtfmFkZlzTPtGnk.jpg',
  },
  {
    name: 'Larissa AVOCE',
    promo: 'Promotion 2021',
    role: 'Entrepreneur',
    quote: 'Grâce à l\'ESCAE, j\'ai pu réaliser mes rêves académiques et professionnels.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ftxqJVDEaJZzTtoh.jpg',
  },
  {
    name: 'Nonvidé YACOUBOU',
    promo: 'Promotion 2023',
    role: 'Consultant Senior',
    quote: 'Les valeurs et l\'éducation reçues ici m\'ont aidé à réussir dans ma vie professionnelle.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/PJxPLNpUgGYkhxdO.jpg',
  },
];

const milestones = [
  { year: '2012', event: 'Création de l\'ESCAE Bénin', desc: 'Fondation de l\'institution conformément aux textes en vigueur en République du Bénin.' },
  { year: '2014', event: 'Accréditation Officielle', desc: 'Obtention de l\'agrément officiel du gouvernement béninois pour les formations LMD.' },
  { year: '2016', event: 'Ouverture du Campus de Porto-Novo', desc: 'Extension des activités avec l\'ouverture d\'un second campus dans la capitale.' },
  { year: '2018', event: 'Partenariats Internationaux', desc: 'Signature des premiers accords de coopération avec des universités étrangères.' },
  { year: '2020', event: 'Lancement du Programme MBA', desc: 'Création du programme MBA Executive pour les professionnels en activité.' },
  { year: '2022', event: 'Partenariat AFRIA', desc: 'Accord historique avec l\'Agence Francophone de l\'Intelligence Artificielle.' },
  { year: '2024', event: '2500+ Étudiants', desc: 'Franchissement du cap symbolique de 2500 étudiants actifs sur nos campus.' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 escae-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/mrzZTKpDRnvGcjsv.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/80 to-[#004AAD]/60" />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-label text-yellow-300 uppercase tracking-wider">INSTITUTION D'EXCELLENCE</span>
              <div className="gold-line" />
            </div>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              L'Excellence Académique <br className="hidden sm:block" />
              <span className="text-display-italic text-yellow-300">Au Cœur de l'Afrique</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Depuis 2012, l'ESCAE Bénin façonne les leaders de demain à travers une pédagogie innovante 
              et une ouverture sur le monde.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/campus" className="btn-gold px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                Découvrir nos campus <FontAwesomeIcon icon={faArrowRight} className="w-[18px] h-[18px]" />
              </Link>
              <button className="btn-outline-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faDownload} className="w-[18px] h-[18px]" />
                Télécharger la brochure
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeIn>
              <div className="relative mb-8 lg:mb-0">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ZsvFoAhNtRjqQkSq.jpg"
                    alt="Campus ESCAE Abomey-Calavi"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5">
                  <div className="text-3xl font-bold text-[#004AAD]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>2012</div>
                  <div className="text-sm text-gray-600 font-medium">Année de Fondation</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-line" />
                  <span className="text-label text-[#C9A227] uppercase tracking-wider">NOTRE HISTOIRE</span>
                </div>
                <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-[#001F5B] mb-6">
                  Une décennie d'impact et <br className="hidden sm:block" />
                  d'<span className="text-display-italic text-[#004AAD]">innovation éducative</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  L'ESCAE Bénin est bien plus qu'une audacieuse vision : c'est un rêve devenu réalité au Bénin et 
                  à la croisée des chemins internationaux. Ce qui a commencé comme un projet modeste en 2012 
                  est devenu magnifique et vaillant pilier de l'enseignement supérieur privé.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Notre croissance est ancrée dans les valeurs qui nous propulsent : l'excellence académique, 
                  l'engagement envers nos étudiants, et notre ouverture aux opportunités internationales. Nous cultivons 
                  aujourd'hui une communauté vibrante d'étudiants, d'innovateurs et de penseurs progressistes dans un 
                  environnement stimulant qui favorise l'épanouissement académique et personnel.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#004AAD] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      5k+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Étudiants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#004AAD] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      12+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Partenaires</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#004AAD] mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      95%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Taux de réussite</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B] mb-4">
                Notre Raison d'Être
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ce qui pulse nos actions quotidiennes et définit notre horizon futur.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <FadeIn delay={0.1}>
              <div className="relative bg-[#004AAD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden min-h-[320px] flex flex-col">
                <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5" />
                <div className="relative flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <FontAwesomeIcon icon={faCompass} className="w-[28px] h-[28px] text-yellow-300" />
                  </div>
                  <h3 className="text-display text-3xl lg:text-4xl text-white mb-5">Notre Vision</h3>
                  <p className="text-blue-100 leading-relaxed text-base">
                    Être reconnue comme l'université de référence en Afrique de l'Ouest pour la formation 
                    de leaders éthiques et compétents, capables de relever les défis complexes du monde 
                    contemporain et de contribuer activement au développement durable du continent africain.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative bg-[#1a1a1a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden min-h-[320px] flex flex-col">
                <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5" />
                <div className="relative flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-300/20 flex items-center justify-center mb-6">
                    <FontAwesomeIcon icon={faFlag} className="w-[28px] h-[28px] text-yellow-300" />
                  </div>
                  <h3 className="text-display text-3xl lg:text-4xl text-white mb-5">Notre Mission</h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    Dispenser un enseignement supérieur de qualité, promouvoir la recherche scientifique 
                    appliquée et favoriser l'entrepreneuriat dans un environnement inclusif et valorisant 
                    l'excellence et l'intégrité.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Notre Parcours</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Jalons <span className="text-display-italic text-[#004AAD]">Historiques</span>
              </h2>
            </div>
          </FadeIn>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#004AAD] via-[#C9A227] to-[#004AAD]" />
            <div className="space-y-6 sm:space-y-8">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.08}>
                  <div className="flex gap-4 sm:gap-6 items-start pl-2 sm:pl-4">
                    <div className="relative shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#004AAD] border-4 border-white shadow-lg flex items-center justify-center z-10 relative">
                        <div className="w-2 h-2 rounded-full bg-yellow-300" />
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1 card-hover">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-white bg-[#004AAD] px-2.5 py-1 rounded-full">{m.year}</span>
                        <h4 className="font-semibold text-[#001F5B]">{m.event}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="container">
          <FadeIn>
            <div className="mb-14">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="gold-line" />
                    <span className="text-label text-[#C9A227] uppercase tracking-wider">CE QUI NOUS GUIDE</span>
                  </div>
                  <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-[#001F5B]">
                    Les Valeurs qui nous Définissent
                  </h2>
                </div>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-[#004AAD] font-semibold hover:text-[#C9A227] transition-colors group"
                >
                  Télécharger le cahier éthique 
                  <FontAwesomeIcon icon={faArrowRight} className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((val, i) => (
              <FadeIn key={val.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 card-hover group hover:shadow-lg transition-all">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${val.color}15` }}
                  >
                    <FontAwesomeIcon icon={val.icon} className="w-6 h-6" style={{ color: val.color }} />
                  </div>
                  <h3 className="font-bold text-[#001F5B] text-xl mb-3">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section id="alumni" className="py-20 escae-gradient-section">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Nos Ambassadeurs</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Nos <span className="text-display-italic text-[#004AAD]">Alumni</span>
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mt-4">
                Nos diplômés sont nos meilleurs ambassadeurs. Ils brillent dans tous les secteurs 
                d'activité à travers le monde.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {alumni.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-[#001F5B]">{person.name}</div>
                      <div className="text-sm text-[#004AAD]">{person.role}</div>
                      <div className="text-xs text-gray-400">{person.promo}</div>
                    </div>
                  </div>
                  <FontAwesomeIcon icon={faQuoteLeft} className="w-5 h-5 text-[#C9A227] mb-2 opacity-60" />
                  <p className="text-gray-600 text-sm italic leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    "{person.quote}"
                  </p>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, j) => (
                      <FontAwesomeIcon key={j} icon={faStar} className="w-3 h-3 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ybtfmFkZlzTPtGnk.jpg"
                  alt="Alumni ESCAE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ftxqJVDEaJZzTtoh.jpg"
                  alt="Alumni ESCAE 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F5B]">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-display text-4xl text-white mb-4">
              Rejoignez notre <span className="text-display-italic text-yellow-300">Communauté</span>
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Devenez l'un des prochains ambassadeurs de l'excellence ESCAE Bénin.
            </p>
            <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2">
              Nous Rejoindre <FontAwesomeIcon icon={faArrowRight} className="w-[18px] h-[18px]" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
