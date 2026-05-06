import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FiCompass,
  FiDollarSign,
  FiHeart,
  FiMapPin,
} from 'react-icons/fi';
import './About.scss';

const PILLARS = [
  { id: 'pillar1', Icon: FiCompass },
  { id: 'pillar2', Icon: FiDollarSign },
  { id: 'pillar3', Icon: FiHeart },
];

const TIMELINE = ['2008', '2014', '2020', '2026'] as const;

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about section" id="about">
      <div className="about__decor" aria-hidden="true">
        <span className="about__decor-glow about__decor-glow--1" />
        <span className="about__decor-glow about__decor-glow--2" />
        <span className="about__decor-grid" />
      </div>

      <div className="container about__container">
        {/* Header */}
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

        {/* Editorial split: lead copy + philosophy quote card */}
        <div className="about__editorial">
          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="about__lead">{t('about.p1')}</p>
            <p className="about__body-text">{t('about.p2')}</p>

            <a href="#contact" className="about__office">
              <span className="about__office-icon" aria-hidden="true">
                <FiMapPin />
              </span>
              <span className="about__office-text">
                <span className="about__office-label">{t('contact.info.addressLabel')}</span>
                <span className="about__office-value">{t('contact.info.address')}</span>
              </span>
            </a>
          </motion.div>

          <motion.figure
            className="about__quote"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about__quote-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="about__quote-text">
              {t('about.philosophy')}
            </blockquote>
            <figcaption className="about__quote-author">
              <span className="about__quote-rule" aria-hidden="true" />
              {t('about.philosophyAuthor')}
            </figcaption>
          </motion.figure>
        </div>

        {/* Pillars */}
        <div className="about__pillars-section">
          <motion.h3
            className="about__pillars-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            {t('about.pillarsHeading')}
          </motion.h3>

          <ul className="about__pillars">
            {PILLARS.map((p, i) => (
              <motion.li
                key={p.id}
                className="about__pillar"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="about__pillar-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="about__pillar-icon" aria-hidden="true">
                  <p.Icon />
                </span>
                <h4>{t(`about.${p.id}Title`)}</h4>
                <p>{t(`about.${p.id}Desc`)}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <motion.div
          className="about__timeline-section"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="about__timeline-heading">{t('about.timelineHeading')}</h3>
          <ol className="about__timeline">
            {TIMELINE.map((year, i) => (
              <li
                key={year}
                className="about__timeline-item"
                style={{ '--ti': i } as React.CSSProperties}
              >
                <span className="about__timeline-rail" aria-hidden="true">
                  <span className="about__timeline-dot" />
                </span>
                <span className="about__timeline-year">{year}</span>
                <h4 className="about__timeline-title">
                  {t(`about.timeline.${year}Title`)}
                </h4>
                <p className="about__timeline-desc">
                  {t(`about.timeline.${year}Desc`)}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Stat ribbon */}
        <motion.div
          className="about__ribbon"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          {(['years', 'projects', 'clients', 'office'] as const).map((k) => (
            <div className="about__ribbon-item" key={k}>
              <strong>{t(`about.stats.${k}Value`)}</strong>
              <span>{t(`about.stats.${k}Label`)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
