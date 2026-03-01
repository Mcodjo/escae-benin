/*
 * Home Page - ESCAE Bénin
 * Design: Luxe Institutionnel Tropical
 * Sections: Hero → Avantages → Stats → Actualités → Témoignages → Partenaires → CTA
 */

import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, faGlobe, faUsers, faAward, faBookOpen, faBriefcase, 
  faChevronRight, faChevronLeft, faStar, faArrowRight, faPlay, faQuoteLeft,
  faArrowTrendUp, faHandshake, faFlask, faLightbulb
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
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/wchnuPysEttP79kHbPtijA/sandbox/UnsW8kGPOseQ4Av4gOJtAM-img-1_1772110916000_na1fn_ZXNjYWVfaGVyb19iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2NobnVQeXNFdHRQNzlrSGJQdGlqQS9zYW5kYm94L1Vuc1c4a0dQT3NlUTRBdjRnT0p0QU0taW1nLTFfMTc3MjExMDkxNjAwMF9uYTFmbl9aWE5qWVdWZmFHVnliMTlpWncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YWJ3ljB3nxbissJS369iNckihVZ0eRlW9DhHU2I2Ck-xDY8htBlHthsizxSPQKTekBp3Yn1slfuAR7~PNFrFwdLIf2i0LLORUY~nz39N9IHUVLeWmtAJT04bqbVEPNTq9gbeioh2vKgNgP707SpmaLKo~UQSI92EXGTfoISgfDwAeR7zR8a2C1KB-DmE1slULlBDbOBWJcSX2Lj5k3cQLp1HGOKceSVisH~QqJWakKTwmx4tb9b7r~GPzlDr-LoBbU0dr3rXVxCgSrCamPB1o~wTEHEHjwGrnQ1SYVtb86FN14PkvMZxh8G60YmvbJ797YMzaF1e9~tkmNGt~9bsLQ__',
    title: 'Façonnez Votre',
    titleAccent: 'Avenir',
    subtitle: 'Rejoignez l\'excellence académique et l\'innovation pédagogique au cœur du Bénin',
    cta: 'Découvrir nos Formations',
    ctaLink: '/formations',
  },
  {
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/wchnuPysEttP79kHbPtijA/sandbox/UnsW8kGPOseQ4Av4gOJtAM-img-4_1772110922000_na1fn_ZXNjYWVfZ3JhZHVhdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2NobnVQeXNFdHRQNzlrSGJQdGlqQS9zYW5kYm94L1Vuc1c4a0dQT3NlUTRBdjRnT0p0QU0taW1nLTRfMTc3MjExMDkyMjAwMF9uYTFmbl9aWE5qWVdWZlozSmhaSFZoZEdsdmJnLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Bjb6x54VxfPjcM8iFsVLhKTLTrzjjqtfHzvaA~Mh8yd1DGClRV9~QS-i7EL9h89jIeFVhje5tYjTXtNlJk-GQ3DBIiY72Pftci~RJnWmz0d9lYNO82G0vk8VasrAMQfjTfqGOCnW15ZpNVoPAfFnlNbyDTpwnwn3re8B8-MTpcvh77h2RlctLVuSe9T9KIdekUKH--U4kZGXl9mbt9~TfQ7aOr3L7BCJQ0KHLePaFuawskvkM~hx-79d7FEh2UY1~RxQ~wqE7q~j10hwNSFDXF6FiJ-1VtpJWfN99MgE~Ve8wTMsWUXSx1Y-MmmtrcmTNUn6NiofjdASAZ0IKaTxQA__',
    title: 'Une Cérémonie',
    titleAccent: 'Inoubliable',
    subtitle: 'Chaque diplômé ESCAE est un ambassadeur de l\'excellence béninoise dans le monde',
    cta: 'Voir nos Cérémonies',
    ctaLink: '/galerie',
  },
  {
    image: 'https://private-us-east-1.manuscdn.com/sessionFile/wchnuPysEttP79kHbPtijA/sandbox/UnsW8kGPOseQ4Av4gOJtAM-img-2_1772110921000_na1fn_ZXNjYWVfc3R1ZGVudHNfaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2NobnVQeXNFdHRQNzlrSGJQdGlqQS9zYW5kYm94L1Vuc1c4a0dQT3NlUTRBdjRnT0p0QU0taW1nLTJfMTc3MjExMDkyMTAwMF9uYTFmbl9aWE5qWVdWZmMzUjFaR1Z1ZEhOZmFHVnlidy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=prZzZsMOfDzDKjvLXHsokzIx-SuyUqD9sT5xcJMFSdmjC7b5APcPbR11iuZm~yNEjjPhiTa~SKlMM8LnMNthGf20zZUya~E8UL6Y-ZFPUNCaT6vbnFP30zC8fffQnerbU3makHgcDTxx9l0surS6~ZBCEyNkAHMkF21cGZNl~x1GZfUVDBPjWJV9XlJPrLUsVjlmzokbuT~RH2RzPj~Hr9Qa8SJXho4cjonasNKj3HqI~w1W9NQyLTzG4hNH5xsvtHdwazw4912RjPkksLuWTAdCub7GnqjuQXjhwrIJzP6xOCDMscy5ddWiQMyB-phW2-C4rFh6UvT9b0aD6PSXfw__',
    title: 'Une Communauté',
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
    <section className="relative h-screen min-h-[580px] max-h-[900px] overflow-hidden">
      {/* Background Images — cross-fade, images seules changent */}
      {/* Image précédente (reste visible pendant la transition) */}
      {prev !== null && (
        <div className="absolute inset-0">
          <img
            src={heroSlides[prev].image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/90 via-[#004AAD]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/60 via-transparent to-transparent" />
        </div>
      )}
      {/* Image courante — fondu entrant */}
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
          alt="ESCAE Bénin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/90 via-[#004AAD]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-yellow-300/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content — TOUJOURS VISIBLE, ne disparaît jamais */}
      <div className="relative h-full container flex items-center">
        <div className="max-w-2xl">
          {/* Label fixe */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="gold-line" />
            <span className="text-label text-yellow-300">ESCAE Bénin — Excellence & Innovation</span>
          </motion.div>

          {/* Titre — AnimatePresence avec mode="popLayout" pour transition douce sans disparition totale */}
          <div className="text-display text-3xl sm:text-5xl lg:text-7xl text-white mb-4 leading-tight min-h-[1.2em]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${current}`}
                initial={{ opacity: 0.3, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.3, y: -12 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {slide.title}{' '}
                <span className="text-display-italic text-yellow-300">{slide.titleAccent}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sous-titre — transition douce */}
          <div className="mb-8 max-w-xl min-h-[3em]">
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                initial={{ opacity: 0.3, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.3, y: -8 }}
                transition={{ duration: 0.5, delay: 0.05, ease: 'easeInOut' }}
                className="text-blue-100 text-lg leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Boutons — toujours visibles, le CTA change en fondu */}
          <div className="flex flex-wrap gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={`cta-${current}`}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href={slide.ctaLink}
                  className="btn-gold px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 text-sm sm:text-base"
                >
                  {slide.cta}
                  <FontAwesomeIcon icon={faArrowRight} className="w-[18px] h-[18px]" />
                </Link>
                <Link
                  href="/about"
                  className="btn-outline-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base"
                >
                  En savoir plus
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick stats — toujours visibles, jamais animés au changement de slide */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20"
          >
            {[
              { value: '98%', label: 'Employabilité' },
              { value: '2500+', label: 'Étudiants' },
              { value: '15+', label: 'Partenaires' },
              { value: '12', label: 'Filières' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-yellow-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {stat.value}
                </div>
                <div className="text-xs text-blue-200 tracking-wider uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2.5 bg-yellow-300'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
        aria-label="Précédent"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo((current + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
        aria-label="Suivant"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
      </button>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z" fill="#FAFAF8"/>
        </svg>
      </div>
    </section>
  );
}

// ── Features Section ───────────────────────────────────────────────────────────
const features = [
  {
    icon: faGraduationCap,
    title: 'Excellence Académique',
    description: 'Une parfaite maîtrise du système LMD avec une ouverture internationale reconnue. Programmes accrédités et enseignants qualifiés.',
    color: '#004AAD',
    number: '01',
  },
  {
    icon: faFlask,
    title: 'Opportunités de Recherche',
    description: 'Accédez à des projets de recherche innovants et collaboratifs dans divers domaines pour développer votre expertise.',
    color: '#00A651',
    number: '02',
  },
  {
    icon: faUsers,
    title: 'Vie Estudiantine Vibrante',
    description: 'Rejoignez une communauté diversifiée et engageante, avec des clubs, des activités culturelles et sportives.',
    color: '#E31E24',
    number: '03',
  },
  {
    icon: faGlobe,
    title: 'Réseau Mondial',
    description: 'Coopération internationale au cœur du dispositif pédagogique. Plus de 15 partenaires à travers le monde.',
    color: '#004AAD',
    number: '04',
  },
  {
    icon: faBriefcase,
    title: 'Perspectives de Carrière',
    description: 'Ouverture au monde professionnel avec 98% d\'employabilité. Stages et insertions professionnelles garantis.',
    color: '#C9A227',
    number: '05',
  },
  {
    icon: faHandshake,
    title: 'Soutien à la Réussite',
    description: 'Accompagnement personnalisé, services de tutorat et de conseil pour garantir votre succès académique.',
    color: '#00A651',
    number: '06',
  },
];

// ── Stats Section ──────────────────────────────────────────────────────────────
const stats = [
  { value: 98, suffix: '%', label: 'Taux d\'Employabilité', description: 'Des diplômés trouvent un emploi dans les 6 mois', icon: faArrowTrendUp },
  { value: 95, suffix: '%', label: 'Taux de Satisfaction', description: 'Des étudiants recommandent ESCAE Bénin', icon: faStar },
  { value: 2500, suffix: '+', label: 'Étudiants Actifs', description: 'Une communauté dynamique et en croissance', icon: faUsers },
  { value: 15, suffix: '+', label: 'Partenaires Mondiaux', description: 'Universités et entreprises à travers le monde', icon: faGlobe },
  { value: 12, suffix: '', label: 'Filières d\'Excellence', description: 'Programmes adaptés aux besoins du marché', icon: faGraduationCap },
  { value: 120, suffix: '+', label: 'Enseignants Qualifiés', description: 'Professeurs et praticiens expérimentés', icon: faAward },
];

// ── News Section ───────────────────────────────────────────────────────────────
const news = [
  {
    date: '15 Janvier 2024',
    category: 'Actualité',
    title: 'Partenariat historique entre ESCAE-BENIN et l\'Agence Francophone de l\'Intelligence Artificielle (AFRIA)',
    excerpt: 'Un accord de coopération majeur ouvrant de nouvelles perspectives pour nos étudiants dans le domaine de l\'IA.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/WZYITiIcIFIqtjRD.jpg',
    href: '/actualites',
  },
  {
    date: '07 Décembre 2024',
    category: 'Événement',
    title: 'English Lovers\' Day — Une journée récréative à ne pas manquer !',
    excerpt: 'Une journée dédiée à la pratique de l\'anglais dans un cadre convivial et stimulant pour tous les étudiants.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/bamEtAMZWeulzQrv.jpg',
    href: '/actualites',
  },
  {
    date: '03 Novembre 2023',
    category: 'Actualité',
    title: 'Lancement du Club d\'Anglais sur le Campus de Porto-Novo',
    excerpt: 'Une nouvelle initiative pour renforcer les compétences linguistiques de nos étudiants et préparer leur insertion internationale.',
    image: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/TcuwFuYMpKidkfvm.jpg',
    href: '/actualites',
  },
];

// ── Testimonials ───────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Peter OKOYE',
    role: 'Diplômé — Promotion 2022',
    quote: 'Mon diplôme de l\'ESCAE Bénin a ouvert des portes incroyables. J\'ai acquis des compétences solides qui ont façonné ma carrière dans le management international.',
    avatar: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ybtfmFkZlzTPtGnk.jpg',
    stars: 5,
  },
  {
    name: 'Larissa AVOCE',
    role: 'Diplômée — Promotion 2021',
    quote: 'Grâce à l\'ESCAE, j\'ai pu réaliser mes rêves académiques et professionnels. Une expérience enrichissante qui dure toute la vie. Je recommande vivement cette institution.',
    avatar: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ftxqJVDEaJZzTtoh.jpg',
    stars: 5,
  },
  {
    name: 'Nonvidé YACOUBOU',
    role: 'Diplômé — Promotion 2023',
    quote: 'Les valeurs et l\'éducation reçues ici m\'ont aidé à réussir dans ma vie professionnelle. Je suis fier d\'être un diplômé de cette institution exceptionnelle.',
    avatar: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/PJxPLNpUgGYkhxdO.jpg',
    stars: 5,
  },
];

// ── Partners ───────────────────────────────────────────────────────────────────
const partners = [
  { name: 'Université d\'Abomey-Calavi', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/sreZhcFDheebJapK.png', bg: '#f8f9fa' },
  { name: 'African Business School', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/TRHnwpvFBCsrAWVq.png', bg: '#fff' },
  { name: 'AFRIA — IA Francophone', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/UEEIeUnlyeNAySpZ.jpg', bg: '#f0f8ff' },
  { name: 'ETEC Bénin', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/KBZGASLtZgqYMRwI.jpg', bg: '#f5f5f5' },
  { name: 'Chartered Institute of Marketing', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/SltUdlQwfdbmxQJd.jpg', bg: '#fff' },
  { name: 'Partenaire International', logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/sRbRbmxkoKlRpzFG.jpg', bg: '#f8f9fa' },
];

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <HeroSection />

      {/* Quick Access Cards */}
      <section className="bg-[#FAFAF8] py-8 sm:py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 -mt-4 sm:-mt-6">
            {[
              {
                icon: faAward,
                title: 'Bourses',
                desc: 'Programme de bourses pour les nouveaux bacheliers.',
                href: '/formations#bourses',
                img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ZsvFoAhNtRjqQkSq.jpg',
              },
              {
                icon: faGraduationCap,
                title: 'Formations',
                desc: 'Une offre de formations orientées métier.',
                href: '/formations',
                img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/vZFwLqAbTdMFtHll.jpg',
              },
              {
                icon: faUsers,
                title: 'Activités',
                desc: 'Au cœur de la vie estudiantine de l\'ESCAE.',
                href: '/galerie',
                img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/UefoedIIjlbbfUjF.webp',
              },
            ].map((card, i) => (
              <FadeInSection key={card.title} delay={i * 0.15}>
                <Link href={card.href}>
                  <div className="relative rounded-2xl overflow-hidden h-56 group card-hover cursor-pointer shadow-lg">
                    <div className="image-zoom h-full">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001F5B]/90 via-[#001F5B]/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <FontAwesomeIcon icon={card.icon} className="text-yellow-300" />
                        <span className="text-label text-yellow-300">{card.title}</span>
                      </div>
                      <p className="text-white text-sm leading-snug">{card.desc}</p>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Le Professionnalisme au Service du Développement</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B] mb-4">
                Avantages d'être <span className="text-display-italic text-[#004AAD]">avec nous</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                ESCAE Bénin vous offre un environnement d'excellence pour développer vos compétences 
                et préparer votre avenir professionnel.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((feature, i) => (
              <FadeInSection key={feature.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 card-hover relative overflow-hidden group h-full flex flex-col">
                  {/* Numéro très visible en grand + icône */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                        style={{ backgroundColor: feature.color }}
                      >
                        <FontAwesomeIcon icon={feature.icon} className="text-white text-xl" />
                      </div>
                    </div>
                    {/* Grand numéro très visible */}
                    <div
                      className="text-5xl font-black leading-none select-none"
                      style={{ 
                        fontFamily: 'Cormorant Garamond, serif',
                        color: `${feature.color}22`,
                        WebkitTextStroke: `1.5px ${feature.color}55`
                      }}
                    >
                      {feature.number}
                    </div>
                  </div>
                  <h3 className="font-semibold text-[#001F5B] text-base mb-2 leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{feature.description}</p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)` }}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 escae-gradient-hero relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container relative">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-yellow-300">Avec + de 14 ans d'expérience</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-white mb-4">
                Notre <span className="text-display-italic text-yellow-300">Excellence</span> en Chiffres
              </h2>
              <p className="text-blue-200 max-w-xl mx-auto">
                Fièrement agréée par le gouvernement béninois, l'ESCAE prépare nos étudiants à l'excellence académique et professionnelle.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-3 sm:p-5 text-center stat-card">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-yellow-300/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <FontAwesomeIcon icon={stat.icon} className="text-yellow-300" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-yellow-300 mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white text-xs font-semibold mb-1 leading-tight">{stat.label}</div>
                  <div className="text-blue-300 text-xs leading-tight hidden sm:block">{stat.description}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Wave divider bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeInSection>
              <div className="relative pb-6 lg:pb-0">
                {/* Mobile: single image; Desktop: grid */}
                <div className="hidden sm:grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="image-zoom rounded-2xl overflow-hidden h-56 sm:h-64 shadow-xl">
                    <img
                      src="https://private-us-east-1.manuscdn.com/sessionFile/wchnuPysEttP79kHbPtijA/sandbox/UnsW8kGPOseQ4Av4gOJtAM-img-3_1772110915000_na1fn_ZXNjYWVfY2FtcHVzX2J1aWxkaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2NobnVQeXNFdHRQNzlrSGJQdGlqQS9zYW5kYm94L1Vuc1c4a0dQT3NlUTRBdjRnT0p0QU0taW1nLTNfMTc3MjExMDkxNTAwMF9uYTFmbl9aWE5qWVdWZlkyRnRjSFZ6WDJKMWFXeGthVzVuLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VURVulm1PRmC1AnU~wEZMokNm0hFjRhZM8aIEkLF7xg5OWB9Ca2UpwoNzVjQ5b2yHUX5tUhmVuk61z6y9mkRRCh78lvrr6pMOHWdt4Ux1v9W6tLIjMFscQs6WK9-kVPxNlnsluHvdgO4acncJX~slujnDUFOCuV58pNpPcTH5Ld7EqYjl3b5rCUTshppUx-m8zn729d4KJvUJg6kPiMPwvmW7X~25vCq1uFXgUV441xt4LK4s2cypRb6Nq3mpLPdXVASJynJDIzk1oNyi3ZaEDYOWdJ1UpJT3f4EuGa0LdkcEgqbiFbkFOaUffT1svcNeCUfjr7d0ymdCflJBzdBEg__"
                      alt="Campus ESCAE"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4 mt-8">
                    <div className="image-zoom rounded-2xl overflow-hidden h-36 sm:h-44 shadow-lg">
                      <img
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/mrzZTKpDRnvGcjsv.jpg"
                        alt="ESCAE Bénin"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="image-zoom rounded-2xl overflow-hidden h-36 sm:h-44 shadow-lg">
                      <img
                        src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/lFgdeuJGtVkuwNFn.jpg"
                        alt="Campus"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Mobile only: single full-width image */}
                <div className="sm:hidden rounded-2xl overflow-hidden shadow-xl h-56">
                  <img
                    src="https://private-us-east-1.manuscdn.com/sessionFile/wchnuPysEttP79kHbPtijA/sandbox/UnsW8kGPOseQ4Av4gOJtAM-img-3_1772110915000_na1fn_ZXNjYWVfY2FtcHVzX2J1aWxkaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2NobnVQeXNFdHRQNzlrSGJQdGlqQS9zYW5kYm94L1Vuc1c4a0dQT3NlUTRBdjRnT0p0QU0taW1nLTNfMTc3MjExMDkxNTAwMF9uYTFmbl9aWE5qWVdWZlkyRnRjSFZ6WDJKMWFXeGthVzVuLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VURVulm1PRmC1AnU~wEZMokNm0hFjRhZM8aIEkLF7xg5OWB9Ca2UpwoNzVjQ5b2yHUX5tUhmVuk61z6y9mkRRCh78lvrr6pMOHWdt4Ux1v9W6tLIjMFscQs6WK9-kVPxNlnsluHvdgO4acncJX~slujnDUFOCuV58pNpPcTH5Ld7EqYjl3b5rCUTshppUx-m8zn729d4KJvUJg6kPiMPwvmW7X~25vCq1uFXgUV441xt4LK4s2cypRb6Nq3mpLPdXVASJynJDIzk1oNyi3ZaEDYOWdJ1UpJT3f4EuGa0LdkcEgqbiFbkFOaUffT1svcNeCUfjr7d0ymdCflJBzdBEg__"
                    alt="Campus ESCAE"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-2 sm:-bottom-4 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl p-3 sm:p-4 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#004AAD] flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faAward} className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <div className="font-bold text-[#001F5B] text-sm">Agréé par l'État</div>
                    <div className="text-xs text-gray-500">République du Bénin</div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="gold-line" />
                  <span className="text-label text-[#C9A227]">À Propos de l'ESCAE</span>
                </div>
                <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B] mb-6">
                  Une Institution d'<span className="text-display-italic text-[#004AAD]">Excellence</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  L'École Supérieure de Commerce et d'Administration des Entreprises du Bénin (ESCAE-BENIN) 
                  a été créée en 2012 conformément aux textes en vigueur en République du Bénin.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Depuis sa fondation, l'ESCAE Bénin s'est établie comme une institution d'excellence dans 
                  l'enseignement supérieur privé, préparant les leaders de demain avec une pédagogie moderne 
                  et des partenariats internationaux.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: faLightbulb, label: 'Innovation', color: '#C9A227' },
                    { icon: faAward, label: 'Excellence', color: '#004AAD' },
                    { icon: faGlobe, label: 'Diversité', color: '#00A651' },
                    { icon: faHandshake, label: 'Intégrité', color: '#E31E24' },
                  ].map((val) => (
                    <div key={val.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${val.color}20` }}>
                        <FontAwesomeIcon icon={val.icon} className="w-4 h-4" style={{ color: val.color }} />
                      </div>
                      <span className="font-medium text-[#001F5B] text-sm">{val.label}</span>
                    </div>
                  ))}
                </div>

                <Link href="/about" className="btn-primary px-7 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2">
                  Découvrir notre Histoire
                  <FontAwesomeIcon icon={faArrowRight} className="w-[18px] h-[18px]" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <FadeInSection>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="gold-line" />
                  <span className="text-label text-[#C9A227]">Dernières Publications</span>
                </div>
                <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                  Nos <span className="text-display-italic text-[#004AAD]">Actualités</span>
                </h2>
              </div>
              <Link href="/actualites" className="flex items-center gap-2 text-[#004AAD] font-semibold hover:gap-3 transition-all text-sm">
                Voir tout <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {news.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.12}>
                <Link href={item.href}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group">
                    <div className="image-zoom h-48">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-[#004AAD] bg-blue-50 px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-400">{item.date}</span>
                      </div>
                      <h3 className="font-semibold text-[#001F5B] mb-2 line-clamp-2 group-hover:text-[#004AAD] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{item.excerpt}</p>
                      <div className="flex items-center gap-1 mt-4 text-[#004AAD] text-sm font-medium group-hover:gap-2 transition-all">
                        Lire plus <FontAwesomeIcon icon={faArrowRight} className="w-[14px] h-[14px]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 escae-gradient-section">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Témoignages</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Les Voix Inspirantes des <span className="text-display-italic text-[#004AAD]">Alumni</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-50"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={testimonials[testimonialIndex].avatar}
                        alt={testimonials[testimonialIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8 text-[#C9A227] mb-4 opacity-60" />
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      "{testimonials[testimonialIndex].quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#001F5B]">{testimonials[testimonialIndex].name}</div>
                        <div className="text-sm text-gray-500">{testimonials[testimonialIndex].role}</div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonials[testimonialIndex].stars)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === testimonialIndex
                      ? 'w-8 h-2.5 bg-[#004AAD]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8]">
        <div className="container">
          <FadeInSection>
            <div className="text-center mb-10 sm:mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Coopérations & Accréditations</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-3xl sm:text-4xl text-[#001F5B] mt-2">
                Nos <span className="text-display-italic text-[#004AAD]">Partenaires</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
                ESCAE Bénin collabore avec des institutions académiques et professionnelles de renom à travers le monde.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
            {partners.map((partner, i) => (
              <FadeInSection key={partner.name} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 h-28 sm:h-36 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 bg-white group cursor-default"
                >
                  <div className="flex items-center justify-center w-full h-14">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 sm:max-h-14 max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                      style={{ filter: 'none', WebkitFilter: 'none' }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 font-medium text-center leading-tight line-clamp-2 px-1">{partner.name}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#001F5B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/wchnuPysEttP79kHbPtijA/sandbox/UnsW8kGPOseQ4Av4gOJtAM-img-2_1772110921000_na1fn_ZXNjYWVfc3R1ZGVudHNfaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2NobnVQeXNFdHRQNzlrSGJQdGlqQS9zYW5kYm94L1Vuc1c4a0dQT3NlUTRBdjRnT0p0QU0taW1nLTJfMTc3MjExMDkyMTAwMF9uYTFmbl9aWE5qWVdWZmMzUjFaR1Z1ZEhOZmFHVnlidy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=prZzZsMOfDzDKjvLXHsokzIx-SuyUqD9sT5xcJMFSdmjC7b5APcPbR11iuZm~yNEjjPhiTa~SKlMM8LnMNthGf20zZUya~E8UL6Y-ZFPUNCaT6vbnFP30zC8fffQnerbU3makHgcDTxx9l0surS6~ZBCEyNkAHMkF21cGZNl~x1GZfUVDBPjWJV9XlJPrLUsVjlmzokbuT~RH2RzPj~Hr9Qa8SJXho4cjonasNKj3HqI~w1W9NQyLTzG4hNH5xsvtHdwazw4912RjPkksLuWTAdCub7GnqjuQXjhwrIJzP6xOCDMscy5ddWiQMyB-phW2-C4rFh6UvT9b0aD6PSXfw__"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative text-center">
          <FadeInSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-label text-yellow-300">Prêt à commencer ?</span>
              <div className="gold-line" />
            </div>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Rejoignez l'<span className="text-display-italic text-yellow-300">Excellence</span>
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Faites partie d'une communauté d'étudiants ambitieux et bénéficiez d'une formation 
              de qualité reconnue à l'international.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-semibold text-base flex items-center gap-2">
                S'inscrire Maintenant
                <FontAwesomeIcon icon={faArrowRight} className="w-[18px] h-[18px]" />
              </Link>
              <Link href="/formations" className="btn-outline-white px-8 py-4 rounded-xl font-semibold text-base">
                Voir les Formations
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
