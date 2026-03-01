/*
 * Formations Page - ESCAE Bénin (Nouvelle version basée sur maquette)
 * Design: Système LMD avec grilles de cartes professionnelles
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, faAward, faBrain, faDownload, faPlayCircle,
  faArrowRight, faBriefcase, faTruck, faGavel, faCheck,
  faCheckCircle, faFileEdit, faClipboardCheck, faMessage,
  faFacebook, faTwitter, faMapMarkerAlt, faEnvelope, faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function Formations() {
  return (
    <main className="flex-grow flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-8">
        <div 
          className="relative overflow-hidden rounded-3xl min-h-[480px] flex flex-col items-center justify-center p-8 text-center bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(15, 24, 35, 0.6) 0%, rgba(15, 24, 35, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBV14aaDz5euMNGUzIO61p8JkHIAQ7a4dOketELozlRPw1KGDemZZjM2GbOqNRXbUHEbT5Y6LXKT-uyMjhrertTpwJY9I6x5WSEGk1NKjWJYLG547gCVo9TVG1xiw9mIBjF5BGTcB0X0wvigfH3aKsRVWnDy8DBac1auzehhcXH33wCa21-d1BqJJM9sGbzUZGhm9QLcr68l5J9yzB90pBU7LqRasR6qN2LImvwuRapwfi03AnSfFePIaHzOdjal-Mlz1H2lQpF_zE')` 
          }}
        >
          <div className="relative z-10 max-w-3xl flex flex-col gap-6 items-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Nos Formations - Système LMD
            </h1>
            <p className="text-slate-200 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Découvrez nos programmes d'excellence académique alignés sur les standards internationaux : Licence, Master et Doctorat.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <button className="h-12 px-8 rounded-xl bg-[#004bad] hover:bg-[#004bad]/90 text-white font-bold text-base transition-all shadow-lg shadow-[#004bad]/25 flex items-center gap-2">
                <FontAwesomeIcon icon={faDownload} />
                Télécharger la brochure
              </button>
              <button className="h-12 px-8 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-base transition-all flex items-center gap-2">
                <FontAwesomeIcon icon={faPlayCircle} />
                Voir la vidéo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-12">
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-[#0c131d] dark:text-white text-3xl font-bold leading-tight tracking-tight mb-4">Parcours Académique</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">Un cursus complet structuré en trois grades pour vous accompagner vers l'excellence professionnelle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Licence Card */}
          <div className="group relative flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2196F3] rounded-t-2xl" />
            <div className="size-14 rounded-full bg-[#2196F3]/10 flex items-center justify-center text-[#2196F3] mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faGraduationCap} className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#0c131d] dark:text-white mb-2">Licence (Bac+3)</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">Formation fondamentale et professionnalisante sur 6 semestres. Acquisition des bases théoriques et pratiques.</p>
            <a className="inline-flex items-center text-[#2196F3] font-bold hover:gap-2 transition-all" href="#licence">
              Découvrir les filières <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-1" />
            </a>
          </div>
          {/* Master Card */}
          <div className="group relative flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4CAF50] rounded-t-2xl" />
            <div className="size-14 rounded-full bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faAward} className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#0c131d] dark:text-white mb-2">Master (Bac+5)</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">Spécialisation approfondie sur 4 semestres. Expertise métier et préparation aux responsabilités managériales.</p>
            <a className="inline-flex items-center text-[#4CAF50] font-bold hover:gap-2 transition-all" href="#master">
              Découvrir les masters <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-1" />
            </a>
          </div>
          {/* Doctorat Card */}
          <div className="group relative flex flex-col p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#E91E63] rounded-t-2xl" />
            <div className="size-14 rounded-full bg-[#E91E63]/10 flex items-center justify-center text-[#E91E63] mb-6 group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faBrain} className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#0c131d] dark:text-white mb-2">Doctorat (Bac+8)</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">Recherche avancée et contribution scientifique sur 3 ans. Développement de nouvelles connaissances.</p>
            <a className="inline-flex items-center text-[#E91E63] font-bold hover:gap-2 transition-all" href="#doctorat">
              École doctorale <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Course Grids - Licence */}
      <section className="w-full bg-white dark:bg-slate-900 py-20 border-t border-slate-100 dark:border-slate-800" id="licence">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[#2196F3] font-bold tracking-wider uppercase text-sm mb-2 block">Premier Cycle</span>
              <h2 className="text-[#0c131d] dark:text-white text-3xl font-bold leading-tight">Nos Licences Professionnelles</h2>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium transition-colors">Gestion</button>
              <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium transition-colors">Informatique</button>
              <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium transition-colors">Droit</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-[#2196F3]/50 transition-colors">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASYx3Hpd4IwHfWQae37vgFdwj_MVB3fwjlFoECsqnFI8Co8LvJcaMHoB09yTplqRZ3NJ874CQAIco4bgWG2OeSHSdXfUvU45XPK8n88oDpOLtN6cRkw6Uenr8avthV7qwXWy2ZzZdQjwlh0KldoDZmn5KUCGLZEqynuRJHvBzzghE2sqK_YUNqf_7gARgpGQmEl-gSNZoXTvQEFzr2vQlfutdd7igQuZn8IINjLRwaCQTvdWHnjgxbrh1SxyjzR0tiHpqtXwGDDxU')` }}
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-slate-700 dark:text-slate-300">6 Semestres</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mb-2">Marketing et Action Commerciale</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Maîtrisez les techniques de vente, de communication et de stratégie digitale.</p>
                <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-[#2196F3] hover:border-[#2196F3] hover:text-white transition-all text-sm font-bold flex items-center justify-center gap-2 group">
                  Voir le programme <FontAwesomeIcon icon={faArrowRight} className="text-lg group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-[#2196F3]/50 transition-colors">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq1wfytbr8yYAmu79NnuKWfaKxKi3fe8sFBJ7mWClPRYSi-YRuHtd5tZ-HdqpTZ1bt-jkIRU588LU0P4JBsWzj7KHkKf2nvz_3TrIQVUXOb5oXNCpDmEPsnlectR38RWUHYGZL-_zDnsV_WKAdLCFh1RovHFEjgKRKKryj5TfLBWTB6AcG9vj2c2aE4NWQs2zYDs_25gmbCjkZFIMZplXGqFdySev2gnQY3OxaBAbny7Zh_dMnNDwCgkKTCf2GdNYEIdNbZ7VWjJE')` }}
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-slate-700 dark:text-slate-300">6 Semestres</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mb-2">Génie Logiciel</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Conception, développement et maintenance de systèmes informatiques complexes.</p>
                <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-[#2196F3] hover:border-[#2196F3] hover:text-white transition-all text-sm font-bold flex items-center justify-center gap-2 group">
                  Voir le programme <FontAwesomeIcon icon={faArrowRight} className="text-lg group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col bg-slate-50 dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-[#2196F3]/50 transition-colors">
              <div className="h-40 bg-slate-200 dark:bg-slate-700 relative group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAs04vawb1eEZCO11fhc5pBitdjJnM21Tz7uD4Tq2xWxs8UzNxsAMb7uDGCwilN-Rf0s3N8_oVHbRGt-JC5ft8xRyUiVHqZg0CThFcCGI-bwxAXVouVUPBTUg4E6bZMPhV8guMdxvlG-vfPmqDnXhvqp6sS0PBpQnScAXRgRpNpvuTLCBeve6lLR_ymXaqB5epaUD8mnIlPRbe4Xq_xuN_gAd7y9Z9m5w0OuVk7sVcNstpmQDEljaVrsiQKfNBwh9Yhq_soZGE9RTU')` }}
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-slate-700 dark:text-slate-300">6 Semestres</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mb-2">Comptabilité Contrôle et Audit</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Expertise financière, audit des organisations et contrôle de gestion.</p>
                <button className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-[#2196F3] hover:border-[#2196F3] hover:text-white transition-all text-sm font-bold flex items-center justify-center gap-2 group">
                  Voir le programme <FontAwesomeIcon icon={faArrowRight} className="text-lg group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Course Grids - Master */}
      <section className="w-full bg-slate-50 dark:bg-slate-800/30 py-20 border-t border-slate-200 dark:border-slate-800" id="master">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[#4CAF50] font-bold tracking-wider uppercase text-sm mb-2 block">Deuxième Cycle</span>
              <h2 className="text-[#0c131d] dark:text-white text-3xl font-bold leading-tight">Nos Masters Spécialisés</h2>
            </div>
            <a className="text-[#4CAF50] font-bold text-sm hover:underline" href="#">Voir tous les masters</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-[#4CAF50]/10 rounded-lg text-[#4CAF50]">
                    <FontAwesomeIcon icon={faBriefcase} className="text-xl" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">MBA</span>
                </div>
                <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mb-2">Administration des Affaires</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Développez une vision stratégique globale pour diriger des entreprises internationales.</p>
                <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
                  <button className="text-[#4CAF50] font-bold text-sm flex items-center hover:gap-2 transition-all">
                    Détails du cursus <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-1" />
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-[#4CAF50]/10 rounded-lg text-[#4CAF50]">
                    <FontAwesomeIcon icon={faTruck} className="text-xl" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">MSc</span>
                </div>
                <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mb-2">Logistique et Transport</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Management de la supply chain, logistique internationale et transport multimodal.</p>
                <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
                  <button className="text-[#4CAF50] font-bold text-sm flex items-center hover:gap-2 transition-all">
                    Détails du cursus <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-1" />
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-[#4CAF50]/10 rounded-lg text-[#4CAF50]">
                    <FontAwesomeIcon icon={faGavel} className="text-xl" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">MSc</span>
                </div>
                <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mb-2">Droit des Affaires</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Juriste d'entreprise, contentieux des affaires et fiscalité internationale.</p>
                <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
                  <button className="text-[#4CAF50] font-bold text-sm flex items-center hover:gap-2 transition-all">
                    Détails du cursus <FontAwesomeIcon icon={faArrowRight} className="text-lg ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctorat Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-20 border-t border-slate-100 dark:border-slate-800" id="doctorat">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-[#E91E63] font-bold tracking-wider uppercase text-sm mb-2 block">Troisième Cycle</span>
              <h2 className="text-[#0c131d] dark:text-white text-3xl sm:text-4xl font-bold leading-tight mb-6">L'École Doctorale</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Le doctorat représente le plus haut grade universitaire. Nos doctorants bénéficient d'un encadrement de qualité au sein de nos laboratoires de recherche partenaires.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-5 rounded-full bg-[#E91E63]/20 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-[#E91E63] text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0c131d] dark:text-white">Sciences de Gestion</h4>
                    <p className="text-sm text-slate-500">Thèses en finance, marketing, RH et stratégie.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 size-5 rounded-full bg-[#E91E63]/20 flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-[#E91E63] text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0c131d] dark:text-white">Sciences Économiques</h4>
                    <p className="text-sm text-slate-500">Économie du développement, macroéconomie.</p>
                  </div>
                </div>
              </div>
              <button className="px-6 py-3 rounded-xl bg-[#E91E63] text-white font-bold text-sm shadow-lg shadow-[#E91E63]/25 hover:bg-[#E91E63]/90 transition-colors">
                Contacter le directeur de recherche
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#E91E63]/10 rounded-3xl -z-10 rotate-3" />
              <img 
                alt="Doctoral student defending thesis" 
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz6g75CUPvVVn0TBlPZedsAsN6ndP3EWcfaBapufj2Eza9qfCM1Ul6h25ekA52HooPv4J2J00VWI0Z6wwWfdVaWmDK4U-aCrYxk3mSfivLq7COyh_aOHr5UTnTIKN5wGw8oq8zRBmmdT5UJZgYKGe3s79di2oZEoyuASpls9iP8U3gOtq_zvdJPPxlplb1Flom_lbXzDQBYih4ZTd0MU0Unsx_50PNK60_SB7OrHgUrot8P3UQHVsQpq4E8FgbRS1uSWQV0pdDVxE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="w-full bg-[#0c131d] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Bourses & Financement</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                L'excellence ne devrait pas avoir de barrière financière. ESCAE Bénin propose plusieurs programmes de bourses pour soutenir les étudiants méritants.
              </p>
              <button className="h-12 px-8 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-[#0c131d] font-bold text-base transition-all shadow-lg shadow-yellow-500/20">
                Vérifier mon éligibilité
              </button>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-yellow-500">Critères d'attribution</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                    <span className="font-medium">Excellence académique (Moyenne &gt; 14/20)</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                    <span className="font-medium">Engagement social et communautaire</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                    <span className="font-medium">Situation sociale (sur dossier)</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-500" />
                    <span className="font-medium">Lettre de motivation et projet professionnel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="w-full py-24 bg-[#f5f7f8] dark:bg-[#0f1823]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[#0c131d] dark:text-white text-3xl font-bold leading-tight mb-4">Processus d'Admission</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Rejoignez ESCAE Bénin en 4 étapes simples. Notre équipe vous accompagne à chaque moment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="mb-4">
                <span className="text-8xl font-black text-slate-200 dark:text-slate-800 group-hover:text-[#004bad]/20 transition-colors select-none">1</span>
              </div>
              <div className="absolute top-12 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-600">
                <FontAwesomeIcon icon={faFileEdit} className="text-[#004bad] text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mt-4 mb-2">Dossier en ligne</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Remplissez le formulaire de pré-inscription et téléversez vos documents.</p>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="hidden lg:block absolute top-16 left-[-50%] w-full h-[2px] bg-slate-200 dark:bg-slate-800 -z-10" />
              <div className="mb-4">
                <span className="text-8xl font-black text-slate-200 dark:text-slate-800 group-hover:text-[#004bad]/20 transition-colors select-none">2</span>
              </div>
              <div className="absolute top-12 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-600">
                <FontAwesomeIcon icon={faClipboardCheck} className="text-[#004bad] text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mt-4 mb-2">Étude de dossier</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">La commission pédagogique analyse votre parcours académique.</p>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="hidden lg:block absolute top-16 left-[-50%] w-full h-[2px] bg-slate-200 dark:bg-slate-800 -z-10" />
              <div className="mb-4">
                <span className="text-8xl font-black text-slate-200 dark:text-slate-800 group-hover:text-[#004bad]/20 transition-colors select-none">3</span>
              </div>
              <div className="absolute top-12 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-600">
                <FontAwesomeIcon icon={faMessage} className="text-[#004bad] text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mt-4 mb-2">Entretien</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Entretien de motivation avec un responsable pédagogique.</p>
            </div>
            {/* Step 4 */}
            <div className="relative flex flex-col items-center text-center group">
              <div className="hidden lg:block absolute top-16 left-[-50%] w-full h-[2px] bg-slate-200 dark:bg-slate-800 -z-10" />
              <div className="mb-4">
                <span className="text-8xl font-black text-slate-200 dark:text-slate-800 group-hover:text-[#004bad]/20 transition-colors select-none">4</span>
              </div>
              <div className="absolute top-12 bg-white dark:bg-slate-700 p-3 rounded-full shadow-lg border border-slate-100 dark:border-slate-600">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#004bad] text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-[#0c131d] dark:text-white mt-4 mb-2">Inscription</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Finalisation administrative et paiement des frais de scolarité.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button className="h-12 px-8 rounded-xl bg-[#004bad] hover:bg-[#004bad]/90 text-white font-bold text-base transition-all shadow-lg shadow-[#004bad]/25">
              Commencer mon inscription
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
