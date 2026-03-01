import { Link, useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSchool, 
  faCalendarDays, 
  faLocationDot, 
  faCheckCircle, 
  faCircleArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function ArticleDetail() {
  const [, params] = useRoute('/actualites/:id');
  
  // In a real app, you would fetch the article by ID.
  // We'll mimic the AFRA 2024 article from the maquette.
  const article = {
    category: 'Événement',
    title: 'AFRIA 2024: Grande Conférence Internationale',
    date: '25 Mars 2024',
    location: 'Campus Principal, Porto-Novo',
    quote: "Une rencontre majeure pour l'avenir de l'éducation en Afrique. AFRIA 2024 promet de redéfinir les standards de l'enseignement supérieur grâce à l'innovation technologique et la coopération internationale.",
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe_F5UjACRSjB9Qd7ufNgJX2E7N0vhUWBdE9dnUh-squ3dwbHydGEi4UTOZSy_XQMPdjZOmTOArK5nEhB-bLf1YjE6wGFGz1FiOjfBfjYBO9Eb2KXHBUuKjyorJrbXjrz6thjaYwMJ6iC9YPcKQ74_6yGvoVC_oWS3qgoHIJgTDba_k_Ze1hWk5OAzA14aujQvBrR_G5tkCPhQOOiDmvvupBGB_23709DHeFhrmbB5EffkJ3UplywluhsDagxiI7qQc5j-zPkJ74A',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3BTABN2fo72ttH5P4ava8vkjtnRj1bk6B3VkE9DiMBdAxqJ2ZK4tGS67-bqQ2lqcOv2cqkPi2bwZjlwk-3ut5HCdXW84grYSj4yrefC4jup9o6s00j2frU6QJyHWYDsa3M6Je11uhrcA9NnQcqECFuDYu1ffLRZ93w3IQpMBKOt8AzKwYRB-GotB_fIOWoRtFXMcmhyipT61_sW58oTfyWJz3X0L1_KxMeG6MTuTUdqTTGhmFIUd0SXj4cOaTEuGBtwAJ7d3t4N8',
    tags: ['Education', 'Innovation', 'Afrique', 'Conférence']
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0f1823] min-h-screen text-slate-900 dark:text-slate-100 font-display">
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url("${article.heroImage}")` }}
        ></div>
        <div className="absolute inset-0 bg-[#001F5B]/80 dark:bg-[#001030]/90"></div>
        <div className="relative z-10 w-full max-w-4xl px-4 md:px-10 flex flex-col gap-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-serif"
          >
            {article.title}
          </motion.h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-200 text-sm md:text-base font-medium mt-2">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarDays} className="text-[#C6A87C]" />
              <span>{article.date}</span>
            </div>
            <span className="hidden md:inline text-slate-500">•</span>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#C6A87C]" />
              <span>{article.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <main className="flex-1 -mt-20 relative z-20 pb-20 px-4 md:px-10">
        <div className="max-w-[800px] mx-auto">
          
          {/* Main Featured Image */}
          <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-8 relative group">
            <img 
              src={article.featuredImage} 
              alt="Article content" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          {/* Editorial Content Card */}
          <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,75,173,0.08)] p-8 md:p-12 lg:p-14">
            
            {/* Introduction */}
            <div className="mb-10 border-l-4 border-[#C6A87C] pl-6 py-1">
              <p className="font-serif text-xl md:text-2xl text-slate-700 dark:text-slate-200 italic leading-relaxed">
                "{article.quote}"
              </p>
            </div>

            {/* Body Text */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none font-display text-slate-600 dark:text-slate-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Introduction</h3>
              <p className="leading-relaxed mb-6">
                L'École Supérieure de Commerce et d'Administration des Entreprises (ESCAE) est fière d'annoncer la tenue de la conférence annuelle AFRIA. Cette édition 2024 rassemblera des experts, des chercheurs et des décideurs politiques de tout le continent pour discuter des enjeux cruciaux du développement durable et de l'économie numérique.
              </p>
              <p className="leading-relaxed mb-8">
                Dans un contexte mondial en perpétuelle mutation, il est impératif pour les institutions africaines de se positionner comme des leaders de pensée. AFRIA 2024 n'est pas seulement une conférence, c'est un incubateur d'idées novatrices qui façonneront les politiques éducatives de demain.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Programme de la journée</h3>
              <p className="leading-relaxed mb-4">
                La journée sera rythmée par plusieurs sessions plénières et ateliers interactifs. Voici les temps forts attendus :
              </p>
              <ul className="space-y-4 mb-8 list-none pl-0">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1" />
                  <span><strong className="text-slate-900 dark:text-white">09:00 - Cérémonie d'ouverture :</strong> Discours du Directeur Général et des partenaires stratégiques.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1" />
                  <span><strong className="text-slate-900 dark:text-white">10:30 - Panel Digitalisation :</strong> "L'IA au service de l'éducation en Afrique", modéré par Dr. Kaboré.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1" />
                  <span><strong className="text-slate-900 dark:text-white">14:00 - Ateliers Pratiques :</strong> Sessions de networking et partage d'expérience entre alumni et étudiants.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Inscription et Participation</h3>
              <p className="leading-relaxed mb-6">
                Les places étant limitées, nous encourageons vivement les intéressés à s'inscrire avant le 15 mars. Cet événement est ouvert aux étudiants, aux professionnels du secteur et aux partenaires académiques.
              </p>

              {/* CTA Box */}
              <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center border border-primary/20 shadow-sm mt-8">
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-primary dark:text-[#D4AF37] mb-1">Rejoignez-nous</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Ne manquez pas cette opportunité unique de connexion.</p>
                </div>
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg shadow-primary/20 w-full sm:w-auto text-sm">
                  S'inscrire maintenant
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* Navigation Footer */}
          <div className="mt-12 flex justify-center">
            <Link 
              href="/actualites" 
              className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-md"
            >
              <FontAwesomeIcon icon={faCircleArrowLeft} className="text-lg transition-transform group-hover:-translate-x-1" />
              Retour aux actualités
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
