import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiArrowLeft,
  FiClock,
  FiMessageCircle,
  FiCheckCircle,
} from 'react-icons/fi';
import { COMPANY, whatsappHref } from '../../data/company';
import './CTA.scss';

export default function CTA() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ar');
  const Arrow = isRTL ? FiArrowLeft : FiArrowRight;
  const marqueeItems = (t('cta.marquee') as string)
    .split('·')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta__panel"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta__bg" aria-hidden="true">
            <span className="cta__bg-grid" />
            <span className="cta__bg-glow cta__bg-glow--1" />
            <span className="cta__bg-glow cta__bg-glow--2" />
          </div>

          <div className="cta__inner">
            <div className="cta__lead">
              <span className="cta__eyebrow">
                <span className="cta__eyebrow-dot" aria-hidden="true">
                  <FiClock />
                </span>
                {t('cta.eyebrow')}
              </span>
              <h2 className="cta__title">{t('cta.title')}</h2>
              <p className="cta__subtitle">{t('cta.subtitle')}</p>

              <div className="cta__actions">
                <a
                  href="#contact"
                  className="btn btn-primary cta__btn-primary"
                >
                  {t('cta.button')}
                  <Arrow aria-hidden="true" />
                </a>
                <a
                  href={whatsappHref(COMPANY.whatsapp, t('cta.title') as string)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta__btn-whatsapp"
                >
                  <FiMessageCircle aria-hidden="true" />
                  {t('cta.buttonSecondary')}
                </a>
              </div>

              <ul className="cta__trust">
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>{t('cta.trust1')}</span>
                </li>
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>{t('cta.trust2')}</span>
                </li>
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>{t('cta.trust3')}</span>
                </li>
              </ul>
            </div>
          </div>

          {marqueeItems.length > 0 && (
            <div className="cta__marquee" aria-hidden="true">
              <div className="cta__marquee-track">
                {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
                  <span className="cta__marquee-item" key={idx}>
                    <span className="cta__marquee-dot" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
