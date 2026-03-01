/*
 * Contact Page - ESCAE Bénin
 * Coordonnées réelles du site original
 */

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faClock, faPaperPlane, faCheckCircle, faMapLocationDot, faComments, faHeadset, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'sonner';

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

const contactInfo = [
  {
    icon: faLocationDot,
    title: 'Campus Principal',
    lines: ['Abomey-Calavi, Tankpè', 'Carrefour Parana', 'République du Bénin'],
    color: '#004AAD',
  },
  {
    icon: faLocationDot,
    title: 'Campus Porto-Novo',
    lines: ['Porto-Novo', 'République du Bénin'],
    color: '#004AAD',
  },
  {
    icon: faPhone,
    title: 'Téléphones',
    lines: ['+229 01 97 62 68 43', '+229 01 96 02 59 89'],
    color: '#00A651',
    links: ['tel:+22901976268', 'tel:+22901960259'],
  },
  {
    icon: faEnvelope,
    title: 'Emails',
    lines: ['escae_benin@yahoo.fr', 'info@escaebenin.com'],
    color: '#C9A227',
    links: ['mailto:escae_benin@yahoo.fr', 'mailto:info@escaebenin.com'],
  },
  {
    icon: faClock,
    title: 'Horaires',
    lines: ['Lun – Ven : 8h00 – 18h00', 'Samedi : 8h00 – 14h00'],
    color: '#E31E24',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    formation: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nom || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    toast.success('Votre message a été envoyé avec succès !');
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 escae-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/ZsvFoAhNtRjqQkSq.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5B]/85 to-[#004AAD]/60" />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="gold-line" />
              <span className="text-label text-yellow-300 uppercase tracking-wider">PARLONS DE VOTRE AVENIR</span>
              <div className="gold-line" />
            </div>
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Prêt à Transformer Votre <br className="hidden sm:block" />
              <span className="text-display-italic text-yellow-300">Carrière ?</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Notre équipe de conseillers pédagogiques est à votre écoute pour vous guider vers la formation 
              qui correspond à vos ambitions professionnelles. Contactez-nous dès aujourd'hui !
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+22901976268" className="btn-gold px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                <FontAwesomeIcon icon={faPhone} className="w-[18px] h-[18px]" />
                Appeler maintenant
              </a>
              <a href="#formulaire" className="btn-outline-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                <FontAwesomeIcon icon={faComments} className="w-[18px] h-[18px]" />
                Envoyer un message
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L720 20L1440 60V60H0Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <FadeIn delay={0}>
              <div className="bg-gradient-to-br from-[#004AAD] to-[#1a6fd4] rounded-2xl p-6 text-white hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Appelez-nous</h3>
                <p className="text-blue-100 text-sm mb-3">Du lundi au samedi</p>
                <a href="tel:+22901976268" className="text-yellow-300 font-semibold hover:underline">+229 01 97 62 68 43</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-[#00A651] to-[#059669] rounded-2xl p-6 text-white hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Écrivez-nous</h3>
                <p className="text-green-100 text-sm mb-3">Réponse sous 24h</p>
                <a href="mailto:info@escaebenin.com" className="text-yellow-300 font-semibold hover:underline text-sm">info@escaebenin.com</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-[#C9A227] to-[#F0C040] rounded-2xl p-6 text-white hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faMapLocationDot} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Visitez-nous</h3>
                <p className="text-yellow-100 text-sm mb-3">2 campus au Bénin</p>
                <a href="#maps" className="text-[#001F5B] font-semibold hover:underline">Voir les adresses</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-gradient-to-br from-[#E31E24] to-[#dc2626] rounded-2xl p-6 text-white hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faCalendarDays} className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">Prenez RDV</h3>
                <p className="text-red-100 text-sm mb-3">Visite personnalisée</p>
                <a href="#formulaire" className="text-yellow-300 font-semibold hover:underline">Réserver un créneau</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 bg-[#FAFAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" id="formulaire">
            {/* Contact Info */}
            <FadeIn className="lg:col-span-1">
              <div className="space-y-4">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="gold-line" />
                    <span className="text-label text-[#C9A227] uppercase tracking-wider">NOS COORDONNÉES</span>
                  </div>
                  <h2 className="text-display text-3xl lg:text-4xl text-[#001F5B] leading-tight">
                    Restons <br className="hidden sm:block" />
                    <span className="text-display-italic text-[#004AAD]">Connectés</span>
                  </h2>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet académique.
                  </p>
                </div>

                {contactInfo.map((info) => (
                  <div key={info.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${info.color}15` }}>
                      <FontAwesomeIcon icon={info.icon} className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#001F5B] text-sm mb-2">{info.title}</h4>
                      {info.lines.map((line, i) => (
                        info.links ? (
                          <a key={i} href={info.links[i]} className="text-gray-600 text-sm hover:text-[#004AAD] transition-colors block hover:underline">
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#001F5B] text-sm mb-3">Suivez-nous</h4>
                  <p className="text-gray-600 text-xs mb-4">Rejoignez notre communauté sur les réseaux sociaux</p>
                  <div className="flex gap-3">
                    {[
                      { icon: faFacebookF, href: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
                      { icon: faTwitter, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
                      { icon: faLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
                      { icon: faInstagram, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-[#004AAD] flex items-center justify-center text-white hover:scale-110 transition-all shadow-sm"
                        style={{ ':hover': { backgroundColor: social.color } }}
                        aria-label={social.label}
                      >
                        <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Help Card */}
                <div className="bg-gradient-to-br from-[#004AAD] to-[#001F5B] rounded-2xl p-5 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faHeadset} className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Besoin d'aide ?</h4>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                    Notre service d'orientation est disponible pour vous conseiller gratuitement.
                  </p>
                  <a href="tel:+22901976268" className="inline-flex items-center gap-2 text-yellow-300 font-semibold hover:gap-3 transition-all">
                    Parler à un conseiller
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-16">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} className="w-12 h-12 text-white" />
                    </motion.div>
                    <h3 className="text-display text-3xl lg:text-4xl text-[#001F5B] mb-3">Message Envoyé avec Succès !</h3>
                    <p className="text-gray-600 mb-2 text-lg">
                      Merci <span className="font-semibold text-[#004AAD]">{formData.nom}</span> pour votre confiance.
                    </p>
                    <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                      Notre équipe de conseillers pédagogiques analysera votre demande et vous contactera sous 24 heures à l'adresse <span className="font-medium text-[#004AAD]">{formData.email}</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '', formation: '' }); }}
                        className="btn-primary px-6 py-3 rounded-xl font-semibold"
                      >
                        Envoyer un autre message
                      </button>
                      <a
                        href="tel:+22901976268"
                        className="btn-outline px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2"
                      >
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                        Ou appelez-nous maintenant
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="gold-line" />
                        <span className="text-label text-[#C9A227] uppercase tracking-wider">FORMULAIRE DE CONTACT</span>
                      </div>
                      <h2 className="text-display text-3xl lg:text-4xl text-[#001F5B] leading-tight">
                        Donnez Vie à Votre <br className="hidden sm:block" />
                        <span className="text-display-italic text-[#004AAD]">Projet Académique</span>
                      </h2>
                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les 24 heures pour 
                        discuter de vos objectifs et vous orienter vers la formation idéale.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nom complet <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            placeholder="Ex: Jean-Pierre KOUASSI"
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-4 focus:ring-[#004AAD]/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Adresse email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="votre.email@exemple.com"
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-4 focus:ring-[#004AAD]/10 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Numéro de téléphone</label>
                          <input
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            placeholder="+229 XX XX XX XX XX"
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-4 focus:ring-[#004AAD]/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Formation d'intérêt</label>
                          <select
                            name="formation"
                            value={formData.formation}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-4 focus:ring-[#004AAD]/10 transition-all bg-white"
                          >
                            <option value="">Sélectionner une formation</option>
                            <option value="licence-gestion">Licence en Gestion Commerciale</option>
                            <option value="licence-compta">Licence en Comptabilité & Finance</option>
                            <option value="licence-management">Licence en Management</option>
                            <option value="master-management">Master en Management</option>
                            <option value="master-finance">Master en Finance & Banque</option>
                            <option value="master-marketing">Master en Marketing Digital</option>
                            <option value="doctorat">Doctorat</option>
                            <option value="mba">MBA Executive</option>
                            <option value="continue">Formation Continue</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Sujet de votre demande</label>
                        <input
                          type="text"
                          name="sujet"
                          value={formData.sujet}
                          onChange={handleChange}
                          placeholder="Ex: Demande d'information sur le Master en Finance"
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-4 focus:ring-[#004AAD]/10 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Votre message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Parlez-nous de votre projet, vos objectifs professionnels, vos questions... Plus vous êtes précis, mieux nous pourrons vous aider."
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 text-sm focus:outline-none focus:border-[#004AAD] focus:ring-4 focus:ring-[#004AAD]/10 transition-all resize-none"
                        />
                      </div>

                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                        <div className="flex gap-3">
                          <div className="text-[#004AAD] mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-700 font-medium mb-1">💡 Conseil : Soyez précis !</p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              Plus votre message est détaillé, plus nous pourrons vous proposer des solutions adaptées à vos besoins.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-base disabled:opacity-70 shadow-lg hover:shadow-xl transition-all"
                      >
                        {submitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faPaperPlane} className="w-[18px] h-[18px]" />
                            Envoyer ma demande
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-2">
                        🔒 Vos données sont protégées et ne seront jamais partagées avec des tiers.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white" id="maps">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="gold-line" />
                <span className="text-label text-[#C9A227] uppercase tracking-wider">LOCALISATION</span>
                <div className="gold-line" />
              </div>
              <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-[#001F5B] mb-4">
                Venez Nous <span className="text-display-italic text-[#004AAD]">Rencontrer</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Nous vous accueillons dans nos deux campus modernes et équipés, stratégiquement situés 
                au cœur du Bénin pour faciliter votre accès à l'excellence académique.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Campus Abomey-Calavi',
                address: 'Tankpè, Carrefour Parana, Abomey-Calavi',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2!2d2.35!3d6.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMDAuMCJOIDLCsDIxJzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1',
              },
              {
                title: 'Campus Porto-Novo',
                address: 'Porto-Novo, République du Bénin',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2!2d2.62!3d6.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInMTIuMCJOIDLCsDM3JzEyLjAiRQ!5e0!3m2!1sfr!2sbj!4v1',
              },
            ].map((campus, i) => (
              <FadeIn key={campus.title} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="bg-[#004AAD] px-5 py-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-yellow-300" />
                    <div>
                      <div className="text-white font-semibold text-sm">{campus.title}</div>
                      <div className="text-blue-200 text-xs">{campus.address}</div>
                    </div>
                  </div>
                  <iframe
                    src={campus.mapUrl}
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={campus.title}
                    className="block"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
