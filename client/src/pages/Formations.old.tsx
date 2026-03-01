/*
 * Formations Page - ESCAE Bénin
 * Sections: Hero → Filières LMD → Programmes → Bourses → Admission
 */

import { useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBookOpen, faAward, faClock, faUsers, faCheckCircle, faArrowRight, faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';

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

const licenceFormations = [
  {
    code: 'L3',
    title: 'Licence en Gestion Commerciale',
    duration: '3 ans',
    description: 'Formation axée sur les techniques commerciales, le marketing et la gestion d\'entreprise.',
    modules: ['Marketing & Communication', 'Gestion Commerciale', 'Comptabilité Générale', 'Droit des Affaires', 'Économie d\'Entreprise'],
    debouches: ['Commercial', 'Chef de Vente', 'Responsable Marketing'],
    color: '#004AAD',
  },
  {
    code: 'L3',
    title: 'Licence en Comptabilité & Finance',
    duration: '3 ans',
    description: 'Formation spécialisée en comptabilité, finance d\'entreprise et audit.',
    modules: ['Comptabilité Approfondie', 'Finance d\'Entreprise', 'Audit & Contrôle', 'Fiscalité', 'Gestion de Trésorerie'],
    debouches: ['Comptable', 'Auditeur', 'Contrôleur de Gestion'],
    color: '#00A651',
  },
  {
    code: 'L3',
    title: 'Licence en Management des Organisations',
    duration: '3 ans',
    description: 'Formation en management, ressources humaines et organisation des entreprises.',
    modules: ['Management Stratégique', 'Ressources Humaines', 'Organisation', 'Leadership', 'Communication'],
    debouches: ['Manager', 'RH', 'Chef de Projet'],
    color: '#E31E24',
  },
];

const masterFormations = [
  {
    code: 'M2',
    title: 'Master en Management des Entreprises',
    duration: '2 ans',
    description: 'Formation avancée pour les futurs dirigeants d\'entreprise avec une approche internationale.',
    modules: ['Stratégie d\'Entreprise', 'Finance Avancée', 'Management International', 'Entrepreneuriat', 'Leadership'],
    debouches: ['Directeur', 'Manager Senior', 'Consultant'],
    color: '#004AAD',
    featured: true,
  },
  {
    code: 'M2',
    title: 'Master en Finance & Banque',
    duration: '2 ans',
    description: 'Spécialisation en finance des marchés, banque et gestion des risques.',
    modules: ['Finance de Marché', 'Banque & Crédit', 'Gestion des Risques', 'Analyse Financière', 'Droit Bancaire'],
    debouches: ['Analyste Financier', 'Banquier', 'Gestionnaire de Risques'],
    color: '#C9A227',
  },
  {
    code: 'M2',
    title: 'Master en Marketing Digital',
    duration: '2 ans',
    description: 'Formation aux outils et stratégies du marketing digital et de l\'e-commerce.',
    modules: ['Marketing Digital', 'E-commerce', 'Réseaux Sociaux', 'SEO/SEA', 'Data Analytics'],
    debouches: ['Digital Manager', 'E-commerçant', 'Community Manager'],
    color: '#00A651',
  },
];

const doctoratFormations = [
  {
    code: 'PhD',
    title: 'Doctorat en Sciences de Gestion',
    duration: '3-4 ans',
    description: 'Programme doctoral pour les chercheurs en sciences de gestion et management.',
    modules: ['Méthodologie de Recherche', 'Séminaires Avancés', 'Publication Scientifique', 'Thèse de Doctorat'],
    debouches: ['Enseignant-Chercheur', 'Expert Consultant', 'Directeur de Recherche'],
    color: '#001F5B',
  },
];

const continueFormations = [
  {
    title: 'MBA Executive',
    duration: '18 mois',
    description: 'Programme intensif pour les professionnels en activité souhaitant accélérer leur carrière.',
    color: '#004AAD',
    icon: '🎯',
  },
  {
    title: 'Formation en Comptabilité OHADA',
    duration: '6 mois',
    description: 'Maîtrise du système comptable OHADA pour les professionnels de la finance.',
    color: '#C9A227',
    icon: '📊',
  },
  {
    title: 'Certificat en Gestion de Projet',
    duration: '3 mois',
    description: 'Formation pratique aux méthodes de gestion de projet (Agile, PMI).',
    color: '#00A651',
    icon: '📋',
  },
  {
    title: 'Formation en Leadership',
    duration: '2 mois',
    description: 'Développement des compétences de leadership et de management d\'équipe.',
    color: '#E31E24',
    icon: '🚀',
  },
];

function FormationCard({ formation, index }: { formation: any; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <FadeIn delay={index * 0.1}>
      <div className={`bg-white rounded-2xl shadow-sm border overflow-hidden card-hover ${formation.featured ? 'border-[#C9A227] ring-2 ring-[#C9A227]/20' : 'border-gray-100'}`}>
        {formation.featured && (
          <div className="bg-gradient-to-r from-[#C9A227] to-[#F0C040] text-[#001F5B] text-xs font-bold text-center py-1.5 tracking-wider uppercase">
            ⭐ Programme Phare
          </div>
        )}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ backgroundColor: formation.color }}>
                {formation.code === 'L3' ? 'Licence' : formation.code === 'M2' ? 'Master' : formation.code === 'PhD' ? 'Doctorat' : formation.code}
              </span>
              <h3 className="font-semibold text-[#001F5B] text-lg mt-2 leading-tight">{formation.title}</h3>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm shrink-0 ml-2">
              <FontAwesomeIcon icon={faClock} className="w-[14px] h-[14px]" />
              <span>{formation.duration}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{formation.description}</p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium text-[#004AAD] hover:text-[#001F5B] transition-colors"
          >
            {expanded ? 'Masquer les détails' : 'Voir les modules'}
            {expanded ? <FontAwesomeIcon icon={faChevronUp} className="w-4 h-4" /> : <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />}
          </button>

          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-4"
            >
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Modules Principaux</h4>
                <div className="space-y-1.5">
                  {formation.modules.map((mod: string) => (
                    <div key={mod} className="flex items-center gap-2 text-sm text-gray-700">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-[14px] h-[14px] text-[#00A651] shrink-0" />
                      {mod}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Débouchés</h4>
                <div className="flex flex-wrap gap-2">
                  {formation.debouches.map((d: string) => (
                    <span key={d} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">{d}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <div className="mt-5 pt-4 border-t border-gray-100">
            <Link href="/contact" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-center block">
              S'inscrire à cette Formation
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Formations() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 escae-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/wchnuPysEttP79kHbPtijA/sandbox/UnsW8kGPOseQ4Av4gOJtAM-img-5_1772110922000_na1fn_ZXNjYWVfbGlicmFyeQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2NobnVQeXNFdHRQNzlrSGJQdGlqQS9zYW5kYm94L1Vuc1c4a0dQT3NlUTRBdjRnT0p0QU0taW1nLTVfMTc3MjExMDkyMjAwMF9uYTFmbl9aWE5qWVdWZmJHbGljbUZ5ZVEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OZHajd1EAZSB8C23yjTdf9RP9Zp2ED~O7RwzRS-XT6--41ZM-0dVjMTNsNdwxuMpxtinhOtO3-6cr3afJb6iOQk62LOTDkL-1E4BSst-jQRk7t~V~yWIS02shOM3p6OkBXIoQ7lFbX1IYsS6sre8u6IbR5HTP-ApNCbuR1dDpdAPF0FLRIa8qL9VD~rg4SZdhncRDESVV0i2mPD5v~vowgeQTH2Fkbnnbg2zlFqXhK1Uq6FQK1WlS2xFh90p-GeqvNKJTGNch3ZVUzlOuIz-eOOLSILxM08lYhA7YSKsSb0UWbZtijNmydieYe2HL8JQkeUFY6kOxJq0c8VfPS6SFw__"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F5B]/90 via-[#004AAD]/85 to-[#001F5B]/90" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="gold-line" />
              <span className="text-label text-yellow-300">📚 Système LMD Reconnu</span>
              <div className="gold-line" />
            </div>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Formations d'<span className="text-display-italic text-yellow-300">Excellence</span><br/>
              <span className="text-3xl sm:text-4xl lg:text-5xl">Qui Transforment Votre Avenir</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Du Bac+3 au Doctorat, découvrez nos programmes académiques conçus pour former 
              les leaders et innovateurs de demain dans un environnement d'apprentissage stimulant.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#licence" className="btn-gold px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 text-base">
                <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                Explorer nos Programmes
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 text-base transition-all">
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                Candidater Maintenant
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              {[
                { number: '10+', label: 'Programmes Certifiés' },
                { number: '95%', label: 'Taux d\'Insertion' },
                { number: '5000+', label: 'Diplômés Actifs' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-display text-3xl sm:text-4xl text-yellow-300 mb-1">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Parcours Académique - Overview Cards */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">Parcours Académique</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-3xl sm:text-4xl text-[#001F5B] mb-3">
                Trouvez <span className="text-display-italic text-[#004AAD]">Votre Voie</span> vers le Succès
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Du premier cycle au doctorat, nos programmes vous accompagnent à chaque étape de votre parcours académique et professionnel.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: faGraduationCap, label: 'Licence', count: '3 filières', color: '#004AAD', desc: 'Bac+3' },
              { icon: faBookOpen, label: 'Master', count: '3 filières', color: '#C9A227', desc: 'Bac+5' },
              { icon: faAward, label: 'Doctorat', count: '1 filière', color: '#001F5B', desc: 'Bac+8' },
              { icon: faUsers, label: 'Formation Continue', count: '4 programmes', color: '#00A651', desc: 'Certifications' },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover group">
                  <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${item.color}15` }}>
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="font-bold text-[#001F5B] text-base mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500 mb-2">{item.count}</div>
                  <div className="text-xs font-semibold px-3 py-1 rounded-full inline-block" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                    {item.desc}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Licence */}
      <section id="licence" className="py-20 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">🎓 Premier Cycle · Bac+3</span>
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Programmes de <span className="text-display-italic text-[#004AAD]">Licence</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
                Posez les <strong>fondations solides</strong> de votre carrière avec nos Licences professionnelles. 
                En 3 ans, maîtrisez les compétences essentielles qui ouvrent les portes du marché du travail 
                ou vous propulsent vers des études supérieures d'excellence.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenceFormations.map((f, i) => <FormationCard key={f.title} formation={f} index={i} />)}
          </div>
        </div>
      </section>

      {/* Master */}
      <section id="master" className="py-20 bg-white">
        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">⭐ Deuxième Cycle · Bac+5</span>
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Programmes de <span className="text-display-italic text-[#004AAD]">Master</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
                Accédez au <strong>niveau supérieur d'expertise</strong> et devenez un leader dans votre domaine. 
                Nos Masters combinent rigueur académique, vision stratégique internationale et immersion professionnelle 
                pour propulser votre carrière vers des postes à haute responsabilité.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {masterFormations.map((f, i) => <FormationCard key={f.title} formation={f} index={i} />)}
          </div>
        </div>
      </section>

      {/* Doctorat */}
      <section id="doctorat" className="py-20 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">🔬 Troisième Cycle · Bac+8</span>
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Programme de <span className="text-display-italic text-[#004AAD]">Doctorat</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
                Rejoignez l'<strong>élite de la recherche</strong> en sciences de gestion. Notre programme doctoral 
                vous accompagne dans la production de connaissances innovantes et vous prépare aux carrières 
                académiques et de conseil stratégique de haut niveau.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctoratFormations.map((f, i) => <FormationCard key={f.title} formation={f} index={i} />)}
            <FadeIn delay={0.1}>
              <div className="bg-[#001F5B] rounded-2xl p-8 flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl bg-yellow-300/20 flex items-center justify-center mb-5">
                  <FontAwesomeIcon icon={faAward} className="w-7 h-7" />
                </div>
                <h3 className="text-display text-3xl text-white mb-4">Recherche & Innovation</h3>
                <p className="text-blue-200 leading-relaxed mb-6">
                  Notre programme doctoral encourage la recherche appliquée et l'innovation dans les 
                  domaines du management, de la finance et du commerce international.
                </p>
                <Link href="/contact" className="btn-gold px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 w-fit">
                  Candidater <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Formation Continue */}
      <section id="continue" className="py-20 bg-white">
        <div className="container">
          <FadeIn>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-3">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">💼 Professionnels en Activité</span>
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B]">
                Formations <span className="text-display-italic text-[#004AAD]">Continues</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
                <strong>Accélérez votre évolution professionnelle</strong> avec nos programmes courts et intensifs. 
                Conçus pour les actifs, nos formations certifiantes s'adaptent à votre emploi du temps 
                et boostent immédiatement vos compétences et votre employabilité.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {continueFormations.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-gray-100 card-hover">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-semibold text-[#001F5B] mb-2">{f.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                    <FontAwesomeIcon icon={faClock} className="w-[13px] h-[13px]" />
                    <span>{f.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{f.description}</p>
                  <Link href="/contact" className="text-sm font-semibold text-[#004AAD] flex items-center gap-1 hover:gap-2 transition-all">
                    S'inscrire <FontAwesomeIcon icon={faArrowRight} className="w-[14px] h-[14px]" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bourses & Financement */}
      <section id="bourses" className="py-20 escae-gradient-hero relative overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-yellow-300">💰 Aide Financière</span>
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-white mb-6">
                Le Talent N'a Pas de <span className="text-display-italic text-yellow-300">Prix</span>
              </h2>
              <p className="text-blue-100 leading-relaxed mb-4 text-lg">
                Chez ESCAE Bénin, nous croyons fermement que <strong className="text-white">l'excellence académique 
                ne doit jamais être limitée par les ressources financières</strong>. C'est pourquoi nous avons créé 
                un programme de bourses ambitieux pour accompagner les étudiants méritants.
              </p>
              <p className="text-blue-100 leading-relaxed mb-8">
                Que vous soyez bachelier brillant, étudiant exemplaire ou issu d'une famille nombreuse, 
                nous avons une solution adaptée à votre situation.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <FontAwesomeIcon icon={faAward} className="w-5 h-5 text-yellow-300" />
                  Nos Dispositifs d'Aide
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Bourse d\'Excellence', desc: 'Jusqu\'à 50% de réduction pour les nouveaux bacheliers avec mention' },
                    { title: 'Réduction Famille', desc: '15% de réduction à partir du 2ème enfant inscrit' },
                    { title: 'Bourse au Mérite', desc: 'Récompense les meilleurs étudiants chaque semestre' },
                    { title: 'Paiement Flexible', desc: 'Échelonnement personnalisé des frais de scolarité' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-yellow-300 shrink-0 mt-1" />
                      <div>
                        <div className="text-white font-semibold text-sm">{item.title}</div>
                        <div className="text-blue-200 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 text-base">
                <FontAwesomeIcon icon={faAward} className="w-5 h-5" />
                Demander une Bourse
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/KNjVeMSYvWCWgJVj.jpg"
                  alt="Programme de Bourses ESCAE"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl -mt-8 mx-6 relative z-10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-display text-3xl text-[#004AAD] mb-1">40%</div>
                    <div className="text-xs text-gray-600">Étudiants Aidés</div>
                  </div>
                  <div>
                    <div className="text-display text-3xl text-[#C9A227] mb-1">150+</div>
                    <div className="text-xs text-gray-600">Bourses/An</div>
                  </div>
                  <div>
                    <div className="text-display text-3xl text-[#00A651] mb-1">100%</div>
                    <div className="text-xs text-gray-600">Mérite Reconnu</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Processus d'Admission */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227]">🎯 Simple & Rapide</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-4xl sm:text-5xl text-[#001F5B] mb-4">
                Rejoignez l'<span className="text-display-italic text-[#004AAD]">Excellence</span> en 4 Étapes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Notre processus d'admission est conçu pour être <strong>transparent et accessible</strong>. 
                Nous vous accompagnons à chaque étape pour faciliter votre intégration.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Choisir sa Formation', desc: 'Explorez nos programmes et trouvez celui qui correspond parfaitement à vos aspirations professionnelles.', icon: faBookOpen },
              { step: '02', title: 'Constituer le Dossier', desc: 'Rassemblez vos documents : diplômes, relevés de notes, CV actualisé et lettre de motivation.', icon: faAward },
              { step: '03', title: 'Soumettre la Candidature', desc: 'Déposez votre dossier complet en ligne via notre portail ou directement dans nos bureaux.', icon: faArrowRight },
              { step: '04', title: 'Entretien & Inscription', desc: 'Participez à l\'entretien d\'admission et finalisez votre inscription pour rejoindre l\'excellence.', icon: faGraduationCap },
            ].map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center card-hover relative group">
                  <div className="section-number" style={{ fontSize: '5rem', top: '-0.5rem', right: '0.5rem' }}>{step.step}</div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#004AAD] to-[#001F5B] flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={step.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#001F5B] mb-2 text-base">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-gradient-to-br from-[#004AAD] to-[#001F5B] rounded-3xl p-8 sm:p-10 text-center mt-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-yellow-300/20 flex items-center justify-center mx-auto mb-5">
                  <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8 text-yellow-300" />
                </div>
                <h3 className="text-display text-3xl sm:text-4xl text-white mb-4">
                  Votre <span className="text-display-italic text-yellow-300">Avenir</span> Commence Ici
                </h3>
                <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
                  Prêt à transformer vos ambitions en réalité ? Rejoignez une communauté de 
                  <strong className="text-white"> 5000+ diplômés</strong> qui façonnent l'avenir de l'Afrique.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="btn-gold px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 text-base">
                    <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
                    Démarrer mon Inscription
                  </Link>
                  <a href="tel:+22997123456" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 text-base transition-all">
                    📞 Nous Appeler
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
