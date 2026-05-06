import { useTranslation } from 'react-i18next';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import logo from '../../assets/brand/alresalah-logo.png';
import { COMPANY, formatPhone, phoneHref, whatsappHref } from '../../data/company';
import './Footer.scss';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__decor" aria-hidden="true" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__brand-link" aria-label={t('brand.name')}>
              <img src={logo} alt={t('brand.name')} width={56} height={56} />
              <div>
                <span className="footer__brand-name">{t('brand.name')}</span>
                <span className="footer__brand-tag">{t('brand.tagline')}</span>
              </div>
            </a>
            <p className="footer__about">{t('footer.tagline')}</p>
            <div className="footer__socials">
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
              <a
                href={whatsappHref(COMPANY.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer__col footer__col--contact">
            <h4>{t('footer.contactUs')}</h4>
            <ul className="footer__contacts">
              {COMPANY.phones.map((p) => (
                <li key={p}>
                  <FiPhone aria-hidden="true" />
                  <a href={phoneHref(p)} dir="ltr">{formatPhone(p)}</a>
                </li>
              ))}
              <li>
                <FiMail aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} dir="ltr">{COMPANY.email}</a>
              </li>
              <li>
                <FiMapPin aria-hidden="true" />
                <a
                  href={COMPANY.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.info.address')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <p>{t('footer.rights', { year })}</p>
        </div>
      </div>
    </footer>
  );
}
