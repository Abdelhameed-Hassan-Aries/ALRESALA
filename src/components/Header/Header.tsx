import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import logo from '../../assets/brand/alresalah-logo.png';
import { COMPANY, whatsappHref } from '../../data/company';
import './Header.scss';

const NAV_LINKS = [
  { id: 'home', href: '#home' },
  { id: 'about', href: '#about' },
  { id: 'projects', href: '#projects' },
  { id: 'services', href: '#services' },
  { id: 'contact', href: '#contact' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const toggleLang = () => {
    const next = i18n.language?.startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(next);
  };

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`header ${scrolled ? 'is-scrolled' : ''}`}
      >
        <div className="container header__inner">
          <a href="#home" className="header__brand" onClick={close} aria-label={t('brand.name')}>
            <img src={logo} alt={t('brand.name')} width={44} height={44} />
            <span className="header__brand-text">
              <span className="header__brand-name">{t('brand.name')}</span>
              <span className="header__brand-tag">{t('brand.tagline')}</span>
            </span>
          </a>

          <nav className="header__nav" aria-label="Primary">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>{t(`nav.${link.id}`)}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className="header__lang"
              onClick={toggleLang}
              aria-label={t('lang.switchAria')}
            >
              <FiGlobe className="header__lang-globe" aria-hidden="true" />
              <span className="header__lang-label" aria-hidden="true">
                {t('lang.switch')}
              </span>
            </button>

            <button
              type="button"
              className="header__menu-btn"
              onClick={() => setOpen((v) => !v)}
              aria-label={t('nav.menu')}
              aria-expanded={open}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="mobile-backdrop"
              className="header__mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              key="mobile-menu"
              className="header__mobile"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={t('nav.menu')}
            >
              <div className="header__mobile-head">
                <a
                  href="#home"
                  className="header__mobile-brand"
                  onClick={close}
                  aria-label={t('brand.name')}
                >
                  <img src={logo} alt="" width={40} height={40} />
                  <span>
                    <span className="header__mobile-brand-name">{t('brand.name')}</span>
                    <span className="header__mobile-brand-tag">{t('brand.tagline')}</span>
                  </span>
                </a>
                <button
                  type="button"
                  className="header__mobile-close"
                  onClick={close}
                  aria-label={t('nav.menu')}
                >
                  <FiX />
                </button>
              </div>

              <nav className="header__mobile-nav" aria-label="Mobile">
                <ul>
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.15, duration: 0.4 }}
                    >
                      <a href={link.href} onClick={close}>
                        <span>{t(`nav.${link.id}`)}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                className="header__mobile-foot"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <button
                  type="button"
                  className="header__mobile-lang"
                  onClick={() => {
                    toggleLang();
                  }}
                  aria-label={t('lang.switchAria')}
                >
                  <FiGlobe aria-hidden="true" />
                  <span className="header__mobile-lang-tag">{t('lang.switch')}</span>
                </button>

                <div className="header__mobile-social" aria-label="Social">
                  <a
                    href={whatsappHref(COMPANY.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={COMPANY.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={COMPANY.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
