import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiShield, FiMapPin, FiTrendingUp, FiGrid, FiHeadphones } from 'react-icons/fi';
import './Services.scss';

const SERVICES = [
  { key: 'trust', Icon: FiShield },
  { key: 'location', Icon: FiMapPin },
  { key: 'value', Icon: FiTrendingUp },
  { key: 'diverse', Icon: FiGrid },
  { key: 'support', Icon: FiHeadphones },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          className="services__head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{t('services.eyebrow')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </motion.div>

        <ul className="services__grid">
          {SERVICES.map(({ key, Icon }, i) => (
            <motion.li
              key={key}
              className="service-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <span className="service-card__icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{t(`services.items.${key}.title`)}</h3>
              <p>{t(`services.items.${key}.desc`)}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
