/*
 * Home Page - ESCAE Bénin
 * Design: Luxe Institutionnel Tropical
 * Sections: Hero carousel → Quick Access → Features → Stats → About Preview → News → Testimonials → Partners → CTA
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, faGlobe, faUsers, faAward, faBookOpen, faBriefcase, 
  faChevronRight, faStar, faArrowRight, faPlayCircle, faQuoteLeft,
  faArrowTrendUp, faHandshake, faLightbulb, faHeart,
  faCircleCheck, faFilePen, faDownload, faShieldHalved,
  faLaptopCode, faFlask
} from '@fortawesome/free-solid-svg-icons';

// ── Animated Counter ──────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Fade In Section ────────────────────────────────────────────────────────────
function FadeInSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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

// ── Hero Section ───────────────────────────────────────────────────────────────
const heroSlides = [
  {
    image: '/hero1.jpg',
    title: 'Construisez Votre',
    titleAccent: 'Avenir',
    subtitle: 'Rejoignez l\'excellence académique et l\'innovation pédagogique au cœur du Bénin',
    cta: 'Découvrir nos programmes',
    ctaLink: '/formations',
  },
  {
    image: '/hero2.jpg',
    title: 'Vivez une Réussite',
    titleAccent: 'Inoubliable',
    subtitle: 'Chaque diplômé ESCAE est un ambassadeur de l\'excellence béninoise dans le monde',
    cta: 'Voir nos Cérémonies',
    ctaLink: '/galerie',
  },
  {
    image: '/hero3.jpg',
    title: 'Intégrez une Communauté',
    titleAccent: 'Dynamique',
    subtitle: 'Plus de 2500 étudiants actifs dans un environnement multiculturel et stimulant',
    cta: 'Rejoindre la Communauté',
    ctaLink: '/contact',
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % heroSlides.length;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setPrev(current);
    setCurrent(index);
  };

  const slide = heroSlides[current];

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-[#001F5B]">
      {/* Background Images — cross-fade */}
      {prev !== null && (
        <div className="absolute inset-0">
          <img
            src={heroSlides[prev].image}
            alt=""
            className="w-full h-full object-cover object-top opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/90 via-[#001F5B]/70 to-[#004AAD]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B] via-transparent to-transparent" />
        </div>
      )}
      <motion.div
        key={current}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
        className="absolute inset-0"
        onAnimationComplete={() => setPrev(null)}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/90 via-[#001F5B]/70 to-[#004AAD]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B] via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full container flex flex-col items-center justify-center text-center px-4 md:px-8 pt-20 pb-32 mx-auto">
        <div className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight drop-shadow-lg mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {slide.title} <br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] via-[#E6C768] to-[#C9A227]">
                {slide.titleAccent}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-2xl mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-200 text-lg md:text-xl font-light leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={slide.ctaLink}
            className="bg-[#C9A227] hover:bg-yellow-500 text-[#001F5B] font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#C9A227]/20 transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            <span>{slide.cta}</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </Link>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-xl border border-white/20 transition-all flex items-center gap-2">
            <FontAwesomeIcon icon={faPlayCircle} />
            <span>Visite Virtuelle</span>
          </button>
        </div>

      </div>
    </section>
  );
}

// ── Quick Access Cards ────────────────────────────────────────────────────────
function QuickAccess() {
  return (
    <section className="relative z-20 -mt-24 pb-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeInSection delay={0.1} className="h-full">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer backdrop-blur-md border border-white/20 h-full flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                <FontAwesomeIcon icon={faGraduationCap} className="text-[#C9A227] text-3xl group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Bourses & Aides</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                Découvrez nos programmes de soutien financier conçus pour récompenser l'excellence et soutenir le mérite.
              </p>
              <Link href="/formations#bourses" className="text-[#004AAD] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                En savoir plus <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2} className="h-full">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer backdrop-blur-md border border-white/20 border-t-4 border-[#C9A227] h-full flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#004AAD]/10 flex items-center justify-center mb-6 group-hover:bg-[#004AAD] group-hover:text-white transition-colors">
                <FontAwesomeIcon icon={faBookOpen} className="text-[#004AAD] text-3xl group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Nos Programmes</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                Licence, Master et Doctorat. Une pédagogie innovante alignée sur les standards internationaux.
              </p>
              <Link href="/formations" className="text-[#004AAD] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Voir le catalogue <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.3} className="h-full">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer backdrop-blur-md border border-white/20 h-full flex flex-col">
              <div className="w-14 h-14 rounded-full bg-[#C9A227]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A227] group-hover:text-white transition-colors">
                <FontAwesomeIcon icon={faUsers} className="text-[#C9A227] text-3xl group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Vie Étudiante</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-grow">
                Clubs, sport, culture. Une expérience universitaire riche et vibrante au sein de notre campus.
              </p>
              <Link href="/galerie" className="text-[#004AAD] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Explorer <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// ── Stats Section ──────────────────────────────────────────────────────────────
const stats = [
  { value: 98, suffix: '%', label: 'Taux de réussite' },
  { value: 2500, suffix: '+', label: 'Étudiants' },
  { value: 15, suffix: '+', label: 'Pays représentés' },
  { value: 50, suffix: '+', label: 'Partenaires' },
];

function StatsSection() {
  return (
    <section className="py-20 bg-[#001F5B] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9A227 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="container relative z-10 px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeInSection>
            <h2 className="text-[#C9A227] text-sm font-bold uppercase tracking-widest mb-2">Notre Impact</h2>
            <h3 className="text-white font-serif text-4xl md:text-5xl font-bold">
              L'Excellence en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#E6C768]">Chiffres</span>
            </h3>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <p className="text-slate-300 max-w-md text-sm leading-relaxed">
              Des résultats probants qui témoignent de la qualité de notre enseignement et de notre engagement envers la réussite de chaque étudiant.
            </p>
          </FadeInSection>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-serif font-bold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-slate-400 text-sm uppercase tracking-wide font-medium">{stat.label}</span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features Section ───────────────────────────────────────────────────────────
const featureList = [
  { id: '01', icon: faAward, title: 'Excellence Académique', text: 'Des programmes rigoureux, accrédités et reconnus internationalement.', color: 'text-[#004AAD]', bg: 'bg-[#004AAD]/10' },
  { id: '02', icon: faFlask, title: 'Recherche Innovante', text: 'Des laboratoires de pointe et des opportunités de recherche appliquée.', color: 'text-[#C9A227]', bg: 'bg-[#C9A227]/10' },
  { id: '03', icon: faGlobe, title: 'Ouverture Internationale', text: 'Des partenariats avec des universités prestigieuses à travers le monde.', color: 'text-purple-600', bg: 'bg-purple-100' },
  { id: '04', icon: faBriefcase, title: 'Insertion Professionnelle', text: 'Un réseau d\'alumni puissant et des services carrière dédiés.', color: 'text-green-600', bg: 'bg-green-100' },
  { id: '05', icon: faUsers, title: 'Communauté Vibrante', text: 'Une vie de campus dynamique, inclusive et riche en activités.', color: 'text-orange-600', bg: 'bg-orange-100' },
  { id: '06', icon: faLaptopCode, title: 'Digital Campus', text: 'Des infrastructures modernes et des outils numériques avancés.', color: 'text-[#004AAD]', bg: 'bg-[#004AAD]/10' },
];

function Features() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0f1823]">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInSection>
            <h2 className="text-[#004AAD] text-sm font-bold uppercase tracking-widest mb-3">Pourquoi nous choisir</h2>
            <h3 className="text-slate-900 dark:text-white font-serif text-4xl md:text-5xl font-bold mb-6">Avantages d'être avec nous</h3>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto rounded-full"></div>
          </FadeInSection>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((f, i) => (
            <FadeInSection key={f.id} delay={i * 0.1}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
                <span className="absolute top-4 right-6 text-6xl font-serif font-bold text-slate-300 dark:text-slate-500 group-hover:text-[#C9A227]/30 transition-colors">{f.id}</span>
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-6 ${f.color}`}>
                  <FontAwesomeIcon icon={f.icon} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{f.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{f.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About Preview Section ─────────────────────────────────────────────────────
function AboutPreview() {
  return (
    <section className="relative py-20 lg:py-32 px-4 md:px-8 overflow-hidden bg-white dark:bg-[#0f1823]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#004AAD]/5 dark:bg-[#004AAD]/10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.1]">
                  Notre Campus & <br/>
                  <span className="text-[#004AAD]">Nos Valeurs</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-lg">
                  ESCAE Bénin s'engage à fournir une éducation de classe mondiale fondée sur des principes solides, dans un environnement tropical propice à l'épanouissement intellectuel.
                </p>
              </div>
              <div className="flex items-center gap-4 py-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227]">
                  <FontAwesomeIcon icon={faAward} className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl text-slate-900 dark:text-white">Agréé par l'État</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Reconnu par le CAMES</span>
                </div>
              </div>
              <Link href="/about" className="group flex items-center gap-3 w-fit px-8 py-4 bg-[#004AAD] text-white rounded-xl font-medium transition-all hover:bg-[#004AAD]/90 hover:shadow-lg hover:shadow-[#004AAD]/20">
                <span>En savoir plus sur nous</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-lg transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO4VAjR0BqOgeWl98vbGDCjY6Qhk0-BMYEFmFbGwWldKoAJoozsVf7gleZXj7VHziin2FqnWv3qyrcxzd0ufUBj_jNtNMhGQg41S5lnFyltrZFqajI_jmLbnl-I5fyiyEmXmxjMSb7srlE6mX-FrSN_sp4ye-8U4HlcbsJ3K4JbF6xcqdx7o015u3yndhVNysintr-NcDTa4cFZ9LNGUKnzhh9eyhcOSZFaVR8GBnzKcF1KclQjhQI0k6fTY4TXlaKLUBDRZzjZw" alt="Campus Porto-Novo" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-white font-serif font-semibold text-xl">Campus Porto-Novo</span>
                  </div>
                </div>
                {[
                  { icon: faLightbulb, title: 'Innovation', text: 'Pionnier de nouvelles méthodes.', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { icon: faAward, title: 'Excellence', text: 'Viser le plus haut standard.', color: 'text-amber-600', bg: 'bg-amber-50' },
                  { icon: faUsers, title: 'Diversité', text: 'Une communauté riche.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { icon: faShieldHalved, title: 'Intégrité', text: 'Honnêteté et éthique.', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                ].map((v, i) => (
                  <div key={v.title} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group/card">
                    <div className={`w-10 h-10 rounded-lg ${v.bg} dark:bg-opacity-20 ${v.color} flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform`}>
                      <FontAwesomeIcon icon={v.icon} />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white mb-1">{v.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

// ── News Section ───────────────────────────────────────────────────────────────
const newsItems = [
  {
    category: 'Événement',
    date: '12 Mars 2024',
    title: 'AFRIA 2024: Le Sommet de l\'Innovation Africaine',
    text: 'ESCAE Bénin accueille les leaders technologiques pour discuter de l\'avenir numérique du continent.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1x1SERKz2HV9QuTK7mQ-bkkliokPtPzq6YBW6NLh_mUsVHFVohCsfcrkVUCvs0dRye1kgENT17R6Zq9N8JyEd_z_-a5nESR-HsI8Ilwh-vtiqXVgFJq2loLjfeRk6ZbLoEIV6hIicYBa1e_s4YtTWd0fstDKrpAxdoaP3kKj20SwddhPKtfXAGVJ6Bvm0CeFsIyfwWiIfx2-U4xb44DPLcBiwdRmLZrvR2b_AX45PByelILE2yxjhAw9E23pe48Y8HAuIUHLAVEY'
  },
  {
    category: 'Académique',
    date: '28 Février 2024',
    title: 'English Day: Célébration de la langue de Shakespeare',
    text: 'Une journée dédiée à l\'immersion linguistique avec des ateliers, des débats et des présentations.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOW8KRVX-dB66Hw_OSQ0Eoq-lVygeL1zxqbgsBgvYEW5VqPkA7V5heBSLBKRIFZ22FAiTr3FNNMwvOQNXDjJDY6ZA_v8pux9PI0eYCRYVpxKNJtexN3I1j2cmcfX3IT5YmCFm3tB4grHTH2UBZDcTdSvS0866gzkjYKW47YYTSd5pTuZWvQ5mrq4ylKGJ-v7VV2LqvpDs91LqEH1V0AIHrT5knsOcuRWtfo7jHJhLuSm4LGVB4QmZi4DZK64F-d1Dkeo3aalTdWCA'
  },
  {
    category: 'Admissions',
    date: '15 Février 2024',
    title: 'Ouverture des inscriptions pour la rentrée 2024-2025',
    text: 'Préparez votre avenir dès aujourd\'hui. Découvrez nos nouveaux programmes de Master et Licence.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBirx8uvaf5IKaEswsccCzRfXLuo1zhtHfYgHdUsnthm-9AXPKnqnS-T4Cj79bBY3x88Dm3S474j3YqyIv-dSit1-phQZkU7M9hu2vNq20mrxQQtDpmVFqjhYrM5Muo9qILnUl8iMmOq1wPxCEmXrqZ4-WXRwESUFPuAQZo63yV9__yP9kxDF5ibISdaa2AcymLA1KEP5mmcNn1m6Q0XhByIm36dgHjj6uo3wyuIZzAGKDg-Zbhi7YAvu9ib7VZwIGKuf93SGV6lgs'
  }
];

function News() {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <FadeInSection>
            <span className="text-[#004AAD] font-semibold text-sm tracking-widest uppercase block mb-2">Restez Informé</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Nos Actualités Récentes</h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Link href="/actualites" className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#004AAD] transition-colors font-medium">
              Voir tout le journal
              <FontAwesomeIcon icon={faArrowRight} className="text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeInSection>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <article className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    {item.category}
                  </div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <FontAwesomeIcon icon={faBriefcase} className="text-base" /> {item.date}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#004AAD] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-6 flex-1">{item.text}</p>
                  <Link href="/actualites" className="inline-flex items-center text-[#004AAD] font-semibold text-sm group/btn w-fit">
                    Lire l'article
                    <FontAwesomeIcon icon={faChevronRight} className="text-base ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonials Section ───────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Marie-Claire Adébayo',
    role: 'Directrice Marketing Régional, Ecobank',
    promo: 'Promotion 2018 - Master en Marketing Stratégique',
    quote: "La formation à l'ESCAE Bénin ne m'a pas seulement donné un diplôme, elle m'a donné une vision. L'excellence académique combinée aux valeurs éthiques m'a permis de diriger des équipes internationales avec confiance.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0jhMSjMg1iOnqzcDcjORzXb_2XjMBVzsGMBKUm66joOD_hCXjAXoje6gIrdMw7EyU60qcbvErCi9s2x6EbjefZ3Wef0NQZj8Lj4v_-LCdag4m3AfBAAY7WbgZb3Vwu167yrZDvO4xmZgsoQAtvP8gnDCPu4uPjUYZ6ghZ3Z71zmJFoeOkc3885cqV5-7rOBLNB45HHuXEdEpL-Auc3sIcVZgAGyOTirinA3cKBWqpSPcimTP_lDfKQGBcll9USHQ0Gfm-iLB-5XI',
  },
  {
    name: 'Koffi Mensah',
    role: 'Consultant Senior, Deloitte Afrique',
    promo: 'Promotion 2016 - Master en Finance',
    quote: "L'ESCAE m'a ouvert les portes de l'international. Les partenariats académiques et le réseau d'alumni m'ont permis d'accéder à des opportunités que je n'aurais jamais imaginées.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO4VAjR0BqOgeWl98vbGDCjY6Qhk0-BMYEFmFbGwWldKoAJoozsVf7gleZXj7VHziin2FqnWv3qyrcxzd0ufUBj_jNtNMhGQg41S5lnFyltrZFqajI_jmLbnl-I5fyiyEmXmxjMSb7srlE6mX-FrSN_sp4ye-8U4HlcbsJ3K4JbF6xcqdx7o015u3yndhVNysintr-NcDTa4cFZ9LNGUKnzhh9eyhcOSZFaVR8GBnzKcF1KclQjhQI0k6fTY4TXlaKLUBDRZzjZw',
  },
  {
    name: 'Amina Sossou',
    role: 'Fondatrice, TechBénin Startup',
    promo: 'Promotion 2020 - Licence en Gestion',
    quote: "Grâce à l'esprit entrepreneurial cultivé à l'ESCAE, j'ai pu lancer ma propre startup dès ma sortie. L'accompagnement des professeurs et les projets pratiques ont fait toute la différence.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBirx8uvaf5IKaEswsccCzRfXLuo1zhtHfYgHdUsnthm-9AXPKnqnS-T4Cj79bBY3x88Dm3S474j3YqyIv-dSit1-phQZkU7M9hu2vNq20mrxQQtDpmVFqjhYrM5Muo9qILnUl8iMmOq1wPxCEmXrqZ4-WXRwESUFPuAQZo63yV9__yP9kxDF5ibISdaa2AcymLA1KEP5mmcNn1m6Q0XhByIm36dgHjj6uo3wyuIZzAGKDg-Zbhi7YAvu9ib7VZwIGKuf93SGV6lgs',
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0c1520] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <FadeInSection>
            <span className="text-[#004AAD] text-sm font-bold uppercase tracking-widest block mb-2">Ce que disent nos Alumni</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Ils nous ont fait confiance.<br />Voici leur retour.
            </h2>
          </FadeInSection>
        </div>
      </div>

      {/* Marquee — full width, no container clip */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-[#0c1520] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#0c1520] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ x: { duration: 25, repeat: Infinity, ease: 'linear' } }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[380px] bg-[#001F5B] dark:bg-slate-800 rounded-2xl p-8 flex flex-col justify-between"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-[#C9A227] text-3xl" />
              </div>

              {/* Testimonial text */}
              <p className="text-slate-200 text-sm leading-relaxed mb-8 flex-grow">
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, j) => <FontAwesomeIcon key={j} icon={faStar} className="text-[#C9A227] text-sm" />)}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#C9A227]/40 flex-shrink-0">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Partners Section ───────────────────────────────────────────────────────────
function Partners() {
  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">Nos Partenaires Académiques & Institutionnels</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-12 w-full max-w-[140px] bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA Section ──────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-32 px-4 md:px-8 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0f1823]/90 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/40 to-transparent z-10 mix-blend-overlay"></div>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfFDOIuizeK4lls1lhhOc5SzRQtO7X5Le26NKftIiaSN8I0SY8HmGD3rMH_0wB8UaEb8EUKP6pTExq7eqqme4i-dooSb5O6tHoz4-Y5-clEJei6EA2J92GHp3wAajJ_uctrkf-rXBkKiA45YhpyWn6NtmD6KcYJXyVj0Q5UQuX16CY2QWGXWtXrV0atIUImykaOFAeWPcAtAiM2afScvEys2xYRnDt-8VTHYSuubhiEWqtPV6iAQTa-Ll_zJM7njZlGcd8BPrj0qs" alt="Campus night view" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            Rejoignez <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37] animate-pulse">l'Excellence</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Votre avenir commence ici. Intégrez une communauté d'élite et formez-vous aux défis de demain dans un cadre exceptionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto h-14 px-8 rounded-xl bg-[#D4AF37] hover:bg-yellow-500 text-slate-900 font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2">
              Postuler maintenant
              <FontAwesomeIcon icon={faFilePen} />
            </button>
            <button className="w-full sm:w-auto h-14 px-8 rounded-xl border border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              Télécharger la brochure
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

// ── Main Home Page ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <QuickAccess />
      <StatsSection />
      <Features />
      <AboutPreview />
      <News />
      <Testimonials />
      <Partners />
      <FinalCTA />
    </div>
  );
}
