import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiMapPin, FiCheckCircle, FiClock, FiX } from 'react-icons/fi';
import { PROJECTS, type Project } from '../../data/projects';
import { COMPANY, whatsappHref } from '../../data/company';
import './Projects.scss';

export default function Projects() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ar');
  const Arrow = isRTL ? FiArrowLeft : FiArrowRight;
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    document.body.classList.toggle('project-modal-open', Boolean(active));

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('project-modal-open');
    };
  }, [active]);

  return (
    <section className="projects section section-dark" id="projects">
      <div className="projects__decor" aria-hidden="true" />

      <div className="container">
        <motion.div
          className="projects__head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="projects__head-text">
            <span className="eyebrow">{t('projects.eyebrow')}</span>
            <h2 className="section-title">{t('projects.title')}</h2>
            <p className="section-subtitle">{t('projects.subtitle')}</p>
          </div>
        </motion.div>

        <ul className="projects__grid">
          {PROJECTS.map((project, i) => {
            const itemKey = `projects.items.${project.i18nKey}`;
            const status = project.status === 'available' ? 'available' : 'comingSoon';

            return (
              <motion.li
                key={project.id}
                className={`project-card project-card--${project.status}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                style={{ '--accent': project.accent } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="project-card__media"
                  onClick={() => setActive(project)}
                  aria-label={t(`${itemKey}.name`)}
                >
                  <img src={project.image} alt={t(`${itemKey}.name`)} loading="lazy" />
                  <span className={`project-card__badge project-card__badge--${project.status}`}>
                    {project.status === 'available' ? <FiCheckCircle /> : <FiClock />}
                    {t(`projects.${status}`)}
                  </span>
                </button>

                <div className="project-card__body">
                  <span className="project-card__category">{t(`${itemKey}.category`)}</span>
                  <h3 className="project-card__name">{t(`${itemKey}.name`)}</h3>
                  <p className="project-card__tagline">{t(`${itemKey}.tagline`)}</p>

                  <div className="project-card__meta">
                    <FiMapPin aria-hidden="true" />
                    <span>{t(`${itemKey}.location`)}</span>
                  </div>

                  <button
                    type="button"
                    className="project-card__cta"
                    onClick={() => setActive(project)}
                  >
                    {t('projects.viewDetails')}
                    <Arrow aria-hidden="true" />
                  </button>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith('ar');
  const Arrow = isRTL ? FiArrowLeft : FiArrowRight;
  const itemKey = `projects.items.${project.i18nKey}`;

  const highlights = (
    (i18n.getResource(i18n.language, 'translation', `${itemKey}.highlights`) as string[] | undefined) ??
    []
  );

  const inquiryMessage = `${t(`${itemKey}.name`)} — ${t('contact.eyebrow')}`;

  return createPortal(
    <motion.div
      className="project-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t(`${itemKey}.name`)}
    >
      <motion.div
        className="project-modal__panel"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX />
        </button>

        <div className="project-modal__media">
          <img src={project.image} alt={t(`${itemKey}.name`)} />
        </div>

        <div className="project-modal__body">
          <span className="project-modal__category">{t(`${itemKey}.category`)}</span>
          <h3>{t(`${itemKey}.name`)}</h3>
          <p className="project-modal__tagline">{t(`${itemKey}.tagline`)}</p>

          <div className="project-modal__meta">
            <FiMapPin aria-hidden="true" />
            <span>{t(`${itemKey}.location`)}</span>
          </div>

          <p className="project-modal__desc">{t(`${itemKey}.description`)}</p>

          {highlights.length > 0 && (
            <ul className="project-modal__highlights">
              {highlights.map((h, idx) => (
                <li key={idx}>
                  <FiCheckCircle aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="project-modal__cta">
            <a
              href={whatsappHref(COMPANY.whatsapp, inquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('cta.button')}
              <Arrow aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-outline" onClick={onClose}>
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
