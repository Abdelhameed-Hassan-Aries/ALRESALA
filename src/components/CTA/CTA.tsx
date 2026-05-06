import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { COMPANY, whatsappHref } from '../../data/company';
import './CTA.scss';

export default function CTA() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ar');
  const Arrow = isRTL ? FiArrowLeft : FiArrowRight;

  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta__panel"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta__content">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
          </div>
          <div className="cta__action">
            <a
              href={whatsappHref(COMPANY.whatsapp, t('cta.title'))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('cta.button')}
              <Arrow aria-hidden="true" />
            </a>
          </div>
          <span className="cta__deco" aria-hidden="true" />
          <span className="cta__deco cta__deco--2" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
