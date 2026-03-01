import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faLocationDot, 
  faArrowRight, 
  faSchool, 
  faUsers, 
  faMicroscope,
  faWifi,
  faBookOpen,
  faChalkboardUser,
  faMugHot,
  faFlaskVial,
  faTableTennisPaddleBall,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

const campusInfo = [
  {
    id: 'cotonou',
    name: 'Campus Cotonou',
    type: 'Site Principal',
    description: 'Situé au cœur de la capitale économique, offrant un accès direct aux partenaires industriels et une vie étudiante trépidante.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMsJszUx_ZOOndIrrPsMvffjkGf7PG8Is6KXHsMBG8l6aJrZRxZfKJAGpL-NjVcQMG_Ge85SsM2hTTuh184H3vf0T6UPW8U-5shJrYCKW_SZNA0kSn4GmM11ie9cDgPbc4-Ux08rbDGz9VFNjp7mEEJku53BSKHBF5YVoUarLG4P1MmNGEq1WXG3XeVRSLPrSPIAFjHZG0t3MfTOpzZJ7x4wrdbCim8ZvPoPDlkB2NxEyYmKKDBMn25-TRXSzjjPK-1WoydLk2lT8E',
    stats: [
      { label: 'Capacité', value: '1500+ Étudiants' },
      { label: 'Laboratoires', value: '12 Unités' }
    ]
  },
  {
    id: 'porto-novo',
    name: 'Campus Porto-Novo',
    type: 'Annexe Formation Continue',
    description: 'Situé dans la capitale politique, ce hub spécialisé se concentre sur la formation exécutive et le développement professionnel.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKe3NutFj1FNNTb1hu4vIaTTMozWEQK5oTkCkBb3frXqmJcYjXeLt4bj_b3mJ8nVXoG3emgGUUNR2rreb5Mpx9yS87KAFTI0cBRqWVvf2ZQVuPCAxilekDkbGR-_S78p4Rd4XTaF-Wr8WFlF_qBSQji9-BNM9Dru10GAATQjvEntwqUgjPmx6e06XIgoklYj6mJZ1CRvDiGpQT9F7vT6FE5kOd0Nb4qFMIolunzS6GstMljJWUt_LnTApCmvZgUhmeuon-teU0uSkA',
    stats: [
      { label: 'Capacité', value: '450 Étudiants' },
      { label: 'Spécialité', value: 'Tech & Admin' }
    ]
  }
];

const infrastructures = [
  { icon: faBookOpen, title: 'Bibliothèque', desc: 'Ressources illimitées', color: 'bg-blue-100 text-blue-600' },
  { icon: faWifi, title: 'Wi-Fi Campus', desc: 'Haut débit 24/7', color: 'bg-emerald-100 text-emerald-600' },
  { icon: faChalkboardUser, title: 'Amphithéâtres', desc: 'Salles multimédia', color: 'bg-amber-100 text-amber-600' },
  { icon: faMugHot, title: 'Espace Détente', desc: 'Lounge convivial', color: 'bg-rose-100 text-rose-600' },
  { icon: faFlaskVial, title: 'Laboratoires', desc: 'Recherche avancée', color: 'bg-indigo-100 text-indigo-600' },
  { icon: faTableTennisPaddleBall, title: 'Sportif', desc: 'Terrains multisports', color: 'bg-teal-100 text-teal-600' }
];

export default function Campus() {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#0f1823] min-h-screen font-display">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#001F5B] to-[#004AAD]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMsJszUx_ZOOndIrrPsMvffjkGf7PG8Is6KXHsMBG8l6aJrZRxZfKJAGpL-NjVcQMG_Ge85SsM2hTTuh184H3vf0T6UPW8U-5shJrYCKW_SZNA0kSn4GmM11ie9cDgPbc4-Ux08rbDGz9VFNjp7mEEJku53BSKHBF5YVoUarLG4P1MmNGEq1WXG3XeVRSLPrSPIAFjHZG0t3MfTOpzZJ7x4wrdbCim8ZvPoPDlkB2NxEyYmKKDBMn25-TRXSzjjPK-1WoydLk2lT8E" 
            alt="Campus Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Nos <span className="font-serif italic text-[#D4AF37]">Campus</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Découvrez nos sites stratégiques au Bénin, alliant excellence académique et infrastructures modernes pour votre réussite.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-20">
        
        {/* Campus Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {campusInfo.map((campus, idx) => (
            <motion.div 
              key={campus.id}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 group hover:shadow-2xl transition-all"
            >
              <div className="h-80 relative overflow-hidden">
                <img src={campus.image} alt={campus.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 right-6 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {campus.type}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{campus.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  {campus.description}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  {campus.stats.map(stat => (
                    <div key={stat.label} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">{stat.label}</p>
                      <p className="text-xl font-bold text-primary dark:text-[#D4AF37]">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <FontAwesomeIcon icon={faLocationDot} className="text-primary w-4" />
                    <span>{idx === 0 ? 'Cotonou, Bénin' : 'Quartier Djassin, Porto-Novo'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <FontAwesomeIcon icon={faPhone} className="text-primary w-4" />
                    <span>+229 20 21 {idx === 0 ? '55 55' : '00 00'}</span>
                  </div>
                </div>
                <button className="mt-10 w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all">
                  Visiter ce campus <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infrastructures Section */}
        <section className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-12 md:p-20 shadow-2xl border border-slate-100 dark:border-slate-700">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary dark:text-[#D4AF37] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">ESCAE Facilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Nos Infrastructures de Pointe</h3>
            <p className="text-slate-500 text-lg">Nous offrons un cadre d'apprentissage d'excellence au cœur de nos campus pour stimuler l'innovation.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {infrastructures.map((infra, idx) => (
              <motion.div 
                key={infra.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className={`size-20 rounded-2xl ${infra.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <FontAwesomeIcon icon={infra.icon} className="text-4xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{infra.title}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{infra.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
