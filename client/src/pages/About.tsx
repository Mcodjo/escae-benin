/*
 * About Page - ESCAE Bénin (Nouvelle version basée sur maquette)
 * Design: Épuré et professionnel avec timeline verticale
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, faEye, faFlag, faCertificate, 
  faBrain, faUsers, faFacebook, faTwitter 
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <main className="w-full">
      {/* Section 1: Hero */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK42uwWeAVpK-qG-4gfF6WHU1Eb5-GPFZhFKsQFEuKNGpOeJr6Jn8TJJiTTwtdMC53iaZcXf10_d-Rtxh63s-mQ121tQudEm3xD38hyXMxzG5DKRltTUl6gDv99tElEv-s6qWIsslXH5zpnN9AHmfyG1nR5EHtlzJJ9D-Zj6BCcVeBQ4FnF_ON5vBj3S2HLf0OXTEILD7bEfHAJzFhpaFQmUm0YcSWhQreiXzrtpBLWzEtqiS823HRTGabTCDhueaSllKH3Rb2_M0")` 
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#004bad]/90 to-slate-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            L'Excellence Académique <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Au Cœur de l'Afrique</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed mb-10" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Depuis 2012, l'ESCAE Bénin façonne les leaders de demain à travers une pédagogie innovante et une ouverture sur le monde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#D4AF37] hover:bg-yellow-500 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-yellow-500/20 transform hover:-translate-y-1">
              Découvrir nos campus
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Télécharger la brochure
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: History & Founding Badge */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#004bad]/20 to-[#D4AF37]/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img 
                alt="Bâtiment principal de l'université" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Pds9L7tooS47DkUICXLWvwIIMV_cT_mhhH3CTVfJkCn0h82Jrwr3yAkJ6VD2YqHoKK-A7-kAsctD5MdF1ATymj9Iw4eeKSm5Yk8Y_1pHCNeQrj4bu0qKdeq6PlvexlprHIwspAjUPaUtvY2sQBkudoELP1FEorlCFDSyJ9YjAND04rN9wVyWnRFwO6w6W0psIMAnSxsCfwMtw-q71XK6H7xzOd_BkJfpNGgsOHEayxyxrxySTb-scVUeSJBCg5Fzm69f-HDrGA0"
              />
              {/* Badge */}
              <div className="absolute bottom-6 right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-[#D4AF37] flex flex-col items-center">
                <span className="text-4xl font-serif font-bold text-[#004bad] dark:text-white">2012</span>
                <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Année de Fondation</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm">Notre Histoire</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Une décennie d'impact et d'innovation éducative
            </h3>
            <div className="w-20 h-1 bg-[#004bad] rounded-full" />
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              L'ESCAE Bénin est née d'une vision audacieuse : offrir au Bénin et à la sous-région une institution universitaire aux standards internationaux. Ce qui a commencé comme un projet modeste en 2012 est devenu aujourd'hui un pilier de l'enseignement supérieur privé.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              À travers les défis et les réussites, notre engagement est resté inébranlable : fournir une éducation de qualité qui allie théorie rigoureuse et pratique professionnelle.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div>
                <span className="block text-3xl font-bold text-[#004bad] dark:text-blue-400">5k+</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Diplômés</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-[#004bad] dark:text-blue-400">12+</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Partenariats</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-[#004bad] dark:text-blue-400">95%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Insertion Pro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision */}
      <section className="py-20 px-4 md:px-8 bg-[#f8fafc] dark:bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Notre Raison d'Être</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Ce qui guide nos actions quotidiennes et définit notre horizon futur.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-[#004bad] p-10 lg:p-14 rounded-3xl text-white relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition duration-500">
                <FontAwesomeIcon icon={faEye} className="text-[180px]" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
                  <FontAwesomeIcon icon={faLightbulb} className="text-3xl" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Notre Vision</h3>
                <p className="text-blue-100 text-lg leading-relaxed opacity-90">
                  Être reconnue comme l'université de référence en Afrique de l'Ouest pour la formation de leaders éthiques, compétents et innovants, capables de relever les défis complexes du développement durable.
                </p>
              </div>
            </div>
            {/* Mission Card */}
            <div className="bg-slate-900 dark:bg-slate-800 p-10 lg:p-14 rounded-3xl text-white relative overflow-hidden group shadow-xl border border-slate-700">
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition duration-500">
                <FontAwesomeIcon icon={faFlag} className="text-[180px]" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#D4AF37]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 text-[#D4AF37]">
                  <FontAwesomeIcon icon={faFlag} className="text-3xl" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-[#D4AF37]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Notre Mission</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Dispenser un enseignement supérieur de qualité, promouvoir la recherche scientifique appliquée et favoriser l'entrepreneuriat, dans un environnement inclusif qui valorise l'excellence et l'intégrité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Vertical Timeline */}
      <section className="py-24 px-4 md:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Jalons Historiques</h2>
            <p className="text-slate-600 dark:text-slate-400">Les moments clés qui ont forgé l'identité de l'ESCAE Bénin.</p>
          </div>
          <div className="relative">
            {/* Vertical Line with Gradient */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#004bad] via-blue-500 to-[#D4AF37] transform -translate-x-1/2" />
            
            {/* 2012 Item */}
            <div className="relative flex items-center justify-between mb-16 md:flex-row flex-col-reverse group">
              <div className="md:w-5/12 w-full p-4 text-right pr-8 md:pr-0 md:text-right text-left pl-12 md:pl-4">
                <h3 className="text-2xl font-serif font-bold text-[#004bad] dark:text-blue-400">Octobre 2012</h3>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mt-2">Création de l'ESCAE</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Ouverture officielle des portes avec la première cohorte de 50 étudiants en gestion.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#004bad] border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10 shadow-lg" />
              <div className="md:w-5/12 w-full p-4 pl-12 md:pl-8" />
            </div>
            
            {/* 2015 Item */}
            <div className="relative flex items-center justify-between mb-16 md:flex-row flex-col group">
              <div className="md:w-5/12 w-full p-4 text-right pr-8 md:pr-0 hidden md:block" />
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10 shadow-lg" />
              <div className="md:w-5/12 w-full p-4 text-left pl-12 md:pl-8">
                <h3 className="text-2xl font-serif font-bold text-[#004bad] dark:text-blue-400">Juin 2015</h3>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mt-2">Accréditation Nationale</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Reconnaissance officielle de tous les diplômes de Licence et Master par l'État Béninois.</p>
              </div>
            </div>
            
            {/* 2019 Item */}
            <div className="relative flex items-center justify-between mb-16 md:flex-row flex-col-reverse group">
              <div className="md:w-5/12 w-full p-4 text-right pr-8 md:pr-0 md:text-right text-left pl-12 md:pl-4">
                <h3 className="text-2xl font-serif font-bold text-[#004bad] dark:text-blue-400">Septembre 2019</h3>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mt-2">Nouveau Campus</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Inauguration du campus principal moderne équipé de laboratoires informatiques de pointe.</p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10 shadow-lg" />
              <div className="md:w-5/12 w-full p-4 pl-12 md:pl-8" />
            </div>
            
            {/* 2024 Item */}
            <div className="relative flex items-center justify-between md:flex-row flex-col group">
              <div className="md:w-5/12 w-full p-4 text-right pr-8 md:pr-0 hidden md:block" />
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#D4AF37] border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10 shadow-lg animate-pulse" />
              <div className="md:w-5/12 w-full p-4 text-left pl-12 md:pl-8">
                <h3 className="text-2xl font-serif font-bold text-[#D4AF37]">2024</h3>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mt-2">Expansion Internationale</h4>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Lancement des programmes de double diplomation avec des partenaires en Europe et en Asie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Values */}
      <section className="py-24 px-4 md:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3">Nos Piliers</h2>
              <h3 className="text-4xl font-serif font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Les Valeurs qui nous Définissent</h3>
            </div>
            <a className="text-[#004bad] font-bold flex items-center hover:underline" href="#">
              Télécharger la charte éthique
              <FontAwesomeIcon icon={faFlag} className="ml-2 text-sm" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#004bad] transition-colors duration-300">
                <FontAwesomeIcon icon={faCertificate} className="text-[#004bad] dark:text-blue-400 text-3xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Intégrité</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Nous cultivons l'honnêteté intellectuelle et la transparence dans toutes nos actions académiques et administratives.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#004bad] transition-colors duration-300">
                <FontAwesomeIcon icon={faBrain} className="text-[#004bad] dark:text-blue-400 text-3xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Innovation</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Nous encourageons la créativité et l'adoption de nouvelles technologies pour rester à la pointe de la pédagogie.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#004bad] transition-colors duration-300">
                <FontAwesomeIcon icon={faUsers} className="text-[#004bad] dark:text-blue-400 text-3xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Inclusion</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Nous croyons en la force de la diversité et créons un environnement où chaque étudiant peut s'épanouir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
