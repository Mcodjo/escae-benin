/*
 * Contact Page - ESCAE Bénin (Nouvelle version basée sur maquette)
 * Design: Hero + Contact Cards + Form + Maps + FAQ
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLocationDot, faPhone, faEnvelope, faClock, faShare,
  faPaperPlane, faUser, faIdBadge, faAt, faMobileScreen,
  faQuestion, faChevronDown, faSchool, faBuilding, faBus,
  faParking, faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhXafJGEaBjGyCs42LshZZHeDifK9SO2Jr2djAq4htsqF4F42E9aqrVejL9CQW0YEe1SD2ndCgkS1245eHWUEa2XAC1WO2IYWKtc4jt4ei8av4o9WZElQbzV95I2jFu7O57KbNMy_xs5Q7Xf4DBTkpTyX1iVvt1Xq98dfICwaYPsi4UXWh7jBCdyDEqi8VrgifMQ12Jhm8nKZPkeHKF_tiYGA10R-hi7by9yXGYbQUq3DpEtjQacas2M1HX8_LTri4z5RAEtdJ6ZM')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/80 to-primary/60 dark:from-primary-dark/95 dark:via-primary-dark/90 dark:to-primary-dark/80 z-10" />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
            Contactez-Nous
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">
            Notre équipe est à votre écoute pour répondre à toutes vos questions concernant nos programmes, admissions et vie étudiante.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Column 1: Contact Info Cards (Left) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {/* Card 1: Address */}
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-blue-400">
                    <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Siège Social</h3>
                    <p className="text-text-muted dark:text-slate-400 text-sm leading-relaxed">
                      Campus Abomey-Calavi<br />
                      01 BP 1234, Cotonou<br />
                      République du Bénin
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Téléphone</h3>
                    <p className="text-text-muted dark:text-slate-400 text-sm mb-2">Du Lundi au Vendredi, 8h-18h</p>
                    <a className="text-primary dark:text-blue-400 font-semibold hover:underline" href="tel:+22921000000">+229 21 00 00 00</a>
                  </div>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Email</h3>
                    <p className="text-text-muted dark:text-slate-400 text-sm mb-2">Réponse sous 24h ouvrées</p>
                    <a className="text-primary dark:text-blue-400 font-semibold hover:underline" href="mailto:contact@escae.benin">contact@escae.benin</a>
                  </div>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <FontAwesomeIcon icon={faClock} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Heures d'ouverture</h3>
                    <ul className="text-text-muted dark:text-slate-400 text-sm space-y-1">
                      <li className="flex justify-between gap-4"><span>Lun - Ven:</span> <span className="font-medium text-text-main dark:text-slate-200">08:00 - 18:00</span></li>
                      <li className="flex justify-between gap-4"><span>Samedi:</span> <span className="font-medium text-text-main dark:text-slate-200">09:00 - 13:00</span></li>
                      <li className="flex justify-between gap-4"><span>Dimanche:</span> <span className="text-red-500">Fermé</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card 5: Social */}
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 rounded-lg bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <FontAwesomeIcon icon={faShare} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-main dark:text-white mb-1">Réseaux Sociaux</h3>
                    <p className="text-text-muted dark:text-slate-400 text-sm mb-3">Suivez notre actualité</p>
                    <div className="flex gap-3">
                      <a className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors" href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors" href="#">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                      <a className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors" href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columns 2-3: Contact Form (Right) */}
            <div className="w-full lg:w-2/3">
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12 h-full flex flex-col">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-2">Envoyez-nous un message</h2>
                  <p className="text-text-muted dark:text-slate-400">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
                </div>
                <form className="space-y-6 flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-main dark:text-slate-200" htmlFor="firstName">Prénom</label>
                      <div className="relative">
                        <input 
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white placeholder-slate-400" 
                          id="firstName" 
                          placeholder="Jean" 
                          type="text"
                        />
                        <FontAwesomeIcon icon={faUser} className="absolute left-3 top-4 text-primary/60 dark:text-blue-400/60" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-main dark:text-slate-200" htmlFor="lastName">Nom</label>
                      <div className="relative">
                        <input 
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white placeholder-slate-400" 
                          id="lastName" 
                          placeholder="Dupont" 
                          type="text"
                        />
                        <FontAwesomeIcon icon={faIdBadge} className="absolute left-3 top-4 text-primary/60 dark:text-blue-400/60" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-main dark:text-slate-200" htmlFor="email">Email Académique</label>
                      <div className="relative">
                        <input 
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white placeholder-slate-400" 
                          id="email" 
                          placeholder="jean.dupont@exemple.com" 
                          type="email"
                        />
                        <FontAwesomeIcon icon={faAt} className="absolute left-3 top-4 text-primary/60 dark:text-blue-400/60" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-main dark:text-slate-200" htmlFor="phone">Téléphone</label>
                      <div className="relative">
                        <input 
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white placeholder-slate-400" 
                          id="phone" 
                          placeholder="+229 ..." 
                          type="tel"
                        />
                        <FontAwesomeIcon icon={faMobileScreen} className="absolute left-3 top-4 text-primary/60 dark:text-blue-400/60" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main dark:text-slate-200" htmlFor="subject">Sujet</label>
                    <div className="relative">
                      <select 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white appearance-none" 
                        id="subject"
                      >
                        <option disabled value="">Sélectionnez un sujet</option>
                        <option value="admission">Admissions & Inscriptions</option>
                        <option value="academic">Affaires Académiques</option>
                        <option value="partnership">Partenariats</option>
                        <option value="other">Autre demande</option>
                      </select>
                      <FontAwesomeIcon icon={faQuestion} className="absolute left-3 top-4 text-primary/60 dark:text-blue-400/60" />
                      <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-main dark:text-slate-200" htmlFor="message">Message</label>
                    <div className="relative">
                      <textarea 
                        className="w-full p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white placeholder-slate-400 resize-none" 
                        id="message" 
                        placeholder="Comment pouvons-nous vous aider ?" 
                        rows={5}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      className="group w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg" 
                      type="button"
                    >
                      Envoyer le message
                      <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">Nos Campus</h2>
            <p className="text-text-muted dark:text-slate-400 max-w-2xl mx-auto">Visitez nos installations modernes réparties sur deux sites stratégiques au Bénin pour une expérience éducative optimale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map 1 */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col h-full">
              <div className="p-4 bg-primary text-white flex items-center justify-between">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faSchool} className="text-secondary" />
                  Campus Abomey-Calavi
                </h3>
                <span className="text-sm opacity-90 font-light">Siège Principal</span>
              </div>
              <div className="relative h-[350px] bg-slate-200 w-full group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIu3ei8YfMw9gOr2qXV4Q9BSgGpBKIulc5vz01de-B9S_g76vZdcX6rVyPs-Llk3cJPDeoaMNIJIUYxpmOQFBuo3jXioILMshBCCQYcq-lTsBo0sR-8rD_8Hhkme6_af_OmJhwvMxIp8bHYpp9365jHU92ElzecNffgYE6rVP_FvdQB3JGu3jIXrvjRxBcOlqiOS9Ix6hIy6pnhjKdUSSl1F_EHgrAHUvR3JmaqwS8um5DOlicKXjEykwEyIJ9lnphiOc0pILRPPA')` }}
                />
                {/* Overlay Pin */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative -mt-8 animate-bounce">
                    <FontAwesomeIcon icon={faLocationDot} className="text-secondary text-5xl drop-shadow-lg" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full blur-[2px]" />
                  </div>
                </div>
                {/* Button overlay */}
                <div className="absolute bottom-4 right-4">
                  <a className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary text-sm font-bold rounded shadow-md hover:bg-slate-50 transition-colors" href="#">
                    Voir sur Google Maps
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text-muted dark:text-slate-400 text-sm mb-4">
                  Situé au cœur de la ville universitaire, notre campus principal abrite l'administration centrale, la grande bibliothèque et les facultés de gestion.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-slate-200">
                  <FontAwesomeIcon icon={faBus} className="text-primary dark:text-blue-400" />
                  Accessible via les lignes de bus 12 et 45
                </div>
              </div>
            </div>

            {/* Map 2 */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col h-full">
              <div className="p-4 bg-primary text-white flex items-center justify-between">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FontAwesomeIcon icon={faBuilding} className="text-secondary" />
                  Campus Porto-Novo
                </h3>
                <span className="text-sm opacity-90 font-light">Annexe</span>
              </div>
              <div className="relative h-[350px] bg-slate-200 w-full group overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnvriVF2BUk6X6I5DphWUaR4szUnLQC9cOdooQdHbbVjqVWSxEwlZsit9C3RyebG6qImLViOPx_3M3lyQGFRsqVntz9yXCTiWsPbxr6XB4xTbmciROcT7UutAQ6uKgzQQerDo-Hp8AWObyzfz8cDKr3Cftqe8eNBUvzKSYZbn4KVxlty5NCDfz_BPPACRQ3yhJS4MPlt-mlyS416jpHbkUIua4anUsFJno5LBwixKCnYeiKqV_cTM3BGBFn4FL6Oxd-J2BrikS_2E')` }}
                />
                {/* Overlay Pin */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative -mt-8 animate-bounce" style={{ animationDelay: '0.1s' }}>
                    <FontAwesomeIcon icon={faLocationDot} className="text-secondary text-5xl drop-shadow-lg" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/30 rounded-full blur-[2px]" />
                  </div>
                </div>
                {/* Button overlay */}
                <div className="absolute bottom-4 right-4">
                  <a className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary text-sm font-bold rounded shadow-md hover:bg-slate-50 transition-colors" href="#">
                    Voir sur Google Maps
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text-muted dark:text-slate-400 text-sm mb-4">
                  Notre campus de Porto-Novo est dédié aux formations professionnelles continues et dispose de laboratoires technologiques de pointe.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-text-main dark:text-slate-200">
                  <FontAwesomeIcon icon={faParking} className="text-primary dark:text-blue-400" />
                  Parking étudiant disponible
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-text-main dark:text-white">Questions Fréquentes</h3>
              <p className="text-text-muted dark:text-slate-400">Trouvez des réponses rapides avant de nous contacter.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="px-5 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm" href="#">
                Processus d'admission
              </a>
              <a className="px-5 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm" href="#">
                Frais de scolarité
              </a>
              <a className="px-5 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors shadow-sm" href="#">
                Calendrier universitaire
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
