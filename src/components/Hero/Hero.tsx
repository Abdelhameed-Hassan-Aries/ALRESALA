import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import heroBg from '../../assets/backgrounds/hero-bg.jpg';
import './Hero.scss';

const STATS = [
  { id: 'experience', value: '18+', labelKey: 'hero.stat1Label' },
  { id: 'projects', value: '20+', labelKey: 'hero.stat2Label' },
  { id: 'clients', value: '500+', labelKey: 'hero.stat3Label' },
];

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ar');
  const Arrow = isRTL ? FiArrowLeft : FiArrowRight;

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img src={heroBg} alt="" loading="eager" fetchPriority="high" />
        <div className="hero__bg-overlay" />
      </div>

      <div className="container hero__container">
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {t('hero.eyebrow')}
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary">
            {t('hero.ctaPrimary')}
            <Arrow aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-outline">
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>

        <motion.dl
          className="hero__stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {STATS.map((s) => (
            <div className="hero__stat" key={s.id}>
              <dt>{s.value}</dt>
              <dd>{t(s.labelKey)}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a className="hero__scroll" href="#about" aria-label={t('hero.scroll')}>
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-text">{t('hero.scroll')}</span>
      </a>
    </section>
  );
}
