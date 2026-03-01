/**
 * Header Component - ESCAE Bénin
 * Design: Luxe Institutionnel Tropical
 * Logo: Toujours visible, fond blanc permanent
 * Mobile: Menu slide-in complet avec logo proéminent
 * Desktop: Top bar + nav blanche permanente avec shadow au scroll
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronDown, faPhone, faEnvelope, faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'À Propos', href: '/about' },
  {
    label: 'Formations',
    href: '/formations',
    submenu: [
      { label: 'Licence (Bac+3)', href: '/formations#licence' },
      { label: 'Master (Bac+5)', href: '/formations#master' },
      { label: 'Doctorat (Bac+8)', href: '/formations#doctorat' },
      { label: 'Formation Continue', href: '/formations#continue' },
    ],
  },
  { label: 'Campus', href: '/campus' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top bar - desktop only */}
      <div className="hidden lg:block bg-[#001F5B] text-white py-2 text-xs">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+22901976268" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="w-[11px] h-[11px]" />
              <span>+229 01 97 62 68 43</span>
            </a>
            <a href="mailto:escae_benin@yahoo.fr" className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="w-[11px] h-[11px]" />
              <span>escae_benin@yahoo.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FontAwesomeIcon icon={faLocationDot} className="w-[11px] h-[11px] text-yellow-400 shrink-0" />
            <span>Abomey-Calavi, Tankpè — Carrefour Parana</span>
            <span className="text-yellow-400 mx-1">•</span>
            <span className="text-yellow-300 font-medium">Agréé par l'État Béninois</span>
          </div>
        </div>
      </div>

      {/* Main navigation — toujours blanc */}
      <motion.header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-lg shadow-blue-900/10 border-b border-gray-200'
            : 'border-b border-gray-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative rounded-xl overflow-hidden bg-blue-50 p-1 flex items-center justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/jRczKiAIPEiushol.png"
                  alt="ESCAE Bénin"
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                />
              </div>
              {/* Brand text */}
              <div className="leading-tight">
                <div
                  className="font-bold text-lg sm:text-xl text-[#001F5B] group-hover:text-[#004AAD] transition-colors duration-200"
                  style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '-0.01em' }}
                >
                  ESCAE Bénin
                </div>
                <div
                  className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-[#C9A227]"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  E Pluribus Unum
                </div>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 xl:px-3.5 py-2 rounded-lg text-sm transition-all duration-200 ${
                      location === link.href || (link.href !== '/' && location.startsWith(link.href))
                        ? 'text-[#004AAD] bg-blue-50 font-semibold'
                        : 'text-[#1a2e5a] font-medium hover:text-[#004AAD] hover:bg-blue-50'
                    }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.label}
                    {link.submenu && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-[13px] h-[13px] transition-transform duration-200 ${activeDropdown === link.href ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.submenu && activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-2xl shadow-blue-900/15 border border-blue-50/80 overflow-hidden"
                      >
                        <div className="py-1">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#004AAD] transition-colors"
                              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
                            >
                              <FontAwesomeIcon icon={faGraduationCap} className="w-[13px] h-[13px] text-[#C9A227] shrink-0" />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ── CTA Button - desktop ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-primary px-5 xl:px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300"
                style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '0.04em' }}
              >
                Nous Rejoindre
              </Link>
            </div>

            {/* ── Mobile Menu Button ── */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-[#004AAD] bg-blue-50 hover:bg-blue-100 transition-all duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FontAwesomeIcon icon={faXmark} className="w-[22px] h-[22px]" />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FontAwesomeIcon icon={faBars} className="w-[22px] h-[22px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu - Full screen overlay ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 top-0 z-40 bg-[#001F5B] lg:hidden flex flex-col"
            >
              {/* Mobile header with big logo */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                  <div className="bg-white rounded-xl p-2 shadow-lg">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663385299961/jRczKiAIPEiushol.png"
                      alt="ESCAE Bénin"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      ESCAE Bénin
                    </div>
                    <div className="text-yellow-300 text-[10px] font-bold tracking-[0.18em] uppercase">
                      E Pluribus Unum
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Fermer"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-[22px] h-[22px]" />
                </button>
              </div>

              {/* Mobile nav links */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                  >
                    {link.submenu ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === link.href ? null : link.href)}
                          className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-base font-semibold transition-colors ${
                            location.startsWith(link.href)
                              ? 'bg-white/15 text-yellow-300'
                              : 'text-white/90 hover:bg-white/10 hover:text-white'
                          }`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {link.label}
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`w-[18px] h-[18px] transition-transform text-yellow-300 ${mobileSubmenu === link.href ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === link.href && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-1 space-y-1 overflow-hidden"
                            >
                              {link.submenu.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="flex items-center gap-2.5 px-4 py-3 text-sm text-blue-200 hover:text-yellow-300 hover:bg-white/10 rounded-xl transition-colors"
                                  style={{ fontFamily: 'Outfit, sans-serif' }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300/70 shrink-0" />
                                  {sub.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-4 py-4 rounded-xl text-base font-semibold transition-colors ${
                          location === link.href
                            ? 'bg-white/15 text-yellow-300'
                            : 'text-white/90 hover:bg-white/10 hover:text-white'
                        }`}
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA + contacts */}
              <div className="px-4 pb-8 pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  className="block btn-gold text-center px-4 py-4 rounded-xl text-base font-bold"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                  onClick={() => setMobileOpen(false)}
                >
                  S'inscrire à l'ESCAE
                </Link>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <a href="tel:+22901976268" className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faPhone} className="w-[14px] h-[14px]" />
                    <span>+229 01 97 62 68 43</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
