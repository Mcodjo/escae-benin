/*
 * Footer Component - ESCAE Bénin
 * Design: Fond bleu nuit profond, colonnes organisées
 * Coordonnées réelles du site original
 */

import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const footerLinks = {
  formations: [
    { label: 'Licence en Gestion', href: '/formations#licence' },
    { label: 'Master en Management', href: '/formations#master' },
    { label: 'Doctorat en Sciences', href: '/formations#doctorat' },
    { label: 'MBA Executive', href: '/formations#mba' },
    { label: 'Formations Continues', href: '/formations#continue' },
  ],
  liens: [
    { label: 'À Propos', href: '/about' },
    { label: 'Campus', href: '/campus' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Alumni', href: '/about#alumni' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#001F5B] text-white">
      {/* Main Footer */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/jRczKiAIPEiushol.png"
                alt="ESCAE Bénin"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-bold text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  ESCAE Bénin
                </div>
                <div className="text-xs text-yellow-300 tracking-widest uppercase">
                  E Pluribus Unum
                </div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              École Supérieure de Commerce et d'Administration des Entreprises du Bénin. 
              Agréée par l'État Béninois depuis 2012.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h4 className="font-semibold text-white mb-5 flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4 text-[#C9A227]" />
              Nos Formations
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.formations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-[#C9A227] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-white mb-5">Liens Rapides</h4>
            <ul className="space-y-2.5">
              {footerLinks.liens.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-[#C9A227] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5">Nous Contacter</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                <p className="text-blue-200 text-sm leading-relaxed">
                  Abomey-Calavi, Tankpè,<br />
                  Carrefour Parana,<br />
                  République du Bénin
                </p>
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <a href="tel:+22901976268" className="text-blue-200 hover:text-[#C9A227] transition-colors block">
                    +229 01 97 62 68 43
                  </a>
                  <a href="tel:+22901960259" className="text-blue-200 hover:text-[#C9A227] transition-colors block">
                    +229 01 96 02 59 89
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-[#C9A227] mt-0.5 shrink-0" />
                <div className="text-sm">
                  <a href="mailto:escae_benin@yahoo.fr" className="text-blue-200 hover:text-[#C9A227] transition-colors block">
                    escae_benin@yahoo.fr
                  </a>
                  <a href="mailto:info@escaebenin.com" className="text-blue-200 hover:text-[#C9A227] transition-colors block">
                    info@escaebenin.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-blue-200 mb-3">Restez informé de nos actualités</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-blue-300 focus:outline-none focus:border-[#C9A227] transition-colors"
                />
                <button className="btn-gold px-4 py-2 rounded-lg text-sm font-semibold shrink-0">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-300 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} ESCAE Bénin. Tous droits réservés. Agréé par l'État Béninois.
          </p>
          <div className="flex items-center gap-4 text-xs text-blue-300">
            <a href="#" className="hover:text-[#C9A227] transition-colors">Mentions légales</a>
            <span>•</span>
            <a href="#" className="hover:text-[#C9A227] transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
