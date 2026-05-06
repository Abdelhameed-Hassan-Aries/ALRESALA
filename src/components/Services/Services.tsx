import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FiFileText,
  FiCompass,
  FiBarChart2,
  FiLayers,
  FiPhoneCall,
  FiArrowUpRight,
} from 'react-icons/fi';
import './Services.scss';

const SERVICES = [
  { key: 'trust', Icon: FiFileText },
  { key: 'location', Icon: FiCompass },
  { key: 'value', Icon: FiBarChart2 },
  { key: 'diverse', Icon: FiLayers },
  { key: 'support', Icon: FiPhoneCall },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="services section" id="services">
      <div className="services__decor" aria-hidden="true">
        <span className="services__decor-line services__decor-line--1" />
        <span className="services__decor-line services__decor-line--2" />
      </div>

      <div className="container">
        <motion.div
          className="services__head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="services__head-text">
            <span className="eyebrow">{t('services.eyebrow')}</span>
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
          </div>
        </motion.div>

        <ul className="services__grid">
          {SERVICES.map(({ key, Icon }, i) => (
            <motion.li
              key={key}
              className={`service-card service-card--${i + 1}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-card__top">
                <span className="service-card__kicker">
                  {t(`services.items.${key}.kicker`)}
                </span>
                <span className="service-card__icon" aria-hidden="true">
                  <Icon />
                </span>
              </div>

              <h3 className="service-card__title">
                {t(`services.items.${key}.title`)}
              </h3>
              <p className="service-card__desc">
                {t(`services.items.${key}.desc`)}
              </p>

              <div className="service-card__fact">
                <span className="service-card__fact-bullet" aria-hidden="true">
                  <FiArrowUpRight />
                </span>
                <span>{t(`services.items.${key}.fact`)}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
