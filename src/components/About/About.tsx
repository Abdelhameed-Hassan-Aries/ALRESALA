import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiMapPin, FiTrendingUp, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { COMPANY } from '../../data/company';
import './About.scss';

const FEATURES = [
  { id: 'feature1', icon: FiMapPin },
  { id: 'feature2', icon: FiTrendingUp },
  { id: 'feature3', icon: FiTarget },
];

const VALUES = ['trust', 'quality', 'delivery', 'transparency'];

export default function About() {
  const { t } = useTranslation();
  const yearsExperience = new Date().getFullYear() - COMPANY.founded;

  return (
    <section className="about section" id="about">
      <div className="about__decor" aria-hidden="true">
        <span className="about__decor-glow about__decor-glow--1" />
        <span className="about__decor-glow about__decor-glow--2" />
        <span className="about__decor-grid" />
      </div>

      <div className="container about__container">
        <motion.div
          className="about__head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2 className="section-title about__title">{t('about.title')}</h2>
        </motion.div>

        <div className="about__body">
          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__prose">
              <p className="about__lead">{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>

            <ul className="about__values" aria-label={t('about.eyebrow')}>
              {VALUES.map((v) => (
                <li key={v}>
                  <FiCheckCircle aria-hidden="true" />
                  <span>{t(`about.values.${v}`)}</span>
                </li>
              ))}
            </ul>

            <div className="about__signature">
              <div className="about__signature-stat">
                <strong>{yearsExperience}+</strong>
                <span>{t('hero.stat1Label')}</span>
              </div>
              <div className="about__signature-divider" aria-hidden="true" />
              <div className="about__signature-stat">
                <strong>20+</strong>
                <span>{t('about.miniStat1')}</span>
              </div>
              <div className="about__signature-divider" aria-hidden="true" />
              <div className="about__signature-stat">
                <strong>500+</strong>
                <span>{t('about.miniStat2')}</span>
              </div>
            </div>
          </motion.div>

          <ul className="about__features">
            {FEATURES.map((f, i) => (
              <motion.li
                key={f.id}
                className="about__feature"
                style={{ '--feature-i': i } as React.CSSProperties}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="about__feature-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="about__feature-icon" aria-hidden="true">
                  <f.icon />
                </span>
                <h3>{t(`about.${f.id}Title`)}</h3>
                <p>{t(`about.${f.id}Desc`)}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
